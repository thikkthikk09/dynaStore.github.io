require("dotenv").config();

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const express = require("express");
const QRCode = require("qrcode");
const { BakongKHQR, MerchantInfo, khqrData } = require("bakong-khqr");

const app = express();
const payments = new Map();
const port = Number(process.env.PORT || 3000);
const databaseDirectory = path.join(__dirname, "data");
const databasePath = path.join(databaseDirectory, "database.json");
const defaultRecommendations = [
  {
    id: "default-dara",
    name: "Dara Player",
    game: "GTA 5 MODE",
    text: "ទិញ Coins លឿន ហើយអាចយកទៅទិញហ្គេមបានងាយ។ UI ស្រួលប្រើណាស់។",
    avatar: "",
    createdAt: 0
  },
  {
    id: "default-sokha",
    name: "Sokha Gamer",
    game: "Realmforge Odyssey",
    text: "មានប្រូម៉ូសិនល្អៗ ហើយការទូទាត់តាម KHQR ងាយស្រួលសម្រាប់ខ្ញុំ។",
    avatar: "",
    createdAt: 0
  },
  {
    id: "default-vireak",
    name: "Vireak Pro",
    game: "Shadow Ops",
    text: "ហ្គេមមានជម្រើសច្រើន តម្លៃ Coins មើលងាយយល់ ហើយទិញបានភ្លាមៗ។",
    avatar: "",
    createdAt: 0
  }
];

app.use(express.json());

function ensureDatabase() {
  if (!fs.existsSync(databaseDirectory)) {
    fs.mkdirSync(databaseDirectory, { recursive: true });
  }

  if (!fs.existsSync(databasePath)) {
    fs.writeFileSync(databasePath, JSON.stringify({ recommendations: defaultRecommendations }, null, 2));
  }
}

function readDatabase() {
  ensureDatabase();

  try {
    return JSON.parse(fs.readFileSync(databasePath, "utf8"));
  } catch {
    return { recommendations: defaultRecommendations };
  }
}

function writeDatabase(database) {
  ensureDatabase();
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
}

function cleanText(value, fallback = "") {
  return String(value || fallback).trim().slice(0, 400);
}

app.get("/api/config", (req, res) => {
  res.json({
    googleClientId: process.env.GOOGLE_CLIENT_ID || ""
  });
});

app.get("/api/recommendations", (req, res) => {
  const database = readDatabase();

  res.json({
    recommendations: [...(database.recommendations || [])].sort((a, b) => b.createdAt - a.createdAt)
  });
});

app.post("/api/recommendations", (req, res) => {
  const name = cleanText(req.body.name, "Player").slice(0, 40);
  const game = cleanText(req.body.game).slice(0, 80);
  const text = cleanText(req.body.text);
  const avatar = cleanText(req.body.avatar).slice(0, 500);

  if (!game || !text) {
    res.status(400).json({ message: "Game and recommendation text are required." });
    return;
  }

  const recommendation = {
    id: `REC-${Date.now()}-${crypto.randomUUID()}`,
    name,
    game,
    text,
    avatar,
    createdAt: Date.now()
  };
  const database = readDatabase();

  database.recommendations = [recommendation, ...(database.recommendations || [])].slice(0, 100);
  writeDatabase(database);
  res.status(201).json({ recommendation });
});

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}. Copy .env.example to .env and fill it in.`);
  }

  return value;
}

function normalizeAmount(value) {
  const amount = Number(value);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Invalid payment amount.");
  }

  return Number(amount.toFixed(2));
}

function getKhqrPayload(response) {
  const qr =
    response?.data?.qr ||
    response?.data?.khqr ||
    response?.qr ||
    response?.khqr;

  return {
    qr,
    md5: response?.data?.md5 || response?.md5 || crypto.createHash("md5").update(qr || "").digest("hex")
  };
}

function createMerchantKhqr({ amount, items }) {
  const orderId = `DYNA-${Date.now()}`;
  const optionalData = {
    currency: khqrData.currency.usd,
    amount,
    billNumber: orderId,
    mobileNumber: process.env.BAKONG_MERCHANT_PHONE || "",
    storeLabel: process.env.BAKONG_MERCHANT_NAME || "Dyna Store",
    terminalLabel: "WEB",
    expirationTimestamp: Date.now() + 10 * 60 * 1000,
    merchantCategoryCode: "5816"
  };
  const merchantInfo = new MerchantInfo(
    getRequiredEnv("BAKONG_MERCHANT_ID"),
    process.env.BAKONG_MERCHANT_NAME || "Dyna Store",
    process.env.BAKONG_MERCHANT_CITY || "Phnom Penh",
    getRequiredEnv("BAKONG_MERCHANT_ACCOUNT_NUMBER"),
    getRequiredEnv("BAKONG_ACQUIRING_BANK"),
    optionalData
  );
  const khqr = new BakongKHQR();
  const payload = getKhqrPayload(khqr.generateMerchant(merchantInfo));

  if (!payload.qr) {
    throw new Error("Bakong KHQR generation failed.");
  }

  payments.set(orderId, {
    orderId,
    amount,
    items,
    md5: payload.md5,
    status: "pending",
    createdAt: Date.now()
  });

  return {
    orderId,
    khqr: payload.qr,
    md5: payload.md5
  };
}

async function checkBakongPayment(md5) {
  const token = process.env.BAKONG_API_TOKEN;
  const url = process.env.BAKONG_CHECK_PAYMENT_URL;

  if (!token || !url || !md5) {
    return { paid: false, configured: false };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ md5 })
  });

  if (!response.ok) {
    throw new Error(`Bakong payment check failed with ${response.status}.`);
  }

  const data = await response.json();
  const status = String(data?.responseCode || data?.status || data?.data?.status || "").toLowerCase();

  return {
    paid:
      status === "success" ||
      status === "paid" ||
      status === "completed" ||
      data?.data?.hash ||
      data?.data?.transactionHash,
    configured: true,
    raw: data
  };
}

app.post("/api/bakong/create-payment", async (req, res) => {
  try {
    const amount = normalizeAmount(req.body.amount);
    const items = Array.isArray(req.body.items) ? req.body.items : [];
    const payment = createMerchantKhqr({ amount, items });
    const qrImage = await QRCode.toDataURL(payment.khqr, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 320
    });

    res.json({
      orderId: payment.orderId,
      md5: payment.md5,
      khqr: payment.khqr,
      qrImage
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/bakong/payments/:orderId", async (req, res) => {
  try {
    const payment = payments.get(req.params.orderId);

    if (!payment) {
      res.status(404).json({ message: "Payment not found." });
      return;
    }

    if (payment.status !== "paid") {
      const bakongStatus = await checkBakongPayment(payment.md5);

      if (bakongStatus.paid) {
        payment.status = "paid";
        payment.paidAt = Date.now();
        payment.raw = bakongStatus.raw;
      }

      payment.configured = bakongStatus.configured;
    }

    res.json({
      orderId: payment.orderId,
      amount: payment.amount,
      status: payment.status,
      configured: payment.configured !== false
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Dyna Store running at http://localhost:${port}`);
});
