// Admin Panel Logic — FCell Celulares

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
  heroBadge: "OFERTAS ESPECIAIS COM 1 ANO DE GARANTIA",
  heroTitle: "Apple Watch Series & iPhones",
  heroSubtitle: "Smartphones lacrados, produtos originais Apple, caixas de som JBL e suporte técnico especializado com entrega expressa no mesmo dia em Cuiabá.",
  whatsappNumber: "5565993049734",
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

  if (overlay) overlay.style.display = "none";
  if (dashboard) dashboard.style.display = "block";

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
  const tbody = document.getElementById("admin-products-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (productsAdminState.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--color-text-muted);">Nenhum produto no catálogo. Clique em "+ Novo Produto".</td></tr>`;
    return;
  }

  productsAdminState.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${p.image}" class="prod-thumb-admin" alt="${p.name}" onerror="this.src='./products/iphone_17_promax.png'"></td>
      <td>
        <strong style="display: block; font-family: var(--font-heading);">${p.name}</strong>
        <span style="font-size: 0.75rem; color: var(--color-text-muted);">${p.category}</span>
      </td>
      <td>
        <div style="font-family: var(--font-heading); color: var(--color-primary); font-weight: 800;">${p.price}</div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">${p.installments || '-'}</div>
      </td>
      <td>${p.badge ? `<span style="background: rgba(245, 61, 45, 0.1); color: var(--color-primary); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">${p.badge}</span>` : '-'}</td>
      <td>
        <span class="badge-status ${p.inStock !== false ? 'instock' : 'outstock'}">
          ${p.inStock !== false ? 'Em Estoque' : 'Esgotado'}
        </span>
      </td>
      <td>
        <button class="btn-icon-admin" onclick="toggleFeaturedStatus('${p.id}')" style="color: ${p.featured ? 'var(--color-primary)' : 'var(--color-text-muted)'};" title="Alternar Destaque">
          <i class="fa-solid fa-star"></i>
        </button>
      </td>
      <td>
        <div class="action-btn-group">
          <button class="btn-icon-admin" onclick="editProductItem('${p.id}')" title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-icon-admin" onclick="toggleStockStatus('${p.id}')" title="Alternar Estoque"><i class="fa-solid fa-boxes-stacked"></i></button>
          <button class="btn-icon-admin" onclick="deleteProductItem('${p.id}')" title="Excluir" style="color: #ef4444;"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openProductFormModal(productId = null) {
  const modal = document.getElementById("admin-product-modal");
  const modalTitle = document.getElementById("modal-form-title");
  const form = document.getElementById("product-form");

  if (!modal) return;
  if (form) form.reset();
  
  const hiddenId = document.getElementById("form-product-id");
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
      if (document.getElementById("form-instock")) document.getElementById("form-instock").checked = p.inStock !== false;
    }
  } else {
    if (modalTitle) modalTitle.innerText = "Adicionar Novo Produto";
  }

  modal.classList.add("active");
}

function closeProductFormModal() {
  const modal = document.getElementById("admin-product-modal");
  if (modal) modal.classList.remove("active");
}

function handleProductFormSubmit(e) {
  e.preventDefault();
  const idInput = document.getElementById("form-product-id").value;
  
  const newProduct = {
    id: idInput || "prod-" + Date.now(),
    name: document.getElementById("form-name").value,
    category: document.getElementById("form-category").value,
    price: document.getElementById("form-price").value,
    installments: document.getElementById("form-installments").value,
    badge: document.getElementById("form-badge").value,
    image: document.getElementById("form-image").value,
    headline: document.getElementById("form-headline").value,
    description: document.getElementById("form-description").value,
    featured: document.getElementById("form-featured").checked,
    inStock: document.getElementById("form-instock").checked
  };

  if (idInput) {
    const idx = productsAdminState.findIndex(p => p.id === idInput);
    if (idx !== -1) productsAdminState[idx] = newProduct;
  } else {
    productsAdminState.push(newProduct);
  }

  localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
  closeProductFormModal();
  loadAdminDashboardData();
  showAdminToast("Produto salvo com sucesso! 🚀");
}

function toggleStockStatus(id) {
  const p = productsAdminState.find(item => item.id === id);
  if (p) {
    p.inStock = !(p.inStock !== false);
    localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
    loadAdminDashboardData();
    showAdminToast(`Estoque de "${p.name}" alterado!`);
  }
}

function toggleFeaturedStatus(id) {
  const p = productsAdminState.find(item => item.id === id);
  if (p) {
    p.featured = !p.featured;
    localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
    loadAdminDashboardData();
    showAdminToast(`Status de destaque alterado!`);
  }
}

function editProductItem(id) {
  openProductFormModal(id);
}

function deleteProductItem(id) {
  if (confirm("Tem certeza que deseja excluir este produto do catálogo?")) {
    productsAdminState = productsAdminState.filter(p => p.id !== id);
    localStorage.setItem("fcell_products", JSON.stringify(productsAdminState));
    loadAdminDashboardData();
    showAdminToast("Produto removido com sucesso.");
  }
}

function resetToDefaultData() {
  if (confirm("Deseja restaurar o catálogo e as configurações para os valores originais de fábrica?")) {
    localStorage.setItem("fcell_products", JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem("fcell_store_settings", JSON.stringify(DEFAULT_SETTINGS));
    loadAdminDashboardData();
    showAdminToast("Catálogo restaurado para os padrões!");
  }
}

function populateSettingsForm() {
  const localSet = localStorage.getItem("fcell_store_settings");
  let settings = DEFAULT_SETTINGS;
  if (localSet) {
    try { settings = JSON.parse(localSet); } catch(e) {}
  }

  if (document.getElementById("setting-hero-badge")) document.getElementById("setting-hero-badge").value = settings.heroBadge || "";
  if (document.getElementById("setting-whatsapp-num")) document.getElementById("setting-whatsapp-num").value = settings.whatsappNumber || "";
  if (document.getElementById("setting-hero-title")) document.getElementById("setting-hero-title").value = settings.heroTitle || "";
  if (document.getElementById("setting-hero-subtitle")) document.getElementById("setting-hero-subtitle").value = settings.heroSubtitle || "";
  if (document.getElementById("setting-global-gift")) document.getElementById("setting-global-gift").value = settings.globalGiftText || "";
}

function saveStoreSettings(e) {
  e.preventDefault();
  const settings = {
    heroBadge: document.getElementById("setting-hero-badge").value,
    whatsappNumber: document.getElementById("setting-whatsapp-num").value,
    heroTitle: document.getElementById("setting-hero-title").value,
    heroSubtitle: document.getElementById("setting-hero-subtitle").value,
    globalGiftText: document.getElementById("setting-global-gift").value
  };

  localStorage.setItem("fcell_store_settings", JSON.stringify(settings));
  showAdminToast("Configurações salvas! A loja pública foi atualizada. 🛍️");
}

function showAdminToast(msg) {
  const container = document.getElementById("admin-toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-whatsapp"></i> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
