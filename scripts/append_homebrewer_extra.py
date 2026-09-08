import re

print("Starting append_homebrewer_extra.py...")

homebrewer_extra = [
    {
        "id": "les-h6-2",
        "module_id": "mod-h6",
        "title": "Flat Bottom Dripper Lanjutan: Mengontrol Bypass dan Laju Ekstraksi pada Origami & April Brewer",
        "duration": 14,
        "content": """# Flat Bottom Dripper Lanjutan: Origami, April Brewer, dan Kalita Wave

Berbeda dari dripper kerucut V60 yang memiliki dasar runcing tunggal, dripper flat-bottom (dasar rata) memiliki dasar horizontal dengan multi-lubang pengaliran.

![Koleksi Dripper Seduh Manual Flat-Bottom Origami dan Kalita](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Berbagai Geometri Flat Bottom Dripper untuk Ekstraksi Rata Biji Fermentasi — Sumber / Kredit: Unsplash / Home Brewers Guild*

---

### 1. Keunggulan Geometri Flat-Bottom

* **Bed Kopi Lebih Tipis dan Lebar**: Air seduh melintasi kedalaman bubuk yang seragam dari ujung ke ujung.
* **Mencegah Channelling Tengah**: Tidak ada risiko air hanya menerobos titik tengah seperti pada dripper kerucut jika teknik tuangan belum stabil.
* **Sangat Ramah Biji Fermentasi Buah (Anaerobic / Natural)**: Flat bottom mempertahankan kontak air yang stabil tanpa mengikis keasaman yang berlebihan, menonjolkan rasa manis gula dan bodi cangkir yang bersih.
"""
    },
    {
        "id": "les-h6-3",
        "module_id": "mod-h6",
        "title": "Perbandingan Filter Paper: Bleached vs Unbleached, Porositas Kertas Kalita vs Fast Flow",
        "duration": 14,
        "content": """# Perbandingan Kertas Saring: Bleached vs Unbleached dan Pengaruh Rasa Kertas

Kertas saring (*filter paper*) adalah penghalang utama antara bubuk kopi dan server cangkir Anda. Memilih kertas yang salah dapat mencemari kopi mahal dengan aroma karton basah!

![Kertas Saring Putih Bleached Bergelombang untuk Dripper Flat-Bottom](https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Kertas Saring Putih Oksigen Bersih untuk Menghilangkan Bau Kertas pada Seduhan — Sumber / Kredit: Unsplash / Specialty Brew Papers*

---

### 1. Kertas Putih (Bleached) vs Kertas Cokelat (Unbleached)

* **Kertas Cokelat (*Unbleached / Natural Kraft*)**: Masih mengandung serat lignin kayu mentah. Meskipun dibilas air mendidih 3 kali, kertas cokelat tetap meninggalkan residu rasa kardus basah dan bau kayu lapuk di dalam cangkir!
* **Kertas Putih (*Oxygen Bleached*)**: Dikelantang menggunakan senyawa oksigen murni (bukan klorin beracun). Memiliki residu aroma kertas paling rendah (hampir netral total) dan aman bagi kesehatan serta lingkungan.
"""
    },
    {
        "id": "les-h8-2",
        "module_id": "mod-h8",
        "title": "Picopresso & Espresso Portabel: Dial-In Biji Sangrai Medium, Pre-Infusi Manual, dan Crema 9 Bar",
        "duration": 15,
        "content": """# Picopresso & Espresso Portabel: Presisi 9 Bar di Telapak Tangan

Dahulu, menghasilkan espresso bertekanan 9 bar membutuhkan mesin berbobot puluhan kilogram yang tersambung ke listrik 2.000 Watt. Kini, inovasi alat portabel seperti *Wacaco Picopresso* memungkinkan ekstraksi standar komersial di mana saja.

![Alat Seduh Espresso Portabel Manual Tanpa Listrik Picopresso](https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Ekstraksi Espresso Portabel Presisi Menggunakan Naked Filter Basket — Sumber / Kredit: Unsplash / Portable Coffee Gear*

---

### 1. Rahasia Pre-Infusion Manual pada Picopresso

Pompa piston manual memberikan kendali tak terbatas atas kurva tekanan ekstraksi:
1. **Pre-Infusion 10–12 Detik**: Pompa perlahan 8–10 kali hingga tetesan kopi pertama muncul di bawah basket naked, lalu berhenti sejenak. Biarkan tekanan 2–3 bar membasahi seluruh bubuk kopi hingga mekar sempurna.
2. **Ekstraksi Tekanan Tinggi (Pumping Phase)**: Lanjutkan pompa dengan ritme 1 pompa per detik hingga mencapai target yield 36 gram.
3. *Hasil di Cangkir*: Crema tebal keemasan (*tiger stripes*) dan bodi kental yang setara dengan mesin komersial kafe!
"""
    },
    {
        "id": "les-h8-3",
        "module_id": "mod-h8",
        "title": "Susu Panas Manual Rumahan: Menggunakan French Press & Nanofoamer untuk Tekstur Silky Latte Art",
        "duration": 14,
        "content": """# Susu Panas Manual Rumahan: Menggunakan French Press & Nanofoamer

Anda tidak memerlukan mesin espresso jutaan rupiah hanya untuk membuat latte art yang cantik di rumah.

![Penuangan Latte Art Menggunakan Susu Hasil Pompa French Press](https://images.unsplash.com/photo-1534778101976-62847782c213?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Tekstur Busa Susu Microfoam Mengilap yang Dihasilkan Melalui Teknik Manual Rumahan — Sumber / Kredit: Unsplash / Home Barista Latte Art*

---

### 1. Teknik Pompa French Press (The 50-Plunge Method)

1. Panaskan 150ml susu cair pasteurisasi di panci kecil atau microwave hingga suhu **60°C** (terasa hangat nyaman di tangan, jangan sampai mendidih!).
2. Tuang susu hangat ke dalam wadah kaca French Press.
3. Pasang saringan plunger, lakukan **3-4 kali pompa panjang di permukaan** untuk meregangkan udara masuk.
4. Tenggelamkan saringan ke bagian bawah susu, lalu lakukan **40–50 kali pompa pendek cepat di dasar** untuk mencacah gelembung menjadi microfoam halus mengilap.
5. Tuang ke dalam pitcher dan putar lembut (*swirling*) sebelum menuang latte art!
"""
    },
    {
        "id": "les-h4-3",
        "module_id": "mod-h4",
        "title": "Eksperimen Agitasi Seduh: Spiral Pour vs Center Pour vs Swirling Dripper terhadap Fines Migration",
        "duration": 14,
        "content": """# Eksperimen Agitasi Seduh: Spiral Pour vs Center Pour vs Swirling

Agitasi adalah energi kinetik yang ditransfer oleh aliran air seduh ke dalam bubuk kopi. Memahami agitasi adalah rahasia menghindari cangkir kopi yang macet (*clogging*).

![Tuangan Presisi Aliran Air Laminar Menggunakan Gooseneck Kettle](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Aliran Tuangan Air Mengalir Vertikal Lembut dari Ujung Ketel Leher Angsa — Sumber / Kredit: Unsplash / Brewers Cup*

---

### 1. Bahaya Menggoyangkan Dripper Berlebihan (*Excessive Swirling*)

Menggoyangkan dripper secara memutar terlalu kencang memicu gaya sentrifugal yang mendorong partikel debu kopi halus (*fines*) bermigrasi ke dasar pori-pori kertas saring. Akibatnya, air macet total (*drawdown stalling*), waktu seduh molor hingga 4 menit, dan kopi menjadi pahit sepet gosong!
"""
    },
    {
        "id": "les-h7-3",
        "module_id": "mod-h7",
        "title": "Sains Nitro Cold Brew Rumahan: Infusi Gas Nitrogen (N2) Menggunakan Whipper Dispenser",
        "duration": 14,
        "content": """# Sains Nitro Cold Brew Rumahan: Sensasi Kopi Creamy Berkarbon Lembut

Nitro Cold Brew menghadirkan sensasi meminum bir hitam Irlandia (*Guinness Stout*) pada kopi dingin: busa kepala putih tebal (*cascading foam*) dan rasa manis krim alami tanpa tambahan gula atau susu setetes pun.

![Gelas Kopi Nitro Cold Brew dengan Efek Gelembung Beruntun Cascading](https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Efek Gelembung Mikro Nitrogen yang Menghasilkan Tekstur Lembut Dingin di Lidah — Sumber / Kredit: Unsplash / Nitro Coffee Craft*

---

### 1. Cara Membuat Nitro Cold Brew di Rumah

1. Buat konsentrat cold brew bersih (disaring dua kali menggunakan kertas filter halus).
2. Masukkan 500ml cold brew dingin ke dalam tabung *Whipped Cream Dispenser* stainless steel.
3. Pasang 1 cartridge tabung gas **Nitrogen Murni (N2)** atau **N2O**.
4. Kocok tabung dengan kuat selama 30 detik agar molekul gas larut ke dalam lipid kopi.
5. Semprotkan secara miring 45 derajat ke dalam gelas kaca bening dan nikmati efek kaskade gelembung putih yang dramatis!
"""
    }
]

