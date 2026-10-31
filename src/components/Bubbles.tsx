import { cssVars } from '@/lib/css';

interface BubblesProps {
  count?: number;
  seed?: number;
}

// Pseudo-random deterministik agar build selalu menghasilkan output yang sama
function rand(i: number, k: number, seed: number) {
  const x = Math.sin((i + 1) * 12.9898 + k * 78.233 + seed * 3.1) * 43758.5453;
  return x - Math.floor(x);
}

export function Bubbles({ count = 14, seed = 7 }: BubblesProps) {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    x: Math.round(rand(i, 1, seed) * 96),
    s: Math.round(14 + rand(i, 2, seed) * 46),
    t: (9 + rand(i, 3, seed) * 11).toFixed(1),
    dl: (-rand(i, 4, seed) * 14).toFixed(1),
  }));

  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={cssVars({
            '--x': `${b.x}%`,
            '--s': `${b.s}px`,
            '--t': `${b.t}s`,
            '--dl': `${b.dl}s`,
          })}
        />
      ))}
    </div>
  );
}
