import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { PledgeBoard } from '@/components/PledgeBoard';
import { References } from '@/components/References';
import { WaveDivider } from '@/components/WaveDivider';
import { DATES, THREATS } from '@/data/conservation';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

export const metadata: Metadata = {
  title: 'Jaga Laut',
  description:
    'Pahami ancaman terhadap laut, lihat bukti bahwa konservasi bekerja, lalu buat ikrar 12 langkah kecil untuk menjaga samudra.',
};

const PROTECTED = 8.4; // % laut & pesisir dalam kawasan lindung (Protected Planet Report 2024)
const TARGET = 30;

export default function ConservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Conservation · Jaga Laut"
        title="Jaga|*laut*|mulai hari ini"
        lead="Laut sedang menghadapi tekanan besar. Kabar baiknya: langkah kecil yang konsisten dan kebijakan yang tepat terbukti bisa memulihkan kehidupan laut."
        navKey="conservation"
        bg="bg-kelp"
        seed={13}
      />
      <WaveDivider from="var(--color-kelp)" to="var(--color-ink)" variant="saw" />

      {/* ANCAMAN */}
      <section
        className="on-dark bg-ink bg-chart-light pt-6 pb-24 text-paper"
        aria-labelledby="threat-title"
      >
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <span className="sticker bg-coral" style={cssVars({ '--r': '-2deg' })}>
            Peringatan
          </span>
          <h2 id="threat-title" className="reveal mt-3 display text-xxl title-sticker">
            Lima tekanan.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {THREATS.map((t, i) => (
              <article
                key={t.name}
                className={cn(
                  'reveal flex flex-col p-6 text-ink brut-lg',
                  t.bg,
                  t.rot,
                  i < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
                )}
                style={cssVars({ '--d': `${i * 80}ms` })}
              >
                <h3 className="display text-4xl md:text-5xl">{t.name}</h3>
                {t.big && (
                  <p className="mt-4 flex items-end gap-4">
                    <span className="display text-[clamp(4.5rem,9vw,7rem)]">{t.big}</span>
                    <span className="pb-2 text-base leading-tight font-extrabold">
                      {t.bigLabel}
                    </span>
                  </p>
                )}
                <p className="mt-4 text-lg font-medium">{t.text}</p>
                {t.cite && <p className="mt-auto pt-4 text-sm font-bold">({t.cite})</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="var(--color-ink)" to="var(--color-paper)" variant="wave" />

      {/* KONSERVASI BEKERJA */}
      <section className="bg-paper bg-waves pt-6 pb-24" aria-labelledby="works-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="works-title" className="reveal display text-xxl">
            Tapi <span className="bg-ink px-2 text-sun">konservasi bekerja.</span>
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="reveal -rotate-1 bg-kelp p-6 brut-lg md:p-8">
              <p className="sticker" style={cssVars({ '--r': '2deg' })}>
                Cerita sukses
              </p>
              <h3 className="mt-3 display text-5xl md:text-6xl">Penyu hijau naik kelas.</h3>
              <p className="mt-4 text-xl font-medium">
                Pada Oktober 2025, status global penyu hijau diturunkan dari{' '}
                <strong>Endangered</strong> menjadi <strong>Least Concern</strong>. Populasi
                globalnya naik sekitar 28% sejak 1970-an berkat perlindungan sarang, pembatasan
                perdagangan, dan alat tangkap yang lebih ramah penyu (Oceanic Society, 2025;
                Mongabay, 2025).
              </p>
              <p className="mt-4 font-semibold">
                Namun ancaman belum hilang, dan sebagian sub-populasi masih rentan. Keberhasilan ini
                menuntut perlindungan yang terus berlanjut.
              </p>
              <Link href="/wildlife/penyu-hijau/" className="mt-6 btn bg-paper">
                Kenalan dengan penyu hijau →
              </Link>
            </article>

            <article
              className="reveal rotate-1 bg-aqua p-6 brut-lg md:p-8"
              style={cssVars({ '--d': '100ms' })}
            >
              <p className="sticker" style={cssVars({ '--r': '-3deg' })}>
                Target 30×30
              </p>
              <h3 className="mt-3 display text-5xl md:text-6xl">Baru sebagian jalan.</h3>
              <p className="mt-4 text-xl font-medium">
                Dunia berjanji melindungi 30% laut pada 2030. Laporan terakhir mencatat baru{' '}
                <strong>8,4%</strong> wilayah laut dan pesisir yang masuk kawasan lindung dan
                konservasi (UNEP-WCMC &amp; IUCN, 2024).
              </p>
              <div
                className="mt-6"
                role="img"
                aria-label={`Kemajuan: ${PROTECTED}% dari target ${TARGET}%`}
              >
                <div className="relative h-14 border-4 border-ink bg-paper">
                  <div
                    className="h-full border-r-4 border-ink bg-sun"
                    style={{ width: `${(PROTECTED / TARGET) * 100}%` }}
                  />
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 display text-2xl">
                    8,4%
                  </span>
                  <span className="absolute top-1/2 right-3 -translate-y-1/2 display text-2xl text-royal">
                    30%
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm font-bold">
                  <span>Terlindungi (laporan 2024)</span>
                  <span>Target 2030</span>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold">
                Angka ini terus diperbarui; tidak semua kawasan dikelola efektif.
              </p>
            </article>
          </div>
        </div>
      </section>
      <WaveDivider from="var(--color-paper)" to="var(--color-sun)" variant="saw" />

      {/* IKRAR */}
      <section className="bg-sun bg-dots pt-6 pb-24" id="ikrar" aria-labelledby="pledge-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <p className="sticker bg-paper" style={cssVars({ '--r': '2deg' })}>
            Tanpa akun · tersimpan di perangkatmu
          </p>
          <h2 id="pledge-title" className="mt-3 display text-xxl title-sticker">
            Ikrar 12 langkah.
          </h2>
          <p className="mt-4 max-w-2xl rotate-[0.5deg] bg-paper p-3 text-lg font-medium brut-sm">
            Centang yang sudah atau akan kamu lakukan. Progresmu disimpan di browser ini saja —
            tidak dikirim ke mana pun.
          </p>
          <PledgeBoard />
        </div>
      </section>
      <WaveDivider from="var(--color-sun)" to="var(--color-foam)" variant="wave" />

      {/* TANGGAL */}
      <section className="bg-foam bg-dots pt-6 pb-24" aria-labelledby="dates-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="dates-title" className="reveal display text-xxl">
            Tandai kalendermu.
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DATES.map((d, i) => (
              <li
                key={d.name}
                className={cn(
                  'reveal flex pressable items-center gap-4 p-4 brut',
                  d.bg,
                  i % 2 ? 'rotate-1' : '-rotate-1',
                )}
                style={cssVars({ '--d': `${i * 70}ms` })}
              >
                <span className="grid h-20 w-20 shrink-0 place-items-center border-4 border-ink bg-paper text-center display leading-none">
                  <span className="block text-4xl">{d.d}</span>
                  <span className="block text-lg">{d.m}</span>
                </span>
                <span className="text-lg leading-tight font-bold">{d.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <References
        ids={['bleaching', 'fao', 'protectedPlanet', 'greenTurtleOceanic', 'greenTurtleMongabay']}
        note="Tekanan seperti sampah plastik, kerusakan habitat pesisir, dan kebisingan kapal dijelaskan secara kualitatif tanpa angka. Daftar langkah ikrar adalah saran praktis umum, bukan klaim kuantitatif."
      />
    </>
  );
}
