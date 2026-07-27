/* ==========================================================================
   FCELL CELULARES - SCRIPT DE ALTA PERFORMANCE (CLEAN E-COMMERCE PARTSiX)
   ========================================================================== */

const INITIAL_PRODUCTS = [
  {
    "id": "iphone-17-pro-max",
    "name": "iPhone 17 Pro Max 256GB",
    "category": "Smartphones",
    "price": "R$ 9.890,00",
    "installments": "12x de R$ 915,00 no cartão",
    "badge": "🎁 Copo Stanley",
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
    "installments": "12x de R$ 692,00 no cartão",
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
    "installments": "10x de R$ 310,00 no cartão",
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
    "installments": "10x de R$ 269,00 no cartão",
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
    "badge": "🧲 Top Vendas",
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
    "installments": "10x de R$ 195,00 no cartão",
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
    "installments": "12x de R$ 540,00 no cartão",
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
    "installments": "10x de R$ 269,00 no cartão",
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
  heroBadge: "GARANTIA OFICIAL & PRONTA ENTREGA",
  heroTitle: "Smartphones, Acessórios e Suporte de <span class=\"text-primary\">Alta Performance</span>",
  heroSubtitle: "Encontre os melhores modelos de iPhones, Starlink Mini, Caixas JBL e Smartwatches com suporte especializado e entrega rápida em Cuiabá.",
  whatsappNumber: "5565993049734",
  globalGiftText: "Ganhe Copo Stanley em compras no PIX"
};

let productsState = [];
let storeSettings = {};
let currentCategory = 'Todos';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initStoreData();
  setupEventListeners();
  renderStoreContent();
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
  const dealWaBtn = document.getElementById('deal-whatsapp-btn');

  if (headerWaBtn) {
    headerWaBtn.href = `https://wa.me/${waNum}?text=${generalMsg}`;
    headerWaBtn.onclick = () => trackLeadClick();
  }
  if (dealWaBtn) {
    const dealMsg = encodeURIComponent("Olá! Vim pelo site da FCell Celulares e quero aproveitar a Oferta do iPhone 17 Pro Max com o Copo Stanley de brinde!");
    dealWaBtn.href = `https://wa.me/${waNum}?text=${dealMsg}`;
    dealWaBtn.onclick = () => trackLeadClick();
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
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;"></i>
        <h3 style="font-family: var(--font-heading);">Nenhum produto encontrado</h3>
        <p>Tente selecionar outra categoria ou buscar por outro modelo.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const waUrl = getProductWhatsAppUrl(prod);
    return `
      <div class="product-card-clean">
        ${prod.badge ? `<span class="product-discount-badge">${prod.badge}</span>` : ''}
        
        <div class="product-img-stage-clean" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">
          <img src="${prod.image}" alt="${prod.name}" class="product-img-clean" onerror="this.src='./products/iphone_17_promax.png'">
        </div>
        
        <div>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span style="color: var(--color-text-muted); font-size: 0.7rem; margin-left: 0.3rem;">(5.0)</span>
          </div>

          <h3 class="product-title-clean" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
          <div class="product-price-clean">${prod.price}</div>
          <div class="product-installments-clean">${prod.installments || 'Consulte condições'}</div>
        </div>

        <button class="btn-buy-clean" onclick="window.open('${waUrl}', '_blank'); trackLeadClick();">
          <i class="fa-brands fa-whatsapp"></i>
          <span>Comprar no WhatsApp</span>
        </button>
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
  const categoryCards = document.querySelectorAll('.category-card-clean');
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      categoryCards.forEach(c => c.classList.remove('active'));
      const targetCard = e.currentTarget;
      targetCard.classList.add('active');
      currentCategory = targetCard.getAttribute('data-category');
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
  const categoryCards = document.querySelectorAll('.category-card-clean');
  categoryCards.forEach(card => {
    if (card.getAttribute('data-category') === categoryName) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
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
    ? product.benefits.map(b => `<li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.9rem;"><i class="fa-solid fa-check text-primary"></i> ${b}</li>`).join('')
    : `<li style="display: flex; align-items: center; gap: 0.5rem;"><i class="fa-solid fa-check text-primary"></i> Garantia Oficial FCell 1 Ano</li>`;

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; background: var(--bg-main); border-radius: var(--radius-md); padding: 2rem; border: 1px solid var(--border-light);">
      <img src="${product.image}" alt="${product.name}" style="max-height: 320px; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.12));" onerror="this.src='./products/iphone_17_promax.png'">
    </div>
    <div>
      ${product.badge ? `<span class="hero-badge-tag" style="margin-bottom: 0.75rem; display: inline-block;">${product.badge}</span>` : ''}
      <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; margin-bottom: 0.4rem; line-height: 1.2;">${product.name}</h2>
      ${product.headline ? `<p style="font-weight: 700; color: var(--color-primary); margin-bottom: 1rem; font-family: var(--font-heading);">"${product.headline}"</p>` : ''}
      
      <div style="background: var(--bg-main); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; border: 1px solid var(--border-light);">
        <div style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; color: var(--color-primary);">${product.price}</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted);">${product.installments || 'Consulte condições'}</div>
      </div>

      <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.25rem; line-height: 1.6;">${product.description || ''}</p>

      <ul style="list-style: none; margin-bottom: 1.75rem;">${benefitsHtml}</ul>

      <a href="${waUrl}" target="_blank" class="btn-buy-clean" style="padding: 1rem; font-size: 1rem; border-radius: var(--radius-sm);" onclick="trackLeadClick()">
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
