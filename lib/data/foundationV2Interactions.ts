// Editorial interaction specifications for Foundation V2. No learner state is
// persisted: this is an uncredited learning preview, not a certification quiz.
export type ClassificationActivity = {
  kind: 'classification';
  title: string;
  intro: string;
  categories: { id: string; label: string }[];
  prompts: { name: string; correct: string; feedback: string }[];
};
export type SequenceActivity = {
  kind: 'sequence';
  title: string;
  intro: string;
  steps: { id: string; name: string; why: string }[]; // canonical chronological order
};
export type ChoiceActivity = {
  kind: 'choice';
  title: string;
  intro: string;
  options: { label: string; feedback: string; correct: boolean }[];
};
export type CalculatorActivity = {
  kind: 'calculator';
  title: string;
  intro: string;
};
export type AnatomyActivity = {
  kind: 'anatomy';
  title: string;
  intro: string;
};
export type WorkspaceActivity = { kind: 'workspace'; title: string; intro: string; prompts: { label: string; hint: string }[]; model: string; };
export type IncomeActivity = { kind: 'income'; title: string; intro: string };
export type Activity = ClassificationActivity | SequenceActivity | ChoiceActivity | CalculatorActivity | AnatomyActivity | WorkspaceActivity | IncomeActivity;

export const foundationV2Interactions: Record<string, Activity> = {
  'sensory-evidence': {
    kind: 'classification',
    title: 'Apa yang sedang dijelaskan?',
    intro: 'Baca satu kalimat, lalu pilih apakah itu pengamatan, kesukaan, atau dugaan penyebab.',
    categories: [
      { id: 'observation', label: 'Pengamatan' },
      { id: 'preference', label: 'Kesukaan' },
      { id: 'hypothesis', label: 'Dugaan penyebab' },
    ],
    prompts: [
      { name: 'Aroma cangkir A mengingatkan pada kacang panggang.', correct: 'observation', feedback: 'Kalimat ini mencatat pengalaman aroma tanpa menilai baik-buruk atau asalnya.' },
      { name: 'Aku lebih menikmati cangkir B daripada A.', correct: 'preference', feedback: 'Ini pernyataan selera seseorang; orang lain boleh punya preferensi berbeda.' },
      { name: 'Mungkin grind lebih halus membuat alirannya lebih lama.', correct: 'hypothesis', feedback: 'Ini penjelasan yang perlu diuji, bukan fakta yang sudah ditunjukkan.' },
      { name: 'Tekstur kopi terasa lebih berat di mulut.', correct: 'observation', feedback: 'Mouthfeel adalah bagian deskripsi sensorik, bukan bukti proses pembuatannya.' },
    ],
  },
  'coffee-fruit-layers': {
    kind: 'anatomy',
    title: 'Jelajahi isi buah kopi',
    intro: 'Pilih satu lapisan untuk melihat letak dan fungsinya. Gambar adalah skema, bukan ukuran anatomi sebenarnya.',
  },
  'taxonomy-sort': {
    kind: 'classification',
    title: 'Lima nama, lima tingkat informasi',
    intro: 'Jangan melihat jawabannya dulu. Baca nama pada kartu lalu tentukan kategori yang paling tepat.',
    categories: [
      { id: 'genus', label: 'Genus' },
      { id: 'species', label: 'Spesies' },
      { id: 'cultivar', label: 'Kultivar/varietas' },
      { id: 'region', label: 'Wilayah/asal' },
      { id: 'trade', label: 'Nama dagang/umum' },
    ],
    prompts: [
      { name: 'Coffea', correct: 'genus', feedback: 'Coffea adalah genus yang mencakup banyak spesies tanaman kopi.' },
      { name: 'Coffea arabica', correct: 'species', feedback: 'Nama binomial ini menunjuk suatu spesies dalam genus Coffea.' },
      { name: 'Bourbon', correct: 'cultivar', feedback: 'Dalam konteks ini Bourbon ialah kelompok varietas/kultivar Arabika, bukan spesies sendiri.' },
      { name: 'Gayo', correct: 'region', feedback: 'Gayo menunjukkan identitas geografis dan perdagangan; bukan tingkat taksonomi tumbuhan.' },
      { name: 'Excelsa', correct: 'trade', feedback: 'Nama Excelsa punya riwayat taksonomi berubah. Kew menerima Coffea dewevrei sebagai nama spesies pada snapshot 2026; label dagang tidak selalu membuktikan identitas botani satu lot.' },
    ],
  },
  'processing-decision': {
    kind: 'choice',
    title: 'Memilih proses pada musim hujan',
    intro: 'Sebuah kebun punya ruang pengeringan terbatas dan belum mencatat kondisi tiap lot secara konsisten. Keputusan awal mana yang paling bertanggung jawab?',
    options: [
      { label: 'Pilih natural karena harganya biasanya lebih tinggi.', correct: false, feedback: 'Potensi harga bukan bukti proses dapat dikendalikan. Pengeringan dan risiko kontaminasi tetap perlu dinilai.' },
      { label: 'Petakan kapasitas, kondisi bahan, kebersihan dan kemampuan pemantauan.', correct: true, feedback: 'Keputusan proses dimulai dari fasilitas dan kontrol yang benar-benar tersedia. Ini bukan penetapan SOP atau kelulusan keamanan.' },
      { label: 'Pilih washed; nama metode itu sendiri sudah menjamin aman.', correct: false, feedback: 'Washed juga memerlukan penanganan air, sanitasi, pengeringan dan inspeksi yang memadai.' },
    ],
  },
  'roast-order': {
    kind: 'sequence',
    title: 'Susun perjalanan satu batch',
    intro: 'Urutkan empat catatan perubahan biji dari awal ke tahap lebih lanjut. Ini skema umum, bukan resep waktu atau suhu roasting.',
    steps: [
      { id: 'a', name: 'Hijau kekuningan dan masih keras', why: 'Kondisi awal sebelum perubahan panas yang tampak dominan.' },
      { id: 'b', name: 'Mulai menguning dan aroma berubah', why: 'Tahap awal perubahan tampilan dan aroma selama pemanasan.' },
      { id: 'c', name: 'Cokelat, mengembang, bunyi retakan pertama', why: 'Perubahan fisik berlangsung bersamaan dengan rentang reaksi kimia yang saling tumpang tindih.' },
      { id: 'd', name: 'Warna lebih gelap setelah retakan awal', why: 'Pemanasan berlanjut, tetapi warna bukan jaminan mutu cangkir.' },
    ],
  },
  'brew-ey': {
    kind: 'calculator',
    title: 'Hitung estimasi extraction yield',
    intro: 'Ubah dosis, massa minuman terkumpul, dan TDS minuman. Lihat cara memperoleh estimasi EY, bukan skor rasa atau rekomendasi universal.',
  },
  'lexicon-confidence': {
    kind: 'choice',
    title: 'Seberapa spesifik catatanmu?',
    intro: 'Seorang panelis hanya cukup yakin mencium kesan aroma buah segar. Pernyataan mana yang paling bertanggung jawab?',
    options: [
      { label: 'Aroma blackcurrant sudah terkonfirmasi; namanya terdengar lebih profesional.', correct: false, feedback: 'Nama spesifik tanpa bukti justru berisiko menyesatkan.' },
      { label: 'Aroma mengingatkan pada buah segar; jenis buahnya belum pasti.', correct: true, feedback: 'Deskripsi tetap berguna sekaligus jujur terhadap batas pengamatan.' },
      { label: 'Hapus seluruh catatan karena belum bisa mengidentifikasi buah tertentu.', correct: false, feedback: 'Ketidakpastian pada tingkat spesifik tidak membatalkan observasi pada kelompok atribut yang lebih luas.' },
    ],
  },
  'value-chain-claim': {
    kind: 'choice',
    title: 'Periksa klaim pembelian langsung',
    intro: 'Sebuah kafe menulis: “100% harga secangkir kopi kami masuk ke petani.” Data transaksi petaninya belum ditunjukkan. Apa langkah yang masuk akal?',
    options: [
      { label: 'Terima klaim karena pembelian langsung menghapus semua biaya hilir.', correct: false, feedback: 'Pengolahan, transportasi, upah, sewa dan penyajian tetap memiliki biaya serta pihak yang berbeda.' },
      { label: 'Langsung sebut penjual berbohong tanpa memeriksa dokumen.', correct: false, feedback: 'Klaim belum terverifikasi berbeda dari klaim yang telah dibuktikan palsu.' },
      { label: 'Minta bukti pembayaran, volume, penerima dan periode sebelum menulis ulang klaim.', correct: true, feedback: 'Dokumen spesifik diperlukan untuk menjelaskan pembayaran kepada petani, terpisah dari harga ritel maupun penghasilan bersih keluarga.' },
    ],
  },
  'cup-compare-notes': {
    kind:'workspace',title:'Catat dua cangkir, jangan langsung menebak penyebabnya',
    intro:'Pilih pengamatan nyata bila kamu punya kopi, atau analisis catatan simulasi dari lesson. Catatan hanya disimpan di layar ini; salin sebelum keluar.',
    prompts:[
      {label:'Apa yang diketahui tentang sampel A?',hint:'Tulis aroma, taste atau tekstur yang dilaporkan. Jangan membuat kesan sensorik seolah kamu mencicipi dari layar.'},
      {label:'Apa yang diketahui tentang sampel B?',hint:'Tulis satu kontras yang didukung pengamatan.'},
      {label:'Bagian mana hanya kesukaan pribadi?',hint:'Siapa memilih A atau B dan mengapa?'},
      {label:'Apa yang belum bisa dipastikan?',hint:'Sebut satu penyebab yang masih butuh catatan asal/proses/brewing.'}
    ],
    model:'Contoh memakai data simulasi: Dua panelis menggambarkan A lebih mengarah ke buah; keduanya tidak harus menyebut buah spesifik yang sama. Kesukaan mereka berbeda. Catatan ini tidak cukup untuk memastikan varietas atau metode fermentasi.',
  },
  'coffee-farm-note': {
    kind:'workspace',title:'Tentukan tiga pemeriksaan pertama untuk kebun contoh',
    intro:'Kamu bukan diminta menentukan pestisida, dosis pupuk atau varietas pengganti tanpa data. Catat tiga informasi yang perlu diperiksa sebelum kebun mengambil keputusan mahal.',
    prompts:[
      {label:'Kondisi tanaman',hint:'Bagian kebun mana, varietas apa, tanda masalah apa?'},
      {label:'Kondisi lokasi',hint:'Apa yang perlu diamati tentang air, naungan, kesehatan tanaman dan musim?'},
      {label:'Orang dan biaya',hint:'Siapa mengerjakan, biaya apa muncul, siapa menanggung risiko?'}
    ],
    model:'Misalnya: identifikasi petak dan bahan tanam; dokumentasikan distribusi masalah tanaman bersama petani; catat keterbatasan pekerja/anggaran dan konsultasikan diagnosis kepada pendamping agronomi setempat sebelum tindakan permanen.',
  },
  'lot-qc-note': {
    kind:'workspace',title:'Buat keputusan awal terhadap dua sublot',
    intro:'Kasus P-21 dan P-22 adalah simulasi. Ini latihan membaca bukti, bukan keputusan keselamatan pangan atau izin jual yang sesungguhnya.',
    prompts:[
      {label:'P-21: tahap pemeriksaan berikutnya',hint:'Boleh dilanjutkan untuk review apa, dan apa yang belum terbukti?'},
      {label:'P-22: tindakan pengamanan awal',hint:'Apa yang perlu ditahan, ditelusuri dan dieskalasikan?'},
      {label:'Bukti yang diperlukan',hint:'Tuliskan tiga bukti konkret yang akan diminta pengelola.'}
    ],
    model:'P-21 dapat dilanjutkan untuk review QC sesuai prosedur, bukan langsung dinyatakan aman/siap ekspor. P-22 harus ditahan untuk pemeriksaan oleh personel berwenang karena riwayat rembesan dan identitas lot bermasalah. Mintalah catatan penerimaan, pengeringan, gudang dan pengujian yang relevan.',
  },
  'brew-investigation-note':{
    kind:'workspace',title:'Rancang eksperimen seduh satu variabel',
    intro:'Boleh memakai kopi nyata yang aman atau data simulasi; jika dari data simulasi, jangan mengaku telah mencicipinya sendiri.',
    prompts:[
      {label:'Pertanyaan dan variabel yang diubah',hint:'Contoh: Bagaimana setelan grind X dan Y berbeda pada alat yang sama?'},
      {label:'Hal yang kamu jaga sama',hint:'Dosis, sumber air, alat, lot kopi, urutan bila memungkinkan.'},
      {label:'Bukti yang kamu amati',hint:'Tuliskan hanya data yang ada; pisahkan waktu alir, berat minuman, TDS dan persepsi.'},
      {label:'Kesimpulan sementara dan uji berikutnya',hint:'Apa yang masih perlu pengulangan?' }
    ],
    model:'Contoh dari data fiktif: hanya setelan grind sengaja diubah. Waktu, minuman terkumpul dan TDS ikut berbeda; kita belum dapat menggeneralisasi ke seluruh kopi atau mesin. Ulangi dengan kondisi penyajian serupa dan urutan acak.',
  },
  'cupping-comparison-note':{
    kind:'workspace',title:'Catat perbandingan sampel A dan B',
    intro:'Gunakan observasi nyata bila tersedia, atau evaluasi laporan panelis simulasi. Jangan menyamakan analisis teks dengan kemampuan cupping.',
    prompts:[
      {label:'Dua atribut yang berbeda',hint:'Misalnya aroma, taste, mouthfeel, dengan tingkat keyakinan yang jelas.'},
      {label:'Preferensi terpisah',hint:'Siapa menyukai sampel mana?'},
      {label:'Apa keterbatasan perbandingan?',hint:'Temperatur, urutan, metode seduh, pemberian kode atau data yang hilang.'}
    ],
    model:'Dalam data contoh, A lebih mengingatkan pada buah dan memiliki acidity lebih jelas; B lebih mengarah panggang. Preferensi panelis bisa berbeda. Suhu penyajian tidak lengkap, sehingga perbandingan tak boleh disamakan dengan asesmen terstandar.',
  },
  'foundation-dossier':{
    kind:'workspace',title:'Satu dossier, empat keputusan terpisah',
    intro:'Kerjakan kasus P-17 per bagian. Tidak ada kredit, sertifikat, atau data yang disimpan di review build. Jangan menerbitkan klaim dagang dari data fiktif.',
    prompts:[
      {label:'1. Rantai lot dan risiko green QC',hint:'Bukti apa yang tersedia, apa yang hilang, apa yang harus ditahan?'},
      {label:'2. Roasting, brewing dan sensory',hint:'Hitung hanya angka yang tersedia; pisahkan log, kesan dan klaim skor.'},
      {label:'3. Harga, biaya dan orang',hint:'Bandingkan unit produk, penerimaan, biaya dan pekerja secara benar.'},
      {label:'4. Teks label dan sejarah yang bertanggung jawab',hint:'Tuliskan klaim mana yang bisa dipublikasikan dan bagaimana sejarah kerja kolonial memberi konteks.'}
    ],
    model:'Contoh ringkas: tahan bagian lot dengan riwayat air tak jelas, jangan menyatakan skor 90 tanpa uji sesuai metode. Hitung biaya dan penerimaan secara terpisah, serta tinjau klaim asal/sustainability lewat bukti. Peta kekuasaan dan kerja dari sejarah kopi Jawa penting saat berbicara tentang nilai bagi produsen kini.',
  },
  'excelsa-label-audit':{
    kind:'workspace',title:'Periksa label sebelum mempercayai klaim',
    intro:'Label ini sepenuhnya fiktif. Identifikasi klaim, bedakan jenis informasi, lalu ajukan bukti yang masuk akal. Jawabanmu hanya tersimpan di halaman selama terbuka.',
    prompts:[
      {label:'Klaim mana yang perlu diuji, dan mengapa?',hint:'Pilih setidaknya dua: nama Excelsa, asal Jawa Barat, aroma mangga, elevasi 1.200 mdpl, atau pernyataan taksonomi.'},
      {label:'Bukti dan klarifikasi apa yang kamu minta?',hint:'Pisahkan dokumen asal lot, identitas bahan tanam, catatan kebun, dan deskripsi sensorik yang harus dicicipi.'}
    ],
    model:'Contoh: Excelsa dikenal sebagai nama perdagangan/umum, tetapi tidak otomatis membuktikan satu identitas ilmiah lot; Kew mencatat riwayat klasifikasi yang berubah, sehingga klaim bahwa klasifikasinya tidak pernah berubah salah. Jawa Barat dan 1.200 mdpl memerlukan catatan sumber lot dan kebun. Aroma mangga adalah deskripsi sensori yang dapat diperiksa dengan mencicipi, bukan bukti spesies. Minta dokumen asal, data bahan tanam dan catatan pencicipan; jangan menyatakan semua klaim sudah terbukti hanya dari teks kemasan.',
  },
  'farm-income-sandbox':{
    kind:'income',title:'Berapa sisa setelah biaya, bukan sekadar kenaikan harga?',
    intro:'Masukkan skenario fiktif dengan satuan kg ceri yang sama. Angka tidak mewakili pendapatan petani sebenarnya dan bukan ukuran living income.',
  },
  'brew-hypothesis':{
    kind:'choice',title:'Langkah awal saat dua cangkir terasa berbeda',
    intro:'A lebih asam; B lebih pahit. Kamu belum punya catatan asal atau roasting. Apa tindakan yang memberi informasi paling berguna?',
    options:[
      {label:'Pastikan A ditanam di ketinggian lebih tinggi.',correct:false,feedback:'Rasa di satu cangkir tidak membuktikan ketinggian atau sebab tunggal.'},
      {label:'Bandingkan data biji, sangrai, resep dan suhu sambil menjaga variabel yang bisa dikontrol.',correct:true,feedback:'Ini membangun hipotesis yang dapat diperiksa, bukan menebak cerita asal.'},
      {label:'Sebut B gagal roasting karena lebih pahit.',correct:false,feedback:'Preferensi dan karakter rasa tidak cukup untuk memutuskan penyebab.'}
    ],
  },
  'farm-evidence':{
    kind:'choice',title:'Mengapa dua kebun belum tentu sama?',
    intro:'Dua kebun menanam nama varietas sama pada elevasi serupa. Salah satunya punya kelembapan dan pengelolaan naungan berbeda.',
    options:[
      {label:'Ketinggian sama memastikan hasil dan rasa sama.',correct:false,feedback:'Elevasi tidak menggantikan data iklim mikro, tanaman dan pengelolaan.'},
      {label:'Lihat kondisi tanaman, mikroklimat dan praktik panen dari masing-masing petak.',correct:true,feedback:'Variasi dapat muncul dari banyak faktor yang saling berinteraksi.'},
      {label:'Tanam ulang semua tanaman sebelum mengumpulkan data.',correct:false,feedback:'Keputusan mahal tanpa diagnosis belum bisa dipertanggungjawabkan.'}
    ],
  },
  'cherry-ripeness-check':{
    kind:'choice',title:'Warna kuning berarti belum matang?',
    intro:'Tersedia ceri kuning dari tanaman yang diklaim kultivar buah matang kuning. Apa yang sebaiknya diperiksa?',
    options:[
      {label:'Singkirkan semuanya karena buah kopi matang harus merah.',correct:false,feedback:'Sebagian kultivar memang memiliki buah matang kuning.'},
      {label:'Periksa identitas bahan tanam, kondisi buah dan kriteria kematangan yang relevan.',correct:true,feedback:'Warna harus dibaca bersama informasi kultivar dan kondisi buah.'},
      {label:'Anggap semua buah kuning sudah matang tanpa pengamatan.',correct:false,feedback:'Warna saja tidak cukup untuk mengonfirmasi kematangan dan kerusakan.'}
    ],
  },
  'green-lot-order':{
    kind:'sequence',title:'Urutkan satu contoh jalur washed',
    intro:'Gunakan tombol naik-turun. Ini alur ilustratif; bukan instruksi teknis atau jaminan keamanan.',
    steps:[
      {id:'receive',name:'Terima dan identifikasi ceri',why:'Kondisi bahan dan identitas lot harus diketahui sejak awal.'},
      {id:'depulp',name:'Lepaskan kulit/pulp sesuai metode',why:'Bahan berubah bentuk; identitas lot tidak boleh hilang.'},
      {id:'mucilage',name:'Tangani mucilage sesuai proses',why:'Bisa melibatkan cara biologis atau mekanis yang berbeda.'},
      {id:'dry',name:'Keringkan parchment secara terkendali',why:'Pengeringan memerlukan pemantauan dan QC relevan.'},
      {id:'hull',name:'Lepaskan parchment dan sortir green',why:'Hulling diikuti pengujian/penyiapan sesuai mutu yang diminta.'}
    ],
  },
  'wet-hull-check':{
    kind:'choice',title:'Apa bedanya giling basah?',
    intro:'Ketika membandingkan dua alur, apa pembeda fisik yang paling penting?',
    options:[
      {label:'Green coffee pasti memiliki aroma tanah pada semua lot.',correct:false,feedback:'Kesan aroma tidak membuktikan satu proses atau kondisi kualitas.'},
      {label:'Parchment dilepas ketika biji relatif lebih lembap, kemudian green dikeringkan lebih lanjut.',correct:true,feedback:'Urutan dan keadaan bahan saat hulling adalah inti pembedanya.'},
      {label:'Kopi sama sekali tidak melalui tahapan basah.',correct:false,feedback:'Nama wet hulling tidak berarti tidak ada tahapan penanganan basah sebelumnya.'}
    ],
  },
  'microbial-evidence':{
    kind:'classification',title:'Data, dugaan, atau klaim keamanan?',
    intro:'Periksa satu pernyataan tanpa mencampur pengukuran dan kesimpulan.',
    categories:[{id:'measured',label:'Observasi terukur'},{id:'hypothesis',label:'Hipotesis proses'},{id:'unsupported',label:'Klaim tidak terbukti'}],
    prompts:[
      {name:'Pada sampel cairan tangki, pH terbaca berubah dari 5,4 ke 4,2.',correct:'measured',feedback:'Dengan sampling dan alat yang sah, angka itu pengamatan untuk sampel tersebut.'},
      {name:'Perubahan pH mungkin berhubungan dengan aktivitas organisme tertentu.',correct:'hypothesis',feedback:'Hubungan sebab-akibat perlu data organisme, kondisi dan rancangan uji.'},
      {name:'Satu hasil pH membuktikan kopi bebas seluruh bahaya biologis.',correct:'unsupported',feedback:'pH tunggal bukan bukti menyeluruh keamanan proses atau produk.'}
    ],
  },
  'dry-mill-check':{
    kind:'choice',title:'Satu genggam green bean terlihat mulus',
    intro:'Sampel diambil dari bagian paling atas satu karung 60 kg. Apa kesimpulan yang aman?',
    options:[
      {label:'Seluruh lot otomatis lolos pemeriksaan fisik.',correct:false,feedback:'Sampel yang bias belum cukup mewakili lot.'},
      {label:'Perlu rencana sampling yang representatif dan pemeriksaan sesuai tujuan.',correct:true,feedback:'Kualitas bukti dimulai dari bagaimana sampel diambil.'},
      {label:'Tidak perlu cek identitas lot karena sampelnya tampak bagus.',correct:false,feedback:'Identitas lot dan ketelusuran tetap penting.'}
    ],
  },
  'roast-chemistry-check':{
    kind:'choice',title:'Reaksi Maillard hanya terjadi sebelum first crack?',
    intro:'Pilih hubungan yang lebih tepat antara penanda operasi mesin dan reaksi kimia.',
    options:[
      {label:'First crack menghentikan seluruh reaksi pembentuk aroma.',correct:false,feedback:'First crack adalah penanda fisik/operasional, bukan tombol penghenti reaksi.'},
      {label:'Berbagai reaksi termal tumpang tindih dan dapat berlanjut melewati first crack.',correct:true,feedback:'Fase operasional tidak identik dengan satu reaksi kimia tunggal.'},
      {label:'Semua molekul aroma baru muncul persis saat first crack.',correct:false,feedback:'Pembentukan dan kehilangan komponen berlangsung sepanjang proses, bergantung kondisi.'}
    ],
  },
  'roast-style-check':{
    kind:'choice',title:'Dua kopi memiliki warna akhir sama',
    intro:'Supervisor menyatakan rasa mereka pasti identik karena color meter menunjukkan nilai mirip.',
    options:[
      {label:'Setuju; warna menentukan seluruh hasil sensori.',correct:false,feedback:'Dua jalur panas dan bahan bisa berakhir dengan warna mirip tetapi sifat lain berbeda.'},
      {label:'Bandingkan bahan, log, prosedur pengukuran dan hasil sensory yang relevan.',correct:true,feedback:'Warna adalah salah satu observasi, bukan pembuktian mutu tunggal.'},
      {label:'Sebut semua dark roast cacat.',correct:false,feedback:'Gaya sangrai gelap bukan diagnosis cacat tanpa bukti.'}
    ],
  },
  'resting-choice':{
    kind:'choice',title:'Kapan kopi siap dicoba?',
    intro:'Roaster memiliki kopi berbeda dan catatan hasil seduh selama beberapa hari setelah roasting.',
    options:[
      {label:'Semua kopi harus menunggu persis 14 hari.',correct:false,feedback:'Tidak ada waktu tunggal yang sama untuk seluruh produk dan metode.'},
      {label:'Baca hasil percobaan sesuai kopi, kemasan dan metode seduh, lalu evaluasi kebutuhan resting.',correct:true,feedback:'Resting berhubungan dengan gas dan penggunaan, bukan aturan hari universal.'},
      {label:'Semakin lama dibuka makin segar karena CO₂ berkurang.',correct:false,feedback:'Degassing dan penurunan kesegaran bisa berlangsung tumpang tindih.'}
    ],
  },
  'roast-curve-evidence':{
    kind:'choice',title:'Apa yang bisa disimpulkan dari grafik saja?',
    intro:'Kurva probe simulasi terlihat mulus dan ada penanda first crack; belum ada hasil cupping dan laporan keselamatan.',
    options:[
      {label:'Batch pasti enak dan ventilasi aman.',correct:false,feedback:'Log tidak membuktikan mutu sensorik maupun kualitas udara kerja.'},
      {label:'Grafik hanya menggambarkan pembacaan probe dan waktu; untuk mutu serta keselamatan diperlukan bukti lain.',correct:true,feedback:'Batas bukti log harus dinyatakan dengan jelas.'},
      {label:'DTR yang sama membuktikan semua green bean identik.',correct:false,feedback:'Rasio waktu roasting tidak mengukur identitas bahan.'}
    ],
  },
  'strength-extraction-check':{
    kind:'classification',title:'Mana pekat, mana banyak zat yang berpindah?',
    intro:'Gunakan istilah strength, extraction yield dan preferensi tanpa menukar maknanya.',
    categories:[{id:'strength',label:'Strength / konsentrasi'},{id:'yield',label:'Extraction yield'},{id:'preference',label:'Kesukaan'}],
    prompts:[
      {name:'Setelah ditambah air, cangkir yang sama terasa lebih encer.',correct:'strength',feedback:'Pengenceran terutama mengubah konsentrasi, bukan otomatis menambah zat terlarut dari bubuk.'},
      {name:'Dari dosis 20 g, estimasi 4 g zat kopi mencapai minuman.',correct:'yield',feedback:'Ini memberi estimasi 20% EY menurut model sederhana.'},
      {name:'Aku lebih suka minuman yang lebih ringan.',correct:'preference',feedback:'Ini pernyataan kesukaan, bukan pengukuran.'},
    ]
  },
  'brew-variable-check':{
    kind:'choice',title:'Bagaimana menguji grind yang lebih halus?',
    intro:'Satu seduhan terasa tajam. Kamu ingin tahu apakah mengganti grind membantu.',
    options:[
      {label:'Ubah grind dan suhu sekaligus agar hasil cepat terlihat.',correct:false,feedback:'Dua intervensi sekaligus membuat pengaruh masing-masing sulit ditentukan.'},
      {label:'Ubah satu variabel yang sengaja dikontrol, catat perubahan dan ulangi bila bisa.',correct:true,feedback:'Perubahan hasil tetap perlu diinterpretasi bersama waktu alir dan suhu penyajian.'},
      {label:'Tentukan bahwa setiap acidity berarti underextraction.',correct:false,feedback:'Kesan asam tidak otomatis menjelaskan penyebabnya.'}
    ]
  },
  'water-numbers-check':{
    kind:'classification',title:'Angka air ini mengukur apa?',
    intro:'Pilih parameter berdasarkan pertanyaan yang dijawab, bukan berdasarkan angka paling besar.',
    categories:[{id:'tds',label:'EC/TDS'},{id:'alk',label:'Alkalinitas'},{id:'ph',label:'pH'}],
    prompts:[
      {name:'Pembacaan alat konduktivitas yang dikonversi ke perkiraan ppm.',correct:'tds',feedback:'Angka ini tidak memberi komposisi spesifik ion.'},
      {name:'Kapasitas larutan untuk menetralkan asam dalam batas metode.',correct:'alk',feedback:'Alkalinitas berhubungan dengan kapasitas buffer, tidak sama dengan pH.'},
      {name:'Besaran aktivitas ion hidrogen pada sampel air.',correct:'ph',feedback:'pH tidak menentukan total mineral atau kapasitas buffering sendirian.'}
    ]
  },
  'brew-method-sort':{
    kind:'classification',title:'Bagaimana air menyentuh bubuk?',
    intro:'Kelompokkan skema metode, bukan menebak flavor.',
    categories:[{id:'imm',label:'Immersion'},{id:'perc',label:'Percolation'},{id:'other',label:'Perubahan konsentrasi setelah seduh'}],
    prompts:[
      {name:'Air dan bubuk direndam lalu dipisahkan dengan mesh.',correct:'imm',feedback:'Kontak utama melibatkan perendaman sebelum penyaringan.'},
      {name:'Air baru terus melewati bed pada dripper.',correct:'perc',feedback:'Air bergerak melalui bed bubuk saat penyeduhan.'},
      {name:'Kopi yang sudah diseduh ditambah air lagi.',correct:'other',feedback:'Ini dilusi minuman jadi, bukan metode kontak air dengan bubuk.'}
    ]
  },
  'sensory-ten-cards':{
    kind:'classification',title:'Sensasi mana yang sebenarnya dilaporkan?',
    intro:'Sepuluh deskripsi, satu per satu. Bandingkan taste, aroma, tekstur dan kesukaan. Tidak perlu mencicipi dari layar.',
    categories:[{id:'aroma',label:'Aroma'},{id:'taste',label:'Taste'},{id:'mouth',label:'Mouthfeel'},{id:'like',label:'Preferensi'}],
    prompts:[
      {name:'Mengingatkan pada kulit jeruk',correct:'aroma',feedback:'Ini asosiasi aroma/flavor, bukan salah satu rasa dasar.'},
      {name:'Lebih asam daripada sampel sebelumnya',correct:'taste',feedback:'Asam merupakan rasa dasar; pernyataan ini bukan ukuran pH.'},
      {name:'Meninggalkan kesan kesat di mulut',correct:'mouth',feedback:'Astringency adalah sensasi oral.'},
      {name:'Aku paling suka kopi ini',correct:'like',feedback:'Pilihan kesukaan tidak sama dengan deskriptor kimia.'},
      {name:'Aroma kacang panggang menonjol',correct:'aroma',feedback:'Istilah kacang panggang merupakan asosiasi bau.'},
      {name:'Terasa pahit di lidah',correct:'taste',feedback:'Pahit adalah rasa dasar.'},
      {name:'Bodinya terasa lebih tebal',correct:'mouth',feedback:'Body biasa dipakai untuk mengungkap pengalaman tekstur/berat.'},
      {name:'Cangkir ini cocok untuk seleraku',correct:'like',feedback:'Cocok di lidah adalah preferensi.'},
      {name:'Ada aroma bunga saat dihirup',correct:'aroma',feedback:'Kesan bunga menggambarkan penciuman.'},
      {name:'Minuman meninggalkan rasa agak manis',correct:'taste',feedback:'Ini taste yang dilaporkan; jangan menganggap angka gula terukur.'},
    ],
  },
  'sensory-label-bias':{
    kind:'choice',title:'Dua label, satu minuman',
    intro:'Pencicip memberi skor kesukaan berbeda setelah membaca dua cerita kemasan berbeda, padahal sampelnya sama.',
    options:[
      {label:'Komposisi kimia minuman pasti berubah setelah label dibaca.',correct:false,feedback:'Dalam contoh minumannya sama; informasi memengaruhi konteks persepsi.'},
      {label:'Ekspektasi dapat memengaruhi penilaian. Ulangi dengan identitas disamarkan sesuai tujuan.',correct:true,feedback:'Blind comparison membantu membatasi sebagian bias, meski tidak menghapus semuanya.'},
      {label:'Pencicip yang berubah opini pasti berbohong.',correct:false,feedback:'Persepsi manusia dapat terpengaruh konteks tanpa kecurangan.'}
    ],
  },
  'cva-four-lenses':{
    kind:'classification',title:'Pasangkan bukti dengan empat lensa',
    intro:'Kopi yang sama, tetapi tiap data menjawab pertanyaan berbeda.',
    categories:[{id:'phys',label:'Physical'},{id:'desc',label:'Descriptive'},{id:'aff',label:'Affective'},{id:'extra',label:'Extrinsic'}],
    prompts:[
      {name:'Laporan inspeksi green menyebut jumlah biji pecah.',correct:'phys',feedback:'Ini atribut fisik yang perlu diperiksa sesuai protokol.'},
      {name:'Panelis menggambarkan aroma bunga dan body ringan.',correct:'desc',feedback:'Ini deskripsi atribut sensorik, bukan suka atau tidak.'},
      {name:'Kelompok panelis menilai sampel lebih disukai.',correct:'aff',feedback:'Kesukaan adalah aspek afektif.'},
      {name:'Catatan asal, pembayaran, dan proses yang terverifikasi.',correct:'extra',feedback:'Ini informasi nilai di luar apa yang langsung ada di cangkir.'}
    ]
  },
  'coffee-history-sequence':{
    kind:'sequence',title:'Urutkan simpul sejarah, bukan mitosnya',
    intro:'Skema kronologis besar saja; lokasi asal biologis tidak sama dengan tempat tradisi budidaya atau perdagangan berkembang.',
    steps:[
      {id:'africa',name:'Keragaman biologis Arabika di Afrika Timur',why:'Kawasan asal biologis bukan otomatis pusat seluruh kisah dagang.'},
      {id:'yemen',name:'Budidaya dan tradisi konsumsi di Yaman berkembang',why:'Jaringan manusia dan perdagangan berperan penting.'},
      {id:'java',name:'Perkebunan kopi kolonial berkembang di Jawa',why:'Pertumbuhan ekspor melibatkan kebijakan kolonial dan kerja paksa.'},
      {id:'modern',name:'Pasar global membentuk kembali cerita kopi Indonesia',why:'Nilai dan narasi modern memiliki konteks sosial yang panjang.'},
    ],
  },
  'sustainability-claim-check':{
    kind:'choice',title:'Kopi dari kebun teduh otomatis netral karbon?',
    intro:'Kemasan menulis “shade grown = zero deforestation = carbon neutral” tanpa menunjukkan batas penghitungan.',
    options:[
      {label:'Ya, keberadaan pohon peneduh membuktikan tiga klaim sekaligus.',correct:false,feedback:'Pohon naungan sendiri tidak menjelaskan riwayat lahan maupun keseluruhan inventaris emisi.'},
      {label:'Minta bukti yang berbeda untuk kondisi lahan, emisi dan klaim produk; jangan mencampurnya.',correct:true,feedback:'Masing-masing klaim perlu cakupan dan metode verifikasi sendiri.'},
      {label:'Langsung sebut seluruh kebun naungan tidak berkelanjutan.',correct:false,feedback:'Ketidakcukupan bukti klaim bukan bukti seluruh praktik buruk.'}
    ]
  },

};
