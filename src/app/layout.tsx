import type { Metadata, Viewport } from 'next';
import '@fontsource/barlow-condensed/latin-800.css';
import '@fontsource/barlow-condensed/latin-800-italic.css';
import '@fontsource/barlow-condensed/latin-900-italic.css';
import '@fontsource-variable/dm-sans/index.css';
import './globals.css';

import { Footer } from '@/components/Footer';
import { LogoSticker } from '@/components/LogoSticker';
import { Nav } from '@/components/Nav';
import { SiteEffects } from '@/components/SiteEffects';
import { Ticker } from '@/components/Ticker';
import { SITE } from '@/data/site';

// Isi SITE_URL saat build produksi (mis. SITE_URL=https://oceanverse.id npm run build)
// agar URL kanonik & Open Graph benar.
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: { siteName: SITE.name, type: 'website', locale: 'id_ID' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#020e46',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Tandai JS aktif sebelum cat pertama agar animasi reveal tidak berkedip */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="absolute top-2 left-2 z-[200] -translate-y-24 bg-sun px-4 py-2 font-bold brut-sm focus:translate-y-0"
        >
          Lompat ke konten
        </a>
        <Nav />
        {/* lg:pl-24 = lebar rel navigasi kiri */}
        <div className="relative lg:pl-24">
          <Ticker />
          <LogoSticker />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <SiteEffects />
      </body>
    </html>
  );
}
