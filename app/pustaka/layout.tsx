import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pustaka Riset & Kompendium Kopi Nusantara',
  description:
    'Repositori terbuka riset kopi specialty, jurnal ilmiah agronomi tanah vulkanik, standar resmi SCA & CQI, panduan cupping, dan literatur pasca-panen Indonesia.',
  keywords: [
    'pustaka kopi indonesia',
    'jurnal kopi specialty',
    'riset kopi indonesia',
    'standar sca pdf indonesia',
    'literatur agronomi kopi',
    'jurnal fermentasi kopi',
    'kompendium kopi nusantara',
  ],
  openGraph: {
    title: 'Pustaka Riset & Kompendium Kopi Nusantara | CherryEdu',
    description:
      'Repositori riset ilmiah dan referensi resmi industri kopi specialty terlengkap di Indonesia.',
    url: 'https://edu.cherrycoffeeroastery.com/pustaka',
    images: [
      {
        url: '/og/og-curriculum.jpg',
        width: 1024,
        height: 537,
        alt: 'CherryEdu Pustaka Riset & Kompendium Kopi Nusantara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pustaka Riset & Kompendium Kopi Nusantara | CherryEdu',
    description:
      'Repositori riset ilmiah dan referensi resmi industri kopi specialty terlengkap di Indonesia.',
    images: ['/og/og-curriculum.jpg'],
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/pustaka',
  },
};

export default function PustakaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
