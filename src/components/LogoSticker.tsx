import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/brand/logo.webp';

/** Logo sebagai stiker miring yang "ditempel" di pojok kanan atas halaman (ikut ter-scroll). */
export function LogoSticker() {
  return (
    <Link
      href="/"
      aria-label="OceanVerse — ke Beranda"
      className="absolute top-12 right-3 z-40 block w-32 rotate-3 asset-shadow hover:scale-110 hover:-rotate-3 sm:w-44 md:right-8 md:w-56"
    >
      <Image src={logo} alt="OceanVerse" loading="eager" className="w-full" />
    </Link>
  );
}
