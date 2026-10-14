export type CoffeeShopModule={code:string;title:string;description:string;references:string[]};
export type CoffeeShopLesson={id:string;moduleId:string;order:number;title:string;content:string;minutes:number};
export const COFFEE_SHOP_V2_MODULES:CoffeeShopModule[]=[
  {
    "code": "CS01",
    "title": "Konsep Kedai, Pelanggan dan Produk",
    "description": "Definisikan siapa yang akan datang dan nilai yang benar-benar dibayar.",
    "references": [
      "https://sca.coffee/value-assessment"
    ]
  },
  {
    "code": "CS02",
    "title": "Lokasi, Permintaan dan Skenario Pendapatan",
    "description": "Uji traffic dan perilaku berdasarkan observasi, bukan jumlah kendaraan saja.",
    "references": [
      "https://sca.coffee/value-assessment"
    ]
  },
  {
    "code": "CS03",
    "title": "HPP, Harga Jual dan Channel Economics",
    "description": "Pahami dasar massa, biaya variabel, gross margin, markup dan kontribusi tiap channel.",
    "references": [
      "https://sca.coffee/value-assessment"
    ]
  },
  {
    "code": "CS04",
    "title": "CAPEX, OPEX, Kapasitas dan Titik Impas",
    "description": "Modelkan investasi dan operasi nyata beserta skenario demand.",
    "references": [
      "https://oss.go.id/id"
    ]
  },
  {
    "code": "CS05",
    "title": "Cash Flow dan Modal Kerja",
    "description": "Bedakan profit, penerimaan pembayaran, stok dan waktu jatuh tempo.",
    "references": [
      "https://oss.go.id/id"
    ]
  },
  {
    "code": "CS06",
    "title": "Desain Bar, Alat, Air dan Keamanan",
    "description": "Bangun workflow realistis, spesifikasi kapasitas dan maintenance.",
    "references": [
      "https://sca.coffee/education/how-to-prepare"
    ]
  },
  {
    "code": "CS07",
    "title": "Tim, SOP, Sanitasi dan Persediaan",
    "description": "Pastikan mutu layanan repeatable dan proses aman di setiap shift.",
    "references": [
      "https://registrasipangan.pom.go.id/layanan"
    ]
  },
  {
    "code": "CS08",
    "title": "Pemasaran, Kepatuhan dan Rencana Perbaikan",
    "description": "Gabungkan retensi lokal, data usaha, izin dan sustainability.",
    "references": [
      "https://oss.go.id/id",
      "https://registrasipangan.pom.go.id/berita/pengumuman-implementasi-kbli-2025-pada-registrasi-pangan-olahan"
    ]
  }
];
export const COFFEE_SHOP_V2_LESSONS:CoffeeShopLesson[]=[
  {
    "id": "cs-m01-l01",
    "moduleId": "CS01",
    "order": 1,
    "title": "Dari ide kedai menjadi masalah pelanggan yang nyata",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nBisnis kedai kopi adalah sistem yang menjual pengalaman, akses, produk dan layanan kepada pelanggan tertentu. Menyukai kopi tidak otomatis membuktikan ada permintaan yang cukup. Pertanyaan awal: siapa pengguna, pada kesempatan apa mereka membeli, seberapa sering, dan bagaimana alternatif yang sekarang dipilih.\n\n## Mekanisme dan risiko\n\nKedai dekat kampus, transit station, pemukiman keluarga dan perkantoran memiliki ritme kunjungan serta perilaku berbeda. Menu yang populer di media sosial tidak selalu sesuai dengan waktu tunggu atau daya beli pelanggan nyata.\n\n## Cara menerapkan di kedai\n\nWawancarai calon pembeli tanpa menggiring jawaban. Catat pekerjaan yang ingin diselesaikan, jam kunjungan, pilihan saat ini, anggaran dan komplain aktual. Uji menu kecil berbayar sebelum berkomitmen pada sewa panjang.\n\n## Simulasi kondisi Indonesia\n\nCalon pendiri mendapat 50 respons 'tertarik' di Instagram. Itu validasi minat awal, bukan bukti akan terjual 50 cup setiap hari. Coba pre-order atau pop-up berbayar di lokasi yang relevan.\n\n### Menguji permintaan, bukan mencari persetujuan\n\nMulai dari *occasion* pembelian: siapa membeli minuman, ketika apa, bersama siapa, berapa banyak waktu yang mereka punya, dan alternatif mana yang mereka pilih hari ini. Pelanggan yang berkata \"idenya bagus\" mungkin tetap membeli dari warung terdekat. Jadi pisahkan **minat**, **percobaan membeli** dan **pembelian ulang**.\n\nBuat riset lapangan dengan tiga bagian: (1) wawancara tentang pengalaman nyata, bukan pertanyaan \"kalau ada kedai baru kamu mau datang?\"; (2) observasi perilaku di jam relevan; (3) tes transaksi berbayar seperti preorder atau pop-up sederhana. Catat harga yang benar-benar dibayar, jumlah transaksi, waktu layanan, serta alasan tidak membeli.\n\n**Simulasi awal:** 60 responden menyatakan tertarik, 12 mencoba membeli pada uji pop-up, dan 4 membeli lagi di periode berikutnya. Angka 12/60 = 20% menunjukkan konversi dari *kelompok uji tersebut*, bukan prediksi konversi seluruh warga kota. Angka 4 bukan bukti retensi jangka panjang karena periode terlalu pendek. Sertakan ukuran dan bias sampelnya.\n\nTentukan kriteria sebelum tes: hasil seperti apa yang membuatmu melanjutkan, mengubah menu, memindah lokasi, atau menghentikan rencana? Data negatif dapat menyelamatkan modal. [Rujukan riset pasar SBA](https://www.sba.gov/counseling/plan-your-business/).\n\n## Latihan refleksi\n\nBukti apa yang akan membuatmu mengubah positioning awal?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m01-l02",
    "moduleId": "CS01",
    "order": 2,
    "title": "Model layanan: dine-in, takeaway, kios dan delivery",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nEmpat model pelayanan ini mengubah kebutuhan ruang, tenaga, stok, alat dan biaya per transaksi. Omzet tinggi bukan otomatis menguntungkan jika channel komisinya mahal atau kapasitas puncak tidak sesuai.\n\n## Mekanisme dan risiko\n\nTakeaway mungkin membutuhkan kemasan dan jalur handoff khusus, sedangkan dine-in memerlukan pengelolaan meja dan waktu tinggal. Delivery menambah pertimbangan produk yang tetap enak setelah perjalanan dan jadwal penerimaan pembayaran.\n\n## Cara menerapkan di kedai\n\nPilih channel awal berdasarkan tujuan pelanggan dan kapasitas nyata. Buat peta perjalanan: lihat menu -> pesan -> bayar -> bar -> ambil -> feedback, kemudian catat titik antre dan kesalahan.\n\n## Simulasi kondisi Indonesia\n\nKedai memilih banyak menu blender demi delivery, namun blender menghambat bar espresso saat makan siang. Pembagian stasiun atau pembatasan menu peak-hour bisa lebih efektif daripada menambah iklan.\n\n### Format layanan mengubah biaya dan kapasitas\n\nDine-in, takeaway, kios dan delivery bukan sekadar empat kanal menjual minuman yang sama. Dine-in membutuhkan ruang, kebersihan meja dan waktu tinggal; takeaway menuntut alur antrean serta kemasan; delivery menambah risiko waktu perjalanan, komisi, pengemasan dan keluhan setelah produk meninggalkan bar. Keputusan format memengaruhi pemilihan lokasi, alat, tim dan unit economics.\n\nBuat tabel untuk tiap format berisi target pelanggan, porsi jam sibuk, *average order value*, kapasitas layanan, biaya tetap lokasi, biaya variabel per order, pengalaman yang dapat dikendalikan, dan data yang masih belum diketahui. Jangan memilih semua kanal sekaligus jika operasi masih tahap percobaan.\n\n**Contoh ilustratif:** kios menjual 40 cup pada jam berangkat kantor tetapi ruang penyimpanan kecil; kedai dine-in bisa menahan pelanggan lebih lama namun volume transaksi per jam tidak otomatis lebih tinggi. Harga menu sama pun dapat memberikan kontribusi berbeda setelah kemasan dan komisi.\n\n**Latihan desain operasi:** gambar satu perjalanan pesanan mulai memilih menu, bayar, dibuat, diserahkan, sampai penanganan komplain. Tandai titik tempat antrean menumpuk, kemasan bisa bocor, atau nama pesanan tertukar. Jika proses belum bisa dilayani dengan konsisten oleh tim kecil, sederhanakan format sebelum berinvestasi lebih besar.\n\n## Latihan refleksi\n\nApa trade-off utama tiap channel bagi bisnis dengan dua barista per shift?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m01-l03",
    "moduleId": "CS01",
    "order": 3,
    "title": "Membangun menu minimal yang dapat dibeli ulang",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nMenu baru sebaiknya menguji hipotesis rasa dan repeatability, bukan menyenangkan seluruh segmen sekaligus. Kategori yang terlalu lebar memecah inventaris dan menambah waktu pelatihan tim.\n\n## Mekanisme dan risiko\n\nUntuk setiap menu tetapkan target rasa, bahan, batch cost, jumlah porsi, penyajian, alergi, daya simpan bahan, dan standard deviation antarbarista. Uji buta bila cocok dan minta alasan pembelian ulang.\n\n## Cara menerapkan di kedai\n\nSusun enam menu inti dan satu menu eksperimen; amati penjualan tiap jam, bahan terbuang dan penyebab penolakan. Menu yang sedikit tapi stabil bisa lebih menguntungkan daripada katalog panjang.\n\n## Simulasi kondisi Indonesia\n\nMinuman musiman disukai 8 pelanggan trial namun memakai sirup mahal yang hanya bertahan dua minggu. Sebelum meluncurkan, hitung stok minimum dan potensi waste jika repeat-order rendah.\n\n### Menu pendek harus dibangun dari arsitektur bahan\n\nMenu minimal tidak berarti sekadar membuat lima nama populer. Rancang kelompok produk berdasarkan bahan, alat, waktu penyajian dan kebutuhan pelanggan. Dua menu yang memakai basis kopi, susu dan sirup yang sama mungkin lebih mudah dikendalikan ketimbang enam menu dengan bahan cepat rusak yang hanya terpakai sedikit.\n\nGunakan *menu matrix*: nama minuman, resep gram/ml, target rasa, biaya bahan dan kemasan, durasi kerja, bahan berisiko habis, kemampuan substitusi saat stok kosong, serta batas eksperimen personalisasi. Tes rasa secara buta dan gunakan catatan komplain, bukan mengikuti resep kepala barista tanpa mengerti alasannya.\n\n**Ilustrasi waste:** kedai membeli 5 liter bahan khusus dengan umur simpan operasional terbatas tetapi hanya memakai 1 liter sebelum masa penggunaannya berakhir. Biaya per minuman dari bahan tersebut harus mencerminkan pemakaian dan potensi terbuang; jangan membagi seluruh pembelian ke resep seolah semua akan terjual.\n\nMulai dengan menu yang bisa dibuat ulang pada jam sibuk. Lakukan eksperimen kecil: ubah satu elemen resep, catat biaya dan hasil, bandingkan kualitas pada suhu penyajian yang sesungguhnya. Perubahan yang memperbaiki rasa tetapi melampaui kapasitas bar perlu ditinjau kembali.\n\n## Latihan refleksi\n\nIndikator selain jumlah likes yang membuktikan menu itu layak dipertahankan?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m02-l01",
    "moduleId": "CS02",
    "order": 1,
    "title": "Survei lokasi dengan observasi yang dapat diuji",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nLokasi strategis tidak cukup dinilai dari harga sewa dan keramaian kendaraan. Pelanggan harus punya alasan berhenti, akses aman, jam operasional yang sesuai, dan pilihan membeli yang mudah.\n\n## Mekanisme dan risiko\n\nArus orang di pagi hari berbeda dengan sore atau akhir pekan. Pengukuran traffic hanya berguna jika konversi ke pembeli dan kecocokan segmen dinilai secara hati-hati.\n\n## Cara menerapkan di kedai\n\nSelama beberapa sesi di hari berbeda, catat pejalan kaki, entrance, waktu tunggu, kompetitor, parkir, akses pejalan, pola kerja kantor/kampus, dan biaya fit-out lokasi.\n\n## Simulasi kondisi Indonesia\n\nLokasi di jalan besar memiliki 1.000 kendaraan lewat per jam, tapi tak ada area berhenti. Itu tidak sama dengan potensi 1.000 transaksi atau bahkan 10 pembeli.\n\n### Mengukur lokasi sebagai funnel pelanggan\n\nJalan ramai bukan berarti transaksi besar. Hitung berapa orang dari segmen yang dituju benar-benar melihat titik usaha, dapat berhenti, cocok dengan jam buka, dan memilih membeli. Parkir sulit, antrean yang menutup trotoar, atau jam kantor yang tidak sesuai dapat menurunkan konversi walau jumlah kendaraan tinggi.\n\nSurvei tiga hari dan beberapa jam yang relevan, termasuk hari biasa dan akhir pekan bila segmen berbeda. Catat pejalan kaki yang realistis menjadi pembeli, akses transport, pesaing langsung dan alternatif, keamanan, visibilitas, kondisi hujan, biaya sewa, izin, utilitas dan batasan fasilitas. Nyatakan metode penghitungan agar dua lokasi dapat dibandingkan.\n\n**Simulasi yang bukan proyeksi pasar:** titik A dilewati 2.000 kendaraan tetapi hanya 20 calon pembeli realistis terlihat pada jam buka; titik B memiliki 300 pejalan kaki sasaran dan akses mudah. Angka traffic tidak cukup untuk menyatakan B pasti lebih laris: kedua lokasi masih memerlukan uji penjualan/observasi konversi.\n\nJangan tanda tangan sewa panjang hanya dengan omzet tetangga atau cerita broker. Buat matriks keputusan berbobot yang memisahkan **data terukur**, **perkiraan**, **biaya tetap** dan **risiko yang tidak dapat dibalik**.\n\n## Latihan refleksi\n\nData apa yang membedakan traffic lewat dengan calon pembeli yang realistis?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m02-l02",
    "moduleId": "CS02",
    "order": 2,
    "title": "Forecast skenario, bukan satu angka yang meyakinkan",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nForecast awal sangat tidak pasti. Buat skenario konservatif, dasar, dan optimistis, dengan asumsi terpisah untuk kunjungan, transaksi, nilai keranjang dan hari buka.\n\n## Mekanisme dan risiko\n\nPenjualan kotor = jumlah transaksi × nilai belanja rata-rata pada basis periode yang sama. Untuk kopi, perubahan mix minuman dan diskon membuat AOV bergerak; kapasitas produksi dapat membatasi penjualan bahkan saat minat tinggi.\n\n## Cara menerapkan di kedai\n\nUji forecast dengan data pop-up, jam operasional, lokasi dan pengalaman kompetitor yang relevan. Catat asumsi mana yang belum terverifikasi; hubungkan tiap perubahan dengan biaya serta kas.\n\n## Simulasi kondisi Indonesia\n\nSkenario dasar 70 transaksi/hari × Rp29.000 × 26 hari = Rp52.780.000 penjualan kotor/bulan; bukan laba. Jika transaksi turun ke 45/hari, evaluasi ulang sewa dan kebutuhan kas.\n\n### Skenario pendapatan dan titik rapuhnya\n\nProyeksi keuangan harus memiliki penggerak yang dapat dilihat: jumlah transaksi per hari, rata-rata item per transaksi, harga bersih setelah diskon, hari operasi, komposisi kanal, serta musim. Menulis \"omzet Rp100 juta per bulan\" tanpa penggerak membuat angka tidak dapat diuji.\n\n**Contoh latihan:** 45 transaksi/hari × Rp28.000 rata-rata transaksi × 26 hari buka = **Rp32.760.000** penjualan bruto ilustratif per bulan, sebelum diskon, refund dan pajak yang diperlakukan sesuai sistem. Skenario rendah 30 transaksi/hari menghasilkan Rp21.840.000, sedangkan tinggi 60 menghasilkan Rp43.680.000 pada asumsi lain sama. Jangan menyamakan rentang contoh dengan hasil riset lokasi.\n\nTambahkan sensitivitas: bagaimana jika 30% transaksi berpindah ke delivery, ada promo, rata-rata tiket lebih rendah, atau salah satu mesin mati pada jam puncak? Untuk perhitungan laba, setiap kanal membutuhkan pendapatan bersih dan biaya variabel yang berbeda; untuk kas, perhatikan tanggal settlement.\n\n**Tugas:** gunakan minimal tiga skenario dan beri kolom sumber untuk setiap asumsi. Jika tingkat konversi tidak diketahui, kosongkan dan rencanakan pengukuran lapangan. [Dasar market sizing](https://www.sba.gov/counseling/plan-your-business/).\n\n## Latihan refleksi\n\nBila target omzet meleset 30%, pengeluaran mana dapat disesuaikan tanpa melanggar keselamatan atau kualitas?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m02-l03",
    "moduleId": "CS02",
    "order": 3,
    "title": "Bukan hanya pelanggan baru: observasi retensi",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nMetrik repeat purchase berbeda dari kunjungan pertama. Promo besar bisa menaikkan transaksi satu hari namun tidak menjamin pelanggan kembali dengan harga reguler.\n\n## Mekanisme dan risiko\n\nKumpulkan feedback sukarela dan agregat yang menghormati privasi. Catat repeat-order, jeda kunjungan, komplain, kecepatan layanan, dan alasan pelanggan tidak kembali.\n\n## Cara menerapkan di kedai\n\nMulai dengan kartu loyalitas sederhana dan ukuran penjualan per minggu; jangan menambah sistem CRM mahal sebelum data cukup. Pastikan staf dapat mengeksekusi promosi tanpa memperlambat bar.\n\n## Simulasi kondisi Indonesia\n\nDalam dua minggu, banyak pembeli diskon tetapi penjualan normal tak bertambah. Ubah pengujian dari jumlah penukaran kupon ke repeat berbayar tanpa diskon.\n\n### Retensi dinilai dari kohort, bukan sekadar follower\n\nPengunjung pertama dan pelanggan yang kembali memiliki biaya dan perilaku berbeda. Jika toko hanya mengukur jumlah pengikut media sosial, ia belum tahu apakah orang mencoba produk kedua kalinya. Mencatat kunjungan ulang memerlukan definisi yang stabil serta penghormatan privasi pelanggan.\n\nTentukan jendela pengamatan misalnya 30 hari dan kelompok pelanggan pertama kali pada bulan yang sama. Ukur berapa yang kembali dalam jendela tersebut, bagaimana perubahan average order, dan apakah mereka mengeluhkan waktu tunggu atau konsistensi produk. Jangan membandingkan kohort yang baru dua hari berjalan dengan kohort yang memiliki kesempatan kembali penuh.\n\n**Contoh ilustrasi:** dari 80 pembeli baru yang dapat diidentifikasi secara sah, 20 melakukan pesanan kedua dalam 30 hari. Repeat rate kohort = 20/80 = **25%**. Angka ini bukan tingkat loyalitas semua tamu bila banyak transaksi anonim; laporkan batas data. Analisis jam, kanal, dan jenis menu untuk mengetahui apakah retensi terhambat pengalaman layanan.\n\nUji satu perbaikan: misalnya kurangi variasi kualitas latte pada shift sore atau perbaiki alur pickup. Lalu bandingkan metrik pada periode yang masuk akal. Diskon besar tanpa mengukur kontribusi bisa membuat repeat naik tetapi arus kas memburuk.\n\n## Latihan refleksi\n\nBagaimana menjaga pelanggan tetap merasa dihargai tanpa mengandalkan diskon terus-menerus?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m03-l01",
    "moduleId": "CS03",
    "order": 1,
    "title": "Resep menjadi HPP yang bisa diaudit",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nHPP per cup harus diturunkan dari resep aktual beserta harga beli, konversi satuan, pemakaian bahan dan waste yang bisa dipertanggungjawabkan. Harga kemasan besar dan takaran tidak boleh langsung dibandingkan tanpa konversi.\n\n## Mekanisme dan risiko\n\nSebuah espresso 18 g dari biji Rp260.000/kg memakai biaya biji Rp4.680. Tambahkan susu, sirup, es, kemasan dan proporsi susut yang relevan agar mencerminkan biaya menu, bukan menyebut biaya kopi sebagai HPP penuh.\n\n## Cara menerapkan di kedai\n\nSusun bill of materials per menu: nama bahan, unit beli, unit pemakaian, yield, harga terakhir, biaya variabel, wastage basis, standar porsi; uji dengan tim saat pergantian supplier.\n\n## Simulasi kondisi Indonesia\n\nMinuman menghabiskan kopi Rp4.680, susu Rp5.200, sirup Rp1.000 dan kemasan Rp1.500. Total biaya bahan+kemasan Rp12.380; belum termasuk komisi channel atau tenaga jika model mengklasifikasikannya terpisah.\n\n### Worked method: dari harga beli ke satu gelas\n\nDalam resep bisnis, setiap bahan harus memiliki **satuan pembelian**, **satuan pemakaian**, dan **yield yang realistis**. Formula dasar biaya bahan = jumlah digunakan × biaya per satuan pakai. Misalnya kopi dibeli Rp260.000 per 1.000 g; biaya satu gram = Rp260 dan dosis 18 g = **Rp4.680**. Hasil ini bukan HPP keseluruhan minuman.\n\nContoh penambahan yang konsisten: susu Rp5.200, sirup Rp1.000 dan kemasan Rp1.500 membuat bahan+kemasan = Rp4.680 + Rp5.200 + Rp1.000 + Rp1.500 = **Rp12.380**. Jika penggunaan bahan atau yield berubah, hitung ulang; tidak boleh memakai satu harga HPP sepanjang tahun tanpa melihat invoice.\n\n**Periksa klasifikasi biaya:** waste yang berasal dari pembuatan minuman, kalibrasi, retur, komisi platform dan komponen lain perlu dicatat pada tempat yang benar dalam model. Jangan masukkan kemasan dalam HPP lalu menambahkannya lagi ke biaya variabel channel. Gaji shift dan overhead jangan dipukul rata tanpa mendefinisikan tujuan analisis.\n\n**Latihan aktif:** ganti supplier susu yang lebih murah tetapi kemasan lebih kecil. Hitung biaya per ml, per gelas dan risiko waste. Catat hasil tes rasa agar keputusan pembelian tidak meminimalkan biaya sambil merusak kepuasan pelanggan.\n\n## Latihan refleksi\n\nBiaya apa yang bisa berubah jika pelanggan meminta oat milk dan cup ekstra?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m03-l02",
    "moduleId": "CS03",
    "order": 2,
    "title": "Gross margin bukan markup atau kontribusi",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nGross margin membandingkan laba kotor dengan harga jual; markup membandingkan tambahan harga terhadap biaya. Contribution margin mengurangi semua biaya variabel yang diperlukan untuk menjual satu unit. Ketiganya menjawab pertanyaan berbeda.\n\n## Mekanisme dan risiko\n\nJika harga jual Rp30.000 dan HPP produk Rp12.000, gross margin (30−12)/30 = 60%, markup (30−12)/12 = 150%. Jika ada komisi, packaging atau insentif per transaksi di luar HPP, kontribusi bisa lebih rendah.\n\n## Cara menerapkan di kedai\n\nSelaraskan klasifikasi biaya dan harga sebelum menghitung; jika overhead sudah diserap di HPP, jangan menguranginya dua kali. Untuk BEP, gunakan kontribusi per unit yang konsisten.\n\n## Simulasi kondisi Indonesia\n\nDua menu sama-sama punya margin kotor 60% tetapi satu memakai biaya delivery per order yang besar. Perbandingan keputusan harga harus memakai kontribusi per channel dan kapasitas bar.\n\n### Kerjakan ketiga rumus memakai basis sama\n\nMisal harga menu Rp30.000 dan HPP produk Rp12.000 tanpa pajak, diskon dan fee. **Gross profit per cup** = Rp18.000. **Gross margin** = 18.000/30.000 = **60%**. **Markup** = 18.000/12.000 = **150%**. Margin membagi laba kotor dengan harga, sementara markup membagi dengan biaya—menyamakan keduanya membuat keputusan harga keliru.\n\nUntuk channel delivery, definisikan apakah Rp30.000 adalah harga pelanggan atau penerimaan merchant sesudah diskon/pajak tertentu. Bila komisi ilustratif 20% atas dasar Rp30.000, fee = Rp6.000. Jika tidak ada biaya variabel tambahan lain di luar HPP, kontribusi = 30.000 − 12.000 − 6.000 = **Rp12.000**, lebih rendah dari gross profit. Jangan mengurangkan komisi lagi jika laporan HPP sudah memasukkannya.\n\n**Apa yang harus dilakukan:** buat baris per kanal dengan harga, diskon siapa yang menanggung, pajak yang berlaku, fee yang dihitung dari basis tertulis, biaya variabel, kontribusi per order dan waktu uang cair. Pahami bahwa angka ilustratif bukan komisi platform aktual.\n\n**Cek pemahaman:** menu berkontribusi Rp12.000 lewat delivery dan Rp18.000 lewat penjualan langsung dalam asumsi di atas. Tetapi jika channel langsung perlu biaya tambahan tertentu, hasil dapat berubah. Gunakan biaya nyata untuk keputusan; jangan menghapus kanal hanya dari persentase margin.\n\n## Latihan refleksi\n\nKenapa memilih menu dengan gross margin terbesar belum tentu memperbaiki laba operasional?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m03-l03",
    "moduleId": "CS03",
    "order": 3,
    "title": "Marketplace delivery: baca net settlement",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nHarga listing di aplikasi bukan kas bersih. Komisi, kontribusi promo oleh merchant, payment fee, refund, packaging dan pajak dapat mengubah ekonomi transaksi. Besaran potongan harus memakai kontrak aktual, bukan dianggap standar nasional.\n\n## Mekanisme dan risiko\n\nIlustrasi tanpa pajak: listing Rp38.000, komisi merchant 25% (asumsi), promo merchant Rp3.000 => penerimaan sebelum biaya lain Rp25.500. Jika biaya produk dan kemasan Rp16.000, kontribusi awal Rp9.500.\n\n## Cara menerapkan di kedai\n\nCatat formula untuk tiap mitra: gross sales, charge yang dibayar pembeli, merchant commission, promo sharing, transfer fee, refund, HPP, packaging, net contribution serta settlement date.\n\n## Simulasi kondisi Indonesia\n\nPenjualan delivery melonjak tetapi kas menipis karena saldo ditahan dan komisi tinggi. Menaikkan omzet lewat diskon tambahan belum tentu memperbaiki kebutuhan modal kerja.\n\n## Latihan refleksi\n\nBagian kontrak mana perlu dilihat ulang sebelum menetapkan harga khusus aplikasi?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "cs-m04-l01",
    "moduleId": "CS04",
    "order": 1,
    "title": "Bedakan belanja investasi dengan kebutuhan modal kerja",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nCAPEX mencakup aset tahan lama yang dibeli atau dibangun; OPEX merupakan biaya operasional periode berjalan. Deposit sewa, stok awal dan kas operasional harus dianalisis sesuai perlakuan akuntansi yang tepat; semuanya memengaruhi saldo kas awal.\n\n## Mekanisme dan risiko\n\nAngka persentase 'mesin harus 40% modal' tidak berlaku universal. Biaya alat, fit-out, instalasi daya/air, furniture, POS, izin, deposit, stok awal dan working-capital reserve harus diuji dengan kebutuhan riil.\n\n## Cara menerapkan di kedai\n\nBuat daftar line item dengan harga pemasok tertulis, tanggal quote, ongkir, instalasi, garansi dan biaya perawatan. Pisahkan wajib sebelum buka, bisa ditunda, dan biaya kejutan yang mungkin.\n\n## Simulasi kondisi Indonesia\n\nKedai punya modal Rp220 juta tetapi renovasi awal Rp150 juta dan alat Rp90 juta. Total sudah melebihi kas bahkan sebelum stok/operasi; rencana harus dipangkas atau pendanaan berubah.\n\n## Latihan refleksi\n\nApa yang lebih mudah ditunda tanpa merusak proposisi utama kedai?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)"
  },
  {
    "id": "cs-m04-l02",
    "moduleId": "CS04",
    "order": 2,
    "title": "Kapasitas bar pada jam ramai",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nKapasitas nominal mesin tidak sama dengan throughput pesanan siap saji. Beberapa menu berbagi grinder, steam wand, blender, sink dan tenaga operator. Bottleneck menentukan antrean.\n\n## Mekanisme dan risiko\n\nUkur waktu siklus per menu pada jam puncak dan saat normal. Variasi pesanan, prep dan kasir bisa menciptakan blocking. Penambahan kursi tanpa kapasitas layanan memicu komplain.\n\n## Cara menerapkan di kedai\n\nBuat service blueprint dari order hingga handoff; gunakan simulasi antrean sederhana berdasarkan pesanan per 15 menit dan waktu proses. Ubah layout, menu atau jadwal sebelum membeli alat tambahan.\n\n## Simulasi kondisi Indonesia\n\nKedai menerima 30 pesanan dalam 15 menit, sedangkan bar hanya sanggup menyiapkan 18 dengan mutu stabil. Selisih 12 order membentuk backlog awal; solusi perlu menimbang keselamatan dan customer expectation.\n\n## Latihan refleksi\n\nBagaimana memisahkan masalah kapasitas alat dari urutan kerja yang buruk?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)"
  },
  {
    "id": "cs-m04-l03",
    "moduleId": "CS04",
    "order": 3,
    "title": "Hitung BEP memakai kontribusi, bukan omzet",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nBreak-even operasional sederhana: biaya tetap relevan / kontribusi per unit, dengan asumsi harga, biaya variabel dan mix stabil serta kapasitas mampu. BEP bukan tanggal kas kembali positif dan bukan pengembalian investasi awal.\n\n## Mekanisme dan risiko\n\nIlustrasi: fixed cost bulanan Rp18.000.000; rata-rata net revenue per cup Rp32.000 dan variable cost Rp14.000. Kontribusi = Rp18.000; BEP = 1.000 cup/bulan atau sekitar 33–34 cup/hari untuk 30 hari buka.\n\n## Cara menerapkan di kedai\n\nBuat skenario perubahan kontribusi saat diskon/promo dan kenaikan susu; uji apa yang terjadi jika penjualan di bawah titik impas selama tiga bulan.\n\n## Simulasi kondisi Indonesia\n\nJika kontribusi turun dari Rp18.000 ke Rp15.000 sementara fixed cost sama, BEP naik menjadi 1.200 cup/bulan. Masalah tidak bisa diselesaikan hanya dengan mengklaim harga jual tinggi.\n\n## Latihan refleksi\n\nKapan model BEP rata-rata tidak cocok karena menu mix terlalu berubah?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)"
  },
  {
    "id": "cs-m05-l01",
    "moduleId": "CS05",
    "order": 1,
    "title": "Laba akuntansi tidak selalu berarti kas tersedia",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nKedai bisa mencatat penjualan hari ini tetapi transfer delivery atau catering diterima beberapa hari kemudian. Sementara gaji, sewa dan bahan harus dibayar menurut tanggal jatuh tempo.\n\n## Mekanisme dan risiko\n\nCatat kas opening, penerimaan aktual, pembayaran supplier, gaji, sewa, pajak dan investasi. Pisahkan piutang/persediaan dari saldo bank. Jangan memasukkan PO yang belum dibayar sebagai cash in.\n\n## Cara menerapkan di kedai\n\nBuat rolling forecast 13 minggu: saldo awal, penerimaan diperkirakan per tanggal, komitmen keluar, saldo akhir dan trigger negatif. Revisi tiap pekan memakai bukti realisasi.\n\n## Simulasi kondisi Indonesia\n\nSaldo awal Rp15 juta, penerimaan pekan ini Rp4 juta, supplier Rp12 juta dan sewa Rp10 juta: saldo akhir -Rp3 juta. Walau P&L kelihatan untung, kas negatif memerlukan mitigasi.\n\n## Latihan refleksi\n\nKeputusan apa harus diprioritaskan sebelum menyetujui pembelian alat tambahan?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)"
  },
  {
    "id": "cs-m05-l02",
    "moduleId": "CS05",
    "order": 2,
    "title": "Beli stok dan risiko uang tertahan",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nStok tinggi mungkin menghindari stockout, tetapi mengikat kas dan meningkatkan risiko kedaluwarsa. Lead time supply berbeda untuk susu, buah, biji sangrai dan cup custom.\n\n## Mekanisme dan risiko\n\nReorder point menggabungkan permintaan harian yang terukur, lead time, dan safety stock sesuai volatilitas. Gunakan FEFO untuk bahan dengan batas umur/shelf-life yang relevan.\n\n## Cara menerapkan di kedai\n\nCatat penjualan harian, stok usable, batch tanggal terima, lead time pemasok, shrinkage/waste dan masa simpan; ubah reorder jika pola permintaan bergeser.\n\n## Simulasi kondisi Indonesia\n\nSusu habis saat akhir pekan tetapi tersisa banyak sirup yang hampir melewati window kualitas. Menambah semua stok secara merata bukan jawaban; sesuaikan per kategori dan pola.\n\n## Latihan refleksi\n\nApa bukti bahwa batas reorder saat ini terlalu tinggi atau terlalu rendah?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)"
  },
  {
    "id": "cs-m05-l03",
    "moduleId": "CS05",
    "order": 3,
    "title": "Ketahanan usaha pada penurunan penjualan",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nSensitivitas penjualan dan margin harus diuji sebelum membuka lokasi. Skenario buruk tidak selalu bisa diatasi dengan promo; biaya tetap tetap berjalan walaupun traffic menurun.\n\n## Mekanisme dan risiko\n\nSimulasikan tiga bulan berturut-turut dengan transaksi 30% di bawah rencana; hitung kontribusi, biaya tetap, burn rate kas dan opsi tindakan. Hindari pengurangan langkah keamanan pangan sebagai efisiensi.\n\n## Cara menerapkan di kedai\n\nTulis indikator eskalasi: saldo kas minggu ke berapa negatif, kontrak supplier mana fleksibel, biaya non-esensial mana bisa ditunda, dan kapan harus bernegosiasi sebelum gagal bayar.\n\n## Simulasi kondisi Indonesia\n\nKedai kehilangan pelanggan kantor saat masa libur panjang. Penyesuaian jadwal shift mungkin relevan, tetapi harus tetap sesuai kewajiban ketenagakerjaan dan kesejahteraan staf.\n\n## Latihan refleksi\n\nKondisi apa yang mengharuskan berhenti ekspansi sementara untuk melindungi bisnis?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)"
  },
  {
    "id": "cs-m06-l01",
    "moduleId": "CS06",
    "order": 1,
    "title": "Alur bar dan ergonomi melayani operasional",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nLayout bagus menekan perpindahan yang tidak perlu dan memisahkan aliran bahan mentah, servis, pembersihan dan limbah. Ukuran meja bukan angka universal untuk seluruh tim; ergonomi bergantung pengguna, peralatan dan lingkungan.\n\n## Mekanisme dan risiko\n\nAmati titik kasir, grinder, espresso, steam, rinser, sink, chiller, handoff dan tempat sampah. Cek bahaya air dekat stopkontak, lantai licin, postur repetitif serta akses servis mesin.\n\n## Cara menerapkan di kedai\n\nTandai semua gerakan satu pesanan, hitung crossing tim, waktu antre dan risiko tumpahan. Uji mockup sebelum mengunci pekerjaan sipil mahal.\n\n## Simulasi kondisi Indonesia\n\nBarista harus berputar melewati jalur pelanggan membawa pitcher panas. Masalah ini adalah keselamatan sekaligus throughput, bukan sekadar kurang dekorasi.\n\n## Latihan refleksi\n\nApa perubahan kecil pada urutan kerja yang bisa diuji sebelum membeli alat baru?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/education/how-to-prepare)"
  },
  {
    "id": "cs-m06-l02",
    "moduleId": "CS06",
    "order": 2,
    "title": "Spesifikasi mesin harus mengikuti beban puncak",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nPerbandingan single boiler, heat exchanger, dual boiler dan multi-group harus dikaitkan dengan kontrol suhu, output steam, throughput, dukungan teknis dan servis setempat. Harga mahal tidak menjamin paling sesuai.\n\n## Mekanisme dan risiko\n\nKalkulasi beban listrik total mencakup mesin, grinder, chiller, AC, blender, boiler dan margin aman instalasi. Pekerjaan kelistrikan dilakukan tenaga kompeten sesuai peraturan lokal.\n\n## Cara menerapkan di kedai\n\nMinta vendor memberikan konsumsi daya, kapasitas rutin, biaya spare part, kualitas air yang dibutuhkan, waktu service dan SLA; uji kebutuhan peak 15 menit.\n\n## Simulasi kondisi Indonesia\n\nDua mesin memberi kualitas espresso serupa pada tes pendek. Mesin yang sulit diservis di kota tersebut dapat menyebabkan downtime berkepanjangan, mengubah TCO.\n\n## Latihan refleksi\n\nBagaimana menyeimbangkan biaya awal dan risiko downtime tiga tahun?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/education/how-to-prepare)"
  },
  {
    "id": "cs-m06-l03",
    "moduleId": "CS06",
    "order": 3,
    "title": "Keamanan air, filtrasi dan konsistensi seduhan",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nTDS tidak membuktikan air layak minum; keamanan mikroba dan kimia perlu penilaian sesuai sumber. Sistem RO menurunkan banyak mineral terlarut tetapi setelan pascaproses, sanitasi dan kebutuhan mesin harus diperhitungkan.\n\n## Mekanisme dan risiko\n\nAir yang terlalu tidak sesuai rekomendasi pabrikan dapat mengganggu mesin atau rasa. Tidak semua lokasi wajib memiliki RO; keputusan menggunakan data kualitas air sumber dan target teknis.\n\n## Cara menerapkan di kedai\n\nUji air pada parameter relevan, baca spesifikasi pabrikan, hitung biaya cartridge/servis/buang air, lalu buat jadwal pemantauan dan respons jika pengukuran berubah.\n\n## Simulasi kondisi Indonesia\n\nMesin sering scale meski kopi tetap terasa cukup enak. Cek kekerasan dan profil air sesuai panduan mesin, bukan hanya angka TDS atau mengganti biji.\n\n## Latihan refleksi\n\nSiapa yang memantau perubahan kualitas air setelah filter diganti?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://sca.coffee/education/how-to-prepare)"
  },
  {
    "id": "cs-m07-l01",
    "moduleId": "CS07",
    "order": 1,
    "title": "SOP operasional yang berguna saat kondisi berubah",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nSOP tidak cukup berisi daftar resep dari head barista. Ia harus menjelaskan apa yang diukur, mengapa berubah, batas eskalasi dan siapa mengambil keputusan saat grinder, air atau bean berganti.\n\n## Mekanisme dan risiko\n\nDokumentasikan opening/closing, dial-in, kalibrasi grinder, pengecekan bahan, QC minuman, complaint remedy dan pembersihan. Latih staf mengidentifikasi pengecualian, bukan hanya meniru takaran.\n\n## Cara menerapkan di kedai\n\nSusun tiap SOP satu halaman: tujuan, alat, langkah, kriteria verifikasi, contoh deviasi, corrective action dan pemilik keputusan. Tes kepada staf baru saat tidak ada supervisor.\n\n## Simulasi kondisi Indonesia\n\nMinuman terasa lebih encer karena es mencair saat peak hour. Barista harus mencari perubahan konsentrasi, waktu prep dan resep, bukan langsung menganggap pelanggan salah.\n\n## Latihan refleksi\n\nKapan staf boleh melakukan penyesuaian sendiri dan kapan wajib eskalasi?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://registrasipangan.pom.go.id/layanan)"
  },
  {
    "id": "cs-m07-l02",
    "moduleId": "CS07",
    "order": 2,
    "title": "Food safety, alergen dan pembersihan",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nKebersihan visual tidak membuktikan bebas kontaminasi silang. Penyimpanan susu, bahan sensitif suhu dan peralatan alergen memerlukan kontrol berbasis bahaya dan SOP sesuai ketentuan.\n\n## Mekanisme dan risiko\n\nJadwal pembersihan harus membedakan permukaan food contact, peralatan espresso, saluran pembuangan dan area sampah. Gunakan bahan kimia sesuai petunjuk pabrikan, tidak mencampur produk sembarang.\n\n## Cara menerapkan di kedai\n\nTerapkan label batch dan suhu sesuai standar produk, pemeriksaan kedaluwarsa, catatan pembersihan serta prosedur ketika pelanggan melaporkan alergi. Jangan berjanji produk bebas alergen tanpa verifikasi.\n\n## Simulasi kondisi Indonesia\n\nPelanggan menyebut alergi susu berat dan pitcher masih dipakai bergantian. Tahan penyiapan minuman, verifikasi risiko silang dan komunikasikan keterbatasan fasilitas secara jujur.\n\n## Latihan refleksi\n\nLangkah apa saat staff menemukan chiller menyimpang dari kondisi produk yang diizinkan?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://registrasipangan.pom.go.id/layanan)"
  },
  {
    "id": "cs-m07-l03",
    "moduleId": "CS07",
    "order": 3,
    "title": "Stok FEFO, waste dan ownership tugas",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nSetiap waste mempunyai penyebab berbeda: spillage, salah resep, overprep, kedaluwarsa, kontaminasi, penyimpanan rusak atau shrinkage. Angka waste tanpa kategori tidak membantu tindakan.\n\n## Mekanisme dan risiko\n\nFEFO memprioritaskan batas pakai yang relevan, sedangkan FIFO adalah urutan masuk. Keduanya tidak saling menggantikan untuk semua bahan. Gunakan pencatatan stok usable dan batch.\n\n## Cara menerapkan di kedai\n\nSusun laporan opening stok + pembelian – penjualan resep – waste = perkiraan closing; bandingkan dengan stock count dan investigasi selisih. Lakukan koreksi stok dengan audit trail.\n\n## Simulasi kondisi Indonesia\n\nSusu tersisa banyak karena prediksi traffic keliru. Menambah biaya promosi untuk menghabiskannya tanpa melihat keamanan dan tanggal simpan bukan solusi.\n\n## Latihan refleksi\n\nKeputusan apa yang bisa mengurangi waste tanpa mengorbankan rasa atau keamanan pangan?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://registrasipangan.pom.go.id/layanan)"
  },
  {
    "id": "cs-m08-l01",
    "moduleId": "CS08",
    "order": 1,
    "title": "Local discovery dan retention yang terukur",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nKedai perlu mudah ditemukan dan layak direkomendasikan. Foto jelas, alamat serta jam buka akurat dan respons komplain lebih bernilai daripada janji viral tanpa basis operasional.\n\n## Mekanisme dan risiko\n\nEvaluasi channel dengan customer acquisition cost yang bisa ditelusuri dan repeat margin, bukan follower. Promo berulang dapat merusak kontribusi; ukur cohort pelanggan yang membeli pada harga normal.\n\n## Cara menerapkan di kedai\n\nBangun Google Business Profile yang akurat, minta review secara etis, dokumentasikan feedback, dan coba perubahan kecil pada menu/jam buka. Jangan membeli ulasan palsu.\n\n## Simulasi kondisi Indonesia\n\nIklan menaikkan kunjungan tetapi staf kewalahan dan rating turun. Operasional harus diperbaiki sebelum menaikkan anggaran promosi lagi.\n\n## Latihan refleksi\n\nMetrik apa yang menunjukkan growth bersifat sehat, bukan hanya ramai sebentar?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)\n- [Rujukan 2](https://registrasipangan.pom.go.id/berita/pengumuman-implementasi-kbli-2025-pada-registrasi-pangan-olahan)"
  },
  {
    "id": "cs-m08-l02",
    "moduleId": "CS08",
    "order": 2,
    "title": "OSS dan kewajiban usaha bergantung kegiatan",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nJenis usaha restoran/kedai, ritel kopi, produksi roasting, dan pangan kemasan memiliki klasifikasi serta kewajiban berbeda. Dokumen izin tidak boleh disimpulkan dari satu contoh usaha milik teman.\n\n## Mekanisme dan risiko\n\nPada 2026, KBLI 2025 berlaku dalam sistem OSS; kewajiban tambahan bergantung pada aktivitas, skala dan tingkat risiko. Kewajiban pangan olahan BPOM/ketentuan daerah perlu diperiksa untuk jenis produk dan penjualan tertentu.\n\n## Cara menerapkan di kedai\n\nDaftar kegiatan riil: minuman dibuat di tempat, makanan, roasting, beans berkemasan, delivery, dan penjualan retail. Cari KBLI serta PB-UMKU aktif lewat OSS; verifikasi ke dinas/otoritas bila perlu.\n\n## Simulasi kondisi Indonesia\n\nSebuah kedai ingin mulai menjual bottled latte dengan shelf-life. Kebutuhan kontrol keamanan, label dan perizinan dapat berbeda dari minuman segar yang dibuat dan disajikan langsung.\n\n## Latihan refleksi\n\nKapan perlu konsultasi regulator sebelum mengeluarkan produk baru?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)\n- [Rujukan 2](https://registrasipangan.pom.go.id/berita/pengumuman-implementasi-kbli-2025-pada-registrasi-pangan-olahan)"
  },
  {
    "id": "cs-m08-l03",
    "moduleId": "CS08",
    "order": 3,
    "title": "Dashboard owner yang menghubungkan kualitas dan margin",
    "minutes": 9,
    "content": "## Tujuan keputusan\n\nDashboard yang baik memberi hubungan sebab akibat: penjualan per jam, kontribusi per channel, waste, stockout, downtime, rating, komplain, absensi dan saldo kas. Satu angka omzet tak bisa mewakili kesehatan kedai.\n\n## Mekanisme dan risiko\n\nPilih sedikit KPI yang dapat ditindaklanjuti dan punya pemilik. Benchmark dibuat dari kondisi toko sendiri setelah data cukup, bukan copy persentase yang konon berlaku untuk semua kedai.\n\n## Cara menerapkan di kedai\n\nSetiap pekan pilih satu deviasi, ajukan hipotesis, rancang eksperimen terkendali dan periksa hasilnya. Tetap dokumentasikan keputusan yang ternyata tidak berhasil agar tim belajar.\n\n## Simulasi kondisi Indonesia\n\nPenjualan naik 15% namun repeat customer turun, refund meningkat dan contribution per order memburuk. Owner perlu melihat harga promo, bottleneck dan kualitas layanan secara bersama.\n\n## Latihan refleksi\n\nJika hanya boleh memperbaiki satu hal minggu depan, data mana yang jadi dasar prioritas?\n\nJawab dengan membedakan **angka diketahui**, **asumsi** dan **langkah verifikasi**. Uji satu perubahan yang dapat diukur daripada mengubah seluruh sistem sekaligus.\n\n## Rujukan lanjut\n\n- [Rujukan 1](https://oss.go.id/id)\n- [Rujukan 2](https://registrasipangan.pom.go.id/berita/pengumuman-implementasi-kbli-2025-pada-registrasi-pangan-olahan)"
  }
];
