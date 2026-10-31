import Image from 'next/image';

import { Bubbles } from '@/components/Bubbles';
import { NAV_BY_KEY, type NavKey } from '@/data/site';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

/**
 * Judul: pisahkan baris dengan "|". Kata dalam *tanda bintang* tampil sebagai huruf kuning berkontur.
 */
interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  navKey: NavKey;
  bg?: string;
  seed?: number;
}

function parseTitle(title: string) {
  return title.split('|').map((line) =>
    line
      .split(/(\*[^*]+\*)/g)
      .filter(Boolean)
      .map((part) =>
        part.startsWith('*')
          ? { text: part.slice(1, -1), outline: true }
          : { text: part, outline: false },
      ),
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  navKey,
  bg = 'bg-azure',
  seed = 3,
}: PageHeroProps) {
  const nav = NAV_BY_KEY[navKey];
  const lines = parseTitle(title);

  return (
    <section className={cn('relative overflow-hidden border-b-4 border-ink bg-chart', bg)}>
      <Bubbles count={12} seed={seed} />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 pt-12 pb-20 md:px-8 lg:grid-cols-[1.5fr_1fr] lg:pt-16 lg:pb-28">
        <div>
          <span className="sticker" style={cssVars({ '--r': '-3deg' })}>
            {eyebrow}
          </span>
          <h1 className="jitter mt-5 display text-xxl break-words title-sticker">
            {lines.map((parts, i) => (
              <span key={i} className="block">
                {parts.map((p, j) =>
                  p.outline ? (
                    <span key={j} className="text-sun [-webkit-text-stroke:0.1em_var(--color-ink)]">
                      {p.text}
                    </span>
                  ) : (
                    p.text
                  ),
                )}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl rotate-[0.6deg] bg-paper p-4 text-lg font-medium brut-sm md:text-xl">
            {lead}
          </p>
        </div>
        <div className="relative mx-auto hidden w-full max-w-md lg:block" aria-hidden="true">
          <Image
            src={nav.img}
            alt=""
            loading="eager"
            className="w-full animate-bob [filter:drop-shadow(8px_8px_0_var(--color-ink))]"
          />
        </div>
      </div>
    </section>
  );
}