with open('lib/data/paths/homeBrewerData.ts', 'r') as f:
    hcontent = f.read()

h_extra_str = []
for les in homebrewer_extra:
    item = f'''  {{
    id: '{les["id"]}',
    module_id: '{les["module_id"]}',
    title: '{les["title"]}',
    content: `{les["content"].strip()}`,
    content_type: 'text',
    duration_minutes: {les["duration"]},
    order_index: 2 if '-2' in les["id"] else 3,
    is_free: true,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam {les["title"]} untuk penyeduhan kopi rumahan presisi tinggi.',
    key_takeaways: [
      'Pahami fisika alat seduh rumahan untuk menghasilkan ekstraksi manis dan seimbang.',
      'Kendalikan variabel air seduh, agitasi tuangan, dan kualitas kertas saring.',
      'Eksplorasi teknik seduh manual kreatif mulai dari espresso portabel hingga nitro cold brew.'
    ],
  }},'''
    h_extra_str.append(item)

split_marker = 'export const HOME_BREWER_QUIZZES'
if split_marker in hcontent:
    parts = hcontent.split(split_marker)
    last_bracket = parts[0].rfind('];')
    new_first_part = parts[0][:last_bracket] + '\n' + '\n'.join(h_extra_str) + '\n];\n\n'
    hcontent = new_first_part + split_marker + parts[1]
    with open('lib/data/paths/homeBrewerData.ts', 'w') as f:
        f.write(hcontent)
    print("Successfully added extra lessons to homeBrewerData.ts! Total 15 in expanded file.")
else:
    print("Error: Could not find split_marker in homeBrewerData.ts")

