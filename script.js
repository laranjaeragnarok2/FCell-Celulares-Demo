/* ==========================================================================
   FCELL CELULARES - SCRIPT DE ALTA PERFORMANCE (BENTO EDITORIAL TECH)
   ========================================================================== */

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
  heroBadge: "LOJA OFICIAL CUIABÁ",
  heroTitle: "FCELL PRO <span class=\"text-orange\">E-3</span>",
  heroSubtitle: "Desempenho implacável com acabamento em Titânio, chip A19 Pro e câmeras profissionais. Ganhe 1 Copo Stanley de brinde!",
  whatsappNumber: "5565993049734",
  globalGiftText: "Ganhe Copo Stanley em compras no PIX"
};

const INSTAGRAM_POSTS = [
  { id: "post_1", filename: "post_1.jpg", caption: "Assistência Especializada FCell! Troca de tela e bateria em Cuiabá.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_2", filename: "post_2.jpg", caption: "Novas unidades de iPhones e Tablets!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_3", filename: "post_3.jpg", caption: "Ofertas imperdíveis da semana na FCell Celulares!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_4", filename: "post_4.jpg", caption: "Troca de vidro e tela de iPhone na hora com peças premium.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_5", filename: "post_5.jpg", caption: "Starlink Mini na FCell Celulares!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_6", filename: "post_6.jpg", caption: "Caixas de Som JBL originais com potência máxima.", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_7", filename: "post_7.jpg", caption: "Garantindo iPhone novo com Copo Stanley de brinde!", url: "https://www.instagram.com/fcellcelularesoficial/" },
  { id: "post_8", filename: "post_8.jpg", caption: "Unidades no Pantanal Shopping e Shopping Estação.", url: "https://www.instagram.com/fcellcelularesoficial/" }
];

let productsState = [];
let storeSettings = {};
let currentCategory = 'Todos';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initStoreData();
  setupEventListeners();
  renderStoreContent();
  renderInstagramFeed();
});

function initStoreData() {
  const localProd = localStorage.getItem('fcell_products');
  if (localProd) {
    try { productsState = JSON.parse(localProd); } catch (e) { productsState = [...INITIAL_PRODUCTS]; }
  } else {
    productsState = [...INITIAL_PRODUCTS];
    localStorage.setItem('fcell_products', JSON.stringify(productsState));
  }

  const localSet = localStorage.getItem('fcell_store_settings');
  if (localSet) {
    try { storeSettings = JSON.parse(localSet); } catch (e) { storeSettings = { ...DEFAULT_SETTINGS }; }
  } else {
    storeSettings = { ...DEFAULT_SETTINGS };
    localStorage.setItem('fcell_store_settings', JSON.stringify(storeSettings));
  }
}

function renderStoreContent() {
  const badgeEl = document.getElementById('hero-badge-text');
  const titleEl = document.getElementById('hero-title');
  const subEl = document.getElementById('hero-subtitle');

  if (badgeEl) badgeEl.innerText = storeSettings.heroBadge || DEFAULT_SETTINGS.heroBadge;
  if (titleEl) titleEl.innerHTML = storeSettings.heroTitle || DEFAULT_SETTINGS.heroTitle;
  if (subEl) subEl.innerText = storeSettings.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle;

  const waNum = storeSettings.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber;
  const generalMsg = encodeURIComponent("Olá! Vim pelo site da FCell Celulares e gostaria de tirar uma dúvida.");

  const headerWaBtn = document.getElementById('header-whatsapp-btn');
  if (headerWaBtn) {
    headerWaBtn.href = `https://wa.me/${waNum}?text=${generalMsg}`;
    headerWaBtn.onclick = () => trackLeadClick();
  }

  renderProductsGrid();
}

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
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted-dark);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--bg-accent-orange); margin-bottom: 1rem;"></i>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente selecionar outra categoria ou buscar por outro modelo.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const waUrl = getProductWhatsAppUrl(prod);
    return `
      <div class="product-bento-card">
        ${prod.badge ? `<span class="product-bento-tag">${prod.badge}</span>` : ''}
        <img src="${prod.image}" alt="${prod.name}" class="product-bento-img" onclick="openProductModal('${prod.id}')" style="cursor: pointer;" onerror="this.src='./products/iphone_17_promax.png'">
        
        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--bg-accent-orange); font-family: var(--font-heading);">${prod.category}</div>
        <h3 class="product-bento-title" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
        <div class="product-bento-price">${prod.price}</div>

        <div class="product-bento-actions">
          <a href="${waUrl}" target="_blank" class="btn-bento-buy" onclick="trackLeadClick()">
            <i class="fa-brands fa-whatsapp"></i>
            <span>Comprar WhatsApp</span>
          </a>
          <button class="btn-arrow-circle" onclick="openProductModal('${prod.id}')" title="Ver Detalhes">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function getProductWhatsAppUrl(product) {
  const waNum = storeSettings.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber;
  const rawMsg = `Olá! Vim pelo site da FCell Celulares e gostaria de consultar a disponibilidade do produto: ${product.name}.\nAinda ganho o Copo Stanley de brinde?`;
  return `https://wa.me/${waNum}?text=${encodeURIComponent(rawMsg)}`;
}

