export const BUSINESS_ROASTERY_WORKED_METHODS:Record<string,{title:string;steps:{heading:string;explanation:string}[];caution:string}> = {
  "B01": {
    "title": "Mengikuti biaya satu lot dari kebun sampai pelanggan",
    "steps": [
      {
        "heading": "Tentukan bentuk barang",
        "explanation": "Pada setiap transaksi tulis apakah kuantitas adalah ceri, parchment, green, roasted, atau pouch siap jual. Catat pemilik lot dan lokasi timbang."
      },
      {
        "heading": "Catat perubahan massa",
        "explanation": "Jika 100 kg green masuk mesin dan 83 kg roasted dihasilkan, rendemen roasting 83%. Jangan pakai rasio itu untuk mengonversi ceri menjadi green karena proses dan penyebutnya berbeda."
      },
      {
        "heading": "Pisahkan biaya dan pembayaran",
        "explanation": "Hubungkan invoice pembelian, transport masuk, upah/proses, QC, serta invoice pelanggan ke tahap yang benar. Harga pada dua bentuk barang tidak langsung menyatakan laba."
      },
      {
        "heading": "Uji ketertelusuran",
        "explanation": "Ambil satu pouch acak dan periksa apakah nomor batch dapat mengarah kembali pada pemasok dan dokumen penerimaan green. Jika putus, ada pekerjaan pencatatan yang belum selesai."
      }
    ],
    "caution": "Yang dipelajari ialah alur produk dan basis biaya. Contoh massa bukan angka standar semua kopi."
  },
  "B02": {
    "title": "Memilih model usaha dari permintaan yang terverifikasi",
    "steps": [
      {
        "heading": "Mulai dengan kebutuhan",
        "explanation": "Hitung pesanan roasted saleable yang sudah dibayar atau mempunyai komitmen. Pisahkan leads dan proyeksi optimistis."
      },
      {
        "heading": "Bandingkan biaya yang relevan",
        "explanation": "Contoh ilustrasi: fee mitra Rp20.000/kg, conversion variabel internal Rp8.000/kg, tambahan biaya tetap mesin Rp6 juta/bulan. Titik setara operasional ialah 6.000.000 ÷ (20.000−8.000) = 500 kg/bulan."
      },
      {
        "heading": "Cek kapasitas dan mutu",
        "explanation": "Titik setara tidak berguna bila mesin hanya mampu mengeluarkan 400 kg saleable/bulan atau calon pembeli hanya memesan 150 kg."
      },
      {
        "heading": "Uji kebutuhan uang tunai",
        "explanation": "Masukkan DP mesin, instalasi, green awal, dan termin pembayaran customer ke kalender kas. Bandingkan downside saat pembeli mengurangi order."
      }
    ],
    "caution": "Hasil 500 kg adalah titik biaya operasional pada asumsi tertentu, bukan otomatis rekomendasi membeli mesin."
  },
  "B03": {
    "title": "Mengubah riset pelanggan menjadi bukti permintaan",
    "steps": [
      {
        "heading": "Definisikan satu ICP",
        "explanation": "Contoh: kafe independen dalam jangkauan pengiriman rutin dengan konsumsi espresso 10–30 kg/bulan dan keluhan konsistensi suplai."
      },
      {
        "heading": "Wawancara perilaku terbaru",
        "explanation": "Tanyakan volume pesanan terakhir, merek/pemasok sebelumnya, penyebab mengganti lot, bagaimana proses pengambilan keputusan, dan termin pembayaran."
      },
      {
        "heading": "Jalankan pilot berbayar",
        "explanation": "Catat 12 prospek memenuhi kriteria, 6 meminta sampel, 3 setuju pilot berbayar dan 2 memesan ulang. Konversi sampel ke pilot 3/6 = 50%, pilot ke reorder 2/3 ≈ 66,7% pada kelompok kecil ini."
      },
      {
        "heading": "Perbaiki proyeksi",
        "explanation": "Gunakan volume reorder yang benar-benar teramati untuk jadwal produksi, sementara calon buyer lain tetap sebagai peluang."
      }
    ],
    "caution": "Angka funnel contoh tidak boleh disebut rata-rata industri atau jaminan konversi pelanggan lain."
  },
  "B04": {
    "title": "Menentukan dua SKU awal yang dapat dipenuhi",
    "steps": [
      {
        "heading": "Mulai dari penggunaan produk",
        "explanation": "Misalnya house espresso 1 kg untuk kafe dan filter 250 g untuk konsumen rumah. Keduanya perlu spesifikasi rasa, kemasan dan reorder yang berbeda."
      },
      {
        "heading": "Bangun BOM",
        "explanation": "Tulis net weight, pouch, label, carton allocation dan waktu packing per SKU. Empat pouch 250 g memerlukan empat label/kemasan untuk 1 kg, bukan satu."
      },
      {
        "heading": "Cek MOQ dan stok",
        "explanation": "Jika vendor mensyaratkan minimum 2.000 pouch per desain, simulasikan lama perputaran masing-masing SKU terhadap penjualan aktual sebelum membayar."
      },
      {
        "heading": "Tentukan kriteria mutu",
        "explanation": "Gunakan referensi sensori, penerimaan batch dan kode lot yang bisa diulang. Jelaskan kepada buyer jika komponen origin blend perlu berubah."
      }
    ],
    "caution": "SKU yang belum memiliki pembeli dan stok kemasan realistis sebaiknya belum diluncurkan."
  },
  "B05": {
    "title": "Memutuskan layak uji atau layak investasi",
    "steps": [
      {
        "heading": "Buktikan pasar",
        "explanation": "Dokumentasikan minimal satu pilot berbayar, alasan buyer akan membeli ulang, dan masalah yang bisa diselesaikan roastery."
      },
      {
        "heading": "Susun biaya lengkap",
        "explanation": "Pisahkan sewa, instalasi, mesin, biaya pengadaan green, produksi, packaging, biaya kanal, dan modal kerja sebelum penerimaan pelanggan."
      },
      {
        "heading": "Jalankan stress case",
        "explanation": "Contoh ilustrasi: kas Rp100 juta, mesin Rp65 juta, instalasi Rp20 juta, green dan kemasan awal Rp25 juta. Kebutuhan Rp110 juta, defisit Rp10 juta sebelum cadangan operasional."
      },
      {
        "heading": "Pilih gate",
        "explanation": "Tandai NO-GO untuk pembelian mesin tanpa pendanaan cukup; CONDITIONAL GO untuk pilot melalui mitra roasting selama risiko legal/mutu dapat dikontrol."
      }
    ],
    "caution": "Proyeksi omzet bulan depan tidak dapat dipakai membayar kewajiban hari ini."
  },
  "B06": {
    "title": "Menyusun checklist perizinan roastery di Indonesia",
    "steps": [
      {
        "heading": "Petakan kegiatan",
        "explanation": "Tulis apakah usaha membeli green, memanggang sendiri, mengemas produk pangan, menjual online, atau memakai contract roaster. Identifikasi siapa penanggung jawab setiap tahap."
      },
      {
        "heading": "Periksa klasifikasi kegiatan",
        "explanation": "Verifikasi KBLI yang tepat pada OSS untuk aktivitas aktual, termasuk industri pengolahan kopi bila relevan. KBLI saja bukan bukti izin lokasi dan produk sudah terpenuhi."
      },
      {
        "heading": "Tanyakan syarat produk dan fasilitas",
        "explanation": "Periksa jalur dan persyaratan pangan, keamanan fasilitas, label dan halal kepada instansi berwenang sesuai produk serta entitas, bukan menggunakan satu jawaban untuk semua usaha."
      },
      {
        "heading": "Catat bukti dan biaya",
        "explanation": "Simpan dokumen resmi, tanggal cek, penanggung jawab, jadwal dan biaya kepatuhan. Minta telaah profesional untuk kewajiban perpajakan entitas."
      }
    ],
    "caution": "Contoh ini adalah metode audit kewajiban, bukan pernyataan bahwa semua roastery mempunyai izin yang identik."
  },
  "B07": {
    "title": "Membeli green yang dapat diperiksa saat tiba",
    "steps": [
      {
        "heading": "Standarkan permintaan penawaran",
        "explanation": "Tulis origin/lot, proses, grade/spesifikasi, berat, MOQ, harga, titik serah, termin, tanggal dan tanggung jawab freight."
      },
      {
        "heading": "Nilai sampel awal",
        "explanation": "Catat kode sampel, metode roast/cupping dan kriteria penerimaan. Sampel mewakili sesuatu hanya jika hubungan dengan lot kiriman dapat dibuktikan."
      },
      {
        "heading": "Inspeksi penerimaan",
        "explanation": "Jika dipesan 100 kg namun gudang menerima 98 kg dan 2 kg dari yang diterima ditahan QC, green usable saat itu 96 kg. Pisahkan shortage dengan reject."
      },
      {
        "heading": "Tindaklanjuti per kontrak",
        "explanation": "Catat selisih pada berita acara, bukti timbang dan klaim pemasok, lalu tentukan apakah biaya barang ditolak mendapat kredit/replacement."
      }
    ],
    "caution": "Jangan menghitung receiving shortage sebagai roast loss atau menganggap stok HOLD siap diproduksi."
  },
  "B08": {
    "title": "Membaca quotation ongkir tanpa salah arah",
    "steps": [
      {
        "heading": "Periksa rute sebenarnya",
        "explanation": "Tuliskan alamat gudang pemasok sebagai titik awal dan alamat roastery sebagai titik akhir. Periksa arah, moda, berat aktual, dimensi dan apakah layanan mencakup penjemputan serta pengantaran, bukan hanya pelabuhan."
      },
      {
        "heading": "Baca minimum tagihan",
        "explanation": "Contoh ilustrasi: 18 kg actual, tarif Rp8.000/kg dan minimum 30 kg menghasilkan freight dasar 30 × 8.000 = Rp240.000, sebelum biaya yang dikecualikan."
      },
      {
        "heading": "Tambahkan biaya masuk",
        "explanation": "Catat pickup, handling, asuransi, packing pengiriman, pajak relevan dan last mile yang belum termasuk. Jangan mengandalkan tarif arah sebaliknya."
      },
      {
        "heading": "Hitung per kilogram usable",
        "explanation": "Jika total landed invoice plus freight Rp3.200.000 untuk 20 kg usable, bahan masuk Rp160.000/kg usable. Ini belum HPP roasted."
      }
    ],
    "caution": "Harga Rp8.000/kg dan batas 30 kg adalah ilustrasi hitung, bukan quotation pasar. Minta penawaran tertulis rute spesifik."
  },
  "B09": {
    "title": "Membuat rancangan alur lokasi sebelum sewa",
    "steps": [
      {
        "heading": "Tulis aktivitas dan volume",
        "explanation": "Perkirakan green masuk per minggu, jumlah batch, frekuensi QC, stok packaging dan jadwal pengiriman."
      },
      {
        "heading": "Gambar zona",
        "explanation": "Susun receiving, karantina green, penyimpanan, roasting dan cooling, QC, packing, gudang RELEASE lalu dispatch. Tandai jalur orang serta barang."
      },
      {
        "heading": "Periksa prasyarat teknis",
        "explanation": "Mintakan penilaian profesional terkait exhaust, api/gas atau listrik, jalur darurat, beban bangunan, ventilasi dan dampak lingkungan."
      },
      {
        "heading": "Anggarkan instalasi",
        "explanation": "Pisahkan uang sewa dari perubahan fasilitas, pengujian awal, kebutuhan kebersihan dan perawatan. Jangan teken kontrak panjang bila ketentuan teknis belum jelas."
      }
    ],
    "caution": "Denah pembelajaran tidak dapat menggantikan desain instalasi oleh pihak kompeten atau persetujuan instansi."
  },
  "B10": {
    "title": "Menghitung kapasitas nyata per bulan",
    "steps": [
      {
        "heading": "Buat kalender kerja",
        "explanation": "Contoh: 6 kg green per batch, lima batch per hari, 18 hari efektif per bulan. Green diproses maksimal 540 kg."
      },
      {
        "heading": "Kurangi kehilangan dan HOLD",
        "explanation": "Dengan roast yield 84% dan 3% roasted tertahan QC, saleable ≈ 540 × 0,84 × 0,97 = 440 kg."
      },
      {
        "heading": "Cek bagian paling lambat",
        "explanation": "Jika kapasitas packing hanya 350 kg per bulan, output siap kirim tidak melebihi 350 kg tanpa intervensi."
      },
      {
        "heading": "Uji downside",
        "explanation": "Kurangi hari efektif untuk servis atau keterlambatan green. Simulasikan ulang jadwal order dan kemungkinan outsourcing cadangan."
      }
    ],
    "caution": "Kapasitas nameplate bukan janji jumlah roasted saleable. Parameter adalah contoh dan harus divalidasi dengan mesin nyata."
  },
  "B11": {
    "title": "Menyambungkan identitas dari karung sampai pouch",
    "steps": [
      {
        "heading": "Beri kode incoming lot",
        "explanation": "Contoh: green lot G-17 diterima 100 kg dan dikaitkan ke invoice, lokasi gudang, tanggal timbang serta hasil pemeriksaan penerimaan. Jika sebagian karung ditahan, statusnya harus terpisah dari stok usable."
      },
      {
        "heading": "Catat batch roasting",
        "explanation": "Batch R-17A mengonsumsi sebagian G-17; simpan kilogram masuk, hasil roasted, identitas operator, mesin serta roast log. Catatan ini harus bisa dirujuk kembali ketika ada ketidaksesuaian."
      },
      {
        "heading": "Rekam release QC",
        "explanation": "Pouch P-17A hanya boleh memakai roasted batch yang sudah dilepas dari HOLD. Catat jumlah sampel dan reject terpisah."
      },
      {
        "heading": "Latih penelusuran mundur",
        "explanation": "Saat muncul komplain pouch P-17A, temukan customer lain yang menerima batch terkait, tanggal QC dan supplier lot awal."
      }
    ],
    "caution": "Kode G-17 adalah contoh label identitas, bukan nama varietas atau data pasokan nyata."
  },
  "B12": {
    "title": "Membedakan stok fisik dan siap dijanjikan",
    "steps": [
      {
        "heading": "Catat jumlah fisik",
        "explanation": "Contoh: saat stock count, gudang memiliki 500 pouch dari batch yang diidentifikasi dan sudah dicatat di rak. Pisahkan jumlah fisik tersebut dari status kelulusan QC maupun barang yang sudah direservasi."
      },
      {
        "heading": "Kurangi yang tidak boleh dijual",
        "explanation": "Jika 20 pouch berstatus HOLD dan 50 pouch sudah dialokasikan ke PO tertentu, stok available-to-promise ialah 500−20−50 = 430 pouch."
      },
      {
        "heading": "Periksa sebelum kirim",
        "explanation": "Pastikan setiap order cocok pada SKU, kode lot, kuantitas, alamat, invoice, serta paket yang sudah seal inspection."
      },
      {
        "heading": "Ukur penyimpangan",
        "explanation": "Catat salah kirim, keluhan seal dan pengiriman terlambat menurut penyebab. Bedakan retur komersial dari potensi risiko pangan."
      }
    ],
    "caution": "ATP berbeda dari fisik gudang; jangan menjanjikan stok yang sudah dipesan atau berstatus HOLD."
  },
  "B13": {
    "title": "Menghitung biaya bahan per roasted saleable",
    "steps": [
      {
        "heading": "Mulai dari biaya green landed",
        "explanation": "Contoh: 100 kg green usable memiliki invoice dan inbound freight total Rp13.000.000. Artinya landed Rp130.000/kg green usable."
      },
      {
        "heading": "Pindahkan satuan ke output",
        "explanation": "Jika roasted saleable setelah susut dan QC hanya 82 kg, biaya bahan per kg saleable = Rp13.000.000 ÷ 82 ≈ Rp158.537."
      },
      {
        "heading": "Lengkapi HPP",
        "explanation": "Tambahkan biaya konversi/manufaktur variabel, packaging serta alokasi fixed factory overhead yang hanya dihitung sekali. Contoh Rp20.000 + Rp5.000 + Rp15.000 menghasilkan HPP manufaktur ≈ Rp198.537/kg."
      },
      {
        "heading": "Pisahkan keputusan harga",
        "explanation": "Untuk contribution, jangan mengurangkan kembali fixed overhead Rp15.000/kg jika fixed cost juga ada di numerator BEP. Gunakan biaya variabel sesuai definisinya."
      }
    ],
    "caution": "Contoh manufaktur menggunakan asumsi ilustrasi, bukan HPP pasar. Periksa lagi biaya konversi apakah sudah termasuk bahan lain agar tidak dihitung dua kali."
  },
  "B14": {
    "title": "Membedakan markup, margin dan contribution",
    "steps": [
      {
        "heading": "Gunakan angka yang sama",
        "explanation": "Contoh ilustrasi: biaya manufaktur penuh Rp150.000 per kg dan harga jual neto Rp200.000 per kg. Selisih Rp50.000 adalah gross profit per kilogram pada definisi biaya tersebut."
      },
      {
        "heading": "Hitung markup dan gross margin",
        "explanation": "Markup = 50.000 ÷ 150.000 = 33,3%. Gross margin = 50.000 ÷ 200.000 = 25%. Keduanya tidak boleh disamakan."
      },
      {
        "heading": "Hitung contribution dengan benar",
        "explanation": "Jika variable manufacturing cost Rp130.000/kg dan biaya variabel channel Rp15.000/kg, contribution = 200.000−130.000−15.000 = Rp55.000/kg."
      },
      {
        "heading": "Evaluasi harga promo",
        "explanation": "Diskon 10% membuat net revenue Rp180.000/kg. Dengan biaya variabel sama, contribution turun menjadi Rp35.000/kg, bukan turun 10% saja."
      }
    ],
    "caution": "Perbedaan gross profit Rp50.000 dan contribution Rp55.000 sah karena overhead tetap pabrik diserap dalam HPP tetapi dikecualikan dari biaya variabel."
  },
  "B15": {
    "title": "Menguji apakah break-even bisa dicapai",
    "steps": [
      {
        "heading": "Identifikasi fixed cost periode",
        "explanation": "Contoh total biaya tetap relevan Rp12.000.000 per bulan dari sewa, gaji tetap, dan alokasi fasilitas yang belum masuk ke biaya variabel. Pastikan komponen overhead pabrik tidak dihitung dua kali."
      },
      {
        "heading": "Hitung contribution tiap kg",
        "explanation": "Jika harga neto dikurangi biaya variabel relevan menghasilkan Rp40.000/kg, BEP = 12.000.000 ÷ 40.000 = 300 kg/bulan."
      },
      {
        "heading": "Bandingkan dengan batas fisik",
        "explanation": "Jika stok dan fasilitas hanya mampu menyediakan 250 kg saleable per bulan, target BEP 300 kg belum mungkin tercapai."
      },
      {
        "heading": "Perbaiki driver, bukan forecast",
        "explanation": "Uji harga, struktur biaya variabel, biaya tetap, SKU mix, kapasitas dan demand paid. Setelah itu cek cashflow untuk mengetahui kapan tagihan harus dibayar."
      }
    ],
    "caution": "BEP laba tidak selalu berarti kas aman. Data pelanggan terkonfirmasi tetap dibutuhkan selain kapasitas mesin."
  },
  "B16": {
    "title": "Mencari saldo kas terendah, bukan cuma saldo akhir",
    "steps": [
      {
        "heading": "Tulis saldo pembuka",
        "explanation": "Contoh saldo bank Senin pagi Rp2 juta. Pembayaran green yang jatuh tempo Selasa Rp3 juta."
      },
      {
        "heading": "Urutkan tanggal",
        "explanation": "Jika pelanggan baru membayar Rp4 juta pada Jumat, saldo Selasa turun ke minus Rp1 juta walaupun Jumat berakhir plus Rp3 juta, sebelum pembayaran lain."
      },
      {
        "heading": "Identifikasi intervensi",
        "explanation": "Sebelum Selasa, tentukan apakah perlu DP pelanggan, negosiasi tanggal supplier, buffer kas atau perubahan jadwal pengadaan."
      },
      {
        "heading": "Ulang setiap minggu",
        "explanation": "Gunakan 13-week rolling cashflow yang memuat semua komitmen dan pemilik tindak lanjut. Proyeksi positif akhir minggu tidak menutupi defisit antarhari."
      }
    ],
    "caution": "Angka jadwal adalah contoh latihan. Perusahaan nyata tidak bisa menjalankan saldo bank negatif tanpa fasilitas pendanaan atau pengaturan pembayaran."
  },
  "B17": {
    "title": "Mengukur penjualan wholesale secara jujur",
    "steps": [
      {
        "heading": "Pilih 20 prospek yang cocok",
        "explanation": "Tentukan 20 usaha yang benar-benar sesuai kemampuan supply: lokasi, kebutuhan espresso, perkiraan kilogram pembelian, pembuat keputusan, metode pembayaran, dan masalah pemasok yang ingin mereka atasi."
      },
      {
        "heading": "Pisahkan tahapan",
        "explanation": "Misal 10 respons, 6 sampel terarah, 3 pilot berbayar, dan 2 repeat order. Pilot/sampel = 50%, repeat/pilot ≈ 66,7% pada sampel sangat kecil."
      },
      {
        "heading": "Kalkulasi biaya akuisisi",
        "explanation": "Jika total sample, visit dan waktu staf yang dialokasikan Rp2 juta, untuk dua pelanggan repeat biayanya Rp1 juta per akun awal; belum tentu semuanya dapat dipulihkan."
      },
      {
        "heading": "Lacak profit akun",
        "explanation": "Catat volume, contribution setelah cost-to-serve dan DSO. Akun dengan omzet besar bisa lebih mahal dilayani dan lebih lambat membayar."
      }
    ],
    "caution": "Jangan mempromosikan konversi ini sebagai benchmark pasar tanpa riset dan data yang representatif."
  },
  "B18": {
    "title": "Membandingkan dua kanal penjualan",
    "steps": [
      {
        "heading": "Buat unit yang sama",
        "explanation": "Bandingkan dua pilihan atas 1 kg roasted saleable, bukan satu pouch retail dengan satu karung wholesale."
      },
      {
        "heading": "Hitung D2C",
        "explanation": "Ilustrasi net revenue Rp220.000/kg, biaya variabel produksi Rp140.000, packaging/fulfilment dan fee Rp35.000. Contribution Rp45.000/kg sebelum biaya akuisisi yang belum tercakup."
      },
      {
        "heading": "Hitung wholesale",
        "explanation": "Ilustrasi net revenue Rp185.000/kg, biaya variabel produksi Rp140.000, packing dan pengiriman Rp12.000, service visit dialokasi Rp8.000. Contribution Rp25.000/kg sebelum risiko piutang."
      },
      {
        "heading": "Pilih menurut kapasitas",
        "explanation": "D2C bisa memiliki lebih banyak order kecil, sedangkan wholesale punya piutang. Uji volume nyata, biaya akuisisi, repeat dan pembayaran sebelum mengunggulkan satu kanal."
      }
    ],
    "caution": "Semua harga pada contoh ini hipotetis, bukan tarif pasar atau harga jual rekomendasi."
  },
  "B19": {
    "title": "Membuat tanggung jawab saat tim masih kecil",
    "steps": [
      {
        "heading": "Pilih keputusan kritis",
        "explanation": "Tulis proses pembelian green, pemeriksaan penerimaan, roast batch, QC release, penyesuaian harga dan pengeluaran kas. Untuk masing-masing, tandai konsekuensi kesalahan dan siapa berwenang menyetujui."
      },
      {
        "heading": "Tetapkan peran",
        "explanation": "Contoh operator bertanggung jawab roasting; QC reviewer berwenang memutuskan RELEASE; owner/finance menyetujui perubahan harga dan pembayaran pemasok."
      },
      {
        "heading": "Sediakan bukti minimum",
        "explanation": "Setiap proses memiliki kode batch, tanggal, signature digital atau pencatatan approval, dan versi SOP yang dipakai."
      },
      {
        "heading": "Simulasikan kondisi berubah",
        "explanation": "Saat batch berbau tidak biasa, operator tidak boleh mengirim hanya karena pesanan mendesak. Barang HOLD dan eskalasi mengikuti SOP."
      }
    ],
    "caution": "Pada tim kecil satu orang bisa merangkap tugas, tetapi konflik kepentingan dan pemeriksaan kritis tetap harus dikelola."
  },
  "B20": {
    "title": "Membaca KPI sebagai sistem, bukan papan skor",
    "steps": [
      {
        "heading": "Definisikan setiap ukuran",
        "explanation": "Contoh on-time in-full (OTIF) = order yang lengkap dan diterima sesuai janji ÷ seluruh order yang jatuh tempo dalam periode tersebut."
      },
      {
        "heading": "Pakai denominator transparan",
        "explanation": "Jika 18 dari 20 order lengkap tepat waktu, OTIF = 90%. Jangan menghapus dua order gagal dari denominator karena alasan kurir."
      },
      {
        "heading": "Hubungkan dengan mutu",
        "explanation": "Jika output roasting naik 15% tetapi QC reject melonjak, volume total bukan ukuran tunggal keberhasilan. Ukur roasted saleable dan komplain."
      },
      {
        "heading": "Tentukan tindakan",
        "explanation": "Pemilik logistik menangani OTIF, production menangani penyebab reject, finance memeriksa piutang. Jadwalkan review dan periksa efek perbaikan."
      }
    ],
    "caution": "Indikator berguna hanya bila definisinya stabil, datanya bisa ditelusuri dan ada keputusan yang mengikuti."
  },
  "B21": {
    "title": "Memeriksa satu inquiry ekspor sebelum menerima PO",
    "steps": [
      {
        "heading": "Tanyakan spesifikasi buyer",
        "explanation": "Negara tujuan, roasted atau green, kode klasifikasi yang akan diverifikasi, kuantitas, mutu, kemasan, lead time dan fasilitas penyimpanan penerima."
      },
      {
        "heading": "Tentukan titik serah",
        "explanation": "Perjelas apakah buyer meminta EXW/FOB/CIF/DAP atau lainnya beserta tempat bernama; jangan bandingkan harga berbeda lingkup tanpa penyesuaian."
      },
      {
        "heading": "Validasi dokumen",
        "explanation": "Periksa HS code, invoice, packing list, dokumen angkut, formalitas kepabeanan dan persyaratan pangan/label negara tujuan melalui pihak berwenang."
      },
      {
        "heading": "Uji cash dan risiko",
        "explanation": "Simulasikan pembayaran DP, biaya produksi, ongkos freight, biaya bank, kurs serta risiko buyer terlambat membayar sebelum menyanggupi kontrak."
      }
    ],
    "caution": "Ini pengantar keputusan ekspor, bukan pengganti pelatihan kepabeanan khusus atau pendampingan ekspor profesional."
  }
};
