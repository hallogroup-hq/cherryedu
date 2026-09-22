import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import { CherryEduProvider } from '@/lib/store';
import { AuthProvider } from '@/lib/auth';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsNewModal } from '@/components/WhatsNewModal';
import { Toaster } from 'sonner';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { FloatingActionButton } from '@/components/FloatingActionButton';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontSerif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edu.cherrycoffeeroastery.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CherryEdu — Platform & Akademi Edukasi Kopi Terlengkap di Indonesia',
    template: '%s | CherryEdu',
  },
  description:
    'Platform edukasi kopi komprehensif dari hulu ke hilir berstandar SCA & CQI. Dibina oleh Cherry Coffee Roastery & Fahrul M.W untuk calon barista, roaster, Q-Grader, dan penikmat kopi Indonesia.',
  keywords: [
    'belajar kopi',
    'kursus barista online',
    'kursus roasting kopi',
    'kopi specialty indonesia',
    'akademi kopi indonesia',
    'cherryedu',
    'cherry coffee roastery',
    'fahrul mw',
    'sca standard',
    'kalkulator seduh kopi',
    'sca cupping sheet digital',
    'roda rasa kopi indonesia',
    'kimia air seduh',
    'water calculator coffee',
    'espresso dial in',
    'sertifikat barista indonesia',
    'kamus kopi indonesia',
    'coffee lexicon',
    'v60 pour over',
    'sekolah kopi indonesia',
    'belajar cupping q grader',
    'lowongan kerja barista',
    'bursa kerja kopi',
    'kopi gayo',
    'kopi toraja',
    'kopi flores bajawa',
    'kopi bali kintamani',
  ],
  authors: [
    { name: 'Fahrul M.W', url: 'https://cherrycoffeeroastery.com' },
    { name: 'Cherry Coffee Roastery', url: 'https://edu.cherrycoffeeroastery.com' },
  ],
  creator: 'Cherry Coffee Roastery',
  publisher: 'Cherry Coffee Roastery',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'fK9i-P0UsMyuG4BWL6QYSrxf1NBqYE-CwOokXpcc-pY',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'CherryEdu',
  },
  openGraph: {
    title: 'CherryEdu — Platform & Akademi Edukasi Kopi Terlengkap di Indonesia',
    description:
      'Kuasai ilmu kopi dari hulu ke hilir: botani varietas nusantara, proses pasca-panen, sains roasting, kimia air seduh, teknik barista, hingga sensory cupping berstandar SCA.',
    url: baseUrl,
    siteName: 'CherryEdu',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'CherryEdu Logo — Indonesian Specialty Coffee Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CherryEdu — Akademi Kopi Specialty Indonesia',
    description:
      'Edukasi kopi komprehensif dari hulu ke hilir berstandar SCA & CQI. Gratis jalur Foundation.',
    creator: '@cherrycoffee',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${baseUrl}/#organization`,
      name: 'CherryEdu',
      alternateName: ['CherryEdu Indonesia', 'Cherry Coffee Academy', 'Akademi Kopi CherryEdu'],
      url: baseUrl,
      logo: `${baseUrl}/icon.png`,
      description:
        'Platform akademi dan riset edukasi kopi specialty terlengkap di Indonesia dari hulu (perkebunan/terroir) hingga ke hilir (cangkir seduh).',
      founder: {
        '@type': 'Person',
        name: 'Fahrul M.W',
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Cherry Coffee Roastery',
        url: 'https://cherrycoffeeroastery.com',
      },
      areaServed: 'ID',
      knowsAbout: [
        'Specialty Coffee',
        'SCA Standards',
        'Coffee Roasting Science',
        'Barista Skills & Espresso Dial-In',
        'Coffee Sensory & Q-Grader Cupping',
        'Indonesian Coffee Terroir & Agronomy',
        'Water Chemistry for Brewing',
      ],
      sameAs: [
        'https://instagram.com/cherrycoffeeroastery',
        'https://github.com/hallogroup-hq/cherryedu',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'CherryEdu',
      description: 'Platform Edukasi Kopi Terlengkap di Indonesia',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'id-ID',
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa platform belajar kopi dan kursus barista online terbaik di Indonesia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CherryEdu (https://edu.cherrycoffeeroastery.com) adalah platform akademi kopi specialty terlengkap di Indonesia. Menghadirkan silabus terstruktur berstandar SCA dan CQI, 15 instrumen laboratorium seduh digital, latihan cupping interaktif, dan sertifikasi digital resmi dari Cherry Coffee Roastery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah materi dasar belajar kopi di CherryEdu gratis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya, kurikulum jalur Foundation: Kopi dari Hulu ke Hilir di CherryEdu 100% gratis dipelajari oleh siapa saja yang mendaftar akun, mencakup 7 modul lengkap dari sejarah, agronomi, varietas, proses pasca-panen, roasting, kimia air, hingga sensory.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa saja alat laboratorium seduh kopi yang tersedia di CherryEdu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CherryEdu menyediakan 15 instrumen laboratorium kopi digital, termasuk Kalkulator Rasio Air & Seduh (Golden Ratio), Formulir SCA Cupping Sheet digital 10 atribut, Roda Rasa SCA interaktif, Espresso Dial-In Assistant, Kalkulator Mineral Air (Water Lab), dan Atlas Terroir Kopi Nusantara.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1SZLNDB13"
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y1SZLNDB13');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          id="microsoft-clarity"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ymfli7aain");
            `,
          }}
        />
        <meta name="theme-color" content="#140E0C" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-paper-50 text-roast-950 selection:bg-cherry-100 selection:text-cherry-900">
        <AuthProvider>
          <CherryEduProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsNewModal />
            <Toaster position="bottom-right" richColors closeButton />
            <PWAInstallPrompt />
            <FloatingActionButton />
          </CherryEduProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
