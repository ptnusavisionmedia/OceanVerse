/**
 * Hapus cache build lama (.next). Dipanggil otomatis sebelum `npm run dev` dan `npm run build`
 * agar sisa cache dari versi kode sebelumnya tidak menimbulkan error "Cannot find module".
 */
import { rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
for (const dir of process.argv.slice(2).length ? process.argv.slice(2) : ['.next']) {
  rmSync(path.join(root, dir), { recursive: true, force: true });
}
