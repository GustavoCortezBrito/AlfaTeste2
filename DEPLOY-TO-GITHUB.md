# 🚀 Deploy para GitHub - Substituir Projeto Existente

## Passo a Passo para Substituir o Projeto

### Opção 1: Substituir Completamente (RECOMENDADO)

```bash
# 1. Navegue até a pasta do projeto atual
cd "c:\Users\gujjb\OneDrive\Desktop\Dev-Freelance\alfa2"

# 2. Inicialize o Git (se ainda não foi feito)
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o commit inicial
git commit -m "feat: novo site Alfa Esquadrias com SEO completo e responsividade mobile"

# 5. Adicione o repositório remoto (forçar se já existir)
git remote add origin https://github.com/GustavoCortezBrito/AlfaTeste2.git

# OU se já existir, atualize a URL:
git remote set-url origin https://github.com/GustavoCortezBrito/AlfaTeste2.git

# 6. Force push para substituir tudo (CUIDADO: isso apaga o histórico anterior)
git push -u origin main --force
```

### Opção 2: Substituir Mantendo Histórico

```bash
# 1. Navegue até a pasta do projeto
cd "c:\Users\gujjb\OneDrive\Desktop\Dev-Freelance\alfa2"

# 2. Clone o repositório existente em uma pasta temporária
cd ..
git clone https://github.com/GustavoCortezBrito/AlfaTeste2.git alfa2-temp

# 3. Copie a pasta .git do repositório clonado
xcopy /E /I /H "alfa2-temp\.git" "alfa2\.git"

# 4. Volte para a pasta do projeto
cd alfa2

# 5. Adicione todos os arquivos
git add .

# 6. Faça o commit
git commit -m "feat: nova versão completa do site Alfa Esquadrias"

# 7. Force push
git push origin main --force

# 8. Limpe a pasta temporária
cd ..
rmdir /s /q alfa2-temp
```

### Opção 3: Via GitHub Desktop (MAIS FÁCIL)

1. **Baixe o GitHub Desktop**: https://desktop.github.com/
2. **Abra o GitHub Desktop**
3. **File → Clone Repository**
4. **Selecione**: `GustavoCortezBrito/AlfaTeste2`
5. **Clone para**: `C:\Users\gujjb\Desktop\AlfaTeste2-clone`
6. **Copie TODOS os arquivos** do projeto atual (`alfa2`) para a pasta clonada
7. **No GitHub Desktop**:
   - Veja todas as mudanças
   - Escreva a mensagem: "Nova versão completa do site"
   - Clique em "Commit to main"
   - Clique em "Push origin"

---

## 📝 Checklist Antes de Fazer Push

### Arquivos Importantes
- [x] `src/` - Todo o código fonte
- [x] `public/` - Imagens e assets
- [x] `package.json` - Dependências
- [x] `next.config.ts` - Configuração Next.js
- [x] `tailwind.config.ts` - Configuração Tailwind
- [x] `tsconfig.json` - Configuração TypeScript
- [x] `.gitignore` - Arquivos ignorados
- [x] `README.md` - Documentação
- [x] Arquivos SEO (robots.txt, sitemap.xml, etc.)

### Arquivos para NÃO incluir (já no .gitignore)
- [ ] `node_modules/` - NÃO enviar
- [ ] `.next/` - NÃO enviar
- [ ] `.env.local` - NÃO enviar (se tiver)

---

## 🔧 Verificar .gitignore

Certifique-se que o `.gitignore` contém:

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## 🚀 Deploy no Vercel (OPCIONAL - após GitHub)

### Via Vercel CLI
```bash
# 1. Instale o Vercel CLI
npm i -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel --prod
```

### Via Vercel Dashboard
1. Acesse: https://vercel.com/
2. **New Project**
3. **Import Git Repository**
4. Selecione: `GustavoCortezBrito/AlfaTeste2`
5. **Framework**: Next.js (detectado automaticamente)
6. **Root Directory**: `./`
7. Clique em **Deploy**

---

## 📋 Comandos Úteis do Git

```bash
# Ver status
git status

# Ver histórico
git log --oneline

# Ver arquivos ignorados
git status --ignored

# Desfazer último commit (mantendo mudanças)
git reset --soft HEAD~1

# Desfazer último commit (apagando mudanças)
git reset --hard HEAD~1

# Ver repositório remoto
git remote -v

# Atualizar do GitHub
git pull origin main

# Ver diferenças
git diff
```

---

## ⚠️ IMPORTANTE: Backup

**ANTES de fazer push force, faça backup:**

```bash
# Criar backup da pasta atual
xcopy /E /I "c:\Users\gujjb\OneDrive\Desktop\Dev-Freelance\alfa2" "c:\Users\gujjb\OneDrive\Desktop\Dev-Freelance\alfa2-backup"
```

---

## 🎯 Passo a Passo Simplificado (RECOMENDADO)

1. **Abra o Git Bash ou PowerShell** na pasta do projeto
2. Execute os comandos:

```bash
cd "c:\Users\gujjb\OneDrive\Desktop\Dev-Freelance\alfa2"
git init
git add .
git commit -m "feat: novo site Alfa Esquadrias completo"
git remote add origin https://github.com/GustavoCortezBrito/AlfaTeste2.git
git push -u origin main --force
```

3. **Pronto!** O repositório foi atualizado.

---

## 🔍 Verificar se Funcionou

1. Acesse: https://github.com/GustavoCortezBrito/AlfaTeste2
2. Verifique se os arquivos estão lá
3. Veja se o commit aparece
4. Confira a data do último commit

---

## 🆘 Problemas Comuns

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/GustavoCortezBrito/AlfaTeste2.git
```

### Erro: "Permission denied"
- Configure suas credenciais do GitHub
- Use Personal Access Token se necessário

### Erro: "Your branch is behind"
```bash
git push origin main --force
```

### Arquivos muito grandes
- Verifique se `node_modules/` não está sendo enviado
- Confira o `.gitignore`

---

## ✅ Checklist Final

- [ ] Backup feito
- [ ] Git inicializado
- [ ] Todos arquivos adicionados
- [ ] Commit feito
- [ ] Push concluído
- [ ] Repositório verificado no GitHub
- [ ] README.md visível
- [ ] Não enviou node_modules/
- [ ] .gitignore funcionando

---

**Agora é só seguir os passos e seu projeto estará no GitHub!** 🎉
