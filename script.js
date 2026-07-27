/* ==========================================================================
   FCELL CELULARES - PUBLIC E-COMMERCE SCRIPT (`script.js`)
   ========================================================================== */

// Default initial products matching products_data.json & PRODUCT_COPY.md
const INITIAL_PRODUCTS = [
  {
    "id": "iphone-17-pro-max",
    "name": "iPhone 17 Pro Max 256GB",
    "category": "Smartphones",
    "price": "R$ 9.890,00",
    "installments": "12x de R$ 915,00",
    "badge": "🎁 Brinde Copo Stanley",
    "image": "./products/iphone_17_promax.png",
    "featured": true,
    "inStock": true,
    "description": "O smartphone mais desejado da Apple com acabamento em Titânio, chip A19 Pro e câmeras quádruplas.",
    "headline": "Chegou o Monstro da Apple! Desempenho Implacável & Câmeras Profissionais.",
    "benefits": [
      "Chip A19 Pro com IA Integrada",
      "Tela Super Retina XDR ProMotion 120Hz",
      "Bateria para o dia todo com carregamento ultra-rápido",
      "Garantia oficial de 1 ano + Suporte FCell"
    ]
  },
  {
    "id": "iphone-air",
    "name": "Apple iPhone Air",
    "category": "Smartphones",
    "price": "R$ 7.490,00",
    "installments": "12x de R$ 692,00",
    "badge": "⚡ Ultrafino",
    "image": "./products/iphone_air.png",
    "featured": true,
    "inStock": true,
    "description": "Design ultrafino revolucionário com alta performance da Apple.",
    "headline": "Ultra Fino. Ultra Leve. Surpreendentemente Poderoso.",
    "benefits": [
      "Espessura recorde com estrutura ultra resistente",
      "Câmera avançada Photonic Engine",
      "Cores exclusivas e acabamento fosco premium"
    ]
  },
  {
    "id": "starlink-mini",
    "name": "Starlink Mini Kit Portátil",
    "category": "Starlink",
    "price": "R$ 2.890,00",
    "installments": "10x de R$ 310,00",
    "badge": "📡 Pronta Entrega",
    "image": "./products/starlink_mini.png",
    "featured": true,
    "inStock": true,
    "description": "Internet via satélite portátil de altíssima velocidade para fazenda, praia e estrada.",
    "headline": "Internet Sem Limites Onde Você Estiver!",
    "benefits": [
      "Design ultracompacto (cabe na mochila)",
      "Instalação plug & play em poucos minutos",
      "Conexão via satélite de alta velocidade e baixa latência"
    ]
  },
  {
    "id": "jbl-boombox-3",
    "name": "JBL Boombox 3 Wi-Fi & BT",
    "category": "JBL & Áudio",
    "price": "R$ 2.490,00",
    "installments": "10x de R$ 269,00",
    "badge": "🔥 24h Bateria",
    "image": "./products/jbl_boombox_3.png",
    "featured": true,
    "inStock": true,
    "description": "Som potente com graves profundos e proteção IP67 à prova d'água.",
    "headline": "Som de Verdade & Graves Insanos para a Sua Festa!",
    "benefits": [
      "24 Horas de Bateria ininterrupta",
      "Proteção IP67 à prova d'água e poeira",
      "Conectividade Wi-Fi + Bluetooth 5.3"
    ]
  },
  {
    "id": "suporte-vacuum",
    "name": "Suporte Vacuum Suction",
    "category": "Acessórios",
    "price": "R$ 149,00",
    "installments": "À vista ou PIX",
    "badge": "🧲 Campeão de Vendas",
    "image": "./products/suporte_vacuum.png",
    "featured": false,
    "inStock": true,
    "description": "Suporte articulado 360° com ventosa a vácuo para todos os smartphones.",
    "headline": "Fixação Impecável para Qualquer Modelo de Smartphone.",
    "benefits": [
      "Ventosa a vácuo com sucção automática",
      "Rotação 360° articulada",
      "Seguro para estradas esburacadas"
    ]
  },
  {
    "id": "airpods-pro-2",
    "name": "AirPods Pro 2ª Geração MagSafe",
    "category": "JBL & Áudio",
    "price": "R$ 1.790,00",
    "installments": "10x de R$ 195,00",
    "badge": "🎧 Áudio Pro",
    "image": "./products/airpods_pro_2.png",
    "featured": false,
    "inStock": true,
    "description": "Cancelamento Ativo de Ruído de nível pro com Áudio Espacial.",
    "headline": "Cancelamento Ativo de Ruído de Nível Pro.",
    "benefits": [
      "Cancelamento Ativo de Ruído 2x mais eficiente",
      "Estojo de recarga MagSafe com busca de precisão",
      "Até 30 horas de áudio total com o estojo"
    ]
  },
  {
    "id": "apple-watch-ultra-2",
    "name": "Apple Watch Ultra 2 Titanium",
    "category": "Smartwatches",
    "price": "R$ 5.890,00",
    "installments": "12x de R$ 540,00",
    "badge": "⏱️ GPS Duplo",
    "image": "./products/apple_watch_ultra.png",
    "featured": false,
    "inStock": true,
    "description": "Relógio em Titânio ultra resistente para esportes de aventura.",
    "headline": "O Relógio Mais Resistente e Capaz da Apple.",
    "benefits": [
      "Caixa em Titânio de grau aeroespacial",
      "GPS de dupla frequência de alta precisão",
      "Resistente à água até 100m (para mergulho)"
    ]
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
    "description": "Câmera Pro de 200MP, 512GB de memória e carregamento turbo de 67W.",
    "headline": "Câmera de 200MP & Carregamento Turbo 67W.",
    "benefits": [
      "Câmera Pro 200MP OIS",
      "512GB de Armazenamento Interno + 12GB RAM",
      "Carregador Turbo 67W incluso na caixa"
    ]
  }
];

