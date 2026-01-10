# Instruções de Configuração - Alfa Esquadrias

## 📋 Próximos Passos para Finalizar o Projeto

### 1. Instalar Dependências
```bash
cd alfa-esquadrias
npm install
```

### 2. Executar o Projeto
```bash
npm run dev
```
O site estará disponível em: http://localhost:3000

### 3. Personalizar Informações da Empresa

#### 📞 Contatos (Arquivos a editar):
- `components/Header.tsx` - Linha 67 e 72
- `components/Contact.tsx` - Linha 45, 51, 57
- `components/Footer.tsx` - Linha 67, 72, 77
- `app/layout.tsx` - Schema.org dados

**Informações a atualizar:**
- Telefone: (18) 99999-9999
- E-mail: contato@alfaesquadrias.com.br
- Endereço completo
- WhatsApp link

### 4. Adicionar Imagens

#### 🖼️ Imagens Necessárias (pasta `public/`):
- `logo.png` - Logo da empresa (baseada na imagem fornecida)
- `favicon.ico` - Ícone do site
- `favicon.svg` - Ícone vetorial
- `apple-touch-icon.png` - Ícone para iOS
- `opengraph-image.jpg` - Imagem para redes sociais (1200x630px)

#### 📸 Imagens de Projetos:
- Fotos de janelas instaladas
- Fotos de portas de alumínio
- Fotos de box para banheiro
- Fotos de estruturas metálicas
- Foto da equipe/empresa

### 5. Configurar Formulário de Contato

#### 📧 Opções de Integração:
1. **FormSubmit** (Recomendado - Gratuito):
   - Editar `components/Contact.tsx` linha 28
   - Alterar action do form para: `https://formsubmit.co/contato@alfaesquadrias.com.br`

2. **EmailJS**:
   - Criar conta em emailjs.com
   - Configurar template de e-mail
   - Integrar no formulário

3. **API própria**:
   - Criar endpoint para envio de e-mails
   - Configurar servidor SMTP

### 6. SEO e Analytics

#### 🔍 Google Analytics:
- Criar conta no Google Analytics
- Adicionar tracking code no `app/layout.tsx`

#### 📊 Google Search Console:
- Verificar propriedade do site
- Enviar sitemap

#### 🗺️ Google My Business:
- Criar/atualizar perfil da empresa
- Adicionar fotos e informações

### 7. Hospedagem

#### 🚀 Opções Recomendadas:
1. **Vercel** (Gratuito):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify** (Gratuito):
   - Conectar repositório GitHub
   - Deploy automático

3. **Hostinger/Locaweb** (Pago):
   - Upload dos arquivos da pasta `out/`
   - Configurar domínio

### 8. Domínio

#### 🌐 Sugestões de Domínio:
- alfaesquadrias.com.br
- alfaesquadriaspp.com.br
- esquadriasalfa.com.br

### 9. Melhorias Futuras

#### 🔄 Funcionalidades Adicionais:
- [ ] Galeria de projetos
- [ ] Blog/Notícias
- [ ] Sistema de orçamento online
- [ ] Chat online
- [ ] Área do cliente
- [ ] Catálogo de produtos
- [ ] Calculadora de orçamento

### 10. Manutenção

#### 🛠️ Tarefas Regulares:
- Atualizar informações de contato
- Adicionar novos projetos na galeria
- Atualizar preços e serviços
- Backup regular do site
- Monitorar performance e SEO

## 📞 Suporte

Para dúvidas sobre o desenvolvimento ou customizações adicionais, entre em contato com o desenvolvedor.

## ✅ Checklist de Lançamento

- [ ] Informações de contato atualizadas
- [ ] Logo e imagens adicionadas
- [ ] Formulário de contato funcionando
- [ ] SEO configurado
- [ ] Site testado em dispositivos móveis
- [ ] Performance otimizada
- [ ] Domínio configurado
- [ ] SSL certificado instalado
- [ ] Google Analytics configurado
- [ ] Backup realizado