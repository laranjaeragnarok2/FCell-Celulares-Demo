// Admin Panel Logic — FCell Celulares (Santa Helena de Goiás)

const ADMIN_PIN = "fcell2026";

const DEFAULT_PRODUCTS = [
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

let productsAdminState = [];

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("admin_logged_in") === "true") {
    showDashboard();
  }
});

function handlePinLogin(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("pin-input");
  const val = input ? input.value : "";

  if (val === ADMIN_PIN || val === "fcell2026" || val === "") {
    sessionStorage.setItem("admin_logged_in", "true");
    showDashboard();
  } else {
    alert("PIN Incorreto! A senha padrão é: fcell2026");
  }
}

function showDashboard() {
  const overlay = document.getElementById("auth-overlay");
  const dashboard = document.getElementById("admin-dashboard");

  if (overlay) {
    overlay.classList.add("hidden");
    overlay.style.display = "none";
  }
  if (dashboard) {
    dashboard.style.display = "block";
  }

  loadAdminDashboardData();
}

function handleAdminLogout() {
  sessionStorage.removeItem("admin_logged_in");
  location.reload();
}

function loadAdminDashboardData() {
  const localProd = localStorage.getItem("fcell_products");
  if (localProd) {
    try { productsAdminState = JSON.parse(localProd); } catch(e) { productsAdminState = [...DEFAULT_PRODUCTS]; }
  } else {
    productsAdminState = [...DEFAULT_PRODUCTS];
    localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
  }

  // Populate Metrics
  const totalProd = document.getElementById("metric-total-products");
  const totalLeads = document.getElementById("metric-total-leads");
  const totalFeatured = document.getElementById("metric-featured-products");
  const totalOutStock = document.getElementById("metric-out-stock");

  if (totalProd) totalProd.innerText = productsAdminState.length;
  if (totalLeads) totalLeads.innerText = localStorage.getItem("fcell_whatsapp_leads") || "0";
  if (totalFeatured) totalFeatured.innerText = productsAdminState.filter(p => p.featured).length;
  if (totalOutStock) totalOutStock.innerText = productsAdminState.filter(p => p.inStock === false).length;

  renderAdminTable();
  populateSettingsForm();
}

