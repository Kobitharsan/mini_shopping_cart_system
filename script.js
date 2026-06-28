/* ==================================================================
   Cartly / BigBasket — Premium Storefront Logic
   ================================================================== */

/* ---------------------------------------------------------------
   1. DATA — Product Catalog
   --------------------------------------------------------------- */
const products = [
  { 
    id: 1, 
    name: "Wireless ANC Headphones", 
    category: "Audio", 
    price: 2499.99, 
    originalPrice: 3999.99,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80", 
    description: "Immersive sound with advanced active noise cancellation (ANC) and up to 40 hours of battery life. Soft memory foam earcups for all-day comfort.",
    specs: ["Active Noise Cancelling", "40-Hour Battery Life", "Bluetooth 5.2", "Hi-Res Audio Certified"]
  },
  { 
    id: 2, 
    name: "Smart Watch Series 9", 
    category: "Wearables", 
    price: 11999.99, 
    originalPrice: 15999.99,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80", 
    description: "Stay connected, track your fitness, and measure your health metrics in real-time. Features a stunning Always-On retina display and water resistance up to 50m.",
    specs: ["Always-On Retina Display", "ECG & Blood Oxygen Sensors", "Water Resistant 50m", "Fast Charging"]
  },
  { 
    id: 3, 
    name: "Mechanical Gaming Keyboard", 
    category: "Accessories", 
    price: 4999.99, 
    originalPrice: 6999.99,
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80", 
    description: "Premium mechanical gaming keyboard featuring tactile brown switches and fully customizable dynamic per-key RGB backlighting. Solid aluminum base frame.",
    specs: ["Tactile Brown Switches", "Per-Key RGB Lighting", "Anodized Aluminum Frame", "N-Key Rollover"]
  },
  { 
    id: 4, 
    name: "Ergonomic Wireless Mouse", 
    category: "Accessories", 
    price: 2999.99, 
    originalPrice: 3999.99,
    rating: 4.6,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80", 
    description: "Precision tracking wireless mouse designed with a high ergonomic vertical grip that reduces wrist fatigue. Multi-device connectivity via USB receiver or Bluetooth.",
    specs: ["Ergonomic Vertical Design", "Precision 4000 DPI Sensor", "Multi-Device Switching", "USB-C Rechargeable"]
  },
  { 
    id: 5, 
    name: "Waterproof Bluetooth Speaker", 
    category: "Audio", 
    price: 1400.00, 
    originalPrice: 2200.00,
    rating: 4.5,
    reviews: 186,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=80", 
    description: "Crisp stereo sound with rich deep bass. Features a rugged IPX7 waterproof design, making it perfect for pool parties, beach trips, and outdoor adventures.",
    specs: ["IPX7 Fully Waterproof", "Deep Bass Radiator", "20-Hour Playtime", "PartyBoost Pairing"]
  },
  { 
    id: 6, 
    name: "Pro 4K Mirrorless Camera", 
    category: "Accessories", 
    price: 94999.99, 
    originalPrice: 119999.99,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80", 
    description: "Professional 4K mirrorless camera with ultra-fast real-time eye autofocus and 5-axis image stabilization. Comes with a versatile 16-50mm zoom lens kit.",
    specs: ["24.2MP Exmor CMOS Sensor", "4K Video Recording", "5-Axis Image Stabilization", "Real-Time Eye AF"]
  },
  { 
    id: 7, 
    name: "Premium Thin & Light Laptop", 
    category: "Office", 
    price: 174999.99, 
    originalPrice: 199999.99,
    rating: 4.8,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=80", 
    description: "Ultralight premium workstation powered by the latest high-performance processor. Stunning 14-inch OLED display, 16GB RAM, and lightning-fast 512GB SSD.",
    specs: ["14\" 2.8K OLED Display", "Intel Core i7 / 16GB RAM", "512GB NVMe M.2 SSD", "Weight: 1.2 kg"]
  },
  { 
    id: 8, 
    name: "USB-C 8-in-1 Multi-Hub", 
    category: "Accessories", 
    price: 2499.99, 
    originalPrice: 3499.99,
    rating: 4.4,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&auto=format&fit=crop&q=80", 
    description: "Expand your laptop capabilities with this compact 8-in-1 USB-C docking station. Includes 4K HDMI port, SD/TF card readers, USB 3.0 ports, and 100W Power Delivery.",
    specs: ["4K @ 30Hz HDMI Output", "100W Power Delivery Pass-through", "SD & MicroSD Slots", "Gigabit Ethernet Port"]
  },
  { 
    id: 9, 
    name: "Smart Eye-Care LED Lamp", 
    category: "Office", 
    price: 799.99, 
    originalPrice: 1499.99,
    rating: 4.5,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80", 
    description: "Premium eye-care desk lamp with flicker-free natural lighting. Features multiple brightness levels, color temperature adjustments, and an integrated USB charging port.",
    specs: ["Flicker-Free Eye Protection", "4 Color Temperatures", "USB Charging Output", "Touch Controls & Timer"]
  },
  { 
    id: 10, 
    name: "Flagship 5G Smartphone", 
    category: "Office", 
    price: 67999.99, 
    originalPrice: 79999.99,
    rating: 4.8,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80", 
    description: "Stunning flagship smartphone with a buttery smooth 120Hz display, a versatile triple-lens pro camera system with 108MP main sensor, and 68W fast-charging capabilities.",
    specs: ["6.7\" 120Hz AMOLED Screen", "108MP Pro Camera System", "Snapdragon 8 Gen 2", "68W Turbo Charging"]
  },
  { 
    id: 11, 
    name: "Wireless Earbuds with Mic", 
    category: "Audio", 
    price: 3499.99, 
    originalPrice: 5999.99,
    rating: 4.6,
    reviews: 219,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80", 
    description: "True wireless earbuds with touch control, environmental noise-cancelling microphones for crystal clear calls, and a sleek modern wireless charging case.",
    specs: ["Dual Mic ENC for Calls", "28 Hours Total Playtime", "Wireless Charging Case", "Touch Control Gestures"]
  },
  { 
    id: 12, 
    name: "34\" Curved Gaming Monitor", 
    category: "Office", 
    price: 34999.99, 
    originalPrice: 45999.99,
    rating: 4.7,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=80", 
    description: "Immersive 34-inch ultrawide 1500R curved monitor featuring 144Hz high refresh rate and AMD FreeSync Premium for seamless, lag-free gameplay and massive multitasking room.",
    specs: ["34\" WQHD Ultrawide (21:9)", "144Hz Refresh Rate / 1ms MPRT", "1500R Curve for Comfort", "FreeSync Premium"]
  },
  { 
    id: 13, 
    name: "20,000mAh Fast Power Bank", 
    category: "Accessories", 
    price: 1899.99, 
    originalPrice: 2999.99,
    rating: 4.5,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1619489646924-b4fce76b1db5?w=500&auto=format&fit=crop&q=80", 
    description: "Massive 20,000mAh power capacity. Features USB-C Power Delivery 22.5W dual output for fast charging phones, tablets, and compatible light laptops on-the-go.",
    specs: ["22.5W Power Delivery / Quick Charge", "Dual USB-A & USB-C Outputs", "LCD Digital Charge Indicator", "Multiprotect Safety System"]
  },
  { 
    id: 14, 
    name: "Ergonomic Mesh Office Chair", 
    category: "Office", 
    price: 12999.99, 
    originalPrice: 19999.99,
    rating: 4.7,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format&fit=crop&q=80", 
    description: "Ergonomic workspace chair featuring breathable high-back mesh, dynamic adaptive lumbar support, 3D adjustable armrests, and dynamic reclining control.",
    specs: ["Breathable Tensile Mesh", "Adaptive Lumbar Cushion", "3D Adjustable Armrests", "Heavy-Duty Nylon Base"]
  },
  { 
    id: 15, 
    name: "Voice Smart Assistant Speaker", 
    category: "Audio", 
    price: 4499.99, 
    originalPrice: 6999.99,
    rating: 4.4,
    reviews: 105,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=80", 
    description: "Compact voice assistant smart speaker delivering rich 360-degree omnidirectional sound. Control your smart home appliances, check schedules, and play music hands-free.",
    specs: ["Smart Voice Recognition", "360-Degree Stereo Sound", "Chromecast / AirPlay Integrated", "Privacy Mute Button"]
  },
];

