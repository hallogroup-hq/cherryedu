import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurikulum & Kursus Kopi Bersertifikat',
  description:
    'Jalur pembelajaran kopi terstruktur dua lapis berstandar SCA: Foundation Kopi Hulu ke Hilir gratis, serta spesialisasi Barista Profesional, Roaster, Home Brewer, Q-Grader, dan Bisnis Coffee Shop.',
  keywords: [
    'kursus kopi bersertifikat',
    'sekolah kopi indonesia',
    'kursus barista online',
    'belajar roasting kopi',
    'kursus q grader indonesia',
    'belajar barista bersertifikat',
    'kurikulum kopi sca',
    'kursus kopi gratis',
  ],
  openGraph: {
    title: 'Katalog Kurikulum & Kursus Kopi Terstruktur | CherryEdu',
    description:
      'Tingkatkan karir kopi Anda dengan silabus terstruktur berstandar SCA dan sertifikat kelulusan digital resmi.',
    url: 'https://edu.cherrycoffeeroastery.com/paths',
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/paths',
  },
};

export default function PathsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
