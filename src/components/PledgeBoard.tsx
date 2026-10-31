'use client';

import { useSyncExternalStore } from 'react';

import { ACTIONS, RANKS } from '@/data/conservation';
import { cn } from '@/lib/cn';

/* ------------------------------------------------------------------ *
 * Penyimpanan ikrar di localStorage (tanpa akun, tanpa database).
 * Memakai useSyncExternalStore agar aman terhadap SSR/hidrasi.
 * ------------------------------------------------------------------ */
const KEY = 'oceanverse:pledge:v1';
const EMPTY: readonly string[] = [];
const listeners = new Set<() => void>();
let cache: readonly string[] | null = null;

function load(): readonly string[] {
  try {
    const v: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function getSnapshot(): readonly string[] {
  if (cache === null) cache = load();
  return cache;
}

function getServerSnapshot(): readonly string[] {
  return EMPTY;
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      onChange();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener('storage', onStorage);
  };
}

function save(ids: readonly string[]) {
  cache = ids;
  try {
    localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* mode privat / penyimpanan penuh: tetap jalan di memori */
  }
  listeners.forEach((l) => l());
}

const GROUPS = [...new Set(ACTIONS.map((a) => a.group))];

export function PledgeBoard() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const n = ids.length;
  const rank = [...RANKS].reverse().find((r) => n >= r.min) ?? RANKS[0];
  const complete = n >= ACTIONS.length;

  const toggle = (id: string) => {
    save(ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]);
  };

  return (
    <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-8">
        {GROUPS.map((g, gi) => (
          <fieldset
            key={g}
            className={cn(
              'bg-paper p-5 brut-lg md:p-6',
              gi % 2 ? 'rotate-[0.4deg]' : '-rotate-[0.4deg]',
            )}
          >
            <legend className="-ml-2 border-4 border-ink bg-aqua px-3 py-1 display text-3xl">
              {g}
            </legend>
            <ul className="mt-2 space-y-4">
              {ACTIONS.filter((a) => a.group === g).map((a) => (
                <li key={a.id}>
                  <label className="flex cursor-pointer items-start gap-4">
                    <input
                      type="checkbox"
                      className="pledge-check mt-1"
                      data-id={a.id}
                      checked={ids.includes(a.id)}
                      onChange={() => toggle(a.id)}
                    />
                    <span>
                      <span className="block text-lg leading-snug font-bold">{a.text}</span>
                      <span className="block text-sm text-deep">{a.why}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        ))}
      </div>

      <aside
        className="bg-ink p-6 text-paper brut-lg lg:sticky lg:top-24"
        aria-labelledby="rank-title"
        id="pledge-card"
      >
        <p className="display text-xl text-aqua" id="rank-title">
          Peringkatmu
        </p>
        <p className="mt-1 display text-[clamp(3.2rem,7vw,5rem)] title-sticker" id="rank-name">
          {rank.name}
        </p>
        <p className="mt-2 min-h-[3.2rem] text-mist" id="rank-line">
          {rank.line}
        </p>
        <p className="mt-5 display text-3xl">
          <span id="pledge-count">{n}</span> / {ACTIONS.length} langkah
        </p>
        <div className="mt-3 grid h-10 grid-cols-12 gap-1" aria-hidden="true">
          {ACTIONS.map((a, i) => (
            <span
              key={a.id}
              className="border-2 border-paper transition-colors"
              style={{ background: i < n ? 'var(--color-sun)' : 'transparent' }}
            />
          ))}
        </div>
        {complete && (
          <p id="pledge-done" className="mt-5 bg-sun p-3 display text-2xl text-ink" role="status">
            Selamat! Kamu sudah jadi Paus Biru.
          </p>
        )}
        <button
          type="button"
          id="pledge-reset"
          className="mt-6 btn bg-paper !text-lg"
          onClick={() => save([])}
        >
          Ulangi dari awal
        </button>
      </aside>
    </div>
  );
}
