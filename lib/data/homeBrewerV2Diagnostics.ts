/** Original Home Brewer V2 formative questions; owner validation pending. */
export type HomeBrewerDiagnostic={id:string;module:string;title:string;scenario:string;options:{text:string;feedback:string}[];correct:number;rationale:string};
export const HOME_BREWER_DIAGNOSTICS:HomeBrewerDiagnostic[]=[
  {
    "id": "hb-diag-01",
    "module": "M01",
    "title": "Rasa bukan ujian angka",
    "scenario": "Cangkir 1:15 tidak kamu sukai, tetapi teman menyukainya. Apa keputusan paling masuk akal?",
    "options": [
      {
        "text": "Ubah semua variabel agar sesuai resep populer.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Tanyakan tujuan rasa, buat satu penyesuaian terukur.",
        "feedback": "Perbedaan preferensi bukan bukti salah seduh. Perubahan terukur dipilih dari tujuan dan informasi cangkir."
      },
      {
        "text": "Anggap teman salah membaca flavor.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Beli grinder baru karena ratio 1:15 sudah pasti benar.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      }
    ],
    "correct": 1,
    "rationale": "Perbedaan preferensi bukan bukti salah seduh. Perubahan terukur dipilih dari tujuan dan informasi cangkir."
  },
  {
    "id": "hb-diag-02",
    "module": "M01",
    "title": "Setup yang tidak aman",
    "scenario": "Kettle berada di dekat genangan dan kabel listrik. Langkah pertama?",
    "options": [
      {
        "text": "Selesaikan brew selagi kettle masih panas.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      },
      {
        "text": "Ganti biji agar brew lebih singkat.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Pindahkan gelas sambil tetap memakai alat listrik.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Stop pemakaian area terkait, amankan dan susun ulang sesuai SOP.",
        "feedback": "Pengendalian risiko listrik dan panas mendahului target resep."
      }
    ],
    "correct": 3,
    "rationale": "Pengendalian risiko listrik dan panas mendahului target resep."
  },
  {
    "id": "hb-diag-03",
    "module": "M02",
    "title": "Flavor notes dalam kemasan",
    "scenario": "Kopi berlabel strawberry. Pernyataan mana sah?",
    "options": [
      {
        "text": "Catatan sensori bisa mengingatkan strawberry, bukan berarti ada buah ditambah.",
        "feedback": "Descriptor berasal dari observasi rasa/aroma, bukan daftar bahan dan bukan janji universal."
      },
      {
        "text": "Semua pembeli pasti mengecap strawberry.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Kopi harus diseduh pada suhu yang sama untuk mendapat strawberry.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Aroma strawberry membuktikan kadar gula dalam kopi.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      }
    ],
    "correct": 0,
    "rationale": "Descriptor berasal dari observasi rasa/aroma, bukan daftar bahan dan bukan janji universal."
  },
  {
    "id": "hb-diag-04",
    "module": "M02",
    "title": "Nomor setting grinder",
    "scenario": "Grinder A dan B sama-sama angka 8 tapi hasil brew berbeda. Penjelasan terkuat?",
    "options": [
      {
        "text": "Angka 8 berarti ukuran partikel yang identik.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Salah satu alat pasti rusak.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Skala grinder tidak universal; cek partikel, alat dan kondisi.",
        "feedback": "Setting relatif pada unit; penyebab lain dan validasi proses perlu diperiksa."
      },
      {
        "text": "Rasio kopi harus menjadi 1:8 agar cocok.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      }
    ],
    "correct": 2,
    "rationale": "Setting relatif pada unit; penyebab lain dan validasi proses perlu diperiksa."
  },
  {
    "id": "hb-diag-05",
    "module": "M03",
    "title": "Air input vs beverage",
    "scenario": "15 g kopi dan 225 g air menghasilkan 185 g minuman. Nilai brew-water ratio input?",
    "options": [
      {
        "text": "1:12,3 karena minuman 185 g.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "1:15 karena air masuk 225 g.",
        "feedback": "Rasio input 15:225 = 1:15, bukan massa output. EY memerlukan data tambahan."
      },
      {
        "text": "1:18 karena air terserap kopi.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Tidak bisa dihitung jika TDS tidak ada.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      }
    ],
    "correct": 1,
    "rationale": "Rasio input 15:225 = 1:15, bukan massa output. EY memerlukan data tambahan."
  },
  {
    "id": "hb-diag-06",
    "module": "M03",
    "title": "Dua sampel dan EY",
    "scenario": "A: 20g dose, 40g beverage, TDS 10%; B: 20g, 50g, TDS 8%. Apa yang sah?",
    "options": [
      {
        "text": "B pasti lebih manis.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      },
      {
        "text": "A punya EY lebih rendah karena output sedikit.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "B punya EY 8% karena TDS 8%.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "EY perkiraan sama 20%; A konsentrasi lebih tinggi.",
        "feedback": "A dan B masing-masing mengandung estimasi 4 g zat terlarut dari dose 20 g."
      }
    ],
    "correct": 3,
    "rationale": "A dan B masing-masing mengandung estimasi 4 g zat terlarut dari dose 20 g."
  },
  {
    "id": "hb-diag-07",
    "module": "M04",
    "title": "V60 melambat",
    "scenario": "V60 B lebih lambat daripada A, tetapi filter dan pola tuang berubah. Apa kesimpulan terkuat?",
    "options": [
      {
        "text": "Waktu berubah; penyebab individual belum dipisahkan.",
        "feedback": "Filter, pouring, grind dan air dapat memengaruhi flow; waktu bukan diagnosis rasa."
      },
      {
        "text": "Grind pasti terlalu halus.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "B pasti lebih bitter dan overextracted.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Filter B pasti rusak.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      }
    ],
    "correct": 0,
    "rationale": "Filter, pouring, grind dan air dapat memengaruhi flow; waktu bukan diagnosis rasa."
  },
  {
    "id": "hb-diag-08",
    "module": "M04",
    "title": "Bloom yang baik",
    "scenario": "Tutorial menuntut 45 detik bloom untuk setiap kopi. Tindakan yang masuk akal?",
    "options": [
      {
        "text": "Selalu 45 detik agar lolos kompetisi.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Abaikan pembasahan karena tidak memengaruhi hasil.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Pahami wetting dan uji kondisi kopi/alat tanpa satu angka universal.",
        "feedback": "Bloom adalah wetting phase; perlakuannya perlu menyesuaikan alat dan bahan."
      },
      {
        "text": "Bloom dibuat semakin lama tanpa batas saat kopi baru.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      }
    ],
    "correct": 2,
    "rationale": "Bloom adalah wetting phase; perlakuannya perlu menyesuaikan alat dan bahan."
  },
  {
    "id": "hb-diag-09",
    "module": "M05",
    "title": "AeroPress inverted",
    "scenario": "Kamu ingin menahan drip-through. Apa pendekatan yang sejalan dengan keselamatan produsen?",
    "options": [
      {
        "text": "Inverted wajib untuk kopi kompetisi.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Gunakan metode standar yang stabil dan aksesori kompatibel jika diperlukan.",
        "feedback": "AeroPress memperingatkan inverted tidak stabil dan berisiko luka bakar. Gunakan metode standar/manual."
      },
      {
        "text": "Tingkatkan tekanan plunger dengan alat tambahan.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Balik tabung berisi air panas tanpa penyangga.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      }
    ],
    "correct": 1,
    "rationale": "AeroPress memperingatkan inverted tidak stabil dan berisiko luka bakar. Gunakan metode standar/manual."
  },
  {
    "id": "hb-diag-10",
    "module": "M05",
    "title": "Sedimen French press",
    "scenario": "French press meninggalkan partikel halus. Apa pernyataan paling hati-hati?",
    "options": [
      {
        "text": "Pasti kopi basi.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      },
      {
        "text": "Selalu menandakan terlalu halus dan harus dibuang.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Semua mesh mempunyai pori sama.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Filter mesh dan partikel dapat menyebabkan sedimen; amati sebelum diagnosis rasa.",
        "feedback": "Sedimen dapat mengikuti pemisahan partikel; preferensi mouthfeel dan rasa berbeda."
      }
    ],
    "correct": 3,
    "rationale": "Sedimen dapat mengikuti pemisahan partikel; preferensi mouthfeel dan rasa berbeda."
  },
  {
    "id": "hb-diag-11",
    "module": "M06",
    "title": "TDS air 100 ppm",
    "scenario": "Dua air sama-sama terbaca TDS 100 ppm. Apakah hardness/alkalinitas pasti sama?",
    "options": [
      {
        "text": "Tidak; TDS tidak merinci komposisi ion.",
        "feedback": "TDS bukan analisis hardness, alkalinitas, pH atau keamanan mikrobiologis."
      },
      {
        "text": "Ya, keduanya harus memberi rasa sama.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Ya, keduanya aman tanpa tes lain.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Tidak, karena TDS berarti pH.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      }
    ],
    "correct": 0,
    "rationale": "TDS bukan analisis hardness, alkalinitas, pH atau keamanan mikrobiologis."
  },
  {
    "id": "hb-diag-12",
    "module": "M06",
    "title": "Temperatur bed",
    "scenario": "Ketel membaca 93°C tepat sebelum tuang. Apakah bed pasti 93°C?",
    "options": [
      {
        "text": "Ya karena angka kettle wajib sama dengan bed.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Ya bila bloom dilakukan 45 detik.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Tidak; panas berpindah melalui alat, udara dan kopi.",
        "feedback": "Suhu kettle di titik tertentu tidak identik dengan temperatur coffee bed sepanjang brew."
      },
      {
        "text": "Tidak; berarti bed selalu 80°C.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      }
    ],
    "correct": 2,
    "rationale": "Suhu kettle di titik tertentu tidak identik dengan temperatur coffee bed sepanjang brew."
  },
  {
    "id": "hb-diag-13",
    "module": "M07",
    "title": "Asam dan suka",
    "scenario": "Dua orang sepakat acidity X tinggi tapi berbeda preferensi. Penjelasan terbaik?",
    "options": [
      {
        "text": "Salah satu tidak memahami kopi.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Intensitas sensori dan tingkat kesukaan berbeda.",
        "feedback": "Deskripsi intensitas tidak mengharuskan preferensi identik."
      },
      {
        "text": "Peserta wajib memakai deskriptor Inggris.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "EY salah satu pasti lebih rendah.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      }
    ],
    "correct": 1,
    "rationale": "Deskripsi intensitas tidak mengharuskan preferensi identik."
  },
  {
    "id": "hb-diag-14",
    "module": "M07",
    "title": "Aroma bunga",
    "scenario": "Catatan tasting 'jasmine' berarti apa?",
    "options": [
      {
        "text": "Selalu ditambahkan bunga melati.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      },
      {
        "text": "Bukti high caffeine.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Kopi pasti dari satu negara.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Aroma mengingatkan bunga; bukan klaim komposisi bahan.",
        "feedback": "Aroma descriptor bukan daftar bahan dan bisa berbeda menurut pencicip."
      }
    ],
    "correct": 3,
    "rationale": "Aroma descriptor bukan daftar bahan dan bisa berbeda menurut pencicip."
  },
  {
    "id": "hb-diag-15",
    "module": "M08",
    "title": "Dua variabel berubah",
    "scenario": "Brew B lebih lambat, tetapi grind dan kertas berubah. Apa yang boleh diklaim?",
    "options": [
      {
        "text": "Ada beda waktu; sebab tunggal belum teridentifikasi.",
        "feedback": "Perlu membedakan dua kandidat variabel sebelum mengambil keputusan penyebab."
      },
      {
        "text": "Filter pasti satu-satunya penyebab.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Grind pasti satu-satunya penyebab.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "B selalu lebih enak.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      }
    ],
    "correct": 0,
    "rationale": "Perlu membedakan dua kandidat variabel sebelum mengambil keputusan penyebab."
  },
  {
    "id": "hb-diag-16",
    "module": "M08",
    "title": "Tanpa refraktometer",
    "scenario": "Brewer punya timbangan dan timer tetapi tidak TDS meter. Klaim yang boleh dibuat?",
    "options": [
      {
        "text": "EY numerik 20% bisa ditebak dari waktu.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Tidak ada eksperimen yang sah tanpa meter.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Rasio dan waktu bisa diukur; EY numerik belum diketahui.",
        "feedback": "Tidak semua pertanyaan membutuhkan TDS; pertahankan batas bukti."
      },
      {
        "text": "Semua kopi tetap mempunyai EY identik.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      }
    ],
    "correct": 2,
    "rationale": "Tidak semua pertanyaan membutuhkan TDS; pertahankan batas bukti."
  },
  {
    "id": "hb-diag-17",
    "module": "M09",
    "title": "Jumlah es",
    "scenario": "Iced filter 15g/150g hot water+75g es vs 15g/175g+50g es. Apa yang berubah?",
    "options": [
      {
        "text": "Hanya warna kopi, bukan proses.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Air melalui bed dan massa es awal; total air sama.",
        "feedback": "Keduanya total 225g, tetapi ekstraksi dan dilution berpotensi berbeda."
      },
      {
        "text": "Total input air berbeda 25g.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Tidak ada variabel berubah.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      }
    ],
    "correct": 1,
    "rationale": "Keduanya total 225g, tetapi ekstraksi dan dilution berpotensi berbeda."
  },
  {
    "id": "hb-diag-18",
    "module": "M09",
    "title": "Cold brew aman?",
    "scenario": "Botol cold brew tanpa log penyimpanan terlihat dan berbau normal. Pilihan defensibel?",
    "options": [
      {
        "text": "Minum sedikit untuk mengetes aman.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      },
      {
        "text": "Tambahkan sirup agar tahan seminggu.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      },
      {
        "text": "Pindah wadah baru lalu jamin aman.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Tahan/discard sesuai SOP bila kelayakan tidak dapat diverifikasi.",
        "feedback": "Penampilan dan bau bukan validasi keamanan pangan atau masa simpan."
      }
    ],
    "correct": 3,
    "rationale": "Penampilan dan bau bukan validasi keamanan pangan atau masa simpan."
  },
  {
    "id": "hb-diag-19",
    "module": "M10",
    "title": "V0 dan V1",
    "scenario": "V1 lebih disukai, tetapi kopi dan filter juga berbeda. Klaim terbaik?",
    "options": [
      {
        "text": "Disukai pada uji itu, tetapi sebab individual belum terisolasi.",
        "feedback": "Preferensi aktual dapat dicatat; klaim mekanisme butuh desain lebih terkontrol."
      },
      {
        "text": "Filter baru membuktikan kopi lebih manis.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Kopi baru pasti lebih unggul secara universal.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Tidak ada manfaat catatan eksperimen.",
        "feedback": "Jawaban ini memperlakukan satu indikator sebagai sebab/standar universal, padahal variabel lain masih perlu diperiksa."
      }
    ],
    "correct": 0,
    "rationale": "Preferensi aktual dapat dicatat; klaim mekanisme butuh desain lebih terkontrol."
  },
  {
    "id": "hb-diag-20",
    "module": "M10",
    "title": "Resep agar bisa diulang",
    "scenario": "Teman tak memahami resep 'tuang sampai pas'. Detail mana paling membantu?",
    "options": [
      {
        "text": "Nama minuman lebih puitis.",
        "feedback": "Solusi ini tidak menjawab pertanyaan utama atau melewati batas keselamatan/penyimpanan yang perlu diverifikasi."
      },
      {
        "text": "Foto kemasan merek grinder.",
        "feedback": "Ini menambah asumsi atau mengabaikan informasi penting; bedakan tujuan dan pengamatan sebelum memilih resep."
      },
      {
        "text": "Dose/air, alat, tahap/waktu dan cara mencatat hasil.",
        "feedback": "SOP reproduksibel memuat metrik, proses, konteks dan batas adaptasi."
      },
      {
        "text": "Satu rating selera tanpa kondisi brew.",
        "feedback": "Kesimpulan itu belum terbukti oleh data pada skenario; pilih pengamatan atau uji yang dapat membedakan mekanismenya."
      }
    ],
    "correct": 2,
    "rationale": "SOP reproduksibel memuat metrik, proses, konteks dan batas adaptasi."
  }
];
export const getHomeBrewerDiagnostics=(code:string)=>HOME_BREWER_DIAGNOSTICS.filter(x=>x.module===code);
