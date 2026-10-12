/** 30 evidence-revision formative scenarios; never grants completion or certification. */
export type HomeBrewerCase={id:string;module:string;title:string;brief:string;initialPrompt:string;newEvidence:string;revisionPrompt:string;model:string};
export const HOME_BREWER_V2_CASES:HomeBrewerCase[]=[
  {
    "id": "hb01-label",
    "module": "HB01",
    "title": "Label aroma buah",
    "brief": "Label menyebut jeruk dan bunga; kamu tidak menemukan aroma itu.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Apa yang bisa dilakukan tanpa menganggap label salah?",
    "revisionPrompt": "Ternyata air dan grinder berbeda dari demonstrasi roaster.",
    "model": "Bagaimana rencana perbandinganmu berubah?"
  },
  {
    "id": "hb01-process",
    "module": "HB01",
    "title": "Natural lawan washed",
    "brief": "Kamu berasumsi natural pasti lebih manis daripada washed.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Data sensory terbaru justru menunjukkan pencicip memilih washed karena terasa lebih manis.",
    "revisionPrompt": "Apa yang kamu revisi dari aturan awalmu?",
    "model": "Proses bukan penentu satu rasa; perbedaan kopi, roast, air dan penilai mungkin menjelaskan preferensi. Gunakan hasil cicip yang benar-benar dicatat."
  },
  {
    "id": "hb01-stock",
    "module": "HB01",
    "title": "Beli kopi 1kg",
    "brief": "Harga per kilogram lebih rendah dari bag 250g, tetapi kamu menyeduh sedikit.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kamu menemukan penyimpanan sering terkena panas dan kelembapan tinggi.",
    "revisionPrompt": "Apa pembelian yang lebih rasional?",
    "model": "Nilai per serving juga tergantung konsumsi dan kualitas penyimpanan. Kemasan kecil bisa lebih masuk akal meski harga/kg lebih tinggi."
  },
  {
    "id": "hb02-ratio",
    "module": "HB02",
    "title": "1:15 di dua brewer",
    "brief": "15g kopi diseduh dengan 225g brew water pada V60 dan immersion.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "V60 menghasilkan 184g minuman, immersion 193g.",
    "revisionPrompt": "Apakah salah satu otomatis lebih terekstraksi?",
    "model": "Input sama, output berbeda karena proses/retensi; perlu TDS/hasil sensori yang sesuai untuk menilai EY dan mutu."
  },
  {
    "id": "hb02-ey",
    "module": "HB02",
    "title": "TDS sama bukan rasa sama",
    "brief": "Dua cangkir mempunyai TDS sama menurut alat yang sesuai.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Masing-masing ternyata berasal dari kopi dan roast berbeda.",
    "revisionPrompt": "Apa yang masih belum terbukti?",
    "model": "Konsentrasi relatif sama tidak berarti komposisi molekul dan aroma, rasa atau preferensi identik."
  },
  {
    "id": "hb02-timer",
    "module": "HB02",
    "title": "Brew time tercatat beda",
    "brief": "Kemarin 3 menit dan hari ini 3:20 dengan kopi sama.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kemarin timer dimulai saat bloom, hari ini saat preheating.",
    "revisionPrompt": "Apa yang harus dibenahi sebelum diagnosis?",
    "model": "Samakan definisi awal waktu dan pastikan input lain tercatat; angka yang tidak komparabel bukan sinyal untuk mengubah grind."
  },
  {
    "id": "hb03-grind",
    "module": "HB03",
    "title": "Grinder 20 clicks",
    "brief": "Teman memakai 20 clicks dan hasil baik; alatmu juga berangka 20.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Merek dan model grinder ternyata berbeda.",
    "revisionPrompt": "Bagaimana kamu memindahkan resep?",
    "model": "Click adalah skala internal alat, bukan ukuran partikel global; ukur dose, yield, waktu dan penilaian nyata untuk menemukan setelan baru."
  },
  {
    "id": "hb03-temperature",
    "module": "HB03",
    "title": "Air tak persis 93 derajat",
    "brief": "Resep video menggunakan 93°C, kettle kamu tidak punya pengukur.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Air mendidih kemudian dipindahkan ke wadah yang dingin.",
    "revisionPrompt": "Bagaimana mencatat ketidakpastian suhu?",
    "model": "Catat prosedur dan alat yang digunakan, bukan suhu persis yang tidak diukur. Tetapkan kebiasaan aman dan uji hanya bila bisa."
  },
  {
    "id": "hb03-filter",
    "module": "HB03",
    "title": "Drawdown melambat",
    "brief": "Filter baru membuat waktu seduh lebih lama pada rasio yang sama.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kopi juga digiling dengan grinder yang baru dibersihkan.",
    "revisionPrompt": "Apa dua hipotesis yang harus dibandingkan?",
    "model": "Filter resistance dan distribusi partikel/retention keduanya masuk akal. Pilih uji satu variabel yang aman."
  },
  {
    "id": "hb04-bloom",
    "module": "HB04",
    "title": "Bloom tidak banyak gelembung",
    "brief": "Kopi roasted satu bulan lalu memperlihatkan sedikit bubbles.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Hasil cicip justru sangat disukai oleh keluarga.",
    "revisionPrompt": "Apakah kurang bubbles membuktikan kopi buruk?",
    "model": "Bloom gas bervariasi; karakter sensory dan mutu tidak disimpulkan dari banyak gelembung saja."
  },
  {
    "id": "hb04-channel",
    "module": "HB04",
    "title": "Flow tak rata",
    "brief": "Satu pour-over mengalir cepat pada sisi brewer.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Paper filter tidak terpasang seperti sesi kemarin.",
    "revisionPrompt": "Apa yang kamu periksa sebelum menyalahkan grind?",
    "model": "Pertimbangkan pemasangan filter, bed dan pouring. Observasi flow tidak menentukan satu mekanisme tanpa data tambahan."
  },
  {
    "id": "hb04-recipe",
    "module": "HB04",
    "title": "Resep juara tak sama",
    "brief": "V60 kamu mencapai 3:45, resep video 3:00.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kamu menemukan jenis filter dan kettle berbeda.",
    "revisionPrompt": "Haruskah kamu mengejar waktu video?",
    "model": "Jangan memaksakan waktu tanpa rasa dan tujuan yang sama; cek perbedaan alat, uji bertahap dan pilih hasil sesuai preferensi."
  },
  {
    "id": "hb05-press",
    "module": "HB05",
    "title": "French Press keruh",
    "brief": "Seduhan tampak banyak sedimen meski grind tidak diubah.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Saat menuang, rekan mengaduk dan mengangkat seluruh endapan.",
    "revisionPrompt": "Apa hipotesis baru yang perlu diuji?",
    "model": "Pemisahan dan gerakan cairan juga memengaruhi sedimen. Coba rancang pouring aman yang konsisten."
  },
  {
    "id": "hb05-upright",
    "module": "HB05",
    "title": "AeroPress inverted viral",
    "brief": "Video menggunakan posisi inverted dengan air panas.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Dokumen pabrikan secara eksplisit memperingatkan risiko terbalik.",
    "revisionPrompt": "Bagaimana tetap mengeksplorasi steep time dengan aman?",
    "model": "Gunakan upright dan cara drip-control yang diizinkan manual; jangan mengadopsi teknik kompetisi yang meningkatkan risiko luka bakar."
  },
  {
    "id": "hb05-method",
    "module": "HB05",
    "title": "Ganti brewer",
    "brief": "Percolation 1:15 ingin dipindahkan ke immersion 1:15.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Filter berubah dari paper menjadi mesh.",
    "revisionPrompt": "Apa kesimpulan rasa yang harus ditunda?",
    "model": "Input ratio sama tetapi kontak/filtrasi berbeda. Uji output dan sensori nyata, bukan menebak clarity/body absolut."
  },
  {
    "id": "hb06-sour",
    "module": "HB06",
    "title": "Kopi terasa sour",
    "brief": "Kamu segera menganggap grind terlalu kasar.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kopi diketahui punya karakter citrus dan pencicip lain menyukainya.",
    "revisionPrompt": "Apa uji berikutnya yang lebih tepat?",
    "model": "Klarifikasi sour versus bright dan target rasa; lakukan A/B terkontrol bila memang ingin mengubah, tanpa diagnosis sebab tunggal."
  },
  {
    "id": "hb06-slow",
    "module": "HB06",
    "title": "Seduhan lambat",
    "brief": "V60 waktu 4:10, kemarin 3:00.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kertas filter yang dipakai sekarang lebih rapat dan kopi lot baru.",
    "revisionPrompt": "Bagaimana memilih satu uji yang informatif?",
    "model": "Dua faktor berbeda menjadi hipotesis. Uji paper pada kopi sama atau coffee dengan paper sama, jaga parameternya."
  },
  {
    "id": "hb06-water",
    "module": "HB06",
    "title": "Air galon berubah",
    "brief": "Kopi terasa berbeda dan kamu ingin mengganti grinder.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Keluarga mengganti galon air minum sejak kemarin.",
    "revisionPrompt": "Apakah air sekarang penyebab pasti?",
    "model": "Air hipotesis tambahan, bukan bukti tunggal; cek potability, label jika ada, lalu uji dengan kondisi lain setara."
  },
  {
    "id": "hb07-aroma",
    "module": "HB07",
    "title": "Label stroberi",
    "brief": "Kamu tak menangkap aroma stroberi ketika cupping.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Kamu sedang kurang sehat dan pembanding disajikan pada suhu lain.",
    "revisionPrompt": "Apa yang sah ditulis dalam log?",
    "model": "Catat persepsi nyata dan kondisi tasting; jangan menulis descriptor yang tidak dialami."
  },
  {
    "id": "hb07-blind",
    "module": "HB07",
    "title": "Blind A/B",
    "brief": "Dua gelas diberi kode tetapi B selalu lebih dingin.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "A dipilih lebih sering oleh dua orang.",
    "revisionPrompt": "Apakah blind itu sudah adil?",
    "model": "Label yang disembunyikan tidak menghilangkan suhu/urutan sebagai confounder; ukuran sampel kecil tak membuktikan supremasi."
  },
  {
    "id": "hb07-triangle",
    "module": "HB07",
    "title": "Pilih odd cup",
    "brief": "Kamu menemukan cangkir berbeda pada satu dari tiga.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Percobaan cuma satu kali dan kopi sangat kontras.",
    "revisionPrompt": "Apakah kamu sudah memiliki sertifikasi sensory?",
    "model": "Tidak; peluang tebakan dan tingkat kesulitan perlu diperhitungkan. Ini latihan, bukan sertifikasi."
  },
  {
    "id": "hb08-tds",
    "module": "HB08",
    "title": "Water TDS 120ppm",
    "brief": "Meter konduktivitas menunjukkan angka 120ppm pada dua air.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Komposisi hardness/alkalinity ternyata berbeda.",
    "revisionPrompt": "Apa yang tidak boleh disimpulkan dari angka meter?",
    "model": "Angka TDS proxy bukan full mineral analysis, dan tidak menjamin rasa atau keamanan air."
  },
  {
    "id": "hb08-chemical",
    "module": "HB08",
    "title": "Cleaning dadakan",
    "brief": "Ada cleaner tidak berlabel dan grinder kotor.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Rekan ingin mencampur bahan pembersih agar cepat.",
    "revisionPrompt": "Apa keputusan aman?",
    "model": "Jangan gunakan/mencampur chemical tak dikenal; ikuti manual dan eskalasi, utamakan keamanan material."
  },
  {
    "id": "hb08-budget",
    "module": "HB08",
    "title": "Kopi 1kg diskon",
    "brief": "Beli 1kg lebih murah per gram dan hendak disimpan lama.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Konsumsi ternyata 30g per minggu.",
    "revisionPrompt": "Apa estimasi durasi dan keputusan?",
    "model": "1kg sekitar 33 minggu pada tingkat pakai itu; biaya per gram saja belum cukup, kondisi simpan dan waste penting."
  },
  {
    "id": "hb09-ice",
    "module": "HB09",
    "title": "Es dan air",
    "brief": "Japanese iced menggunakan 150g air panas +75g es pada 15g kopi.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Es belum seluruhnya mencair ketika minuman disajikan.",
    "revisionPrompt": "Bisakah massa liquid final disamakan dengan total input air?",
    "model": "Bed menahan air dan sebagian es masih padat; ukur minuman aktual dan kapan diukur sebelum kesimpulan."
  },
  {
    "id": "hb09-cold",
    "module": "HB09",
    "title": "Cold brew lama",
    "brief": "Cold brew disimpan tanpa label sejak beberapa hari lalu.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Suhu penyimpanan tidak diketahui.",
    "revisionPrompt": "Apakah boleh dicicipi untuk memeriksa aman?",
    "model": "Tidak. Rasa dan aroma tidak membuktikan keamanan. Hold sesuai aturan pangan."
  },
  {
    "id": "hb09-oat",
    "module": "HB09",
    "title": "Oat latte",
    "brief": "Tamu meminta oat latte karena menghindari dairy.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Ia kemudian menjelaskan punya alergi protein susu dan alat blender dipakai bersama.",
    "revisionPrompt": "Apa yang berubah dari keputusanmu?",
    "model": "Risiko kontak silang dan label menjadi kritis. Oat sendiri tidak menjamin bebas protein susu."
  },
  {
    "id": "hb10-recipe",
    "module": "HB10",
    "title": "Resep V0 ke V1",
    "brief": "Kamu mengurangi air, mengganti grinder dan kopi sekaligus.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "V1 disukai oleh satu teman.",
    "revisionPrompt": "Apa yang dapat dikatakan dan apa uji berikutnya?",
    "model": "Paket hasil disukai pada sesi itu, efek tiap variabel tak bisa dipisah. Buat rencana kontrol dan dokumentasi versi."
  },
  {
    "id": "hb10-handoff",
    "module": "HB10",
    "title": "Recipe card kabur",
    "brief": "Recipe hanya berbunyi 'grind sedang, tuang perlahan'.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Teman memakai grinder lain dan hasil berbeda.",
    "revisionPrompt": "Apa yang harus ditulis agar bisa direplikasi?",
    "model": "Definisikan model grinder, massa, brewer/filter, timing, output, metode dan perubahan yang diperbolehkan."
  },
  {
    "id": "hb10-capstone",
    "module": "HB10",
    "title": "Masalah bergabung",
    "brief": "Filter baru lebih lambat, kopi lot baru lebih fruity, tamu mau iced tanpa gula.",
    "initialPrompt": "Apa keputusan atau hipotesis awal yang masuk akal dari informasi ini? Nyatakan setidaknya satu ketidakpastian dan cara mengeceknya.",
    "newEvidence": "Air ternyata juga berganti sementara resep awal tak punya tasting log.",
    "revisionPrompt": "Bagaimana membuat keputusan pertama?",
    "model": "Utamakan air layak, pisahkan hipotesis filter/lot/air, klarifikasi customer, dan rancang percobaan terkontrol tanpa menebak rasa."
  }
];
export const homeBrewerCasesForModule=(m:string)=>HOME_BREWER_V2_CASES.filter(x=>x.module===m);
