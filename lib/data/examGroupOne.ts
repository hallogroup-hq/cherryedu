export const examGroupOne = {
  "memahami-kopi-dari-hulu-ke-hilir": {
    "title": "Memahami Kopi dari Hulu ke Hilir",
    "casePrompt": "Sebuah koperasi menjual dua lot kopi dengan harga berbeda. Lot A memiliki informasi panen, sortasi, kadar air, dan cupping yang cukup lengkap; lot B lebih murah tetapi belum mempunyai data pascapanen. Seorang pembeli meminta kesimpulan rasa dan dampak ekonominya. Susun keputusan awal, tiga hal yang perlu diperiksa dari kebun sampai cangkir, satu pengujian perbandingan yang adil, dan alasan mengapa harga jual bukan bukti langsung pendapatan petani.",
    "rubric": [
      "Membedakan data terukur, dugaan penyebab, dan preferensi konsumen.",
      "Menjelaskan satu risiko mutu pascapanen serta data atau pengujian pendukung.",
      "Menyusun perbandingan seduh atau cupping dengan variabel yang dikendalikan.",
      "Tidak menyimpulkan kesejahteraan petani atau karakter rasa hanya dari harga/label."
    ],
    "questions": [
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-01",
        "area": "Pengamatan dan preferensi",
        "stem": "Dua pencicip sepakat bahwa sampel A beraroma panggang. Orang pertama menyukai A, orang kedua lebih menyukai B. Apa laporan paling tepat?",
        "options": [
          "Panel tidak konsisten; salah satu catatan aroma harus ditolak.",
          "Kesepakatan deskripsi aroma dapat terjadi sekalipun preferensi berbeda.",
          "Perbedaan preferensi membuktikan dua lot memiliki proses yang berbeda.",
          "Keduanya harus memilih A karena telah sepakat aromanya."
        ],
        "correct": 1,
        "explanation": "Deskripsi sensori menjelaskan pengalaman; penilaian kesukaan adalah dimensi yang berbeda."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-02",
        "area": "Jenis dan klasifikasi kopi",
        "stem": "Sebuah label menuliskan “Excelsa” tanpa nama spesies atau informasi pemasok. Sebelum membuat klaim taksonomi, langkah paling tepat adalah...",
        "options": [
          "Menganggap Excelsa selalu sinonim varietas Arabika.",
          "Menganggap nama dagang pasti membuktikan spesies Liberica.",
          "Meminta identifikasi dan bukti asal bahan; nama dagang saja belum cukup.",
          "Menganggap semua biji besar pasti varietas Excelsa."
        ],
        "correct": 2,
        "explanation": "Istilah dagang tidak otomatis memadai untuk menetapkan identitas botani."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-03",
        "area": "Panen dan mutu",
        "stem": "Dua kelompok panen sama-sama menunjukkan Brix rata-rata 18, tetapi tingkat kematangan ceri tidak merata pada salah satunya. Apa yang bisa disimpulkan?",
        "options": [
          "Angka Brix yang sama menjamin hasil cupping sama.",
          "Lot dengan variasi kematangan tetap perlu pemisahan dan inspeksi; rata-rata saja tidak cukup.",
          "Lot kedua harus diolah natural karena Brix tinggi.",
          "Keduanya tidak membutuhkan sortasi lanjutan."
        ],
        "correct": 1,
        "explanation": "Brix adalah satu pengukuran, bukan pengganti distribusi kematangan, sortasi, dan inspeksi."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-04",
        "area": "Pascapanen",
        "stem": "Pemasok menyebut kopi proses honey, tetapi tidak mencatat tahapan pengupasan dan pengeringan. Apa pertanyaan berikutnya?",
        "options": [
          "Apakah tasting note pasti madu?",
          "Apakah kopi ditanam di dataran tinggi?",
          "Berapa banyak musilase dipertahankan, bagaimana pengeringannya, dan bagaimana lot dikontrol?",
          "Apakah kopi otomatis bebas defect?"
        ],
        "correct": 2,
        "explanation": "Nama proses mengacu pada praktik pengolahan, bukan rasa yang dapat dijamin."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-05",
        "area": "QC dan penyimpanan",
        "stem": "Lot green terlihat kering di bagian luar karung, tetapi muncul bau apek setelah gudang lembap. Keputusan yang paling aman adalah...",
        "options": [
          "Menyangrai segera agar semua risiko hilang.",
          "Menahan lot untuk pemeriksaan kondisi, kadar air/aw relevan, dan risiko kontaminasi sebelum digunakan.",
          "Mencampur dengan lot lain supaya bau tidak dominan.",
          "Mengubah label origin saja."
        ],
        "correct": 1,
        "explanation": "Penampakan luar tidak cukup untuk menjamin keamanan dan mutu; penanganan harus berbasis inspeksi."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-06",
        "area": "Roasting dan sensor",
        "stem": "Satu kurva suhu tampak lebih cepat dari minggu lalu, namun posisi probe diganti. Analisis awal yang paling kuat adalah...",
        "options": [
          "Menganggap profil rasa pasti meningkat.",
          "Membandingkan nilai RoR langsung tanpa catatan perubahan alat.",
          "Memeriksa konfigurasi serta pembacaan sensor sebelum menafsirkan perubahan proses.",
          "Menaikkan suhu drop secara otomatis."
        ],
        "correct": 2,
        "explanation": "Perubahan pembacaan sensor dapat menghasilkan kurva berbeda meskipun perilaku aktual tidak identik dengan interpretasinya."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-07",
        "area": "Yield dan lot",
        "stem": "Dari 15 kg green diperoleh 12,9 kg kopi roasted; 0,4 kg ditahan QC. Berapa persentase kehilangan saat roasting dan jumlah saleable?",
        "options": [
          "14% dan 12,5 kg.",
          "16% dan 12,9 kg.",
          "14% dan 12,9 kg.",
          "17% dan 12,5 kg."
        ],
        "correct": 0,
        "explanation": "Loss roasting = (15−12,9)/15 = 14%; saleable = 12,9−0,4 = 12,5 kg."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-08",
        "area": "Eksperimen seduh",
        "stem": "Dose 20 g, minuman terkumpul 250 g, TDS 1,4%. Jika alat terkalibrasi dan datanya valid, berapa estimasi extraction yield?",
        "options": [
          "1,75%.",
          "14%.",
          "17,5%.",
          "28%."
        ],
        "correct": 2,
        "explanation": "Estimasi zat terlarut 250×0,014=3,5 g; 3,5/20=17,5%."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-09",
        "area": "Mekanisme seduh",
        "stem": "Seseorang menyamakan karakter French Press dan V60 hanya berdasarkan rasio 1:15. Apa koreksi yang diperlukan?",
        "options": [
          "Rasio sama menjamin extraction yield sama.",
          "French Press dan V60 sama-sama hanya immersion.",
          "Mekanisme immersion/percolation, aliran, grind, filter dan kontak air juga menentukan hasil.",
          "V60 tidak dipengaruhi ukuran giling."
        ],
        "correct": 2,
        "explanation": "Rasio bukan resep lengkap dan tidak membatalkan perbedaan mekanisme seduh."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-10",
        "area": "Sensori dan bias",
        "stem": "Panel A selalu mencicipi sampel mahal setelah melihat kemasan, sementara panel B menerima kode acak. Untuk menguji apakah label memengaruhi rating, rancangan apa yang lebih layak?",
        "options": [
          "Memakai label yang lebih menarik.",
          "Membandingkan nilai kedua panel tanpa prosedur tambahan.",
          "Menyamakan kondisi sajian dan menerapkan randomisasi serta blind coding yang terdokumentasi.",
          "Menganggap panel berpengalaman bebas bias."
        ],
        "correct": 2,
        "explanation": "Blind coding dan kondisi terkontrol mengurangi efek ekspektasi."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-11",
        "area": "Sejarah dan rantai nilai",
        "stem": "Dua sumber memberikan tanggal berbeda tentang persebaran kopi di suatu daerah. Untuk materi sejarah, pendekatan yang tepat ialah...",
        "options": [
          "Mengambil tahun terawal dan menuliskannya sebagai kepastian.",
          "Memeriksa jenis bukti, konteks dan keterbatasan kedua sumber sebelum menyimpulkan.",
          "Memilih narasi yang lebih menarik bagi siswa.",
          "Menghapus peran jaringan perdagangan dari cerita."
        ],
        "correct": 1,
        "explanation": "Klaim sejarah butuh konteks dokumen, periode dan jenis bukti; narasi tunggal dapat menyesatkan."
      },
      {
        "id": "memahami-kopi-dari-hulu-ke-hilir-12",
        "area": "Ekonomi kopi",
        "stem": "Harga retail kopi naik 20%, tetapi petani menjual green melalui dua perantara. Kesimpulan mana dapat dipertanggungjawabkan?",
        "options": [
          "Pendapatan petani pasti naik 20%.",
          "Porsi petani dalam harga retail pasti stabil.",
          "Harga retail saja tidak menunjukkan pendapatan petani; diperlukan volume, harga di tingkat produsen, biaya dan pembagian nilai.",
          "Harga retail selalu sama dengan landed green cost."
        ],
        "correct": 2,
        "explanation": "Distribusi nilai, biaya tiap pelaku dan volume penjualan menentukan dampak ekonomi di hulu."
      }
    ]
  },
  "barista-v2": {
    "title": "Barista Specialization",
    "casePrompt": "Pada jam ramai, espresso dari lot baru mengalir lebih cepat, seorang pelanggan meminta minuman oat tanpa kontaminasi susu sapi, dan stok biji hampir habis. Jelaskan urutan prioritas yang aman, rencana dial-in yang dapat diuji, komunikasi kepada pelanggan dan penanganan jika alat atau area kerja tak mampu menjamin pesanan.",
    "rubric": [
      "Menempatkan keselamatan pangan dan alergen sebelum kecepatan servis.",
      "Mengusulkan satu eksperimen espresso yang mengubah variabel secara terkontrol.",
      "Memisahkan observasi aliran, rasa, dan asumsi penyebab.",
      "Menjelaskan opsi layanan yang jujur termasuk eskalasi/penolakan bila keselamatan tidak terjamin."
    ],
    "questions": [
      {
        "id": "barista-v2-01",
        "area": "Alur layanan",
        "stem": "Pada bar ramai, dua pesanan tertukar setelah cup diberi label sangat mirip. Perbaikan sistem yang paling dapat diaudit adalah...",
        "options": [
          "Meminta barista lebih fokus tanpa mengubah proses.",
          "Menggunakan identifikasi order yang jelas serta verifikasi pada handoff dan mencatat salah serah.",
          "Menghapus label agar cup bersih.",
          "Menambah speed target tanpa cek."
        ],
        "correct": 1,
        "explanation": "Identifikasi dan titik pemeriksaan mengurangi kesalahan lintas stasiun."
      },
      {
        "id": "barista-v2-02",
        "area": "Ekstraksi",
        "stem": "Shot 18 g in, 45 g out dalam 24 detik terasa tipis. Seorang rekan menyarankan target 1:2 sebagai hukum tetap. Apa sikap terbaik?",
        "options": [
          "Langsung mengubah semua shot menjadi 36 g.",
          "Menyajikan terus karena durasi sudah mendekati angka umum.",
          "Menetapkan tujuan rasa, mencicipi, lalu menguji yield atau grind terkontrol sambil mencatat hasil.",
          "Menyimpulkan biji pasti berkualitas buruk."
        ],
        "correct": 2,
        "explanation": "Rasio adalah variabel yang diuji, bukan ukuran universal mutu."
      },
      {
        "id": "barista-v2-03",
        "area": "Grinder dan perubahan lot",
        "stem": "Sesudah mengganti lot, shot memendek dan rasa berubah, tetapi mesin belum diubah. Apa pemeriksaan awal yang paling informatif?",
        "options": [
          "Mengganti dosis, distribusi, suhu dan tekanan bersamaan.",
          "Memverifikasi dose/yield, kondisi grinder, distribusi dan pencatatan rasa sebelum menguji satu perubahan.",
          "Membuang seluruh biji.",
          "Mencoba 10 resep acak tanpa log."
        ],
        "correct": 1,
        "explanation": "Baseline membuat perubahan dapat ditafsirkan dan diulang."
      },
      {
        "id": "barista-v2-04",
        "area": "Channeling",
        "stem": "Dua shot berakhir dalam 28 detik, tetapi salah satu menunjukkan spurting dan rasa tidak seimbang. Apa kesimpulan paling tepat?",
        "options": [
          "Durasi sama membuktikan kedua shot identik.",
          "Spurting selalu berasal dari suhu boiler.",
          "Pemeriksaan distribusi dan puck prep dibutuhkan; total waktu tidak mencakup pemerataan aliran.",
          "Harus menaikkan dosis sampai maksimum basket."
        ],
        "correct": 2,
        "explanation": "Waktu total tidak mengungkap distribusi ekstraksi pada puck."
      },
      {
        "id": "barista-v2-05",
        "area": "Kalibrasi",
        "stem": "Dalam uji grind, barista mengubah satu langkah lebih halus tetapi temperatur mesin ternyata turut naik. Cara membaca hasilnya adalah...",
        "options": [
          "Menyebut grind satu-satunya penyebab.",
          "Mencatat perubahan suhu sebagai confounder dan mengulang dengan kondisi lebih terkendali.",
          "Menganggap hasil tidak perlu dicatat.",
          "Memutuskan kopi tidak bisa di-dial-in."
        ],
        "correct": 1,
        "explanation": "Perubahan simultan menghambat atribusi sebab."
      },
      {
        "id": "barista-v2-06",
        "area": "Alergen",
        "stem": "Pelanggan alergi susu sapi memesan oat latte, tetapi steam wand pernah dipakai susu dan prosedur sanitasi tidak jelas. Apa keputusan aman?",
        "options": [
          "Menjamin bebas alergen karena susu diganti oat.",
          "Membersihkan cepat dengan lap yang sama.",
          "Memastikan prosedur pencegahan cross-contact tervalidasi, dan tidak menjamin bebas alergen bila tidak dapat dipastikan.",
          "Menambahkan sirup agar tidak terasa susu."
        ],
        "correct": 2,
        "explanation": "Bahan pengganti tidak menghilangkan risiko kontak silang."
      },
      {
        "id": "barista-v2-07",
        "area": "Tekstur susu",
        "stem": "Microfoam sangat berbusa kasar walaupun minuman masih hangat. Mana eksperimen paling baik?",
        "options": [
          "Menambah udara sepanjang proses tanpa batas.",
          "Mengamati aerasi awal, posisi wand, dan fase teksturisasi dengan satu penyesuaian aman.",
          "Mengabaikannya karena latte art hanya hiasan.",
          "Memanaskan berulang kali tanpa mempertimbangkan keamanan."
        ],
        "correct": 1,
        "explanation": "Aerasi dan integrasi foam adalah fase berbeda; uji perlu batas suhu dan keselamatan."
      },
      {
        "id": "barista-v2-08",
        "area": "Permintaan pelanggan",
        "stem": "Pelanggan berkata 'kopinya kuat tetapi tidak pahit' sambil menghindari kafein. Respons terbaik adalah...",
        "options": [
          "Menjanjikan espresso lebih pekat selalu kurang pahit dan bebas kafein.",
          "Mengklarifikasi apakah kuat berarti intensitas rasa atau kafein lalu menawarkan pilihan dan keterbatasannya.",
          "Memberi double shot tanpa bertanya.",
          "Menganggap tidak perlu rekomendasi."
        ],
        "correct": 1,
        "explanation": "Kebutuhan ambigu harus diklarifikasi sebelum memilih resep."
      },
      {
        "id": "barista-v2-09",
        "area": "Operasional",
        "stem": "Dua grinder dan satu mesin menghasilkan antrian pada satu stasiun finishing. Sebelum membeli grinder baru, tindakan rasional adalah...",
        "options": [
          "Mencatat waktu tiap tahap dan mengidentifikasi bottleneck aktual.",
          "Membeli mesin paling mahal.",
          "Menambah semua stok bahan tanpa audit.",
          "Memotong tahapan kebersihan."
        ],
        "correct": 0,
        "explanation": "Perbaikan kapasitas bermula dari bukti lokasi bottleneck, bukan dugaan alat."
      },
      {
        "id": "barista-v2-10",
        "area": "Keselamatan alat",
        "stem": "Steam wand menunjukkan kebocoran tak biasa dan tekanan tidak stabil saat shift. Apa yang harus dilakukan?",
        "options": [
          "Mencari sambungan pipa panas dengan tangan.",
          "Menaikkan tekanan untuk menstabilkan.",
          "Menghentikan penggunaan sesuai SOP, isolasi jika aman, dan eskalasi kepada teknisi berwenang.",
          "Meneruskan pemakaian sampai closing."
        ],
        "correct": 2,
        "explanation": "Pengguna tidak boleh melakukan perbaikan berbahaya saat alat masih aktif."
      },
      {
        "id": "barista-v2-11",
        "area": "HPP",
        "stem": "Satu minuman berharga Rp32.000 memakai bahan Rp10.000, cup Rp2.000 dan fee platform Rp6.000. Jika tak ada biaya variabel lain, berapa selisih neto sebelum biaya tetap?",
        "options": [
          "Rp22.000.",
          "Rp20.000.",
          "Rp14.000.",
          "Rp12.000."
        ],
        "correct": 2,
        "explanation": "32.000−10.000−2.000−6.000=Rp14.000 sebelum biaya tetap lain."
      },
      {
        "id": "barista-v2-12",
        "area": "Pengembangan menu",
        "stem": "Dua iterasi signature drink berbeda rasa, waktu servis dan waste, tetapi panel pelanggan menyukai keduanya. Dasar pemilihan yang lebih kuat adalah...",
        "options": [
          "Memilih nama yang paling panjang.",
          "Menilai target rasa, repeatability, safety, HPP dan kemampuan servis pada jam ramai.",
          "Memilih yang memakai bahan terbanyak.",
          "Mengabaikan keterbatasan penyimpanan."
        ],
        "correct": 1,
        "explanation": "R&D minuman harus dapat diproduksi konsisten, aman dan ekonomis."
      }
    ]
  },
  "home-brewer-v2": {
    "title": "Home Brewer Specialization",
    "casePrompt": "Kamu membeli biji baru dan ingin membuat resep V60 yang cocok untuk dua orang, tanpa menjadikan resep internet sebagai patokan tetap. Buat rencana tiga kali seduh dengan dosis dan kondisi yang tercatat, kontrol variabel, evaluasi rasa, satu alternatif jika aliran melambat, serta bagaimana mengurangi bias kesukaan kedua pencicip.",
    "rubric": [
      "Menjelaskan rasio, dosis, air masuk dan output minuman sebagai satuan berbeda.",
      "Menentukan baseline dan mengubah satu faktor utama per eksperimen.",
      "Mencatat hasil rasa dan kontrol suhu, grind dan pouring sebelum menyimpulkan.",
      "Menyusun perbandingan sensori yang adil dan aman bagi kedua pencicip."
    ],
    "questions": [
      {
        "id": "home-brewer-v2-01",
        "area": "Label dan ekspektasi",
        "stem": "Dua kopi mempunyai label 'fruity', tetapi saat dicicipi salah satunya lebih bernuansa kacang. Apa tindakan tepat?",
        "options": [
          "Menganggap produk pasti palsu.",
          "Menggunakan label sebagai hipotesis dan membuat catatan sensori sendiri pada kondisi yang sebanding.",
          "Menaikkan suhu sampai rasa buah pasti muncul.",
          "Membandingkan harga saja."
        ],
        "correct": 1,
        "explanation": "Tasting note pada kemasan adalah petunjuk, bukan janji persepsi tiap penyeduh."
      },
      {
        "id": "home-brewer-v2-02",
        "area": "Rasio dan output",
        "stem": "Untuk 18 g kopi dan 270 g air masuk, hasil minuman 226 g. Pernyataan yang benar adalah...",
        "options": [
          "Rasio brew-water 1:12,6.",
          "Rasio air masuk 1:15; beverage output berbeda karena retensi air.",
          "Beverage output wajib sama dengan air masuk.",
          "Dose minuman adalah 270 g."
        ],
        "correct": 1,
        "explanation": "270/18=15, sedangkan hasil cairan keluar dikurangi cairan tertahan pada kopi/filter."
      },
      {
        "id": "home-brewer-v2-03",
        "area": "Extraction yield",
        "stem": "Kamu mengekstrak 21 g kopi menjadi 300 g minuman pada TDS 1,26%. Berapa EY terestimasi?",
        "options": [
          "12,6%.",
          "15%.",
          "18%.",
          "21%."
        ],
        "correct": 2,
        "explanation": "300×0,0126/21 =0,18 atau 18%."
      },
      {
        "id": "home-brewer-v2-04",
        "area": "Grinder dan replikasi",
        "stem": "Resep dari pengguna grinder berbeda disebut '18 click'. Apa informasi yang paling penting untuk adaptasi?",
        "options": [
          "Menganggap semua 18 click setara.",
          "Menyamakan jumlah click dan menolak evaluasi rasa.",
          "Mencatat model grinder, grind dan respons aliran/sensori pada alat sendiri.",
          "Mengganti merek kopi sampai hasil identik."
        ],
        "correct": 2,
        "explanation": "Click bukan satuan fisik universal lintas grinder."
      },
      {
        "id": "home-brewer-v2-05",
        "area": "V60 dan aliran",
        "stem": "Pada percobaan kedua, drawdown sangat melambat tetapi dosis, suhu dan filter sama; teknik pouring lebih agresif. Apa hipotesis masuk akal?",
        "options": [
          "Agitasi dapat memengaruhi pergerakan fines dan resistance; uji ulang dengan pola tuang terkontrol.",
          "Waktu tidak dapat berubah karena suhu sama.",
          "Semua lambat pasti berasal dari roast terlalu gelap.",
          "Menambah agitasi lagi sampai drawdown makin lambat."
        ],
        "correct": 0,
        "explanation": "Agitasi dan fines movement dapat mengubah resistance; perlu pembandingan terkontrol."
      },
      {
        "id": "home-brewer-v2-06",
        "area": "AeroPress aman",
        "stem": "Pemula mempertimbangkan metode inverted di atas meja licin dan air hampir mendidih. Apa pilihan paling aman?",
        "options": [
          "Menganggap posisi inverted selalu lebih baik.",
          "Memulai dari metode upright sesuai panduan produsen, permukaan stabil dan proteksi dari air panas.",
          "Menggunakan cangkir kaca tipis tanpa pemeriksaan.",
          "Menekan alat di atas kepala."
        ],
        "correct": 1,
        "explanation": "Metode upright lebih sesuai panduan umum produsen dan mengurangi risiko tumpah air panas."
      },
      {
        "id": "home-brewer-v2-07",
        "area": "Immersion versus percolation",
        "stem": "Resep French Press dipindah ke V60 dengan dosis dan air sama, lalu hasil berubah. Penjelasan terbaik adalah...",
        "options": [
          "Rasio sama harus berarti sama ekstraksi.",
          "Immersion dan percolation berbeda dalam kontak dan aliran air, sehingga transfer butuh penyesuaian.",
          "V60 tidak memakai filter.",
          "French Press tidak dipengaruhi grind."
        ],
        "correct": 1,
        "explanation": "Parameter perlu diadaptasi menurut mekanisme ekstraksi."
      },
      {
        "id": "home-brewer-v2-08",
        "area": "Air seduh",
        "stem": "Dua jenis air memiliki TDS total 100 mg/L tetapi komposisi mineralnya berlainan. Apa simpulan tepat?",
        "options": [
          "Pasti menghasilkan rasa sama.",
          "TDS menyebut total zat terlarut, bukan komposisi hardness/alkalinity; keduanya perlu dipertimbangkan.",
          "Yang satu pasti beracun.",
          "Alkalinity selalu setara dengan TDS."
        ],
        "correct": 1,
        "explanation": "Konsentrasi total tidak menggantikan spesiasi mineral."
      },
      {
        "id": "home-brewer-v2-09",
        "area": "Blind tasting",
        "stem": "Temanmu selalu tahu mana kopi yang lebih mahal sebelum memilih favorit. Bagaimana menguji pengaruh label?",
        "options": [
          "Menambah deskripsi kemasan saat mencicip.",
          "Mencampur gula agar sama manis.",
          "Memberi kode acak, menyamakan kondisi seduh dan membalik urutan penyajian bila diperlukan.",
          "Memakai satu cangkir saja."
        ],
        "correct": 2,
        "explanation": "Blind coding dan penanganan efek urutan membantu membedakan persepsi dari ekspektasi."
      },
      {
        "id": "home-brewer-v2-10",
        "area": "Japanese iced",
        "stem": "Target sajian akhir 300 g terdiri dari 110 g es dalam server dan 190 g air seduh panas. Bila es seluruhnya mencair dan tidak memperhitungkan retensi, apa total air masuk?",
        "options": [
          "190 g.",
          "220 g.",
          "300 g.",
          "410 g."
        ],
        "correct": 2,
        "explanation": "Air panas dan es yang mencair sama-sama bagian dari total air resep: 190+110=300 g."
      },
      {
        "id": "home-brewer-v2-11",
        "area": "Cold brew",
        "stem": "Cold brew dibiarkan di suhu ruang sepanjang malam tanpa prosedur higienis yang diketahui. Apa respons masuk akal?",
        "options": [
          "Menyatakan aman karena kopi mengandung kafein.",
          "Mempertimbangkan risiko pangan, menggunakan alat bersih dan metode penyimpanan/pendinginan yang aman.",
          "Mencampur minuman itu dengan susu agar aw turun.",
          "Menambahkan es setelah 24 jam untuk menghilangkan mikroba."
        ],
        "correct": 1,
        "explanation": "Durasi kontak lama bukan jaminan keamanan pangan."
      },
      {
        "id": "home-brewer-v2-12",
        "area": "Eksperimen",
        "stem": "Pada tiga seduhan terakhir, jenis kopi, suhu air dan grind berubah bersamaan. Agar langkah berikutnya memberi bukti lebih kuat, kamu perlu...",
        "options": [
          "Membandingkan resep mana yang paling mahal.",
          "Mengganti lima variabel lain sekaligus.",
          "Mendefinisikan kondisi baseline, satu perubahan utama, pencatatan dan pengulangan jika perlu.",
          "Mengabaikan pencatatan karena selera subjektif."
        ],
        "correct": 2,
        "explanation": "Eksperimen yang terkendali membuat hubungan variabel dan hasil lebih dapat dipelajari."
      }
    ]
  }
} as const;
