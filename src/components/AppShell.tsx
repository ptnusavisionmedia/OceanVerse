'use client';

import { usePathname } from 'next/navigation';

import { Nav } from '@/components/Nav';
import { cn } from '@/lib/cn';

/**
 * Kerangka halaman: di Beranda tombol navigasi ada di hero (tanpa panel kanan);
 * di halaman lain panel kanan tampil dan konten diberi ruang (lg:pr-[17rem]).
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === '/';
  return (
    <>
      <Nav showPanel={!isHome} />
      <div className={cn('relative', !isHome && 'lg:pr-[17rem]')}>{children}</div>
    </>
  );
}
