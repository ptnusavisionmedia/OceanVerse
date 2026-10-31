# OceanVerse — situs edukasi laut (neo-brutalism)

Situs **statis** (tanpa database, tanpa server) yang dibangun dari aset desain OceanVerse: logo, simbol,
dan empat tombol navigasi (Home, Explore, Wildlife, Conservation).

## Tech stack

| Lapisan   | Pilihan                                          | Catatan                                                                                      |
| --------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Framework | **Next.js 16** (App Router) + **React 19**       | `output: 'export'` → tiap route menjadi satu file HTML terpisah di folder `out/`             |
| Bahasa    | **TypeScript** (strict)                          | Data konten bertipe; `npm run typecheck`                                                     |
| Styling   | **Tailwind CSS v4**                              | Token warna & font dari aset desain ada di `src/app/globals.css` (blok `@theme`)             |
| Kualitas  | **ESLint** (`eslint-config-next`) + **Prettier** | Prettier + plugin Tailwind merapikan urutan kelas; `eslint-config-prettier` mencegah bentrok |
| Font      | Barlow Condensed (judul) · DM Sans (teks)        | Di-host sendiri lewat Fontsource, tanpa Google Fonts                                         |
| Data      | File TypeScript di `src/data/`                   | Pengganti database; ubah isi file = ubah isi situs                                           |

## Halaman (masing-masing terpisah)

- `/` — Beranda
- `/explore/` — Jelajah Laut (simulator selam, 5 zona, ekosistem, fenomena, Laut Nusantara)
- `/wildlife/` — Biota Laut (filter habitat) + 8 halaman satwa: `/wildlife/<slug>/`
- `/conservation/` — Jaga Laut (ancaman, bukti konservasi, ikrar 12 langkah)
- `404.html` — halaman tidak ditemukan

## Menjalankan

Butuh **Node.js 20.9 atau lebih baru** (disarankan 22 LTS) dari https://nodejs.org.

```bash
npm install          # sekali saja
npm run dev          # pengembangan di http://localhost:3000
npm run build        # hasil produksi ke folder out/
npm run start        # uji hasil build di http://localhost:3000
```

Di Windows, klik dua kali `start.bat` untuk install + menjalankan mode pengembangan.

### Perintah kualitas kode

```bash
npm run lint           # ESLint
npm run lint:fix       # ESLint + perbaiki otomatis
npm run format         # Prettier: rapikan semua file
npm run format:check   # Prettier: hanya cek (untuk CI)
npm run typecheck      # tsc --noEmit
```

## Deploy

Folder `out/` adalah situs lengkap. Unggah ke hosting statis mana pun (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, cPanel). Saat build produksi, isi domain agar URL kanonik & Open Graph benar:

```bash
# macOS/Linux
SITE_URL=https://domainmu.id npm run build
# Windows (PowerShell)
$env:SITE_URL="https://domainmu.id"; npm run build
```

## Mengubah konten

| Ingin mengubah                      | Edit file                                                              |
| ----------------------------------- | ---------------------------------------------------------------------- |
| Satwa laut                          | `src/data/species.ts` (tambah objek baru → otomatis jadi halaman baru) |
| Zona kedalaman, ekosistem, fenomena | `src/data/explore.ts`                                                  |
| Ancaman, langkah ikrar, peringkat   | `src/data/conservation.ts`                                             |
| Fakta acak di beranda               | `src/data/facts.ts`                                                    |
| Daftar pustaka (APA 7)              | `src/data/references.ts`                                               |
| Warna & font                        | `src/app/globals.css` (blok `@theme`)                                  |

Ilustrasi satwa digambar sebagai SVG di `src/components/CreatureArt.tsx` (satwa baru = tambah satu entri
dengan `slug` yang sama).

## Gambar

Aset PNG asli (±1,5 MB) diubah menjadi WebP ringan (30–75 KB) dan disimpan di `src/assets/`.
Bila aset desain berubah, jalankan `npm run images` (membaca folder `../assets`, atau atur
`ASSETS_DIR`), lalu build ulang.

## Struktur

```
src/
  app/            halaman (App Router): layout, template, page.tsx per route, globals.css
  components/     komponen server (Footer, PageHero, ...) dan client (Header, DiveSimulator, ...)
  data/           konten & daftar pustaka (TypeScript)
  assets/         gambar WebP hasil optimasi
  lib/            helper kecil (cn, cssVars)
scripts/          optimize-images.mjs
```

## Palet (diambil dari piksel aset)

`ink #020e46` · `deep #042f7c` · `royal #0357ba` · `azure #0489e7` · `cyan #09c6f7` · `aqua #47ddf7` ·
`mist #8fe6f9` · `foam #cdeef9` · `paper #f7fafb` · aksen satwa: `sun #ffcf24` · `coral #ff5a7a` ·
`kelp #4cb944` · `sand #ecd6b4` · `clown #ff8a2a`

## Catatan konten

Angka dan klaim bersumber ditandai dengan sitasi APA 7 di dalam teks, dengan **Daftar Pustaka**
(DOI/tautan) di akhir tiap halaman. Uraian biologi satwa merangkum pengetahuan umum biologi laut;
verifikasi ke literatur primer sebelum dikutip untuk karya ilmiah. Status IUCN berubah dari waktu ke
waktu — periksa https://www.iucnredlist.org.
