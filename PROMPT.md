# Master Prompt: Site Oficial FCell Celulares & Painel de Gerenciamento (Pronto para Vercel)

Você foi encarregado de desenvolver a plataforma digital completa para a **FCell Celulares** (loja de smartphones, acessórios e assistência técnica), composta por **duas partes integradas**:
1. **Loja Virtual Pública (Front-End E-commerce):** Landing page moderna, responsiva e de alta conversão.
2. **Painel de Gerenciamento Administrativo (`admin.html`):** Dashboard interativo para gestão de produtos, preços, textos de vendas (copy), brindes e métricas de atendimento.

Toda a aplicação deve ser construída com código limpo, suporte a **deploy instantâneo na Vercel** e armazenamento de estado reativo no cliente (`localStorage` + `products_data.json`).

---

## 📂 Estrutura de Arquivos e Assets do Repositório

```
./
├── PROMPT.md                        # Guia mestre de requisitos e arquitetura
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
- **Hero Section:** Banner dinâmico com título persuasivo, subtítulo e botão de orçamento rápido.

### B. Catálogo Interativo com Filtros:
- Renderização dinâmica dos produtos a partir de `products_data.json` / `localStorage`.
- Filtros por categoria: `[Todos]`, `[Smartphones]`, `[Starlink]`, `[JBL & Áudio]`, `[Acessórios]`, `[Smartwatches]`.
- **Cards de Produto:** Exibir miniatura em `./products/`, badge (ex: *🎁 Brinde Copo Stanley*), preço à vista, parcelamento, cópia resumida e botão *"Comprar no WhatsApp"*.

### C. Seção "Feed Instagram" & Prova Social:
- Grid responsivo de 8 imagens do feed (`./instagram/posts/post_X.jpg`).
- Hover interativo com o texto de cada post (extraído de `POSTS_MANIFEST.json`) e link direto para o Instagram oficial.

### D. Assistência Técnica & Localização:
- Seção sobre conserto de celulares, troca de tela e bateria com garantia.
- Endereços das unidades em Cuiabá (Pantanal Shopping & Shopping Estação).

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
   - **Alternar Estoque / Destaque:** Switches interativos para marcar produto como *"Em Estoque"*, *"Fora de Estoque"* ou *"Destaque na Home"*.
   - **Excluir Produto:** Remoção com confirmação visual.

3. **Gerenciador de Copywriting & Banners:**
   - Campo para editar o Título do Hero, Subtítulo e número do WhatsApp de atendimento.
   - Edição rápida das promoções de brindes (ex: alterar brinde do Copo Stanley).

4. **Sincronização com a Loja:**
   - Qualquer alteração realizada no `admin.html` deve salvar automaticamente no `localStorage` e atualizar instantaneamente a loja pública (`index.html`).
   - Botão *"Restaurar Padrões"* para recarregar o banco inicial de `products_data.json`.

---

## 🚀 Compatibilidade com Deploy na Vercel

- **Static Zero-Config:** Todos os assets utilizam caminhos relativos.
- **Roteamento Limpo:** O arquivo `vercel.json` na raiz deve rotear `/admin` para `admin.html`.

```json
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/admin", "destination": "/admin.html" }
  ]
}
```

---

## 🎯 Instruções Finais para o Antigravity IDE

Ao gerar o código da aplicação:
1. Crie os arquivos `index.html`, `admin.html`, `styles.css`, `script.js` e `admin.js` na raiz.
2. Certifique-se de que o catálogo carregue os produtos das miniaturas limpas em `./products/` e a copy persuasiva descrita em `PRODUCT_COPY.md`.
3. Garanta que o painel administrativo funcione 100% no navegador e seja altamente responsivo.
