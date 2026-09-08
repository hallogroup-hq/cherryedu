import re

print("Starting append_postharvest_extra.py...")

postharvest_extra_lessons = [
    {
        "id": "les-p1-3",
        "module_id": "mod-p1",
        "title": "Klon Hibrida Lokal: Tim-Tim, Sigarar Utang, Ateng Super, dan Ketahanan Karat Daun (CLR)",
        "duration": 15,
        "content": """# Klon Hibrida Lokal: Tim-Tim, Sigarar Utang, dan Ketahanan Karat Daun

Sejarah perkebunan kopi Indonesia diwarnai oleh perjuangan melawan jamur karat daun (*Coffee Leaf Rust / Hemileia vastatrix*) yang memusnahkan perkebunan Typica Nusantara pada akhir abad ke-19. Dari krisis tersebut, lahirlah varietas hibrida lokal yang kini menjadi identitas kebanggaan Indonesia.

![Pohon Kopi Varietas Hibrida Sigarar Utang Sarat Buah Merah](https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Morfologi Tanaman Kopi Arabika Varietas Lokal Tahan Hama — Sumber / Kredit: Unsplash / Indonesian Coffee and Cocoa Research Institute (ICCRI)*

---

### 1. Hibrido de Timor (HdT) & Varietas Tim-Tim

* Pada tahun 1917 di Pulau Timor, ditemukan tanaman mutasi alami persilangan spontan antara *Coffea arabica* (44 kromosom) dan *Coffea canephora / Robusta* (22 kromosom). Tanaman ini mewarisi ketahanan genetik Robusta terhadap karat daun, namun tetap mempertahankan rasa halus Arabika.
* Di dataran tinggi Aceh Gayo, keturunan HdT dibudidayakan secara luas dengan nama **Tim-Tim**. Karakter rasanya tebal, kaya rempah (*herbal/earthy*), dan memiliki bodi mantap.

---

### 2. Sigarar Utang (Varietas "Pembayar Utang")

* Dilepas resmi oleh Kementerian Pertanian dari Sumatera Utara (Lintong Ni Huta). Dinamakan *Sigarar Utang* dalam bahasa Batak karena sifatnya yang berbuah cepat dan sangat lebat sehingga petani dapat melunasi utang modal kebun dalam waktu singkat.
* Pohonnya bertipe kerdil (*semi-dwarf*) sehingga memudahkan pemetikan, dengan buah ceri besar dan kandungan gula lendir mucilage yang manis pekat.
"""
    },
    {
        "id": "les-p2-3",
        "module_id": "mod-p2",
        "title": "Kimia Tanah Vulkanik: Unsur Hara Makro/Mikro (Nitrogen, Kalium, Fosfor) dan Prekursor Gula",
        "duration": 15,
        "content": """# Kimia Tanah Vulkanik: Mengapa Kopi Kepulauan Indonesia Begitu Kaya Rasa?

Indonesia berada tepat di jalur Cincin Api Pasifik (*Ring of Fire*). Abu vulkanik dari ratusan gunung berapi aktif memberikan berkah kesuburan mineral tanah yang tak tertandingi di dunia pertanian kopi.

![Pemandangan Lereng Gunung Berapi dan Kebun Kopi Dataran Tinggi](https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Tanah Andosol Vulkanik Subur di Lereng Dataran Tinggi Nusantara — Sumber / Kredit: Unsplash / Agricultural Geology*

---

### 1. Peran Mineral Tanah Andosol Vulkanik

Tanah vulkanik (Andosol) memiliki struktur remah berpori yang mampu menyimpan cadangan air hujan sekaligus memiliki drainase yang sangat baik:
* **Kalium (K)**: Mineral kunci pembentuk glukosa dan sukrosa selama fotosintesis. Kalium yang melimpah pada abu vulkanik menghasilkan ceri kopi dengan nilai Brix kemanisan alami tinggi (20°–24° Brix).
* **Fosfor (P)**: Berperan dalam transfer energi sel (ATP) dan pembentukan asam fosfat organik. Inilah yang menciptakan sensasi kilau keasaman yang mewah (*sparkling effervescence*) pada kopi-kopi seperti Kintamani Bali dan Kerinci.
* **Bahan Organik Humus**: Lapisan daun pohon pelindung yang membusuk secara alami menyediakan nitrogen organik pelepasan lambat (*slow release*) tanpa pupuk sintetis kimiawi.
"""
    },
    {
        "id": "les-p3-3",
        "module_id": "mod-p3",
        "title": "Protokol Pemisahan Rambang (Floatation Sorting) & Pemilahan Buah Rusak di Kebun",
        "duration": 14,
        "content": """# Protokol Pemisahan Rambang (Floatation Sorting) di Stasiun Basah

Setelah pemetikan ceri merah selektif di kebun selesai, tahap pemrosesan pertama yang paling krusial di stasiun basah (*wet mill*) adalah **Uji Rambang Air (Floatation Tank)**.

![Pemisahan Buah Kopi Ceri Menggunakan Bak Flotasi Air Mengalir](https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pemisahan Ceri Kopi Padat Bernas dari Ceri Kopong Cacat Berbasis Gravitasi Air — Sumber / Kredit: Unsplash / Specialty Wet Mill Operations*

---

### 1. Prinsip Hidrostatis Uji Rambang

Ceri kopi segar yang baru dipanen dimasukkan ke dalam bak air besar:
* **Ceri Tenggelam (*Sinkers / Ceri Bernas*)**: Ceri yang matang sempurna memiliki massa jenis lebih besar dari air (> 1.0 g/cm³). Embrio biji di dalamnya padat berisi nutrisi dan gula. Hanya ceri tenggelam inilah yang diproses menjadi grade Specialty Coffee!
* **Ceri Mengapung (*Floaters / Ceri Rambang*)**: Ceri yang mengambang di permukaan air memiliki rongga udara di dalamnya. Penyebabnya adalah serangan hama penggerek buah kopi (PBKo / *Hypothenemus hampei*), buah layu kering di dahan, atau biji kopong. Ceri floaters harus segera diserok dan dipisahkan menjadi grade komersial biasa.
"""
    },
    {
        "id": "les-p4-3",
        "module_id": "mod-p4",
        "title": "Proses Natural & Honey: Yellow, Red, Black Honey dan Dinamika Ketebalan Mucilage",
        "duration": 15,
        "content": """# Proses Natural & Honey: Seni Memanfaatkan Lapisan Manis Mucilage

Pada metode pengolahan kering (*Dry Process*) dan semi-kering (*Honey Process*), lapisan lendir berdaging manis (*mucilage*) dibiarkan menempel pada kulit tanduk selama proses penjemuran di bawah sinar matahari.

![Penjemuran Kopi Proses Honey dan Natural di Atas Meja Pengeringan](https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Tahapan Warna Penjemuran Kopi Honey dari Kuning hingga Hitam Karamel — Sumber / Kredit: Unsplash / Specialty Coffee Processing*

---

### 1. Perbedaan Spektrum Kopi Honey

Nama "Honey" sama sekali tidak melibatkan madu lebah asli, melainkan merujuk pada tekstur lengket mucilage manis seperti madu:
* **Yellow Honey (25% Mucilage)**: Sebagian besar lendir dikupas mesin demucilager. Dijemur di bawah sinar matahari langsung selama 8–10 hari. Menghasilkan rasa asam buah cerah segar dengan sedikit sentuhan manis bunga.
* **Red Honey (50% Mucilage)**: Setengah lendir disisakan. Dijemur di area sedikit teduh selama 12–15 hari. Karakter rasa buah merah manis seperti stroberi dan apel merah.
* **Black Honey (100% Mucilage Utuh)**: Seluruh lendir disisakan tanpa dicuci. Dijemur di bawah naungan jaring peneduh (*paranet*) selama 20–25 hari. Gula mengalami karamelisasi lambat di atas kulit tanduk, menghasilkan cangkir kopi yang sangat manis kental layaknya selai buah plum hitam dan cokelat karamel.
"""
    },
    {
        "id": "les-p5-3",
        "module_id": "mod-p5",
        "title": "Inokulasi Ragi Terpilih (Saccharomyces cerevisiae) & Teknik Thermal Shock",
        "duration": 15,
        "content": """# Fermentasi Terkendali Modern: Ragi Terpilih dan Thermal Shock

Revolusi mikrobiologi telah mengubah stasiun pasca panen dari tempat penjemuran tradisional menjadi laboratorium bioteknologi presisi tinggi.

![Tangki Fermentasi Terkontrol Stainless Steel Bioreactor](https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Tangki Fermentasi Anaerobik Kedap Oksigen dengan Katup Pengontrol Tekanan — Sumber / Kredit: Unsplash / Post-Harvest Innovation Lab*

---

### 1. Inokulasi Strain Ragi Spesifik (Yeast Inoculation)

Alih-alih mengandalkan ragi liar dari udara sekitar yang tidak terduga, prosesor modern menyuntikkan kultur ragi terisolasi murni:
* **Saccharomyces cerevisiae (Wine Yeast)**: Menghasilkan ester buah (*fruit esters*) berbobot aromatik seperti buah persik (*peach*), markisa, dan bunga mawar.
* **Koji Fermentation (*Aspergillus oryzae*)**: Jamur koji jepang menguraikan makromolekul pati biji kopi menjadi asam amino asam glutamat, menghasilkan sensasi gurih manis (*umami*) dan bodi bulat luar biasa.

---

### 2. Sains di Balik Thermal Shock

Setelah fermentasi hangat (35°C – 40°C) selesai, ceri kopi disiram air es bersuhu 4°C – 8°C secara tiba-tiba (*thermal shock*):
* Perubahan suhu ekstrem secara instan membunuh sel mikroorganisme fermentasi, menghentikan pembusukan asam cuka secara presisi.
* Poros sel kulit tanduk menyusut seketika (*cell contraction*), mengunci senyawa ester dan asam aromatik volatil di dalam inti biji kopi selamanya!
"""
    },
    {
        "id": "les-p6-3",
        "module_id": "mod-p6",
        "title": "Pengemasan Hermetik GrainPro vs Karung Goni: Mencegah Oksidasi dan Menjaga Kadar Air 10–12%",
        "duration": 14,
        "content": """# Pengemasan Hermetik GrainPro vs Karung Goni Tradisional

Perjalanan green bean dari kebun di pelosok Nusantara menuju roastery di kota besar atau pasar ekspor di Eropa memakan waktu berbulan-bulan melintasi samudera lembap dengan suhu kontainer kapal yang berfluktuasi liar.

![Kemasan Kantong Hermetik GrainPro di Dalam Karung Goni Ekspor](https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sistem Pengemasan Ganda Plastik Hermetik Pelindung Kopi Spesialti — Sumber / Kredit: Unsplash / GrainPro Green Coffee Storage*

---

### 1. Bahaya Karung Goni Porous Konvensional

Karung goni berbahan serat rami (*jute bag*) memiliki pori-pori besar yang sangat permeabel terhadap udara:
* Saat kapal melintasi garis khatulistiwa dengan kelembapan udara laut 90%, green bean di dalam karung goni akan menyerap uap air laut (*re-wetting*), memicu bau apek dan penurunan skor cupping hingga 3–5 poin!
* Selain itu, serat minyak bumi yang digunakan dalam pengolahan karung goni sering kali mencemari aroma kopi dengan bau karung (*baggy taint*).

---

### 2. Teknologi Lapisan Hermetik Berpenghalang Gas (*Hermetic Barrier*)

Kantong hermetik modern (seperti *GrainPro* atau *Ecotact*) terbuat dari polietilen multilayer dengan lapisan penghalang gas khusus:
* Menjaga kadar air green bean stabil di 10.5% – 11.5% selama 12 hingga 18 bulan pengiriman.
* Menurunkan konsentrasi oksigen internal hingga di bawah 1% melalui respirasi alami biji, sehingga serangga kumbang bubuk kopi (*coffee borer*) dan jamur mati lemas tanpa pestisida kimiawi!
"""
    }
]

with open('lib/data/paths/postHarvestData.ts', 'r') as f:
    pcontent = f.read()

p_extra_str = []
for les in postharvest_extra_lessons:
    item = f'''  {{
    id: '{les["id"]}',
    module_id: '{les["module_id"]}',
    title: '{les["title"]}',
    content: `{les["content"].strip()}`,
    content_type: 'text',
    duration_minutes: {les["duration"]},
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam {les["title"]} dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  }},'''
    p_extra_str.append(item)

split_marker = 'export const POST_HARVEST_QUIZZES'
if split_marker in pcontent:
    parts = pcontent.split(split_marker)
    last_bracket = parts[0].rfind('];')
    new_first_part = parts[0][:last_bracket] + '\n' + '\n'.join(p_extra_str) + '\n];\n\n'
    pcontent = new_first_part + split_marker + parts[1]
    with open('lib/data/paths/postHarvestData.ts', 'w') as f:
        f.write(pcontent)
    print("Successfully added 6 extra lessons to postHarvestData.ts! Total 18 lessons.")
else:
    print("Error: Could not find split_marker in postHarvestData.ts")

