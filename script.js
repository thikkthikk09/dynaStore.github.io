const games = [
  {
    title: "GTA 5 MODE",
    genre: "ប្រណាំង",
    description: "ហ្គេមប្រណាំងតាមផ្លូវបែប Arcade ជាមួយក្រុមអនឡាញ និងផ្លូវក្នុងទីក្រុងពេលយប់។",
    price: 0.01,
    coinPrice: 100,
    badge: "-20%",
    colors: ["#8b5cf6", "#22d3ee"],
    image: "https://cdn.discordapp.com/attachments/1265789329134059541/1498800653600817245/gta5-featured.jpg?ex=69f27a62&is=69f128e2&hm=4c9717b0a50a63538c64dee81bf89003dad534fa6d4a5b2501f78f95197d539b&"
  },
  {
    title: "Realmforge Odyssey",
    genre: "RPG",
    description: "ស្វែងរកពិភព Fantasy បង្កើតអាវុធកម្រិតខ្ពស់ និងប្រយុទ្ធជាមួយមេបិសាចបុរាណ។",
    price: 49.99,
    coinPrice: 5000,
    badge: "ថ្មី",
    colors: ["#16a34a", "#84cc16"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Shadow Ops: Eclipse",
    genre: "សកម្មភាព",
    description: "បេសកកម្មយុទ្ធសាស្ត្រ ក្រុមប្រកួតប្រជែង និងការប្រយុទ្ធ Single-player បែបភាពយន្ត។",
    price: 59.99,
    coinPrice: 6000,
    badge: "កំពុងពេញនិយម",
    colors: ["#ef4444", "#f97316"],
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Galaxy Traders",
    genre: "យុទ្ធសាស្ត្រ",
    description: "បង្កើតកងយាន គ្រប់គ្រងផ្លូវពាណិជ្ជកម្ម និងគ្រប់គ្រងពិភពផ្កាយ។",
    price: 34.99,
    coinPrice: 3500,
    badge: "-35%",
    colors: ["#2563eb", "#06b6d4"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Dungeon Dashers",
    genre: "លេងជាក្រុម",
    description: "រត់បេសកកម្មក្នុង Dungeon យ៉ាងលឿន សម្រាប់អ្នកលេងអនឡាញរហូតដល់ 4 នាក់។",
    price: 24.99,
    coinPrice: 2500,
    badge: "ក្រុម",
    colors: ["#a855f7", "#ec4899"],
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Pixel Farm Tycoon",
    genre: "ស៊ីមុយឡេសិន",
    description: "ដាំដំណាំ រៀបចំផលិតកម្មស្វ័យប្រវត្តិ និងតុបតែងកសិដ្ឋានដ៏កក់ក្តៅរបស់អ្នក។",
    price: 19.99,
    coinPrice: 2000,
    badge: "សាមញ្ញ",
    colors: ["#eab308", "#22c55e"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Mech Arena Prime",
    genre: "បាញ់ប្រហារ",
    description: "កែប្រែ Mech ធុនធ្ងន់ ហើយប្រយុទ្ធក្នុង Arena ដែលអាចបំផ្លាញបាន។",
    price: 44.99,
    coinPrice: 4500,
    badge: "-15%",
    colors: ["#64748b", "#38bdf8"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Mystic Card Clash",
    genre: "កាត",
    description: "ប្រមូលវេទមន្ត បង្កើត Deck ឆ្លាតវៃ និងប្រកួតឡើងចំណាត់ថ្នាក់តាមរដូវកាល។",
    price: 14.99,
    coinPrice: 1500,
    badge: "តម្លៃល្អ",
    colors: ["#7c3aed", "#f59e0b"],
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=900&q=80"
  }
];

const coinPackages = [
  {
    name: "Starter Pack",
    coins: 500,
    price: 0.01,
    bonus: "សាកល្បងទិញហ្គេមតម្លៃតូច"
  },
  {
    name: "Gamer Pack",
    coins: 2500,
    price: 4.99,
    bonus: "+250 Bonus Coins"
  },
  {
    name: "Pro Pack",
    coins: 6000,
    price: 9.99,
    bonus: "+900 Bonus Coins"
  }
];

const cart = [];
let purchasedGames = [];
let selectedCoinPackage = null;
const gameGrid = document.querySelector("#gameGrid");
const coinGrid = document.querySelector("#coinGrid");
const recommendGrid = document.querySelector("#recommendGrid");
const recommendToggle = document.querySelector("#recommendToggle");
const recommendForm = document.querySelector("#recommendForm");
const recommendName = document.querySelector("#recommendName");
const recommendGame = document.querySelector("#recommendGame");
const recommendText = document.querySelector("#recommendText");
const googleConnectButton = document.querySelector("#googleConnectButton");
const googleProfile = document.querySelector("#googleProfile");
const googleAvatar = document.querySelector("#googleAvatar");
const googleName = document.querySelector("#googleName");
const googleEmail = document.querySelector("#googleEmail");
const settingsButton = document.querySelector("#settingsButton");
const settingsModal = document.querySelector("#settingsModal");
const closeSettings = document.querySelector("#closeSettings");
const profileSettingsForm = document.querySelector("#profileSettingsForm");
const profileNameInput = document.querySelector("#profileNameInput");
const profileAvatarInput = document.querySelector("#profileAvatarInput");
const resetProfileButton = document.querySelector("#resetProfileButton");
const cartButton = document.querySelector(".cart-button");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const cartEmpty = document.querySelector("#cartEmpty");
const walletBalance = document.querySelector("#walletBalance");
const playerCoins = document.querySelector("#playerCoins");
const cartMessage = document.querySelector("#cartMessage");
const checkoutButton = document.querySelector("#checkoutButton");
const cancelBuyButton = document.querySelector("#cancelBuyButton");
const downloadPurchasedButton = document.querySelector("#downloadPurchasedButton");
const paymentModal = document.querySelector("#paymentModal");
const closePayment = document.querySelector("#closePayment");
const paymentTotal = document.querySelector("#paymentTotal");
const abaPayButton = document.querySelector('[data-payment="aba"]');
const abaQrPanel = document.querySelector("#abaQrPanel");
const paymentStatus = document.querySelector("#paymentStatus");
const topupStatus = document.querySelector("#topupStatus");
const md5Box = document.querySelector("#md5Box");
const khqrMd5 = document.querySelector("#khqrMd5");
let walletAmount = 0;
let activePayment = null;
let paymentPollTimer = null;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

recommendForm.hidden = true;

async function readJsonResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error("API server returned HTML. Restart the Node server and try again.");
  }

  return response.json();
}

function decodeGoogleCredential(credential) {
  const [, payload] = credential.split(".");
  const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
  const decodedPayload = decodeURIComponent(
    atob(normalizedPayload)
      .split("")
      .map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );

  return JSON.parse(decodedPayload);
}

function showGoogleProfile(profile) {
  googleAvatar.src = profile.picture || "assets/logo.jpeg?v=1";
  googleAvatar.alt = profile.name ? `${profile.name} profile photo` : "Google profile photo";
  googleName.textContent = profile.name || "Google User";
  googleEmail.textContent = profile.email || "Google Account";
  googleConnectButton.hidden = true;
  googleProfile.hidden = false;
}

function getSavedProfile() {
  try {
    return JSON.parse(localStorage.getItem("dynaPlayerProfile")) || null;
  } catch {
    return null;
  }
}

function savePlayerProfile(profile) {
  localStorage.setItem("dynaPlayerProfile", JSON.stringify(profile));
}

function applyPlayerProfile(profile) {
  if (!profile) {
    return;
  }

  showGoogleProfile({
    name: profile.name || "Player",
    email: "Custom Profile",
    picture: profile.avatar || ""
  });
}

function loadPlayerProfile() {
  const savedProfile = getSavedProfile();

  if (!savedProfile) {
    return;
  }

  profileNameInput.value = savedProfile.name || "";
  profileAvatarInput.value = savedProfile.avatar || "";
  applyPlayerProfile(savedProfile);
}

function waitForGoogleIdentity() {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;

      if (window.google?.accounts?.id) {
        clearInterval(timer);
        resolve(window.google.accounts.id);
        return;
      }

      if (attempts > 40) {
        clearInterval(timer);
        reject(new Error("Google sign-in could not load."));
      }
    }, 250);
  });
}

