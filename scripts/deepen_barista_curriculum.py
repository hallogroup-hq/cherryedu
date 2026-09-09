import re

with open("lib/data/paths/baristaData.ts", "r", encoding="utf-8") as f:
    code = f.read()

# Pattern to parse each lesson in baristaData.ts
# Each lesson object looks like:
# {
#   id: 'les-b1-1',
#   module_id: 'mod-b1',
#   title: '...',
#   ...
#   content: `...`,
#   ...
# }

EXPANSIONS = {
    "les-b1-1": """
### Standar Profesionalisme Barista Specialty
Profesi barista dalam ekosistem specialty coffee melampaui peran sekadar operator mesin penyeduh. Barista adalah duta (*ambassador*) yang memegang kendali kualitas di mata rantai terakhir: mengubah seluruh kerja keras 9 bulan petani, prosesor, dan roaster menjadi secangkir kopi terbaik di hadapan pelanggan.

#### 4 Pilar Disiplin Kerja Barista:
1. **Sensory Calibration (Kalibrasi Harian)**: Barista wajib mengecap dan mengkalibrasi setiap batch seduhan espresso di pagi hari sebelum pintu kedai dibuka untuk umum.
2. **Hygiene & Food Safety (Sanitasi Bar)**: Portafilter harus selalu bersih dari ampas minyak lama (*rancid oil*), steam wand wajib di-purge dan di-wipe segera setelah dipakai, dan kain lap kain basah harus dipisahkan berdasarkan warna peruntukannya (lap susu tidak boleh dipakai untuk baki mesin).
3. **Ergonomi & Alur Kecepatan (Speed of Service)**: Menjaga postur tamping dengan sudut siku tegak lurus 90° guna mencegah cedera muskuloskeletal berulang (*Repetitive Strain Injury* / RSI) dan memastikan tata letak bar mengikuti segitiga emas (*grinder - machine - knockbox*).
4. **Hospitality & Storytelling Edukatif**: Kemampuan menerjemahkan variabel teknis yang kompleks (misal: proses Anaerobik Slow Dry dari Desa Belok Sidan Bali) menjadi cerita yang menyenangkan dan mudah dipahami oleh tamu awam tanpa kesan menggurui.

| Aspek | Standar Minimum Barista | Pelanggaran Fatal |
|---|---|---|
| **Pembersihan Steam Wand** | Purge uap 2 detik + wipe lap khusus basah segera | Membiarkan kerak susu mengering pada ujung wand |
| **Portafilter Cleanliness** | Dikeringkan dengan handuk mikro sebelum dosing | Mendosis bubuk kopi ke dalam basket yang basah |
| **Penyimpanan Biji** | Hopper diisi secukupnya sesuai kebutuhan per 2 jam | Membiarkan biji menginap di hopper semalaman |
| **Ketepatan Dosing** | Deviasi maksimal ±0.2 gram menggunakan timbangan | Dosing kira-kira berdasarkan volume mata |
""",

    "les-b1-2": """
### Anatomi Mekanis Mesin Espresso Komersial
Memahami komponen internal mesin espresso komersial adalah kunci mendiagnosis fluktuasi rasa saat jam operasional sibuk (*rush hour*).

#### 1. Arsitektur Sistem Pemanas (Boiler)
* **Heat Exchanger (HX)**: Satu boiler besar menghasilkan uap panas, dengan pipa tembaga kecil melintas di dalamnya untuk air seduh. Kekurangan: rentan overheat jika mesin menganggur lama (membutuhkan cooling flush 3-5 detik).
* **Dual Boiler (Multi-Boiler)**: Boiler uap (steam) dan boiler seduh (brew) terpisah total. Boiler seduh dikontrol secara mandiri oleh sensor PID digital dengan presisi suhu ±0.2°C, memastikan stabilitas ekstraksi 100 cangkir berturut-turut.

#### 2. Dinamika Tekanan Pompa (Rotary vs Vibratory)
Mesin komersial menggunakan **Pompa Putar (Rotary Vane Pump)** yang digerakkan motor induksi langsung. Berbeda dengan pompa vibrasi rumahan, pompa rotary menyuplai tekanan konstan 9 bar seketika tanpa jeda kenaikan tekanan lambat, dan memiliki ketahanan kerja nonstop ribuan jam.

#### 3. Group Head & Sistem Pre-Infusi
Group head (seperti tipe legendaris E61 atau saturated group La Marzocco) menjaga kesetimbangan termal melalui sirkulasi air panas konstan (*thermosyphon*). Fitur pre-infusi membasahi bubuk kopi pada tekanan rendah (2–3 bar) selama 3–6 detik sebelum pompa penuh bekerja, mendekompresi pori-pori bubuk kopi agar tahan terhadap lonjakan tekanan 9 bar dan mencegah *channeling*.
""",

    "les-b1-3": """
### Sains Ekstraksi Espresso 3 Fase
Ekstraksi espresso adalah proses ekstraksi bertekanan tinggi (9 bar) yang melarutkan senyawa kimia kopi berdasarkan perbedaan polaritas dan massa molekulnya secara bertahap sepanjang 25–30 detik.

#### Tahapan Pelarutan Kimiawi Espresso:
1. **Fase 1: Asam & Garam Terlarut Cepat (Detik 0–10)**
   - Senyawa pertama yang keluar adalah asam organik polar berbobot molekul rendah (asam sitrat, asam malat, asam fosfat) serta kafein bebas.
   - Karakter visual: Aliran cairan sangat kental, berwarna cokelat gelap kemerahan pekat (*tiger stripes*).
   - Rasa: Sangat masam, tajam, sedikit asin, dengan body minyak kental.
2. **Fase 2: Gula & Karamelisasi (Detik 11–20)**
   - Saat air terus menembus matriks sel kopi, gula pereduksi hasil karamelisasi, sukrosa, dan asam klorogenat mulai terlarut.
   - Karakter visual: Warna cairan berubah menjadi cokelat keemasan madu (*golden crema*).
   - Rasa: Manis karamel, keasaman mulai seimbang dan melembut, mouthfeel mulai terbentuk bulat (*round body*).
3. **Fase 3: Lipid, Komponen Berat & Kepahitan (Detik 21–30)**
   - Senyawa polifenol berbobot molekul besar, serat selulosa mikro, pirazin, dan senyawa pahit mulai tertarik keluar.
   - Karakter visual: Aliran cairan menipis (*blonding*), warna berubah menjadi kuning pucat berair.
   - Rasa: Kepahitan tajam, sedikit astringent (sepat mengeringkan lidah), encer jika diteruskan berlebihan.

> ☕ **Prinsip Barista**: Kunci secangkir espresso seimbang adalah memotong aliran (*yield cut*) tepat saat perbandingan asam, gula, dan body berada di titik manis optimal sebelum kepahitan fase blonde mendominasi.
""",

    "les-b2-1": """
### Parameter Kalibrasi Mikrometrik Grinder Espresso
Grinder adalah instrumen terpenting di bar espresso—bahkan lebih krusial dibanding mesin itu sendiri. Pemahaman mekanika *burr* menentukan konsistensi ekstraksi harian.

#### Perbandingan Geometri Mata Pisau (Burr):
* **Flat Burr (Mata Pisau Datar)**:
  - Distribusi partikel gilingan bersifat *unimodal* (sangat seragam dengan ukuran partikel yang rapat).
  - Karakter cup: Kejernihan rasa (*flavor clarity*) tinggi, pemisahan tasting notes buah sangat kontras, body sedang.
  - Cocok untuk: Kopi single origin sangrai ringan (*light-to-medium roast*).
* **Conical Burr (Mata Pisau Kerucut)**:
  - Distribusi partikel bersifat *bimodal* (menghasilkan partikel utama dan partikel debu halus/*fines* terkontrol).
  - Karakter cup: Body tebal, mouthfeel kental, rasa cokelat dan kacang manis yang dominan.
  - Cocok untuk: Kopi blend susu komersial.

#### Pengaruh Kelembaban Udara (Humidity) terhadap Dial-In:
Biji kopi bersifat higroskopis (menyerap uap air dari udara). Saat hujan atau kelembaban ruangan naik:
- Biji kopi di dalam hopper menyerap air dan mengembang.
- Serat biji menjadi lebih elastis sehingga saat digiling, bubuk kopi memadat dan memperlambat laju aliran espresso (*flow rate choke*).
- **Koreksi Barista**: Putar grinder 1-2 notch ke arah lebih kasar (*coarser*). Sebaliknya, pada siang hari saat AC menyala kering, putar grinder sedikit lebih halus (*finer*).
""",

    "les-b2-2": """
### Teknik Dosing Presisi & Distribusi WDT
Kegagalan ekstraksi espresso 90% bersumber pada persiapan bubuk kopi di dalam keranjang portafilter (*puck preparation*).

#### Prosedur Distribusi WDT Standar:
1. **Dosing dengan Timbangan Presisi 0.1g**: Pastikan bobot bubuk tidak menyimpang lebih dari ±0.1 gram dari target resep (misal 18.0 gram pada basket VST 18g).
2. **Pemasangan Dosing Funnel**: Pasang corong pelindung pada portafilter untuk mencegah bubuk tumpah dan menjaga kebersihan meja bar.
3. **Pengadukan Jarum WDT (Weiss Distribution Technique)**:
   - Gunakan jarum berdiameter tipis (0.25 mm – 0.35 mm). Jarum tebal (> 0.5 mm) justru akan menciptakan celah retakan baru.
   - Lakukan gerakan memutar melingkar mulai dari dasar basket menuju permukaan secara perlahan selama 5–8 detik.
   - Pastikan gumpalan mikro akibat listrik statis (*clumps*) terurai sempurna dan permukaan bubuk menjadi homogen seperti bedak halus.
4. **Ketukan Vertikal Ringan (Tapping)**: Ketuk pegangan portafilter secara vertikal ke atas alas karet sebanyak satu kali untuk merapatkan rongga udara internal sebelum tamping.

#### Kesalahan Fatal Puck Preparation:
* Mengikis bubuk menggunakan jari tangan (kontaminasi minyak kulit dan kepadatan tidak merata).
* Mengetuk dinding samping portafilter dengan tamping tool setelah di-tamp (merusak segel samping puck dan memicu *side-channeling*).
""",

    "les-b2-3": """
### Fisika Tamping & Pencegahan Channeling
Tamping bukan tentang seberapa kuat tenaga otot yang Anda kerahkan, melainkan tentang **kerataan horizontal sempurna (levelness)** dan eliminasi seluruh rongga udara di antara partikel kopi.

#### Sains Tamping Modern:
Partikel bubuk kopi memiliki batas kompresi mekanis (*maximum puck compression*). Ketika Anda menekan dengan beban sekitar 10–15 kg, seluruh rongga udara antar partikel telah terpadatkan secara maksimal. Menekan dengan tenaga 30 kg tidak akan membuat puck menjadi lebih padat, melainkan hanya memicu ketegangan otot pergelangan tangan barista.

#### Standar SOP Tamping:
1. Posisikan siku lengan tegak lurus 90° dengan meja kerja.
2. Pegang tamper seperti memegang gagang pintu bulat dengan jari telunjuk dan ibu jari merasakan bibir rim basket untuk memastikan posisi datar.
3. Tekan lurus ke bawah secara mantap hingga terasa dasar hambatan solid.
4. Angkat tamper tegak lurus tanpa memutar (*polishing* berlebihan) agar tidak menciptakan retakan vakum di tepi puck.

> ⚠️ **Diagnosis Rasa Channeling**: Jika espresso terasa sangat tajam asam di bagian depan lidah namun meninggalkan rasa pahit gosong menyengat di pangkal tenggorokan secara bersamaan, puck Anda dipastikan mengalami channeling parah!
""",

    "les-b3-1": """
### Segitiga Parameter Dial-In Espresso
Dial-in adalah proses sistematis menemukan titik ekstraksi terbaik dari suatu profil biji sangrai. Tiga variabel utama yang dikendalikan barista adalah **Dose, Yield, dan Time**.

#### Formula Matematis Rasio Seduh Espresso (Brew Ratio):
$$\\text{Brew Ratio} = \\frac{\\text{Dosis Bubuk (gram)}}{\\text{Hasil Espresso Cair (gram)}}$$

* **Ristretto (1:1 hingga 1:1.5)**: 18g bubuk menghasilkan 18g–27g espresso. Karakter: konsentrasi sangat pekat, keasaman buah dan minyak tebal, body bulat padat.
* **Normale (1:2 hingga 1:2.2)**: 18g bubuk menghasilkan 36g–40g espresso. Karakter: rasio standar emas paling seimbang untuk specialty coffee single origin.
* **Lungo (1:2.5 hingga 1:3)**: 18g bubuk menghasilkan 45g–54g espresso. Karakter: clarity tinggi, rasa manis larut maksimal, namun rentan over-extraction jika biji disangrai gelap.

#### Matriks Panduan Troubleshooting Cepat:
| Kondisi Sensorik | Diagnosa Ekstraksi | Tindakan Barista |
|---|---|---|
| Terlalu asam, asin, hambar, waktu < 22 detik | **Under-extracted** | Perhalus ukuran gilingan (*finer*) atau naikkan yield cairan |
| Terlalu pahit menusuk, kering sepat, waktu > 34 detik | **Over-extracted** | Perkasar ukuran gilingan (*coarser*) atau kurangi yield cairan |
| Manis seimbang, asam cerah buah, aftertaste panjang | **Balanced (Sweet Spot)** | Pertahankan parameter dan catat ke dalam brew log |
""",

    "les-b3-2": """
### Menangani Berbagai Tingkat Sangrai & Origin Kopi
Karakteristik seluler biji kopi berubah drastis tergantung pada asal wilayah agroklimat dan tingkat sangrai (*roast level*). Barista harus mengadaptasi variabel mesin sesuai bahan baku.

#### 1. Kopi Sangrai Ringan (Light Roast Single Origin)
* **Karakter Biji**: Struktur sel sangat padat, kadar air tersisa rendah, asam organik tinggi, dan laju kelarutan (*solubility*) rendah.
* **Strategi Dial-In Barista**:
  - Naikkan suhu boiler ke 93°C – 95°C untuk meningkatkan energi kinetik pelarutan.
  - Gunakan rasio seduh lebih panjang (1:2.2 hingga 1:2.5, misal 18g in -> 42g out).
  - Terapkan pre-infusi panjang (5–7 detik) untuk melembutkan kepadatan sel biji sebelum ekstraksi penuh 9 bar.

#### 2. Kopi Sangrai Sedang-Gelap (Medium-Dark Roast Blend)
* **Karakter Biji**: Struktur sel berpori rapuh, dinding sel telah terkaramelisasi lanjut, minyak kopi mulai bermigrasi ke permukaan, laju kelarutan sangat tinggi.
* **Strategi Dial-In Barista**:
  - Turunkan suhu boiler ke 89°C – 91°C untuk mencegah ekstraksi komponen pahit dan abu arang.
  - Gunakan rasio seduh lebih pendek (1:1.75 hingga 1:2.0, misal 18g in -> 34g out).
  - Waktu ekstraksi dipersingkat (24–27 detik) untuk mempertahankan sweetness karamel cokelat.
""",

    "les-b4-1": """
### Biokimia Susu & Dinamika Pemanasan
Susu sapi segar pasteurisasi (*fresh milk*) terdiri dari sekitar 87% air, 3.8% lemak mentega, 3.2% protein (kasein & whey), dan 4.8% laktosa (gula susu). Memahami kimiawi komponen ini krusial untuk menghasilkan minuman kopi susu berkualitas tinggi.

#### Peranan Masing-Masing Komponen:
1. **Laktosa (Gula Alami)**: Laktosa memiliki tingkat kemanisan rendah pada suhu dingin. Saat dipanaskan hingga 60°C–65°C, energi kinetik molekul meningkatkan sensitivitas reseptor rasa manis di lidah manusia hingga dua kali lipat secara alami tanpa perlu penambahan gula.
2. **Protein Whey & Kasein (Pembentuk Busa)**: Molekul protein memiliki dua kutub: hidrofobik (menolak air) dan hidrofilik (mengikat air). Saat uap steam wand menginjeksi udara, protein akan meregang (*unfolding*) dan membentuk selaput elastis yang memerangkap gelembung udara mikro.
3. **Lemak Mentega (Butterfat - Pembawa Rasa)**: Lemak susu meleleh pada suhu 35°C–40°C memberikan sensasi creamy mouthfeel yang membungkus lidah dan melunakkan kepahitan espresso.

> 🌡️ **Ambang Batas Suhu Kritis**:
> * **Di bawah 55°C**: Busa susu belum stabil dan cepat pecah menjadi cairan terpisah.
> * **60°C – 65°C**: Titik kesempurnaan tekstur sutra berkilau (*glossy*) dan rasa manis alami puncak.
> * **Di atas 70°C**: Protein kasein rusak permanen, menghasilkan bau belerang terbakar (*cooked milk flavor*), dan busa menjadi kaku seperti busa sabun.
""",

    "les-b4-2": """
### Fisika Vortex Steaming & Tekstur Microfoam
Menciptakan microfoam sempurna bukan masalah keberuntungan, melainkan penerapan prinsip dinamika fluida dan penempatan steam wand yang presisi.

#### Dua Fase Wajib Steaming Susu:
1. **Fase 1: Peregangan / Injeksi Udara (Aerating / Stretching)**
   - Masukkan susu dingin (4°C) ke dalam pitcher stainless steel hingga tepat di bawah pangkal moncong.
   - Posisikan ujung tip steam wand terbenam sekitar 0.5 – 1.0 cm di bawah permukaan susu, dengan sudut kemiringan sekitar 15°.
   - Buka keran uap penuh seketika. Dengarkan bunyi mendesis halus (*tsik-tsik-tsik*).
   - Biarkan volume susu mengembang sekitar 25%–30% untuk latte, atau 40%–50% untuk cappuccino. Selesaikan fase ini sebelum suhu mencapai 37°C (suhu tubuh manusia).
2. **Fase 2: Pusaran Turbulen / Penggulungan (Rolling / Vortex)**
   - Benamkan tip sedikit lebih dalam (sekitar 1–2 cm) untuk menghentikan injeksi udara luar.
   - Biarkan semburan uap memutar cairan susu menjadi pusaran tornado (*vortex*) berkecepatan tinggi.
   - Pusaran rotasi ini bertugas menghancurkan gelembung udara besar menjadi gelembung mikro mikroskopis hingga seluruh cairan berubah tekstur menjadi emulsi putih homogen mengkilap menyerupai cat basah.
   - Tutup keran uap tepat saat dasar pitcher terasa hangat-panas di telapak tangan (~60°C).
""",

    "les-b4-3": """
### Teknik Penuangan Latte Art: Dari Heart ke Rosetta
Latte art adalah indikator visual langsung dari keberhasilan barista dalam mengekstraksi espresso kaya crema dan mengolah microfoam bertekstur elastis sempurna.

#### 3 Faktor Fisika Penuangan:
1. **Tinggi Penuangan (Pouring Height)**:
   - Menuang dari ketinggian 5–7 cm dengan aliran tipis akan menembus lapisan crema dan mencampur susu ke dasar cangkir tanpa meninggalkan tanda putih di permukaan (*canvas setting*).
   - Menurunkan moncong pitcher hingga menempel bibir cangkir (jarak 0.5 cm) akan mengurangi momentum vertikal dan membuat microfoam mengapung di atas crema membentuk pola putih.
2. **Laju Aliran (Flow Rate)**: Aliran terlalu lambat membuat pola tidak melebar; aliran terlalu deras membuat crema pecah berantakan.
3. **Gerakan Pergelangan Tangan (Wiggle)**: Gerakan goyangan simetris pergelangan tangan dari sisi ke sisi menciptakan riak daun rosetta yang beraturan.

#### Panduan Pola Dasar Bertahap:
* **The Heart (Hati)**: Fondasi dasar kontrol kanvas. Mulai tuang tinggi hingga cangkir terisi 50%, turunkan pitcher ke tengah cangkir, dorong sedikit busa putih mengembang, lalu angkat pitcher dan potong garis lurus ke depan.
* **The Tulip (Bunga Bertingkat)**: Penguasaan teknik *stop-and-drop*. Tumpuk 3 hingga 5 bulatan busa secara bertahap sebelum dipotong lurus.
* **The Rosetta (Daun Simetris)**: Mengombinasikan gerakan goyangan pergelangan tangan konstan sambil memundurkan pitcher secara stabil, diakhiri dengan garis potong ramping ke depan.
"""
}

# Apply expansions to baristaData.ts
for les_id, exp_text in EXPANSIONS.items():
    # Find the lesson content block and append or expand
    # Pattern: id: 'les-b1-1' ... content: `...`
    pattern = rf"(id:\s*['\"]{les_id}['\"][\s\S]*?content:\s*`)([\s\S]*?)(`)"
    match = re.search(pattern, code)
    if match:
        old_content = match.group(2).strip()
        # If old_content doesn't have the expansion text, enrich it
        if "### Standar Profesionalisme Barista" not in old_content and "### Anatomi Mekanis Mesin" not in old_content and exp_text.strip() not in old_content:
            new_content = old_content + "\n\n---\n" + exp_text.strip()
            code = code[:match.start(2)] + new_content + code[match.end(2):]
            print(f"Deepened lesson: {les_id}")

with open("lib/data/paths/baristaData.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully deepened Barista curriculum!")
