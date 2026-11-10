"use strict";

/* =========================================
   RIDIS HOROGRAPHIC STORE SETTINGS
========================================= */

// Replace this with your real WhatsApp number.
// Use country code and digits only, without + or spaces.
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

const CART_STORAGE_KEY = "ridisHorographicCart";

// Change this to NGN if you change all product prices to naira.
const CURRENCY = "USD";


/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [
  {id:1,name:"Casio Analog Watch",price:20.99,rating:4.2,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\casio3.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions. Review the photos and contact us for details before ordering."},

  {id:2,name:"Tomi Gift Box",price:25.99,rating:4.8,inStock:true,category:"Watch Boxes",image:"C:\\Users\\user\\Downloads\\tomi1.jpeg",description:"A presentation and storage accessory for watches. A thoughtful option for organising or gifting a timepiece."},

  {id:3,name:"SKMEI Watch",price:29.99,rating:4.5,inStock:false,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\skmei1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:4,name:"Poedagar Watch",price:49.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagar1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:5,name:"Poedagar Watch",price:79.99,rating:4.3,inStock:false,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagar2.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:6,name:"Denvosi Watch",price:89.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\denvosi1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:7,name:"2 in 1 Wireless Earbuds",price:19.99,rating:4.3,inStock:true,category:"Audio Accessories",image:"C:\\Users\\user\\Downloads\\buds1.jpeg",description:"An audio accessory selected for everyday listening. Contact us to confirm the exact model features."},

  {id:8,name:"G-Shock Watch",price:47.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\    shock1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:9,name:"Smart Watch",price:199.99,rating:4.3,inStock:true,category:"Smart Watches",image:"C:\\Users\\user\\Downloads\\smart2.jpeg",description:"A smart wearable option. Contact us to confirm compatibility and available features."},

  {id:10,name:"Poedagar Digital Watch",price:199.99,rating:4.3,inStock:false,category:"Digital Watches",image:"C:\\Users\\user\\Downloads\\poedagardigi.jpeg",description:"A digital-style watch for everyday use. Contact us for specific functions and availability."},

  {id:11,name:"Poedagar Chronograph Watch",price:199.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagarchrono.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:12,name:"Skmei Digital Watch",price:169.99,rating:4.3,inStock:true,category:"Digital Watches",image:"C:\\Users\\user\\Downloads\\skmeidigi1.jpeg",description:"A digital-style watch for everyday use. Contact us for specific functions and availability."},

  {id:13,name:"Poedagar Day-Date Watch",price:399.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagar3.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:14,name:"Poedagar Clown Watch",price:299.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagarclown.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:15,name:"Poedagar Luxury Watch",price:499.99,rating:4.9,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagarlux1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:16,name:"Samsung Galaxy Watch 9",price:1199.99,rating:4.3,inStock:true,category:"Smart Watches",image:"C:\\Users\\user\\Downloads\\watch9.jpeg",description:"A smart wearable option. Contact us to confirm compatibility and available features."},

  {id:17,name:"JBL Headphones",price:599.99,rating:4.3,inStock:false,category:"Audio Accessories",image:"C:\\Users\\user\\Downloads\\jblhead1.jpeg",description:"An audio accessory selected for everyday listening. Contact us to confirm its features."},

  {id:18,name:"Bose Headphones",price:399.99,rating:4.8,inStock:true,category:"Audio Accessories",image:"C:\\Users\\user\\Downloads\\bosehead.jpeg",description:"An audio accessory selected for everyday listening. Contact us to confirm its features."},

  {id:19,name:"JBL Headphones NC",price:599.99,rating:4.3,inStock:true,category:"Audio Accessories",image:"C:\\Users\\user\\Downloads\\jblhead2.jpeg",description:"An audio accessory selected for everyday listening. Contact us to confirm its features."},

  {id:20,name:"Cartier Watch",price:1999.99,rating:4.8,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\cartier1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:21,name:"Power Bank",price:19.99,rating:4.3,inStock:true,category:"Power Banks",image:"C:\\Users\\user\\Downloads\\pb1.jpeg",description:"A portable charging accessory. Please confirm capacity and device compatibility before ordering."},

  {id:22,name:"Poedagar Luxury Watch",price:799.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\poedagarlux2.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:23,name:"Tomi Dual Face Watch",price:58.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\one.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:24,name:"Tomi Chronograph Watch",price:123.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\two.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:25,name:"Extri Watch",price:299.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\three.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:26,name:"12 in 1 Luxury Box",price:1999.99,rating:5.0,inStock:true,category:"Watch Boxes",image:"C:\\Users\\user\\Downloads\\12in1.jpeg",description:"A presentation and storage accessory for watches. A thoughtful option for organising or gifting a timepiece."},

  {id:27,name:"Rick Watch",price:109.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\rick.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:28,name:"6 in 1 Luxury Box",price:199.99,rating:4.3,inStock:false,category:"Watch Boxes",image:"C:\\Users\\user\\Downloads\\6in1.jpeg",description:"A presentation and storage accessory for watches."},

  {id:29,name:"Tomi Watch",price:299.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\four.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:30,name:"Premium G-Shock Watch",price:559.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\five.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:31,name:"Digital Wall Clock",price:99.99,rating:4.3,inStock:true,category:"Clocks",image:"C:\\Users\\user\\Downloads\\six.jpeg",description:"A practical timepiece for your space. Contact us for further details."},

  {id:32,name:"Tomi Watch",price:299.99,rating:4.3,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\sev.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:33,name:"Poedagar Double Chrono",price:1500.99,rating:5.0,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\img1.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:34,name:"Poedagar Luxury",price:600.99,rating:4.76,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\img2.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."},

  {id:35,name:"Poedagar Leather",price:900.99,rating:4.36,inStock:true,category:"Wristwatches",image:"C:\\Users\\user\\Downloads\\img3.jpeg",description:"A wristwatch selected to complement everyday outfits and special occasions."}
];


/* =========================================
   ELEMENTS AND CART DATA
========================================= */

let activeCategory = "All";
let cart = loadCart();
let toastTimer;

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("productSearch");
const stockFilter = document.getElementById("stockFilter");
const sortSelect = document.getElementById("sortProducts");
const categoryChips = document.getElementById("categoryChips");
const totalProducts = document.getElementById("totalProducts");
const noResults = document.getElementById("noResults");
const cartItemsContainer = document.getElementById("cartItems");
const toastElement = document.getElementById("toast");


/* =========================================
   HELPER FUNCTIONS
========================================= */

function formatPrice(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: CURRENCY
  }).format(amount);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");

  window.clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2600);
}


