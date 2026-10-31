import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Bubbles } from '@/components/Bubbles';
import { CreatureArt } from '@/components/CreatureArt';
import { References } from '@/components/References';
import { WaveDivider } from '@/components/WaveDivider';
import { HABITATS, SPECIES, SPECIES_BY_SLUG, STATUS } from '@/data/species';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

// Halaman statis: hanya slug yang dikenal yang dibuat saat build.
export const dynamicParams = false;

export function generateStaticParams() {
  return SPECIES.map((s) => ({ slug: s.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = SPECIES_BY_SLUG[slug];
  if (!s) return {};
  return { title: s.name, description: `${s.name} (${s.latin}): ${s.tagline}` };
}

const NOTE =
  'Kode status mengacu pada Daftar Merah IUCN; periksa situs IUCN untuk penilaian terbaru. Uraian biologi merangkum pengetahuan umum biologi laut dan sebaiknya diverifikasi ke literatur primer bila dikutip untuk karya ilmiah.';

export default async function SpeciesPage({ params }: PageProps) {
  const { slug } = await params;
  const s = SPECIES_BY_SLUG[slug];
  if (!s) notFound();

  const index = SPECIES.findIndex((x) => x.slug === slug);
  const prev = SPECIES[(index - 1 + SPECIES.length) % SPECIES.length];
  const next = SPECIES[(index + 1) % SPECIES.length];
  const st = STATUS[s.status];
  const habitat = HABITATS[s.habitat];

  const quick = [
    { k: 'Ukuran', v: s.size, bg: 'bg-aqua' },
    ...(s.lifespan ? [{ k: 'Umur', v: s.lifespan, bg: 'bg-mist' }] : []),
    { k: 'Makanan', v: s.diet, bg: 'bg-sun' },
    { k: 'Rumah', v: `${habitat.label} — ${habitat.blurb}`, bg: 'bg-coral' },
  ];
  const refIds = [
    'iucn',
    ...(slug === 'penyu-hijau' ? ['greenTurtleOceanic', 'greenTurtleMongabay'] : []),
  ];

  return (
    <>
      {/* HERO */}
      <section className={cn('relative overflow-hidden border-b-4 border-ink bg-chart', s.bg)}>
        <Bubbles count={10} seed={s.slug.length} />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 pt-8 pb-20 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:pb-28">
          <div>
            <Link href="/wildlife/" className="btn bg-paper !py-1.5 !text-xl">
              ← Semua biota
            </Link>
            <p className="mt-8 flex flex-wrap gap-3">
              <span className={cn('sticker', st.cls)} style={cssVars({ '--r': '-3deg' })}>
                {s.status} · {st.label}
              </span>
              <span className="sticker bg-paper" style={cssVars({ '--r': '2deg' })}>
                {s.group}
              </span>
            </p>
            <h1 className="jitter mt-4 display text-mega break-words title-sticker">{s.name}</h1>
            <p className="mt-4 text-2xl font-bold italic">{s.latin}</p>
            <p className="mt-8 max-w-xl rotate-[0.6deg] bg-paper p-4 text-xl font-medium brut-sm">
              {s.tagline}
            </p>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="leaf bg-paper bg-waves p-6 brut-lg">
              <CreatureArt slug={s.slug} className="w-full animate-bob" />
            </div>
          </div>
        </div>
      </section>
      <WaveDivider
        from={`var(--color-${s.bg.replace('bg-', '')})`}
        to="var(--color-paper)"
        variant="wave"
      />

      {/* PROFIL SINGKAT */}
      <section className="bg-paper bg-waves pt-6 pb-16" aria-labelledby="quick-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="quick-title" className="reveal display text-xxl">
            Profil singkat
          </h2>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {quick.map((q, i) => (
              <div
                key={q.k}
                className={cn('reveal pressable p-5 brut', q.bg, i % 2 ? 'rotate-1' : '-rotate-1')}
                style={cssVars({ '--d': `${i * 70}ms` })}
              >
                <dt className="display text-2xl">{q.k}</dt>
                <dd className="mt-2 text-lg leading-snug font-bold">{q.v}</dd>
              </div>
            ))}
          </dl>
          {s.statusNote && (
            <p className="mt-8 max-w-3xl bg-foam p-4 font-medium brut-sm">
              <strong>Catatan status:</strong> {s.statusNote}
              {slug === 'penyu-hijau' && ' (Oceanic Society, 2025; Mongabay, 2025)'}
            </p>
          )}
        </div>
      </section>

      {/* FAKTA SERU */}
      <section
        className="on-dark border-y-4 border-ink bg-ink bg-chart-light py-20 text-paper"
        aria-labelledby="facts-title"
      >
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="facts-title" className="reveal display text-xxl title-sticker">
            Fakta seru
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {s.facts.map((f, i) => (
              <li
                key={f}
                className={cn(
                  'reveal bg-paper p-6 text-ink brut-lg',
                  i === 1 ? 'rotate-1' : '-rotate-1',
                )}
                style={cssVars({ '--d': `${i * 90}ms` })}
              >
                <span className="grid h-14 w-14 place-items-center border-4 border-ink bg-sun display text-3xl">
                  {i + 1}
                </span>
                <p className="mt-4 text-xl leading-snug font-bold">{f}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DI INDONESIA */}
      <section className={cn('border-b-4 border-ink py-16', s.bg)} aria-labelledby="id-title">
        <div className="mx-auto max-w-[1100px] px-4 md:px-8">
          <p className="sticker" style={cssVars({ '--r': '-2deg' })}>
            Merah putih
          </p>
          <h2 id="id-title" className="mt-3 display text-5xl md:text-7xl">
            Di perairan Indonesia
          </h2>
          <p className="mt-6 bg-paper p-6 text-xl font-medium brut">{s.indonesia}</p>
        </div>
      </section>

      {/* ANCAMAN & BANTU */}
      <section className="bg-paper bg-waves py-20" aria-labelledby="help-title">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 md:px-8 lg:grid-cols-2">
          <div className="reveal -rotate-1 bg-coral p-6 brut-lg md:p-8">
            <h2 className="display text-5xl">Apa yang mengancamnya?</h2>
            <ul className="mt-6 space-y-3">
              {s.threats.map((t) => (
                <li key={t} className="flex gap-3 text-lg font-bold">
                  <span
                    className="mt-1 inline-block h-4 w-4 shrink-0 rotate-45 border-2 border-ink bg-ink"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="reveal rotate-1 bg-kelp p-6 brut-lg md:p-8"
            style={cssVars({ '--d': '100ms' })}
          >
            <h2 id="help-title" className="display text-5xl">
              Bagaimana membantu?
            </h2>
            <ul className="mt-6 space-y-3">
              {s.help.map((t) => (
                <li key={t} className="flex gap-3 text-lg font-bold">
                  <span
                    className="mt-1 inline-block h-4 w-4 shrink-0 rotate-45 border-2 border-ink bg-sun"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/conservation/#ikrar" className="mt-8 btn bg-paper">
              Buat ikrarku →
            </Link>
          </div>
        </div>
      </section>

      {/* NAVIGASI */}
      <nav aria-label="Biota lainnya" className="border-y-4 border-ink bg-sun bg-dots">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-4 py-10 md:grid-cols-2 md:px-8">
          <Link href={`/wildlife/${prev.slug}/`} className="-rotate-1 pressable bg-paper p-5 brut">
            <span className="display text-xl text-royal">← Sebelumnya</span>
            <span className="block display text-5xl">{prev.name}</span>
          </Link>
          <Link
            href={`/wildlife/${next.slug}/`}
            className="rotate-1 pressable bg-paper p-5 text-right brut"
          >
            <span className="display text-xl text-royal">Berikutnya →</span>
            <span className="block display text-5xl">{next.name}</span>
          </Link>
        </div>
      </nav>

      <References ids={refIds} note={NOTE} />
    </>
  );
}
