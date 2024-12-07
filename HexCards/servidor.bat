@echo off
:: Navega para o diretório do projeto
cd /d "C:\xampp\htdocs\Prototipos\HexCards"

:: Executa o servidor Node.js
node server.js

:: Mantém a janela aberta caso ocorra erro
pause
