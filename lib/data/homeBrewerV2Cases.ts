/** 30 evidence-revision formative scenarios; never grants completion or certification. */
export type HomeBrewerCase={id:string;module:string;title:string;brief:string;initialPrompt:string;newEvidence:string;revisionPrompt:string;model:string};
export const HOME_BREWER_V2_CASES:HomeBrewerCase[]=[
  {
    "id": "hb01-label",
    "module": "HB01",
    "title": "Label aroma buah",
    "brief": "Label menyebut jeruk dan bunga; kamu tidak menemukan aroma itu.",
    "initialPrompt": "Apa dua penjelasan selain 'roaster salah' yang dapat membuat aroma tidak sesuai label, dan pengamatan apa yang ingin kamu catat?",
    "newEvidence": "Apa yang bisa dilakukan tanpa menganggap label salah?",
    "revisionPrompt": "Ternyata air dan grinder berbeda dari demonstrasi roaster.",
    "model": "Bagaimana rencana perbandinganmu berubah?"
  },
  {
    "id": "hb01-process",
    "module": "HB01",
    "title": "Natural lawan washed",
    "brief": "Kamu berasumsi natural pasti lebih manis daripada washed.",
    "initialPrompt": "Seberapa kuat proses natural memprediksi sweetness? Tulis satu bukti yang akan membuatmu mempertanyakan dugaan itu.",
    "newEvidence": "Data sensory terbaru justru menunjukkan pencicip memilih washed karena terasa lebih manis.",
    "revisionPrompt": "Apa yang kamu revisi dari aturan awalmu?",
    "model": "Proses bukan penentu satu rasa; perbedaan kopi, roast, air dan penilai mungkin menjelaskan preferensi. Gunakan hasil cicip yang benar-benar dicatat."
  },
  {
    "id": "hb01-stock",
    "module": "HB01",
    "title": "Beli kopi 1kg",
    "brief": "Harga per kilogram lebih rendah dari bag 250g, tetapi kamu menyeduh sedikit.",
    "initialPrompt": "Hitung kira-kira durasi 1kg sesuai konsumsi rumah, lalu tentukan risiko penyimpanan yang belum kamu tahu.",
    "newEvidence": "Kamu menemukan penyimpanan sering terkena panas dan kelembapan tinggi.",
    "revisionPrompt": "Apa pembelian yang lebih rasional?",
    "model": "Nilai per serving juga tergantung konsumsi dan kualitas penyimpanan. Kemasan kecil bisa lebih masuk akal meski harga/kg lebih tinggi."
  },
  {
    "id": "hb02-ratio",
    "module": "HB02",
    "title": "1:15 di dua brewer",
    "brief": "15g kopi diseduh dengan 225g brew water pada V60 dan immersion.",
    "initialPrompt": "Dari 15g kopi dan 225g air, hitung rasio yang benar. Apakah jumlah air itu otomatis sama dengan beverage output?",
    "newEvidence": "V60 menghasilkan 184g minuman, immersion 193g.",
    "revisionPrompt": "Apakah salah satu otomatis lebih terekstraksi?",
    "model": "Input sama, output berbeda karena proses/retensi; perlu TDS/hasil sensori yang sesuai untuk menilai EY dan mutu."
  },
  {
    "id": "hb02-ey",
    "module": "HB02",
    "title": "TDS sama bukan rasa sama",
    "brief": "Dua cangkir mempunyai TDS sama menurut alat yang sesuai.",
    "initialPrompt": "Apa yang sebenarnya diberitahu TDS, dan informasi apa yang belum bisa disimpulkan tentang rasa kedua minuman?",
    "newEvidence": "Masing-masing ternyata berasal dari kopi dan roast berbeda.",
    "revisionPrompt": "Apa yang masih belum terbukti?",
    "model": "Konsentrasi relatif sama tidak berarti komposisi molekul dan aroma, rasa atau preferensi identik."
  },
  {
    "id": "hb02-timer",
    "module": "HB02",
    "title": "Brew time tercatat beda",
    "brief": "Kemarin 3 menit dan hari ini 3:20 dengan kopi sama.",
    "initialPrompt": "Sebelum mengubah grind karena timer beda, definisi pengukuran mana yang perlu disamakan?",
    "newEvidence": "Kemarin timer dimulai saat bloom, hari ini saat preheating.",
    "revisionPrompt": "Apa yang harus dibenahi sebelum diagnosis?",
    "model": "Samakan definisi awal waktu dan pastikan input lain tercatat; angka yang tidak komparabel bukan sinyal untuk mengubah grind."
  },
  {
    "id": "hb03-grind",
    "module": "HB03",
    "title": "Grinder 20 clicks",
    "brief": "Teman memakai 20 clicks dan hasil baik; alatmu juga berangka 20.",
    "initialPrompt": "Jika dua grinder bernomor sama, apa yang perlu diuji untuk menemukan setelan yang fungsional pada alatmu?",
    "newEvidence": "Merek dan model grinder ternyata berbeda.",
    "revisionPrompt": "Bagaimana kamu memindahkan resep?",
    "model": "Click adalah skala internal alat, bukan ukuran partikel global; ukur dose, yield, waktu dan penilaian nyata untuk menemukan setelan baru."
  },
  {
    "id": "hb03-temperature",
    "module": "HB03",
    "title": "Air tak persis 93 derajat",
    "brief": "Resep video menggunakan 93°C, kettle kamu tidak punya pengukur.",
    "initialPrompt": "Apa yang boleh dicatat tentang suhu seduh jika hanya ada angka kettle, bukan pengukuran pada coffee bed?",
    "newEvidence": "Air mendidih kemudian dipindahkan ke wadah yang dingin.",
    "revisionPrompt": "Bagaimana mencatat ketidakpastian suhu?",
    "model": "Catat prosedur dan alat yang digunakan, bukan suhu persis yang tidak diukur. Tetapkan kebiasaan aman dan uji hanya bila bisa."
  },
  {
    "id": "hb03-filter",
    "module": "HB03",
    "title": "Drawdown melambat",
    "brief": "Filter baru membuat waktu seduh lebih lama pada rasio yang sama.",
    "initialPrompt": "Ajukan dua hipotesis penyebab drawdown lebih lambat, serta satu tes paling hemat yang membedakannya.",
    "newEvidence": "Kopi juga digiling dengan grinder yang baru dibersihkan.",
    "revisionPrompt": "Apa dua hipotesis yang harus dibandingkan?",
    "model": "Filter resistance dan distribusi partikel/retention keduanya masuk akal. Pilih uji satu variabel yang aman."
  },
  {
    "id": "hb04-bloom",
    "module": "HB04",
    "title": "Bloom tidak banyak gelembung",
    "brief": "Kopi roasted satu bulan lalu memperlihatkan sedikit bubbles.",
    "initialPrompt": "Apa informasi yang bisa didapat dari gelembung bloom, dan apa yang sama sekali belum membuktikan mutu cangkir?",
    "newEvidence": "Hasil cicip justru sangat disukai oleh keluarga.",
    "revisionPrompt": "Apakah kurang bubbles membuktikan kopi buruk?",
    "model": "Bloom gas bervariasi; karakter sensory dan mutu tidak disimpulkan dari banyak gelembung saja."
  },
  {
    "id": "hb04-channel",
    "module": "HB04",
    "title": "Flow tak rata",
    "brief": "Satu pour-over mengalir cepat pada sisi brewer.",
    "initialPrompt": "Sebelum menyebut channeling, bagaimana kamu memeriksa pemasangan kertas dan pola penuangan?",
    "newEvidence": "Paper filter tidak terpasang seperti sesi kemarin.",
    "revisionPrompt": "Apa yang kamu periksa sebelum menyalahkan grind?",
    "model": "Pertimbangkan pemasangan filter, bed dan pouring. Observasi flow tidak menentukan satu mekanisme tanpa data tambahan."
  },
  {
    "id": "hb04-recipe",
    "module": "HB04",
    "title": "Resep juara tak sama",
    "brief": "V60 kamu mencapai 3:45, resep video 3:00.",
    "initialPrompt": "Saat waktu brew berbeda dari video, apa target rasa dan tiga kondisi alat yang harus diperiksa lebih dulu?",
    "newEvidence": "Kamu menemukan jenis filter dan kettle berbeda.",
    "revisionPrompt": "Haruskah kamu mengejar waktu video?",
    "model": "Jangan memaksakan waktu tanpa rasa dan tujuan yang sama; cek perbedaan alat, uji bertahap dan pilih hasil sesuai preferensi."
  },
  {
    "id": "hb05-press",
    "module": "HB05",
    "title": "French Press keruh",
    "brief": "Seduhan tampak banyak sedimen meski grind tidak diubah.",
    "initialPrompt": "Apa variabel selain grind yang bisa menjelaskan banyak sedimen di French Press, dan bagaimana mengujinya?",
    "newEvidence": "Saat menuang, rekan mengaduk dan mengangkat seluruh endapan.",
    "revisionPrompt": "Apa hipotesis baru yang perlu diuji?",
    "model": "Pemisahan dan gerakan cairan juga memengaruhi sedimen. Coba rancang pouring aman yang konsisten."
  },
  {
    "id": "hb05-upright",
    "module": "HB05",
    "title": "AeroPress inverted viral",
    "brief": "Video menggunakan posisi inverted dengan air panas.",
    "initialPrompt": "Dengan air panas dan AeroPress, keputusan aman apa yang akan kamu ambil untuk menguji steep time?",
    "newEvidence": "Dokumen pabrikan secara eksplisit memperingatkan risiko terbalik.",
    "revisionPrompt": "Bagaimana tetap mengeksplorasi steep time dengan aman?",
    "model": "Gunakan upright dan cara drip-control yang diizinkan manual; jangan mengadopsi teknik kompetisi yang meningkatkan risiko luka bakar."
  },
  {
    "id": "hb05-method",
    "module": "HB05",
    "title": "Ganti brewer",
    "brief": "Percolation 1:15 ingin dipindahkan ke immersion 1:15.",
    "initialPrompt": "Mengapa rasio 1:15 tidak cukup untuk memprediksi mouthfeel ketika filter dan metode berubah?",
    "newEvidence": "Filter berubah dari paper menjadi mesh.",
    "revisionPrompt": "Apa kesimpulan rasa yang harus ditunda?",
    "model": "Input ratio sama tetapi kontak/filtrasi berbeda. Uji output dan sensori nyata, bukan menebak clarity/body absolut."
  },
  {
    "id": "hb06-sour",
    "module": "HB06",
    "title": "Kopi terasa sour",
    "brief": "Kamu segera menganggap grind terlalu kasar.",
    "initialPrompt": "Tulis dua penjelasan alternatif untuk sour dan sebuah pertanyaan cicip yang bisa membedakannya.",
    "newEvidence": "Kopi diketahui punya karakter citrus dan pencicip lain menyukainya.",
    "revisionPrompt": "Apa uji berikutnya yang lebih tepat?",
    "model": "Klarifikasi sour versus bright dan target rasa; lakukan A/B terkontrol bila memang ingin mengubah, tanpa diagnosis sebab tunggal."
  },
  {
    "id": "hb06-slow",
    "module": "HB06",
    "title": "Seduhan lambat",
    "brief": "V60 waktu 4:10, kemarin 3:00.",
    "initialPrompt": "Jika brew lambat pada filter baru, eksperimen pembanding mana paling informatif dan apa keterbatasannya?",
    "newEvidence": "Kertas filter yang dipakai sekarang lebih rapat dan kopi lot baru.",
    "revisionPrompt": "Bagaimana memilih satu uji yang informatif?",
    "model": "Dua faktor berbeda menjadi hipotesis. Uji paper pada kopi sama atau coffee dengan paper sama, jaga parameternya."
  },
  {
    "id": "hb06-water",
    "module": "HB06",
    "title": "Air galon berubah",
    "brief": "Kopi terasa berbeda dan kamu ingin mengganti grinder.",
    "initialPrompt": "Sebelum mengganti grinder, apa bukti yang ingin kamu kumpulkan tentang kopi, air, dan cara seduh?",
    "newEvidence": "Keluarga mengganti galon air minum sejak kemarin.",
    "revisionPrompt": "Apakah air sekarang penyebab pasti?",
    "model": "Air hipotesis tambahan, bukan bukti tunggal; cek potability, label jika ada, lalu uji dengan kondisi lain setara."
  },
  {
    "id": "hb07-aroma",
    "module": "HB07",
    "title": "Label stroberi",
    "brief": "Kamu tak menangkap aroma stroberi ketika cupping.",
    "initialPrompt": "Apa catatan sensori yang jujur ketika pengamatan pribadimu tidak cocok dengan aroma di kemasan?",
    "newEvidence": "Kamu sedang kurang sehat dan pembanding disajikan pada suhu lain.",
    "revisionPrompt": "Apa yang sah ditulis dalam log?",
    "model": "Catat persepsi nyata dan kondisi tasting; jangan menulis descriptor yang tidak dialami."
  },
  {
    "id": "hb07-blind",
    "module": "HB07",
    "title": "Blind A/B",
    "brief": "Dua gelas diberi kode tetapi B selalu lebih dingin.",
    "initialPrompt": "Apa yang harus dijaga setara agar blind A/B tidak bias karena suhu atau urutan sajian?",
    "newEvidence": "A dipilih lebih sering oleh dua orang.",
    "revisionPrompt": "Apakah blind itu sudah adil?",
    "model": "Label yang disembunyikan tidak menghilangkan suhu/urutan sebagai confounder; ukuran sampel kecil tak membuktikan supremasi."
  },
  {
    "id": "hb07-triangle",
    "module": "HB07",
    "title": "Pilih odd cup",
    "brief": "Kamu menemukan cangkir berbeda pada satu dari tiga.",
    "initialPrompt": "Berapa kemungkinan tebakan acak benar pada tiga cangkir dan apa batas klaim dari satu trial?",
    "newEvidence": "Percobaan cuma satu kali dan kopi sangat kontras.",
    "revisionPrompt": "Apakah kamu sudah memiliki sertifikasi sensory?",
    "model": "Tidak; peluang tebakan dan tingkat kesulitan perlu diperhitungkan. Ini latihan, bukan sertifikasi."
  },
  {
    "id": "hb08-tds",
    "module": "HB08",
    "title": "Water TDS 120ppm",
    "brief": "Meter konduktivitas menunjukkan angka 120ppm pada dua air.",
    "initialPrompt": "Apakah angka 120ppm dapat menyatakan hardness dan alkalinity? Apa pengukuran tambahan yang dibutuhkan?",
    "newEvidence": "Komposisi hardness/alkalinity ternyata berbeda.",
    "revisionPrompt": "Apa yang tidak boleh disimpulkan dari angka meter?",
    "model": "Angka TDS proxy bukan full mineral analysis, dan tidak menjamin rasa atau keamanan air."
  },
  {
    "id": "hb08-chemical",
    "module": "HB08",
    "title": "Cleaning dadakan",
    "brief": "Ada cleaner tidak berlabel dan grinder kotor.",
    "initialPrompt": "Bagaimana memilah tindakan yang diizinkan operator ketika cleaner dan identitas bahannya tidak jelas?",
    "newEvidence": "Rekan ingin mencampur bahan pembersih agar cepat.",
    "revisionPrompt": "Apa keputusan aman?",
    "model": "Jangan gunakan/mencampur chemical tak dikenal; ikuti manual dan eskalasi, utamakan keamanan material."
  },
  {
    "id": "hb08-budget",
    "module": "HB08",
    "title": "Kopi 1kg diskon",
    "brief": "Beli 1kg lebih murah per gram dan hendak disimpan lama.",
    "initialPrompt": "Hitung durasi 1kg pada 30g/minggu dan sebutkan risiko pembelian besar selain harga beli.",
    "newEvidence": "Konsumsi ternyata 30g per minggu.",
    "revisionPrompt": "Apa estimasi durasi dan keputusan?",
    "model": "1kg sekitar 33 minggu pada tingkat pakai itu; biaya per gram saja belum cukup, kondisi simpan dan waste penting."
  },
  {
    "id": "hb09-ice",
    "module": "HB09",
    "title": "Es dan air",
    "brief": "Japanese iced menggunakan 150g air panas +75g es pada 15g kopi.",
    "initialPrompt": "Identifikasi brew-through water, es awal, dan output yang belum diukur pada Japanese iced.",
    "newEvidence": "Es belum seluruhnya mencair ketika minuman disajikan.",
    "revisionPrompt": "Bisakah massa liquid final disamakan dengan total input air?",
    "model": "Bed menahan air dan sebagian es masih padat; ukur minuman aktual dan kapan diukur sebelum kesimpulan."
  },
  {
    "id": "hb09-cold",
    "module": "HB09",
    "title": "Cold brew lama",
    "brief": "Cold brew disimpan tanpa label sejak beberapa hari lalu.",
    "initialPrompt": "Apa yang bisa diverifikasi pada batch cold brew lama dan kapan keputusan harus hold?",
    "newEvidence": "Suhu penyimpanan tidak diketahui.",
    "revisionPrompt": "Apakah boleh dicicipi untuk memeriksa aman?",
    "model": "Tidak. Rasa dan aroma tidak membuktikan keamanan. Hold sesuai aturan pangan."
  },
  {
    "id": "hb09-oat",
    "module": "HB09",
    "title": "Oat latte",
    "brief": "Tamu meminta oat latte karena menghindari dairy.",
    "initialPrompt": "Apa beda mengganti bahan karena preferensi dan menangani alergi protein susu dengan alat bersama?",
    "newEvidence": "Ia kemudian menjelaskan punya alergi protein susu dan alat blender dipakai bersama.",
    "revisionPrompt": "Apa yang berubah dari keputusanmu?",
    "model": "Risiko kontak silang dan label menjadi kritis. Oat sendiri tidak menjamin bebas protein susu."
  },
  {
    "id": "hb10-recipe",
    "module": "HB10",
    "title": "Resep V0 ke V1",
    "brief": "Kamu mengurangi air, mengganti grinder dan kopi sekaligus.",
    "initialPrompt": "Ketika tiga variabel berubah pada V1, klaim sebab apa yang tidak sah, dan uji lanjutannya apa?",
    "newEvidence": "V1 disukai oleh satu teman.",
    "revisionPrompt": "Apa yang dapat dikatakan dan apa uji berikutnya?",
    "model": "Paket hasil disukai pada sesi itu, efek tiap variabel tak bisa dipisah. Buat rencana kontrol dan dokumentasi versi."
  },
  {
    "id": "hb10-handoff",
    "module": "HB10",
    "title": "Recipe card kabur",
    "brief": "Recipe hanya berbunyi 'grind sedang, tuang perlahan'.",
    "initialPrompt": "Informasi apa saja yang harus ada agar orang dengan grinder lain dapat menafsirkan recipe card?",
    "newEvidence": "Teman memakai grinder lain dan hasil berbeda.",
    "revisionPrompt": "Apa yang harus ditulis agar bisa direplikasi?",
    "model": "Definisikan model grinder, massa, brewer/filter, timing, output, metode dan perubahan yang diperbolehkan."
  },
  {
    "id": "hb10-capstone",
    "module": "HB10",
    "title": "Masalah bergabung",
    "brief": "Filter baru lebih lambat, kopi lot baru lebih fruity, tamu mau iced tanpa gula.",
    "initialPrompt": "Dari filter, lot, permintaan iced dan ketidakpastian air, masalah mana yang kamu prioritaskan dan mengapa?",
    "newEvidence": "Air ternyata juga berganti sementara resep awal tak punya tasting log.",
    "revisionPrompt": "Bagaimana membuat keputusan pertama?",
    "model": "Utamakan air layak, pisahkan hipotesis filter/lot/air, klarifikasi customer, dan rancang percobaan terkontrol tanpa menebak rasa."
  }
];
export const homeBrewerCasesForModule=(m:string)=>HOME_BREWER_V2_CASES.filter(x=>x.module===m);
