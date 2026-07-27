/* ==========================================================================
   FCELL CELULARES - SCRIPT DROU MINIMAL E-COMMERCE (EYE CANDY & INTERACTIVE)
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
  heroBadge: "📍 FCELL CELULARES — 18 ANOS EM SANTA HELENA",
  heroTitle: "Smartphones, JBL & Starlink Mini",
  heroSubtitle: "Smartphones lacrados, produtos originais Apple, caixas de som JBL, Starlink Mini e suporte técnico especializado com 18 anos de tradição em Santa Helena.",
  whatsappNumber: "5565999999999",
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
  initCountdownTimer();
  initScrollObserver();
});

function initStoreData() {
  const localProd = localStorage.getItem('fcell_products');
  if (localProd) {
    try {
      const parsed = JSON.parse(localProd);
      if (!Array.isArray(parsed) || parsed.length === 0 || parsed.some(p => !p.image || p.image.includes('unsplash') || p.image.includes('post_'))) {
        productsState = [...INITIAL_PRODUCTS];
        localStorage.setItem('fcell_products', JSON.stringify(productsState));
      } else {
        productsState = parsed;
      }
    } catch (e) {
      productsState = [...INITIAL_PRODUCTS];
      localStorage.setItem('fcell_products', JSON.stringify(productsState));
    }
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
  const generalMsg = encodeURIComponent("Olá! Vim pelo site da FCell Celulares e gostaria de consultar os produtos.");

  const headerWaBtn = document.getElementById('header-whatsapp-btn');
  const dealWaBtn = document.getElementById('deal-whatsapp-btn');

  if (headerWaBtn) {
    headerWaBtn.href = `https://wa.me/${waNum}?text=${generalMsg}`;
    headerWaBtn.onclick = () => { showToast("Redirecionando para o WhatsApp da FCell..."); trackLeadClick(); };
  }
  if (dealWaBtn) {
    const dealMsg = encodeURIComponent("Olá! Quero aproveitar a oferta do iPhone 17 Pro Max com o brinde Copo Stanley!");
    dealWaBtn.href = `https://wa.me/${waNum}?text=${dealMsg}`;
    dealWaBtn.onclick = () => { showToast("Resgatando oferta do Copo Stanley no WhatsApp! 🎁"); trackLeadClick(); };
  }

  renderProductsGrid();
}

function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  const latestGrid = document.getElementById('latest-products-grid');

  const filtered = productsState.filter(prod => {
    const matchesCategory = (currentCategory === 'Todos') || (prod.category === currentCategory);
    const matchesSearch = searchQuery === '' || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const createCardHtml = (prod) => {
    const waUrl = getProductWhatsAppUrl(prod);
    return `
      <div class="drou-product-card">
        ${prod.badge ? `<span class="drou-product-badge">${prod.badge}</span>` : ''}
        
        <div class="drou-product-img-stage" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">
          <img src="${prod.image}" alt="${prod.name}" class="drou-product-img" onerror="this.src='./products/iphone_17_promax.png'">
        </div>
        
        <div>
          <div class="drou-product-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span style="color: var(--color-text-muted); font-size: 0.7rem; margin-left: 0.2rem;">(5.0)</span>
          </div>

          <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--color-primary); font-family: var(--font-heading);">${prod.category}</div>
          <h3 class="drou-product-title" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
          <div class="drou-product-price">${prod.price}</div>
          <div class="drou-product-installments">${prod.installments || 'Consulte condições'}</div>
        </div>

        <button class="btn-drou-buy" onclick="handleBuyClick('${waUrl}')">
          <i class="fa-brands fa-whatsapp"></i>
          <span>Comprar no WhatsApp</span>
        </button>
      </div>
    `;
  };

  if (grid) {
    grid.innerHTML = filtered.length > 0 ? filtered.map(createCardHtml).join('') : `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.2rem;">Nenhum produto encontrado</h3>
        <p>Tente selecionar outra categoria ou buscar por outro modelo.</p>
      </div>
    `;
  }

  if (latestGrid) {
    const latestFiltered = [...productsState].reverse();
    latestGrid.innerHTML = latestFiltered.map(createCardHtml).join('');
  }
}

function getProductWhatsAppUrl(product) {
  const waNum = storeSettings.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber;
  const rawMsg = `Olá! Vim pelo site da FCell Celulares e gostaria de consultar a disponibilidade do produto: ${product.name}.\nAinda ganho o Copo Stanley de brinde?`;
  return `https://wa.me/${waNum}?text=${encodeURIComponent(rawMsg)}`;
}

function handleBuyClick(url) {
  showToast("Abrindo conversa oficial no WhatsApp... 🎁");
  trackLeadClick();
  setTimeout(() => { window.open(url, '_blank'); }, 300);
}

function trackLeadClick() {
  let currentClicks = parseInt(localStorage.getItem('fcell_whatsapp_leads') || '0', 10);
  currentClicks += 1;
  localStorage.setItem('fcell_whatsapp_leads', currentClicks.toString());
}

function setupEventListeners() {
  const trendingCards = document.querySelectorAll('.trending-category-card');
  trendingCards.forEach(card => {
    card.addEventListener('click', (e) => {
      trendingCards.forEach(c => c.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      currentCategory = target.getAttribute('data-category');
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
  const trendingCards = document.querySelectorAll('.trending-category-card');
  trendingCards.forEach(card => {
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
    <div style="display: flex; align-items: center; justify-content: center; background: var(--bg-main); border-radius: var(--radius-md); padding: 2rem; border: 1px solid var(--border-color);">
      <img src="${product.image}" alt="${product.name}" style="max-height: 320px; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.12));" onerror="this.src='./products/iphone_17_promax.png'">
    </div>
    <div>
      ${product.badge ? `<span class="drou-product-badge" style="margin-bottom: 0.75rem; display: inline-block;">${product.badge}</span>` : ''}
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.4rem; line-height: 1.2;">${product.name}</h2>
      ${product.headline ? `<p style="font-weight: 700; color: var(--color-primary); margin-bottom: 1rem; font-family: var(--font-heading);">"${product.headline}"</p>` : ''}
      
      <div style="background: var(--bg-main); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; border: 1px solid var(--border-color);">
        <div style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; color: var(--color-primary);">${product.price}</div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted);">${product.installments || 'Consulte condições'}</div>
      </div>

      <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.25rem; line-height: 1.6;">${product.description || ''}</p>

      <ul style="list-style: none; margin-bottom: 1.75rem;">${benefitsHtml}</ul>

      <a href="${waUrl}" target="_blank" class="btn-drou-buy" style="padding: 1rem; font-size: 1rem;" onclick="handleBuyClick('${waUrl}')">
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

/* Interactive Countdown Timer */
function initCountdownTimer() {
  let secondsTotal = (2 * 24 * 3600) + (14 * 3600) + (35 * 60) + 12; // 2d 14h 35m 12s

  setInterval(() => {
    if (secondsTotal <= 0) return;
    secondsTotal -= 1;

    const days = Math.floor(secondsTotal / (24 * 3600));
    const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
    const mins = Math.floor((secondsTotal % 3600) / 60);
    const secs = secondsTotal % 60;

    const dEl = document.getElementById('timer-days');
    const hEl = document.getElementById('timer-hours');
    const mEl = document.getElementById('timer-mins');
    const sEl = document.getElementById('timer-secs');

    if (dEl) dEl.innerText = String(days).padStart(2, '0');
    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(mins).padStart(2, '0');
    if (sEl) sEl.innerText = String(secs).padStart(2, '0');
  }, 1000);
}

/* Scroll Reveal Observer */
function initScrollObserver() {
  const sections = document.querySelectorAll('section, .drou-banner-card, .drou-countdown-card');
  sections.forEach(sec => sec.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => observer.observe(sec));
}

/* Toast Notifications */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-brands fa-whatsapp text-whatsapp" style="font-size: 1.2rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
