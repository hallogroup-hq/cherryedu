---
course: CherryEdu Foundation 2.0
module: M05
lesson: M05.L05
title: Membaca hasil seduh—apa yang bisa disimpulkan dari TDS dan extraction yield?
status: draft-internal-not-live
learning_outcome: Menghitung perkiraan EY sederhana, memeriksa konsistensi satuan serta membedakan pengukuran, inferensi dan kesukaan.
legacy: NEW practical data literacy gap
---

# Refraktometer menunjukkan 1,30%. Apakah berarti seduhannya bagus?

Kamu masuk ke kedai dan melihat barista menggunakan refraktometer. Layar alat menampilkan angka **1,30%**. Staf mengatakan, “Wah, ini pasti seduhan sempurna!”

Tunggu dulu. Angka itu bisa berguna, tetapi **satu angka tidak membuktikan rasa terbaik**. Bahkan kita belum tahu alat membaca **air sebelum seduh atau kopi setelah seduh**, apakah sampelnya benar, dan bagaimana data dicatat.

Pelajaran ini mengajarkan cara memakai angka sebagai **alat bertanya yang lebih tepat**, bukan pengganti lidah atau keputusan pembeli.

## 1. Kita perlu tiga informasi, bukan satu

Untuk memperkirakan *extraction yield* (EY) pada model sederhana, catat:
1. **Dose:** massa bubuk kopi kering yang digunakan (gram).
2. **Beverage mass:** massa cairan hasil seduhan yang dikumpulkan di cangkir (gram).
3. **Beverage TDS:** konsentrasi zat kopi terlarut pada minuman (persen).

Penting: **air yang dituang ke brewer** berbeda dari **berat minuman yang berhasil dikumpulkan**. Sebagian cairan dapat tertahan pada ampas, filter, alat, atau hilang melalui mekanisme lain. Kita tidak boleh mengganti angka output dengan input tanpa bukti.

Dalam bentuk pendekatan berdasarkan cairan yang dikumpulkan:

`Estimated EY (%) = beverage_mass (g) × beverage_TDS (%) / dry_dose (g)`

Persamaan ini menggunakan TDS sebagai angka persen, bukan pecahan desimal. Jika refraktometer menunjukkan **1,30%**, masukkan **1,30** ke rumus di atas; jangan sekaligus mengalikan 100 lagi. Alternatif bila TDS ditulis 0,0130 sebagai fraksi: `EY (%) = beverage_mass × 0,0130 / dry_dose × 100`.

**Catatan metodologi:** Ini *perkiraan* jumlah zat kopi di **minuman yang dikumpulkan**, bukan selalu seluruh zat yang keluar dari partikel bubuk selama proses. Dalam immersion, sebagian cairan yang mengandung zat kopi masih tertahan bersama ampas; publikasi UC Davis secara khusus membahas kekeliruan metode neraca massa bila fraksi cairan tertahan diabaikan. [M01]

## 2. Hitung satu contoh langkah demi langkah

**Data simulasi:**
- Dosis bubuk kering: 15 g
- Air masuk ke brewer: 250 g
- Minuman yang terkumpul: 225 g
- TDS minuman: 1,30%

**Langkah A — berapa gram zat terlarut berada di cangkir?**

225 g × 1,30 / 100 = **2,925 g**.

**Langkah B — berapa persennya dari dosis?**

2,925 g / 15 g × 100 = **19,5%**.

Jadi **estimated EY dari cangkir adalah 19,5%** berdasarkan tiga angka simulasi itu.

Bukan berarti kita menemukan flavor “ideal”. Yang kita peroleh adalah **perkiraan kuantitatif dengan asumsi pengukuran tepat dan model sesuai**.

### Kesalahan perhitungan yang sering muncul

Seorang siswa memasukkan angka **250 g air masuk**, bukan **225 g minuman terkumpul**:
- 250 × 1,30 / 15 = 21,67%

Angka tersebut berbeda dari 19,5%. Kita bisa melihat bagaimana kelalaian satu kolom menghasilkan kesimpulan lain, padahal kopi dan pengukurannya sama.

**Pemeriksaan:** Tidak ada alasan mengganti beverage mass dengan massa air masuk jika keduanya memang berbeda.


[VISUAL:strength-vs-extraction]

## 3. Dua seduhan, TDS sama, EY tidak sama

Semua angka berikut **simulasi**.

| Parameter | Gelas A | Gelas B |
|---|---:|---:|
| Dosis bubuk | 18 g | 18 g |
| Berat minuman terkumpul | 270 g | 300 g |
| TDS hasil | 1,20% | 1,20% |
| Estimasi massa kopi larut dalam cangkir | 3,24 g | 3,60 g |
| Estimated EY | 18,0% | 20,0% |

Keduanya mempunyai **konsentrasi TDS sama** tetapi jumlah minuman berbeda, sehingga massa zat terlarut dan perkiraan EY-nya berbeda.

Jadi kata-kata “TDS sama = extraction sama” tidak dapat dibenarkan tanpa mengetahui dosis dan beverage mass.

**Pertanyaan lanjutan:** Apakah B pasti lebih disukai? Tidak. Keduanya mungkin berbeda sensori, dan preferensi harus diuji. Angka tidak menyampaikan seluruh komposisi atau konteks tujuan minum.

## 4. Apa hubungan dengan brewing chart?

*Coffee Brewing Control Chart* klasik memetakan konsentrasi dan extraction yield serta menampilkan zona yang historis disebut “ideal”. Angka-angka historis seperti **18–22% EY** muncul dalam banyak pelatihan dan buku.

