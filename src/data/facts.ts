export interface Fact {
  text: string;
  /** Sitasi dalam teks (APA) bila ada sumber rujukan */
  cite?: string;
  /** Tautan ke halaman terkait */
  href?: string;
  linkLabel?: string;
}

export const FACTS: Fact[] = [
  {
    text: 'Laut menutupi sekitar 71% permukaan Bumi dan menyimpan lebih dari 1,3 miliar km³ air.',
    cite: 'Smithsonian Ocean, n.d.',
  },
  {
    text: 'Sekitar separuh oksigen Bumi berasal dari laut — tetapi hampir sebanyak itu juga dipakai kembali oleh makhluk laut.',
    cite: 'NOAA National Ocean Service, n.d.',
  },
  {
    text: 'Terumbu karang menutupi kurang dari 1% dasar laut, namun menopang sekitar 25% spesies laut yang dikenal.',
    cite: 'NOAA Florida Keys NMS, n.d.',
  },
  {
    text: 'Baru sekitar 28,7% dasar laut dunia yang terpetakan dengan standar modern. Sisanya masih ruang kosong di peta.',
    cite: 'International Hydrographic Organization, 2026',
  },
  {
    text: 'Di Challenger Deep (±10.935 m), tekanan air lebih dari 1.000 kali tekanan di permukaan laut.',
    cite: 'Greenaway et al., 2021',
  },
  {
    text: 'Sinar matahari yang berarti hampir tak menembus lebih dari 200 m. Di bawah 1.000 m, tak ada cahaya matahari sama sekali.',
    cite: 'NOAA National Ocean Service, 2024',
  },
  {
    text: 'Raja Ampat mencatat 537 spesies karang — sekitar 75% dari seluruh spesies karang yang dikenal di dunia.',
    cite: 'The Nature Conservancy, 2011',
  },
  {
    text: 'Gurita punya tiga jantung, dan darahnya berwarna biru.',
    href: '/wildlife/gurita/',
    linkLabel: 'Kenalan dengan gurita',
  },
  {
    text: 'Pada kuda laut, yang hamil adalah si jantan.',
    href: '/wildlife/kuda-laut/',
    linkLabel: 'Kenalan dengan kuda laut',
  },
  {
    text: 'Semua ikan badut lahir sebagai jantan. Bila betina dominan menghilang, jantan terbesar berubah menjadi betina.',
    href: '/wildlife/ikan-badut/',
    linkLabel: 'Kenalan dengan ikan badut',
  },
  {
    text: 'Suhu pasir sarang ikut menentukan jenis kelamin tukik penyu: makin hangat, makin banyak betina.',
    href: '/wildlife/penyu-hijau/',
    linkLabel: 'Kenalan dengan penyu hijau',
  },
  {
    text: 'Bintik putih di tubuh hiu paus unik pada tiap individu, seperti sidik jari manusia.',
    href: '/wildlife/hiu-paus/',
    linkLabel: 'Kenalan dengan hiu paus',
  },
  {
    text: 'Kata "duyung" dalam bahasa Indonesia adalah nama dugong — inspirasi legenda putri duyung.',
    href: '/wildlife/dugong/',
    linkLabel: 'Kenalan dengan dugong',
  },
  {
    text: 'Pari manta punya salah satu otak terbesar di antara ikan.',
    href: '/wildlife/pari-manta/',
    linkLabel: 'Kenalan dengan pari manta',
  },
];
