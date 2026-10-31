'use client';

import Link from 'next/link';
import { useState } from 'react';

import { FACTS } from '@/data/facts';

export function FactMachine() {
  const [index, setIndex] = useState(0);
  const fact = FACTS[index];

  const shuffle = () => {
    if (FACTS.length < 2) return;
    let next = index;
    while (next === index) next = Math.floor(Math.random() * FACTS.length);
    setIndex(next);
  };

  return (
    <>
      <div>
        <h2 id="fact-title" className="display text-xxl title-sticker">
          Tahukah
          <br />
          kamu?
        </h2>
        <p className="mt-6 max-w-md -rotate-1 bg-paper p-3 text-xl font-medium brut-sm">
          Tekan tombolnya. Dapatkan satu fakta laut — sebagian lucu, sebagian bikin merinding.
        </p>
        <button
          id="fact-btn"
          type="button"
          onClick={shuffle}
          className="mt-8 btn bg-paper text-3xl"
        >
          Acak fakta!
        </button>
      </div>

      {/* key = index: kartu dipasang ulang sehingga animasi "stempel" terputar lagi */}
      <div
        id="fact-card"
        key={index}
        className="stamp rotate-1 bg-paper p-6 brut-lg md:p-10"
        aria-live="polite"
      >
        <p className="display text-xl text-royal">
          Fakta <span id="fact-n">{index + 1}</span>/{FACTS.length}
        </p>
        <p
          id="fact-text"
          className="mt-3 text-2xl leading-snug font-bold md:text-4xl md:leading-tight"
        >
          {fact.text}
        </p>
        <p id="fact-cite" className="mt-5 text-sm font-semibold text-deep">
          {fact.cite ? `(${fact.cite})` : ''}
        </p>
        {fact.href && (
          <Link id="fact-link" href={fact.href} className="mt-5 btn bg-aqua text-xl">
            {fact.linkLabel ?? 'Selengkapnya'} →
          </Link>
        )}
      </div>
    </>
  );
}
