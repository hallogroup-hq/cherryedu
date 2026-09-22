import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simulasi Uji Kompetensi Barista Pra-Kerja',
  description:
    'Instrumen penilaian objektif kualifikasi barista untuk pemilik kafe dan calon barista: Uji skenario dial-in espresso, sains pemanasan susu, sanitasi alat espresso, hospitality, dan efisiensi bar.',
  keywords: [
    'uji kompetensi barista',
    'tes wawancara barista',
    'soal tes barista',
    'skenario uji barista kafe',
    'sertifikasi profesi barista',
    'asesmen barista indonesia',
    'evaluasi kerja barista',
  ],
  openGraph: {
    title: 'Simulasi Uji Kompetensi Barista Pra-Kerja | CherryEdu',
    description:
      'Evaluasi pemahaman teknis barista pra-kerja dengan skenario nyata dan laporan radar kompetensi.',
    url: 'https://edu.cherrycoffeeroastery.com/assessment/barista',
    images: [
      {
        url: '/og/og-tools.jpg',
        width: 1024,
        height: 537,
        alt: 'CherryEdu Simulasi Uji Kompetensi Barista Pra-Kerja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simulasi Uji Kompetensi Barista Pra-Kerja | CherryEdu',
    description:
      'Evaluasi pemahaman teknis barista pra-kerja dengan skenario nyata dan laporan radar kompetensi.',
    images: ['/og/og-tools.jpg'],
  },
  alternates: {
    canonical: 'https://edu.cherrycoffeeroastery.com/assessment/barista',
  },
};

export default function BaristaAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
