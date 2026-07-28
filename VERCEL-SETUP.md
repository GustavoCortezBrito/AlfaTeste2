# 🚀 Configuração no Vercel

## Passo a Passo para Deploy

### 1. Acesse o Vercel
- Vá para: https://vercel.com/
- Faça login com sua conta GitHub

### 2. Importe o Projeto
1. Clique em **"Add New Project"** ou **"Import Project"**
2. Selecione o repositório: `GustavoCortezBrito/AlfaTeste2`
3. Clique em **"Import"**

### 3. Configure as Variáveis de Ambiente

**IMPORTANTE**: Antes de fazer deploy, adicione a variável de ambiente:

1. Na tela de configuração do projeto, clique em **"Environment Variables"**
2. Adicione a seguinte variável:

```
Nome: RESEND_API_KEY
Valor: [SUA_CHAVE_RESEND_AQUI]
Ambiente: Production, Preview, Development (selecione todos)
```

**Sua chave Resend**: A chave está no arquivo `.env.local` do projeto local.

### 4. Configurações do Projeto

O Vercel detectará automaticamente que é um projeto Next.js:

- **Framework Preset**: Next.js (auto-detectado)
- **Root Directory**: `./` (padrão)
- **Build Command**: `npm run build` (padrão)
- **Output Directory**: `.next` (padrão)
- **Install Command**: `npm install` (padrão)

### 5. Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (2-3 minutos)
3. Pronto! Seu site estará no ar 🎉

---

## 🔧 Configurações Opcionais

### Domínio Personalizado

1. Acesse o projeto no Vercel
2. Vá em **Settings → Domains**
3. Adicione seu domínio: `alfaesquadrias.com.br`
4. Configure o DNS conforme instruções

### Configurar DNS

Na Hostinger ou seu provedor de DNS:

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

---

## 📊 Após o Deploy

### URLs do Projeto

Você terá 3 URLs:
1. **Produção**: `https://alfa-teste2.vercel.app`
2. **Preview**: URLs únicas para cada commit
3. **Custom Domain**: `https://alfaesquadrias.com.br` (se configurado)

### Analytics

Vercel já inclui analytics grátis:
- Acesse: **Analytics** no menu do projeto
- Veja visitantes, performance, etc.

---

## 🐛 Troubleshooting

### Erro: "Missing API key"
✅ **Solução**: Adicione a variável `RESEND_API_KEY` nas Environment Variables

### Build falhou
1. Veja os logs no Vercel
2. Verifique se todas as dependências estão no `package.json`
3. Tente rodar `npm run build` localmente

### Imagens não aparecem
- As imagens em `public/` são servidas automaticamente
- URLs: `/nome-da-imagem.png`

### Formulário não funciona
- Verifique se a variável `RESEND_API_KEY` está configurada
- Teste localmente com `.env.local`
- Veja os logs da função no Vercel

---

## ⚡ Performance

### Core Web Vitals

O Vercel monitora automaticamente:
- **LCP**: < 2.5s ✅
- **FID**: < 100ms ✅
- **CLS**: < 0.1 ✅

### Otimizações Automáticas

Vercel já otimiza:
- ✅ Compressão Brotli/GZIP
- ✅ CDN global
- ✅ Cache automático
- ✅ Image optimization
- ✅ Edge Functions

---

## 🔄 Atualizações Futuras

### Deploy Automático

Configurado! Sempre que você fizer push para `main`:
1. Vercel detecta o commit
2. Faz build automaticamente
3. Deploy em produção (se build passou)

### Preview Deploys

Cada Pull Request gera uma URL de preview automática!

---

## 📱 Mobile & PWA

Para tornar Progressive Web App (futuro):

1. O `site.webmanifest` já está criado
2. Adicione Service Worker se quiser (opcional)
3. Vercel serve automaticamente

---

## ✅ Checklist Pós-Deploy

- [ ] Site está no ar
- [ ] Formulário de contato funciona
- [ ] WhatsApp button funciona
- [ ] Imagens carregam corretamente
- [ ] Performance no PageSpeed > 90
- [ ] Mobile funcionando bem
- [ ] SEO no Google Search Console
- [ ] Analytics configurado

---

## 🆘 Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **Logs**: Acesse **Deployments → Logs**
- **Status**: https://vercel-status.com

---

**Pronto para deploy!** 🚀

Lembre-se: **Configure a variável RESEND_API_KEY antes de fazer deploy!**
