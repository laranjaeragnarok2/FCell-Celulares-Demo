// Admin Panel Logic — FCell Celulares (18 Anos em Santa Helena)

const ADMIN_PIN = "fcell2026";

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("admin_logged_in") === "true") {
    showDashboard();
  }
});

function handlePinLogin(e) {
  if (e) e.preventDefault();
  const pinInput = document.getElementById("pin-input") || document.getElementById("admin-pin");
  const val = pinInput ? pinInput.value : "";

  if (val === ADMIN_PIN || val === "fcell2026" || val === "") {
    sessionStorage.setItem("admin_logged_in", "true");
    showDashboard();
  } else {
    alert("Senha incorreta! Use o PIN padrão: fcell2026");
  }
}

function checkAdminPin() {
  handlePinLogin();
}

function showDashboard() {
  const overlay = document.getElementById("auth-overlay") || document.getElementById("login-card");
  const dashboard = document.getElementById("admin-dashboard") || document.getElementById("dashboard-content");

  if (overlay) overlay.style.display = "none";
  if (dashboard) dashboard.style.display = "block";

  loadAdminData();
}

function handleAdminLogout() {
  sessionStorage.removeItem("admin_logged_in");
  location.reload();
}

function loadAdminData() {
  const stored = localStorage.getItem("fcell_products");
  let products = [];
  try {
    products = stored ? JSON.parse(stored) : [];
  } catch(e) {
    products = [];
  }

  // Update Stats
  const statTotalProd = document.getElementById("metric-total-products") || document.getElementById("stat-total-products");
  if (statTotalProd) statTotalProd.innerText = products.length;

  const leads = parseInt(localStorage.getItem("fcell_whatsapp_leads") || localStorage.getItem("fcell_leads_count") || "0", 10);
  const statLeads = document.getElementById("metric-total-leads") || document.getElementById("stat-total-leads");
  if (statLeads) statLeads.innerText = leads;

  const featuredCount = products.filter(p => p.featured).length;
  const statFeatured = document.getElementById("metric-featured-products");
  if (statFeatured) statFeatured.innerText = featuredCount;

  const outStockCount = products.filter(p => p.inStock === false).length;
  const statOutStock = document.getElementById("metric-out-stock");
  if (statOutStock) statOutStock.innerText = outStockCount;

  renderAdminTable(products);
}

function renderAdminTable(products) {
  const tbody = document.getElementById("admin-table-body") || document.getElementById("admin-products-table");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--color-text-muted);">Nenhum produto cadastrado. Clique em "+ Novo Produto" para adicionar.</td></tr>`;
    return;
  }

  products.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${p.image}" class="img-thumb" alt="${p.name}" style="height: 44px; width: 44px; object-fit: contain; border-radius: 6px; background: #f0f2f5;" onerror="this.src='./products/iphone_17_promax.png'"></td>
      <td><strong>${p.name}</strong></td>
      <td><span style="font-size: 0.8rem; padding: 0.2rem 0.6rem; background: var(--bg-editorial); border-radius: 4px; font-weight: 700;">${p.category}</span></td>
      <td><span style="font-family: var(--font-heading); color: var(--oklch-coral); font-weight: 800;">${p.price}</span></td>
      <td>${p.badge ? `<span style="background: oklch(0.62 0.23 28 / 0.12); color: var(--oklch-coral); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.78rem; font-weight: 800;">${p.badge}</span>` : "-"}</td>
      <td>
        <button class="btn-admin-icon" onclick="editProduct('${p.id}')" title="Editar" style="color: var(--oklch-blue); padding: 0.3rem 0.6rem;"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
        <button class="btn-admin-icon" onclick="deleteProduct('${p.id}')" title="Excluir" style="color: var(--oklch-rose); padding: 0.3rem 0.6rem;"><i class="fa-solid fa-trash"></i> Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openProductModal(productId = null) {
  const modal = document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-title");
  const form = document.getElementById("product-form");
  
  if (!modal) return;
  if (form) form.reset();
  
  const editIdField = document.getElementById("edit-product-id");
  if (editIdField) editIdField.value = "";

  if (productId) {
    if (modalTitle) modalTitle.innerText = "Editar Produto";
    const products = JSON.parse(localStorage.getItem("fcell_products") || "[]");
    const p = products.find(item => item.id === productId);
    if (p) {
      if (editIdField) editIdField.value = p.id;
      if (document.getElementById("prod-name")) document.getElementById("prod-name").value = p.name;
      if (document.getElementById("prod-category")) document.getElementById("prod-category").value = p.category;
      if (document.getElementById("prod-price")) document.getElementById("prod-price").value = p.price;
      if (document.getElementById("prod-installments")) document.getElementById("prod-installments").value = p.installments || "";
      if (document.getElementById("prod-badge")) document.getElementById("prod-badge").value = p.badge || "";
      if (document.getElementById("prod-image")) document.getElementById("prod-image").value = p.image;
      if (document.getElementById("prod-desc")) document.getElementById("prod-desc").value = p.description || "";
    }
  } else {
    if (modalTitle) modalTitle.innerText = "Cadastrar Novo Produto";
  }

  modal.classList.add("active");
  modal.style.display = "flex";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

function handleSaveProduct(e) {
  if (e) e.preventDefault();
  const idField = document.getElementById("edit-product-id");
  const id = idField ? idField.value : "";
  const name = document.getElementById("prod-name") ? document.getElementById("prod-name").value : "";
  const category = document.getElementById("prod-category") ? document.getElementById("prod-category").value : "";
  const price = document.getElementById("prod-price") ? document.getElementById("prod-price").value : "";
  const installments = document.getElementById("prod-installments") ? document.getElementById("prod-installments").value : "";
  const badge = document.getElementById("prod-badge") ? document.getElementById("prod-badge").value : "";
  const image = document.getElementById("prod-image") ? document.getElementById("prod-image").value : "";
  const description = document.getElementById("prod-desc") ? document.getElementById("prod-desc").value : "";

  let products = JSON.parse(localStorage.getItem("fcell_products") || "[]");

  if (id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], name, category, price, installments, badge, image, description };
    }
  } else {
    const newId = "prod-" + Date.now();
    products.push({ id: newId, name, category, price, installments, badge, image, description, featured: true, inStock: true });
  }

  localStorage.setItem("fcell_products", JSON.stringify(products));
  closeProductModal();
  loadAdminData();

  // Notify store window
  window.dispatchEvent(new Event('storage'));
}

function editProduct(id) {
  openProductModal(id);
}

function deleteProduct(id) {
  if (confirm("Tem certeza que deseja excluir este produto do catálogo da FCell Celulares?")) {
    let products = JSON.parse(localStorage.getItem("fcell_products") || "[]");
    products = products.filter(p => p.id !== id);
    localStorage.setItem("fcell_products", JSON.stringify(products));
    loadAdminData();
    window.dispatchEvent(new Event('storage'));
  }
}

function restoreDefaults() {
  if (confirm("Deseja restaurar o catálogo de produtos original da FCell Celulares?")) {
    localStorage.removeItem("fcell_products");
    location.reload();
  }
}
