# Sistema de Design & Especificações Visuais (OKLCH) — FCell Celulares

> **Direção Escolhida:** Urban Neon Store (Direção 2)
> **Identidade Visual:** E-Commerce Vibrante & Assistência Técnica Especializada em Cuiabá/MT

---

## 🎯 1. Marca & Frase-Tese de Conversão

- **Marca:** FCell Celulares (Smartphones, Caixas de Som JBL, Starlink, Smartwatches e Assistência Técnica).
- **Frase-Tese de Conversão:**
  > *"A combinação imbatível de smartphones e tecnologia de ponta com a oferta exclusiva do Copo Stanley de brinde, garantia estendida e suporte presencial imediato em Cuiabá."*
- **Público-Alvo:** Consumidores de Cuiabá e Várzea Grande que buscam lançamentos de topo de linha (iPhone, Xiaomi, JBL), internet portátil Starlink e assistência técnica confiável com peças de qualidade e atendimento rápido.
- **Ação Principal de Conversão:** Atendimento imediato via **WhatsApp Direct (`#25D366` / OKLCH)** para consulta de estoque/compras com brinde e solicitação rápida de orçamentos de conserto de celular.

---

## 🎨 2. Sistema de Cores OKLCH

Toda a paleta da aplicação foi construída rigorosamente dentro do espaço de cores **OKLCH**, sem o uso de pretos ou brancos puros soltos (todos os neutros são tintados na matiz de marca para evitar aspecto genérico de IA).

### Paleta Principal Escolhida pelo Cliente:
1. **Coral Neon Vibrant (Accent Principal):** `oklch(0.62 0.23 28)` (`#F5432A`)
2. **Electric Blue (Destaques & Ações Secundárias):** `oklch(0.66 0.18 250)` (`#4795F5`)
3. **Muted Rose (Badges & Destaques Suaves):** `oklch(0.55 0.14 15)` (`#BF5669`)
4. **Tech Cyan (Highlights de Conectividade):** `oklch(0.78 0.14 210)` (`#47CCF5`)
5. **Neon Red (Avisos & Alertas):** `oklch(0.58 0.26 22)` (`#F5142A`)
6. **WhatsApp Green (CTA Conversão):** `oklch(0.65 0.20 142)` (`#25D366`)

### Papéis de Superfície & Neutros Tintados:
- **Fundo Canvas (`bg`):** `oklch(0.98 0.008 250)` (Off-white levemente tintado em azul frio)
- **Superfície dos Cards (`surface`):** `oklch(0.96 0.012 250)` (Superfície limpa para Bento Grid)
- **Superfície Contraste Dark (`surface-dark`):** `oklch(0.14 0.025 250)` (Superfície de alto impacto para cards de destaque)
- **Texto Principal (`ink`):** `oklch(0.14 0.025 250)` (Grafite profundo não-puro)
- **Texto Suave (`ink-muted`):** `oklch(0.48 0.02 250)`

---

## 🔤 3. Tipografia & Escala

- **Título Display:** `Syne` (`font-weight: 800/900`, `letter-spacing: -0.04em`, caixa alta).
- **Cabeçalhos & Utilitários:** `Space Grotesk` (`font-weight: 700`, `letter-spacing: 0.04em`).
- **Texto de Corpo:** `Inter` (`font-weight: 400/500/600`).

### Escala Tipográfica:
- **Hero Title:** `4.5rem` / `72px`
- **Section Heading:** `3rem` / `48px`
- **Card Heading:** `1.4rem` / `22px`
- **Body Text:** `0.95rem` / `15.2px`
- **Badges & Micro-Copy:** `0.75rem` / `12px`

---

## 📐 4. Layout & Espaçamentos (Bento Grid)

- **Bento Stage (Hero):** Layout de 2 colunas com o produto em destaque, badge do Copo Stanley e seletores de série.
- **Bento Trio Grid:** Três cards assimétricos para Starlink, JBL Boombox e Apple Watch Ultra.
- **Filtros por Abas:** Chips de categorias em cápsula com efeito de seleção ativa.
- **Painel Administrativo (`/admin`):** Dashboard limpo com KPI Cards, tabela responsiva com toggles interativos e modais de edição.

---

## 💎 5. Elementos de Assinatura Visual

- **Botões Circulares com Seta (`↗`):** Botão `.btn-arrow-circle` para navegação rápida e expansão de detalhes do produto.
- **Badges de Oferta Exclusiva:** Pílulas com sombra neon realçando *"🎁 Brinde Copo Stanley"*.
- **Marcas D'água Editorial:** Texto gigante vazado no fundo ("FCELL PRO").

---

## 🖼️ 6. Assets & Mídias Utilizadas

- **Logo Oficial:** `./instagram/logo_transparent.png`
- **Miniaturas de Produtos:** `./products/*.png` (iPhone 17 Pro Max, iPhone Air, Starlink Mini, JBL Boombox 3, Suporte Vacuum, AirPods Pro 2, Apple Watch Ultra 2, Redmi Note 13 Pro).
- **Feed do Instagram:** `./instagram/posts/post_X.jpg` (12 imagens reais).

---

## 🚀 7. Roteamento Vercel

Configuração mantida em `vercel.json`:
- `cleanUrls: true`
- Rewrite de `/admin` para `/admin.html`.