function trackLeadClick() {
  let currentClicks = parseInt(localStorage.getItem('fcell_whatsapp_leads') || '0', 10);
  currentClicks += 1;
  localStorage.setItem('fcell_whatsapp_leads', currentClicks.toString());
}

function setupEventListeners() {
  const filterBtns = document.querySelectorAll('.chip-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderProductsGrid();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProductsGrid();
    });
  }

  window.addEventListener('storage', (e) => {
    if (e.key === 'fcell_products' || e.key === 'fcell_store_settings') {
      initStoreData();
      renderStoreContent();
    }
  });
}

function setCategoryFilter(categoryName) {
  currentCategory = categoryName;
  const filterBtns = document.querySelectorAll('.chip-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-category') === categoryName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderProductsGrid();
}

function openProductModal(productId) {
  const product = productsState.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-product-body');
  const waUrl = getProductWhatsAppUrl(product);

  const benefitsHtml = (product.benefits && product.benefits.length > 0)
    ? product.benefits.map(b => `<li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;"><i class="fa-solid fa-check text-orange"></i> ${b}</li>`).join('')
    : `<li style="display: flex; align-items: center; gap: 0.5rem;"><i class="fa-solid fa-check text-orange"></i> Garantia Oficial FCell 1 Ano</li>`;

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; background: var(--bg-main); border-radius: var(--radius-lg); padding: 2rem;">
      <img src="${product.image}" alt="${product.name}" style="max-height: 300px; object-fit: contain;" onerror="this.src='./products/iphone_17_promax.png'">
    </div>
    <div>
      ${product.badge ? `<span class="hero-badge-pill" style="margin-bottom: 0.75rem; display: inline-block;">${product.badge}</span>` : ''}
      <h2 style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; margin-bottom: 0.4rem; text-transform: uppercase;">${product.name}</h2>
      ${product.headline ? `<p style="font-weight: 700; color: var(--bg-accent-orange); margin-bottom: 1rem;">"${product.headline}"</p>` : ''}
      
      <div style="background: var(--bg-main); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
        <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 900; color: var(--color-text-dark);">${product.price}</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted-dark);">${product.installments || 'Consulte condições'}</div>
      </div>

      <p style="font-size: 0.95rem; color: var(--color-text-muted-dark); margin-bottom: 1.25rem;">${product.description || ''}</p>

      <ul style="list-style: none; margin-bottom: 1.5rem;">${benefitsHtml}</ul>

      <a href="${waUrl}" target="_blank" class="btn-bento-buy" style="padding: 1rem; font-size: 1rem;" onclick="trackLeadClick()">
        <i class="fa-brands fa-whatsapp"></i>
        <span>Garantir pelo WhatsApp</span>
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

function renderInstagramFeed() {
  const instaGrid = document.getElementById('insta-grid');
  if (!instaGrid) return;

  instaGrid.innerHTML = INSTAGRAM_POSTS.map(post => `
    <div class="gallery-item">
      <img src="./instagram/posts/${post.filename}" alt="${post.id}" class="gallery-img" onerror="this.src='./instagram/posts/post_1.jpg'">
      <div class="gallery-overlay">
        <p style="font-size: 0.8rem; margin-bottom: 1rem;">${post.caption}</p>
        <a href="${post.url}" target="_blank" class="btn-arrow-circle btn-arrow-circle-white" title="Ver post no Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  `).join('');
}
