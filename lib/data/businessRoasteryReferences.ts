export type BusinessReference={key:string;category:string;title:string;url:string;verified:string;status:string;scope:string;value?:number;unit?:string;minimumKg?:number;leadTime?:string;exclusions?:string};
export const BUSINESS_REFERENCES:BusinessReference[]=[
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
    "url": "https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-medan-2.html",
    "verified": "2026-10-13",
    "status": "tarif publik indikatif, bukan penawaran final",
    "scope": "Jakarta ke Medan; kargo laut",
    "value": 7900,
    "unit": "IDR/kg",
    "minimumKg": 100,
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
    "decision": "Memahami aliran barang, data dan nilai dari kebun hingga pelanggan. A mengontrak pihak sangrai dan menjual merek sendiri; B membeli mesin kecil; C mengelola banyak lot dan pelanggan antarprovinsi.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik industri roastery indonesia. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B02",
    "decision": "Menguji asset-light, roastery kecil, dan roastery komersial tanpa mengunggulkan mesin mahal. A membayar jasa roasting berdasarkan kontrak; B memakai mesin sendiri; C menanggung penjadwalan banyak lini dan pelanggan.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik tiga model bisnis, tiga struktur risiko. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B03",
    "decision": "Membedakan antusiasme calon pelanggan dari permintaan yang siap dibayar. A menguji preorder kecil; B menawarkan suplai ke sepuluh kafe; C menguji tender dan target key account.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik riset pasar dan validasi permintaan. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B04",
    "decision": "Merancang nilai produk yang dapat diproduksi berulang serta menguntungkan. A membatasi dua SKU; B melayani filter dan espresso; C mengelola banyak lot dengan pengendalian stok.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik brand, produk, dan portofolio sku. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B05",
    "decision": "Menjadikan rencana bisnis sebagai serangkaian hipotesis yang dapat diuji. A memulai dengan pesanan minimum; B punya fasilitas dan mesin; C menimbang pembiayaan dan kontrak tahunan.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik business plan dan studi kelayakan. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B06",
    "decision": "Mengambil keputusan perizinan berdasarkan kegiatan, skala, fasilitas dan aturan terkini. A memakai manufaktur mitra namun memeriksa pihak penanggung jawab produk; B membuka fasilitas roasting; C memerlukan sistem dokumen dan pengendalian lot.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik legalitas, mutu pangan, dan pajak indonesia. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B07",
    "decision": "Mengubah hubungan petani, koperasi atau trader menjadi rantai suplai yang dapat diandalkan. A memakai stok contract roaster atau membeli green sendiri; B menerima kiriman beberapa karung; C melakukan kontrak panen dan QC masuk.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik sourcing, kontrak, dan mutu green bean. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B08",
    "decision": "Membaca ongkos riil rute tertentu, minimum tagihan dan risiko pengiriman antarwilayah. A membeli 30 kg dan terdampak minimum charge; B membeli 100–500 kg; C mengonsolidasikan beberapa lot dan menyewa kendaraan.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik logistik inbound indonesia dan landed cost. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B09",
    "decision": "Mendesain ruangan produksi aman sebelum menghitung keuntungan. A mengaudit tempat mitra; B membuat layout unit kecil; C memisahkan zona raw, roasted dan fulfilment.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik fasilitas, utilitas, dan keselamatan. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B10",
    "decision": "Menilai mesin berdasarkan kebutuhan produksi dan biaya penuh. A memeriksa kapasitas dan SLA partner; B membandingkan beberapa mesin; C merencanakan redundansi dan shift.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik mesin, kapasitas, dan pengadaan. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B11",
    "decision": "Menyusun sistem yang dapat mengulang mutu sekaligus menangani anomali. A meminta data roast per batch dari mitra; B mencatat semua batch; C memisahkan QC dan operator produksi.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik operasi roasting, qa, dan lot traceability. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B12",
    "decision": "Menjaga nilai kopi sesudah mesin berhenti. A memakai layanan fulfilment pihak ketiga; B menyiapkan meja packing; C mengelola FEFO beberapa gudang.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik kemasan, gudang, dan fulfillment. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B13",
    "decision": "Membedakan biaya persediaan dari beban periode, kemudian memperoleh biaya/kg saleable. A menambahkan fee partner; B mengalokasikan conversion cost; C menghitung variance batch dan campuran SKU.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik akuntansi biaya dan hpp roastery. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B14",
    "decision": "Menghitung kontribusi nyata setelah biaya channel, bukan dari persentase arbitrer. A menjual D2C; B menjual B2B dan marketplace; C punya reseller dan private label.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik pricing, margin, dan ekonomi setiap channel. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B15",
    "decision": "Menghubungkan volume, fixed cost, kapasitas dan asumsi konversi. A menguji target preorder; B perlu menutup biaya fasilitas; C mengevaluasi shift tambahan.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik forecast, bep, dan budgeting. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B16",
    "decision": "Menilai apakah laba dapat membayar pembelian green dan gaji tepat waktu. A menerima pembayaran ritel langsung; B memberi tempo 14–30 hari; C menanggung inventory dan PO besar.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik cash flow, piutang, dan modal kerja. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B17",
    "decision": "Mencari pelanggan berkualitas serta menjaga kontribusi dan hubungan. A menghubungi kafe independen; B memberi service visit; C menegosiasikan multi-outlet contract.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik sales b2b, kontrak dan customer success. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B18",
    "decision": "Membangun kanal alternatif tanpa merusak struktur biaya dan kapasitas. A mengandalkan marketplace; B memadukan retail lokal dan wholesale; C memegang program reseller nasional.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik d2c, distribusi dan private label. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B19",
    "decision": "Membuat bisnis tidak bergantung pada satu orang pemilik. A mengelola vendor dan customer care; B punya roaster/operator merangkap; C memisahkan finance, QA, sales dan production.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik people, sop dan tata kelola. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B20",
    "decision": "Menjadi manajer roastery yang mengawasi bisnis lewat indikator berkaitan. A mengawasi kontraktor; B mengukur yield mesin; C mengontrol beberapa tim dan channel.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik dashboard, risiko dan pertumbuhan. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  },
  {
    "moduleId": "B21",
    "decision": "Mengevaluasi kesiapan ekspor roasted coffee tanpa menyalin path ekspor khusus. A menerima inquiry kecil via distributor; B menghitung perintisan lintas negara; C menguji kesiapan compliance dan volume buyer.",
    "prompt": "Bandingkan tiga skenario usaha untuk topik ekspor pengantar dan capstone bisnis. Rumuskan keputusan, satu ketidakpastian dan verifikasi yang harus dilakukan.",
    "newEvidence": "Dalam bulan berikutnya, salah satu pelanggan B2B menunda pembayaran 30 hari, biaya inbound freight meningkat menurut quote baru, dan pesanan aktual hanya 60% proyeksi. Tidak ada angka yang boleh dianggap benar tanpa invoice atau quote terverifikasi.",
    "revise": "Perbaiki keputusan dan jelaskan apakah penyesuaian harus dilakukan pada pengadaan, margin channel, safety stock, layanan atau kas.",
    "reason": "Periksa dahulu tanggal kas, komitmen supplier, kapasitas aktual dan kontribusi per kg. Keputusan harus dapat berubah tanpa menghapus hasil pengamatan awal."
  }
];
