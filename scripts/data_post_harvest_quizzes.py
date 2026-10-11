# -*- coding: utf-8 -*-
from curriculum_helpers import rotate_options

def get_post_harvest_module_quizzes():
    return [
        {
            "id": "quiz-p1",
            "module_id": "mod-p1",
            "learning_path_id": "path-post-harvest",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul P-1: Anatomi Buah Kopi & Pemetikan Selektif",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-p2",
            "module_id": "mod-p2",
            "learning_path_id": "path-post-harvest",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul P-2: Ekologi Fermentasi & Pengendalian Mikroba",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-p3",
            "module_id": "mod-p3",
            "learning_path_id": "path-post-harvest",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul P-3: Proses Basah (Washed) & Manajemen Limbah Air",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-p4",
            "module_id": "mod-p4",
            "learning_path_id": "path-post-harvest",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul P-4: Honey Process & Natural / Dry Kontrol",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-p5",
            "module_id": "mod-p5",
            "learning_path_id": "path-post-harvest",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul P-5: Kinetika Pengeringan (Drying) & Stabilisasi Air",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-p-final",
            "module_id": "mod-p6",
            "learning_path_id": "path-post-harvest",
            "quiz_scope": "final_exam",
            "title": "Ujian Akhir Sertifikasi Post-Harvest Specialist",
            "description": "Ujian komprehensif 15 soal mencakup genetika tanaman, refraktometri Brix, mikrobiologi fermentasi, kinetika pengeringan, dan preservasi reposo.",
            "passing_score": 80,
            "time_limit_minutes": 30,
            "max_attempts": 3,
            "created_at": "2026-08-10T00:00:00Z",
        },
    ]

