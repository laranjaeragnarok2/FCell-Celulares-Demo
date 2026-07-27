// Admin Panel Logic — FCell Celulares

const ADMIN_PIN = "fcell2026";

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("admin_logged_in") === "true") {
    showDashboard();
  }
});

function checkAdminPin() {
  const pinInput = document.getElementById("admin-pin").value;
  if (pinInput === ADMIN_PIN || pinInput === "") { // Default login
    sessionStorage.setItem("admin_logged_in", "true");
    showDashboard();
  } else {
    alert("Senha incorreta! Use: fcell2026");
  }
}

function showDashboard() {
  document.getElementById("login-card").style.display = "none";
  document.getElementById("dashboard-content").style.display = "block";
  loadAdminData();
}

function loadAdminData() {
  const stored = localStorage.getItem("fcell_products");
  const products = stored ? JSON.parse(stored) : [];
  
  // Stats
  document.getElementById("stat-total-products").innerText = products.length;
  
  const leads = JSON.parse(localStorage.getItem("fcell_leads_count") || "0");
  document.getElementById("stat-total-leads").innerText = leads;

  renderAdminTable(products);
}

function renderAdminTable(products) {
  const tbody = document.getElementById("admin-products-table");
  if (!tbody) return;
  tbody.innerHTML = "";

  products.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${p.image}" class="img-thumb" alt="${p.name}"></td>
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td><span style="font-family: var(--font-mono); color: var(--accent); font-weight:700;">${p.price}</span></td>
      <td>${p.badge ? `<span class="badge-tag">${p.badge}</span>` : "-"}</td>
      <td>
        <button class="btn-sm btn-edit" onclick="editProduct('${p.id}')">Editar</button>
        <button class="btn-sm btn-delete" onclick="deleteProduct('${p.id}')">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openProductModal(productId = null) {
  const modal = document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-title");
  const form = document.getElementById("product-form");
  
  form.reset();
  document.getElementById("edit-product-id").value = "";

  if (productId) {
    modalTitle.innerText = "Editar Produto";
    const products = JSON.parse(localStorage.getItem("fcell_products") || "[]");
    const p = products.find(item => item.id === productId);
    if (p) {
      document.getElementById("edit-product-id").value = p.id;
      document.getElementById("prod-name").value = p.name;
      document.getElementById("prod-category").value = p.category;
      document.getElementById("prod-price").value = p.price;
      document.getElementById("prod-installments").value = p.installments || "";
      document.getElementById("prod-badge").value = p.badge || "";
      document.getElementById("prod-image").value = p.image;
      document.getElementById("prod-desc").value = p.description || "";
    }
  } else {
    modalTitle.innerText = "Cadastrar Novo Produto";
  }

  modal.classList.add("active");
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("active");
}

function handleSaveProduct(e) {
  e.preventDefault();
  const id = document.getElementById("edit-product-id").value;
  const name = document.getElementById("prod-name").value;
  const category = document.getElementById("prod-category").value;
  const price = document.getElementById("prod-price").value;
  const installments = document.getElementById("prod-installments").value;
  const badge = document.getElementById("prod-badge").value;
  const image = document.getElementById("prod-image").value;
  const description = document.getElementById("prod-desc").value;

  let products = JSON.parse(localStorage.getItem("fcell_products") || "[]");

  if (id) {
    // Edit
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], name, category, price, installments, badge, image, description };
    }
  } else {
    // Create new
    const newId = "prod-" + Date.now();
    products.push({ id: newId, name, category, price, installments, badge, image, description, featured: false, inStock: true });
  }

  localStorage.setItem("fcell_products", JSON.stringify(products));
  closeProductModal();
  loadAdminData();
}

function editProduct(id) {
  openProductModal(id);
}

function deleteProduct(id) {
  if (confirm("Tem certeza que deseja excluir este produto do catálogo?")) {
    let products = JSON.parse(localStorage.getItem("fcell_products") || "[]");
    products = products.filter(p => p.id !== id);
    localStorage.setItem("fcell_products", JSON.stringify(products));
    loadAdminData();
  }
}

function restoreDefaults() {
  if (confirm("Deseja restaurar o catálogo padrão de produtos da FCell Celulares?")) {
    localStorage.removeItem("fcell_products");
    location.reload();
  }
}
