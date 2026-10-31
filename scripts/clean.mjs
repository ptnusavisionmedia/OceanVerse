/**
 * Hapus cache build lama (.next). Dipanggil otomatis sebelum `npm run dev` dan `npm run build`
 * agar sisa cache dari versi kode sebelumnya tidak menimbulkan error "Cannot find module".
 *
 * Aman di Windows: folder sering masih terkunci (proses node lama / antivirus), jadi penghapusan
 * dicoba ulang beberapa kali. Jika tetap gagal, script TIDAK menghentikan `npm run dev`;
 * ia hanya memberi peringatan (cache lama biasanya tetap bisa dipakai).
 */
import { rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = process.argv.slice(2).length ? process.argv.slice(2) : ['.next'];

for (const dir of targets) {
  try {
    rmSync(path.join(root, dir), { recursive: true, force: true, maxRetries: 8, retryDelay: 250 });
  } catch (err) {
    const code = err && typeof err === 'object' && 'code' in err ? err.code : 'ERR';
    console.warn(
      `[clean] Tidak bisa menghapus "${dir}" (${code}) — kemungkinan masih dipakai proses lain. ` +
        'Tutup jendela "npm run dev" lain / proses node yang masih jalan, lalu coba lagi. Melanjutkan...',
    );
  }
}
process.exit(0);
