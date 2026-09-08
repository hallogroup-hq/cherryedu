-- ==========================================================
-- CherryEdu — Seed Data (Sample / Development)
-- Version: 1.0
-- Run AFTER schema.sql
-- ==========================================================

-- Disable triggers temporarily for cleaner inserts
SET session_replication_role = replica;

-- ==========================================================
-- 1. COLLABORATORS
-- ==========================================================
INSERT INTO collaborators (id, name, slug, bio, photo_url, achievements, instagram, website, is_active, created_at) VALUES
(
  '11111111-0000-0000-0000-000000000001',
  'Fahrul M.W',
  'fahrul-mw',
  'Q Grader & Head Roaster at Cherry Coffee Roastery. Lebih dari 10 tahun mendalami sains kopi specialty Indonesia dari kebun Gayo hingga bar espresso.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  '["WBC Regional Finalist 2024", "Q Grader Certified (CQI Licensed)", "Head Roaster Cherry Coffee Roastery", "Sensory Judge SCA Indonesia 2022-2024"]'::jsonb,
  '@fahrul.mw.coffee',
  'https://cherryroastery.id/team/fahrul',
  true,
  '2026-07-01T10:00:00Z'
);

-- ==========================================================
-- 2. LEARNING PATHS
-- ==========================================================
INSERT INTO learning_paths (id, title, slug, description, thumbnail_url, layer_type, prerequisite_path_id, target_role, level, is_free, is_published, estimated_hours, total_modules, sort_order, created_at) VALUES
(
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Foundation: Kopi dari Hulu ke Hilir',
  'kopi-dari-hulu-ke-hilir',
  'Fondasi wajib seluruh insan kopi Indonesia. Kuasai perjalanan kopi dari pohon, varietas lokal, metode processing, sains roasting, kimia air, hingga sensory & cupping berstandar SCA.',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80',
  'foundation',
  NULL,
  'all',
  'beginner',
  true,
  true,
  12,
  7,
  1,
  '2026-08-01T00:00:00Z'
),
(
  'aaaaaaaa-0000-0000-0000-000000000002',
  'Barista Specialization Path',
  'barista-specialization',
  'Jalur komprehensif menjadi barista profesional siap kerja. Dari espresso dial-in presisi, sains susu & latte art, manual brew tingkat lanjut, hingga manajemen bar & SOP coffee shop.',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80',
  'specialization',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'barista',
  'full',
  false,
  true,
  24,
  10,
  2,
  '2026-08-05T00:00:00Z'
),
(
  'aaaaaaaa-0000-0000-0000-000000000003',
  'Home Brewer Specialization Path',
  'home-brewer-specialization',
  'Eksplorasi seduh rumahan tanpa batas. Kuasai V60, Aeropress, French Press, rekayasa air seduh, eksperimen suhu & agitasi, hingga kalibrasi indra rasa untuk secangkir kopi sempurna di rumah.',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
  'specialization',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'home_brewer',
  'full',
  true,
  true,
  18,
  10,
  3,
  '2026-08-05T00:00:00Z'
),
(
  'aaaaaaaa-0000-0000-0000-000000000004',
  'Roaster Path (Segera Hadir)',
  'roaster-path',
  'Green bean evaluation, RoR curves, drum vs air roaster, development time ratio, dan cupping quality control.',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
  'specialization',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'roaster',
  'advanced',
  false,
  false,
  20,
  8,
  4,
  '2026-08-10T00:00:00Z'
);

