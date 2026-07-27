# Sistema de Design & Especificações Visuais (OKLCH) — WATCH PRO E-3

> **Referência Direta:** WATCH PRO E-3 Editorial Layout & Bento Cards
> **Cores:** Espaço de Cores OKLCH com a Paleta do Cliente

---

## 🎯 1. Conceito Visual & Frase-Tese

- **Direção Visual:** Editorial Tech High-Fashion inspirada na layout do WATCH PRO E-3 (Superfície Off-White, Tipografia Gigante Syne, Bento Grid e botões de ação circulares `↗`).
- **Frase-Tese de Conversão:**
  > *"Tecnologia de precisão e smartphones com a oferta do Copo Stanley de brinde, garantia estendida e suporte presencial imediato em Cuiabá."*

---

## 🎨 2. Paleta de Cores OKLCH

- **Primary Accent (Vibrant Coral Red):** `oklch(0.62 0.23 28)` (`#F5432A`)
- **Secondary Blue:** `oklch(0.66 0.18 250)` (`#4795F5`)
- **Tech Cyan:** `oklch(0.78 0.14 210)` (`#47CCF5`)
- **Muted Rose:** `oklch(0.55 0.14 15)` (`#BF5669`)
- **WhatsApp Direct:** `oklch(0.65 0.20 142)` (`#25D366`)

### Neutros Tintados (OKLCH):
- **Canvas Base (`bg-editorial`):** `oklch(0.96 0.005 250)` (`#F4F4F6` Off-White Tintado)
- **Cards (`bg-card`):** `#FFFFFF` (Branco Sólido com Bordas Suaves)
- **Dark Ink (`bg-dark`):** `oklch(0.14 0.025 250)` (`#0D0F12` Grafite Profundo)

---

## 🔤 3. Tipografia

- **Título Display:** `Syne` (`font-weight: 800/900`, `letter-spacing: -0.04em`, caixa alta).
- **Cabeçalhos & Utilitários:** `Space Grotesk` (`font-weight: 700/800`, `letter-spacing: 0.04em`).
- **Corpo de Texto:** `Inter` (`font-weight: 400/500/600`).

---

## 📐 4. Elementos de Assinatura Visual

- **Botões Circulares com Seta (`↗`):** Elemento `.btn-arrow-circle` para links e gatilhos de ação.
- **Pills de Séries & Categorias:** Cápsulas arredondadas com borda sutil e ícone de seta.
- **Cards Bento com Cantos Arredondados:** `border-radius: 28px`.
- **Marca D'água Editorial:** Texto gigante em caixa alta no fundo ("FCELL PRO").

---

## 🚀 5. Deploy & Estrutura Vercel

Mantido suporte nativo em `vercel.json` com reescrita de `/admin` para `admin.html`.
