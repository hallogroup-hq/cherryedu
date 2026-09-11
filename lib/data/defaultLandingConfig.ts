import { LandingPageConfig, PageSectionItem } from '../types';

export const DEFAULT_LANDING_SECTIONS: PageSectionItem[] = [
  {
    id: 'sec-hero',
    type: 'hero',
    title: '1. Editorial Hero & Spec Ledger',
    enabled: true,
    data: {
      headline: 'Memahami Kopi dari Hulu ke Hilir: Dari Tanah Petani hingga Meja Barista.',
      description:
        'Bagi calon barista siap kerja, home brewer antusias, dan pegiat industri kopi nusantara. Kurikulum terstruktur berbasis sains ekstraksi, konteks agrikultur lokal, dan standar sensory SCA — tanpa biaya jutaan rupiah.',
      primaryCtaText: 'Mulai Foundation Layer (Gratis)',
      primaryCtaLink: '/paths/kopi-dari-hulu-ke-hilir',
      secondaryCtaText: 'Panduan Minat Belajar (4 Menit)',
      secondaryCtaLink: '/onboarding',
      specs: [
        { label: 'Struktur', value: '7 Modul Inti' },
        { label: 'Konteks', value: 'Nusantara ID' },
        { label: 'Standar', value: 'SCA 80+ Points' },
        { label: 'Akses', value: '100% Daring' },
      ],
      cardTagline: 'THE COMPULSORY PASS',
      cardTitle: 'Foundation: Hulu ke Hilir',
      cardVol: 'VOL. 01',
      cardImage:
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80',
      cardAltitude: 'Ketinggian: 1.400 mdpl • Gayo & Toraja',
      cardModules: [
        { code: 'F-01', title: 'Ekosistem Industri & Sejarah Batavia 1696' },
        { code: 'F-02', title: 'Agronomi Tanaman, Ketinggian, & Petik Merah' },
        { code: 'F-03', title: 'Varietas Lokal: Ateng Super, Tim-Tim, Sigarar Utang' },
        { code: 'F-04', title: 'Metode Processing: Natural, Washed, Honey, Anaerobik' },
        { code: 'F-05', title: 'Sains Roasting: Reaksi Maillard & Degassing' },
        { code: 'F-06', title: 'Water Science: TDS 75-150 ppm, Magnesium & Kalsium' },
        { code: 'F-07', title: 'Sensory & Cupping SCA: Break Crust & Flavor Wheel' },
      ],
      cardCtaText: 'Buka Silabus Lengkap',
      cardCtaLink: '/paths/kopi-dari-hulu-ke-hilir',
    },
  },
  {
    id: 'sec-manifesto',
    type: 'manifesto',
    title: '2. Filosofi & The Farm to Cup Mandate',
    enabled: true,
    data: {
      eyebrow: 'FILOSOFI DASAR • THE FARM TO CUP MANDATE',
      heading: 'Kenapa Seluruh Peran Wajib Mengerti Kopi dari Hulu ke Hilir?',
      quote:
        '"Seorang barista yang hebat wajib tahu varietas, agronomi tanah, dan proses fermentasi di kebun. Seorang petani kopi modern wajib tahu cara menyeduh dan meng-cupping hasil panennya."',
      paragraph:
        'Di Indonesia, edukasi kopi seringkali terputus: barista hanya diajari cara menekan tuas mesin espresso dan menggambar latte art; sementara petani tidak pernah mencicipi rasa kopi yang mereka rawat bertahun-tahun di kebun. CherryEdu hadir untuk menjembatani jurang ini. Kami membangun bahasa bersama seluruh pelaku industri kopi Indonesia.',
      layer1Badge: 'LAPIS 01: FONDASI WAJIB',
      layer1Role: 'Semua Role',
      layer1Title: 'Foundation Layer: Kopi dari Hulu ke Hilir',
      layer1Desc:
        'Pemahaman komprehensif 7 modul sains kopi yang menjadi prasyarat mutlak sebelum siapa pun diperbolehkan mengambil sertifikasi profesi lanjutan.',
      layer2Badge: 'LAPIS 02: SPESIALISASI PERAN',
      layer2Role: 'Pilihan Profesi',
      layer2Title: 'Barista & Home Brewer Specialization',
      layer2Desc:
        'Penyelaman mendalam ke ranah operasional bar komersial, manajemen SOP coffee shop, atau eksperimen seduhan manual rumahan.',
    },
  },
  {
    id: 'sec-catalog',
    type: 'catalog',
    title: '3. Katalog Kurikulum & Jalur Belajar',
    enabled: true,
    data: {
      eyebrow: 'VOLUMES & SYLLABUS',
      heading: 'Jalur Pembelajaran Terakreditasi',
      allCatalogText: 'Buka Seluruh Katalog',
      allCatalogLink: '/paths',
    },
  },
  {
    id: 'sec-tools',
    type: 'tools',
    title: '4. Lab Seduh & Kalkulator Rasio Spotlight',
    enabled: true,
    data: {
      eyebrow: 'PRECISION LAB INSTRUMENT',
      heading: 'Kalkulator Rasio & Panduan Seduh Presisi',
      description:
        'Salah satu instrumen digital di dalam platform. Hitung rasio ekstraksi emas dan suhu air ideal untuk metode V60, Aeropress, French Press, hingga Espresso Dial-in.',
    },
  },
  {
    id: 'sec-comparison',
    type: 'comparison',
    title: '5. Tabel Benchmark & Perbandingan',
    enabled: true,
    data: {
      eyebrow: 'PERBANDINGAN PEMBELAJARAN',
      heading: 'Mengapa Memilih CherryEdu?',
      rows: [
        {
          criteria: 'Kurikulum Hulu ke Hilir',
          cherry: 'Terstruktur Komprehensif',
          youtube: 'Terpecah & Tidak Sistematis',
          course: 'Hanya Fokus Titik Tertentu',
        },
        {
          criteria: 'Konteks Varietas & Origin Indonesia',
          cherry: '100% Berakar Lokal',
          youtube: 'Acak & Mengambang',
          course: 'Bahan Kurikulum Asing',
        },
        {
          criteria: 'Biaya Akses',
          cherry: 'Mulai dari Gratis (Foundation)',
          youtube: 'Gratis',
          course: 'Rp 5.000.000 – Rp 25.000.000+',
        },
        {
          criteria: 'Sertifikat Resmi Terverifikasi Publik',
          cherry: 'Ya (QR & Token Unik)',
          youtube: 'Tidak Ada',
          course: 'Sertifikat Kertas Fisik',
        },
        {
          criteria: 'Akses Langsung ke Bursa Kerja Barista',
          cherry: 'Terhubung ke Coffee Shop',
          youtube: 'Tidak Ada',
          course: 'Tidak Ada',
        },
      ],
    },
  },
  {
    id: 'sec-bottomCta',
    type: 'bottomCta',
    title: '6. Banner Ajakan Pendaftaran (CTA)',
    enabled: true,
    data: {
      eyebrow: 'DAFTAR SEKARANG TANPA BIAYA',
      heading: 'Kuasai Sains Kopi Indonesia Sekarang.',
      description:
        'Mulailah dari Modul F-01 hari ini. Bangun portofolio kredensial Anda dan jadilah insan kopi yang berwawasan luas dari kebun hingga ke cangkir.',
      buttonText: 'Mulai Belajar Foundation Sekarang',
      buttonLink: '/paths/kopi-dari-hulu-ke-hilir',
    },
  },
];

export const DEFAULT_LANDING_CONFIG: LandingPageConfig = {
  sections: DEFAULT_LANDING_SECTIONS,
  hero: DEFAULT_LANDING_SECTIONS[0].data as unknown as LandingPageConfig['hero'],
  manifesto: DEFAULT_LANDING_SECTIONS[1].data as unknown as LandingPageConfig['manifesto'],
  catalog: DEFAULT_LANDING_SECTIONS[2].data as unknown as LandingPageConfig['catalog'],
  tools: DEFAULT_LANDING_SECTIONS[3].data as unknown as LandingPageConfig['tools'],
  comparison: DEFAULT_LANDING_SECTIONS[4].data as unknown as LandingPageConfig['comparison'],
  bottomCta: DEFAULT_LANDING_SECTIONS[5].data as unknown as LandingPageConfig['bottomCta'],
};
