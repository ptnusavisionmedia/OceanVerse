import { cn } from '@/lib/cn';

/**
 * Pemisah antarbagian. `from` = warna bagian di atas, `to` = warna bagian di bawah.
 * variant: 'wave' (ombak) | 'saw' (gigi hiu) | 'swell' (gelombang besar)
 */
interface WaveDividerProps {
  from: string;
  to: string;
  variant?: 'wave' | 'saw' | 'swell';
  className?: string;
}

const W = 1440;
const H = 100;

function edgePath(variant: NonNullable<WaveDividerProps['variant']>) {
  if (variant === 'saw') {
    const teeth = 18;
    const w = W / teeth;
    let d = 'M0 60';
    for (let i = 0; i < teeth; i++) {
      d += ` L${(i * w + w / 2).toFixed(1)} 6 L${((i + 1) * w).toFixed(1)} 60`;
    }
    return d;
  }
  if (variant === 'swell') {
    return 'M0 70 C 90 70, 120 8, 230 8 C 340 8, 330 60, 440 60 C 560 60, 560 14, 700 14 C 840 14, 820 66, 960 66 C 1100 66, 1090 4, 1220 4 C 1330 4, 1360 56, 1440 56';
  }
  return 'M0 50 C 120 0, 240 0, 360 50 S 600 100, 720 50 S 960 0, 1080 50 S 1320 100, 1440 50';
}

export function WaveDivider({ from, to, variant = 'wave', className }: WaveDividerProps) {
  const edge = edgePath(variant);
  const fill = `${edge} L${W} ${H} L0 ${H} Z`;

  return (
    <div
      className={cn('relative -mb-px leading-none', className)}
      style={{ background: from }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="block h-12 w-full md:h-[88px]"
      >
        <path d={fill} fill={to} />
        <path
          d={edge}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