/* ---------------------------------------------------------------
   2. STATE
   --------------------------------------------------------------- */
let cart = [];
let currentCategory = "All";
let searchQuery = "";
let currentSort = "default";

const TAX_RATE = 0.05;
const MAX_QTY_PER_ITEM = 10;

/* ---------------------------------------------------------------
   3. DOM REFERENCES
   --------------------------------------------------------------- */
const productGridEl = document.getElementById("productGrid");
const noResultsEl = document.getElementById("noResults");
const resultCountEl = document.getElementById("resultCount");

const cartItemsEl = document.getElementById("cartItems");
const emptyCartEl = document.getElementById("emptyCart");
const cartSummaryEl = document.getElementById("cartSummary");
const cartBadgeEl = document.getElementById("cartBadge");

const subtotalValueEl = document.getElementById("subtotalValue");
const taxValueEl = document.getElementById("taxValue");
const totalValueEl = document.getElementById("totalValue");

const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

const searchInput = document.getElementById("searchInput");
const searchInputMobile = document.getElementById("searchInputMobile");
const sortSelect = document.getElementById("sortSelect");

const categoryListEl = document.getElementById("categoryList");
const toastEl = document.getElementById("toast");
const themeToggleBtn = document.getElementById("themeToggle");

// Modals
const quickViewModal = document.getElementById("quickViewModal");
const checkoutModal = document.getElementById("checkoutModal");

