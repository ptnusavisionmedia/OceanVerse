import type { NextConfig } from 'next';

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
  // Tailwind CSS v4 dijalankan lewat loader Turbopack (bawaan create-next-app).
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
