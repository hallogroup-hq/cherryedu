import { Lesson, Quiz, Question } from '../../types';

export const HOME_BREWER_EXPANDED_LESSONS: Lesson[] = [
  {
    id: 'les-h1-2',
    module_id: 'mod-h1',
    title: 'Single Origin vs House Blend: Memilih Profil Rasa yang Tepat Sesuai Selera',
    content: `
# Single Origin vs House Blend: Memilih Karakter Kopi yang Tepat

Ketika melangkah ke ranah specialty coffee, dilema pertama seorang home brewer adalah memilih antara **Single Origin** atau **House Blend**. Keduanya memiliki fungsi, karakter, dan tujuan ekstraksi yang sangat berbeda.

---

### Perbedaan Mendasar:

| Parameter | Single Origin | House Blend |
|---|---|---|
| **Definisi** | Biji kopi dari satu kebun, wilayah, atau varietas tertentu | Campuran 2 atau lebih biji kopi dengan proporsi terukur |
| **Tujuan Rasa** | Menonjolkan keaslian terroir, varietas, dan proses | Mencapai konsistensi rasa seimbang (*balance*) sepanjang tahun |
| **Karakter Rasa** | Unik, berkarakter buah, floral, keasaman tinggi | Cokelat, karamel, kacang, keasaman rendah hingga sedang |
| **Metode Seduh Ideal**| Manual brew pour-over (V60, Kalita, Aeropress) | Espresso, kopi susu, Mokapot, French Press |

---

### Memahami Resting Period & Degassing:
Biji kopi yang baru keluar dari mesin sangrai (*fresh roast*) mengandung gas karbon dioksida (CO₂) yang terperangkap di dalam pori-pori selulosa biji. 

> [!WARNING]
> Jangan menyeduh biji kopi yang baru disangrai kurang dari 3 hari! Kandungan gas CO₂ yang berlebihan akan memicu *turbulensi gas agresif* saat terkena air panas, menghalangi kontak air dengan bubuk kopi, dan menghasilkan seduhan yang asam menyengat, hambar, dan berbusa berlebihan.

* **Filter Roast (Light to Medium)**: Istirahatkan (*resting*) minimal **7 hingga 14 hari** sebelum diseduh.
* **Espresso Roast (Medium to Dark)**: Istirahatkan minimal **10 hingga 21 hari** agar crema stabil dan tidak bergelembung kasar.
    `,
    content_type: 'text',
    duration_minutes: 12,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan membedakan karakter rasa Single Origin versus House Blend serta pentingnya resting period degassing biji kopi.',
    key_takeaways: [
      'Single Origin terbaik diseduh manual pour-over untuk menikmati terroir dan keasaman buahnya yang kompleks.',
      'House Blend dirancang seimbang dan stabil, sangat cocok untuk espresso rumahan dan campuran susu.',
      'Resting period 7–14 hari wajib dilakukan agar gas CO2 terlepas sempurna demi ekstraksi yang manis dan seimbang.',
    ],
  },

  {
    id: 'les-h2-2',
    module_id: 'mod-h2',
    title: 'Distribusi Partikel Kopi: Mengapa Fines & Boulders Merusak Seduhan Rumahan',
    content: `
# Distribusi Partikel Kopi: Mengapa Grinder Menentukan 80% Kualitas Seduhan

Banyak home brewer menyalahkan suhu air atau teknik tuangan ketika seduhan mereka terasa pahit berdebu atau sebaliknya asam tawar. Kenyataannya, biang keladi utama seringkali berada pada **distribusi ukuran partikel (particle size distribution)** dari grinder mereka.

---

### Anatomi Partikel Bubuk Kopi:
Saat biji kopi digiling oleh burr, biji tidak terbelah menjadi ukuran yang 100% seragam, melainkan menghasilkan spektrum ukuran:
1. **Target Partikel (Target Grind)**: Ukuran partikel ideal sesuai metode seduh (misal: 600–800 mikron untuk V60).
2. **Fines (Partikel Mikro)**: Debu halus berukuran di bawah 100–150 mikron yang dihasilkan dari pecahan dinding sel biji.
3. **Boulders (Pecahan Kasar)**: Bongkahan partikel besar yang lolos sebelum sempat tergiling sempurna.

| Jenis Partikel | Laju Ekstraksi | Dampak Rasa pada Cangkir |
|---|---|---|
| **Fines (Debu)** | Ekstraksi sangat kilat (<10 detik) | *Over-extraction*: Rasa pahit kering (*astringent*), menyumbat kertas saring |
| **Target Size** | Ekstraksi proporsional (2-3 menit) | *Sweet spot*: Manis karamel, keasaman buah jernih, aftertaste panjang |
| **Boulders (Kasar)**| Ekstraksi lambat & dangkal | *Under-extraction*: Rasa asam tajam tak matang, hambar (*watery*) |

---

### Rekomendasi Ukuran Klik Manual Grinder Populer:
Bagi pengguna grinder manual berkualitas tinggi:
* **Timemore C2/C3**: 13–15 klik (V60), 18–20 klik (French Press/Cold Brew), 10–12 klik (Aeropress).
* **Comandante C40 MK4**: 22–26 klik (V60), 18–22 klik (Aeropress), 28–32 klik (Cupping/French Press).
* **1Zpresso K-Ultra**: 6.5–7.5 (V60), 5.0–6.0 (Aeropress), 8.0–9.0 (French Press).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Eksplorasi kurva distribusi partikel, bahaya fines dan boulders pada ekstraksi, serta panduan kalibrasi klik manual grinder.',
    key_takeaways: [
      'Fines berlebih menyebabkan over-extraction (pahit kering dan menyumbat dripper).',
      'Boulders berlebih menyebabkan under-extraction (asam tawar tak berkembang).',
      'Burr baja berkualitas menghasilkan kurva distribusi partikel yang rapat dan ekstraksi yang manis jernih.',
    ],
  },

  {
    id: 'les-h3-2',
    module_id: 'mod-h3',
    title: 'Uji Laboratorium Air Galon Indonesia: Mana yang Terbaik untuk Menyeduh Kopi?',
    content: `
# Uji Laboratorium Air Galon Indonesia untuk Seduh Kopi

[DIAGRAM:water-chemistry]

Secangkir kopi seduh manual terdiri dari **98.5% air** dan hanya 1.5% senyawa padat terlarut kopi. Menyeduh biji kopi Geisha termahal dengan air yang tidak tepat akan menghasilkan rasa datar dan membosankan.

---

### Standar Air Seduh Spesialti (SCA Standard):
* **TDS (Total Dissolved Solids)**: 75 – 150 ppm (Ideal: ~120 ppm)
* **pH**: 6.5 – 7.5 (Netral)
* **Kalsium (Ca²⁺)**: 50 – 68 ppm CaCO₃ (Pengikat rasa buah & asam)
* **Magnesium (Mg²⁺)**: 20 – 40 ppm (Pengikat senyawa rasa manis & floral)
* **Alkalinitas Total**: 40 – 75 ppm CaCO₃ (Buffer penahan lonjakan asam)

---

### Perbandingan Karakter Air Kemasan Galon Populer Indonesia:

| Merek Air Galon | Rata-rata TDS | Karakter Seduhan pada Kopi | Kesimpulan Rekomendasi |
|---|---|---|---|
| **Le Minerale** | ~130 - 150 ppm | Bodi tebal, manis terasa, asam sedikit tertahan | **Sangat Baik** untuk washed & natural Afrika/Indonesia |
| **Cleo (Demineral)**| ~5 - 15 ppm | Asam sangat mencolok dan tajam, bodi tipis | **Kurang Optimal** tanpa remineralisasi (ekstraksi hampa) |
| **Amidis (Distilled)**| 0 - 5 ppm | Asam menusuk, aftertaste hambar datar | **Bahan Baku Ideal** untuk resep mineral mandiri (Lotus water) |
| **Aqua Galon** | ~90 - 110 ppm | Rasa seimbang, acidity cukup cerah, bersih | **Standar Aman & Konsisten** untuk hampir semua origin |
| **Pristine 8+** | ~110 - 130 ppm | pH alkali (>8.0) menetralkan asam buah kopi | **Hindari untuk Filter**, membuat rasa kopi terasa hambar kusam |

> [!TIP]
> **Resep Remineralisasi Sederhana Rumahan (Air 5 Liter Amidis/Cleo)**:
> 1. Siapkan 5 Liter air Amidis/Cleo (TDS ~0).
> 2. Larutkan 0.75 gram Garam Epsom (Magnesium Sulfat) untuk ekstraksi rasa manis buah.
> 3. Larutkan 0.25 gram Baking Soda (Natrium Bikarbonat) sebagai buffer keasaman.
> 4. Kocok hingga larut sempurna. Anda mendapatkan air seduh kelas kompetisi dengan TDS ~115 ppm!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Bedah komparasi TDS dan mineral air galon komersial di Indonesia serta formula racik air mineral mandiri standar kompetisi.',
    key_takeaways: [
      'Air menyumbang 98.5% isi cangkir seduhan kopi, sehingga mineral air adalah faktor penentu rasa.',
      'Aqua dan Le Minerale adalah pilihan air kemasan siap pakai paling seimbang untuk home brewing.',
      'Hindari air alkali (pH > 8.0) karena akan mematikan keasaman buah alami kopi spesialti.',
    ],
  },

  {
    id: 'les-h4-2',
    module_id: 'mod-h4',
    title: 'Metode 4:6 Tetsu Kasuya vs James Hoffmann 1-Pour: Eksperimen Kontrol Rasa',
    content: `
# Metode 4:6 Tetsu Kasuya vs James Hoffmann: Mana yang Cocok untuk Kopimu?

[DIAGRAM:brewing-control-chart]

Hario V60 adalah dripper kerucut paling legendaris di dunia. Namun, dua juara dunia kopi mempopulerkan dua filosofi penyeduhan yang bertolak belakang: **Metode 4:6 (Tetsu Kasuya, World Brewers Cup Champion 2016)** dan **Teknik Ekstraksi Tinggi 1-Pour (James Hoffmann)**.

---

### 1. Metode 4:6 (Tetsu Kasuya)
Filosofi: Membagi total air menjadi dua bagian: **40% pertama** untuk mengontrol keseimbangan rasa manis vs asam (*Sweetness vs Acidity*), dan **60% sisanya** untuk mengatur intensitas kekentalan (*Body & Strength*).

* **Tuangan 1 (Blooming)**: Menentukan keasaman. Tuangan pertama lebih sedikit = lebih manis.
* **Tuangan 2**: Menentukan manis vs asam.
* **Tuangan 3, 4, 5**: Dibagi rata untuk mengatur bodi. Semakin banyak tuangan kecil = bodi semakin pekat.

---

### 2. Metode James Hoffmann (High Extraction Single-Pour)
Filosofi: Menghasilkan ekstraksi setinggi dan seseragam mungkin tanpa terjadi channeling, memaksimalkan kejernihan rasa (*clarity*) dan kemanisan alami.

* Menggunakan gilingan lebih halus daripada 4:6.
* Menggunakan air mendidih (98–100°C) untuk biji light roast.
* Melakukan swirl lembut pada fase bloom dan setelah tuangan utama untuk meratakan *coffee bed*.

| Parameter | Metode 4:6 Kasuya | Metode James Hoffmann |
|---|---|---|
| **Ukuran Gilingan** | Medium-Coarse (Kasar) | Medium-Fine (Halus-Sedang) |
| **Suhu Air** | 88°C – 92°C | 95°C – 100°C |
| **Jumlah Tuangan**| 5 Kali Tuangan Berjarak | 1 Kali Tuangan Kontinu Pasca Bloom |
| **Karakter Rasa** | Bodi tebal, asam buah terpisah jernih, manis kuat | Ekstraksi tinggi, rasa sangat terpadu, aftertaste panjang |
| **Paling Cocok Untuk**| Kopi proses Natural/Honey & Biji Kopi Indonesia | Kopi Washed Afrika (Ethiopia/Kenya) & Geisha |
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Komparasi mendalam dua teknik V60 paling berpengaruh di dunia: Metode 4:6 dan Teknik Kontinu Ekstraksi Tinggi.',
    brew_recipe: {
      method: 'Hario V60 (Metode 4:6 Kasuya)',
      coffee_dose_grams: 20,
      water_amount_ml: 300,
      ratio: '1:15',
      water_temperature_celsius: 90,
      grind_size: 'Medium-Coarse (Giling Kasar)',
      brew_time_minutes: 3.5,
      steps: [
        'Bilas kertas saring dengan air panas dan buang air bilasan.',
        'Tuangan 1 (0:00): Tuang 50g air melingkar perlahan. Tunggu hingga 0:45 (menonjolkan kemanisan).',
        'Tuangan 2 (0:45): Tuang 70g air (total 120g). Tunggu air turun hingga 1:30.',
        'Tuangan 3 (1:30): Tuang 60g air (total 180g). Tunggu hingga 2:15.',
        'Tuangan 4 (2:15): Tuang 60g air (total 240g). Tunggu hingga 3:00.',
        'Tuangan 5 (3:00): Tuang 60g air terakhir (total 300g). Biarkan menetes tuntas hingga 3:30.',
        'Aduk seduhan di server, cangkirkan pada suhu 60°C untuk menikmati manis buah maksimal.',
      ],
    },
    key_takeaways: [
      'Metode 4:6 membagi air: 40% awal mengatur asam-manis, 60% akhir mengatur kekuatan bodi.',
      'Metode Hoffmann mengandalkan gilingan lebih halus dan suhu air tinggi untuk ekstraksi senyawa aromatik maksimal.',
      'Gunakan metode 4:6 untuk kopi proses natural/honey lokal nusantara agar rasa manis buahnya meledak.',
    ],
  },

  {
    id: 'les-h5-2',
    module_id: 'mod-h5',
    title: 'French Press Bebas Ampas: Teknik James Hoffmann yang Mengubah Segalanya',
    content: `
# French Press Bebas Ampas: Rahasia Ekstraksi Immersion Bersih & Berbobot

French Press (Plunger) sering dianggap sebagai alat seduh kuno yang menghasilkan cangkir kopi berlumpur, pahit, dan penuh endapan ampas halus (*sludge*). Namun dengan memahami sains sedimentasi partikel, kita dapat menghasilkan secangkir kopi French Press yang berbobot tebal namun sejernih cangkir pour-over.

---

### Mengapa French Press Konvensional Gagal?
Cara konvensional mengajarkan: seduh kopi 4 menit, lalu tekan plunger logam sampai ke dasar. 
> [!WARNING]
> Menekan plunger sampai ke dasar akan menggilas ampas kopi di bawah, memeras partikel fines mikro dan minyak pahit berlebih ke dalam cairan seduhan, serta menciptakan pusaran turbulensi yang mengaduk ampas kembali ke atas!

---

### Protokol French Press Bebas Ampas (James Hoffmann Technique):
1. **Gilingan**: Medium (bukan ekstra kasar seperti petunjuk lama).
2. **Tuang Air Mendidih**: Tuang air 98–100°C dengan rasio 1:16 (misal: 30g kopi ke 500g air).
3. **Diamkan 4 Menit**: Biarkan bubuk membentuk lapisan kerak (*crust*) di permukaan.
4. **Pecahkan Kerak (*Break the Crust*)**: Pada menit ke-4, gunakan sendok untuk mengaduk permukaan 3 kali. Sebagian besar bubuk akan tenggelam ke dasar wadah!
5. **Bersihkan Busa Halus (*Skim the Foam*)**: Gunakan 2 sendok untuk mengangkat busa putih dan partikel mengambang di permukaan.
6. **Diamkan Minimal 5 Menit Tambahan (Menit ke-5 hingga 10)**: Ini kuncinya! Partikel fines yang tersisa akan mengendap secara gravitasi ke dasar bejana kaca.
7. **Pasang Plunger Tanpa Ditekan**: Masukkan plunger hanya sampai di bawah permukaan cairan kopi sebagai penyaring saat menuang. **JANGAN DITEKAN KE DASAR**.
8. **Tuang Perlahan ke Cangkir**: Tuang dengan lembut tanpa mengocok wadah. Cangkir Anda akan bebas endapan ampas lumpur!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan lengkap ekstraksi immersion French Press tanpa lumpur ampas menggunakan prinsip sedimentasi gravitasi.',
    brew_recipe: {
      method: 'The Ultimate Clean French Press',
      coffee_dose_grams: 30,
      water_amount_ml: 500,
      ratio: '1:16.6',
      water_temperature_celsius: 98,
      grind_size: 'Medium (Ukuran Giling Sedang)',
      brew_time_minutes: 10,
      steps: [
        'Masukkan 30g bubuk kopi ke bejana French Press kaca yang kering.',
        'Tuang 500g air panas bersuhu 98-100°C secara agresif agar semua bubuk terbasahi.',
        'Biarkan terbuka selama 4 menit penuh tanpa diaduk.',
        'Pada menit ke-4:00, aduk permukaan atas 3 kali dengan sendok. Amati bubuk tenggelam.',
        'Gunakan dua sendok untuk membersihkan busa putih dan sisa partikel mengapung.',
        'Diamkan selama 5 hingga 6 menit berikutnya agar partikel mikro mengendap tuntas di dasar.',
        'Pasang tutup plunger dan saring hanya di permukaan atas tanpa ditekan ke bawah.',
        'Tuang perlahan ke cangkir, nikmati bodi sutra tanpa endapan lumpur.',
      ],
    },
    key_takeaways: [
      'Jangan menekan plunger French Press ke dasar karena akan memeras fines pahit ke cangkir.',
      'Proses sedimentasi gravitasi menit ke-4 hingga ke-10 menghasilkan ekstraksi jernih tanpa ampas.',
      'Suhu tinggi (98°C–100°C) aman digunakan pada immersion karena suhu air turun alami secara bertahap.',
    ],
  },

  {
    id: 'les-h7-2',
    module_id: 'mod-h7',
    title: 'Cold Brew Concentrate vs Japanese Iced Pour Over: Sains Ekstraksi Dingin',
    content: `
# Cold Brew Concentrate vs Japanese Iced Pour Over: Dua Dunia Kopi Dingin

Minuman kopi dingin adalah favorit utama di iklim tropis Indonesia. Namun, terdapat perbedaan kimiawi mendalam antara kopi yang **diekstraksi dingin sejak awal (Cold Brew)** dan kopi yang **diekstraksi panas lalu didinginkan kilat (Japanese Iced / Flash Brew)**.

---

### Perbedaan Termodinamika & Kimiawi:

| Aspek | Cold Brew Concentrate | Japanese Iced (Flash Brew) |
|---|---|---|
| **Suhu Ekstraksi** | Suhu Ruang / Dingin (4°C – 20°C) | Panas Mendidih (90°C – 94°C) |
| **Durasi Waktu** | 12 hingga 18 Jam Perendaman | 3 Menit (Real-time di atas es) |
| **Kelarutan Senyawa**| Hanya mengekstraksi senyawa larut air dingin | Mengekstraksi asam buah volatil & aromatik bunga |
| **Kadar Asam (Acidity)**| Sangat Rendah (Lembut di lambung) | Tinggi, cerah, segar (*crisp fruit acidity*) |
| **Masa Simpan** | Tahan 2 minggu di chiller lemari es | Wajib dikonsumsi segera dalam 30 menit |
| **Karakter Rasa** | Cokelat manis, karamel, bodi sirup tebal | Segar, aroma floral semerbak, buah jeruk/berry |

---

### Formula Matematika Japanese Iced Coffee:
Saat membuat Japanese Iced Pour Over, total air seduhan dibagi menjadi:
* **60% Air Panas** di ketel leher angsa.
* **40% Es Batu Kristal Padat** langsung diletakkan di dalam server kaca (*carafe*).

> **Contoh Formula Rasio 1:15**:
> * Dosis Kopi: **20 gram**.
> * Total Air Keseluruhan: **300 gram**.
> * Es Batu di Server: **120 gram**.
> * Air Panas untuk Tuang: **180 gram**.
> 
> *Hasil Ekstraksi*: Air panas 180g mengekstraksi asam aromatik bunga yang hanya bisa larut pada suhu panas, lalu cairan kopi yang menetes bersuhu ~80°C seketika membentur es batu, mendinginkannya secara kilat (*thermal shock*) dan mengunci senyawa aromatik volatil agar tidak menguap ke udara!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Perbandingan sains ekstraksi termal antara Cold Brew perendaman panjang dan Japanese Flash Brew penguncian aroma panas-dingin.',
    brew_recipe: {
      method: 'Japanese Iced Pour Over (Flash Brew)',
      coffee_dose_grams: 20,
      water_amount_ml: 180,
      ratio: '1:15 (180ml air panas + 120g es batu)',
      water_temperature_celsius: 93,
      grind_size: 'Medium-Fine (Sedikit Lebih Halus dari V60 Biasa)',
      brew_time_minutes: 2.5,
      steps: [
        'Timbang 120g es batu kristal keras dan masukkan langsung ke dalam server kopi.',
        'Pasang dripper V60 dan bilas kertas saring secara terpisah sebelum ditaruh di atas server es.',
        'Masukkan 20g bubuk kopi gilingan medium-fine.',
        'Blooming (0:00): Tuang 50g air panas 93°C, putar lembut server, tunggu 40 detik.',
        'Tuangan 1 (0:40): Tuang melingkar hingga timbangan mencapai 110g air.',
        'Tuangan 2 (1:20): Tuang perlahan di tengah hingga mencapai 180g air panas tuntas.',
        'Tunggu seluruh air turun menembus es batu kristal (selesai pada menit 2:15 - 2:30).',
        'Goyang server kaca hingga seluruh es mencair sempurna. Nikmati aroma floral buah yang terkunci!',
      ],
    },
    key_takeaways: [
      'Cold brew minim keasaman dan manis pekat karena diekstraksi tanpa panas selama 12–18 jam.',
      'Japanese Iced mengekstraksi minyak aromatik volatil dengan air panas lalu menguncinya secara instan dengan es.',
      'Gunakan rasio 60% air panas dan 40% es batu di server untuk mencegah rasa kopi menjadi encer.',
    ],
  },

  {
    id: 'les-h8-1',
    module_id: 'mod-h8',
    title: 'Manual Lever Espresso: Rahasia Pre-Infusion & Tekanan 9 Bar dengan Flair / Picopresso',
    content: `
# Manual Lever Espresso: Menguasai Profil Tekanan Tanpa Mesin Listrik Puluhan Juta

Mesin espresso manual bertekanan tuas (*lever machine*) seperti **Flair Espresso Maker**, **Cafelat Robot**, atau portabel seperti **Wacaco Picopresso** membuktikan bahwa tekanan 9 bar dan ekstraksi espresso sejati tidak memerlukan pompa listrik bertenaga ribuan watt.

---

### Variabel Penentu Espresso Manual Presisi:

1. **Pre-Infusion Tekanan Rendah (1–3 Bar)**:
   Keunggulan terbesar tuas manual adalah kontrol *pre-infusion*. Dengan menekan tuas perlahan pada 2 bar selama 5–10 detik pertama, air membasahi seluruh permukaan *coffee puck* secara seragam, mengembangkan pori-pori kopi, dan meminimalisir risiko retak saluran air (*channeling*).

2. **Puncak Tekanan Ekstraksi (8–9 Bar)**:
   Setelah tetesan pertama muncul di dasar portafilter, naikkan tekanan tuas hingga jarum manometer menyentuh 8.5–9 bar untuk melarutkan lemak kopi dan membentuk lapisan *crema* emas kemerahan yang padat.

3. **Deklinasi Tekanan Bertahap (*Declining Pressure Profile*)**:
   Di paruh akhir ekstraksi (detik ke-25 hingga 35), turunkan tekanan perlahan dari 9 bar ke 6 bar. Langkah ini mencegah rasa pahit gosong akibat erosi partikel kopi yang sudah terekstraksi.

---

### Puck Preparation yang Sempurna (WDT & Tamping):
* **WDT Tool (Weiss Distribution Technique)**: Jarum berdiameter 0.35–0.4mm untuk memecah gumpalan bubuk mikro di dalam basket.
* **Leveling**: Meratakan permukaan bed kopi sebelum ditekan.
* **Tamping Tegak Lurus**: Tekan dengan tekanan mantap ~15–20 kg hingga bed kopi padat merata tanpa miring.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Teknik operasional tuas manual espresso, pre-infusion dinamis, dan puck preparation standar profesional.',
    brew_recipe: {
      method: 'Manual Lever Espresso (Flair / Robot)',
      coffee_dose_grams: 18,
      water_amount_ml: 60,
      ratio: '1:2.2 (Yield 40g liquid)',
      water_temperature_celsius: 95,
      grind_size: 'Fine (Khusus Espresso)',
      brew_time_minutes: 0.6,
      steps: [
        'Panaskan cylinder brew chamber dengan air mendidih selama 2-3 menit.',
        'Giling 18g biji kopi espresso roast dengan gilingan fine.',
        'Gunakan WDT jarum untuk meratakan bubuk di basket portafilter.',
        'Tamp tegak lurus secara mantap dan pasang puck screen logam di atasnya.',
        'Rangkai chamber, tuang air 95°C hingga batas penuh.',
        'Fase 1: Tekan tuas perlahan pada 2-3 bar selama 8 detik (pre-infusion).',
        'Fase 2: Naikkan tekanan hingga 9 bar mantap selama 15 detik berikutnya.',
        'Fase 3: Turunkan tekanan bertahap ke 6 bar hingga timbangan mencatat yield 40g.',
        'Hentikan tuangan. Nikmati espresso bodi pekat dengan crema harimau (tiger stripes).',
      ],
    },
    key_takeaways: [
      'Tuas manual memungkinkan pre-infusion fleksibel yang mengeliminasi masalah channeling.',
      'Puck preparation (WDT dan tamping lurus) adalah syarat mutlak agar ekstraksi tidak bocor menyemprot.',
      'Turunkan tekanan di akhir seduhan (declining pressure) untuk menjaga rasa espresso tetap manis dan bulat.',
    ],
  },

  {
    id: 'les-h9-2',
    module_id: 'mod-h9',
    title: 'Formula Sirup Gula Aren Kental Murni & Rahasia Microfoam Susu Tanpa Mesin Steam',
    content: `
# Formula Es Kopi Susu Spesialti Rumahan: Gula Aren Murni & Texturing Susu Manual

Es Kopi Susu Gula Aren adalah minuman paling dicintai di Indonesia. Namun, sebagian besar kedai komersial menggunakan sirup aren olahan pabrik yang dicampur pemanis jagung buatan. Di rumah, kita bisa membuat versi artisanal yang jauh lebih lezat dan sehat.

---

### Formula Pembuatan Sirup Gula Aren Murni (Ratio 2:1):
* **Bahan Baku**:
  * 500 gram Gula Aren Murni Asli (pilih gula aren batok Lebak Banten atau aren Kawung Ciamis yang gelap aromatik).
  * 250 ml Air Mineral Bersih.
  * 2 lembar Daun Pandan wangi (diikat simpul).
  * 1/4 sendok teh Garam Laut (*Sea Salt*) untuk mempertegas rasa gurih manis (*umami*).
* **Cara Ekstraksi Sirup**:
  1. Sisir halus gula aren batok agar cepat larut.
  2. Didihkan air bersama daun pandan dengan api sedang.
  3. Masukkan gula aren dan garam, kecilkan api ke level minimal.
  4. Aduk konstan selama 10–12 menit hingga cairan mengental ke konsistensi sirup cair (sekitar 65° Brix).
  5. Saring melalui saringan kain rapat ke dalam botol kaca steril. Simpan di kulkas hingga 1 bulan!

---

### Cara Membuat Microfoam Susu Selembut Sutra dengan French Press:
Bagi home brewer tanpa wand steam mesin komersial:
1. Hangatkan susu UHT / Fresh Milk Full Cream hingga suhu **60°C – 65°C** (jangan sampai mendidih di atas 70°C karena protein susu akan rusak dan denaturasi).
2. Tuang susu hangat ke dalam wadah French Press kaca.
3. Pasang plunger, lalu pompa tuas plunger secara agresif di dasar wadah sebanyak **20 hingga 25 kali** untuk memasukkan gelembung udara mikro.
4. Putar dan ketukkan French Press di atas meja untuk memecahkan gelembung besar.
5. Anda akan mendapatkan *microfoam glossy* seperti cat basah yang siap dituangkan untuk latte art indah di rumah!
    `,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Resep artisanal sirup gula aren pandan murni dan teknik texturing microfoam susu menggunakan French press.',
    key_takeaways: [
      'Gunakan gula aren asli tanpa pemanis sintetis dengan penambahan sea salt untuk memperkaya rasa gurih.',
      'Susu dipanaskan maksimal 60°C–65°C agar rasa manis alami laktosa tidak rusak.',
      'French press dapat digunakan untuk memompa microfoam susu halus sekelas mesin espresso komersial.',
    ],
  },

  {
    id: 'les-h10-2',
    module_id: 'mod-h10',
    title: 'Sanitasi Grinder, Perawatan Ketel Leher Angsa, & Penyimpanan Biji Hermetik',
    content: `
# Pemeliharaan Coffee Corner: Sanitasi Alat & Penyimpanan Biji Kedap Udara

Alat seduh terbaik di dunia akan menghasilkan rasa kopi yang kotor jika tidak dirawat dengan higienis. Minyak kopi (*coffee oils*) yang menempel pada dinding burr grinder dan alat seduh akan mengalami oksidasi dan tengik (*rancid*) hanya dalam hitungan minggu.

---

### Protokol Pembersihan Rutin:
1. **Grinder Cleaning**:
   * Bersihkan burr grinder setiap 2 minggu sekali menggunakan kuas bulu halus dan *air blower*.
   * Gunakan butiran pembersih berbasis gandum alami (*Urnex Grindz*) setiap 2 bulan sekali untuk menyerap minyak kopi yang mengeras di celah gerigi burr.
   * **PENTING**: Jangan pernah mencuci burr baja karbon (*carbon steel burr*) dengan air mengalir karena akan memicu karat mikro permanen!
2. **Descaling Ketel Leher Angsa (Gooseneck Kettle)**:
   * Mineral kalsium dari air seduh akan membentuk kerak putih (*limescale*) di dasar ketel.
   * Larutkan 2 sendok makan asam sitrat (*citric acid*) ke dalam ketel penuh air, rebus hingga mendidih, diamkan 30 menit, lalu bilas bersih. Kerak akan lenyap seketika.

---

### Sains Penyimpanan Biji Kopi:
Tiga musuh utama biji kopi sangrai adalah: **Oksigen (O_2), Kelembaban, dan Sinar Matahari Langsung**.
* **Penyimpanan Harian (1–3 Minggu)**: Gunakan wadah *vacuum canister* bersekat kedap udara (misal: Fellow Atmos atau wadah one-way valve) di tempat sejuk dan gelap.
* **Penyimpanan Jangka Panjang (>1 Bulan)**: Bekukan (*freezing*) di dalam kantong kedap udara kedap udara tertutup rapat (*hermetic seal* / vacuum seal). Ambil langsung saat beku dan giling seketika tanpa perlu menunggu mencair! Biji kopi beku justru menghasilkan distribusi partikel yang lebih seragam dan minim fines!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'SOP pemeliharaan alat seduh rumahan, sanitasi burr grinder tanpa merusak baja, serta sains penyimpanan biji kopi beku.',
    key_takeaways: [
      'Jangan mencuci burr grinder berbahan baja dengan air karena memicu oksidasi karat.',
      'Kerak ketel dibersihkan rutin menggunakan larutan food-grade asam sitrat.',
      'Membekukan biji kopi sangrai dalam kemasan hermetik terbukti menjaga kesegaran rasa hingga berbulan-bulan.',
    ],
  },

  {
    id: 'les-h6-2',
    module_id: 'mod-h6',
    title: 'Flat Bottom Dripper Lanjutan: Mengontrol Bypass dan Laju Ekstraksi pada Origami & April Brewer',
    content: `# Flat Bottom Dripper Lanjutan: Origami, April Brewer, dan Kalita Wave

Berbeda dari dripper kerucut V60 yang memiliki dasar runcing tunggal, dripper flat-bottom (dasar rata) memiliki dasar horizontal dengan multi-lubang pengaliran.

[DIAGRAM:brewing-control-chart]

---

### 1. Keunggulan Geometri Flat-Bottom

* **Bed Kopi Lebih Tipis dan Lebar**: Air seduh melintasi kedalaman bubuk yang seragam dari ujung ke ujung.
* **Mencegah Channelling Tengah**: Tidak ada risiko air hanya menerobos titik tengah seperti pada dripper kerucut jika teknik tuangan belum stabil.
* **Sangat Ramah Biji Fermentasi Buah (Anaerobic / Natural)**: Flat bottom mempertahankan kontak air yang stabil tanpa mengikis keasaman yang berlebihan, menonjolkan rasa manis gula dan bodi cangkir yang bersih.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Flat Bottom Dripper Lanjutan: Mengontrol Bypass dan Laju Ekstraksi pada Origami & April Brewer untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  },
  {
    id: 'les-h6-3',
    module_id: 'mod-h6',
    title: 'Perbandingan Filter Paper: Bleached vs Unbleached, Porositas Kertas Kalita vs Fast Flow',
    content: `# Perbandingan Kertas Saring: Bleached vs Unbleached dan Pengaruh Rasa Kertas

Kertas saring (*filter paper*) adalah penghalang utama antara bubuk kopi dan server cangkir Anda. Memilih kertas yang salah dapat mencemari kopi mahal dengan aroma karton basah!

---

### 1. Kertas Putih (Bleached) vs Kertas Cokelat (Unbleached)

* **Kertas Cokelat (*Unbleached / Natural Kraft*)**: Masih mengandung serat lignin kayu mentah. Meskipun dibilas air mendidih 3 kali, kertas cokelat tetap meninggalkan residu rasa kardus basah dan bau kayu lapuk di dalam cangkir!
* **Kertas Putih (*Oxygen Bleached*)**: Dikelantang menggunakan senyawa oksigen murni (bukan klorin beracun). Memiliki residu aroma kertas paling rendah (hampir netral total) dan aman bagi kesehatan serta lingkungan.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Perbandingan Filter Paper: Bleached vs Unbleached, Porositas Kertas Kalita vs Fast Flow untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  },
  {
    id: 'les-h8-2',
    module_id: 'mod-h8',
    title: 'Picopresso & Espresso Portabel: Dial-In Biji Sangrai Medium, Pre-Infusi Manual, dan Crema 9 Bar',
    content: `# Picopresso & Espresso Portabel: Presisi 9 Bar di Telapak Tangan

Dahulu, menghasilkan espresso bertekanan 9 bar membutuhkan mesin berbobot puluhan kilogram yang tersambung ke listrik 2.000 Watt. Kini, inovasi alat portabel seperti *Wacaco Picopresso* memungkinkan ekstraksi standar komersial di mana saja.

---

### 1. Rahasia Pre-Infusion Manual pada Picopresso

Pompa piston manual memberikan kendali tak terbatas atas kurva tekanan ekstraksi:
1. **Pre-Infusion 10–12 Detik**: Pompa perlahan 8–10 kali hingga tetesan kopi pertama muncul di bawah basket naked, lalu berhenti sejenak. Biarkan tekanan 2–3 bar membasahi seluruh bubuk kopi hingga mekar sempurna.
2. **Ekstraksi Tekanan Tinggi (Pumping Phase)**: Lanjutkan pompa dengan ritme 1 pompa per detik hingga mencapai target yield 36 gram.
3. *Hasil di Cangkir*: Crema tebal keemasan (*tiger stripes*) dan bodi kental yang setara dengan mesin komersial kafe!`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Picopresso & Espresso Portabel: Dial-In Biji Sangrai Medium, Pre-Infusi Manual, dan Crema 9 Bar untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  },
  {
    id: 'les-h8-3',
    module_id: 'mod-h8',
    title: 'Susu Panas Manual Rumahan: Menggunakan French Press & Nanofoamer untuk Tekstur Silky Latte Art',
    content: `# Susu Panas Manual Rumahan: Menggunakan French Press & Nanofoamer

Anda tidak memerlukan mesin espresso jutaan rupiah hanya untuk membuat latte art yang cantik di rumah.

---

### 1. Teknik Pompa French Press (The 50-Plunge Method)

1. Panaskan 150ml susu cair pasteurisasi di panci kecil atau microwave hingga suhu **60°C** (terasa hangat nyaman di tangan, jangan sampai mendidih!).
2. Tuang susu hangat ke dalam wadah kaca French Press.
3. Pasang saringan plunger, lakukan **3-4 kali pompa panjang di permukaan** untuk meregangkan udara masuk.
4. Tenggelamkan saringan ke bagian bawah susu, lalu lakukan **40–50 kali pompa pendek cepat di dasar** untuk mencacah gelembung menjadi microfoam halus mengilap.
5. Tuang ke dalam pitcher dan putar lembut (*swirling*) sebelum menuang latte art!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Susu Panas Manual Rumahan: Menggunakan French Press & Nanofoamer untuk Tekstur Silky Latte Art untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  },
  {
    id: 'les-h4-3',
    module_id: 'mod-h4',
    title: 'Eksperimen Agitasi Seduh: Spiral Pour vs Center Pour vs Swirling Dripper terhadap Fines Migration',
    content: `# Eksperimen Agitasi Seduh: Spiral Pour vs Center Pour vs Swirling

Agitasi adalah energi kinetik yang ditransfer oleh aliran air seduh ke dalam bubuk kopi. Memahami agitasi adalah rahasia menghindari cangkir kopi yang macet (*clogging*).

---

### 1. Bahaya Menggoyangkan Dripper Berlebihan (*Excessive Swirling*)

Menggoyangkan dripper secara memutar terlalu kencang memicu gaya sentrifugal yang mendorong partikel debu kopi halus (*fines*) bermigrasi ke dasar pori-pori kertas saring. Akibatnya, air macet total (*drawdown stalling*), waktu seduh molor hingga 4 menit, dan kopi menjadi pahit sepet gosong!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Eksperimen Agitasi Seduh: Spiral Pour vs Center Pour vs Swirling Dripper terhadap Fines Migration untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  },
  {
    id: 'les-h7-3',
    module_id: 'mod-h7',
    title: 'Sains Nitro Cold Brew Rumahan: Infusi Gas Nitrogen (N2) Menggunakan Whipper Dispenser',
    content: `# Sains Nitro Cold Brew Rumahan: Sensasi Kopi Creamy Berkarbon Lembut

Nitro Cold Brew menghadirkan sensasi meminum bir hitam Irlandia (*Guinness Stout*) pada kopi dingin: busa kepala putih tebal (*cascading foam*) dan rasa manis krim alami tanpa tambahan gula atau susu setetes pun.

---

### 1. Cara Membuat Nitro Cold Brew di Rumah

1. Buat konsentrat cold brew bersih (disaring dua kali menggunakan kertas filter halus).
2. Masukkan 500ml cold brew dingin ke dalam tabung *Whipped Cream Dispenser* stainless steel.
3. Pasang 1 cartridge tabung gas **Nitrogen Murni (N2)** atau **N2O**.
4. Kocok tabung dengan kuat selama 30 detik agar molekul gas larut ke dalam lipid kopi.
5. Semprotkan secara miring 45 derajat ke dalam gelas kaca bening dan nikmati efek kaskade gelembung putih yang dramatis!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Sains Nitro Cold Brew Rumahan: Infusi Gas Nitrogen (N2) Menggunakan Whipper Dispenser untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  },
];

