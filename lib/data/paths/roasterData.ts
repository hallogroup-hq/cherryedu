import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

// ============================================================================
// 1. LEARNING PATH DEFINITION: ROASTER SPECIALIZATION PATH
// ============================================================================

export const ROASTER_PATH: LearningPath = {
  id: 'path-roaster',
  title: 'Roaster Specialization Path: Sains & Seni Penyangraian Kopi',
  slug: 'roaster-path',
  description:
    'Kuasai termodinamika mesin sangrai, kinetika reaksi kimiawi pembentukan aroma, interpretasi kurva RoR & DTR presisi, diagnosis cacat sangrai, hingga sistem kontrol mutu batch komersial berstandar industri.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'roaster',
  level: 'advanced',
  is_free: false,
  is_published: true,
  estimated_hours: 24,
  total_modules: 6,
  created_at: '2026-08-10T00:00:00Z',
};

// ============================================================================
// 2. MODULES: ROASTER SPECIALIZATION PATH (MOD-R1 s/d MOD-R6)
// ============================================================================

export const ROASTER_MODULES: Module[] = [
  {
    id: 'mod-r1',
    learning_path_id: 'path-roaster',
    title: 'Modul R-1: Karakteristik Fisik Green Bean & Penilaian Kualitas Bahan Mentah',
    description:
      'Membedah densitas biji, kadar air (moisture content), water activity (Aw), screen size, serta pengaruh varietas dan proses pascapanen terhadap konduktivitas termal biji kopi.',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-r2',
    learning_path_id: 'path-roaster',
    title: 'Modul R-2: Termodinamika & Mekanisme Transfer Panas Mesin Sangrai',
    description:
      'Analisis konduksi, konveksi, dan radiasi termal pada mesin drum konvensional, double-walled drum, hingga fluid bed air roaster, serta manajemen airflow dinamis.',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-r3',
    learning_path_id: 'path-roaster',
    title: 'Modul R-3: Kinetika Reaksi Kimia & Fase-Fase Penyangraian Kopi',
    description:
      'Drying phase, reaksi Maillard, degradasi Strecker, karamelisasi sukrosa, pirolisis, hingga first crack dan evolusi senyawa aromatik volatil.',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-r4',
    learning_path_id: 'path-roaster',
    title: 'Modul R-4: Manajemen Kurva Roasting, RoR Dinamis & DTR Presisi',
    description:
      'Kalkulasi Charge Temp, Turning Point, Rate of Rise (RoR) menurun mulus, First Crack timing, dan Development Time Ratio (DTR 12-18%) menggunakan software Artisan/Cropster.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-r5',
    learning_path_id: 'path-roaster',
    title: 'Modul R-5: Diagnosis Cacat Penyangraian (Roasting Defects) & Mitigasi',
    description:
      'Identifikasi visual dan sensorik cacat baking, scorching, facing, tipping, underdevelopment (sour/vegetative), serta overdevelopment (ashy/flat).',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-r6',
    learning_path_id: 'path-roaster',
    title: 'Modul R-6: Kontrol Mutu Batch Komersial, Degassing & Cupping QC',
    description:
      'Standar Agtron/ColorTrack, protokol cupping evaluasi batch produksi, manajemen kurva degassing CO2, dan formulasi strategi blending (pre vs post-roast).',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
];

// ============================================================================
// 3. LESSONS: ROASTER SPECIALIZATION PATH
// ============================================================================

export const ROASTER_LESSONS: Lesson[] = [
  // --- Modul R-1: Karakteristik Fisik Green Bean ---
  {
    id: 'les-r1-1',
    module_id: 'mod-r1',
    title: 'Kadar Air (Moisture Content), Water Activity (Aw), dan Densitas Biji Mentah',
    content: `
# Karakteristik Fisik Green Bean: Parameter Kunci Sebelum Menyalakan Mesin Sangrai

Sebelum sebuah biji kopi mentah (*green bean*) dimasukkan ke dalam drum mesin sangrai (*hopper*), seorang roaster profesional wajib memahami struktur fisik internal biji tersebut. Karakteristik fisik green bean menentukan bagaimana panas ditransfer ke inti sel selulosa dan menjadi variabel penentu formulasi profil sangrai yang konsisten.

---

### 1. Kadar Air (*Moisture Content*) & Standar Internasional
Kadar air mengukur persentase massa air total terhadap massa keseluruhan biji mentah:

$$\\text{Moisture Content (\\%)} = \\frac{\\text{Massa Air}}{\\text{Massa Biji Kopi Total}} \\times 100$$

Berdasarkan standar **Specialty Coffee Association (SCA)** dan **International Coffee Organization (ICO)**:
* **Rentang Ideal**: **10.0% – 12.0%** (titik optimal 10.5% – 11.5%).
* **Di Bawah 9.0%**: Biji terlalu kering (*aged/faded*). Molekul air bebas hilang, aroma cepat memudar, dan biji sangat rentan gosong (*scorching*) saat menerima panas awal.
* **Di Atas 12.5%**: Risiko tinggi pembusukan mikrobiologis, pertumbuhan kapang jamur penghasil racun *Ochratoxin A*, serta membutuhkan energi termal pengeringan (*drying*) yang sangat masif di dalam drum.

> [!IMPORTANT]
> Selalu ukur kadar air green bean menggunakan alat ukur kapasitansi atau dielektrik terkalibrasi (seperti *Diletta*, *Wile Coffee*, atau *Sinar*) pada suhu ruangan stabil (20–25°C). Fluktuasi suhu green bean saat diukur dapat membiaskan pembacaan hingga 0.5%–1.0%.

---

### 2. Aktivitas Air (*Water Activity* - $a_w$)
Banyak roaster awam menganggap *Moisture Content* dan *Water Activity* adalah hal yang sama. Secara ilmiah, perbedaannya sangat fundamental:
* **Moisture Content**: Kuantitas total air di dalam biji (air terikat + air bebas).
* **Water Activity ($a_w$)**: Energi status atau ketersediaan air bebas yang tidak terikat molekul selulosa, diukur pada skala $0.00$ hingga $1.00$.

Standar keamanan $a_w$ untuk green bean specialty adalah **$0.50 - 0.60\\ a_w$**.
* Jika $a_w > 0.65$: Jamur dan bakteri patogen dapat berkembang biak meskipun kadar air total tampak di angka 11%. Selain itu, reaksi Maillard akan terhambat karena air bebas meredam transfer energi panas internal.
* Biji dengan $a_w$ optimal ($0.53 - 0.58$) memiliki stabilitas penyimpanan hingga 12 bulan di dalam kantong hermetik *GrainPro* tanpa penurunan mutu rasa yang signifikan.

---

### 3. Densitas Biji (*Bean Density*)
Densitas mencerminkan kerapatan matriks selulosa di dalam biji kopi. Biji kopi yang tumbuh di ketinggian tinggi (>1.400 mdpl) seperti Arabika Gayo, Toraja Sapan, atau Kintamani memiliki metabolisme buah yang lambat akibat suhu malam yang dingin (12–15°C). Hal ini menghasilkan struktur sel yang sangat padat (*Strictly Hard Bean* / SHB).

| Kategori Densitas | Estimasi Massa Jenis ($g/L$) | Ketinggian Tumbuh | Pendekatan Energi Sangrai |
|---|---|---|---|
| **Very High Density (SHB)** | $> 720\\ g/L$ | $> 1.500\\text{ mdpl}$ | Membutuhkan *Charge Temp* tinggi dan konveksi kuat untuk menembus inti sel yang rapat |
| **Medium Density (HB)** | $660 - 720\\ g/L$ | $1.100 - 1.400\\text{ mdpl}$ | Pendekatan standar, kontrol modulasi panas moderat |
| **Low Density (Soft Bean)** | $< 650\\ g/L$ | $< 1.000\\text{ mdpl}$ / Dataran Rendah | Rentan *collapsing* dan terbakar; gunakan *Charge Temp* lebih rendah dengan panas konduktif lembut |

#### Formula Pengukuran Densitas Mandiri:
Gunakan gelas ukur bervolume presisi ($1000\\text{ ml}$) dan timbangan digital:
$$\\text{Densitas}\\ (g/L) = \\frac{\\text{Berat Green Bean dalam Gelas Ukur (gram)}}{\\text{Volume Gelas Ukur (1 Liter)}}$$
Pastikan gelas ukur diketuk perlahan 3 kali pada permukaan meja untuk menstabilkan pemadatan antar biji sebelum ditimbang.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Analisis ilmiah kadar air (10-12%), water activity (Aw 0.50-0.60), densitas biji SHB vs Soft Bean, dan implikasinya terhadap transfer panas sangrai.',
    key_takeaways: [
      'Moisture content ideal green bean specialty adalah 10.0% - 12.0% dengan batas aman water activity Aw 0.50 - 0.60.',
      'Biji berkepadatan tinggi (SHB / High Density) membutuhkan energi muatan (Charge Temp) lebih tinggi untuk memastikan panas menembus ke pusat inti biji.',
      'Penyimpanan dalam kemasan hermetik seperti GrainPro krusial untuk menjaga stabilitas Aw dan mencegah degradasi lipid serta klorofil green bean.',
    ],
  },
  {
    id: 'les-r1-2',
    module_id: 'mod-r1',
    title: 'Screen Size Grading & Pengaruh Proses Pasca Panen terhadap Konduktivitas Termal',
    content: `
# Screen Size & Matriks Pasca Panen: Menyesuaikan Konduktivitas Biji

Dua lot green bean dengan varietas yang sama persis bisa memerlukan kurva roasting yang bertolak belakang apabila ukuran bijinya tidak seragam atau jika keduanya diproses dengan metode pasca panen yang berbeda (misal: *Giling Basah* vs *Fully Washed*).

---

### 1. Sistem Klasifikasi Ukuran Biji (*Screen Size Grading*)
Screen size diukur menggunakan ayakan mekanis dengan lubang bundar berskala $1/64$ inci:
* **Screen 19–20**: $19/64 - 20/64$ inci (~7.5–8.0 mm) — Sering disebut ukuran *Elephant Bean* atau varietas *Maragogipe*.
* **Screen 17–18**: $17/64 - 18/64$ inci (~6.7–7.1 mm) — Standar kopi komersial grade 1 / *Supremo*.
* **Screen 15–16**: $15/64 - 16/64$ inci (~6.0–6.3 mm) — Ukuran umum kopi specialty Indonesia (*Excelso* / grade 1 specialty).
* **Screen 14 ke bawah**: Termasuk kategori *Peaberry* (biji tunggal / kopi lanang) atau biji kecil (*third-grade*).

> [!WARNING]
> Jika sebuah batch kopi memiliki distribusi ukuran yang heterogen (campuran Screen 14 dan Screen 18 dalam satu karung), biji kecil akan mengalami *over-development* atau gosong di saat biji besar baru menyelesaikan fase pengeringan (*drying phase*). Pastikan biji di-grading secara seragam dengan toleransi deviasi maksimum 10%.

---

### 2. Pengaruh Proses Pasca Panen terhadap Respon Termal Biji

| Proses Pasca Panen | Karakteristik Permukaan & Sel | Respon Termal Mesin Sangrai | Strategi Roasting Rekomendasi |
|---|---|---|---|
| **Fully Washed** | Bersih, bebas sisa lendir, struktur sel seragam dan padat | Konduktivitas termal sangat stabil; toleran terhadap panas tinggi | Terapkan energi panas konvektif tinggi untuk menonjolkan keasaman jernih (*clean cup & bright acidity*) |
| **Natural / Dry** | Mengandung gula sederhana (*fruktosa/glukosa*) di lapisan luar biji | Gula permukaan mudah terkaramelisasi dan gosong prematur | Turunkan *Charge Temp* 10–15°C; gunakan modulasi api lembut untuk menghindari *facing* |
| **Honey / Pulped Natural** | Lapisan pektin kering menempel tipis di silverskin | Respon termal berada di antara Washed dan Natural | Perhatikan titik transisi kuning (*yellowing*); awasi laju kenaikan suhu (*RoR*) menjelang first crack |
| **Giling Basah (Sumatra)** | Porositas sel tinggi akibat pengupasan kulit tanduk saat basah | Kadar air internal sering kali tidak seragam di awal sangrai | Perpanjang fase *drying* dengan aliran udara (*airflow*) stabil agar penguapan internal merata |

---

### 3. Fenomena Peaberry (Kopi Lanang)
Peaberry terjadi ketika salah satu dari dua bakal biji di dalam ceri kopi gagal berkembang, sehingga biji yang tersisa tumbuh membulat tanpa sisi datar (*flat side*).
* **Kelebihan Aerodinamis**: Bentuk membulat membuat peaberry menggelinding lebih mulus di dalam drum berputar, menerima panas konduksi yang sangat merata dari pelat drum.
* **Perilaku Roasting**: Karena kerapatan massanya yang pejal dan tidak memiliki sudut tepi tajam, peaberry memerlukan waktu penyerapan panas yang sedikit lebih panjang namun menghasilkan konsistensi warna yang sangat seragam.
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Klasifikasi screen size 1/64 inci, tantangan roasting biji heterogen, dan perbedaan transfer termal kopi Washed, Natural, Honey, serta Giling Basah.',
    key_takeaways: [
      'Green bean dengan variasi ukuran besar memicu kematangan tidak merata (biji kecil gosong, biji besar mentah).',
      'Kopi Natural kaya gula sederhana di permukaan sehingga membutuhkan Charge Temp lebih rendah untuk mencegah karamelisasi dini.',
      'Kopi Giling Basah memerlukan fase drying yang cermat untuk menyeimbangkan kadar air internal yang asimetris.',
    ],
  },

  // --- Modul R-2: Termodinamika & Mekanisme Transfer Panas ---
  {
    id: 'les-r2-1',
    module_id: 'mod-r2',
    title: 'Konduksi, Konveksi, dan Radiasi: Triad Termodinamika Mesin Sangrai',
    content: `
# Triad Termodinamika: Menguasai Tiga Mode Transfer Panas

Penyangraian kopi pada hakikatnya adalah disiplin termodinamika terapan. Di dalam ruang sangrai (*roasting chamber*), energi panas dihantarkan ke biji kopi melalui tiga mekanisme fisika utama: **Konduksi**, **Konveksi**, dan **Radiasi**. Memahami rasio ketiga mode ini adalah pembeda antara seorang operator pemula dan Master Roaster sejati.

---

### 1. Konduksi ($Q_{\\text{cond}}$)
Konduksi adalah transfer energi panas melalui kontak fisik langsung antar molekul padat:
$$Q_{\\text{cond}} = -k A \\frac{\\Delta T}{\\Delta x}$$
Di mana $k$ adalah konduktivitas termal material drum, $A$ luas area kontak, dan $\\frac{\\Delta T}{\\Delta x}$ gradien suhu.

* **Sumber di Mesin Sangrai**: Kontak langsung antara permukaan biji kopi dengan dinding silinder drum yang membara, atau kontak antar biji kopi yang saling bergesekan.
* **Karakteristik Rasa**: Konduksi dominan menonjolkan bodi tebal, sensasi cokelat pekat, dan karamel manis yang padat. Namun, jika kontak konduksi terlalu agresif tanpa rotasi drum yang tepat, permukaan luar biji akan menderita cacat fisik berupa bintik hangus (*scorching* atau *facing*).

---

### 2. Konveksi ($Q_{\\text{conv}}$)
Konveksi adalah transfer panas melalui fluida yang bergerak, dalam hal ini adalah aliran udara panas (*heated airflow*) yang ditarik melewati tumpukan biji kopi:
$$Q_{\\text{conv}} = h A (T_s - T_\\infty)$$
Di mana $h$ adalah koefisien perpindahan panas konvektif dan $(T_s - T_\\infty)$ perbedaan suhu antara aliran udara dan permukaan biji.

* **Sumber di Mesin Sangrai**: Udara ambien yang dipanaskan oleh burner lalu disedot melalui silinder drum oleh kipas pembuangan (*exhaust fan / draft*).
* **Karakteristik Rasa**: Konveksi menghantarkan energi panas secara merata ke seluruh permukaan melengkung biji, menembus lapisan selulosa dengan cepat. Konveksi tinggi menghasilkan profil seduhan yang sangat bersih (*clean cup*), keasaman yang jernih (*vibrant acidity*), dan aroma buah/bunga yang terpelihara utuh.

---

### 3. Radiasi Termal ($Q_{\\text{rad}}$)
Radiasi adalah transfer energi melalui gelombang elektromagnetik inframerah (*infrared*) tanpa memerlukan medium penghantar:
$$Q_{\\text{rad}} = \\epsilon \\sigma A (T_1^4 - T_2^4)$$

* **Sumber di Mesin Sangrai**: Dinding logam drum yang sangat panas, panel keramik pembakar inframerah (*infrared burner*), dan panas radiasi internal yang dipancarkan oleh sesama biji kopi saat telah memasuki fase eksotermik.
* **Karakteristik**: Menembus hingga ke inti terdalam biji secara serempak. Radiasi inframerah memastikan kematangan merata antara bagian dalam (*inner core*) dan lapisan luar (*outer surface*) biji kopi.

---

### Matriks Perbandingan Tipe Mesin Berdasarkan Rasio Panas:

| Jenis Mesin Sangrai | Rasio Konveksi | Rasio Konduksi | Rasio Radiasi | Karakter Seduhan yang Dihasilkan |
|---|---|---|---|---|
| **Traditional Solid Drum** | 40% – 50% | 40% – 50% | 10% | Bodi berat, manis karamel bulat, ideal untuk Espresso & Kopi Susu |
| **Double-Walled Drum** | 60% – 70% | 20% – 30% | 10% | Seimbang, risiko cacat kontak rendah, sangat fleksibel (Omni-roast) |
| **Fluid Bed (Air Roaster)** | 85% – 95% | 5% | 5% | Sangat bersih, keasaman buah menonjol tajam, sangat cocok untuk Filter Light Roast |
| **Infrared Roaster** | 40% – 50% | 15% – 25% | 30% – 40% | Kematangan inti maksimal, rasa manis kaya sukrosa terkaramelisasi |
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Eksplorasi triad termodinamika konduksi, konveksi, dan radiasi pada drum roaster vs fluid bed serta implikasinya terhadap keasaman dan bodi kopi.',
    key_takeaways: [
      'Konduksi berasal dari kontak logam drum dan memberikan ketebalan bodi, namun berisiko menimbulkan scorching jika drum terlalu panas.',
      'Konveksi didorong oleh aliran udara panas dan menghasilkan kebersihan rasa (clean cup) serta kecerahan asam buah (acidity).',
      'Radiasi inframerah menembus inti terdalam biji dan membantu mencegah underdevelopment pada kopi berkepadatan tinggi.',
    ],
  },
  {
    id: 'les-r2-2',
    module_id: 'mod-r2',
    title: 'Manajemen Aliran Udara (Airflow Dynamics) & Kecepatan Putaran Drum (Drum Speed/RPM)',
    content: `
# Dinamika Airflow & RPM Drum: Menjaga Keseimbangan Energi

Dua tuas kendali krusial yang sering diabaikan operator mesin sangrai konvensional adalah **manajemen tekanan aliran udara (airflow / draft)** dan **kecepatan putaran drum (RPM)**. Keduanya berfungsi mengatur waktu kontak biji dengan dinding drum dan laju evakuasi partikel asap serta uap air sisa pembakaran.

---

### 1. Kecepatan Putaran Drum (*Drum Speed / RPM*)
Kecepatan putar silinder drum mengatur dinamika pergerakan tumpukan biji kopi (*fluidized bed motion*):

* **RPM Terlalu Rendah**: Biji hanya menumpuk dan bergeser di dasar drum (*sliding*). Kontak konduksi dengan pelat logam bawah berlangsung terlalu lama $\\rightarrow$ memicu cacat *facing* dan *scorching*.
* **RPM Terlalu Cepat**: Gaya sentrifugal melempar biji kopi menempel ke dinding atas silinder drum, sehingga biji tidak teraduk oleh sudu pengaduk (*vanes/flights*) dan aliran konveksi terhambat.
* **RPM Optimal**: Biji terangkat hingga membentuk tirai lengkung yang jatuh anggun melewati pusat silinder drum (*rolling wave*). Pada titik ini, biji memaksimalkan kontak dengan aliran udara panas konvektif sembari meminimalkan durasi kontak konduksi statis.

> [!TIP]
> Formula estimasi RPM drum ideal berdasarkan diameter dalam drum ($D$ dalam meter):
> $$\\text{RPM} \\approx \\frac{40}{\\sqrt{D}}$$
> Untuk mesin kapasitas 1 kg – 5 kg komersial, kisaran RPM drum umumnya berada di antara **50 hingga 65 RPM**.

---

### 2. Manajemen Aliran Udara (*Airflow / Draft Control*)
Aliran udara di dalam mesin drum ditarik oleh *exhaust blower fan*. Fungsinya mencakup:
1. Menghantarkan energi panas konveksi dari burner ke tumpukan biji.
2. Membuang uap air (*water vapor*) yang terevaporasi selama fase pengeringan (*drying phase*).
3. Mengevakuasi kulit ari tipis (*chaff / silverskin*) ke dalam tabung siklon (*cyclone separator*) sebelum terbakar menjadi jelaga.
4. Membuang gas karbon monoksida dan partikel asap sebelum mencemari pori-pori biji (*smoky defect*).

#### Protokol Pengaturan Airflow Berdasarkan Fase Sangrai:
* **Fase Awal (Charge s/d Yellowing)**: *Low to Medium Airflow*. Kita ingin mempertahankan panas di dalam drum untuk memulai proses drying tanpa meniupkan panas keluar terlalu cepat.
* **Fase Maillard (Yellowing s/d First Crack)**: *Medium Airflow*. Reaksi kimia mulai menghasilkan uap air dan partikel asam volatil. Airflow dinaikkan bertahap untuk menjaga ventilasi drum.
* **Menjelang First Crack & Development**: *High Airflow*. Biji kopi melepaskan uap bertekanan tinggi secara masif dan melepaskan sisa chaff. Airflow tinggi krusial untuk mencegah asap terperangkap dan menjaga kurva *Rate of Rise (RoR)* tetap melandai turun secara terkendali.
    `,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Panduan teknis pengaturan RPM drum untuk menciptakan rolling wave dan protokol modulasi damper airflow dari fase charge hingga development.',
    key_takeaways: [
      'RPM drum optimal menciptakan gelombang tirai biji (rolling wave) yang memaksimalkan konveksi udara panas.',
      'Airflow rendah di awal sangrai menjaga retensi panas; airflow tinggi saat first crack krusial untuk mengevakuasi asap dan chaff.',
      'Ventilasi drum yang buruk menghasilkan cacat rasa berasap (smoky taint) dan menutupi karakter rasa alami kopi.',
    ],
  },

  // --- Modul R-3: Kinetika Reaksi Kimia & Fase Penyangraian ---
  {
    id: 'les-r3-1',
    module_id: 'mod-r3',
    title: 'Kinetika Kimiawi: Reaksi Maillard, Degradasi Strecker, dan Karamelisasi Sukrosa',
    content: `
# Kimiawi Rasa Kopi: Reaksi Maillard, Degradasi Strecker & Karamelisasi

Penyangraian kopi mengubah biji mentah yang beraroma rumput tawar menjadi salah satu bahan pangan paling kompleks di dunia dengan lebih dari 800 senyawa aroma volatil. Transformasi ini digerakkan oleh serangkaian reaksi termokimia bertingkat.

---

### 1. Reaksi Maillard (Non-Enzymatic Browning)
Reaksi Maillard berlangsung aktif saat suhu internal biji mencapai **130°C – 170°C**, ditandai secara visual oleh perubahan warna dari hijau pucat menjadi kuning keemasan (*yellowing phase*).

* **Reaktan**: Gugus amino dari protein/asam amino bebas (seperti asparagin, lisin) bereaksi dengan gugus karbonil dari gula pereduksi (*reducing sugars* seperti glukosa dan fruktosa).
* **Produk Utama**:
  * **Melanoidin**: Polimer nitrogen berbobot molekul tinggi yang memberi warna cokelat pada biji dan menyumbang sensasi ketebalan bodi (*mouthfeel*) pada minuman kopi.
  * **Pirazin & Pirol**: Senyawa heterosiklik volatil yang memunculkan aroma kacang panggang (*roasted nuts*), roti bakar, sereal, dan jagung bakar.

---

### 2. Degradasi Strecker (*Strecker Degradation*)
Degradasi Strecker adalah percabangan penting dari reaksi Maillard:
* Asam amino bebas bereaksi dengan senyawa dicarbonyl turunan Maillard, mengalami dekarboksilasi dan deaminasi.
* **Senyawa yang Dihasilkan**:
  * **Aldehida**: Menghasilkan aroma fruity dan floral (misal: *phenylacetaldehyde* beraroma madu dan bunga).
  * **Furanon**: Memberikan nuansa rasa karamel manis (*sweet caramel/malt*).
  * **Alkilpirazin**: Memperkaya nuansa cokelat dan rempah manis.

---

### 3. Karamelisasi Sukrosa (*Sucrose Caramelization*)
Berbeda dengan Maillard yang membutuhkan asam amino, karamelisasi adalah reaksi pirolisis murni karbohidrat:
* Terjadi saat suhu biji melampaui **160°C – 190°C**.
* Biji kopi Arabika mentah mengandung **6% – 9% sukrosa** berdasarkan berat kering.
* Panas memutus ikatan glikosida sukrosa menjadi glukosa dan fruktosa bebas, yang kemudian mengalami dehidrasi dan kondensasi termal.
* **Sains di Balik Manis vs Pahit**:
  * Pada menit-menit awal karamelisasi, terbentuk senyawa oligosakarida manis dengan nuansa karamel, toffee, dan butterscotch.
  * Jika penyangraian diteruskan terlalu lama atau terlalu gelap (*dark roast*), sukrosa habis terbakar menjadi karbon murni dan asam format/asetat pahit menyengat, menghilangkan rasa manis alami biji.

---

### Perubahan Asam Klorogenat (Chlorogenic Acids - CGA):
Biji kopi mentah kaya akan asam klorogenat (~6%–8% pada Arabika). Selama proses sangrai:
* Sebagian CGA terdegradasi menjadi **Asam Kina (Quinic Acid)** dan **Asam Kafeat (Caffeic Acid)**.
* Asam sitrat dan malat yang segar perlahan menurun, sementara akumulasi asam kina meningkat.
* Inilah alasan mengapa kopi *dark roast* kehilangan kesegaran asam buahnya dan berganti menjadi rasa pahit pekat dengan sensasi sepat (*astringency*).
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Kajian kinetika reaksi Maillard pembentuk melanoidin, degradasi Strecker penghasil aroma floral-fruity, dan pirolisis karamelisasi sukrosa.',
    key_takeaways: [
      'Reaksi Maillard (130-170°C) menggabungkan asam amino dan gula pereduksi untuk membentuk polimer melanoidin penghasil bodi kopi.',
      'Degradasi Strecker menghasilkan molekul aldehida dan furanon pembawa nuansa rasa madu, bunga, dan cokelat.',
      'Karamelisasi sukrosa berlebih pada dark roast menghancurkan rasa manis alami dan melipatgandakan asam kina pahit.',
    ],
  },
  {
    id: 'les-r3-2',
    module_id: 'mod-r3',
    title: 'Fase-Fase Penyangraian: Dari Titik Drying hingga Ledakan First Crack',
    content: `
# Anatomi Tiga Fase Penyangraian: Drying, Maillard, dan Development

Dalam terminologi sangrai modern yang dipelopori oleh Scott Rao dan SCA, proses penyangraian kopi dibagi menjadi tiga tahapan kronologis yang saling terikat:

---

### 1. Fase Pengeringan (*Drying Phase* / Endotermik)
* **Rentang Suhu**: Dari suhu pengisian (*Charge Temp*) turun ke *Turning Point*, lalu merangkak naik hingga warna biji berubah dari hijau ke kuning pucat (**~150°C / 300°F**).
* **Durasi Proporsional**: Biasanya memakan waktu **40% – 45%** dari total durasi sangrai.
* **Fenomena Termal**: Biji bersifat menyerap panas (*endotermik murni*). Air bebas di dalam dinding sel mendidih dan menguap keluar melalui pori-pori mikroskopis.
* **Tujuan Roaster**: Memastikan transfer energi panas merata hingga ke pusat inti biji tanpa membakar kulit luar biji yang masih basah.

---

### 2. Fase Pencokelatan (*Maillard / Yellowing Phase*)
* **Rentang Suhu**: Dari titik kuning (**~150°C**) hingga terjadinya letupan pertama atau *First Crack* (**~196°C – 202°C** tergantung kalibrasi termokopel probe).
* **Durasi Proporsional**: Memakan waktu **35% – 40%** dari total waktu sangrai.
* **Fenomena Termal**: Biji kopi mulai mengembang (*swelling*). Kulit ari (*silverskin/chaff*) terlepas dari alur tengah biji. Reaksi pembentukan prekursor rasa dan aroma berlangsung paling masif di fase ini.
* **Strategi Profil**:
  * Memperpanjang fase Maillard akan mempertebal bodi dan menonjolkan rasa cokelat/kacang (*nutty/chocolaty*).
  * Mempersingkat fase Maillard secara tepat akan menjaga keasaman buah yang jernih dan aksen floral yang lembut.

---

### 3. Fase Pengembangan (*Development Phase* / Eksotermik Transisi)
* **Titik Awal**: Dimulai dari dentuman pertama *First Crack* (bunyi letupan menyerupai popcorn yang renyah).
* **Sains di Balik First Crack**: Uap air superpanas dan akumulasi gas karbon dioksida ($CO_2$) yang terperangkap di dalam matriks selulosa biji mencapai tekanan internal kritis (**~20 hingga 25 atmosfer**). Dinding sel tidak lagi mampu menahan tekanan dan merekah, melepaskan uap secara eksotermik.
* **Durasi Proporsional**: Memakan waktu **12% – 20%** dari total durasi sangrai (dikenal sebagai *Development Time Ratio / DTR*).
* **Kritisitas**: Keputusan menurunkan api dan menentukan titik pengeluaran biji (*Drop Temperature*) dalam rentang detik menentukan apakah kopi akan bernuansa *Light*, *Medium*, atau *Dark Roast*.
    `,
    content_type: 'text',
    duration_minutes: 17,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Pembagian detail 3 fase sangrai: Drying (40-45%), Maillard (35-40%), dan Development pasca First Crack (12-20%) serta kontrol termalnya.',
    key_takeaways: [
      'Drying phase melepaskan kadar air internal dan menyumbang 40-45% dari total durasi sangrai.',
      'Fase Maillard mengontrol keseimbangan antara ketebalan bodi (melanoidin) dan kejernihan keasaman buah.',
      'First Crack adalah letupan pelepasan uap air dan gas CO2 bertekanan 20-25 atm dari dinding selulosa biji.',
    ],
  },

  // --- Modul R-4: Manajemen Kurva Roasting, RoR & DTR ---
  {
    id: 'les-r4-1',
    module_id: 'mod-r4',
    title: 'Anatomi Kurva Roasting: Charge Temp, Turning Point, dan Filosofi Descending RoR',
    content: `
# Manajemen Kurva Roasting: Mengendalikan Rate of Rise (RoR)

Di era sangrai gelombang ketiga (*Third Wave Coffee*), perangkat lunak *data logging* seperti **Cropster** dan **Artisan** menjadi standar emas. Menginterpretasikan kurva data secara langsung (*real-time*) memungkinkan roaster memprediksi laju termal beberapa menit sebelum fenomena fisik terjadi.

---

### 1. Titik Pengisian (*Charge Temperature*)
Suhu drum sesaat sebelum green bean dijatuhkan ke dalam drum:
* **Penentuan Titik**: Dipengaruhi oleh ukuran batch (batch size), densitas biji, kadar air, dan ketebalan logam drum.
* Jika *Charge Temp* terlalu tinggi: Biji berisiko mengalami kejut panas instan yang memicu *facing* atau *scorching*.
* Jika *Charge Temp* terlalu rendah: Biji akan menyerap energi terlalu lambat, memperpanjang durasi drying secara berlebihan, dan membuat profil rasa menjadi hambar terpanggang (*baked*).

---

### 2. Titik Balik (*Turning Point* - TP)
Ketika green bean dingin masuk ke dalam drum panas, probe suhu biji (*Bean Temperature Probe / BT*) akan membaca penurunan suhu drastis hingga mencapai titik terendah sebelum kembali naik:
* **Waktu Terjadinya TP**: Umumnya berada di antara menit **1:10 hingga 1:40**.
* **Suhu TP**: Biasanya tercatat di angka **85°C – 105°C**.
* Catatan Fisika: Penurunan grafik pada Turning Point sebagian besar adalah cerminan keterlambatan respon termal probe logam (*thermal lag*), bukan berarti drum tiba-tiba mendingin secepat itu.

---

### 3. Konsep Rate of Rise (RoR)
RoR adalah kecepatan kenaikan suhu biji per satuan waktu (umumnya dihitung per menit):
$$\\text{RoR} = \\frac{\\Delta T_{\\text{Bean}}}{\\Delta t}\\quad (\\text{derajat per menit})$$

Sebagai contoh, jika suhu biji kopi naik dari 160°C menjadi 172°C dalam kurun waktu 1 menit, maka RoR pada menit tersebut adalah $12^\\circ\\text{C/menit}$.

---

### 4. Hukum RoR Menurun Mulus (*Ever-Decreasing RoR*)
Salah satu postulat paling terkenal dalam literatur roasting modern (Scott Rao) adalah bahwa kurva RoR ideal harus **terus menurun secara konsisten dari awal hingga akhir sangrai**:

* **Puncak RoR**: Terjadi tepat setelah Turning Point (bisa mencapai $18 - 25^\\circ\\text{C/menit}$).
* **Penurunan Bertahap**: RoR harus terus melandai turun secara mulus:
  * Menit 4 (Yellowing): ~$14 - 16^\\circ\\text{C/menit}$
  * Menit 7 (Pre-First Crack): ~$10 - 12^\\circ\\text{C/menit}$
  * First Crack: ~$6 - 8^\\circ\\text{C/menit}$
  * Menjelang Drop: ~$3 - 5^\\circ\\text{C/menit}$

> [!WARNING]
> Dua anomali kurva RoR yang paling merusak cita rasa kopi:
> 1. **RoR Flick (Kenaikan Mendadak)**: RoR tiba-tiba melonjak naik menjelang akhir sangrai akibat panas laten eksotermik biji yang tidak diantisipasi dengan penurunan gas burner. Menghasilkan rasa pahit tajam, dry aftertaste, dan hilangnya manis buah.
> 2. **RoR Crash / Stall (Anjlok Mendadak)**: RoR merosot mendekati $0^\\circ\\text{C/menit}$ atau bahkan mendatar. Menghentikan laju karamelisasi dan menyebabkan rasa *baked* (seperti karton/roti tawar hambar).
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Sains di balik data logging Cropster/Artisan: Charge Temp, Turning Point, formula laju kenaikan suhu (RoR), dan bahaya RoR Flick vs Crash.',
    key_takeaways: [
      'Turning Point merepresentasikan kesetimbangan awal termokopel probe dengan tumpukan green bean dingin (terjadi di menit 1:10 - 1:40).',
      'Kurva RoR ideal harus melandai turun secara konsisten (ever-decreasing) tanpa mengalami lonjakan (flick) atau anjlok (crash).',
      'RoR Flick di akhir sangrai memicu rasa pahit getir, sedangkan RoR Crash menghasilkan cacat rasa baked (hambar menyerupai karton).',
    ],
  },
  {
    id: 'les-r4-2',
    module_id: 'mod-r4',
    title: 'Kalkulasi Development Time Ratio (DTR) & Profil Roast Level (Light, Medium, Dark)',
    content: `
# Formula Presisi DTR & Menentukan Level Sangrai

Fase pengembangan (*Development Time*) adalah jendela waktu sejak letupan pertama *First Crack* terdengar hingga pintu drum dibuka untuk mengeluarkan biji kopi ke *cooling tray* (*Drop*). Menghitung rasionya secara matematis adalah kunci menciptakan konsistensi batch harian.

---

### 1. Formula Development Time Ratio (DTR)

$$\\text{DTR (\\%)} = \\frac{\\text{Development Time}}{\\text{Total Roasting Time}} \\times 100$$

#### Contoh Perhitungan Kasus:
* Total waktu sangrai (*Total Roasting Time*): **10 menit 00 detik** (600 detik).
* First Crack terdengar pada: **8 menit 20 detik** (500 detik).
* Maka, Development Time: $600 - 500 = 100\\text{ detik}$ (1 menit 40 detik).
* Rasio DTR:
  $$\\text{DTR} = \\frac{100}{600} \\times 100 = 16.66\\%$$

---

### 2. Rentang Standar DTR Berdasarkan Profil Sangrai:

| Kategori Roast Level | Rentang DTR Ideal | Suhu Drop Tipikal (BT Probe) | Karakter Sensori Kopi |
|---|---|---|---|
| **Filter Light Roast (Nordic Style)** | **11% – 14%** | $200°C – 205°C$ | Asam sitrat/malat cerah, floral anggun, teh melati, aroma buah tropis segar; bodi ringan |
| **Filter Medium-Light** | **14% – 16%** | $206°C – 209°C$ | Sweet spot filter specialty: Keasaman matang bulat, manis gula tebu/karamel, aftertaste panjang |
| **Espresso Medium Roast** | **16% – 19%** | $210°C – 214°C$ | Bodi tebal bulat, keasaman moderat seimbang, cokelat susu, toffee; ideal untuk susu |
| **Dark Roast (Full City / Vienna)** | **20% – 25%** | $215°C – 222°C$ (Menuju 2nd Crack) | Minyak kopi keluar ke permukaan, rasa pahit panggang, rempah pedas (*spicy*), cokelat hitam pekat, keasaman hilang |

---

### 3. Manajemen Cooling Tray (Pendinginan Kilat)
Proses penyangraian **belum selesai** saat biji keluar dari drum! Biji kopi yang baru keluar membawa panas internal tinggi dan masih terus mengalami reaksi pirolisis jika dibiarkan panas.

> [!IMPORTANT]
> Begitu biji dijatuhkan ke *cooling tray*, aktifkan kipas hisap pendingin (*cooling fan agitator*) dengan kekuatan maksimum. 
> **Standar Industri**: Suhu tumpukan biji kopi wajib turun dari $>200°C$ menjadi di bawah **40°C dalam waktu kurang dari 3 menit** (target optimal: < 2 menit). 
> Pendinginan yang lambat (>4 menit) akan menyebabkan biji melanjutkan proses pemasakan internal (*coasting/baking*), merusak aroma buah yang rapuh.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Kalkulasi matematis DTR (11-25%), korelasi suhu drop dengan level sangrai (Light vs Dark), dan standar pendinginan cooling tray di bawah 3 menit.',
    key_takeaways: [
      'DTR dihitung dengan membagi durasi pasca First Crack dengan total durasi sangrai dikali 100%.',
      'Filter light roast memerlukan DTR berkisar 11-14% untuk mempertahankan keasaman buah dan aksen bunga terroir.',
      'Suhu biji di cooling tray wajib diturunkan hingga di bawah 40°C dalam waktu maksimal 3 menit demi menghentikan reaksi pirolisis residual.',
    ],
  },

  // --- Modul R-5: Diagnosis Cacat Penyangraian ---
  {
    id: 'les-r5-1',
    module_id: 'mod-r5',
    title: 'Diagnosis Cacat Fisik: Scorching, Facing, dan Tipping pada Biji Sangrai',
    content: `
# Cacat Fisik Penyangraian: Scorching, Facing, dan Tipping

Cacat fisik sangrai (*roasting physical defects*) terjadi ketika distribusi panas eksternal tidak proporsional dengan kapasitas penyerapan termal biji kopi. Cacat ini dapat diidentifikasi secara kasat mata pada permukaan biji dan menghasilkan rasa pahit gosong tak sedap di cangkir.

---

### 1. Scorching (Bercak Hangus Melingkar)
* **Gejala Visual**: Terdapat bercak hitam gelap seperti terbakar di beberapa area permukaan cembung biji kopi.
* **Penyebab Termal**: Suhu drum sebelum pengisian (*Charge Temperature*) terlalu panas, atau kecepatan putaran drum (*drum RPM*) terlalu lambat sehingga biji berdiam terlalu lama di pelat logam membara.
* **Dampak Sensori**: Rasa pahit arang (*ashy*), asap gosong, getah kayu pahit, dan sensasi terbakar yang mengeringkan lidah bagian belakang.

---

### 2. Facing (Hangus Datar pada Permukaan Biji)
* **Gejala Visual**: Bagian permukaan datar (*flat side*) dari biji kopi hangus terbakar secara merata sementara sisi lainnya normal.
* **Penyebab Termal**: Perpindahan panas konduksi yang berlebihan akibat beban batch (*batch size*) melebihi kapasitas drum, sehingga sirkulasi pengadukan biji terhenti dan permukaan datar menempel kaku pada pelat drum panas.
* **Dampak Sensori**: Mengurangi rasa manis, memberikan aroma jelaga berminyak dan sensasi pahit kering (*dry mouthfeel*).

---

### 3. Tipping (Hangus di Ujung Embrio Biji)
* **Gejala Visual**: Ujung runcing biji kopi (tempat embrio berada) menghitam terbakar atau tampak gompal hangus, sementara badan biji lainnya tidak hangus.
* **Penyebab Termal**: Laju kenaikan suhu (*Rate of Rise / RoR*) terlalu agresif saat memasuki atau sesaat setelah letupan *First Crack*. Ujung embrio memiliki massa selulosa paling tipis dan kadar air terendah, sehingga paling rentan menyerap lonjakan radiasi mendadak.
* **Dampak Sensori**: Rasa pahit menusuk di ujung lidah yang tajam menyerupai rokok atau karet terbakar, menutupi keasaman alami kopi.

---

### Matriks Pencegahan Cacat Fisik:

| Jenis Cacat | Faktor Pemicu Utama | Tindakan Koreksi untuk Batch Berikutnya |
|---|---|---|
| **Scorching** | Charge Temp terlalu tinggi / Drum RPM terlalu lambat | Turunkan Charge Temp 10–15°C; naikkan RPM drum 5–8 putaran per menit |
| **Facing** | Kapasitas batch overload / Agitasi sudu drum lemah | Kurangi berat muatan green bean hingga 75%–80% kapasitas maksimal mesin |
| **Tipping** | Api terlalu besar menjelang dan selama First Crack | Turunkan tekanan gas burner 30 detik sebelum First Crack terpicu |
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Identifikasi visual dan penyebab termodinamika cacat scorching, facing, dan tipping serta langkah mitigasi teknis mesin sangrai.',
    key_takeaways: [
      'Scorching disebabkan oleh Charge Temp drum yang terlalu tinggi atau putaran drum yang terlalu lambat.',
      'Facing terjadi karena kelebihan beban muatan batch (overload) sehingga sisi datar biji menempel pada drum.',
      'Tipping terjadi akibat lonjakan energi api yang terlalu agresif tepat saat letupan First Crack meletus.',
    ],
  },
  {
    id: 'les-r5-2',
    module_id: 'mod-r5',
    title: 'Diagnosis Cacat Kimiawi: Underdevelopment (Grassy) vs Baked Coffee (Flat Bread)',
    content: `
# Cacat Kimiawi Penyangraian: Underdevelopment vs Baked

Selain cacat fisik yang terlihat di kulit luar, dua cacat paling berbahaya dalam kopi specialty justru tidak kasat mata: **Underdevelopment** dan **Baked Coffee**. Keduanya terjadi akibat kegagalan pengaturan dinamika energi internal biji.

---

### 1. Underdevelopment (Ketidakmatangan Inti Biji)
* **Mekanisme Kegagalan**: Panas hanya mematangkan lapisan luar biji, sementara inti bagian dalam (*bean core*) belum menyelesaikan reaksi Maillard dan karamelisasi.
* **Pemicu Utama**:
  * Durasi sangrai yang dipaksa terlalu kilat dengan api konduksi luar yang tinggi (*flash roasting*).
  * RoR pasca First Crack anjlok terlalu cepat sehingga panas tidak mampu merambat menembus kepadatan selulosa inti.
* **Karakter Sensorik pada Seduhan**:
  * **Aroma**: Menyerupai rumput basah (*freshly cut grass*), kacang tanah mentah, jerami basah, polong kacang hijau, atau sayuran rebus.
  * **Rasa**: Keasaman tajam menyengat seperti asam cuka mentah tanpa diimbangi rasa manis (*sour & astringent*).
  * **Aftertaste**: Sangat kering (*chalky*) dan meninggalkan rasa pahit getir di langit-langit mulut.

---

### 2. Baked Coffee (Kopi Terpanggang Hambar)
* **Mekanisme Kegagalan**: Proses penyangraian kehilangan momentum energi termal (*stalling*). Kurva RoR mendatar (*flatline*) atau turun hingga mendekati $0°C/\\text{menit}$ dalam waktu yang lama sebelum biji dikeluarkan.
* **Pemicu Utama**: Roaster menurunkan gas burner terlalu ekstrem sebelum First Crack karena takut suhu melompat, sehingga biji kehilangan daya dorong panas internal dan hanya "terpanggang pasif" di dalam drum.
* **Karakter Sensorik pada Seduhan**:
  * **Aroma**: Menyerupai remah roti tawar basi, biskuit gandum gosong, karton basah, atau sereal kering.
  * **Rasa**: Keasaman buah alami lenyap total, rasa manis menjadi datar (*flat/hollow*), dan seduhan terasa membosankan tanpa kedalaman (*complexity*).
  * **Bodi**: Tipis berair (*watery*) karena polimer melanoidin terpecah akibat paparan panas statis yang terlalu lambat.

---

### Perbandingan Uji Laboratorium:
Untuk memvalidasi underdevelopment secara ilmiah, roaster mengukur warna bubuk menggunakan skala **Agtron / ColorTrack**:
* Ukur warna biji utuh (*Whole Bean Agtron*).
* Giling biji kopi dengan ukuran halus, lalu ukur warna bubuknya (*Ground Agtron*).
* **Selisih Ideal**: Selisih antara Whole Bean dan Ground Agtron tidak boleh melebihi **15–18 poin**.
* Jika selisihnya $>25$ poin (misal: Whole Bean 65 tetapi Ground 95), biji mengalami *severe underdevelopment* (lapisan luar matang tetapi inti dalam masih mentah).
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Bedah cacat sensori underdevelopment (vegetatif/rumput mentah) vs baked (roti tawar/karton) dan validasi ilmiah selisih Agtron whole vs ground.',
    key_takeaways: [
      'Underdevelopment terjadi ketika inti dalam biji belum matang, menghasilkan rasa rumput mentah dan keasaman tajam menyengat.',
      'Baked coffee diakibatkan oleh kurva RoR yang terhenti (stall/flatline), mematikan rasa manis dan menyisakan nuansa karton atau roti tawar hambar.',
      'Selisih angka Agtron antara biji utuh dan bubuk gilingan tidak boleh melebihi 15-18 poin untuk memastikan kematangan merata.',
    ],
  },

  // --- Modul R-6: Batch Production QC & Degassing ---
  {
    id: 'les-r6-1',
    module_id: 'mod-r6',
    title: 'Quality Control Produksi: Agtron Color Scale, Weight Loss %, dan Protokol Cupping Batch',
    content: `
# Kontrol Mutu Produksi Komersial: Menjaga Konsistensi Antar Batch

Di sebuah roastery komersial yang memproduksi ratusan kilogram hingga ton kopi setiap minggunya, mengandalkan ingatan atau indra visual manusia semata adalah kesalahan fatal. Diperlukan protokol **Quality Control (QC)** kuantitatif yang ketat.

---

### 1. Persentase Susut Bobot (*Weight Loss Percentage*)
Selama penyangraian, biji kopi kehilangan massa akibat penguapan air bebas dan pembakaran senyawa organik volatil:

$$\\text{Weight Loss (\\%)} = \\frac{\\text{Berat Green Bean} - \\text{Berat Roasted Bean}}{\\text{Berat Green Bean}} \\times 100$$

* **Light Roast (Filter)**: Susut bobot berkisar **12.0% – 14.0%**.
* **Medium Roast**: Susut bobot berkisar **14.5% – 16.5%**.
* **Dark Roast (Espresso)**: Susut bobot berkisar **17.0% – 20.0%**.

> [!TIP]
> Jika sebuah batch yang biasanya susut 14.5% tiba-tiba mencatatkan susut 16.2% pada suhu drop yang sama, itu adalah indikator bahwa kadar air green bean telah menurun drastis di gudang, atau transfer energi radiasi drum mengalami deviasi.

---

### 2. Standar Spektrofotometri Warna Agtron
Nilai Agtron mengukur pantulan cahaya inframerah dari permukaan kopi:
* **Skala Agtron Gourmet**:
  * $85 - 95$: Very Light Roast (Nordic)
  * $70 - 80$: Light Roast
  * $58 - 68$: Medium Roast
  * $45 - 55$: Medium-Dark Roast
  * $< 40$: Dark Roast

Toleransi variasi produksi komersial antar batch (*batch-to-batch consistency*) yang diizinkan untuk lot yang sama adalah **maksimum $\\pm 2$ poin Agtron**.

---

### 3. Protokol Cupping Produksi Harian (Next-Day QC Cupping)
Setiap sampel batch produksi wajib diuji rasa menggunakan protokol cupping resmi:
1. Ambil sampel 100g dari setiap batch yang disangrai hari ini.
2. Diamkan sampel selama 16–24 jam.
3. Lakukan cupping blind (*blind cupping*) di pagi hari berikutnya bersama tim roastery.
4. Evaluasi apakah profil sensori batch hari ini sesuai dengan profil acuan (*Master Production Profile*).
5. Jika ditemukan cacat baking, tipping, atau deviasi rasa di luar batas toleransi, batch tersebut wajib di-reject atau dialihkan untuk keperluan internal, bukan dikirim ke klien kedai kopi.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'SOP Quality Control roastery: formula weight loss % (12-20%), kalibrasi spektrofotometri Agtron, dan protokol next-day QC blind cupping.',
    key_takeaways: [
      'Persentase susut bobot (weight loss) adalah parameter QC harian paling cepat untuk mendeteksi anomali termal batch.',
      'Toleransi konsistensi warna antar batch komersial specialty adalah maksimal ±2 poin Agtron.',
      'Next-day blind cupping wajib dilakukan sebelum melepaskan lot kopi ke tangan pelanggan atau kedai kopi mitra.',
    ],
  },
  {
    id: 'les-r6-2',
    module_id: 'mod-r6',
    title: 'Kimiawi Degassing CO2, Jendela Puncak Rasa (Peak Flavor Window), dan Formulasi Blending',
    content: `
# Degassing, Peak Flavor Window & Strategi Blending Komersial

Dua topik penutup yang melengkapi keahlian seorang master roaster adalah memahami kurva pelepasan gas $CO_2$ pasca sangrai (*degassing*) dan meracik formulasi campuran kopi (*blending strategy*).

---

### 1. Kinetika Degassing Gas Karbon Dioksida ($CO_2$)
Selama reaksi pirolisis dan Strecker, terbentuk gas $CO_2$ dalam jumlah besar di dalam rongga sel mikro biji:
* 1 kg biji kopi yang baru disangrai mengandung hingga **2 hingga 5 liter gas $CO_2$**.
* Laju pelepasan gas berlangsung eksponensial di 48 jam pertama, lalu melandai secara asimtotik selama berminggu-minggu.
* **Faktor yang Mempercepat Degassing**:
  * *Tingkat Sangrai*: Dark roast melepaskan gas jauh lebih kilat karena dinding selulosa telah rusak dan berpori besar.
  * *Suhu Lingkungan*: Suhu ruangan hangat mempercepat difusi gas.

---

### 2. Jendela Puncak Rasa (*Peak Flavor Window*)

| Profil Sangrai | Waktu Resting Minimal | Peak Flavor Window (Puncak Rasa) | Masa Penurunan Mutu (Fading) |
|---|---|---|---|
| **Light Roast (Filter)** | 7 hari | **Hari ke-10 hingga Hari ke-30** | Setelah hari ke-60 |
| **Medium Roast (Omni/Filter)**| 5 hari | **Hari ke-7 hingga Hari ke-25** | Setelah hari ke-45 |
| **Espresso Dark/Medium-Dark** | 10–14 hari | **Hari ke-14 hingga Hari ke-35** | Setelah hari ke-45 |

> [!IMPORTANT]
> Jangan pernah menggunakan biji espresso yang baru disangrai kurang dari 7 hari! Tekanan 9 bar di mesin espresso akan melarutkan gas $CO_2$ yang pekat menjadi busa crema tebal kasar (*crema sponge*) yang terasa pahit asam menusuk akibat pembentukan asam karbonat instan.

---

### 3. Strategi Formulasi Blending: Pre-Roast vs Post-Roast

Roastery komersial membuat *House Blend* untuk mencapai stabilitas rasa tahunan dan efisiensi biaya bahan baku. Terdapat dua metodologi utama:

#### A. Pre-Roast Blending (Pencampuran Green Bean Sebelum Masuk Mesin)
* **Kelebihan**: Efisiensi waktu dan tenaga kerja sangat tinggi karena roaster hanya menyangrai satu batch besar.
* **Kekurangan**: Hanya dapat berhasil jika seluruh komponen green bean memiliki ukuran (*screen size*), kadar air, dan densitas yang sangat mirip (misal: memadukan Arabika Mandheling dan Arabika Flores Bajawa dengan ketinggian dan kadar air serupa).
* Jika memadukan Arabika Washed SHB dengan Robusta Lampung Soft Bean via pre-roast, Robusta akan hangus terbakar sementara Arabika belum matang!

#### B. Post-Roast Blending (Penyangraian Terpisah Baru Dicampur)
* **Kelebihan**: Setiap komponen green bean disangrai dengan kurva profil termalnya masing-masing yang paling optimal (misal: komponen Arabika disangrai Medium-Light untuk memunculkan keasaman buah, sedangkan komponen Robusta disangrai Medium-Dark untuk memunculkan bodi cokelat).
* **Kekurangan**: Membutuhkan waktu sangrai dua kali lipat dan memerlukan ruang pencampuran mekanis tambahan pasca pendinginan.
* **Rekomendasi**: Selalu gunakan metode Post-Roast Blending untuk formulasi House Blend berkualitas tinggi.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Kinetika pelepasan gas CO2 (degassing), tabel peak flavor window, serta analisis teknis Pre-Roast vs Post-Roast Blending komersial.',
    key_takeaways: [
      '1 kg biji sangrai segar menyimpan 2-5 liter gas CO2 yang harus didegassing agar tidak mengacaukan ekstraksi espresso.',
      'Peak flavor window untuk filter light roast berada di hari ke-10 hingga 30 pasca sangrai.',
      'Post-Roast Blending adalah standar emas untuk memadukan biji dengan densitas dan karakteristik pasca panen yang berbeda.',
    ],
  },
];

// ============================================================================
// 4. QUIZZES & CERTIFICATION EXAM: ROASTER SPECIALIZATION PATH
// ============================================================================

export const ROASTER_QUIZZES: Quiz[] = [
  {
    id: 'quiz-r-final',
    module_id: 'mod-r6',
    learning_path_id: 'path-roaster',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Sertifikasi Roaster Specialist',
    description:
      'Ujian evaluasi komprehensif 15 soal mencakup termodinamika mesin, kurva RoR/DTR, kinetika reaksi Maillard/Karamelisasi, diagnosis cacat sangrai, dan QC batch komersial.',
    passing_score: 80,
    time_limit_minutes: 30,
    max_attempts: 3,
    created_at: '2026-08-10T00:00:00Z',
  },
];

export const ROASTER_QUESTIONS: Question[] = [
  {
    id: 'q-rst-1',
    quiz_id: 'quiz-r-final',
    question_text: 'Berapakah rentang kadar air (Moisture Content) ideal untuk green bean specialty berdasarkan standar internasional SCA/ICO?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 1,
    explanation: 'Standar SCA/ICO menetapkan kadar air ideal green bean specialty berada di rentang 10.0% hingga 12.0%. Di bawah 9% biji berisiko rapuh/aged, di atas 12.5% berisiko ditumbuhi jamur kapang.',
    answers: [
      { id: 'a-rst-1-1', answer_text: '10.0% hingga 12.0%', is_correct: true },
      { id: 'a-rst-1-2', answer_text: '5.0% hingga 8.0%', is_correct: false },
      { id: 'a-rst-1-3', answer_text: '14.0% hingga 16.0%', is_correct: false },
      { id: 'a-rst-1-4', answer_text: '18.0% hingga 20.0%', is_correct: false },
    ],
  },
  {
    id: 'q-rst-2',
    quiz_id: 'quiz-r-final',
    question_text: 'Apakah perbedaan fundamental antara Moisture Content dan Water Activity (Aw)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 2,
    explanation: 'Moisture content mengukur kuantitas total air di dalam biji, sedangkan Water Activity (Aw) mengukur energi status atau ketersediaan air bebas yang tidak terikat molekul selulosa.',
    answers: [
      { id: 'a-rst-2-1', answer_text: 'Moisture content adalah total massa air, sedangkan Aw mengukur ketersediaan air bebas yang tidak terikat', is_correct: true },
      { id: 'a-rst-2-2', answer_text: 'Moisture content diukur dalam skala 0-1, sedangkan Aw diukur dalam persentase', is_correct: false },
      { id: 'a-rst-2-3', answer_text: 'Moisture content hanya berlaku untuk kopi sangrai, Aw untuk green bean', is_correct: false },
      { id: 'a-rst-2-4', answer_text: 'Keduanya merupakan istilah yang sama persis tanpa perbedaan fisika', is_correct: false },
    ],
  },
  {
    id: 'q-rst-3',
    quiz_id: 'quiz-r-final',
    question_text: 'Mode perpindahan panas apakah yang paling dominan menghasilkan karakter seduhan bersih (clean cup) dan keasaman buah cerah pada mesin Fluid Bed (Air Roaster)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 3,
    explanation: 'Mesin Fluid Bed mentransfer energi panas hingga 85-95% melalui konveksi udara panas, yang mematangkan permukaan secara seragam dan menjaga kebersihan rasa.',
    answers: [
      { id: 'a-rst-3-1', answer_text: 'Konveksi termal aliran udara panas', is_correct: true },
      { id: 'a-rst-3-2', answer_text: 'Konduksi pelat drum logam', is_correct: false },
      { id: 'a-rst-3-3', answer_text: 'Radiasi elektromagnetik inframerah', is_correct: false },
      { id: 'a-rst-3-4', answer_text: 'Konduksi gesekan antar biji kopi', is_correct: false },
    ],
  },
  {
    id: 'q-rst-4',
    quiz_id: 'quiz-r-final',
    question_text: 'Senyawa polimer molekul tinggi apakah yang terbentuk selama reaksi Maillard dan bertanggung jawab atas pembentukan warna cokelat serta bodi (mouthfeel) kopi?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 4,
    explanation: 'Reaksi Maillard menggabungkan asam amino dan gula pereduksi untuk membentuk melanoidin, polimer nitrogen cokelat pembentuk ketebalan bodi kopi.',
    answers: [
      { id: 'a-rst-4-1', answer_text: 'Melanoidin', is_correct: true },
      { id: 'a-rst-4-2', answer_text: 'Kafein', is_correct: false },
      { id: 'a-rst-4-3', answer_text: 'Asam klorogenat murni', is_correct: false },
      { id: 'a-rst-4-4', answer_text: 'Trigonelin', is_correct: false },
    ],
  },
  {
    id: 'q-rst-5',
    quiz_id: 'quiz-r-final',
    question_text: 'Berapakah estimasi tekanan internal gas CO2 dan uap air di dalam selulosa biji yang memicu letupan First Crack?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 5,
    explanation: 'Akumulasi uap air superpanas dan gas CO2 di dalam selulosa biji mencapai tekanan kritis 20 hingga 25 atmosfer sebelum merekah pada First Crack.',
    answers: [
      { id: 'a-rst-5-1', answer_text: '20 hingga 25 atmosfer (atm)', is_correct: true },
      { id: 'a-rst-5-2', answer_text: '1 hingga 2 atmosfer (atm)', is_correct: false },
      { id: 'a-rst-5-3', answer_text: '50 hingga 60 atmosfer (atm)', is_correct: false },
      { id: 'a-rst-5-4', answer_text: '100 atmosfer (atm)', is_correct: false },
    ],
  },
  {
    id: 'q-rst-6',
    quiz_id: 'quiz-r-final',
    question_text: 'Jika sebuah batch disangrai dengan total durasi 600 detik dan First Crack terjadi di detik ke-510, berapakah nilai Development Time Ratio (DTR)-nya?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 6,
    explanation: 'Development time = 600 - 510 = 90 detik. DTR = (90 / 600) * 100% = 15.0%.',
    answers: [
      { id: 'a-rst-6-1', answer_text: '15.0%', is_correct: true },
      { id: 'a-rst-6-2', answer_text: '12.5%', is_correct: false },
      { id: 'a-rst-6-3', answer_text: '18.2%', is_correct: false },
      { id: 'a-rst-6-4', answer_text: '20.0%', is_correct: false },
    ],
  },
  {
    id: 'q-rst-7',
    quiz_id: 'quiz-r-final',
    question_text: 'Apakah dampak sensori utama yang ditimbulkan jika kurva Rate of Rise (RoR) mengalami fenomena "Flick" (lonjakan tiba-tiba) menjelang akhir sangrai?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 7,
    explanation: 'RoR Flick memicu kenaikan suhu tak terkontrol di fase akhir yang merusak senyawa aromatik manis dan menghasilkan rasa pahit getir serta sensasi kering di mulut.',
    answers: [
      { id: 'a-rst-7-1', answer_text: 'Rasa pahit tajam, dry astringent aftertaste, dan hilangnya keasaman manis alami', is_correct: true },
      { id: 'a-rst-7-2', answer_text: 'Rasa rumput mentah seperti kacang hijau basah', is_correct: false },
      { id: 'a-rst-7-3', answer_text: 'Seduhan menjadi terlalu beraroma bunga melati', is_correct: false },
      { id: 'a-rst-7-4', answer_text: 'Kopi kehilangan seluruh kandungan kafeinnya', is_correct: false },
    ],
  },
  {
    id: 'q-rst-8',
    quiz_id: 'quiz-r-final',
    question_text: 'Cacat sangrai fisik apakah yang ditandai dengan ujung embrio biji yang menghitam terbakar akibat lonjakan panas terlalu agresif di First Crack?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 8,
    explanation: 'Tipping adalah cacat hangus pada ujung embrio biji akibat panas api atau radiasi yang terlalu mendadak saat membran selulosa merekah pada First Crack.',
    answers: [
      { id: 'a-rst-8-1', answer_text: 'Tipping', is_correct: true },
      { id: 'a-rst-8-2', answer_text: 'Facing', is_correct: false },
      { id: 'a-rst-8-3', answer_text: 'Scorching', is_correct: false },
      { id: 'a-rst-8-4', answer_text: 'Baking', is_correct: false },
    ],
  },
  {
    id: 'q-rst-9',
    quiz_id: 'quiz-r-final',
    question_text: 'Apa yang menyebabkan kopi mengalami cacat "Baked Coffee" dengan karakter rasa hambar menyerupai roti tawar atau karton basah?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 9,
    explanation: 'Baked coffee terjadi ketika kurva RoR mendatar (stall/crash) dan kehilangan momentum energi, sehingga biji hanya terpanggang pasif tanpa perkembangan aroma.',
    answers: [
      { id: 'a-rst-9-1', answer_text: 'Kurva RoR mendatar (stall) atau anjlok drastis sehingga kehilangan momentum energi termal', is_correct: true },
      { id: 'a-rst-9-2', answer_text: 'Suhu Charge terlalu tinggi di atas 240°C', is_correct: false },
      { id: 'a-rst-9-3', answer_text: 'Putaran drum terlalu cepat di atas 100 RPM', is_correct: false },
      { id: 'a-rst-9-4', answer_text: 'Biji kopi tidak dicuci sebelum dimasukkan ke dalam drum', is_correct: false },
    ],
  },
  {
    id: 'q-rst-10',
    quiz_id: 'quiz-r-final',
    question_text: 'Dalam standar operasional pendinginan (cooling tray), berapa batas waktu maksimum untuk menurunkan suhu biji dari >200°C ke bawah 40°C?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 10,
    explanation: 'Suhu biji wajib turun ke bawah 40°C dalam waktu kurang dari 3 menit (target optimal <2 menit) untuk menghentikan reaksi pirolisis internal residual.',
    answers: [
      { id: 'a-rst-10-1', answer_text: 'Kurang dari 3 menit', is_correct: true },
      { id: 'a-rst-10-2', answer_text: '10 hingga 15 menit', is_correct: false },
      { id: 'a-rst-10-3', answer_text: '30 menit', is_correct: false },
      { id: 'a-rst-10-4', answer_text: 'Tidak ada batas waktu selama diangin-anginkan', is_correct: false },
    ],
  },
  {
    id: 'q-rst-11',
    quiz_id: 'quiz-r-final',
    question_text: 'Berapakah deviasi maksimal nilai warna spektrofotometri Agtron yang diizinkan untuk menjaga konsistensi batch-to-batch pada roastery komersial?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 11,
    explanation: 'Toleransi variasi warna produksi komersial antar batch untuk lot yang sama adalah maksimum ±2 poin Agtron.',
    answers: [
      { id: 'a-rst-11-1', answer_text: 'Maksimal ±2 poin Agtron', is_correct: true },
      { id: 'a-rst-11-2', answer_text: 'Maksimal ±10 poin Agtron', is_correct: false },
      { id: 'a-rst-11-3', answer_text: 'Maksimal ±20 poin Agtron', is_correct: false },
      { id: 'a-rst-11-4', answer_text: 'Bebas tanpa batas toleransi', is_correct: false },
    ],
  },
  {
    id: 'q-rst-12',
    quiz_id: 'quiz-r-final',
    question_text: 'Mengapa biji kopi espresso medium-dark roast membutuhkan waktu resting degassing minimal 10 hingga 14 hari sebelum diseduh di mesin espresso komersial?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 12,
    explanation: 'Kandungan gas CO2 yang berlebih akan bereaksi dengan air bertekanan 9 bar membentuk busa crema spons kasar yang terasa asam pahit menusuk akibat asam karbonat.',
    answers: [
      { id: 'a-rst-12-1', answer_text: 'Agar gas CO2 berlebih terlepas sempurna sehingga crema stabil dan tidak membentuk asam karbonat tajam', is_correct: true },
      { id: 'a-rst-12-2', answer_text: 'Agar kadar kafein kopi meningkat hingga dua kali lipat', is_correct: false },
      { id: 'a-rst-12-3', answer_text: 'Karena biji kopi masih basah dan belum mengering', is_correct: false },
      { id: 'a-rst-12-4', answer_text: 'Untuk menunggu minyak kopi menguap seluruhnya ke udara', is_correct: false },
    ],
  },
  {
    id: 'q-rst-13',
    quiz_id: 'quiz-r-final',
    question_text: 'Dalam strategi pembuatan House Blend, mengapa metode Post-Roast Blending jauh lebih direkomendasikan ketika memadukan Arabika Washed SHB dan Robusta?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 13,
    explanation: 'Arabika SHB dan Robusta memiliki densitas, ukuran, dan kadar air yang sangat berbeda sehingga memerlukan kurva panas yang berbeda. Jika disangrai bersama (pre-roast), salah satunya akan hangus atau mentah.',
    answers: [
      { id: 'a-rst-13-1', answer_text: 'Karena kedua biji memiliki densitas dan karakteristik termal berbeda yang memerlukan profil sangrai terpisah', is_correct: true },
      { id: 'a-rst-13-2', answer_text: 'Karena pre-roast blending dilarang oleh asosiasi SCA', is_correct: false },
      { id: 'a-rst-13-3', answer_text: 'Agar warna biji kedua kopi menjadi hitam mengkilap', is_correct: false },
      { id: 'a-rst-13-4', answer_text: 'Karena biji Robusta tidak mengeluarkan First Crack', is_correct: false },
    ],
  },
  {
    id: 'q-rst-14',
    quiz_id: 'quiz-r-final',
    question_text: 'Karakteristik sensori apakah yang paling menonjol dari biji kopi yang mengalami underdevelopment (inti dalam belum matang)?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 14,
    explanation: 'Underdevelopment ditandai dengan aroma rumput basah (grassy), polong kacang hijau mentah, dan keasaman tajam menyengat tak seimbang (sour/chalky).',
    answers: [
      { id: 'a-rst-14-1', answer_text: 'Aroma rumput mentah (grassy), kacang hijau basah, dan rasa asam menyengat tak seimbang', is_correct: true },
      { id: 'a-rst-14-2', answer_text: 'Rasa manis karamel toffee yang sangat kuat', is_correct: false },
      { id: 'a-rst-14-3', answer_text: 'Aroma cokelat panggang dan rempah manis', is_correct: false },
      { id: 'a-rst-14-4', answer_text: 'Bodi yang sangat tebal dan berminyak', is_correct: false },
    ],
  },
  {
    id: 'q-rst-15',
    quiz_id: 'quiz-r-final',
    question_text: 'Jika selisih angka Agtron antara biji kopi utuh (whole bean) dan bubuk gilingan (ground) melebihi 25 poin, diagnosis teknis apakah yang tepat?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 15,
    explanation: 'Selisih >25 poin menunjukkan ketidakmatangan parah (severe underdevelopment), di mana lapisan luar biji tampak matang gelap tetapi inti dalamnya masih mentah pucat.',
    answers: [
      { id: 'a-rst-15-1', answer_text: 'Terjadi ketidakmatangan parah pada inti dalam biji (severe underdevelopment)', is_correct: true },
      { id: 'a-rst-15-2', answer_text: 'Biji kopi telah mencapai tingkat kematangan sempurna (perfect balance)', is_correct: false },
      { id: 'a-rst-15-3', answer_text: 'Biji kopi mengalami overdevelopment dan terbakar gosong', is_correct: false },
      { id: 'a-rst-15-4', answer_text: 'Mesin spektrofotometer mengalami baterai lemah', is_correct: false },
    ],
  },
];
