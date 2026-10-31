'use client';

import { useState } from 'react';

import { LANDMARKS, MAX_DEPTH, ZONES } from '@/data/explore';

// Pemetaan slider -> kedalaman dibuat non-linear agar zona atas yang tipis tetap terlihat.
const EXP = 2.5;
const TICKS = [0, 200, 1000, 4000, 6000, MAX_DEPTH];
const STOPS: Array<[number, string]> = [
  [0, '#8fe6f9'],
  [200, '#09c6f7'],
  [1000, '#0489e7'],
  [4000, '#0357ba'],
  [6000, '#042f7c'],
  [MAX_DEPTH, '#020e46'],
];

const fmt = (n: number) => n.toLocaleString('id-ID');
const frac = (d: number) => Math.pow(d / MAX_DEPTH, 1 / EXP);
const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

function colorAt(depth: number) {
  for (let i = 1; i < STOPS.length; i++) {
    if (depth <= STOPS[i][0]) {
      const [d0, c0] = STOPS[i - 1];
      const [d1, c1] = STOPS[i];
      const t = (depth - d0) / (d1 - d0);
      const a = hex(c0);
      const b = hex(c1);
      return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * t)).join(',')})`;
    }
  }
  return STOPS[STOPS.length - 1][1];
}

function roundDepth(d: number) {
  if (d < 100) return Math.round(d);
  if (d < 1000) return Math.round(d / 5) * 5;
  return Math.round(d / 10) * 10;
}

export function DiveSimulator() {
  const [value, setValue] = useState(0);

  const f = value / 1000;
  const depth = f >= 1 ? MAX_DEPTH : roundDepth(MAX_DEPTH * Math.pow(f, EXP));
  const zone = ZONES.find((z) => depth < z.to) ?? ZONES[ZONES.length - 1];
  const near = LANDMARKS.reduce((a, b) =>
    Math.abs(b.depth - depth) < Math.abs(a.depth - depth) ? b : a,
  );

  return (
    <>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        {/* Adegan + slider */}
        <div>
          <div
            id="dive-scene"
            className="relative h-[440px] overflow-hidden brut-lg lg:h-[560px]"
            style={{ background: colorAt(depth) }}
          >
            <div className="absolute inset-0 bg-dots opacity-60" aria-hidden="true" />
            {TICKS.map((d) => (
              <div
                key={d}
                className="absolute right-0 left-0 flex items-center"
                style={{ top: `calc(44px + ${frac(d).toFixed(4)} * (100% - 88px))` }}
                aria-hidden="true"
              >
                <span className="h-1 w-8 bg-ink" />
                <span className="ml-2 bg-paper px-1.5 text-xs font-bold text-ink">{fmt(d)} m</span>
              </div>
            ))}
            <div
              className="absolute top-0 left-1/2 w-1.5 -translate-x-1/2 bg-ink"
              style={{ height: `calc(44px + ${f} * (100% - 88px))` }}
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `calc(${f} * (100% - 88px))` }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 88 88"
                className="h-[88px] w-[88px] drop-shadow-[4px_4px_0_var(--color-ink)]"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="38"
                  fill="var(--color-sun)"
                  stroke="var(--color-ink)"
                  strokeWidth="6"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="20"
                  fill="var(--color-aqua)"
                  stroke="var(--color-ink)"
                  strokeWidth="5"
                />
                <circle cx="38" cy="38" r="5" fill="var(--color-paper)" />
              </svg>
            </div>
          </div>

          <div className="mt-8 px-1">
            <label htmlFor="dive-range" className="display text-3xl title-sticker">
              Geser untuk menyelam →
            </label>
            <input
              id="dive-range"
              type="range"
              min={0}
              max={1000}
              step={1}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="brut-range mt-3"
              aria-valuetext={`${fmt(depth)} meter, zona ${zone.name}`}
            />
          </div>
        </div>

        {/* Bacaan */}
        <div className="flex flex-col gap-5 text-ink">
          <div className="bg-paper p-6 brut-lg">
            <p className="display text-xl text-royal">Kedalaman</p>
            <p className="display text-[clamp(4rem,10vw,7rem)]" aria-hidden="true">
              <span id="d-depth">{fmt(depth)}</span> <span className="text-4xl normal-case">m</span>
            </p>
            <p className="mt-2 display text-3xl" id="d-zone">
              {zone.name}
            </p>
            <p className="font-semibold text-deep" id="d-nick">
              {zone.nick}
            </p>
          </div>

          <dl className="grid gap-5 sm:grid-cols-2">
            <div className="bg-sun p-4 brut">
              <dt className="display text-lg">Tekanan</dt>
              <dd className="mt-1 text-2xl font-extrabold" id="d-pressure">
                ≈ {fmt(Math.round(1 + depth / 10))} atm
              </dd>
              <dd className="text-xs font-semibold">±1 atm tambahan tiap 10 m</dd>
            </div>
            <div className="bg-aqua p-4 brut">
              <dt className="display text-lg">Cahaya</dt>
              <dd className="mt-1 leading-snug font-bold" id="d-light">
                {zone.light}
              </dd>
            </div>
            <div className="bg-coral p-4 brut sm:col-span-2">
              <dt className="display text-lg">Suhu</dt>
              <dd className="mt-1 font-bold" id="d-temp">
                {zone.temp}
              </dd>
            </div>
          </dl>

          <div className="bg-paper p-4 brut">
            <p className="display text-lg text-royal">Penghuni khas</p>
            <ul id="d-life" className="mt-2 flex flex-wrap gap-2">
              {zone.life.map((l) => (
                <li key={l} className="bg-foam px-3 py-0.5 font-bold brut-sm">
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-3" id="d-fact">
              {zone.fact}
            </p>
            <p className="mt-3 border-t-4 border-ink pt-3 text-sm font-semibold">
              Landmark terdekat: <span id="d-landmark">{near.label}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
