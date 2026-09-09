import {
  User,
  LearningPath,
  Module,
  Lesson,
  Quiz,
  Question,
  Certificate,
  Badge,
  UserBadge,
  Post,
  Comment,
  JobListing,
  JobApplication,
  Enrollment,
} from '../types';
import {
  HOME_BREWER_EXPANDED_LESSONS,
  HOME_BREWER_QUIZZES,
  HOME_BREWER_QUESTIONS,
} from './paths/homeBrewerData';
import {
  ROASTER_PATH,
  ROASTER_MODULES,
  ROASTER_LESSONS,
  ROASTER_QUIZZES,
  ROASTER_QUESTIONS,
} from './paths/roasterData';
import {
  Q_GRADER_PATH,
  Q_GRADER_MODULES,
  Q_GRADER_LESSONS,
  Q_GRADER_QUIZZES,
  Q_GRADER_QUESTIONS,
} from './paths/qGraderData';
import {
  POST_HARVEST_PATH,
  POST_HARVEST_MODULES,
  POST_HARVEST_LESSONS,
  POST_HARVEST_QUIZZES,
  POST_HARVEST_QUESTIONS,
} from './paths/postHarvestData';
import {
  COFFEE_BUSINESS_PATH,
  COFFEE_BUSINESS_MODULES,
  COFFEE_BUSINESS_LESSONS,
  COFFEE_BUSINESS_QUIZZES,
  COFFEE_BUSINESS_QUESTIONS,
} from './paths/coffeeBusinessData';
import {
  BARISTA_PATH,
  BARISTA_MODULES,
  BARISTA_LESSONS,
  BARISTA_QUIZZES,
  BARISTA_QUESTIONS,
} from './paths/baristaData';


// 1. SEED USERS
export const SEED_USERS: User[] = [
  {
    id: 'user-budi',
    name: 'Budi Santoso',
    email: 'budi@cherryedu.id',
    avatar_url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    bio: 'Fresh graduate & calon barista. Sedang mendalami sains kopi dari hulu ke hilir untuk siap berkarir di specialty coffee bar.',
    role: 'learner',
    coffee_role: 'barista',
    city: 'Surabaya',
    xp_points: 380,
    streak_count: 5,
    last_active_date: '2026-09-06',
    created_at: '2026-08-15T08:00:00Z',
  },
  {
    id: 'user-sari',
    name: 'Sari Wulandari',
    email: 'sari@cherryedu.id',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    bio: 'Home brewer antusias di Bandung. Gemar menyeduh V60 & Aeropress dengan single origin nusantara.',
    role: 'learner',
    coffee_role: 'home_brewer',
    city: 'Bandung',
    xp_points: 520,
    streak_count: 8,
    last_active_date: '2026-09-06',
    created_at: '2026-08-10T09:30:00Z',
  },
  {
    id: 'user-hendra',
    name: 'Fahrul M.W (Q Grader)',
    email: 'fahrul@cherryroastery.id',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    bio: 'Head of Quality & Roaster di Cherry Coffee Roastery. Certified Q Grader & Sensory Judge.',
    role: 'expert',
    coffee_role: 'q_grader',
    city: 'Jakarta Selatan',
    xp_points: 2450,
    streak_count: 32,
    last_active_date: '2026-09-06',
    created_at: '2026-07-01T10:00:00Z',
  },
  {
    id: 'user-cherry-hq',
    name: 'Cherry Coffee Roastery HQ',
    email: 'career@cherryroastery.id',
    avatar_url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=150&auto=format&fit=crop&q=80',
    bio: 'Micro-roastery & Specialty Coffee Academy yang berbasis di Jakarta & Gayo. Membina ekosistem barista Indonesia.',
    role: 'employer',
    coffee_role: 'roaster',
    city: 'Jakarta Selatan',
    xp_points: 1800,
    streak_count: 14,
    last_active_date: '2026-09-06',
    created_at: '2026-06-01T08:00:00Z',
  },
  {
    id: 'user-admin',
    name: 'Admin CherryEdu',
    email: 'admin@cherryedu.id',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    bio: 'System Administrator & Curriculum Manager CherryEdu.',
    role: 'admin',
    coffee_role: 'roaster',
    city: 'Jakarta',
    xp_points: 3500,
    streak_count: 60,
    last_active_date: '2026-09-06',
    created_at: '2026-05-01T00:00:00Z',
  },
];

// 2. BADGES
export const SEED_BADGES: Badge[] = [
  {
    id: 'badge-pioneer',
    name: 'Pioneer Kopi',
    description: 'Bergabung dengan ekosistem belajar kopi CherryEdu.',
    icon_url: '🌱',
    trigger_type: 'streak',
    trigger_value: 1,
  },
  {
    id: 'badge-foundation',
    name: 'Penakluk Hulu ke Hilir',
    description: 'Menyelesaikan seluruh kurikulum Foundation Layer.',
    icon_url: '☕',
    trigger_type: 'complete_path',
    trigger_value: 1,
  },
  {
    id: 'badge-perfect-score',
    name: 'Sensory Nilai 100',
    description: 'Mendapatkan skor sempurna 100% pada salah satu kuis modul.',
    icon_url: '🎯',
    trigger_type: 'quiz_perfect',
    trigger_value: 100,
  },
  {
    id: 'badge-streak-7',
    name: 'Dedikasi 7 Hari',
    description: 'Mempertahankan streak belajar selama 7 hari berturut-turut.',
    icon_url: '🔥',
    trigger_type: 'streak',
    trigger_value: 7,
  },
  {
    id: 'badge-barista-ready',
    name: 'Certified Barista Ready',
    description: 'Menyelesaikan Barista Specialization Path dan ujian akhir.',
    icon_url: '🧑‍🍳',
    trigger_type: 'complete_path',
    trigger_value: 2,
  },
  {
    id: 'badge-home-brewer-pro',
    name: 'Alchemist Seduh Rumahan',
    description: 'Menyelesaikan Home Brewer Specialization Path.',
    icon_url: '⚗️',
    trigger_type: 'complete_path',
    trigger_value: 3,
  },
  {
    id: 'badge-community-voice',
    name: 'Suara Komunitas',
    description: 'Membuat postingan atau diskusi pertama di forum CherryEdu.',
    icon_url: '💬',
    trigger_type: 'first_post',
    trigger_value: 1,
  },
  {
    id: 'badge-job-seeker',
    name: 'Langkah Awal Karier',
    description: 'Mengirimkan lamaran kerja pertama melalui Bursa Kerja Kopi.',
    icon_url: '💼',
    trigger_type: 'first_apply',
    trigger_value: 1,
  },
];

// 3. LEARNING PATHS
export const SEED_PATHS: LearningPath[] = [
  {
    id: 'path-foundation',
    title: 'Foundation: Kopi dari Hulu ke Hilir',
    slug: 'kopi-dari-hulu-ke-hilir',
    description:
      'Fondasi wajib seluruh insan kopi Indonesia. Kuasai perjalanan kopi dari pohon, varietas lokal, metode processing, sains roasting, kimia air, hingga sensory & cupping berstandar SCA.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80',
    layer_type: 'foundation',
    prerequisite_path_id: null,
    target_role: 'all',
    level: 'beginner',
    is_free: true,
    is_published: true,
    estimated_hours: 12,
    total_modules: 7,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'path-barista',
    title: 'Barista Specialization Path',
    slug: 'barista-specialization',
    description:
      'Jalur komprehensif menjadi barista profesional siap kerja. Dari espresso dial-in presisi, sains susu & latte art, manual brew tingkat lanjut, hingga manajemen bar & SOP coffee shop.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80',
    layer_type: 'specialization',
    prerequisite_path_id: 'path-foundation',
    target_role: 'barista',
    level: 'full',
    is_free: false,
    is_published: true,
    estimated_hours: 24,
    total_modules: 10,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'path-home-brewer',
    title: 'Home Brewer Specialization Path',
    slug: 'home-brewer-specialization',
    description:
      'Eksplorasi seduh rumahan tanpa batas. Kuasai V60, Aeropress, French Press, rekayasa air seduh, eksperimen suhu & agitasi, hingga kalibrasi indra rasa untuk secangkir kopi sempurna di rumah.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
    layer_type: 'specialization',
    prerequisite_path_id: 'path-foundation',
    target_role: 'home_brewer',
    level: 'full',
    is_free: true,
    is_published: true,
    estimated_hours: 18,
    total_modules: 10,
    created_at: '2026-08-05T00:00:00Z',
  },
  ROASTER_PATH,
  Q_GRADER_PATH,
  POST_HARVEST_PATH,
  COFFEE_BUSINESS_PATH,
];

