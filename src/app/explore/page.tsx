import type { Metadata } from 'next';
import Link from 'next/link';

import { DiveSimulator } from '@/components/DiveSimulator';
import { PageHero } from '@/components/PageHero';
import { References } from '@/components/References';
import { WaveDivider } from '@/components/WaveDivider';
import { ECOSYSTEMS, PHENOMENA, ZONES } from '@/data/explore';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

export const metadata: Metadata = {
  title: 'Jelajah Laut',
  description:
    'Selam dari permukaan sampai Challenger Deep, kenali lima zona kedalaman, ekosistem laut, dan fenomena unik samudra.',
};

const fmt = (n: number) => n.toLocaleString('id-ID');
const SLAB_BG = ['bg-mist', 'bg-cyan', 'bg-azure', 'bg-royal text-paper', 'bg-deep text-paper'];
const SLAB_INDENT = ['lg:ml-0', 'lg:ml-10', 'lg:ml-20', 'lg:ml-32', 'lg:ml-44'];
const SLAB_ROT = ['-rotate-1', 'rotate-[0.6deg]', '-rotate-[0.6deg]', 'rotate-1', '-rotate-1'];

export default function ExplorePage() {
  return (
    <>
      <PageHero
        eyebrow="Explore · Jelajah Laut"
        title="Jelajah|*samudra*|dari atas ke dasar"
        lead="Selam dari permukaan sampai palung terdalam, lalu kenali ekosistem dan fenomena unik di antaranya."
        navKey="explore"
        bg="bg-cyan"
        seed={5}
      />
      <WaveDivider from="var(--color-cyan)" to="var(--color-azure)" variant="swell" />

      {/* SIMULATOR SELAM */}
      <section className="bg-azure bg-chart pt-6 pb-20" aria-labelledby="dive-title" id="selam">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <span className="sticker" style={cssVars({ '--r': '2deg' })}>
            Simulator
          </span>
          <h2 id="dive-title" className="mt-3 display text-xxl title-sticker">
            Selam sekarang.
          </h2>
          <p className="mt-4 max-w-2xl rotate-[0.5deg] bg-paper p-3 text-lg font-medium brut-sm">
            Geser bola kuning ke bawah. Perhatikan bagaimana cahaya, warna, dan tekanan berubah.
          </p>
          <DiveSimulator />
        </div>
      </section>
      <WaveDivider from="var(--color-azure)" to="var(--color-paper)" variant="saw" />

      {/* LIMA ZONA */}
      <section className="bg-paper bg-waves pt-8 pb-24" aria-labelledby="zones-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="zones-title" className="reveal display text-xxl">
            Lima zona, <span className="bg-ink px-2 text-sun">lima dunia.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Pembagian zona ini berdasarkan kedalaman dan cahaya yang masuk (NOAA Ocean Exploration,
            n.d.; NOAA National Ocean Service, 2024).
          </p>
          <ol className="mt-12 space-y-8">
            {ZONES.map((z, i) => (
              <li
                key={z.id}
                className={cn(
                  'reveal grid gap-4 p-6 brut-lg md:grid-cols-[auto_1fr] md:gap-8',
                  SLAB_BG[i],
                  SLAB_INDENT[i],
                  SLAB_ROT[i],
                )}
                style={cssVars({ '--d': `${i * 60}ms` })}
              >
                <div className="md:w-64">
                  <p className="display text-5xl">{z.name}</p>
                  <p className="mt-1 text-lg font-bold">{z.nick}</p>
                  <p className="mt-3 display text-3xl">
                    {fmt(z.from)}–{fmt(z.to)} <span className="normal-case">m</span>
                  </p>
                </div>
                <div>
                  <p className="font-bold">☼ {z.light}</p>
                  <p className="mt-1 font-bold">❄ {z.temp}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {z.life.map((l) => (
                      <li key={l} className="bg-paper px-3 py-0.5 font-bold text-ink brut-sm">
                        {l}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-lg font-medium">{z.fact}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <WaveDivider from="var(--color-paper)" to="var(--color-foam)" variant="wave" />

      {/* EKOSISTEM */}
      <section className="bg-foam bg-dots pt-8 pb-24" aria-labelledby="eco-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <span className="sticker" style={cssVars({ '--r': '-2deg' })}>
            Rumah kehidupan
          </span>
          <h2 id="eco-title" className="reveal mt-3 display text-xxl">
            Lima ekosistem.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {ECOSYSTEMS.map((e, i) => (
              <article
                key={e.name}
                className={cn(
                  'reveal flex pressable flex-col p-6 brut',
                  e.bg,
                  e.bg === 'bg-royal' && 'text-paper',
                  i < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
                  i % 2 ? 'rotate-1' : '-rotate-1',
                )}
                style={cssVars({ '--d': `${i * 70}ms` })}
              >
                <p className="sticker self-start" style={cssVars({ '--r': '-3deg' })}>
                  {e.tag}
                </p>
                <h3 className="mt-4 display text-5xl">{e.name}</h3>
                <p className="mt-3 text-lg font-medium">{e.text}</p>
                {e.stat && (
                  <p className="mt-auto pt-5 text-sm font-extrabold">
                    {e.stat}{' '}
                    <span className="font-semibold opacity-80">(NOAA Florida Keys NMS, n.d.)</span>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="var(--color-foam)" to="var(--color-sun)" variant="saw" />

      {/* FENOMENA */}
      <section className="bg-sun bg-dots pt-8 pb-24" aria-labelledby="phen-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="phen-title" className="reveal display text-xxl title-sticker">
            Fenomena aneh.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PHENOMENA.map((p, i) => (
              <article
                key={p.name}
                className={cn('reveal pressable p-6 brut', p.bg, p.rot)}
                style={cssVars({ '--d': `${i * 60}ms` })}
              >
                <span className="grid h-12 w-12 place-items-center border-4 border-ink bg-paper display text-2xl">
                  {i + 1}
                </span>
                <h3 className="mt-4 display text-4xl">{p.name}</h3>
                <p className="mt-2 text-lg font-medium">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="var(--color-sun)" to="var(--color-royal)" variant="swell" />

      {/* LAUT NUSANTARA */}
      <section
        className="bg-royal bg-chart-light pt-8 pb-24 text-paper"
        aria-labelledby="nusa-title"
      >
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <p className="sticker" style={cssVars({ '--r': '2deg' })}>
            Rumah kita
          </p>
          <h2 id="nusa-title" className="reveal mt-3 display text-xxl title-sticker">
            Laut Nusantara.
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-mist">
            Indonesia berada di jantung Segitiga Terumbu Karang — kawasan yang disebut sebagai salah
            satu laut dengan keanekaragaman hayati terkaya di Bumi.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="reveal -rotate-1 bg-sun p-6 text-ink brut-lg">
              <p className="display text-8xl">6</p>
              <p className="mt-2 text-lg font-bold">
                negara berbagi Segitiga Terumbu Karang: Indonesia, Malaysia, Filipina, Papua Nugini,
                Timor Leste, dan Kepulauan Solomon.
              </p>
              <p className="mt-3 text-xs font-semibold">(Kyodo News, 2022)</p>
            </div>
            <div
              className="reveal rotate-1 bg-aqua p-6 text-ink brut-lg"
              style={cssVars({ '--d': '90ms' })}
            >
              <p className="display text-8xl">537</p>
              <p className="mt-2 text-lg font-bold">
                spesies karang tercatat di Raja Ampat — sekitar 75% dari seluruh spesies karang yang
                dikenal di dunia.
              </p>
              <p className="mt-3 text-xs font-semibold">(The Nature Conservancy, 2011)</p>
            </div>
            <div
              className="reveal -rotate-2 bg-coral p-6 text-ink brut-lg"
              style={cssVars({ '--d': '180ms' })}
            >
              <p className="display text-8xl">17</p>
              <p className="mt-2 text-lg font-bold">
                spesies mamalia laut tercatat di Raja Ampat: 9 paus, 7 lumba-lumba, dan dugong.
              </p>
              <p className="mt-3 text-xs font-semibold">(The Nature Conservancy, 2011)</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/wildlife/" className="btn">
              Kenali penghuninya →
            </Link>
            <Link href="/conservation/" className="btn bg-paper">
              Cara menjaganya →
            </Link>
          </div>
        </div>
      </section>

      <References
        tone="dark"
        ids={['noaaZones', 'noaaLight', 'challenger', 'noaaCoral', 'tncRajaAmpat', 'jakartaPost']}
        note="Uraian ekosistem dan fenomena laut merangkum konsep dasar oseanografi; angka yang dikutip langsung dicantumkan sumbernya di atas. Tekanan ±1 atm per 10 m adalah perkiraan umum kolom air."
      />
    </>
  );
}