-- ==========================================================
-- 3. MODULES (Foundation F-1 through F-7)
-- ==========================================================
INSERT INTO modules (id, learning_path_id, title, description, order_index, sort_order, is_locked, is_published, created_at) VALUES
(
  'bbbbbbbb-0000-0000-0000-000000000001',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-1: Ekosistem Industri Kopi',
  'Pahami sejarah perjalanan kopi, peta industri dari petani hingga penikmat, dan filosofi specialty coffee.',
  1, 1, false, true, '2026-08-01T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000002',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-2: Agronomi & Pertanian Kopi',
  'Anatomi tanaman kopi, faktor ketinggian (altitude), tanah vulkanik, panen petik merah, dan peta origin Indonesia.',
  2, 2, false, true, '2026-08-01T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000003',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-3: Varietas & Genetika Kopi',
  'Spesies Arabika, Robusta, Liberika, varietas lokal Indonesia (Ateng Super, Tim-Tim, Sigarar Utang), dan cara membaca label kemasan.',
  3, 3, false, true, '2026-08-01T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000004',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-4: Processing Methods (Pasca Panen)',
  'Natural, Washed, Honey (Yellow, Red, Black), Anaerobic, hingga inovasi Co-fermentasi buah serta pengaruhnya ke profil cangkir.',
  4, 4, false, true, '2026-08-01T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000005',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-5: Roasting Science',
  'Transformasi kimia dalam drum roaster: Reaksi Maillard, First Crack, tingkat sangrai (Light-Medium-Dark), dan pentingnya degassing.',
  5, 5, false, true, '2026-08-01T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000006',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-6: Water Science for Coffee',
  'Air menyusun 98% dari secangkir kopi. Pelajari TDS, pH, kalsium, magnesium, bikarbonat, dan dampaknya pada ekstraksi.',
  6, 6, false, true, '2026-08-01T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000007',
  'aaaaaaaa-0000-0000-0000-000000000001',
  'Modul F-7: Sensory & Cupping Standar SCA',
  'Melatih indra pengecap dan penciuman, membaca SCA Flavor Wheel, protokol cupping resmi, dan merumuskan tasting notes.',
  7, 7, false, true, '2026-08-01T00:00:00Z'
),
-- Barista path modules
(
  'bbbbbbbb-0000-0000-0000-000000000011',
  'aaaaaaaa-0000-0000-0000-000000000002',
  'Modul B-1: Pengenalan Dunia Bar & Etika Barista',
  'Peran sentral barista di industri, customer hospitality, dan pengenalan workflow bar.',
  1, 1, false, true, '2026-08-05T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000012',
  'aaaaaaaa-0000-0000-0000-000000000002',
  'Modul B-2: Espresso Fundamentals',
  'Anatomi portafilter, basket size, teknik tamping tegak lurus, dan membaca crema.',
  2, 2, false, true, '2026-08-05T00:00:00Z'
),
-- Home Brewer path modules
(
  'bbbbbbbb-0000-0000-0000-000000000021',
  'aaaaaaaa-0000-0000-0000-000000000003',
  'Modul H-1: Memulai Home Brewing Tanpa Bingung',
  'Memilih kopi pertama, single origin vs house blend, dan memahami informasi kemasan roastery.',
  1, 1, false, true, '2026-08-05T00:00:00Z'
),
(
  'bbbbbbbb-0000-0000-0000-000000000022',
  'aaaaaaaa-0000-0000-0000-000000000003',
  'Modul H-2: Setup Alat Seduh Esensial di Rumah',
  'Mengapa Burr Grinder lebih baik daripada Blade Grinder, pentingnya timbangan digital, dan ketel leher angsa.',
  2, 2, false, true, '2026-08-05T00:00:00Z'
);

