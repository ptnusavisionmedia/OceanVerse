/**
 * Daftar pustaka (APA 7). Setiap entri menyertakan DOI atau tautan situs.
 * Halaman memilih rujukan yang dipakai lewat `ids` pada komponen <References />.
 * `cite` = bentuk sitasi dalam teks, mis. (FAO, 2025).
 */
export interface Ref {
  id: string;
  /** Penulis / lembaga */
  author: string;
  /** Tahun (atau "n.d."), boleh disertai tanggal: "2025, June 11" */
  year: string;
  title: string;
  /** Judul dicetak miring. Default: ya (halaman web/laporan); mati otomatis untuk artikel jurnal */
  italicTitle?: boolean;
  /** Artikel jurnal: nama jurnal & volume dicetak miring */
  journal?: string;
  volume?: string;
  pages?: string;
  /** Keterangan dalam kurung siku, mis. [Press release] */
  note?: string;
  /** Penerbit / nama jurnal (opsional) */
  source?: string;
  /** DOI (diutamakan) atau URL situs */
  url: string;
  cite: string;
}

export const REFS: Record<string, Ref> = {
  smithsonian: {
    id: 'smithsonian',
    author: 'Smithsonian Ocean',
    year: 'n.d.',
    title: 'Just how big is the ocean?',
    url: 'https://ocean.si.edu/planet-ocean/seafloor/just-how-big-ocean',
    cite: 'Smithsonian Ocean, n.d.',
  },
  noaaOxygen: {
    id: 'noaaOxygen',
    author: 'NOAA National Ocean Service',
    year: 'n.d.',
    title: 'How much oxygen comes from the ocean?',
    url: 'https://oceanservice.noaa.gov/facts/ocean-oxygen.html',
    cite: 'NOAA National Ocean Service, n.d.',
  },
  noaaLight: {
    id: 'noaaLight',
    author: 'NOAA National Ocean Service',
    year: '2024, June 16',
    title: 'How far does light travel in the ocean?',
    url: 'https://oceanservice.noaa.gov/facts/light_travel.html',
    cite: 'NOAA National Ocean Service, 2024',
  },
  noaaZones: {
    id: 'noaaZones',
    author: 'NOAA Ocean Exploration',
    year: 'n.d.',
    title: 'How far does light travel in the ocean? [Ocean fact]',
    url: 'https://oceanexplorer.noaa.gov/?p=1862',
    cite: 'NOAA Ocean Exploration, n.d.',
  },
  noaaCoral: {
    id: 'noaaCoral',
    author: 'NOAA Florida Keys National Marine Sanctuary',
    year: 'n.d.',
    title: 'Coral reef biodiversity',
    url: 'https://floridakeys.noaa.gov/corals/biodiversity.html',
    cite: 'NOAA Florida Keys NMS, n.d.',
  },
  challenger: {
    id: 'challenger',
    author: 'Greenaway, S. F., Umfress, S. H., Beittel, A. B., & Wagner, K. D.',
    year: '2021',
    title:
      'Revised depth of the Challenger Deep from submersible transects; including a general method for precise, pressure-derived depths in the ocean',
    journal: 'Deep Sea Research Part I: Oceanographic Research Papers',
    volume: '178',
    pages: 'Article 103644',
    url: 'https://doi.org/10.1016/j.dsr.2021.103644',
    cite: 'Greenaway et al., 2021',
  },
  seabed: {
    id: 'seabed',
    author: 'International Hydrographic Organization',
    year: '2026',
    title:
      'Global seabed mapping reaches new milestone as five million square kilometres added in a year',
    url: 'https://iho.int/en/global-seabed-mapping-reaches-new-milestone-as-five-million-square-kilometres-added-in-a-year',
    cite: 'International Hydrographic Organization, 2026',
  },
  tncRajaAmpat: {
    id: 'tncRajaAmpat',
    author: 'The Nature Conservancy',
    year: '2011',
    title: 'The Raja Ampat Islands: In the heart of the Coral Triangle',
    note: '[Fact sheet]',
    url: 'https://www.reefresilience.org/pdf/IMP-RajaAmpat-Sep11.pdf',
    cite: 'The Nature Conservancy, 2011',
  },
  jakartaPost: {
    id: 'jakartaPost',
    author: 'Kyodo News',
    year: '2022, May 12',
    title: 'Raja Ampat coastal community on frontline of defending coral reefs',
    note: '[News article]',
    source: 'The Jakarta Post.',
    url: 'https://www.thejakartapost.com/indonesia/2022/05/12/raja-ampat-coastal-community-on-frontline-of-defending-coral-reefs',
    cite: 'Kyodo News, 2022',
    italicTitle: false,
  },
  fao: {
    id: 'fao',
    author: 'Food and Agriculture Organization of the United Nations',
    year: '2025, June 11',
    title: 'FAO releases the most detailed global assessment of marine fish stocks to date',
    note: '[Press release]',
    url: 'https://www.fao.org/newsroom/detail/fao-releases-the-most-detailed-global-assessment-of-marine-fish-stocks-to-date/en',
    cite: 'FAO, 2025',
  },
  bleaching: {
    id: 'bleaching',
    author: 'ECO Magazine',
    year: '2026',
    title: "World's fourth mass coral bleaching event likely ended in 2025",
    url: 'https://ecomagazine.com/news/coastal/worlds-fourth-mass-coral-bleaching-event-likely-ended-in-2025/',
    cite: 'ECO Magazine, 2026',
  },
  protectedPlanet: {
    id: 'protectedPlanet',
    author: 'UNEP-WCMC & IUCN',
    year: '2024',
    title: 'Protected Planet Report 2024',
    source: 'UNEP-WCMC & IUCN.',
    url: 'https://www.unep.org/resources/report/protected-planet-report-2024',
    cite: 'UNEP-WCMC & IUCN, 2024',
  },
  greenTurtleOceanic: {
    id: 'greenTurtleOceanic',
    author: 'Oceanic Society',
    year: '2025, October 15',
    title: 'Global conservation efforts lift green turtle from Endangered status',
    url: 'https://www.oceanicsociety.org/news-and-announcements/green-sea-turtle-status-improvement-2025/',
    cite: 'Oceanic Society, 2025',
  },
  greenTurtleMongabay: {
    id: 'greenTurtleMongabay',
    author: 'Mongabay',
    year: '2025',
    title: 'Green turtle rebounds, moving from Endangered to Least Concern',
    url: 'https://news.mongabay.com/short-article/green-turtle-rebounds-moving-from-endangered-to-least-concern/',
    cite: 'Mongabay, 2025',
  },
  iucn: {
    id: 'iucn',
    author: 'International Union for Conservation of Nature',
    year: 'n.d.',
    title: 'The IUCN Red List of Threatened Species',
    url: 'https://www.iucnredlist.org',
    cite: 'IUCN, n.d.',
  },
};
