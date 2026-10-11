import { Lesson, Quiz, Question } from '../../types';

export const HOME_BREWER_EXPANDED_LESSONS: Lesson[] = [
{
    id: 'les-h3-2',
    module_id: 'mod-h3',
    title: 'Kanalisasi (Channeling), Laju Alir (Flow Rate), & Ekstraksi Seragam V60',
    content: `
# Mengatasi Kanalisasi & Mengontrol Laju Alir V60

Banyak home brewer pemula mengalami masalah seduhan yang tidak konsisten: kadang terasa manis, namun seduhan berikutnya dengan biji yang sama terasa pahit kelat kering (*astringent*). Biang keladinya hampir selalu adalah **Kanalisasi (Channeling)**.

---

### Apa itu Kanalisasi (Channeling)?
Kanalisasi terjadi ketika air seduh mencari jalur dengan hambatan terkecil (*path of least resistance*) di dalam bed bubuk kopi.
1. Aliran air terkonsentrasi pada celah atau retakan mikro sempit.
2. Bubuk kopi di sepanjang celah tersebut mengalami **over-extraction parah**, melepaskan senyawa tanin dan asam fenolik berbobot molekul tinggi yang pahit dan sepat.
3. Sementara itu, bubuk kopi di area padat lainnya tidak tersentuh air secara optimal (**under-extraction**), melepaskan asam tajam mentah.
4. **Hasil akhir cangkir**: kombinasi aneh antara asam tajam di awal dan pahit kesat menempel di tenggorokan.

---

### Tiga Pilar Mencegah Kanalisasi di Rumah:
* **Leveling Bed Kopi**: Goyang perlahan dripper sebelum menuang agar permukaan bubuk kopi benar-benar rata horizontal.
* **Penuangan Tenang Tanpa Sentakan**: Gunakan kettle leher angsa dengan laju alir stabil 4–6 gram air per detik. Hindari menuang terlalu deras dari ketinggian karena akan mengocok bed ampas secara liar.
* **Jangan Menuang di Dinding Kertas**: Hindari menuang air langsung menyentuh kertas filter di lingkar luar karena air akan langsung meluncur ke server tanpa mengekstrak kopi (*bypass air berlebih*).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Mekanisme kanalisasi pada V60, bahaya over-under extraction simultan, dan teknik penuangan presisi mencegah channeling.',
    key_takeaways: [
      'Channeling memicu ekstraksi tidak merata: rasa asam mentah dan pahit kelat muncul bersamaan dalam satu cangkir.',
      'Jaga laju tuang stabil 4–6 g/detik dan hindari menuang langsung ke tepi dinding kertas filter.',
      'Ratakan permukaan bed kopi sebelum seduh untuk menciptakan tahanan hidrolik yang homogen.',
    ],
  },
{
    id: 'les-h6-3',
    module_id: 'mod-h6',
    title: 'DIY Water Chemistry: Formulasi Buffer Bikarbonat vs Mineral Ekstraktor',
    content: `
# Meracik Air Seduh Sendiri (DIY Water Mineralization)

Jika air galon di rumah tidak menghasilkan rasa kopi yang konsisten, home brewer dapat meracik air seduh sendiri menggunakan konsentrat mineral sederhana dari garam dapur murni (**Baking Soda**) dan **Garam Epsom (Magnesium Sulfat)**.

---

### Dua Komponen Utama Air Kopi:
1. **Mineral Ekstraktor (General Hardness / GH)**:
   * **Magnesium (Mg²⁺)** & **Kalsium (Ca²⁺)**.
   * Bertindak seperti 'kait' magnetik yang mengikat senyawa rasa manis, asam buah, dan lipid kopi keluar dari selulosa bubuk.
2. **Buffer Alkalinitas (Carbonate Hardness / KH)**:
   * **Bikarbonat (HCO₃⁻)**.
   * Bertindak sebagai 'peredam kejut' keasaman. Jika buffer terlalu rendah (<20 ppm), kopi terasa asam menusuk seperti cuka. Jika buffer terlalu tinggi (>80 ppm), keasaman buah alami lenyap dan kopi terasa hambar/flat.

---

### Resep Konsentrat DIY Water di Rumah:
* **Botol Buffer (Alkalinitas)**: Larutkan 1.68 gram Baking Soda (Natrium Bikarbonat) ke dalam 1 liter air demineralisasi (Amidis/Cleo).
* **Botol Hardness (Ekstraktor)**: Larutkan 2.46 gram Garam Epsom murni (Magnesium Sulfat USP) ke dalam 1 liter air demineralisasi.
* **Pencampuran Final**: Tambahkan 25 gram larutan Buffer dan 50 gram larutan Hardness ke dalam 1 liter air demineralisasi untuk menghasilkan target SCA 120 ppm TDS dengan rasio rasa sempurna!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan formulasi konsentrat mineral DIY water menggunakan Baking Soda dan Garam Epsom untuk target ekstraksi ideal.',
    key_takeaways: [
      'Magnesium dan Kalsium bertindak sebagai ekstraktor senyawa rasa buah dan manis kopi.',
      'Buffer Bikarbonat mengontrol ketajaman asam kopi agar seimbang dan tidak hambar.',
      'Meracik mineral sendiri memberikan replikasi rasa seduhan tingkat kompetisi dunia secara konsisten.',
    ],
  },
{
    id: 'les-h7-2',
    module_id: 'mod-h7',
    title: 'Uji Triangulasi Rasa Mandiri di Dapur: Menemukan Satu Cup Berbeda dari Tiga Mangkuk',
    content: `
# Melatih Diskriminasi Sensorik dengan Uji Triangulasi

Uji Triangulasi adalah latihan standar dunia CQI untuk menguji ketajaman indra seorang pencicip kopi. Menariknya, metode ini sangat mudah direplikasi di dapur rumah Anda!

---

### Format Setup Triangulasi:
1. Siapkan **3 mangkuk atau gelas kaca identik**.
2. Pilih 2 biji kopi berbeda (misalnya: Origin A adalah Kopi Gayo Washed, Origin B adalah Kopi Flores Bajawa Natural).
3. Seduh **2 mangkuk dengan Kopi A** dan **1 mangkuk dengan Kopi B** menggunakan rasio dan grind size yang identik (8.25 g / 150 ml).
4. Minta anggota keluarga atau teman menandai bagian bawah mangkuk dengan stiker tersembunyi dan mengacak posisinya di atas meja.

---

### Cara Mencicipi:
* Dekati ketiga mangkuk secara berurutan dalam suhu hangat (sekitar 60°C).
* Seruput dengan sendok kuah secara bergantian: Mangkuk 1 -> Mangkuk 2 -> Mangkuk 3.
* Fokuskan perhatian Anda bukan pada menebak nama origin, melainkan pada **satu cangkir yang memiliki sensasi berbeda** (apakah keasamannya lebih tinggi? apakah bodinya lebih tebal? apakah ada aroma buah yang berbeda?).
* Tunjuk mangkuk ganjil (*odd cup*) tersebut dan periksa stiker di bawahnya!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Protokol uji triangulasi dapur rumah untuk melatih diskriminasi sensorik tanpa bias informasi kemasan.',
    key_takeaways: [
      'Triangulasi melatih otak mengidentifikasi perbedaan rasa murni tanpa bias visual atau label.',
      'Fokuskan indra pada kontras keasaman, ketebalan bodi, dan finish setelah seruputan.',
      'Latihan rutin 2 minggu sekali melipatgandakan kepekaan lidah home brewer dalam mendeteksi cacat seduhan.',
    ],
  },
  {
    id: 'les-h7-3',
    module_id: 'mod-h7',
    title: 'Jurnal Sensorik Rumahan: Memetakan Spektrum Asam Organik & Body',
    content: `
# Memetakan Spektrum Asam Organik & Body di Rumah

Banyak orang mengira 'asam' pada kopi itu sama saja. Namun di meja cupping specialty, para profesional membedakan setidaknya 4 jenis asam organik yang memberikan dimensi karakter unik pada cangkir:

---

### Mengenal 4 Asam Organik Kunci Kopi:
1. **Asam Malat (Malic Acid)**:
   * Karakter: Keasaman renyah, segar, dan garing seperti menggigit apel hijau atau anggur hijau segar.
   * Sering ditemukan pada kopi elevasi tinggi Kenya, Ethiopia, dan varietas Typica dataran tinggi.
2. **Asam Sitrat (Citric Acid)**:
   * Karakter: Keasaman cerah, tajam menyegarkan seperti buah jeruk mandarin, lemon, atau grapefruit.
   * Dominan pada kopi proses Washed (Full Washed).
3. **Asam Tartarat (Tartaric Acid)**:
   * Karakter: Rasa asam manis seperti buah anggur matang dengan sensasi sedikit kesat kering di ujung lidah.
4. **Asam Asetat (Acetic Acid)**:
   * Karakter: Seperti cuka buah atau fermentasi kombucha. Dalam kadar sangat rendah memberikan kompleksitas eksotis (proses Anaerobic / Winey), namun jika berlebih menjadi cacat rasa busuk.

---

### Cara Menulis Jurnal Seduh Harian:
Catat 5 parameter sederhana setiap menyeduh:
1. Tanggal sangrai & Origin.
2. Rasio air & Suhu.
3. Intensitas rasa manis (*Sweetness* skala 1–5).
4. Karakter asam yang dominan (Malat apel vs Sitrat jeruk).
5. Kualitas aftertaste (bersih atau kesat).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan membedakan asam malat, sitrat, tartarat, dan asetat serta menyusun jurnal sensorik rumahan yang rapi.',
    key_takeaways: [
      'Asam malat terasa renyah seperti apel hijau, sedangkan asam sitrat terasa cerah seperti jeruk manis.',
      'Asam asetat berlebih menandakan cacat over-fermentation.',
      'Mendokumentasikan log rasa di jurnal adalah kunci mempercepat lompatan keahlian home brewer.',
    ],
  },
{
    id: 'les-h3-2',
    module_id: 'mod-h6',
    title: 'Kanalisasi (Channeling), Laju Alir (Flow Rate), & Ekstraksi Seragam V60',
    content: `
# Mengatasi Kanalisasi & Mengontrol Laju Alir V60

Banyak home brewer pemula mengalami masalah seduhan yang tidak konsisten: kadang terasa manis, namun seduhan berikutnya dengan biji yang sama terasa pahit kelat kering (*astringent*). Biang keladinya hampir selalu adalah **Kanalisasi (Channeling)**.

---

### Apa itu Kanalisasi (Channeling)?
Kanalisasi terjadi ketika air seduh mencari jalur dengan hambatan terkecil (*path of least resistance*) di dalam bed bubuk kopi.
1. Aliran air terkonsentrasi pada celah atau retakan mikro sempit.
2. Bubuk kopi di sepanjang celah tersebut mengalami **over-extraction parah**, melepaskan senyawa tanin dan asam fenolik berbobot molekul tinggi yang pahit dan sepat.
3. Sementara itu, bubuk kopi di area padat lainnya tidak tersentuh air secara optimal (**under-extraction**), melepaskan asam tajam mentah.
4. **Hasil akhir cangkir**: kombinasi aneh antara asam tajam di awal dan pahit kesat menempel di tenggorokan.

---

### Tiga Pilar Mencegah Kanalisasi di Rumah:
* **Leveling Bed Kopi**: Goyang perlahan dripper sebelum menuang agar permukaan bubuk kopi benar-benar rata horizontal.
* **Penuangan Tenang Tanpa Sentakan**: Gunakan kettle leher angsa dengan laju alir stabil 4–6 gram air per detik. Hindari menuang terlalu deras dari ketinggian karena akan mengocok bed ampas secara liar.
* **Jangan Menuang di Dinding Kertas**: Hindari menuang air langsung menyentuh kertas filter di lingkar luar karena air akan langsung meluncur ke server tanpa mengekstrak kopi (*bypass air berlebih*).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Mekanisme kanalisasi pada V60, bahaya over-under extraction simultan, dan teknik penuangan presisi mencegah channeling.',
    key_takeaways: [
      'Channeling memicu ekstraksi tidak merata: rasa asam mentah dan pahit kelat muncul bersamaan dalam satu cangkir.',
      'Jaga laju tuang stabil 4–6 g/detik dan hindari menuang langsung ke tepi dinding kertas filter.',
      'Ratakan permukaan bed kopi sebelum seduh untuk menciptakan tahanan hidrolik yang homogen.',
    ],
  },
{
    id: 'les-h6-3',
    module_id: 'mod-h5',
    title: 'DIY Water Chemistry: Formulasi Buffer Bikarbonat vs Mineral Ekstraktor',
    content: `
# Meracik Air Seduh Sendiri (DIY Water Mineralization)

Jika air galon di rumah tidak menghasilkan rasa kopi yang konsisten, home brewer dapat meracik air seduh sendiri menggunakan konsentrat mineral sederhana dari garam dapur murni (**Baking Soda**) dan **Garam Epsom (Magnesium Sulfat)**.

---

### Dua Komponen Utama Air Kopi:
1. **Mineral Ekstraktor (General Hardness / GH)**:
   * **Magnesium (Mg²⁺)** & **Kalsium (Ca²⁺)**.
   * Bertindak seperti 'kait' magnetik yang mengikat senyawa rasa manis, asam buah, dan lipid kopi keluar dari selulosa bubuk.
2. **Buffer Alkalinitas (Carbonate Hardness / KH)**:
   * **Bikarbonat (HCO₃⁻)**.
   * Bertindak sebagai 'peredam kejut' keasaman. Jika buffer terlalu rendah (<20 ppm), kopi terasa asam menusuk seperti cuka. Jika buffer terlalu tinggi (>80 ppm), keasaman buah alami lenyap dan kopi terasa hambar/flat.

---

### Resep Konsentrat DIY Water di Rumah:
* **Botol Buffer (Alkalinitas)**: Larutkan 1.68 gram Baking Soda (Natrium Bikarbonat) ke dalam 1 liter air demineralisasi (Amidis/Cleo).
* **Botol Hardness (Ekstraktor)**: Larutkan 2.46 gram Garam Epsom murni (Magnesium Sulfat USP) ke dalam 1 liter air demineralisasi.
* **Pencampuran Final**: Tambahkan 25 gram larutan Buffer dan 50 gram larutan Hardness ke dalam 1 liter air demineralisasi untuk menghasilkan target SCA 120 ppm TDS dengan rasio rasa sempurna!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 4,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan formulasi konsentrat mineral DIY water menggunakan Baking Soda dan Garam Epsom untuk target ekstraksi ideal.',
    key_takeaways: [
      'Magnesium dan Kalsium bertindak sebagai ekstraktor senyawa rasa buah dan manis kopi.',
      'Buffer Bikarbonat mengontrol ketajaman asam kopi agar seimbang dan tidak hambar.',
      'Meracik mineral sendiri memberikan replikasi rasa seduhan tingkat kompetisi dunia secara konsisten.',
    ],
  },
{
    id: 'les-h7-2',
    module_id: 'mod-h9',
    title: 'Uji Triangulasi Rasa Mandiri di Dapur: Menemukan Satu Cup Berbeda dari Tiga Mangkuk',
    content: `
# Melatih Diskriminasi Sensorik dengan Uji Triangulasi

Uji Triangulasi adalah latihan standar dunia CQI untuk menguji ketajaman indra seorang pencicip kopi. Menariknya, metode ini sangat mudah direplikasi di dapur rumah Anda!

---

### Format Setup Triangulasi:
1. Siapkan **3 mangkuk atau gelas kaca identik**.
2. Pilih 2 biji kopi berbeda (misalnya: Origin A adalah Kopi Gayo Washed, Origin B adalah Kopi Flores Bajawa Natural).
3. Seduh **2 mangkuk dengan Kopi A** dan **1 mangkuk dengan Kopi B** menggunakan rasio dan grind size yang identik (8.25 g / 150 ml).
4. Minta anggota keluarga atau teman menandai bagian bawah mangkuk dengan stiker tersembunyi dan mengacak posisinya di atas meja.

---

### Cara Mencicipi:
* Dekati ketiga mangkuk secara berurutan dalam suhu hangat (sekitar 60°C).
* Seruput dengan sendok kuah secara bergantian: Mangkuk 1 -> Mangkuk 2 -> Mangkuk 3.
* Fokuskan perhatian Anda bukan pada menebak nama origin, melainkan pada **satu cangkir yang memiliki sensasi berbeda** (apakah keasamannya lebih tinggi? apakah bodinya lebih tebal? apakah ada aroma buah yang berbeda?).
* Tunjuk mangkuk ganjil (*odd cup*) tersebut dan periksa stiker di bawahnya!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Protokol uji triangulasi dapur rumah untuk melatih diskriminasi sensorik tanpa bias informasi kemasan.',
    key_takeaways: [
      'Triangulasi melatih otak mengidentifikasi perbedaan rasa murni tanpa bias visual atau label.',
      'Fokuskan indra pada kontras keasaman, ketebalan bodi, dan finish setelah seruputan.',
      'Latihan rutin 2 minggu sekali melipatgandakan kepekaan lidah home brewer dalam mendeteksi cacat seduhan.',
    ],
  },
{
    id: 'les-h7-3',
    module_id: 'mod-h9',
    title: 'Jurnal Sensorik Rumahan: Memetakan Spektrum Asam Organik & Body',
    content: `
# Memetakan Spektrum Asam Organik & Body di Rumah

Banyak orang mengira 'asam' pada kopi itu sama saja. Namun di meja cupping specialty, para profesional membedakan setidaknya 4 jenis asam organik yang memberikan dimensi karakter unik pada cangkir:

---

### Mengenal 4 Asam Organik Kunci Kopi:
1. **Asam Malat (Malic Acid)**:
   * Karakter: Keasaman renyah, segar, dan garing seperti menggigit apel hijau atau anggur hijau segar.
   * Sering ditemukan pada kopi elevasi tinggi Kenya, Ethiopia, dan varietas Typica dataran tinggi.
2. **Asam Sitrat (Citric Acid)**:
   * Karakter: Keasaman cerah, tajam menyegarkan seperti buah jeruk mandarin, lemon, atau grapefruit.
   * Dominan pada kopi proses Washed (Full Washed).
3. **Asam Tartarat (Tartaric Acid)**:
   * Karakter: Rasa asam manis seperti buah anggur matang dengan sensasi sedikit kesat kering di ujung lidah.
4. **Asam Asetat (Acetic Acid)**:
   * Karakter: Seperti cuka buah atau fermentasi kombucha. Dalam kadar sangat rendah memberikan kompleksitas eksotis (proses Anaerobic / Winey), namun jika berlebih menjadi cacat rasa busuk.

---

### Cara Menulis Jurnal Seduh Harian:
Catat 5 parameter sederhana setiap menyeduh:
1. Tanggal sangrai & Origin.
2. Rasio air & Suhu.
3. Intensitas rasa manis (*Sweetness* skala 1–5).
4. Karakter asam yang dominan (Malat apel vs Sitrat jeruk).
5. Kualitas aftertaste (bersih atau kesat).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan membedakan asam malat, sitrat, tartarat, dan asetat serta menyusun jurnal sensorik rumahan yang rapi.',
    key_takeaways: [
      'Asam malat terasa renyah seperti apel hijau, sedangkan asam sitrat terasa cerah seperti jeruk manis.',
      'Asam asetat berlebih menandakan cacat over-fermentation.',
      'Mendokumentasikan log rasa di jurnal adalah kunci mempercepat lompatan keahlian home brewer.',
    ],
  },
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
    module_id: 'mod-h6',
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
    module_id: 'mod-h9',
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
    id: 'les-h8-4',
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
    order_index: 3,
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
    order_index: 4,
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
    module_id: 'mod-h5',
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
    order_index: 3,
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
    module_id: 'mod-h5',
    title: 'Perbandingan Filter Paper: Bleached vs Unbleached, Porositas Kertas Kalita vs Fast Flow',
    content: `# Perbandingan Kertas Saring: Bleached vs Unbleached dan Pengaruh Rasa Kertas

Kertas saring (*filter paper*) adalah penghalang utama antara bubuk kopi dan server cangkir Anda. Memilih kertas yang salah dapat mencemari kopi mahal dengan aroma karton basah!

---

### 1. Kertas Putih (Bleached) vs Kertas Cokelat (Unbleached)

* **Kertas Cokelat (*Unbleached / Natural Kraft*)**: Masih mengandung serat lignin kayu mentah. Meskipun dibilas air mendidih 3 kali, kertas cokelat tetap meninggalkan residu rasa kardus basah dan bau kayu lapuk di dalam cangkir!
* **Kertas Putih (*Oxygen Bleached*)**: Dikelantang menggunakan senyawa oksigen murni (bukan klorin beracun). Memiliki residu aroma kertas paling rendah (hampir netral total) dan aman bagi kesehatan serta lingkungan.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 4,
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
    order_index: 4,
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
    order_index: 3,
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
    module_id: 'mod-h9',
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
    order_index: 3,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Sains Nitro Cold Brew Rumahan: Infusi Gas Nitrogen (N2) Menggunakan Whipper Dispenser untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  }
];

export const HOME_BREWER_QUIZZES: Quiz[] = [
  {
    id: 'quiz-h1',
    module_id: 'mod-h1',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-1: Dekonstruksi Informasi Label & Profil Biji Kopi',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h2',
    module_id: 'mod-h2',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-2: Setup Alat & Distribusi Partikel Grinder',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h3',
    module_id: 'mod-h3',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-3: Seduhan Emas V60 & Ekstraksi Seimbang',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h4',
    module_id: 'mod-h4',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-4: Kontrol Rasa & Variasi Metode Tuang',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h5',
    module_id: 'mod-h5',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-5: Eksplorasi Flat Bottom, Aeropress & French Press',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h6',
    module_id: 'mod-h6',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-6: Kualitas Air Seduh Rumahan & DIY Water',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h7',
    module_id: 'mod-h7',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-7: Cupping Mandiri di Rumah & Kalibrasi Rasa',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h8',
    module_id: 'mod-h8',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-8: Eksperimen Variabel Seduh & Manual Espresso',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h9',
    module_id: 'mod-h9',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-9: Kreasi Es Kopi Susu, Cold Brew & Sirup',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h10',
    module_id: 'mod-h10',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul H-10: Coffee Corner, Perawatan Alat & Komunitas',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-h-final',
    module_id: 'mod-h10',
    learning_path_id: 'path-home-brewer',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Sertifikasi Home Brewer Specialist',
    description: 'Ujian komprehensif mencakup sains gilingan, rekayasa air mineral, V60, Aeropress, French press, dan manual espresso.',
    passing_score: 80,
    time_limit_minutes: 25,
    max_attempts: 3,
    created_at: '2026-08-10T00:00:00Z',
  },
];

export const HOME_BREWER_QUESTIONS: Question[] = [
  {
    id: 'q-h1-1',
    quiz_id: 'quiz-h1',
    question_text: 'Informasi ketinggian kebun \'1.800 mdpl\' pada kemasan kopi specialty Arabika mengindikasikan karakteristik fisik biji seperti apa?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Elevasi tinggi dengan suhu malam dingin memperlambat metabolisme pohon kopi, menghasilkan buah padat kaya gula dan asam organik kompleks.',
    answers: [
      { id: 'ans-q-h1-1-a', question_id: 'q-h1-1', answer_text: 'Biji sangat rapuh dan berpori longgar sehingga harus digiling paling kasar', is_correct: false, order_index: 1 },
      { id: 'ans-q-h1-1-b', question_id: 'q-h1-1', answer_text: 'Biji memiliki kandungan kafein dua kali lipat lebih tinggi dari Robusta', is_correct: false, order_index: 2 },
      { id: 'ans-q-h1-1-c', question_id: 'q-h1-1', answer_text: 'Biji memiliki densitas selulosa tinggi (SHB), pematangan buah lambat, dan keasaman organik yang cerah kompleks', is_correct: true, order_index: 3 },
      { id: 'ans-q-h1-1-d', question_id: 'q-h1-1', answer_text: 'Biji kopi dapat langsung diseduh tanpa proses sangrai', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h1-2',
    quiz_id: 'quiz-h1',
    question_text: 'Mengapa pencantuman \'Roast Date\' (tanggal sangrai) jauh lebih penting bagi home brewer dibanding tanggal kedaluwarsa umum?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Biji kopi melepaskan gas CO2 secara intensif dalam 3-7 hari pertama pasca sangrai. Menyeduh di rentang waktu optimal menjamin rasa manis dan aroma terekstraksi maksimal.',
    answers: [
      { id: 'ans-q-h1-2-a', question_id: 'q-h1-2', answer_text: 'Menjadi acuan masa resting optimal (pelepasan CO2) agar seduhan tidak berbusa liar dan ekstraksi rasa seimbang', is_correct: true, order_index: 1 },
      { id: 'ans-q-h1-2-b', question_id: 'q-h1-2', answer_text: 'Untuk mengetahui tanggal biji kopi tersebut dipanen dari pohon', is_correct: false, order_index: 2 },
      { id: 'ans-q-h1-2-c', question_id: 'q-h1-2', answer_text: 'Karena kopi specialty akan basi membusuk tepat setelah 7 hari', is_correct: false, order_index: 3 },
      { id: 'ans-q-h1-2-d', question_id: 'q-h1-2', answer_text: 'Agar biji kopi dapat disimpan di dalam freezer tanpa kemasan', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h1-3',
    quiz_id: 'quiz-h1',
    question_text: 'Apa perbedaan esensial antara kopi berlabel \'Single Origin\' dan \'House Blend\' bagi penyeduh rumahan?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Single Origin mengekspos profil rasa autentik mikro-iklim kebun asalnya, sementara Blend mencampurkan beberapa origin untuk menghasilkan harmoni rasa stabil sepanjang tahun.',
    answers: [
      { id: 'ans-q-h1-3-a', question_id: 'q-h1-3', answer_text: 'Single Origin hanya bisa diseduh dingin, sedangkan Blend khusus kopi panas', is_correct: false, order_index: 1 },
      { id: 'ans-q-h1-3-b', question_id: 'q-h1-3', answer_text: 'Single Origin selalu memiliki grade komersial rendah', is_correct: false, order_index: 2 },
      { id: 'ans-q-h1-3-c', question_id: 'q-h1-3', answer_text: 'Blend tidak menggunakan biji kopi Arabika', is_correct: false, order_index: 3 },
      { id: 'ans-q-h1-3-d', question_id: 'q-h1-3', answer_text: 'Single Origin menonjolkan keunikan terroir dan varietas spesifik satu daerah, sedangkan Blend diracik untuk keseimbangan rasa yang konsisten', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h2-1',
    quiz_id: 'quiz-h2',
    question_text: 'Mengapa grinder burr baja konikal/flat menghasilkan seduhan pour over yang jauh lebih bersih dibanding chopper pisau putar (blade grinder)?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Blade grinder menghantam biji secara acak menghasilkan debu (fines) berlebih dan pecahan bongkahan (boulders), yang memicu over-extraction dan under-extraction sekaligus.',
    answers: [
      { id: 'ans-q-h2-1-a', question_id: 'q-h2-1', answer_text: 'Blade grinder menggunakan suhu tinggi yang membakar bubuk kopi', is_correct: false, order_index: 1 },
      { id: 'ans-q-h2-1-b', question_id: 'q-h2-1', answer_text: 'Burr memotong dan meremukkan biji menjadi partikel berukuran seragam dengan proporsi fines dan boulder minimal', is_correct: true, order_index: 2 },
      { id: 'ans-q-h2-1-c', question_id: 'q-h2-1', answer_text: 'Burr grinder menambahkan mineral mikro ke dalam bubuk kopi', is_correct: false, order_index: 3 },
      { id: 'ans-q-h2-1-d', question_id: 'q-h2-1', answer_text: 'Blade grinder hanya cocok digunakan untuk menyeduh teh', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h2-2',
    quiz_id: 'quiz-h2',
    question_text: 'Apa fenomena yang terjadi pada seduhan V60 jika bubuk kopi mengandung terlalu banyak partikel mikro \'fines\'?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Partikel debu mikro (fines) bermigrasi ke dasar keranjang kertas, menyumbat aliran air, dan mengekstraksi senyawa fenolik pahit secara berlebih.',
    answers: [
      { id: 'ans-q-h2-2-a', question_id: 'q-h2-2', answer_text: 'Fines menyumbat pori kertas saring (clogging), memperlambat laju alir, dan memicu rasa pahit kelat kering (astringency)', is_correct: true, order_index: 1 },
      { id: 'ans-q-h2-2-b', question_id: 'q-h2-2', answer_text: 'Air seduh mengalir terlalu cepat tanpa terjadi kontak ekstraksi', is_correct: false, order_index: 2 },
      { id: 'ans-q-h2-2-c', question_id: 'q-h2-2', answer_text: 'Rasa seduhan menjadi hambar seperti air putih', is_correct: false, order_index: 3 },
      { id: 'ans-q-h2-2-d', question_id: 'q-h2-2', answer_text: 'Warna air kopi berubah menjadi kuning pucat', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h2-3',
    quiz_id: 'quiz-h2',
    question_text: 'Teknik RDT (Ross Droplet Technique) — membasahi biji kopi dengan 1 tetes air mikro sebelum digiling — bertujuan untuk?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Tetesan air mikro meningkatkan konduktivitas permukaan biji, menetralkan muatan listrik statis triboelektrik selama proses penggilingan.',
    answers: [
      { id: 'ans-q-h2-3-a', question_id: 'q-h2-3', answer_text: 'Memulai proses ekstraksi kopi sebelum terkena air panas', is_correct: false, order_index: 1 },
      { id: 'ans-q-h2-3-b', question_id: 'q-h2-3', answer_text: 'Mendinginkan suhu mata pisau burr saat berputar', is_correct: false, order_index: 2 },
      { id: 'ans-q-h2-3-c', question_id: 'q-h2-3', answer_text: 'Meniadakan listrik statis sehingga bubuk kopi tidak menempel berhamburan di dinding dan wadah grinder', is_correct: true, order_index: 3 },
      { id: 'ans-q-h2-3-d', question_id: 'q-h2-3', answer_text: 'Menghilangkan kadar kafein dari biji kopi', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h3-1',
    quiz_id: 'quiz-h3',
    question_text: 'Berapa rasio seduh (brew ratio) dasar yang paling disarankan untuk memulai kalibrasi V60 rumahan dengan ekstraksi seimbang?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Rasio 1:15 hingga 1:16 adalah rasio standar emas yang memberikan konsentrasi TDS 1.2% - 1.4% dan Extraction Yield ideal 18% - 20% pada filter specialty.',
    answers: [
      { id: 'ans-q-h3-1-a', question_id: 'q-h3-1', answer_text: 'Rasio 1:5 (15 gram kopi untuk 75 gram air)', is_correct: false, order_index: 1 },
      { id: 'ans-q-h3-1-b', question_id: 'q-h3-1', answer_text: 'Rasio 1:15 hingga 1:16 (misalnya 15 gram kopi untuk 225-240 gram air)', is_correct: true, order_index: 2 },
      { id: 'ans-q-h3-1-c', question_id: 'q-h3-1', answer_text: 'Rasio 1:30 (15 gram kopi untuk 450 gram air)', is_correct: false, order_index: 3 },
      { id: 'ans-q-h3-1-d', question_id: 'q-h3-1', answer_text: 'Rasio 1:50 (15 gram kopi untuk 750 gram air)', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h3-2',
    quiz_id: 'quiz-h3',
    question_text: 'Apa yang dimaksud dengan kanalisasi (channeling) pada seduhan manual pour over?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Channeling menyebabkan ekstraksi tidak merata: area yang dilewati jalur air terekstrak berlebih (bitter/dry), sedangkan bubuk kopi di sekitarnya kurang terekstrak (sour).',
    answers: [
      { id: 'ans-q-h3-2-a', question_id: 'q-h3-2', answer_text: 'Air mengalir keluar dari cerat kettle terlalu lambat', is_correct: false, order_index: 1 },
      { id: 'ans-q-h3-2-b', question_id: 'q-h3-2', answer_text: 'Kertas filter robek di bagian sambungan bawah', is_correct: false, order_index: 2 },
      { id: 'ans-q-h3-2-c', question_id: 'q-h3-2', answer_text: 'Ampas kopi mengapung keluar dari bibir dripper', is_correct: false, order_index: 3 },
      { id: 'ans-q-h3-2-d', question_id: 'q-h3-2', answer_text: 'Air menembus jalur celah longgar dengan resistensi terendah pada bed kopi sehingga mengekstrak area tersebut secara berlebih sementara area lain tertinggal', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h3-3',
    quiz_id: 'quiz-h3',
    question_text: 'Jika cangkir kopi V60 terasa sangat asin, asam tajam menusuk, dan cepat hilang di mulut (short finish), diagnosis ekstraksi apa yang tepat?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Asam organik dan garam mineral adalah senyawa pertama yang larut saat penyeduhan. Jika ekstraksi terhenti terlalu dini, cangkir terasa sour dan salty tanpa kemanisan penyeimbang.',
    answers: [
      { id: 'ans-q-h3-3-a', question_id: 'q-h3-3', answer_text: 'Over-extraction parah akibat gilingan terlalu halus', is_correct: false, order_index: 1 },
      { id: 'ans-q-h3-3-b', question_id: 'q-h3-3', answer_text: 'Kopi terkontaminasi oleh sabun pembersih cangkir', is_correct: false, order_index: 2 },
      { id: 'ans-q-h3-3-c', question_id: 'q-h3-3', answer_text: 'Under-extraction (senyawa gula dan asam manis kompleks belum sempat terlarut optimal)', is_correct: true, order_index: 3 },
      { id: 'ans-q-h3-3-d', question_id: 'q-h3-3', answer_text: 'Suhu air seduh melebihi titik didih 100°C', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h4-1',
    quiz_id: 'quiz-h4',
    question_text: 'Dalam metode V60 4:6 karya Tetsu Kasuya, bagaimana cara mengatur agar seduhan menonjolkan rasa kemanisan (sweetness) yang lebih tinggi?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Pada metode 4:6, tuangan pertama yang lebih kecil menghasilkan blooming terkonsentrasi yang saat disusul tuangan kedua lebih besar mengekstrak kemanisan lebih dominan.',
    answers: [
      { id: 'ans-q-h4-1-a', question_id: 'q-h4-1', answer_text: 'Membagi 40% air pertama menjadi tuangan pertama lebih kecil dan tuangan kedua lebih besar', is_correct: true, order_index: 1 },
      { id: 'ans-q-h4-1-b', question_id: 'q-h4-1', answer_text: 'Mencampurkan 20 gram gula pasir ke dalam bubuk kopi', is_correct: false, order_index: 2 },
      { id: 'ans-q-h4-1-c', question_id: 'q-h4-1', answer_text: 'Menuangkan seluruh 40% air dalam 1 detik dengan agitasi keras', is_correct: false, order_index: 3 },
      { id: 'ans-q-h4-1-d', question_id: 'q-h4-1', answer_text: 'Mengabaikan 60% air sisanya dan menghentikan seduhan', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h4-2',
    quiz_id: 'quiz-h4',
    question_text: 'Apa manfaat melakukan swirling (memutar lembut dripper) sesaat setelah tuangan blooming selesai?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Swirling lembut pada fase blooming meratakan saturasi air ke seluruh partikel bubuk kopi, mencegah terbentuknya dry pockets yang memicu channeling.',
    answers: [
      { id: 'ans-q-h4-2-a', question_id: 'q-h4-2', answer_text: 'Mendinginkan suhu air seduh agar turun menjadi 60°C', is_correct: false, order_index: 1 },
      { id: 'ans-q-h4-2-b', question_id: 'q-h4-2', answer_text: 'Memastikan seluruh partikel bubuk kopi terbasahi merata tanpa meninggalkan kantong kering (dry pockets) di dasar', is_correct: true, order_index: 2 },
      { id: 'ans-q-h4-2-c', question_id: 'q-h4-2', answer_text: 'Memaksa seluruh ampas kopi menempel permanen di dinding atas kertas', is_correct: false, order_index: 3 },
      { id: 'ans-q-h4-2-d', question_id: 'q-h4-2', answer_text: 'Mempercepat waktu seduh menjadi kurang dari 1 menit', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h4-3',
    quiz_id: 'quiz-h4',
    question_text: 'Bagaimana pengaruh ketinggian cerat kettle leher angsa terhadap dinamika ekstraksi bubuk kopi di dripper?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Energi kinetik jatuhnya air mengaduk partikel kopi secara fisik (agitasi), meningkatkan percampuran molekuler namun berisiko memicu migrasi fines berlebih jika terlalu agresif.',
    answers: [
      { id: 'ans-q-h4-3-a', question_id: 'q-h4-3', answer_text: 'Ketinggian tuangan sama sekali tidak mempengaruhi laju ekstraksi', is_correct: false, order_index: 1 },
      { id: 'ans-q-h4-3-b', question_id: 'q-h4-3', answer_text: 'Menuang dari tinggi membuat suhu air meningkat tajam', is_correct: false, order_index: 2 },
      { id: 'ans-q-h4-3-c', question_id: 'q-h4-3', answer_text: 'Menuang dari tinggi selalu menyebabkan air tidak menyentuh kopi', is_correct: false, order_index: 3 },
      { id: 'ans-q-h4-3-d', question_id: 'q-h4-3', answer_text: 'Semakin tinggi cerat penuangan, energi kinetik air semakin besar yang memicu agitasi mekanis kuat dan menaikkan laju ekstraksi', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h5-1',
    quiz_id: 'quiz-h5',
    question_text: 'Mengapa dripper berdasar datar (flat bottom seperti Kalita Wave) cenderung menghasilkan profil rasa dengan bodi lebih tebal dan manis dibanding conical V60?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Bed ampas kopi pada flat bottom memiliki ketebalan yang merata dari tengah ke tepi, meminimalkan aliran air yang lolos tanpa menyentuh ampas (bypass).',
    answers: [
      { id: 'ans-q-h5-1-a', question_id: 'q-h5-1', answer_text: 'Geometri dasar datar menjaga kedalaman bed kopi lebih seragam dan membatasi bypass air di tepi dinding', is_correct: true, order_index: 1 },
      { id: 'ans-q-h5-1-b', question_id: 'q-h5-1', answer_text: 'Karena flat bottom dripper tidak membutuhkan air panas untuk menyeduh', is_correct: false, order_index: 2 },
      { id: 'ans-q-h5-1-c', question_id: 'q-h5-1', answer_text: 'Karena kertas Kalita menyerap 90% asam kopi', is_correct: false, order_index: 3 },
      { id: 'ans-q-h5-1-d', question_id: 'q-h5-1', answer_text: 'Karena ampas kopi mengendap di luar cangkir', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h5-2',
    quiz_id: 'quiz-h5',
    question_text: 'Dalam teknik French Press metode James Hoffmann, mengapa kopi didiamkan selama 5-8 menit setelah diaduk tanpa langsung ditekan plungernya?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Metode Hoffmann memanfaatkan waktu perendaman panjang dan pembongkaran kerak ampas agar partikel kopi tenggelam alami, menghasilkan cangkir bersih tanpa ampas lumpur.',
    answers: [
      { id: 'ans-q-h5-2-a', question_id: 'q-h5-2', answer_text: 'Agar suhu kopi turun hingga mencapai suhu es kulkas', is_correct: false, order_index: 1 },
      { id: 'ans-q-h5-2-b', question_id: 'q-h5-2', answer_text: 'Untuk membiarkan air menguap separuhnya agar kopi mengental', is_correct: false, order_index: 2 },
      { id: 'ans-q-h5-2-c', question_id: 'q-h5-2', answer_text: 'Memberi waktu gravitasi mengendapkan ampas mikro dan fines ke dasar bejana sehingga seduhan menjadi sangat jernih', is_correct: true, order_index: 3 },
      { id: 'ans-q-h5-2-d', question_id: 'q-h5-2', answer_text: 'Agar plunger logam tidak mengalami karat', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h5-3',
    quiz_id: 'quiz-h5',
    question_text: 'Apa keunggulan posisi terbalik (Inverted Method) pada Aeropress untuk eksperimen seduh rumahan?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Metode inverted memungkinkan kontrol total atas waktu kontak perendaman air dan kopi sebelum penyaringan dilakukan melalui dorongan plunger.',
    answers: [
      { id: 'ans-q-h5-3-a', question_id: 'q-h5-3', answer_text: 'Membuat tekanan pompa Aeropress naik otomatis menjadi 15 bar', is_correct: false, order_index: 1 },
      { id: 'ans-q-h5-3-b', question_id: 'q-h5-3', answer_text: 'Menghilangkan kebutuhan mencuci tabung Aeropress setelah pakai', is_correct: false, order_index: 2 },
      { id: 'ans-q-h5-3-c', question_id: 'q-h5-3', answer_text: 'Mendinginkan air secara instan', is_correct: false, order_index: 3 },
      { id: 'ans-q-h5-3-d', question_id: 'q-h5-3', answer_text: 'Mencegah cairan menetes bocor prematur sebelum waktu perendaman (steep time) yang direncanakan tercapai', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h6-1',
    quiz_id: 'quiz-h6',
    question_text: 'Dua ion kation divalen utama manakah dalam air seduh yang bertindak aktif mengikat dan mengekstraksi senyawa aromatik kopi?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Ion Mg2+ dan Ca2+ memiliki densitas muatan tinggi yang mengikat senyawa polar rasa kopi (seperti asam klorogenat dan eugenol) dan menariknya ke dalam seduhan.',
    answers: [
      { id: 'ans-q-h6-1-a', question_id: 'q-h6-1', answer_text: 'Natrium (Na+) dan Kalium (K+)', is_correct: false, order_index: 1 },
      { id: 'ans-q-h6-1-b', question_id: 'q-h6-1', answer_text: 'Magnesium (Mg2+) dan Kalsium (Ca2+)', is_correct: true, order_index: 2 },
      { id: 'ans-q-h6-1-c', question_id: 'q-h6-1', answer_text: 'Besi (Fe2+) dan Timbal (Pb2+)', is_correct: false, order_index: 3 },
      { id: 'ans-q-h6-1-d', question_id: 'q-h6-1', answer_text: 'Klorida (Cl-) dan Fluorida (F-)', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h6-2',
    quiz_id: 'quiz-h6',
    question_text: 'Berapakah target alkalinitas (kemampuan buffer bikarbonat CaCO3) ideal menurut SCA agar keasaman kopi seimbang dan tidak hambar?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Jika alkalinitas terlalu tinggi (>80 mg/L), asam buah kopi ternetralkan menjadi flat/hambar. Jika terlalu rendah (<20 mg/L), kopi terasa asam tajam menusuk (sour).',
    answers: [
      { id: 'ans-q-h6-2-a', question_id: 'q-h6-2', answer_text: '0 mg/L CaCO3 murni tanpa buffer', is_correct: false, order_index: 1 },
      { id: 'ans-q-h6-2-b', question_id: 'q-h6-2', answer_text: '150 hingga 200 mg/L CaCO3', is_correct: false, order_index: 2 },
      { id: 'ans-q-h6-2-c', question_id: 'q-h6-2', answer_text: 'Sekitar 40 mg/L CaCO3 (rentang aman toleransi 30 - 50 mg/L)', is_correct: true, order_index: 3 },
      { id: 'ans-q-h6-2-d', question_id: 'q-h6-2', answer_text: '300 hingga 500 mg/L CaCO3', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h6-3',
    quiz_id: 'quiz-h6',
    question_text: 'Jika home brewer menyeduh kopi specialty menggunakan air demineralisasi murni (0 ppm TDS / RO murni), apa hasil rasa cangkirnya?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Tanpa ion mineral kalsium dan magnesium, ekstraksi senyawa rasa berbobot molekul menengah dan tinggi terhambat, sementara ion H+ mendominasi memicu keasaman mentah menusuk.',
    answers: [
      { id: 'ans-q-h6-3-a', question_id: 'q-h6-3', answer_text: 'Rasa kopi menjadi sangat asam tajam menusuk, hampa rasa manis, dan bodi seduhan terasa kosong/kering', is_correct: true, order_index: 1 },
      { id: 'ans-q-h6-3-b', question_id: 'q-h6-3', answer_text: 'Kopi terasa sangat manis seperti sirup karamel', is_correct: false, order_index: 2 },
      { id: 'ans-q-h6-3-c', question_id: 'q-h6-3', answer_text: 'Seduhan kopi berubah menjadi sangat pahit pekat seperti arang', is_correct: false, order_index: 3 },
      { id: 'ans-q-h6-3-d', question_id: 'q-h6-3', answer_text: 'Rasa kopi persis sama dengan standar juara dunia WBC', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h7-1',
    quiz_id: 'quiz-h7',
    question_text: 'Berapakah suhu air seduh yang tepat saat dituangkan ke dalam mangkuk cupping menurut standar resmi SCA?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Suhu 93°C memberikan energi termal ideal untuk mengekstrak seluruh prekursor aroma kopi di mangkuk cupping tanpa membakar senyawa volatil.',
    answers: [
      { id: 'ans-q-h7-1-a', question_id: 'q-h7-1', answer_text: '70°C hingga 75°C', is_correct: false, order_index: 1 },
      { id: 'ans-q-h7-1-b', question_id: 'q-h7-1', answer_text: '100°C mendidih bergolak di atas kompor', is_correct: false, order_index: 2 },
      { id: 'ans-q-h7-1-c', question_id: 'q-h7-1', answer_text: '50°C hangat kuku', is_correct: false, order_index: 3 },
      { id: 'ans-q-h7-1-d', question_id: 'q-h7-1', answer_text: '93°C ± 1°C (tepat setelah air mendidih diturunkan suhunya sejenak)', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h7-2',
    quiz_id: 'quiz-h7',
    question_text: 'Dalam protokol cupping resmi, pada menit ke berapa tindakan memecah kerak ampas (breaking the crust) wajib dilakukan?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Pada menit ke-4, kerak ampas kopi telah menjebak gas aroma volatil secara maksimal; memecahnya dengan 3 dorongan sendok melepaskan aroma puncak (crust aroma).',
    answers: [
      { id: 'ans-q-h7-2-a', question_id: 'q-h7-2', answer_text: 'Segera pada detik ke-10 setelah penuangan', is_correct: false, order_index: 1 },
      { id: 'ans-q-h7-2-b', question_id: 'q-h7-2', answer_text: 'Tepat pada menit ke-4 setelah air pertama kali dituangkan ke mangkuk', is_correct: true, order_index: 2 },
      { id: 'ans-q-h7-2-c', question_id: 'q-h7-2', answer_text: 'Pada menit ke-15 saat kopi sudah dingin', is_correct: false, order_index: 3 },
      { id: 'ans-q-h7-2-d', question_id: 'q-h7-2', answer_text: 'Pada menit ke-30', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h7-3',
    quiz_id: 'quiz-h7',
    question_text: 'Apa tujuan utama latihan Triangulasi Rasa (Triangulation Tasting) bagi penyeduh rumahan?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Triangulasi melatih daya diskriminasi sensorik murni tanpa bias informasi label, memaksa otak fokus pada perbedaan subtle bodi, asam, dan aroma.',
    answers: [
      { id: 'ans-q-h7-3-a', question_id: 'q-h7-3', answer_text: 'Menghitung kadar kafein kopi di dalam darah secara visual', is_correct: false, order_index: 1 },
      { id: 'ans-q-h7-3-b', question_id: 'q-h7-3', answer_text: 'Menebak harga jual biji kopi di pasar komersial', is_correct: false, order_index: 2 },
      { id: 'ans-q-h7-3-c', question_id: 'q-h7-3', answer_text: 'Mengasah ketajaman indra membedakan satu cangkir unik dari tiga cangkir yang disajikan secara blind (buta)', is_correct: true, order_index: 3 },
      { id: 'ans-q-h7-3-d', question_id: 'q-h7-3', answer_text: 'Menghafal nama petani kopi di kebun', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h8-1',
    quiz_id: 'quiz-h8',
    question_text: 'Ketika menyeduh kopi berprofil sangrai gelap (dark roast), penyesuaian suhu air seduh apa yang tepat agar rasa tidak gosong pahit kelat?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dark roast memiliki struktur selulosa yang sangat rapuh dan senyawa terkaramelisasi tinggi. Suhu air lebih rendah mencegah ekstraksi senyawa pahit berlebih.',
    answers: [
      { id: 'ans-q-h8-1-a', question_id: 'q-h8-1', answer_text: 'Menurunkan suhu air ke kisaran 85°C hingga 88°C', is_correct: true, order_index: 1 },
      { id: 'ans-q-h8-1-b', question_id: 'q-h8-1', answer_text: 'Menaikkan suhu air hingga 98°C mendidih agresif', is_correct: false, order_index: 2 },
      { id: 'ans-q-h8-1-c', question_id: 'q-h8-1', answer_text: 'Menggunakan air es bersuhu 0°C untuk seduhan manual pour over', is_correct: false, order_index: 3 },
      { id: 'ans-q-h8-1-d', question_id: 'q-h8-1', answer_text: 'Menyeduh dengan air mendidih dua kali lipat', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h8-2',
    quiz_id: 'quiz-h8',
    question_text: 'Pada alat manual lever espresso (seperti Flair Espresso), apa fungsi krusial fase pre-infusion pada tekanan 1-2 bar selama 5-10 detik?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Pre-infusi tekanan rendah menjenuhkan bubuk kopi secara homogen, meniadakan celah mikro sehingga saat tuas ditekan 9 bar air tidak memicu kanalisasi.',
    answers: [
      { id: 'ans-q-h8-2-a', question_id: 'q-h8-2', answer_text: 'Mendinginkan chamber seduh agar tidak terlalu panas', is_correct: false, order_index: 1 },
      { id: 'ans-q-h8-2-b', question_id: 'q-h8-2', answer_text: 'Membasahi seluruh puck kopi secara merata agar mengembang padat sebelum tekanan penuh 9 bar diaplikasikan', is_correct: true, order_index: 2 },
      { id: 'ans-q-h8-2-c', question_id: 'q-h8-2', answer_text: 'Mengeluarkan seluruh ampas kopi dari portafilter', is_correct: false, order_index: 3 },
      { id: 'ans-q-h8-2-d', question_id: 'q-h8-2', answer_text: 'Menciptakan crema tebal tanpa kopi', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h8-3',
    quiz_id: 'quiz-h8',
    question_text: 'Bagaimana teknik menghasilkan microfoam susu silky di rumah menggunakan French Press secara optimal?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Susu hangat bersuhu 60°C memiliki protein elastis. Pompa cepat di awal memasukkan udara, diikuti pompa pendek di dasar yang memecah gelembung menjadi microfoam sutra.',
    answers: [
      { id: 'ans-q-h8-3-a', question_id: 'q-h8-3', answer_text: 'Memasukkan susu dingin langsung dari kulkas lalu memompa 100 kali', is_correct: false, order_index: 1 },
      { id: 'ans-q-h8-3-b', question_id: 'q-h8-3', answer_text: 'Memanaskan susu hingga mendidih 100°C di dalam French Press', is_correct: false, order_index: 2 },
      { id: 'ans-q-h8-3-c', question_id: 'q-h8-3', answer_text: 'Mencampurkan es batu ke dalam susu hangat', is_correct: false, order_index: 3 },
      { id: 'ans-q-h8-3-d', question_id: 'q-h8-3', answer_text: 'Memanaskan susu ke 60°C, memompa plunger cepat di bawah permukaan lalu mengocok mikro di dasar untuk memecah gelembung', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h9-1',
    quiz_id: 'quiz-h9',
    question_text: 'Berapakah rentang waktu perendaman dingin (cold brew immersion) yang ideal di dalam lemari pendingin (suhu 4°C) untuk konsentrat siap minum?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Karena energi termal rendah, laju difusi dingin membutuhkan waktu 16-20 jam untuk melarutkan senyawa rasa manis tanpa menarik senyawa tanin pahit.',
    answers: [
      { id: 'ans-q-h9-1-a', question_id: 'q-h9-1', answer_text: '1 hingga 2 jam saja', is_correct: false, order_index: 1 },
      { id: 'ans-q-h9-1-b', question_id: 'q-h9-1', answer_text: '5 hingga 7 hari di dalam kulkas', is_correct: false, order_index: 2 },
      { id: 'ans-q-h9-1-c', question_id: 'q-h9-1', answer_text: '16 hingga 20 jam perendaman tertutup rapat', is_correct: true, order_index: 3 },
      { id: 'ans-q-h9-1-d', question_id: 'q-h9-1', answer_text: '30 menit di atas meja dapur', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h9-2',
    quiz_id: 'quiz-h9',
    question_text: 'Pada metode Japanese Iced Pour Over, berapa proporsi air seduh yang digantikan oleh es batu di server penampung?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Mengganti ~40% air dengan es batu mengunci aroma volatil seketika (flash cooling) sambil mempertahankan konsentrasi ekstraksi normal saat es mencair sempurna.',
    answers: [
      { id: 'ans-q-h9-2-a', question_id: 'q-h9-2', answer_text: 'Sekitar 35% hingga 40% dari total berat air seduh digantikan oleh es batu', is_correct: true, order_index: 1 },
      { id: 'ans-q-h9-2-b', question_id: 'q-h9-2', answer_text: '5% saja dari total berat air', is_correct: false, order_index: 2 },
      { id: 'ans-q-h9-2-c', question_id: 'q-h9-2', answer_text: '80% hingga 90% air digantikan es batu', is_correct: false, order_index: 3 },
      { id: 'ans-q-h9-2-d', question_id: 'q-h9-2', answer_text: '100% tanpa menggunakan air panas sama sekali', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h9-3',
    quiz_id: 'quiz-h9',
    question_text: 'Mengapa pembuatan sirup gula aren kental rumahan disarankan ditambahkan sedikit garam laut murni?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Sejumput garam laut memberikan kontras mineral gurih yang menonjolkan aroma karamel gula nira aren dan menyatu padu dengan emulsi lemak susu segar.',
    answers: [
      { id: 'ans-q-h9-3-a', question_id: 'q-h9-3', answer_text: 'Agar sirup gula aren berubah warna menjadi putih transparan', is_correct: false, order_index: 1 },
      { id: 'ans-q-h9-3-b', question_id: 'q-h9-3', answer_text: 'Untuk membekukan sirup gula aren menjadi batu', is_correct: false, order_index: 2 },
      { id: 'ans-q-h9-3-c', question_id: 'q-h9-3', answer_text: 'Agar sirup terasa sangat asin seperti kecap asin', is_correct: false, order_index: 3 },
      { id: 'ans-q-h9-3-d', question_id: 'q-h9-3', answer_text: 'Ion natrium mengikat rasa manis dan menguatkan aroma karamel alami agar menyatu harmonis dengan gurihnya susu', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-h10-1',
    quiz_id: 'quiz-h10',
    question_text: 'Mengapa mata pisau burr baja grinder manual dilarang keras dicuci dengan air mengalir atau sabun cuci piring?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Baja karbon tinggi pada burr sangat rentan terhadap korosi air. Pembersihan burr yang benar hanya menggunakan kuas kaku, blower udara, atau pembersih berbasis butiran gandum.',
    answers: [
      { id: 'ans-q-h10-1-a', question_id: 'q-h10-1', answer_text: 'Mata pisau grinder akan membesar ukurannya sehingga macet', is_correct: false, order_index: 1 },
      { id: 'ans-q-h10-1-b', question_id: 'q-h10-1', answer_text: 'Air memicu oksidasi mikro dan karat pada presisi mata pisau baja yang merusak ketajaman gilingan secara permanen', is_correct: true, order_index: 2 },
      { id: 'ans-q-h10-1-c', question_id: 'q-h10-1', answer_text: 'Sabun akan membuat biji kopi menjadi tidak berkafein', is_correct: false, order_index: 3 },
      { id: 'ans-q-h10-1-d', question_id: 'q-h10-1', answer_text: 'Warna bodi grinder akan luntur ke ampas kopi', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h10-2',
    quiz_id: 'quiz-h10',
    question_text: 'Wadah penyimpanan biji kopi rumahan manakah yang paling efektif mencegah oksidasi dan menjaga keutuhan aroma volatil?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Oksigen, panas, kelembapan, dan radiasi sinar UV adalah 4 musuh utama kesegaran kopi. Wadah vakum kedap cahaya memperlambat oksidasi asam lemak kopi secara signifikan.',
    answers: [
      { id: 'ans-q-h10-2-a', question_id: 'q-h10-2', answer_text: 'Toples kaca bening transparan yang dijemur di bawah sinar matahari', is_correct: false, order_index: 1 },
      { id: 'ans-q-h10-2-b', question_id: 'q-h10-2', answer_text: 'Mangkuk terbuka di atas meja makan', is_correct: false, order_index: 2 },
      { id: 'ans-q-h10-2-c', question_id: 'q-h10-2', answer_text: 'Wadah kedap udara dengan katup satu arah (one-way degas valve) atau tabung vakum yang diletakkan di tempat sejuk kedap cahaya', is_correct: true, order_index: 3 },
      { id: 'ans-q-h10-2-d', question_id: 'q-h10-2', answer_text: 'Kantong plastik kresek tipis yang diikat longgar', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-h10-3',
    quiz_id: 'quiz-h10',
    question_text: 'Langkah berkelanjutan apa yang paling efektif bagi home brewer untuk mengembangkan keterampilan seduh ke tingkat mahir?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Dokumentasi log seduh yang disiplin dan kalibrasi sensorik bersama komunitas memperluas palet rasa dan membangun pemahaman objektif atas sains ekstraksi.',
    answers: [
      { id: 'ans-q-h10-3-a', question_id: 'q-h10-3', answer_text: 'Membeli alat seduh baru setiap minggu tanpa mencatat variabel rasa', is_correct: false, order_index: 1 },
      { id: 'ans-q-h10-3-b', question_id: 'q-h10-3', answer_text: 'Mendokumentasikan variabel seduh di jurnal rasa, berkalibrasi dengan sesama penyeduh di sesi cupping komunitas, dan mengikuti uji coba blind', is_correct: true, order_index: 2 },
      { id: 'ans-q-h10-3-c', question_id: 'q-h10-3', answer_text: 'Menolak mencoba origin kopi lain di luar selera pribadi', is_correct: false, order_index: 3 },
      { id: 'ans-q-h10-3-d', question_id: 'q-h10-3', answer_text: 'Menyeduh kopi tanpa menimbang dosis bubuk', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-hb-1',
    quiz_id: 'quiz-h-final',
    question_text: 'Mengapa biji kopi light roast yang baru disangrai kurang dari 3 hari sebaiknya tidak langsung diseduh?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 1,
    explanation: 'Gas CO2 yang berlebih memicu pelepasan gas agresif saat terkena air, menghalangi ekstraksi senyawa manis dan menghasilkan rasa asam tajam hambar.',
    answers: [
      { id: 'ans-q-hb-1-a', question_id: 'q-hb-1', answer_text: 'Biji kopi belum memiliki kadar kafein yang cukup', is_correct: false, order_index: 1 },
      { id: 'ans-q-hb-1-b', question_id: 'q-hb-1', answer_text: 'Kadar air di dalam biji kopi masih di atas 20%', is_correct: false, order_index: 2 },
      { id: 'ans-q-hb-1-c', question_id: 'q-hb-1', answer_text: 'Minyak kopi belum keluar ke permukaan biji', is_correct: false, order_index: 3 },
      { id: 'ans-q-hb-1-d', question_id: 'q-hb-1', answer_text: 'Kandungan gas CO2 masih sangat tinggi sehingga memicu turbulensi gas liar yang menghalangi ekstraksi merata', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-hb-2',
    quiz_id: 'quiz-h-final',
    question_text: 'Dalam distribusi partikel gilingan kopi, apakah dampak utama dari keberadaan \'fines\' (partikel debu mikro) yang berlebihan?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 2,
    explanation: 'Fines memiliki rasio luas permukaan sangat besar sehingga terekstraksi terlalu cepat, menghasilkan rasa pahit kelat (astringent) dan menyumbat pori kertas saring.',
    answers: [
      { id: 'ans-q-hb-2-a', question_id: 'q-hb-2', answer_text: 'Menyebabkan rasa kopi menjadi terlalu asam seperti cuka', is_correct: false, order_index: 1 },
      { id: 'ans-q-hb-2-b', question_id: 'q-hb-2', answer_text: 'Memicu over-extraction lokal, rasa pahit sepat kering (astringent), dan memperlambat laju alir air', is_correct: true, order_index: 2 },
      { id: 'ans-q-hb-2-c', question_id: 'q-hb-2', answer_text: 'Membuat seduhan mengalir terlalu cepat tanpa ekstraksi', is_correct: false, order_index: 3 },
      { id: 'ans-q-hb-2-d', question_id: 'q-hb-2', answer_text: 'Menurunkan total dissolved solids (TDS) seduhan', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-hb-3',
    quiz_id: 'quiz-h-final',
    question_text: 'Berapa rentang TDS air seduh ideal menurut standar SCA untuk menghasilkan ekstraksi kopi spesialti yang seimbang?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 3,
    explanation: 'SCA merekomendasikan target TDS 75 - 150 ppm untuk ekstraksi seimbang tanpa menetralkan keasaman atau mengendapkan mineral berlebih.',
    answers: [
      { id: 'ans-q-hb-3-a', question_id: 'q-hb-3', answer_text: '0 hingga 20 ppm murni', is_correct: false, order_index: 1 },
      { id: 'ans-q-hb-3-b', question_id: 'q-hb-3', answer_text: '300 hingga 500 ppm air sadah', is_correct: false, order_index: 2 },
      { id: 'ans-q-hb-3-c', question_id: 'q-hb-3', answer_text: '75 hingga 150 ppm (target optimal ~120-150 ppm)', is_correct: true, order_index: 3 },
      { id: 'ans-q-hb-3-d', question_id: 'q-hb-3', answer_text: '600 hingga 1000 ppm', is_correct: false, order_index: 4 },
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
      { id: 'ans-q-hb-4-a', question_id: 'q-hb-4', answer_text: 'Keseimbangan rasa keasaman dan kemanisan (Sweetness vs Acidity)', is_correct: true, order_index: 1 },
      { id: 'ans-q-hb-4-b', question_id: 'q-hb-4', answer_text: 'Ketebalan bodi dan intensitas kekuatan kopi', is_correct: false, order_index: 2 },
      { id: 'ans-q-hb-4-c', question_id: 'q-hb-4', answer_text: 'Suhu pendinginan server kopi di bawah dripper', is_correct: false, order_index: 3 },
      { id: 'ans-q-hb-4-d', question_id: 'q-hb-4', answer_text: 'Laju pembersihan ampas di dinding kertas dripper', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-hb-5',
    quiz_id: 'quiz-h-final',
    question_text: 'Mengapa teknik Inverted pada Aeropress sangat populer di kalangan home brewer kompetisi?',
    question_type: 'multiple_choice',
    points: 10,
    order_index: 5,
    explanation: 'Metode inverted membalik tabung sehingga kopi terendam sempurna tanpa tetesan gravitasi awal hingga plunger ditekan manual.',
    answers: [
      { id: 'ans-q-hb-5-a', question_id: 'q-hb-5', answer_text: 'Menghilangkan kebutuhan mencuci tabung Aeropress', is_correct: false, order_index: 1 },
      { id: 'ans-q-hb-5-b', question_id: 'q-hb-5', answer_text: 'Mencegah air seduh menetes keluar secara prematur sehingga waktu kontak perendaman dapat dikontrol dengan presisi', is_correct: true, order_index: 2 },
      { id: 'ans-q-hb-5-c', question_id: 'q-hb-5', answer_text: 'Menaikkan tekanan plunger secara otomatis menjadi 15 bar', is_correct: false, order_index: 3 },
      { id: 'ans-q-hb-5-d', question_id: 'q-hb-5', answer_text: 'Menghasilkan crema espresso tebal setara mesin komersial', is_correct: false, order_index: 4 },
    ],
  },
];