async function initGoogleSignIn() {
  try {
    const response = await fetch("/api/config");
    const config = await response.json();

    if (!config.googleClientId) {
      googleConnectButton.textContent = "Set Google ID";
      googleConnectButton.disabled = true;
      return;
    }

    const googleIdentity = await waitForGoogleIdentity();

    googleIdentity.initialize({
      client_id: config.googleClientId,
      callback: (response) => {
        showGoogleProfile(decodeGoogleCredential(response.credential));
      }
    });

    googleConnectButton.addEventListener("click", () => {
      googleIdentity.prompt();
    });
  } catch (error) {
    googleConnectButton.textContent = "Google unavailable";
    googleConnectButton.disabled = true;
  }
}

function formatCoins(value) {
  return `${Math.round(value).toLocaleString("en-US")} Coins`;
}

function getGameCoins(game) {
  return game.coinPrice || Math.round(game.price * 100);
}

function updateCoinUi() {
  walletBalance.textContent = formatCoins(walletAmount);
  playerCoins.textContent = Math.round(walletAmount).toLocaleString("en-US");
}

function renderCoinPackages() {
  coinGrid.innerHTML = coinPackages
    .map(
      (coinPackage, index) => `
        <article class="coin-card">
          <p class="eyebrow">${coinPackage.name}</p>
          <h3>${formatCoins(coinPackage.coins)}</h3>
          <p>${coinPackage.bonus}</p>
          <div class="coin-meta">
            <strong>${money.format(coinPackage.price)}</strong>
            <button class="add-button" type="button" data-coin-package="${index}">
              ទិញ Coins
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGames() {
  gameGrid.innerHTML = games
    .map((game, index) => {
      const [coverA, coverB] = game.colors;

      return `
        <article class="game-card">
          <div class="game-cover" style="--cover-a: ${coverA}; --cover-b: ${coverB}; --cover-image: url('${game.image}');">
            <span>${game.badge}</span>
          </div>
          <div class="game-content">
            <p class="eyebrow">${game.genre}</p>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <div class="game-meta">
              <strong>${formatCoins(getGameCoins(game))}</strong>
              <button class="game-buy-button" type="button" data-game-index="${index}">
                ទិញហ្គេម
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function getActiveRecommendProfile(name) {
  return {
    name: name.trim() || googleName.textContent.trim() || "Player",
    avatar: googleProfile.hidden ? "" : googleAvatar.src
  };
}

function addCustomerRecommend({ name, game, text, avatar }, shouldPrepend = true) {
  const card = document.createElement("article");
  const avatarElement = document.createElement("div");
  const message = document.createElement("p");
  const customerName = document.createElement("strong");
  const gameName = document.createElement("span");
  const profileName = String(name || "").trim() || "Player";
  const profileAvatar = avatar || "";

  card.className = "recommend-card";
  avatarElement.className = "recommend-avatar";

  if (profileAvatar) {
    const avatarImage = document.createElement("img");

    avatarImage.src = profileAvatar;
    avatarImage.alt = `${profileName} profile photo`;
    avatarElement.append(avatarImage);
  } else {
    avatarElement.textContent = profileName.charAt(0).toUpperCase() || "P";
  }

  message.textContent = String(text || "").trim();
  customerName.textContent = profileName;
  gameName.textContent = `បានណែនាំ ${String(game || "").trim()}`;

  card.append(avatarElement, message, customerName, gameName);

  if (shouldPrepend) {
    recommendGrid.prepend(card);
    return;
  }

  recommendGrid.append(card);
}

async function loadCustomerRecommendations() {
  try {
    const response = await fetch("/api/recommendations");
    const data = await readJsonResponse(response);

    if (!response.ok) {
      throw new Error(data.message || "Could not load recommendations.");
    }

    recommendGrid.innerHTML = "";
    data.recommendations.forEach((recommendation) => {
      addCustomerRecommend(recommendation, false);
    });
  } catch (error) {
    console.warn(error.message);
  }
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartEmpty.hidden = cart.length > 0;

  cartItems.innerHTML = cart
    .map(
      (game, index) => `
        <li>
          <span>
            ${game.title}
            <small>${game.genre}</small>
          </span>
          <span class="cart-item-actions">
            <strong>${formatCoins(getGameCoins(game))}</strong>
            <button class="remove-cart-item" type="button" data-cart-index="${index}" aria-label="លុប ${game.title} ចេញពីកន្ត្រក">បោះបង់</button>
          </span>
        </li>
      `
    )
    .join("");

  const total = getCartTotal();
  cartTotal.textContent = formatCoins(total);
  updateCoinUi();
}

function setCartPanelOpen(isOpen) {
  cartPanel.hidden = !isOpen;
  cartButton.setAttribute("aria-expanded", String(isOpen));
}

function getCartTotal() {
  return cart.reduce((sum, game) => sum + getGameCoins(game), 0);
}

function getCartItems() {
  return cart.map((game) => ({
    title: game.title,
    genre: game.genre,
    coins: getGameCoins(game)
  }));
}

function downloadOrderFile() {
  const orderNumber = `DYNA-${Date.now()}`;
  const purchasedList = purchasedGames
    .map((game, index) => `${index + 1}. ${game.title} - ${formatCoins(getGameCoins(game))}`)
    .join("\n");
  const fileContent = `Dyna Store - Order Complete
Order: ${orderNumber}
Payment: Dyna Coins
Total: ${formatCoins(purchasedGames.reduce((sum, game) => sum + getGameCoins(game), 0))}

Purchased games:
${purchasedList}

Thank you for buying from Dyna Store.`;
  const file = new Blob([fileContent], { type: "text/plain" });
  const downloadUrl = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = downloadUrl;
  link.download = `${orderNumber}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
}

function resetPaymentState() {
  topupStatus.hidden = true;
  md5Box.hidden = true;
  khqrMd5.textContent = "-";
  activePayment = null;
  clearInterval(paymentPollTimer);
  paymentStatus.textContent = "កំពុងរង់ចាំ Bakong ផ្ទៀងផ្ទាត់ការបង់ប្រាក់។ Coins មិនទាន់ចូល Wallet ទេ។";
}

function completeVerifiedPayment() {
  const paidCoinPackage = activePayment.coinPackage;

  walletAmount += paidCoinPackage.coins;
  renderCart();
  topupStatus.hidden = false;
  topupStatus.textContent = `បាន Top-up ស្វ័យប្រវត្តិ ${formatCoins(paidCoinPackage.coins)} ទៅ Wallet របស់អ្នក។`;
  paymentStatus.textContent = "បានផ្ទៀងផ្ទាត់ការបង់ប្រាក់រួច - Coins ចូល Wallet រួចហើយ។";
  setCartPanelOpen(true);
  clearInterval(paymentPollTimer);
  activePayment = null;
}

async function checkBakongPayment() {
  if (!activePayment) {
    return;
  }

  try {
    const response = await fetch(`/api/bakong/payments/${activePayment.orderId}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Payment check failed.");
    }

    if (!data.configured) {
      paymentStatus.textContent = "Backend ត្រូវការ BAKONG_API_TOKEN ដើម្បីផ្ទៀងផ្ទាត់ការបង់ប្រាក់ និងបញ្ចូល Coins ស្វ័យប្រវត្តិ។";
      return;
    }

    if (data.status === "paid") {
      completeVerifiedPayment();
      return;
    }

    paymentStatus.textContent = "កំពុងពិនិត្យការបង់ប្រាក់ពី Bakong... បង់ប្រាក់ជោគជ័យ Coins នឹងចូលដោយស្វ័យប្រវត្តិ។";
  } catch (error) {
    paymentStatus.textContent = `មិនអាចពិនិត្យការបង់ប្រាក់បាន: ${error.message}`;
  }
}

