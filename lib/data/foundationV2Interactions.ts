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
export type Activity = ClassificationActivity | SequenceActivity | ChoiceActivity | CalculatorActivity | AnatomyActivity;

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
};
