export type BusinessReference={key:string;category:string;title:string;url:string;verified:string;status:string;scope:string;value?:number;unit?:string;minimumKg?:number;leadTime?:string;exclusions?:string};
export const BUSINESS_REFERENCES:BusinessReference[]=[
  {
    "key": "freight-makassar-jabodetabek-sea",
    "category": "freight",
    "title": "Mandala Cargo laut Makassar → Jakarta (Jabodetabek)",
    "url": "https://mandalacargo.id/jasa-pengiriman-cargo-makassar-ke-jabodetabek/",
    "verified": "2026-10-13",
    "status": "tarif publik indikatif mulai dari harga dasar, bukan penawaran final",
    "scope": "Makassar ke Jakarta (Jabodetabek); bukan tujuan Sukabumi",
    "value": 3500,
    "unit": "IDR/kg",
    "minimumKg": 50,
    "leadTime": "5–7 hari ke area Jakarta sesuai publikasi penyedia; definisi transit perlu konfirmasi",
    "exclusions": "Perlu konfirmasi pickup asal, jenis green coffee, batas layanan door-to-door, pajak, asuransi, packing, dan last mile"
  },
  {
    "key": "freight-jkt-mks-sea",
    "category": "freight",
    "title": "IndoExpress cargo laut Jakarta → Makassar",
    "url": "https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-makassar.html",
    "verified": "2026-10-13",
    "status": "tarif publik indikatif, bukan penawaran final",
    "scope": "Jakarta ke Makassar; kargo laut; arah tidak boleh dibalik",
    "value": 6100,
    "unit": "IDR/kg",
    "minimumKg": 100,
    "leadTime": "5–7 hari menurut listing penyedia, belum mencakup semua waktu pesanan",
    "exclusions": "PPN, asuransi, packing; konfirmasi pickup/delivery serta chargeable weight"
  },
  {
    "key": "freight-jkt-medan-sea",
    "category": "freight",
    "title": "IndoExpress cargo laut Jakarta → Medan",
    "url": "https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-medan.html",
    "verified": "2026-10-13",
    "status": "tarif publik indikatif, bukan penawaran final",
    "scope": "Jakarta ke Medan; kargo laut",
    "value": 7900,
    "unit": "IDR/kg",
    "minimumKg": 10,
    "leadTime": "3–6 hari menurut listing penyedia",
    "exclusions": "PPN, asuransi, packing"
  },
  {
    "key": "freight-jkt-ende-sea",
    "category": "freight",
    "title": "IndoExpress cargo laut Jakarta → Ende",
    "url": "https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-ende.html",
    "verified": "2026-10-13",
    "status": "tarif publik indikatif, bukan penawaran final",
    "scope": "Jakarta ke Ende; kargo laut",
    "value": 14500,
    "unit": "IDR/kg",
    "minimumKg": 50,
    "leadTime": "10–14 hari menurut listing penyedia",
    "exclusions": "PPN, asuransi, packing"
  },
  {
    "key": "oss-kbli10761",
    "category": "regulatory",
    "title": "OSS KBLI 2025 10761 Pengolahan Kopi",
    "url": "https://oss.go.id/id/kbli/detail/37180921-3574-5cf1-b936-ac54bed78d52",
    "verified": "2026-10-13",
    "status": "sumber resmi",
    "scope": "Mencakup penyangraian/pengolahan kopi; kewajiban izin tergantung kegiatan dan skala"
  },
  {
    "key": "djp-pp2026",
    "category": "regulatory",
    "title": "DJP: PP 20/2026 PPh Final UMKM",
    "url": "https://pajak.go.id/id/siaran-pers/pph-final-umkm-tetap-05-persen-djp-perkuat-ketepatan-sasaran",
    "verified": "2026-10-13",
    "status": "sumber resmi",
    "scope": "Subjek yang memenuhi syarat tertentu, tidak semua bentuk entitas"
  },
  {
    "key": "halal2026",
    "category": "regulatory",
    "title": "BPJPH: status persiapan halal Oktober 2026",
    "url": "https://bpjph.halal.go.id/read/wajib-halal-berlaku-18-oktober-2026-bpjph-siapkan-aturan-yang-memudahkan-pelaku-usaha",
    "verified": "2026-10-13",
    "status": "sumber resmi yang harus dicek lagi saat beroperasi",
    "scope": "18 Oktober 2026; pemerintah menyiapkan kondisi khusus untuk beberapa kategori"
  },
  {
    "key": "bsn8964",
    "category": "regulatory",
    "title": "BSN: SNI 8964:2021 Kopi sangrai dan kopi bubuk",
    "url": "https://pesta.bsn.go.id/produk/detail/13201-sni89642021",
    "verified": "2026-10-13",
    "status": "sumber resmi",
    "scope": "Keberlakuan standar tidak membuktikan kewajiban sertifikasi bagi setiap SKU"
  },
  {
    "key": "customs",
    "category": "regulatory",
    "title": "Bea Cukai: dokumen pelengkap PEB",
    "url": "https://www.beacukai.go.id/mandatory-upload-dokap-peb",
    "verified": "2026-10-13",
    "status": "sumber resmi",
    "scope": "Invoice/packing list dan ketentuan dokumen angkut serta klasifikasi ekspor"
  }
];
export const BUSINESS_DECISION_CASES=[
  {
    "moduleId": "B01",
    "decision": "A punya surat penawaran langsung Rp105.000/kg green dari kelompok tani; B punya harga Rp114.000/kg sudah tiba gudang. Angka bersifat **asumsi latihan**, belum quotation pasar. Jalur A belum menyertakan sortasi dan angkut.",
    "prompt": "Kasus Rantai nilai. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Setelah investigasi, kelompok tani hanya menyediakan gabah kopi belum hulling, dan biaya mengubahnya menjadi green bean serta QC belum tertera. Harga produk ternyata tidak setara.",
    "revisionPrompt": "Perbaiki peta kepemilikan barang dan jangan bandingkan Rp105.000/kg gabah dengan Rp114.000/kg green ready to roast.",
    "revise": "Perbaiki peta kepemilikan barang dan jangan bandingkan Rp105.000/kg gabah dengan Rp114.000/kg green ready to roast.",
    "reason": "Bandingkan unit fisik, kondisi produk, rendemen proses, biaya transport dan siapa melakukan hulling; harga/kg lintas bentuk komoditas tidak sebanding."
  },
  {
    "moduleId": "B02",
    "decision": "Skenario asumsi: brand A mendapat fee contract roast Rp23.000/kg roasted, kapasitas mitra dibatasi 70kg/minggu. B mempertimbangkan mesin sendiri dengan biaya tetap tambahan Rp9 juta/bulan yang belum termasuk depresiasi dan financing.",
    "prompt": "Kasus Make-or-buy. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Prediksi permintaan terjual turun dari 200kg menjadi 95kg/bulan; partner juga mengubah minimum booking produksi.",
    "revisionPrompt": "Evaluasi ulang biaya per kg, bukan hanya penghematan biaya mesin. Bandingkan dengan downtime, operator, jaminan kualitas dan kewajiban kontrak.",
    "revise": "Evaluasi ulang biaya per kg, bukan hanya penghematan biaya mesin. Bandingkan dengan downtime, operator, jaminan kualitas dan kewajiban kontrak.",
    "reason": "Pembelian mesin membutuhkan volume cukup yang benar-benar terjual dan kontrol risiko; biaya tetap tak berkurang hanya karena volume turun."
  },
  {
    "moduleId": "B03",
    "decision": "Ada 24 prospek kafe, enam meminta sampel, dua membayar pilot masing-masing 12kg. Ini **asumsi latihan**, bukan ukuran konversi industri.",
    "prompt": "Kasus Validasi pasar. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Satu dari dua pilot tidak reorder setelah tim QA mengubah profil rasa, sementara prospek lain belum mengajukan PO.",
    "revisionPrompt": "Bangun forecast konservatif dari order berbayar, pisahkan trial dengan repeat order dan rancang tindak lanjut QC.",
    "revise": "Bangun forecast konservatif dari order berbayar, pisahkan trial dengan repeat order dan rancang tindak lanjut QC.",
    "reason": "Lead ≠ pelanggan; permintaan tervalidasi harus didukung bukti pembayaran dan repeatability, bukan reach sosial media."
  },
  {
    "moduleId": "B04",
    "decision": "Tiga SKU direncanakan. MOQ pouch custom 3.000 pcs per SKU; tiap SKU hanya diperkirakan menjual 150 pack per bulan—angka simulasi vendor.",
    "prompt": "Kasus SKU dan stok. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Produksi pouch memerlukan pembayaran 100% sebelum cetak; satu SKU ternyata hanya diminati 50 pack per bulan.",
    "revisionPrompt": "Kurangi jumlah varian atau pilih kemasan generik berlabel fleksibel, hitung umur persediaan dan cash tied-up.",
    "revise": "Kurangi jumlah varian atau pilih kemasan generik berlabel fleksibel, hitung umur persediaan dan cash tied-up.",
    "reason": "MOQ besar dapat mengubah keuntungan per pack menjadi persediaan lama; perhitungkan desain, retur dan perubahan label."
  },
  {
    "moduleId": "B05",
    "decision": "Rencana bisnis menyebut investasi Rp180 juta, demand 350kg/bulan dan kas awal Rp40 juta. Ini asumsi untuk latihan go/no-go.",
    "prompt": "Kasus Studi kelayakan. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Ternyata pelanggan yang sudah PO hanya 90kg/bulan, renovasi ventilasi belum dikutip dan pemasok meminta DP 70%.",
    "revisionPrompt": "Revisi keputusan investasi dengan downside, cash runway dan kebutuhan belanja fasilitas sebelum membeli mesin.",
    "revise": "Revisi keputusan investasi dengan downside, cash runway dan kebutuhan belanja fasilitas sebelum membeli mesin.",
    "reason": "Kelayakan adalah kombinasi pasar, izin, fasilitas, operasional dan kas; proyeksi pendapatan optimistis tidak membayar invoice."
  },
  {
    "moduleId": "B06",
    "decision": "A hanya mengelola merek dengan contract roaster, sedangkan B mengoperasikan produksi pada tempat sewanya. Keduanya sama-sama menjual kopi kemasan tetapi pihak pelaku usaha dan tanggung jawabnya berbeda.",
    "prompt": "Kasus Perizinan dan entitas. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "B berencana memakai izin milik mitra A, dan pengelola menganggap semua CV otomatis memakai PPh final 0,5%.",
    "revisionPrompt": "Pisahkan entitas, lokasi fasilitas, kegiatan KBLI, kategori pangan, penanggung jawab label dan klasifikasi pajak terbaru.",
    "revise": "Pisahkan entitas, lokasi fasilitas, kegiatan KBLI, kategori pangan, penanggung jawab label dan klasifikasi pajak terbaru.",
    "reason": "OSS KBLI bukan izin edar; PP 20/2026 membatasi subjek PPh final UMKM sehingga bentuk entitas tak boleh diasumsikan."
  },
  {
    "moduleId": "B07",
    "decision": "Supplier X memberi contoh 1kg lot Gayo; supplier Y mengajukan penawaran 250kg lot lain. Keduanya sama-sama tertulis 'Gayo washed', namun belum ada identitas lot dan parameter QC yang identik.",
    "prompt": "Kasus Kontrak supplier. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Sampel produksi massal Y berbeda sensori, serta dokumen moisture hanya untuk sampel awal, bukan karung datang.",
    "revisionPrompt": "Susun acceptance protocol per lot dan klausul klaim berdasarkan sampling yang representatif.",
    "revise": "Susun acceptance protocol per lot dan klausul klaim berdasarkan sampling yang representatif.",
    "reason": "Nama origin dan proses serupa bukan jaminan profil rasa atau keamanan identik; kesepakatan spesifikasi lebih penting dari label."
  },
  {
    "moduleId": "B08",
    "decision": "Untuk latihan terpisah: publikasi **Makassar → Jabodetabek** menawarkan 'mulai Rp3.500/kg' dengan minimum 50kg; sumber carrier harus diverifikasi lagi dan bukan quotation green bean khusus. Kamu membeli 35kg dari Sulawesi.",
    "prompt": "Kasus Ongkos inbound antarpulau. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Setelah menghubungi operator, alamat roastery ternyata Sukabumi dan tidak termasuk cakupan Jabodetabek; pickup origin, packing dan barang green bean membutuhkan klarifikasi.",
    "revisionPrompt": "Pisahkan leg Makassar → area Jabodetabek dari last mile ke Sukabumi; minta quotation door-to-door sesuai berat, lokasi dan tanggal.",
    "revise": "Pisahkan leg Makassar → area Jabodetabek dari last mile ke Sukabumi; minta quotation door-to-door sesuai berat, lokasi dan tanggal.",
    "reason": "35kg dikenai minimum 50kg apabila ketentuan itu benar berlaku; 50×3.500 = Rp175.000 **hanya komponen dasar indikatif**, bukan total tiba gudang."
  },
  {
    "moduleId": "B09",
    "decision": "Pemilik menemukan sewa murah tetapi bangunan berlantai dua dengan akses loading kecil, exhaust belum ada dan utilitas listrik belum dievaluasi.",
    "prompt": "Kasus Keselamatan fasilitas. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Kontraktor memberikan dua kebutuhan tambahan: upgrade elektrikal dan tata udara yang perlu persetujuan pemilik bangunan. Biaya belum ada quotation.",
    "revisionPrompt": "Tahan komitmen sewa sampai penilaian instalasi dan biaya retrofit tersedia; bandingkan alternatif ruang.",
    "revise": "Tahan komitmen sewa sampai penilaian instalasi dan biaya retrofit tersedia; bandingkan alternatif ruang.",
    "reason": "Perubahan fasilitas menggeser CAPEX dan jadwal start; jangan menjalankan mesin panas demi mengejar tanggal pembukaan."
  },
  {
    "moduleId": "B10",
    "decision": "Contoh perhitungan: satu batch menerima 5kg green, roasting loss terukur 15%, tiga batch per jam saat mesin tersedia, dan lima jam roasting efektif sehari.",
    "prompt": "Kasus Kapasitas roasting. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Quality hold satu jam serta perubahan SKU memakan 45 menit dan output saleable beberapa batch ditahan QA.",
    "revisionPrompt": "Revisi target output dengan jam tersedia, batch aktual, QC release dan kemasan; jangan memakai kapasitas brosur.",
    "revise": "Revisi target output dengan jam tersedia, batch aktual, QC release dan kemasan; jangan memakai kapasitas brosur.",
    "reason": "Pada asumsi awal kapasitas teknis 5×3×5×0,85 = 63,75kg roasted/hari, sebelum downtime dan reject. Kapasitas jual sesungguhnya bisa lebih rendah."
  },
  {
    "moduleId": "B11",
    "decision": "Invoice supplier lot G22 dipakai untuk tiga batch roasting yang dikemas pada dua hari; log mencatat operator dan yield tiap batch.",
    "prompt": "Kasus Traceability dan release. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Satu batch mendapat hasil QC off-flavor, tetapi 20 pack sudah masuk kardus untuk satu pelanggan.",
    "revisionPrompt": "Lakukan hold unit yang dapat dilacak, hentikan dispatch, telusuri seluruh kemasan terdampak sebelum putuskan tindak lanjut.",
    "revise": "Lakukan hold unit yang dapat dilacak, hentikan dispatch, telusuri seluruh kemasan terdampak sebelum putuskan tindak lanjut.",
    "reason": "Lot traceability memungkinkan pembatasan recall yang akurat; rata-rata rasa tiga batch tidak membenarkan melepas batch terindikasi cacat."
  },
  {
    "moduleId": "B12",
    "decision": "Untuk order 1kg, pilihan pertama satu pouch 1kg, pilihan kedua empat pouch 250g. Bahan pouch simulasi Rp5.000 untuk 1kg atau Rp2.000 per pouch 250g, belum label/tenaga.",
    "prompt": "Kasus Packing dan fulfilment. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Pelanggan ternyata meminta empat label berbeda dengan pemisahan alamat, sehingga kebutuhan packing dan fulfilment bertambah.",
    "revisionPrompt": "Bandingkan biaya per kg dan waktu packing serta periksa apakah SKU 250g memerlukan harga berbeda.",
    "revise": "Bandingkan biaya per kg dan waktu packing serta periksa apakah SKU 250g memerlukan harga berbeda.",
    "reason": "Bahan kemasan Rp5.000 vs Rp8.000 per kilogram pada asumsi ini; harga jual/kg sama tidak berarti margin sama."
  },
  {
    "moduleId": "B13",
    "decision": "Satu kg roasted memakai green + freight Rp151.000, conversion variable Rp14.000, packaging Rp6.000. Biaya pabrik tetap Rp6 juta/bulan dan output terjual direncanakan 300kg.",
    "prompt": "Kasus Pemisahan biaya tetap. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Output aktual hanya 150kg. Biaya pabrik tetap tidak ikut turun; biaya alokasi overhead/kg menjadi dua kali lipat.",
    "revisionPrompt": "Hitung ulang HPP serapan untuk laporan dan contribution untuk keputusan BEP dengan denominator berbeda.",
    "revise": "Hitung ulang HPP serapan untuk laporan dan contribution untuk keputusan BEP dengan denominator berbeda.",
    "reason": "Variable cost/kg Rp171.000. Overhead pada rencana 300kg = Rp20.000/kg; aktual 150kg = Rp40.000/kg. Jangan kurangi overhead variabel dua kali dalam contribution."
  },
  {
    "moduleId": "B14",
    "decision": "Skenario asumsi: HPP manufacturing absorbed Rp180.000/kg, harga D2C neto Rp250.000/kg, dan biaya channel variabel Rp32.000/kg.",
    "prompt": "Kasus Margin per channel. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Platform menaikkan fee dan pelanggan ritel beralih ke paket 250g yang punya biaya pouch/kg lebih tinggi.",
    "revisionPrompt": "Hitung waterfall harga per SKU, validasi margin gross versus contribution, dan evaluasi ketahanan harga promo.",
    "revise": "Hitung waterfall harga per SKU, validasi margin gross versus contribution, dan evaluasi ketahanan harga promo.",
    "reason": "Gross margin awal (250-180)/250=28%; setelah biaya channel, contribution sebelum penyesuaian fixed ≈ Rp38.000/kg. Margin gross tidak sama dengan margin bersih."
  },
  {
    "moduleId": "B15",
    "decision": "Dalam latihan, fixed relevant Rp12 juta/bulan, harga neto Rp220.000/kg dan variable cost termasuk channel Rp160.000/kg.",
    "prompt": "Kasus BEP dan kapasitas. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Mesin dan packing yang tersedia secara realistis hanya mampu fulfil 180kg/bulan; target sales sudah 240kg.",
    "revisionPrompt": "Tentukan apakah BEP 200kg/bulan dapat dicapai dari kapasitas saat ini, lalu cari tindakan di sisi harga, biaya atau bottleneck.",
    "revise": "Tentukan apakah BEP 200kg/bulan dapat dicapai dari kapasitas saat ini, lalu cari tindakan di sisi harga, biaya atau bottleneck.",
    "reason": "Contribution Rp60.000/kg, BEP 200kg. Bila kapasitas efektif hanya 180kg, target BEP secara operasional belum layak meskipun ada permintaan."
  },
  {
    "moduleId": "B16",
    "decision": "Roastery menerima PO Rp60 juta, pemasok meminta pembayaran green Rp40 juta saat pesan, ongkir tambahan belum dibayar, dan buyer baru membayar 45 hari setelah delivery.",
    "prompt": "Kasus Cash conversion. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Roastery hanya punya kas Rp30 juta, buyer menginginkan tempo tetapi pemasok menolak DP kecil.",
    "revisionPrompt": "Negosiasikan DP buyer, milestone pembayaran, termin pemasok atau volume split sebelum menerima kewajiban pembelian.",
    "revise": "Negosiasikan DP buyer, milestone pembayaran, termin pemasok atau volume split sebelum menerima kewajiban pembelian.",
    "reason": "Margin positif pada PO tak mengubah fakta Rp40 juta cash-out di depan saat kas hanya Rp30 juta; kebutuhan modal kerja harus diputuskan lebih dulu."
  },
  {
    "moduleId": "B17",
    "decision": "Sebuah hotel menawarkan 100kg/bulan dengan harga di bawah retail, meminta training staf dua kali sebulan dan pembayaran H+45.",
    "prompt": "Kasus Kontrak B2B. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Hotel meminta pengiriman mingguan dalam 10kg pack serta hak retur barang yang tidak terjual.",
    "revisionPrompt": "Hitung cost-to-serve, working capital dan skema retur sebelum menyetujui harga kontrak dan layanan.",
    "revise": "Hitung cost-to-serve, working capital dan skema retur sebelum menyetujui harga kontrak dan layanan.",
    "reason": "Volume memberi efisiensi tetapi training, pengiriman dan kredit dapat menghapus contribution positif; penawaran tertulis harus membatasi scope."
  },
  {
    "moduleId": "B18",
    "decision": "Tim ingin memperluas reseller ke empat kota. Harga transfer menguntungkan saat semua barang dibayar sebelum dikirim.",
    "prompt": "Kasus Channel distribusi. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Distributor meminta retur semua stok yang lambat dan eksklusivitas daerah tanpa minimum sell-through.",
    "revisionPrompt": "Batasi hak retur, wilayah dan target pembelian; perhitungkan stock consignment dan waktu kas nyata.",
    "revise": "Batasi hak retur, wilayah dan target pembelian; perhitungkan stock consignment dan waktu kas nyata.",
    "reason": "Ship-to-distributor bukan selalu sell-through konsumen. Bila retur tidak dibatasi, risiko inventori dapat kembali ke roastery."
  },
  {
    "moduleId": "B19",
    "decision": "Owner kecil memegang pembelian bahan, penerimaan gudang, QC release, dan pembayaran pemasok. Pada A hal ini sering terjadi karena tim baru dua orang.",
    "prompt": "Kasus SDM dan segregation. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Audit menemukan nota supplier dapat diedit orang yang sekaligus mengotorisasi pembayaran, dan stok opname tidak pernah dilakukan silang.",
    "revisionPrompt": "Terapkan kontrol dua pihak, bukti penerimaan, approval pembayaran dan review berkala walaupun tim kecil.",
    "revise": "Terapkan kontrol dua pihak, bukti penerimaan, approval pembayaran dan review berkala walaupun tim kecil.",
    "reason": "Pemisahan tugas bisa dimulai dengan review pemilik lain/akuntan eksternal serta histori digital; mempekerjakan orang banyak bukan satu-satunya solusi."
  },
  {
    "moduleId": "B20",
    "decision": "Penjualan naik 40% dalam tiga bulan, tetapi order fulfilment turun dan packaging overtime melonjak; mesin roasting masih punya jam kosong.",
    "prompt": "Kasus KPI dan pertumbuhan. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Dua pelanggan prioritas mulai komplain telat kirim meskipun roaster mengusulkan mesin roasting lebih besar.",
    "revisionPrompt": "Periksa bottleneck packing, jadwal release QC, picking dan armada sebelum menyetujui CAPEX mesin.",
    "revise": "Periksa bottleneck packing, jadwal release QC, picking dan armada sebelum menyetujui CAPEX mesin.",
    "reason": "Grafik omzet bukan data kapasitas; investasi yang tidak menyasar bottleneck dapat menaikkan biaya tetap tanpa memperbaiki SLA."
  },
  {
    "moduleId": "B21",
    "decision": "Buyer asing meminta 100kg roasted coffee untuk satu negara tujuan yang belum diperiksa perizinan pangan dan import requirements-nya.",
    "prompt": "Kasus Pengantar ekspor. Pilih tindakan A (asset-light), B (mesin kecil), atau C (komersial) lalu tulis bukti yang perlu diperiksa. Semua angka tanpa bukti penawaran ditandai sebagai simulasi, bukan harga pasar.",
    "newEvidence": "Forwarder mengutip biaya hanya sampai pelabuhan, sementara buyer mengira harga sudah termasuk pengantaran ke gudangnya.",
    "revisionPrompt": "Tahan harga final, verifikasi HS dan dokumen, negara tujuan, shelf-life, Incoterms, kurs dan tanggung jawab import clearance.",
    "revise": "Tahan harga final, verifikasi HS dan dokumen, negara tujuan, shelf-life, Incoterms, kurs dan tanggung jawab import clearance.",
    "reason": "FOB, CIF atau DAP membagi risiko/biaya berbeda. Ekspor tidak boleh direncanakan sebagai 'ongkir internasional ditambah margin'."
  }
];
