import type { Metadata } from 'next';
import Link from 'next/link';

import { Bubbles } from '@/components/Bubbles';
import { CreatureArt } from '@/components/CreatureArt';
import { cssVars } from '@/lib/css';

export const metadata: Metadata = {
  title: 'Halaman tidak ditemukan',
  description: 'Halaman yang kamu cari tidak ada di OceanVerse.',
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b-4 border-ink bg-royal bg-chart-light py-20 text-paper">
      <Bubbles count={14} seed={21} />
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-10 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <span className="sticker bg-coral" style={cssVars({ '--r': '-4deg' })}>
            Error · hilang di laut
          </span>
          <h1 className="mt-4 display text-mega title-sticker">404</h1>
          <p className="mt-2 display text-4xl">Kamu tersesat di laut dalam.</p>
          <p className="mt-4 max-w-md text-xl text-mist">
            Halaman yang kamu cari tidak ada atau sudah hanyut. Yuk kembali ke permukaan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="btn">
              Ke beranda →
            </Link>
            <Link href="/explore/" className="btn bg-paper">
              Jelajah laut
            </Link>
          </div>
        </div>
        <div className="leaf bg-aqua bg-waves p-8 brut-lg">
          <CreatureArt slug="paus-biru" className="w-full animate-bob" />
        </div>
      </div>
    </section>
  );
}
