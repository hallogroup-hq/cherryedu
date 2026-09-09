import re

EXPANSIONS_B_REST = {
    "les-b5-1": """
### Protokol Multi-Dripper di Bar Komersial
Menyeduh manual brew saat bar sedang sibuk (*peak hours*) menuntut efisiensi gerakan dan konsistensi flow rate tanpa mengorbankan kualitas rasa cangkir.

#### Perbandingan Karakteristik Dripper Komersial:
* **Hario V60 (Conical 60°)**:
  - Pola alur spiral besar dengan lubang tunggal di dasar. Laju aliran sepenuhnya dikendalikan oleh teknik penuangan barista.
  - Karakter rasa: Keasaman cerah (*bright acidity*), pemisahan rasa buah jelas (*high clarity*), body ramping.
  - Target Grind: Medium-fine (serupa garam meja kasar). Waktu ekstraksi: 2:30 – 3:00 menit.
* **Kalita Wave (Flat-Bottomed)**:
  - Tiga lubang kecil di dasar dengan kertas bergelombang (*wave filters*) yang meminimalkan kontak langsung dengan dinding dripper.
  - Karakter rasa: Ekstraksi lebih merata, body lebih tebal, sweetness karamel dominan, toleransi kesalahan teknik lebih tinggi.
  - Target Grind: Sedikit lebih kasar dibanding V60. Waktu ekstraksi: 3:00 – 3:30 menit.

#### SOP Kerja Multi-Station Barista:
1. Basahi filter (*rinse*) dengan air panas 50ml untuk menghilangkan rasa kertas dan menghangatkan server kaca. Buang air bilasan.
2. Timbang 15.0g bubuk kopi per dripper, ratakan bed kopi secara horizontal.
3. Lakukan blooming serentak (45g air tuang dalam 10 detik, biarkan degas 30-45 detik).
4. Gunakan pola penuangan terpusat (*center pour*) melingkar kecil untuk menjaga suhu termal bed kopi tetap stabil di 88°C–92°C.
""",

    "les-b5-2": """
### Eksplorasi Aeropress & Metode Imersi di Bar
Aeropress adalah instrumen seduh paling fleksibel yang memadukan ekstraksi imersi penuh dengan tekanan mekanis pendorong (*piston plunger*).

#### Dua Aliran Teknik Aeropress:
1. **Metode Inverted (Terbalik)**:
   - Posisikan plunger di bagian bawah dan tabung berdiri terbalik. Bubuk kopi dan air terendam total tanpa setetes pun cairan bocor sebelum waktu yang ditentukan.
   - Keuntungan: Kontrol waktu kontak air-kopi 100% presisi. Sangat ideal untuk profil biji berkepadatan seluler tinggi (Natural proses, Geisha, kopi Afrika).
   - Resep Barista: 16g kopi, 200g air suhu 90°C. Aduk 3 kali bolak-balik. Pasang cap berfilter kertas bilas pada menit 1:30, balikkan ke server, lalu tekan pelan selama 30 detik.
2. **Metode Standard (Lurus)**:
   - Cap dipasang di bawah, diletakkan di atas cangkir. Memungkinkan sebagian kecil cairan menetes sebelum tekanan piston diberikan.
   - Menghasilkan rasa seduhan yang lebih bersih (*clean*) dan berkeasaman cerah.

> 💡 **Troubleshooting Tekanan**: Jika piston terasa sangat berat ditekan hingga membutuhkan beban tubuh penuh, ukuran gilingan Anda terlalu halus (*too fine*) atau menghasilkan terlalu banyak debu halus (*fines*). Jangan dipaksakan karena berisiko meretakkan server kaca penampung.
""",

    "les-b5-3": """
### Teknik Cold Brew Konsentrat & Iced Filter
Minuman kopi dingin specialty membutuhkan penanganan ekstraksi yang berbeda secara fundamental karena ketiadaan energi termal panas untuk melarutkan komponen kimiawi biji.

#### Parameter Cold Drip vs Cold Immersion:
* **Cold Immersion (Perendaman Dingin)**:
  - Bubuk kopi kasar direndam dalam air dingin bersuhu 4°C–10°C di dalam tangki kedap udara selama 16–20 jam.
  - Rasio konsentrat: 1:8 (100g bubuk per 800ml air). Diencerkan dengan air/es saat disajikan menjadi rasio 1:16.
  - Profil rasa: Sangat manis, tingkat keasaman rendah (karena asam klorogenat tidak terhidrolisis tanpa panas), body cokelat tebal.
* **Japanese Iced Pour-Over (Flash Brew)**:
  - Menyeduh kopi panas menggunakan dripper V60 langsung ke atas bongkahan es batu di dalam server.
  - Pembagian Rasio: 60% air panas seduh (misal 150g) + 40% es batu di server (misal 100g) untuk 16g bubuk kopi.
  - Reaksi *Thermal Shock*: Es batu yang langsung mendinginkan cairan espresso/filter mengunci senyawa volatil aroma buah dan bunga agar tidak menguap ke udara, menghasilkan es kopi yang luar biasa aromatik dan berkeasaman segar.
""",

    "les-b6-1": """
### Formulasi Minuman Kopi Signature & Mocktail
Dalam industri kafe modern, minuman signature (*signature beverage*) adalah pembeda terkuat yang menciptakan loyalitas pelanggan dan menaikkan rata-rata nilai transaksi (*ticket size*).

#### Struktur Anatomi Minuman Signature Seimbang:
1. **Base (Fondasi Kopi)**: Espresso shot (ristretto untuk body pekat, lungo untuk clarity aromatik), atau Cold Brew konsentrat.
2. **Modifier Rasa Manis (Sweetener)**: Sirup racikan mandiri (*in-house crafted cordial*), sirup gula aren kelapa organik, madu hutan terfermentasi, atau *oleo saccharum* (ekstraksi minyak kulit jeruk dengan gula pasir).
3. **Acidifier (Penyeimbang Asam)**: Jus jeruk yuzu, asam laktat cair pangan, reduksi jus apel malat, atau kombucha lokal.
4. **Texturizer / Mouthfeel (Tekstur Sensori)**: Busa nitro, clarified milk punch (protein susu yang diendapkan dengan asam sitrat lalu disaring bening), atau tonic water bersoda halus.

> 🍸 **Golden Rule Formula Kopi Mocktail**:  
> Rasa kopi harus tetap menjadi **bintang utama**. Jika tamu meminum kreasi mocktail Anda dan tidak lagi merasakan karakter dasar kopi, minuman tersebut gagal sebagai kopi signature dan hanya menjadi jus manis biasa.
""",

    "les-b7-1": """
### Kalibrasi Sensorik & Bahasa Komunikasi dengan Roaster
Barista adalah mata dan telinga dari departemen roasting di sebuah kedai kopi. Kemampuan mendeskripsikan profil rasa secara objektif memungkinkan roaster melakukan koreksi batch penyangraian secara presisi.

#### Matriks Evaluasi Masalah Roasting di Meja Bar:
| Persepsi Rasa pada Espresso | Kemungkinan Defek Roasting | Komunikasi ke Roaster |
|---|---|---|
| Rasa rumput kering, kacang mentah, astringent sepat | **Underdeveloped Roasting** | Biji kurang matang di inti dalam, butuh kenaikan DTR % atau perpanjangan waktu development |
| Rasa roti tawar hambar, tidak ada aroma buah, datar | **Baked Profile (RoR Crash)** | Suhu roaster mengalami stagnasi/crash sebelum First Crack |
| Rasa abu arang, pahit ban terbakar, minyak keluar | **Overdeveloped / Scorched** | Suhu charge terlalu tinggi atau dipanggang terlalu gelap melebihi target profile |
| Sweetness karamel tinggi, acidity seimbang, bersih | **Ideal Profile** | Profil roasting optimal, pertahankan parameter batch tersebut |
""",

    "les-b8-1": """
### Manajemen Pemeliharaan & Higienitas Bar Komersial
Peralatan kopi bernilai ratusan juta rupiah akan rusak dan menghasilkan kopi berkualitas buruk jika tidak dirawat dengan standar operasional prosedur harian yang ketat.

#### Checklist Pemeliharaan Harian Barista (Daily Closing SOP):
1. **Backflush Mesin Espresso**:
   - Gunakan blind basket (keranjang buta tanpa lubang).
   - Masukkan 3–5 gram detergen pembersih mesin kopi khusus (misal Cafiza/Puly Caff).
   - Nyalakan pompa 10 detik, matikan 10 detik. Ulangi 5 kali untuk melarutkan sisa kerak minyak kopi di selenoid valve.
   - Bilas bersih dengan air mengalir hingga tidak ada sisa busa detergen kimia.
2. **Pembersihan Shower Screen & Gasket**: Buka baut shower screen seminggu sekali, rendam dalam air panas detergen, dan sikat gasket karet dari sisa bubuk kopi yang memadat.
3. **Pembersihan Burr Grinder**: Bersihkan ruang chamber mata pisau grinder dari retensi bubuk lama menggunakan kuas halus dan vacuum khusus. Jangan pernah mencuci mata pisau baja dengan air karena memicu karat instan!
4. **Water Filter Maintenance**: Periksa tekanan indikator cartridge filter air sedimentasi dan carbon block, pastikan pembacaan TDS air masuk tidak melebihi 250 ppm.
"""
}

with open("lib/data/paths/baristaData.ts", "r", encoding="utf-8") as f:
    code = f.read()

for les_id, exp in EXPANSIONS_B_REST.items():
    pattern = rf"(id:\s*['\"]{les_id}['\"][\s\S]*?content:\s*`)([\s\S]*?)(`)"
    match = re.search(pattern, code)
    if match:
        old_content = match.group(2).strip()
        if exp.strip() not in old_content:
            new_content = old_content + "\n\n---\n" + exp.strip()
            code = code[:match.start(2)] + new_content + code[match.end(2):]
            print(f"Deepened remaining barista lesson: {les_id}")

with open("lib/data/paths/baristaData.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully enriched remaining Barista modules!")
