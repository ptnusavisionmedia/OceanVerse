import type { Metadata } from 'next';

import { PageHero } from '@/components/PageHero';
import { References } from '@/components/References';
import { SpeciesBrowser } from '@/components/SpeciesBrowser';
import { WaveDivider } from '@/components/WaveDivider';
import { SPECIES, STATUS, type StatusCode } from '@/data/species';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

export const metadata: Metadata = {
  title: 'Biota Laut',
  description:
    'Berkenalan dengan paus biru, penyu hijau, hiu paus, pari manta, ikan badut, gurita, dugong, dan kuda laut: ciri, rumah, ancaman, dan cara membantu.',
};

const LEGEND = (Object.keys(STATUS) as StatusCode[]).filter((k) =>
  SPECIES.some((s) => s.status === k),
);

export default function WildlifePage() {
  return (
    <>
      <PageHero
        eyebrow="Wildlife · Biota Laut"
        title="Kenalan|*sama*|penghuninya"
        lead="Delapan satwa laut, delapan cerita. Tiap kartu membuka halaman sendiri: ciri, makanan, rumahnya di Indonesia, ancaman, dan cara membantu."
        navKey="wildlife"
        bg="bg-sun"
        seed={9}
      />
      <WaveDivider from="var(--color-sun)" to="var(--color-paper)" variant="saw" />

      <section className="bg-paper bg-waves pt-6 pb-24" aria-labelledby="grid-title">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <h2 id="grid-title" className="reveal display text-xxl">
            Pilih <span className="bg-ink px-2 text-sun">rumahnya.</span>
          </h2>

          <SpeciesBrowser />

          <div className="mt-20 -rotate-[0.5deg] bg-foam p-6 brut-lg md:p-10">
            <h2 className="display text-4xl md:text-5xl">Kode di pojok kartu itu apa?</h2>
            <p className="mt-2 max-w-3xl text-lg">
              Itu status konservasi menurut Daftar Merah IUCN (IUCN, n.d.). Semakin tinggi
              tingkatnya, semakin besar risiko kepunahannya di alam liar.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LEGEND.map((k) => (
                <li key={k} className="flex items-center gap-3 bg-paper p-3 brut-sm">
                  <span
                    className={cn('sticker', STATUS[k].cls)}
                    style={cssVars({ '--r': '-3deg' })}
                  >
                    {k}
                  </span>
                  <span>
                    <strong className="block leading-tight">{STATUS[k].label}</strong>
                    <span className="text-sm text-deep italic">{STATUS[k].en}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold">
              Status dapat berubah setiap pembaruan Daftar Merah. Contoh terbaru: penyu hijau
              diturunkan dari Endangered ke Least Concern pada Oktober 2025 (Oceanic Society, 2025;
              Mongabay, 2025).
            </p>
          </div>
        </div>
      </section>

      <References
        ids={['iucn', 'greenTurtleOceanic', 'greenTurtleMongabay']}
        note="Kode status mengacu pada Daftar Merah IUCN; periksa situs IUCN untuk penilaian terbaru tiap spesies. Uraian biologi merangkum pengetahuan umum biologi laut dan sebaiknya diverifikasi ke literatur primer bila dikutip untuk karya ilmiah."
      />
    </>
  );
}
