import type { Metadata } from 'next';
import { SEED_PATHS } from '@/lib/data/seedData';

interface PathLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edu.cherrycoffeeroastery.com';
  const path = SEED_PATHS.find((p) => p.slug === slug);

  if (!path) {
    return {
      title: 'Kurikulum Kopi Tidak Ditemukan',
      description: 'Jalur pembelajaran kopi tidak ditemukan di CherryEdu.',
    };
  }

  const title = `${path.title} — Kurikulum & Sertifikasi`;
  const description =
    path.description ||
    `Silabus pembelajaran ${path.title} berstandar SCA di CherryEdu. Kuasai materi dari dasar hingga sertifikasi profesi resmi.`;

  return {
    title,
    description,
    keywords: [
      path.title.toLowerCase(),
      `kursus ${path.title.toLowerCase()}`,
      `belajar ${path.title.toLowerCase()}`,
      'kurikulum kopi sca',
      'sertifikat barista indonesia',
      'cherryedu',
      'cherry coffee roastery',
    ],
    openGraph: {
      title: `${path.title} | CherryEdu`,
      description,
      url: `${baseUrl}/paths/${slug}`,
      images: [
        {
          url: path.thumbnail_url || '/og/og-curriculum.jpg',
          width: 1024,
          height: 537,
          alt: path.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${path.title} | CherryEdu`,
      description,
      images: [path.thumbnail_url || '/og/og-curriculum.jpg'],
    },
    alternates: {
      canonical: `${baseUrl}/paths/${slug}`,
    },
  };
}

export default async function DynamicPathLayout({
  children,
  params,
}: PathLayoutProps) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edu.cherrycoffeeroastery.com';
  const path = SEED_PATHS.find((p) => p.slug === slug);

  const courseJsonLd = path
    ? {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: path.title,
        description: path.description,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'CherryEdu',
          sameAs: baseUrl,
        },
        educationalCredentialAwarded: 'Sertifikat Digital Resmi CherryEdu',
        isAccessibleForFree: path.layer_type === 'foundation',
        url: `${baseUrl}/paths/${slug}`,
        inLanguage: 'id-ID',
      }
    : null;

  return (
    <>
      {courseJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      )}
      {children}
    </>
  );
}
