import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

// ============================================================================
// 1. LEARNING PATH DEFINITION: Q GRADER & SENSORY SPECIALIST PATH
// ============================================================================

export const Q_GRADER_PATH: LearningPath = {
  id: 'path-qgrader',
  title: 'Q Grader & Sensory Specialist Path: Standar Evaluasi Kualitas Kopi Dunia',
  slug: 'q-grader-path',
  description:
    'Kuasai standar evaluasi objektif mutu kopi spesialti internasional: fisiologi pengecapan & penghidu retronasal, protokol cupping resmi SCA 2024, kit olfaktori 36 aroma Le Nez du Café, kimia asam organik, uji triangulasi CQI, dan kalibrasi skor 80+.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'q_grader',
  level: 'advanced',
  is_free: false,
  is_published: true,
  estimated_hours: 30,
  total_modules: 6,
  created_at: '2026-08-10T00:00:00Z',
};

// ============================================================================
// 2. MODULES: Q GRADER PATH (MOD-Q1 s/d MOD-Q6)
// ============================================================================

export const Q_GRADER_MODULES: Module[] = [
  {
    id: 'mod-q1',
    learning_path_id: 'path-qgrader',
    title: 'Modul Q-1: Fisiologi Sensorik Manusia & Anatomi Pengecapan',
    description:
      'Membedah reseptor papila lidah, sistem olfaktori ortonasal vs retronasal, stimulasi saraf trigeminal (mouthfeel/body), dan manajemen kelelahan sensorik (sensory fatigue).',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-q2',
    learning_path_id: 'path-qgrader',
    title: 'Modul Q-2: Standar Fisik & Protokol Laboratorium Cupping SCA 2024',
    description:
      'Rasio emas 8.25g per 150ml air (1:18.18), standar air seduh TDS 75-150 ppm, ukuran gilingan 20-mesh sieve, waktu 4 menit break crust, skimming, dan evaluasi multi-suhu.',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-q3',
    learning_path_id: 'path-qgrader',
    title: 'Modul Q-3: Pelatihan Penciuman Olfaktori & Kit Le Nez du Café',
    description:
      'Menghafal dan mengalibrasi 36 aroma standar dunia: kelompok Enzymatic (buah/bunga), Sugar Browning (karamel/cokelat), Dry Distillation (rempah/kayu), dan Aromatic Taints (cacat bau).',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-q4',
    learning_path_id: 'path-qgrader',
    title: 'Modul Q-4: Kimiawi & Diferensiasi Asam Organik Kopi Spesialti',
    description:
      'Identifikasi presisi asam sitrat (citric), malat (malic), fosfat (phosphoric), asetat (acetic), serta kinetika degradasi asam klorogenat menjadi asam kina dan kafeat.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-q5',
    learning_path_id: 'path-qgrader',
    title: 'Modul Q-5: Uji Triangulasi Kritis & Ambang Batas Sensorik (Threshold Testing)',
    description:
      'Protokol resmi ujian triangulasi CQI (3 cangkir per set di bawah pencahayaan merah gelap) dan pengujian sensitivitas ambang batas konsentrasi larutan dasar manis, asam, dan asin.',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-q6',
    learning_path_id: 'path-qgrader',
    title: 'Modul Q-6: Penguasaan SCA Cupping Form, Kalibrasi Skor 80+ & Deteksi Cacat Rasa',
    description:
      'Kalkulasi skor 10 atribut lembar cupping SCA, deteksi cacat fisik/kimiawi (Taint penalti 2 poin vs Fault penalti 4 poin), validasi Clean Cup & Sweetness, dan konsistensi panel.',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
];

// ============================================================================
// 3. LESSONS: Q GRADER SPECIALIST PATH
// ============================================================================

export const Q_GRADER_LESSONS: Lesson[] = [
  // --- Modul Q-1: Fisiologi Sensorik Manusia ---
  {
    id: 'les-q1-1',
    module_id: 'mod-q1',
    title: 'Fisiologi Pengecapan: Papila Lidah, Penghidu Retronasal, dan Saraf Trigeminal',
    content: `
# Fisiologi Sensorik Kopi: Anatomi Pengecapan & Penciuman Manusia

Sebagai calon **Licensed Q Grader**, alat ukur paling presisi dan berharga yang Anda miliki bukanlah spektrometer atau refraktometer digital, melainkan **sistem biologi sensorik tubuh Anda sendiri**. Memahami jalur saraf dan mekanisme fisiologis bagaimana manusia mempersepsikan kopi adalah pondasi pertama sertifikasi CQI (*Coffee Quality Institute*).

---

### 1. Mitos "Peta Rasa Lidah" vs Sains Gustatori Modern
Di era terdahulu, buku teks sekolah sering memuat peta lidah (*tongue taste map*) yang mengklaim ujung lidah hanya merasakan manis, samping untuk asam, dan belakang untuk pahit. 

> [!IMPORTANT]
> **Sains modern membuktikan peta rasa lidah tersebut 100% keliru!**
> Setiap papila pengecap yang memiliki kuncup rasa (*taste buds*) mengandung sel reseptor untuk mendeteksi **seluruh lima rasa dasar**: Manis (*Sweet*), Asam (*Sour*), Asin (*Salty*), Pahit (*Bitter*), dan Umami (*Savory*).

#### Tiga Jenis Papila Pengecap pada Lidah:
1. **Papila Fungiform**: Berbentuk seperti jamur kecil, tersebar merata di bagian dua pertiga depan lidah. Masing-masing menampung 1–5 taste buds.
2. **Papila Foliate**: Berupa lipatan-lipatan vertikal di sisi samping belakang lidah, menampung puluhan taste buds yang sangat sensitif terhadap keasaman dan keasinan.
3. **Papila Circumvallate**: Tonjolan besar berbentuk kubah yang membentuk pola huruf 'V' di dasar belakang lidah. Mengandung ratusan taste buds yang memiliki sensitivitas luar biasa tinggi terhadap molekul pahit (*alkaloid & quinic acid*) sebagai mekanisme pertahanan evolusioner dari zat beracun.

---

### 2. Penghidu Ortonasal vs Retronasal: Dari Mana 80% "Rasa" Berasal?
Secara fisiologis murni, lidah manusia **hanya mampu mendeteksi 5 rasa dasar**. Kompleksitas luar biasa yang kita deskripsikan sebagai "aroma melati", "stroberi matang", "karamel mentega", atau "rempah kayu manis" bukanlah rasa (*taste*), melainkan **Flavor** yang dihasilkan oleh kombinasi gustatori dan penciuman olfaktori.

> ☕ **Persamaan Parameter:**
> **Flavor = Taste (Lidah) + Aroma (Epitel Olfaktori) + Mouthfeel (Saraf Trigeminal)**

* **Olfaction Ortonasal**: Molekul aroma volatil masuk langsung melalui lubang hidung luar saat kita mengendus bubuk kopi kering (*dry fragrance*) atau uap seduhan basah (*wet aroma*).
* **Olfaction Retronasal**: Saat kopi diseruput (*slurping*) ke dalam rongga mulut, suhu hangat tubuh (37°C) mempercepat pelepasan senyawa volatil. Saat kita menelan, terjadi dorongan udara dari rongga faring naik ke belakang langit-langit lunak menuju epitel olfaktori hidung. Inilah yang menciptakan persepsi *in-mouth flavor* dan *aftertaste*.

---

### 3. Peran Saraf Trigeminal (*Trigeminal Nerve / CN V*)
Saraf kranial kelima (Trigeminal) tidak merasakan rasa manis atau asam, melainkan merespon stimulasi somatosensori taktil, suhu, dan kimiawi di dalam mulut:
* **Mouthfeel / Body**: Persepsi kekentalan, berat, dan kelembutan cairan di lidah (dipicu oleh minyak lipid tak larut dan suspensi serat selulosa mikro).
* **Astringency (Sepat / Kering)**: Sensasi kesat berkerut di pipi bagian dalam akibat pengendapan protein saliva oleh senyawa polifenol atau asam klorogenat berlebih.
* **Sensasi Suhu**: Mendeteksi rentang hangat, panas, dan dingin yang memodulasi kecepatan kerja enzim saliva.
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Bedah anatomi fisiologi pengecapan: bantahan mitos peta lidah, peran papila fungiform/circumvallate, penghidu retronasal, dan saraf trigeminal pembentuk mouthfeel.',
    key_takeaways: [
      'Peta rasa lidah terbukti keliru; seluruh taste buds di lidah mampu mendeteksi kelima rasa dasar secara simultan.',
      '80% dari persepsi kompleks rasa kopi berasal dari penghidu retronasal yang naik dari faring ke epitel olfaktori saat kopi diseruput.',
      'Saraf Trigeminal bertanggung jawab atas persepsi taktil somatosensori seperti body, kekentalan, dan astringency (sepat kering).',
    ],
  },
  {
    id: 'les-q1-2',
    module_id: 'mod-q1',
    title: 'Manajemen Kelelahan Sensorik (Sensory Fatigue) & Ambang Deteksi Pengecap',
    content: `
# Sensory Fatigue & Standar Higienitas Evaluator Sensorik

Dalam ujian lisensi Q Grader yang berlangsung selama 3–6 hari berturut-turut, peserta diwajibkan mengevaluasi hingga puluhan set cangkir dan ratusan sampel kopi. Tanpa protokol manajemen sensorik yang ketat, otak dan reseptor lidah akan mengalami kejenuhan atau **kelelahan sensorik (sensory fatigue)** yang menyebabkan deviasi penilaian drastis.

---

### 1. Patologi Sensorik: Adaptasi vs Kelelahan
* **Adaptasi Reseptor**: Ketika sel reseptor olfaktori terpapar molekul volatil yang sama secara terus-menerus (misal aroma kopi pekat di ruang cupping), sel berhenti melepaskan potensial aksi neurotransmiter ke otak. Akibatnya, evaluator menjadi "kebal bau" terhadap aroma tersebut.
* **Kelelahan Gustatori (*Taste Fatigue*)**: Paparan berulang terhadap asam pekat dan tanin menyebabkan pengikisan sementara lapisan mukosa saliva dan penurunan sensitivitas ion natrium/hidrogen pada membran kuncup rasa.

---

### 2. Standar Operasional Pemulihan Sensorik (Reset Protocol)
Untuk menjaga ketajaman indra selama sesi evaluasi intensif:

1. **Air Putih Suhu Ruang**: Berkumurlah dengan air mineral murni bersuhu ruangan (20–24°C) dengan TDS rendah (50–100 ppm) antar cangkir atau antar set sampel. Hindari air es karena suhu dingin mematirasakan ujung saraf trigeminal.
2. **Biskuit Tawar Tanpa Garam (*Water Crackers / Matzo*)**: Kunyahlah secuil biskuit tawar bebas garam, gula, atau mentega (seperti *Carr's Table Water Crackers*). Karbohidrat netral membantu menyerap minyak kopi yang menempel di papila lidah dan merangsang sekresi saliva segar.
3. **Mengendus Kulit Lengan Sendiri (*Olfactory Reset*)**: Jika indra penciuman jenuh, jangan mengendus biji kopi! Mengendus biji kopi justru memperparah adaptasi olfaktori terhadap kopi. Cara terbaik mereset epitel olfaktori adalah dengan menghirup udara dari lipatan kulit lengan sendiri yang bersih dan bebas parfum, karena otak mengenali bau tubuh kita sebagai nilai dasar (*zero baseline*).
4. **Protokol Spit-Out (Meludah)**: Seorang Q Grader profesional **tidak menelan kopi saat sesi cupping**. Selalu ludahkan cairan kopi ke dalam spittoon pribadi untuk mencegah keracunan kafein sistemik, dehidrasi seluler, dan iritasi lambung.

---

### 3. Pantangan Mutlak Menjelang Sesi Cupping:
* **Minimal 1 Jam Sebelum Sesi**: Dilarang merokok, vape, mengunyah permen karet mentol, menyikat gigi dengan pasta gigi beraroma kuat, atau memakan makanan pedas (kapsaisin mengikat reseptor TRPV1 trigeminal dan mematikan sensitivitas selama 2 jam).
* **Parfum & Wewangian**: Dilarang keras mengenakan parfum, minyak wangi, lotion beraroma, atau pomade di dalam ruang laboratorium cupping. Kontaminasi bau eksternal dapat mendiskualifikasi seluruh panel evaluasi.
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Protokol mitigasi sensory fatigue pada sesi evaluasi kopi intensif: reset olfaktori via aroma kulit lengan, biskuit tawar netral, serta pantangan pedas dan wewangian.',
    key_takeaways: [
      'Jangan gunakan biji kopi untuk mereset penciuman; endus lipatan kulit lengan bersih yang tidak berparfum untuk mengembalikan baseline olfaktori.',
      'Biskuit tawar netral dan air suhu ruang berfungsi mengembalikan kelembapan saliva dan membersihkan minyak residu di papila lidah.',
      'Dilarang keras memakai wewangian parfum atau memakan makanan pedas minimal 1 jam sebelum sesi cupping berlangsung.',
    ],
  },

  // --- Modul Q-2: Standar Laboratorium Cupping SCA ---
  {
    id: 'les-q2-1',
    module_id: 'mod-q2',
    title: 'Standar Laboratorium Cupping SCA: Rasio Emas 8.25g per 150ml dan Spesifikasi Air',
    content: `
# Protokol Cupping SCA: Parameter Fisik Laboratorium Presisi

Cupping adalah metode evaluasi sensorik terstandarisasi yang dirancang oleh **Specialty Coffee Association (SCA)** untuk meminimalisasi variabel seduhan mekanis, sehingga profil genetik terroir dan kualitas pengolahan biji kopi dapat dinilai secara murni, objektif, dan dapat direplikasi di seluruh belahan dunia.

---

### 1. Rasio Emas Seduh (*Brewing Ratio*)
Standar resmi SCA menetapkan rasio bubuk kopi terhadap air seduh:

> ☕ **Persamaan Parameter:**
> **Rasio SCA = 8,25 gram (± 0,25 gram) bubuk kopi per 150 ml air**

Hal ini setara dengan rasio konsentrasi **0.055 g/ml** atau mendekati rasio seduh **1 : 18.18**.
* Jika mangkuk cupping Anda bervolume 200 ml, gunakan 11.0 gram kopi.
* Jika bervolume 250 ml, gunakan 13.75 gram kopi.

> [!IMPORTANT]
> **Toleransi Sampel**: Setiap lot kopi yang diuji wajib disiapkan minimal **5 cangkir (5 cups)** untuk mendeteksi keseragaman (*Uniformity*) dan memastikan ada atau tidaknya cangkir cacat (*defect cup*) akibat cacat petik atau fermentasi lokal.

---

### 2. Standar Ukuran Gilingan (*Grind Size Standard*)
Ukuran gilingan cupping berada di rentang gilingan sedikit lebih kasar daripada filter pour-over standar:
* **Spesifikasi SCA**: **70% hingga 75%** partikel bubuk harus lolos melewati ayakan standar **U.S. Standard 20-Mesh Sieve** (ukuran pori-pori 850 mum atau mikron).
* Bubuk kopi digiling langsung ke dalam mangkuk cupping kering maksimal **15 menit** sebelum evaluasi aroma kering (*fragrance*). Jika tidak langsung diseduh, mangkuk wajib ditutup dengan penutup cupping kaca/keramik maksimal 30 menit.

---

### 3. Spesifikasi Air Laboratorium Cupping SCA:

| Parameter Kualitas Air | Standar Target SCA | Batas Toleransi yang Diizinkan |
|---|---|---|
| **Total Dissolved Solids (TDS)** | **150 ppm** | 75 - 250 ppm |
| **Kalsium Hardness (Ca²⁺)** | **50–68 ppm** (as CaCO₃) | 17 - 85 ppm |
| **Total Alkalinitas (Buffer)** | **40 ppm** (as CaCO₃) | 22 - 75 ppm |
| **pH Air** | **7.00** (Netral Murni) | 6.50 - 8.00 |
| **Klorin Bebas (*Chlorine*)** | **0.00 mg/L** | 0.00 mg/L (Nol Mutlak) |
| **Suhu Air Saat Dituangkan** | **93.3°C (200°F)** | ± 1.1°C (92.2°C - 94.4°C) |
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Spesifikasi kuantitatif laboratorium cupping SCA: rasio emas 8.25g per 150ml (1:18.18), standar 20-mesh sieve (850 mikron), dan parameter kimiawi air seduh.',
    key_takeaways: [
      'Rasio resmi cupping SCA adalah 8.25 gram kopi per 150 ml air (1:18.18) dengan minimal 5 cangkir per sampel lot.',
      'Ukuran gilingan cupping harus meloloskan 70-75% partikel melalui ayakan 20-mesh sieve (850 mikron).',
      'Air cupping wajib bebas klorin murni dengan target TDS 150 ppm dan suhu tuang 92.2°C - 94.4°C.',
    ],
  },
  {
    id: 'les-q2-2',
    module_id: 'mod-q2',
    title: 'SOP Pelaksanaan Cupping: Break Crust, Skimming, dan Evaluasi Multi-Temperatur',
    content: `
# Protokol Eksekusi Cupping: Menilai Kopi dari Suhu 93°C hingga 25°C

Evaluasi cupping bukanlah proses yang terburu-buru. Karakteristik senyawa kimia kopi berevolusi secara dramatis seiring penurunan suhu cairan. Seorang Q Grader dilatih untuk menilai atribut rasa pada jendela suhu yang berbeda secara sistematis.

---

### Kronologi Waktu Pelaksanaan Cupping Resmi:

| Waktu | Tindakan Evaluator | Parameter yang Dievaluasi |
|---|---|---|
| **Menit 0:00** | Tuang air 93°C langsung ke bubuk kering | Infusi basah awal; dilarang mengaduk mangkuk |
| **Menit 4:00** | *Break Crust* (3 kali dorongan sendok) | Evaluasi uap aroma basah (*Wet Aroma*) |
| **Menit 5:00** | *Skimming* busa & serpihan mengapung | Membersihkan permukaan hingga jernih |
| **Menit 8:00 – 10:00** | Evaluasi panas pertama (~70°C) | *Flavor* dan *Aftertaste* |
| **Menit 10:00 – 15:00** | Evaluasi hangat (~55°C – 50°C) | *Acidity*, *Body*, dan *Balance* |
| **Menit 15:00 – 25:00** | Evaluasi dingin (~37°C – 25°C) | *Sweetness*, *Clean Cup*, dan *Uniformity* |

---

### 1. Menit 0:00 s/d 4:00: Ekstraksi Tanpa Gangguan
Air panas dituang dengan aliran kontinu hingga mencapai bibir mangkuk, membasahi seluruh bubuk secara serempak. Jangan menyentuh, menggoyang, atau mengaduk mangkuk selama 4 menit pertama. Lapisan bubuk kopi akan terangkat ke permukaan dan membentuk lapisan kerak padat (*crust*).

---

### 2. Menit 4:00: Gerakan Memecah Kerak (*Breaking the Crust*)
Pada tepat menit ke-4:00, posisikan hidung Anda sedekat mungkin di atas mangkuk (jarak ~3–5 cm):
* Celupkan sendok cupping perak/stainless ke dalam mangkuk.
* Lakukan gerakan mendorong lembut ke arah belakang mangkuk sebanyak **3 kali dorongan**.
* Pada saat kerak terpecah, lepasan uap terkonsentrasi yang terperangkap di bawah kerak akan melesat keluar. Hirup secara mendalam untuk mengevaluasi **Aroma Basah (*Wet Aroma / Break Aroma*)**.
* Bilas sendok di mangkuk air panas bersih sebelum beralih ke cangkir berikutnya.

---

### 3. Menit 5:00: Pembersihan Busa Permukaan (*Skimming*)
Gunakan dua sendok cupping secara bersamaan untuk menyendok busa putih kecokelatan (*foam/crema*) dan serpihan bubuk yang mengapung di permukaan mangkuk. Buang ke wadah buangan. Permukaan cairan harus menjadi jernih dan bening. Hindari mengaduk dasar mangkuk agar ampas kopi di bawah tidak terangkat kembali.

---

### 4. Evaluasi Multi-Temperatur:
* **Fase Panas (~70°C, Menit 8–10)**: Seruput kopi (*slurp*) dengan hisapan udara cepat untuk mengatomisasi cairan ke seluruh langit-langit mulut. Nilai **Flavor** dan **Aftertaste**.
* **Fase Hangat (~55°C – 50°C, Menit 10–15)**: Titik di mana keasaman terasa paling hidup. Nilai kualitas dan intensitas **Acidity**, ketebalan dan tekstur **Body**, serta keseimbangan menyeluruh **Balance**.
* **Fase Dingin (~37°C – 25°C, Menit 15–25)**: Saat suhu mendekati suhu tubuh dan suhu ruang, topeng suhu panas telah hilang. Inilah fase krusial untuk memverifikasi **Clean Cup**, konsistensi kemanisan **Sweetness**, dan apakah kelima cangkir memiliki rasa yang seragam (**Uniformity**). Kopi berkualitas rendah akan menampakkan cacat pahit astringent atau bau apak saat dingin.
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'SOP kronologis cupping: menit 4 break crust 3 dorongan sendok, skimming busa, serta protokol evaluasi multi-suhu dari 70°C hingga 25°C.',
    key_takeaways: [
      'Break crust dilakukan tepat pada menit ke-4 dengan 3 kali dorongan sendok untuk mengevaluasi aroma basah uap kopi.',
      'Skimming wajib membersihkan seluruh busa permukaan tanpa mengaduk ampas yang telah mengendap di dasar cangkir.',
      'Evaluasi multi-suhu krusial: keasaman dinilai pada 55°C, sedangkan clean cup dan sweetness diuji saat cairan mendingin pada 37°C - 25°C.',
    ],
  },

  // --- Modul Q-3: Pelatihan Olfaktori & Kit Le Nez du Café ---
  {
    id: 'les-q3-1',
    module_id: 'mod-q3',
    title: 'Kit Le Nez du Café: Menghafal 36 Senyawa Olfaktori Standar Dunia',
    content: `
# Pelatihan Olfaktori: 36 Aroma Kunci Le Nez du Café

Kit **Le Nez du Café** yang diciptakan oleh Jean Lenoir adalah instrumen pelatihan resmi dalam kurikulum Q Grader untuk mengkalibrasi memori penciuman evaluator sensorik di seluruh dunia ke dalam bahasa ilmiah yang terstandarisasi. 36 vial aroma sintetis ini dibagi menjadi empat kategori besar:

---

### 1. Kelompok Enzimatik (*Enzymatic Group*)
Aroma murni turunan proses metabolisme biologis tanaman kopi saat masih di pohon dan buah ceri:
* **Floral (Bunga)**:
  * No. 27: *Coffee Blossom* (Bunga Kopi / Melati)
  * No. 28: *Tea Rose* (Mawar)
* **Fruity (Buah Segar)**:
  * No. 22: *Apple* (Apel Malat)
  * No. 23: *Lemon* (Lemon Sitrat)
  * No. 24: *Apricot* (Aprikot Buah Batu)
  * No. 25: *Coffee Pulp* (Kulit/Daging Ceri Kopi)
  * No. 26: *Blackcurrant* (Kismis Hitam / Khas Kenya)
* **Herby (Rerumputan / Rempah Segar)**:
  * No. 29: *Garden Peas* (Kacang Polong Segar)
  * No. 30: *Cucumber* (Mentimun Segar)
  * No. 31: *Potato* (Kentang Mentah)

---

### 2. Kelompok Pencokelatan Gula (*Sugar Browning Group*)
Aroma hasil reaksi Maillard dan karamelisasi sukrosa selama proses penyangraian:
* **Nutty (Kacang-kacangan)**:
  * No. 9: *Roasted Almond* (Kacang Badam Panggang)
  * No. 10: *Roasted Peanut* (Kacang Tanah Sangrai)
  * No. 11: *Roasted Hazelnut* (Kacang Hazelnut)
  * No. 12: *Walnut* (Kacang Kenari)
* **Caramelly & Toasty (Karamel & Roti Bakar)**:
  * No. 1: *Earth*
  * No. 5: *Toast* (Roti Panggang)
  * No. 6: *Caramel* (Karamel Gula Tebu)
  * No. 8: *Honey* (Madu Alami)
* **Chocolaty (Cokelat)**:
  * No. 13: *Dark Chocolate* (Cokelat Hitam Pahit)
  * No. 14: *Vanilla* (Vanili)

---

### 3. Kelompok Distilasi Kering (*Dry Distillation Group*)
Aroma hasil pembakaran serat selulosa kayu dan minyak volatil pada level sangrai medium-dark hingga dark:
* **Resinous & Spicy (Damar & Rempah Kering)**:
  * No. 15: *Cedar* (Kayu Aras / Damar Pinus)
  * No. 16: *Clove-like* (Cengkeh)
  * No. 17: *Pepper* (Lada Hitam)
  * No. 18: *Coriander Seeds* (Ketumbar)
* **Pyrolytic / Ashy (Pirolisis)**:
  * No. 19: *Blackcurrant-like*
  * No. 20: *Tobacco* (Tembakau Cerutu)
  * No. 21: *Roasted Coffee* (Kopi Sangrai Tua)
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Klasifikasi lengkap 36 aroma Le Nez du Café: kelompok Enzimatik (bunga/buah), Sugar Browning (kacang/karamel), dan Dry Distillation (kayu/rempah).',
    key_takeaways: [
      'Kelompok Enzimatik mencerminkan genetik buah dan terroir kopi (bunga kopi, lemon, apel, kismis hitam).',
      'Kelompok Sugar Browning berasal dari reaksi Maillard dan karamelisasi selama sangrai (hazelnut, karamel, cokelat hitam).',
      'Kelompok Dry Distillation dihasilkan dari pirolisis serat selulosa pada sangrai lebih gelap (kayu aras, cengkeh, tembakau).',
    ],
  },
  {
    id: 'les-q3-2',
    module_id: 'mod-q3',
    title: 'Kelompok Cacat Aromatik (Aromatic Taints & Faults): Earthy, Phenolic, dan Potato Defect',
    content: `
# Diagnosis Cacat Aromatik: Mendeteksi Bau Kontaminan & Mikroba

Keahlian terpenting seorang Q Grader bukanlah sekadar memuji kopi enak, melainkan bertindak sebagai gerbang inspeksi mutu yang mampu mendeteksi **cacat aroma (aromatic taints & defects)** yang dapat menggugurkan grade specialty sebuah kontainer kopi.

---

### 1. Aromatic Taints pada Kit Le Nez du Café:
* **No. 1: Earthy (Bau Tanah Lembap / Lumpur)**:
  * *Penyebab*: Biji kopi dijemur langsung di atas tanah tanpa alas terpal atau raised beds, sehingga menyerap senyawa geosmin dari tanah dan air hujan kotor.
* **No. 2: Potato Defect (Bau Kentang Mentah / Bau Sayur Busuk)**:
  * *Penyebab Kimia*: Senyawa heterosiklik **2-isopropyl-3-methoxypyrazine (IPMP)**.
  * *Mekanisme*: Serangga kepik (*Antestia bug*) menggigit ceri kopi di pohon, menyuntikkan bakteri yang memicu sintesis senyawa IPMP. Satu butir biji kopi yang terkontaminasi IPMP dapat mencemari satu cangkir penuh seduhan dengan bau kentang mentah busuk yang tajam. Sangat umum dijumpai di kawasan Afrika Timur (Rwanda, Burundi).
* **No. 3: Straw / Baggy (Bau Jerami Kering / Bau Karung Goni Basi)**:
  * *Penyebab*: Green bean disimpan terlalu lama (*aged coffee*) di gudang dengan kelembapan tinggi, menyebabkan degradasi lipid dan kontaminasi aroma serat goni karung penyimpanan.
* **No. 4: Rubber / Chemical (Bau Karet Bakar / Kimia)**:
  * *Penyebab*: Umum terjadi pada ceri Robusta yang kontak dengan aspal panas atau penggunaan bahan bakar minyak sintetis saat pengeringan mekanis.

---

### 2. Cacat Fenolik (*Phenol Defect*) & Fermentasi Berlebih (*Over-fermentation*)
* **Cacat Fenol**: Menghasilkan aroma karbol pembersih lantai, plester obat, antiseptik iodin rumah sakit, atau minyak rembesan mesin. Disebabkan oleh infeksi jamur mikroskopis pada ceri yang dipanen lewat matang atau buah yang jatuh ke tanah basah.
* **Over-fermented / Stinkers**: Aroma cuka tajam menyengat, buah busuk terfermentasi, aseton, atau kulit busuk. Disebabkan oleh proses fermentasi basah yang berlangsung terlalu lama sehingga bakteri asam asetat dan kapang pembusuk mendegradasi inti biji kopi.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Analisis kimiawi cacat aroma: geosmin (earthy), senyawa IPMP akibat antestia bug (potato defect), serta kontaminasi fenol dan fermentasi busuk.',
    key_takeaways: [
      'Potato defect disebabkan oleh senyawa 2-isopropyl-3-methoxypyrazine (IPMP) akibat gigitan serangga Antestia bug.',
      'Earthy defect terjadi akibat kontak langsung ceri kopi dengan tanah basah yang menyerap senyawa geosmin.',
      'Cacat fenolik beraroma seperti karbol pembersih atau antiseptik dan dikategorikan sebagai fault yang mendiskualifikasi grade specialty.',
    ],
  },

  // --- Modul Q-4: Kimiawi Asam Organik Kopi ---
  {
    id: 'les-q4-1',
    module_id: 'mod-q4',
    title: 'Matriks Asam Organik: Asam Sitrat, Malat, Fosfat, dan Asetat',
    content: `
# Kimiawi Asam Organik: Membedakan 4 Pilar Keasaman Kopi Spesialti

Keasaman (*Acidity*) dalam kopi spesialti bukanlah rasa asam kecut yang tidak menyenangkan, melainkan atribut vital yang memberikan kesegaran, kilau, dan struktur dimensi pada secangkir kopi. Di laboratorium sensori, kita membedakan empat asam organik utama:

---

### 1. Asam Sitrat (*Citric Acid*)
* **Profil Sensori**: Asam segar buah sitrus (jeruk nipis, lemon, jeruk keprok, grapefruit). Memberikan sensasi kesegaran yang tajam dan bersih di bagian langit-langit mulut.
* **Asal Biologis**: Produk intermediet siklus Krebs di dalam sel tanaman kopi.
* **Origin Tipikal**: Sangat dominan pada kopi proses *Fully Washed* dari dataran tinggi, seperti Arabika Gayo Takengon, Washed Flores Bajawa, dan kopi-kopi Kolombia serta Kenya.

---

### 2. Asam Malat (*Malic Acid*)
* **Profil Sensori**: Keasaman yang renyah (*crisp*), bulat, dan manis menyerupai apel hijau (*Granny Smith*), pir, anggur hijau, atau buah persik matang. Menstimulasi produksi saliva yang lembut di dasar lidah.
* **Asal Biologis**: Dihasilkan dari metabolisme buah kopi saat matang perlahan di iklim sejuk.
* **Origin Tipikal**: Sangat menonjol pada kopi yang tumbuh di ketinggian ekstrem (>1.600 mdpl) seperti varietas Bourbon di Amerika Tengah atau varietas Andungsari di kawasan Ijen.

---

### 3. Asam Fosfat (*Phosphoric Acid*)
* **Profil Sensori**: Berbeda dari asam organik lainnya, asam fosfat adalah **asam anorganik mineral**. Asam fosfat tidak membawa rasa buah spesifik, melainkan memberikan sensasi kejernihan yang berkilau (*effervescent / sparkling sensation*) di lidah, mirip sensasi gelembung karbonasi pada minuman cola atau sampanye.
* **Asal Tanah**: Diserap oleh akar tanaman dari tanah vulkanik yang sangat kaya mineral fosfat aktif.
* **Origin Tipikal**: Ciri khas tak tertandingi dari kopi-kopi terbaik Kenya (SL-28/SL-34) dan beberapa mikro-lot tanah vulkanik Gunung Raung/Ijen di Jawa Timur.

---

### 4. Asam Asetat (*Acetic Acid*)
* **Profil Sensori**: Pada konsentrasi rendah, memberikan nuansa anggur (*winey*), ceri fermentasi manis, atau kismis. Pada konsentrasi tinggi, berubah menjadi asam cuka yang menusuk hidung dan tidak sedap.
* **Asal Proses**: Dihasilkan dari aktivitas bakteri asam asetat (*Acetobacter*) selama fermentasi pasca panen (khususnya proses *Natural*, *Honey*, dan *Anaerobic*).
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Studi komparasi 4 asam kopi: sitrat (lemon segar), malat (apel hijau renyah), fosfat (sensasi kilau berkilau tanah vulkanik), dan asetat (fermentasi anggur).',
    key_takeaways: [
      'Asam sitrat memberikan nuansa jeruk segar dan dominan pada kopi proses fully washed.',
      'Asam malat memberikan sensasi keasaman bulat menyerupai apel hijau dan pir pada kopi dataran tinggi.',
      'Asam fosfat adalah asam anorganik dari tanah vulkanik yang memberikan sensasi sparkling effervescent.',
    ],
  },
  {
    id: 'les-q4-2',
    module_id: 'mod-q4',
    title: 'Dinamika Asam Klorogenat (CGA) dan Transformasinya Menjadi Asam Kina',
    content: `
# Asam Klorogenat & Asam Kina: Di Balik Rasa Pahit & Kering Kopi

Komponen asam terbesar di dalam green bean mentah bukanlah sitrat atau malat, melainkan **Asam Klorogenat (Chlorogenic Acids / CGA)** yang menyumbang 6%–8% dari total berat kering Arabika dan hingga 10%–12% pada Robusta.

---

### 1. Kinetika Degradasi CGA Selama Penyangraian
Asam klorogenat adalah kelompok molekul ester asam fenolat (terutama asam kafeat, ferulat, dan p-kumarat) yang terikat pada asam kuinat (*quinic acid*):
* **Fase Awal Sangrai**: CGA relatif stabil.
* **Suhu >180°C (Maillard Akhir & Pyrolysis)**: Ikatan ester terpecah secara termal. Molekul CGA terdegradasi menjadi dua fraksi utama:
  1. **Asam Kina (*Quinic Acid*)**: Asam fenolat pahit yang memberikan rasa sepat menusuk (*astringency*) dan sensasi pahit pekat di bagian posterior lidah.
  2. **Asam Kafeat (*Caffeic Acid*)**: Terurai lebih lanjut menjadi senyawa fenol volatil pembawa aroma panggang dan terbakar.

---

### 2. Keseimbangan Asam Klorogenat Lakton vs Asam Kina:
* Pada sangrai **Light to Medium Roast**: Sebagian CGA mengalami dehidrasi membentuk **Asam Klorogenat Lakton (*Chlorogenic Acid Lactones*)**. Senyawa lakton ini menyumbangkan rasa pahit yang menyenangkan dan seimbang (*pleasant bitterness*), seperti rasa pahit cokelat hitam atau kulit jeruk manis.
* Pada sangrai **Dark Roast**: Panas ekstrem memecah senyawa lakton menjadi asam kina bebas dan **Phenylindanes**. Phenylindanes adalah senyawa yang bertanggung jawab atas rasa pahit keras, getir, dan sensasi terbakar yang bertahan lama di tenggorokan.

> [!TIP]
> Evaluator Q Grader menilai keasaman (*Acidity*) berdasarkan dua variabel terpisah pada formulir SCA:
> 1. **Intensity (Intensitas)**: Kuantitas asam (rendah, sedang, tinggi).
> 2. **Quality (Kualitas)**: Kelezatan karakter asam tersebut (apakah cerah seperti buah matang atau getir seperti asam kina residu sangrai buruk).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Kajian kinetika degradasi asam klorogenat (CGA) menjadi senyawa lakton manis vs asam kina dan phenylindanes pembawa rasa pahit keras.',
    key_takeaways: [
      'Asam klorogenat menyumbang porsi asam terbesar pada biji mentah dan terurai oleh panas sangrai menjadi asam kina.',
      'CGA lakton pada medium roast memberikan pahit menyenangkan seperti cokelat hitam.',
      'Phenylindanes pada dark roast menghasilkan rasa pahit getir dan sensasi kering (astringency) di tenggorokan.',
    ],
  },

  // --- Modul Q-5: Uji Triangulasi & Ambang Batas Sensorik ---
  {
    id: 'les-q5-1',
    module_id: 'mod-q5',
    title: 'Protokol Uji Triangulasi CQI: Identifikasi 1 Cangkir Berbeda di Bawah Cahaya Merah',
    content: `
# Uji Triangulasi Kritis: Standar Emas Ujian Lisensi Q Grader

Ujian **Triangulation Test** adalah salah satu modul paling menantang dalam sertifikasi Q Grader CQI. Tujuannya adalah menguji diskriminasi sensori murni peserta dalam membedakan karakteristik mikroskopis antar sampel kopi tanpa bantuan isyarat visual.

---

### 1. Desain Eksperimental Triangulasi:
* Dalam setiap set, peserta dihadapkan pada **3 cangkir kopi (trio)**:
  * **2 cangkir** berisi kopi dari lot yang identik (*Sample A*).
  * **1 cangkir** berisi kopi dari lot yang berbeda (*Sample B* / cangkir ganjil).
* **Tugas Peserta**: Menyeruput ketiga cangkir dan mengidentifikasi dengan tepat mana cangkir yang berbeda (*odd cup*) sebelum waktu habis.
* **Skala Ujian Penuh**: Terdiri dari **6 set segitiga (total 18 cangkir)** yang harus diselesaikan dalam waktu **45 menit**.
* **Standar Kelulusan**: Peserta wajib menjawab dengan benar minimal **5 dari 6 set** (akurasi ≥ 83.3%) untuk dinyatakan lulus!

---

### 2. Protokol Cahaya Merah Gelap (*Red Light Environment*)
Mengapa ruang ujian triangulasi CQI diterangi oleh lampu neon merah redup?

> [!WARNING]
> Mata manusia secara tidak sadar dapat melihat perbedaan derajat warna sangrai (*roast color*) atau ukuran suspensi bubuk kopi. Pencahayaan monokromatik merah gelap meniadakan seluruh perbedaan spektrum visual warna kopi, sehingga evaluator dipaksa mengandalkan 100% indra pengecap (*taste buds*) dan penciuman (*olfaction*).

---

### 3. Strategi Sensorik Menaklukkan Triangulasi:
1. **Pemeriksaan Aroma Basah Awal**: Sebelum menyeruput, cium aroma uap ketiga cangkir secara berurutan: Cangkir 1 → Cangkir 2 → Cangkir 3. Perbedaan intensitas floral atau fruity sering kali sudah tercium di fase ini.
2. **Teknik Eliminasi Pasangan**: Bandingkan cangkir 1 dan cangkir 2. Jika terasa identik, maka kandidat terkuat cangkir berbeda adalah cangkir 3. Konfirmasi hipotesis ini dengan membandingkan cangkir 3 terhadap cangkir 1.
3. **Fokus pada Atribut Kunci**: Jangan mencari semua rasa sekaligus! Fokuskan indra Anda pada satu atribut spesifik:
   * *Aftertaste*: Apakah salah satu cangkir meninggalkan sensasi lebih kering atau manis?
   * *Acidity*: Apakah jenis asamnya berbeda (sitrat tajam vs malat lembut)?
   * *Body / Weight*: Apakah ketebalan di lidah berbeda secara signifikan?
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Metodologi dan strategi lulus ujian triangulasi CQI: 6 set 3 cangkir di bawah sinar merah gelap, eliminasi pasangan, dan fokus atribut diskriminatif.',
    key_takeaways: [
      'Uji triangulasi menyajikan 3 cangkir (2 sama, 1 berbeda); peserta wajib menebak cangkir ganjil minimal 5 dari 6 set.',
      'Lampu merah gelap digunakan untuk mematikan isyarat visual warna sangrai, memaksa evaluator murni mengandalkan rasa dan aroma.',
      'Strategi terbaik adalah eliminasi pasangan dan fokus membandingkan aftertaste, keasaman, atau ketebalan bodi.',
    ],
  },
  {
    id: 'les-q5-2',
    module_id: 'mod-q5',
    title: 'Pelatihan Ambang Batas Sensorik (Sensory Threshold Testing): Larutan Dasar Manis, Asam, dan Asin',
    content: `
# Sensory Threshold: Mengukur Batas Kepekaan Indra Pengecap

Sebelum seorang evaluator diizinkan menilai kopi, CQI melakukan tes kalibrasi ambang batas rasa menggunakan larutan air murni yang dicampur dengan zat kimia murni tingkat pangan (*food-grade chemical compounds*):
1. **Manis (*Sweet*)**: Sukrosa murni (C_{12}H_{22}O_{11}).
2. **Asam (*Sour*)**: Asam sitrat anhidrat (C_6H_8O_7).
3. **Asin (*Salty*)**: Natrium klorida murni (NaCl).

---

### 1. Tiga Tingkat Konsentrasi Standar CQI:

| Tingkat Intensitas | Sukrosa (Manis) | Asam Sitrat (Asam) | Natrium Klorida (Asin) |
|---|---|---|---|
| **Low (Rendah)** | 1.2 g/L | 0.2 g/L | 0.4 g/L |
| **Medium (Sedang)** | 2.4 g/L | 0.4 g/L | 0.8 g/L |
| **High (Tinggi)** | 4.8 g/L | 0.8 g/L | 1.6 g/L |

---

### 2. Metodologi Ujian Sensory Skills CQI:
* **Bagian 1 (Identifikasi Dasar)**: Peserta menerima puluhan gelas sampel acak berisi larutan konsentrasi rendah hingga tinggi, dan harus mengidentifikasi jenis rasa dan tingkat konsentrasinya.
* **Bagian 2 (Campuran Kompleks / Blends)**: Peserta menerima larutan yang menggabungkan 2 atau 3 rasa dasar sekaligus (misal: larutan Manis-Medium + Asam-Low + Asin-High). Peserta wajib membedah dan mengurai setiap komponen rasa beserta intensitasnya secara presisi!
* **Pelajaran Penting**: Interaksi rasa saling memengaruhi:
  * *Rasa Asin menekan persepsi Pahit*.
  * *Rasa Manis menyeimbangkan persepsi Asam yang tajam*.
  * Memahami interaksi ini menjelaskan mengapa biji kopi dengan kandungan gula sukrosa alami tinggi terasa memiliki keasaman yang manis matang (*sweet, juicy acidity*), bukan asam mentah.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Protokol uji kepekaan ambang batas rasa CQI menggunakan larutan sukrosa, asam sitrat, dan garam pada level rendah, sedang, hingga campuran kompleks.',
    key_takeaways: [
      'Ambang batas sensorik diuji menggunakan larutan terukur sukrosa (manis), asam sitrat (asam), dan garam (asin).',
      'Ujian paling rumit melibatkan dekonstruksi larutan campuran multi-rasa (blend manis-asam-asin) simultan.',
      'Kehadiran rasa manis alami menyeimbangkan keasaman kopi menjadi terasa seperti buah matang (juicy).',
    ],
  },

  // --- Modul Q-6: Penguasaan SCA Cupping Form & Scoring ---
  {
    id: 'les-q6-1',
    module_id: 'mod-q6',
    title: 'Anatomi Formulir Cupping SCA: Menilai 10 Atribut Kualitas Kopi',
    content: `
# Formulir Cupping SCA: Panduan Lengkap Evaluasi 10 Atribut

Formulir evaluasi sensorik SCA menggunakan skala interval **6.00 hingga 10.00** (dengan kelipatan 0.25 poin) untuk menilai atribut positif kopi specialty:
* 6.00 - 6.75: *Good* (Standar Kopi Komersial Tinggi)
* 7.00 - 7.75: *Very Good* (Standar Masuk Kopi Spesialti)
* 8.00 - 8.75: *Excellent* (Spesialti Premium)
* 9.00 - 9.75: *Outstanding* (Kualitas Lelang Dunia / Cup of Excellence)

---

### Anatomi 10 Atribut Formulir SCA:

1. **Fragrance / Aroma (Maks 10 Poin)**:
   * *Fragrance*: Aroma bubuk kopi kering sesaat setelah digiling.
   * *Aroma*: Aroma uap basah saat disiram air panas dan saat pemecahan kerak (*break crust*).
2. **Flavor (Maks 10 Poin)**: Kesan menyeluruh rasa utama kopi di rongga mulut saat diseruput pada suhu hangat (~70°C).
3. **Aftertaste (Maks 10 Poin)**: Panjang dan kualitas sensasi rasa serta aroma yang tertinggal di tenggorokan setelah kopi ditelan atau diludahkan.
4. **Acidity (Maks 10 Poin)**: Kecerahan, kesegaran, dan keanggunan struktur asam buah kopi.
5. **Body (Maks 10 Poin)**: Kualitas taktil kekentalan (*viscosity*) cairan kopi di lidah (dinilai apakah lembut seperti sutra, creamy, atau berair hambar).
6. **Balance (Maks 10 Poin)**: Harmoni sinergis antar seluruh komponen rasa; apakah keasaman, rasa manis, dan bodi saling melengkapi tanpa ada satu elemen yang mendominasi secara tidak menyenangkan.
7. **Uniformity (Maks 10 Poin)**: Keseragaman rasa di antara ke-5 cangkir yang diuji (masing-masing cangkir bernilai 2 poin).
8. **Clean Cup (Maks 10 Poin)**: Ketiadaan rasa asing yang mengganggu (bebas dari cacat kapang, tanah, atau fermentasi kotor dari penegukan pertama hingga tetes terakhir). Bernilai 2 poin per cangkir.
9. **Sweetness (Maks 10 Poin)**: Persepsi kemanisan alami sukrosa/fruktosa pada cangkir (bernilai 2 poin per cangkir).
10. **Overall (Maks 10 Poin)**: Penilaian subjektif terkalibrasi dari evaluator terhadap karakteristik dan keistimewaan origin sampel kopi tersebut.
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Bedah 10 atribut lembar cupping SCA dari Fragrance hingga Overall, bobot nilai 6.00-10.00, serta sistem poin biner pada Uniformity, Clean Cup, dan Sweetness.',
    key_takeaways: [
      'Skala penilaian atribut kualitatif berkisar dari 6.00 (Good) hingga 9.00+ (Outstanding) dengan interval 0.25 poin.',
      'Uniformity, Clean Cup, dan Sweetness dinilai secara biner per cangkir (masing-masing 2 poin x 5 cangkir = 10 poin).',
      'Aftertaste yang bersih dan panjang menjadi pembeda utama antara kopi komersial grade dan specialty premium.',
    ],
  },
  {
    id: 'les-q6-2',
    module_id: 'mod-q6',
    title: 'Kalkulasi Skor 80+, Sistem Penalti Cacat (Taint vs Fault), dan Kalibrasi Panel',
    content: `
# Kalkulasi Skor Akhir & Penalti Cacat: Menentukan Status Kopi Spesialti

Tahap terakhir evaluasi cupping adalah menjumlahkan seluruh nilai untuk mendapatkan skor total berskala 100 poin, serta mengurangkan skor tersebut apabila ditemukan cacat pada salah satu cangkir.

---

### 1. Klasifikasi Status Mutu Berdasarkan Skor Total:

> ☕ **Persamaan Parameter:**
> **Total Score = Total 10 Atribut Poin - Total Cacat (Defects)**

* **Skor ≥ 90.00**: *Specialty Superlative (Outstanding)* — Kopi langka lelang dunia (*Cup of Excellence* / Best of Panama).
* **Skor 85.00 - 89.99**: *Specialty Premium (Excellent)* — Kopi mikro-lot berkarakter luar biasa.
* **Skor 80.00 - 84.99**: *Specialty Grade (Very Good)* — Batas ambang resmi kopi masuk kategori spesialti.
* **Skor < 80.00**: *Commercial Grade (Below Specialty)* — Tidak memenuhi syarat disebut sebagai kopi spesialti.

---

### 2. Sistem Penalti Cacat (*Defect Deduction*): Taint vs Fault
SCA membagi cacat rasa menjadi dua kategori keparahan:

#### A. Taint (Cacat Ringan / Noda Rasa)
* **Karakter**: Cacat aroma atau rasa yang dapat dideteksi namun belum merusak seluruh karakter cangkir (misal: sedikit bau karung goni apek atau nuansa tanah tipis).
* **Faktor Pengurang**: **2 Poin per Cangkir Cacat**.

#### B. Fault (Cacat Berat / Rusak Fatal)
* **Karakter**: Cacat parah yang merusak cangkir total dan membuat kopi tidak layak minum (misal: fenol kimia karbol, fermentasi busuk asam aseton, atau mold jamur racun).
* **Faktor Pengurang**: **4 Poin per Cangkir Cacat**.

#### Formula Matematis Pengurangan Cacat:
> ☕ **Persamaan Parameter:**
> **Total Pengurangan Cacat = (Jumlah Cangkir Taint × 2) + (Jumlah Cangkir Fault × 4)**

> [!CAUTION]
> Jika sebuah cangkir terkena Fault, cangkir tersebut **otomatis kehilangan 2 poin Clean Cup, 2 poin Sweetness, dan 2 poin Uniformity** pada cangkir yang bersangkutan, ditambah penalti 4 poin defect. Akibatnya, satu cangkir fault langsung memangkas skor total hingga 10 poin, seketika menggugurkan kopi dari grade specialty!
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Formula perhitungan skor total cupping, klasifikasi specialty 80.00+, perbedaan penalti Taint (2 poin) vs Fault (4 poin), dan dampaknya terhadap skor akhir.',
    key_takeaways: [
      'Ambang batas resmi predikat specialty coffee internasional adalah skor minimal 80.00 poin.',
      'Cacat Taint mengurangi 2 poin per cangkir, sedangkan cacat Fault mengurangi 4 poin penalti langsung.',
      'Satu cangkir dengan cacat Fault memangkas nilai Clean Cup, Sweetness, dan Uniformity yang langsung mendiskualifikasi kopi dari grade specialty.',
    ],
  },

  {
    id: 'les-q1-3',
    module_id: 'mod-q1',
    title: 'Faktor Pengganggu Sensorik: Reseptor Trigeminal, Ageusia, Anosmia, dan Sensory Fatigue',
    content: `# Faktor Pengganggu Sensorik: Reseptor Trigeminal, Ageusia, dan Anosmia

Seorang Q Grader bersertifikasi memperlakukan indra penciuman dan pengecapnya seperti atlet elit merawat fisiknya. Pemahaman mengenai batas biologis persepsi adalah kunci menjaga objektivitas penilaian.

---

### 1. Peran Saraf Kranial Kelima (Trigeminal Nerve)

Saraf trigeminal tidak mendeteksi molekul rasa manis atau asam, melainkan merespon rangsangan taktil, termal, dan iritasi kimiawi di dalam rongga mulut:
* **Astringency (Sepet Mengeringkan Mulut)**: Disebabkan oleh polifenol dan tanin yang berikatan dengan protein saliva (lendir air liur), membuat permukaan lidah terasa kasar seperti amplas.
* **Pungency (Sensasi Pedas / Tajam)**: Respon reseptor TRPV1 terhadap bahan kimiawi tajam.
* **Suhu Ekstrem**: Cairan kopi di atas 65°C mematikan sinyal papila lidah dan hanya mengirimkan sinyal rasa sakit (*pain sensation*) ke otak. Itulah mengapa cupping SCA baru dinilai saat suhu cairan turun ke **55°C – 60°C**.

---

### 2. Mengatasi Kelelahan Sensorik (*Sensory Fatigue*)

Dalam ujian sertifikasi Q Grader, seorang peserta harus mencicipi puluhan hingga ratusan cangkir kopi dalam sehari:
* **Olfactory Fatigue**: Reseptor hidung menjadi jenuh dan kebas setelah mengendus aroma intens secara terus-menerus. *Solusi*: Hirup aroma kulit lengan sendiri (*neutral skin odor*) atau serat wol alami untuk me-reset epitel olfaktori. Jangan menghirup biji kopi sangrai utuh untuk me-reset hidung karena kopi memiliki senyawa volatil yang sama!
* **Palate Cleansing**: Berkumurlah dengan air putih murni bersuhu ruangan di antara penilaian sampel untuk membersihkan sisa lipid dan asam dari papila lidah.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Faktor Pengganggu Sensorik: Reseptor Trigeminal, Ageusia, Anosmia, dan Sensory Fatigue dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  },
  {
    id: 'les-q2-3',
    module_id: 'mod-q2',
    title: 'Etika dan Sanitasi Meja Cupping: Protokol Cupping Sendok Higienis dan Bebas Kontaminasi Silang',
    content: `# Etika dan Sanitasi Meja Cupping: Protokol Bebas Kontaminasi Silang

Meja cupping adalah tempat ibadah objektivitas kopi. Protokol sanitasi ketat diberlakukan untuk melindungi integritas rasa setiap cangkir serta mencegah penularan patogen antar evaluator.

---

### 1. Protokol Sendok Cupping Higienis (SCA Modified Protocol)

Tradisi lama mencelupkan sendok yang baru saja diseruput dari mulut langsung ke cangkir cupping berikutnya kini **dilarang keras** di seluruh laboratorium resmi dunia:
1. **Gelas Bilas Air Panas (*Rinse Cup*)**: Setiap evaluator memiliki satu gelas air mendidih pribadi di samping meja cupping.
2. **Siklus Cupping Bersih**:
   - Ambil sampel kopi menggunakan sendok cupping perak/stainless steel.
   - Seruput cairan kopi dari sendok (atau tuang dari sendok ke gelas slurp kecil pribadi).
   - Celupkan dan goyangkan sendok ke dalam gelas air bilas panas pribadi.
   - Keringkan sendok pada kain microfiber bersih sebelum mengambil sampel cangkir berikutnya.

---

### 2. Etika Perilaku di Ruang Cupping

* **Ketiadaan Parfum & Deodoran Wangi**: Dilarang keras mengenakan parfum, lotion berpewangi, atau pomade rambut di dalam ruang cupping. Bau artifisial akan mencemari udara ruangan dan mengaburkan identifikasi aroma bunga atau buah kopi yang halus.
* **Keheningan Mutlak (*Total Silence*)**: Selama proses penilaian berlangsung, evaluator dilarang berbicara, menunjukkan ekspresi wajah jijik atau kagum, atau bergumam. Diskusi kalibrasi hanya boleh dilakukan setelah seluruh lembar skor dikumpulkan kepada pemimpin meja (*cupping leader*).`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Etika dan Sanitasi Meja Cupping: Protokol Cupping Sendok Higienis dan Bebas Kontaminasi Silang dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  },
  {
    id: 'les-q3-3',
    module_id: 'mod-q3',
    title: 'Kelompok Dry Distillation & Cacat Aromatik (Taints): Rempah, Tembakau, Cedar, Tanah, dan Kulit',
    content: `# Dry Distillation & Cacat Aromatik: Menguasai 36 Aroma Le Nez du Café

Kelompok aroma ketiga dalam kit olfaktori resmi *Le Nez du Café* adalah kelompok **Dry Distillation** (Hasil Distilasi Kering), yang terbentuk akibat degradasi termal serat selulosa kayu dan senyawa lignin pada tingkat sangrai medium-dark hingga dark.

---

### 1. Karakteristik Aroma Dry Distillation Positif

* **Rempah (Spices)**: Cengkeh (*clove*), lada hitam (*black pepper*), kapulaga, dan ketumbar. Sangat lazim ditemukan pada kopi-kopi vulkanik Nusantara seperti Sumatera Gayo dan Flores Bajawa.
* **Kayu & Damar (Resinous / Wood)**: Kayu cedar dan cendana.
* **Tembakau Cerutu (*Pipe Tobacco*) & Kulit Hewani Lembut (*Leather*)**: Memberikan kompleksitas maskulin dan aftertaste hangat yang elegan jika tidak berlebihan.

---

### 2. Cacat Aromatik Bawaan (*Aromatic Taints & Faults*)

* **Earthy / Tanah Basah**: Aroma tanah becek atau lumpur yang disebabkan oleh kontak green bean dengan tanah perkebunan yang lembap saat penjemuran di lantai tanah terbuka.
* **Baggy / Karung Goni Basi**: Aroma serat rami karung goni tua akibat penyimpanan green bean di gudang lembap selama lebih dari 1 tahun.
* **Medicinal / Fenol / Iodin**: Bau karbol rumah sakit atau obat merah yang disebabkan oleh infeksi jamur pada ceri yang rusak di pohon.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Kelompok Dry Distillation & Cacat Aromatik (Taints): Rempah, Tembakau, Cedar, Tanah, dan Kulit dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  },
  {
    id: 'les-q4-3',
    module_id: 'mod-q4',
    title: 'Asam Kuinat & Asam Asetat: Pembentukan Senyawa Pahit Segar vs Keasaman Cuka Akibat Fermentasi',
    content: `# Asam Kuinat & Asam Asetat: Garis Tipis Antara Kompleksitas dan Kerusakan

Keasaman (*acidity*) adalah tulang punggung kualitas kopi spesialti, namun tidak semua asam organik berdampak positif bagi cangkir Anda.

---

### 1. Asam Kuinat (*Quinic Acid*): Asal Muasal Pahit Bersih

* Asam kuinat terbentuk selama proses penyangraian melalui degradasi termal asam klorogenat (*Chlorogenic Acids / CGA*).
* Pada kadar moderat, asam kuinat memberikan sensasi keasaman yang berpadu dengan kepahitan bersih khas kopi (*tonic-like bitterness*) yang menyegarkan.
* Pada kopi yang dihangatkan berulang kali di atas kompor pemanas (*hot plate*), asam kuinat akan terakumulasi secara masif, menghasilkan rasa asam pahit gosong yang membuat perut begah.

---

### 2. Asam Asetat (*Acetic Acid*): Cuka Fermentasi

* Asam asetat adalah produk metabolisme bakteri asam asetat (*Acetobacter*) selama proses fermentasi pasca panen.
* **Kadar Rendah (< 0.5 g/L)**: Memberikan nuansa rasa buah anggur fermentasi manis, winey, dan kompleksitas buah apel cider.
* **Kadar Berlebih (> 1.2 g/L)**: Aroma cuka menyengat, menusuk hidung, dan meninggalkan sensasi terbakar asam di tenggorokan. Dalam formulasi SCA, asam asetat berlebih resmi dikategorikan sebagai cacat fermentasi (*over-fermented taint*).`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Asam Kuinat & Asam Asetat: Pembentukan Senyawa Pahit Segar vs Keasaman Cuka Akibat Fermentasi dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  },
  {
    id: 'les-q5-3',
    module_id: 'mod-q5',
    title: 'Psikologi & Bias Kognitif Sensorik: Mengatasi Halo Effect, Contrast Effect, dan Expectation Bias',
    content: `# Psikologi & Bias Kognitif Sensorik: Seni Menilai Secara Murni Objektif

Otak manusia bukanlah timbangan digital yang pasif. Otak adalah mesin pembuat makna yang rentan terdistorsi oleh bias kognitif dan sugesti lingkungan.

---

### 1. Tiga Bias Paling Berbahaya di Meja Cupping

1. **Expectation Bias (Bias Ekspektasi)**:
   - Terjadi jika evaluator mengetahui asal muasal biji sebelum mencicipi (misal: label tertulis *"Geisha Panama Hacienda La Esmeralda Rp 3 Juta per kg"*). Otak secara otomatis akan mencari-cari aroma melati dan memberi skor 90+, meskipun sampel tersebut sudah apek!
   - *Mitigasi*: Wajib menggunakan sistem pengkodean angka acak 3 digit (misal: Sampel 482, Sampel 719).
2. **Halo Effect**:
   - Jika sebuah sampel memiliki aroma kering (*fragrance*) yang luar biasa harum, evaluator cenderung mengasumsikan aftertaste dan acidity-nya juga pasti sempurna tanpa mengevaluasinya secara kritis.
3. **Contrast Effect**:
   - Sampel kopi biasa (skor 81) yang disajikan tepat setelah sampel kopi cacat busuk (skor 72) akan tampak jauh lebih luar biasa daripada kualitas sebenarnya karena efek kontras dramatis.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Psikologi & Bias Kognitif Sensorik: Mengatasi Halo Effect, Contrast Effect, dan Expectation Bias dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  },
  {
    id: 'les-q6-3',
    module_id: 'mod-q6',
    title: 'Interpretasi Total Skor SCA: Ambang 80 Poin, Kategori Outstanding (85+), dan Super Specialty (90+)',
    content: `# Interpretasi Total Skor SCA: Ambang 80 Poin hingga Elit Dunia 90+

Total skor cupping pada lembar formulir SCA (skala 0 – 100 poin) adalah mata uang nilai mutu perdagangan kopi spesialti global. Selisih 1 poin skor cupping dapat melipatgandakan harga jual green bean di lelang internasional!

---

### 1. Hierarki Klasifikasi Mutu Kopi Dunia

* **Skor < 80.00 (Commercial / Non-Specialty)**: Kopi komoditas massal yang tidak memenuhi standar kelulusan specialty. Memiliki cacat primer atau ketidakseragaman cangkir.
* **Skor 80.00 – 84.99 (Specialty Coffee Standar)**:
  - *Kategori*: Very Good.
  - Cangkir bersih, manis seimbang, memiliki karakter origin yang jelas, dan bebas dari cacat taint/fault. Merupakan tulang punggung house blend dan filter kopi kedai lokal.
* **Skor 85.00 – 89.99 (Exemplary / Outstanding Specialty)**:
  - *Kategori*: Excellent.
  - Memiliki keasaman buah kompleks yang memikat, aroma floral mekar, tekstur bodi lembut laksana sutra, dan aftertaste sangat panjang. Merupakan kopi kompetisi barista nasional.
* **Skor 90.00 – 100.00 (Rare & Extraordinary / Super Specialty)**:
  - *Kategori*: Outstanding / Presidential Award.
  - Mewakili kurang dari 0.1% kopi di muka bumi (seperti pemenang lelang *Cup of Excellence / Best of Panama*). Memberikan pengalaman rasa emosional yang melampaui imajinasi penikmat kopi.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Interpretasi Total Skor SCA: Ambang 80 Poin, Kategori Outstanding (85+), dan Super Specialty (90+) dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  },
];

export const Q_GRADER_QUIZZES: Quiz[] = [
  {
    id: 'quiz-q-final',
    module_id: 'mod-q6',
    learning_path_id: 'path-qgrader',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Sertifikasi Q Grader & Sensory Specialist',
    description:
      'Ujian lisensi komprehensif 15 soal mencakup fisiologi sensori, standar fisik lab SCA 2024, kit olfaktori Le Nez du Café, kimia asam organik, protokol triangulasi CQI, dan kalkulasi skor formulir SCA.',
    passing_score: 80,
    time_limit_minutes: 35,
    max_attempts: 3,
    created_at: '2026-08-10T00:00:00Z',
  },
];

export const Q_GRADER_QUESTIONS: Question[] = [
  {
    id: 'q-qg-1',
    quiz_id: 'quiz-q-final',
    question_text: 'Berdasarkan sains fisiologi gustatori modern, manakah pernyataan yang BENAR mengenai persepsi rasa pada lidah manusia?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 1,
    explanation: 'Mitos peta rasa lidah terbukti keliru; seluruh taste buds di lidah yang aktif mampu mendeteksi kelima rasa dasar (manis, asam, asin, pahit, umami) secara simultan.',
    answers: [
      { id: 'a-qg-1-1', answer_text: 'Seluruh taste buds di lidah mampu mendeteksi kelima rasa dasar secara simultan', is_correct: true },
      { id: 'a-qg-1-2', answer_text: 'Ujung lidah hanya mampu merasakan manis dan tidak peka asam', is_correct: false },
      { id: 'a-qg-1-3', answer_text: 'Bagian belakang lidah tidak memiliki reseptor rasa apapun', is_correct: false },
      { id: 'a-qg-1-4', answer_text: 'Lidah manusia hanya mendeteksi rasa manis dan asin saja', is_correct: false },
    ],
  },
  {
    id: 'q-qg-2',
    quiz_id: 'quiz-q-final',
    question_text: 'Jalur olfaktori manakah yang mentransfer molekul aroma volatil dari rongga faring belakang mulut naik ke epitel olfaktori saat kopi diseruput?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 2,
    explanation: 'Penghidu retronasal mentransfer molekul aroma dari belakang rongga faring ke epitel olfaktori hidung saat makanan/minuman berada di dalam mulut.',
    answers: [
      { id: 'a-qg-2-1', answer_text: 'Penghidu Retronasal (Retronasal Olfaction)', is_correct: true },
      { id: 'a-qg-2-2', answer_text: 'Penghidu Ortonasal (Orthonasal Olfaction)', is_correct: false },
      { id: 'a-qg-2-3', answer_text: 'Saraf Optik Sensorik', is_correct: false },
      { id: 'a-qg-2-4', answer_text: 'Saluran Eustachius telinga', is_correct: false },
    ],
  },
  {
    id: 'q-qg-3',
    quiz_id: 'quiz-q-final',
    question_text: 'Berapakah rasio emas bubuk kopi terhadap air seduh dalam protokol cupping resmi standar Specialty Coffee Association (SCA)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 3,
    explanation: 'Standar SCA menetapkan 8.25 gram bubuk kopi (±0.25g) per 150 ml air seduh, yang setara dengan rasio 1:18.18.',
    answers: [
      { id: 'a-qg-3-1', answer_text: '8.25 gram kopi per 150 ml air (1:18.18)', is_correct: true },
      { id: 'a-qg-3-2', answer_text: '15.0 gram kopi per 150 ml air (1:10.0)', is_correct: false },
      { id: 'a-qg-3-3', answer_text: '5.0 gram kopi per 200 ml air (1:40.0)', is_correct: false },
      { id: 'a-qg-3-4', answer_text: '12.0 gram kopi per 150 ml air (1:12.5)', is_correct: false },
    ],
  },
  {
    id: 'q-qg-4',
    quiz_id: 'quiz-q-final',
    question_text: 'Berapakah spesifikasi ukuran gilingan cupping standar SCA berdasarkan persentase partikel yang lolos ayakan 20-Mesh Sieve (850 mikron)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 4,
    explanation: 'SCA menetapkan 70% hingga 75% partikel bubuk harus lolos melewati ayakan standar U.S. Standard 20-mesh sieve (850 mikron).',
    answers: [
      { id: 'a-qg-4-1', answer_text: '70% hingga 75% partikel lolos ayakan', is_correct: true },
      { id: 'a-qg-4-2', answer_text: '10% hingga 20% partikel lolos ayakan', is_correct: false },
      { id: 'a-qg-4-3', answer_text: '95% hingga 100% partikel lolos ayakan', is_correct: false },
      { id: 'a-qg-4-4', answer_text: 'Bebas menggunakan gilingan espresso halus', is_correct: false },
    ],
  },
  {
    id: 'q-qg-5',
    quiz_id: 'quiz-q-final',
    question_text: 'Pada menit keberapakah tindakan "Break Crust" (memecah kerak kopi dengan 3 dorongan sendok) wajib dilakukan sejak air panas dituangkan?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 5,
    explanation: 'Break crust wajib dilakukan tepat pada menit ke-4:00 untuk menilai aroma uap basah (wet aroma) yang terkonsentrasi di bawah kerak ampas.',
    answers: [
      { id: 'a-qg-5-1', answer_text: 'Tepat pada menit ke-4 (4:00)', is_correct: true },
      { id: 'a-qg-5-2', answer_text: 'Pada menit ke-1 (1:00)', is_correct: false },
      { id: 'a-qg-5-3', answer_text: 'Pada menit ke-10 (10:00)', is_correct: false },
      { id: 'a-qg-5-4', answer_text: 'Sesaat setelah air selesai dituang (0:30)', is_correct: false },
    ],
  },
  {
    id: 'q-qg-6',
    quiz_id: 'quiz-q-final',
    question_text: 'Aroma "Potato Defect" yang menyerupai bau kentang mentah busuk disebabkan oleh kontaminasi senyawa kimia apa akibat gigitan kepik Antestia?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 6,
    explanation: 'Potato defect disebabkan oleh senyawa 2-isopropyl-3-methoxypyrazine (IPMP) yang diproduksi bakteri setelah ceri digigit kepik Antestia bug.',
    answers: [
      { id: 'a-qg-6-1', answer_text: '2-isopropyl-3-methoxypyrazine (IPMP)', is_correct: true },
      { id: 'a-qg-6-2', answer_text: 'Asam klorogenat murni', is_correct: false },
      { id: 'a-qg-6-3', answer_text: 'Kafein monohidrat', is_correct: false },
      { id: 'a-qg-6-4', answer_text: 'Etil asetat murni', is_correct: false },
    ],
  },
  {
    id: 'q-qg-7',
    quiz_id: 'quiz-q-final',
    question_text: 'Asam organik manakah yang memberi karakter rasa renyah (crisp) dan manis bulat menyerupai buah apel hijau (Granny Smith)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 7,
    explanation: 'Asam malat (Malic Acid) memberikan keasaman yang renyah dan bulat menyerupai buah apel hijau dan pir pada kopi dataran tinggi.',
    answers: [
      { id: 'a-qg-7-1', answer_text: 'Asam Malat (Malic Acid)', is_correct: true },
      { id: 'a-qg-7-2', answer_text: 'Asam Sitrat (Citric Acid)', is_correct: false },
      { id: 'a-qg-7-3', answer_text: 'Asam Asetat (Acetic Acid)', is_correct: false },
      { id: 'a-qg-7-4', answer_text: 'Asam Laktat (Lactic Acid)', is_correct: false },
    ],
  },
  {
    id: 'q-qg-8',
    quiz_id: 'quiz-q-final',
    question_text: 'Sensasi keasaman berkilau (sparkling / effervescent sensation) khas kopi tanah vulkanik dataran tinggi Kenya berasal dari kandungan asam apa?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 8,
    explanation: 'Asam fosfat (Phosphoric Acid) adalah asam mineral anorganik yang diserap dari tanah vulkanik yang memberikan sensasi kilau berkilau (effervescent) di lidah.',
    answers: [
      { id: 'a-qg-8-1', answer_text: 'Asam Fosfat (Phosphoric Acid)', is_correct: true },
      { id: 'a-qg-8-2', answer_text: 'Asam Oksalat', is_correct: false },
      { id: 'a-qg-8-3', answer_text: 'Asam Butirat', is_correct: false },
      { id: 'a-qg-8-4', answer_text: 'Asam Sulfat', is_correct: false },
    ],
  },
  {
    id: 'q-qg-9',
    quiz_id: 'quiz-q-final',
    question_text: 'Mengapa ruang ujian Triangulation Test CQI wajib menggunakan pencahayaan lampu merah redup (dark red light)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 9,
    explanation: 'Pencahayaan merah redup meniadakan seluruh perbedaan visual derajat warna sangrai antar sampel, memaksa evaluator murni mengandalkan rasa dan aroma.',
    answers: [
      { id: 'a-qg-9-1', answer_text: 'Menghilangkan isyarat visual perbedaan warna sangrai agar penilaian murni berbasis sensori rasa', is_correct: true },
      { id: 'a-qg-9-2', answer_text: 'Agar suhu ruangan tetap hangat', is_correct: false },
      { id: 'a-qg-9-3', answer_text: 'Untuk membunuh bakteri di udara', is_correct: false },
      { id: 'a-qg-9-4', answer_text: 'Karena standar keselamatan listrik internasional', is_correct: false },
    ],
  },
  {
    id: 'q-qg-10',
    quiz_id: 'quiz-q-final',
    question_text: 'Berapakah skor minimal kumulatif yang wajib diraih oleh sebuah lot kopi agar sah menyandang predikat Specialty Coffee internasional?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 10,
    explanation: 'Ambang batas minimal predikat Specialty Coffee internasional menurut SCA adalah skor total 80.00 poin.',
    answers: [
      { id: 'a-qg-10-1', answer_text: '80.00 Poin', is_correct: true },
      { id: 'a-qg-10-2', answer_text: '70.00 Poin', is_correct: false },
      { id: 'a-qg-10-3', answer_text: '85.00 Poin', is_correct: false },
      { id: 'a-qg-10-4', answer_text: '90.00 Poin', is_correct: false },
    ],
  },
  {
    id: 'q-qg-11',
    quiz_id: 'quiz-q-final',
    question_text: 'Dalam lembar cupping SCA, berapakah nilai penalti pengurangan skor untuk satu cangkir yang mengalami cacat berat "Fault"?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 11,
    explanation: 'Cacat Fault (cacat berat yang merusak cangkir) dikenakan penalti pengurangan 4 poin per cangkir cacat.',
    answers: [
      { id: 'a-qg-11-1', answer_text: 'Pengurangan 4 Poin per cangkir', is_correct: true },
      { id: 'a-qg-11-2', answer_text: 'Pengurangan 2 Poin per cangkir', is_correct: false },
      { id: 'a-qg-11-3', answer_text: 'Pengurangan 10 Poin per cangkir', is_correct: false },
      { id: 'a-qg-11-4', answer_text: 'Pengurangan 1 Poin per cangkir', is_correct: false },
    ],
  },
  {
    id: 'q-qg-12',
    quiz_id: 'quiz-q-final',
    question_text: 'Bagaimanakah cara terbaik dan paling aman bagi evaluator untuk mereset indra penciuman saat mengalami kelelahan olfaktori (olfactory fatigue)?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 12,
    explanation: 'Menghirup udara dari lipatan kulit lengan sendiri yang bersih bebas parfum adalah cara terbaik karena otak mengenali aroma tubuh sebagai nilai dasar nol (baseline).',
    answers: [
      { id: 'a-qg-12-1', answer_text: 'Menghirup aroma lipatan kulit lengan sendiri yang bersih tanpa parfum', is_correct: true },
      { id: 'a-qg-12-2', answer_text: 'Mengendus biji kopi sangrai gelap sedalam-dalamnya', is_correct: false },
      { id: 'a-qg-12-3', answer_text: 'Menghirup minyak kayu putih atau mentol', is_correct: false },
      { id: 'a-qg-12-4', answer_text: 'Mengendus bubuk lada hitam', is_correct: false },
    ],
  },
  {
    id: 'q-qg-13',
    quiz_id: 'quiz-q-final',
    question_text: 'Kelompok aroma Le Nez du Café manakah yang mencakup aroma bunga mawar, bunga kopi, lemon, dan apel yang mencerminkan terroir biji mentah?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 13,
    explanation: 'Kelompok Enzimatik (Enzymatic Group) mencakup senyawa volatil alami turunan metabolisme biologis tanaman kopi saat di kebun.',
    answers: [
      { id: 'a-qg-13-1', answer_text: 'Kelompok Enzimatik (Enzymatic Group)', is_correct: true },
      { id: 'a-qg-13-2', answer_text: 'Kelompok Sugar Browning', is_correct: false },
      { id: 'a-qg-13-3', answer_text: 'Kelompok Dry Distillation', is_correct: false },
      { id: 'a-qg-13-4', answer_text: 'Kelompok Aromatic Defects', is_correct: false },
    ],
  },
  {
    id: 'q-qg-14',
    quiz_id: 'quiz-q-final',
    question_text: 'Pada suhu berapakah evaluator disarankan melakukan penilaian terhadap atribut Clean Cup, Sweetness, dan Uniformity?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 14,
    explanation: 'Saat suhu cairan mendingin pada suhu tubuh hingga suhu ruang (37°C - 25°C), topeng suhu panas hilang sehingga cacat, ketidakteraturan, dan kemanisan asli terlihat jelas.',
    answers: [
      { id: 'a-qg-14-1', answer_text: 'Suhu dingin mendekati suhu tubuh dan suhu ruang (37°C hingga 25°C)', is_correct: true },
      { id: 'a-qg-14-2', answer_text: 'Suhu sangat panas mendidih di atas 90°C', is_correct: false },
      { id: 'a-qg-14-3', answer_text: 'Hanya boleh dinilai pada 5 detik pertama setelah diseduh', is_correct: false },
      { id: 'a-qg-14-4', answer_text: 'Setelah kopi didiamkan di dalam lemari es semalaman', is_correct: false },
    ],
  },
  {
    id: 'q-qg-15',
    quiz_id: 'quiz-q-final',
    question_text: 'Jika pada evaluasi cupping 5 cangkir, 1 cangkir ditemukan menderita cacat fenol (Fault), berapa total cangkir Uniformity yang mendapat nilai centang positif?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 15,
    explanation: 'Karena 1 cangkir memiliki rasa menyimpang yang cacat, maka cangkir tersebut tidak seragam dengan 4 cangkir lainnya, sehingga nilai Uniformity hanya tercentang 4 cangkir (8 poin dari total 10).',
    answers: [
      { id: 'a-qg-15-1', answer_text: '4 cangkir (mendapat 8 poin dari total 10 poin)', is_correct: true },
      { id: 'a-qg-15-2', answer_text: '5 cangkir penuh (tetap 10 poin)', is_correct: false },
      { id: 'a-qg-15-3', answer_text: '0 cangkir (seluruh cangkir didiskualifikasi)', is_correct: false },
      { id: 'a-qg-15-4', answer_text: '2 cangkir saja', is_correct: false },
    ],
  },
];
