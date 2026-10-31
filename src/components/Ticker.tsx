const ITEMS = [
  'Discover',
  'Learn',
  'Protect',
  'A little closer to the ocean',
  'Laut punya banyak cerita',
  'Jelajahi',
  'Kenali',
  'Jaga',
];

export function Ticker() {
  return (
    <div className="marquee border-b-4 border-ink bg-ink text-sun" role="presentation">
      <div className="marquee__track animate-marquee">
        {[0, 1].map((n) => (
          <div key={n} className="marquee__group" aria-hidden={n === 1 ? true : undefined}>
            {ITEMS.map((t) => (
              <span
                key={t}
                className="flex items-center gap-4 px-4 py-1 display text-lg tracking-wider whitespace-nowrap"
              >
                {t}
                <span className="inline-block h-2.5 w-2.5 rotate-45 bg-aqua" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
