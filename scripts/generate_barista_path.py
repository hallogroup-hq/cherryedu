barista_ts = '''import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

// ============================================================================
// 1. LEARNING PATH: BARISTA SPECIALIZATION
// ============================================================================

export const BARISTA_PATH: LearningPath = {
  id: 'path-barista',
  title: 'Barista Specialization Path: Sertifikasi Profesional Kompetensi Bar',
  slug: 'barista-specialization',
  description:
    'Kurikulum kejuruan barista komprehensif berstandar industri spesialti internasional: dial-in espresso presisi 9 bar, kimia susu microfoam silky, seni latte art lanjutan, manajemen multi-order jam sibuk, sanitasi preventif mesin komersial, racikan signature drink craft, kalibrasi indra rasa, hingga ergonomi alur kerja bar.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'barista',
  level: 'full',
  is_free: false,
  is_published: true,
  estimated_hours: 36,
  total_modules: 10,
  created_at: '2026-08-05T00:00:00Z',
};

// ============================================================================
// 2. MODULES: BARISTA SPECIALIZATION (MOD-B1 s/d MOD-B10)
// ============================================================================

export const BARISTA_MODULES: Module[] = [
  {
    id: 'mod-b1',
    learning_path_id: 'path-barista',
    title: 'Modul B-1: Dial-In Espresso Komersial & Kalibrasi Resep Presisi',
    description:
      'Termodinamika ekstraksi 9 bar, kalibrasi dosis bubuk, rasio brew yield 1:2, flow rate, dan eliminasi cacat channeling menggunakan teknik WDT & bottomless portafilter.',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b2',
    learning_path_id: 'path-barista',
    title: 'Modul B-2: Sains Steaming Susu & Tekstur Microfoam Silky',
    description:
      'Denaturasi protein whey & kasein pada suhu 55°C–65°C, dinamika posisi steam wand nozzle, teknik vortexing, serta penanganan susu nabati (oat, almond, soy).',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b3',
    learning_path_id: 'path-barista',
    title: 'Modul B-3: Seni Latte Art Lanjutan & Ergonomi Tuangan',
    description:
      'Menguasai mekanika kanvas crema, laju aliran tuangan, dan teknik menuang pola simetris: Solid Heart, Winged Tulip, Multi-tier Rosetta, hingga Swan.',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b4',
    learning_path_id: 'path-barista',
    title: 'Modul B-4: Manual Brewing di Bar Komersial & Speed-Service',
    description:
      'Manajemen antrean seduh multi-dripper V60 & flat bottom saat peak hour, kalibrasi ekstraksi yield digital, serta teknik bypass batch brew konsisten.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b5',
    learning_path_id: 'path-barista',
    title: 'Modul B-5: Manajemen & Pemeliharaan Mesin Espresso Komersial',
    description:
      'Anatomi dual-boiler vs multi-boiler saturated group, SOP sanitasi kimia harian (backflush Cafiza), penggantian gasket group head, dan pencegahan kerak air.',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b6',
    learning_path_id: 'path-barista',
    title: 'Modul B-6: Signature Beverage & Pembuatan Sirup Craft Spesialti',
    description:
      'Formulasi minuman dingin seimbang 5 rasa dasar, ekstraksi maserasi sirup botani alami, teknik klarifikasi susu (milk washing), dan seni garnish aromatik.',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b7',
    learning_path_id: 'path-barista',
    title: 'Modul B-7: Kalibrasi Sensorik Barista Harian & Dial-In Tasting',
    description:
      'Rutinitas morning cupping tim barista, deteksi rasa under/over-extraction espresso, identifikasi aroma biji tua (stale), dan kalibrasi palet rasa antar shift.',
    order_index: 7,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b8',
    learning_path_id: 'path-barista',
    title: 'Modul B-8: Hospitality, Pelayanan Konsumen & Komunikasi Rasa',
    description:
      'Komunikasi profil rasa kopi tanpa istilah teknis mengintimidasi, SOP menangani komplain rasa & remake minuman, serta psikologi pelayanan pelanggan bar.',
    order_index: 8,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b9',
    learning_path_id: 'path-barista',
    title: 'Modul B-9: Manajemen Inventaris Bar, FIFO & Pengendalian Waste',
    description:
      'SOP FIFO biji kopi sangrai dan susu pasteurisasi, audit purging waste bubuk kopi grinder on-demand, dan checklist opening-closing operasional harian.',
    order_index: 9,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b10',
    learning_path_id: 'path-barista',
    title: 'Modul B-10: Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar',
    description:
      'Pencegahan cedera berulang (RSI carpal tunnel), penataan zona basah-kering meja bar, keselamatan kerja uap panas tinggi, dan alur pergerakan efisien.',
    order_index: 10,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
];
'''

with open('lib/data/paths/baristaData.ts', 'w') as f:
    f.write(barista_ts)

print("Created baristaData.ts base structure")
