# Master Prompt: Site Oficial FCell Celulares & Painel de Gerenciamento (Santa Helena - 18 Anos)

Você foi encarregado de desenvolver a plataforma digital completa para a **FCell Celulares** (loja de smartphones, acessórios e assistência técnica com **18 anos de tradição em Santa Helena**), composta por **duas partes integradas**:
1. **Loja Virtual Pública (Front-End E-commerce):** Landing page moderna, responsiva e de alta conversão.
2. **Painel de Gerenciamento Administrativo (`admin.html`):** Dashboard interativo para gestão de produtos, preços, textos de vendas (copy), brindes e métricas de atendimento.

Toda a aplicação deve ser construída com código limpo, suporte a **deploy instantâneo na Vercel** e armazenamento de estado reativo no cliente (`localStorage` + `products_data.json`).

---

## 📂 Estrutura de Arquivos e Assets do Repositório

```
./
├── PROMPT.md                        # Guia mestre de requisitos e arquitetura
├── PROMPT_DESIGN.md                 # Manual de Design & Prompt Mestre em Português
├── PRODUCT_COPY.md                  # Copywriting persuasiva de vendas por produto
├── products_data.json               # Banco de dados inicial de produtos (JSON)
├── desktop_fullpage.png             # Referência visual de e-commerce (Desktop 1440px)
├── mobile_fullpage.png              # Referência visual (Mobile 375px)
├── source.html                      # Estrutura HTML original de referência
├── vercel.json                      # Configuração de rotas limpas e cache para Vercel
├── products/                        # Miniaturas limpas dos produtos
│   ├── iphone_17_promax.png
│   ├── iphone_air.png
│   ├── starlink_mini.png
│   ├── jbl_boombox_3.png
│   ├── suporte_vacuum.png
│   ├── airpods_pro_2.png
│   ├── apple_watch_ultra.png
│   └── xiaomi_redmi_note_13.png
└── instagram/                       # Branding e mídias sociais
    ├── logo.png                     # Logo oficial HD (1540x1540px)
    ├── logo_transparent.png         # Logo PNG transparente para Header/Footer
    ├── POSTS_MANIFEST.json          # Mapeamento do feed
    └── posts/                       # 12 fotos reais dos posts FCell Celulares
        ├── post_1.jpg ... post_12.jpg
```

---

## 💻 1. Loja Virtual Pública (`index.html`)

### A. Design System & Identidade Visual:
- **Cores:** Laranja / Coral Neon (`#FF5500` / `#FB724B`), Destaques Magenta (`#D300C5`), Dark Mode Elegante (`#0D1117`).
- **Header Glassmorphic Fixo:** Logo `logo_transparent.png` (45px altura), links de menu e botão CTA WhatsApp (`#25D366`).
- **Hero Section:** Banner dinâmico destacando *"FCell Celulares — 18 Anos em Santa Helena"*, com subtítulo e botão de orçamento rápido.

### B. Catálogo Interativo com Filtros:
- Renderização dinâmica dos produtos a partir de `products_data.json` / `localStorage`.
- Filtros por categoria: `[Todos]`, `[Smartphones]`, `[Starlink]`, `[JBL & Áudio]`, `[Acessórios]`, `[Smartwatches]`.
- **Cards de Produto:** Exibir miniatura em `./products/`, badge (ex: *🎁 Brinde Copo Stanley*), preço à vista, parcelamento, cópia resumida e botão *"Comprar no WhatsApp"*.

### C. Seção "Feed Instagram" & Prova Social:
- Grid responsivo de 8 imagens do feed (`./instagram/posts/post_X.jpg`).
- Hover interativo com o texto de cada post (extraído de `POSTS_MANIFEST.json`) e link direto para `@fcellcelularesoficial`.

### D. Assistência Técnica & Localização:
- Seção sobre conserto de celulares, troca de tela e bateria com garantia.
- Destaque da loja física oficial em **Santa Helena (18 Anos de Tradição)**.

---

## 🛠️ 2. Painel de Gerenciamento Administrativo (`admin.html`)

Construa uma interface de administração moderna, intuitiva e protegida por login simples/PIN (ex: senha padrão `fcell2026`).

### Recursos do Painel de Controle:

1. **Dashboard de Métricas:**
   - Total de produtos cadastrados.
   - Total de cliques/leads gerados para o WhatsApp.
   - Status de estoque e promoções ativas.

2. **Gestão de Produtos (CRUD Completo):**
   - **Adicionar Novo Produto:** Formulário modal (Nome, Categoria, Preço, Parcelamento, Badge de Brinde, Seleção de Imagem / URL, Descrição).
   - **Editar Produto Existente:** Alterar preço, estoque, parcelas ou texto da copy em tempo real.
   - **Excluir Produto:** Remoção com confirmação visual.

---

## 🚀 Compatibilidade com Deploy na Vercel

- **Static Zero-Config:** Todos os assets utilizam caminhos relativos.
- **Roteamento Limpo:** O arquivo `vercel.json` na raiz deve rotear `/admin` para `admin.html`.
