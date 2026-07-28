# 📱 FCell Celulares — Site Oficial & Painel de Gerenciamento

> **Plataforma de E-Commerce e Dashboard Administrativo de Alta Conversão** para a **FCell Celulares** em **Santa Helena de Goiás - GO**.
> 
> 📍 **Endereço Oficial:** Rua Teodomiro Rêgo, 207 - Bairro Centro, Santa Helena de Goiás - GO, CEP 75920-000  
> 📞 **WhatsApp de Vendas:** [(64) 99304-9734](https://wa.me/5564993049734)  
> ⏰ **Horário de Funcionamento:** Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 13:00 | Dom: Fechado  
> 📸 **Instagram:** [@fcell_celular](https://www.instagram.com/fcellcelularesoficial/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![License](https://img.shields.io/badge/license-MIT-orange.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 🌟 Visão Geral da Plataforma

A aplicação foi desenvolvida com foco em **experiência do usuário (UX)**, **estética editorial WATCH PRO E-3 (OKLCH)** e **máxima conversão de vendas via WhatsApp**. Ela é dividida em duas áreas totalmente integradas:

1. **Loja Virtual Pública (`index.html`)**: Landing page moderna, responsiva, com catálogo filtrável em tempo real, modais persuasivos de produto e feed do Instagram integrado.
2. **Painel Administrativo (`admin.html` / `/admin`)**: Dashboard interativo protegido por senha/PIN para gestão total de produtos, estoques, destaques e métricas de atendimento.

---

## 📂 Estrutura de Arquivos Organizada

```
./
├── index.html                       # Loja Virtual Pública
├── admin.html                       # Painel Administrativo (/admin)
├── vercel.json                      # Configuração Vercel (cleanUrls & rewrites)
├── README.md                        # Documentação oficial do projeto
├── .gitignore                       # Ignora temporários e artefatos de build
├── css/
│   └── styles.css                   # Design System OKLCH / WATCH PRO E-3
├── js/
│   ├── script.js                    # Lógica da Loja Pública (Filtros, Busca, Modal, Leads)
│   └── admin.js                     # Lógica do Painel Admin (Auth PIN, CRUD, KPI Metrics)
├── data/
│   ├── products_data.json           # Banco de dados inicial em JSON
│   └── PRODUCT_COPY.md              # Copywriting persuasiva de vendas
├── docs/
│   ├── design.md                    # Especificação do Sistema de Design OKLCH
│   └── design-preview.html          # Preview visual interativo das direções
├── products/                        # Miniaturas dos produtos
│   ├── iphone_17_promax.png
│   ├── iphone_air.png
│   ├── starlink_mini.png
│   ├── jbl_boombox_3.png
│   ├── suporte_vacuum.png
│   ├── airpods_pro_2.png
│   ├── apple_watch_ultra.png
│   └── xiaomi_redmi_note_13.png
└── instagram/                       # Branding e mídias sociais
    ├── logo.png                     # Logo oficial HD
    ├── logo_transparent.png         # Logo PNG transparente para Header/Footer
    ├── POSTS_MANIFEST.json          # Mapeamento do feed
    └── posts/                       # 12 fotos reais dos posts FCell Celulares
```

---

## 💻 Como Rodar Localmente

Não requer instalação de dependências externas. Basta rodar um servidor web estático simples na raiz do projeto:

### Usando Python (Recomendado):
```bash
python3 -m http.server 8000
```
Acesse no navegador:
- **Loja Pública:** `http://localhost:8000`
- **Painel Admin:** `http://localhost:8000/admin.html` (ou `http://localhost:8000/admin`)

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