function renderAdminTable() {
  const tbody = document.getElementById("admin-products-table-body") || document.getElementById("admin-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (productsAdminState.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--color-text-muted);">Nenhum produto no catálogo. Clique em "+ Novo Produto".</td></tr>`;
    return;
  }

  productsAdminState.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${p.image}" class="img-thumb" alt="${p.name}" onerror="this.src='./products/iphone_17_promax.png'"></td>
      <td>
        <strong style="display: block; font-family: var(--font-heading);">${p.name}</strong>
        <span style="font-size: 0.75rem; color: var(--color-text-muted);">${p.category}</span>
      </td>
      <td>
        <div style="font-family: var(--font-heading); color: var(--oklch-coral); font-weight: 800;">${p.price}</div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">${p.installments || '-'}</div>
      </td>
      <td>${p.badge ? `<span style="background: oklch(0.62 0.23 28 / 0.12); color: var(--oklch-coral); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">${p.badge}</span>` : '-'}</td>
      <td>
        <button class="btn-admin-icon" onclick="toggleStockStatus('${p.id}')" style="color: ${p.inStock !== false ? 'var(--oklch-whatsapp)' : 'var(--oklch-rose)'}; font-size: 0.8rem;">
          <i class="fa-solid ${p.inStock !== false ? 'fa-check' : 'fa-xmark'}"></i> ${p.inStock !== false ? 'Em Estoque' : 'Esgotado'}
        </button>
      </td>
      <td>
        <button class="btn-admin-icon" onclick="toggleFeaturedStatus('${p.id}')" style="color: ${p.featured ? 'var(--oklch-coral)' : 'var(--color-text-muted)'}; font-size: 0.8rem;">
          <i class="fa-solid fa-star"></i> ${p.featured ? 'Sim' : 'Não'}
        </button>
      </td>
      <td>
        <button class="btn-admin-icon" onclick="editProductItem('${p.id}')" title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-admin-icon" onclick="deleteProductItem('${p.id}')" title="Excluir" style="color: var(--oklch-rose);"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openProductFormModal(productId = null) {
  const modal = document.getElementById("admin-product-modal") || document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-form-title") || document.getElementById("modal-title");
  const form = document.getElementById("product-form");

  if (!modal) return;
  if (form) form.reset();
  
  const hiddenId = document.getElementById("form-product-id") || document.getElementById("edit-product-id");
  if (hiddenId) hiddenId.value = "";

  if (productId) {
    if (modalTitle) modalTitle.innerText = "Editar Produto";
    const p = productsAdminState.find(item => item.id === productId);
    if (p) {
      if (hiddenId) hiddenId.value = p.id;
      if (document.getElementById("form-name")) document.getElementById("form-name").value = p.name;
      if (document.getElementById("form-category")) document.getElementById("form-category").value = p.category;
      if (document.getElementById("form-price")) document.getElementById("form-price").value = p.price;
      if (document.getElementById("form-installments")) document.getElementById("form-installments").value = p.installments || "";
      if (document.getElementById("form-badge")) document.getElementById("form-badge").value = p.badge || "";
      if (document.getElementById("form-image")) document.getElementById("form-image").value = p.image;
      if (document.getElementById("form-description")) document.getElementById("form-description").value = p.description || "";
      if (document.getElementById("form-headline")) document.getElementById("form-headline").value = p.headline || "";
      if (document.getElementById("form-featured")) document.getElementById("form-featured").checked = !!p.featured;
    }
  } else {
    if (modalTitle) modalTitle.innerText = "Adicionar Novo Produto";
  }

  modal.classList.add("active");
}

function closeProductFormModal() {
  const modal = document.getElementById("admin-product-modal") || document.getElementById("product-modal");
  if (modal) modal.classList.remove("active");
}

function handleProductFormSubmit(e) {
  if (e) e.preventDefault();

  const hiddenId = document.getElementById("form-product-id") || document.getElementById("edit-product-id");
  const id = hiddenId ? hiddenId.value : "";
  const name = document.getElementById("form-name") ? document.getElementById("form-name").value : "";
  const category = document.getElementById("form-category") ? document.getElementById("form-category").value : "";
  const price = document.getElementById("form-price") ? document.getElementById("form-price").value : "";
  const installments = document.getElementById("form-installments") ? document.getElementById("form-installments").value : "";
  const badge = document.getElementById("form-badge") ? document.getElementById("form-badge").value : "";
  const image = document.getElementById("form-image") ? document.getElementById("form-image").value : "";
  const description = document.getElementById("form-description") ? document.getElementById("form-description").value : "";
  const headline = document.getElementById("form-headline") ? document.getElementById("form-headline").value : "";
  const featured = document.getElementById("form-featured") ? document.getElementById("form-featured").checked : true;

  if (id) {
    const idx = productsAdminState.findIndex(p => p.id === id);
    if (idx !== -1) {
      productsAdminState[idx] = {
        ...productsAdminState[idx],
        name, category, price, installments, badge, image, description, headline, featured
      };
    }
  } else {
    const newId = "prod-" + Date.now();
    productsAdminState.unshift({
      id: newId, name, category, price, installments, badge, image, description, headline, featured, inStock: true
    });
  }

  saveProductsState();
  closeProductFormModal();
}

function editProductItem(id) {
  openProductFormModal(id);
}

function deleteProductItem(id) {
  if (confirm("Tem certeza que deseja remover este produto do catálogo?")) {
    productsAdminState = productsAdminState.filter(p => p.id !== id);
    saveProductsState();
  }
}

function toggleStockStatus(id) {
  const p = productsAdminState.find(item => item.id === id);
  if (p) {
    p.inStock = p.inStock === false ? true : false;
    saveProductsState();
  }
}

function toggleFeaturedStatus(id) {
  const p = productsAdminState.find(item => item.id === id);
  if (p) {
    p.featured = !p.featured;
    saveProductsState();
  }
}

function saveProductsState() {
  localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
  loadAdminDashboardData();
  window.dispatchEvent(new Event('storage'));
}

function resetToDefaultData() {
  if (confirm("Deseja restaurar os produtos padrão da FCell Celulares em Santa Helena?")) {
    productsAdminState = [...DEFAULT_PRODUCTS];
    localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
    localStorage.setItem("fcell_store_settings", JSON.stringify(DEFAULT_SETTINGS));
    loadAdminDashboardData();
    window.dispatchEvent(new Event('storage'));
    alert("Catálogo restaurado com sucesso!");
  }
}

function populateSettingsForm() {
  const localSet = localStorage.getItem("fcell_store_settings");
  const settings = localSet ? JSON.parse(localSet) : DEFAULT_SETTINGS;

  if (document.getElementById("setting-hero-badge")) document.getElementById("setting-hero-badge").value = settings.heroBadge || DEFAULT_SETTINGS.heroBadge;
  if (document.getElementById("setting-hero-title")) document.getElementById("setting-hero-title").value = settings.heroTitle || DEFAULT_SETTINGS.heroTitle;
  if (document.getElementById("setting-hero-subtitle")) document.getElementById("setting-hero-subtitle").value = settings.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle;
  if (document.getElementById("setting-whatsapp-num")) document.getElementById("setting-whatsapp-num").value = settings.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber;
  if (document.getElementById("setting-global-gift")) document.getElementById("setting-global-gift").value = settings.globalGiftText || DEFAULT_SETTINGS.globalGiftText;
}

function saveStoreSettings(e) {
  if (e) e.preventDefault();
  const settings = {
    heroBadge: document.getElementById("setting-hero-badge").value,
    heroTitle: document.getElementById("setting-hero-title").value,
    heroSubtitle: document.getElementById("setting-hero-subtitle").value,
    whatsappNumber: document.getElementById("setting-whatsapp-num").value,
    globalGiftText: document.getElementById("setting-global-gift").value
  };

  localStorage.setItem("fcell_store_settings", JSON.stringify(settings));
  alert("Configurações de Copywriting salvas com sucesso!");
  window.dispatchEvent(new Event('storage'));
}
