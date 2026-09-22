import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15 Alat Lab Seduh Kopi, Kalkulator Rasio & SCA Cupping Sheet',
  description:
    'Laboratorium seduh kopi presisi terlengkap: Kalkulator rasio seduh Golden Ratio, formulir digital SCA Cupping Sheet 10 atribut, penjelajah Roda Rasa interaktif, Espresso Dial-in, dan kalkulator mineral air seduhan.',
  keywords: [
    'kalkulator seduh kopi',
    'kalkulator rasio v60',
    'sca cupping sheet digital',
    'roda rasa kopi sca',
    'espresso dial in assistant',
    'water calculator coffee',
    'alat lab kopi',
    'coffee compass',
    'cupping form indonesia',
  ],
  openGraph: {
    title: '15 Instrumen Laboratorium Seduh & Uji Rasa Kopi | CherryEdu',
    description:
      'Kalibrasi seduhan bar & meja uji rasa dengan kalkulator rasio presisi, lembar cupping SCA digital, dan formulasi mineral air seduh.',
    url: 'https://edu.cherrycoffeeroastery.com/tools',
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/tools',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