// 4. MODULES
export const SEED_MODULES: Module[] = [
  // --- Foundation Modules (F-1 to F-7) ---
  {
    id: 'mod-f1',
    learning_path_id: 'path-foundation',
    title: 'Modul F-1: Ekosistem Industri Kopi',
    description:
      'Pahami sejarah perjalanan kopi, peta industri dari petani hingga penikmat, dan filosofi specialty coffee.',
    order_index: 1,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'mod-f2',
    learning_path_id: 'path-foundation',
    title: 'Modul F-2: Agronomi & Pertanian Kopi',
    description:
      'Anatomi tanaman kopi, faktor ketinggian (altitude), tanah vulkanik, panen petik merah, dan peta origin Indonesia.',
    order_index: 2,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'mod-f3',
    learning_path_id: 'path-foundation',
    title: 'Modul F-3: Varietas & Genetika Kopi',
    description:
      'Spesies Arabika, Robusta, Liberika, varietas lokal Indonesia (Ateng Super, Tim-Tim, Sigarar Utang), dan cara membaca label kemasan.',
    order_index: 3,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'mod-f4',
    learning_path_id: 'path-foundation',
    title: 'Modul F-4: Processing Methods (Pasca Panen)',
    description:
      'Natural, Washed, Honey (Yellow, Red, Black), Anaerobic, hingga inovasi Co-fermentasi buah serta pengaruhnya ke profil cangkir.',
    order_index: 4,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'mod-f5',
    learning_path_id: 'path-foundation',
    title: 'Modul F-5: Roasting Science',
    description:
      'Transformasi kimia dalam drum roaster: Reaksi Maillard, First Crack, tingkat sangrai (Light-Medium-Dark), dan pentingnya degassing.',
    order_index: 5,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'mod-f6',
    learning_path_id: 'path-foundation',
    title: 'Modul F-6: Water Science for Coffee',
    description:
      'Air menyusun 98% dari secangkir kopi. Pelajari TDS, pH, kalsium, magnesium, bikarbonat, dan dampaknya pada ekstraksi.',
    order_index: 6,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'mod-f7',
    learning_path_id: 'path-foundation',
    title: 'Modul F-7: Sensory & Cupping Standar SCA',
    description:
      'Melatih indra pengecap dan penciuman, membaca SCA Flavor Wheel, protokol cupping resmi, dan merumuskan tasting notes.',
    order_index: 7,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-01T00:00:00Z',
  },

  // --- Barista Path Modules (B-1 to B-10) ---
  {
    id: 'mod-b1',
    learning_path_id: 'path-barista',
    title: 'Modul B-1: Pengenalan Dunia Bar & Etika Barista',
    description: 'Peran sentral barista di industri, customer hospitality, dan pengenalan workflow bar.',
    order_index: 1,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b2',
    learning_path_id: 'path-barista',
    title: 'Modul B-2: Espresso Fundamentals',
    description: 'Anatomi portafilter, basket size, teknik tamping tegak lurus, dan membaca crema.',
    order_index: 2,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b3',
    learning_path_id: 'path-barista',
    title: 'Modul B-3: Manual Brew Dasar di Bar',
    description: 'Penyeduhan pour-over dasar, French press, dan menjaga rasio konsisten di jam sibuk.',
    order_index: 3,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b4',
    learning_path_id: 'path-barista',
    title: 'Modul B-4: Espresso Mastery & Dial-In Segitiga',
    description: 'Menyeimbangkan Dosis, Yield, dan Waktu (D-Y-T triangle). Menghilangkan rasa asam tajam atau pahit gosong.',
    order_index: 4,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b5',
    learning_path_id: 'path-barista',
    title: 'Modul B-5: Milk Science & Latte Art Mastery',
    description: 'Struktur protein dan lemak susu, aeration vs whirlpool, latte art pola Heart, Rosetta, dan Tulip.',
    order_index: 5,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b6',
    learning_path_id: 'path-barista',
    title: 'Modul B-6: Manual Brew Tingkat Lanjut',
    description: 'Metode Tetsu Kasuya 4:6, Aeropress bypass, Syphon, dan Japanese Iced Pour Over.',
    order_index: 6,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b7',
    learning_path_id: 'path-barista',
    title: 'Modul B-7: Kreasi Menu Signature & Mocktail',
    description: 'Menciptakan signature drink unik berbasis espresso atau cold brew dengan rempah dan buah lokal.',
    order_index: 7,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b8',
    learning_path_id: 'path-barista',
    title: 'Modul B-8: Sensory Lanjutan & Kalibrasi Roaster',
    description: 'Memberikan umpan balik deskriptif ke tim roastery dan menjaga profil ekstraksi harian.',
    order_index: 8,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b9',
    learning_path_id: 'path-barista',
    title: 'Modul B-9: Bar Management & Cost Control',
    description: 'Manajemen inventaris biji kopi, HPP (Cost of Goods), FIFO, serta SOP kebersihan dan perawatan mesin.',
    order_index: 9,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b10',
    learning_path_id: 'path-barista',
    title: 'Modul B-10: Karier Barista & Persiapan Kompetisi',
    description: 'Menyusun portofolio barista, persiapan kompetisi (Barista Championship, Brewers Cup), dan sertifikasi internasional.',
    order_index: 10,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },

  // --- Home Brewer Path Modules (H-1 to H-10) ---
  {
    id: 'mod-h1',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-1: Memulai Home Brewing Tanpa Bingung',
    description: 'Memilih kopi pertama, single origin vs house blend, dan memahami informasi kemasan roastery.',
    order_index: 1,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h2',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-2: Setup Alat Seduh Esensial di Rumah',
    description: 'Mengapa Burr Grinder lebih baik daripada Blade Grinder, pentingnya timbangan digital, dan ketel leher angsa.',
    order_index: 2,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h3',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-3: Seduhan Pertamamu & Kalibrasi Lidah',
    description: 'Resep emas V60 rasio 1:15, mengidentifikasi rasa under-extracted vs over-extracted di lidah.',
    order_index: 3,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h4',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-4: Mengenal Karakter Biji yang Diseduh',
    description: 'Menebak profil rasa dari varietas (Gesha vs Typica) dan altitude kebun.',
    order_index: 4,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h5',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-5: Eksplorasi Alat Seduh: Dari Aeropress ke Kalita',
    description: 'Membedakan rasa seduhan flat bottom (Kalita Wave) dengan conical dripper (Hario V60) dan Aeropress inverted.',
    order_index: 5,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h6',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-6: Meracik Air Seduh Rumahan (DIY Water)',
    description: 'Menggunakan air mineral kemasan ber-TDS ideal atau menambahkan mineral drops untuk rasa kopi maksimal.',
    order_index: 6,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h7',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-7: Cupping Mandiri di Dapur Rumah',
    description: 'Protokol cupping sederhana dengan 3 mangkuk atau gelas kaca untuk membandingkan 2 biji kopi berbeda.',
    order_index: 7,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h8',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-8: Eksperimen Variabel Seduh Tanpa Batas',
    description: 'Eksperimen suhu air (88°C vs 94°C), kecepatan tuang, agitasi, dan dokumentasi jurnal seduh.',
    order_index: 8,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h9',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-9: Kreasi Minuman Kopi di Rumah',
    description: 'Resep Cold Brew concentrate, es kopi susu gula aren buatan sendiri, dan food pairing dengan camilan.',
    order_index: 9,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-h10',
    learning_path_id: 'path-home-brewer',
    title: 'Modul H-10: Next Level Home Brewer & Komunitas',
    description: 'Membangun coffee corner idaman di rumah, bergabung dengan komunitas brewer lokal, dan langkah menuju profesional.',
    order_index: 10,
    is_locked: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  ...ROASTER_MODULES,
  ...Q_GRADER_MODULES,
  ...POST_HARVEST_MODULES,
  ...COFFEE_BUSINESS_MODULES,
];

// 5. LESSONS
export const SEED_LESSONS: Lesson[] = [
  {
    id: "les-f1-1",
    module_id: "mod-f1",
    title: "Sejarah Kopi Dunia: Dari Dataran Tinggi Kaffa ke Batavia 1696",
    content: `
# Sejarah Kopi Dunia: Dari Kaffa ke Batavia 1696

Kopi bukan sekadar komoditas perkebunan biasa. Ia adalah pemicu revolusi sosial, intelektual, dan perdagangan lintas benua selama lebih dari lima abad.

### Legenda Kaldi dan Hutan Kaffa Ethiopia
Kisah kopi berawal di hutan hujan dataran tinggi Kaffa, Ethiopia barat daya sekitar abad ke-9 Masehi. Seorang penggembala kambing muda bernama Kaldi memperhatikan perilaku aneh kawanan kambingnya: mereka melompat-lompat berenergi, gembira, dan menolak tidur di malam hari setelah memakan buah beri merah ranum dari semak liar di tepi tebing.

Kaldi membawa buah tersebut ke biara sufi terdekat. Kepala biarawan awalnya mencurigai buah tersebut sebagai godaan gaib dan melemparkannya ke bara perapian. Ketika biji di dalam buah mulai terpanggang panas, aroma harum karamel dan rempah menyeruak ke seluruh ruangan. Biji panggang itu segera diselamatkan dari bara, direndam dalam air mendidih, dan diminum bersama untuk membantu para biarawan tetap terjaga selama doa malam.

### Monopoli Yaman & Pelabuhan Al-Mukha
Pada abad ke-15, tanaman kopi dibawa menyeberangi Laut Merah menuju semenanjung Arab, tepatnya di wilayah pegunungan Yaman. Bangsa Arab menyebut minuman berenergi ini sebagai *qahwah* (secara harfiah: pencegah kantuk).

Untuk melindungi monopoli perdagangan emas hitam ini, penguasa Yaman melarang keras ekspor biji kopi mentah yang masih dapat tumbuh. Setiap biji yang keluar dari pelabuhan utama **Al-Mukha (Mocha)** harus direbus atau disangrai terlebih dahulu agar daya kecambahnya mati.

### Masuknya Kopi ke Indonesia (1696 - 1699)
Monopoli Yaman akhirnya ditembus ketika seorang peziarah bernama Baba Budan menyelundupkan tujuh biji kopi subur yang disembunyikan di balik lilitan serbannya menuju bukit Chandragiri, India.

Gubernur Jenderal VOC di Batavia, Willem van Outshoorn, melihat potensi agroklimat kepulauan Nusantara. Pada tahun **1696**, komandan pasukan Belanda di Malabar (India), Adrian van Ommen, mengirimkan bibit kopi Arabika varietas Typica pertama ke Batavia.
- Pengiriman pertama tahun 1696 musnah terendam banjir bandang Sungai Ciliwung.
- Pada tahun **1699**, pengiriman bibit kedua tiba dan ditanam dengan sukses di kawasan **Pondok Kopi** (saat ini Jakarta Timur) serta perkebunan Meester Cornelis.

### Lahirnya "A Cup of Java" & Sistem Tanam Paksa
Tanaman kopi terbukti tumbuh sangat subur di tanah vulkanik sejuk Jawa Barat (Priangan) dan Jawa Timur. Pada tahun 1711, VOC melakukan ekspor perdana kopi Jawa ke Amsterdam. Kualitas kopi dari Jawa begitu superior dan mendominasi bursa komoditas Eropa hingga kata **"Java"** resmi diadopsi ke dalam bahasa Inggris sebagai bahasa gaul universal untuk secangkir kopi (*"a cup of java"*).

| Periode | Peristiwa Sejarah Kunci |
|---|---|
| **Abad ke-9** | Penemuan buah kopi liar di Kaffa, Ethiopia oleh Kaldi |
| **Abad ke-15** | Budidaya sistematis dan monopoli kopi di Yaman via pelabuhan Al-Mukha |
| **1696 & 1699** | Bibit Arabika Typica pertama dibawa VOC ke Batavia (Pondok Kopi) |
| **1711** | Ekspor komersial perdana kopi Jawa ke Amsterdam |
| **1830 - 1870** | *Cultuurstelsel* (Tanam Paksa) memicu perluasan masif kebun kopi di seluruh pulau Jawa dan Sumatra |
| **1878** | Wabah jamur Karat Daun (*Hemileia vastatrix*) memusnahkan 90% Arabika dataran rendah, memicu masuknya Robusta asal Kongo pada tahun 1900 |

> [!NOTE]
> Mengetahui bahwa tanah Indonesia adalah rumah bagi pohon-pohon kopi tua yang telah berumur lebih dari 300 tahun memberikan perspektif mendalam bagi setiap barista. Secangkir kopi yang kita seduh hari ini membawa warisan agraris berdarah dan bernilai tinggi dari para leluhur.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Menelusuri asal-usul legenda Kaldi di Ethiopia, perdagangan Yaman di Pelabuhan Al-Mukha, hingga tibanya bibit Arabika VOC di Batavia pada tahun 1696 yang melahirkan istilah legendaris 'A Cup of Java'.",
    key_takeaways: [
      "Tanaman kopi Arabika liar berasal dari hutan dataran tinggi Kaffa, Ethiopia Barat Daya.",
      "Bangsa Arab di Yaman adalah yang pertama membudidayakan dan memanggang biji kopi sejak abad ke-15 melalui pelabuhan legendaris Al-Mukha (Mocha).",
      "Tahun 1696 VOC membawa bibit Arabika Typica dari Malabar India ke Batavia, dan penanaman kedua tahun 1699 di Pondok Kopi sukses besar.",
      "Pulau Jawa menjadi produsen kopi terbesar dunia abad ke-18 hingga melahirkan istilah global 'A Cup of Java'."
],
  },
  {
    id: "les-f1-2",
    module_id: "mod-f1",
    title: "Peta Rantai Nilai: 6 Titik Kritis dari Hulu ke Hilir",
    content: `
# Peta Rantai Nilai: 6 Titik Kritis dari Hulu ke Hilir

Secangkir specialty coffee beraroma melati dan buah persik di sebuah kafe urban tidak tercipta secara kebetulan. Kopi tersebut telah melewati rantai nilai (*value chain*) yang sangat panjang, melibatkan kerja keras ribuan tangan dengan keahlian spesifik.

![Media Ajar: Peta Rantai Nilai Kopi Specialty dari Hulu ke Hilir](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format&fit=crop&q=80)

[DIAGRAM:value-chain]

### 1. Farmer (Petani Kopi)
Petani bertanggung jawab atas agronomi: memilih varietas bibit yang tepat, pemupukan organik, pemangkasan ranting mati (*pruning*), pencegahan hama terpadu, dan yang paling krusial: **pemetikan selektif 100% buah matang pohon (petik merah / red cherry)**. Di tangan petanilah seluruh potensi kimia rasa asam amino, sukrosa, dan asam organik diciptakan.

### 2. Processor / Wet Mill (Stasiun Pengolah Basah)
Processor menerima ceri segar dari petani dan segera mengolahnya dalam waktu kurang dari 8 jam. Mereka memisahkan ceri cacat dengan teknik rambang apung (*floaters separation*), mengupas kulit luar (*depulping*), mengontrol fermentasi mikroba (aerobik atau anaerobik), dan menjemur biji di atas para-para (*raised drying beds*) hingga kadar air mencapai standar aman simpan internasional: **10.0% – 12.0%**.

### 3. Trader, Collector, & Dry Mill
Dry mill mengupas kulit tanduk (*parchment*) menggunakan mesin huller, menyortir ukuran biji dengan ayakan getar (*size grading screen*), memisahkan densitas biji dengan *gravity separator table*, serta melakukan sortasi warna (*color sorting*). Q Grader di lab ekspor akan mencicipi (*cupping*) sampel untuk menentukan grade dan skor kopi sebelum dimasukkan ke dalam karung kedap udara **GrainPro** untuk diekspor.

### 4. Roaster (Penyangrai Kopi)
Roaster adalah ilmuwan termodinamika. Mereka menganalisis densitas green bean, kadar air, dan ukuran biji untuk merancang kurva profil sangrai (*roast curve*). Roaster mengontrol kecepatan transfer panas (konduksi dan konveksi), mengarahkan laju kenaikan suhu (*Rate of Rise* / RoR), dan menentukan titik akhir sangrai agar karakter manis dan asam origin kopi terekspresikan optimal tanpa rasa pahit gosong (*baked* atau *scorched*).

### 5. Barista & Brewer
Barista adalah garda terdepan sekaligus penerjemah rasa. Barista mengontrol kimia pelarut air (TDS, kekerasan mineral Mg2+/Ca2+, alkalinitas), mengkalibrasi distribusi partikel gilingan (*grind size*), mengatur rasio seduh, serta menyajikan minuman dengan keramahan (*hospitality*) yang membuat konsumen memahami cerita di balik kopi tersebut.

### 6. Conscious Consumer (Konsumen Teredukasi)
Konsumen yang paham kualitas tidak hanya mencari asupan kafein semata, melainkan mengapresiasi keunikan rasa dan bersedia membayar harga premium untuk kopi yang bersumber secara etis. Pembelian dari konsumen inilah yang mengalirkan kembali modal ekonomi ke petani di hulu.

> [!IMPORTANT]
> **Hukum Pelestarian Kualitas Kopi**: 
> "Kualitas kopi adalah proses penurunan bertahap (*degradative process*). Petani dapat menghasilkan kopi bernilai 100 poin, tetapi kesalahan pengeringan oleh processor bisa menurunkannya ke 80 poin; kesalahan sangrai roaster menurunkannya ke 70 poin; dan ekstraksi buruk barista bisa menurunkannya ke 50 poin. Tidak ada satu pun pihak di hilir yang bisa menaikkan skor bawaan pohon."
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami anatomi rantai pasok industri kopi modern: Petani, Processor, Eksportir/Trader, Roaster, Barista, dan Konsumen. Mengetahui tanggung jawab kritis masing-masing peran.",
    key_takeaways: [
      "Kualitas kopi adalah proses degradatif: potensi rasa 100% diciptakan di kebun oleh petani, dan peran seluruh pihak berikutnya adalah mempertahankan potensi tersebut.",
      "Enam titik rantai nilai: Petani -> Processor (Wet Mill) -> Trader/Dry Mill -> Roaster -> Barista -> Konsumen.",
      "Kesalahan di hulu (misal petik ceri mentah atau pengeringan jamur) tidak pernah bisa diperbaiki oleh mesin roasting secanggih apapun atau teknik seduh barista terhebat.",
      "Kolaborasi Direct Trade memotong perantara yang tidak efisien dan memastikan petani menerima margin keuntungan yang adil."
],
  },
  {
    id: "les-f1-3",
    module_id: "mod-f1",
    title: "Specialty Coffee vs Kopi Komersial: Standar Resmi SCA",
    content: `
# Specialty Coffee vs Kopi Komersial

Di pasar global, industri kopi terbelah menjadi dua dunia yang sangat berbeda: **Kopi Komersial (Commodity Coffee)** dan **Specialty Coffee**. Istilah *Specialty Coffee* pertama kali dicetuskan oleh Erna Knutsen pada tahun 1974 dalam konferensi perdagangan kopi di Perancis untuk mendeskripsikan biji kopi dengan cita rasa istimewa yang diproduksi di bawah kondisi geografis iklim mikro ideal.

### Tiga Pilar Standar SCA (Specialty Coffee Association)
Sebuah lot kopi hanya sah menyandang gelar *Specialty Coffee* jika memenuhi tiga kriteria ketat berikut:

#### 1. Skor Cupping Minimal 80 Poin (Skala 100)
Evaluasi sensori dilakukan secara buta (*blind cupping*) oleh evaluator tersertifikasi Q Grader menggunakan formulir resmi SCA. Aspek yang dinilai mencakup: Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, dan Overall score.

| Rentang Skor | Klasifikasi SCA | Karakteristik Sensori |
|---|---|---|
| **90.00 – 100.00** | *Super Outstanding (Presidential)* | Cita rasa luar biasa langka, kebersihan mutlak, kompleksitas bunga & buah eksotis |
| **85.00 – 89.99** | *Excellent (Specialty Grade)* | Cita rasa sangat khas origin, asam buah manis cerah, body seimbang, aftertaste panjang |
| **80.00 – 84.99** | *Very Good (Specialty Grade)* | Manis bersih, tidak ada cacat, karakter origin jelas |
| **< 80.00** | *Below Specialty (Commercial / Commodity)* | Sering memiliki cacat rasa (sepat, datar, fermentasi berlebih, bau tanah kotor) |

#### 2. Kriteria Fisik Green Bean (SCA Green Grading Standard)
Dalam **350 gram** sampel biji kopi hijau (*green bean*):
- **Cacat Primer (Category 1 Defects)**: **WAJIB 0 (NOL CACAT)**. Tidak boleh ada satu pun biji hitam pekat (*full black*), biji busuk asam (*full sour/stinker*), biji berjamur (*fungus*), atau batu/kotoran asing.
- **Cacat Sekunder (Category 2 Defects)**: Maksimal 5 poin cacat sekunder (misal: pecahan biji, lubang serangga ringan, atau biji keriput).
- **Kadar Air (*Moisture Content*)**: Wajib berada di rentang **10.0% – 12.0%** dengan aktivitas air (*water activity* / aw) di bawah 0.70.

#### 3. Keterlacakan Penuh (Full Traceability)
Kopi specialty tidak pernah dijual secara anonim. Kemasan kopi specialty selalu mencantumkan informasi transparan:
- Nama negara, pulau, dan region spesifik (misal: *Sumatra, Lintong Nihuta, Desa Siborong-borong*).
- Nama kebun, kelompok tani, atau stasiun olah.
- Ketinggian tanam di atas permukaan laut (mdpl).
- Varietas botani (misal: *Typica, Sigarar Utang, Bourbon*).
- Metode pasca panen (misal: *Full Washed, Carbonic Maceration*).

| Parameter Pembeda | Kopi Komersial (Commodity Grade) | Specialty Coffee (Standar SCA) |
| :--- | :--- | :--- |
| **Standar Pemetikan** | Strip picking (campur hijau, kuning, merah) | **100% Petik Merah Optimal (Brix 18°–24°Bx)** |
| **Ketertelusuran Asal** | Anonim, dicampur dari ribuan kebun | **Single Origin / Micro-lot (Nama petani & varietas jelas)** |
| **Cacat Biji Hijau** | Toleransi tinggi cacat primer | **Zero Primary Defect (Standar SCA Green Grading)** |
| **Standar Skor Cupping** | Di bawah 80 poin (sering tidak diuji resmi) | **Minimal 80.00 Poin Resmi Kalibrasi Q Grader** |
| **Motif Konsumen** | Asupan kafein semata | **Apresiasi keunikan rasa, terroir, & proses pascapanen** |

> [!TIP]
> Mengapa roaster komersial selalu memanggang gelap (*dark roast*) hingga berminyak? Karena pemanggangan ekstrem memecah seluruh senyawa rasa alami biji menjadi karbon gosong, sehingga cacat rasa biji mentah (busuk, berjamur, atau apek) tertutupi oleh rasa pahit arang yang seragam.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membongkar kriteria ketat Specialty Coffee Association (SCA): ambang batas skor cupping 80+, toleransi 0 cacat primer dalam 350g sampel, serta transparansi rantai pasok.",
    key_takeaways: [
      "Specialty Coffee WAJIB meraih skor cupping minimal 80.0 poin pada protokol standar SCA yang dinilai oleh Q Grader berlisensi.",
      "Dalam 350 gram sampel green bean, Specialty Coffee harus memiliki NOL (0) Primary Defect dan maksimal 5 Secondary Defects.",
      "Kopi komersial menitikberatkan pada kuantitas tonase dan harga murah bursa komoditas (C-Market), sedangkan specialty menitikberatkan pada cita rasa kompleks dan keterlacakan (traceability).",
      "Kopi specialty dipanggang untuk menonjolkan keunikan terroir asal, sedangkan kopi komersial disangrai gelap (dark roast) untuk menutupi cacat rasa biji mentah."
],
  },
  {
    id: "les-f1-4",
    module_id: "mod-f1",
    title: "Empat Gelombang Kopi: Dari Komoditas Massal ke Era Fermentasi Presisi",
    content: `
# Empat Gelombang Kopi: Evolusi Budaya Konsumsi

Sejarah konsumsi kopi modern dikelompokkan oleh para sosiolog dan sejarawan kopi ke dalam beberapa fase evolusi yang dikenal sebagai **"Coffee Waves"** (Gelombang Kopi). Setiap gelombang menandai pergeseran radikal dalam cara manusia memandang, memproses, dan menikmati secangkir kopi.

### 1. Gelombang Pertama (The First Wave): Aksesibilitas & Kopi Instan
- **Era**: Akhir abad ke-19 hingga 1960-an (pasca Perang Dunia II).
- **Karakteristik**: Kopi diperlakukan murni sebagai komoditas utilitas untuk mendongkrak energi pekerja pabrik dan tentara.
- **Inovasi Utama**: Kemasan kaleng hampa udara (*vacuum tin*), bubuk kopi instan larut air (*instant freeze-dried coffee*), dan kopi tubruk kemasan sachet murah.
- **Titik Lemah**: Tidak ada kepedulian terhadap asal-usul biji, jenis varietas, maupun etika petani. Kopi sering kali dicampur biji cacat dan dipanggang sangat gosong agar tahan bertahun-tahun di rak supermarket.

### 2. Gelombang Kedua (The Second Wave): Ritel Espresso & Gaya Hidup
- **Era**: Akhir 1960-an hingga 1990-an (dimotori oleh Peet's Coffee dan ledakan jaringan Starbucks).
- **Karakteristik**: Minum kopi bergeser dari sekadar ritual dapur menjadi pengalaman sosial di "ruang ketiga" (*third place* di luar rumah dan kantor).
- **Inovasi Utama**: Mesin espresso komersial modern diperkenalkan ke publik luas. Lahir tren minuman susu berbusa manis: *Caramel Macchiato*, *Mocha*, *Frappuccino*, dan sirup perasa aneka rasa.
- **Ciri Roasting**: Profil sangrai *Dark French Roast* atau *Italian Roast* yang dominan pahit gurih dan berpadu kuat dengan susu berlemak tinggi.

### 3. Gelombang Ketiga (The Third Wave): Kopi sebagai Seni Kriya (Craftsmanship)
- **Era**: Awal 2000-an hingga 2018 (dipelopori oleh Stumptown, Intelligentsia, Blue Bottle, dan kafe independen Jakarta-Bandung).
- **Karakteristik**: Kopi diperlakukan layaknya *fine wine* atau keju adiboga. Terroir tanah, ketinggian kebun, dan varietas botani menjadi perbincangan utama.
- **Inovasi Utama**: Ledakan metode seduh manual (*manual pour-over* seperti Hario V60, Chemex, Kalita Wave, Aeropress), timbangan digital bersensor 0.1 gram, kettle leher angsa presisi, dan penetapan skor cupping SCA 80+.
- **Ciri Roasting**: Gaya sangrai *Light to Medium Roast* untuk menonjolkan keasaman buah alami (*fruity acidity*) dan wangi floral tanpa rasa terbakar.

### 4. Gelombang Keempat (The Fourth Wave): Sains Presisi & Rekayasa Fermentasi
- **Era**: 2018 hingga sekarang.
- **Karakteristik**: Integrasi bioteknologi mikrobiologi, termodinamika digital, dan keterlacakan molekuler.
- **Inovasi Utama**:
  1. **Fermentasi Presisi**: Tangki anaerobik dengan injeksi CO2 (*Carbonic Maceration*), inokulasi strain ragi (*Saccharomyces cerevisiae* khusus wine), serta penambahan buah segar (*Co-fermentation*).
  2. **Eksplorasi Spesies Langka**: Kebangkitan varietas *Coffea Eugenioides*, *Wush Wush*, dan kultivar endemik hutan liar.
  3. **Presisi Ekstraksi Barista**: Pemanfaatan refraktometer digital TDS, keranjang filter presisi laser, pemanasan induksi, dan formula air seduh terkontrol mineral per ppm.

> [!NOTE]
> Di Indonesia, keempat gelombang ini hidup berdampingan secara harmonis: masyarakat masih menikmati kopi tubruk sachet tradisional (Gelombang 1), nongkrong di gerai espresso modern (Gelombang 2), menikmati V60 single origin Gayo di kafe artisanal (Gelombang 3), dan berburu lot micro-lot fermentasi anaerobik berharga jutaan rupiah (Gelombang 4).
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membedah evolusi budaya konsumsi kopi global dan lokal: Gelombang Pertama (Kopi Instan & Kaleng), Gelombang Kedua (Espresso Chains & Lifestyle), Gelombang Ketiga (Artisanal & Origin), hingga Gelombang Keempat (Sains Fermentasi Presisi & Varietal Rarity).",
    key_takeaways: [
      "Gelombang Pertama (First Wave): Aksesibilitas massal kopi instan sachet dan kaleng pasca Perang Dunia II.",
      "Gelombang Kedua (Second Wave): Komersialisasi minuman berbasis espresso (latte, cappuccino, flavored syrup) dipelopori oleh kedai waralaba modern.",
      "Gelombang Ketiga (Third Wave): Apresiasi kopi layaknya *fine wine*, mengedepankan terroir kebun, seduh manual (manual brew), dan pemanggangan terang.",
      "Gelombang Keempat (Fourth Wave): Sains biokimia terapan, inokulasi mikroba presisi, varietas langka (Geisha, Eugenioides), dan kejuaraan barista global."
],
  },
  {
    id: "les-f1-5",
    module_id: "mod-f1",
    title: "Keberlanjutan Lingkungan & Etika Fair Trade di Perkebunan Kopi",
    content: `
# Keberlanjutan Lingkungan & Etika Fair Trade

Di balik keanggunan aroma kopi di cangkir kita, ada kenyataan sosial ekonomi yang menuntut perhatian serius: mayoritas petani kopi dunia hidup di bawah garis kemiskinan dan menghadapi risiko iklim yang kian ekstrem.

### Realitas Perkebunan Kopi Indonesia
Berbeda dengan Brazil atau Vietnam yang didominasi perkebunan korporasi berskala raksasa dengan mesin panen mekanis otomatis, lanskap kopi Indonesia sangat unik:
- **95% Perkebunan Rakyat**: Kopi Indonesia ditanam oleh lebih dari 2 juta keluarga petani kecil dengan luas rata-rata lahan hanya **0.5 hingga 1.5 hektar**.
- **Topografi Terjal**: Perkebunan berada di lereng-lereng gunung terjal yang hanya bisa dijangkau dengan berjalan kaki atau sepeda motor modifikasi.
- **Rantai Tengkulak Berlapis**: Di masa lalu, petani terpaksa menjual ceri hijau/campur kepada tengkulak desa dengan harga ijon murah demi memenuhi kebutuhan pangan harian.

> 🔄 **Perbandingan Model Rantai Pasok Kopi:**
>
> * **Rantai Tradisional (Banyak Perantara):**  
>   **Petani** → **Tengkulak Desa** → **Kolektor Kota** → **Eksportir Besar** → **Broker Internasional** → **Pabrik Komersial** → **Konsumen**  
>   *(Harga ditekan di setiap titik, margin petani sangat rendah, kualitas tercampur acak)*
>
> * **Model Direct Trade Specialty:**  
>   **Petani / Koperasi Unggul** → **Roaster Specialty (CherryEdu)** → **Barista Profesional** → **Konsumen Teredukasi**  
>   *(Harga premium berkeadilan, kemitraan jangka panjang transparan, kualitas terjaga penuh)*

### Model Sertifikasi Etis Global
Untuk mendorong keadilan ekonomi dan perlindungan ekologis, lahir berbagai skema sertifikasi:

#### 1. Fair Trade (Perdagangan Adil)
- **Harga Dasar Minimum (*Price Floor*)**: Melindungi petani dari kejatuhan harga bursa komoditas dunia (*C-Market Crash*). Jika harga pasar jatuh di bawah biaya produksi, pembeli Fair Trade wajib membayar harga lantai minimum.
- **Premi Sosial (*Social Premium*)**: Dana tunai tambahan yang diberikan langsung kepada koperasi tani untuk membiayai fasilitas umum (seperti klinik desa, beasiswa anak petani, dan jembatan kebun).

#### 2. Rainforest Alliance & Utz Certified
- Fokus pada pencegahan deforestasi hutan lindung, larangan perburuan satwa liar (seperti harimau Sumatra dan burung endemik), perlindungan sempadan sungai dari limbah pulper kopi, serta larangan pestisida berbahaya.

#### 3. Gerakan Direct Trade (Perdagangan Langsung)
Banyak roastery specialty independen kini memilih skema *Direct Trade*:
- Roaster terbang langsung ke kebun di Takengon, Toraja, atau Bajawa sebelum musim panen.
- Roaster mencicipi cupping lot bersama petani, memberikan masukan teknis pasca panen, dan menyepakati kontrak harga pembelian premium jauh di atas harga bursa pasar.
- Membangun hubungan multi-tahun yang menjamin stabilitas pendapatan bagi keluarga petani.

### Krisis Regenerasi Petani
Tantangan terbesar kopi Indonesia saat ini bukan pada mesin atau teknologi seduh, melainkan pada **krisis regenerasi generasi muda di desa**. Rata-rata usia petani kopi Indonesia telah melampaui 52 tahun. Generasi Z dan milenial pedesaan cenderung merantau ke kota besar karena bertani dianggap tidak menjanjikan masa depan cerah.

> [!IMPORTANT]
> **Visi CherryEdu**: Dengan mendidik konsumen dan barista untuk mengapresiasi kopi specialty, harga ceri kopi petik merah dapat dihargai pantas (Rp 12.000 – Rp 18.000/kg dibanding ceri campur Rp 6.000/kg). Ini menjadikan profesi petani kopi modern sebagai profesi yang membanggakan, menguntungkan secara finansial, dan menarik bagi generasi muda Indonesia.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 5,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membedah tantangan nyata kesejahteraan petani kecil, krisis pergantian generasi petani muda di pedesaan, dampak deforestasi, serta sertifikasi etis seperti Fair Trade, Rainforest Alliance, dan gerakan Direct Trade.",
    key_takeaways: [
      "Lebih dari 95% perkebunan kopi di Indonesia dikelola oleh petani swadaya rakyat berlahan sempit (< 2 hektar).",
      "Krisis regenerasi petani: usia rata-rata petani kopi Indonesia berada di atas 50 tahun karena generasi muda enggan bertani akibat margin keuntungan yang minim.",
      "Sertifikasi Fair Trade menjamin harga dasar minimum (Price Floor) dan dana premi sosial untuk pembangunan komunitas pedesaan.",
      "Direct Trade (Perdagangan Langsung) membangun relasi transparan jangka panjang antara roastery dan kelompok tani tanpa tengkulak spekulatif."
],
  },
  {
    id: "les-f2-1",
    module_id: "mod-f2",
    title: "Anatomi Botani Tanaman & Buah Kopi: Dari Eksokarp hingga Biji Endosperma",
    content: `
# Anatomi Botani Tanaman & Buah Kopi

[DIAGRAM:cherry-anatomy]

Untuk memahami bagaimana rasa kopi terbentuk, seorang ahli kopi harus memulai dari struktur biologis tanamannya. Pohon kopi bukan semak liar biasa, melainkan pohon berkayu yang mampu hidup hingga 50-80 tahun.

### Klasifikasi Taksonomi
- **Kingdom**: Plantae
- **Famili**: *Rubiaceae* (satu keluarga dengan bunga soka, tanaman kina, dan mengkudu)
- **Genus**: *Coffea*
- **Spesies Utama**: *Coffea arabica* (Arabika), *Coffea canephora* (Robusta), *Coffea liberica* (Liberika)

Tanaman kopi memiliki akar tunggang yang menghunjam sedalam 1.5 – 2.5 meter ke dalam tanah vulkanik untuk menyerap air dan hara mineral, serta akar lateral dangkal untuk menyerap oksigen. Bunga kopi berwarna putih bersih, mekar serentak setelah musim hujan tiba, dan mengeluarkan aroma harum semerbak mirip bunga melati (*jasmine*).

[DIAGRAM:cherry-anatomy]

### 5 Lapisan Anatomi Ceri Kopi

#### 1. Eksokarp (*Exocarp / Outer Skin*)
Kulit terluar buah ceri. Berwarna hijau gelap saat muda karena klorofil, dan berubah menjadi kuning, oranye, lalu merah tua keunguan saat matang sempurna akibat pembentukan pigmen antosianin. Kulit ini melindungi biji dari cuaca luar dan serangga.

#### 2. Mesokarp (*Mesocarp / Mucilage / Pulp*)
Lapisan lendir berdaging manis tepat di bawah kulit luar. Mengandung konsentrasi tinggi air (84%), gula sukrosa dan fruktosa (9-10%), pektin (4-5%), serta asam organik. Lapisan inilah yang difermentasikan oleh mikroorganisme dalam proses pasca panen dan memberikan karakter body manis pada proses Natural dan Honey.

#### 3. Endokarp (*Endocarp / Parchment / Kulit Tanduk*)
Lapisan pelindung keras berstruktur selulosa tebal yang membungkus masing-masing biji kopi. Di stasiun giling basah atau dry mill, biji kopi yang masih dibungkus kulit tanduk ini disebut **gabah kopi**. Gabah melindungi embrio biji dari kerusakan fisik dan oksidasi selama masa istirahat (*resting*).

#### 4. Spermoderm (*Silver Skin / Kulit Ari Perak*)
Lapisan membran tipis transparan berwarna keperakan yang menempel langsung pada permukaan biji kopi hijau. Saat disangrai di drum roaster, kulit ari ini akan terlepas akibat ekspansi panas dan membentuk apa yang dikenal sebagai **chaff** (sekam kopi).

#### 5. Endosperma (*Endosperm / Green Bean*)
Inilah biji kopi sebenarnya yang kita olah dan konsumsi. Berisi cadangan nutrisi bagi embrio tanaman: lipid, protein, asam klorogenat, trigonelin, mineral kalium, dan kafein. Biji kopi normal memiliki dua belahan pipih (*flat beans*) yang saling berhadapan.

### Peaberry (Kopi Lanang): Anomali Biji Tunggal
Pada sekitar 5% hingga 8% buah ceri di sebuah pohon, salah satu dari dua ovula gagal dibuahi. Akibatnya, biji yang tersisa tumbuh tanpa tekanan pasangan sehingga berbentuk bulat lonjong seperti kacang polong. Biji tunggal ini dikenal sebagai **Peaberry** atau di Indonesia dinamai **Kopi Lanang**. Karena bentuknya yang bulat menggelinding, peaberry menerima transfer panas yang sangat seragam saat disangrai di dalam mesin roaster drum.

> [!TIP]
> **Pemanfaatan Cascara**: Kulit luar (eksokarp) dan daging buah (mesokarp) yang dikupas dan dikeringkan secara higienis tidak lagi dibuang sebagai limbah, melainkan diseduh sebagai teh herbal bernutrisi tinggi bernama **Cascara**, kaya antioksidan dan asam malat menyegarkan.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membongkar struktur biologis tanaman genus Coffea, sistem perakaran, siklus berbunga hingga pembentukan buah ceri, serta 5 lapisan anatomi buah kopi yang krusial bagi proses pasca panen.",
    key_takeaways: [
      "Tanaman kopi termasuk dalam famili botani Rubiaceae, genus Coffea.",
      "Buah kopi (kopi ceri) tersusun atas 5 lapisan: Eksokarp (kulit luar), Mesokarp (mucilage lendir), Endokarp (parchment/kulit tanduk), Spermoderm (kulit ari/silverskin), dan Endosperma (biji kopi hijau).",
      "Mucilage adalah lapisan berdaging yang kaya akan sukrosa, glukosa, dan pektin, menjadi bahan bakar utama proses fermentasi.",
      "Umumnya buah kopi menghasilkan 2 biji pipih berhadapan (*flat beans*), namun mutasi alami 5% menghasilkan biji tunggal bulat yang disebut Peaberry (Kopi Lanang)."
],
  },
  {
    id: "les-f2-2",
    module_id: "mod-f2",
    title: "Agroklimatologi & Peran Ketinggian: Mengapa MDPL Menentukan Kepadatan & Keasaman",
    content: `
# Agroklimatologi & Peran Ketinggian (Altitude)

Dalam spesifikasi kantong kopi specialty, Anda akan selalu melihat angka elevasi, misalnya: \`1.500 – 1.800 mdpl\` (meter di atas permukaan laut). Angka ini bukan sekadar informasi geografis, melainkan indikator biologis utama yang menentukan kepadatan fisik biji dan profil keasaman cangkir.

### Fisika Atmosfer & Suhu Rata-rata
Secara hukum termodinamika atmosfer, setiap kenaikan ketinggian **100 meter**, suhu udara rata-rata akan turun sekitar **0.6°C**. Dataran tinggi 1.600 mdpl di Pegunungan Kerinci atau Takengon memiliki suhu siang hari berkisar 20°C – 24°C dan suhu malam hari yang bisa anjlok hingga 10°C – 14°C.

| Parameter Agroklimat | Dataran Rendah (&lt; 900 masl) | Dataran Tinggi (&gt; 1.200 masl) |
| :--- | :--- | :--- |
| **Suhu Harian Rata-rata** | Hangat / Panas (&gt; 25°C) | **Sejuk berkabut (15°C – 22°C)** |
| **Laju Pematangan Buah** | Terlalu cepat matang | **Pematangan lambat & bertahap (Akumulasi nutrisi maksimal)** |
| **Kandungan Gula & Prekursor** | Waktu akumulasi singkat | **Akumulasi sukrosa & asam organik sitrat/malat melimpah** |
| **Kepadatan Fisik Biji** | Biji lunak / berpori longgar | **Biji sangat padat keras (Strictly Hard Bean / SHB)** |
| **Karakter Sensorik Cangkir** | Dominan earthy, bodi datar, asam rendah | **Keasaman cerah berkilau, aroma floral & sitrus kompleks** |

### Mengapa Respirasi Lambat Itu Krusial?
Tanaman kopi berfotosintesis di siang hari menggunakan sinar matahari untuk menghasilkan karbohidrat dan gula sukrosa. Pada malam hari, tanaman melakukan respirasi (bernapas) untuk membakar sebagian gula tersebut menjadi energi pertumbuhan.
- Di dataran rendah yang hangat, tanaman bernapas dengan cepat di malam hari, sehingga sebagian besar gula habis terbakar sebelum sempat disimpan di dalam biji.
- Di dataran tinggi yang sejuk, suhu dingin "mengunci" laju metabolisme respirasi malam hari. Akibatnya, tanaman mengalirkan dan memadatkan cadangan gula sukrosa murni, asam klorogenat, asam sitrat, dan asam malat ke dalam embrio biji.

### Klasifikasi Tingkat Kepadatan Biji (Bean Density)
Di perdagangan kopi Amerika Latin dan Karibia, biji kopi diklasifikasikan berdasarkan ketinggian tanam:
1. **Strictly Hard Bean (SHB) / Strictly High Grown (SHG)**: Ditanam di atas 1.400 mdpl. Garis belahan tengah biji menutup rapat zig-zag, berbobot berat, dan tidak mudah pecah saat ditekan.
2. **Hard Bean (HB)**: Ditanam di ketinggian 1.200 – 1.400 mdpl.
3. **Soft Bean (SB)**: Ditanam di bawah 1.000 mdpl. Biji bertekstur lebih lunak, belahan tengah terbuka lebar, dan pori-pori seluler lebih renggang.

### Implikasi Praktis bagi Roaster & Barista
- **Bagi Roaster**: Biji SHB (seperti Toraja Sapan atau Gayo 1.700 mdpl) memiliki konduktivitas termal tinggi. Biji ini tahan menerima energi panas awal (*Charge Temperature*) yang lebih tinggi tanpa risiko gosong di permukaan luar (*scorching*). Roaster dapat mendorong fase Maillard secara agresif untuk membuka potensi asam buah yang cerah.
- **Bagi Barista**: Biji yang sangat padat membutuhkan penetrasi ekstraksi yang lebih kuat. Air seduh dapat disetel pada suhu optimal yang lebih tinggi (**92°C – 94°C**) untuk melarutkan asam organik padat di dalam inti selulosa biji.

> [!IMPORTANT]
> Apakah elevasi tinggi selalu menjamin rasa enak? **Tidak selalu**. Elevasi tinggi hanya memberikan **potensi genetika kimiawi maksimal**. Jika ceri di 1.800 mdpl dipetik saat masih hijau mentah atau dijemur di atas tanah kotor hingga berjamur, kualitasnya akan hancur seketika.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami sains agroklimat: bagaimana elevasi tinggi (1.200 - 2.000 mdpl) dan suhu dingin malam hari memperlambat respirasi tanaman kopi, menghasilkan biji dengan densitas ultra-tinggi (SHB) dan profil keasaman kompleks.",
    key_takeaways: [
      "Elevasi di atas permukaan laut (mdpl) berkorelasi langsung dengan suhu udara rata-rata harian (penurunan ~0.6°C setiap kenaikan 100 meter).",
      "Suhu dingin di dataran tinggi memperlambat laju respirasi malam hari tanaman, memungkinkan akumulasi gula sukrosa dan asam organik berlangsung lebih lama dan optimal.",
      "Biji kopi dari elevasi tinggi memiliki struktur selulosa yang sangat rapat dan padat, diklasifikasikan sebagai Strictly High Grown (SHG) atau Strictly Hard Bean (SHB).",
      "Biji berdensitas tinggi menyerap panas roaster lebih stabil dan menghasilkan keasaman malat/sitrat buah yang hidup di cangkir."
],
  },
  {
    id: "les-f2-3",
    module_id: "mod-f2",
    title: "Tanah Vulkanik, Iklim Mikro, & Sistem Agroforestri Naungan (Shade-Grown)",
    content: `
# Tanah Vulkanik, Iklim Mikro, & Sistem Agroforestri

Indonesia memiliki anugerah agroklimat yang tidak dimiliki banyak negara lain di dunia: gugusan cincin gunung api aktif (*Pacific Ring of Fire*) yang membentang dari barat Sumatra, melintasi Jawa, Bali, Lombok, Flores, hingga Sulawesi Utara.

### Kimia Tanah Vulkanik (Andosol)
Tanah di lereng gunung api aktif (seperti Gunung Kerinci, Gunung Sindoro, Gunung Inerie di Flores, dan Gunung Batur di Bali) diklasifikasikan sebagai tanah **Andosol**:
- **Bahan Organik Tinggi**: Abu vulkanik hasil letusan masa lampau terlapuk menjadi tanah yang sangat gembur, memiliki kapasitas retensi air tinggi, dan aerasi perakaran yang sempurna.
- **Kekayaan Unsur Hara Esensial**:
  - **Kalium (K)**: Berperan dalam translokasi gula dari daun ke buah kopi, meningkatkan ukuran ceri dan kemanisan (*sweetness*).
  - **Fosfor / Fosfat (P)**: Berperan dalam pembentukan adenosin trifosfat (ATP) tanaman dan sintesis asam fosfat alami yang memberi sensasi keasaman *sparkling cola-like* khas kopi vulkanik.
  - **Magnesium (Mg) & Kalsium (Ca)**: Memperkuat dinding sel buah dan menyeimbangkan pH tanah di level optimal (pH 5.5 – 6.5).

![Sistem Agroforestri Naungan Pohon di Kebun Kopi Dataran Tinggi](https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&auto=format&fit=crop&q=80)

> 🌳 **Struktur Kanopi Sistem Agroforestri (Shade-Grown Coffee):**
>
> * **Lapisan Kanopi Hutan (20–30 Meter):**  
>   Pohon Sengon, Dadap, Lamtoro, dan Kayu Manis menyaring sinar matahari ekstrem menjadi 40%–60% intensitas sejuk, menahan angin badai, serta menjadi habitat predator alami hama.
>
> * **Lapisan Pohon Kopi Arabika (2–3 Meter):**  
>   Daun berfotosintesis stabil tanpa dehidrasi panas, buah ceri matang perlahan dengan kepadatan seluler tinggi.
>
> * **Lantai Kebun & Seresah Daun Organik:**  
>   Humus alami menjaga mikroba tanah dan kelembapan air tanah tanpa pupuk kimia sintetis berlebih.

### Manfaat Sistem Agroforestri (Shade-Grown Coffee)
Tanaman kopi secara biologis berevolusi sebagai tanaman lapisan bawah (*understory shrub*) di hutan hujan tropis. Menanam kopi secara monokultur di bawah terik matahari langsung tanpa naungan (*sun-grown*) memang mempercepat kuantitas panen di awal, tetapi membuat tanaman cepat stres, rentan terbakar matahari (*leaf scorch*), dan menuntut pupuk kimia sintetis berlebih.

Sebaliknya, petani kopi tradisional Indonesia mempraktikkan sistem **Agroforestri** dengan menanam pohon penaung:
1. **Regulasi Suhu Mikro**: Suhu permukaan daun kopi terjaga sejuk (terhindar dari fluktuasi panas ekstrem di atas 30°C yang dapat menghentikan proses fotosintesis).
2. **Fiksasi Nitrogen Alami**: Pohon legumena seperti Lamtoro (*Leucaena leucocephala*) bersimbiosis dengan bakteri *Rhizobium* di akarnya untuk menyerap nitrogen bebas dari udara dan menyuntikkannya ke dalam tanah secara gratis tanpa pupuk urea kimiawi.
3. **Pemberian Karakter Rasa Terroir**: Sistem tumpang sari (*intercropping*) di Bali Kintamani (di mana kopi ditanam berselingan dengan pohon jeruk keprok) atau di Flores (berselingan dengan pohon cengkeh dan kakao) berkontribusi secara nyata pada transfer mikrobioma tanah dan aroma khas regional.

> [!TIP]
> Kopi yang ditanam di bawah naungan (*Shade-Grown*) adalah sahabat burung migran dan satwa langka. Perkebunan kopi rakyat di Gayo dan Kerinci berfungsi sebagai koridor penyangga penting bagi kelestarian satwa hutan tropis Indonesia.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Menganalisis mengapa jalur gunung berapi aktif (Ring of Fire) Indonesia menjadi tanah tersubur bagi kopi, peran unsur fosfat & kalium, serta manfaat vital pohon naungan pelindung kebun.",
    key_takeaways: [
      "Kepulauan Indonesia dilintasi oleh jalur busur vulkanik aktif (Ring of Fire) yang kaya akan tanah Andosol berporositas prima.",
      "Tanah vulkanik muda kaya akan mineral makro Kalium (K), Kalsium (Ca), Magnesium (Mg), dan Fosfat (P) yang penting untuk pembentukan asam fosfat dan ester rasa buah.",
      "Sistem Agroforestri menanam kopi di bawah pohon penaung (Shade-Grown seperti Lamtoro, Sengon, atau pohon buah) meniru habitat asli hutan hujan Ethiopia.",
      "Pohon penaung menyaring sinar matahari ekstrem, mempertahankan kelembapan mikro tanah, dan menyuburkan biomassa daun gugur."
],
  },
  {
    id: "les-f2-4",
    module_id: "mod-f2",
    title: "Manajemen Panen Selektif: Sains Petik Merah 100% & Pengukuran Derajat Brix",
    content: `
# Manajemen Panen Selektif: Sains Petik Merah 100%

Jika ada satu aturan tunggal yang paling memisahkan kopi specialty dari kopi komersial murah, aturan itu adalah: **DISIPLIN PETIK MERAH 100% (SELECTIVE PICKING)**.

### Kimiawi Pematangan Buah Ceri
Buah kopi tidak matang secara serempak di dalam satu dahan pohon. Dalam satu ranting yang sama, Anda bisa melihat bunga mekar, buah kecil hijau keras, buah kuning semburat oranye, dan buah merah tua keunguan.

| Fase Kematangan | Indikator Fisik Buah | Kadar Gula Terlarut (Brix) | Profil Cita Rasa di Cangkir |
| :--- | :--- | :--- | :--- |
| **Mentah (Green)** | Hijau keras pekat | &lt; 12° Brix | Sepat getir berumput (*grassy*), astringent, tidak ada manis |
| **Kurang Matang** | Kuning / Oranye pucat | 13° – 16° Brix | Asam mentah datar, rasa manis tipis kurang berbobot |
| **MATANG OPTIMAL** | **Merah darah / Merah hati** | **18° – 24° Brix** | **MANIS MAKSIMAL, FLORAL, ASAM SITRUS SEGAR BERSIH** |
| **Terlewat Matang** | Ungu kehitaman lembek | &gt; 24° Brix (fermentasi liar) | Bau tape busuk, asam cuka menyengat (*over-fermented fault*) |

### Apa Bahaya Buah Ceri Hijau Mentah?
Pada buah ceri yang masih hijau:
- Karbohidrat di dalam endosperma masih berbentuk **pati kompleks** yang belum terhidrolisis menjadi molekul gula sederhana (sukrosa, glukosa, fruktosa).
- Konsentrasi senyawa fenol astringent sangat tinggi.
- Saat disangrai, biji mentah ini tidak dapat mengalami reaksi karamelisasi Maillard secara normal. Hasilnya adalah biji berwarna kuning pucat hambar yang disebut **Quaker**. Satu biji quaker saja dalam satu cangkir seduhan akan merusak seluruh rasa kopi dengan sensasi kacang tanah mentah dan rasa kardus kering.

### Sains Pengukuran Derajat Brix (°Bx) di Kebun
Petani modern di Gayo, Kerinci, dan Ijen kini membawa instrumen optik presisi ke kebun: **Refraktometer Brix**.
1. Petani memetik beberapa sampel ceri secara acak dari suatu blok kebun.
2. Ceri dipencet lembut hingga beberapa tetes cairan lendir manis (*mucilage juice*) menetes ke prisma refraktometer.
3. Melalui indeks bias cahaya, alat mengukur persentase konsentrasi sukrosa padat terlarut (°Brix).

| Nilai °Brix | Kategori Mutu | Rekomendasi Proses Pasca Panen |
|---|---|---|
| **< 16° Brix** | Bawah Standar (Under-ripe) | Dipisahkan untuk pasar komersial lokal |
| **17° – 19° Brix** | Standar Baik | Cocok untuk proses Fully Washed reguler |
| **20° – 24° Brix** | Sangat Prima (Specialty Grade) | Ideal untuk Honey Process & Washed bermutu tinggi |
| **> 24° Brix** | Luar Biasa (Competition Lot) | Sangat ideal untuk Anaerobic Natural & Slow Drying |

> [!IMPORTANT]
> Mengapa petani enggan petik merah jika tidak diberi insentif harga? Karena petik merah selektif menuntut pemetik kembali ke pohon yang sama sebanyak 3 hingga 5 kali putaran sepanjang musim panen. Pemetik dibayar berdasarkan berat timbangan harian; memetik semua buah sekaligus (*strip picking*) jauh lebih cepat dan berat. Oleh karena itu, specialty roastery wajib membayar harga pembelian ceri merah 2 hingga 3 kali lipat lebih tinggi sebagai kompensasi jerih payah petani.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami disiplin paling fundamental dalam specialty coffee: petik merah selektif 100%. Mempelajari penggunaan refraktometer digital Brix di kebun untuk mengukur kadar gula sukrosa ceri matang.",
    key_takeaways: [
      "Pemetikan buah kopi hijau mentah (strip picking) adalah penyebab nomor satu cacat rasa astringent, sepat kayu, dan quaker di meja cupping.",
      "Pemetikan petik merah selektif (selective picking) hanya memanen buah yang telah mencapai fase kematangan fisiologis puncak.",
      "Refraktometer optik/digital digunakan untuk mengukur derajat Brix (°Bx) pada jus mucilage buah kopi.",
      "Buah kopi specialty berkualitas prima memiliki ambang batas minimal 20° – 24° Brix gula terlarut."
],
  },
  {
    id: "les-f2-5",
    module_id: "mod-f2",
    title: "Ancaman Hama Tanaman & Perubahan Iklim: Karat Daun & Kumbang Penggerek",
    content: `
# Ancaman Hama Tanaman & Krisis Perubahan Iklim

Masa depan secangkir kopi yang kita nikmati saat ini menghadapi ancaman nyata yang belum pernah terjadi sebelumnya dalam sejarah peradaban manusia: serangan hama biologis dan pergeseran iklim bumi.

### 1. Karat Daun Kopi (*Hemileia vastatrix* / CLR)
Karat daun adalah penyakit jamur patogen paling mematikan dalam sejarah industri kopi dunia.
- **Gejala**: Munculnya bercak serbuk spora berwarna kuning-oranye terang menyerupai karat besi di bagian bawah daun kopi.
- **Dampak Fisiologis**: Spora menembus stomata daun, merusak klorofil, dan menyebabkan daun rontok massal secara mendadak (*defoliasi*). Tanpa daun, pohon kopi tidak dapat berfotosintesis, buah rontok sebelum matang, dan pohon akan mati kekeringan dalam waktu 1-2 tahun.
- **Sejarah di Indonesia**: Pada tahun **1878**, wabah Karat Daun menyapu bersih perkebunan Arabika Typica VOC di dataran rendah Jawa dan Sumatra. Peristiwa traumatik ini memaksa pemerintah kolonial mengimpor spesies kopi Liberika pada 1885 dan akhirnya Robusta asal Kongo pada tahun 1900 yang kebal terhadap karat daun.

> 🪲 **Siklus Hidup & Mekanisme Serangan Penggerek Buah Kopi (PBKO / Hypothenemus hampei):**
>
> 1. **Penyusupan:** Kumbang betina dewasa membuat lubang jarum tepat di bagian ujung diskus ceri kopi matang.
> 2. **Reproduksi:** Kumbang meletakkan 30–50 butir telur di dalam daging biji endosperma.
> 3. **Kerusakan Fisik:** Larva menetas dan memakan jaringan biji hijau, meninggalkan rongga hitam busuk dan kotoran.
> 4. **Klasifikasi Mutu:** Biji berlubang PBKO dikategorikan sebagai cacat fisik kritis (*insect damage defect*) pada sertifikasi SCA & SNI.

### 2. Penggerek Buah Kopi (*Hypothenemus hampei* / PBKo)
Kumbang hitam berukuran mikro (panjang hanya 1.5 – 2 mm) ini adalah musuh utama kualitas green bean fisik:
- Kumbang betina mengebor lubang melingkar sempurna tepat di ujung pusar buah ceri kopi yang mulai mengeras.
- Di dalam biji kopi, kumbang membuat liang terowongan dan meletakkan puluhan telur. Larva yang menetas akan memakan cadangan endosperma biji.
- **Dampak Kualitas**: Menyebabkan biji menjadi keropos, berlubang hitam, dan mudah hancur saat disangrai. Di meja cupping, biji cacat PBKo menghasilkan rasa pahit kotor yang mengotori kebersihan rasa (*clean cup*).

#### Pengendalian Hama Terpadu (PHT) Ramah Lingkungan:
Petani specialty modern menolak pestisida kimia beracun dan memilih pendekatan ekologis:
1. **Sanitasi Rampasan & Petik Bubuk**: Memetik seluruh buah yang terserang hama di pohon dan memungut buah gugur di tanah untuk direbus, memutus siklus hidup kumbang.
2. **Perangkap Feromon / Atraktan (Brocap Trap)**: Memasang botol perangkap berisi aroma etanol-metanol yang memikat kumbang PBKo masuk dan tenggelam.
3. **Jamur Parasit Alami (*Beauveria bassiana*)**: Menyemprotkan spora jamur alami yang secara spesifik melumpuhkan tubuh kumbang tanpa merusak tanaman atau mencemari tanah.

### 3. Krisis Pemanasan Global (Global Warming)
Penelitian dari *World Coffee Research* (WCR) memproyeksikan bahwa pada tahun **2050**, hingga **50% lahan budidaya Arabika dunia** tidak akan lagi cocok ditanami akibat kenaikan suhu rata-rata 1.5°C – 2.0°C.
- **Garis Ketinggian Bergeser ke Atas**: Di Indonesia, wilayah di ketinggian 1.000 – 1.200 mdpl yang dulunya dingin kini menjadi terlalu hangat untuk Arabika, meningkatkan serangan karat daun dan hama PBKo yang kini mampu terbang di ketinggian lebih tinggi.
- Petani terpaksa membuka kebun lebih tinggi mendekati puncak gunung (1.600 – 2.000 mdpl), yang berbenturan langsung dengan batas kawasan hutan lindung nasional.

> [!TIP]
> Inilah alasan mengapa pemuliaan varietas hibrida tahan penyakit (seperti Tim-Tim, Catimor, dan F1 Hybrids) serta eksplorasi Fine Robusta dataran menengah menjadi sangat krusial bagi ketahanan pangan dan industri kopi masa depan.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 5,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami ancaman eksistensial terhadap masa depan kopi: jamur Karat Daun (Hemileia vastatrix), kumbang Penggerek Buah Kopi (PBKo / Hypothenemus hampei), serta pergeseran garis ketinggian aman akibat pemanasan global.",
    key_takeaways: [
      "Jamur Karat Daun (Coffee Leaf Rust / Hemileia vastatrix) merusak klorofil daun dan pernah memusnahkan seluruh perkebunan Arabika di Jawa pada tahun 1878.",
      "Kumbang Penggerek Buah Kopi (Hypothenemus hampei / PBKo) membuat terowongan dan bertelur di dalam biji, menyebabkan cacat lubang serangga (insect damaged beans).",
      "Pengendalian Hama Terpadu (PHT) mengutamakan perangkap feromon, agen hayati jamur Beauveria bassiana, dan sanitasi petik bubuk tanpa racun kimia.",
      "Pemanasan global menaikkan suhu rata-rata bumi, memaksa batas bawah ketinggian budidaya Arabika naik 200-300 meter lebih tinggi ke puncak gunung."
],
  },
  {
    id: "les-f3-1",
    module_id: "mod-f3",
    title: "Taksonomi Genus Coffea: Arabika, Robusta, Liberika, & Excelsa",
    content: `
# Taksonomi Genus Coffea: 4 Spesies Komersial

Di dunia biologi botani, terdapat lebih dari **125 spesies** kopi yang telah diidentifikasi di alam liar Afrika dan Madagaskar. Namun, perdagangan kopi dunia berputar di sekitar empat spesies utama:

| Taksonomi Spesies | Coffea Arabica (60%–70% Pasar Dunia) | Coffea Canephora / Robusta (30%–40% Pasar Dunia) |
| :--- | :--- | :--- |
| **Jumlah Kromosom** | 44 Kromosom (Tetraploid) | 22 Kromosom (Diploid) |
| **Sistem Penyerbukan** | *Self-pollinating* (Dapat menyerbuk sendiri) | *Cross-pollinating* (Wajib penyerbukan silang angin/lebah) |
| **Kandungan Kafein** | 1.2% – 1.5% bobot kering | 2.2% – 2.8% bobot kering (hampir 2x lipat) |
| **Kadar Asam Klorogenat (CQA)** | 5.5% – 8.0% (keasaman lebih lembut) | 10.0% – 11.0% (memicu rasa pahit dan astringent lebih kuat) |
| **Karakter Sensorik** | Keasaman kompleks, manis buah melimpah, aroma floral | Bodi sangat pekat kental, cokelat pahit pekat, rasa kacang tanah |
| **Ketahanan Tanaman** | Sangat rentan karat daun & cuaca panas | Sangat tahan hama, ulet di dataran rendah |

### 1. Coffea arabica (Kopi Arabika)
- **Genetika Unik**: Satu-satunya spesies kopi yang bersifat **Tetraploid (44 kromosom / 2n = 4x = 44)**. Merupakan hasil hibridisasi alami purba antara dua spesies diploid liar: *Coffea canephora* dan *Coffea eugenioides*. Bersifat *self-pollinating* (dapat menyerbuk sendiri tanpa bantuan angin/serangga dari pohon lain).
- **Kadar Kafein**: Rendah (0.9% – 1.4%).
- **Kadar Lipid & Sukrosa**: Sangat tinggi (Lipid: 15-17%, Sukrosa: 6-9%).
- **Elevasi Tanam**: 1.000 – 2.100 mdpl.
- **Karakter Cangkir**: Kompleksitas rasa tinggi, keasaman manis sitrat/malat cerah, aroma floral, buah-buahan, dan body halus.

### 2. Coffea canephora (Kopi Robusta)
- **Genetika**: Diploid (22 kromosom). Bersifat *cross-pollinating* (penyerbukan silang antar pohon).
- **Kadar Kafein**: Sangat tinggi (**2.2% – 2.7%**). Kafein adalah pestisida alami tanaman; tingginya kafein membuat Robusta sangat kebal terhadap hama serangga dan jamur karat daun.
- **Kadar Asam Klorogenat (CGA)**: Jauh lebih tinggi dari Arabika (10-12% vs 6-7%). Saat disangrai, degradasi CGA berlebih menghasilkan senyawa pahit fenolik.
- **Elevasi Tanam**: 200 – 900 mdpl.
- **Karakter Cangkir**: Body sangat tebal, krema kental padat, aroma sereal gandum, kacang panggang, kakao hitam, dengan keasaman sangat rendah.

### 3. Coffea liberica (Kopi Liberika)
- **Asal Usul**: Berasal dari Liberia, Afrika Barat, diperkenalkan ke Jawa pada 1885.
- **Morfologi**: Pohon dapat tumbuh menjulang setinggi 10-18 meter dengan daun raksasa bertekstur kaku seperti kulit. Buah cerinya berukuran 2-3 kali lebih besar dari Arabika dan memiliki daging kulit tebal berserat.
- **Sentra di Indonesia**: Sangat adaptif di lahan gambut basah dataran rendah (Tanjung Jabung Barat Jambi, Riau, dan Kepulauan Meranti).
- **Karakter Cangkir**: Aroma khas buah nangka matang (*jackfruit*), bunga liar tropis, berpadu dengan sentuhan smokey kayu manis dan body sirup pekat.

### 4. Coffea liberica var. dewevrei (Kopi Excelsa)
- Dahulu dianggap spesies mandiri, namun kini direklasifikasi secara taksonomi sebagai varietas dari Liberika.
- **Sentra di Indonesia**: Lereng Gunung Anjasmoro (Wonosalam, Jombang, Jawa Timur) dan Tanjung Jabung Barat.
- **Karakter Cangkir**: Profil rasa yang sangat unik dan eksotis: perpaduan antara aroma tart buah asam jawa (*tamarind*), selai nanas panggang, buah plum gelap, dan aftertaste rempah herbal yang kuat.

| Atribut Parameter | Arabika (*C. arabica*) | Robusta (*C. canephora*) | Liberika (*C. liberica*) |
|---|---|---|---|
| **Set Kromosom** | 44 (Tetraploid) | 22 (Diploid) | 22 (Diploid) |
| **Kadar Kafein** | 1.1% – 1.5% | 2.2% – 2.7% | 1.0% – 1.4% |
| **Kadar Sukrosa Gula** | 6% – 9% | 3% – 5% | 4% – 6% |
| **Pangsa Pasar Global** | ~60% | ~38% | < 2% |
| **Ketahanan Karat Daun** | Rendah / Rentan | Sangat Tinggi / Kebal | Tinggi |

> [!TIP]
> Di bar kopi modern, jangan memandang sebelah mata spesies non-Arabika! Biji Liberika dan Excelsa berkualitas tinggi kini menjadi primadona baru di kompetisi World Barista Championship (WBC) sebagai bahan pencampur (*blend*) untuk memberikan aroma buah tropis yang tidak ada pada Arabika manapun.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membedah perbedaan biologis, kromosom genetik, kadar kafein, dan potensi organoleptik empat spesies komersial genus Coffea: Arabika (tetraploid) vs Robusta, Liberika, dan Excelsa (diploid).",
    key_takeaways: [
      "Coffea arabica adalah satu-satunya spesies tanaman kopi yang bersifat Tetraploid (memiliki 4 set kromosom: 2n = 44) dan menyerbuk sendiri (self-pollinating).",
      "Coffea canephora (Robusta) bersifat Diploid (2n = 22), memiliki kadar kafein dua kali lebih tinggi (2.2 - 2.7%), dan kaya akan asam klorogenat.",
      "Coffea liberica memiliki ukuran daun dan buah raksasa berbentuk asimetris dengan aroma khas nangka manis matang.",
      "Excelsa secara resmi diklasifikasikan sebagai varietas dari Liberika (Coffea liberica var. dewevrei) dengan profil asam buah tart yang unik."
],
  },
  {
    id: "les-f3-2",
    module_id: "mod-f3",
    title: "Silsilah Varietas Arabika Dunia: Dari Typica, Bourbon, Geisha, hingga Hibrida",
    content: `
# Silsilah Varietas Arabika Dunia

[DIAGRAM:varieties-tree]

Varietas pada kopi setara dengan varietas anggur pada industri wine (seperti *Cabernet Sauvignon*, *Pinot Noir*, atau *Chardonnay*). Memahami silsilah pohon keluarga Arabika adalah kunci untuk memprediksi potensi rasa yang akan muncul di cangkir.

[DIAGRAM:varieties-tree]

### 1. Garis Keturunan Typica (The Noble Ancestor)
Typica adalah varietas Arabika pertama yang keluar dari Yaman dan dikirim VOC ke Batavia pada tahun 1696. Dari Batavia, tanaman ini menyebar ke Kebun Raya Amsterdam, kemudian ke Karibia dan seluruh benua Amerika Selatan.
- **Ciri Fisik**: Pohon berbentuk kerucut ramping, cabang lentur, buku buah renggang. **Pucuk daun muda berwarna cokelat perunggu (*bronze-tipped*)**.
- **Karakter Cangkir**: Kebersihan rasa luar biasa (*clean cup*), aroma bunga melati (*jasmine*), teh manis, keasaman sitrat halus, dan body sutra.

### 2. Garis Keturunan Bourbon (The Sweet Powerhouse)
Pada tahun 1708, misionaris Prancis membawa bibit dari Yaman ke Pulau Bourbon (sekarang Pulau Réunion di Samudra Hindia).
- **Ciri Fisik**: Cabang lebih tegak dan rapat, buah berkerumun padat. Pucuk daun muda berwarna hijau terang.
- **Mutasi Warna Buah**: Selain Red Bourbon (merah), terdapat mutasi Yellow Bourbon (kuning cerah) dan Orange/Pink Bourbon.
- **Karakter Cangkir**: Tingkat kemanisan (*sweetness*) sangat tinggi, body bulat lembut, nuansa karamel, toffee, cokelat susu, dan buah plum manis.

### 3. Mutasi Alami Populer
- **Caturra**: Mutasi kerdil (*dwarf mutation*) alami dari Bourbon yang ditemukan di Brazil pada 1937. Karena pohonnya kompak dan pendek, petani dapat menanam lebih rapat dan memetik buah tanpa tangga.
- **Maragogipe**: Mutasi raksasa dari Typica yang ditemukan di Bahia, Brazil. Biji, daun, dan buahnya berukuran dua kali lipat lebih besar dibanding kopi biasa (dijuluki *Elephant Bean*).

### 4. Legenda Varietas Geisha (Gesha)
Berasal dari hutan pegunungan Gori Gesha di Ethiopia Barat Daya pada tahun 1931, dibawa ke Kenya, Tanzania, dan akhirnya ditanam di Kosta Rika dan Panama. Varietas ini mengguncang dunia specialty pada lelang *Best of Panama 2004* oleh perkebunan Hacienda La Esmeralda.
- **Karakter Cangkir**: Sangat eksplosif menyerupai parfum: minyak esensial bunga melati, bergamot Earl Grey, buah persik, leci, dan asam sitrat anggun layaknya anggur putih Riesling.

### 5. Keajaiban Hibrido de Timor (HDT)
Pada tahun 1917, di sebuah perkebunan di Pulau Timor (saat itu koloni Portugis), terjadi mukjizat genetika alami: **tanaman Arabika tetraploid menyerbuk silang secara spontan dengan tanaman Robusta diploid**.
- Hasil persilangan alami ini menghasilkan keturunan tetraploid stabil yang dinamai **Hibrido de Timor (HDT)**.
- HDT mewarisi gen kekebalan mutlak terhadap Karat Daun dari gen induk Robusta, namun tetap memiliki morfologi biji dan rasa mirip Arabika.
- HDT menjadi induk genetik paling berharga di dunia yang disilangkan dengan Caturra untuk melahirkan kelompok varietas **Catimor** (termasuk Ateng di Sumatra).

> [!NOTE]
> Mengetahui varietas membantu barista menjelaskan kepada pelanggan: jika pelanggan mencari kopi berkarakter teh melati dan asam cerah, tawarkan varietas bergaris keturunan Typica atau Geisha; jika mereka mencari kopi berbody manis legit karamel, tawarkan garis keturunan Bourbon atau Caturra.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Mempelajari silsilah pohon keluarga varietas Arabika: dua leluhur purba (Typica dan Bourbon), mutasi alami (Caturra, Pacas, Maragogipe), persilangan legendaris (Geisha, SL28, Pacamara), dan hibrida Timor.",
    key_takeaways: [
      "Seluruh varietas Arabika modern di dunia berakar dari dua garis keturunan leluhur utama: Typica dan Bourbon.",
      "Typica bercirikan ujung pucuk daun muda berwarna perunggu (bronze tips), tajuk melebar, dan rasa cangkir sangat elegan bernuansa floral manis.",
      "Bourbon berasal dari Pulau Réunion, menghasilkan produktivitas 20-30% lebih tinggi dari Typica dengan cangkir dominan rasa karamel dan buah manis.",
      "Hibrido de Timor (HDT) adalah persilangan alami spontan antara Arabika dan Robusta di Pulau Timor tahun 1917 yang mewariskan kekebalan genetik terhadap karat daun."
],
  },
  {
    id: "les-f3-3",
    module_id: "mod-f3",
    title: "Varietas Unggul Nusantara: Ateng Super, Tim-Tim, Sigarar Utang, & S-795",
    content: `
# Varietas Unggul Nusantara

Indonesia bukan hanya konsumen varietas global, melainkan salah satu laboratorium keanekaragaman genetik kopi terpenting di dunia. Varietas-varietas lokal nusantara telah beradaptasi selama puluhan dekade dengan tanah vulkanik dan cuaca tropis basah kepulauan kita.

### 1. Tim-Tim (Timor Timur / HDT Asli)
- **Sejarah**: Pada akhir 1970-an hingga awal 1980-an, bibit *Hibrido de Timor* dibawa dari Timor Timur ke dataran tinggi Gayo, Aceh Tengah. Petani lokal menamainya **Tim-Tim**.
- **Ciri Tanaman**: Tajuk pohon tinggi semi-melebar, daun tebal berwarna hijau tua mengkilap, dan sangat toleran terhadap serangan jamur karat daun.
- **Karakter Cangkir**: Body tebal, rasa manis buah gelap (*blackcurrant*, plum), keasaman asam malat seimbang, dan aroma herbal serai manis (*lemongrass*).

### 2. Ateng Super & Ateng Jaluk (Catimor Lokal)
- **Sejarah**: Nama "Ateng" adalah kependekan dari **Aceh Tengah**. Merupakan varietas dari kelompok Catimor (persilangan Caturra x Hibrido de Timor).
- **Ciri Tanaman**: Pohon kerdil (*semi-dwarf*), buku ruas cabang sangat rapat, berbuah lebat pada umur muda (sudah dapat dipanen pada usia 2 tahun).
- **Karakter Cangkir**: Jika ditanam di atas 1.400 mdpl dengan panen petik merah selektif, Ateng menghasilkan rasa rempah manis manis, kakao pekat, buah beri, dan aftertaste gula merah yang solid.

### 3. Sigarar Utang (Sang Pelunas Hutang dari Danau Toba)
- **Asal Usul**: Berasal dari Desa Siborong-borong dan Onan Ganjang di Kabupaten Humbang Hasundutan, Sumatra Utara (kawasan Danau Toba). Resmi dilepas oleh Menteri Pertanian RI pada tahun 2005.
- **Filosofi Nama**: Dalam bahasa Batak Toba, *Sigarar Utang* berarti **"Si Pelunas Hutang"**. Dinamai demikian karena pohon ini memiliki sifat *continuous flowering* (berbunga dan berbuah terus-menerus hampir sepanjang tahun tanpa jeda musim kering), sehingga petani selalu memiliki uang tunai untuk membayar biaya sekolah anak dan melunasi pinjaman.
- **Karakter Cangkir**: Keasaman buah persik (*peach*) cerah, jeruk mandarin, sirup gula aren kental, dengan kebersihan rasa yang menonjol dibanding varietas Sumatra lainnya.

### 4. S-795 (The Legendary "Jember")
- **Asal Usul**: Dikembangkan di India oleh Balehonnur Coffee Research Station dari persilangan varietas **Kent** (keturunan Typica) dengan **S.288**. Bibitnya diimpor ke Indonesia pada tahun 1955 melalui Balai Penelitian Tanaman Pemanis dan Serat (Balitkopi) di **Jember**, Jawa Timur. Petani di Sulawesi dan Jawa pun mengenalnya dengan sebutan akrab **Varietas Jember**.
- **Sentra Utama**: Tana Toraja, Mamasa, Enrekang, dan lereng Gunung Ijen.
- **Karakter Cangkir**: Salah satu varietas dengan profil cup terbaik di Asia: cokelat hitam mewah, sirup maple, rempah pala manis, buah plum matang, dan keasaman sitrat seimbang yang sangat elegan.

### 5. Kartika & Andungsari
- **Kartika**: Klon introduksi dari Catimor P-88 asal Portugal yang diseleksi di Indonesia. Pohon bertubuh mungil dengan produktivitas sangat tinggi, banyak dibudidayakan di Jawa Barat dan Temanggung.
- **Andungsari 1**: Seleksi galur murni Catimor yang adaptif di dataran tinggi Jawa Timur. Berbiji besar dengan profil rasa buah apel merah segar dan aftertaste karamel yang bersih.

| Varietas Resmi Indonesia | Karakter Tanaman & Agronomi | Profil Cita Rasa Khas | Daerah Persebaran Utama |
| :--- | :--- | :--- | :--- |
| **Sigarar Utang** (SK Mentan 2005) | Tajuk semi-katai, sangat adaptif, berbuah sepanjang tahun | Asam sitrus manis, madu, bodi bulat halus | Danau Toba (Lintong), Gayo, Mandailing |
| **Andungsari 1 (AS 1)** | Seleksi Catimor Puslitkoka Jember, tajuk kompak | Rasa rempah manis, keasaman apel malat cerah | Kawah Ijen/Raung, Temanggung, Toraja |
| **Komasti** (Puslitkoka 2013) | Tahan nematoda akar, daun muda hijau mengilap | Bodi sedang, manis gula tebu, bersih | Jawa Tengah, Bali Kintamani, Flores Bajawa |
| **S-795 (Jember)** | Seleksi India galur Kent x Liberika | Aroma bunga herba, manis rempah cengkeh & kayu manis | Toraja, Enrekang, Ketinggian Jawa Barat |
| **Ateng Super & Tim-Tim** | Introduksi Hibrido de Timor berdaun tebal | Bodi tebal pekat, cokelat hitam, rempah bersahaja | Dataran Tinggi Gayo (Aceh Tengah & Bener Meriah) |

> [!TIP]
> Saat mencicipi kopi di meja cupping, kopi Toraja yang menggunakan varietas murni S-795 tua selalu memiliki keanggunan aroma cokelat manis dan asam buah matang yang tidak akan Anda temukan pada kopi yang menggunakan varietas komersial biasa.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Mengenal kekayaan varietas lokal yang menjadi tulang punggung specialty coffee Indonesia: Ateng Super (Catimor Jaluk), Tim-Tim (Hibrido de Timor), Sigarar Utang (Sumatra Utara), S-795 (Jember/Toraja), Kartika, dan Andungsari.",
    key_takeaways: [
      "Tim-Tim adalah nama lokal masyarakat Aceh Gayo untuk Hibrido de Timor yang dibawa dari Timor Timur pada tahun 1980-an.",
      "Ateng Super adalah varietas Catimor kerdil yang sangat produktif dan tahan hama, menjadi varietas paling dominan di Sumatra.",
      "Sigarar Utang dilepas resmi oleh Balitkopi dari Humbang Hasundutan (Danau Toba); namanya bermakna 'pelunas hutang' karena panennya yang berbuah tanpa putus sepanjang tahun.",
      "S-795 (dikenal sebagai 'Jember') adalah persilangan varietas Kent x S.288 asal India yang menjadi ikon rasa kopi Toraja dan Jawa Timur."
],
  },
  {
    id: "les-f3-4",
    module_id: "mod-f3",
    title: "Kebangkitan Fine Robusta Nusantara: Potensi Dampit, Temanggung, & Lampung",
    content: `
# Kebangkitan Fine Robusta Nusantara

Selama beberapa dekade, buku-buku kopi dunia menulis stigma negatif: *"Arabika adalah kopi bangsawan berkualitas tinggi, sedangkan Robusta adalah kopi kasta rendah yang berasa ban karet terbakar."*

Stigma tersebut kini runtuh total. Di Indonesia—sebagai produsen Robusta terbesar ketiga di dunia—lahir gerakan revolusioner yang disebut **Fine Robusta**.

### Dari Mana Rasa Pahit Buruk Robusta Berasal?
Rasa tidak sedap pada Robusta komersial tradisional (bau apek, tanah kotor, rasa ban gosong, dan getir di tenggorokan) sebetulnya **BUKAN sifat mutlak tanaman Robusta**. Rasa buruk tersebut adalah akumulasi dari malpraktik hulu:
1. Pemetikan rampasan: buah hijau keras ikut digiling bersama buah merah dan buah busuk.
2. Penjemuran di atas tanah becek bercampur debu jalanan tanpa terpal.
3. Fermentasi liar tanpa kontrol suhu di dalam karung basah.
4. Pemanggangan sangat gelap (*extra dark*) untuk menutupi cacat-cacat tersebut.

> ☕ **Transformasi Menuju Fine Robusta (CQI Quality Standard):**
>
> * **Praktik Asalan Tradisional:**  
>   Petik campur buah hitam/hijau → Penjemuran di lantai tanah lembap → Biji terkontaminasi jamur tanah → Rasa ban terbakar & astringent tajam → Nilai jual komoditas terendah.
>
> * **Standar Emas Fine Robusta:**  
>   Petik merah selektif 100% matang → Sortasi rambang apung floaters → Penjemuran para-para (*raised beds*) terangkat → Biji bersih bebas cacat primer → Menghasilkan cita rasa cokelat murni kental (*dark chocolate fudge*), karamel gula merah, dan aroma rempah harum.

### Standar Resmi Fine Robusta (CQI / Ugacof Protocols)
Sama halnya dengan Arabika yang memiliki sertifikasi Q Grader, *Coffee Quality Institute* (CQI) merumuskan kurikulum dan protokol evaluasi sensori **Q Robusta Grader**:
- **Skor Cupping**: Minimal **80.0 poin** dari skala 100.
- **Kriteria Fisik**: Bebas dari cacat primer (0 Primary Defects) dalam 350 gram sampel biji hijau.
- **Karakter Bersih (*Clean Cup*)**: Bebas dari rasa astringent tajam, bebas dari aroma apak kapur barus, dan memiliki keseimbangan sweetness alami.

### Tiga Sentra Fine Robusta Legendaris Indonesia

#### 1. Dampit (Lereng Gunung Semeru, Malang, Jawa Timur)
Dampit adalah sentra Robusta paling dihormati di pasar ekspor Eropa sejak zaman kolonial. Ditanam di ketinggian 600 – 900 mdpl di tanah vulkanik pasir abu Gunung Semeru.
- **Profil Rasa**: Sangat bulat (*round body*), aroma kacang hazelnut panggang, karamel mentega, dark chocolate murni, tanpa rasa langu.

#### 2. Temanggung (Klon BP 42, Jawa Tengah)
Petani muda di Temanggung melakukan lompatan besar dengan menerapkan fermentasi anaerobik dan perendaman ragi pada Robusta petik merah mereka.
- **Profil Rasa**: Manis alami gula aren murni (*palm sugar*), aroma daun tembakau kering manis, sereal malt, dan aftertaste cokelat yang bertahan hingga belasan menit.

#### 3. Lampung Barat & Tanggamus (Sumatra Selatan)
Sentra pasok volume terbesar Indonesia. Petani yang tergabung dalam kelompok specialty mulai memproduksi Robusta Natural Wine Process yang unik.
- **Profil Rasa**: Body sirup sangat pekat, aroma kakao nibs, rempah lada hitam manis, dan sentuhan buah kering.

### Nilai Strategis Fine Robusta bagi Barista Komersial
Dalam bisnis coffee shop modern yang didominasi oleh menu **Es Kopi Susu Gula Aren**:
- Kopi Arabika sering kali "tenggelam" dan kehilangan jati diri rasanya saat bertemu susu evaporasi dan gula aren yang manis pekat.
- Fine Robusta hadir sebagai penyelamat: kandungan lipid alaminya yang tinggi menghasilkan **krema espresso yang tebal keemasan dan kokoh**, serta rasa cokelat gurih yang mampu menembus kekentalan susu dengan harmoni rasa yang luar biasa nikmat.

> [!NOTE]
> Menghargai Fine Robusta adalah bentuk nasionalisme industri kopi Indonesia. 80% dari seluruh petani kopi kita menggantungkan hidup dari pohon Robusta. Menaikkan derajat Robusta menjadi Fine Robusta berarti menyejahterakan jutaan keluarga petani di pelosok negeri.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membongkar paradigma usang 'Robusta pasti berkualitas rendah'. Mempelajari standar Fine Robusta SCA (skor 80+), protokol petik merah, dan keunggulan kopi Dampit Malang, Temanggung, dan Lampung Barat di industri minuman modern.",
    key_takeaways: [
      "Fine Robusta adalah kopi Robusta yang dipanen petik merah 100%, diolah secara presisi, bebas cacat primer, dan meraih skor cupping minimal 80 poin berstandar CQI (Coffee Quality Institute).",
      "Rasa pahit gosong dan bau karet pada Robusta komersial bukan berasal dari genetik tanamannya, melainkan akibat petik campur ceri mentah, fermentasi kotor, dan sangrai hangus.",
      "Fine Robusta memiliki kadar lemak dan krema dua kali lipat lebih tebal dari Arabika, menjadikannya fondasi ideal untuk racikan kopi susu aren kekinian.",
      "Dampit (Malang), Temanggung (Jateng), dan Tanggamus (Lampung) adalah segitiga emas produsen Fine Robusta terbaik Indonesia."
],
  },
  {
    id: "les-f3-5",
    module_id: "mod-f3",
    title: "Dekonstruksi Label Kopi Specialty: Cara Membaca Varietas, Lot, & Cupping Notes",
    content: `
# Dekonstruksi Label Kopi Specialty

Bagi pemula, membaca label kemasan specialty coffee bisa terasa membingungkan: penuh istilah asing, angka ketinggian, singkatan varietas, dan deretan nama buah-buahan eksotis.

Bagi seorang profesional, label tersebut adalah **paspor identitas** yang menceritakan seluruh riwayat hidup kopi tersebut.

> 🏷️ **Anatomi Label Kemasan Specialty Coffee yang Transparan:**
>
> * **ORIGIN / WILAYAH:** Aceh Gayo, Desa Pantan Musara  
> * **ELEVASI KEBUN:** 1.550 – 1.650 mdpl (MASL)  
> * **VARIETAS BIBIT:** Ateng Super & Bourbon  
> * **PRODUSER / MILL:** Hendra Maulizar (Avatara Mill)  
> * **METODE PASCAPANEN:** Anaerobic Natural (72 Jam)  
> * **PROFIL ROASTING:** Light-to-Medium (Filter Roast)  
> * **TASTING NOTES:** Strawberry Jam, Hibiscus, Honeycomb, Sweet Lime  
> * **TANGGAL SANGRAI:** 05 September 2026 *(Selalu periksa tanggal sangrai untuk memastikan masa degassing terbaik!)*

### Membedah 7 Parameter Kunci Label:

#### 1. Origin & Petani / Stasiun Olah (*Producer*)
- Menyebutkan lokasi spesifik hingga tingkat desa atau bukit (*micro-lot*).
- Nama processor (misal: *Hendra Maulizar* di Gayo atau *Pak Muhlisin* di Kerinci) menunjukkan bahwa kopi ini dibeli secara langsung (*Direct Trade*) dari produsen berdedikasi tinggi, bukan biji curah dari pasar anonim.

#### 2. Ketinggian Tanam (*Altitude / Elevation*)
- Satuan \`mdpl\` (meter di atas permukaan laut).
- Panduan praktis barista: semakin tinggi angkanya (> 1.500 mdpl), biji semakin padat dan keasamannya semakin cerah. Gunakan suhu seduh lebih tinggi (**92°C – 94°C**). Sebaliknya, untuk kopi dataran menengah (1.100 – 1.300 mdpl), turunkan suhu ke **89°C – 91°C** agar rasa manis tidak terbakar.

#### 3. Varietas Botani (*Variety / Cultivar*)
- Menjelaskan susunan genetik biji (misal: *Sigarar Utang, Typica, S-795*). Memberikan gambaran awal ekspektasi body dan kompleksitas rasa dasar.

#### 4. Metode Pasca Panen (*Process*)
- Kunci penentu struktur rasa di cangkir:
  - **Washed**: Menjanjikan rasa bersih (*clean*), asam buah cerah (*citric/malic*), dan nuansa bunga/teh.
  - **Natural**: Menjanjikan manis tebal, body bulat, dan nuansa buah berry matang.
  - **Anaerobic / Wine**: Menjanjikan aroma fermentasi buah yang intens, sensasi anggur, atau rempah manis.

#### 5. Tanggal Sangrai (*Roast Date*) vs *Best Before*
- Kopi specialty tidak menggunakan patokan "Best Before" setahun ke depan seperti produk industri kaleng. Kopi specialty mencantumkan **hari di mana biji tersebut keluar dari roaster drum**.
- Rasa terbaik (*peak flavor*) tercapai setelah kopi melalui fase istirahat pengeluaran gas CO2 (**resting**) selama 7 hingga 14 hari pasca sangrai.

#### 6. Profil Sangrai (*Roast Profile*)
- **Filter Roast**: Disangrai terang (*light to medium-light*) khusus untuk seduh manual (V60, Aeropress, Kalita) guna memaksimalkan asam aromatik.
- **Espresso Roast**: Disangrai sedikit lebih matang (*medium*) untuk melunakkan keasaman dan mempermudah ekstraksi 9 bar pada mesin espresso tanpa rasa asam menyengat.

#### 7. Tasting Notes (Catatan Rasa)
- **Mitos**: *"Apakah kopi ini dicampur ekstrak strawberry atau madu?"* **Sama sekali tidak!**
- **Fakta**: Seluruh tasting notes yang tertulis di kemasan adalah hasil persepsi sensori alami terhadap ratusan senyawa ester, aldehida, dan asam organik yang terbentuk murni dari fotosintesis pohon dan fermentasi mikrobiologi.

> [!TIP]
> Jadikan tasting notes sebagai panduan orientasi rasa, bukan dogma mutlak. Jika di label tertulis *"Strawberry & Lemon"*, Anda tidak sedang minum jus buah, melainkan menikmati kopi dengan nuansa rasa manis berry liar dan kesegaran asam sitrus yang menyenangkan.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 5,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Panduan praktis bagi barista dan penikmat kopi untuk membedah anatomi label kemasan specialty coffee: membaca asal origin, nama prosesor, nomor lot kebun, tanggal sangrai (roast date), dan menafsirkan tasting notes secara realistis.",
    key_takeaways: [
      "Label specialty coffee adalah paspor transparansi kopi yang memuat identitas hulu ke hilir.",
      "Roast Date (tanggal sangrai) adalah indikator kesegaran terpenting, bukan Best Before (kadaluarsa pabrik).",
      "Tasting notes di label (seperti 'Peach, Jasmine, Honey') bukan perisa buatan sintetis, melainkan deskriptor asosiasi aroma kimia alami biji kopi.",
      "Memahami informasi varietas dan ketinggian tanam membantu barista menentukan rasio dan suhu air seduh yang presisi."
],
  },
  {
    id: "les-f4-1",
    module_id: "mod-f4",
    title: "Olah Basah (Washed / Wet Process): Demucilagination & Karakter Clean Cup",
    content: `
# Olah Basah (Washed / Fully Washed Process)

[DIAGRAM:processing-comparison]

Di dunia specialty coffee internasional, metode **Washed (Olah Basah)** diibaratkan sebagai kaca bening tanpa noda: ia tidak menambahkan rasa dari luar, melainkan menelanjangi dan memperlihatkan karakter asli tanah kebun (*terroir*) dan varietas genetik biji kopi secara murni dan transparan.

[DIAGRAM:processing-comparison]

### Tahapan Kritis Proses Fully Washed

#### 1. Sortasi Rambang Apung (*Floaters Separation*)
Ceri merah yang baru dipetik dimasukkan ke dalam bak air besar:
- Ceri sehat dan padat berbobot (*sinkers*) akan tenggelam ke dasar bak.
- Ceri cacat berlubang serangga atau keriput (*floaters*) akan mengapung ke permukaan dan langsung diserok dibuang.

#### 2. Pengupasan Kulit Luar (*Depulping*)
Ceri yang tenggelam dialirkan ke mesin *depulper*. Mesin ini meremas buah dan memisahkan kulit luar (eksokarp) dari biji. Biji yang keluar masih terbungkus lapisan lendir tebal licin (*mucilage*) yang melekat erat pada kulit tanduk (*parchment*).

#### 3. Fermentasi Penguraian Lendir (*Demucilagination*)
Lendir kopi tidak larut hanya dengan disiram air biasa karena kaya akan polimer pektin rantai panjang yang lengket. Biji berlendir dialirkan ke tangki beton atau tangki stainless steel:
- **Fermentasi Kering (*Dry Fermentation*)**: Biji didiamkan tanpa air tambahan selama 12 – 24 jam.
- **Fermentasi Basah (*Wet Fermentation*)**: Biji direndam di dalam air bersih selama 24 – 36 jam.
- **Mekanisme Biokimia**: Enzim pektinase yang diproduksi secara alami oleh ragi liar dan bakteri asam laktat memecah ikatan pektin menjadi asam galakturonat yang larut air.

#### 4. Uji Cuci Tangan (*The Washing Test*)
Bagaimana processor tahu fermentasi telah selesai? Processor mengambil segenggam biji dari tangki dan meremasnya:
- Jika masih licin seperti sabun basah, fermentasi harus dilanjutkan.
- Jika biji terasa kesat dan berbunyi berderit (*squeaky clean*) seperti batu kerikil sungai yang digosokkan, lendir telah terurai tuntas.

#### 5. Pencucian di Saluran Gravitasi (*Washing Channels*)
Biji dialirkan ke parit panjang dengan air mengalir deras sambil disapu dengan dayung kayu. Air membawa sisa lendir yang telah terurai dan menyortir kembali biji berdasarkan kepadatan gravitasi.

#### 6. Pengeringan Gabah (*Drying on Raised Beds*)
Gabah basah berkadar air ~50% dijemur di atas para-para berventilasi kawat kasa (*raised African beds*) dengan sirkulasi udara atas-bawah yang lancar. Gabah dibalik berkala setiap jam hingga kadar air stabil di **10.5% – 11.5%**.

### Profil Organoleptik Cangkir Kopi Washed
- **Acidity**: Sangat cerah, jernih, dan renyah (*crisp citric & malic acidity*).
- **Body**: Ringan hingga medium, halus seperti sutra (*silky, tea-like body*).
- **Aroma**: Sangat menonjolkan aroma floral melati, bunga jeruk, teh bergamot, apel hijau, dan jeruk mandarin.
- **Cleanliness**: Nilai kebersihan cangkir (*Clean Cup*) mencapai skor maksimal karena tidak ada residu fermentasi buah yang mengotori lidah.

> [!IMPORTANT]
> **Tantangan Lingkungan**: Pengolahan olah basah tradisional membutuhkan hingga 5 – 10 liter air bersih untuk setiap kilogram kopi ceri. Air limbah fermentasi ini kaya akan asam organik dan memiliki Biochemical Oxygen Demand (BOD) tinggi. Stasiun olah modern wajib membangun kolam sedimentasi biologis bertingkat (*waste water treatment pond*) agar air dinetralisir sebelum dialirkan kembali ke ekosistem sungai.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami tahapan lengkap olah basah (Washed / Fully Washed): pengupasan kulit (depulping), fermentasi tangki air untuk mengurai mucilage, pencucian bersih, dan penjemuran gabah. Mengetahui mengapa Washed menjadi standar kemurnian rasa terroir.",
    key_takeaways: [
      "Proses Washed membuang kulit luar dan seluruh lapisan lendir (mucilage) sebelum biji kopi dikeringkan.",
      "Mucilage yang menempel kuat diuraikan secara biologis melalui aktivitas enzim pektinase dari ragi dan bakteri alami selama 12-36 jam di tangki air.",
      "Karakteristik utama kopi Washed adalah Clean Cup (kebersihan rasa tanpa residu tanah/fermentasi) dan keasaman buah yang jernih bersinar.",
      "Proses Fully Washed menuntut ketersediaan air bersih dalam jumlah melimpah dan pengelolaan limbah cair ramah lingkungan."
],
  },
  {
    id: "les-f4-2",
    module_id: "mod-f4",
    title: "Olah Kering (Natural / Dry Process): Pengeringan Ceri Utuh & Konsentrasi Gula",
    content: `
# Olah Kering (Natural / Dry Process)

Metode **Natural (Olah Kering)** adalah teknik pengolahan kopi paling purba di muka bumi. Berasal dari dataran kering Ethiopia dan Yaman berabad-abad silam di mana sumber air sangat langka, ceri kopi yang dipetik dijemur langsung di bawah terik matahari tanpa menggunakan air sama sekali.

> ☀️ **Alur Bioproses Natural / Dry Process:**  
> **Petik Merah Optimal** → **Sortasi Rambang Air (Floaters)** → **Penjemuran Ceri Utuh di Para-para Terangkat (20–30 Hari)** → **Pengecekan Kadar Air 10.5%–11.5%** → **Hulling Kering Kupas Kulit Buah & Cangkang** → **Green Bean Siap Sangrai**

### Biokimia di Balik Pengeringan Ceri Utuh
Dalam proses Natural, biji kopi tidak pernah dipisahkan dari kulit luar dan daging lendirnya selama fase pengeringan:
1. **Fase Pengeringan Perlahan (*Slow Desiccation*)**: Buah ceri merah dihamparkan di atas para-para penjemuran (*raised drying beds*). Di bawah terik matahari, kulit ceri perlahan mengerut, menggelap dari merah menjadi ungu tua kehitaman, dan akhirnya mengeras seperti kismis raksasa (*prune-like casing*).
2. **Difusi Gula & Senyawa Ester**: Saat air menguap secara bertahap, lendir mesokarp yang manis mengental. Molekul gula sukrosa, asam buah, dan senyawa volatil aromatik dari daging ceri berdifusi secara osmosis melintasi dinding selulosa kulit tanduk (*parchment*) dan terserap ke dalam inti biji kopi hijau.
3. **Fermentasi Seluler Alami**: Di dalam kantung buah yang tertutup kulit, sel-sel tanaman kopi masih hidup selama beberapa hari pertama dan melakukan fermentasi intraseluler sebelum mati kekeringan, memecah asam organik menjadi ester bernuansa buah beri.

### Protokol Penjemuran Kritis
Penjemuran proses Natural membutuhkan waktu yang jauh lebih lama dibanding Washed: antara **18 hingga 30 hari** tergantung intensitas sinar matahari dan kelembapan udara.
- **Ketebalan Hamparan**: Di 3 hari pertama, ceri dihamparkan tipis (hanya 1 lapis ceri) agar sirkulasi udara segera mengeringkan permukaan luar dan mencegah tumbuhnya spora jamur.
- **Pembalikan Berkala**: Ceri wajib dibalik menggunakan garpu kayu setiap 30-45 menit sekali dari pagi hingga sore hari untuk menjamin pengeringan merata di kedua sisi buah.
- **Penutupan Terpal Malam Hari**: Saat matahari terbenam (sekitar pukul 17.00), seluruh hamparan ceri harus ditutup dengan terpal kedap air untuk melindunginya dari embun dingin malam dan kabut pegunungan. Terpal dibuka kembali keesokan paginya saat terik matahari muncul.

### Profil Organoleptik Cangkir Kopi Natural
- **Body & Mouthfeel**: Sangat kental, padat, dan membalut rongga mulut seperti sirup (*syrupy, velvety, heavy body*).
- **Sweetness**: Sangat dominan; rasa manis madu pekat, gula karamel, dan cokelat manis.
- **Flavor Notes**: Buah-buahan berwarna gelap dan ungu: *blackberry*, *blueberry*, *strawberry jam*, kismis (*raisin*), buah ara kering (*dried fig*), dan mangga matang.
- **Acidity**: Bersifat bulat dan manis seperti asam pada selai buah (*jammy acidity*), bukan keasaman tajam menusuk.

> [!WARNING]
> **Risiko Defek Over-Fermentasi & Jamur**: Jika penjemuran terlalu lambat karena cuaca hujan berkepanjangan dan ceri tidak dibalik teratur, ceri akan membusuk dari dalam. Ini menghasilkan defek rasa **Stinker** (bau cuka busuk atau aroma bangkai) dan racun mikotoksin jamur (*Ochratoxin A*). Menghasilkan kopi Natural yang bersih (*Clean Natural*) menuntut dedikasi tenaga kerja yang luar biasa berat.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Mempelajari metode tertua dalam sejarah peradaban kopi: menjemur buah ceri merah utuh langsung di bawah matahari. Memahami difusi gula sukrosa ke dalam biji dan risiko cacat over-fermentasi jika pengeringan lambat.",
    key_takeaways: [
      "Proses Natural menjemur buah ceri utuh bersama kulit dan dagingnya selama 15 hingga 30 hari tanpa kontak mesin pengupas.",
      "Selama penjemuran lambat, molekul gula sukrosa dan ester dari daging buah berdifusi menembus kulit tanduk ke dalam biji kopi hijau.",
      "Karakteristik kopi Natural: body sangat tebal (syrupy), tingkat kemanisan tinggi, dan aroma buah matang (blueberry, stroberi, selai buah tropis).",
      "Membutuhkan pengelolaan penjemuran yang sangat cermat: lapisan ceri harus dibalik berkala agar tidak terserang jamur kapang beracun (Ochratoxin A)."
],
  },
  {
    id: "les-f4-3",
    module_id: "mod-f4",
    title: "Metode Honey / Pulped Natural: Spektrum Yellow, Red, & Black Honey",
    content: `
# Metode Honey / Pulped Natural

Di Kosta Rika dan Brazil pada dekade 1990-an hingga 2000-an, para inovator kopi mencari jalan tengah: *bagaimana cara menghemat air bersih tanpa menghasilkan rasa fermentasi berlebih seperti Natural?* Dari sinilah lahir metode revolusioner: **Pulped Natural** atau yang di dunia specialty populer dengan nama **Honey Process**.

### Mengapa Dinamai "Honey"?
Banyak konsumen keliru mengira bahwa proses ini menggunakan campuran madu lebah asli. Kata *"Honey"* sebenarnya berasal dari kata bahasa Spanyol: *miel* (lendir/madu). Saat kulit luar dikupas dan biji dijemur, lapisan lendir mesokarp mengering menjadi lapisan kuning keemasan yang sangat lengket menyerupai madu murni.

| Tipe Honey Process | Sisa Musilase Menempel | Durasi & Kondisi Penjemuran | Karakter Profil Sensorik Cangkir |
| :--- | :--- | :--- | :--- |
| **White Honey** | 10% – 15% (hampir bersih) | 7 – 10 hari (terik matahari penuh) | Sangat bersih (*clean cup*), keasaman cerah mirip washed |
| **Yellow Honey** | 25% – 50% (lapisan sedang) | 10 – 14 hari (terik matahari langsung) | Manis floral madu ringan, asam buah aprikot segar |
| **Red Honey** | 50% – 75% (lapisan tebal) | 14 – 18 hari (teduh parsial beratap) | Bodi sedang bundar, rasa selai persik & karamel matang |
| **Black Honey** | Hampir 100% (getah utuh) | 20 – 30 hari (naungan terpal bertahap) | Bodi sangat kental, rasa manis molase, anggur hitam |

### Perbedaan Mekanisme Red Honey vs Black Honey
1. **Yellow Honey**:
   - Mesin depulper disetel untuk membuang mayoritas lendir. Biji segera dijemur di para-para terbuka di bawah terik matahari penuh. Biji dibalik sangat sering sehingga mengering cepat dalam waktu sekitar 8 hari.
   - Hasil: Warna kulit gabah kuning muda keemasan. Karakter rasa sangat jernih (*clean*), keasaman sitrat cerah, dengan sedikit sentuhan manis madu lembut.
2. **Black Honey**:
   - Seluruh lendir (100% mucilage) dipertahankan menempel pada biji.
   - Biji dijemur di bawah naungan jaring peneduh (*shade net*) atau di dalam *greenhouse* berventilasi terkontrol untuk memperlambat penguapan air (*extreme slow drying*).
   - Selama 20-30 hari, mikroba merombak gula mucilage yang teroksidasi dan terkaramelisasi menjadi lapisan hitam pekat menutupi gabah.
   - Hasil: Profil rasa yang sangat kaya dan kompleks mendekati karakter Natural, namun dengan kejernihan acidity yang tetap terjaga.

### Mengapa Honey Menjadi Primadona Barista?
Honey process menawarkan keseimbangan sempurna di meja seduh:
- Memiliki keasaman buah yang lebih hidup dibanding kopi Natural.
- Memiliki rasa manis (*sweetness*) dan ketebalan body yang jauh lebih kaya dibanding kopi Fully Washed.
- Sangat fleksibel diseduh baik dengan V60 manual brew (menghasilkan cangkir floral-fruity beraroma nektar) maupun diekstrak sebagai double espresso (menghasilkan krema padat manis karamel).

> [!TIP]
> Di Indonesia, sentra penghasil Honey Process terbaik dapat ditemukan di **Temanggung (Arabika Red Honey)**, **Flores Bajawa (Yellow Honey)**, dan **Sumbawa Tambora (Wild Honey)**.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami metode hibrida yang memadukan kebersihan Washed dan kemanisan Natural: Honey Process (Pulped Natural). Membedah spektrum White, Yellow, Red, hingga Black Honey berdasarkan persentase sisa mucilage dan kecepatan jemur.",
    key_takeaways: [
      "Proses Honey (Pulped Natural) mengupas kulit luar buah, namun membiarkan sebagian atau seluruh lapisan lendir (mucilage) tetap menempel pada biji saat dijemur.",
      "Nama 'Honey' merujuk pada tekstur lendir kopi yang lengket seperti madu saat dijemur di bawah matahari, bukan karena ditambahkan madu lebah.",
      "Spektrum Honey ditentukan oleh dua faktor: persentase mucilage yang tersisa dan kecepatan/intensitas pengeringan di bawah sinar matahari.",
      "Yellow Honey mengering cepat di bawah matahari terik (rasa clean & sitrus), sedangkan Black Honey dijemur sangat lambat di tempat teduh (rasa buah pekat & sirup manis)."
],
  },
  {
    id: "les-f4-4",
    module_id: "mod-f4",
    title: "Warisan Unik Nusantara: Wet Hulled (Giling Basah) khas Sumatra & Sulawesi",
    content: `
# Warisan Unik Nusantara: Giling Basah (Wet Hulled)

Jika Anda bepergian ke negara-negara penghasil kopi di Amerika Tengah atau Afrika, mereka hanya mengenal Washed, Natural, dan Honey. Namun jika Anda datang ke dataran tinggi Sumatra Utara, Aceh Gayo, atau pedalaman Tana Toraja, Anda akan menyaksikan metode pasca panen paling ikonik di dunia: **Giling Basah** (secara internasional dikenal sebagai **Wet Hulled Process**).

### Mengapa Metode Ini Lahir di Indonesia?
Metode Giling Basah lahir bukan dari laboratorium sains modern, melainkan murni adaptasi brilian petani tradisional terhadap iklim tropis pulau Sumatra:
- Sumatra memiliki curah hujan sangat tinggi dan cuaca lembap berkabut tebal hampir sepanjang tahun.
- Menjemur kopi hingga kering sempurna berkadar air 11% (dengan kulit tanduk masih menempel) membutuhkan waktu 2 hingga 3 minggu di bawah terik matahari—kemewahan yang jarang didapat di tengah cuaca hujan harian Sumatra.
- Petani membutuhkan perputaran uang tunai cepat untuk kebutuhan hidup keluarga. Dengan mengupas kulit tanduk lebih awal saat biji masih basah, pengeringan akhir green bean tanpa kulit tanduk berlangsung **tiga kali lebih cepat** (hanya butuh 2-3 hari penjemuran).

| Parameter Pemrosesan | Standar Dunia (Washed / Natural) | Tradisi Nusantara Giling Basah (Wet-Hulled) |
| :--- | :--- | :--- |
| **Kadar Air Saat Kulit Tanduk Dikupas** | Dijemur hingga kering tuntas: **10.5% – 11.5%** | Dikupas saat gabah masih basah liat: **30% – 40%** |
| **Kondisi Biji Pasca Pengupasan** | Tetap terbungkus parchment hingga siap kirim | Biji hijau telanjang langsung dijemur di bawah matahari |
| **Warna Fisik Green Bean** | Hijau pucat keemasan (*pale jade*) | Hijau tua kebiruan pekat (*deep bluish-green*) |
| **Profil Sensorik Khas** | Keasaman cerah berkilau, jernih (*clean*) | Bodi sangat pekat kental, rempah herba, aroma tembakau |

### Tahapan Proses Giling Basah

#### 1. Pengupasan Ceri (*Depulping*) & Fermentasi Semalam
Ceri merah dikupas menggunakan depulper manual kayu atau mesin kecil di kebun petani. Biji berlendir dimasukkan ke dalam karung goni atau ember plastik dan difermentasikan semalam (10-12 jam) untuk melunakkan lendirnya.

#### 2. Pencucian Singkat & Penjemuran Tahap 1 (*Gabah Basah*)
Keesokan paginya, biji dibilas air seadanya dan dijemur di halaman rumah petani selama 1 hingga 2 hari saja hingga kadar air turun dari ~50% menjadi sekitar **30% – 35%**. Biji pada fase ini disebut **gabah basah / labu**.

#### 3. Titik Kritis: Pengupasan Basah (*Wet Hulling*)
Gabah basah berkadar air 30% dibawa ke pedagang pengumpul (*collector/toke*) yang memiliki mesin huller bertenaga diesel besar. Karena biji masih sangat lembek dan lentur, gesekan pisau mesin huller sering membuat ujung biji sedikit terpuntir atau terbelah dua (dikenal di pasar ekspor sebagai bentuk *goat's foot* / kuku kambing).

#### 4. Penjemuran Tahap 2 (*Labu Telanjang*)
Biji hijau yang sudah telanjang tanpa kulit pelindung dihamparkan langsung di atas terpal di bawah terik matahari. Karena tidak ada lagi penghalang kulit tanduk, penguapan air berlangsung sangat cepat hingga mencapai kadar air aman simpan **12.0%**.

### Perubahan Kimia & Ciri Fisik Biji
- **Warna Green Bean Giok Kebiruan (*Blue-Green / Jade Color*)**: Biji kopi Washed normal berwarna hijau pucat kekuningan. Biji Giling Basah berwarna hijau gelap kebiruan mengkilap layaknya batu giok. Hal ini disebabkan oleh oksidasi cepat klorofil dan mineral tanah saat biji basah terpapar udara bebas tanpa perlindungan parchment.
- **Karakter Cangkir di Meja Cupping**:
  - **Body**: Sangat tebal, berat, membalut rongga mulut layaknya sirup kental (*syrupy, heavy, viscous body*).
  - **Acidity**: Sangat rendah, lembut, dan bersahabat bagi penderita lambung sensitif.
  - **Flavor Profile**: Cokelat hitam pekat (*dark cocoa*), kayu cedar (*cedar wood*), rempah manis (*sweet cinnamon*), gula molasses pekat, aroma tembakau pipa, dan kesegaran hutan tropis (*sweet forest earthy notes*).

> [!NOTE]
> Kopi Giling Basah dari Sumatra (Mandheling, Lintong, dan Gayo) telah memiliki jutaan penggemar fanatik di pasar kopi Amerika Serikat, Jepang, dan Eropa selama lebih dari satu abad. Karakter body-nya yang kokoh menjadikannya komponen legendaris wajib dalam formula campuran espresso (*espresso blend*) roastery terbaik dunia.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membongkar rahasia metode pasca panen asli Indonesia yang tidak ada duanya di dunia: Giling Basah (Wet Hulled). Memahami mengapa pengupasan kulit tanduk pada kadar air 30-35% menciptakan body tebal legendaris kopi Mandheling & Gayo.",
    key_takeaways: [
      "Giling Basah (Wet Hulled) adalah metode pasca panen tradisional asli kepulauan Nusantara, khususnya Sumatra (Gayo, Mandheling, Lintong) dan Sulawesi (Toraja).",
      "Perbedaan radikal: pada proses standar dunia, kulit tanduk (parchment) baru dikupas saat biji sudah kering (kadar air 11-12%). Pada Giling Basah, parchment dikupas saat biji masih basah lembap (kadar air 30-35%).",
      "Pengupasan dalam kondisi basah menyebabkan biji hijau menyerap oksigen dan panas lebih cepat, menghasilkan warna biji hijau kebiruan gelap (blue-green jade).",
      "Profil organoleptik khas Giling Basah: body luar biasa tebal seperti sirup, keasaman rendah lembut, rasa dark chocolate, kayu manis, cedar, dan sweet herbal."
],
  },
  {
    id: "les-f4-5",
    module_id: "mod-f4",
    title: "Era Inovasi Pasca Panen: Anaerobic, Carbonic Maceration, & Co-Fermentation",
    content: `
# Era Inovasi Pasca Panen: Dari Tradisi ke Sains Presisi

Dalam kurun waktu lima tahun terakhir, panggung kejuaraan barista dunia (*World Barista Championship*) dan meja lelang kopi specialty global dihebohkan oleh satu revolusi: **Eksperimen Fermentasi Presisi**.

Petani dan processor kopi tidak lagi membiarkan fermentasi berjalan acak secara liar di alam bebas. Mereka mengadopsi teknologi biokimia pembuatan wine (*enology*) ke stasiun pengolahan kopi.

![Tangki Stainless Steel Fermentasi Anaerobik Terkontrol](https://images.unsplash.com/photo-1574360773950-6a2347209703?w=1200&auto=format&fit=crop&q=80)

> 🔬 **Struktur Tangki Bioproses Fermentasi Anaerobik Terkontrol:**
>
> * **Katup Airlock Satu-Arah (One-Way Degassing Valve):**  
>   Membiarkan gas karbon dioksida ($\text{CO}_2$) hasil respirasi ragi keluar leluasa, namun mengunci rapat oksigen atmosfer agar tidak masuk.
>
> * **Mikrobiologi Terkendali (Controlled Microbiology):**  
>   Lingkungan tanpa oksigen menekan bakteri pembusuk aerobik dan memicu kerja enzimatis ragi (*Saccharomyces cerevisiae*) serta bakteri asam laktat untuk mensintesis ester buah tropis unik (nangka, mangga, markisa).
>
> * **Pengawasan Sensorik Real-Time:**  
>   Suhu tangki dijaga dingin ($16^\circ\text{C} - 19^\circ\text{C}$) dan derajat keasaman (pH) dipantau agar tidak turun di bawah ambang bahaya asam cuka (pH 3.8).

### 1. Anaerobic Fermentation (Fermentasi Anaerobik)
Pada fermentasi tradisional di bak terbuka, bakteri pembusuk aerobik dan jamur liar berinteraksi bebas dengan oksigen, memicu risiko pembusukan cepat.
- **Mekanisme**: Ceri utuh (*Anaerobic Natural*) atau biji berkulit tanduk (*Anaerobic Washed*) dimasukkan ke dalam tangki kedap udara (drum plastik food-grade atau tangki stainless steel). Tangki dilengkapi katup udara satu arah (*one-way airlock valve*).
- **Hasil Biokimia**: Ragi memakan gula dan melepaskan gas CO2. Karena gas CO2 lebih berat dari oksigen, oksigen terdorong keluar melalui katup hingga ruang tangki 100% bebas oksigen.
- Bakteri asam laktat (*Lactobacillus*) berkembang biak subur, menghasilkan **asam laktat** yang memberikan tekstur rasa creamy lembut layaknya mentega dan yogurt pada seduhan kopi.

### 2. Carbonic Maceration (Maserasi Karbonat)
Teknik ini dipopulerkan di panggung dunia oleh Sasa Sestic saat memenangkan *World Barista Championship 2015* di Seattle.
- **Sejarah**: Diadopsi langsung dari teknik fermentasi anggur merah wilayah Beaujolais, Prancis.
- **Mekanisme**: Ceri kopi utuh dimasukkan ke dalam tangki tertutup rapat, kemudian **gas CO2 murni bertekanan disuntikkan secara artifisial** ke dalam tangki untuk mengusir seluruh udara luar.
- Tekanan karbon dioksida merangsang pemecahan pektin buah dari dalam sel ceri (*intracellular fermentation*) tanpa merusak kulit luar buah.
- **Karakter Cangkir**: Menghasilkan cangkir dengan keasaman sparkling bersoda (*effervescent*), aroma anggur merah pekat (*red wine*), permen buah (*bubblegum*), dan pisang matang.

### 3. Inokulasi Ragi Terpilih (*Yeast Inoculation*)
Alih-alih mengandalkan ragi liar lokal yang jumlahnya tidak menentu, processor profesional menginokulasikan galur ragi khusus yang dibiakkan di laboratorium (seperti *Saccharomyces cerevisiae* jenis Lalcafe Cima atau Oro).
- Ragi khusus ini bekerja pada rentang suhu terkontrol untuk menghasilkan molekul ester tertentu (misal: isoamil asetat yang beraroma buah pisang dan pir, atau etil heksanoat yang beraroma nanas manis).

### 4. Fenomena Co-Fermentasi (Fruit-Infused Fermentation)
Sebuah tren paling viral sekaligus memicu perdebatan sengit di kalangan juri kopi specialty:
- **Praktik**: Processor memasukkan buah segar cincang (seperti nanas madu, buah markisa, strawberry, atau kayu manis) ke dalam tangki anaerobik bersama ceri kopi.
- Selama berhari-hari, ragi mengonsumsi gula buah tambahan tersebut dan menginfusikan minyak esensial aromatik buah ke dalam struktur pori biji kopi hijau.
- **Perdebatan Etis**: Asosiasi kopi mewajibkan **transparansi mutlak**. Roaster dilarang keras menjual kopi co-fermentasi seolah-olah rasa buah tersebut berasal dari keajaiban terroir alami kebun. Label wajib mencantumkan secara jujur: *"Co-Fermented with Fresh Passionfruit"*.

> [!TIP]
> Kopi anaerobik dan maserasi karbonat memiliki densitas kimia yang unik. Di meja seduh manual, gunakan air dengan suhu sedikit lebih rendah (**88°C – 90°C**) dan gilingan sedikit lebih kasar agar aroma alkohol anggur manisnya tetap elegan tanpa berubah menjadi pahit fermentasi tajam.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 5,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memasuki era fermentasi presisi modern: Anaerobic Fermentation (fermentasi tanpa oksigen), Carbonic Maceration (adaptasi teknik pembuatan wine Beaujolais dengan injeksi gas CO2), inokulasi ragi khusus, dan kontroversi Co-fermentasi buah segar.",
    key_takeaways: [
      "Fermentasi anaerobik menyegel ceri atau biji kopi di dalam tangki kedap udara dengan katup pelepasan satu arah (airlock) untuk mencegah masuknya oksigen.",
      "Lingkungan tanpa oksigen menekan bakteri aerobik pembusuk dan memberi ruang dominasi bagi bakteri asam laktat (Lactobacillus), menghasilkan rasa lembut creamy dan ester buah pekat.",
      "Carbonic Maceration (dipopulerkan Sasa Sestic WBC 2015) menyuntikkan gas karbon dioksida bertekanan ke dalam tangki, memicu fermentasi intraseluler dari dalam buah.",
      "Co-Fermentasi menambahkan buah segar atau rempah alami ke dalam tangki fermentasi; menuntut transparansi pelabelan etis kepada konsumen."
],
  },
  {
    id: "les-f5-1",
    module_id: "mod-f5",
    title: "Termodinamika Roasting: Konduksi, Konveksi, Radiasi, & Anatomi Mesin Drum",
    content: `
# Termodinamika Roasting & Anatomi Drum Roaster

[DIAGRAM:roast-curve]

Roasting (pemanggangan) bukan sekadar memanaskan biji kopi hingga berubah warna cokelat. Roasting adalah penerapan hukum termodinamika presisi tinggi untuk membuka potensi rasa kimiawi yang terkunci di dalam biji kopi hijau mentah.

### 3 Mode Perpindahan Panas (Heat Transfer)
Di dalam drum roaster kopi, transfer panas berlangsung melalui tiga mekanisme fisika simultan:

| Mekanisme Transfer Panas | Sumber Energi di Drum Roaster | Pengaruh Terhadap Pematangan Biji |
| :--- | :--- | :--- |
| **Konduksi (Sentuhan Langsung)** | Dinding logam silinder drum dan gesekan antar biji | Mematangkan lapisan luar biji kopi; jika berlebih memicu cacat gosong *facing/scorching* |
| **Konveksi (Aliran Udara Panas)** | Hawa panas dihisap exhaust fan melintasi tumpukan biji | Menembus ke bagian inti dalam biji, menguapkan air secara merata |
| **Radiasi (Pancaran Gelombang)** | Panel burner inframerah dan keramik pemanas | Mentransfer energi termal tingkat molekuler dari jarak jauh |

1. **Konduksi (*Conduction*)**:
   - Terjadi ketika biji kopi bersentuhan langsung dengan dinding drum logam yang berputar atau bersentuhan satu sama lain.
   - Bersifat transfer panas lambat. Jika panas konduksi terlalu dominan atau drum berputar terlalu lambat, permukaan luar biji akan hangus bercak hitam lokal sebelum bagian dalamnya matang (*Scorching / Facing Defect*).
2. **Konveksi (*Convection*)**:
   - Panas yang dihantarkan oleh aliran fluida udara panas (*airflow*) yang ditarik oleh blower/exhaust fan melewati celah-celah biji yang melayang di dalam drum.
   - Konveksi adalah metode transfer panas paling efisien, seragam, dan bersih. Drum roaster specialty modern (seperti Probat, Diedrich, Giesen, atau Suji) dirancang untuk memaksimalkan rasio konveksi hingga **70% – 80%**.
3. **Radiasi (*Radiation*)**:
   - Energi panas yang dipancarkan dalam bentuk gelombang inframerah dari burner api dan dinding drum roaster ke pusat tumpukan biji.

### Anatomi Mesin Drum Roaster Komersial
Sebuah mesin drum roaster profesional tersusun atas komponen vital berikut:
- **Hopper**: Corong atas tempat menakar green bean sebelum dimasukkan ke dalam drum.
- **Rotating Drum**: Tabung silinder berputar dari besi cor (*cast iron*) atau baja ganda (*double-walled steel*) yang dilengkapi sirip pengaduk spiral (*flighting blades*) agar biji terus teraduk konstan.
- **Burner (Sumber Panas)**: Pemanas berbasis gas LPG/alam bertekanan dengan kontrol jarum mikrometer presisi (*gas pressure gauge*), atau elemen inframerah.
- **Airflow Fan & Damper**: Kipas pengisap dan katup ventilasi untuk mengatur volume aliran udara panas yang melintasi drum dan membuang asap serta kulit ari (*chaff*).
- **Cyclone Chaff Collector**: Tabung pemisah sentrifugal di luar drum untuk mengumpulkan sekam kulit ari agar tidak terbakar dan menimbulkan asap pekat.
- **Cooling Tray**: Nampan pendingin melingkar di bagian depan mesin yang dilengkapi pengaduk mekanis dan hisapan kipas bawah berdaya raksasa untuk mendinginkan biji kopi dari suhu 200°C ke suhu ruang (< 30°C) dalam waktu **kurang dari 4 menit** demi menghentikan proses pematangan termal seketika.

### Instrumen Sensor Probe: Membaca Grafik Roasting
Roaster modern menghubungkan mesin ke software digital (seperti *Artisan* atau *Cropster*):
- **Bean Temperature (BT)**: Probe termokopel yang terbenam di dalam pusaran tumpukan biji kopi untuk membaca suhu aktual biji.
- **Environmental / Air Temperature (ET)**: Probe yang membaca suhu udara panas di ruang drum di atas biji.
- **Rate of Rise (RoR)**: Kecepatan kenaikan suhu biji kopi per menit (°C/menit). RoR adalah setir kendali roaster: RoR yang menurun mulus tanpa patahan (*smooth declining RoR*) adalah tanda kematangan rasa yang merata dan manis.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membongkar sains fisika pemanggangan kopi: 3 mode perpindahan panas (Konduksi, Konveksi, Radiasi), anatomi drum roaster komersial, peran airflow udara panas, dan pemantauan sensor probe termokopel.",
    key_takeaways: [
      "Roasting kopi adalah proses termodinamika di mana biji kopi hijau mentah diubah menjadi biji aromatik rapuh melalui transfer energi panas terkontrol.",
      "Tiga mode transfer panas: Konduksi (kontak langsung dengan dinding drum logam), Konveksi (aliran udara panas melalui exhaust fan), dan Radiasi (emisi gelombang panas inframerah).",
      "Mesin drum roaster specialty modern mengandalkan 70-80% panas konveksi udara untuk mencegah biji gosong lokal (scorching/facing).",
      "Probe termokopel membaca Bean Temperature (BT), Environmental Temperature (ET), dan laju kecepatan kenaikan suhu (Rate of Rise / RoR)."
],
  },
  {
    id: "les-f5-2",
    module_id: "mod-f5",
    title: "Kimia Fase Sangrai: Drying, Reaksi Maillard, Karamelisasi, & First Crack",
    content: `
# Kimia Fase Sangrai: Menyingkap Misteri First Crack

[DIAGRAM:roast-curve]

Biji kopi hijau mentah (*green bean*) memiliki rasa yang sangat tidak enak: keras seperti batu, hambar, pahit bergetah, dan berbau rumput basah. Di dalam mesin roaster, biji tersebut mengalami serangkaian reaksi kimia organik paling rumit di industri pangan.

[DIAGRAM:roast-curve]

### 1. Turning Point & Fase Pengeringan (*Drying Phase / Suhu Awal – 150°C*)
- **Turning Point**: Saat green bean dingin bersuhu ruang (25°C) dimasukkan ke dalam drum yang telah dipanaskan hingga 190°C, suhu probe BT akan turun drastis. Titik terendah sebelum suhu mulai merangkak naik kembali disebut *Turning Point* (biasanya tercapai pada menit 0:45 – 1:15).
- **Penguapan Air Bebas**: Green bean mengandung 10-12% air. Pada fase ini, energi panas digunakan untuk menguapkan air bebas di dalam matriks seluler biji. Biji berubah warna dari hijau giok menjadi kuning pucat (*Yellowing*), mengeluarkan aroma mirip jerami basah atau roti gandum panggang.

### 2. Fase Maillard (*Browning Phase / Suhu 130°C – 160°C*)
Reaksi Maillard adalah reaksi pencokelatan non-enzimatik paling krusial dalam keilmuan kuliner:
- **Mekanisme**: Gugus amina bebas dari asam amino dan protein bereaksi dengan gugus karbonil dari gula pereduksi.
- **Hasil Kimiawi**: Terbentuk ratusan senyawa volatil aroma baru:
  - **Pirazin**: Memberikan aroma gurih kacang panggang (*roasted hazelnut/almond*).
  - **Furan**: Memberikan sensasi aroma karamel dan manis panggangan.
  - **Melanoidin**: Pigmen makromolekul berwarna cokelat yang bertanggung jawab langsung atas ketebalan body (*mouthfeel*) dan kestabilan busa krema espresso.

### 3. Fase Karamelisasi Sukrosa (*Caramelization / Suhu 160°C – 195°C*)
Berbeda dengan Maillard yang melibatkan protein, karamelisasi murni adalah degradasi termal molekul gula karbohidrat (sukrosa):
- Sukrosa meleleh dan terurai menjadi senyawa rantai pendek yang kaya rasa: diasetil (aroma mentega gurih), maltol (aroma gula panggang), dan furanon.
- Jika fase ini dipanjangkan secara terencana, kopi akan memiliki tingkat kemanisan (*sweetness*) yang sangat legit seperti gula aren atau toffee.

### 4. Fenomena Fisika First Crack (*Ledakan Retakan Pertama / ~196°C*)
Saat suhu melampaui 190°C, tekanan uap air super-panas dan penumpukan gas karbon dioksida (CO₂) di dalam mikropori biji meningkat hingga mencapai **20 hingga 25 atmosfer**:
- Struktur dinding selulosa biji yang kaku tidak lagi mampu menahan tekanan gas internal.
- Dinding sel pecah secara serempak, melepaskan suara letupan renyah yang terdengar jelas di luar drum roaster: *"Pop!.. Pop!.. Tak!.."* mirip suara jagung meletup menjadi popcorn.
- **Perubahan Fisik**: Biji kopi membengkak hingga hampir dua kali lipat ukuran aslinya (*volumetric expansion*), kerapatannya menyusut, permukaan biji menghalus, dan saluran belahan tengah biji terbuka melepaskan sekam perak (*chaff*).

### 5. Fase Pengembangan (*Development Phase pasca First Crack*)
Rentang waktu dari detik pertama First Crack terdengar hingga tuas drum dibuka untuk mengeluarkan biji (*Drop*) disebut **Development Time**:
- Parameter ini dihitung sebagai **Development Time Ratio (DTR)**: persentase durasi development terhadap total waktu roasting (standar specialty berkisar antara **14% hingga 20%**).
- Di fase inilah roaster memutuskan takdir cangkir: menghentikannya segera untuk profil *Light Roast* berkarakter floral-buah, atau membiarkannya bergulir lebih jauh menuju *Medium Roast* berkarakter cokelat-karamel.

> [!TIP]
> Roasting yang gagal mengembangkan fase ini dengan matang (*under-developed*) akan meninggalkan rasa asam mentah berumput (*grassy/vegetative*); sedangkan membiarkannya terpanggang tanpa kenaikan panas yang cukup akan membuat kopi terasa hambar seperti roti tawar kering (*baked defect*).
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Menyelami transformasi kimia molekuler selama pemanggangan kopi: Fase Pengeringan (Drying), Reaksi Pencokelatan Maillard, Karamelisasi Sukrosa, ledakan fisik First Crack, dan pembentukan senyawa volatil aroma.",
    key_takeaways: [
      "Roasting dibagi menjadi 3 fase utama: Fase Pengeringan (Drying Phase), Fase Maillard (Browning Phase), dan Fase Pengembangan (Development Phase pasca First Crack).",
      "Reaksi Maillard terjadi antara asam amino dan gula pereduksi pada suhu 130°C - 160°C, melahirkan ratusan senyawa volatil aroma (pirazin, furan) dan melanoidin pembentuk body.",
      "Karamelisasi sukrosa dimulai sekitar 160°C - 170°C, mengubah rasa manis sederhana menjadi rasa manis kompleks (karamel, toffee, gula aren).",
      "First Crack adalah fenomena fisika di mana tekanan uap air dan gas CO2 di dalam sel biji memecahkan struktur dinding selulosa, ditandai suara letupan mirip popcorn."
],
  },
  {
    id: "les-f5-3",
    module_id: "mod-f5",
    title: "Spektrum Profil Roasting: Light, Medium, Dark Roast & Skala Agtron",
    content: `
# Spektrum Profil Roasting & Skala Agtron

Dalam dunia kopi komersial zaman dulu, penentuan tingkat sangrai hanya didasarkan pada perkiraan visual mata roaster (*"oh, warnanya sudah cokelat gelap"*). Di industri modern berstandar SCA, penentuan derajat sangrai (*Roast Degree*) diukur secara ilmiah menggunakan spektrofotometer inframerah bernama **Skala Agtron**.

| Parameter Kualitas | Light Roast (Sangrai Muda) | Medium Roast (Sangrai Sedang) | Dark Roast (Sangrai Gelap) |
| :--- | :--- | :--- | :--- |
| **Warna & Permukaan Biji** | Cokelat kayu manis, kering tanpa minyak | Cokelat susu keemasan, permukaan kering kesat | Hitam berkilau lapisan minyak (*surface oil*) |
| **Karakter Rasa Asam** | Sangat cerah, keasaman buah alami terjaga | Asam lembut seimbang, bulat halus | Keasaman habis terbakar total |
| **Karakter Rasa Manis & Pahit** | Manis floral madu ringan, rasa pahit minimal | Manis karamel & cokelat susu optimal | Pahit pekat dark chocolate, arang, & asap |
| **Rekomendasi Metode Seduh** | V60, Chemex, Aeropress (Filter Manual) | Espresso Modern, Americano, Filter Seimbang | Espresso Tradisional, Kopi Susu Aren |

### Spektrum Derajat Pemanggangan:

#### 1. Light Roast (Cinnamon to City Roast)
- **Suhu Drop**: Dikeluarkan sesaat setelah First Crack reda (sekitar 200°C – 205°C).
- **Ciri Fisik**: Biji berwarna cokelat terang kayu manis, kering tanpa kilap minyak, kerutan permukaan masih terlihat.
- **Karakter Cangkir**: Menonjolkan 100% potensi genetik origin tanah kebun: keasaman sitrat/malat cerah, aroma bunga segar, buah beri, teh bergamot, dengan body ringan seperti teh herbal.
- **Peruntukan**: Sangat ideal untuk seduhan manual (*filter pour-over* V60, Chemex, Kalita).

#### 2. Medium Roast (City+ to Full City Roast)
- **Suhu Drop**: Biji dipanggang melampaui First Crack, tepat sebelum letupan Second Crack dimulai (sekitar 210°C – 215°C).
- **Ciri Fisik**: Biji berwarna cokelat tua kemerahan seimbang, permukaan kering atau hanya menunjukkan bintik mikroskopis minyak.
- **Karakter Cangkir**: Titik temu harmoni paling disukai: keasaman buah mereda menjadi manis lembut, pembentukan karamel sukrosa mencapai puncaknya, aroma kakao dan hazelnut menguat, serta body menjadi bulat kental (*round medium body*).
- **Peruntukan**: Sangat serbaguna untuk espresso modern, Aeropress, dan kopi filter berbody padat.

#### 3. Dark Roast (Full City+ to French / Italian Roast)
- **Suhu Drop**: Biji didorong melewati **Second Crack** (suhu 225°C ke atas).
- **Ciri Fisik**: Biji berwarna cokelat sangat gelap kehitaman, permukaan basah berkilap tertutup lapisan minyak lipid yang bocor keluar, struktur biji sangat rapuh dan mudah remuk dengan jari.
- **Karakter Cangkir**: Seluruh karakter asam buah dan floral origin telah hancur terbakar panas. Rasa cangkir didominasi oleh senyawa pirolitik: pahit pekat arang (*ashy*), cokelat hitam 99%, kayu berasap (*smoky*), dan rasa karamel hangus.
- **Peruntukan**: Resep tradisional kopi tubruk pekat, espresso blend klasik Italia, atau menu kopi susu yang membutuhkan rasa pahit kuat untuk menembus manisnya kental manis.

### Standar Warna Agtron (SCA Roast Color Kit)
Untuk menghilangkan perdebatan subjektif, SCA menetapkan standar **Agtron** berbasis pengukuran spektrometri reflektansi inframerah:
1. Sampel biji sangrai digiling dengan tingkat kehalusan spesifik, diratakan di cawan ukur, dan ditembak sinar inframerah panjang gelombang 850 nm.
2. Skala angka Agtron berkisar dari **0 (arang hitam pekat)** hingga **100 (biji sangat terang belum matang)**.

| Skala Agtron (Ground) | Kategori Nama Roast | Karakter Rasa Utama |
|---|---|---|
| **> 85** | Very Light / Cinnamon | Sangat asam, grassy, buah mentah |
| **75 – 85** | Light / City | Asam buah tinggi, floral jernih, body teh |
| **65 – 74** | Medium-Light / City+ | Manis buah, seimbang, asam lembut |
| **55 – 64** | Medium / Full City | Karamel, cokelat susu, body bulat |
| **45 – 54** | Medium-Dark / Full City+ | Cokelat pahit, rempah pedas, body tebal |
| **< 40** | Dark / French / Italian | Arang gosong, pahit tajam, berminyak |

> [!TIP]
> Mengapa kopi sangrai gelap (*Dark Roast*) cepat sekali basi dan berbau tengik? Karena saat Second Crack memecahkan dinding sel biji, minyak lipid alami kopi bocor ke permukaan luar dan langsung terpapar oksigen udara, memicu reaksi oksidasi lipid (ranciditas) hanya dalam hitungan hari.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami spektrum derajat pemanggangan: Light Roast (Cinnamon/City), Medium Roast (City+/Full City), hingga Dark Roast (French/Italian). Mempelajari standarisasi warna objektif menggunakan skala Agtron spektrofotometri.",
    key_takeaways: [
      "Tingkat kematangan roasting menggeser keseimbangan rasa: Light roast menonjolkan keasaman asal kebun; Dark roast menonjolkan kepahitan karamelisasi dan arang roaster.",
      "Second Crack terjadi pada suhu ~225°C di mana struktur selulosa karbon terbakar rapuh dan minyak lipid terdorong keluar ke permukaan biji.",
      "Skala Agtron (SCA Roast Color Classification System) menggunakan pantulan cahaya inframerah untuk mengukur warna biji kopi bubuk secara objektif (skala angka 0 hingga 100).",
      "Kopi filter manual brew ideal disangrai pada rentang Light hingga Medium-Light (Agtron 70 - 85), sedangkan espresso ideal pada Medium (Agtron 55 - 65)."
],
  },
  {
    id: "les-f5-4",
    module_id: "mod-f5",
    title: "Pasca Roasting: Kinetika Degassing Emisi CO2, Oksidasi Lipid, & Waktu Resting",
    content: `
# Pasca Roasting: Kimia Degassing & Seni Resting

Banyak orang awam mengira bahwa semakin segar kopi diseduh—misalnya kopi yang baru 1 jam keluar dari drum roaster—maka rasanya akan semakin lezat. **Ini adalah kesalahpahaman fatal.**

Kopi yang baru saja disangrai belum siap untuk diseduh. Ia membutuhkan waktu istirahat biokimia yang dikenal sebagai **Resting Period**.

> ⏱️ **Kinetika Pelepasan Gas $\text{CO}_2$ & Jendela Rasa Terbaik (Resting Timeline):**
>
> * **Hari 0 s/d 3 (Fase Terlalu Segar):**  
>   Biji melepaskan gas $\text{CO}_2$ bertekanan tinggi. Saat diseduh, gelembung gas menghalangi kontak air dengan bubuk kopi (*channeling* parah); rasa cenderung bersoda tajam (*metallic/dry*).
>
> * **Hari 7 s/d 28 (Jendela Kenikmatan Puncak / PEAK FLAVOR WINDOW):**  
>   Tekanan gas internal telah stabil. Struktur pori biji terbuka sempurna untuk ekstraksi air; seluruh nada rasa manis, asam buah cerah, dan aroma floral mekar optimal.
>
> * **Hari 45+ (Fase Penurunan Oksidasi):**  
>   Senyawa volatil aromatik mulai teroksidasi oleh udara; cita rasa berangsur datar (*flat*) menuju tengik (*stale*).

### Kinetika Degassing: Pelepasan Gas CO₂
Selama reaksi termal pirolisis First Crack dan Karamelisasi, terbentuk sejumlah masif gas **Karbon Dioksida (CO₂)** dan senyawa aromatik volatil di dalam matriks selulosa berpori biji kopi. Dalam 1 kilogram biji kopi yang baru disangrai, terkandung hingga **8 sampai 12 liter gas CO₂**.

Setelah biji didinginkan, gas ini mulai berdifusi keluar dari mikropori secara perlahan—sebuah fenomena kinetika gas yang disebut **Degassing**:
- Laju emisi degassing berlangsung sangat agresif pada **24 hingga 72 jam pertama**.
- Emisi gas kemudian melandai stabil selama beberapa minggu berikutnya.

### Mengapa Kopi Terlalu Segar Menghasilkan Rasa Buruk?
Jika Anda memaksakan diri menyeduh kopi yang baru disangrai kemarin:
1. **Di Meja Seduh Filter (V60)**: Saat air panas menyentuh bubuk, gas CO₂ keluar meledak-ledak membentuk kubah blooming busa kasar yang tak terkendali. Gelembung gas ini menciptakan lapisan pelindung (*barrier*) yang menghalangi air menyentuh permukaan partikel bubuk secara merata. Hasilnya adalah ekstraksi yang tidak seragam (*channeling*) dengan rasa asam tajam kering yang menusuk tenggorokan.
2. **Di Mesin Espresso**: Tekanan 9 bar memampatkan gas CO₂ ke dalam cairan. Hasilnya adalah krema yang sangat tebal berbusa gelembung besar (*fizzy foam*) mirip busa minuman bersoda yang pecah dan lenyap dalam waktu 30 detik, menyisakan cairan espresso yang berasa sangat pahit pedas dan hambar.

### Fungsi Katup Satu Arah (*One-Way Degassing Valve*)
Jika Anda melihat bulatan kecil berlubang jarum di bagian depan kantong kemasan kopi specialty:
- Katup ini bukan untuk Anda pencet dan cium aromanya di rak toko!
- Katup ini mengandung membran diafragma karet elastis satu arah (*one-way valve*).
- **Fungsi Utama**: Membiarkan desakan gas CO₂ dari dalam kantong keluar agar kantong tidak meledak kembung seperti balon; sekaligus **menghalangi 100% molekul gas oksigen (O_2) dari luar agar tidak masuk** ke dalam kemasan dan membuat minyak kopi teroksidasi tengik.

### Tabel Panduan Resting Ideal CherryEdu

| Metode Penyeduhan | Waktu Resting Minimal | Rentang Waktu Terbaik (*Peak Flavor*) |
|---|---|---|
| **Manual Brew (V60, Chemex, Kalita)** | 5 – 7 hari | Hari ke-7 hingga Hari ke-28 pasca sangrai |
| **Aeropress & French Press** | 4 – 5 hari | Hari ke-5 hingga Hari ke-25 pasca sangrai |
| **Espresso Single Origin Light-Med** | 10 – 14 hari | Hari ke-12 hingga Hari ke-35 pasca sangrai |
| **Espresso Blend Komersial Medium** | 7 – 10 hari | Hari ke-10 hingga Hari ke-30 pasca sangrai |
| **Kopi Tubruk Tradisional** | 3 – 5 hari | Hari ke-5 hingga Hari ke-20 pasca sangrai |

> [!IMPORTANT]
> **Penyimpanan yang Benar**: Simpan biji kopi di tempat sejuk, kering, terhindar dari paparan sinar matahari langsung, dan di dalam wadah kedap udara bersuhu ruang (18°C – 24°C). Jangan pernah menyimpan biji kopi di dalam kulkas (*chiller*) rumah karena kelembapan dingin dan bau makanan kulkas akan diserap oleh pori-pori biji kopi.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami fenomena krusial pasca pemanggangan: desorpsi emisi gas karbon dioksida (Degassing), fungsi katup satu arah (degassing valve) pada kantong kemasan, serta tabel rekomendasi waktu istirahat (Resting Period) untuk seduh filter vs mesin espresso.",
    key_takeaways: [
      "Biji kopi yang baru keluar dari roaster drum terperangkap hingga 10 liter gas CO2 per kilogram kopi.",
      "Menyeduh kopi yang terlalu segar (freshly roasted < 48 jam) menghasilkan ekstraksi yang kacau dan rasa kering astringent akibat turbulensi gelembung gas CO2 yang memblokir kontak air dengan bubuk.",
      "Katup satu arah (One-Way Degassing Valve) pada kemasan kopi berfungsi mengeluarkan gas CO2 internal tanpa membiarkan oksigen luar masuk.",
      "Waktu resting ideal: 5 - 7 hari untuk seduhan manual pour-over filter; dan 10 - 18 hari untuk kalibrasi mesin espresso komersial."
],
  },
  {
    id: "les-f6-1",
    module_id: "mod-f6",
    title: "Kimia Pelarut Ekstraksi: Mengapa Air Menyusun 98.5% Secangkir Kopi",
    content: `
# Kimia Pelarut: Mengapa Air Menyusun 98.5% Kopi

Anda bisa membeli biji kopi juara dunia termahal berharga jutaan rupiah, menggilingnya dengan grinder presisi seharga puluhan juta, dan menyeduhnya dengan corong Hario V60 titanium. Namun jika air yang Anda gunakan berasal dari kran sumur berbau besi atau air isi ulang murah tanpa mineral seimbang, seduhan Anda akan berasa datar, hambar, atau pahit mengeringkan lidah.

### Anatomi Komposisi Secangkir Kopi
Mari kita bedah secara matematis apa isi cairan di dalam cangkir kopi Anda:

> ☕ **Komposisi Kimiawi Cairan Secangkir Kopi Seduh:**
>
> * **98.5% – 98.8% AIR SEDUH (Pelarut / Solvent):**  
>   Molekul $\text{H}_2\text{O}$ murni yang membawa muatan ionik mineral kation Magnesium ($\text{Mg}^{2+}$), Kalsium ($\text{Ca}^{2+}$), dan anion penyangga Bikarbonat ($\text{HCO}_3^-$).
>
> * **Hanya 1.2% – 1.5% SENYAWA TERLARUT KOPI (Solute / TDS):**  
>   Asam sitrat, asam malat, kafein murni, minyak lipid aromatik, trigonelin, karamel sukrosa, dan melanoidin.

Bahkan pada secangkir **espresso** kental yang berkrema tebal sekalipun, kandungan airnya masih mencapai **88% hingga 92%**; sisanya 8-12% adalah padatan terlarut (*Total Dissolved Solids* / TDS).

### Fisika Molekul Air: Sang Pelarut Polar
Molekul air (H₂O) tersusun atas satu atom oksigen yang berikatan kovalen dengan dua atom hidrogen pada sudut ikatan **104.5°**.
- Karena atom oksigen memiliki keelektronegatifan yang jauh lebih tinggi dibanding hidrogen, elektron ikatan tertarik lebih dekat ke arah oksigen.
- Ini menciptakan **momen dipol permanen**: sisi oksigen memiliki muatan negatif parsial (delta^-), sedangkan sisi kedua hidrogen memiliki muatan positif parsial (delta^+).

Struktur dipol polar ini menjadikan air sebagai **"Pelarut Universal"** (*Universal Solvent*):
- Sisi positif hidrogen menarik senyawa bermuatan negatif pada kopi (seperti asam sitrat, asam malat, dan asam klorogenat).
- Sisi negatif oksigen menarik senyawa bermuatan positif.

### Mitos Air Murni: Mengapa Air 0 PPM / Distilasi Gagal?
Banyak barista pemula beranggapan: *"Jika air kran kotor itu buruk, maka air paling murni di dunia (Air Demineral / Distilasi Murni / Pure Reverse Osmosis 0 ppm) pastilah yang terbaik!"*

Ini adalah anggapan yang keliru secara kimia ekstraksi:
- Air murni dengan TDS 0 ppm memang sangat lapar, tetapi ia **tidak memiliki kation mineral bermuatan ganda** (seperti Kalsium Ca²⁺ dan Magnesium Mg²⁺).
- Tanpa ion mineral ini, air murni gagal mengikat senyawa rasa yang memiliki berat molekul tinggi (seperti senyawa aromatik buah dan karamel).
- Hasil seduhan dengan air 0 ppm: kopi akan terasa sangat asam tajam menusuk, kopong di tengah (*hollow*), kehilangan body manis, dan meninggalkan rasa getir hambar di belakang tenggorokan.

> [!IMPORTANT]
> **Kunci Sukses Barista**: Menyeduh kopi bukan sekadar membasahi bubuk, melainkan proses ekstraksi selektif di mana ion-ion mineral terlarut di dalam air bertindak sebagai "tangan perekat mikroskopis" yang mencengkeram senyawa rasa lezat dari pori bubuk kopi dan membawanya larut ke dalam cangkir.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami fakta mendasar ekstraksi: secangkir kopi filter terdiri atas 98.5% air dan hanya 1.5% padatan kopi terlarut (TDS). Mempelajari struktur molekul polar air (H2O) dan mengapa air adalah pelarut universal bagi rasa kopi.",
    key_takeaways: [
      "Secangkir kopi filter seduh manual tersusun atas 98.5% - 98.8% air murni; bahkan espresso kental sekalipun mengandung 88% - 90% air.",
      "Air (H2O) adalah molekul polar dengan muatan positif parsial pada atom Hidrogen dan muatan negatif parsial pada atom Oksigen, menjadikannya pelarut polar yang luar biasa kuat.",
      "Air murni tanpa mineral (seperti air murni distilasi atau pure RO 0 ppm) adalah pelarut yang buruk karena tidak memiliki kation mineral untuk mengikat senyawa rasa beraroma.",
      "Kualitas secangkir kopi ditentukan sama kuatnya oleh komposisi kimia air yang Anda tuangkan ke dalam ketel seduh."
],
  },
  {
    id: "les-f6-2",
    module_id: "mod-f6",
    title: "Parameter Kritis Air Standar SCA: TDS, Total Hardness, Alkalinitas, & pH",
    content: `
# Parameter Kritis Air Standar SCA

[DIAGRAM:water-chemistry]

Untuk memastikan kompetisi seduh dan evaluasi cupping di seluruh dunia memiliki standar rasa yang seragam, *Specialty Coffee Association* (SCA) merumuskan panduan ilmiah spesifikasi air seduh (**SCA Water Quality Standard**).

[DIAGRAM:water-chemistry]

### Membedah 4 Parameter Kunci:

#### 1. Total Dissolved Solids (TDS / Satuan: ppm atau mg/L)
TDS adalah ukuran total seluruh mineral anorganik, garam, dan logam yang terlarut di dalam air:
- Diukur secara instan menggunakan konduktivitas listrik (*EC Meter*).
- **TDS Terlalu Rendah (< 50 ppm)**: Ekstraksi agresif tidak terkontrol namun miskin rasa, asam tajam menusuk, body tipis.
- **TDS Terlalu Tinggi (> 300 ppm)**: Air sudah "penuh sesak" oleh mineral bawaan sehingga ruang kosong untuk melarutkan rasa kopi sangat terbatas. Ekstraksi menjadi mampat (*under-extracted*), berasa kotor, berkapur, dan merusak elemen pemanas mesin espresso dengan kerak kapur tebal.

#### 2. Total Hardness (Kekerasan Total / Satuan: ppm CaCO₃ atau °dGH)
Total Hardness adalah konsentrasi gabungan ion logam divalen bermuatan +2, terutama **Kalsium (Ca²⁺)** dan **Magnesium (Mg²⁺)**:
- Ion-ion inilah yang bertindak sebagai "cakar ekstraksi" untuk menarik asam buah, sukrosa, dan minyak aromatik dari bubuk kopi.
- Kekerasan ideal berada di kisaran **60 – 120 ppm**.

#### 3. Alkalinitas / Buffer Asam (Satuan: ppm CaCO₃ atau °dKH)
Ini adalah parameter kimiawi yang paling sering disalahpahami oleh barista. Alkalinitas **BUKANLAH** pH air!
- **Alkalinitas** adalah kapasitas kemampuan air untuk menetralkan asam (*acid-buffering capacity*), yang terutama ditentukan oleh konsentrasi ion **Bikarbonat (HCO₃⁻)**.
- **Dampak Kritis pada Rasa Kopi**:
  - Kopi seduh memiliki keasaman alami dengan pH sekitar 4.8 – 5.2.
  - **Jika Alkalinitas Terlalu Tinggi (> 90 ppm)**: Ion bikarbonat yang melimpah akan menelan dan membunuh seluruh keasaman buah alami kopi. Kopi Kenya atau Gayo yang seharusnya beraroma jeruk cerah akan berubah rasa menjadi hambar, datar (*flat*), dan membosankan layaknya air cucian beras.
  - **Jika Alkalinitas Terlalu Rendah (< 20 ppm)**: Air tidak memiliki penyangga asam sama sekali. Keasaman kopi tidak terkendali dan terasa sangat masam menusuk (*sour, vinegary, sharp*) yang menyiksa lambung.

#### 4. Tingkat Keasaman (pH)
Derajat keasaman awal air sebelum kontak dengan kopi harus berada di titik netral seimbang (**pH 6.8 – 7.2**):
- Air asam (pH < 6.5) akan mempercepat korosi tembaga boiler mesin espresso.
- Air basa (pH > 8.0) akan menumpulkan persepsi manis di lidah.

> [!TIP]
> Barista profesional menguji air seduh mereka setiap pekan menggunakan kit tetes titrasi cairan reagen akurat (*GH & KH Liquid Test Kit*), bukan hanya mengandalkan pulpen TDS murah.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membedah standar resmi kualitas air Specialty Coffee Association (SCA Water Standard): Total Dissolved Solids (TDS), Total Hardness (Kekerasan Total), Alkalinity Buffer, dan pH balance untuk mencegah kerak mesin dan ekstraksi optimal.",
    key_takeaways: [
      "Standar Emas Air Seduh SCA: TDS 75 - 250 ppm (Target ideal: 150 ppm), pH 6.5 - 7.5 (Target ideal: 7.0 netral).",
      "Total Hardness (Kekerasan Total) mengukur konsentrasi kation kalsium dan magnesium yang bertugas menarik senyawa rasa (Target: 50 - 175 ppm CaCO3).",
      "Alkalinitas (Alkalinity Buffer) mengukur konsentrasi anion bikarbonat (HCO3-) yang bertindak sebagai penyangga asam (Target: 40 - 75 ppm CaCO3).",
      "Jika alkalinitas terlalu tinggi (> 100 ppm), seluruh keasaman buah alami kopi akan dinetralkan menjadi hambar seperti kapur; jika terlalu rendah (< 20 ppm), kopi akan berasa asam cuka tajam."
],
  },
  {
    id: "les-f6-3",
    module_id: "mod-f6",
    title: "Pertarungan Kation: Magnesium (Mg2+) vs Kalsium (Ca2+) dalam Ekstraksi Rasa",
    content: `
# Pertarungan Kation: Magnesium vs Kalsium

[DIAGRAM:water-chemistry]

Pada tahun 2014, sebuah penelitian fisika kuantum komputasi yang diterbitkan oleh kimiawan Universitas Bath, **Dr. Christopher Hendon**, bersama juara barista Inggris, **Maxwell Colonna-Dashwood**, merevolusi industri specialty coffee selamanya melalui buku legendaris: *"Water for Coffee"*.

Mereka membuktikan secara matematis bahwa tidak semua mineral diciptakan setara dalam mengekstrak rasa kopi. Dua kation utama dalam air—**Magnesium (Mg²⁺)** dan **Kalsium (Ca²⁺)**—bekerja dengan cara yang sangat berbeda.

| Parameter Kation Logam | Kation Magnesium ($\text{Mg}^{2+}$) | Kation Kalsium ($\text{Ca}^{2+}$) |
| :--- | :--- | :--- |
| **Jari-Jari Ionik** | Kecil ($0.72\text{ \AA}$) | Lebih besar ($1.00\text{ \AA}$) |
| **Kerapatan Muatan Listrik** | Sangat padat berkonsentrasi tinggi | Lebih renggang terdistribusi |
| **Daya Ikat Senyawa Rasa** | Kuat mengikat senyawa asam buah sitrat/malat & nada floral | Kuat mengikat senyawa bodi, gula karamel, & cokelat |
| **Keamanan untuk Mesin Espresso** | **Sangat Ramah Mesin** (Garam magnesium sangat mudah larut) | **Waspada Kerak Kapur** (Membentuk endapan batu kapur $\text{CaCO}_3$) |

### Fisika Kuantum Ikatan Mineral
Mengapa ion mineral dibutuhkan untuk mengekstrak kopi? Senyawa volatil aroma kopi (seperti asam klorogenat, asam sitrat, pirazin, dan furaneol) kaya akan atom oksigen yang bermuatan elektronegatif.
- Ion mineral bermuatan positif (+2) bertindak sebagai jembatan perekat antara molekul air dan molekul rasa kopi.

### Keunggulan Sang Juara: Magnesium (Mg²⁺)
Karena jari-jari atom magnesium jauh lebih kecil dibanding kalsium, muatan +2 pada magnesium terkonsentrasi dalam volume ruang yang sangat padat (*high charge density*):
- Magnesium memiliki energi ikatan termodinamika yang jauh lebih tinggi terhadap molekul asam organik dan ester buah.
- Air yang kaya akan ion Magnesium akan menghasilkan seduhan kopi dengan **aroma buah yang sangat cerah, keasaman hidup yang bersih, dan wangi bunga yang semerbak**.
- **Kabar Baik bagi Pemilik Kafe**: Senyawa magnesium karbonat memiliki tingkat kelarutan yang jauh lebih tinggi dibanding kalsium karbonat, sehingga **Magnesium tidak mudah mengendap menjadi kerak batu kapur yang menyumbat pipa mesin espresso**.

### Peran Kalsium (Ca²⁺) & Bahaya Limescale
Kalsium adalah ion mineral paling umum yang ditemukan di air sumur dan air PDAM tanah kapur (seperti di Yogyakarta, sebagian Jawa Tengah, dan Bali):
- Kalsium sangat efektif menarik senyawa berbobot molekul besar yang menyumbang rasa manis karamel dan ketebalan body (*mouthfeel*).
- **Mala Petaka Mesin Espresso (*Limescale Disaster*)**: Ketika air kaya Kalsium bertemu dengan ion Bikarbonat di dalam boiler mesin espresso bersuhu di atas 93°C:

> ⚗️ **Reaksi Kimia Pembentukan Kerak Kapur Boiler:**
> **Ca²⁺ + 2HCO₃⁻ + Panas (Δ) → CaCO₃ (Kerak Putih Mengendap) + H₂O + CO₂**

  Reaksi ini memicu pengendapan kristal padat **Kalsium Karbonat (CaCO₃)** berwarna putih kapur yang membatu. Kerak kapur ini akan menyelimuti elemen pemanas, menyumbat lubang semprot gicleur berdiameter 0.6 mm, merusak flowmeter, dan menyebabkan kerusakan mesin bernilai jutaan rupiah.

### Rasio Kation Formula Air Kompetisi
Dalam kejuaraan *World Brewers Cup*, para barista dunia meracik air kustom mereka sendiri dengan rasio mineral terhitung:
- **Magnesium : Kalsium** disetel pada perbandingan **2 : 1** atau **3 : 1**.
- Formulasi ini memberikan kecerahan rasa buah maksimal dari Magnesium, dengan sedikit bobot body karamel dari Kalsium, tanpa risiko merusak peralatan seduh.

> [!TIP]
> Produk remineralisasi populer seperti *Third Wave Water* atau konsentrat mineral *Lotus Coffee Water* memanfaatkan sains ini dengan menyediakan garam Magnesium Klorida (MgCl_2) dan Magnesium Sulfat (MgSO₄) murni untuk dilarutkan ke dalam air distilasi.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Membongkar penelitian sains buku terobosan 'Water for Coffee' karya Christopher Hendon & Maxwell Colonna-Dashwood: perbandingan afinitas termodinamika ion Magnesium (ekstraktor senyawa buah) vs ion Kalsium (ekstraktor senyawa manis & pembentuk kerak boiler).",
    key_takeaways: [
      "Ion Kalsium (Ca2+) dan Magnesium (Mg2+) memiliki muatan sama (+2), namun jari-jari ionik Magnesium jauh lebih kecil sehingga densitas muatannya lebih padat.",
      "Magnesium (Mg2+) memiliki afinitas ikatan yang jauh lebih kuat terhadap senyawa volatil pembentuk rasa buah dan keasaman sitrat/malat kopi.",
      "Kalsium (Ca2+) berikatan efektif dengan senyawa manis karamel dan body, namun membawa risiko pembentukan kerak kalsium karbonat (limescale) pada elemen pemanas mesin.",
      "Formulasi air seduh kompetisi modern menargetkan rasio Magnesium terhadap Kalsium sebesar 2:1 atau 3:1."
],
  },
  {
    id: "les-f6-4",
    module_id: "mod-f6",
    title: "Solusi Filtrasi Bar Kopi: Memilih RO, Blending Valve, & Remineralisasi",
    content: `
# Solusi Filtrasi Bar Kopi Komersial

Bagi pemilik kedai kopi specialty dan konsultan kafe, air bukan lagi urusan dapur belakang semata; air adalah investasi modal paling krusial yang melindungi mesin espresso seharga ratusan juta rupiah sekaligus penentu reputasi rasa kopi di mata pelanggan.

> 🚰 **Skema Alur Sistem Filtrasi Air Bertingkat Kedai Kopi:**
>
> 1. **Air Sumber (Kran / PDAM / Sumur Bor):**  
>    Masuk ke sistem pengolahan awal.
>
> 2. **Tahap 1 • Filter Sedimen Spun (5 Micron):**  
>    Menyaring partikel fisik tersuspensi, pasir pipa ledeng, lumut, dan karat besi.
>
> 3. **Tahap 2 • Filter Karbon Blok Aktif (CTO Block):**  
>    Menyerap senyawa klorin, kaporit, pestisida, dan bau kimiawi asing yang merusak rasa kopi.
>
> 4. **Tahap 3 • Membran Reverse Osmosis (RO) & Remineralisasi:**  
>    Air dimurnikan hingga bebas mineral keras, lalu diinjeksikan kembali konsentrat Magnesium & Bikarbonat murni pada rasio ideal SCA (130–150 ppm) sebelum dialirkan ke mesin espresso komersial.

### 4 Tingkatan Sistem Filtrasi Komersial:

#### 1. Filter Mekanis Sedimen (Pre-Filter Spun Polypropylene)
- Menggunakan pori mikro 1 hingga 5 mikron.
- Berfungsi menangkap partikel fisik kasar seperti serpihan karat pipa PDAM, lumpur tanah, dan pasir sumur agar tidak merusak pompa rotari mesin espresso.

#### 2. Filter Karbon Aktif (*Carbon Block / CTO*)
- Klorin dan kaporit yang digunakan PDAM untuk membunuh bakteri adalah racun mematikan bagi rasa kopi. Klorin bereaksi dengan fenol kopi menghasilkan senyawa *klorofenol* yang berbau obat kimia rumah sakit.
- Karbon aktif berbasis tempurung kelapa menyerap 99% kaporit, trihalometana, dan bau tidak sedap.

#### 3. Water Softener / Ion Exchange Resin (Pelunak Air)
- Menggunakan tabung resin sintetis yang dimuati ion Natrium (Na^+).
- Saat air sadah melintas, resin menukar kation Kalsium (Ca²⁺) dan Magnesium (Mg²⁺) dengan kation Natrium (Na^+).
- **Kelebihan**: Mencegah pembentukan kerak kapur mesin secara efektif.
- **Kelemahan**: Menghilangkan seluruh Magnesium yang dibutuhkan untuk mengekstrak rasa asam buah kopi specialty, sehingga kopi sering berasa sedikit asin gurih dan datar.

#### 4. Reverse Osmosis (RO) dengan Remineralisasi (Pilihan Terbaik Specialty)
Inilah konfigurasi standar industri kedai kopi specialty modern di seluruh dunia:
1. Air bertekanan tinggi didorong melewati membran semipermeabel poliamida berpori **0.0001 mikron**.
2. Membran membuang 95% hingga 98% seluruh mineral terlarut, menghasilkan air murni berkadar TDS 10 – 20 ppm.
3. Air murni ini kemudian dialirkan melalui:
   - **Bypass Blending Valve**: Katup presisi yang mencampurkan kembali sebagian kecil air hasil filter karbon bersih ke air RO hingga mencapai target **130 – 150 ppm**.
   - Atau menggunakan **Remineralization Cartridge (seperti BWT Bestmax Premium)** yang secara khusus menyuntikkan ion **Magnesium murni** ke dalam air RO tanpa menambahkan ion Kalsium pembentuk kerak.

### Checklist Pemeliharaan Harian & Mingguan Barista
- **Pengecekan TDS Harian**: Gunakan instrumen TDS terkalibrasi setiap pagi saat membuka bar. Catat di bar ledger: jika TDS melonjak di atas 200 ppm atau anjlok di bawah 70 ppm, segera periksa sistem filtrasi.
- **Uji Kaporit / Klorin Mingguan**: Teteskan cairan penguji ortotolidin (*Chlorine Test Dropper*) pada air kran bar. Jika air berubah warna kuning, filter karbon telah jenuh dan wajib diganti segera.
- **Penggantian Rutin Kartrid Filter**: Ganti sedimen setiap 3 bulan, karbon blok setiap 6 bulan, dan membran RO setiap 12 hingga 24 bulan sesuai volume liter air yang terpakai.

> [!TIP]
> Jangan pernah menghemat biaya pada sistem filtrasi air! Biaya penggantian boiler mesin espresso yang pecah akibat kerak kalsium bisa mencapai 30% dari harga beli mesin itu sendiri.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Panduan teknis memilih dan mendesain instalasi pengolahan air bar komersial: Sediment filter, Carbon Block, Pertukaran Ion (Water Softener), Mesin Reverse Osmosis (RO) dengan Blending Valve, dan Sistem Remineralisasi Kustom.",
    key_takeaways: [
      "Air kran mentah (tap water) di Indonesia tidak boleh langsung dihubungkan ke mesin espresso karena mengandung klorin, sedimen pasir, dan kekerasan mineral tidak terkontrol.",
      "Filter Karbon Aktif wajib dipasang untuk menyerap klorin dan kaporit yang dapat menimbulkan rasa kimia beracun pada kopi.",
      "Sistem Reverse Osmosis (RO) menyaring 95-98% seluruh mineral hingga mendekati 10-20 ppm, kemudian dicampur kembali via Blending Valve atau Remineralization Cartridge ke target 130-150 ppm.",
      "Manajemen air yang tepat menghemat puluhan juta rupiah biaya perbaikan mesin dan menjamin konsistensi rasa kopi setiap hari."
],
  },
  {
    id: "les-f7-1",
    module_id: "mod-f7",
    title: "Fisiologi Pengecapan: Gustasi Lidah, Olfaksi Ortronasal, & Jalur Retronasal",
    content: `
# Fisiologi Pengecapan: Bagaimana Manusia Merasakan Kopi

Saat seorang Q Grader menyeruput sesendok kopi dan berkata: *"Saya merasakan blueberry liar, bunga melati, madu hutan, dan cokelat hitam"*, apakah lidahnya benar-benar mengecap buah blueberry?

Jawabannya adalah: **TIDAK**. Secara biologis, lidah manusia tidak pernah bisa mengecap buah blueberry. Yang mengecap blueberry adalah **sistem indra penciuman (olfaktori)** di dalam rongga hidung Anda.

| Sistem Sensorik Tubuh | Organ & Reseptor | Karakter yang Dideteksi |
| :--- | :--- | :--- |
| **Gustasi (Rasa di Lidah)** | Kuncup Pengecap Lidah (Taste Buds) | Hanya 5 rasa dasar: **Manis, Asam, Asin, Pahit, Umami** |
| **Olveksi (Aroma di Hidung)** | Epitelium Rongga Hidung (Ortronasal & Retronasal) | **Ribuan senyawa aromatik volatil**: Melati, persik, vanila, kacang sangrai |
| **Trigeminal (Tekstur Mulut)** | Saraf Sensorik Rongga Mulut (Trigeminal Nerve) | Sensasi fisik: Suhu panas/dingin, kekentalan (*viscosity*), kesat astringent |

### Mitos Kuno Peta Lidah (*The Tongue Map Myth*)
Buku-buku sekolah zaman dulu sering menampilkan diagram keliru yang mengklaim: *"Ujung lidah hanya mengecap manis, sisi samping mengecap asam, dan pangkal belakang mengecap pahit."*
- Neurosains modern telah membantah mitos ini sejak tahun 1974.
- Setiap kuncup pengecap (*taste bud*) pada papila lidah manusia memiliki 50 hingga 100 sel reseptor yang mampu mendeteksi **seluruh kelima rasa dasar** di semua area lidah secara bersamaan.

### Dua Jalur Penciuman Aroma: Ortronasal vs Retronasal
Manusia memiliki dua rute penciuman yang bekerja secara berbeda:
1. **Olfaksi Ortronasal (*Orthonasal Olfaction*)**:
   - Terjadi saat Anda mendekatkan hidung ke cangkir kopi dan menghirup uapnya secara langsung dari luar melalui lubang hidung.
   - Di formulir SCA Cupping, ini dinilai pada fase **Fragrance** (bubuk kopi kering) dan **Aroma** (kopi basah yang baru disiram air panas).
2. **Olfaksi Retronasal (*Retronasal Olfaction*)**:
   - Inilah keajaiban sensori sejati! Ketika Anda memasukkan cairan kopi ke dalam mulut, suhu mulut (37°C) menghangatkan cairan kopi dan melepaskan senyawa volatil yang mudah menguap.
   - Saat Anda mengunyah atau menelan cairan, uap aroma tersebut terdorong naik melalui saluran nasofaring di bagian belakang tenggorokan menuju **epitel olfaktori** di dasar tengkorak otak.
   - Otak memproses sinyal gustasi lidah (asam manis) dan sinyal olfaktori retronasal (ester buah) secara terpadu, melahirkan persepsi rasa kompleks: *"Aha! Ini rasa buah strawberry!"*

### Mengapa Barista & Q Grader Menyeruput Keras (*Slurping*)?
Saat sesi cupping, Anda akan mendengar suara seruputan yang sangat keras: *"Szzzhhhluuurpp!"*
- Ini bukan perilaku tidak sopan di meja makan, melainkan teknik fisika **atomisasi cairan**.
- Menyeruput kopi bersama tarikan udara berkecepatan tinggi memecah sesendok cairan kopi menjadi jutaan butiran kabut mikro aerosol.
- Kabut aerosol ini menyebar merata ke seluruh 10.000 kuncup pengecap di permukaan lidah, sekaligus menguapkan senyawa volatil aromatik secara instan langsung ke reseptor retronasal di langit-langit hidung belakang.

> [!TIP]
> **Eksperimen Sendiri di Rumah**: Ambil sebutir permen rasa strawberry atau jeruk. Jepit hidung Anda rapat-rapat dengan jari, lalu kunyah permen tersebut di dalam mulut. Anda hanya akan merasakan sensasi manis dan asam datar tanpa rasa buah sama sekali. Begitu Anda melepaskan jepitan hidung dan menghembuskan nafas, seketika itu juga aroma strawberry akan meledak di benak Anda! Itulah bukti nyata kekuatan olfaksi retronasal.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami anatomi indra manusia dalam mengevaluasi rasa kopi: membantah mitos kuno peta lidah, membedakan 5 rasa dasar (Gustasi) dengan ribuan aroma volatil (Olfaksi), serta keajaiban persepsi rasa melalui jalur Retronasal.",
    key_takeaways: [
      "Mitos Peta Lidah (Tongue Map) tahun 1901 terbukti keliru secara neurosains: seluruh area lidah yang memiliki kuncup pengecap mampu merasakan kelima rasa dasar secara merata.",
      "Rasa dasar (Gustatory) hanya ada 5: Manis (Sweet), Asam (Sour), Asin (Salty), Pahit (Bitter), dan Umami (Gurih).",
      "Lebih dari 80% kenikmatan 'rasa' (flavor) kopi sebenarnya adalah persepsi bau (aroma) yang dihantarkan melalui saluran nafas belakang rongga mulut (Retronasal Olfaction).",
      "Menyeruput kopi dengan kencang (slurping) mengatomisasi cairan kopi menjadi kabut aerosol yang melesat ke epitel olfaktori hidung."
],
  },
  {
    id: "les-f7-2",
    module_id: "mod-f7",
    title: "Protokol Resmi Cupping SCA: Rasio Seduh, Breaking Crust, Skim, & Slurp",
    content: `
# Protokol Resmi Cupping SCA (Standard Cupping Protocol)

Mengapa para ahli kopi profesional tidak mengevaluasi kualitas kopi menggunakan mesin espresso atau alat V60? Karena alat-alat tersebut memasukkan variabel subjektif barista (kecepatan tuang, kertas filter, tekanan pompa, suhu grup head).

Untuk mengevaluasi biji kopi secara objektif dan adil, dunia menggunakan metode uji laboratorium standar global yang disebut **SCA Cupping Protocol**.

| Waktu Menit | Tahapan Protokol Cupping Resmi SCA | Tindakan Teknis & Aspek Evaluasi |
| :--- | :--- | :--- |
| **00:00** | Penuangan Air Panas 93°C | Tuang air panas ke 8.25g bubuk kopi (Rasio 1:18.18); mulai ekstraksi immersi |
| **00:00 – 04:00** | Pembentukan Kerak (*Crust*) | Diamkan tenang tanpa diaduk; partikel bubuk kopi naik membentuk lapisan pelindung |
| **04:00** | **Ritual Breaking the Crust** | Dorong kerak bubuk 3x dengan punggung sendok; hirup uap aroma basah sedalamnya |
| **04:30 – 05:00** | Pembersihan Busa (*Skimming*) | Ambil sisa busa dan partikel terapung dengan 2 sendok cupping secara melingkar |
| **08:00 – 10:00** | **Slurp Panas Pertama (~70°C)** | Evaluasi cita rasa dominan (*Flavor*) dan panjang jejak rasa di mulut (*Aftertaste*) |
| **10:00 – 15:00** | **Slurp Hangat Kedua (~60°C)** | Evaluasi kejernihan rasa asam (*Acidity*), ketebalan tekstur (*Body*), dan *Balance* |
| **15:00 – 25:00** | **Slurp Dingin Ketiga (~35°C)** | Uji kemurnian cangkir (*Clean Cup*), rasa manis alami, keseragaman (*Uniformity*) |

### Spesifikasi Alat & Parameter Cupping Standar:
- **Mangkok Cupping (*Cupping Bowls*)**: Terbuat dari kaca tempered atau keramik tebal, kapasitas volume 200 – 260 ml, dengan diameter mulut mangkok 75 – 85 mm.
- **Rasio Seduh (*Brewing Ratio*)**: **8.25 gram kopi** per **150 ml air** (toleransi ± 0.25 gram).
- **Tingkat Sangrai Sampel**: Disangrai pada level *Light-Medium* (Agtron gourmet score 63 ± 1), disangrai dalam kurun waktu 8 – 24 jam sebelum sesi cupping dimulai.
- **Ukuran Gilingan (*Grind Size*)**: Sedikit lebih kasar dari gilingan filter kertas biasa (70-75% partikel lolos ayakan standar US Standard Size 20 mesh).
- **Suhu Air Seduh**: Tepat **93.0°C** (200^circF) saat dituangkan, menggunakan air berstandar SCA (TDS 125-175 ppm).

### Langkah-langkah Protokol Cupping:

#### 1. Evaluasi Fragrance Kering (Menit 0)
Setiap sampel kopi disiapkan minimal **5 mangkok identik** untuk menguji keseragaman (*uniformity*).
- Sebelum air dituangkan, goyangkan mangkok perlahan dan cium aroma bubuk kopi kering (*Dry Fragrance*).
- Catat intensitas wangi bunga, buah, atau rempah pada form penilaian.

#### 2. Penuangan Air Panas & Pembentukan Kerak (Menit 0:00 – 04:00)
- Tuang air 93°C langsung ke tengah mangkok hingga batas bibir atas dengan cepat dan stabil, memastikan seluruh bubuk kopi terbasahi sempurna tanpa diaduk.
- Gelembung gas CO2 akan mengangkat bubuk kopi ke permukaan, membentuk lapisan kerak tebal mengapung yang disebut **Crust**.
- Biarkan mangkok terekstraksi secara tenang selama tepat **4 menit**.

#### 3. Ritual Memecah Kerak (*Breaking the Crust* / Menit 04:00)
- Tepat di menit ke-4, pegang sendok cupping bersudut 45 derajat.
- Dekatkan hidung Anda sedekat mungkin (sekitar 2 cm di atas permukaan mangkok).
- Gunakan punggung sendok untuk mendorong kerak mengapung ke arah belakang mangkok sebanyak **tepat 3 kali dorongan lembut** tanpa mengaduk bagian dasar mangkok.
- Hirup uap aroma basah (*Wet Aroma*) yang meledak keluar dari balik kerak. Bilas sendok cupping di gelas air panas bersih sebelum pindah ke mangkok berikutnya.

#### 4. Membersihkan Busa Mengapung (*Skimming*)
- Gunakan dua sendok cupping secara bersamaan untuk menyendok dan membuang seluruh sisa busa putih dan partikel bubuk mengapung di permukaan cangkir hingga cairan kopi di bawahnya terlihat jernih mengkilap.

#### 5. Sesi Menyeruput (*The Tasting Slurp* / Menit 8 s/d 25)
- Jangan mencicipi kopi saat masih panas mendidih di atas 75°C karena lidah akan terbakar mati rasa.
- Mulai mencicipi pada suhu hangat (70°C) hingga dingin (35°C).
- Celupkan sendok cupping, ambil cairan kopi sekitar 6-8 ml, dekatkan ke bibir, lalu seruput kencang (*slurp*) ke dalam mulut.
- Kopi yang berkualitas prima akan terasa semakin manis, bersih, dan memikat saat suhunya mendingin. Jika kopi memiliki cacat rasa tersembunyi, cacat tersebut akan terbongkar telanjang saat cangkir dingin.

> [!IMPORTANT]
> **Etika Higienitas Meja Cupping**: Dilarang mencelupkan sendok cupping bekas mulut langsung ke dalam mangkok sampel kopi berikutnya (*No Double Dipping*). Setiap selesai menyeruput, bilas sendok di gelas air panas yang telah disediakan, lalu keringkan di atas kain lap bersih sebelum menciduk sampel berikutnya.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Mempelajari protokol standar laboratorium cupping resmi Specialty Coffee Association: spesifikasi mangkok cupping, rasio emas 8.25g per 150ml air, suhu 93\u00b0C, ritual memecah kerak (Breaking Crust) pada menit ke-4, membersihkan busa (Skimming), dan etika higienitas meja uji.",
    key_takeaways: [
      "Protokol Cupping SCA adalah metode uji sensori standar internasional yang dirancang untuk mengeliminasi seluruh variabel alat seduh (metode immersi murni).",
      "Rasio Standar SCA: 8.25 gram bubuk kopi per 150 ml air (atau rasio 0.055 g/ml) dengan gilingan sedikit lebih kasar dari gilingan filter kertas.",
      "Ritual Breaking the Crust dilakukan tepat pada menit ke-4: dorong kerak mengapung 3 kali dengan punggung sendok cupping sambil mendekatkan hidung sedekat mungkin.",
      "Pencicipan pertama dimulai saat suhu cangkir turun ke 70°C, dilanjutkan pada suhu 60°C (evaluasi body & balance), dan suhu dingin 35°C (evaluasi sweetness & clean cup)."
],
  },
  {
    id: "les-f7-3",
    module_id: "mod-f7",
    title: "Membaca SCA Flavor Wheel & Klasifikasi Asam Organik Kopi",
    content: `
# SCA Flavor Wheel & Klasifikasi Asam Organik

Pernahkah Anda melihat diagram lingkaran roda berwarna-warni yang dipajang di dinding kafe specialty? Itulah **SCA Coffee Taster's Flavor Wheel**, instrumen leksikon sensori paling ikonik dalam industri kopi dunia.

Diperbarui secara masif pada tahun 2016 melalui kolaborasi bersejarah antara *Specialty Coffee Association* (SCA) dan *World Coffee Research* (WCR), roda rasa ini bukan sekadar karya seni visual, melainkan sebuah kamus ilmiah yang memiliki standar kalibrasi kimiawi di baliknya.

> 🎨 **Struktur 3 Tingkatan Hierarki Roda Rasa Kopi SCA & WCR:**
>
> * **Tingkat 1 • Lingkaran Dalam (Kategori Primer / Makro):**  
>   **FRUITY**  
>   ↳ **Tingkat 2 • Lingkaran Tengah (Sub-Kategori):**  
>     **CITRUS FRUIT**  
>     ↳ **Tingkat 3 • Lingkaran Luar (Deskriptor Sensorik Spesifik):**  
>       **Grapefruit**, **Lemon**, **Lime**, **Orange**
>
> * **Tingkat 1:** **FLORAL**  
>   ↳ **Tingkat 2:** **BLACK TEA**  
>     ↳ **Tingkat 3:** **Jasmine**, **Chamomile**, **Rose**
>
> * **Tingkat 1:** **SWEET**  
>   ↳ **Tingkat 2:** **BROWN SUGAR**  
>     ↳ **Tingkat 3:** **Caramel**, **Honey**, **Molasses**

### Cara Benar Menggunakan SCA Flavor Wheel
Banyak pemula melakukan kesalahan dengan langsung melompat mencari kata rumit di lingkaran terluar. Cara yang benar adalah membaca **dari dalam ke luar (*from center to rim*)**:
1. **Langkah 1 (Pusat Roda)**: Saat menyeruput kopi, tanyakan pada indra Anda: *"Secara garis besar, sensasi rasa apa yang paling dominan?"* Apakah itu **Fruity (Buahan)**, **Floral (Bunga)**, **Sweet (Manis)**, atau **Nutty/Cocoa (Kacang/Cokelat)**?
2. **Langkah 2 (Lingkaran Tengah)**: Jika Anda merasakan buah (*Fruity*), buah kelompok apa? Apakah buah jeruk (*Citrus*), buah berry liar (*Berry*), buah kering (*Dried Fruit*), atau buah berbiji (*Stone Fruit*)?
3. **Langkah 3 (Lingkaran Luar)**: Jika Anda memilih jeruk (*Citrus*), jeruk apa yang paling mendekati? Apakah tajam menusuk seperti **Lemon**, manis bulat seperti **Mandarin Orange (Jeruk Keprok)**, atau sedikit bergetir elegan seperti **Grapefruit**?

### Klasifikasi 6 Asam Organik dalam Specialty Coffee
Keasaman (*Acidity*) adalah pilar paling dihargai dalam specialty coffee. Keasaman memberi kecerahan, struktur rasa, dan kesegaran. Ada 6 senyawa asam utama dalam secangkir kopi:

#### 1. Asam Sitrat (*Citric Acid*)
- **Karakter Rasa**: Asam segar buah sitrus (lemon, jeruk nipis, jeruk keprok). Terasa tajam menyegarkan di kedua sisi samping lidah depan.
- **Spesimen Origin**: Bali Kintamani Washed, Aceh Gayo Pantan Musara Washed, Kenya Nyeri.

#### 2. Asam Malat (*Malic Acid*)
- **Karakter Rasa**: Asam buah apel hijau (Granny Smith), buah pir renyah, dan buah persik. Memicu produksi air liur yang berlimpah (*salivating / juicy mouthfeel*).
- **Spesimen Origin**: Kopi Ijen Raung Bondowoso, Kerinci Kayu Aro, Kolombia Huila.

#### 3. Asam Fosfat (*Phosphoric Acid*)
- **Karakter Rasa**: Secara kimia bukan asam organik melainkan asam mineral anorganik yang diserap pohon dari tanah abu vulkanik. Memberikan sensasi kesegaran berkilau di langit-langit mulut menyerupai desisan minuman berkarbonasi (*sparkling effervescence, cola-like acidity*).
- **Spesimen Origin**: Flores Manggarai Jurung Washed, Rwanda Nyamagabe.

#### 4. Asam Laktat (*Lactic Acid*)
- **Karakter Rasa**: Asam lembut dan membulat menyerupai yogurt tawar atau mentega susu (*buttery mouthfeel*). Terbentuk dari aktivitas bakteri asam laktat selama proses fermentasi Honey dan Anaerobik terkontrol.
- **Spesimen Origin**: Java Puntang Anaerobic Honey, Kintamani Lactic Maceration.

#### 5. Asam Asetat (*Acetic Acid*)
- **Karakter Rasa**: Asam cuka dapur. Dalam konsentrasi rendah (< 0.5%), memberi dimensi rasa anggur merah (*winey*) yang menyenangkan. Jika berlebih, menghasilkan rasa asam cuka menusuk yang merusak cangkir (*over-ferment defect*).

#### 6. Asam Kuinat & Klorogenat (*Quinic & Chlorogenic Acids*)
- **Karakter Rasa**: Asam klorogenat alami terurai saat pemanggangan menjadi asam quinat. Pada sangraian gelap (*dark roast*), asam quinat memberikan rasa pahit terbakar dan sensasi kesat mengeringkan lidah (*astringent*).

> [!TIP]
> Latihlah lidah Anda dengan membandingkan larutan air mineral yang diberi sejumput asam sitrat kristal murni dengan larutan air yang diberi perasan apel hijau (asam malat). Kepekaan mengenali perbedaan asam ini adalah kompetensi utama seorang calon Q Grader tersertifikasi.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Panduan komprehensif menavigasi Roda Rasa Kopi SCA / WCR Sensory Lexicon: dari lingkaran dalam (kategori primer) hingga lingkaran luar (deskriptor spesifik). Memahami 6 profil asam organik vital pembentuk karakter rasa specialty coffee.",
    key_takeaways: [
      "SCA Coffee Taster's Flavor Wheel disusun bersama World Coffee Research (WCR) berdasarkan riset sensorik ilmiah multi-tahun.",
      "Cara membaca roda rasa: selalu mulai dari lingkaran paling dalam (kategori makro umum) menuju lingkaran luar (deskriptor mikro spesifik).",
      "Keasaman (Acidity) pada kopi disumbangkan oleh 6 asam organik utama: Asam Sitrat (jeruk), Asam Malat (apel), Asam Fosfat (sparkling), Asam Laktat (creamy), Asam Asetat (anggur), dan Asam Kuinat (pahit sangrai).",
      "Leksikon sensori berfungsi sebagai kamus bahasa universal agar barista di Jakarta, roaster di Tokyo, dan petani di Gayo memiliki pemahaman rasa yang presisi dan seragam."
],
  },
  {
    id: "les-f7-4",
    module_id: "mod-f7",
    title: "Identifikasi Defek Rasa (Cacat Kopi) & Lembar Penilaian Skor 80+",
    content: `
# Identifikasi Defek Rasa & SCA Cupping Form

Seorang pencicip kopi profesional tidak hanya bertugas memuji kopi yang enak; tugas yang jauh lebih krusial adalah **menjadi detektif cacat rasa (Defect Hunter)** untuk mencegah kopi bermutu buruk lolos ke pasar konsumen.

### 10 Atribut Formulir Cupping SCA (Skala 100 Poin)
Pada formulir resmi SCA, skor cupping dihitung dari penjumlahan 10 komponen:

| Atribut Skaler Kualitas (Skor 6.00 – 9.75) | Atribut Integritas Mutu (Maksimal 10 Poin) |
| :--- | :--- |
| 1. **Fragrance / Aroma** (Uji Kering & Basah) | 7. **Uniformity** (Keseragaman 5 mangkok: 2 poin/mangkok) |
| 2. **Flavor** (Kombinasi rasa & aroma di mulut) | 8. **Clean Cup** (Kemurnian tanpa cacat: 2 poin/mangkok) |
| 3. **Aftertaste** (Panjang & kebersihan jejak rasa) | 9. **Sweetness** (Kemanisan alami: 2 poin/mangkok) |
| 4. **Acidity** (Kualitas kecerahan rasa asam) | 10. **Overall** (Penilaian holistik juri Q Grader) |
| 5. **Body** (Ketebalan viskositas dan kelembutan) | *Ambang batas Specialty Grade: Skor Total &ge; 80.00* |
| 6. **Balance** (Harmoni keseimbangan semua unsur) | *Skor 85+: Excellent • Skor 90+: Outstanding* |

### Memahami Tiga Atribut Integritas (The Big Three):
Dalam 1 set sampel yang terdiri atas 5 mangkok:
1. **Uniformity (Keseragaman)**: Setiap mangkok bernilai 2 poin. Jika seluruh 5 mangkok terasa identik sama, bernilai 10 poin penuh. Jika ada 1 mangkok yang rasanya melenceng, nilainya dipotong 2 poin.
2. **Clean Cup (Kebersihan Rasa)**: Menilai ketiadaan sensasi kotor, langu, berdebu, atau rasa obat dari tegukan awal hingga aftertaste akhir. Setiap mangkok bersih bernilai 2 poin.
3. **Sweetness (Kemanisan Alami)**: Menguji apakah karbohidrat gula buah terekstraksi optimal. Setiap mangkok manis bernilai 2 poin.

### Klasifikasi Defek Sensori: Taint vs Fault
Jika juri menemukan cacat rasa di salah satu mangkok:
- **Taint (Cacat Ringan)**: Aroma asing yang mengganggu namun tidak merusak keseluruhan cangkir.
  - **Penalti**: Dipotong **2 poin** per mangkok yang tercemar.
- **Fault (Cacat Berat / Fatal)**: Cacat rasa yang sangat menjijikkan dan merusak total cangkir (misal: bau busuk bangkai, jamur beracun, rasa minyak tanah).
  - **Penalti**: Dipotong **4 poin** per mangkok yang tercemar.

> ⚖️ **Rumus Perhitungan Penalti Cacat Cangkir Cupping Resmi:**
>
> $$\text{Total Skor Akhir} = \text{Skor Mentah Kumulatif} - (\text{Jumlah Mangkok Cacat} \times \text{Nilai Penalti 2 atau 4})$$
>
> * **Taint (Cacat Ringan / Noda Rasa):** Pengurangan **2 Poin** per mangkok terdampak.
> * **Fault (Cacat Berat / Rusak Total):** Pengurangan **4 Poin** per mangkok terdampak (misalnya rasa kapang busuk atau bahan kimia).

### Kamus 6 Defek Rasa Kritis di Meja Cupping:

#### 1. Quaker / Underripe (Biji Mentah)
- **Ciri Sensori**: Rasa kacang tanah mentah, hambar, kering seperti mengunyah serutan kayu atau karton kardus.
- **Penyebab**: Ceri hijau yang ikut terpetik dan gagal mengalami reaksi karamelisasi saat di-roast.

#### 2. Full Sour / Stinker (Biji Busuk Asam)
- **Ciri Sensori**: Aroma busuk menusuk hidung menyerupai cuka tengik, buah busuk berbelatung, atau aroma sampah basah.
- **Penyebab**: Ceri yang membusuk di tanah atau over-fermentasi bakteri anaerobik di dalam tangki cuci yang airnya tidak pernah diganti.

#### 3. Moldy / Musty (Biji Berjamur)
- **Ciri Sensori**: Bau apek menyengat menyerupai pakaian basah yang disimpan lama di lemari lembap, rasa tanah lumpur kotor.
- **Penyebab**: Jamur *Aspergillus* atau *Penicillium* yang tumbuh akibat penjemuran gabah yang terlalu tebal di musim hujan atau disimpan di gudang basah.

#### 4. Potato Defect (Cacat Kentang Mentah)
- **Ciri Sensori**: Satu biji saja bisa merusak satu teko seduhan dengan aroma pekat persis seperti mengupas kulit kentang mentah busuk yang berlumur tanah basah.
- **Penyebab**: Bakteri kimia yang masuk ke buah kopi melalui gigitan serangga kepik *Antestia* (sangat endemik di kawasan Danau Kivu, Rwanda, dan Burundi).

#### 5. Phenolic / Rio Defect (Bau Obat Kimia)
- **Ciri Sensori**: Bau zat kimia fenol, antiseptik rumah sakit, atau minyak tanah yang sangat tajam menyengat.
- **Penyebab**: Kerusakan biologis ceri yang mengering di pohon bersama infeksi mikroba liar.

#### 6. Baggy / Past Crop (Bau Karung Goni Usang)
- **Ciri Sensori**: Hilangnya seluruh aroma buah dan rasa manis, digantikan oleh aroma serat karung goni tua dan debu gudang.
- **Penyebab**: Biji kopi hijau berusia tua (lebih dari 12 bulan) yang disimpan tanpa kantong hermetis *GrainPro* sehingga lipid alaminya teroksidasi oleh udara ruangan.

> [!IMPORTANT]
> **Kualifikasi Specialty Coffee**: Kopi dengan skor cupping 80.0 ke atas otomatis menyandang predikat *Specialty Grade*. Namun, jika pada sampel ditemukan satu saja mangkok yang terkena **Fault (Cacat Berat)**, kopi tersebut seketika **DIDISKUALIFIKASI** dari kategori specialty coffee berapapun tingginya skor atribut lainnya!
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 4,
    is_free: true,
    is_published: true,
    created_at: "2026-08-01T00:00:00Z",
    summary: "Memahami anatomi formulir penilaian resmi SCA Cupping Form: menafsirkan 10 atribut skor, menghitung pengurangan penalti cacat rasa (Taint vs Fault), serta membedakan aneka aroma defek (Quaker, Stinker, Moldy, Potato Defect, Phenol, Baggy).",
    key_takeaways: [
      "Formulir SCA Cupping Form mengevaluasi 10 atribut sensori dengan skor 6.00 hingga 9.75 per atribut.",
      "Tiga atribut bersifat absolut biner (bernilai 10 poin jika sempurna): Uniformity (Keseragaman), Clean Cup (Kebersihan), dan Sweetness (Kemanisan).",
      "Defek rasa di meja cupping diklasifikasikan menjadi Taint (cacat ringan: pengurang 2 poin per mangkok) dan Fault (cacat berat fatal: pengurang 4 poin per mangkok).",
      "Mengenali aroma defek (seperti biji berjamur, biji busuk stinker, atau bau karung goni lama) adalah tugas utama quality control untuk melindungi konsumen."
],
  },
  {
    id: "les-h3-1",
    module_id: "mod-h3",
    title: "Resep Standar V60: Rasio Emas 1:15 & Panduan Tiga Kali Tuang",
    content: `
# Resep Standar V60 Pemula: Rasio Emas 1:15

[DIAGRAM:brewing-control-chart]

Menyeduh dengan Hario V60 di rumah adalah salah satu pengalaman paling menenangkan sekaligus menghasilkan secangkir kopi yang sangat aromatik.

### Formula Resep Standar CherryEdu:
- **Kopi**: 15 gram (Gilingan Medium-Fine, sedikit lebih halus dari garam meja)
- **Air**: 225 gram (Rasio 1:15)
- **Suhu Air**: 90°C – 92°C
- **Target Waktu Seduh**: 2 menit 15 detik – 2 menit 30 detik

### Langkah-langkah Seduh:
1. **Bilas Kertas Filter**: Bilas kertas filter dengan air panas untuk menghilangkan bau kertas dan menghangatkan server. Buang air bilasan.
2. **Tuangan 1 (Bloom - 0:00 s/d 0:45)**:
   - Tuang 45 gram air secara melingkar perlahan dari tengah ke luar.
   - Biarkan kopi mekar (*blooming*) selama 45 detik untuk melepas gas CO2.
3. **Tuangan 2 (Body - 0:45 s/d 1:20)**:
   - Tuang air hingga mencapai 140 gram. Jaga ketinggian air tetap stabil.
4. **Tuangan 3 (Finish - 1:20 s/d 2:15)**:
   - Tuang sisa air perlahan hingga timbangan menunjukkan tepat 225 gram.
   - Biarkan air menetes habis. Aduk server melingkar sebelum disajikan ke cangkir.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Resep V60 15g ke 225g air dengan teknik 3 kali tuangan dan fase blooming 45 detik.",
    key_takeaways: [
      "Rasio 1:15 (15g kopi : 225g air) menghasilkan cup profile yang padat dan kaya rasa.",
      "Blooming 45 detik melepaskan gas CO2 sehingga air dapat mengekstrak gula kopi optimal.",
      "Selalu bilas kertas filter sebelum mulai menyeduh."
    ],
    brew_recipe: {
      "method": "Hario V60 01/02",
      "dose": "15 g",
      "water": "225 g",
      "ratio": "1:15",
      "temperature": "91°C",
      "grind_size": "Medium-Fine",
      "brew_time": "2m 15s",
      "steps": [
        "Bilas filter paper dengan air panas lalu buang airnya.",
        "Masukkan 15g bubuk kopi, ratakan bed kopi.",
        "0:00 - Tuang 45g air untuk blooming, tunggu 45 detik.",
        "0:45 - Tuang perlahan melingkar hingga timbangan 140g.",
        "1:20 - Tuang sisa air hingga tepat 225g.",
        "Tunggu hingga air tiris sempurna pada 2:15 - 2:30. Aduk dan nikmati!"
      ]
    },
  },
  {
    id: "les-h1-1",
    module_id: "mod-h1",
    title: "Memulai Home Brewing: Dekonstruksi Informasi Label Kemasan Kopi Specialty",
    content: `
# Memulai Home Brewing: Cara Membaca Label Kopi Specialty

Bagi pemula yang baru memasuki dunia specialty coffee, membaca label pada kantong biji sangrai sering kali terasa membingungkan karena penuh istilah asing. Mari kita bedah setiap elemen pentingnya.

---

### Anatomi Label Roastery Profesional:

> **CONTOH LABEL KEMASAN ROASTERY PROFESIONAL**:
> - **Origin**: Gayo Takengon, Aceh Tengah
> - **Varietas**: Ateng Super & Tim-Tim
> - **Elevasi**: 1.550 MDPL
> - **Proses**: Semi-Washed (Wet Hulled / Giling Basah)
> - **Profil Sangrai**: Light to Medium (Filter Profile)
> - **Tanggal Sangrai (Roast Date)**: 28 Agustus 2026
> - **Flavor Notes**: Cedarwood, Sweet Tobacco, Dark Molasses

1. **Origin / Single Origin**: Menunjukkan transparansi kebun. Semakin spesifik lokasinya (nama desa, koperasi, atau nama petani), semakin tinggi keterlacakan (*traceability*) dan mutu seleksinya.
2. **Elevasi (MDPL)**: Kopi di atas 1.400 MDPL memiliki biji lebih padat (*dense bean*) yang menghasilkan keasaman buah cerah dan kompleksitas rasa tinggi.
3. **Metode Proses**: Menjadi petunjuk utama profil rasa dasar:
   - *Washed*: Rasa sangat bersih (*clean*), segar, asam sitrus tajam.
   - *Natural*: Rasa sangat manis, pekat, aroma stroberi atau anggur matang.
   - *Wet Hulled*: Bodi sangat tebal, herbal, rempah, manis gula aren.
4. **Roast Date**: Selalu beli kopi dengan tanggal sangrai yang tertera jelas. Hindari kopi dengan tanggal kadaluarsa setahun tanpa mencantumkan kapan biji tersebut disangrai.
    `,
    content_type: 'text',
    duration_minutes: 10,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Panduan membaca asal kebun, varietas, elevasi MDPL, metode proses, dan tanggal sangrai pada kemasan specialty.",
    key_takeaways: [
      "Label specialty selalu mencantumkan asal wilayah, varietas, proses pasca-panen, dan tanggal sangrai.",
      "Ketinggian tanam (MDPL) berkorelasi langsung dengan kepadatan biji dan kejernihan asam buah.",
      "Pilihlah biji kopi yang berada di rentang 7 hingga 30 hari pasca tanggal sangrai (roast date)."
    ],
  },
  {
    id: "les-h2-1",
    module_id: "mod-h2",
    title: "Setup Alat Seduh Rumahan: Mengapa Burr Grinder Mengalahkan Mesin Jutaan",
    content: `
# Setup Alat Seduh Rumahan: Hierarki Prioritas Investasi

Banyak pemula mengira bahwa untuk menyeduh kopi nikmat di rumah, mereka harus membeli mesin espresso mahal. Dalam sains seduh, kenyataannya justru sebaliknya.

---

### Hierarki Investasi Alat Seduh Rumahan:

| Tingkat Prioritas | Alat Seduh | Alokasi Anggaran | Mengapa Wajib Didahulukan? |
|---|---|---|---|
| **Prioritas 1 (60% Budget)** | **Manual Burr Grinder Presisi** | Rp 800rb – Rp 2.5jt | Partikel seragam = ekstraksi rata tanpa debu lumpur penyebab pahit |
| **Prioritas 2 (20% Budget)** | **Timbangan Digital Timer (0.1g)** | Rp 150rb – Rp 350rb | Menjamin rasio kopi dan air konsisten presisi setiap pagi |
| **Prioritas 3 (15% Budget)** | **Ketel Leher Angsa (Gooseneck)** | Rp 180rb – Rp 500rb | Mengontrol kestabilan laju alir air tanpa memecah bed kopi |
| **Prioritas 4 (5% Budget)** | **Dripper (V60 Plastik / Aeropress)** | Rp 90rb – Rp 350rb | Dripper plastik murah justru memiliki stabilitas retensi panas tertinggi |

---

### Mengapa Burr Grinder Jauh Lebih Baik Dibanding Blade Grinder?

- **Blade Grinder (Mata Pisau Berputar)**:
  - Bekerja dengan memukul dan mencacah biji kopi secara acak seperti blender dapur.
  - Menghasilkan campuran partikel yang tidak seragam: serpihan bongkahan besar (*boulders*) bercampur dengan debu sangat halus (*fines*).
  - Saat diseduh: fines mengalami over-ekstraksi (pahit membakar) sementara boulders under-ekstraksi (asam hambar). Secangkir kopi terasa pahit sekaligus asam secara bersamaan!
- **Burr Grinder (Mata Penggiling Kerucut / Cakram)**:
  - Biji kopi digencet dan dipotong di antara dua cincin bergerigi presisi.
  - Menghasilkan partikel dengan distribusi ukuran yang seragam, menghasilkan ekstraksi manis, jernih, dan aromatik.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Hierarki alat seduh rumahan, perbandingan burr vs blade grinder, dan pentingnya timbangan akurasi 0.1g.",
    key_takeaways: [
      "Burr grinder adalah investasi terpenting bagi home brewer; keseragaman partikel menentukan kejernihan rasa.",
      "Blade grinder menghasilkan debu (fines) yang menyebabkan seduhan terasa pahit kesat.",
      "Dripper plastik murah (seperti Hario V60 plastik) memiliki stabilitas termal yang lebih baik dibanding keramik tebal dingin."
    ],
  },
  {
    id: "les-h5-1",
    module_id: "mod-h5",
    title: "Eksplorasi Lanjutan: Membedah Dinamika Seduhan Hario V60 vs Inverted Aeropress",
    content: `
# V60 vs Inverted Aeropress: Dua Paradigma Seduh di Rumah

Dua alat seduh paling populer di kalangan home brewer mewakili dua prinsip fisika ekstraksi yang sama sekali berbeda: **Perkolasi (*Percolation*)** versus **Imersi (*Immersion*)**.

---

### Matriks Perbandingan Karakter Seduh:

| Parameter | Hario V60 (Dripper Kerucut) | Aeropress (Metode Inverted) |
|---|---|---|
| **Prinsip Fisika** | **Perkolasi**: Air mengalir melewati bed kopi karena gaya gravitasi | **Imersi Penuh**: Bubuk kopi berendam total dalam air, lalu ditekan dengan pendorong piston |
| **Karakter Cangkir** | Sangat jernih (*clean*), asam buah tajam berkilau, aroma floral mekar | Bodi bulat, tebal, manis karamel menonjol, asam lebih lembut |
| **Toleransi Kesalahan** | Rendah: Cara menuang dan kestabilan aliran tangan mempengaruhi rasa | Sangat Tinggi: Kontak air merata, sulit gagal (*forgiving brewer*) |
| **Kertas Filter** | Filter kertas pori terbuka tipis | Filter kertas mikropori rapat, menahan minyak lipid |

---

### Resep Juara Aeropress Inverted (Metode Terbalik)

- **Kopi**: 16.0 gram (Gilingan Medium)
- **Air**: 200 gram air panas 88°C (Rasio 1:12.5)
- **Langkah-Langkah**:
  1. Pasang piston Aeropress terbalik pada angka 4. Masukkan kopi bubuk.
  2. Mulai timer. Tuang 200 gram air sekaligus dalam 20 detik.
  3. Aduk perlahan 3 kali putaran dengan spatula untuk memastikan seluruh bubuk terbasahi.
  4. Pasang cap filter yang sudah dibasahi.
  5. Pada menit **1:30**, balik Aeropress ke atas server secara mantap.
  6. Tekan piston secara perlahan selama 30 detik hingga terdengar suara mendesis halus (*hiss*). Hentikan tekanan!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Perbandingan fisika perkolasi V60 vs imersi Aeropress, serta resep teruji metode inverted.",
    key_takeaways: [
      "V60 menggunakan perkolasi gravitasi untuk menonjolkan kejernihan asam buah dan aroma bunga.",
      "Aeropress menggunakan imersi penuh yang sangat toleran terhadap ketidaksempurnaan gilingan.",
      "Hentikan tekanan pendorong Aeropress saat suara mendesis pertama terdengar untuk menghindari keluarnya tanin pahit."
    ],
  },
  {
    id: "les-h6-1",
    module_id: "mod-h6",
    title: "Sains Air Seduh Mandiri: Meracik Mineral Konsentrat Sederhana di Dapur",
    content: `
# Meracik Air Seduh Sendiri di Rumah (DIY Water Chemistry)

Pernahkah Anda menyeduh biji kopi yang sama dengan resep yang sama persis seperti di kafe langganan, namun rasanya hambar, berkapur, atau asam datar? Penyebab 90% kegagalan tersebut bukan pada tangan Anda, melainkan **kualitas air kran/air galon di rumah Anda**.

---

### Dua Senyawa Ajaib Dapur untuk Meracik Air Standar SCA:

Anda tidak perlu laboratorium mahal. Cukup beli dua bahan makanan murni yang tersedia di toko kue atau apotek:

1. **Baking Soda Murni / Natrium Bikarbonat (NaHCO₃)**:
   - Berfungsi sebagai **Penyangga Asam (*Alkalinity Buffer*)**.
   - Menjaga pH air tetap stabil di angka ~7.0 netral agar kopi tidak terasa pedih di lambung dan asam tidak terlalu menusuk.
2. **Garam Epsom Food-Grade / Magnesium Sulfat (MgSO_4 cdot 7H_2O)**:
   - Berfungsi sebagai **Penarik Rasa (*General Hardness*)**.
   - Ion kalsium dan magnesium mengikat partikel rasa manis gula kopi dan asam buah aromatik ke dalam molekul air.

---

### Resep 2 Botol Konsentrat Sederhana Barista Hustle:

- **Bahan Dasar**: Siapkan 1 galon air demineralisasi murni TDS 0 ppm (seperti Amidis atau Cleo murni).
- **Botol A (Konsentrat Buffer)**:
  - Larutkan **8.4 gram Baking Soda** ke dalam 1.000 gram air murni.
- **Botol B (Konsentrat Hardness)**:
  - Larutkan **24.6 gram Garam Epsom** ke dalam 1.000 gram air murni.

**Cara Pakai Setiap Pagi**:
Untuk membuat 1 Liter air seduh berstandar SCA:
Ambil 1 liter air murni baru, tambahkan **8.0 gram Botol A** dan **8.0 gram Botol B**. Kocok sebentar, dan air seduh terbaik siap digunakan di ketel pour-over Anda!
    `,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Sains rekayasa air di rumah menggunakan baking soda dan garam epsom untuk mencapai profil ekstraksi standar dunia.",
    key_takeaways: [
      "Air seduh menyusun 98.5% secangkir kopi; air galon yang terlalu banyak kalsium akan membuat kopi terasa kusam dan berkapur.",
      "Baking soda menyediakan kapasitas buffer untuk menyeimbangkan keasaman.",
      "Garam epsom menyumbang ion magnesium yang mengikat senyawa rasa manis buah kopi secara optimal."
    ],
  },
  {
    id: "les-h3-1",
    module_id: "mod-h3",
    title: "Seduhan Emas Pertama: Resep Master V60 1:15 & Identifikasi Under vs Over Extraction di Lidah",
    content: `
# Resep Master Seduhan V60 Rumahan & Kalibrasi Pengecapan Lidah

Membuat secangkir kopi pour-over yang nikmat di rumah tidak membutuhkan mistisme. Yang Anda perlukan adalah satu resep dasar yang kokoh dan kepekaan lidah untuk mendeteksi kapan kopi kurang terekstraksi (*under-extracted*) atau diekstrak berlebihan (*over-extracted*).

---

### Resep Master Seduh Rumahan (Rasio Emas 1:15):

Resep ini dirancang khusus untuk menghasilkan cangkir kopi yang manis, aromatik, dan mudah diulang setiap pagi:

- **Dosis Biji Kopi**: 15.0 gram (Gilingan Medium, seperti pasir laut halus).
- **Air Panas**: 225.0 gram pada suhu **91°C – 93°C**.
- **Total Waktu Seduh**: 2 menit 15 detik – 2 menit 30 detik.

> **JADWAL TUANGAN 3 TAHAP**:
> - **0:00 – 0:45 (Fase Mekar / Bloom)**: Tuang 45g air melingkar perlahan. Biarkan gas CO2 keluar.
> - **0:45 – 1:20 (Fase Ekstraksi Manis)**: Tuang stabil hingga timbangan mencapai 135g.
> - **1:20 – 2:15 (Fase Keseimbangan & Selesai)**: Tuang sisa air hingga tepat 225g. Angkat dripper saat air menetes lambat.

---

### Tabel Kalibrasi Rasa di Lidah Pemula:

Gunakan indra pengecap Anda untuk mengevaluasi hasil seduhan pagi ini:

| Kondisi Cangkir | Karakter Rasa di Lidah | Penyebab Teknis | Tindakan Koreksi Esok Hari |
|---|---|---|---|
| **Under-Extracted (Kurang Ekstraksi)** | Masam menyengat seperti lemon mentah, hambar di tengah, rasa cepat hilang, pipi depan terasa kering. | Gilingan terlalu kasar, air terlalu dingin, atau waktu seduh terlalu cepat. | **Haluskan gilingan** 2 klik atau naikkan suhu air 2°C. |
| **Over-Extracted (Kelebihan Ekstraksi)** | Pahit gosong menempel di langit-langit, getir seperti obat/arang, tenggorokan terasa sepet kering (*astringent*). | Gilingan terlalu halus, air terlalu panas, atau air macet (*clogging*). | **Kasarkan gilingan** 2 klik atau kurangi agitasi putaran. |
| **Ideal / Sweet Spot (Keseimbangan Sempurna)** | Rasa asam buah matang terasa menyegarkan, manis karamel bulat, bodi lembut, aftertaste tahan lama dan bersih. | Rasio, suhu, dan laju ekstraksi berada di titik optimum (18%–22% EY). | **Pertahankan resep** dan catat di buku jurnal Anda! |
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Resep emas V60 1:15 tiga tahap tuangan dan panduan mendeteksi rasa under vs over-extraction di lidah.",
    key_takeaways: [
      "Rasio 1:15 (15g kopi ke 225g air) menghasilkan seduhan rumahan yang seimbang dan aromatik.",
      "Rasa masam tajam dan hambar menandakan under-ekstraksi (butuh gilingan lebih halus).",
      "Rasa pahit kering menempel di tenggorokan menandakan over-ekstraksi (butuh gilingan lebih kasar)."
    ],
  },
  {
    id: "les-h4-1",
    module_id: "mod-h4",
    title: "Menebak Profil Rasa: Pengaruh Varietas Botani & Ketinggian MDPL pada Ekspektasi Seduh Rumahan",
    content: `
# Membaca Karakter Biji: Varietas Botani & Elevasi Kebun

Sebagai penikmat seduhan di rumah, Anda tidak perlu mencicipi kopi secara buta. Informasi varietas botani dan ketinggian tanam (MDPL) pada label kemasan sebenarnya adalah "peta bocoran rasa" yang sangat akurat.

---

### 1. Dampak Ketinggian Tanam (MDPL) terhadap Densitas Biji:

Ketinggian kebun tempat pohon kopi tumbuh menentukan seberapa lambat buah kopi matang:
- **Elevasi Sangat Tinggi (> 1.500 MDPL — contoh: Gayo Atas, Kerinci Kayu Aro)**:
  - Udara pegunungan yang dingin membuat ceri matang sangat lambat (memakan waktu 8–9 bulan).
  - Biji kopi menjadi sangat padat (*high density bean*) dan kaya akan asam malat serta sukrosa.
  - *Tips Seduh*: Biji padat memerlukan **suhu air seduh lebih panas (92°C – 94°C)** agar pori-pori biji dapat ditembus dan diekstrak maksimal.
- **Elevasi Menengah (1.100 – 1.400 MDPL — contoh: Toraja, Bali Kintamani)**:
  - Densitas biji sedang, menghasilkan keseimbangan rasa cokelat manis dan buah sitrus manis.
  - *Tips Seduh*: Suhu air moderat **90°C – 92°C**.

---

### 2. Memprediksi Karakter dari Varietas Kopi:

- **Typica & Varietas Kuno (Bergendal, Priangan)**:
  - Biji berukuran panjang dan elegan.
  - Menghasilkan cangkir dengan aroma floral melati, keasaman sitrus lembut, bodi teh yang bersih, dan manis tebu.
- **Bourbon (Red & Yellow Bourbon)**:
  - Terkenal di seluruh dunia karena kandungan glukosa alami yang tinggi.
  - Menghasilkan rasa manis karamel kental, aroma mentega, dan buah apel matang.
- **Geisha / Gesha**:
  - Mahakarya botani dengan aroma bunga melati, bergamot, teh earl grey, dan rasa buah persik (*peach*) yang sangat mekar.
- **Tim-Tim & Catimor (Ateng Super)**:
  - Memiliki genetik persilangan Robusta (Hibrido de Timor) yang membuat tanamannya kuat.
  - Menghasilkan bodi tebal mantap, rempah kayu manis, cedar, dan manis gula aren pekat.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Menghubungkan ketinggian kebun MDPL dan garis varietas botani untuk memprediksi rasa cangkir seduhan rumahan.",
    key_takeaways: [
      "Biji kopi dari ketinggian di atas 1.500 MDPL memiliki densitas keras dan memerlukan suhu seduh lebih tinggi (92-94°C).",
      "Garis varietas Typica dominan floral-sitrus bersih, sedangkan Bourbon dominan manis karamel pekat.",
      "Varietas lokal Ateng/Tim-Tim menyumbang bodi tebal rempah dan gula aren khas nusantara."
    ],
  },
  {
    id: "les-h7-1",
    module_id: "mod-h7",
    title: "Protokol Cupping Mandiri di Dapur: Membandingkan 2 Origin dengan 3 Mangkuk Sederhana",
    content: `
# Protokol Cupping Mandiri di Meja Dapur Rumah

Cupping bukan ritual sakral yang hanya boleh dilakukan oleh juri berlisensi Q-Grader. Ini adalah cara paling jujur dan objektif bagi penikmat kopi rumahan untuk membandingkan rasa dua biji kopi yang berbeda tanpa bias alat seduh atau filter kertas.

---

### Perlengkapan Sederhana di Dapur Anda:

Anda tidak memerlukan mangkok cupping resmi berharga mahal:
- 2 atau 3 gelas kaca atau cangkir keramik berukuran identik (kapasitas sekitar 180–200 ml).
- Sendok sup bulat (atau sendok makan biasa yang cekung).
- Timbangan digital dapur.
- Ketel air panas mendidih.
- Gelas berisi air hangat untuk membilas sendok di antara seruputan.

---

### Langkah Cupping 5 Babak (Protokol Rumah):

1. **Babak 1: Timbang & Giling Kasar (Dry Fragrance)**:
   - Timbang tepat **11.0 gram biji kopi** untuk cangkir berkapasitas 200 ml (rasio sekitar 1:18).
   - Giling dengan ukuran kasar (seperti garam laut kasar).
   - Dekatkan hidung ke cangkir saat bubuk kering, hirup aromanya (*Dry Fragrance*). Apakah tercium aroma kacang, buah, atau rempah?
2. **Babak 2: Tuang Air Panas Mendidih**:
   - Rebus air hingga 93°C – 95°C.
   - Tuangkan air panas langsung ke atas bubuk kopi secara agresif hingga cangkir penuh sampai ke bibir.
   - Jangan diaduk! Lapisan bubuk kopi akan mengambang membentuk kerak (*crust*).
3. **Babak 3: Menghirup Aroma Basah (Break Crust pada Menit ke-4)**:
   - Tepat di menit ke-04:00, dekatkan hidung Anda beberapa sentimeter di atas cangkir.
   - Gunakan punggung sendok untuk mendorong kerak bubuk kopi ke belakang sebanyak 3 kali secara lembut.
   - Uap aromatik yang terperangkap akan menyeruak ke hidung Anda (*Wet Aroma*).
4. **Babak 4: Bersihkan Buih (Skimming)**:
   - Gunakan dua sendok untuk membersihkan busa cokelat dan partikel yang mengapung di permukaan cangkir. Buang buih tersebut ke wadah terpisah.
5. **Babak 5: Seruput Keras (Slurping pada Menit ke-10 s/d 15)**:
   - Biarkan kopi mendingin hingga hangat-hangat kuku (sekitar 55°C – 60°C). Suhu ini aman bagi lidah dan membuka reseptor rasa manis.
   - Ambil sesendok cairan kopi, lalu seruput dengan cepat dan berbunyi keras (*slurp!*).
   - Menyeruput menyemprotkan cairan kopi menjadi partikel mikro kabut di rongga mulut sehingga aroma uap langsung terhubung ke saluran penciuman hidung (*retronasal perception*).
    `,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Langkah cupping praktis di meja makan dapur untuk mengkalibrasi dan membandingkan aroma serta rasa kopi tanpa filter kertas.",
    key_takeaways: [
      "Cupping menghilangkan bias kertas saring dan menyajikan profil rasa kopi apa adanya.",
      "Fase break crust di menit ke-4 melepaskan aroma volatil terdalam yang terperangkap di bawah kerak bubuk.",
      "Menyeruput kopi dengan keras (slurp) mendistribusikan kabut rasa ke seluruh papila lidah dan reseptor hidung."
    ],
  },
  {
    id: "les-h8-1",
    module_id: "mod-h8",
    title: "Eksperimen Variabel Seduh: Pengaruh Suhu Air (88°C vs 94°C), Agitasi Swirl, & Jurnal Seduh",
    content: `
# Laboratorium Eksperimen Rumahan: Suhu, Agitasi, & Jurnal Seduh

Daya tarik terbesar menyeduh kopi di rumah adalah kebebasan untuk bereksperimen. Dengan biji kopi yang sama persis, Anda bisa menciptakan dua cangkir dengan rasa yang bertolak belakang hanya dengan mengubah suhu air dan teknik agitasi.

---

### Eksperimen 1: Pertarungan Suhu Air (88°C vs 94°C):

Coba seduh 15 gram biji kopi yang sama menggunakan dua suhu ketel yang berbeda:
- **Suhu Dingin Moderat (88°C – 90°C)**:
  - *Sifat Pelarutan*: Asam buah sitrat dan gula organik larut dengan mudah, tetapi lipid berat dan tanin lambat terekstraksi.
  - *Karakter Cangkir*: Sangat jernih, keasaman buah terasa cerah, rasa manis lembut, bodi ringan seperti teh (*tea-like*), bebas dari rasa pahit getah.
  - *Ideal Untuk*: Kopi proses Natural fermentasi anaerobik atau biji sangrai agak gelap agar tidak pahit.
- **Suhu Panas Optimal (93°C – 95°C)**:
  - *Sifat Pelarutan*: Energi termal air tinggi mampu melarutkan senyawa polifenol dan selulosa yang tersembunyi di dalam biji keras.
  - *Karakter Cangkir*: Bodi lebih tebal, rasa manis karamel lebih pekat dan bulat, aftertaste lebih panjang.
  - *Ideal Untuk*: Kopi proses Washed dataran tinggi (>1.500 MDPL) yang berdensitas keras.

---

### Eksperimen 2: Agitasi Mekanis (Swirling vs Gentle Pouring):

Agitasi adalah energi gerak yang mengaduk bubuk kopi saat terendam air:
- **Tuangan Tenang Tanpa Swirl**:
  - Menghasilkan ekstraksi yang bersih dan laju aliran air yang lancar.
- **Agitasi Putaran Dripper (Swirl Agitation)**:
  - Memutar dripper membuat permukaan kopi menjadi rata horizontal (*flat bed*).
  - *Perhatian Penting*: Jangan memutar dripper terlalu kencang! Agitasi berlebihan menyebabkan butiran mikron sangat halus (*fines*) bermigrasi ke dasar filter kertas dan menyumbat pori-pori (*clogging*), membuat waktu seduh molor hingga 4 menit dan menyebabkan rasa getir sepet.

---

### Manfaat Menyimpan Buku Jurnal Seduh (Brew Journal):

Jangan mengandalkan ingatan! Catat 5 poin sederhana ini di buku saku atau ponsel Anda:
1. Nama Biji Kopi & Roastery
2. Ukuran Klik Grinder
3. Dosis Kopi : Total Air (misal 15g : 225g)
4. Suhu Air & Waktu Selesai
5. Catatan Rasa (misal: "sangat manis jeruk nipis, tapi agak sepet di ujung — besok giling 1 klik lebih kasar").
    `,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Eksperimen perbedaan suhu 88°C vs 94°C, bahaya fines clogging akibat swirling berlebih, dan format buku jurnal seduh.",
    key_takeaways: [
      "Suhu 88°C menonjolkan keasaman buah jernih; suhu 94°C mengekstrak bodi karamel lebih tebal.",
      "Swirling dripper yang terlalu kencang memicu migrasi fines yang menyumbat pori kertas saring.",
      "Mencatat parameter seduh di jurnal harian adalah cara tercepat mencapai konsistensi rasa."
    ],
  },
  {
    id: "les-h9-1",
    module_id: "mod-h9",
    title: "Kreasi Es Kopi Susu & Cold Brew Rumahan: Ekstraksi Dingin Konsentrat & Sirup Aren Organik",
    content: `
# Kreasi Es Kopi Susu & Cold Brew Rumahan Berkualitas Kafe

Banyak orang mengira es kopi susu nikmat hanya bisa dibuat menggunakan mesin espresso kafe jutaan rupiah. Nyatanya, dengan teknik perendaman dingin (*cold brew immersion*) yang tepat, Anda bisa meracik es kopi susu gula aren yang jauh lebih lembut dan ramah lambung di rumah.

---

### 1. Resep Konsentrat Cold Brew Rumahan (Rasio 1:8):

Perendaman air dingin selama belasan jam melarutkan gula dan minyak kopi tanpa mengekstrak asam klorogenat berlebih:

- **Takaran**: 100 gram biji kopi (gilingan kasar seperti garam dapur) : 800 ml air mineral dingin bersuhu ruang.
- **Wadah**: Toples kaca kedap udara (*mason jar* atau botol kaca).
- **Waktu Seduh**: Masukkan toples ke dalam kulkas selama **16 hingga 18 jam**.
- **Penyaringan**: Saring konsentrat menggunakan saringan kain halus atau kertas filter V60 untuk memisahkan ampas bubuk.
- **Daya Simpan**: Konsentrat jernih ini dapat disimpan di botol kaca tertutup di dalam kulkas hingga 14 hari!

---

### 2. Resep Sirup Gula Aren Organik Homemade:

Kunci kelezatan es kopi susu nusantara terletak pada sirup gula aren murni tanpa perisa sintetis:
- **Bahan**: 250g Gula Aren Murni (Gula Semut / Batok Aren), 200ml Air, 2 lembar Daun Pandan, 1/4 sendok teh Garam Laut (*sea salt*).
- **Cara Membuat**:
  1. Rebus gula aren dan air bersama daun pandan dengan api kecil hingga seluruh gula larut mendidih.
  2. Tambahkan sejumput garam laut — garam berfungsi sebagai *flavor enhancer* yang mengunci rasa gurih karamel aren.
  3. Saring sirup hangat dan simpan di botol saus kaca setelah dingin.

---

### 3. Komposisi Gelas Es Kopi Susu Aren Spesialti:

Siapkan gelas saji transparan berukuran 350 ml:
1. Masukkan **25–30 ml Sirup Gula Aren Pandan** ke dasar gelas.
2. Tambahkan es batu kristal hingga memenuhi 3/4 tinggi gelas.
3. Tuangkan perlahan **100 ml Susu Segar (Fresh Milk)** dingin.
4. Tuangkan perlahan **60 ml Konsentrat Cold Brew** di lapisan paling atas.
5. Minuman akan membentuk gradasi 3 lapisan warna yang estetik: cokelat aren di dasar, putih susu di tengah, dan pekat kopi di atas. Aduk merata sebelum diminum!
    `,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "SOP membuat konsentrat cold brew rasio 1:8 perendaman kulkas 16 jam dan sirup gula aren pandan gurih gurih laut.",
    key_takeaways: [
      "Cold brew immersion 16 jam menghasilkan konsentrat kopi dengan tingkat keasaman rendah dan aman bagi lambung.",
      "Sejumput garam laut pada sirup gula aren meningkatkan intensitas rasa gurih karamel alami.",
      "Teknik penuangan berlapis (aren, es, susu, konsentrat) menghasilkan tampilan es kopi susu kafe premium."
    ],
  },
  {
    id: "les-h10-1",
    module_id: "mod-h10",
    title: "Membangun Home Coffee Corner Idaman: Manajemen Budget, Perawatan Grinder, & Komunitas Brewer",
    content: `
# Membangun Home Coffee Corner Idaman & Terkoneksi dengan Komunitas

Menciptakan sudut seduh kopi (*coffee corner*) di rumah adalah bentuk apresiasi terhadap ritual harian Anda. Tempat ini menjadi ruang relaksasi di mana sains dan seni bertemu setiap pagi.

---

### 1. Zonasi Stasiun Seduh Rumahan yang Efisien:

- **Zonasi Kering (Dry Area)**:
  - Tempat penyimpanan toples kedap udara (*airscape canister*), timbangan digital, dan burr grinder.
  - Jauhkan biji sangrai dari paparan sinar matahari langsung dan hawa panas kompor.
- **Zonasi Basah (Wet Area)**:
  - Tempat meletakkan ketel leher angsa, dripper pour-over, server kaca, dan wadah buangan ampas basah (*knockbox* atau cawan buang).
  - Gunakan alas silikon atau tatakan karet bar (*bar mat*) untuk menyerap tetesan air seduh.

---

### 2. SOP Perawatan Rutin Grinder Manual & Elektrik:

Grinder adalah jantung kualitas seduhan Anda. Minyak kopi basi yang mengendap di sela-sela gigi burr akan merusak aroma biji kopi termahal sekalipun:
- **Pembersihan Harian**:
  - Gunakan kuas lembut berbulu halus dan pompa peniup udara (*air blower*) untuk membersihkan sisa fines di ruang keluar kopi (*chute*).
- **Pembersihan Bulanan**:
  - Buka baut burr grinder secara hati-hati.
  - Bersihkan gigi burr baja dengan kuas kering dan lap microfiber.
  - **PANTANGAN MUTLAK**: Jangan pernah mencuci burr baja dengan air sabun! Air akan memicu karat mikro (*oxidation rust*) pada mata pisau burr Anda.

---

### 3. Terkoneksi dengan Komunitas Penikmat Kopi:

Perjalanan belajar kopi rumahan akan berlipat ganda kenikmatannya saat Anda berbagi dengan sesama penggiat:
- **Tukar Biji Kopi (Coffee Bean Swap)**: Membeli satu kantong 200g biji kopi Geisha atau anaerobik mahal sering kali terlalu banyak jika dinikmati sendiri. Ajak teman brewer lokal untuk bertukar 50 gram bean agar Anda bisa mencicipi aneka ragam origin nusantara dengan budget hemat.
- **Sesi Cupping Bareng**: Ajak kawan berkunjung ke rumah untuk mencicipi seduhan blind tasting.
- **Bergabung di Forum Diskusi CherryEdu**: Diskusikan dial-in biji terbaru Anda dan dapatkan umpan balik langsung dari kurator Q-Grader bersertifikasi.
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: "2026-08-05T00:00:00Z",
    summary: "Panduan zonasi stasiun seduh rumah, SOP membersihkan burr grinder tanpa air, dan tradisi tukar beans komunitas.",
    key_takeaways: [
      "Pisahkan zonasi kering (biji, timbangan, grinder) dan zonasi basah (ketel, dripper, server) di meja seduh Anda.",
      "Jangan pernah mencuci burr baja grinder dengan air; gunakan kuas kering dan air blower untuk menjaga ketajaman.",
      "Bergabung dalam tradisi tukar biji kopi komunitas menghemat biaya eksplorasi aneka varietas nusantara."
    ],
  },
  ...BARISTA_LESSONS,
  ...HOME_BREWER_EXPANDED_LESSONS,
  ...ROASTER_LESSONS,
  ...Q_GRADER_LESSONS,
  ...POST_HARVEST_LESSONS,
  ...COFFEE_BUSINESS_LESSONS,
];

// 6. QUIZZES
export const SEED_QUIZZES: Quiz[] = [
  {
    id: "quiz-f1",
    module_id: "mod-f1",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-1: Ekosistem Industri Kopi",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-f2",
    module_id: "mod-f2",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-2: Agronomi & Origin Nusantara",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-f3",
    module_id: "mod-f3",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-3: Varietas & Genetika Kopi",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-f4",
    module_id: "mod-f4",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-4: Pasca Panen & Processing",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-f5",
    module_id: "mod-f5",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-5: Roasting Science Fundamentals",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-f6",
    module_id: "mod-f6",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-6: Water Science for Coffee",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-f7",
    module_id: "mod-f7",
    learning_path_id: null,
    quiz_scope: "module",
    title: "Kuis Evaluasi Modul F-7: Sensory & Cupping Standar SCA",
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-final-foundation",
    module_id: null,
    learning_path_id: "path-foundation",
    quiz_scope: "final_exam",
    title: "Ujian Akhir Sertifikasi Foundation: Kopi dari Hulu ke Hilir",
    passing_score: 80,
    time_limit_minutes: 20,
    max_attempts: 3,
    created_at: "2026-08-01T00:00:00Z",
  },
  {
    id: "quiz-final-barista",
    module_id: null,
    learning_path_id: "path-barista",
    quiz_scope: "final_exam",
    title: "Ujian Akhir Profesional Barista: Sertifikasi Kompetensi Bar",
    passing_score: 80,
    time_limit_minutes: 25,
    max_attempts: 3,
    created_at: "2026-08-05T00:00:00Z",
  },
  {
    id: "quiz-final-home-brewer",
    module_id: null,
    learning_path_id: "path-home-brewer",
    quiz_scope: "final_exam",
    title: "Ujian Akhir Sertifikasi Home Brewer Alchemist",
    passing_score: 80,
    time_limit_minutes: 20,
    max_attempts: 3,
    created_at: "2026-08-05T00:00:00Z",
  },
  ...BARISTA_QUIZZES,
  ...HOME_BREWER_QUIZZES,
  ...ROASTER_QUIZZES,
  ...Q_GRADER_QUIZZES,
  ...POST_HARVEST_QUIZZES,
  ...COFFEE_BUSINESS_QUIZZES,
];

// 7. QUESTIONS & ANSWERS
export const SEED_QUESTIONS: Question[] = [
  {
    id: "q-f1-1",
    quiz_id: "quiz-f1",
    question_text: "Tahun berapakah bibit kopi Arabika pertama kali berhasil dibudidayakan di Batavia (Hindia Belanda) oleh VOC?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Bibit kopi Arabika pertama kali tiba di Batavia tahun 1696 namun gagal karena banjir, kemudian berhasil tumbuh subur pada pengiriman kedua tahun 1699 di Pondok Kopi.",
    answers: [
      { id: "ans-f1-1a", question_id: "q-f1-1", answer_text: "1699", is_correct: true, order_index: 1 },
      { id: "ans-f1-1b", question_id: "q-f1-1", answer_text: "1850", is_correct: false, order_index: 2 },
      { id: "ans-f1-1c", question_id: "q-f1-1", answer_text: "1945", is_correct: false, order_index: 3 },
      { id: "ans-f1-1d", question_id: "q-f1-1", answer_text: "1520", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f1-2",
    quiz_id: "quiz-f1",
    question_text: "Berapakah batas skor cupping minimum standar SCA agar sebuah biji kopi dapat dikategorikan sebagai Specialty Coffee?",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Standar SCA menetapkan bahwa kopi dengan skor cupping 80 poin ke atas (dari skala 100) resmi diklasifikasikan sebagai Specialty Coffee.",
    answers: [
      { id: "ans-f1-2a", question_id: "q-f1-2", answer_text: "70 poin", is_correct: false, order_index: 1 },
      { id: "ans-f1-2b", question_id: "q-f1-2", answer_text: "80 poin", is_correct: true, order_index: 2 },
      { id: "ans-f1-2c", question_id: "q-f1-2", answer_text: "90 poin", is_correct: false, order_index: 3 },
      { id: "ans-f1-2d", question_id: "q-f1-2", answer_text: "85 poin", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f1-3",
    quiz_id: "quiz-f1",
    question_text: "Dalam 350 gram sampel green bean specialty coffee, berapa batas toleransi cacat primer (Primary Defect)?",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Standar SCA mewajibkan 0 (nol) cacat primer dalam 350 gram sampel green bean agar sah menyandang status specialty coffee.",
    answers: [
      { id: "ans-f1-3a", question_id: "q-f1-3", answer_text: "0 cacat primer (Nol toleransi)", is_correct: true, order_index: 1 },
      { id: "ans-f1-3b", question_id: "q-f1-3", answer_text: "Maksimal 3 cacat primer", is_correct: false, order_index: 2 },
      { id: "ans-f1-3c", question_id: "q-f1-3", answer_text: "Maksimal 5 cacat primer", is_correct: false, order_index: 3 },
      { id: "ans-f1-3d", question_id: "q-f1-3", answer_text: "Bebas asalkan disangrai gelap", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f2-1",
    quiz_id: "quiz-f2",
    question_text: "Lapisan lendir berdaging manis buah kopi yang kaya glukosa dan fruktosa serta menjadi bahan bakar fermentasi disebut:",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Mesokarp (Mucilage) adalah lapisan lendir berdaging manis yang membungkus kulit tanduk.",
    answers: [
      { id: "ans-f2-1a", question_id: "q-f2-1", answer_text: "Mesokarp (Mucilage)", is_correct: true, order_index: 1 },
      { id: "ans-f2-1b", question_id: "q-f2-1", answer_text: "Endokarp (Parchment)", is_correct: false, order_index: 2 },
      { id: "ans-f2-1c", question_id: "q-f2-1", answer_text: "Silverskin", is_correct: false, order_index: 3 },
      { id: "ans-f2-1d", question_id: "q-f2-1", answer_text: "Eksokarp", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f2-2",
    quiz_id: "quiz-f2",
    question_text: "Mengapa kopi yang ditanam di elevasi tinggi (> 1.400 mdpl) memiliki densitas biji lebih padat dan keasaman buah lebih kompleks?",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Suhu dingin di dataran tinggi memperlambat laju respirasi malam hari sehingga tanaman tidak membakar habis cadangan gula, melainkan mengalirkan dan memadatkan sukrosa serta asam organik ke dalam embrio biji.",
    answers: [
      { id: "ans-f2-2a", question_id: "q-f2-2", answer_text: "Suhu dingin malam hari memperlambat respirasi sehingga akumulasi gula sukrosa dan asam organik berlangsung optimal", is_correct: true, order_index: 1 },
      { id: "ans-f2-2b", question_id: "q-f2-2", answer_text: "Kadar oksigen yang tipis membuat pohon cepat berbuah lebat", is_correct: false, order_index: 2 },
      { id: "ans-f2-2c", question_id: "q-f2-2", answer_text: "Tekanan udara rendah menyebabkan biji mengembang dua kali lipat", is_correct: false, order_index: 3 },
      { id: "ans-f2-2d", question_id: "q-f2-2", answer_text: "Tanaman di dataran tinggi tidak membutuhkan fotosintesis", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f2-3",
    quiz_id: "quiz-f2",
    question_text: "Alat optik yang digunakan petani kopi modern di kebun untuk mengukur kadar kemanisan gula (\u00b0Brix) pada ceri matang adalah:",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Refraktometer Brix mengukur indeks pembiasan cahaya cairan jus mucilage buah kopi ceri untuk menguji konsentrasi gula terlarut.",
    answers: [
      { id: "ans-f2-3a", question_id: "q-f2-3", answer_text: "Refraktometer Brix", is_correct: true, order_index: 1 },
      { id: "ans-f2-3b", question_id: "q-f2-3", answer_text: "Termokopel Inframerah", is_correct: false, order_index: 2 },
      { id: "ans-f2-3c", question_id: "q-f2-3", answer_text: "Manometer Tekanan", is_correct: false, order_index: 3 },
      { id: "ans-f2-3d", question_id: "q-f2-3", answer_text: "Higrometer Ruangan", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f3-1",
    quiz_id: "quiz-f3",
    question_text: "Manakah spesies tanaman kopi yang bersifat Tetraploid (memiliki 4 set kromosom / 44 kromosom) dan menyerbuk sendiri?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Coffea arabica adalah satu-satunya spesies kopi komersial yang bersifat tetraploid (2n=44 kromosom) dan self-pollinating.",
    answers: [
      { id: "ans-f3-1a", question_id: "q-f3-1", answer_text: "Coffea arabica (Arabika)", is_correct: true, order_index: 1 },
      { id: "ans-f3-1b", question_id: "q-f3-1", answer_text: "Coffea canephora (Robusta)", is_correct: false, order_index: 2 },
      { id: "ans-f3-1c", question_id: "q-f3-1", answer_text: "Coffea liberica (Liberika)", is_correct: false, order_index: 3 },
      { id: "ans-f3-1d", question_id: "q-f3-1", answer_text: "Coffea eugenioides", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f3-2",
    quiz_id: "quiz-f3",
    question_text: "Varietas Arabika unggul asal kawasan Danau Toba yang namanya bermakna 'Si Pelunas Hutang' karena berbuah terus menerus adalah:",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Sigarar Utang berasal dari Humbang Hasundutan, dinamai demikian karena pohonnya selalu berbuah sepanjang tahun membantu ekonomi petani.",
    answers: [
      { id: "ans-f3-2a", question_id: "q-f3-2", answer_text: "Sigarar Utang", is_correct: true, order_index: 1 },
      { id: "ans-f3-2b", question_id: "q-f3-2", answer_text: "Tim-Tim", is_correct: false, order_index: 2 },
      { id: "ans-f3-2c", question_id: "q-f3-2", answer_text: "Ateng Super", is_correct: false, order_index: 3 },
      { id: "ans-f3-2d", question_id: "q-f3-2", answer_text: "S-795", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f3-3",
    quiz_id: "quiz-f3",
    question_text: "Persilangan alami spontan antara Arabika dan Robusta di Pulau Timor pada 1917 yang melahirkan varietas tahan penyakit karat daun dikenal sebagai:",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Hibrido de Timor (HDT) adalah persilangan alami bersejarah yang menjadi tetua kelompok varietas Catimor dan Tim-Tim.",
    answers: [
      { id: "ans-f3-3a", question_id: "q-f3-3", answer_text: "Hibrido de Timor (HDT)", is_correct: true, order_index: 1 },
      { id: "ans-f3-3b", question_id: "q-f3-3", answer_text: "Bourbon Mayaguez", is_correct: false, order_index: 2 },
      { id: "ans-f3-3c", question_id: "q-f3-3", answer_text: "Geisha Panama", is_correct: false, order_index: 3 },
      { id: "ans-f3-3d", question_id: "q-f3-3", answer_text: "SL-28 Kenya", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f4-1",
    quiz_id: "quiz-f4",
    question_text: "Karakter rasa utama yang menjadi keunggulan metode pasca panen Fully Washed dibanding metode lainnya adalah:",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Proses Washed menghilangkan seluruh mucilage sebelum dijemur, menghasilkan kebersihan cangkir (clean cup) tinggi dan keasaman sitrat/malat cerah.",
    answers: [
      { id: "ans-f4-1a", question_id: "q-f4-1", answer_text: "Clean Cup (kebersihan rasa) tinggi dan keasaman buah cerah bersinar", is_correct: true, order_index: 1 },
      { id: "ans-f4-1b", question_id: "q-f4-1", answer_text: "Rasa fermentasi alkohol anggur yang sangat pekat", is_correct: false, order_index: 2 },
      { id: "ans-f4-1c", question_id: "q-f4-1", answer_text: "Body yang sangat berat dan rasa tanah earthy pekat", is_correct: false, order_index: 3 },
      { id: "ans-f4-1d", question_id: "q-f4-1", answer_text: "Kadar kafein yang berlipat ganda", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f4-2",
    quiz_id: "quiz-f4",
    question_text: "Apa perbedaan mendasar metode tradisional Giling Basah (Wet Hulled) Indonesia dibanding proses standar dunia?",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Giling Basah mengupas kulit tanduk (parchment) saat biji masih basah lembap berkadar air 30-35%, sedangkan proses dunia mengupasnya saat biji kering 11%.",
    answers: [
      { id: "ans-f4-2a", question_id: "q-f4-2", answer_text: "Kulit tanduk (parchment) dikupas saat biji masih basah (kadar air 30% - 35%)", is_correct: true, order_index: 1 },
      { id: "ans-f4-2b", question_id: "q-f4-2", answer_text: "Kopi diseduh langsung dari pohon tanpa dikeringkan", is_correct: false, order_index: 2 },
      { id: "ans-f4-2c", question_id: "q-f4-2", answer_text: "Biji kopi direndam di dalam air laut selama 1 bulan", is_correct: false, order_index: 3 },
      { id: "ans-f4-2d", question_id: "q-f4-2", answer_text: "Kopi digiling menggunakan penggilingan batu tanpa mesin", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f4-3",
    quiz_id: "quiz-f4",
    question_text: "Metode fermentasi modern yang menyuntikkan gas karbon dioksida bertekanan ke tangki tertutup untuk memicu fermentasi intraseluler adalah:",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Carbonic Maceration mengadopsi teknik wine Beaujolais dengan menyuntikkan gas CO2 ke tangki kedap udara.",
    answers: [
      { id: "ans-f4-3a", question_id: "q-f4-3", answer_text: "Carbonic Maceration", is_correct: true, order_index: 1 },
      { id: "ans-f4-3b", question_id: "q-f4-3", answer_text: "Traditional Dry Natural", is_correct: false, order_index: 2 },
      { id: "ans-f4-3c", question_id: "q-f4-3", answer_text: "Decaffeination Swiss Water", is_correct: false, order_index: 3 },
      { id: "ans-f4-3d", question_id: "q-f4-3", answer_text: "Kopi Luwak Fermentasi", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f5-1",
    quiz_id: "quiz-f5",
    question_text: "Reaksi kimia pencokelatan non-enzimatis antara asam amino dan gula pereduksi pada suhu 130\u00b0C - 160\u00b0C dalam drum roaster disebut:",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Reaksi Maillard bertanggung jawab atas pembentukan ratusan senyawa aroma panggangan dan melanoidin pembentuk body.",
    answers: [
      { id: "ans-f5-1a", question_id: "q-f5-1", answer_text: "Reaksi Maillard", is_correct: true, order_index: 1 },
      { id: "ans-f5-1b", question_id: "q-f5-1", answer_text: "Fotosintesis Klorofil", is_correct: false, order_index: 2 },
      { id: "ans-f5-1c", question_id: "q-f5-1", answer_text: "Fermentasi Asam Butirat", is_correct: false, order_index: 3 },
      { id: "ans-f5-1d", question_id: "q-f5-1", answer_text: "Oksidasi Asam Sitrat", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f5-2",
    quiz_id: "quiz-f5",
    question_text: "Fenomena letupan fisik First Crack pada proses pemanggangan kopi terjadi karena:",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "First crack terjadi saat tekanan akumulasi uap air super-panas dan gas CO2 memecahkan struktur dinding selulosa biji.",
    answers: [
      { id: "ans-f5-2a", question_id: "q-f5-2", answer_text: "Akumulasi tekanan uap air dan gas CO2 internal memecahkan dinding selulosa biji", is_correct: true, order_index: 1 },
      { id: "ans-f5-2b", question_id: "q-f5-2", answer_text: "Kadar kafein mendidih dan meledak", is_correct: false, order_index: 2 },
      { id: "ans-f5-2c", question_id: "q-f5-2", answer_text: "Drum roaster berhenti berputar mendadak", is_correct: false, order_index: 3 },
      { id: "ans-f5-2d", question_id: "q-f5-2", answer_text: "Biji kopi terbakar habis menjadi abu", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f5-3",
    quiz_id: "quiz-f5",
    question_text: "Berapa hari waktu istirahat (resting / degassing) yang direkomendasikan untuk biji kopi sebelum diseduh sebagai espresso?",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Espresso membutuhkan masa resting 10 - 14 hari agar pelepasan gas CO2 stabil sehingga ekstraksi tidak berbusa kasar.",
    answers: [
      { id: "ans-f5-3a", question_id: "q-f5-3", answer_text: "10 \u2013 14 hari", is_correct: true, order_index: 1 },
      { id: "ans-f5-3b", question_id: "q-f5-3", answer_text: "Langsung diseduh menit pertama keluar mesin", is_correct: false, order_index: 2 },
      { id: "ans-f5-3c", question_id: "q-f5-3", answer_text: "6 bulan", is_correct: false, order_index: 3 },
      { id: "ans-f5-3d", question_id: "q-f5-3", answer_text: "1 hari saja sudah maksimal", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f6-1",
    quiz_id: "quiz-f6",
    question_text: "Berapakah persentase rata-rata kandungan air dalam secangkir kopi filter manual brew?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Kopi filter tersusun atas sekitar 98.5% - 98.8% air dan hanya 1.2% - 1.5% padatan kopi terlarut (TDS).",
    answers: [
      { id: "ans-f6-1a", question_id: "q-f6-1", answer_text: "98.5% \u2013 98.8%", is_correct: true, order_index: 1 },
      { id: "ans-f6-1b", question_id: "q-f6-1", answer_text: "50.0%", is_correct: false, order_index: 2 },
      { id: "ans-f6-1c", question_id: "q-f6-1", answer_text: "75.0%", is_correct: false, order_index: 3 },
      { id: "ans-f6-1d", question_id: "q-f6-1", answer_text: "10.0%", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f6-2",
    quiz_id: "quiz-f6",
    question_text: "Kation mineral dalam air yang memiliki afinitas paling kuat mengikat senyawa buah dan asam sitrat kopi tanpa membentuk kerak kapur adalah:",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Ion Magnesium (Mg2+) memiliki densitas muatan tinggi yang sangat efektif menarik senyawa volatil buah dan garamnya sangat mudah larut.",
    answers: [
      { id: "ans-f6-2a", question_id: "q-f6-2", answer_text: "Magnesium (Mg2+)", is_correct: true, order_index: 1 },
      { id: "ans-f6-2b", question_id: "q-f6-2", answer_text: "Klorida (Cl-)", is_correct: false, order_index: 2 },
      { id: "ans-f6-2c", question_id: "q-f6-2", answer_text: "Besi (Fe2+)", is_correct: false, order_index: 3 },
      { id: "ans-f6-2d", question_id: "q-f6-2", answer_text: "Timbal (Pb2+)", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f6-3",
    quiz_id: "quiz-f6",
    question_text: "Jika air seduh memiliki tingkat Alkalinitas (Buffer Bikarbonat) yang terlalu tinggi (> 100 ppm), apa yang terjadi pada rasa kopi?",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Buffer bikarbonat yang berlebih menetralkan keasaman alami kopi sehingga kopi terasa hambar, datar, dan berkapur.",
    answers: [
      { id: "ans-f6-3a", question_id: "q-f6-3", answer_text: "Seluruh keasaman buah alami kopi dinetralkan menjadi hambar dan datar", is_correct: true, order_index: 1 },
      { id: "ans-f6-3b", question_id: "q-f6-3", answer_text: "Kopi menjadi sangat masam menusuk seperti cuka murni", is_correct: false, order_index: 2 },
      { id: "ans-f6-3c", question_id: "q-f6-3", answer_text: "Kopi berubah warna menjadi biru", is_correct: false, order_index: 3 },
      { id: "ans-f6-3d", question_id: "q-f6-3", answer_text: "Kadar gula kopi meningkat 50%", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f7-1",
    quiz_id: "quiz-f7",
    question_text: "Berapakah rasio seduh standar resmi protokol evaluasi sensori Cupping SCA?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Protokol SCA menetapkan rasio 8.25g bubuk kopi per 150ml air bersuhu 93\u00b0C.",
    answers: [
      { id: "ans-f7-1a", question_id: "q-f7-1", answer_text: "8.25 gram kopi per 150 ml air (suhu 93\u00b0C)", is_correct: true, order_index: 1 },
      { id: "ans-f7-1b", question_id: "q-f7-1", answer_text: "20 gram kopi per 100 ml air (suhu 100\u00b0C)", is_correct: false, order_index: 2 },
      { id: "ans-f7-1c", question_id: "q-f7-1", answer_text: "5 gram kopi per 300 ml air (suhu 80\u00b0C)", is_correct: false, order_index: 3 },
      { id: "ans-f7-1d", question_id: "q-f7-1", answer_text: "15 gram kopi per 225 ml air", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f7-2",
    quiz_id: "quiz-f7",
    question_text: "Pada menit keberapakah ritual 'Breaking the Crust' dilakukan saat sesi cupping resmi berstandar SCA?",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Tepat di menit ke-4, kerak dipecah dengan 3 dorongan lembut sendok cupping.",
    answers: [
      { id: "ans-f7-2a", question_id: "q-f7-2", answer_text: "Menit ke-4", is_correct: true, order_index: 1 },
      { id: "ans-f7-2b", question_id: "q-f7-2", answer_text: "Menit ke-1", is_correct: false, order_index: 2 },
      { id: "ans-f7-2c", question_id: "q-f7-2", answer_text: "Menit ke-10", is_correct: false, order_index: 3 },
      { id: "ans-f7-2d", question_id: "q-f7-2", answer_text: "Menit ke-15", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-f7-3",
    quiz_id: "quiz-f7",
    question_text: "Jenis asam organik yang memberikan sensasi renyah segar seperti buah apel hijau dan memicu produksi air liur adalah:",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Asam Malat (Malic Acid) menghadirkan sensasi segar renyah buah apel hijau dan pear juicy.",
    answers: [
      { id: "ans-f7-3a", question_id: "q-f7-3", answer_text: "Asam Malat (Malic Acid)", is_correct: true, order_index: 1 },
      { id: "ans-f7-3b", question_id: "q-f7-3", answer_text: "Asam Asetat (Cuka)", is_correct: false, order_index: 2 },
      { id: "ans-f7-3c", question_id: "q-f7-3", answer_text: "Asam Klorida", is_correct: false, order_index: 3 },
      { id: "ans-f7-3d", question_id: "q-f7-3", answer_text: "Asam Sulfat", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-fn-1",
    quiz_id: "quiz-final-foundation",
    question_text: "Berapakah kadar air (moisture content) ideal green bean sebelum disangrai agar aman disimpan dan optimal saat di-roast?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Standar kelembapan ideal internasional adalah antara 10.0% hingga 12.0%.",
    answers: [
      { id: "ans-fn-1a", question_id: "q-fn-1", answer_text: "10% \u2013 12%", is_correct: true, order_index: 1 },
      { id: "ans-fn-1b", question_id: "q-fn-1", answer_text: "18% \u2013 22%", is_correct: false, order_index: 2 },
      { id: "ans-fn-1c", question_id: "q-fn-1", answer_text: "4% \u2013 6%", is_correct: false, order_index: 3 },
      { id: "ans-fn-1d", question_id: "q-fn-1", answer_text: "14% \u2013 16%", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-fn-2",
    quiz_id: "quiz-final-foundation",
    question_text: "Mineral dalam air seduh yang paling efektif mengikat dan mengekstrak senyawa asam buah beraroma adalah:",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Ion Magnesium (Mg2+) memiliki densitas muatan tinggi yang sangat efektif menarik senyawa asam organik dari kopi.",
    answers: [
      { id: "ans-fn-2a", question_id: "q-fn-2", answer_text: "Magnesium (Mg2+)", is_correct: true, order_index: 1 },
      { id: "ans-fn-2b", question_id: "q-fn-2", answer_text: "Klorida (Cl-)", is_correct: false, order_index: 2 },
      { id: "ans-fn-2c", question_id: "q-fn-2", answer_text: "Natrium (Na+)", is_correct: false, order_index: 3 },
      { id: "ans-fn-2d", question_id: "q-fn-2", answer_text: "Sulfat (SO4 2-)", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-fn-3",
    quiz_id: "quiz-final-foundation",
    question_text: "Pada menit keberapakah ritual 'Break the Crust' dilakukan saat sesi cupping berstandar SCA?",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Kerak bubuk kopi yang mengapung dipecahkan tepat pada menit ke-4 dengan 3 dorongan sendok cupping.",
    answers: [
      { id: "ans-fn-3a", question_id: "q-fn-3", answer_text: "Menit ke-4", is_correct: true, order_index: 1 },
      { id: "ans-fn-3b", question_id: "q-fn-3", answer_text: "Menit ke-1", is_correct: false, order_index: 2 },
      { id: "ans-fn-3c", question_id: "q-fn-3", answer_text: "Menit ke-10", is_correct: false, order_index: 3 },
      { id: "ans-fn-3d", question_id: "q-fn-3", answer_text: "Menit ke-15", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-fn-4",
    quiz_id: "quiz-final-foundation",
    question_text: "Proses pasca panen yang mengeringkan buah ceri kopi utuh langsung di bawah matahari tanpa mengupas kulitnya disebut:",
    question_type: "multiple_choice",
    order_index: 4,
    explanation: "Natural atau Dry process menjemur ceri utuh secara langsung sehingga menghasilkan rasa manis buah berry yang tebal.",
    answers: [
      { id: "ans-fn-4a", question_id: "q-fn-4", answer_text: "Natural / Dry Process", is_correct: true, order_index: 1 },
      { id: "ans-fn-4b", question_id: "q-fn-4", answer_text: "Fully Washed", is_correct: false, order_index: 2 },
      { id: "ans-fn-4c", question_id: "q-fn-4", answer_text: "White Honey", is_correct: false, order_index: 3 },
      { id: "ans-fn-4d", question_id: "q-fn-4", answer_text: "Decaffeination", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-fn-5",
    quiz_id: "quiz-final-foundation",
    question_text: "Dalam 350 gram sampel biji hijau specialty coffee, berapakah toleransi jumlah cacat primer (Category 1 Defects)?",
    question_type: "multiple_choice",
    order_index: 5,
    explanation: "Standar SCA menetapkan 0 (nol) cacat primer dalam 350 gram sampel green bean untuk kualifikasi specialty coffee.",
    answers: [
      { id: "ans-fn-5a", question_id: "q-fn-5", answer_text: "0 cacat primer (Nol toleransi)", is_correct: true, order_index: 1 },
      { id: "ans-fn-5b", question_id: "q-fn-5", answer_text: "Maksimal 3 cacat primer", is_correct: false, order_index: 2 },
      { id: "ans-fn-5c", question_id: "q-fn-5", answer_text: "Maksimal 5 cacat primer", is_correct: false, order_index: 3 },
      { id: "ans-fn-5d", question_id: "q-fn-5", answer_text: "Maksimal 10 cacat primer", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-1",
    quiz_id: "quiz-final-barista",
    question_text: "Jika espresso Anda terekstraksi hanya dalam waktu 16 detik dan rasanya sangat masam tajam, tindakan dial-in apa yang paling tepat?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Ekstraksi 16 detik menandakan under-extraction (aliran terlalu cepat). Gilingan harus dihaluskan (finer) agar resistensi bubuk meningkat.",
    answers: [
      { id: "ans-bar-1a", question_id: "q-bar-1", answer_text: "Haluskan ukuran gilingan (finer)", is_correct: true, order_index: 1 },
      { id: "ans-bar-1b", question_id: "q-bar-1", answer_text: "Kasarkan ukuran gilingan (coarser)", is_correct: false, order_index: 2 },
      { id: "ans-bar-1c", question_id: "q-bar-1", answer_text: "Kurangi dosis kopi secara drastis", is_correct: false, order_index: 3 },
      { id: "ans-bar-1d", question_id: "q-bar-1", answer_text: "Turunkan suhu air mesin ke 80\u00b0C", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-2",
    quiz_id: "quiz-final-barista",
    question_text: "Berapakah suhu maksimal memanaskan susu saat steaming agar manis alami laktosa dan struktur protein tidak rusak?",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Susu sebaiknya dihangatkan hingga 60\u00b0C - 65\u00b0C. Di atas 70\u00b0C, protein terdenaturasi dan kehilangan manis alaminya.",
    answers: [
      { id: "ans-bar-2a", question_id: "q-bar-2", answer_text: "60\u00b0C \u2013 65\u00b0C", is_correct: true, order_index: 1 },
      { id: "ans-bar-2b", question_id: "q-bar-2", answer_text: "85\u00b0C \u2013 90\u00b0C", is_correct: false, order_index: 2 },
      { id: "ans-bar-2c", question_id: "q-bar-2", answer_text: "40\u00b0C \u2013 45\u00b0C", is_correct: false, order_index: 3 },
      { id: "ans-bar-2d", question_id: "q-bar-2", answer_text: "100\u00b0C (mendidih)", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-3",
    quiz_id: "quiz-final-barista",
    question_text: "Berapa hari waktu istirahat (degassing) yang direkomendasikan untuk biji kopi espresso setelah tanggal sangrai?",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Espresso membutuhkan resting 10-14 hari agar gas CO2 stabil sehingga ekstraksi tidak berbusa kasar.",
    answers: [
      { id: "ans-bar-3a", question_id: "q-bar-3", answer_text: "10 – 14 hari", is_correct: true, order_index: 1 },
      { id: "ans-bar-3b", question_id: "q-bar-3", answer_text: "Langsung seduh di hari roasting (0 hari)", is_correct: false, order_index: 2 },
      { id: "ans-bar-3c", question_id: "q-bar-3", answer_text: "6 bulan", is_correct: false, order_index: 3 },
      { id: "ans-bar-3d", question_id: "q-bar-3", answer_text: "1 hari saja", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-4",
    quiz_id: "quiz-final-barista",
    question_text: "Apakah fungsi utama teknik distribusi jarum WDT (Weiss Distribution Technique) dalam preparasi puck espresso?",
    question_type: "multiple_choice",
    order_index: 4,
    explanation: "WDT memecah gumpalan elektrostatis dan meratakan kepadatan bubuk kopi di seluruh basket sehingga mencegah channeling.",
    answers: [
      { id: "ans-bar-4a", question_id: "q-bar-4", answer_text: "Memecah gumpalan statis dan meratakan densitas bubuk di seluruh basket", is_correct: true, order_index: 1 },
      { id: "ans-bar-4b", question_id: "q-bar-4", answer_text: "Menambah kadar kafein dalam cairan espresso", is_correct: false, order_index: 2 },
      { id: "ans-bar-4c", question_id: "q-bar-4", answer_text: "Mendinginkan bubuk kopi sebelum dipadatkan", is_correct: false, order_index: 3 },
      { id: "ans-bar-4d", question_id: "q-bar-4", answer_text: "Menggantikan fungsi tamping sepenuhnya", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-5",
    quiz_id: "quiz-final-barista",
    question_text: "Pada metode seduh Tetsu Kasuya 4:6, pembagian 40% air pertama berfungsi khusus untuk mengontrol apa?",
    question_type: "multiple_choice",
    order_index: 5,
    explanation: "Fase 40% pertama memanipulasi rasio antara senyawa manis (sweetness) dan keasaman buah (acidity).",
    answers: [
      { id: "ans-bar-5a", question_id: "q-bar-5", answer_text: "Keseimbangan rasa keasaman buah (acidity) vs rasa manis (sweetness)", is_correct: true, order_index: 1 },
      { id: "ans-bar-5b", question_id: "q-bar-5", answer_text: "Kekentalan body dan mouthfeel akhir", is_correct: false, order_index: 2 },
      { id: "ans-bar-5c", question_id: "q-bar-5", answer_text: "Suhu penyajian cangkir ke meja juri", is_correct: false, order_index: 3 },
      { id: "ans-bar-5d", question_id: "q-bar-5", answer_text: "Banyaknya ampas yang lolos ke server", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-6",
    quiz_id: "quiz-final-barista",
    question_text: "Tindakan pertama apa yang wajib dilakukan barista pada grinder di pagi hari sebelum memulai kalibrasi rasa (morning dial-in)?",
    question_type: "multiple_choice",
    order_index: 6,
    explanation: "Purging 15-20 gram bubuk kopi basi semalam yang teroksidasi di ruang burr grinder wajib dilakukan agar tidak merusak rasa kalibrasi.",
    answers: [
      { id: "ans-bar-6a", question_id: "q-bar-6", answer_text: "Membuang (purging) 15–20 gram bubuk kopi sisa semalam dari ruang burr", is_correct: true, order_index: 1 },
      { id: "ans-bar-6b", question_id: "q-bar-6", answer_text: "Mencuci hopper dengan air sabun mendidih", is_correct: false, order_index: 2 },
      { id: "ans-bar-6c", question_id: "q-bar-6", answer_text: "Langsung menyajikan shot pertama ke pelanggan", is_correct: false, order_index: 3 },
      { id: "ans-bar-6d", question_id: "q-bar-6", answer_text: "Mengubah grind size ke ukuran paling kasar", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-7",
    quiz_id: "quiz-final-barista",
    question_text: "Dalam formula 4 pilar signature coffee beverage, apakah fungsi utama dari pilar Acidifier (seperti sari kalamansi/lemon)?",
    question_type: "multiple_choice",
    order_index: 7,
    explanation: "Acidifier memberikan kontras segar yang memotong ketebalan bodi dan mencegah minuman terasa terlalu manis atau enek.",
    answers: [
      { id: "ans-bar-7a", question_id: "q-bar-7", answer_text: "Memberikan dimensi segar yang memotong ketebalan bodi dan menyeimbangkan manis sirup", is_correct: true, order_index: 1 },
      { id: "ans-bar-7b", question_id: "q-bar-7", answer_text: "Menghilangkan aroma kopi sepenuhnya", is_correct: false, order_index: 2 },
      { id: "ans-bar-7c", question_id: "q-bar-7", answer_text: "Menurunkan masa simpan minuman menjadi 5 menit", is_correct: false, order_index: 3 },
      { id: "ans-bar-7d", question_id: "q-bar-7", answer_text: "Membuat minuman mendidih spontan", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-bar-8",
    quiz_id: "quiz-final-barista",
    question_text: "Berapa lama batas waktu presentasi resmi yang diberikan kepada peserta di ajang kejuaraan Indonesia Barista Championship (IBC)?",
    question_type: "multiple_choice",
    order_index: 8,
    explanation: "Peserta IBC memiliki waktu presentasi tepat 15 menit untuk menyajikan 4 espresso, 4 milk beverage, dan 4 signature drink.",
    answers: [
      { id: "ans-bar-8a", question_id: "q-bar-8", answer_text: "15 menit tepat", is_correct: true, order_index: 1 },
      { id: "ans-bar-8b", question_id: "q-bar-8", answer_text: "30 menit", is_correct: false, order_index: 2 },
      { id: "ans-bar-8c", question_id: "q-bar-8", answer_text: "45 menit", is_correct: false, order_index: 3 },
      { id: "ans-bar-8d", question_id: "q-bar-8", answer_text: "10 menit", is_correct: false, order_index: 4 },
    ],
  },
  // --- HOME BREWER FINAL EXAM QUESTIONS ---
  {
    id: "q-hb-1",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Berapakah rasio seduh emas yang umum direkomendasikan untuk pour-over V60 rumahan yang seimbang dan manis?",
    question_type: "multiple_choice",
    order_index: 1,
    explanation: "Rasio 1:15 hingga 1:16.6 (misalnya 15g kopi ke 225g - 250g air) adalah rasio emas standar dunia untuk cangkir filter seimbang.",
    answers: [
      { id: "ans-hb-1a", question_id: "q-hb-1", answer_text: "1:15 hingga 1:16.6 (15g kopi : 225g – 250g air)", is_correct: true, order_index: 1 },
      { id: "ans-hb-1b", question_id: "q-hb-1", answer_text: "1:2 (15g kopi : 30g air)", is_correct: false, order_index: 2 },
      { id: "ans-hb-1c", question_id: "q-hb-1", answer_text: "1:35 (15g kopi : 525g air)", is_correct: false, order_index: 3 },
      { id: "ans-hb-1d", question_id: "q-hb-1", answer_text: "1:5 (15g kopi : 75g air)", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-2",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Jika hasil seduhan V60 Anda terasa masam tajam menusuk seperti lemon mentah dan hambar di tengah, apakah penyebabnya?",
    question_type: "multiple_choice",
    order_index: 2,
    explanation: "Rasa masam tajam dan hambar adalah tanda pasti under-ekstraksi. Air mengalir terlalu cepat karena gilingan terlalu kasar atau suhu kurang panas.",
    answers: [
      { id: "ans-hb-2a", question_id: "q-hb-2", answer_text: "Under-ekstraksi akibat gilingan terlalu kasar atau air terlalu dingin", is_correct: true, order_index: 1 },
      { id: "ans-hb-2b", question_id: "q-hb-2", answer_text: "Over-ekstraksi akibat kopi diseduh terlalu lama", is_correct: false, order_index: 2 },
      { id: "ans-hb-2c", question_id: "q-hb-2", answer_text: "Biji kopi mengandung gula berlebihan", is_correct: false, order_index: 3 },
      { id: "ans-hb-2d", question_id: "q-hb-2", answer_text: "Kertas filter terlalu tebal", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-3",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Mengapa biji kopi dari elevasi sangat tinggi (> 1.500 MDPL) membutuhkan suhu air seduh lebih tinggi (92°C – 94°C)?",
    question_type: "multiple_choice",
    order_index: 3,
    explanation: "Biji kopi dataran tinggi memiliki kepadatan (density) selulosa yang sangat keras sehingga memerlukan energi termal lebih besar untuk larut.",
    answers: [
      { id: "ans-hb-3a", question_id: "q-hb-3", answer_text: "Karena biji memiliki densitas selulosa keras yang membutuhkan energi termal tinggi", is_correct: true, order_index: 1 },
      { id: "ans-hb-3b", question_id: "q-hb-3", answer_text: "Karena biji dataran tinggi tidak memiliki aroma", is_correct: false, order_index: 2 },
      { id: "ans-hb-3c", question_id: "q-hb-3", answer_text: "Agar keasaman buahnya hilang sepenuhnya", is_correct: false, order_index: 3 },
      { id: "ans-hb-3d", question_id: "q-hb-3", answer_text: "Karena air pegunungan selalu lebih dingin", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-4",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Pada menit keberapakah ritual 'Break the Crust' (mendorong kerak bubuk kopi) dilakukan dalam protokol cupping?",
    question_type: "multiple_choice",
    order_index: 4,
    explanation: "Standar cupping resmi menetapkan break the crust dilakukan tepat pada menit ke-04:00 setelah penuangan air panas.",
    answers: [
      { id: "ans-hb-4a", question_id: "q-hb-4", answer_text: "Tepat pada menit ke-04:00", is_correct: true, order_index: 1 },
      { id: "ans-hb-4b", question_id: "q-hb-4", answer_text: "Detik ke-30", is_correct: false, order_index: 2 },
      { id: "ans-hb-4c", question_id: "q-hb-4", answer_text: "Menit ke-15", is_correct: false, order_index: 3 },
      { id: "ans-hb-4d", question_id: "q-hb-4", answer_text: "Sebelum air panas dituangkan", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-5",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Mineral apakah dalam air seduh yang paling efektif mengikat dan mengekstrak senyawa rasa manis buah kopi?",
    question_type: "multiple_choice",
    order_index: 5,
    explanation: "Ion Magnesium (Mg2+) memiliki kerapatan muatan tinggi yang sangat efektif mengikat senyawa oksigen pada gula dan rasa buah kopi.",
    answers: [
      { id: "ans-hb-5a", question_id: "q-hb-5", answer_text: "Magnesium (Mg2+)", is_correct: true, order_index: 1 },
      { id: "ans-hb-5b", question_id: "q-hb-5", answer_text: "Natrium Klorida (garam dapur)", is_correct: false, order_index: 2 },
      { id: "ans-hb-5c", question_id: "q-hb-5", answer_text: "Zat Besi (Fe)", is_correct: false, order_index: 3 },
      { id: "ans-hb-5d", question_id: "q-hb-5", answer_text: "Tembaga (Cu)", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-6",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Mengapa memutar dripper V60 (swirling) terlalu kencang dapat menyebabkan air seduh macet (clogging)?",
    question_type: "multiple_choice",
    order_index: 6,
    explanation: "Swirling berlebih membuat butiran mikron sangat halus (fines) bermigrasi ke dasar kerucut dan menyumbat pori-pori kertas saring.",
    answers: [
      { id: "ans-hb-6a", question_id: "q-hb-6", answer_text: "Partikel fines bermigrasi ke dasar dan menyumbat pori kertas filter", is_correct: true, order_index: 1 },
      { id: "ans-hb-6b", question_id: "q-hb-6", answer_text: "Kertas filter akan larut dalam air panas", is_correct: false, order_index: 2 },
      { id: "ans-hb-6c", question_id: "q-hb-6", answer_text: "Kopi akan kehilangan seluruh gas CO2", is_correct: false, order_index: 3 },
      { id: "ans-hb-6d", question_id: "q-hb-6", answer_text: "Suhu air akan langsung mendingin drastis", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-7",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Berapa lama waktu perendaman dingin (immersion) kulkas yang ideal untuk konsentrat cold brew rumahan?",
    question_type: "multiple_choice",
    order_index: 7,
    explanation: "Perendaman kulkas selama 16 hingga 18 jam menghasilkan konsentrat cold brew manis dengan keasaman lambung sangat rendah.",
    answers: [
      { id: "ans-hb-7a", question_id: "q-hb-7", answer_text: "16 hingga 18 jam", is_correct: true, order_index: 1 },
      { id: "ans-hb-7b", question_id: "q-hb-7", answer_text: "2 jam saja", is_correct: false, order_index: 2 },
      { id: "ans-hb-7c", question_id: "q-hb-7", answer_text: "5 hari", is_correct: false, order_index: 3 },
      { id: "ans-hb-7d", question_id: "q-hb-7", answer_text: "30 menit", is_correct: false, order_index: 4 },
    ],
  },
  {
    id: "q-hb-8",
    quiz_id: "quiz-final-home-brewer",
    question_text: "Mengapa burr baja pada grinder manual tidak boleh dicuci menggunakan air mengalir?",
    question_type: "multiple_choice",
    order_index: 8,
    explanation: "Air akan memicu oksidasi mikro dan karat pada mata pisau burr baja, yang merusak ketajaman dan meninggalkan rasa logam pada kopi.",
    answers: [
      { id: "ans-hb-8a", question_id: "q-hb-8", answer_text: "Air memicu karat mikro pada mata pisau baja yang merusak ketajaman gilingan", is_correct: true, order_index: 1 },
      { id: "ans-hb-8b", question_id: "q-hb-8", answer_text: "Grinder akan menyusut ukurannya", is_correct: false, order_index: 2 },
      { id: "ans-hb-8c", question_id: "q-hb-8", answer_text: "Warna burr akan luntur ke kopi berikutnya", is_correct: false, order_index: 3 },
      { id: "ans-hb-8d", question_id: "q-hb-8", answer_text: "Kopi akan terasa asin", is_correct: false, order_index: 4 },
    ],
  },
  ...BARISTA_QUESTIONS,
  ...HOME_BREWER_QUESTIONS,
  ...ROASTER_QUESTIONS,
  ...Q_GRADER_QUESTIONS,
  ...POST_HARVEST_QUESTIONS,
  ...COFFEE_BUSINESS_QUESTIONS,
];

// 8. INITIAL ENROLLMENTS
export const SEED_ENROLLMENTS: Enrollment[] = [
  {
    id: 'enr-budi-found',
    user_id: 'user-budi',
    learning_path_id: 'path-foundation',
    status: 'active',
    progress_percent: 57,
    enrolled_at: '2026-08-16T10:00:00Z',
    completed_at: null,
    last_accessed_at: '2026-09-06T03:00:00Z',
  },
  {
    id: 'enr-sari-found',
    user_id: 'user-sari',
    learning_path_id: 'path-foundation',
    status: 'completed',
    progress_percent: 100,
    enrolled_at: '2026-08-11T09:00:00Z',
    completed_at: '2026-08-25T14:30:00Z',
    last_accessed_at: '2026-09-05T19:00:00Z',
  },
  {
    id: 'enr-sari-home',
    user_id: 'user-sari',
    learning_path_id: 'path-home-brewer',
    status: 'active',
    progress_percent: 30,
    enrolled_at: '2026-08-26T08:00:00Z',
    completed_at: null,
    last_accessed_at: '2026-09-06T02:30:00Z',
  },
];

// 9. INITIAL CERTIFICATES
export const SEED_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-sari-found',
    user_id: 'user-sari',
    learning_path_id: 'path-foundation',
    certificate_number: 'CHE-2026-FOUND-000188',
    certificate_url: '/verify/che-sari-fnd-8823',
    share_token: 'che-sari-fnd-8823',
    issued_at: '2026-08-25T14:30:00Z',
    user_name: 'Sari Wulandari',
    path_title: 'Foundation: Kopi dari Hulu ke Hilir',
    grade_text: 'Distinction (Score: 95%)',
  },
];

// 10. FORUM POSTS & COMMENTS
export const SEED_POSTS: Post[] = [
  {
    id: 'post-1',
    user_id: 'user-budi',
    title: 'Perbedaan Rasa Yellow Honey vs Black Honey saat diseduh V60?',
    content:
      'Halo teman-teman! Saya baru mencoba biji Gayo Honey Process. Di kemasannya tertulis "Black Honey", aromanya manis sekali seperti kismis. Apa beda mendasarnya dibanding Yellow Honey saat diekstraksi dengan V60? Apakah perlu suhu air yang berbeda?',
    category: 'processing',
    likes_count: 14,
    comments_count: 2,
    is_pinned: false,
    created_at: '2026-09-04T10:15:00Z',
    author_name: 'Budi Santoso',
    author_avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    author_role: 'learner',
    author_coffee_role: 'barista',
  },
  {
    id: 'post-2',
    user_id: 'user-sari',
    title: 'Tips Konsistensi Microfoam untuk Latte Art Tulip dengan Susu Oat',
    content:
      'Sedang latihan bikin tulip latte art di rumah pakai oat milk. Tapi busanya sering cepat pecah dan memisah dari espresso dalam 2 menit. Apakah suhu steaming oat milk harus lebih rendah dari susu sapi?',
    category: 'barista',
    likes_count: 23,
    comments_count: 3,
    is_pinned: true,
    created_at: '2026-09-05T08:30:00Z',
    author_name: 'Sari Wulandari',
    author_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    author_role: 'learner',
    author_coffee_role: 'home_brewer',
  },
  {
    id: 'post-3',
    user_id: 'user-hendra',
    title: 'Agronomi: Mengapa Biji Kopi Toraja Memiliki Body Lebih Tebal dari Jawa?',
    content:
      'Mari diskusikan sisi agronomi! Toraja berada di rentang altitude 1.400 - 1.800 mdpl dengan formasi tanah liat berlempung vulkanis tua. Varietas S-795 dan Typica lokal di sana mengalami siklus fotosintesis lambat yang memadatkan selulosa biji. Ini alasan utama mengapa di meja cupping, Toraja selalu menonjolkan sirup cokelat pekat dan body tebal.',
    category: 'agronomy',
    likes_count: 48,
    comments_count: 4,
    is_pinned: false,
    created_at: '2026-09-02T14:00:00Z',
    author_name: 'Fahrul M.W (Q Grader)',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    author_role: 'expert',
    author_coffee_role: 'q_grader',
  },
];

export const SEED_COMMENTS: Comment[] = [
  {
    id: 'comm-1',
    post_id: 'post-1',
    user_id: 'user-hendra',
    parent_comment_id: null,
    content:
      'Halo Budi! Beda utamanya ada pada sisa mucilage (lendir gula) saat dijemur. Yellow Honey menyisakan ~25% mucilage dan dijemur cepat di bawah matahari terik, sehingga rasanya lebih clean dan asam buahnya cerah. Sedangkan Black Honey menyisakan 100% mucilage dan dijemur sangat lambat di tempat teduh (slow drying), memicu fermentasi alami gula yang menghasilkan rasa madu karamel, body sirup tebal, dan aroma kismis. Untuk V60 Black Honey, gunakan suhu air sedikit lebih rendah (89°C - 90°C) agar rasa manis karamelnya tidak berubah menjadi pahit gosong.',
    is_expert_answer: true,
    likes_count: 18,
    created_at: '2026-09-04T11:20:00Z',
    author_name: 'Fahrul M.W (Q Grader)',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    author_role: 'expert',
    author_coffee_role: 'q_grader',
  },
  {
    id: 'comm-2',
    post_id: 'post-1',
    user_id: 'user-sari',
    parent_comment_id: null,
    content: 'Wah penjelasan Kak Hendra jelas banget! Kebetulan aku juga baru nyeduh Gayo Black Honey pakai rasio 1:16 di 90°C, aftertaste manisnya tahan lama banget di mulut.',
    is_expert_answer: false,
    likes_count: 4,
    created_at: '2026-09-04T12:05:00Z',
    author_name: 'Sari Wulandari',
    author_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    author_role: 'learner',
    author_coffee_role: 'home_brewer',
  },
  {
    id: 'comm-3',
    post_id: 'post-2',
    user_id: 'user-hendra',
    parent_comment_id: null,
    content:
      'Tepat sekali Sari! Protein oat milk (kebanyakan berbasis protein nabati dan minyak canola teresterifikasi) sangat sensitif terhadap panas. Jaga suhu steaming oat milk maksimal di **55°C – 58°C**. Jangan pernah lewat dari 60°C karena emulsi minyaknya akan pecah. Saat pouring, campur kanvas lebih lembut karena berat jenis oat milk lebih padat dibanding susu sapi.',
    is_expert_answer: true,
    likes_count: 15,
    created_at: '2026-09-05T09:10:00Z',
    author_name: 'Fahrul M.W (Q Grader)',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    author_role: 'expert',
    author_coffee_role: 'q_grader',
  },
];

// 11. JOB LISTINGS & APPLICATIONS
export const SEED_JOBS: JobListing[] = [
  {
    id: 'job-1',
    employer_id: 'user-cherry-hq',
    company_name: 'Cherry Coffee Roastery',
    company_logo: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=120&auto=format&fit=crop&q=80',
    title: 'Senior Barista & Head of Bar',
    description:
      'Kami mencari Senior Barista berpengalaman untuk memimpin tim bar di flaghsip store Senopati, Jakarta Selatan. Bertanggung jawab atas kalibrasi espresso harian, dial-in origin musiman, kontrol SOP kebersihan, dan mentoring barista junior. Prioritas diberikan bagi lulusan CherryEdu.',
    location: 'Senopati, Kebayoran Baru',
    city: 'Jakarta Selatan',
    job_type: 'full_time',
    role_type: 'barista',
    salary_range: 'Rp 5.500.000 – Rp 7.500.000',
    requires_certificate: true,
    is_active: true,
    created_at: '2026-09-01T08:00:00Z',
    expires_at: '2026-10-01T00:00:00Z',
  },
  {
    id: 'job-2',
    employer_id: 'user-cherry-hq',
    company_name: 'Titik Temu Coffee',
    company_logo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=120&auto=format&fit=crop&q=80',
    title: 'Manual Brew & Specialty Barista',
    description:
      'Titik Temu membuka kesempatan bagi barista yang menyukai eksplorasi seduh manual (V60, Aeropress, Kalita) dan hospitality hangat. Menguasai sensory tasting notes dan kalibrasi gilingan.',
    location: 'Seminyak, Badung',
    city: 'Bali',
    job_type: 'full_time',
    role_type: 'barista',
    salary_range: 'Rp 4.800.000 – Rp 6.200.000',
    requires_certificate: false,
    is_active: true,
    created_at: '2026-09-03T09:30:00Z',
    expires_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'job-3',
    employer_id: 'user-cherry-hq',
    company_name: 'Anomali Coffee',
    company_logo: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=120&auto=format&fit=crop&q=80',
    title: 'Barista & Coffee Storyteller',
    description:
      'Membawakan cerita kopi Indonesia kepada pengunjung. Wajib memahami perbedaan karakter single origin dari Aceh hingga Papua. Lulusan kurikulum Foundation CherryEdu sangat diutamakan.',
    location: 'Dago, Coblong',
    city: 'Bandung',
    job_type: 'full_time',
    role_type: 'barista',
    salary_range: 'Rp 4.200.000 – Rp 5.500.000',
    requires_certificate: true,
    is_active: true,
    created_at: '2026-09-04T11:00:00Z',
    expires_at: '2026-10-05T00:00:00Z',
  },
  {
    id: 'job-4',
    employer_id: 'user-cherry-hq',
    company_name: 'Tanamera Coffee',
    company_logo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=120&auto=format&fit=crop&q=80',
    title: 'Assistant Roaster & QC Lab',
    description:
      'Membantu master roaster mencatat roast profile, melakukan sample roasting, dan menyiapkan meja cupping evaluasi harian.',
    location: 'Gubeng',
    city: 'Surabaya',
    job_type: 'full_time',
    role_type: 'roaster',
    salary_range: 'Rp 5.000.000 – Rp 6.800.000',
    requires_certificate: true,
    is_active: true,
    created_at: '2026-09-02T13:00:00Z',
    expires_at: '2026-10-02T00:00:00Z',
  },
];

// 12. INITIAL JOB APPLICATIONS
export const SEED_JOB_APPLICATIONS: JobApplication[] = [
  {
    id: 'app-1',
    job_listing_id: 'job-1',
    applicant_id: 'user-budi',
    applicant_name: 'Budi Santoso',
    applicant_email: 'budi@cherryedu.id',
    applicant_coffee_role: 'barista',
    cover_letter: 'Saya telah menyelesaikan seluruh kurikulum Foundation dan Barista Specialization di CherryEdu. Menguasai dial-in espresso rasio 1:2, teknik WDT, dan steaming microfoam silky untuk latte art tulip. Siap berkontribusi di flagship store Senopati.',
    status: 'applied',
    applied_at: '2026-09-04T10:00:00Z',
    has_cherry_cert: true,
    certificate_number: 'CHE-2026-FND-882391',
  },
  {
    id: 'app-2',
    job_listing_id: 'job-2',
    applicant_id: 'user-sari',
    applicant_name: 'Sari Wulandari',
    applicant_email: 'sari@cherryedu.id',
    applicant_coffee_role: 'home_brewer',
    cover_letter: 'Antusiasme saya pada seduh manual V60 dan Aeropress mendorong saya untuk berkarir di Titik Temu Seminyak. Lulusan Foundation dengan predikat Distinction.',
    status: 'reviewed',
    applied_at: '2026-09-05T14:20:00Z',
    has_cherry_cert: true,
    certificate_number: 'CHE-2026-FND-449102',
  },
  {
    id: 'app-3',
    job_listing_id: 'job-3',
    applicant_id: 'user-budi',
    applicant_name: 'Budi Santoso',
    applicant_email: 'budi@cherryedu.id',
    applicant_coffee_role: 'barista',
    cover_letter: 'Sangat tertarik menjadi Coffee Storyteller di Anomali Bandung. Memahami agroklimatologi 19 origin nusantara dari Aceh Gayo hingga Wamena Lembah Baliem.',
    status: 'shortlisted',
    applied_at: '2026-09-03T16:45:00Z',
    has_cherry_cert: true,
    certificate_number: 'CHE-2026-FND-882391',
  },
];