-- ==========================================================
-- 4. LESSONS (3 sample lessons from F-1)
-- ==========================================================
INSERT INTO lessons (id, module_id, collaborator_id, title, content, content_type, duration_minutes, order_index, sort_order, status, is_free, is_published, summary, key_takeaways, created_at) VALUES
(
  'cccccccc-0000-0000-0000-000000000001',
  'bbbbbbbb-0000-0000-0000-000000000001',
  '11111111-0000-0000-0000-000000000001',
  'Sejarah Kopi Dunia: Dari Dataran Tinggi Kaffa ke Batavia 1696',
  '# Sejarah Kopi Dunia: Dari Kaffa ke Batavia 1696

Kopi bukan sekadar komoditas perkebunan biasa. Ia adalah pemicu revolusi sosial, intelektual, dan perdagangan lintas benua selama lebih dari lima abad.

### Legenda Kaldi dan Hutan Kaffa Ethiopia
Kisah kopi berawal di hutan hujan dataran tinggi Kaffa, Ethiopia barat daya sekitar abad ke-9 Masehi. Seorang penggembala kambing muda bernama Kaldi memperhatikan perilaku aneh kawanan kambingnya: mereka melompat-lompat berenergi setelah memakan buah beri merah ranum dari semak liar.

### Monopoli Yaman & Pelabuhan Al-Mukha
Pada abad ke-15, tanaman kopi dibawa menyeberangi Laut Merah menuju semenanjung Arab. Bangsa Arab menyebut minuman berenergi ini sebagai *qahwah*.

### Masuknya Kopi ke Indonesia (1696 - 1699)
Pada tahun 1696, Gubernur Jenderal VOC mengirimkan bibit kopi Arabika varietas Typica pertama ke Batavia. Pada tahun 1711, VOC melakukan ekspor perdana kopi Jawa ke Amsterdam. Kualitas kopi dari Jawa begitu superior hingga kata **"Java"** resmi diadopsi dalam bahasa Inggris sebagai sinonim untuk kopi.',
  'text',
  10,
  1, 1,
  'published',
  true, true,
  'Menelusuri asal-usul legenda Kaldi di Ethiopia, perdagangan Yaman di Pelabuhan Al-Mukha, hingga tibanya bibit Arabika VOC di Batavia pada tahun 1696 yang melahirkan istilah legendaris ''A Cup of Java''.',
  '["Tanaman kopi Arabika liar berasal dari hutan dataran tinggi Kaffa, Ethiopia Barat Daya.", "Bangsa Arab di Yaman adalah yang pertama membudidayakan dan memanggang biji kopi sejak abad ke-15 melalui pelabuhan legendaris Al-Mukha (Mocha).", "Tahun 1696 VOC membawa bibit Arabika Typica dari Malabar India ke Batavia.", "Pulau Jawa menjadi produsen kopi terbesar dunia abad ke-18 hingga melahirkan istilah global ''A Cup of Java''."]'::jsonb,
  '2026-08-01T00:00:00Z'
),
(
  'cccccccc-0000-0000-0000-000000000002',
  'bbbbbbbb-0000-0000-0000-000000000001',
  NULL,
  'Peta Rantai Nilai: 6 Titik Kritis dari Hulu ke Hilir',
  '# Peta Rantai Nilai: 6 Titik Kritis dari Hulu ke Hilir

Secangkir specialty coffee beraroma melati dan buah persik di sebuah kafe urban tidak tercipta secara kebetulan. Kopi tersebut telah melewati rantai nilai (*value chain*) yang sangat panjang.

### 6 Titik Rantai Nilai
1. **Farmer (Petani Kopi)** — Memetik ceri merah matang selektif
2. **Processor / Wet Mill** — Fermentasi terkontrol & penjemuran 10-12% kadar air
3. **Trader & Dry Mill** — Hulling, grading, QC cupping, ekspor GrainPro
4. **Roaster** — Profiling termal, Reaksi Maillard, degassing optimal
5. **Barista & Brewer** — Kimia air, kalibrasi gilingan, hospitality
6. **Conscious Consumer** — Apresiasi rasa & kesediaan membayar harga adil

> **Hukum Pelestarian Kualitas Kopi**: Kualitas kopi adalah proses penurunan bertahap. Tidak ada satu pun pihak di hilir yang bisa menaikkan skor bawaan pohon.',
  'text',
  12,
  2, 2,
  'published',
  true, true,
  'Memahami anatomi rantai pasok industri kopi modern: Petani, Processor, Eksportir/Trader, Roaster, Barista, dan Konsumen.',
  '["Kualitas kopi adalah proses degradatif: potensi rasa 100% diciptakan di kebun oleh petani.", "Enam titik rantai nilai: Petani -> Processor -> Trader/Dry Mill -> Roaster -> Barista -> Konsumen.", "Kesalahan di hulu tidak pernah bisa diperbaiki oleh mesin roasting atau teknik barista terhebat.", "Direct Trade memotong perantara dan memastikan petani menerima margin yang adil."]'::jsonb,
  '2026-08-01T00:00:00Z'
),
(
  'cccccccc-0000-0000-0000-000000000003',
  'bbbbbbbb-0000-0000-0000-000000000001',
  NULL,
  'Specialty Coffee vs Kopi Komersial: Standar Resmi SCA',
  '# Specialty Coffee vs Kopi Komersial

Di pasar global, industri kopi terbelah menjadi dua dunia: **Kopi Komersial** dan **Specialty Coffee**. Istilah *Specialty Coffee* pertama kali dicetuskan oleh Erna Knutsen pada tahun 1974.

### Tiga Pilar Standar SCA

#### 1. Skor Cupping Minimal 80 Poin
| Rentang Skor | Klasifikasi |
|---|---|
| 90.00 – 100.00 | Super Outstanding (Presidential) |
| 85.00 – 89.99 | Excellent (Specialty Grade) |
| 80.00 – 84.99 | Very Good (Specialty Grade) |
| < 80.00 | Below Specialty (Commercial) |

#### 2. Kriteria Fisik Green Bean
Dalam **350 gram** sampel: **0 Primary Defects**, maksimal 5 Secondary Defects, kadar air **10.0% – 12.0%**.

#### 3. Keterlacakan Penuh (Full Traceability)
Kemasan kopi specialty selalu mencantumkan: negara/region, nama kebun, ketinggian tanam (mdpl), varietas botani, dan metode pasca panen.',
  'text',
  10,
  3, 3,
  'published',
  true, true,
  'Membongkar kriteria ketat Specialty Coffee Association (SCA): ambang batas skor cupping 80+, toleransi 0 cacat primer, serta transparansi rantai pasok.',
  '["Specialty Coffee WAJIB meraih skor cupping minimal 80.0 poin pada protokol standar SCA.", "Dalam 350 gram sampel green bean harus memiliki NOL (0) Primary Defect dan maksimal 5 Secondary Defects.", "Kopi komersial menitikberatkan pada kuantitas tonase dan harga murah, specialty pada cita rasa kompleks dan keterlacakan.", "Kopi specialty dipanggang ringan untuk menonjolkan keunikan terroir; kopi komersial disangrai gelap untuk menutupi cacat."]'::jsonb,
  '2026-08-01T00:00:00Z'
);

