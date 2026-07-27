/* ==========================================================================
   FCELL CELULARES - ADMIN PANEL SCRIPT (`admin.js`)
   ========================================================================== */

const DEFAULT_ADMIN_PIN = "fcell2026";

const INITIAL_PRODUCTS_FALLBACK = [
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
    "headline": "Chegou o Monstro da Apple! Desempenho Implacável & Câmeras Profissionais."
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
    "headline": "Ultra Fino. Ultra Leve. Surpreendentemente Poderoso."
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
    "headline": "Internet Sem Limites Onde Você Estiver!"
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
    "headline": "Som de Verdade & Graves Insanos para a Sua Festa!"
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
    "headline": "Fixação Impecável para Qualquer Modelo de Smartphone."
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
    "headline": "Cancelamento Ativo de Ruído de Nível Pro."
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
    "headline": "O Relógio Mais Resistente e Capaz da Apple."
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
    "headline": "Câmera de 200MP & Carregamento Turbo 67W."
  }
];

let adminProducts = [];
let adminSettings = {};

document.addEventListener('DOMContentLoaded', () => {
  checkAdminAuth();
});

// Authentication Handling
function checkAdminAuth() {
  const isLogged = sessionStorage.getItem('fcell_admin_logged');
  if (isLogged === 'true') {
    document.getElementById('auth-overlay').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    loadAdminData();
  } else {
    document.getElementById('auth-overlay').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
  }
}

