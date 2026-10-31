'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import symbol from '@/assets/brand/symbol.webp';
import { NAV } from '@/data/site';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

/**
 * Navigasi tanpa navbar atas:
 * - Desktop: rel vertikal tetap di tepi kiri, tombol aset diputar tegak.
 * - Ponsel: gelembung melayang di kanan bawah yang mengembang jadi tumpukan tombol.
 */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* ===== Desktop: rel kiri ===== */}
      <nav
        aria-label="Menu utama"
        className="fixed inset-y-0 left-0 z-50 hidden w-24 flex-col items-center justify-center gap-[clamp(10px,2vh,22px)] border-r-4 border-ink bg-azure bg-chart lg:flex"
      >
        <Link
          href="/"
          aria-label="OceanVerse — ke Beranda"
          className="absolute top-4 block hover:rotate-12"
        >
          <Image src={symbol} alt="" loading="eager" className="h-14 w-14 animate-bob" />
        </Link>

        {NAV.map((item, i) => (
          <Link
            key={item.key}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            className="rail-link"
            style={cssVars({ '--tilt': i % 2 ? '3deg' : '-3deg' })}
          >
            <Image src={item.imgSm} alt="" loading="eager" />
          </Link>
        ))}
      </nav>

      {/* ===== Ponsel: gelembung melayang ===== */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 lg:hidden">
        {open && (
          <button
            type="button"
            aria-label="Tutup menu"
            tabIndex={-1}
            className="fixed inset-0 -z-10 bg-ink/70"
            onClick={() => setOpen(false)}
          />
        )}

        <div id="mobile-menu" hidden={!open} className="flex flex-col items-end gap-3">
          {NAV.map((item, i) => (
            <Link
              key={item.key}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
              className="nav-link fan-in w-60"
              style={cssVars({
                '--i': NAV.length - i,
                '--tilt': i % 2 ? '3deg' : '-4deg',
              })}
            >
              <Image src={item.imgSm} alt="" className="w-full" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          id="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'grid h-20 w-20 pressable place-items-center rounded-full brut',
            open ? 'bg-coral' : 'bg-sun',
          )}
        >
          {open ? (
            <span className="display text-2xl">Tutup</span>
          ) : (
            <Image src={symbol} alt="" className="h-14 w-14 animate-bob" />
          )}
        </button>
      </div>
    </>
  );
}
