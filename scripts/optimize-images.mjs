/**
 * Mengubah aset PNG asli (±1,5 MB per file) menjadi WebP ringan untuk website.
 *
 * Pemakaian:  npm run images
 * Sumber   :  ../assets  (folder aset desain OceanVerse). Ubah dengan ASSETS_DIR=<path>.
 * Keluaran :  src/assets/brand/*.webp  dan  src/assets/buttons/*.webp
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.resolve(root, process.env.ASSETS_DIR ?? '../assets');
const out = path.join(root, 'src', 'assets');

/** [file sumber (relatif ke assets), folder keluaran, nama keluaran, lebar-lebar (px)] */
const jobs = [
  ['oceanverse-logo/01-with-name/oceanverse-logo.png', 'brand', 'logo', [960]],
  ['oceanverse-logo/02-symbol-only/oceanverse-symbol.png', 'brand', 'symbol', [640]],
  ['ocean-buttons/01-home/home.png', 'buttons', 'home', [960, 480]],
  ['ocean-buttons/02-explore/explore.png', 'buttons', 'explore', [960, 480]],
  ['ocean-buttons/03-wildlife/wildlife.png', 'buttons', 'wildlife', [960, 480]],
  ['ocean-buttons/04-conservation/conservation.png', 'buttons', 'conservation', [960, 480]],
];

for (const [src, dir, name, widths] of jobs) {
  await mkdir(path.join(out, dir), { recursive: true });
  for (const [i, width] of widths.entries()) {
    const file = path.join(out, dir, `${name}${i === 0 ? '' : '-sm'}.webp`);
    await sharp(path.join(assets, src))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 92, effort: 5 })
      .toFile(file);
    console.log('✓', path.relative(root, file));
  }
}
