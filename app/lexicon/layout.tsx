import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kamus Istilah Kopi Specialty Indonesia (Coffee Lexicon)',
  description:
    'Glosarium dan kamus istilah kopi specialty terlengkap di Indonesia. Dari agronomi, proses pasca-panen, reaksi Maillard roasting, ekstraksi espresso, hingga terminologi sensory SCA & Q-Grader.',
  keywords: [
    'kamus kopi indonesia',
    'istilah kopi specialty',
    'coffee lexicon indonesia',
    'arti reaksi maillard kopi',
    'arti channeling espresso',
    'glosarium barista',
    'terminologi cupping sca',
    'istilah pasca panen kopi',
  ],
  openGraph: {
    title: 'Kamus Istilah Kopi Specialty Indonesia (Coffee Lexicon) | CherryEdu',
    description:
      'Ensiklopedia dan glosarium istilah kopi terlengkap dari hulu ke hilir dalam bahasa Indonesia.',
    url: 'https://edu.cherrycoffeeroastery.com/lexicon',
    images: [
      {
        url: '/og/og-tools.jpg',
        width: 1024,
        height: 537,
        alt: 'CherryEdu Kamus Istilah Kopi & Sensorik',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamus Istilah Kopi Specialty Indonesia | CherryEdu',
    description:
      'Ensiklopedia dan glosarium istilah kopi terlengkap dari hulu ke hilir dalam bahasa Indonesia.',
    images: ['/og/og-tools.jpg'],
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/lexicon',
  },
};

export default function LexiconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
