import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kartu Hafalan & Uji Cepat Kopi (Interactive Flashcards)',
  description:
    'Latih daya ingat dan pemahaman sensorik, agronomi, sains roasting, kimia air, dan teknik barista untuk persiapan ujian sertifikasi SCA dan CQI Q-Grader melalui metode Spaced Repetition.',
  keywords: [
    'flashcards kopi',
    'soal ujian sca kopi',
    'latihan q grader online',
    'hafalan istilah barista',
    'kartu hafalan kopi indonesia',
    'uji coba ujian barista',
  ],
  openGraph: {
    title: 'Kartu Hafalan & Uji Cepat Kopi (Flashcards) | CherryEdu',
    description:
      'Latih refleks ingatan untuk ujian sertifikasi kopi dengan metode Spaced Repetition ilmiah.',
    url: 'https://edu.cherrycoffeeroastery.com/flashcards',
    images: [
      {
        url: '/og/og-tools.jpg',
        width: 1024,
        height: 537,
        alt: 'CherryEdu Kartu Hafalan Uji Cepat Kopi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kartu Hafalan & Uji Cepat Kopi | CherryEdu',
    description:
      'Latih refleks ingatan untuk ujian sertifikasi kopi dengan metode Spaced Repetition ilmiah.',
    images: ['/og/og-tools.jpg'],
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/flashcards',
  },
};

export default function FlashcardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
