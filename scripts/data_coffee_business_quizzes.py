# -*- coding: utf-8 -*-
from curriculum_helpers import rotate_options

def get_coffee_business_module_quizzes():
    return [
        {
            "id": "quiz-biz1",
            "module_id": "mod-biz1",
            "learning_path_id": "path-coffee-business",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul BIZ-1: Studi Kelayakan, Konsep & Perencanaan Finansial",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-biz2",
            "module_id": "mod-biz2",
            "learning_path_id": "path-coffee-business",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul BIZ-2: Pemilihan Lokasi & Desain Alur Kerja Bar",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-biz3",
            "module_id": "mod-biz3",
            "learning_path_id": "path-coffee-business",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul BIZ-3: Kalkulasi HPP, Pricing Menu & Manajemen Stok",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-biz4",
            "module_id": "mod-biz4",
            "learning_path_id": "path-coffee-business",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul BIZ-4: Standar Operasional Barista & SOP Servis",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-biz5",
            "module_id": "mod-biz5",
            "learning_path_id": "path-coffee-business",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul BIZ-5: Branding Spesialti, Marketing & Retensi Pelanggan",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-biz-final",
            "module_id": "mod-biz6",
            "learning_path_id": "path-coffee-business",
            "quiz_scope": "final_exam",
            "title": "Ujian Akhir Sertifikasi Coffee Business Executive",
            "description": "Ujian komprehensif 15 soal mencakup analisis CAPEX/OPEX, BEP finansial, tata kelola bar, margin HPP menu, dan strategi skalabilitas bisnis kafe.",
            "passing_score": 80,
            "time_limit_minutes": 30,
            "max_attempts": 3,
            "created_at": "2026-08-10T00:00:00Z",
        },
    ]

