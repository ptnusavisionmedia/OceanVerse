export type StatusCode = 'LC' | 'NT' | 'VU' | 'EN' | 'CR';
export type Habitat = 'laut-terbuka' | 'terumbu' | 'pesisir';

export const STATUS: Record<StatusCode, { label: string; en: string; cls: string }> = {
  LC: { label: 'Berisiko rendah', en: 'Least Concern', cls: 'bg-kelp' },
  NT: { label: 'Hampir terancam', en: 'Near Threatened', cls: 'bg-mist' },
  VU: { label: 'Rentan', en: 'Vulnerable', cls: 'bg-sun' },
  EN: { label: 'Terancam punah', en: 'Endangered', cls: 'bg-clown' },
  CR: { label: 'Kritis', en: 'Critically Endangered', cls: 'bg-coral' },
};

export const HABITATS: Record<Habitat, { label: string; blurb: string }> = {
  'laut-terbuka': { label: 'Laut Terbuka', blurb: 'Samudra luas tanpa dinding' },
  terumbu: { label: 'Terumbu Karang', blurb: 'Kota warna-warni di dasar laut' },
  pesisir: { label: 'Pesisir & Lamun', blurb: 'Pantai, padang lamun, dan hutan bakau' },
};

export interface Species {
  slug: string;
  name: string;
  latin: string;
  group: string;
  habitat: Habitat;
  status: StatusCode;
  /** Catatan tambahan tentang status (mis. beda antarspesies) */
  statusNote?: string;
  /** Kelas warna latar kartu */
  bg: string;
  tagline: string;
  size: string;
  lifespan?: string;
  diet: string;
  facts: string[];
  indonesia: string;
  threats: string[];
  help: string[];
}