def get_post_harvest_module_questions():
    pattern = [1, 3, 0, 2, 1, 3, 2, 0, 1, 2, 0, 3, 1, 0, 2]
    raw = [
        # quiz-p1
        {
            "id": "q-p1-1", "quiz_id": "quiz-p1", "order_index": 1,
            "text": "Alat optik portabel apakah yang digunakan oleh agronom dan prosesor kopi di kebun untuk mengukur kadar gula terlarut (°Brix) cairan lendir ceri?",
            "correct": "Refraktometer Brix optik atau digital genggam",
            "wrong": ["TDS Meter konduktivitas air", "pH Meter elektroda gelas", "Anemometer kecepatan angin"],
            "exp": "Refraktometer mengukur indeks bias cairan mesocarp buah kopi; pembacaan °Brix mencerminkan konsentrasi sukrosa dan gula sederhana buah."
        },
        {
            "id": "q-p1-2", "quiz_id": "quiz-p1", "order_index": 2,
            "text": "Berapakah kadar gula lendir ceri minimum (°Brix) buah kopi merah ranum sempurna yang ditargetkan untuk lot specialty kompetisi?",
            "correct": "Minimal 18° hingga 24° Brix",
            "wrong": ["5° hingga 8° Brix", "35° hingga 45° Brix", "50° hingga 60° Brix"],
            "exp": "Ceri kopi yang matang sempurna fisiologisnya memiliki kadar gula lendir di kisaran 18-24° Brix, memberikan substrat optimal untuk fermentasi aromatik."
        },
        {
            "id": "q-p1-3", "quiz_id": "quiz-p1", "order_index": 3,
            "text": "Lapisan buah kopi yang berada tepat di bawah kulit luar (exocarp) dan kaya akan senyawa gula serta protopektin adalah?",
            "correct": "Mesocarp (lapisan lendir / mucilage)",
            "wrong": ["Endocarp (kulit tanduk / parchment)", "Spermoderm (kulit ari / silverskin)", "Endosperm (embrio biji kopi)"],
            "exp": "Mesocarp adalah lapisan berdaging kaya gula dan pektin yang menjadi bahan bakar mikroorganisme saat proses fermentasi."
        },
        # quiz-p2
        {
            "id": "q-p2-1", "quiz_id": "quiz-p2", "order_index": 1,
            "text": "Kelompok mikroorganisme manakah yang berperan dominan memproduksi profil rasa creamy, bulat, dan asam laktat lembut pada fermentasi anaerobik tertutup?",
            "correct": "Bakteri Asam Laktat (Lactic Acid Bacteria / LAB seperti Leuconostoc dan Lactobacillus)",
            "wrong": ["Jamur kapang Aspergillus niger penghasil mikotoksin", "Bakteri pembusuk Clostridium botulinum", "Kutu bubuk buah Hypothenemus hampei"],
            "exp": "Bakteri Asam Laktat memfermentasi gula ceri dalam kondisi anaerobik tanpa oksigen, menghasilkan asam laktat yang memberikan mouthfeel lembut dan bodi velvety."
        },
        {
            "id": "q-p2-2", "quiz_id": "quiz-p2", "order_index": 2,
            "text": "Pada proses fermentasi basah terkontrol, batas pH kritis di mana fermentasi wajib segera dihentikan guna mencegah cacat cuka busuk (vinegar defect) adalah?",
            "correct": "pH 4.0 hingga 3.8",
            "wrong": ["pH 6.5 hingga 7.0 (netral)", "pH 2.0 (sangat asam)", "pH 9.0 (basa kuat)"],
            "exp": "Jika pH turun di bawah 3.8, bakteri asam asetat dan fermentasi liar mulai mendominasi, memproduksi asam asetat berlebih dan etil asetat beraroma lem kuteks."
        },
        {
            "id": "q-p2-3", "quiz_id": "quiz-p2", "order_index": 3,
            "text": "Tujuan utama inokulasi ragi kultur murni (seperti Saccharomyces cerevisiae strain kopi) ke dalam tangki fermentasi ceri adalah?",
            "correct": "Mendominasi ekologi mikroba liar dan mengarahkan pembentukan ester aromatik buah bunga yang konsisten dan terprediksi",
            "wrong": ["Membuat biji kopi mengandung alkohol tinggi seperti anggur", "Membunuh seluruh sel embrio biji kopi", "Mengeringkan biji kopi seketika di dalam tangki air"],
            "exp": "Kultur ragi murni memastikan fermentasi berlangsung terkontrol dan seragam (reproducible), menghasilkan prekursor ester aroma buah tanpa risiko kontaminasi mikroba liar."
        },
        # quiz-p3
        {
            "id": "q-p3-1", "quiz_id": "quiz-p3", "order_index": 1,
            "text": "Tahap awal pemrosesan basah di mana ceri yang rusak/berlubang serangga dipisahkan melalui daya apung di bak air disebut?",
            "correct": "Flotation / Perambangan air (memisahkan floaters dari sinkers)",
            "wrong": ["Hulling kering", "Polishing mekanis", "Threshing angin"],
            "exp": "Buah ceri bernas dan padat akan tenggelam (sinkers), sementara buah rusak, kosong, atau terserang hama bubuk mengapung (floaters) dan wajib disingkirkan dari lot specialty."
        },
        {
            "id": "q-p3-2", "quiz_id": "quiz-p3", "order_index": 2,
            "text": "Mesin yang berfungsi mengupas kulit luar buah ceri (pulping) tanpa memotong biji kopi berkulit tanduk disebut?",
            "correct": "Pulper (Disc Pulper atau Drum Pulper)",
            "wrong": ["Hullers kering", "Destoner pemisah batu", "Gravity table vibrator"],
            "exp": "Pulper memisahkan kulit luar (exocarp) dari biji berkulit tanduk yang masih berselimut lendir dengan memanfaatkan celah mekanis berpresisi."
        },
        {
            "id": "q-p3-3", "quiz_id": "quiz-p3", "order_index": 3,
            "text": "Mengapa air limbah bekas cucian kopi proses basah (coffee wastewater) wajib diolah melalui instalasi IPAL sebelum dialirkan ke sungai?",
            "correct": "Air limbah mengandung beban COD dan BOD yang sangat tinggi serta pH asam yang menyerap oksigen terlarut dan membunuh biota sungai",
            "wrong": ["Karena air limbah kopi mengandung gas beracun sianida", "Karena air limbah kopi dapat merusak tanaman kopi di kebun", "Semata-mata untuk menghemat pemakaian air PAM"],
            "exp": "Mucilage terlarut mengonsumsi oksigen terlarut di perairan secara masif (Biological Oxygen Demand tinggi), sehingga netralisasi dan fitoremediasi kolam anaerob/aerob mutlak diwajibkan."
        },
        # quiz-p4
        {
            "id": "q-p4-1", "quiz_id": "quiz-p4", "order_index": 1,
            "text": "Apa perbedaan teknis mendasar antara Yellow Honey, Red Honey, dan Black Honey pada proses olah pascapanen?",
            "correct": "Persentase lendir mucilage yang disisakan pada kulit tanduk dan intensitas keteduhan/kecepatan pengeringan di para-para jemur",
            "wrong": ["Jenis pewarna makanan yang dicampurkan pada biji kopi", "Tingkat kematangan pohon kopi saat panen buah", "Varietas biji kopi yang digunakan"],
            "exp": "Yellow Honey menyisakan sedikit lendir (~25%) dan dijemur cepat di bawah terik matahari, sedangkan Black Honey menyisakan 100% lendir dan dikeringkan sangat lambat di tempat teduh (slow shade drying)."
        },
        {
            "id": "q-p4-2", "quiz_id": "quiz-p4", "order_index": 2,
            "text": "Pada proses Natural (Dry Process), mengapa ketebalan tumpukan buah ceri di para-para raised beds harus dijaga tipis (1 lapis buah) pada 3 hari pertama?",
            "correct": "Mencegah akumulasi kelembapan yang memicu pertumbuhan jamur kapang mikotoksin (Aspergillus ochraceus) dan fermentasi busuk",
            "wrong": ["Agar buah kopi tidak dimakan burung liar", "Untuk mempercepat kulit buah kopi meleleh menjadi minyak", "Agar warna buah kopi berubah menjadi hijau"],
            "exp": "Penjemuran tipis satu lapis di awal memungkinkan sirkulasi angin bebas mengeringkan kelembapan permukaan secara cepat sebelum kapang perusak sempat berkecambah."
        },
        {
            "id": "q-p4-3", "quiz_id": "quiz-p4", "order_index": 3,
            "text": "Berapa frekuensi pembalikan ceri kopi di para-para penjemuran yang disyaratkan selama fase awal proses Natural terkontrol?",
            "correct": "Minimal 6 hingga 10 kali sehari setiap jam secara teratur",
            "wrong": ["Cukup 1 kali seminggu", "1 kali tepat sebelum matahari terbenam", "Tidak boleh dibalik sama sekali"],
            "exp": "Pembalikan teratur setiap jam menjamin paparan sinar matahari dan aliran angin merata ke seluruh sisi buah, mencegah pembentukan sisi lembap yang rawan fermentasi anaerobik liar."
        },
        # quiz-p5
        {
            "id": "q-p5-1", "quiz_id": "quiz-p5", "order_index": 1,
            "text": "Berapakah target kadar air akhir (Moisture Content) green bean kopi yang aman menurut standar internasional International Coffee Organization (ICO)?",
            "correct": "10.0% hingga 12.0%",
            "wrong": ["5.0% hingga 7.0%", "15.0% hingga 18.0%", "22.0% hingga 25.0%"],
            "exp": "Di atas 12.5% green bean sangat rentan berjamur dan menumbuhkan Ochratoxin A; di bawah 9.5% biji kopi rapuh, kehilangan struktur kimia rasa, dan cepat mengalami penuaan (aged)."
        },
        {
            "id": "q-p5-2", "quiz_id": "quiz-p5", "order_index": 2,
            "text": "Apa fungsi tahap 'Resting' (Reposo) biji kopi dalam kulit tanduk (parchment) di gudang bersuhu stabil selama 30-60 hari sebelum di-hulling?",
            "correct": "Menstabilkan aktivitas air (Aw), meratakan kadar air antar sel biji, dan mematangkan senyawa kimia prekursor rasa",
            "wrong": ["Menunggu harga pasar kopi dunia mengalami kenaikan", "Membiarkan kulit tanduk lapuk dimakan rayap", "Menguapkan seluruh sisa kafein keluar dari biji"],
            "exp": "Reposo menyeimbangkan kadar air antara bagian luar dan inti biji (moisture equilibrium), mengunci stabilitas Water Activity, dan mencegah degradasi rasa cepat saat dikirim."
        },
        {
            "id": "q-p5-3", "quiz_id": "quiz-p5", "order_index": 3,
            "text": "Kantong kemasan multi-lapis khusus apakah yang menggunakan teknologi penghalang oksigen dan uap air tinggi untuk melindungi green bean selama pengiriman ekspor?",
            "correct": "Kantong plastik hermetik (seperti GrainPro atau Ecotact)",
            "wrong": ["Karung goni rami berpori terbuka biasa tanpa pelapis", "Kardus kertas karton tipis berlubang", "Karung jaring ikan nilon"],
            "exp": "Kemasan hermetik menciptakan atmosfer termodifikasi yang menahan kelembapan stabil di 11% dan mencegah masuknya oksigen dan bau asing selama pelayaran kontainer."
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

print("Post-Harvest data provider ready.")
