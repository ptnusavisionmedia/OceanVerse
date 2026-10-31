import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/brand/logo.webp';

/** Logo bertulisan di tempat semula: pojok kiri atas. */
export function LogoBar() {
  return (
    <div className="sticky top-0 z-40 border-b-4 border-ink bg-paper bg-chart">
      <div className="mx-auto max-w-[1320px] px-4 py-2 md:px-8">
        <Link
          href="/"
          aria-label="OceanVerse — ke Beranda"
          className="inline-block asset-shadow hover:-rotate-2"
        >
          <Image src={logo} alt="OceanVerse" loading="eager" className="h-11 w-auto md:h-14" />
        </Link>
      </div>
    </div>
  );
}