-- Sample lesson blocks for lesson 1
INSERT INTO lesson_blocks (id, lesson_id, type, content, order_index, created_at) VALUES
(
  'dddddddd-0000-0000-0000-000000000001',
  'cccccccc-0000-0000-0000-000000000001',
  'callout',
  '{"variant": "note", "text": "Mengetahui bahwa tanah Indonesia adalah rumah bagi pohon-pohon kopi tua yang telah berumur lebih dari 300 tahun memberikan perspektif mendalam bagi setiap barista."}',
  1,
  '2026-08-01T00:00:00Z'
),
(
  'dddddddd-0000-0000-0000-000000000002',
  'cccccccc-0000-0000-0000-000000000001',
  'text',
  '{"body": "**Timeline Singkat Sejarah Kopi Indonesia:**\n\n| Periode | Peristiwa |\n|---|---|\n| Abad ke-9 | Penemuan di Kaffa, Ethiopia |\n| Abad ke-15 | Monopoli Yaman via Al-Mukha |\n| 1696 & 1699 | Bibit Arabika VOC ke Batavia |\n| 1711 | Ekspor perdana ke Amsterdam |\n| 1830 - 1870 | Cultuurstelsel (Tanam Paksa) |"}',
  2,
  '2026-08-01T00:00:00Z'
);

-- ==========================================================
-- 5. BADGES
-- ==========================================================
INSERT INTO badges (id, name, description, icon_url, trigger_type, trigger_value) VALUES
('eeeeeeee-0000-0000-0000-000000000001', 'Pioneer Kopi', 'Bergabung dengan ekosistem belajar kopi CherryEdu.', '🌱', 'streak', 1),
('eeeeeeee-0000-0000-0000-000000000002', 'Penakluk Hulu ke Hilir', 'Menyelesaikan seluruh kurikulum Foundation Layer.', '☕', 'complete_path', 1),
('eeeeeeee-0000-0000-0000-000000000003', 'Sensory Nilai 100', 'Mendapatkan skor sempurna 100% pada salah satu kuis modul.', '🎯', 'quiz_perfect', 100),
('eeeeeeee-0000-0000-0000-000000000004', 'Dedikasi 7 Hari', 'Mempertahankan streak belajar selama 7 hari berturut-turut.', '🔥', 'streak', 7),
('eeeeeeee-0000-0000-0000-000000000005', 'Certified Barista Ready', 'Menyelesaikan Barista Specialization Path dan ujian akhir.', '🧑‍🍳', 'complete_path', 2),
('eeeeeeee-0000-0000-0000-000000000006', 'Alchemist Seduh Rumahan', 'Menyelesaikan Home Brewer Specialization Path.', '⚗️', 'complete_path', 3),
('eeeeeeee-0000-0000-0000-000000000007', 'Suara Komunitas', 'Membuat postingan atau diskusi pertama di forum CherryEdu.', '💬', 'first_post', 1),
('eeeeeeee-0000-0000-0000-000000000008', 'Langkah Awal Karier', 'Mengirimkan lamaran kerja pertama melalui Bursa Kerja Kopi.', '💼', 'first_apply', 1);