/* =========================================
   LOAD AND SAVE CART
========================================= */

function loadCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item => {
        const product = products.find(
          entry => entry.id === Number(item.id)
        );

        return (
          product &&
          product.inStock &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0
        );
      })
      .map(item => ({
        id: Number(item.id),
        quantity: Math.min(item.quantity, 99)
      }));

  } catch (error) {
    console.warn("Could not load saved cart:", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn("Unable to save cart:", error);
    showToast("Your browser could not save the shopping bag.");
  }
}


/* =========================================
   CATEGORY FILTERS
========================================= */

function renderCategoryChips() {
  const categories = [
    "All",
    ...new Set(products.map(product => product.category))
  ];

  categoryChips.innerHTML = categories.map(category => `
    <button
      class="category-chip ${category === activeCategory ? "active" : ""}"
      type="button"
      data-category="${escapeHTML(category)}"
      aria-pressed="${category === activeCategory}"
    >
      ${escapeHTML(category)}
    </button>
  `).join("");
}


/* =========================================
   SEARCH, FILTER AND SORT
========================================= */

function getVisibleProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const stockValue = stockFilter.value;
  const sortValue = sortSelect.value;

  const visible = products.filter(product => {

    const searchableText = `
      ${product.name}
      ${product.category}
      ${product.description}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesStock =
      stockValue === "all" ||
      (stockValue === "in" && product.inStock) ||
      (stockValue === "out" && !product.inStock);

    return matchesSearch && matchesCategory && matchesStock;
  });

  if (sortValue === "price-low") {
    visible.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-high") {
    visible.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "rating") {
    visible.sort((a, b) => b.rating - a.rating);
  }

  if (sortValue === "name") {
    visible.sort((a, b) => a.name.localeCompare(b.name));
  }

  return visible;
}


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function renderProducts() {
  const visibleProducts = getVisibleProducts();

  totalProducts.textContent = visibleProducts.length;
  noResults.hidden = visibleProducts.length !== 0;

  productGrid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">

      <div class="product-image">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >

        <span class="stock-badge ${product.inStock ? "" : "out"}">
          ${product.inStock ? "In Stock" : "Out of Stock"}
        </span>

      </div>

      <div class="product-info">

        <p class="product-category">
          ${escapeHTML(product.category)}
        </p>

        <h3 class="product-name">
          ${escapeHTML(product.name)}
        </h3>

        <div class="product-rating">
          ★★★★★
          <span>${product.rating.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")} / 5</span>
        </div>

        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>

        <div class="product-bottom">

          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>

          <button
            class="add-to-cart"
            type="button"
            data-add-to-cart="${product.id}"
            ${product.inStock ? "" : "disabled"}
          >
            ${product.inStock ? "Add to Bag +" : "Unavailable"}
          </button>

        </div>

      </div>

    </article>
  `).join("");

  // Show a fallback when a product image cannot be found.
  productGrid.querySelectorAll(".product-image img").forEach(image => {
    image.addEventListener("error", () => {
      image.hidden = true;

      const fallback = document.createElement("span");
      fallback.className = "image-fallback";
      fallback.textContent = "RIDIS HOROGRAPHIC";

      image.parentElement.appendChild(fallback);
    }, { once: true });
  });
}