Kita tetap perlu mengenal bahasa itu. Tetapi pada 2023, peneliti UC Davis menerbitkan pendekatan chart baru yang menggabungkan **deskripsi sensori dan variasi preferensi konsumen**. SCA pun telah menyoroti kelemahan pembagian sembilan zona klasik yang memberi kesan batas-batas rasa terlalu tajam. [M02,M03]

Pelajaran tepat bukan “chart lama salah total”, melainkan:
- **Chart klasik** membantu orientasi pengukuran dan komunikasi.
- **Riset sensori lebih baru** memperlihatkan kompleksitas flavor dan perbedaan preferensi.
- **Keduanya** memiliki batas studi, sehingga jangan menjadikan satu angka sebagai pengganti validasi terhadap produk yang sedang ditangani.

Kita tidak menyalin gambar berlisensi dari chart tersebut ke materi. Konsep bisa diajarkan menggunakan tabel dan grafik buatan sendiri yang jelas atribusinya.

## 5. Apakah refraktometer wajib?

Tidak. Refraktometer dan skala berguna untuk latihan analisis profesional, tetapi tidak semua pembelajar memilikinya. Pada Foundation:
- Peserta **tanpa alat** cukup belajar menginterpretasikan data yang diberi label simulasi.
- Peserta yang punya alat boleh membaca manual serta mengikuti prosedur perawatan, kalibrasi, dan penanganan sampel produsen.
- **Kelulusan melalui simulasi** tidak berarti peserta kompeten melakukan pengukuran laboratorium secara fisik.

Faktor seperti homogenitas sampel, partikel tersuspensi, penanganan suhu, jenis instrumen, dan prosedur kalibrasi dapat memengaruhi hasil. Bila tersedia data yang tampak aneh, langkah pertama bukan langsung mengganti resep, tetapi **memeriksa kembali kualitas pengukuran**.

## 6. Diagnosis seduh tanpa “semua rasa asam = underextracted”

**Kasus simulasi:** Seorang pelanggan menilai kopi A lebih asam dan kurang menyukainya. Staf menemukan TDS 1,15% dan estimated EY 20,0%, tetapi tidak punya informasi roasting, pengukuran water chemistry atau suhu saat pencicipan.

Apakah EY 20% membuktikan kopi tidak mungkin terasa asam? **Tidak.** Sensori acidity tidak dihapus oleh nilai EY; kondisi bahan, roast, air dan preferensi dapat berperan. Begitu pula catatan “sour” belum membuktikan alat brewing salah.

**Langkah diagnosis yang masuk akal:**
1. Pastikan deskripsi pelanggan: apakah asam, tipis, atau terlalu tajam?
2. Verifikasi prosedur sampel dan parameter yang dicatat.
3. Jika mengubah resep, pilih satu intervensi utama lalu catat efek lain.
4. Bandingkan hasil secara wajar, tanpa mengabaikan preferensi dan konteks.

### Latihan keputusan

Staf berkata: “EY 23% berarti pasti overextracted dan minuman harus dibuang.”

**Perbaikan:** “23% adalah angka estimasi dengan metode dan asumsi tertentu. Kita perlu memeriksa sampel, alat, kualitas pencicipan, dan tujuan resep sebelum menyimpulkan ada masalah. Ambang chart klasik bukan verdict universal.”

## 7. Coba hitung sendiri

[ACTIVITY:brew-ey]

### Pertanyaan lanjutan

**Q2.** Air masuk 300 g tetapi beverage mass 265 g. Angka mana dipakai dalam model EY berbasis cangkir?  
**Jawab:** 265 g.

**Q3.** Apakah TDS meter EC air yang menunjukkan “150 ppm” dapat langsung dimasukkan sebagai 1,50% TDS kopi?  
**Jawab:** Tidak; itu jenis alat dan sampel berbeda.

**Q4.** Apakah hasil EY dari cangkir immersion selalu sama persis dengan seluruh zat yang sempat larut di dalam brewer?  
**Jawab:** Tidak; sebagian cairan masih tertahan bersama ampas.

**Q5.** Apa satu hal yang belum bisa disimpulkan dari TDS dan EY?  
**Jawab:** Flavor spesifik atau kesukaan semua konsumen.

## Penutup

Angka membuat pembicaraan brewing lebih akurat **jika jenis pengukuran, satuan, sampel, dan batas modelnya diketahui**. Nilai TDS dan EY bukan tujuan akhir. Mereka membantu kita menelusuri apa yang berubah dan merancang eksperimen yang lebih baik.

**Berikutnya:** Kita akan melakukan tantangan seduh satu variabel dan menulis keputusan berdasarkan bukti, tanpa wajib membeli alat apa pun.

---
### Referensi & QA
- [M01] UC Davis, *Equilibrium desorption model for full immersion coffee* (2021): https://pmc.ncbi.nlm.nih.gov/articles/PMC7994670/
- [M02] Guinard et al. (2023), new consumer/sensory brewing chart: https://pubmed.ncbi.nlm.nih.gov/36988107/
- [M03] SCA, *Towards a New Brewing Chart*: https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t
- [M04] UC Davis Coffee Center, new chart announcement (2025): https://coffeecenter.ucdavis.edu/news/uc-davis-coffee-center-contributes-research-new-brewing-control-chart
- **Editorial caution:** Assumed estimated EY from beverage mass neglects extraction retained in spent grounds, particularly immersion. This is explicitly a classroom approximation. No measuring instrument has been used in this authoring session. Reviewer with brewing lab expertise required before release.
