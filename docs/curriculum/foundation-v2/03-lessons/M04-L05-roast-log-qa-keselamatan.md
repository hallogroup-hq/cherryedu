---
course: CherryEdu Foundation 2.0
module: M04
lesson: M04.L05
title: Membaca roast log—bukti mutu dan batas keselamatan roastery
status: internal-review
learning_outcome: Membaca data roast log yang terbatas, menyebutkan tiga potensi confounder, memisahkan dugaan cacat dari hasil sensory, dan mengenali red flags keselamatan
legacy: New competency from F5-1/F5-2/F5-3/F5-4
---

# Saat kurva roasting terlihat sempurna, apakah kopinya pasti bagus?

Dua batch roasted coffee dari green lot yang sama mempunyai grafik suhu yang tampak rapi.

Seorang supervisor mengatakan: “Kurva A lebih mulus, jadi pasti lebih enak daripada B.”

Mungkin A memang lebih disukai. Tetapi dari grafik saja **kita tidak dapat membuktikannya**. Roast log berguna sebagai bukti proses, bukan pengganti seluruh penilaian warna, cacat, dan hasil sensorik.

Pada lesson terakhir Modul 04 ini, kita akan belajar **membaca informasi yang ditampilkan**, mempertanyakan apa yang tidak ditampilkan, dan mengenali risiko saat roastery bekerja.

## 1. Apa yang sebenarnya dicatat dalam roast log?

Sebuah roast log dapat memuat:
- **Identitas batch:** lot kopi hijau, mesin, operator, tanggal, berat awal dan keluaran.
- **Waktu:** kapan batch mulai, perubahan warna yang dicatat, first crack, dan akhir roasting.
- **Suhu:** pembacaan berbagai probe, contohnya bean temperature dan exhaust/air temperature.
- **Rate of rise (RoR):** laju perubahan pembacaan suhu sensor per unit waktu, misalnya °C/menit.
- **Pengaturan mesin:** bila dicatat, tingkat energi, aliran udara, atau perubahan sistem.
- **Observasi hasil:** warna, massa susut, kondisi fisik, dan catatan cupping setelah pendinginan.

**Tidak setiap mesin memiliki alat/sensor sama**, dan tidak semua variabel di atas harus tampil pada satu grafik. Catatan yang baik menjelaskan alat serta prosedur, supaya pembaca tidak menganggap angka dari dua sensor berbeda setara begitu saja.

### Bagaimana membaca RoR?

Jika pembacaan sensor naik dari 180°C menjadi 190°C dalam satu menit, rata-rata laju kenaikan untuk interval itu adalah **10°C/menit**. RoR yang ditampilkan software bisa memakai interval hitung dan smoothing berbeda sehingga tidak harus sama persis dengan selisih dua titik sederhana.

RoR bukan suhu biji yang sebenarnya di setiap bagian batch. Ia adalah **turunan dari sinyal pengukuran**. Fluktuasi kurva bisa berasal dari proses, pengukuran atau pemrosesan data.

## 2. Kenapa kurva “sempurna” belum tentu menunjukkan cangkir sempurna?

Dalam industri ada istilah *flick*, *crash*, *baked*, *scorched* dan *underdeveloped*. Istilah itu berguna untuk mendiskusikan anomali yang mungkin terjadi.

Tetapi ada bahaya jika sebuah istilah menjadi **diagnosis otomatis**. Misalnya:
- Kurva terlihat turun tajam → “pasti baked”.
- RoR setelah first crack naik → “semua rasa menjadi buruk”.
- DTR di luar 20% → “batch pasti gagal”.
- Warna medium → “pasti tidak ada roast defect”.

Sebuah penelitian 2024 menguji berbagai roast profile termasuk konfigurasi dengan *flick* besar dan penurunan RoR. Peneliti bahkan mencatat keterbatasan bukti publik untuk sebagian asumsi tradisional roaster tentang dampak profil. [Q01]

Artinya, kurva tetap membantu mendeteksi kondisi yang perlu ditelusuri—tetapi bukti **hasil rasa** memerlukan evaluasi sensori. Bila sebuah kesimpulan menyangkut kecukupan rasa atau cacat, gunakan data warna, pemeriksaan fisik serta tasting/cupping sesuai tujuan.


[VISUAL:roast-curve]

### Jejak P-17 (kode satu lot kopi contoh): log batch R-09

