'use client';

import { useState } from 'react';

import { SpeciesCard } from '@/components/SpeciesCard';
import { HABITATS, SPECIES, type Habitat } from '@/data/species';
import { cn } from '@/lib/cn';

type Filter = 'semua' | Habitat;

const ROT = ['-rotate-1', 'rotate-1', 'rotate-[0.5deg]', '-rotate-[0.6deg]'];
const HABITAT_LIST = Object.entries(HABITATS) as Array<[Habitat, (typeof HABITATS)[Habitat]]>;

export function SpeciesBrowser() {
  const [filter, setFilter] = useState<Filter>('semua');
  const shown = SPECIES.filter((s) => filter === 'semua' || s.habitat === filter);
  const count = (h: Habitat) => SPECIES.filter((s) => s.habitat === h).length;

  return (
    <>
      <div
        id="filters"
        className="mt-8 flex flex-wrap gap-3"
        role="group"
        aria-label="Saring menurut habitat"
      >
        <button
          type="button"
          className={cn('btn !py-2 !text-xl', filter === 'semua' ? 'bg-sun' : 'bg-paper')}
          aria-pressed={filter === 'semua'}
          data-filter="semua"
          onClick={() => setFilter('semua')}
        >
          Semua ({SPECIES.length})
        </button>
        {HABITAT_LIST.map(([key, h]) => (
          <button
            key={key}
            type="button"
            className={cn('btn !py-2 !text-xl', filter === key ? 'bg-sun' : 'bg-paper')}
            aria-pressed={filter === key}
            data-filter={key}
            onClick={() => setFilter(key)}
          >
            {h.label} ({count(key)})
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Menampilkan {shown.length} biota.
      </p>

      <div id="species-grid" className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((s, i) => (
          <SpeciesCard key={s.slug} species={s} rot={ROT[i % ROT.length]} />
        ))}
      </div>
    </>
  );
}