export const SPECIES: Species[] = [
  {
    slug: 'paus-biru',
    name: 'Paus Biru',
    latin: 'Balaenoptera musculus',
    group: 'Mamalia laut',
    habitat: 'laut-terbuka',
    status: 'EN',
    bg: 'bg-azure',
    tagline: 'Hewan terbesar yang pernah diketahui hidup di Bumi.',
    size: 'Panjang hingga ±30 m; bobot bisa melebihi 100 ton',
    diet: 'Krill (udang kecil) — beberapa ton per hari saat musim makan',
    facts: [
      'Meski sebesar itu, makanan utamanya hanya krill. Ia menyaring air laut lewat lempeng baleen di mulutnya.',
      'Panggilannya berfrekuensi rendah dan bisa merambat sangat jauh di dalam air.',
      'Ia bermigrasi jauh antara perairan tempat makan dan perairan tempat berkembang biak.',
    ],
    indonesia:
      'Paus biru tercatat melintas di perairan Indonesia, termasuk sekitar Laut Sawu dan Laut Banda yang menjadi jalur penting mamalia laut besar.',
    threats: [
      'Tabrakan dengan kapal besar',
      'Terjerat alat tangkap',
      'Kebisingan bawah laut yang mengganggu komunikasi',
      'Perubahan ketersediaan krill akibat laut yang menghangat',
    ],
    help: [
      'Dukung pengaturan jalur pelayaran yang aman bagi paus',
      'Pilih operator pengamatan paus yang menjaga jarak',
      'Kurangi jejak karbon — laut yang lebih hangat mengubah rantai makanan krill',
    ],
  },
  {
    slug: 'penyu-hijau',
    name: 'Penyu Hijau',
    latin: 'Chelonia mydas',
    group: 'Reptil laut',
    habitat: 'pesisir',
    status: 'LC',
    statusNote:
      'Status global turun dari Endangered ke Least Concern pada Oktober 2025 — bukti bahwa konservasi bekerja. Beberapa sub-populasi masih rentan.',
    bg: 'bg-kelp',
    tagline: 'Penjelajah samudra yang pulang bertelur ke pantai asalnya.',
    size: 'Panjang karapas sekitar 1 m atau lebih',
    diet: 'Dewasa: lamun dan alga. Tukik & remaja: lebih omnivora',
    facts: [
      'Penyu betina cenderung kembali bertelur ke kawasan pantai tempat ia sendiri menetas.',
      'Suhu pasir sarang ikut menentukan jenis kelamin tukik: pasir lebih hangat menghasilkan lebih banyak betina.',
      'Hanya sebagian kecil tukik yang bertahan hingga dewasa — itulah mengapa setiap sarang berarti.',
    ],
    indonesia:
      'Penyu hijau bertelur di berbagai pantai nusantara. Pulau Derawan di Kalimantan Timur termasuk lokasi peneluran yang terkenal.',
    threats: [
      'Pengambilan telur dan perburuan',
      'Tertangkap tak sengaja (bycatch) di jaring dan pancing',
      'Hilangnya pantai peneluran akibat pembangunan',
      'Sampah plastik dan pemanasan pasir sarang',
    ],
    help: [
      'Jangan membeli produk dari penyu — telur, daging, maupun cangkang',
      'Matikan lampu terang di pantai peneluran pada malam hari',
      'Kurangi plastik sekali pakai, terutama kantong plastik',
      'Hubungi pengelola kawasan konservasi setempat bila menemukan sarang atau penyu terdampar',
    ],
  },
  {
    slug: 'hiu-paus',
    name: 'Hiu Paus',
    latin: 'Rhincodon typus',
    group: 'Ikan bertulang rawan',
    habitat: 'laut-terbuka',
    status: 'EN',
    bg: 'bg-aqua',
    tagline: 'Ikan terbesar di dunia — dan pemakan plankton yang lembut.',
    size: 'Umumnya hingga ±12 m',
    diet: 'Plankton dan ikan-ikan kecil, disaring lewat insang',
    facts: [
      'Ia ikan, bukan paus. Namanya datang dari ukurannya yang raksasa.',
      'Pola bintik putih di tubuhnya unik pada tiap individu — seperti sidik jari.',
      'Meski santai di dekat permukaan, hiu paus tercatat menyelam sangat dalam, melewati 1.000 m.',
    ],
    indonesia:
      'Di Teluk Cenderawasih, Papua, hiu paus sering muncul di sekitar bagan nelayan — salah satu tempat perjumpaan hiu paus yang paling dikenal di Indonesia.',
    threats: [
      'Tertabrak kapal',
      'Tertangkap tak sengaja oleh alat tangkap',
      'Perdagangan produk hiu',
      'Wisata yang tidak menjaga jarak',
    ],
    help: [
      'Ikuti aturan jarak saat berenang bersama hiu paus — jangan menyentuh atau memberi makan',
      'Pilih operator wisata yang bertanggung jawab',
      'Hindari produk olahan hiu',
    ],
  },
  {
    slug: 'pari-manta',
    name: 'Pari Manta',
    latin: 'Mobula alfredi & M. birostris',
    group: 'Ikan bertulang rawan',
    habitat: 'laut-terbuka',
    status: 'EN',
    statusNote:
      'Manta samudra (M. birostris) berstatus Endangered; manta karang (M. alfredi) berstatus Vulnerable.',
    bg: 'bg-mist',
    tagline: 'Penerbang bawah laut dengan sayap selebar perahu.',
    size: 'Lebar sayap hingga ±5–7 m, tergantung spesies',
    diet: 'Plankton dan larva ikan',
    facts: [
      'Sepasang sirip di kepalanya berfungsi menggiring plankton ke dalam mulut.',
      'Ia memiliki salah satu otak terbesar di antara ikan.',
      'Manta mengunjungi "stasiun pembersih" di terumbu, tempat ikan kecil memakan parasit di kulitnya.',
    ],
    indonesia:
      'Nusa Penida, Komodo, dan Raja Ampat termasuk titik perjumpaan manta yang terkenal. Indonesia melindungi penuh pari manta sejak 2014.',
    threats: [
      'Perburuan untuk insang',
      'Tertangkap tak sengaja oleh jaring',
      'Gangguan wisata yang berlebihan',
      'Laju reproduksi yang sangat lambat membuat populasi sulit pulih',
    ],
    help: [
      'Jangan membeli produk insang pari',
      'Jaga jarak dan jangan mengejar manta saat menyelam',
      'Dukung kawasan konservasi dan penegakan perlindungan manta',
    ],
  },
  {
    slug: 'ikan-badut',
    name: 'Ikan Badut',
    latin: 'Amphiprion ocellaris',
    group: 'Ikan karang',
    habitat: 'terumbu',
    status: 'LC',
    bg: 'bg-clown',
    tagline: 'Si oranye mungil yang berteman dengan anemon beracun.',
    size: 'Sekitar 8–11 cm',
    diet: 'Alga, plankton, dan sisa makanan di sekitar anemon',
    facts: [
      'Lendir di tubuhnya membuatnya tahan terhadap sengatan anemon laut, tempat ia berlindung.',
      'Semua ikan badut lahir sebagai jantan. Dalam satu kelompok, betina terbesarlah yang berkuasa.',
      'Jika betina dominan hilang, jantan terbesar bisa berubah menjadi betina.',
    ],
    indonesia:
      'Perairan Indonesia, jantung Segitiga Terumbu Karang, adalah rumah alami bagi ikan badut dan anemon laut.',
    threats: [
      'Pemutihan karang dan anemon akibat laut yang menghangat',
      'Penangkapan untuk perdagangan akuarium',
      'Rusaknya terumbu karang',
    ],
    help: [
      'Pilih ikan hias hasil penangkaran, bukan tangkapan alam',
      'Jangan menyentuh anemon atau karang saat snorkeling',
      'Dukung upaya perlindungan terumbu karang',
    ],
  },
  {
    slug: 'gurita',
    name: 'Gurita',
    latin: 'Octopus vulgaris',
    group: 'Moluska',
    habitat: 'terumbu',
    status: 'LC',
    bg: 'bg-coral',
    tagline: 'Cerdik, lentur, dan jago menyamar.',
    size: 'Lengan hingga sekitar 1 m',
    lifespan: 'Sekitar 1–2 tahun',
    diet: 'Kepiting, kerang, dan ikan kecil',
    facts: [
      'Gurita punya tiga jantung, dan darahnya berwarna biru karena mengandung hemosianin berbasis tembaga.',
      'Kulitnya bisa berganti warna dan tekstur dalam sekejap untuk menyamar.',
      'Tubuhnya tanpa tulang, sehingga bisa menyelinap lewat celah sesempit paruhnya.',
    ],
    indonesia:
      'Gurita kelapa (Amphioctopus marginatus) terkenal memakai tempurung kelapa sebagai tempat berlindung dan banyak diamati di perairan Sulawesi.',
    threats: [
      'Penangkapan berlebih di beberapa wilayah',
      'Rusaknya terumbu dan habitat dasar laut',
      'Perubahan suhu laut',
    ],
    help: [
      'Pilih seafood dari perikanan yang berkelanjutan',
      'Hindari alat tangkap yang merusak dasar laut',
      'Lindungi terumbu karang tempat gurita berburu dan bersembunyi',
    ],
  },
  {
    slug: 'dugong',
    name: 'Dugong',
    latin: 'Dugong dugon',
    group: 'Mamalia laut',
    habitat: 'pesisir',
    status: 'VU',
    bg: 'bg-sand',
    tagline: 'Si "duyung" pemakan lamun — inspirasi legenda putri duyung.',
    size: 'Panjang hingga ±3 m; bobot hingga ±400 kg',
    lifespan: 'Dapat mencapai sekitar 70 tahun',
    diet: 'Lamun (padang rumput laut)',
    facts: [
      'Dugong adalah kerabat manate dalam kelompok Sirenia. Kerabat jauh terdekatnya di darat adalah gajah.',
      'Dalam bahasa Indonesia, "duyung" adalah nama dugong — dari sinilah legenda putri duyung berakar.',
      'Ia "menggembala" padang lamun dan meninggalkan jalur makan yang terlihat di dasar laut.',
    ],
    indonesia:
      'Dugong hidup di perairan dangkal berlamun di sejumlah wilayah Indonesia, antara lain Kepulauan Riau dan Nusa Tenggara. Satwa ini dilindungi.',
    threats: [
      'Hilangnya padang lamun',
      'Terjerat jaring ikan',
      'Tabrakan dengan kapal',
      'Reproduksi lambat sehingga populasi sulit pulih',
    ],
    help: [
      'Lindungi padang lamun: jangan buang jangkar atau menginjak lamun',
      'Laporkan dugong yang terjerat atau terdampar kepada pengelola kawasan konservasi',
      'Dukung pengurangan limbah dan sedimen yang menyelimuti lamun',
    ],
  },
  {
    slug: 'kuda-laut',
    name: 'Kuda Laut',
    latin: 'Hippocampus kuda',
    group: 'Ikan',
    habitat: 'pesisir',
    status: 'VU',
    bg: 'bg-sun',
    tagline: 'Ikan yang berenang tegak — dan yang jantan-lah yang hamil.',
    size: 'Umumnya belasan sentimeter',
    diet: 'Udang dan krustasea kecil, disedot lewat moncongnya',
    facts: [
      'Pada kuda laut, betina menitipkan telur ke kantong jantan. Jantanlah yang "hamil" dan melahirkan.',
      'Ekornya dapat menggenggam batang lamun atau karang agar tidak hanyut.',
      'Kedua matanya bisa bergerak sendiri-sendiri, dan ia tidak punya lambung seperti ikan pada umumnya.',
    ],
    indonesia: 'Kuda laut hidup di padang lamun, terumbu, dan hutan bakau di perairan nusantara.',
    threats: [
      'Penangkapan untuk obat tradisional dan akuarium',
      'Rusaknya lamun dan mangrove',
      'Terjaring tak sengaja oleh jaring pukat',
    ],
    help: [
      'Jangan membeli kuda laut kering atau suvenir kuda laut',
      'Lindungi lamun dan mangrove di pesisirmu',
      'Jangan mengambil kuda laut dari alam',
    ],
  },
];

export const SPECIES_BY_SLUG = Object.fromEntries(SPECIES.map((s) => [s.slug, s])) as Record<
  string,
  Species
>;