async function startBakongPayment(coinPackage) {
  const amount = coinPackage.price;

  selectedCoinPackage = coinPackage;
  resetPaymentState();
  abaQrPanel.hidden = false;
  paymentStatus.textContent = "កំពុងបង្កើត Bakong KHQR...";

  try {
    const response = await fetch("/api/bakong/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount,
        items: [{ title: coinPackage.name, coins: coinPackage.coins, price: coinPackage.price }]
      })
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not create Bakong payment.");
    }

    activePayment = {
      orderId: data.orderId,
      md5: data.md5,
      amount,
      coinPackage
    };
    document.querySelector(".qr-image").src = data.qrImage;
    khqrMd5.textContent = data.md5 || "No MD5 returned";
    md5Box.hidden = false;
    paymentStatus.textContent = "ស្កេន QR ហើយរង់ចាំការផ្ទៀងផ្ទាត់ពី Bakong...";
    clearInterval(paymentPollTimer);
    paymentPollTimer = setInterval(checkBakongPayment, 3000);
    checkBakongPayment();
  } catch (error) {
    paymentStatus.textContent = `មិនអាចបង្កើត Bakong QR បាន: ${error.message}`;
  }
}

function buyGamesWithCoins() {
  const total = getCartTotal();

  cartMessage.textContent = "";

  if (cart.length === 0) {
    cartEmpty.hidden = false;
    return;
  }

  if (walletAmount < total) {
    cartMessage.textContent = `Coins មិនគ្រប់ទេ។ ត្រូវការ ${formatCoins(total - walletAmount)} បន្ថែម។`;
    document.querySelector("#coins").scrollIntoView({ behavior: "smooth" });
    return;
  }

  walletAmount -= total;
  purchasedGames = [...cart];
  cart.length = 0;
  cartMessage.textContent = "ទិញហ្គេមបានជោគជ័យ។ អាចទាញយកឯកសារបាន។";
  downloadPurchasedButton.hidden = false;
  renderCart();
}

gameGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-game-index]");

  if (!button) {
    return;
  }

  event.stopPropagation();

  const selectedGame = games[Number(button.dataset.gameIndex)];

  cart.push(selectedGame);
  downloadPurchasedButton.hidden = true;
  renderCart();
  cartMessage.textContent =
    walletAmount >= getCartTotal()
      ? "ចុចប៊ូតុងខាងក្រោម ដើម្បីទិញហ្គេមដោយ Coins។"
      : `Coins មិនគ្រប់ទេ។ ត្រូវការ ${formatCoins(getCartTotal() - walletAmount)} បន្ថែម។`;
  setCartPanelOpen(true);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-index]");

  if (!button) {
    return;
  }

  cart.splice(Number(button.dataset.cartIndex), 1);
  cartMessage.textContent = "";
  renderCart();
});

coinGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-coin-package]");

  if (!button) {
    return;
  }

  selectedCoinPackage = coinPackages[Number(button.dataset.coinPackage)];
  paymentTotal.textContent = money.format(selectedCoinPackage.price);
  paymentModal.hidden = false;
  startBakongPayment(selectedCoinPackage);
});

checkoutButton.addEventListener("click", () => {
  buyGamesWithCoins();
});

cancelBuyButton.addEventListener("click", () => {
  cart.length = 0;
  cartMessage.textContent = "";
  downloadPurchasedButton.hidden = true;
  renderCart();
  setCartPanelOpen(false);
});

