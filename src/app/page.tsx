import Image from 'next/image';
import Link from 'next/link';

import symbol from '@/assets/brand/symbol.webp';
import { Bubbles } from '@/components/Bubbles';
import { FactMachine } from '@/components/FactMachine';
import { References } from '@/components/References';
import { WaveDivider } from '@/components/WaveDivider';
import { ZONES } from '@/data/explore';
import { NAV, NAV_BY_KEY } from '@/data/site';
import { SPECIES } from '@/data/species';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

const PORTALS = [NAV_BY_KEY.explore, NAV_BY_KEY.wildlife, NAV_BY_KEY.conservation];
const PORTAL_ROT = ['-rotate-2', 'rotate-1', '-rotate-1'];

const STATS = [
  {
    n: '71%',
    t: 'permukaan Bumi adalah laut',
    cite: 'Smithsonian Ocean, n.d.',
    bg: 'bg-cyan',
    rot: '-rotate-2',
  },
  {
    n: '≈50%',
    t: 'oksigen Bumi diproduksi di laut',
    cite: 'NOAA National Ocean Service, n.d.',
    bg: 'bg-sun',
    rot: 'rotate-1',
  },
  {
    n: '<1%',
    t: 'dasar laut ditempati karang — rumah ±25% spesies laut',
    cite: 'NOAA Florida Keys NMS, n.d.',
    bg: 'bg-coral',
    rot: '-rotate-1',
  },
  {
    n: '28,7%',
    t: 'dasar laut yang sudah terpetakan modern',
    cite: 'International Hydrographic Organization, 2026',
    bg: 'bg-kelp',
    rot: 'rotate-2',
  },
];