def get_coffee_business_module_questions():
    pattern = [2, 1, 0, 3, 1, 2, 0, 3, 2, 1, 3, 0, 2, 0, 1]
    raw = [
        # quiz-biz1
        {
            "id": "q-biz1-1", "quiz_id": "quiz-biz1", "order_index": 1,
            "text": "Dalam alokasi belanja modal awal kedai kopi (CAPEX), komponen manakah yang umumnya menyerap porsi anggaran terbesar (hingga 60-70%)?",
            "correct": "Peralatan bar kopi komersial (mesin espresso, grinder, water treatment) dan pekerjaan renovasi sipil/interior",
            "wrong": ["Biaya seragam barista dan apron", "Biaya promosi media sosial bulan pertama", "Peralatan alat tulis kantor kasir"],
            "exp": "Mesin komersial dan fit-out interior adalah investasi modal tetap (CAPEX) terbesar yang menentukan kapasitas produksi dan daya tahan operasional harian."
        },
        {
            "id": "q-biz1-2", "quiz_id": "quiz-biz1", "order_index": 2,
            "text": "Berapa cadangan dana kas operasional darurat (cash runway) yang mutlak disiapkan di rekening bisnis sebelum hari pertama pembukaan kafe?",
            "correct": "Minimal 3 hingga 6 bulan dari total biaya operasional tetap (OPEX bulanan)",
            "wrong": ["Cukup untuk 2 hari pertama operasional", "Tidak membutuhkan cadangan kas jika lokasi ramai", "Minimal 5 tahun biaya operasional"],
            "exp": "Bulan-bulan awal adalah fase adaptasi pasar; runway 3-6 bulan melindungi bisnis dari kegagalan arus kas sebelum kafe mencapai titik impas (Break-Even Point)."
        },
        {
            "id": "q-biz1-3", "quiz_id": "quiz-biz1", "order_index": 3,
            "text": "Jika kedai kopi memiliki biaya tetap Rp 30.000.000/bulan, harga jual rata-rata Rp 30.000/cup, dan HPP Rp 10.000/cup, berapa cangkir target BEP unit bulanan yang harus terjual?",
            "correct": "1.500 cangkir per bulan (rata-rata 50 cangkir per hari)",
            "wrong": ["500 cangkir per bulan", "3.000 cangkir per bulan", "10.000 cangkir per bulan"],
            "exp": "Margin kontribusi = Rp 30.000 - Rp 10.000 = Rp 20.000. BEP unit = Biaya Tetap / Margin Kontribusi = Rp 30.000.000 / Rp 20.000 = 1.500 cangkir/bulan."
        },
        # quiz-biz2
        {
            "id": "q-biz2-1", "quiz_id": "quiz-biz2", "order_index": 1,
            "text": "Batas persentase beban sewa lokasi (rental expense) yang aman terhadap proyeksi omzet kotor bulanan kafe adalah?",
            "correct": "Maksimal 10% hingga 15% dari total omzet kotor bulanan",
            "wrong": ["35% hingga 50% dari total omzet", "60% hingga 75% dari total omzet", "Bebas tanpa batasan persentase"],
            "exp": "Beban sewa di atas 15-20% menekan margin laba bersih secara drastis, membuat kedai sangat rentan merugi saat terjadi penurunan musiman (low season)."
        },
        {
            "id": "q-biz2-2", "quiz_id": "quiz-biz2", "order_index": 2,
            "text": "Dalam perancangan alur kerja bar (bar ergonomics), pola penataan stasiun manakah yang paling efisien mencegah tabrakan barista saat jam sibuk?",
            "correct": "Alur pergerakan linear satu arah (Order POS -> Grinding -> Extraction -> Steaming -> Garnish -> Pick-Up)",
            "wrong": ["Alur zigzag di mana barista harus bolak-balik melintasi area kasir", "Menempatkan seluruh mesin di sudut belakang meja yang sempit", "Meletakkan mesin cuci piring tepat di samping mesin kasir"],
            "exp": "Alur linear satu arah memastikan barista bergerak selaras tanpa harus berputar arah atau bertabrakan dengan barista lain saat volume pesanan tinggi."
        },
        {
            "id": "q-biz2-3", "quiz_id": "quiz-biz2", "order_index": 3,
            "text": "Mengapa pemeriksaan voltase listrik dan uji parameter kualitas air baku wajib dilakukan sebelum menandatangani kontrak sewa lokasi kafe?",
            "correct": "Mesin espresso komersial membutuhkan daya tinggi stabil (3.000 - 6.000 Watt) dan air ber-TDS terkontrol untuk mencegah kerusakan boiler dan elemen pemanas",
            "wrong": ["Semata-mata untuk mendapatkan diskon tarif sewa ruko dari pemilik", "Agar barista tidak perlu menyalakan lampu penerangan bar", "Untuk memenuhi syarat izin pendirian pabrik industri berat"],
            "exp": "Fluktuasi voltase merusak papan PCB elektronik mesin kopi, dan air sadah tinggi merusak boiler dalam hitungan bulan jika sistem filtrasi yang tepat tidak disiapkan."
        },
        # quiz-biz3
        {
            "id": "q-biz3-1", "quiz_id": "quiz-biz3", "order_index": 1,
            "text": "Berapakah target persentase Harga Pokok Penjualan (HPP / Food Cost) yang ideal untuk kategori minuman kopi berbasis susu di kafe specialty?",
            "correct": "25% hingga 30% dari harga jual menu",
            "wrong": ["5% hingga 10% dari harga jual", "50% hingga 60% dari harga jual", "80% hingga 90% dari harga jual"],
            "exp": "Rentang HPP 25-30% menyisakan margin kotor 70-75% yang cukup untuk menutupi biaya tenaga kerja (labor cost 20-25%), biaya sewa (10-15%), dan laba bersih (15-20%)."
        },
        {
            "id": "q-biz3-2", "quiz_id": "quiz-biz3", "order_index": 2,
            "text": "Komponen apa saja yang wajib diperhitungkan secara akurat dalam formulasi lembar HPP satu porsi Iced Caffe Latte take-away?",
            "correct": "Biji kopi espresso, volume susu segar dingin, sirup gula, cup gelas plastik, lid tutup, sedotan, dan faktor susut spillage 3-5%",
            "wrong": ["Hanya harga beli biji kopi per kilogram dibagi 1.000", "Hanya harga kemasan cup dan sedotan saja", "Harga jual kompetitor di seberang jalan"],
            "exp": "Kalkulasi HPP yang akurat wajib menghitung bahan baku primer, kemasan habis pakai (packaging), dan faktor penyusutan (spillage waste) susu/bubuk saat kalibrasi."
        },
        {
            "id": "q-biz3-3", "quiz_id": "quiz-biz3", "order_index": 3,
            "text": "Apa fungsi utama prosedur 'Stock Opname' mingguan yang dilakukan secara disiplin oleh manajer kafe?",
            "correct": "Membandingkan stok fisik aktual dengan data penjualan sistem POS guna mendeteksi selisih limbah, spillage berlebih, atau kehilangan bahan",
            "wrong": ["Menghitung jumlah debu di rak gudang bahan baku", "Menimbang bobot tubuh barista sebelum dan sesudah bekerja", "Mengganti seluruh resep menu setiap minggu"],
            "exp": "Stock opname rutin mengidentifikasi kebocoran operasional secara dini sebelum membengkak menjadi kerugian finansial yang menggerus margin usaha."
        },
        # quiz-biz4
        {
            "id": "q-biz4-1", "quiz_id": "quiz-biz4", "order_index": 1,
            "text": "Langkah pertama yang wajib dilakukan barista saat membuka kedai (Opening SOP Checklist) sebelum melayani pelanggan pertama adalah?",
            "correct": "Menyalakan mesin espresso agar suhu boiler stabil, memeriksa air filtrasi, dan mengkalibrasi dial-in rasa espresso pagi",
            "wrong": ["Membuat live streaming di media sosial pribadi selama 1 jam", "Membuka pintu toko dan langsung menerima pesanan minuman tanpa mencoba rasa", "Menyapu area parkir luar gedung"],
            "exp": "Mesin membutuhkan waktu 20-30 menit untuk mencapai kestabilan termal group head, dan kalibrasi sensorik wajib dilakukan agar minuman pertama yang keluar memenuhi standar mutu."
        },
        {
            "id": "q-biz4-2", "quiz_id": "quiz-biz4", "order_index": 2,
            "text": "Berapa target waktu penyajian rata-rata (Speed of Service) per minuman kopi yang diharapkan pelanggan pada jam rush hour di bar specialty modern?",
            "correct": "2 hingga 3 menit sejak pesanan dibayar di kasir",
            "wrong": ["10 hingga 15 menit per cangkir", "30 detik tanpa peduli kualitas rasa", "30 menit sambil menunggu meja penuh"],
            "exp": "Waktu 2-3 menit adalah standar kecepatan prima yang menyeimbangkan presisi ekstraksi specialty dengan kepuasan pelanggan tanpa antrean menumpuk."
        },
        {
            "id": "q-biz4-3", "quiz_id": "quiz-biz4", "order_index": 3,
            "text": "Mengapa program matriks pelatihan staf (Training Matrix SOP) sangat penting bagi pemilik bisnis kafe yang ingin berekspansi?",
            "correct": "Menjamin konsistensi rasa produk dan standar pelayanan prima yang tidak bergantung pada sosok individu barista tertentu",
            "wrong": ["Agar pemilik kafe tidak perlu membayar gaji barista", "Untuk melarang barista berinteraksi ramah dengan pelanggan", "Agar kafe terlihat seperti pabrik otomotif"],
            "exp": "Bisnis yang dapat diskalakan (scalable) bertumpu pada sistem dan SOP baku; pelatihan terstruktur memastikan mutu rasa tetap identik siapa pun barista yang bertugas."
        },
        # quiz-biz5
        {
            "id": "q-biz5-1", "quiz_id": "quiz-biz5", "order_index": 1,
            "text": "Apa yang dimaksud dengan USP (Unique Selling Proposition) sebuah kedai kopi specialty di tengah persaingan pasar yang padat?",
            "correct": "Nilai proposisi unik pembeda yang bernilai nyata bagi konsumen dan tidak mudah ditiru oleh kompetitor",
            "wrong": ["Menjual kopi dengan harga paling murah merusak pasar", "Menggunakan logo kafe berwarna merah menyala", "Menyalin resep dan konsep kafe kompetitor secara utuh"],
            "exp": "USP adalah fondasi positioning merek—bisa berupa kurasi biji origin eksklusif, edukasi meja bar interaktif, desain arsitektur bernilai seni, atau program keberlanjutan petani."
        },
        {
            "id": "q-biz5-2", "quiz_id": "quiz-biz5", "order_index": 2,
            "text": "Strategi aktivasi komunitas manakah yang terbukti paling berbiaya rendah namun berdaya retensi tinggi bagi kedai kopi specialty lokal?",
            "correct": "Mengadakan sesi cupping publik mingguan gratis, workshop manual brew santai, dan klub lari/sepeda berbasis kafe",
            "wrong": ["Memasang papan reklame raksasa di jalan tol antarkota", "Memberikan diskon gratis 100% untuk seluruh menu sepanjang tahun", "Membayar selebriti internasional untuk posting cerita Instagram"],
            "exp": "Aktivasi komunitas mengubah pelanggan pasif menjadi duta merek (brand advocates) yang loyal dan berkunjung secara rutin bersama jaringan pertemanan mereka."
        },
        {
            "id": "q-biz5-3", "quiz_id": "quiz-biz5", "order_index": 3,
            "text": "Dalam analisis metrik bisnis modern, rasio perbandingan yang sehat antara Customer Lifetime Value (CLV) dan Customer Acquisition Cost (CAC) adalah?",
            "correct": "CLV minimal 3 kali lebih besar dari CAC (Rasio CLV : CAC >= 3 : 1)",
            "wrong": ["CAC harus 5 kali lebih besar dari CLV", "Keduanya harus selalu bernilai 0", "Rasio 1 : 10 di mana biaya iklan melebihi seluruh omzet"],
            "exp": "Jika nilai keuntungan total dari seorang pelanggan (CLV) minimal 3 kali biaya yang dikeluarkan untuk mendatangkan pelanggan tersebut (CAC), bisnis memiliki mesin pertumbuhan yang menguntungkan."
        },
    ]

    questions = []
    for idx, item in enumerate(raw):
        target_idx = pattern[idx % len(pattern)]
        ans = rotate_options(item["correct"], item["wrong"][0], item["wrong"][1], item["wrong"][2], target_idx, item["id"])
        questions.append({
            "id": item["id"],
            "quiz_id": item["quiz_id"],
            "question_text": item["text"],
            "order_index": item["order_index"],
            "explanation": item["exp"],
            "answers": ans
        })
    return questions

print("Coffee Business data provider ready.")
