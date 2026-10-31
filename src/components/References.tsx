import { REFS } from '@/data/references';
import { cn } from '@/lib/cn';

interface ReferencesProps {
  ids: string[];
  note?: string;
  tone?: 'light' | 'dark';
}

// Penulis diakhiri titik (inisial sudah berakhir titik)
const withPeriod = (a: string) => (a.endsWith('.') ? a : `${a}.`);

export function References({ ids, note, tone = 'light' }: ReferencesProps) {
  // APA 7: urut abjad menurut penulis, lalu tahun
  const entries = ids
    .map((id) => {
      const r = REFS[id];
      if (!r) throw new Error(`Referensi tidak dikenal: ${id}`);
      return r;
    })
    .sort((a, b) => a.author.localeCompare(b.author) || a.year.localeCompare(b.year));

  const dark = tone === 'dark';

  return (
    <section
      aria-labelledby="refs-title"
      className={cn(
        'border-t-4 border-ink',
        dark ? 'bg-ink text-paper' : 'bg-foam bg-waves text-ink',
      )}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-12 md:px-8">
        <h2 id="refs-title" className="display text-4xl md:text-5xl">
          Daftar Pustaka
        </h2>
        <p className={cn('mt-2 text-sm', dark ? 'text-mist' : 'text-deep')}>
          Gaya sitasi APA edisi ke-7. Setiap rujukan menyertakan DOI atau tautan situs.
        </p>
        <ol className="mt-6 space-y-3 text-[0.95rem] leading-relaxed">
          {entries.map((r) => {
            const italic = r.italicTitle ?? !r.journal;
            const endsWithMark = /[.?!]$/.test(r.title);
            return (
              <li key={r.id} className="pl-8 -indent-8">
                {withPeriod(r.author)} ({r.year}). {italic ? <em>{r.title}</em> : r.title}
                {r.note ? ` ${r.note}` : ''}
                {endsWithMark && !r.note ? '' : '.'}{' '}
                {r.journal && (
                  <>
                    <em>
                      {r.journal}, {r.volume}
                    </em>
                    , {r.pages}.{' '}
                  </>
                )}
                {r.source && <>{r.source} </>}
                <a
                  href={r.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={cn(
                    '[overflow-wrap:anywhere] underline decoration-2 underline-offset-2',
                    dark ? 'text-aqua' : 'text-royal',
                  )}
                >
                  {r.url}
                </a>
              </li>
            );
          })}
        </ol>
        {note && (
          <p className={cn('mt-6 border-l-4 pl-4 text-sm', dark ? 'border-sun' : 'border-ink')}>
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
