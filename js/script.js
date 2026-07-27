// Front-end Script — FCell Celulares (E-commerce & Instagram Feed)

const WHATSAPP_NUMBER = "5565999999999";

// Default initial catalog if localStorage is empty
const INITIAL_PRODUCTS = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max 256GB",
    category: "Smartphones",
    price: "R$ 9.890,00",
    installments: "12x de R$ 915,00",
    badge: "🎁 Brinde Copo Stanley",
    image: "./products/iphone_17_promax.png",
    featured: true,
    inStock: true,
    description: "O smartphone mais desejado da Apple com acabamento em Titânio, chip A19 Pro e câmeras quádruplas."
  },
  {
    id: "iphone-air",
    name: "Apple iPhone Air",
    category: "Smartphones",
    price: "R$ 7.490,00",
    installments: "12x de R$ 692,00",
    badge: "⚡ Ultrafino",
    image: "./products/iphone_air.png",
    featured: true,
    inStock: true,
    description: "Design ultrafino revolucionário com alta performance da Apple."
  },
  {
    id: "starlink-mini",
    name: "Starlink Mini Kit Portátil",
    category: "Starlink",
    price: "R$ 2.890,00",
    installments: "10x de R$ 310,00",
    badge: "📡 Pronta Entrega",
    image: "./products/starlink_mini.png",
    featured: true,
    inStock: true,
    description: "Internet via satélite portátil de altíssima velocidade para fazenda, praia e estrada."
  },
  {
    id: "jbl-boombox-3",
    name: "JBL Boombox 3 Wi-Fi & BT",
    category: "JBL & Áudio",
    price: "R$ 2.490,00",
    installments: "10x de R$ 269,00",
    badge: "🔥 24h Bateria",
    image: "./products/jbl_boombox_3.png",
    featured: true,
    inStock: true,
    description: "Som potente com graves profundos e proteção IP67 à prova d'água."
  },
  {
    id: "suporte-vacuum",
    name: "Suporte Vacuum Suction",
    category: "Acessórios",
    price: "R$ 149,00",
    installments: "À vista ou PIX",
    badge: "🧲 Campeão de Vendas",
    image: "./products/suporte_vacuum.png",
    featured: false,
    inStock: true,
    description: "Suporte articulado 360° com ventosa a vácuo para todos os smartphones."
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2ª Geração MagSafe",
    category: "JBL & Áudio",
    price: "R$ 1.790,00",
    installments: "10x de R$ 195,00",
    badge: "🎧 Áudio Pro",
    image: "./products/airpods_pro_2.png",
    featured: false,
    inStock: true,
    description: "Cancelamento Ativo de Ruído de nível pro com Áudio Espacial."
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2 Titanium",
    category: "Smartwatches",
    price: "R$ 5.890,00",
    installments: "12x de R$ 540,00",
    badge: "⏱️ GPS Duplo",
    image: "./products/apple_watch_ultra.png",
    featured: false,
    inStock: true,
    description: "Relógio em Titânio ultra resistente para esportes de aventura."
  },
  {
    "id": "redmi-note-13-pro",
    "name": "Xiaomi Redmi Note 13 Pro 5G",
    "category": "Smartphones",
    "price": "R$ 2.490,00",
    "installments": "10x de R$ 269,00",
    "badge": "📸 200MP OIS",
    "image": "./products/xiaomi_redmi_note_13.png",
    "featured": false,
    "inStock": true,
    "description": "Câmera Pro de 200MP, 512GB de memória e carregamento turbo de 67W."
  }
];

// Instagram Posts List
const INSTAGRAM_POSTS = [
  { img: "./instagram/posts/post_1.jpg", title: "Assistência Técnica FCell" },
  { img: "./instagram/posts/post_9.jpg", title: "iPhone 17 Pro Max + Copo Stanley" },
  { img: "./instagram/posts/post_11.jpg", title: "JBL Boombox 3 Pronta Entrega" },
  { img: "./instagram/posts/post_12.jpg", title: "Starlink Mini Conectividade" },
  { img: "./instagram/posts/post_6.jpg", title: "Suporte Vacuum Suction 360°" },
  { img: "./instagram/posts/post_8.jpg", title: "Novo Apple iPhone Air" },
  { img: "./instagram/posts/post_7.jpg", title: "Som de Verdade JBL" },
  { img: "./instagram/posts/post_10.jpg", title: "Ofertas de Lançamento Apple" }
];

document.addEventListener("DOMContentLoaded", () => {
  loadProductsFromStorage();
  renderInstagramFeed();
  setupFilterButtons();
});

function loadProductsFromStorage() {
  const stored = localStorage.getItem("fcell_products");
  let products = stored ? JSON.parse(stored) : INITIAL_PRODUCTS;
  
  if (!stored) {
    localStorage.setItem("fcell_products", JSON.stringify(INITIAL_PRODUCTS));
  }

  renderProductsGrid(products);
}

function renderProductsGrid(products, categoryFilter = "Todos") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = categoryFilter === "Todos" 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(categoryFilter.toLowerCase()));

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const whatsappMsg = encodeURIComponent(`Olá! Vim pelo site da FCell Celulares e gostaria de consultar o produto: ${p.name} (${p.price}). Ainda ganho o Copo Stanley de brinde?`);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

    card.innerHTML = `
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <h3 class="product-title">${p.name}</h3>
      <p class="product-desc">${p.description}</p>
      <div class="product-price-box">
        <div class="product-price">${p.price}</div>
        <div class="product-installments">${p.installments}</div>
        <a href="${waLink}" target="_blank" class="btn-buy" onclick="trackLead('${p.name}')">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          Comprar no WhatsApp
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const cat = btn.getAttribute("data-category");
      const stored = localStorage.getItem("fcell_products");
      const products = stored ? JSON.parse(stored) : INITIAL_PRODUCTS;
      renderProductsGrid(products, cat);
    });
  });
}

function renderInstagramFeed() {
  const instaGrid = document.getElementById("insta-grid");
  if (!instaGrid) return;

  instaGrid.innerHTML = "";
  INSTAGRAM_POSTS.forEach(post => {
    const item = document.createElement("a");
    item.className = "insta-card";
    item.href = "https://www.instagram.com/fcellcelularesoficial/";
    item.target = "_blank";
    
    item.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <div class="insta-overlay">
        <p>${post.title}</p>
        <span>@fcellcelularesoficial</span>
      </div>
    `;
    instaGrid.appendChild(item);
  });
}

function trackLead(productName) {
  let leads = JSON.parse(localStorage.getItem("fcell_leads_count") || "0");
  leads += 1;
  localStorage.setItem("fcell_leads_count", JSON.stringify(leads));
}
