# 🏢 Alfa Esquadrias - Site Institucional

![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

Site institucional moderno para a **Alfa Esquadrias de Alumínio**, especializada em esquadrias de alumínio sob medida e vidros temperados em Presidente Prudente - SP.

🌐 **Demo**: [https://alfa-teste2.vercel.app](https://alfa-teste2.vercel.app)  
📦 **Repositório**: [GitHub](https://github.com/GustavoCortezBrito/AlfaTeste2)

---

## ✨ Features

### 🎨 Design & UX
- ✅ Design moderno e profissional
- ✅ Animações suaves com Framer Motion
- ✅ Partículas animadas no background
- ✅ Scroll progress bar
- ✅ Loading screen com logo
- ✅ Modais interativos (Calculadora, Fachada)
- ✅ Marquee de logos/produtos
- ✅ Hover effects elaborados

### 📱 Responsividade
- ✅ 100% responsivo (mobile-first)
- ✅ Breakpoints otimizados (320px - 4K)
- ✅ Menu mobile com hamburger
- ✅ Touch-friendly (botões 44x44px+)
- ✅ Imagens otimizadas para cada tela

### 🚀 Performance
- ✅ Next.js 16 com App Router
- ✅ Server Side Rendering (SSR)
- ✅ Image Optimization automática
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Core Web Vitals otimizados

### 🔍 SEO & Marketing
- ✅ **SEO Completo**: Meta tags, OpenGraph, Twitter Cards
- ✅ **Dados Estruturados**: Schema.org (Organization, LocalBusiness)
- ✅ **SEO para IA**: Contexto para ChatGPT, Claude, Perplexity
- ✅ **Sitemap.xml** e **robots.txt**
- ✅ **PWA Ready**: Manifest, ícones, service worker ready
- ✅ **Analytics Ready**: Google Analytics, Tag Manager

### 📧 Funcionalidades
- ✅ Formulário de contato com Resend
- ✅ Integração WhatsApp (botão flutuante + links)
- ✅ Modal calculadora de esquadrias
- ✅ Galeria de portfólio com 11 projetos reais
- ✅ Filtros de produtos/categorias
- ✅ FAQ com perguntas reais
- ✅ Google Maps integrado
- ✅ Seção de depoimentos

---

## 🛠️ Tecnologias

### Core
- **Next.js 16.2.12** - Framework React
- **TypeScript 5** - Type safety
- **React 19** - UI Library
- **Tailwind CSS 4** - Styling

### Animations & UI
- **Framer Motion 11** - Animações
- **Lucide React** - Ícones
- **Canvas Confetti** - Efeitos de comemoração
- **React Floating WhatsApp** - Widget WhatsApp

### Email & Forms
- **Resend** - Envio de emails

### SEO & Analytics
- Schema.org JSON-LD
- OpenGraph & Twitter Cards
- Sitemap & Robots.txt
- AI-optimized content

---

## 📁 Estrutura do Projeto

```
alfa2/
├── public/
│   ├── projetos-reais/     # Fotos dos projetos
│   ├── fachada.png         # Imagem principal
│   ├── logotipo.png        # Logo da empresa
│   ├── robots.txt          # SEO
│   ├── sitemap.xml         # SEO
│   ├── ai-context.json     # Contexto para IA
│   └── site.webmanifest    # PWA
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/ # API de envio de email
│   │   ├── layout.tsx      # Layout com SEO
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globais
│   └── components/
│       ├── Hero.tsx        # Seção hero
│       ├── Navbar.tsx      # Menu de navegação
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── PortfolioSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── ... (outros)
├── .env.local              # Variáveis de ambiente (local)
├── .env.example            # Template das variáveis
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/GustavoCortezBrito/AlfaTeste2.git
cd AlfaTeste2
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz:
```env
RESEND_API_KEY=sua_chave_aqui
```

### 4. Rode o servidor de desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm start        # Servidor de produção
npm run lint     # Lint do código
```

---

## 🌐 Deploy

### Vercel (Recomendado)

1. **Importe o projeto** no Vercel
2. **Configure a variável de ambiente**:
   ```
   RESEND_API_KEY=sua_chave_resend
   ```
3. **Deploy automático!**

📖 **Guia completo**: [VERCEL-SETUP.md](./VERCEL-SETUP.md)

### Outras Plataformas
- Netlify
- Railway
- Render
- AWS Amplify

---

## 📊 Documentação Adicional

- 📝 [SEO Implementation Summary](./SEO-IMPLEMENTATION-SUMMARY.md)
- ✅ [SEO Checklist](./SEO-CHECKLIST.md)
- 📱 [Responsive Improvements](./RESPONSIVE-IMPROVEMENTS.md)
- 🚀 [Deploy to GitHub](./DEPLOY-TO-GITHUB.md)
- 🎨 [Favicon Instructions](./FAVICON-INSTRUCTIONS.md)

---

## 🎯 Sections do Site

1. **Hero** - Apresentação com CTA
2. **Sobre** - História e diferenciais
3. **Produtos** - 6 categorias de esquadrias
4. **Diferenciais** - 6 pontos fortes
5. **Portfólio** - 11 projetos reais
6. **Depoimentos** - 3 clientes satisfeitos
7. **FAQ** - 5 perguntas frequentes
8. **Contato** - Formulário + mapa + info

---

## 🔐 Variáveis de Ambiente

### Produção
```env
RESEND_API_KEY=re_sua_chave_aqui
```

### Desenvolvimento
Copie `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

---

## 🎨 Customização

### Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  cyan: {...},  // Cor principal
  blue: {...},  // Cor secundária
}
```

### Conteúdo
Edite os componentes em `src/components/`

### Imagens
Substitua as imagens em `public/`

---

## 🐛 Troubleshooting

### Build falha no Vercel
✅ Configure `RESEND_API_KEY` nas Environment Variables

### Imagens não aparecem
✅ Verifique se estão em `public/`
✅ Use caminhos absolutos: `/imagem.png`

### Formulário não funciona
✅ Configure a API key do Resend
✅ Verifique se o endpoint `/api/send-email` está acessível

---

## 📈 Performance

### Lighthouse Score (Target)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s ✅
- **FID**: < 100ms ✅
- **CLS**: < 0.1 ✅

---

## 📞 Contato Alfa Esquadrias

- **WhatsApp**: (18) 3904-5308
- **Email**: contato@alfaesquadrias.com.br
- **Endereço**: Av. Joaquim Constantino, 1880 - Presidente Prudente/SP
- **Site**: https://alfaesquadrias.com.br

---

## 📄 Licença

Este projeto é proprietário da **Alfa Esquadrias de Alumínio**.

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ para a Alfa Esquadrias de Alumínio.

**Versão**: 2.0  
**Última atualização**: Julho 2026
