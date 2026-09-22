import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket Langganan & Biaya Kursus Kopi Pro',
  description:
    'Biaya langganan terjangkau CherryEdu Pro: Buka seluruh 6 jalur spesialisasi (Barista, Roaster, Q-Grader, Pasca Panen, Bisnis), akses tak terbatas 15 instrumen lab seduh, dan penerbitan sertifikat resmi.',
  keywords: [
    'biaya kursus barista indonesia',
    'harga sertifikasi kopi sca',
    'biaya sekolah kopi',
    'langganan cherryedu pro',
    'promo kursus barista online',
  ],
  openGraph: {
    title: 'Paket Langganan & Biaya Kursus Kopi Pro | CherryEdu',
    description:
      'Investasi terbaik untuk akselerasi karir dan bisnis kopi specialty Anda di Indonesia.',
    url: 'https://edu.cherrycoffeeroastery.com/pricing',
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
