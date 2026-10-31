@echo off
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js belum terpasang. Unduh versi LTS di https://nodejs.org lalu jalankan ulang. & pause & exit /b 1)
if not exist node_modules (echo Menginstal dependensi... & call npm install)
if exist .next rmdir /s /q .next
echo Menjalankan server pengembangan di http://localhost:3000 ...
start "" cmd /c "timeout /t 10 /nobreak >nul & start http://localhost:3000"
call npm run dev
pause
