import Link from 'next/link';

import { CreatureArt } from '@/components/CreatureArt';
import { HABITATS, STATUS, type Species } from '@/data/species';
import { cn } from '@/lib/cn';
import { cssVars } from '@/lib/css';

interface SpeciesCardProps {
  species: Species;
  rot?: string;
}

export function SpeciesCard({ species: s, rot = '' }: SpeciesCardProps) {
  return (
    <Link
      href={`/wildlife/${s.slug}/`}
      className={cn('species-card group flex h-full pressable flex-col bg-paper brut', rot)}
    >
      <div
        className={cn(
          'relative grid aspect-[4/3] place-items-center overflow-hidden border-b-4 border-ink bg-dots',
          s.bg,
        )}
      >
        <CreatureArt
          slug={s.slug}
          className="w-[70%] -translate-y-3 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3"
        />
        <span
          className={cn('absolute top-3 left-3 sticker', STATUS[s.status].cls)}
          style={cssVars({ '--r': '-4deg' })}
        >
          {s.status}
        </span>
        <span
          className="absolute right-3 bottom-3 sticker bg-paper"
          style={cssVars({ '--r': '3deg' })}
        >
          {HABITATS[s.habitat].label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="display text-4xl">{s.name}</h3>
        <p className="text-sm text-deep italic">{s.latin}</p>
        <p className="mt-2">{s.tagline}</p>
        <span className="mt-auto pt-4 display text-2xl transition-transform group-hover:translate-x-1">
          Kenalan →
        </span>
      </div>
    </Link>
  );
}
