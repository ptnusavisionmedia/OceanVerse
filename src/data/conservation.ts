export interface Threat {
  name: string;
  bg: string;
  big?: string;
  bigLabel?: string;
  text: string;
  cite?: string;
  rot: string;
}

export const THREATS: Threat[] = [
  {
    name: 'Laut yang menghangat',
    bg: 'bg-coral',
    big: '84%',
    bigLabel: 'area terumbu dunia terkena stres panas level pemutihan (2023 – pertengahan 2025)',
    text: 'Saat air terlalu hangat, karang mengusir alga yang memberinya warna dan makanan. Karang memutih; bila berlangsung lama, ia mati.',
    cite: 'ECO Magazine, 2026',
    rot: '-rotate-1',
  },
  {
    name: 'Penangkapan berlebih',
    bg: 'bg-sun',
    big: '35,5%',
    bigLabel: 'stok ikan laut dunia tergolong overfished; porsinya naik ±1% per tahun',
    text: 'Ikan ditangkap lebih cepat daripada kemampuannya berkembang biak. Alat tangkap merusak dan tangkapan sampingan memperburuk keadaan.',
    cite: 'FAO, 2025',
    rot: 'rotate-1',
  },
  {
    name: 'Sampah plastik',
    bg: 'bg-aqua',
    text: 'Plastik sekali pakai terurai menjadi mikroplastik, tetapi tak pernah benar-benar hilang. Penyu, burung laut, dan ikan sering menelannya, dan jaring terbuang ("ghost gear") terus menjerat satwa.',
    rot: '-rotate-2',
  },
  {
    name: 'Rusaknya habitat pesisir',
    bg: 'bg-kelp',
    text: 'Mangrove ditebang, lamun tertimbun, pantai peneluran berubah jadi bangunan. Padahal kawasan ini adalah tempat pembibitan banyak kehidupan laut.',
    rot: 'rotate-1',
  },
  {
    name: 'Kebisingan & lalu lintas kapal',
    bg: 'bg-mist',
    text: 'Bagi paus dan lumba-lumba, suara adalah mata mereka. Mesin kapal mengganggu komunikasi, dan tabrakan dengan kapal besar menjadi ancaman nyata.',
    rot: '-rotate-1',
  },
];

export interface Action {
  id: string;
  group: 'Di rumah' | 'Di dapur' | 'Di pantai' | 'Bersama orang lain';
  text: string;
  why: string;
}

export const ACTIONS: Action[] = [
  {
    id: 'botol',
    group: 'Di rumah',
    text: 'Bawa botol minum dan tas belanja sendiri',
    why: 'Mengurangi plastik sekali pakai di sumbernya.',
  },
  {
    id: 'sedotan',
    group: 'Di rumah',
    text: 'Tolak sedotan dan kantong plastik yang tak perlu',
    why: 'Barang kecil yang sering lolos ke sungai lalu ke laut.',
  },
  {
    id: 'pilah',
    group: 'Di rumah',
    text: 'Pilah sampah dan buang pada tempatnya',
    why: 'Sampah di daratan bisa terbawa sungai ke laut.',
  },
  {
    id: 'energi',
    group: 'Di rumah',
    text: 'Hemat listrik dan kurangi perjalanan yang tak perlu',
    why: 'Laut menyerap sebagian besar panas berlebih dari pemanasan global.',
  },
  {
    id: 'seafood',
    group: 'Di dapur',
    text: 'Pilih seafood dari perikanan yang berkelanjutan',
    why: 'Memberi ruang bagi stok ikan untuk pulih.',
  },
  {
    id: 'asal',
    group: 'Di dapur',
    text: 'Cari tahu asal ikan yang kamu beli',
    why: 'Hindari ikan muda, spesies terancam, dan hasil tangkapan ilegal.',
  },
  {
    id: 'karang',
    group: 'Di pantai',
    text: 'Jangan menyentuh, menginjak, atau mengambil karang',
    why: 'Karang tumbuh sangat lambat dan mudah terluka.',
  },
  {
    id: 'jarak',
    group: 'Di pantai',
    text: 'Jaga jarak dari satwa laut dan jangan memberinya makan',
    why: 'Gangguan bisa mengubah perilaku alami mereka.',
  },
  {
    id: 'bersih',
    group: 'Di pantai',
    text: 'Ikut kegiatan bersih pantai',
    why: 'Sampah dipungut sebelum ombak membawanya kembali.',
  },
  {
    id: 'suvenir',
    group: 'Di pantai',
    text: 'Jangan beli suvenir dari satwa laut (karang, cangkang langka, penyu)',
    why: 'Permintaan memicu perburuan.',
  },
  {
    id: 'cerita',
    group: 'Bersama orang lain',
    text: 'Ceritakan satu fakta laut ke tiga orang temanmu',
    why: 'Orang melindungi apa yang ia pahami.',
  },
  {
    id: 'komunitas',
    group: 'Bersama orang lain',
    text: 'Dukung atau ikut program konservasi di daerahmu',
    why: 'Aksi lokal yang konsisten sering paling berdampak.',
  },
];

export const RANKS = [
  { min: 0, name: 'Plankton', line: 'Kecil, tapi semua rantai makanan berawal darimu.' },
  { min: 3, name: 'Ikan Badut', line: 'Sudah punya rumah di terumbu. Terus bertambah!' },
  { min: 6, name: 'Penyu Hijau', line: 'Perjalananmu jauh, dan kamu terus pulang menjaga.' },
  { min: 9, name: 'Hiu Paus', line: 'Besar, tenang, dan berdampak luas.' },
  {
    min: 12,
    name: 'Paus Biru',
    line: 'Penjaga laut sejati. Ajak orang lain ikut berenang bersamamu!',
  },
] as const;

export const DATES = [
  { d: '22', m: 'Apr', name: 'Hari Bumi', bg: 'bg-kelp' },
  { d: '8', m: 'Jun', name: 'Hari Laut Sedunia', bg: 'bg-cyan' },
  { d: '16', m: 'Jun', name: 'Hari Penyu Sedunia', bg: 'bg-sun' },
  { d: '10', m: 'Agu', name: 'Hari Konservasi Alam Nasional', bg: 'bg-coral' },
];
