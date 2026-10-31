@echo off
cd /d "%~dp0"
where node >/dev/null 2>/dev/null || (echo Node.js belum terpasang. Unduh versi LTS di https://nodejs.org lalu jalankan ulang. & pause & exit /b 1)
if not exist node_modules (echo Menginstal dependensi... & call npm install)
echo Menjalankan server pengembangan di http://localhost:3000 ...
start "" cmd /c "timeout /t 8 /nobreak >/dev/null & start http://localhost:3000"
call npm run dev
pause
