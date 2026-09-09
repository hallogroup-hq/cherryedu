# -*- coding: utf-8 -*-
"""
Regex-based script to replace all ASCII blocks with visual media and tables in seedData.ts.
"""
import re

with open("lib/data/seedData.ts", "r", encoding="utf-8") as fp:
    content = fp.read()

MAPPING = {
    "PETANI (FARMER)": r"""![Media Ajar: Peta Rantai Nilai Kopi Specialty dari Hulu ke Hilir](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format&fit=crop&q=80)

[DIAGRAM:value-chain]""",

    "PERBANDINGAN FUNDAMENTAL": r"""| Parameter Pembeda | Kopi Komersial (Commodity Grade) | Specialty Coffee (Standar SCA) |
| :--- | :--- | :--- |
| **Standar Pemetikan** | Strip picking (campur hijau, kuning, merah) | **100% Petik Merah Optimal (Brix 18°–24°Bx)** |
| **Ketertelusuran Asal** | Anonim, dicampur dari ribuan kebun | **Single Origin / Micro-lot (Nama petani & varietas jelas)** |
| **Cacat Biji Hijau** | Toleransi tinggi cacat primer | **Zero Primary Defect (Standar SCA Green Grading)** |
| **Standar Skor Cupping** | Di bawah 80 poin (sering tidak diuji resmi) | **Minimal 80.00 Poin Resmi Kalibrasi Q Grader** |
| **Motif Konsumen** | Asupan kafein semata | **Apresiasi keunikan rasa, terroir, & proses pascapanen** |""",

    "RANTAI PASOK TRADISIONAL VS DIRECT TRADE": r"""> 🔄 **Perbandingan Model Rantai Pasok Kopi:**
>
> * **Rantai Tradisional (Banyak Perantara):**  
>   `Petani` → `Tengkulak Desa` → `Kolektor Kota` → `Eksportir Besar` → `Broker Internasional` → `Pabrik Komersial` → `Konsumen`  
>   *(Harga ditekan di setiap titik, margin petani sangat rendah, kualitas tercampur acak)*
>
> * **Model Direct Trade Specialty:**  
>   `Petani / Koperasi Unggul` → `Roaster Specialty (CherryEdu)` → `Barista Profesional` → `Konsumen Teredukasi`  
>   *(Harga premium berkeadilan, kemitraan jangka panjang transparan, kualitas terjaga penuh)*""",

    "ANATOMI LAPISAN BUAH CERI KOPI": r"""[DIAGRAM:cherry-anatomy]""",

    "SIKLUS METABOLISME TANAMAN BERDASARKAN ELEVASI": r"""| Parameter Agroklimat | Dataran Rendah (&lt; 900 masl) | Dataran Tinggi (&gt; 1.200 masl) |
| :--- | :--- | :--- |
| **Suhu Harian Rata-rata** | Hangat / Panas (&gt; 25°C) | **Sejuk berkabut (15°C – 22°C)** |
| **Laju Pematangan Buah** | Terlalu cepat matang | **Pematangan lambat & bertahap (Akumulasi nutrisi maksimal)** |
| **Kandungan Gula & Prekursor** | Waktu akumulasi singkat | **Akumulasi sukrosa & asam organik sitrat/malat melimpah** |
| **Kepadatan Fisik Biji** | Biji lunak / berpori longgar | **Biji sangat padat keras (Strictly Hard Bean / SHB)** |
| **Karakter Sensorik Cangkir** | Dominan earthy, bodi datar, asam rendah | **Keasaman cerah berkilau, aroma floral & sitrus kompleks** |""",

    "ILUSTRASI SISTEM AGROFORESTRI": r"""![Sistem Agroforestri Naungan Pohon di Kebun Kopi Dataran Tinggi](https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&auto=format&fit=crop&q=80)

> 🌳 **Struktur Kanopi Sistem Agroforestri (Shade-Grown Coffee):**
>
> * **Lapisan Kanopi Hutan (20–30 Meter):**  
>   Pohon Sengon, Dadap, Lamtoro, dan Kayu Manis menyaring sinar matahari ekstrem menjadi 40%–60% intensitas sejuk, menahan angin badai, serta menjadi habitat predator alami hama.
>
> * **Lapisan Pohon Kopi Arabika (2–3 Meter):**  
>   Daun berfotosintesis stabil tanpa dehidrasi panas, buah ceri matang perlahan dengan kepadatan seluler tinggi.
>
> * **Lantai Kebun & Seresah Daun Organik:**  
>   Humus alami menjaga mikroba tanah dan kelembapan air tanah tanpa pupuk kimia sintetis berlebih.""",

    "SPEKTRUM KEMATANGAN BUAH KOPI": r"""| Fase Kematangan | Indikator Fisik Buah | Kadar Gula Terlarut (Brix) | Profil Cita Rasa di Cangkir |
| :--- | :--- | :--- | :--- |
| **Mentah (Green)** | Hijau keras pekat | &lt; 12° Brix | Sepat getir berumput (*grassy*), astringent, tidak ada manis |
| **Kurang Matang** | Kuning / Oranye pucat | 13° – 16° Brix | Asam mentah datar, rasa manis tipis kurang berbobot |
| **MATANG OPTIMAL** | **Merah darah / Merah hati** | **18° – 24° Brix** | **MANIS MAKSIMAL, FLORAL, ASAM SITRUS SEGAR BERSIH** |
| **Terlewat Matang** | Ungu kehitaman lembek | &gt; 24° Brix (fermentasi liar) | Bau tape busuk, asam cuka menyengat (*over-fermented fault*) |""",

    "SIKLUS HIDUP SERANGAN PENGGEREK BUAH KOPI": r"""> 🪲 **Siklus Hidup & Mekanisme Serangan Penggerek Buah Kopi (PBKO / Hypothenemus hampei):**
>
> 1. **Penyusupan:** Kumbang betina dewasa membuat lubang jarum tepat di bagian ujung diskus ceri kopi matang.
> 2. **Reproduksi:** Kumbang meletakkan 30–50 butir telur di dalam daging biji endosperma.
> 3. **Kerusakan Fisik:** Larva menetas dan memakan jaringan biji hijau, meninggalkan rongga hitam busuk dan kotoran.
> 4. **Klasifikasi Mutu:** Biji berlubang PBKO dikategorikan sebagai cacat fisik kritis (*insect damage defect*) pada sertifikasi SCA & SNI.""",

    "POHON KELUARGA GENUS COFFEA": r"""| Taksonomi Spesies | Coffea Arabica (60%–70% Pasar Dunia) | Coffea Canephora / Robusta (30%–40% Pasar Dunia) |
| :--- | :--- | :--- |
| **Jumlah Kromosom** | 44 Kromosom (Tetraploid) | 22 Kromosom (Diploid) |
| **Sistem Penyerbukan** | *Self-pollinating* (Dapat menyerbuk sendiri) | *Cross-pollinating* (Wajib penyerbukan silang angin/lebah) |
| **Kandungan Kafein** | 1.2% – 1.5% bobot kering | 2.2% – 2.8% bobot kering (hampir 2x lipat) |
| **Kadar Asam Klorogenat (CQA)** | 5.5% – 8.0% (keasaman lebih lembut) | 10.0% – 11.0% (memicu rasa pahit dan astringent lebih kuat) |
| **Karakter Sensorik** | Keasaman kompleks, manis buah melimpah, aroma floral | Bodi sangat pekat kental, cokelat pahit pekat, rasa kacang tanah |
| **Ketahanan Tanaman** | Sangat rentan karat daun & cuaca panas | Sangat tahan hama, ulet di dataran rendah |""",

    "POHON SILSILAH VARIETAS ARABIKA": r"""[DIAGRAM:varieties-tree]""",

    "PETA PERSEBARAN VARIETAS UNGGUL": r"""| Varietas Resmi Indonesia | Karakter Tanaman & Agronomi | Profil Cita Rasa Khas | Daerah Persebaran Utama |
| :--- | :--- | :--- | :--- |
| **Sigarar Utang** (SK Mentan 2005) | Tajuk semi-katai, sangat adaptif, berbuah sepanjang tahun | Asam sitrus manis, madu, bodi bulat halus | Danau Toba (Lintong), Gayo, Mandailing |
| **Andungsari 1 (AS 1)** | Seleksi Catimor Puslitkoka Jember, tajuk kompak | Rasa rempah manis, keasaman apel malat cerah | Kawah Ijen/Raung, Temanggung, Toraja |
| **Komasti** (Puslitkoka 2013) | Tahan nematoda akar, daun muda hijau mengilap | Bodi sedang, manis gula tebu, bersih | Jawa Tengah, Bali Kintamani, Flores Bajawa |
| **S-795 (Jember)** | Seleksi India galur Kent x Liberika | Aroma bunga herba, manis rempah cengkeh & kayu manis | Toraja, Enrekang, Ketinggian Jawa Barat |
| **Ateng Super & Tim-Tim** | Introduksi Hibrido de Timor berdaun tebal | Bodi tebal pekat, cokelat hitam, rempah bersahaja | Dataran Tinggi Gayo (Aceh Tengah & Bener Meriah) |""",

    "SIKLUS TRANSFORMASI MENUJU FINE ROBUSTA": r"""> ☕ **Transformasi Menuju Fine Robusta (CQI Quality Standard):**
>
> * **Praktik Asalan Tradisional:**  
>   Petik campur buah hitam/hijau → Penjemuran di lantai tanah lembap → Biji terkontaminasi jamur tanah → Rasa ban terbakar & astringent tajam → Nilai jual komoditas terendah.
>
> * **Standar Emas Fine Robusta:**  
>   Petik merah selektif 100% matang → Sortasi rambang apung floaters → Penjemuran para-para (*raised beds*) terangkat → Biji bersih bebas cacat primer → Menghasilkan cita rasa cokelat murni kental (*dark chocolate fudge*), karamel gula merah, dan aroma rempah harum.""",

    "ANATOMI LABEL KEMASAN": r"""> 🏷️ **Anatomi Label Kemasan Specialty Coffee yang Transparan:**
>
> * **ORIGIN / WILAYAH:** Aceh Gayo, Desa Pantan Musara  
> * **ELEVASI KEBUN:** 1.550 – 1.650 mdpl (MASL)  
> * **VARIETAS BIBIT:** Ateng Super & Bourbon  
> * **PRODUSER / MILL:** Hendra Maulizar (Avatara Mill)  
> * **METODE PASCAPANEN:** Anaerobic Natural (72 Jam)  
> * **PROFIL ROASTING:** Light-to-Medium (Filter Roast)  
> * **TASTING NOTES:** Strawberry Jam, Hibiscus, Honeycomb, Sweet Lime  
> * **TANGGAL SANGRAI:** 05 September 2026 *(Selalu periksa tanggal sangrai untuk memastikan masa degassing terbaik!)*""",

    "DIAGRAM ALIR PROSES FULLY WASHED": r"""[DIAGRAM:processing-comparison]""",

    "DIAGRAM ALIR PROSES NATURAL": r"""> ☀️ **Alur Bioproses Natural / Dry Process:**  
> `Petik Merah Optimal` → `Sortasi Rambang Air (Floaters)` → `Penjemuran Ceri Utuh di Para-para Terangkat (20–30 Hari)` → `Pengecekan Kadar Air 10.5%–11.5%` → `Hulling Kering Kupas Kulit Buah & Cangkang` → `Green Bean Siap Sangrai`""",

    "SPEKTRUM TINGKATAN HONEY PROCESS": r"""| Tipe Honey Process | Sisa Musilase Menempel | Durasi & Kondisi Penjemuran | Karakter Profil Sensorik Cangkir |
| :--- | :--- | :--- | :--- |
| **White Honey** | 10% – 15% (hampir bersih) | 7 – 10 hari (terik matahari penuh) | Sangat bersih (*clean cup*), keasaman cerah mirip washed |
| **Yellow Honey** | 25% – 50% (lapisan sedang) | 10 – 14 hari (terik matahari langsung) | Manis floral madu ringan, asam buah aprikot segar |
| **Red Honey** | 50% – 75% (lapisan tebal) | 14 – 18 hari (teduh parsial beratap) | Bodi sedang bundar, rasa selai persik & karamel matang |
| **Black Honey** | Hampir 100% (getah utuh) | 20 – 30 hari (naungan terpal bertahap) | Bodi sangat kental, rasa manis molase, anggur hitam |""",

    "PERBANDINGAN KADAR AIR HULLING": r"""| Parameter Pemrosesan | Standar Dunia (Washed / Natural) | Tradisi Nusantara Giling Basah (Wet-Hulled) |
| :--- | :--- | :--- |
| **Kadar Air Saat Kulit Tanduk Dikupas** | Dijemur hingga kering tuntas: **10.5% – 11.5%** | Dikupas saat gabah masih basah liat: **30% – 40%** |
| **Kondisi Biji Pasca Pengupasan** | Tetap terbungkus parchment hingga siap kirim | Biji hijau telanjang langsung dijemur di bawah matahari |
| **Warna Fisik Green Bean** | Hijau pucat keemasan (*pale jade*) | Hijau tua kebiruan pekat (*deep bluish-green*) |
| **Profil Sensorik Khas** | Keasaman cerah berkilau, jernih (*clean*) | Bodi sangat pekat kental, rempah herba, aroma tembakau |""",

    "ILUSTRASI TANGKI FERMENTASI ANAEROBIK": r"""![Tangki Stainless Steel Fermentasi Anaerobik Terkontrol](https://images.unsplash.com/photo-1574360773950-6a2347209703?w=1200&auto=format&fit=crop&q=80)

> 🔬 **Struktur Tangki Bioproses Fermentasi Anaerobik Terkontrol:**
>
> * **Katup Airlock Satu-Arah (One-Way Degassing Valve):**  
>   Membiarkan gas karbon dioksida ($\text{CO}_2$) hasil respirasi ragi keluar leluasa, namun mengunci rapat oksigen atmosfer agar tidak masuk.
>
> * **Mikrobiologi Terkendali (Controlled Microbiology):**  
>   Lingkungan tanpa oksigen menekan bakteri pembusuk aerobik dan memicu kerja enzimatis ragi (*Saccharomyces cerevisiae*) serta bakteri asam laktat untuk mensintesis ester buah tropis unik (nangka, mangga, markisa).
>
> * **Pengawasan Sensorik Real-Time:**  
>   Suhu tangki dijaga dingin ($16^\circ\text{C} - 19^\circ\text{C}$) dan derajat keasaman (pH) dipantau agar tidak turun di bawah ambang bahaya asam cuka (pH 3.8).""",

    "TIGA MEKANISME TRANSFER PANAS": r"""| Mekanisme Transfer Panas | Sumber Energi di Drum Roaster | Pengaruh Terhadap Pematangan Biji |
| :--- | :--- | :--- |
| **Konduksi (Sentuhan Langsung)** | Dinding logam silinder drum dan gesekan antar biji | Mematangkan lapisan luar biji kopi; jika berlebih memicu cacat gosong *facing/scorching* |
| **Konveksi (Aliran Udara Panas)** | Hawa panas dihisap exhaust fan melintasi tumpukan biji | Menembus ke bagian inti dalam biji, menguapkan air secara merata |
| **Radiasi (Pancaran Gelombang)** | Panel burner inframerah dan keramik pemanas | Mentransfer energi termal tingkat molekuler dari jarak jauh |""",

    "KURVA TIMELINE ROASTING STANDAR": r"""[DIAGRAM:roast-curve]""",

    "SPEKTRUM TINGKAT SANGRAI": r"""| Parameter Kualitas | Light Roast (Sangrai Muda) | Medium Roast (Sangrai Sedang) | Dark Roast (Sangrai Gelap) |
| :--- | :--- | :--- | :--- |
| **Warna & Permukaan Biji** | Cokelat kayu manis, kering tanpa minyak | Cokelat susu keemasan, permukaan kering kesat | Hitam berkilau lapisan minyak (*surface oil*) |
| **Karakter Rasa Asam** | Sangat cerah, keasaman buah alami terjaga | Asam lembut seimbang, bulat halus | Keasaman habis terbakar total |
| **Karakter Rasa Manis & Pahit** | Manis floral madu ringan, rasa pahit minimal | Manis karamel & cokelat susu optimal | Pahit pekat dark chocolate, arang, & asap |
| **Rekomendasi Metode Seduh** | V60, Chemex, Aeropress (Filter Manual) | Espresso Modern, Americano, Filter Seimbang | Espresso Tradisional, Kopi Susu Aren |""",

    "KINETIKA EMISI GAS CO2": r"""> ⏱️ **Kinetika Pelepasan Gas $\text{CO}_2$ & Jendela Rasa Terbaik (Resting Timeline):**
>
> * **Hari 0 s/d 3 (Fase Terlalu Segar):**  
>   Biji melepaskan gas $\text{CO}_2$ bertekanan tinggi. Saat diseduh, gelembung gas menghalangi kontak air dengan bubuk kopi (*channeling* parah); rasa cenderung bersoda tajam (*metallic/dry*).
>
> * **Hari 7 s/d 28 (Jendela Kenikmatan Puncak / PEAK FLAVOR WINDOW):**  
>   Tekanan gas internal telah stabil. Struktur pori biji terbuka sempurna untuk ekstraksi air; seluruh nada rasa manis, asam buah cerah, dan aroma floral mekar optimal.
>
> * **Hari 45+ (Fase Penurunan Oksidasi):**  
>   Senyawa volatil aromatik mulai teroksidasi oleh udara; cita rasa berangsur datar (*flat*) menuju tengik (*stale*).""",

    "KOMPOSISI CAIRAN SECANGKIR KOPI": r"""> ☕ **Komposisi Kimiawi Cairan Secangkir Kopi Seduh:**
>
> * **98.5% – 98.8% AIR SEDUH (Pelarut / Solvent):**  
>   Molekul $\text{H}_2\text{O}$ murni yang membawa muatan ionik mineral kation Magnesium ($\text{Mg}^{2+}$), Kalsium ($\text{Ca}^{2+}$), dan anion penyangga Bikarbonat ($\text{HCO}_3^-$).
>
> * **Hanya 1.2% – 1.5% SENYAWA TERLARUT KOPI (Solute / TDS):**  
>   Asam sitrat, asam malat, kafein murni, minyak lipid aromatik, trigonelin, karamel sukrosa, dan melanoidin.""",

    "STANDAR EMAS AIR SEDUH KOPI SCA": r"""[DIAGRAM:water-chemistry]""",

    "PERBANDINGAN STRUKTUR DUA KATION": r"""| Parameter Kation Logam | Kation Magnesium ($\text{Mg}^{2+}$) | Kation Kalsium ($\text{Ca}^{2+}$) |
| :--- | :--- | :--- |
| **Jari-Jari Ionik** | Kecil ($0.72\text{ \AA}$) | Lebih besar ($1.00\text{ \AA}$) |
| **Kerapatan Muatan Listrik** | Sangat padat berkonsentrasi tinggi | Lebih renggang terdistribusi |
| **Daya Ikat Senyawa Rasa** | Kuat mengikat senyawa asam buah sitrat/malat & nada floral | Kuat mengikat senyawa bodi, gula karamel, & cokelat |
| **Keamanan untuk Mesin Espresso** | **Sangat Ramah Mesin** (Garam magnesium sangat mudah larut) | **Waspada Kerak Kapur** (Membentuk endapan batu kapur $\text{CaCO}_3$) |""",

    "SKEMA INSTALASI FILTRASI AIR": r"""> 🚰 **Skema Alur Sistem Filtrasi Air Bertingkat Kedai Kopi:**
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
>    Air dimurnikan hingga bebas mineral keras, lalu diinjeksikan kembali konsentrat Magnesium & Bikarbonat murni pada rasio ideal SCA (130–150 ppm) sebelum dialirkan ke mesin espresso komersial.""",

    "ANATOMI PERSEPSI FLAVOR": r"""| Sistem Sensorik Tubuh | Organ & Reseptor | Karakter yang Dideteksi |
| :--- | :--- | :--- |
| **Gustasi (Rasa di Lidah)** | Kuncup Pengecap Lidah (Taste Buds) | Hanya 5 rasa dasar: **Manis, Asam, Asin, Pahit, Umami** |
| **Olveksi (Aroma di Hidung)** | Epitelium Rongga Hidung (Ortronasal & Retronasal) | **Ribuan senyawa aromatik volatil**: Melati, persik, vanila, kacang sangrai |
| **Trigeminal (Tekstur Mulut)** | Saraf Sensorik Rongga Mulut (Trigeminal Nerve) | Sensasi fisik: Suhu panas/dingin, kekentalan (*viscosity*), kesat astringent |""",

    "TIMELINE PROTOKOL CUPPING SCA": r"""| Waktu Menit | Tahapan Protokol Cupping Resmi SCA | Tindakan Teknis & Aspek Evaluasi |
| :--- | :--- | :--- |
| **00:00** | Penuangan Air Panas 93°C | Tuang air panas ke 8.25g bubuk kopi (Rasio 1:18.18); mulai ekstraksi immersi |
| **00:00 – 04:00** | Pembentukan Kerak (*Crust*) | Diamkan tenang tanpa diaduk; partikel bubuk kopi naik membentuk lapisan pelindung |
| **04:00** | **Ritual Breaking the Crust** | Dorong kerak bubuk 3x dengan punggung sendok; hirup uap aroma basah sedalamnya |
| **04:30 – 05:00** | Pembersihan Busa (*Skimming*) | Ambil sisa busa dan partikel terapung dengan 2 sendok cupping secara melingkar |
| **08:00 – 10:00** | **Slurp Panas Pertama (~70°C)** | Evaluasi cita rasa dominan (*Flavor*) dan panjang jejak rasa di mulut (*Aftertaste*) |
| **10:00 – 15:00** | **Slurp Hangat Kedua (~60°C)** | Evaluasi kejernihan rasa asam (*Acidity*), ketebalan tekstur (*Body*), dan *Balance* |
| **15:00 – 25:00** | **Slurp Dingin Ketiga (~35°C)** | Uji kemurnian cangkir (*Clean Cup*), rasa manis alami, keseragaman (*Uniformity*) |""",

    "STRUKTUR TIGA TINGKATAN RODA RASA": r"""> 🎨 **Struktur 3 Tingkatan Hierarki Roda Rasa Kopi SCA & WCR:**
>
> * **Tingkat 1 • Lingkaran Dalam (Kategori Primer / Makro):**  
>   `FRUITY`  
>   ↳ **Tingkat 2 • Lingkaran Tengah (Sub-Kategori):**  
>     `CITRUS FRUIT`  
>     ↳ **Tingkat 3 • Lingkaran Luar (Deskriptor Sensorik Spesifik):**  
>       `Grapefruit`, `Lemon`, `Lime`, `Orange`
>
> * **Tingkat 1:** `FLORAL`  
>   ↳ **Tingkat 2:** `BLACK TEA`  
>     ↳ **Tingkat 3:** `Jasmine`, `Chamomile`, `Rose`
>
> * **Tingkat 1:** `SWEET`  
>   ↳ **Tingkat 2:** `BROWN SUGAR`  
>     ↳ **Tingkat 3:** `Caramel`, `Honey`, `Molasses`""",

    "ANATOMI FORMULIR PENILAIAN CUPPING": r"""| Atribut Skaler Kualitas (Skor 6.00 – 9.75) | Atribut Integritas Mutu (Maksimal 10 Poin) |
| :--- | :--- |
| 1. **Fragrance / Aroma** (Uji Kering & Basah) | 7. **Uniformity** (Keseragaman 5 mangkok: 2 poin/mangkok) |
| 2. **Flavor** (Kombinasi rasa & aroma di mulut) | 8. **Clean Cup** (Kemurnian tanpa cacat: 2 poin/mangkok) |
| 3. **Aftertaste** (Panjang & kebersihan jejak rasa) | 9. **Sweetness** (Kemanisan alami: 2 poin/mangkok) |
| 4. **Acidity** (Kualitas kecerahan rasa asam) | 10. **Overall** (Penilaian holistik juri Q Grader) |
| 5. **Body** (Ketebalan viskositas dan kelembutan) | *Ambang batas Specialty Grade: Skor Total &ge; 80.00* |
| 6. **Balance** (Harmoni keseimbangan semua unsur) | *Skor 85+: Excellent • Skor 90+: Outstanding* |""",

    "RUMUS PENGURANGAN DEFEK": r"""> ⚖️ **Rumus Perhitungan Penalti Cacat Cangkir Cupping Resmi:**
>
> $$\text{Total Skor Akhir} = \text{Skor Mentah Kumulatif} - (\text{Jumlah Mangkok Cacat} \times \text{Nilai Penalti 2 atau 4})$$
>
> * **Taint (Cacat Ringan / Noda Rasa):** Pengurangan **2 Poin** per mangkok terdampak.
> * **Fault (Cacat Berat / Rusak Total):** Pengurangan **4 Poin** per mangkok terdampak (misalnya rasa kapang busuk atau bahan kimia)."""
}

# Find all blocks in content
pattern = re.compile(r"\\`\\`\\`([\s\S]*?)\\`\\`\\`")

def replacer(match):
    block_text = match.group(1)
    for key, repl in MAPPING.items():
        if key in block_text:
            return repl
    # If no mapping matched, return original
    return match.group(0)

new_content, count = pattern.subn(replacer, content)
print(f"Replaced {count} occurrences in seedData.ts")

with open("lib/data/seedData.ts", "w", encoding="utf-8") as fp:
    fp.write(new_content)