/* ---------------------------------------------------------------
   4. PURE HELPER FUNCTIONS
   --------------------------------------------------------------- */
function formatCurrency(amount) {
  return `Rs ${amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function getCartDetails() {
  return cart
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return null;
      return {
        ...product,
        qty: item.qty,
        lineTotal: product.price * item.qty,
      };
    })
    .filter(Boolean);
}

function calculateSubtotal() {
  return getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
}

function calculateTax(subtotal) {
  return subtotal * TAX_RATE;
}

/* ---------------------------------------------------------------
   5. CART MUTATIONS
   Each function executes one change and updates the DOM view.
   --------------------------------------------------------------- */
function addToCart(id) {
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    increaseQty(id);
    return;
  }

  cart.push({ id, qty: 1 });
  const product = getProductById(id);
  showToast(`Added to cart`, product.name);
  animateCartBadge();
  renderCart();
}

function increaseQty(id) {
  const item = cart.find((item) => item.id === id);
  if (!item) return;

  if (item.qty >= MAX_QTY_PER_ITEM) {
    showToast(`Limit of ${MAX_QTY_PER_ITEM} reached`);
    return;
  }

  item.qty += 1;
  animateCartBadge();
  renderCart();
}

function decreaseQty(id) {
  const item = cart.find((item) => item.id === id);
  if (!item) return;

  item.qty -= 1;

  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  animateCartBadge();
  renderCart();
}

function removeFromCart(id) {
  const product = getProductById(id);
  cart = cart.filter((item) => item.id !== id);
  if (product) showToast(`Removed`, product.name);
  renderCart();
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  showToast("Cart cleared successfully");
  renderCart();
}

/* ---------------------------------------------------------------
   6. RENDERING CATALOG
   --------------------------------------------------------------- */
function renderProducts() {
  // Filter products by category AND search input
  let list = products.filter((product) => {
    const matchesCategory = currentCategory === "All" || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery) ||
                          product.category.toLowerCase().includes(searchQuery) ||
                          product.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (currentSort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "name-desc") {
    list.sort((a, b) => b.name.localeCompare(a.name));
  }

  resultCountEl.textContent = `${list.length} item${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    productGridEl.innerHTML = "";
    noResultsEl.classList.remove("hidden");
    return;
  }

  noResultsEl.classList.add("hidden");

  productGridEl.innerHTML = list
    .map((product) => {
      const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      
      // Star render helper
      const starsHTML = Array.from({ length: 5 }, (_, i) => {
        const fill = i < Math.floor(product.rating) ? "text-amber-500 fill-current" : "text-slate-300 dark:text-slate-600";
        return `<svg class="w-4 h-4 ${fill}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
      }).join('');

      return `
        <article class="product-card">
          <!-- Discount badge -->
          <span class="absolute top-4 left-4 z-10 bg-orange-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            -${discountPercentage}% OFF
          </span>
          
          <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </div>
          
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold text-orange-600 uppercase tracking-wider">${product.category}</span>
            <div class="flex items-center gap-1">
              <span class="flex items-center">${starsHTML}</span>
              <span class="text-[11px] text-slate-500 font-medium">(${product.reviews})</span>
            </div>
          </div>
          
          <h3 class="font-display font-bold text-slate-800 dark:text-white text-base mb-1.5 line-clamp-1">${product.name}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">${product.description}</p>
          
          <div class="flex items-baseline gap-2 mb-4 mt-auto">
            <span class="font-mono text-lg font-bold text-slate-900 dark:text-slate-100">${formatCurrency(product.price)}</span>
            <span class="font-mono text-xs text-slate-400 line-through">${formatCurrency(product.originalPrice)}</span>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-auto">
            <button
              type="button"
              data-action="quickview"
              data-id="${product.id}"
              class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 text-xs font-semibold py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Quick View
            </button>
            <button
              type="button"
              data-action="add"
              data-id="${product.id}"
              class="w-full rounded-xl bg-orange-600 text-white text-xs font-semibold py-2.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-[0.98] transition"
            >
              Add to Cart
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

/* ---------------------------------------------------------------
   7. RENDERING CART
   --------------------------------------------------------------- */
function renderCartRow(item) {
  return `
    <div class="flex items-center gap-3 py-3 border-b border-slate-100 dark:border-slate-800" data-row-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0">

      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-slate-800 dark:text-white truncate">${item.name}</p>
        <p class="font-mono text-xs text-slate-500 dark:text-slate-400">${formatCurrency(item.price)} each</p>
      </div>

      <div class="qty-stepper" role="group" aria-label="Quantity for ${item.name}">
        <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
        <span>${item.qty}</span>
        <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
      </div>

      <p class="font-mono text-sm font-bold text-slate-800 dark:text-white w-20 text-right">${formatCurrency(item.lineTotal)}</p>

      <button type="button" data-action="remove" data-id="${item.id}" aria-label="Remove ${item.name}" class="text-slate-400 hover:text-orange-600 transition shrink-0 p-1">
        ✕
      </button>
    </div>
  `;
}

function renderCart() {
  const details = getCartDetails();
  const count = getCartCount();

  cartBadgeEl.textContent = count;

  if (details.length === 0) {
    cartItemsEl.classList.add("hidden");
    cartSummaryEl.classList.add("hidden");
    emptyCartEl.classList.remove("hidden");
    clearCartBtn.disabled = true;
    checkoutBtn.disabled = true;
    return;
  }

  emptyCartEl.classList.add("hidden");
  cartItemsEl.classList.remove("hidden");
  cartSummaryEl.classList.remove("hidden");
  clearCartBtn.disabled = false;
  checkoutBtn.disabled = false;

  cartItemsEl.innerHTML = details.map(renderCartRow).join("");

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  subtotalValueEl.textContent = formatCurrency(subtotal);
  taxValueEl.textContent = formatCurrency(tax);
  totalValueEl.textContent = formatCurrency(total);
}

/* ---------------------------------------------------------------
   8. TOAST NOTIFICATIONS
   --------------------------------------------------------------- */
let toastTimer = null;

function showToast(title, body = "") {
  const content = body 
    ? `<div><span class="font-bold text-orange-500">${title}:</span> <span class="text-xs">${body}</span></div>` 
    : `<div><span class="font-bold text-orange-500">${title}</span></div>`;
  
  toastEl.innerHTML = `
    <span class="bg-orange-500 text-white rounded-full p-1 text-[10px]">✔</span>
    ${content}
  `;
  toastEl.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2200);
}

function animateCartBadge() {
  cartBadgeEl.classList.remove("badge-bounce");
  // Trigger layout reflow to restart keyframe animation
  void cartBadgeEl.offsetWidth;
  cartBadgeEl.classList.add("badge-bounce");
}

/* ---------------------------------------------------------------
   9. CATEGORY / SEARCH / SORT
   --------------------------------------------------------------- */
function setupCategoryPills() {
  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  categoryListEl.innerHTML = categories
    .map(category => `
      <button 
        type="button" 
        data-category="${category}"
        class="category-pill px-4 py-2 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-orange-500 hover:text-orange-500 ${category === currentCategory ? 'active' : ''}"
      >
        ${category}
      </button>
    `)
    .join("");
}

function handleCategoryClick(event) {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  currentCategory = button.dataset.category;
  
  // Highlight active
  document.querySelectorAll(".category-pill").forEach(btn => {
    if (btn.dataset.category === currentCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();
}

function handleSearch(event) {
  searchQuery = event.target.value.trim().toLowerCase();
  
  // Sync inputs
  if (searchInput && event.target !== searchInput) {
    searchInput.value = event.target.value;
  }
  if (searchInputMobile && event.target !== searchInputMobile) {
    searchInputMobile.value = event.target.value;
  }

  renderProducts();
}

function handleSort(event) {
  currentSort = event.target.value;
  renderProducts();
}

/* ---------------------------------------------------------------
   10. QUICK VIEW MODAL
   --------------------------------------------------------------- */
function openQuickView(id) {
  const product = getProductById(id);
  if (!product) return;

  const starsHTML = Array.from({ length: 5 }, (_, i) => {
    const fill = i < Math.floor(product.rating) ? "text-amber-500 fill-current" : "text-slate-300 dark:text-slate-600";
    return `<svg class="w-5 h-5 ${fill}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }).join('');

  const specsHTML = product.specs.map(spec => `
    <li class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
      <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
      ${spec}
    </li>
  `).join("");

  quickViewModal.innerHTML = `
    <div class="modal-content relative p-6 md:p-8">
      <button 
        type="button" 
        onclick="closeModal('quickViewModal')"
        class="absolute top-4 right-4 text-slate-400 hover:text-slate-800 dark:hover:text-white transition text-xl p-1"
      >
        ✕
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-2">
        <div class="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-square">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </div>

        <div class="flex flex-col h-full">
          <span class="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">${product.category}</span>
          <h2 class="font-display font-bold text-xl md:text-2xl text-slate-800 dark:text-white mb-2">${product.name}</h2>
          
          <div class="flex items-center gap-2 mb-4">
            <span class="flex">${starsHTML}</span>
            <span class="text-xs text-slate-500 font-medium">${product.rating} / 5.0 (${product.reviews} reviews)</span>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">${product.description}</p>
          
          <div class="mb-6">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Specifications</p>
            <ul class="grid grid-cols-1 gap-2">${specsHTML}</ul>
          </div>

          <div class="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <div class="flex flex-col">
              <span class="font-mono text-2xl font-bold text-slate-800 dark:text-white">${formatCurrency(product.price)}</span>
              <span class="text-xs text-slate-400 line-through">${formatCurrency(product.originalPrice)}</span>
            </div>
            
            <button
              type="button"
              onclick="addAndClose(${product.id})"
              class="rounded-xl bg-orange-600 text-white text-sm font-semibold px-6 py-3 hover:bg-orange-700 active:scale-[0.98] transition flex items-center gap-2"
            >
              <span>Add to Cart</span>
              <span>🛒</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  quickViewModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function addAndClose(id) {
  addToCart(id);
  closeModal('quickViewModal');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------------
   11. CHECKOUT MODAL FLOW
   --------------------------------------------------------------- */
function openCheckout() {
  if (cart.length === 0) return;

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  const itemsListHTML = getCartDetails().map(item => `
    <div class="flex justify-between items-center py-2 text-xs border-b border-slate-100 dark:border-slate-800">
      <span class="text-slate-600 dark:text-slate-300 truncate pr-4">${item.name} <strong class="text-slate-800 dark:text-white font-mono">x${item.qty}</strong></span>
      <span class="font-mono font-medium text-slate-800 dark:text-white">${formatCurrency(item.lineTotal)}</span>
    </div>
  `).join("");

  checkoutModal.innerHTML = `
    <div class="modal-content p-6 md:p-8 max-w-lg">
      <div id="checkoutFormStep">
        <div class="flex justify-between items-center mb-6">
          <h2 class="font-display font-bold text-xl text-slate-800 dark:text-white">Secure Checkout</h2>
          <button 
            type="button" 
            onclick="closeModal('checkoutModal')"
            class="text-slate-400 hover:text-slate-800 dark:hover:text-white transition text-xl p-1"
          >
            ✕
          </button>
        </div>

        <form id="checkoutSubmitForm" onsubmit="handleCheckoutFormSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
            <input required type="text" id="custName" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition" placeholder="John Doe">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
            <input required type="email" id="custEmail" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition" placeholder="john@example.com">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Shipping Address</label>
            <textarea required rows="2" id="custAddress" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition" placeholder="123 Shopping St, Bangalore, India"></textarea>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Order Summary</h3>
            <div class="max-h-[140px] overflow-y-auto mb-3 pr-1">${itemsListHTML}</div>
            
            <div class="space-y-1.5 font-mono text-xs text-slate-500 pt-2">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>${formatCurrency(subtotal)}</span>
              </div>
              <div class="flex justify-between">
                <span>Tax (5%)</span>
                <span>${formatCurrency(tax)}</span>
              </div>
              <div class="flex justify-between font-bold text-sm text-slate-800 dark:text-white pt-2 border-t border-slate-100 dark:border-slate-800">
                <span>Total</span>
                <span>${formatCurrency(total)}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-full mt-6 rounded-xl bg-orange-600 text-white font-semibold py-3 hover:bg-orange-700 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <span>Place Order (${formatCurrency(total)})</span>
            <span>🔒</span>
          </button>
        </form>
      </div>

      <div id="checkoutSuccessStep" class="hidden text-center py-8">
        <svg class="checkmark-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
        <h2 class="font-display font-bold text-2xl text-slate-800 dark:text-white mb-2">Order Placed!</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Thank you <strong id="successCustomerName" class="text-slate-800 dark:text-white"></strong>. Your order has been placed successfully. A receipt was sent to <span id="successCustomerEmail" class="font-medium text-slate-700 dark:text-slate-300"></span>.
        </p>
        <button
          type="button"
          onclick="closeModal('checkoutModal')"
          class="rounded-xl bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 hover:bg-orange-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  `;

  checkoutModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function handleCheckoutFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("custName").value;
  const email = document.getElementById("custEmail").value;
  
  document.getElementById("successCustomerName").textContent = name;
  document.getElementById("successCustomerEmail").textContent = email;

  document.getElementById("checkoutFormStep").classList.add("hidden");
  document.getElementById("checkoutSuccessStep").classList.remove("hidden");
  
  // Clear cart state
  cart = [];
  renderCart();
}

/* ---------------------------------------------------------------
   12. THEME CONFIGURATION
   --------------------------------------------------------------- */
function initTheme() {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark-theme");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("dark-theme");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  if (themeToggleBtn) themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
}

/* ---------------------------------------------------------------
   13. EVENT DELEGATION & WIRE-UP
   --------------------------------------------------------------- */
function handleProductGridClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "add") addToCart(id);
  if (action === "quickview") openQuickView(id);
}

function handleCartClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "increase") increaseQty(id);
  if (action === "decrease") decreaseQty(id);
  if (action === "remove") removeFromCart(id);
}

function attachEventListeners() {
  productGridEl.addEventListener("click", handleProductGridClick);
  cartItemsEl.addEventListener("click", handleCartClick);

  clearCartBtn.addEventListener("click", clearCart);
  checkoutBtn.addEventListener("click", openCheckout);

  if (categoryListEl) categoryListEl.addEventListener("click", handleCategoryClick);

  if (searchInput) searchInput.addEventListener("input", handleSearch);
  if (searchInputMobile) searchInputMobile.addEventListener("input", handleSearch);
  if (sortSelect) sortSelect.addEventListener("change", handleSort);

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);

  // Close modals when clicking overlay
  [quickViewModal, checkoutModal].forEach(modal => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal(modal.id);
        }
      });
    }
  });
}

/* ---------------------------------------------------------------
   14. INITIALIZE
   --------------------------------------------------------------- */
function init() {
  initTheme();
  setupCategoryPills();
  renderProducts();
  renderCart();
  attachEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
