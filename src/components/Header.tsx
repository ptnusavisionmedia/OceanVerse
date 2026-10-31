'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import logo from '@/assets/brand/logo.webp';
import { NAV } from '@/data/site';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Esc menutup menu ponsel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper bg-chart">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-2 md:px-8">
        <Link
          href="/"
          className="block shrink-0 asset-shadow hover:-rotate-2"
          aria-label="OceanVerse — ke Beranda"
          onClick={() => setOpen(false)}
        >
          <Image src={logo} alt="OceanVerse" loading="eager" className="h-11 w-auto md:h-14" />
        </Link>

        <nav aria-label="Menu utama" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="nav-link"
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              aria-label={item.label}
            >
              <Image src={item.imgSm} alt="" loading="eager" className="w-40 xl:w-44" />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="pressable bg-sun px-4 py-1.5 display text-2xl brut-sm lg:hidden"
          aria-expanded={open}
          id="menu-toggle"
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Tutup' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t-4 border-ink bg-foam bg-waves lg:hidden"
      >
        <nav
          aria-label="Menu utama (ponsel)"
          className="mx-auto grid max-w-xl grid-cols-2 gap-3 p-4"
        >
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="nav-link"
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              aria-label={item.label}
              onClick={() => setOpen(false)}
            >
              <Image src={item.imgSm} alt="" className="w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