const ZONE_BG = ['bg-mist', 'bg-cyan', 'bg-azure', 'bg-royal', 'bg-deep'];
const ZONE_TEXT = ['text-ink', 'text-ink', 'text-ink', 'text-paper', 'text-paper'];
const fmt = (n: number) => n.toLocaleString('id-ID');

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-4 border-ink bg-azure bg-chart">
        <Bubbles count={18} seed={11} />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 pt-12 pb-24 md:px-8 lg:grid-cols-[1.35fr_1fr] lg:pt-16 lg:pb-32">
          <div>
            <span className="sticker" style={cssVars({ '--r': '-3deg' })}>
              A little closer to the ocean
            </span>
            <h1 className="jitter mt-5 display text-mega title-sticker">
              <span className="block">Laut punya</span>
              <span className="block">
                <span className="text-sun [-webkit-text-stroke:0.1em_var(--color-ink)]">
                  banyak
                </span>
              </span>
              <span className="block">cerita.</span>
            </h1>
            <p className="mt-8 max-w-xl rotate-[0.8deg] bg-paper p-4 text-lg font-medium brut-sm md:text-xl">
              Kenali dunianya, temui penghuninya, dan ikut menjaganya. Mulai jelajahmu di sini.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/explore/"
                className="nav-link w-64 sm:w-72"
                aria-label="Mulai Jelajah Laut"
              >
                <Image src={NAV_BY_KEY.explore.img} alt="" loading="eager" className="w-full" />
              </Link>
              <Link href="/conservation/" className="nav-link w-64 sm:w-72" aria-label="Jaga Laut">
                <Image
                  src={NAV_BY_KEY.conservation.img}
                  alt=""
                  loading="eager"
                  className="w-full"
                />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative flex flex-col justify-center gap-4 overflow-hidden leaf-r bg-aqua bg-waves p-6 brut-lg md:p-8">
              <nav aria-label="Menu utama" className="flex flex-col gap-4">
                {NAV.map((item, i) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    aria-label={item.label}
                    className="nav-link"
                    style={cssVars({ '--tilt': i % 2 ? '2deg' : '-2deg' })}
                  >
                    <Image src={item.img} alt="" loading="eager" className="w-full" />
                  </Link>
                ))}
              </nav>
            </div>
            {/* Simbol OceanVerse dipindah ke sini: stiker melayang di pojok kartu tombol */}
            <Image
              src={symbol}
              alt="Simbol OceanVerse: ombak yang melengkung dengan ekor paus"
              loading="eager"
              className="pointer-events-none absolute -top-14 -right-4 z-10 h-32 w-32 rotate-12 animate-bob [filter:drop-shadow(5px_5px_0_var(--color-ink))] md:-right-10 md:h-40 md:w-40"
            />
            <span
              className="absolute top-6 -left-3 sticker text-2xl md:-left-8"
              style={cssVars({ '--r': '-8deg' })}
            >
              71% Bumi = laut
            </span>
            <span
              className="absolute -right-2 bottom-10 sticker bg-coral text-2xl md:-right-6"
              style={cssVars({ '--r': '6deg' })}
            >
              Wajib dijaga!
            </span>
            <span
              className="absolute bottom-[-14px] left-10 sticker bg-paper"
              style={cssVars({ '--r': '-2deg' })}
            >
              Discover · Learn · Protect
            </span>
          </div>
        </div>
      </section>
      <WaveDivider from="var(--color-azure)" to="var(--color-paper)" variant="swell" />

      {/* STATS */}
      <section className="bg-paper bg-waves pt-6 pb-20" aria-labelledby="stats-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="stats-title" className="reveal max-w-4xl display text-xxl">
            Laut itu <span className="bg-ink px-2 text-sun">besar.</span> Dan kita baru kenal
            sedikit.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.n}
                className={cn(
                  'reveal flex pressable flex-col justify-between p-5 brut',
                  s.bg,
                  s.rot,
                )}
                style={cssVars({ '--d': `${i * 90}ms` })}
              >
                <p className="display text-[clamp(4rem,9vw,6rem)]">{s.n}</p>
                <p className="mt-4 text-lg leading-snug font-medium">{s.t}</p>
                <p className="mt-4 text-xs font-semibold opacity-80">({s.cite})</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE SPESIES */}
      <div className="marquee border-y-4 border-ink bg-ink text-sun" role="presentation">
        <div className="marquee__track animate-marquee-rev">
          {[0, 1].map((n) => (
            <div key={n} className="marquee__group" aria-hidden={n === 1 ? true : undefined}>
              {SPECIES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/wildlife/${s.slug}/`}
                  tabIndex={n === 1 ? -1 : undefined}
                  className="flex items-center gap-6 px-6 py-3 display text-4xl whitespace-nowrap hover:text-aqua md:text-6xl"
                >
                  {s.name}
                  <span className="inline-block h-4 w-4 rotate-45 bg-aqua" />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PORTAL */}
      <section className="bg-foam bg-dots py-20" aria-labelledby="portal-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <p className="sticker" style={cssVars({ '--r': '2deg' })}>
            Pilih petualanganmu
          </p>
          <h2 id="portal-title" className="reveal mt-4 display text-xxl">
            Mau ke mana dulu?
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {PORTALS.map((p, i) => (
              <Link
                key={p.key}
                href={p.href}
                className={cn('reveal group flex pressable flex-col brut-lg', p.bg, PORTAL_ROT[i])}
                style={cssVars({ '--d': `${i * 110}ms` })}
              >
                <div className="border-b-4 border-ink bg-paper/40 bg-dots p-4">
                  <Image
                    src={p.img}
                    alt=""
                    className="w-full [filter:drop-shadow(5px_5px_0_var(--color-ink))] transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-2"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="display text-5xl">{p.label}</h3>
                  <p className="mt-3 text-lg font-medium">{p.blurb}</p>
                  <span className="mt-6 btn self-start bg-paper">Buka →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="var(--color-foam)" to="var(--color-sun)" variant="saw" />

      {/* MESIN FAKTA */}
      <section className="bg-sun bg-dots py-20" aria-labelledby="fact-title">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.3fr]">
          <FactMachine />
        </div>
      </section>
      <WaveDivider from="var(--color-sun)" to="var(--color-royal)" variant="wave" />

      {/* PRATINJAU KEDALAMAN */}
      <section className="bg-royal bg-chart-light py-20 text-paper" aria-labelledby="depth-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="depth-title" className="reveal display text-xxl title-sticker">
            Selam 10.935 meter.
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-mist">
            Dari permukaan yang terang sampai Challenger Deep yang gelap abadi — lima zona, lima
            dunia berbeda.
          </p>
          <ol className="mt-12 grid gap-0 border-4 border-paper md:grid-cols-5">
            {ZONES.map((z, i) => (
              <li
                key={z.id}
                className={cn(
                  'reveal border-b-4 border-ink p-5 last:border-b-0 md:border-r-4 md:border-b-0 md:last:border-r-0',
                  ZONE_BG[i],
                  ZONE_TEXT[i],
                )}
                style={cssVars({ '--d': `${i * 90}ms` })}
              >
                <p className="display text-3xl">{z.name}</p>
                <p className="mt-1 font-semibold">{z.nick}</p>
                <p className="mt-6 display text-2xl">
                  {fmt(z.from)}–{fmt(z.to)} <span className="normal-case">m</span>
                </p>
              </li>
            ))}
          </ol>
          <Link href="/explore/" className="mt-10 btn">
            Mulai menyelam →
          </Link>
        </div>
      </section>
      <WaveDivider from="var(--color-royal)" to="var(--color-ink)" variant="saw" />

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink bg-chart-light py-24 text-paper">
        <div className="relative mx-auto max-w-[1100px] px-4 text-center md:px-8">
          <h2 className="reveal display text-xxl">
            Laut tak butuh <span className="text-outline-light">pahlawan super.</span>
            <br />
            Cukup <span className="text-sun">12 langkah kecil.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-mist">
            Centang ikrarmu, naikkan peringkat dari Plankton sampai Paus Biru. Tersimpan di
            perangkatmu sendiri — tanpa akun, tanpa database.
          </p>
          <Link href="/conservation/#ikrar" className="mt-10 btn text-3xl">
            Buat ikrarku →
          </Link>
        </div>
      </section>

      <References
        tone="dark"
        ids={[
          'smithsonian',
          'noaaOxygen',
          'noaaCoral',
          'seabed',
          'challenger',
          'noaaLight',
          'noaaZones',
          'tncRajaAmpat',
        ]}
        note="Fakta tentang satwa pada kartu “Tahukah kamu?” dirangkum dari halaman Biota Laut; rujukan statusnya ada di halaman tersebut."
      />
    </>
  );
}
