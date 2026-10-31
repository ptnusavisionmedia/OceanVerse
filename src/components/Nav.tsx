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
 * - Desktop: panel tetap di sisi kanan berlatar berbeda (simbol + tombol-tombol).
 *   Di Beranda panel disembunyikan karena tombol sudah ada di hero.
 * - Ponsel: gelembung melayang di kanan bawah yang mengembang jadi tumpukan tombol.
 */
export function Nav({ showPanel = true }: { showPanel?: boolean }) {
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
      {/* ===== Desktop: panel kanan ===== */}
      {showPanel && (
        <aside className="fixed inset-y-0 right-0 z-50 hidden w-[17rem] flex-col overflow-y-auto border-l-4 border-ink bg-deep bg-chart-light lg:flex">
          <div className="h-3 shrink-0 bg-stripes" aria-hidden="true" />
          <div className="flex flex-1 flex-col items-center gap-6 px-7 py-6">
            <Link
              href="/"
              aria-label="OceanVerse — ke Beranda"
              className="block [filter:drop-shadow(3px_3px_0_var(--color-ink))] hover:rotate-6"
            >
              <Image
                src={symbol}
                alt="Simbol OceanVerse"
                loading="eager"
                className="h-24 w-24 animate-bob"
              />
            </Link>

            <nav
              aria-label="Menu utama"
              className="flex w-full flex-1 flex-col justify-center gap-5"
            >
              {NAV.map((item, i) => (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-label={item.label}
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  className="dock-link"
                  style={cssVars({ '--tilt': i % 2 ? '2deg' : '-2deg' })}
                >
                  <Image src={item.imgSm} alt="" loading="eager" className="w-full" />
                </Link>
              ))}
            </nav>

            <p className="sticker bg-aqua" style={cssVars({ '--r': '-3deg' })}>
              Discover · Learn · Protect
            </p>
          </div>
        </aside>
      )}

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
              style={cssVars({ '--i': NAV.length - i, '--tilt': i % 2 ? '3deg' : '-4deg' })}
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
