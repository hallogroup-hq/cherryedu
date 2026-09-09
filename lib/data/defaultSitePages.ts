import { SitePageConfig } from '../types';
import { DEFAULT_LANDING_SECTIONS } from './defaultLandingConfig';

export const DEFAULT_SITE_PAGES: Record<string, SitePageConfig> = {
  home: {
    id: 'home',
    slug: '/',
    name: 'Beranda (Landing Page)',
    seoTitle: 'CherryEdu — Specialty Coffee Academy Berbasis Sains Ekstraksi & Konteks Nusantara',
    seoDescription: 'Platform edukasi kopi gratis dan terbuka dari Cherry Coffee Roastery untuk barista, roaster, dan penikmat kopi spesialti.',
    sections: DEFAULT_LANDING_SECTIONS,
  },
  about: {
    id: 'about',
    slug: '/about',
    name: 'Tentang Kami (About Us)',
    seoTitle: 'Tentang Kami — Cherry Coffee Roastery & CherryEdu',
    seoDescription: 'Kisah, filosofi, dan komitmen Cherry Coffee Roastery dalam membangun ekosistem edukasi kopi Indonesia.',
    sections: [
      {
        id: 'sec-about-hero',
        type: 'hero',
        title: '1. Hero & Visi Akademi',
        enabled: true,
        data: {
          headline: 'Membawa Standar Sains Kopi Kelas Dunia ke Tangan Barista & Roaster Nusantara.',
          description:
            'Cherry Coffee Roastery mendedikasikan CherryEdu sebagai akademi terbuka berbasis sains ekstraksi kimiawi, agrikultur presisi, dan leksikon sensorik resmi — tanpa memungut jutaan rupiah.',
          primaryCtaText: 'Jelajahi Kurikulum Kami',
          primaryCtaLink: '/paths',
          secondaryCtaText: 'Cari Lowongan Barista',
          secondaryCtaLink: '/jobs',
          specs: [
            { label: 'Didirikan', value: 'Cherry Roastery HQ' },
            { label: 'Filosofi', value: 'Hulu ke Hilir' },
            { label: 'Standar', value: 'SCA & WBC Protocol' },
            { label: 'Akses', value: '100% Bebas Akses' },
          ],
          cardTagline: 'TENTANG KAMI',
          cardTitle: 'Komitmen Edukasi Terbuka',
          cardVol: 'MANIFESTO',
          cardImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80',
          cardAltitude: 'Origin Kemitraan: Gayo, Kerinci, Toraja, Bajawa',
          cardModules: [
            { code: '01', title: 'Demokratisasi Sains Ekstraksi Kopi' },
            { code: '02', title: 'Menghubungkan Petani, Roaster & Barista' },
            { code: '03', title: 'Sertifikasi Kredibel untuk Pemilik Kedai' },
          ],
          cardCtaText: 'Buka Silabus Belajar',
          cardCtaLink: '/paths',
        },
      },
      {
        id: 'sec-about-story',
        type: 'text',
        title: '2. Cerita Pendirian & Filosofi',
        enabled: true,
        data: {
          eyebrow: 'MANIFESTO KAMI',
          title: 'Kenapa Kami Membangun CherryEdu?',
          content:
            'Di industri kopi Indonesia, sering kali ada jurang pemisah antara petani di kebun, roaster di ruang pemanggangan, dan barista di meja bar seduh. Banyak pelatihan kopi dibanderol dengan harga jutaan rupiah namun hanya mengajarkan teknik mekanis tanpa memahami sains di balik ekstraksi air, kinetika panas roaster, atau pembentukan asam organik selama pematangan ceri.\n\nKami percaya bahwa barista dan pegiat kopi Indonesia berhak mendapatkan edukasi berbobot ilmiah internasional tanpa batasan ekonomi. Melalui CherryEdu, seluruh modul dirancang dengan cermat mengacu pada standar Specialty Coffee Association (SCA) dan World Barista Championship (WBC), namun tetap berakar kuat pada karakter varietas kopi lokal nusantara.',
        },
      },
      {
        id: 'sec-about-pillars',
        type: 'cards',
        title: '3. Tiga Pilar Pendidikan Kami',
        enabled: true,
        data: {
          eyebrow: 'FONDASI KAMI',
          title: '3 Pilar Utama CherryEdu',
          items: [
            {
              title: 'Sains Ekstraksi Modern',
              description: 'Bukan sekadar dogma resep seduh, kami membedah transfer massa, TDS air, konduksi panas roaster, dan interaksi saraf penciuman.',
            },
            {
              title: 'Konteks Agrikultur Nusantara',
              description: 'Materi kami mengangkat realitas kebun lokal: varietas Ateng Super, Tim-Tim, Sigarar Utang, proses Giling Basah, hingga tanah vulkanik Flores.',
            },
            {
              title: 'Sertifikasi Kredibel & Terbuka',
              description: 'Setiap kelulusan dievaluasi dengan bank soal ketat dan menghasilkan sertifikat bertoken digital yang dapat diverifikasi siapa pun.',
            },
          ],
        },
      },
      {
        id: 'sec-about-quote',
        type: 'testimonial',
        title: '4. Kutipan Pendiri',
        enabled: true,
        data: {
          quote:
            'Kopi yang luar biasa di cangkir adalah hasil dedikasi ratusan tangan: dari pemetik ceri di lereng terjal hingga barista yang menimbang dosis miligram di meja seduh. Menghormati kerja keras itu dimulai dengan memahami sainsnya.',
          author: 'Head Roaster & Tim Kurator',
          role: 'Cherry Coffee Roastery & CherryEdu Academic Board',
        },
      },
      {
        id: 'sec-about-cta',
        type: 'cta',
        title: '5. Ajakan Bergabung',
        enabled: true,
        data: {
          title: 'Siap Menjadi Insan Kopi yang Berpengetahuan?',
          description: 'Mulai perjalanan belajarmu hari ini dari jalur dasar Kopi dari Hulu ke Hilir. Gratis, lengkap, dan terstruktur.',
          buttonText: 'Mulai Belajar Sekarang (Gratis)',
          buttonLink: '/paths',
        },
      },
    ],
  },
  paths: {
    id: 'paths',
    slug: '/paths',
    name: 'Katalog Kurikulum (Curriculum)',
    seoTitle: 'Katalog Kurikulum & Silabus Belajar Kopi — CherryEdu',
    seoDescription: 'Jelajahi 6 jalur spesialisasi kopi: dari Barista Skills, Brewing Science, Sensory, Roasting, hingga Bisnis Coffee Shop.',
    sections: [
      {
        id: 'sec-paths-banner',
        type: 'banner',
        title: '1. Pengumuman Jalur Baru',
        enabled: true,
        data: {
          text: 'Rekomendasi Kurator: Selesaikan modul Foundation Kopi dari Hulu ke Hilir sebelum mengambil spesialisasi teknis lanjutan.',
          buttonText: 'Mulai Jalur Wajib',
          buttonLink: '/paths/kopi-dari-hulu-ke-hilir',
          bgColor: '#2C1810',
        },
      },
      {
        id: 'sec-paths-intro',
        type: 'text',
        title: '2. Standar Kurikulum Kami',
        enabled: true,
        data: {
          eyebrow: 'STANDAR KOMPETENSI RESMI',
          title: 'Kurikulum Berjenjang Mengacu Standar SCA & WBC',
          content:
            'Setiap modul dilengkapi silabus komprehensif, catatan visual, simulasi kalkulator rasio, kuis evaluasi 80% passing grade, serta sertifikat kelulusan digital yang dapat ditautkan ke CV dan akun LinkedIn Anda.',
        },
      },
      {
        id: 'sec-paths-cta',
        type: 'cta',
        title: '3. Panduan Minat Belajar',
        enabled: true,
        data: {
          title: 'Bingung Memilih Jalur yang Tepat?',
          description: 'Gunakan kuis diagnostik 4 menit untuk memetakan arah karier kopimu: apakah menjadi Barista, Roaster, Q-Grader, atau Pemilik Kedai.',
          buttonText: 'Ikuti Kuis Penentuan Jalur',
          buttonLink: '/onboarding',
        },
      },
    ],
  },
  tools: {
    id: 'tools',
    slug: '/tools',
    name: 'Alat Seduh & Riset (Tools)',
    seoTitle: 'Laboratorium Alat Seduh, Sensory Wheel & Varietas Kopi — CherryEdu',
    seoDescription: 'Kalkulator rasio ekstraksi air kopi, SCA Flavor Wheel leksikon sensori, dan ensiklopedia botani 30 varietas kopi nusantara.',
    sections: [
      {
        id: 'sec-tools-banner',
        type: 'banner',
        title: '1. Info Fitur Baru',
        enabled: true,
        data: {
          text: 'Fitur Baru: Kamus Kopi SCA-ID kini dilengkapi audio pelafalan asli & Flashcards interaktif!',
          buttonText: 'Buka Kamus Kopi',
          buttonLink: '/lexicon',
          bgColor: '#1c1917',
        },
      },
      {
        id: 'sec-tools-intro',
        type: 'text',
        title: '2. Pengantar Laboratorium',
        enabled: true,
        data: {
          eyebrow: 'PRESISI MEJA SEDUH',
          title: 'Instrumen Sains & Kalibrasi Sensorik Barista',
          content:
            'Eksperimen dengan kalkulator rasio ekstraksi air, jelajahi 9 kategori rasa SCA Sensory Wheel beserta asam organiknya, dan pelajari pohon silsilah botani 30 varietas kopi dunia dan nusantara.',
        },
      },
    ],
  },
  jobs: {
    id: 'jobs',
    slug: '/jobs',
    name: 'Bursa Kerja Kopi (Jobs)',
    seoTitle: 'Bursa Kerja Barista & Roaster Specialty Coffee — CherryEdu',
    seoDescription: 'Lowongan kerja terverifikasi untuk barista, head roaster, QC cupper, dan manajer cafe di seluruh Indonesia.',
    sections: [
      {
        id: 'sec-jobs-banner',
        type: 'banner',
        title: '1. Panggilan Pengusaha Kopi',
        enabled: true,
        data: {
          text: 'Pemilik Kedai Kopi: Dapatkan kandidat barista bersertifikat sains ekstraksi resmi dari CherryEdu.',
          buttonText: 'Pasang Lowongan',
          buttonLink: '/jobs',
          bgColor: '#2C1810',
        },
      },
      {
        id: 'sec-jobs-intro',
        type: 'text',
        title: '2. Standar Tenaga Kerja Kopi',
        enabled: true,
        data: {
          eyebrow: 'KARIER SPESIALTI',
          title: 'Menghubungkan Talenta Kopi Terlatih dengan Kedai Kopi Terbaik',
          content:
            'Setiap pelamar di bursa kerja CherryEdu diverifikasi melalui riwayat belajar silabus dan sertifikat resmi, memastikan pemilik kedai mendapatkan barista yang mengerti sains ekstraksi dan kebersihan bar.',
        },
      },
    ],
  },
  contact: {
    id: 'contact',
    slug: '/contact',
    name: 'Kontak & Bantuan (Contact)',
    seoTitle: 'Kontak Kami & Roastery HQ — Cherry Coffee Roastery',
    seoDescription: 'Hubungi tim kurator, roaster, dan pengelola CherryEdu untuk pertanyaan kemitraan, pelatihan, atau konsultasi.',
    sections: [
      {
        id: 'sec-contact-hero',
        type: 'hero',
        title: '1. Header Kontak',
        enabled: true,
        data: {
          headline: 'Hubungi Tim Kurator & Pengajar CherryEdu.',
          description:
            'Ada pertanyaan seputar kurikulum, sertifikasi, konsultasi dial-in kedai kopi, atau kemitraan edukasi? Kami dengan senang hati berdiskusi.',
          primaryCtaText: 'Kirim Pesan WhatsApp',
          primaryCtaLink: 'https://wa.me/6281234567890',
          secondaryCtaText: 'Buka Forum Komunitas',
          secondaryCtaLink: '/forum',
          specs: [
            { label: 'Respon', value: '< 24 Jam Kerja' },
            { label: 'Lokasi', value: 'Bandung & Jakarta' },
            { label: 'Kemitraan', value: 'Kedai & Roastery' },
            { label: 'Akses', value: 'Terbuka Untuk Umum' },
          ],
          cardTagline: 'OFFICIAL HEADQUARTERS',
          cardTitle: 'Cherry Roastery HQ',
          cardVol: 'OFFICE',
          cardImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
          cardAltitude: 'Laboratorium & Cupping Room',
          cardModules: [
            { code: '01', title: 'Konsultasi Pelatihan Tim Barista Kedai' },
            { code: '02', title: 'Kemitraan Pasokan Green Bean & Roasting' },
            { code: '03', title: 'Verifikasi Token & Kredensial Sertifikat' },
          ],
          cardCtaText: 'Hubungi via WhatsApp',
          cardCtaLink: 'https://wa.me/6281234567890',
        },
      },
      {
        id: 'sec-contact-cards',
        type: 'cards',
        title: '2. Kanal Informasi & Kunjungan',
        enabled: true,
        data: {
          eyebrow: 'KANAL RESMI',
          title: 'Kanal Komunikasi & Lokasi Roastery',
          items: [
            {
              title: 'Laboratorium & Roastery HQ',
              description: 'Jl. Kopi Specialty No. 18, Jawa Barat, Indonesia. Buka Senin – Jumat: 09:00 – 17:00 WIB.',
            },
            {
              title: 'Email Resmi Tim Akademik',
              description: 'akademik@cherrycoffee.id (pertanyaan silabus) & halo@cherrycoffee.id (kemitraan roastery).',
            },
            {
              title: 'Sesi Cupping Mingguan',
              description: 'Setiap Sabtu pukul 10:00 WIB terbuka untuk umum dengan reservasi terlebih dahulu via WhatsApp.',
            },
          ],
        },
      },
    ],
  },
};
