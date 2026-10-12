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
        "text": "Mulai dari mengganti grind dan suhu sekaligus, karena keduanya menentukan rasa.",
        "feedback": "Mengubah dua variabel sekaligus belum menjawab tujuan rasa atau alasan preferensi berbeda."
      },
      {
        "text": "Tanyakan tujuan rasa, buat satu penyesuaian terukur.",
        "feedback": "Perbedaan preferensi bukan bukti salah seduh. Perubahan terukur dipilih dari tujuan dan informasi cangkir."
      },
      {
        "text": "Pilih hasil yang disukai teman agar menjadi standar bagi seluruh peminum.",
        "feedback": "Preferensi teman bukan satu ukuran universal; kamu perlu mendefinisikan targetmu sendiri."
      },
      {
        "text": "Jadikan ratio 1:15 sebagai patokan tetap, lalu fokus pada alat yang lebih presisi.",
        "feedback": "Tidak ada ratio yang menjamin kesukaan; alat presisi tidak menggantikan pertanyaan sensorik."
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
        "text": "Pindahkan kettle ke tepi meja dan terus seduh agar antrean pekerjaan tidak tertunda.",
        "feedback": "Memindahkan satu alat tanpa memastikan area basah dan listrik aman masih berisiko."
      },
      {
        "text": "Kurangi jumlah air per seduhan supaya risiko tumpahan dan panas menjadi lebih kecil.",
        "feedback": "Mengubah takaran tidak menghilangkan bahaya listrik atau penggunaan wadah yang tidak aman."
      },
      {
        "text": "Tutup genangan dengan lap lalu jalankan kembali kettle jika indikator tidak menyala.",
        "feedback": "Indikator normal bukan bukti kondisi listrik aman; area berisiko harus diamankan terlebih dahulu."
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
        "text": "Catatan strawberry wajib muncul bila suhu dan grind sesuai rekomendasi.",
        "feedback": "Descriptor adalah pengalaman aroma/rasa, bukan kandungan buah pasti atau jaminan suhu seduh."
      },
      {
        "text": "Catatan roastery harus dipakai sebagai acuan rasa akhir semua pembeli.",
        "feedback": "Penilaian roastery memberi konteks, tetapi respons individu dan metode seduh dapat berbeda."
      },
      {
        "text": "Grafik ekstraksi akan memastikan strawberry muncul pada cangkir.",
        "feedback": "Grafik ekstraksi tidak membuktikan hadirnya descriptor tertentu atau preferensi universal."
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
        "text": "Karena nomor knob sama, pastikan ratio dan suhu identik sebelum menilai hasil grind.",
        "feedback": "Ratio dan suhu dapat diperiksa, tetapi nomor knob berbeda merek tidak setara otomatis."
      },
      {
        "text": "Grinder B kemungkinan perlu diganti burr karena setting angka sama tidak memberi hasil sama.",
        "feedback": "Masalah belum boleh langsung dikaitkan pada kerusakan burr tanpa memeriksa kondisi lainnya."
      },
      {
        "text": "Skala grinder tidak universal; cek partikel, alat dan kondisi.",
        "feedback": "Setting relatif pada unit; penyebab lain dan validasi proses perlu diperiksa."
      },
      {
        "text": "Samakan shot time terlebih dahulu agar ukuran partikel dua grinder dapat dianggap setara.",
        "feedback": "Waktu yang sama tidak membuktikan distribusi ukuran partikel atau rasa keduanya identik."
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
        "text": "1:12,3 karena pembilang harus menggunakan berat minuman yang selesai dikumpulkan.",
        "feedback": "Untuk filter brew-water ratio, pembilang air adalah 225 g air input, bukan output 185 g."
      },
      {
        "text": "1:15 karena air masuk 225 g.",
        "feedback": "Rasio input 15:225 = 1:15, bukan massa output. EY memerlukan data tambahan."
      },
      {
        "text": "1:18 karena air yang tertahan kopi ikut dihitung dua kali sebagai input seduhan.",
        "feedback": "Air tertahan sudah bagian dari air input; menghitungnya lagi akan keliru."
      },
      {
        "text": "Data rasio tidak dapat ditetapkan sampai kadar zat terlarut TDS diukur lebih dulu.",
        "feedback": "TDS untuk estimasi EY, bukan syarat menghitung 225/15 sebagai rasio input."
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
        "text": "A lebih pekat, sehingga estimasi EY pasti lebih tinggi meski beverage lebih rendah.",
        "feedback": "Konsentrasi tinggi bukan berarti massa total zat terlarut lebih tinggi; hitung TDS×beverage."
      },
      {
        "text": "A dan B berbeda beverage mass, sehingga estimasi EY pasti harus berbeda pula.",
        "feedback": "Perbedaan output dapat diimbangi oleh perbedaan konsentrasi; periksa neraca massanya."
      },
      {
        "text": "EY B adalah 8 persen sebab nilai TDS dan EY memakai penyebut massa yang sama.",
        "feedback": "TDS memakai massa minuman; EY membandingkan massa zat terlarut terhadap dose kopi awal."
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
        "text": "Waktu berubah terutama karena grind, sebab filter hanya menyaring partikel dan tak mengubah flow.",
        "feedback": "Media filter memiliki karakter flow dan retensi; ada variabel tuang yang juga berubah."
      },
      {
        "text": "Selisih drawdown cukup untuk menandai kopi B lebih terekstraksi meski tanpa pengukuran lain.",
        "feedback": "Waktu bukan bukti kuantitatif EY atau rasa; perlu melihat perubahan faktor dan hasil nyata."
      },
      {
        "text": "Filter baru paling mungkin mempercepat brew, jadi catatan lebih lambat menunjukkan salah timbang.",
        "feedback": "Arah efek filter tidak universal, dan salah timbang belum dibuktikan."
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
        "text": "Tetapkan 45 detik sebagai kondisi pembanding, lalu pertahankan selalu karena variabel lain sulit dikontrol.",
        "feedback": "Baseline boleh dipakai untuk uji, tetapi tidak boleh otomatis menjadi satu aturan wajib semua kopi."
      },
      {
        "text": "Lewati tahap pembasahan awal bila bed terlihat basah sesaat setelah tuangan pertama.",
        "feedback": "Pengamatan pembasahan permukaan tidak membuktikan wetting yang merata di seluruh bed."
      },
      {
        "text": "Pahami wetting dan uji kondisi kopi/alat tanpa satu angka universal.",
        "feedback": "Bloom adalah wetting phase; perlakuannya perlu menyesuaikan alat dan bahan."
      },
      {
        "text": "Perpanjang bloom setiap kali terlihat gelembung lebih banyak, lalu jaga grind dan air tetap sama.",
        "feedback": "Jumlah gelembung tidak memberi target durasi yang universal; prediksi harus diuji."
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
        "text": "Inverted boleh dipakai asal bejana ditahan erat dengan kedua tangan.",
        "feedback": "Pabrikan justru menyarankan menghindari inverted karena ketidakstabilan dan risiko tumpahan panas."
      },
      {
        "text": "Gunakan metode standar yang stabil dan aksesori kompatibel jika diperlukan.",
        "feedback": "AeroPress memperingatkan inverted tidak stabil dan berisiko luka bakar. Gunakan metode standar/manual."
      },
      {
        "text": "Plunger diberi tekanan ekstra agar waktu immersion lebih konsisten.",
        "feedback": "Tekanan ekstra tidak diperlukan untuk mengatasi drip-through dan dapat menimbulkan bahaya."
      },
      {
        "text": "Metode inverted aman bila dilakukan jauh dari pinggir meja.",
        "feedback": "Improvisasi alas tidak membatalkan peringatan resmi tentang metode inverted."
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
        "text": "Sedimen terjadi karena kopi terlalu lama berkontak dengan air.",
        "feedback": "Sedimen terutama terkait partikel dan filter; waktu saja tidak dapat membuktikan penyebabnya."
      },
      {
        "text": "Endapan menunjukkan grind harus dibuat lebih kasar setiap kali.",
        "feedback": "Grind dapat berperan, tetapi mesh, penanganan plunge dan pilihan mouthfeel juga relevan."
      },
      {
        "text": "Partikel membuktikan mesh filter sudah tak layak dipakai.",
        "feedback": "Keberadaan partikel bukan pengukuran ekstraksi ataupun konsistensi proses keseluruhan."
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
        "text": "Ya, karena TDS yang sama biasanya mencerminkan hardness yang sama pada jenis air minum.",
        "feedback": "TDS meter tidak memisahkan Ca/Mg dari ion lain atau menunjukkan kapasitas buffering."
      },
      {
        "text": "Ya, karena air dengan angka TDS sama mempunyai kandungan mineral dan keamanan setara.",
        "feedback": "Kesamaan TDS tidak membuktikan ion identik maupun keamanan mikrobiologis."
      },
      {
        "text": "Tidak, sebab TDS 100 ppm otomatis menunjukkan kedua air memiliki alkalinitas rendah.",
        "feedback": "Angka TDS tidak menyediakan alkalinitas spesifik; perlu pengujian parameter terkait."
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
        "text": "Ya, karena suhu kopi langsung mengikuti kettle jika ketel menunjukkan angka tepat sebelum tuang.",
        "feedback": "Alat, udara dan bubuk memengaruhi panas; tidak identik sepanjang proses."
      },
      {
        "text": "Ya, kecuali bloom berlangsung lebih lama; selebihnya suhu bed dapat dipakai sama dengan kettle.",
        "feedback": "Bloom bukan satu-satunya pengaruh pada suhu bed; titik ukur berbeda."
      },
      {
        "text": "Tidak; panas berpindah melalui alat, udara dan kopi.",
        "feedback": "Suhu kettle di titik tertentu tidak identik dengan temperatur coffee bed sepanjang brew."
      },
      {
        "text": "Tidak, karena suhu coffee bed selalu turun tepat 13 derajat dibanding kettle di semua metode.",
        "feedback": "Tidak ada selisih tetap universal; tergantung perangkat, bahan dan proses."
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
        "text": "Jika keduanya mencicipi sampel yang sama, salah satu descriptor atau penilai harus diperbaiki.",
        "feedback": "Sepakat pada intensitas tetap memungkinkan preferensi berbeda; ini bukan kesalahan otomatis."
      },
      {
        "text": "Intensitas sensori dan tingkat kesukaan berbeda.",
        "feedback": "Deskripsi intensitas tidak mengharuskan preferensi identik."
      },
      {
        "text": "Uji yang tepat adalah memilih pencicip yang paling peka agar preferensi kelompok menjadi sama.",
        "feedback": "Kepekaan terhadap sensasi dan tingkat kesukaan adalah dua hal berbeda."
      },
      {
        "text": "Rasio ekstraksi harus diubah sampai semua orang memilih sampel yang tingkat acidity-nya sama.",
        "feedback": "Tidak ada resep yang dapat mewajibkan preferensi semua orang menjadi sama."
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
        "text": "Label jasmine menunjukkan seduhan memakai ekstrak bunga sehingga aromanya harus selalu ada.",
        "feedback": "Descriptor tidak membuktikan kopi diberi bahan bunga atau flavor tambahan."
      },
      {
        "text": "Jika aroma jasmine muncul, kopi semestinya selalu mengandung kadar kafein lebih tinggi.",
        "feedback": "Hubungan antara aroma tertentu dan kadar kafein tidak dapat disimpulkan dari catatan tasting."
      },
      {
        "text": "Aroma bunga membuktikan kopi berasal dari daerah dan varietas tertentu secara pasti.",
        "feedback": "Satu descriptor tidak dapat mengidentifikasi origin/varietas secara deterministik."
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
        "text": "Filter Q paling mungkin mengubah flow, sehingga perubahan grind dapat diabaikan saat analisis.",
        "feedback": "Kedua faktor berubah; menyalahkan satu tanpa pembanding merupakan confounding."
      },
      {
        "text": "Grind adalah faktor utama flow, sehingga perubahan jenis kertas tidak perlu diuji.",
        "feedback": "Filter dapat memengaruhi aliran; perlu mengisolasi variabel sebelum atribusi sebab."
      },
      {
        "text": "Kopi B lebih baik jika lebih lama karena lebih banyak zat rasa yang pasti terlarut.",
        "feedback": "Durasi bukan ukuran kualitas rasa dan tidak cukup untuk menentukan EY."
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
        "text": "Perkirakan EY dari durasi dan suhu, asalkan roast level dan air seduh sudah tercatat.",
        "feedback": "Rumus EY membutuhkan pengukuran zat terlarut, bukan hanya durasi dan suhu."
      },
      {
        "text": "Eksperimen tanpa refraktometer hanya berguna untuk rasa, tidak untuk hubungan grind dengan waktu.",
        "feedback": "Grind/flow dan perubahan input masih bisa diukur; keterbatasan berlaku untuk EY numerik."
      },
      {
        "text": "Rasio dan waktu bisa diukur; EY numerik belum diketahui.",
        "feedback": "Tidak semua pertanyaan membutuhkan TDS; pertahankan batas bukti."
      },
      {
        "text": "Nilai EY dapat disamakan dengan persentase air yang tidak tertahan dalam bubuk.",
        "feedback": "Retensi air tidak sama dengan massa zat terlarut yang berpindah dari kopi."
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
        "text": "Perubahan hanya pada suhu sajian, karena total air sama dan bentuk es tidak memengaruhi ekstraksi.",
        "feedback": "Air yang melalui bed berbeda; suhu dan pencairan es juga dapat berubah."
      },
      {
        "text": "Air melalui bed dan massa es awal; total air sama.",
        "feedback": "Keduanya total 225g, tetapi ekstraksi dan dilution berpotensi berbeda."
      },
      {
        "text": "Air total berbeda walaupun angka yang tertulis sama karena es tidak dihitung sebagai air resep.",
        "feedback": "Es berkontribusi air ketika meleleh; total massa awal pada kedua contoh sama."
      },
      {
        "text": "Kedua resep identik dari sisi extraction karena kopi dan total air awal sama.",
        "feedback": "Jalur air melalui bed berbeda, sehingga proses extraction tidak identik."
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
        "text": "Sedikit kopi dicicipi dahulu sebelum batch diberikan ke tamu.",
        "feedback": "Mengecap sedikit tidak membuktikan keamanan dari patogen atau penanganan yang buruk."
      },
      {
        "text": "Gula pekat akan membantu batch bertahan beberapa hari lagi.",
        "feedback": "Gula dan suhu tidak memberi izin masa simpan arbitrer tanpa prosedur valid."
      },
      {
        "text": "Botol baru cukup mengatasi ketidakjelasan log suhu lama.",
        "feedback": "Memindahkan wadah tidak membuktikan bahan yang disimpan sebelumnya masih aman."
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
        "text": "Filter menjadi penyebab utama karena kopi baru lebih segar.",
        "feedback": "Tanpa desain pembanding, preferensi tidak mengidentifikasi penyebab individual."
      },
      {
        "text": "Kopi baru unggul karena uji menghasilkan preferensi tinggi.",
        "feedback": "Pengujian satu sesi tidak membuktikan keunggulan kopi universal maupun peran tiap variabel."
      },
      {
        "text": "Catatan eksperimen harus dihapus sebab pembanding tidak valid.",
        "feedback": "Observasi preferensi tetap bermakna sebagai pengalaman; keterbatasan kausal yang perlu ditulis."
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
        "text": "Tuliskan nama kreatif dan deskripsi rasa agar orang lain bisa menyesuaikan dosis sendiri.",
        "feedback": "Cerita rasa membantu tujuan, tetapi tidak menggantikan ukuran dan urutan kerja."
      },
      {
        "text": "Cukup foto grinder dan ketel agar setting dan suhu bisa direplikasi tanpa angka.",
        "feedback": "Foto tidak memberi dose/air, definisi waktu, setting atau output yang digunakan."
      },
      {
        "text": "Dose/air, alat, tahap/waktu dan cara mencatat hasil.",
        "feedback": "SOP reproduksibel memuat metrik, proses, konteks dan batas adaptasi."
      },
      {
        "text": "Berikan rating cangkir serta foto hasil, lalu biarkan pembaca mengikuti intuisi rasanya.",
        "feedback": "Rating/foto tidak menunjukkan proses, satuan dan batas adaptasi recipe."
      }
    ],
    "correct": 2,
    "rationale": "SOP reproduksibel memuat metrik, proses, konteks dan batas adaptasi."
  }
];
export const getHomeBrewerDiagnostics=(code:string)=>HOME_BREWER_DIAGNOSTICS.filter(x=>x.module===code);