export const HOME_BREWER_QUIZZES: Quiz[] = [
  {
    id: 'quiz-h-final',
    module_id: 'mod-h10',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Sertifikasi Home Brewer Specialist',
    description: 'Ujian komprehensif 15 soal mencakup sains gilingan, rekayasa air mineral, V60, Aeropress, French press, dan manual espresso.',
    passing_score: 80,
    time_limit_minutes: 25,
    max_attempts: 3,
    created_at: '2026-08-10T00:00:00Z',
  },
];

export const HOME_BREWER_QUESTIONS: Question[] = [
  {
    id: 'q-hb-1',
    quiz_id: 'quiz-h-final',
    question_text: 'Mengapa biji kopi light roast yang baru disangrai kurang dari 3 hari sebaiknya tidak langsung diseduh?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 1,
    explanation: 'Gas CO2 yang berlebih memicu turbulensi gas agresif saat terkena air, menghalangi ekstraksi senyawa manis dan menghasilkan rasa asam tajam hambar.',
    answers: [
      { id: 'a-hb-1-1', answer_text: 'Kandungan gas CO2 masih terlalu tinggi sehingga menghalangi ekstraksi merata', is_correct: true },
      { id: 'a-hb-1-2', answer_text: 'Biji kopi belum memiliki kadar kafein yang cukup', is_correct: false },
      { id: 'a-hb-1-3', answer_text: 'Kadar air di dalam biji kopi masih di atas 20%', is_correct: false },
      { id: 'a-hb-1-4', answer_text: 'Minyak kopi belum keluar ke permukaan biji', is_correct: false },
    ],
  },
  {
    id: 'q-hb-2',
    quiz_id: 'quiz-h-final',
    question_text: 'Dalam distribusi partikel gilingan kopi, apakah dampak utama dari keberadaan "fines" (partikel debu mikro) yang berlebihan?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 2,
    explanation: 'Fines memiliki rasio luas permukaan sangat besar sehingga terekstraksi terlalu cepat, menghasilkan rasa pahit kelat (astringent) dan menyumbat pori kertas saring.',
    answers: [
      { id: 'a-hb-2-1', answer_text: 'Memicu over-extraction, rasa pahit sepat kering, dan memperlambat laju alir air', is_correct: true },
      { id: 'a-hb-2-2', answer_text: 'Menyebabkan rasa kopi menjadi terlalu asam seperti cuka', is_correct: false },
      { id: 'a-hb-2-3', answer_text: 'Membuat seduhan mengalir terlalu cepat tanpa ekstraksi', is_correct: false },
      { id: 'a-hb-2-4', answer_text: 'Menurunkan total dissolved solids (TDS) seduhan', is_correct: false },
    ],
  },
  {
    id: 'q-hb-3',
    quiz_id: 'quiz-h-final',
    question_text: 'Berapa rentang TDS air seduh ideal menurut standar SCA untuk menghasilkan ekstraksi kopi spesialti yang seimbang?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 3,
    explanation: 'SCA merekomendasikan target TDS 75 - 150 ppm (dengan titik optimal sekitar 120-150 ppm) untuk ekstraksi seimbang.',
    answers: [
      { id: 'a-hb-3-1', answer_text: '75 hingga 150 ppm', is_correct: true },
      { id: 'a-hb-3-2', answer_text: '0 hingga 20 ppm', is_correct: false },
      { id: 'a-hb-3-3', answer_text: '300 hingga 500 ppm', is_correct: false },
      { id: 'a-hb-3-4', answer_text: '600 hingga 1000 ppm', is_correct: false },
    ],
  },
  {
    id: 'q-hb-4',
    quiz_id: 'quiz-h-final',
    question_text: 'Pada metode V60 4:6 Tetsu Kasuya, alokasi 40% air pada dua tuangan awal berfungsi untuk mengatur variabel apa?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 4,
    explanation: '40% air pertama mengatur rasio keasaman vs kemanisan (Sweetness vs Acidity), sedangkan 60% sisanya mengatur kekuatan bodi seduhan.',
    answers: [
      { id: 'a-hb-4-1', answer_text: 'Keseimbangan rasa keasaman dan kemanisan (Sweetness vs Acidity)', is_correct: true },
      { id: 'a-hb-4-2', answer_text: 'Ketebalan bodi dan intensitas kekuatan kopi', is_correct: false },
      { id: 'a-hb-4-3', answer_text: 'Suhu pendinginan server kopi', is_correct: false },
      { id: 'a-hb-4-4', answer_text: 'Laju pembersihan ampas di dinding dripper', is_correct: false },
    ],
  },
  {
    id: 'q-hb-5',
    quiz_id: 'quiz-h-final',
    question_text: 'Pada teknik French Press bersih James Hoffmann, mengapa plunger tidak ditekan sampai ke dasar wadah kaca?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 5,
    explanation: 'Menekan plunger ke dasar wadah akan mengaduk kembali ampas fines yang sudah mengendap di dasar dan memeras senyawa pahit ke cairan seduhan.',
    answers: [
      { id: 'a-hb-5-1', answer_text: 'Agar tidak menggilas ampas fines yang sudah mengendap secara gravitasi di dasar bejana', is_correct: true },
      { id: 'a-hb-5-2', answer_text: 'Karena kaca French Press akan langsung pecah akibat tekanan', is_correct: false },
      { id: 'a-hb-5-3', answer_text: 'Agar suhu air tidak turun drastis', is_correct: false },
      { id: 'a-hb-5-4', answer_text: 'Untuk mempertahankan minyak krema di atas kopi', is_correct: false },
    ],
  },
];