const DEFAULT_SETTINGS = {
  heroBadge: "LOJA OFICIAL & ASSISTÊNCIA EM CUIABÁ",
  heroTitle: "Smartphones, Acessórios e Suporte de <span class=\"text-gradient\">Alta Performance</span>",
  heroSubtitle: "Encontre os últimos lançamentos de iPhones, Caixas JBL, Starlink e Gadgets com garantia oficial e entrega rápida no mesmo dia para Cuiabá e Várzea Grande.",
  whatsappNumber: "5565993049734",
  globalGiftText: "Ganhe Copo Stanley em compras no PIX"
};

// Instagram Posts Manifest Data
const INSTAGRAM_POSTS = [
  { id: "post_1", filename: "post_1.jpg", caption: "Assistência Especializada FCell! Troca de tela e bateria com velocidade e garantia em Cuiabá.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_2", filename: "post_2.jpg", caption: "Chegaram novas unidades de iPhones e Tablets! Venha conferir na loja.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_3", filename: "post_3.jpg", caption: "Ofertas imperdíveis da semana na FCell Celulares! Garantia oficial.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_4", filename: "post_4.jpg", caption: "Troca de vidro e tela de iPhone na hora com peças de qualidade premium.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_5", filename: "post_5.jpg", caption: "Conectividade sem limites com Starlink Mini na FCell Celulares!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_6", filename: "post_6.jpg", caption: "Caixas de Som JBL originais com potência máxima e bateria de longa duração.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_7", filename: "post_7.jpg", caption: "Cliente garantindo seu iPhone novo com brinde do Copo Stanley exclusivo!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_8", filename: "post_8.jpg", caption: "Confira as nossas unidades no Pantanal Shopping e Shopping Estação.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_9", filename: "post_9.jpg", caption: "Acessórios premium para proteger e turbinar seu celular.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_10", filename: "post_10.jpg", caption: "Xiaomi Redmi Note 13 Pro 5G com 512GB à pronta entrega!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_11", filename: "post_11.jpg", caption: "Apple Watch Ultra 2 em Titânio para quem busca máxima tecnologia.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_12", filename: "post_12.jpg", caption: "Faça seu orçamento pelo WhatsApp e receba no mesmo dia em Cuiabá.", url: "https://www.instagram.com/fcellcelularesoficial/" }
];

