import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { NextConfig } from 'next';

// Folder proyek ini. Dikunci eksplisit agar Next tidak salah menebak root
// bila ada package-lock.json lain di folder induk (mis. C:\...\OceanVerse\package-lock.json).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/**
 * OceanVerse = situs statis: setiap route menjadi satu file HTML di folder `out/`.
 * Tanpa server, tanpa database. Gambar sudah dioptimasi lebih dulu (npm run images),
 * jadi optimizer bawaan Next dimatikan agar kompatibel dengan hosting statis.
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // /explore/ -> out/explore/index.html
  images: { unoptimized: true },
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  // Tailwind CSS v4 dijalankan lewat loader Turbopack (bawaan create-next-app).
  turbopack: {
    root: projectRoot,
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
