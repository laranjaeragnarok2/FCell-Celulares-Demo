# 📱 FCell Celulares — Site Oficial & Painel de Gerenciamento

> **Plataforma completa de E-Commerce e Dashboard Administrativo de alta conversão** para lojas de smartphones, acessórios premium e assistência técnica. Pronta para **deploy instantâneo na Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![License](https://img.shields.io/badge/license-MIT-orange.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 🌟 Visão Geral da Plataforma

A aplicação foi desenvolvida com foco em **experiência do usuário (UX)**, **estética premium (Dark Mode & Neon Glow)** e **máxima conversão de vendas via WhatsApp**. Ela é dividida em duas áreas totalmente integradas:

1. **Loja Virtual Pública (`index.html`)**: Landing page moderna, responsiva, com catálogo filtrável em tempo real, modais persuasivos de produto e feed do Instagram integrado.
2. **Painel Administrativo (`admin.html` / `/admin`)**: Dashboard interativo protegido por senha/PIN para gestão total de produtos, estoques, destaques e métricas de atendimento.

---

## 🔥 Principais Funcionalidades

### 🛒 1. Loja Virtual (`index.html`)
- **Header Glassmorphic Fixo:** Navegação fluida, logo transparente HD e botão de contato imediato via WhatsApp.
- **Hero Section de Alta Conversão:** Título persuasivo em degradê neon, destaques em Cuiabá/MT, métricas sociais e oferta de brinde do Copo Stanley.
- **Catálogo Interativo com Filtros:**
  - Abas de categorias: `Todos`, `Smartphones`, `Starlink`, `JBL & Áudio`, `Acessórios`, `Smartwatches`.
  - Campo de busca dinâmica por nome ou descrição.
  - Cards com miniaturas limpas em `./products/`, preço à vista, parcelamento e botão *"Comprar no WhatsApp"*.
- **Modal de Detalhes do Produto:** Exibe a copy completa de vendas por produto (extraída de `PRODUCT_COPY.md`), lista de benefícios e botão de ação direta.
- **Assistência Técnica Especializada:** Seção dedicada para orçamento de reparos (troca de tela, bateria, placa e desoxidação).
- **Feed Instagram & Prova Social:** Grid responsivo renderizando fotos reais de `./instagram/posts/` com legendas interativas e link para `@fcellcelularesoficial`.
- **Unidades em Cuiabá:** Localização e horários dos pontos no Pantanal Shopping e Shopping Estação.

### 🛠️ 2. Painel de Gerenciamento (`admin.html`)
- **Autenticação PIN:** Proteção simples por senha (PIN Padrão: `fcell2026`).
- **Dashboard de Métricas KPI:**
  - 📦 Total de produtos cadastrados.
  - 💬 Total de cliques / leads gerados para o WhatsApp.
  - ⭐ Produtos em Destaque na Home.
  - ⚠️ Produtos Fora de Estoque.
- **CRUD Completo de Produtos:**
  - **Adicionar/Editar:** Formulário modal com Nome, Categoria, Preço, Parcelas, Badge, Imagem/URL, Headline e Descrição.
  - **Switches Interativos:** Alternadores em tempo real para *"Em Estoque"* e *"Destaque na Home"*.
  - **Exclusão com Confirmação:** Remoção segura de produtos do catálogo.
- **Editor de Copywriting & WhatsApp:** Altere o número de atendimento, título Hero, subtítulo e texto de ofertas globais sem programar.
- **Sincronização em Tempo Real (`localStorage`):** Qualquer alteração feita no admin reflete instantaneamente na loja pública aberta em outra aba.
- **Restaurar Padrões:** Botão para recarregar as configurações originais do `products_data.json`.

---

## 📂 Estrutura do Repositório

```
./
├── README.md                        # Documentação oficial do projeto
├── PROMPT.md                        # Guia mestre de requisitos e arquitetura
├── PRODUCT_COPY.md                  # Copywriting persuasiva de vendas por produto
├── products_data.json               # Banco de dados inicial em JSON
├── index.html                       # Loja Virtual Pública
├── admin.html                       # Painel Administrativo
├── styles.css                       # Design System completo (Dark Mode, Coral Neon, Glassmorphism)
├── script.js                        # Lógica da Loja Pública (Catálogo, Filtros, Modais, Leads)
├── admin.js                         # Lógica do Painel Admin (Auth PIN, CRUD, KPI Metrics)
├── vercel.json                      # Roteamento limpo Vercel (/admin -> admin.html)
├── products/                        # Miniaturas dos produtos
│   ├── iphone_17_promax.png
│   ├── iphone_air.png
│   ├── starlink_mini.png
│   ├── jbl_boombox_3.png
│   ├── suporte_vacuum.png
│   ├── airpods_pro_2.png
│   ├── apple_watch_ultra.png
│   └── xiaomi_redmi_note_13.png
└── instagram/                       # Branding e assets sociais
    ├── logo.png                     # Logo oficial HD
    ├── logo_transparent.png         # Logo PNG transparente para Header/Footer
    ├── POSTS_MANIFEST.json          # Mapeamento de posts
    └── posts/                       # 12 fotos reais de postagens FCell Celulares
```

---

## 💻 Como Rodar Localmente

Não requer instalação de dependências ou Node.js. Basta rodar um servidor web estático simples ou abrir os arquivos diretamente no navegador:

### Usando Python (Recomendado):
```bash
python3 -m http.server 8000
```
Acesse no navegador:
- **Loja Pública:** `http://localhost:8000`
- **Painel Admin:** `http://localhost:8000/admin.html`

### Usando extensão do VS Code:
Instale a extensão **Live Server** e clique em *"Go Live"*.

---

## 🌐 Deploy na Vercel

O projeto possui **Zero-Config Estático** com suporte nativo à Vercel.

1. Faça o push deste repositório para o seu GitHub.
2. Importe o repositório na [Vercel](https://vercel.com).
3. O arquivo `vercel.json` cuidará do roteamento limpo:
   - A rota `/` renderiza `index.html`
   - A rota `/admin` renderiza `admin.html`
4. Clique em **Deploy**! 🚀

---

## 🔑 Credenciais do Painel Admin

- **URL do Painel:** `/admin` ou `admin.html`
- **PIN de Acesso Padrão:** `fcell2026`

---

## 📄 Licença

Este projeto é disponibilizado sob a licença MIT. Desenvolvido para a **FCell Celulares** Cuiabá/MT.