// App State
let productsState = [];
let storeSettings = {};
let currentCategory = 'Todos';
let searchQuery = '';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initStoreData();
  setupEventListeners();
  renderStoreContent();
  renderInstagramFeed();
});

// Initialize Data from LocalStorage or Fallback JSON
function initStoreData() {
  const localProd = localStorage.getItem('fcell_products');
  if (localProd) {
    try {
      productsState = JSON.parse(localProd);
    } catch (e) {
      productsState = [...INITIAL_PRODUCTS];
    }
  } else {
    productsState = [...INITIAL_PRODUCTS];
    localStorage.setItem('fcell_products', JSON.stringify(productsState));
  }

  const localSet = localStorage.getItem('fcell_store_settings');
  if (localSet) {
    try {
      storeSettings = JSON.parse(localSet);
    } catch (e) {
      storeSettings = { ...DEFAULT_SETTINGS };
    }
  } else {
    storeSettings = { ...DEFAULT_SETTINGS };
    localStorage.setItem('fcell_store_settings', JSON.stringify(storeSettings));
  }
}

// Render Store UI Components
function renderStoreContent() {
  // Apply Dynamic Copy Settings
  document.getElementById('hero-badge-text').innerText = storeSettings.heroBadge || DEFAULT_SETTINGS.heroBadge;
  document.getElementById('hero-title').innerHTML = storeSettings.heroTitle || DEFAULT_SETTINGS.heroTitle;
  document.getElementById('hero-subtitle').innerText = storeSettings.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle;
  document.getElementById('global-gift-text').innerText = storeSettings.globalGiftText || DEFAULT_SETTINGS.globalGiftText;

  // WhatsApp Link Handlers
  const waNum = storeSettings.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber;
  const generalMsg = encodeURIComponent("Olá! Vim pelo site da FCell Celulares e gostaria de tirar uma dúvida.");
  const repairMsg = encodeURIComponent("Olá! Vim pelo site da FCell Celulares e gostaria de solicitar um orçamento para conserto do meu celular.");

  const headerWaBtn = document.getElementById('header-whatsapp-btn');
  const heroConsultantBtn = document.getElementById('hero-consultant-btn');
  const supportWaBtn = document.getElementById('support-whatsapp-btn');

  if (headerWaBtn) {
    headerWaBtn.href = `https://wa.me/${waNum}?text=${generalMsg}`;
    headerWaBtn.onclick = () => trackLeadClick();
  }
  if (heroConsultantBtn) {
    heroConsultantBtn.href = `https://wa.me/${waNum}?text=${generalMsg}`;
    heroConsultantBtn.onclick = () => trackLeadClick();
  }
  if (supportWaBtn) {
    supportWaBtn.href = `https://wa.me/${waNum}?text=${repairMsg}`;
    supportWaBtn.onclick = () => trackLeadClick();
  }

  // Render Catalog Products
  renderProductsGrid();
}