Pada dossier final, percobaan roast dari lot **P-17** diberi kode **R-09**. Ada log waktu, pembacaan probe dan first crack, tetapi ukuran warna akhir belum konsisten dan cupping formal belum dilakukan. Walaupun grafik tampak mulus, **itu belum memberi bukti skor sensori**. Data tersebut simulasi, bukan rekomendasi menjalankan mesin roasting.

## 3. Baca dua batch (seluruh data simulasi)

| Data | Batch R-01 | Batch R-02 |
|---|---|---|
| Green lot | Lot X | Lot X |
| Mesin | Roaster sama | Roaster sama |
| Berat green masuk | 5 kg | 5 kg |
| Waktu total | 10 menit | 10 menit |
| Awal first crack | 08:00 | 08:00 |
| DTR tercatat | 20% | 20% |
| Kurva sensor | Bertahap dan relatif stabil | Ada lonjakan pembacaan dekat akhir |
| Pengukuran warna | Sama sekali belum ada | Sama sekali belum ada |
| Cupping | Belum dilakukan | Belum dilakukan |
| Status fasilitas | Ventilasi tercatat normal | Operator melaporkan gangguan exhaust |

Supervisor berkata dua hal:
1. “Karena DTR sama, rasa pasti sama.”
2. “Meski exhaust terganggu, lanjut saja sampai selesai; grafiknya masih bisa dilihat.”

**Keduanya tidak bisa diterima.** DTR hanya satu perbandingan waktu, sedangkan gangguan exhaust adalah potensi risiko keselamatan yang harus direspons sesuai SOP fasilitas dan instruksi operator terlatih, bukan dengan melanjutkan produksi atas dasar diagram.

### Pertanyaan inti

**A. Apa tiga informasi yang belum tersedia untuk menilai mutu roast?**

Contoh jawaban: kondisi pengukuran warna, hasil cupping/sensory sesuai protokol, pembacaan dan kualitas sensor, serta informasi pengaturan energi atau airflow.

**B. Apakah anomali RoR membuktikan mesin rusak?**

Tidak. Bisa berkaitan dengan keadaan proses, sensor, atau pemrosesan data; perlu investigasi yang sesuai.

**C. Apakah kamu boleh memberi instruksi mengubah burner atau damper dari kasus ini?**

Tidak. Data contoh tidak cukup untuk instruksi operasi, terlebih ada laporan gangguan exhaust. Foundation tidak mengajarkan pengoperasian aman mesin melalui simulasi teks.

## 4. Apa risiko keselamatan utama?

Roastery memiliki perangkat panas, sistem pembakaran/kelistrikan, bahan organik, partikulat, gas dan kegiatan mengangkat material. Risiko kerja nyata dapat mencakup:
- kontak dengan permukaan atau material panas;
- akumulasi residu kulit ari (*chaff*) yang dapat memperbesar risiko kebakaran apabila sistem dan pembersihan tidak dikelola;
- masalah aliran udara dan pembuangan gas;
- paparan bahan kimia udara kerja tertentu yang dihasilkan selama roasting/grinding, termasuk **diacetyl** dan **2,3-pentanedione**;
- penanganan karung atau produk panas tanpa perlindungan yang sesuai.

SCA memasukkan perawatan mesin dasar dan fire prevention dalam pembelajaran Roasting Foundation. CDC/NIOSH juga mendokumentasikan paparan senyawa dalam fasilitas roasting/packing tertentu dan pentingnya kontrol rekayasa serta kesehatan kerja. [Q02,Q03]

**Batas keras:** Pelajaran ini tidak memberikan prosedur menyalakan mesin, menyetel gas, memperbaiki exhaust, mengatasi kebakaran, atau menentukan ambang paparan untuk fasilitas tertentu. Jika ditemukan gangguan exhaust, asap yang tidak biasa, alarm atau bahaya mesin, **jangan improvisasi dari artikel**. Hentikan keterlibatan dalam aktivitas berisiko, ikuti prosedur darurat resmi fasilitas, dan serahkan penanganan pada personel berwenang; hubungi layanan darurat bila ada kondisi gawat.

### Kesalahan besar yang perlu dicegah

Jangan menyamakan:
- **Indikator produksi** (suhu, waktu, RoR) dengan **kontrol keselamatan** (ventilasi, sensor gas, SOP, pemeliharaan).
- **Catatan cup quality** dengan **bukti kualitas udara kerja**.
- **Profil digital yang cantik** dengan **mesin yang pasti berada dalam kondisi aman**.

## 5. Studi kasus: rapat QC setelah produksi

