@echo off
echo ========================================
echo  PUSH PARA GITHUB - Alfa Esquadrias
echo ========================================
echo.

cd /d "%~dp0"

echo [1/5] Adicionando todos os arquivos...
git add .

echo.
echo [2/5] Fazendo commit...
git commit -m "feat: novo site Alfa Esquadrias com SEO completo, responsividade mobile e animacoes"

echo.
echo [3/5] Verificando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/GustavoCortezBrito/AlfaTeste2.git

echo.
echo [4/5] Enviando para o GitHub (substituindo tudo)...
echo ATENCAO: Isso vai substituir o conteudo atual do repositorio!
echo.
pause

git push -u origin main --force

echo.
echo [5/5] CONCLUIDO!
echo.
echo Verifique em: https://github.com/GustavoCortezBrito/AlfaTeste2
echo.
pause