-- ==========================================================
-- 6. SAMPLE CMS PAGE
-- ==========================================================
INSERT INTO pages (id, slug, title, blocks, status, created_at) VALUES
(
  'ffffffff-0000-0000-0000-000000000001',
  'tentang-cherryedu',
  'Tentang CherryEdu',
  '[
    {"type": "hero", "title": "Platform Belajar Kopi Specialty Indonesia", "subtitle": "Dari biji kopi di kebun Gayo hingga espresso di bar — CherryEdu hadir untuk mendidik setiap insan kopi Indonesia."},
    {"type": "text", "body": "CherryEdu adalah platform e-learning specialty coffee pertama di Indonesia yang dirancang khusus untuk barista, home brewer, roaster, dan pecinta kopi di seluruh nusantara."},
    {"type": "stats", "items": [{"label": "Pelajar Aktif", "value": "2,400+"}, {"label": "Modul Pelajaran", "value": "47"}, {"label": "Kolaborator Expert", "value": "12"}, {"label": "Sertifikat Terbit", "value": "380+"}]}
  ]'::jsonb,
  'published',
  '2026-08-01T00:00:00Z'
);

-- ==========================================================
-- 7. SAMPLE ADMIN NOTIFICATIONS
-- ==========================================================
INSERT INTO admin_notifications (id, type, message, is_read, metadata, created_at) VALUES
(
  'gggggggg-0000-0000-0000-000000000001',
  'user',
  '5 pengguna baru mendaftar dalam 24 jam terakhir.',
  false,
  '{"count": 5, "period": "24h"}'::jsonb,
  NOW() - INTERVAL '2 hours'
),
(
  'gggggggg-0000-0000-0000-000000000002',
  'content',
  'Lesson "Sejarah Kopi Dunia" telah berhasil dipublikasikan.',
  false,
  '{"lesson_id": "cccccccc-0000-0000-0000-000000000001", "lesson_title": "Sejarah Kopi Dunia: Dari Dataran Tinggi Kaffa ke Batavia 1696"}'::jsonb,
  NOW() - INTERVAL '1 day'
),
(
  'gggggggg-0000-0000-0000-000000000003',
  'job',
  'Lowongan baru "Head Barista - Jakarta Selatan" menunggu review.',
  false,
  '{"job_title": "Head Barista", "city": "Jakarta Selatan"}'::jsonb,
  NOW() - INTERVAL '3 hours'
),
(
  'gggggggg-0000-0000-0000-000000000004',
  'system',
  'Database backup berhasil dijalankan otomatis.',
  true,
  '{"backup_size_mb": 45, "duration_seconds": 12}'::jsonb,
  NOW() - INTERVAL '6 hours'
);

-- Re-enable triggers
SET session_replication_role = DEFAULT;

-- Verify counts
SELECT 'collaborators' AS tbl, COUNT(*) FROM collaborators
UNION ALL SELECT 'learning_paths', COUNT(*) FROM learning_paths
UNION ALL SELECT 'modules', COUNT(*) FROM modules
UNION ALL SELECT 'lessons', COUNT(*) FROM lessons
UNION ALL SELECT 'lesson_blocks', COUNT(*) FROM lesson_blocks
UNION ALL SELECT 'badges', COUNT(*) FROM badges
UNION ALL SELECT 'pages', COUNT(*) FROM pages
UNION ALL SELECT 'admin_notifications', COUNT(*) FROM admin_notifications;
