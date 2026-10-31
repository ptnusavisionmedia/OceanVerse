export interface Zone {
  id: string;
  name: string;
  nick: string;
  from: number;
  to: number;
  light: string;
  temp: string;
  life: string[];
  fact: string;
}

/** Batas zona mengikuti NOAA Ocean Exploration (n.d.) */
export const ZONES: Zone[] = [
  {
    id: 'epipelagic',
    name: 'Epipelagik',
    nick: 'Zona Sinar Matahari',
    from: 0,
    to: 200,
    light: 'Cahaya cukup untuk fotosintesis',
    temp: 'Paling hangat dan paling berubah-ubah',
    life: ['Plankton', 'Penyu', 'Tuna', 'Lumba-lumba', 'Terumbu karang'],
    fact: 'Sebagian besar perikanan komersial, mamalia laut, dan penyu hidup di lapisan tipis ini.',
  },
  {
    id: 'mesopelagic',
    name: 'Mesopelagik',
    nick: 'Zona Senja',
    from: 200,
    to: 1000,
    light: 'Cahaya meredup cepat — fotosintesis tak lagi mungkin',
    temp: 'Turun tajam seiring kedalaman',
    life: ['Ikan lentera', 'Cumi-cumi', 'Ubur-ubur dalam'],
    fact: 'Banyak penghuninya naik ke dekat permukaan saat malam untuk makan, lalu turun lagi saat fajar.',
  },
  {
    id: 'bathypelagic',
    name: 'Batipelagik',
    nick: 'Zona Tengah Malam',
    from: 1000,
    to: 4000,
    light: 'Gelap total dari sinar matahari — hanya cahaya buatan makhluk hidup',
    temp: 'Dingin, mendekati beku',
    life: ['Ikan pancing', 'Cumi vampir', 'Paus sperma (saat berburu)'],
    fact: 'Di sinilah makhluk-makhluk menyalakan lampunya sendiri lewat bioluminesensi.',
  },
  {
    id: 'abyssopelagic',
    name: 'Abisopelagik',
    nick: 'Zona Abisal',
    from: 4000,
    to: 6000,
    light: 'Gelap abadi',
    temp: 'Dingin, mendekati beku',
    life: ['Timun laut', 'Bintang rapuh', 'Ikan ekor tikus'],
    fact: 'Dataran abisal — hamparan lumpur luas — menutupi sebagian besar dasar samudra.',
  },
  {
    id: 'hadopelagic',
    name: 'Hadopelagik',
    nick: 'Zona Hadal (Palung)',
    from: 6000,
    to: 10935,
    light: 'Gelap abadi',
    temp: 'Dingin, mendekati beku',
    life: ['Amfipoda', 'Timun laut', 'Ikan keong'],
    fact: 'Tekanan di dasar palung terdalam lebih dari 1.000 kali tekanan permukaan — namun kehidupan tetap ada.',
  },
];

export const MAX_DEPTH = 10935;

export interface Landmark {
  depth: number;
  label: string;
}

export const LANDMARKS: Landmark[] = [
  { depth: 0, label: 'Permukaan laut' },
  { depth: 40, label: 'Batas umum selam rekreasi (±40 m)' },
  { depth: 200, label: 'Batas cahaya yang berarti bagi fotosintesis' },
  { depth: 1000, label: 'Batas terakhir cahaya matahari' },
  { depth: 2992, label: 'Paus paruh Cuvier, rekor selam mamalia (±3.000 m)' },
  { depth: 3800, label: 'Bangkai Titanic bersemayam (±3.800 m)' },
  { depth: 8000, label: 'Ikan keong terekam hidup lebih dari 8.000 m' },
  { depth: 10935, label: 'Challenger Deep, Palung Mariana — titik terdalam yang terukur' },
];

export interface Ecosystem {
  name: string;
  tag: string;
  bg: string;
  text: string;
  stat?: string;
}

export const ECOSYSTEMS: Ecosystem[] = [
  {
    name: 'Terumbu Karang',
    tag: 'Kota di bawah laut',
    bg: 'bg-coral',
    text: 'Karang adalah hewan kecil yang membangun rumah dari kapur, bersimbiosis dengan alga mikroskopis. Hasilnya: struktur raksasa yang menampung ribuan spesies.',
    stat: 'Menutupi <1% dasar laut, menopang ±25% spesies laut',
  },
  {
    name: 'Hutan Mangrove',
    tag: 'Sabuk hijau pesisir',
    bg: 'bg-kelp',
    text: 'Akarnya yang rapat meredam ombak, menahan lumpur, dan menjadi tempat pembibitan bagi ikan serta udang muda.',
  },
  {
    name: 'Padang Lamun',
    tag: 'Padang rumput laut',
    bg: 'bg-aqua',
    text: 'Lamun adalah tumbuhan berbunga yang hidup di bawah air. Dugong dan penyu hijau menggembala di sini, sementara kuda laut bersembunyi di helaiannya.',
  },
  {
    name: 'Laut Terbuka',
    tag: 'Samudra pelagis',
    bg: 'bg-azure',
    text: 'Rumah paus, hiu, tuna, dan pengembara samudra lain. Tak ada dinding — hanya arus, plankton, dan jarak yang sangat jauh.',
  },
  {
    name: 'Laut Dalam',
    tag: 'Dunia tanpa matahari',
    bg: 'bg-royal',
    text: 'Gelap, dingin, bertekanan tinggi. Makhluk di sini hidup dari "salju laut" yang jatuh dari atas, atau dari energi kimia di dasar laut.',
  },
];

export interface Phenomenon {
  name: string;
  text: string;
  bg: string;
  rot: string;
}

export const PHENOMENA: Phenomenon[] = [
  {
    name: 'Bioluminesensi',
    text: 'Banyak hewan laut dalam membuat cahaya sendiri lewat reaksi kimia — untuk memikat mangsa, mengelabui pemangsa, atau berkomunikasi.',
    bg: 'bg-aqua',
    rot: '-rotate-1',
  },
  {
    name: 'Upwelling',
    text: 'Angin dan arus mendorong air dingin kaya nutrisi naik dari kedalaman. Hasilnya: plankton berlimpah dan perairan kaya ikan.',
    bg: 'bg-sun',
    rot: 'rotate-1',
  },
  {
    name: 'Arlindo',
    text: 'Arus Lintas Indonesia mengalirkan massa air dari Samudra Pasifik ke Samudra Hindia melalui selat-selat nusantara, dan memengaruhi iklim global.',
    bg: 'bg-mist',
    rot: '-rotate-2',
  },
  {
    name: 'Ventilasi Hidrotermal',
    text: 'Retakan di dasar laut menyemburkan air panas kaya mineral. Di sekitarnya, kehidupan bertumpu pada kemosintesis, bukan sinar matahari.',
    bg: 'bg-coral',
    rot: 'rotate-1',
  },
  {
    name: 'Pasang Surut',
    text: 'Tarikan gravitasi bulan dan matahari menaikkan serta menurunkan muka laut. Pasang tertinggi terjadi ketika bulan, bumi, dan matahari sejajar.',
    bg: 'bg-kelp',
    rot: '-rotate-1',
  },
  {
    name: 'Salju Laut',
    text: 'Serpihan organik — sisa plankton dan makhluk mati — jatuh perlahan seperti salju, menjadi makanan bagi penghuni laut dalam.',
    bg: 'bg-foam',
    rot: 'rotate-2',
  },
];