// Render Products Grid based on Category & Search
function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = productsState.filter(prod => {
    const matchesCategory = (currentCategory === 'Todos') || (prod.category === currentCategory);
    const matchesSearch = searchQuery === '' || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-products-found">
        <i class="fa-solid fa-box-open"></i>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente buscar por outro termo ou selecione uma categoria diferente.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const waUrl = getProductWhatsAppUrl(prod);
    return `
      <div class="product-card">
        ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
        <div class="product-img-container" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">
          <img src="${prod.image}" alt="${prod.name}" class="product-img" onerror="this.src='./products/iphone_17_promax.png'">
        </div>
        <div class="product-category">${prod.category}</div>
        <h3 class="product-title" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
        <p class="product-desc-short">${prod.description || ''}</p>
        
        <div class="product-pricing">
          <div class="price-main">${prod.price}</div>
          <div class="price-installments">${prod.installments || 'Consulte condições'}</div>
        </div>

        <div class="product-actions">
          <a href="${waUrl}" target="_blank" class="btn-buy-whatsapp" onclick="trackLeadClick()">
            <i class="fa-brands fa-whatsapp"></i>
            <span>Comprar no WhatsApp</span>
          </a>
          <button class="btn-quick-view" onclick="openProductModal('${prod.id}')">
            <i class="fa-solid fa-eye"></i>
            <span>Ver Detalhes & Copy</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Generate formatted WhatsApp URL for a specific product
function getProductWhatsAppUrl(product) {
  const waNum = storeSettings.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber;
  const rawMsg = `Olá! Vim pelo site da FCell Celulares e gostaria de consultar a disponibilidade do produto: ${product.name}.\nAinda ganho o Copo Stanley de brinde?`;
  return `https://wa.me/${waNum}?text=${encodeURIComponent(rawMsg)}`;
}

// Track WhatsApp lead click counter in LocalStorage
function trackLeadClick() {
  let currentClicks = parseInt(localStorage.getItem('fcell_whatsapp_leads') || '0', 10);
  currentClicks += 1;
  localStorage.setItem('fcell_whatsapp_leads', currentClicks.toString());
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderProductsGrid();
    });
  });

  // Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProductsGrid();
    });
  }

  // Reactive Sync across browser tabs (via Storage Event)
  window.addEventListener('storage', (e) => {
    if (e.key === 'fcell_products' || e.key === 'fcell_store_settings') {
      initStoreData();
      renderStoreContent();
    }
  });
}

// Helper for category link in footer
function setCategoryFilter(categoryName) {
  currentCategory = categoryName;
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-category') === categoryName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderProductsGrid();
}

// Modal Logic for Product Details
function openProductModal(productId) {
  const product = productsState.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-product-body');

  const waUrl = getProductWhatsAppUrl(product);
  const benefitsHtml = (product.benefits && product.benefits.length > 0)
    ? product.benefits.map(b => `<li><i class="fa-solid fa-circle-check"></i> ${b}</li>`).join('')
    : `
      <li><i class="fa-solid fa-circle-check"></i> Garantia Oficial com Suporte FCell</li>
      <li><i class="fa-solid fa-circle-check"></i> Pronta entrega em Cuiabá/MT</li>
      <li><i class="fa-solid fa-circle-check"></i> Brinde Copo Stanley em pagamento à vista/PIX</li>
    `;

  modalBody.innerHTML = `
    <div class="modal-product-media">
      <img src="${product.image}" alt="${product.name}" onerror="this.src='./products/iphone_17_promax.png'">
    </div>
    <div class="modal-product-details">
      ${product.badge ? `<span class="modal-product-badge">${product.badge}</span>` : ''}
      <h2>${product.name}</h2>
      ${product.headline ? `<p style="font-weight: 600; color: var(--color-primary-light); margin-bottom: 1rem;">"${product.headline}"</p>` : ''}
      
      <div class="modal-price-box">
        <div class="modal-price-main">${product.price}</div>
        <div class="modal-price-sub">${product.installments || 'Consulte parcelamento'}</div>
      </div>

      <p class="modal-copy-text">${product.description || ''}</p>

      <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: #fff;">Destaques & Benefícios:</h4>
      <ul class="modal-benefits-list">
        ${benefitsHtml}
      </ul>

      <a href="${waUrl}" target="_blank" class="btn-buy-whatsapp" style="padding: 0.9rem; font-size: 1rem;" onclick="trackLeadClick()">
        <i class="fa-brands fa-whatsapp"></i>
        <span>Garantir Produto pelo WhatsApp</span>
      </a>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modalBackdrop = document.getElementById('product-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Render Instagram Feed Grid
function renderInstagramFeed() {
  const instaGrid = document.getElementById('insta-grid');
  if (!instaGrid) return;

  instaGrid.innerHTML = INSTAGRAM_POSTS.slice(0, 8).map(post => `
    <div class="insta-card">
      <img src="./instagram/posts/${post.filename}" alt="${post.id}" class="insta-img" onerror="this.src='./instagram/posts/post_1.jpg'">
      <div class="insta-overlay">
        <p class="insta-overlay-text">${post.caption}</p>
        <a href="${post.url}" target="_blank" class="insta-icon-link" title="Ver post no Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// Toast Helper
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