/* =========================================
   ADD PRODUCTS TO CART
========================================= */

function addToCart(productId) {
  const product = products.find(
    entry => entry.id === productId
  );

  if (!product || !product.inStock) return;

  const existing = cart.find(
    item => item.id === productId
  );

  if (existing) {
    if (existing.quantity >= 99) {
      showToast("Maximum quantity is 99 per product.");
      return;
    }

    existing.quantity += 1;

  } else {
    cart.push({
      id: productId,
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  showToast(`${product.name} added to your shopping bag.`);
}


/* =========================================
   DISPLAY SHOPPING CART
========================================= */

function renderCart() {

  const validCart = cart.filter(item =>
    products.some(product =>
      product.id === item.id && product.inStock
    )
  );

  if (validCart.length !== cart.length) {
    cart = validCart;
    saveCart();
  }

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce((sum, item) => {
    const product = products.find(
      entry => entry.id === item.id
    );

    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  document.getElementById("cartCount").textContent = totalQuantity;
  document.getElementById("cartItemCount").textContent = totalQuantity;
  document.getElementById("cartTotal").textContent = formatPrice(total);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <p class="cart-empty">
        Your shopping bag is empty. Explore our collection and add something you love.
      </p>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => {
    const product = products.find(
      entry => entry.id === item.id
    );

    if (!product) return "";

    return `
      <article class="cart-item">

        <div class="cart-product">

          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
          >

          <div>
            <strong>${escapeHTML(product.name)}</strong>

            <small>
              ${formatPrice(product.price)} each
            </small>

            <button
              class="remove-item"
              type="button"
              data-cart-action="remove"
              data-id="${product.id}"
            >
              Remove
            </button>

          </div>

        </div>

        <div class="quantity-control">

          <button
            type="button"
            data-cart-action="decrease"
            data-id="${product.id}"
            aria-label="Decrease quantity"
          >−</button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-cart-action="increase"
            data-id="${product.id}"
            aria-label="Increase quantity"
          >+</button>

        </div>

        <strong class="cart-line-total">
          ${formatPrice(product.price * item.quantity)}
        </strong>

      </article>
    `;
  }).join("");
}


/* =========================================
   CHANGE CART QUANTITY
========================================= */

function changeQuantity(productId, change) {
  const item = cart.find(
    entry => entry.id === productId
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(
      entry => entry.id !== productId
    );
  }

  if (item.quantity > 99) {
    item.quantity = 99;
  }

  saveCart();
  renderCart();
}


/* =========================================
   CART BUTTON ACTIONS
========================================= */

function handleCartAction(event) {
  const button = event.target.closest(
    "button[data-cart-action]"
  );

  if (!button) return;

  const productId = Number(button.dataset.id);
  const action = button.dataset.cartAction;

  if (action === "remove") {
    cart = cart.filter(
      item => item.id !== productId
    );

    saveCart();
    renderCart();
    showToast("Item removed from your shopping bag.");

  } else if (action === "increase") {
    changeQuantity(productId, 1);

  } else if (action === "decrease") {
    changeQuantity(productId, -1);
  }
}


/* =========================================
   WHATSAPP CHECKOUT
========================================= */

function checkoutViaWhatsApp() {

  if (cart.length === 0) {
    showToast("Your shopping bag is empty.");
    return;
  }

  if (
    !/^\d{10,15}$/.test(WHATSAPP_NUMBER) ||
    WHATSAPP_NUMBER.includes("X")
  ) {
    showToast("Add your WhatsApp number in the JavaScript code first.");
    return;
  }

  const orderLines = cart.map(item => {
    const product = products.find(
      entry => entry.id === item.id
    );

    return product
      ? `- ${product.name} x ${item.quantity}: ${formatPrice(product.price * item.quantity)}`
      : "";
  }).filter(Boolean);

  const total = cart.reduce((sum, item) => {
    const product = products.find(
      entry => entry.id === item.id
    );

    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const message = [
    "Hello Ridis Horographic!",
    "I would like to enquire about placing this order:",
    "",
    ...orderLines,
    "",
    `Estimated total: ${formatPrice(total)}`,
    "",
    "Please confirm availability, delivery fee and payment details."
  ].join("\n");

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================================
   INVENTORY SUMMARY
========================================= */

function renderInventorySummary() {

  const ratedProducts = products.filter(
    product => Number.isFinite(product.rating)
  );

  const averageRating = ratedProducts.length
    ? ratedProducts.reduce(
        (sum, product) => sum + product.rating, 0
      ) / ratedProducts.length
    : null;

  const highestPrice = products.reduce(
    (highest, product) =>
      product.price > highest.price ? product : highest,
    products[0]
  );

  const highestRated = ratedProducts.length
    ? ratedProducts.reduce(
        (highest, product) =>
          product.rating > highest.rating ? product : highest,
        ratedProducts[0]
      )
    : null;

  document.getElementById("averageRating").textContent =
    averageRating === null
      ? "No ratings"
      : `${averageRating.toFixed(2)} / 5`;

  document.getElementById("highestPriceName").textContent =
    highestPrice ? highestPrice.name : "—";

  document.getElementById("highestPriceValue").textContent =
    highestPrice ? formatPrice(highestPrice.price) : "";

  document.getElementById("highestRatingName").textContent =
    highestRated ? highestRated.name : "—";

  document.getElementById("highestRatingValue").textContent =
    highestRated ? `${highestRated.rating.toFixed(2)} / 5` : "";

  const categoryCounts = products.reduce((result, product) => {
    result[product.category] =
      (result[product.category] || 0) + 1;

    return result;
  }, {});

  document.getElementById("categoryCounts").innerHTML =
    Object.entries(categoryCounts)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([category, count]) =>
        `<li>${escapeHTML(category)}: ${count} products</li>`
      )
      .join("");
}


/* =========================================
   CLEAR FILTERS
========================================= */

function resetFilters() {
  searchInput.value = "";
  stockFilter.value = "all";
  sortSelect.value = "featured";

  activeCategory = "All";

  renderCategoryChips();
  renderProducts();
}


/* =========================================
   EVENT LISTENERS
========================================= */

// Search as the customer types.
searchInput.addEventListener("input", renderProducts);

// Stock filter.
stockFilter.addEventListener("change", renderProducts);

// Sorting.
sortSelect.addEventListener("change", renderProducts);

// Category selection.
categoryChips.addEventListener("click", event => {
  const button = event.target.closest(
    "button[data-category]"
  );

  if (!button) return;

  activeCategory = button.dataset.category;

  renderCategoryChips();
  renderProducts();
});

// Add to cart.
productGrid.addEventListener("click", event => {
  const button = event.target.closest(
    "button[data-add-to-cart]"
  );

  if (button) {
    addToCart(Number(button.dataset.addToCart));
  }
});

// Cart quantity and remove actions.
cartItemsContainer.addEventListener(
  "click",
  handleCartAction
);

// Clear cart.
document.getElementById("clearCart").addEventListener("click", () => {

  if (cart.length === 0) return;

  if (window.confirm("Clear all items from your shopping bag?")) {
    cart = [];

    saveCart();
    renderCart();

    showToast("Your shopping bag has been cleared.");
  }
});

// WhatsApp checkout.
document.getElementById("checkoutWhatsApp").addEventListener(
  "click",
  checkoutViaWhatsApp
);

// Clear search and category filters.
document.getElementById("clearFilters").addEventListener(
  "click",
  resetFilters
);


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


/* =========================================
   START THE WEBSITE
========================================= */

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

renderCategoryChips();
renderProducts();
renderCart();
renderInventorySummary();

