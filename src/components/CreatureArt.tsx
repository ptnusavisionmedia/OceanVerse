import type { ReactElement } from 'react';
/**
 * Ilustrasi satwa bergaya brutal: bentuk datar, warna palet aset, outline navy tebal.
 * Semua digambar sebagai SVG inline (tanpa file gambar tambahan).
 */
const ink = 'var(--color-ink)';
const ART: Record<string, ReactElement> = {
  'paus-biru': (
    <g>
      <path
        d="M58 52c-8-12-4-24 6-32M58 52c10-8 22-6 28-16"
        stroke="var(--color-aqua)"
        strokeWidth="7"
      />
      <path
        d="M184 40c-10-14-26-18-38-16 12 6 22 14 38 24 16-10 26-18 38-24-12-2-28 2-38 16Z"
        fill="var(--color-azure)"
      />
      <path
        d="M12 96C12 66 46 54 92 56c34 2 58 8 74 2 10-4 14-12 16-18l4 8c2 16-8 32-28 44-28 18-70 38-108 32C26 120 12 110 12 96Z"
        fill="var(--color-azure)"
      />
      <path
        d="M16 100c28 16 90 14 140-14-40 12-96 12-140 14Z"
        fill="var(--color-paper)"
        strokeWidth="4"
      />
      <path d="M44 104v-8M62 106v-8M80 106v-8M98 104v-8M116 100v-8" strokeWidth="3.5" />
      <path d="M86 100c8 20 24 28 38 22-14-4-24-12-28-24Z" fill="var(--color-royal)" />
      <circle cx="36" cy="84" r="5.5" fill={ink} stroke="none" />
    </g>
  ),
  'penyu-hijau': (
    <g>
      <path d="M128 52c22-30 58-36 74-26-12 18-38 34-64 40Z" fill="#8fd16f" />
      <path d="M128 108c22 30 58 36 74 26-12-18-38-34-64-40Z" fill="#8fd16f" />
      <path d="M82 48c-10-18-26-22-38-14 6 14 20 24 38 28Z" fill="#8fd16f" />
      <path d="M82 112c-10 18-26 22-38 14 6-14 20-24 38-28Z" fill="#8fd16f" />
      <path d="M64 80H34" />
      <circle cx="170" cy="80" r="17" fill="#8fd16f" />
      <circle cx="177" cy="74" r="4" fill={ink} stroke="none" />
      <ellipse cx="110" cy="80" rx="58" ry="46" fill="var(--color-kelp)" />
      <path
        d="M96 64l14-8 14 8v18l-14 10-14-10Z M96 64L76 54M124 64l20-10M96 82l-20 14M124 82l20 14M110 56V36M110 92v22"
        strokeWidth="4.5"
      />
    </g>
  ),
  'hiu-paus': (
    <g>
      <path
        d="M168 76c16-14 30-30 40-46-2 22-2 34-8 46 6 14 8 28 12 44-14-12-28-24-44-34Z"
        fill="var(--color-cyan)"
      />
      <path d="M92 60l16-28 24 32Z" fill="var(--color-cyan)" />
      <path
        d="M8 92c22-30 74-38 124-30 20 4 30 10 40 16v6c-24 18-62 34-108 30-32-2-52-8-56-22Z"
        fill="var(--color-cyan)"
      />
      <path d="M70 104l-14 24 42-18Z" fill="var(--color-cyan)" />
      <path d="M10 92h24" strokeWidth="5" />
      <path d="M46 78v18M54 76v20M62 76v20" strokeWidth="3.5" />
      <circle cx="30" cy="84" r="4.5" fill={ink} stroke="none" />
      <g fill="var(--color-paper)" stroke="none">
        <circle cx="78" cy="76" r="4.5" />
        <circle cx="98" cy="72" r="4.5" />
        <circle cx="118" cy="72" r="4.5" />
        <circle cx="138" cy="74" r="4" />
        <circle cx="88" cy="92" r="4.5" />
        <circle cx="110" cy="90" r="4.5" />
        <circle cx="132" cy="90" r="4" />
        <circle cx="152" cy="84" r="3.5" />
      </g>
    </g>
  ),
  'pari-manta': (
    <g>
      <path d="M110 112c0 14 3 26 10 36" strokeWidth="7" />
      <path
        d="M110 30c22 24 58 30 100 12-8 44-50 70-100 76-50-6-92-32-100-76 42 18 78 12 100-12Z"
        fill="var(--color-royal)"
      />
      <path d="M96 30l-5-14M124 30l5-14" strokeWidth="7" />
      <path
        d="M70 80c18 16 62 16 80 0-6 20-20 28-40 28S76 100 70 80Z"
        fill="var(--color-paper)"
        strokeWidth="4"
      />
      <circle cx="90" cy="62" r="4.5" fill={ink} stroke="none" />
      <circle cx="130" cy="62" r="4.5" fill={ink} stroke="none" />
    </g>
  ),
  'ikan-badut': (
    <g>
      <path d="M156 78l50-34v68Z" fill="var(--color-clown)" />
      <path d="M110 40c20-18 42-14 42 4" fill="var(--color-clown)" />
      <path d="M14 78c26-40 96-44 138-8l8 8-8 8c-42 38-112 32-138 0Z" fill="var(--color-clown)" />
      <path
        d="M58 42c-10 18-10 62 0 82h16c-10-20-10-64 0-82Z"
        fill="var(--color-paper)"
        strokeWidth="4.5"
      />
      <path
        d="M106 36c-8 18-8 78 0 98h16c-8-22-8-76 0-98Z"
        fill="var(--color-paper)"
        strokeWidth="4.5"
      />
      <circle cx="34" cy="76" r="5" fill={ink} stroke="none" />
      <path d="M22 88c6 4 12 4 18 0" strokeWidth="4" />
    </g>
  ),
  gurita: (
    <g>
      <path
        d="M56 78c0-38 24-60 54-60s54 22 54 60c0 12-5 22-12 28 14 4 24 14 38 8 4 12-10 24-28 20-12-3-22-10-30-18-4 14-12 28-22 28s-18-14-22-28c-8 8-18 15-30 18-18 4-32-8-28-20 14 6 24-4 38-8-7-6-12-16-12-28Z"
        fill="var(--color-coral)"
      />
      <circle cx="90" cy="76" r="13" fill="var(--color-paper)" />
      <circle cx="132" cy="76" r="13" fill="var(--color-paper)" />
      <circle cx="93" cy="79" r="5.5" fill={ink} stroke="none" />
      <circle cx="129" cy="79" r="5.5" fill={ink} stroke="none" />
      <path d="M100 100c6 5 14 5 20 0" strokeWidth="4.5" />
    </g>
  ),
  dugong: (
    <g>
      <path d="M168 66l26-16 12 8-8 16 12 18-12 8-22-12Z" fill="#c9a574" />
      <path
        d="M18 88c0-30 34-44 80-42 30 1 50 12 72 20l-4 22c-24 28-58 42-92 36-34-6-56-16-56-36Z"
        fill="var(--color-sand)"
      />
      <ellipse cx="34" cy="100" rx="18" ry="14" fill="#c9a574" />
      <path d="M22 108l-12 8M30 112l-8 12M42 112l-2 12" strokeWidth="3.5" />
      <path d="M86 108c8 18 26 24 40 16-14-2-24-8-30-18Z" fill="#c9a574" />
      <circle cx="54" cy="78" r="5" fill={ink} stroke="none" />
      <circle cx="30" cy="96" r="2.5" fill={ink} stroke="none" />
    </g>
  ),
  'kuda-laut': (
    <g>
      <path
        d="M112 44c26 6 34 34 18 58-14 20 4 36-12 44-12 6-24-4-18-14"
        stroke={ink}
        strokeWidth="34"
        fill="none"
      />
      <path
        d="M112 44c26 6 34 34 18 58-14 20 4 36-12 44-12 6-24-4-18-14"
        stroke="var(--color-sun)"
        strokeWidth="22"
        fill="none"
      />
      <path d="M100 36L68 44" stroke={ink} strokeWidth="26" />
      <path d="M100 36L68 44" stroke="var(--color-sun)" strokeWidth="14" />
      <circle cx="106" cy="32" r="24" fill="var(--color-sun)" />
      <path d="M92 12l-4-10M106 8V-2M120 12l4-10" strokeWidth="5" />
      <path
        d="M134 66c14 4 22 14 20 28-10 0-18-8-22-18Z"
        fill="var(--color-aqua)"
        strokeWidth="4.5"
      />
      <circle cx="108" cy="30" r="4.5" fill={ink} stroke="none" />
      <path d="M118 62l12-2M122 80l12-2M120 98l10-2" stroke={ink} strokeWidth="4" />
    </g>
  ),
};

interface CreatureArtProps {
  slug: string;
  className?: string;
}

export function CreatureArt({ slug, className }: CreatureArtProps) {
  return (
    <svg
      viewBox="0 0 220 160"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke={ink}
      strokeWidth={6}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {ART[slug]}
    </svg>
  );
}