Tim menerima dua catatan.
- **Catatan 1:** Batch memiliki anomali kurva, tidak ada hasil sensory dan tidak ada foto/sampel warna.
- **Catatan 2:** Ada laporan alarm ventilasi tetapi tidak ada dokumentasi penyelesaian masalah oleh petugas.

Apa keputusan yang bertanggung jawab?

Untuk Catatan 1: **TUNDA klaim mutu final** dan minta bukti pengujian relevan sebelum menyatakan roast defect atau lulus QC.

Untuk Catatan 2: **ESKALASI keselamatan** sesuai kebijakan fasilitas dan jangan menyatakan operasi aman berdasarkan roast log. Masalah harus ditangani pihak kompeten.

Dua kasus itu memerlukan proses yang berbeda: satu adalah penilaian mutu produk, yang satu adalah keselamatan pekerja. Banyak organisasi gagal ketika kedua jenis keputusan dicampur.


[ACTIVITY:roast-curve-evidence]

## 6. Tugas akhir Modul 04

Gunakan diagram kurva roasting berlabel simulasi di atas bersama data ringkas kasus dan pertanyaan dari pelanggan: “Apakah batch ini sudah ideal?”

Buat respons singkat:

> “Dari log ini saya bisa menyebut _______. Saya **belum** bisa memastikan _______, karena data _______ belum tersedia. Saya ingin mengecek _______ dengan metode _______. Jika ada indikasi gangguan ventilasi atau keselamatan, _______.”

**Contoh respons baik:** “Saya bisa melihat durasi total, waktu first crack dan perubahan pembacaan sensor. Saya belum bisa memastikan profil sensori terbaik tanpa warna dan cupping terkontrol. Saya ingin membandingkan dengan batch acuan dan data dari mesin yang sama. Gangguan exhaust harus ditangani sesuai SOP oleh petugas berwenang, bukan dibiarkan agar roast selesai.”

Nilai latihan ditentukan kemampuan memisahkan **yang diketahui, yang belum diketahui, tindakan mutu, dan tindakan keselamatan**, bukan kemampuan merancang roast curve.

## 7. Pemeriksaan pemahaman

**Q1.** DTR 20% berarti hasil rasa selalu seimbang? **Tidak.**
**Q2.** RoR adalah pengukuran langsung temperatur di dalam semua biji? **Tidak; ia berasal dari pembacaan sensor.**
**Q3.** Dua roast color sama menjamin rasa identik? **Tidak.**
**Q4.** Anomali log ditambah alarm exhaust berarti operator pemula sebaiknya mengutak-atik burner? **Tidak. Eskalasi pada prosedur keselamatan dan petugas berwenang.**
**Q5.** Apa yang harus ada sebelum menjanjikan “rasa terbaik”? **Kriteria mutu dan hasil evaluasi sensori yang sesuai, di samping bukti proses.**

## Penutup modul

Setelah Modul 04, kamu belum menjadi roaster profesional—dan memang bukan itu janji Foundation.

Kamu sudah punya bekal yang lebih berguna: tahu **apa yang berubah pada biji, mengapa aroma terbentuk, bagaimana menilai perbedaan roast, kenapa kesegaran tidak hanya dihitung hari, dan kapan data proses tidak boleh dipakai menggantikan keselamatan**.

**Berikutnya:** Di Modul 05, kita akan melihat bagaimana air mengambil zat dari roasted coffee dan mengapa rasio, ukuran giling serta kualitas air bisa mengubah hasil cangkir.

---
### Referensi dan QA
- [Q01] *The effect of roast profiles on the dynamics of titratable acidity during coffee roasting* (2024), profile experiments and limitations: https://pmc.ncbi.nlm.nih.gov/articles/PMC11002029/
- [Q02] SCA Coffee Skills Program Roasting Foundation curriculum: https://education.sca.coffee/coffee-skills-program ; course catalog: https://education.sca.coffee/s/SCA-CSP-Course-Catalog.pdf (URL only; no PDF analyzed here).
- [Q03] CDC/NIOSH, *Coffee Workers at Risk for Lung Disease*: https://www.cdc.gov/niosh/bulletin/2016/coffee-workers.html
- [Q04] Giacalone et al., roasting defects study (2018): https://www.sciencedirect.com/science/article/pii/S0950329318302015
- **Blocked before publication:** Qualified roasting SME and occupational safety reviewer must assess hazard language and contextual accuracy. No operational safety guarantee; no user/learner experiments conducted.