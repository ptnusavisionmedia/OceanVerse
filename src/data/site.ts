import type { StaticImageData } from 'next/image';
import home from '@/assets/buttons/home.webp';
import homeSm from '@/assets/buttons/home-sm.webp';
import explore from '@/assets/buttons/explore.webp';
import exploreSm from '@/assets/buttons/explore-sm.webp';
import wildlife from '@/assets/buttons/wildlife.webp';
import wildlifeSm from '@/assets/buttons/wildlife-sm.webp';
import conservation from '@/assets/buttons/conservation.webp';
import conservationSm from '@/assets/buttons/conservation-sm.webp';

export const SITE = {
  name: 'OceanVerse',
  tagline: 'A little closer to the ocean',
  description:
    'OceanVerse — situs edukasi laut: jelajahi zona kedalaman, kenali satwa laut, dan temukan langkah kecil untuk menjaga samudra.',
  motto: ['Discover', 'Learn', 'Protect'],
  year: new Date().getFullYear(),
} as const;

export type NavKey = 'home' | 'explore' | 'wildlife' | 'conservation';

export interface NavItem {
  key: NavKey;
  href: string;
  /** Label Indonesia (untuk pembaca layar & teks) */
  label: string;
  /** Teks pada aset tombol */
  en: string;
  blurb: string;
  /** Aset tombol ukuran besar (hero, kartu) */
  img: StaticImageData;
  /** Aset tombol ukuran kecil (header, footer) */
  imgSm: StaticImageData;
  /** Kelas warna latar kartu */
  bg: string;
}

export const NAV: NavItem[] = [
  {
    key: 'home',
    href: '/',
    label: 'Beranda',
    en: 'Home',
    blurb: 'Awali perjalananmu dengan fakta menarik dan cerita pilihan dari laut.',
    img: home,
    imgSm: homeSm,
    bg: 'bg-azure',
  },
  {
    key: 'explore',
    href: '/explore/',
    label: 'Jelajah Laut',
    en: 'Explore',
    blurb:
      'Selam dari permukaan sampai palung terdalam, lalu kenali ekosistem dan fenomena unik samudra.',
    img: explore,
    imgSm: exploreSm,
    bg: 'bg-cyan',
  },
  {
    key: 'wildlife',
    href: '/wildlife/',
    label: 'Biota Laut',
    en: 'Wildlife',
    blurb:
      'Berkenalan dengan paus, penyu, pari manta, dan penghuni laut lain beserta rumah mereka.',
    img: wildlife,
    imgSm: wildlifeSm,
    bg: 'bg-sun',
  },
  {
    key: 'conservation',
    href: '/conservation/',
    label: 'Jaga Laut',
    en: 'Conservation',
    blurb: 'Pahami ancamannya, lalu ambil langkah kecil yang benar-benar bisa kamu lakukan.',
    img: conservation,
    imgSm: conservationSm,
    bg: 'bg-kelp',
  },
];

export const NAV_BY_KEY = Object.fromEntries(NAV.map((n) => [n.key, n])) as Record<NavKey, NavItem>;