cartButton.addEventListener("click", () => {
  setCartPanelOpen(cartPanel.hidden);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setCartPanelOpen(false);
    settingsModal.hidden = true;
  }
});

settingsButton.addEventListener("click", () => {
  const savedProfile = getSavedProfile();

  profileNameInput.value = savedProfile?.name || googleName.textContent || "";
  profileAvatarInput.value = savedProfile?.avatar || googleAvatar.src || "";
  settingsModal.hidden = false;
});

closeSettings.addEventListener("click", () => {
  settingsModal.hidden = true;
});

profileSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const profile = {
    name: profileNameInput.value.trim() || "Player",
    avatar: profileAvatarInput.value.trim()
  };

  savePlayerProfile(profile);
  applyPlayerProfile(profile);
  settingsModal.hidden = true;
});

resetProfileButton.addEventListener("click", () => {
  localStorage.removeItem("dynaPlayerProfile");
  profileNameInput.value = "";
  profileAvatarInput.value = "";
  googleProfile.hidden = true;
  googleConnectButton.hidden = false;
  settingsModal.hidden = true;
});

settingsModal.addEventListener("click", (event) => {
  if (event.target === settingsModal) {
    settingsModal.hidden = true;
  }
});

recommendToggle.addEventListener("click", () => {
  const isOpen = recommendForm.hidden;

  recommendForm.hidden = !isOpen;
  recommendToggle.setAttribute("aria-expanded", String(isOpen));

  if (isOpen && !recommendName.value.trim() && !googleProfile.hidden) {
    recommendName.value = googleName.textContent;
  }
});

recommendForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const profile = getActiveRecommendProfile(recommendName.value);
  const recommendation = {
    name: profile.name,
    avatar: profile.avatar,
    game: recommendGame.value,
    text: recommendText.value
  };

  try {
    const response = await fetch("/api/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recommendation)
    });
    const data = await readJsonResponse(response);

    if (!response.ok) {
      throw new Error(data.message || "Could not save recommendation.");
    }

    addCustomerRecommend(data.recommendation);
    recommendForm.reset();
    recommendForm.hidden = true;
    recommendToggle.setAttribute("aria-expanded", "false");
  } catch (error) {
    alert(`មិនអាចរក្សាទុកការណែនាំបាន: ${error.message}`);
  }
});

closePayment.addEventListener("click", () => {
  paymentModal.hidden = true;
});

abaPayButton.addEventListener("click", () => {
  if (selectedCoinPackage) {
    startBakongPayment(selectedCoinPackage);
  }
});

downloadPurchasedButton.addEventListener("click", () => {
  downloadOrderFile();
});

paymentModal.addEventListener("click", (event) => {
  if (event.target === paymentModal) {
    paymentModal.hidden = true;
  }
});

renderCart();
renderCoinPackages();
renderGames();
loadCustomerRecommendations();
loadPlayerProfile();
initGoogleSignIn();
