# -*- coding: utf-8 -*-
"""
Script to transform all 31 raw ASCII code blocks in seedData.ts into rich educational
media (visual photos, diagrams, and clean GFM markdown tables).
"""

with open("lib/data/seedData.ts", "r", encoding="utf-8") as fp:
    content = fp.read()

# Dictionary of target ASCII blocks to replacement visual media
REPLACEMENTS = [
    # 1. Peta Rantai Nilai
    (
        r"""\`\`\`
[ PETANI (FARMER) ] 
       │ Petik Merah Selektif & Perawatan Kebun
       ▼
[ PROCESSOR (WET MILL) ] 
       │ Fermentasi Terkontrol & Penjemuran Kadar Air 10-12%
       ▼
[ TRADER & DRY MILL ] 
       │ Hulling, Grading Ukuran/Densitas, QC Cupping, Ekspor
       ▼
[ ROASTER (PENYANGRAI) ] 
       │ Profiling Termal, Reaksi Maillard, Degassing
       ▼
[ BARISTA & BREWER ] 
       │ Sains Air, Kalibrasi Gilingan, Hospitality
       ▼
[ KONSUMEN TEREDUKASI ] 
       Apresiasi Rasa & Kesediaan Membayar Harga Adil
\`\`\`""",
        r"""![Media Ajar: Peta Rantai Nilai Kopi Specialty dari Hulu ke Hilir](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format&fit=crop&q=80)

[DIAGRAM:value-chain]"""
    ),

    # 2. Perbandingan Komersial vs Specialty
    (
        r"""\`\`\`
PERBANDINGAN FUNDAMENTAL:
┌─────────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ PARAMETER PEMBEDA       │ KOPI KOMERSIAL (COMMODITY)    │ SPECIALTY COFFEE (SCA GRADE)  │
├─────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ Standar Pemetikan       │ Strip picking (campur warna)  │ 100% Petik Merah Optimal      │
│ Ketertelusuran Asal     │ Anonim (Blended / Trader)     │ Single Origin / Micro-lot     │
│ Cacat Biji Hijau        │ Toleransi tinggi cacat primer │ Zero Primary Defect (SCA)     │
│ Standar Skor Cupping    │ < 80 poin (sering tidak diuji)│ Minimal 80.00 Poin (Q Grader) │
│ Motif Konsumen          │ Asupan kafein semata          │ Apresiasi rasa & terroir      │
└─────────────────────────┴───────────────────────────────┴───────────────────────────────┘
\`\`\`""",
        r"""| Parameter Pembeda | Kopi Komersial (Commodity Grade) | Specialty Coffee (Standar SCA) |
| :--- | :--- | :--- |
| **Standar Pemetikan** | Strip picking (campur hijau, kuning, merah) | **100% Petik Merah Optimal (Brix 18°–24°Bx)** |
| **Ketertelusuran Asal** | Anonim, dicampur dari ribuan kebun | **Single Origin / Micro-lot (Nama petani & varietas jelas)** |
| **Cacat Biji Hijau** | Toleransi tinggi cacat primer | **Zero Primary Defect (Standar SCA Green Grading)** |
| **Standar Skor Cupping** | Di bawah 80 poin (sering tidak diuji resmi) | **Minimal 80.00 Poin Resmi Kalibrasi Q Grader** |
| **Motif Konsumen** | Asupan kafein semata | **Apresiasi keunikan rasa, terroir, & proses pascapanen** |"""
    ),

    # 3. Rantai Pasok Tradisional vs Direct Trade
    (
        r"""\`\`\`
RANTAI PASOK TRADISIONAL VS DIRECT TRADE:

[Tradisional] Petani ➔ Tengkulak Desa ➔ Kolektor Kota ➔ Eksportir ➔ Broker Luar ➔ Roaster Komersial ➔ Konsumen
              (Harga ditekan di setiap titik, margin petani sangat rendah, kualitas tercampur acak)

[Direct Trade] Petani / Koperasi Unggul ➔ Roaster Specialty ➔ Barista Profesional ➔ Konsumen Teredukasi
              (Harga premium berkeadilan, kemitraan jangka panjang, kualitas terjaga penuh)
\`\`\`""",
        r"""> 🔄 **Perbandingan Model Rantai Pasok Kopi:**
>
> * **Rantai Tradisional (Banyak Perantara):**  
>   `Petani` → `Tengkulak Desa` → `Kolektor Kota` → `Eksportir Besar` → `Broker Internasional` → `Pabrik Komersial` → `Konsumen`  
>   *(Harga ditekan di setiap titik, margin petani sangat rendah, kualitas tercampur acak)*
>
> * **Model Direct Trade Specialty:**  
>   `Petani / Koperasi Unggul` → `Roaster Specialty (CherryEdu)` → `Barista Profesional` → `Konsumen Teredukasi`  
>   *(Harga premium berkeadilan, kemitraan jangka panjang transparan, kualitas terjaga penuh)*"""
    ),

    # 4. Anatomi Buah Ceri Kopi
    (
        r"""\`\`\`
ANATOMI LAPISAN BUAH CERI KOPI (CROSS-SECTION):
(1) Eksokarp (Kulit Luar / Skin) ────────────────┐
(2) Mesokarp (Daging Buah & Lendir / Mucilage) ───┼── [Bagian Luar Buah]
(3) Endokarp (Kulit Tanduk / Parchment) ─────────┘
(4) Spermoderm (Kulit Ari / Silver Skin) ────────┐
(5) Endosperma (Biji Kopi Hijau / Green Bean) ───┴── [Biji Kopi yang Kita Sangrai]
(6) Embrio (Bakal Tanaman di Bagian Dasar)
\`\`\`""",
        r"""[DIAGRAM:cherry-anatomy]"""
    ),

    # 5. Siklus Metabolisme Elevasi
    (
        r"""\`\`\`
SIKLUS METABOLISME TANAMAN BERDASARKAN ELEVASI:
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ DATARAN RENDAH (< 900 MASL)          │ DATARAN TINGGI (> 1.200 MASL)        │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ • Suhu harian hangat / panas (> 25°C)│ • Suhu harian sejuk (15°C – 22°C)    │
│ • Fotosintesis cepat, buah cepat matang│ • Pematangan buah lambat & bertahap │
│ • Waktu akumulasi gula singkat       │ • Akumulasi sukrosa & asam organik tinggi│
│ • Biji cenderung lunak / berpori     │ • Biji padat keras (Strictly Hard Bean)│
│ • Rasa dominan earthy, asam rendah   │ • Asam sitrus cerah, aroma buah kompleks│
└──────────────────────────────────────┴──────────────────────────────────────┘
\`\`\`""",
        r"""| Parameter Agroklimat | Dataran Rendah (&lt; 900 masl) | Dataran Tinggi (&gt; 1.200 masl) |
| :--- | :--- | :--- |
| **Suhu Harian Rata-rata** | Hangat / Panas (&gt; 25°C) | **Sejuk berkabut (15°C – 22°C)** |
| **Laju Pematangan Buah** | Terlalu cepat matang | **Pematangan lambat & bertahap (Akumulasi nutrisi maksimal)** |
| **Kandungan Gula & Prekursor** | Waktu akumulasi singkat | **Akumulasi sukrosa & asam organik sitrat/malat melimpah** |
| **Kepadatan Fisik Biji** | Biji lunak / berpori longgar | **Biji sangat padat keras (Strictly Hard Bean / SHB)** |
| **Karakter Sensorik Cangkir** | Dominan earthy, bodi datar, asam rendah | **Keasaman cerah berkilau, aroma floral & sitrus kompleks** |"""
    ),

    # 6. Sistem Agroforestri
    (
        r"""\`\`\`
ILUSTRASI SISTEM AGROFORESTRI (SHADE-GROWN COFFEE):
┌───────────────────────────────┐
│ POHON KANOPI HUTAN (20-30 M)  │  ➔ Menyerap CO2, menahan angin kencang, habitat burung
│ (Sengon, Dadap, Kayu Manis)   │
└──────────────┬────────────────┘
               │ Menyaring sinar matahari menjadi 40-60%
┌──────────────▼────────────────┐
│ POHON KOPI ARABIKA (2-3 M)    │  ➔ Fotosintesis stabil tanpa stres panas, buah matang lambat
└──────────────┬────────────────┘
               │ Akarnya mencengkeram tanah vulkanik lereng
┌──────────────▼────────────────┐
│ LAPISAN HUMUS & SERESAH DAUN  │  ➔ Menjaga kelembapan tanah, menyediakan kompos alami
└───────────────────────────────┘
\`\`\`""",
        r"""![Sistem Agroforestri Naungan Pohon di Kebun Kopi Dataran Tinggi](https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&auto=format&fit=crop&q=80)

> 🌳 **Struktur Kanopi Sistem Agroforestri (Shade-Grown Coffee):**
>
> * **Lapisan Kanopi Hutan (20–30 Meter):**  
>   Pohon Sengon, Dadap, Lamtoro, dan Kayu Manis menyaring sinar matahari ekstrem menjadi 40%–60% intensitas sejuk, menahan angin badai, serta menjadi habitat predator alami hama.
>
> * **Lapisan Pohon Kopi Arabika (2–3 Meter):**  
>   Daun berfotosintesis stabil tanpa dehidrasi panas, buah ceri matang perlahan dengan kepadatan seluler tinggi.
>
> * **Lantai Kebun & Seresah Daun Organik:**  
>   Humus alami menjaga mikroba tanah dan kelembapan air tanah tanpa pupuk kimia sintetis berlebih."""
    ),

    # 7. Spektrum Kematangan Buah Kopi
    (
        r"""\`\`\`
SPEKTRUM KEMATANGAN BUAH KOPI & DAMPAK SENSORI:
┌─────────────────┬─────────────────┬──────────────────┬────────────────────────┐
│ FASE KEMATANGAN │ INDIKATOR FISIK │ KADAR GULA (BRIX)│ PROFIL RASA CANGKIR    │
├─────────────────┼─────────────────┼──────────────────┼────────────────────────┤
│ Mentah (Green)  │ Hijau keras     │ < 12° Brix       │ Sepat berumput (grassy)│
│ Kurang Matang   │ Oranye kekuningan│ 13° - 16° Brix  │ Asam mentah, tipis     │
│ MATANG OPTIMAL  │ Merah darah/hati│ 18° - 24° Brix   │ MANIS MAKSIMAL, FLORAL │
│ Terlewat Matang │ Ungu kehitaman  │ > 24° Brix (liar)│ Winey ferment, asam cuka│
└─────────────────┴─────────────────┴──────────────────┴────────────────────────┘
\`\`\`""",
        r"""| Fase Kematangan | Indikator Fisik Buah | Kadar Gula Terlarut (Brix) | Profil Cita Rasa di Cangkir |
| :--- | :--- | :--- | :--- |
| **Mentah (Green)** | Hijau keras pekat | &lt; 12° Brix | Sepat getir berumput (*grassy*), astringent, tidak ada manis |
| **Kurang Matang** | Kuning / Oranye pucat | 13° – 16° Brix | Asam mentah datar, rasa manis tipis kurang berbobot |
| **MATANG OPTIMAL** | **Merah darah / Merah hati** | **18° – 24° Brix** | **MANIS MAKSIMAL, FLORAL, ASAM SITRUS SEGAR BERSIH** |
| **Terlewat Matang** | Ungu kehitaman lembek | &gt; 24° Brix (fermentasi liar) | Bau tape busuk, asam cuka menyengat (*over-fermented fault*) |"""
    ),

    # 8. Siklus PBKO
    (
        r"""\`\`\`
SIKLUS HIDUP SERANGAN PENGGEREK BUAH KOPI (PBKO):
Kumbang Betina Masuk ➔ Bikin Lubang di Ujung Diskus Ceri ➔ Bertelur di Dalam Endosperma
         │
         ▼
Larva Memakan Biji Hijau ➔ Meninggalkan Lubang Hitam & Bubuk Feses ➔ Biji Rusak (Primary Defect)
\`\`\`""",
        r"""> 🪲 **Siklus Hidup & Mekanisme Serangan Penggerek Buah Kopi (PBKO / Hypothenemus hampei):**
>
> 1. **Penyusupan:** Kumbang betina dewasa membuat lubang jarum tepat di bagian ujung diskus ceri kopi matang.
> 2. **Reproduksi:** Kumbang meletakkan 30–50 butir telur di dalam daging biji endosperma.
> 3. **Kerusakan Fisik:** Larva menetas dan memakan jaringan biji hijau, meninggalkan rongga hitam busuk dan kotoran.
> 4. **Klasifikasi Mutu:** Biji berlubang PBKO dikategorikan sebagai cacat fisik kritis (*insect damage defect*) pada sertifikasi SCA & SNI."""
    ),

    # 9. Pohon Keluarga Genus Coffea
    (
        r"""\`\`\`
POHON KELUARGA GENUS COFFEA KOMERSIAL:
┌────────────── GENUS COFFEA ──────────────┐
│                                          │
▼                                          ▼
COFFEA ARABICA (60-70% Pasar Global)      COFFEA CANEPHORA / ROBUSTA (30-40%)
• 44 Kromosom (Tetraploid)                 • 22 Kromosom (Diploid)
• Self-pollinating (Menyerbuk sendiri)     • Cross-pollinating (Penyerbukan silang)
• Asam kompleks, rasa manis, floral        • Kafein 2x lipat, bodi pekat, pahit kayu
• Rentan terhadap jamur karat daun         • Sangat tahan hama & panas dataran rendah
\`\`\`""",
        r"""| Taksonomi Spesies | Coffea Arabica (60%–70% Pasar Dunia) | Coffea Canephora / Robusta (30%–40% Pasar Dunia) |
| :--- | :--- | :--- |
| **Jumlah Kromosom** | 44 Kromosom (Tetraploid) | 22 Kromosom (Diploid) |
| **Sistem Penyerbukan** | *Self-pollinating* (Dapat menyerbuk sendiri) | *Cross-pollinating* (Wajib penyerbukan silang angin/lebah) |
| **Kandungan Kafein** | 1.2% – 1.5% bobot kering | 2.2% – 2.8% bobot kering (hampir 2x lipat) |
| **Kadar Asam Klorogenat (CQA)** | 5.5% – 8.0% (keasaman lebih lembut) | 10.0% – 11.0% (memicu rasa pahit dan astringent lebih kuat) |
| **Karakter Sensorik** | Keasaman kompleks, manis buah melimpah, aroma floral | Bodi sangat pekat kental, cokelat pahit pekat, rasa kacang tanah |
| **Ketahanan Tanaman** | Sangat rentan karat daun & cuaca panas | Sangat tahan hama, ulet di dataran rendah |"""
    ),

    # 10. Silsilah Varietas Arabika
    (
        r"""\`\`\`
POHON SILSILAH VARIETAS ARABIKA UTAMA DUNIA:
[ HUTAN KOPI ETHIOPIA ]
        │
        ├───► [ YAMAN ]
                 │
                 ├───► TYPICA (VOC 1696) ──► Maragogype, Pacas, Criollo
                 │
                 └───► BOURBON (Prancis 1708) ──► Caturra, SL-28, Pacamara, Gesha/Geisha
\`\`\`""",
        r"""[DIAGRAM:varieties-tree]"""
    ),

    # 11. Varietas Unggul Nusantara
    (
        r"""\`\`\`
PETA PERSEBARAN VARIETAS UNGGUL UTAMA NUSANTARA:
┌─────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ VARIETAS RESMI      │ PROFIL UTAMA TANAMAN          │ DAERAH PERSEBARAN UTAMA       │
├─────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ Sigarar Utang       │ Tajuk semi-katai, buah lebat  │ Danau Toba, Gayo, Mandailing  │
│ Andungsari 1 (AS 1) │ Tahan karat daun, buah seragam│ Kawah Ijen, Temanggung, Toraja│
│ Komasti             │ Hasil panen tinggi, tahan PBKo│ Jawa Tengah, Flores Bajawa    │
│ S-795 (Jember)      │ Tajuk tinggi, aroma rempah    │ Toraja, Enrekang, Jawa Timur  │
│ Kopyol              │ Varietas khas dataran Bali    │ Kintamani Bali                │
└─────────────────────┴───────────────────────────────┴───────────────────────────────┘
\`\`\`""",
        r"""| Varietas Resmi Indonesia | Karakter Tanaman & Agronomi | Profil Cita Rasa Khas | Daerah Persebaran Utama |
| :--- | :--- | :--- | :--- |
| **Sigarar Utang** (SK Mentan 2005) | Tajuk semi-katai, sangat adaptif, berbuah sepanjang tahun | Asam sitrus manis, madu, bodi bulat halus | Danau Toba (Lintong), Gayo, Mandailing |
| **Andungsari 1 (AS 1)** | Seleksi Catimor Puslitkoka Jember, tajuk kompak | Rasa rempah manis, keasaman apel malat cerah | Kawah Ijen/Raung, Temanggung, Toraja |
| **Komasti** (Puslitkoka 2013) | Tahan nematoda akar, daun muda hijau mengilap | Bodi sedang, manis gula tebu, bersih | Jawa Tengah, Bali Kintamani, Flores Bajawa |
| **S-795 (Jember)** | Seleksi India galur Kent x Liberika | Aroma bunga herba, manis rempah cengkeh & kayu manis | Toraja, Enrekang, Ketinggian Jawa Barat |
| **Ateng Super & Tim-Tim** | Introduksi Hibrido de Timor berdaun tebal | Bodi tebal pekat, cokelat hitam, rempah bersahaja | Dataran Tinggi Gayo (Aceh Tengah & Bener Meriah) |"""
    ),

    # 12. Fine Robusta
    (
        r"""\`\`\`
SIKLUS TRANSFORMASI MENUJU FINE ROBUSTA:
[Robusta Tradisional] Petik Asal Campur ➔ Jemur Tanah ➔ Biji Hitam/Jamur ➔ Nilai Jual Rendah
        │ (Intervensi Standar CQI Q Processing)
        ▼
[Fine Robusta] Petik Merah 100% ➔ Rambang Apung ➔ Jemur Raised Bed ➔ Rasa Cokelat Manis Bersih
\`\`\`""",
        r"""> ☕ **Transformasi Menuju Fine Robusta (CQI Quality Standard):**
>
> * **Praktik Asalan Tradisional:**  
>   Petik campur buah hitam/hijau → Penjemuran di lantai tanah lembap → Biji terkontaminasi jamur tanah → Rasa ban terbakar & astringent tajam → Nilai jual komoditas terendah.
>
> * **Standar Emas Fine Robusta:**  
>   Petik merah selektif 100% matang → Sortasi rambang apung floaters → Penjemuran para-para (*raised beds*) terangkat → Biji bersih bebas cacat primer → Menghasilkan cita rasa cokelat murni kental (*dark chocolate fudge*), karamel gula merah, dan aroma rempah harum."""
    ),

    # 13. Label Kemasan
    (
        r"""\`\`\`
ANATOMI LABEL KEMASAN SPECIALTY COFFEE:
┌───────────────────────────────────────────────────────────────┐
│ ORIGIN       : Aceh Gayo, Desa Pantan Musara                  │
│ ELEVASI      : 1.550 – 1.650 MASL                             │
│ VARIETAS     : Ateng Super & Bourbon                          │
│ PRODUCER     : Hendra Maulizar (Avatara Mill)               │
│ PROSES       : Anaerobic Natural (72 Jam)                     │
│ ROAST PROFILE: Light-to-Medium (Filter Roast)                 │
│ TASTING NOTES: Strawberry Jam, Hibiscus, Honeycomb, Sweet Lime│
│ TGL SANGRAI  : 05 September 2026                              │
└───────────────────────────────────────────────────────────────┘
\`\`\`""",
        r"""> 🏷️ **Anatomi Label Kemasan Specialty Coffee yang Transparan:**
>
> * **ORIGIN / WILAYAH:** Aceh Gayo, Desa Pantan Musara  
> * **ELEVASI KEBUN:** 1.550 – 1.650 mdpl (MASL)  
> * **VARIETAS BIBIT:** Ateng Super & Bourbon  
> * **PRODUSER / MILL:** Hendra Maulizar (Avatara Mill)  
> * **METODE PASCAPANEN:** Anaerobic Natural (72 Jam)  
> * **PROFIL ROASTING:** Light-to-Medium (Filter Roast)  
> * **TASTING NOTES:** Strawberry Jam, Hibiscus, Honeycomb, Sweet Lime  
> * **TANGGAL SANGRAI:** 05 September 2026 *(Selalu periksa tanggal sangrai untuk memastikan masa degassing terbaik!)*"""
    ),

    # 14 & 15. Washed & Natural
    (
        r"""\`\`\`
DIAGRAM ALIR PROSES FULLY WASHED:
[Ceri Merah Pilihan] ➔ [Rambang Apung (Floaters Separation)] ➔ [Mesin Depulper (Kupas Kulit)]
                                                                      │
[Biji Gabah Bersih Kering 11%] ◄─ [Jemur di Raised Bed] ◄─ [Cuci Saluran] ◄─ [Tangki Fermentasi Basah]
\`\`\`""",
        r"""[DIAGRAM:processing-comparison]"""
    ),
    (
        r"""\`\`\`
DIAGRAM ALIR PROSES NATURAL:
[Ceri Merah Petik Pilihan] ➔ [Sortasi Meja Rambang] ➔ [Penjemuran Ceri Utuh di Raised Bed (20-30 Hari)]
                                                                  │
[Green Bean Natural Beraroma Berry] ◄─ [Mesin Dry Huller Kupas Kulit Kering] ◄─ [Pengecekan Moisture 11%]
\`\`\`""",
        r"""> ☀️ **Alur Bioproses Natural / Dry Process:**  
> `Petik Merah Optimal` → `Sortasi Rambang Air (Floaters)` → `Penjemuran Ceri Utuh di Para-para Terangkat (20–30 Hari)` → `Pengecekan Kadar Air 10.5%–11.5%` → `Hulling Kering Kupas Kulit Buah & Cangkang` → `Green Bean Siap Sangrai`"""
    ),

    # 16. Spektrum Honey
    (
        r"""\`\`\`
SPEKTRUM TINGKATAN HONEY PROCESS:
┌──────────────┬──────────────────┬────────────────────┬─────────────────────┐
│ Tipe Honey   │ Sisa Mucilage    │ Waktu & Kondisi    │ Profil Rasa Cangkir │
├──────────────┼──────────────────┼────────────────────┼─────────────────────┤
│ White Honey  │ 10% - 15%        │ 7 - 10 hari        │ Sangat clean, asam  │
│              │ (hampir bersih)  │ (sinar matahari penuh)│ cerah mirip washed│
├──────────────┼──────────────────┼────────────────────┼─────────────────────┤
│ Yellow Honey │ 25% - 50%        │ 10 - 14 hari       │ Manis floral, asam  │
│              │ (lapisan sedang) │ (sinar matahari penuh)│ aprikot segar     │
├──────────────┼──────────────────┼────────────────────┼─────────────────────┤
│ Red Honey    │ 50% - 75%        │ 14 - 18 hari       │ Bodi sedang bundar, │
│              │ (lapisan tebal)  │ (naungan teduh)    │ rasa selai persik   │
├──────────────┼──────────────────┼────────────────────┼─────────────────────┤
│ Black Honey  │ 100%             │ 20 - 30 hari       │ Bodi sangat kental, │
│              │ (getah utuh)     │ (tertutup terpal)  │ manis molase anggur │
└──────────────┴──────────────────┴────────────────────┴─────────────────────┘
\`\`\`""",
        r"""| Tipe Honey Process | Sisa Musilase Menempel | Durasi & Kondisi Penjemuran | Karakter Profil Sensorik Cangkir |
| :--- | :--- | :--- | :--- |
| **White Honey** | 10% – 15% (hampir bersih) | 7 – 10 hari (terik matahari penuh) | Sangat bersih (*clean cup*), keasaman cerah mirip washed |
| **Yellow Honey** | 25% – 50% (lapisan sedang) | 10 – 14 hari (terik matahari langsung) | Manis floral madu ringan, asam buah aprikot segar |
| **Red Honey** | 50% – 75% (lapisan tebal) | 14 – 18 hari (teduh parsial beratap) | Bodi sedang bundar, rasa selai persik & karamel matang |
| **Black Honey** | Hampir 100% (getah utuh) | 20 – 30 hari (naungan terpal bertahap) | Bodi sangat kental, rasa manis molase, anggur hitam |"""
    ),

    # 17. Perbandingan Kadar Air Hulling Giling Basah
    (
        r"""\`\`\`
PERBANDINGAN KADAR AIR HULLING:
Standard Dunia (Washed/Natural): Jemur Gabah s/d 11% ➔ Kupas Parchment (Dry Hulling)
Giling Basah (Wet Hulled):      Jemur Gabah s/d 30-35% ➔ KUPAS BASAH (Wet Hulling) ➔ Jemur Green Bean Bebas
\`\`\`""",
        r"""| Parameter Pemrosesan | Standar Dunia (Washed / Natural) | Tradisi Nusantara Giling Basah (Wet-Hulled) |
| :--- | :--- | :--- |
| **Kadar Air Saat Kulit Tanduk Dikupas** | Dijemur hingga kering tuntas: **10.5% – 11.5%** | Dikupas saat gabah masih basah liat: **30% – 40%** |
| **Kondisi Biji Pasca Pengupasan** | Tetap terbungkus parchment hingga siap kirim | Biji hijau telanjang langsung dijemur di bawah matahari |
| **Warna Fisik Green Bean** | Hijau pucat keemasan (*pale jade*) | Hijau tua kebiruan pekat (*deep bluish-green*) |
| **Profil Sensorik Khas** | Keasaman cerah berkilau, jernih (*clean*) | Bodi sangat pekat kental, rempah herba, aroma tembakau |"""
    ),

    # 18. Tangki Anaerobik
    (
        r"""\`\`\`
ILUSTRASI TANGKI FERMENTASI ANAEROBIK MODERN:
             ┌─────────────────────────┐
             │ Katup Airlock 1-Arah     │ ➔ Gas CO2 keluar bebas, oksigen dilarang masuk
             └────────────┬────────────┘
     Gas CO2 Bertekanan   │
┌─────────────────────────▼─────────────────────────┐
│ TANGKI STAINLESS STEEL / FOOD-GRADE TIGHT SEAL    │
│ • Ceri kopi utuh / biji gabah terendam lendir    │
│ • Ragi (yeast) & bakteri asam laktat mendominasi  │
│ • Terbentuk ester aroma buah tropis ekstrem       │
│ • Sensor digital: Pantau suhu (18°C) & pH (4.0)   │
└───────────────────────────────────────────────────┘
\`\`\`""",
        r"""![Tangki Stainless Steel Fermentasi Anaerobik Terkontrol](https://images.unsplash.com/photo-1574360773950-6a2347209703?w=1200&auto=format&fit=crop&q=80)

> 🔬 **Struktur Tangki Bioproses Fermentasi Anaerobik Terkontrol:**
>
> * **Katup Airlock Satu-Arah (One-Way Degassing Valve):**  
>   Membiarkan gas karbon dioksida ($\text{CO}_2$) hasil respirasi ragi keluar leluasa, namun mengunci rapat oksigen atmosfer agar tidak masuk.
>
> * **Mikrobiologi Terkendali (Controlled Microbiology):**  
>   Lingkungan tanpa oksigen menekan bakteri pembusuk aerobik dan memicu kerja enzimatis ragi (*Saccharomyces cerevisiae*) serta bakteri asam laktat untuk mensintesis ester buah tropis unik (nangka, mangga, markisa).
>
> * **Pengawasan Sensorik Real-Time:**  
>   Suhu tangki dijaga dingin ($16^\circ\text{C} - 19^\circ\text{C}$) dan derajat keasaman (pH) dipantau agar tidak turun di bawah ambang bahaya asam cuka (pH 3.8)."""
    ),

    # 19. Tiga Mekanisme Transfer Panas
    (
        r"""\`\`\`
TIGA MEKANISME TRANSFER PANAS DI DRUM ROASTER:
1. KONDUKSI ➔ Biji menyentuh dinding drum besi baja panas secara fisik.
2. KONVEKSI ➔ Aliran udara panas (airflow) ditarik melintasi celah butiran biji.
3. RADIASI  ➔ Gelombang elektromagnetik panas dari burner pemanas & dinding drum.
\`\`\`""",
        r"""| Mekanisme Transfer Panas | Sumber Energi di Drum Roaster | Pengaruh Terhadap Pematangan Biji |
| :--- | :--- | :--- |
| **Konduksi (Sentuhan Langsung)** | Dinding logam silinder drum dan gesekan antar biji | Mematangkan lapisan luar biji kopi; jika berlebih memicu cacat gosong *facing/scorching* |
| **Konveksi (Aliran Udara Panas)** | Hawa panas dihisap exhaust fan melintasi tumpukan biji | Menembus ke bagian inti dalam biji, menguapkan air secara merata |
| **Radiasi (Pancaran Gelombang)** | Panel burner inframerah dan keramik pemanas | Mentransfer energi termal tingkat molekuler dari jarak jauh |"""
    ),

    # 20. Kurva Roasting
    (
        r"""\`\`\`
KURVA TIMELINE ROASTING STANDAR:
Suhu (°C)
210°C ────────────────────────────────────────────────────────── [ DROP / FINISH ]
                                                   / (Fase Development 15-20%)
196°C ────────────────────────────────── [ FIRST CRACK ] (Pop! Pop!)
                                       / 
160°C ─────────────── [ YELLOWING / MAILLARD ] (Aroma roti panggang, warna pirang)
                    /
 95°C ─── [ TURNING POINT ] (Suhu biji menyerap panas drum)
\`\`\`""",
        r"""[DIAGRAM:roast-curve]"""
    ),

    # 21. Spektrum Tingkat Sangrai
    (
        r"""\`\`\`
SPEKTRUM TINGKAT SANGRAI & PERGESERAN RASA:
[ LIGHT ROAST ] ─────────────── [ MEDIUM ROAST ] ─────────────── [ DARK ROAST ]
Asam Buah Alami Tinggi            Keseimbangan Asam-Manis-Pahit     Pahit Arang Terbakar Dominan
Body Ringan Teh                   Body Bulat Halus                  Body Tebal Berminyak
Aroma Bunga & Buah Origin         Aroma Cokelat & Karamel           Aroma Asap & Pahit Gosong
\`\`\`""",
        r"""| Parameter Kualitas | Light Roast (Sangrai Muda) | Medium Roast (Sangrai Sedang) | Dark Roast (Sangrai Gelap) |
| :--- | :--- | :--- | :--- |
| **Warna & Permukaan Biji** | Cokelat kayu manis, kering tanpa minyak | Cokelat susu keemasan, permukaan kering kesat | Hitam berkilau lapisan minyak (*surface oil*) |
| **Karakter Rasa Asam** | Sangat cerah, keasaman buah alami terjaga | Asam lembut seimbang, bulat halus | Keasaman habis terbakar total |
| **Karakter Rasa Manis & Pahit** | Manis floral madu ringan, rasa pahit minimal | Manis karamel & cokelat susu optimal | Pahit pekat dark chocolate, arang, & asap |
| **Rekomendasi Metode Seduh** | V60, Chemex, Aeropress (Filter Manual) | Espresso Modern, Americano, Filter Seimbang | Espresso Tradisional, Kopi Susu Aren |"""
    ),

    # 22. Kinetika Degassing
    (
        r"""\`\`\`
KINETIKA EMISI GAS CO2 & FASE KENIKMATAN TERBAIK (RESTING TIMELINE):
Emisi Gas CO2 (Tinggi)
▲
│ █ 
│ ███ ➔ Fase Terlalu Segar (< 3 Hari): Rasa kering bersoda, ekstraksi terganggu gas
│ █████
│ ████████ ➔ [ JENDELA RASA TERBAIK / PEAK FLAVOR WINDOW: HARI KE-7 S/D KE-28 ]
│ ███████████   Gas stabil, rasa manis dan aroma floral terbuka maksimal
│ ████████████████ ➔ Fase Oksidasi (> 45 Hari): Biji mulai kehilangan aroma volatil
└─────────────────────────────────────────────────────────────► Waktu Simpan (Hari)
\`\`\`""",
        r"""> ⏱️ **Kinetika Pelepasan Gas $\text{CO}_2$ & Jendela Rasa Terbaik (Resting Timeline):**
>
> * **Hari 0 s/d 3 (Fase Terlalu Segar):**  
>   Biji melepaskan gas $\text{CO}_2$ bertekanan tinggi. Saat diseduh, gelembung gas menghalangi kontak air dengan bubuk kopi (*channeling* parah); rasa cenderung bersoda tajam (*metallic/dry*).
>
> * **Hari 7 s/d 28 (Jendela Kenikmatan Puncak / PEAK FLAVOR WINDOW):**  
>   Tekanan gas internal telah stabil. Struktur pori biji terbuka sempurna untuk ekstraksi air; seluruh nada rasa manis, asam buah cerah, dan aroma floral mekar optimal.
>
> * **Hari 45+ (Fase Penurunan Oksidasi):**  
>   Senyawa volatil aromatik mulai teroksidasi oleh udara; cita rasa berangsur datar (*flat*) menuju tengik (*stale*)."""
    ),

    # 23. Komposisi Secangkir Kopi
    (
        r"""\`\`\`
KOMPOSISI CAIRAN SECANGKIR KOPI:
┌─────────────────────────────────────────────────────────────┐
│ AIR SEDUH (SOLVENT / PELARUT)                               │
│ [ 98.5% – 98.8% ]                                           │
│ Molekul H2O + Kation Ca2+, Mg2+, Anion Bikarbonat HCO3-     │
├─────────────────────────────────────────────────────────────┤
│ SENYAWA KOPI TERLARUT (TDS / SOLUTE)                        │
│ [ Hanya 1.2% – 1.5% ]                                       │
│ Asam organik, kafein, lipid, trigonelin, sukrosa, karamel   │
└─────────────────────────────────────────────────────────────┘
\`\`\`""",
        r"""> ☕ **Komposisi Kimiawi Cairan Secangkir Kopi Seduh:**
>
> * **98.5% – 98.8% AIR SEDUH (Pelarut / Solvent):**  
>   Molekul $\text{H}_2\text{O}$ murni yang membawa muatan ionik mineral kation Magnesium ($\text{Mg}^{2+}$), Kalsium ($\text{Ca}^{2+}$), dan anion penyangga Bikarbonat ($\text{HCO}_3^-$).
>
> * **Hanya 1.2% – 1.5% SENYAWA TERLARUT KOPI (Solute / TDS):**  
>   Asam sitrat, asam malat, kafein murni, minyak lipid aromatik, trigonelin, karamel sukrosa, dan melanoidin."""
    ),

    # 24. Standar Air SCA
    (
        r"""\`\`\`
STANDAR EMAS AIR SEDUH KOPI SCA:
┌───────────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Parameter Air                 │ Rentang yang Diterima   │ Target Emas Ideal (SCA) │
├───────────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Bau & Kejernihan              │ Bebas bau, jernih total │ Bebas klorin (0 mg/L)   │
│ Total Dissolved Solids (TDS)  │ 75 – 250 mg/L (ppm)     │ 150 mg/L (ppm)          │
│ Total Hardness (Kekerasan)    │ 50 – 175 ppm CaCO3      │ 68 mg/L (~4° dGH)       │
│ Alkalinity (Kapasitas Buffer) │ 40 – 75 ppm CaCO3       │ 40 mg/L (~2.2° dKH)     │
│ Tingkat Keasaman (pH)         │ 6.5 – 8.0               │ 7.0 (Netral Sempurna)   │
│ Natrium (Sodium / Na+)        │ 5 – 30 mg/L             │ 10 mg/L                 │
└───────────────────────────────┴─────────────────────────┴─────────────────────────┘
\`\`\`""",
        r"""[DIAGRAM:water-chemistry]"""
    ),

    # 25. Magnesium vs Kalsium
    (
        r"""\`\`\`
PERBANDINGAN STRUKTUR DUA KATION EKSTRAKTOR KOPI:
┌───────────────────────────────┬───────────────────────────────┐
│ KATION MAGNESIUM (Mg2+)       │ KATION KALSIUM (Ca2+)         │
├───────────────────────────────┼───────────────────────────────┤
│ Jari-jari ionik kecil (0.72 Å)│ Jari-jari ionik besar (1.00 Å)│
│ Densitas muatan sangat padat  │ Densitas muatan lebih longgar │
│ Unggul menarik senyawa buah,  │ Unggul menarik senyawa body,  │
│ asam sitrat, floral, oksigen  │ gula karamel, dan cokelat     │
│ SANGAT RAMAH MESIN ESPRESSO   │ BERISIKO MEMBENTUK KERAK      │
│ (Kelarutan garamnya tinggi)   │ (Membentuk batu kapur CaCO3)  │
└───────────────────────────────┴───────────────────────────────┘
\`\`\`""",
        r"""| Parameter Kation Logam | Kation Magnesium ($\text{Mg}^{2+}$) | Kation Kalsium ($\text{Ca}^{2+}$) |
| :--- | :--- | :--- |
| **Jari-Jari Ionik** | Kecil ($0.72\text{ \AA}$) | Lebih besar ($1.00\text{ \AA}$) |
| **Kerapatan Muatan Listrik** | Sangat padat berkonsentrasi tinggi | Lebih renggang terdistribusi |
| **Daya Ikat Senyawa Rasa** | Kuat mengikat senyawa asam buah sitrat/malat & nada floral | Kuat mengikat senyawa bodi, gula karamel, & cokelat |
| **Keamanan untuk Mesin Espresso** | **Sangat Ramah Mesin** (Garam magnesium sangat mudah larut) | **Waspada Kerak Kapur** (Membentuk endapan batu kapur $\text{CaCO}_3$) |"""
    ),

    # 26. Skema Instalasi Filtrasi Air
    (
        r"""\`\`\`
SKEMA INSTALASI FILTRASI AIR LENGKAP COFFEE SHOP:
[ AIR KRAN / SUMUR ]
        │
        ▼
[ 1. FILTER SEDIMEN SPUN 5 MICRON ] ➔ Menyaring pasir, lumpur pipa, dan karat
        │
        ▼
[ 2. FILTER KARBON BLOK AKTIF (CTO) ] ➔ Menyerap klorin, kaporit, bau, & rasa kimiawi
        │
        ▼
[ 3. CABANG SISTEM AIR: ]
        ├───► [ SISTEM REVERSE OSMOSIS (RO) ] ➔ Turunkan TDS ekstrem ke 5-10 ppm
        │             │
        │             ▼
        │     [ CARTRIDGE REMINERALISASI ] ➔ Injeksi Mg2+ & Buffer (Target: 130-150 ppm)
        │             │
        │             ▼
        │     [ KE MESIN ESPRESSO & WATER BOILER ] (Bebas kerak, ekstraksi sempurna)
        │
        └───► [ KE WASTAFEL CUCI & TOILET ] (Air bersih standar sanitasi)
\`\`\`""",
        r"""> 🚰 **Skema Alur Sistem Filtrasi Air Bertingkat Kedai Kopi:**
>
> 1. **Air Sumber (Kran / PDAM / Sumur Bor)**  
>    Masuk ke sistem pengolahan awal.
>
> 2. **Tahap 1 • Filter Sedimen Spun (5 Micron):**  
>    Menyaring partikel fisik tersuspensi, pasir pipa ledeng, lumut, dan karat besi.
>
> 3. **Tahap 2 • Filter Karbon Blok Aktif (CTO Block):**  
>    Menyerap senyawa klorin, kaporit, pestisida, dan bau kimiawi asing yang merusak rasa kopi.
>
> 4. **Tahap 3 • Membran Reverse Osmosis (RO) & Remineralisasi:**  
>    Air dimurnikan hingga bebas mineral keras, lalu diinjeksikan kembali konsentrat Magnesium & Bikarbonat murni pada rasio ideal SCA (130–150 ppm) sebelum dialirkan ke mesin espresso komersial."""
    ),

    # 27. Anatomi Persepsi Flavor
    (
        r"""\`\`\`
ANATOMI PERSEPSI FLAVOR:
┌─────────────────────────────────────────────────────────────┐
│ FLAVOR (CITA RASA LENGKAP) = TASTE (LIDAH) + AROMA (HIDUNG) │
└───────────────────────────────┬─────────────────────────────┘
                                │
        ┌───────────────────────┴───────────────────────┐
        ▼                                               ▼
[ GUSTASI / TASTE (LIDAH) ]                 [ OLFAKSI / AROMA (HIDUNG) ]
Hanya 5 Rasa Dasar:                         Ribuan Senyawa Kimia Volatil:
1. Manis (Reseptor Gula T1R2/T1R3)          1. Ortronasal (Hirup via cuping hidung)
2. Asam (Ion H+ / Proton Keasaman)          2. Retronasal (Uap naik dari tenggorokan)
3. Asin (Ion Na+)                           • Melati, stroberi, cokelat, rempah, dll.
4. Pahit (Reseptor T2Rs)
5. Umami (Glutamat)
\`\`\`""",
        r"""| Sistem Sensorik Tubuh | Organ & Reseptor | Karakter yang Dideteksi |
| :--- | :--- | :--- |
| **Gustasi (Rasa di Lidah)** | Kuncup Pengecap Lidah (Taste Buds) | Hanya 5 rasa dasar: **Manis, Asam, Asin, Pahit, Umami** |
| **Olveksi (Aroma di Hidung)** | Epitelium Rongga Hidung (Ortronasal & Retronasal) | **Ribuan senyawa aromatik volatil**: Melati, persik, vanila, kacang sangrai |
| **Trigeminal (Tekstur Mulut)** | Saraf Sensorik Rongga Mulut (Trigeminal Nerve) | Sensasi fisik: Suhu panas/dingin, kekentalan (*viscosity*), kesat astringent |"""
    ),

    # 28. Timeline Cupping
    (
        r"""\`\`\`
TIMELINE PROTOKOL CUPPING SCA (MENIT KE MENIT):
00:00 ➔ Tuang air panas 93°C ke dalam mangkok berisi 8.25g kopi (Rasio 1:18.18)
00:00 s/d 04:00 ➔ Biarkan ekstraksi immersi tenang, terbentuk kerak bubuk mengapung (Crust)
04:00 ➔ RITUAL BREAKING THE CRUST: Dorong kerak 3x dengan sendok, hirup aroma basah sedalam-dalamnya
04:30 ➔ SKIMMING: Bersihkan seluruh sisa busa dan partikel mengapung dengan 2 sendok cupping
08:00 – 10:00 ➔ Suhu turun ke ~70°C: Mulai SLURP pertama (Evaluasi Flavor & Aftertaste)
10:00 – 15:00 ➔ Suhu turun ke ~60°C: SLURP kedua (Evaluasi Acidity, Body, & Balance)
15:00 – 25:00 ➔ Suhu dingin ~35°C: SLURP ketiga (Evaluasi Clean Cup, Sweetness, Uniformity, Overall)
\`\`\`""",
        r"""| Waktu Menit | Tahapan Protokol Cupping Resmi SCA | Tindakan Teknis & Aspek Evaluasi |
| :--- | :--- | :--- |
| **00:00** | Penuangan Air Panas 93°C | Tuang air panas ke 8.25g bubuk kopi (Rasio 1:18.18); mulai ekstraksi immersi |
| **00:00 – 04:00** | Pembentukan Kerak (*Crust*) | Diamkan tenang tanpa diaduk; partikel bubuk kopi naik membentuk lapisan pelindung |
| **04:00** | **Ritual Breaking the Crust** | Dorong kerak bubuk 3x dengan punggung sendok; hirup uap aroma basah sedalamnya |
| **04:30 – 05:00** | Pembersihan Busa (*Skimming*) | Ambil sisa busa dan partikel terapung dengan 2 sendok cupping secara melingkar |
| **08:00 – 10:00** | **Slurp Panas Pertama (~70°C)** | Evaluasi cita rasa dominan (*Flavor*) dan panjang jejak rasa di mulut (*Aftertaste*) |
| **10:00 – 15:00** | **Slurp Hangat Kedua (~60°C)** | Evaluasi kejernihan rasa asam (*Acidity*), ketebalan tekstur (*Body*), dan *Balance* |
| **15:00 – 25:00** | **Slurp Dingin Ketiga (~35°C)** | Uji kemurnian cangkir (*Clean Cup*), rasa manis alami, keseragaman (*Uniformity*) |"""
    ),

    # 29. Hirarki Roda Rasa
    (
        r"""\`\`\`
STRUKTUR TIGA TINGKATAN RODA RASA SCA:
[ LINGKARAN DALAM ] ──────────────► [ LINGKARAN TENGAH ] ──────────────► [ LINGKARAN LUAR ]
Kategori Primer (Umum)               Sub-Kategori                         Deskriptor Spesifik (Mikro)
Contoh: FRUITY ────────────────────► CITRUS FRUIT ─────────────────────► GRAPEFRUIT, LEMON, ORANGE
Contoh: FLORAL ────────────────────► BLACK TEA ────────────────────────► JASMINE, CHAMOMILE, ROSE
Contoh: SWEET ─────────────────────► BROWN SUGAR ──────────────────────► CARAMEL, HONEY, MOLASSES
\`\`\`""",
        r"""> 🎨 **Struktur 3 Tingkatan Hierarki Roda Rasa Kopi SCA & WCR:**
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
>     ↳ **Tingkat 3:** `Caramel`, `Honey`, `Molasses`"""
    ),

    # 30. Formulir SCA
    (
        r"""\`\`\`
ANATOMI FORMULIR PENILAIAN CUPPING RESMI SCA:
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ ATRIBUT SKALER (Skor 6.00 s/d 9.75)  │ ATRIBUT INTEGRITAS (Maksimal 10 Poin)│
├──────────────────────────────────────┼──────────────────────────────────────┤
│ 1. Fragrance / Aroma (Kering & Basah)│ 7. Uniformity (2 poin x 5 mangkok)   │
│ 2. Flavor (Cita Rasa di Mulut)       │ 8. Clean Cup  (2 poin x 5 mangkok)   │
│ 3. Aftertaste (Panjang Jejak Rasa)   │ 9. Sweetness  (2 poin x 5 mangkok)   │
│ 4. Acidity (Kualitas & Kecerahan Asam)──────────────────────────────────────│
│ 5. Body (Ketebalan & Kualitas Tekstur│ 10. OVERALL (Penilaian Holistik Juri)│
│ 6. Balance (Harmoni Antar Unsur)     │                                      │
└──────────────────────────────────────┴──────────────────────────────────────┘
\`\`\`""",
        r"""| Atribut Skaler Kualitas (Skor 6.00 – 9.75) | Atribut Integritas Mutu (Maksimal 10 Poin) |
| :--- | :--- |
| 1. **Fragrance / Aroma** (Uji Kering & Basah) | 7. **Uniformity** (Keseragaman 5 mangkok: 2 poin/mangkok) |
| 2. **Flavor** (Kombinasi rasa & aroma di mulut) | 8. **Clean Cup** (Kemurnian tanpa cacat: 2 poin/mangkok) |
| 3. **Aftertaste** (Panjang & kebersihan jejak rasa) | 9. **Sweetness** (Kemanisan alami: 2 poin/mangkok) |
| 4. **Acidity** (Kualitas kecerahan rasa asam) | 10. **Overall** (Penilaian holistik juri Q Grader) |
| 5. **Body** (Ketebalan viskositas dan kelembutan) | *Ambang batas Specialty Grade: Skor Total &ge; 80.00* |
| 6. **Balance** (Harmoni keseimbangan semua unsur) | *Skor 85+: Excellent • Skor 90+: Outstanding* |"""
    ),

    # 31. Rumus Pengurangan Defek
    (
        r"""\`\`\`
RUMUS PENGURANGAN DEFEK:
Total Skor Akhir = Skor Mentah – (Jumlah Mangkok Cacat x Nilai Penalti 2 atau 4)
\`\`\`""",
        r"""> ⚖️ **Rumus Perhitungan Penalti Cacat Cangkir Cupping Resmi:**
>
> $$\text{Total Skor Akhir} = \text{Skor Mentah Kumulatif} - (\text{Jumlah Mangkok Cacat} \times \text{Nilai Penalti 2 atau 4})$$
>
> * **Taint (Cacat Ringan / Noda Rasa):** Pengurangan **2 Poin** per mangkok terdampak.
> * **Fault (Cacat Berat / Rusak Total):** Pengurangan **4 Poin** per mangkok terdampak (misalnya rasa kapang busuk atau bahan kimia)."""
    )
]

applied_count = 0
for target, replacement in REPLACEMENTS:
    if target in content:
        content = content.replace(target, replacement)
        applied_count += 1
    else:
        print(f"Warning: Could not find target:\n{target[:60]}...")

with open("lib/data/seedData.ts", "w", encoding="utf-8") as fp:
    fp.write(content)

print(f"Successfully replaced {applied_count}/{len(REPLACEMENTS)} ASCII blocks in lib/data/seedData.ts!")