function handlePinLogin(e) {
  e.preventDefault();
  const inputPin = document.getElementById('pin-input').value;
  if (inputPin === DEFAULT_ADMIN_PIN) {
    sessionStorage.setItem('fcell_admin_logged', 'true');
    checkAdminAuth();
    showAdminToast('Acesso autorizado! Bem-vindo ao Painel FCell.', 'success');
  } else {
    showAdminToast('PIN incorreto. Tente novamente.', 'error');
    document.getElementById('pin-input').value = '';
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem('fcell_admin_logged');
  checkAdminAuth();
}

// Data Loader
function loadAdminData() {
  const localProd = localStorage.getItem('fcell_products');
  if (localProd) {
    try {
      adminProducts = JSON.parse(localProd);
    } catch (e) {
      adminProducts = [...INITIAL_PRODUCTS_FALLBACK];
    }
  } else {
    adminProducts = [...INITIAL_PRODUCTS_FALLBACK];
    localStorage.setItem('fcell_products', JSON.stringify(adminProducts));
  }

  const localSet = localStorage.getItem('fcell_store_settings');
  if (localSet) {
    try {
      adminSettings = JSON.parse(localSet);
    } catch (e) {
      adminSettings = {};
    }
  }

  updateDashboardMetrics();
  renderAdminProductsTable();
  populateSettingsForm();
}

// Update Dashboard KPI Metrics
function updateDashboardMetrics() {
  const totalProd = adminProducts.length;
  const totalLeads = localStorage.getItem('fcell_whatsapp_leads') || '0';
  const totalFeatured = adminProducts.filter(p => p.featured).length;
  const totalOutStock = adminProducts.filter(p => p.inStock === false).length;

  document.getElementById('metric-total-products').innerText = totalProd;
  document.getElementById('metric-total-leads').innerText = totalLeads;
  document.getElementById('metric-featured-products').innerText = totalFeatured;
  document.getElementById('metric-out-stock').innerText = totalOutStock;
}

// Render Products Management Table
function renderAdminProductsTable() {
  const tbody = document.getElementById('admin-products-table-body');
  if (!tbody) return;

  if (adminProducts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--color-text-muted); padding: 2rem;">
          Nenhum produto cadastrado no banco de dados.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = adminProducts.map(prod => `
    <tr>
      <td>
        <img src="${prod.image}" alt="${prod.name}" class="table-thumb" onerror="this.src='./products/iphone_17_promax.png'">
      </td>
      <td>
        <div style="font-weight: 700; color: #fff;">${prod.name}</div>
        <div style="font-size: 0.75rem; color: var(--color-primary-light);">${prod.category}</div>
      </td>
      <td>
        <div style="font-weight: 700;">${prod.price}</div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">${prod.installments || '-'}</div>
      </td>
      <td>
        <span style="font-size: 0.8rem; background: var(--bg-surface); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          ${prod.badge || 'Nenhum'}
        </span>
      </td>
      <td>
        <label class="switch">
          <input type="checkbox" ${prod.inStock ? 'checked' : ''} onchange="toggleStockStatus('${prod.id}', this.checked)">
          <span class="slider"></span>
        </label>
      </td>
      <td>
        <label class="switch">
          <input type="checkbox" ${prod.featured ? 'checked' : ''} onchange="toggleFeaturedStatus('${prod.id}', this.checked)">
          <span class="slider"></span>
        </label>
      </td>
      <td>
        <div style="display: flex; gap: 0.5rem;">
          <button onclick="openProductFormModal('${prod.id}')" class="btn-admin-link" title="Editar Produto">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="deleteProduct('${prod.id}')" class="btn-admin-link" style="color: #ef4444;" title="Excluir Produto">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Toggle Stock Switch
function toggleStockStatus(id, inStock) {
  const prod = adminProducts.find(p => p.id === id);
  if (prod) {
    prod.inStock = inStock;
    saveProductsState();
    showAdminToast(`Estoque de "${prod.name}" atualizado.`, 'info');
  }
}

// Toggle Featured Switch
function toggleFeaturedStatus(id, featured) {
  const prod = adminProducts.find(p => p.id === id);
  if (prod) {
    prod.featured = featured;
    saveProductsState();
    showAdminToast(`Destaque de "${prod.name}" atualizado.`, 'info');
  }
}

// Delete Product
function deleteProduct(id) {
  const prod = adminProducts.find(p => p.id === id);
  if (!prod) return;

  if (confirm(`Tem certeza que deseja excluir o produto "${prod.name}"?`)) {
    adminProducts = adminProducts.filter(p => p.id !== id);
    saveProductsState();
    showAdminToast(`Produto "${prod.name}" excluído com sucesso.`, 'success');
  }
}

// Save Products to LocalStorage
function saveProductsState() {
  localStorage.setItem('fcell_products', JSON.stringify(adminProducts));
  updateDashboardMetrics();
  renderAdminProductsTable();
}

// Modal Form Handling (Add / Edit)
function openProductFormModal(productId = null) {
  const modal = document.getElementById('admin-product-modal');
  const titleEl = document.getElementById('modal-form-title');

  if (productId) {
    const prod = adminProducts.find(p => p.id === productId);
    if (!prod) return;

    titleEl.innerText = "Editar Produto";
    document.getElementById('form-product-id').value = prod.id;
    document.getElementById('form-name').value = prod.name;
    document.getElementById('form-category').value = prod.category;
    document.getElementById('form-badge').value = prod.badge || '';
    document.getElementById('form-price').value = prod.price;
    document.getElementById('form-installments').value = prod.installments || '';
    document.getElementById('form-image').value = prod.image;
    document.getElementById('form-headline').value = prod.headline || '';
    document.getElementById('form-description').value = prod.description || '';
    document.getElementById('form-instock').checked = prod.inStock !== false;
    document.getElementById('form-featured').checked = prod.featured === true;
  } else {
    titleEl.innerText = "Adicionar Novo Produto";
    document.getElementById('product-form').reset();
    document.getElementById('form-product-id').value = '';
    document.getElementById('form-instock').checked = true;
    document.getElementById('form-featured').checked = false;
  }

  modal.classList.add('active');
}

function closeProductFormModal() {
  const modal = document.getElementById('admin-product-modal');
  modal.classList.remove('active');
}

function handleProductFormSubmit(e) {
  e.preventDefault();
  const idVal = document.getElementById('form-product-id').value;
  const nameVal = document.getElementById('form-name').value.trim();
  const categoryVal = document.getElementById('form-category').value;
  const badgeVal = document.getElementById('form-badge').value.trim();
  const priceVal = document.getElementById('form-price').value.trim();
  const installmentsVal = document.getElementById('form-installments').value.trim();
  const imageVal = document.getElementById('form-image').value.trim();
  const headlineVal = document.getElementById('form-headline').value.trim();
  const descriptionVal = document.getElementById('form-description').value.trim();
  const inStockVal = document.getElementById('form-instock').checked;
  const featuredVal = document.getElementById('form-featured').checked;

  if (idVal) {
    // Edit existing product
    const prod = adminProducts.find(p => p.id === idVal);
    if (prod) {
      prod.name = nameVal;
      prod.category = categoryVal;
      prod.badge = badgeVal;
      prod.price = priceVal;
      prod.installments = installmentsVal;
      prod.image = imageVal;
      prod.headline = headlineVal;
      prod.description = descriptionVal;
      prod.inStock = inStockVal;
      prod.featured = featuredVal;
      showAdminToast(`Produto "${nameVal}" atualizado com sucesso!`, 'success');
    }
  } else {
    // Create new product
    const newId = nameVal.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);
    const newProduct = {
      id: newId,
      name: nameVal,
      category: categoryVal,
      badge: badgeVal,
      price: priceVal,
      installments: installmentsVal,
      image: imageVal,
      headline: headlineVal,
      description: descriptionVal,
      inStock: inStockVal,
      featured: featuredVal
    };
    adminProducts.unshift(newProduct);
    showAdminToast(`Novo produto "${nameVal}" cadastrado com sucesso!`, 'success');
  }

  saveProductsState();
  closeProductFormModal();
}

// Restore Default Initial Products
function resetToDefaultData() {
  if (confirm("Deseja realmente restaurar os produtos para o banco de dados inicial (products_data.json)? Todas as edições personalizadas serão sobrescritas.")) {
    adminProducts = [...INITIAL_PRODUCTS_FALLBACK];
    saveProductsState();
    showAdminToast("Banco de dados restaurado para os padrões com sucesso!", "success");
  }
}

// Copy & Store Settings Handler
function populateSettingsForm() {
  document.getElementById('setting-hero-badge').value = adminSettings.heroBadge || "LOJA OFICIAL & ASSISTÊNCIA EM CUIABÁ";
  document.getElementById('setting-whatsapp-num').value = adminSettings.whatsappNumber || "5565993049734";
  document.getElementById('setting-hero-title').value = adminSettings.heroTitle || 'Smartphones, Acessórios e Suporte de <span class="text-gradient">Alta Performance</span>';
  document.getElementById('setting-hero-subtitle').value = adminSettings.heroSubtitle || "Encontre os últimos lançamentos de iPhones, Caixas JBL, Starlink e Gadgets com garantia oficial e entrega rápida no mesmo dia para Cuiabá e Várzea Grande.";
  document.getElementById('setting-global-gift').value = adminSettings.globalGiftText || "Ganhe Copo Stanley em compras no PIX";
}

function saveStoreSettings(e) {
  e.preventDefault();
  adminSettings.heroBadge = document.getElementById('setting-hero-badge').value.trim();
  adminSettings.whatsappNumber = document.getElementById('setting-whatsapp-num').value.trim();
  adminSettings.heroTitle = document.getElementById('setting-hero-title').value.trim();
  adminSettings.heroSubtitle = document.getElementById('setting-hero-subtitle').value.trim();
  adminSettings.globalGiftText = document.getElementById('setting-global-gift').value.trim();

  localStorage.setItem('fcell_store_settings', JSON.stringify(adminSettings));
  showAdminToast("Configurações e textos de copy salvos com sucesso!", "success");
}

// Toast Helper for Admin
function showAdminToast(message, type = 'info') {
  const container = document.getElementById('admin-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
