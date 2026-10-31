import Image from 'next/image';
import Link from 'next/link';

import symbol from '@/assets/brand/symbol.webp';
import { NAV, SITE } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-paper">
      <div className="h-4 bg-stripes" aria-hidden="true" />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-chart-light opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex items-center gap-5">
            <Image src={symbol} alt="" className="h-28 w-28 shrink-0 animate-bob md:h-36 md:w-36" />
            <div>
              <p className="display text-4xl md:text-5xl">
                Ocean<span className="text-aqua">Verse.</span>
              </p>
              <p className="mt-2 text-mist">{SITE.tagline}</p>
              <p className="mt-3 flex flex-wrap gap-x-3 display text-xl tracking-wide text-sun">
                {SITE.motto.map((m, i) => (
                  <span key={m}>
                    {m}
                    {i < SITE.motto.length - 1 && <span className="ml-3 text-aqua">·</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <nav aria-label="Menu footer" className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {NAV.map((item) => (
              <Link key={item.key} href={item.href} className="nav-link" aria-label={item.label}>
                <Image src={item.imgSm} alt="" className="w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative border-t-4 border-paper/20">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-4 py-5 text-sm text-mist md:flex-row md:items-center md:justify-between md:px-8">
            <p>© {SITE.year} OceanVerse. Situs edukasi laut untuk semua usia.</p>
            <p className="text-paper/70">
              Dibangun dengan Next.js · React · TypeScript · Tailwind CSS — statis, tanpa database.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
