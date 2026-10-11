# -*- coding: utf-8 -*-
from curriculum_helpers import rotate_options

def get_q_grader_module_quizzes():
    return [
        {
            "id": "quiz-q1",
            "module_id": "mod-q1",
            "learning_path_id": "path-q-grader",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul Q-1: Fisiologi Sensorik & Larutan Olfaktori",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-q2",
            "module_id": "mod-q2",
            "learning_path_id": "path-q-grader",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul Q-2: Protokol Cupping Standar SCA",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-q3",
            "module_id": "mod-q3",
            "learning_path_id": "path-q-grader",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul Q-3: Analisis Defek Biji Hijau SCA",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-q4",
            "module_id": "mod-q4",
            "learning_path_id": "path-q-grader",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul Q-4: Uji Triangulasi & Diskriminasi Sensorik",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-q5",
            "module_id": "mod-q5",
            "learning_path_id": "path-q-grader",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul Q-5: Identifikasi Asam Organik & Kalibrasi Nilai",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-q-final",
            "module_id": "mod-q6",
            "learning_path_id": "path-q-grader",
            "quiz_scope": "final_exam",
            "title": "Ujian Akhir Sertifikasi Q Grader Specialist",
            "description": "Ujian komprehensif 15 soal mencakup fisiologi rasa, protokol cupping SCA, identifikasi cacat green bean, triangulasi, dan pemetaan asam organik.",
            "passing_score": 80,
            "time_limit_minutes": 30,
            "max_attempts": 3,
            "created_at": "2026-08-10T00:00:00Z",
        },
    ]

def get_q_grader_module_questions():
    pattern = [2, 0, 3, 1, 0, 2, 3, 1, 2, 0, 1, 3, 0, 2, 1]
    raw = [
        # quiz-q1
        {
            "id": "q-q1-1", "quiz_id": "quiz-q1", "order_index": 1,
            "text": "Mekanisme pengantaran molekul volatil aroma saat kopi diseruput dan dihembuskan lewat faring ke epitel hidung disebut?",
            "correct": "Olfaksi Retronasal (Retronasal Olfaction)",
            "wrong": ["Olfaksi Ortronasal (Orthonasal Olfaction)", "Transduksi Gustatori Lidah", "Persepsi Trigeminal Somatosensori"],
            "exp": "Olfaksi retronasal adalah rute utama di mana uap volatil dari rongga mulut bergerak naik ke rongga hidung posterior saat menelan atau menyeruput kopi, menciptakan persepsi 'flavor'."
        },
        {
            "id": "q-q1-2", "quiz_id": "quiz-q1", "order_index": 2,
            "text": "Lima modalitas rasa dasar (basic tastes) yang dapat dideteksi secara biologis oleh kuncup pengecap (taste buds) lidah manusia adalah?",
            "correct": "Manis, Asam, Asin, Pahit, dan Umami",
            "wrong": ["Manis, Asam, Pahit, Pedas, dan Kelat", "Asam, Sepat, Gurih, Dingin, dan Asin", "Fruity, Floral, Nutty, Roasty, dan Spices"],
            "exp": "Pedas dan kelat (astringency) adalah stimulasi somatosensori saraf trigeminal, bukan rasa dasar. Lima rasa dasar yang memiliki reseptor seluler terverifikasi adalah manis, asam, asin, pahit, dan umami."
        },
        {
            "id": "q-q1-3", "quiz_id": "quiz-q1", "order_index": 3,
            "text": "Kondisi patofisiologis hilangnya kemampuan indra penciuman mendeteksi molekul aroma secara total disebut?",
            "correct": "Anosmia",
            "wrong": ["Ageusia", "Disgeusia", "Presbiopia"],
            "exp": "Anosmia adalah hilangnya indra penciuman total, sedangkan ageusia adalah hilangnya sensasi rasa lidah. Kehilangan penciuman melenyapkan 80% persepsi kompleksitas kopi."
        },
        # quiz-q2
        {
            "id": "q-q2-1", "quiz_id": "quiz-q2", "order_index": 1,
            "text": "Berapakah rasio baku standar Specialty Coffee Association (SCA) untuk bubuk kopi terhadap air seduh pada mangkuk cupping?",
            "correct": "8.25 gram kopi per 150 ml air (atau rasio 0.055 g/ml)",
            "wrong": ["15 gram kopi per 150 ml air", "5 gram kopi per 250 ml air", "10 gram kopi per 100 ml air"],
            "exp": "Standar SCA menetapkan toleransi 8.25 g kopi (± 0.25 g) per 150 ml air bersuhu 93°C untuk memastikan rasio ekstraksi cupping seragam secara global."
        },
        {
            "id": "q-q2-2", "quiz_id": "quiz-q2", "order_index": 2,
            "text": "Ukuran partikel gilingan cupping standar SCA harus memenuhi spesifikasi ayakan laboratorium nomor berapa?",
            "correct": "70% hingga 75% partikel lolos pada ayakan US Standard Sieve No. 20 (sekitar 850 mikron)",
            "wrong": ["100% lolos pada ayakan tepung halus No. 100 (150 mikron)", "50% lolos pada ayakan kasar batu kerikil No. 4", "Partikel berukuran sama dengan garam kasar meja dapur"],
            "exp": "Ukuran gilingan cupping berada di rentang medium-coarse di mana 70-75% lolos saringan No. 20 untuk membatasi over-ekstraksi selama proses perendaman 15-20 menit di mangkuk."
        },
        {
            "id": "q-q2-3", "quiz_id": "quiz-q2", "order_index": 3,
            "text": "Berapa jumlah mangkuk cupping per sampel lot yang wajib disiapkan pada sesi evaluasi resmi sertifikasi SCA/CQI?",
            "correct": "5 cangkir per sampel lot untuk menguji keseragaman (Uniformity) dan kebersihan (Clean Cup)",
            "wrong": ["1 cangkir besar saja untuk menghemat sampel", "2 cangkir (satu panas dan satu dingin)", "10 cangkir kecil bertingkat"],
            "exp": "Aturan 5 cangkir memungkinkan penilai mendeteksi cacat tersembunyi (seperti satu cangkir bau kapang atau ferment) dan memberikan nilai numerik pada atribut Uniformity dan Clean Cup."
        },
        # quiz-q3
        {
            "id": "q-q3-1", "quiz_id": "quiz-q3", "order_index": 1,
            "text": "Berapa gram berat sampel green bean yang wajib dianalisis dalam uji klasifikasi defek fisik standar SCA Green Coffee Grading?",
            "correct": "350 gram sampel biji kopi hijau",
            "wrong": ["100 gram sampel", "500 gram sampel", "1.000 gram (1 kilogram)"],
            "exp": "Protokol klasifikasi biji hijau SCA menggunakan sampel representatif seberat 350 gram untuk menghitung jumlah defek primer dan sekunder."
        },
        {
            "id": "q-q3-2", "quiz_id": "quiz-q3", "order_index": 2,
            "text": "Cacat fisik biji kopi hijau manakah yang digolongkan sebagai Kategori 1 (Primary Defect) yang mutlak tidak boleh ada (0 defek) pada Specialty Grade?",
            "correct": "Full Black (Biji Hitam Penuh), Full Sour (Biji Asam Busuk Penuh), dan Jamur Kapang (Fungus Damage)",
            "wrong": ["Slight Insect Damage (Lubang Serangga Kecil)", "Broken/Chipped (Biji Pecah Sedikit)", "Biji Mengkerut (Immature Bean)"],
            "exp": "Primary defect (Kategori 1) seperti Full Black, Full Sour, Jamur, dan Benda Asing merusak rasa cangkir secara ekstrem dan mutlak tidak ditoleransi pada Specialty Grade."
        },
        {
            "id": "q-q3-3", "quiz_id": "quiz-q3", "order_index": 3,
            "text": "Berapakah batas toleransi maksimal jumlah setara cacat sekunder (Secondary Defects / Category 2) pada sampel 350 gram untuk lolos Specialty Grade?",
            "correct": "Maksimal 5 full defect setara (tanpa ada 1 pun defek Kategori 1)",
            "wrong": ["Maksimal 15 full defect", "Maksimal 25 full defect", "Bebas berapapun asalkan ukurannya seragam"],
            "exp": "Standar Specialty Grade mengizinkan maksimal 5 nilai defek sekunder (misalnya akumulasi biji pecah, berlubang serangga kecil, atau berkulit tanduk) per 350 gram."
        },
        # quiz-q4
        {
            "id": "q-q4-1", "quiz_id": "quiz-q4", "order_index": 1,
            "text": "Dalam satu set uji diskriminasi sensorik Triangulasi standar CQI Q Grader, berapa jumlah cangkir yang disajikan di atas meja?",
            "correct": "3 cangkir dalam satu segitiga (2 cangkir sampel identik dan 1 cangkir sampel berbeda / odd cup)",
            "wrong": ["2 cangkir (satu manis dan satu pahit)", "4 cangkir dalam bentuk bujur sangkar", "5 cangkir berurutan"],
            "exp": "Uji triangulasi menyajikan 3 cangkir dengan kode buta; tugas evaluator adalah mengidentifikasi satu cangkir ganjil (odd sample) murni berdasarkan evaluasi sensorik."
        },
        {
            "id": "q-q4-2", "quiz_id": "quiz-q4", "order_index": 2,
            "text": "Mengapa ruang ujian triangulasi resmi CQI sering menggunakan pencahayaan lampu merah (Red Light)?",
            "correct": "Menghilangkan bias visual warna roasting atau kejernihan seduhan sehingga evaluator murni menggunakan indra penciuman dan pengecap",
            "wrong": ["Mencegah kopi mendingin terlalu cepat", "Membunuh bakteri patogen di udara meja cupping", "Memberikan suasana menenangkan bagi peserta ujian"],
            "exp": "Lampu merah menyamarkan perbedaan warna biji dan seduhan, meniadakan bias visual (visual cue) agar keputusan sepenuhnya objektif melalui olfaksi dan gustasi."
        },
        {
            "id": "q-q4-3", "quiz_id": "quiz-q4", "order_index": 3,
            "text": "Berapa probabilitas matematis acak murni (chance of guessing) untuk menebak benar pada satu set soal triangulasi tanpa mencicipi?",
            "correct": "33.3% (1 banding 3)",
            "wrong": ["50% (1 banding 2)", "25% (1 banding 4)", "10% (1 banding 10)"],
            "exp": "Karena terdapat 3 cangkir dengan 1 jawaban benar, probabilitas tebakan murni adalah 1/3 (33.3%). Ujian Q Grader menyajikan 24 set berturut-turut untuk membuktikan signifikansi statistik."
        },
        # quiz-q5
        {
            "id": "q-q5-1", "quiz_id": "quiz-q5", "order_index": 1,
            "text": "Asam organik alami pada kopi yang memberikan sensasi keasaman renyah, segar, dan mengingatkan pada buah apel hijau di lidah adalah?",
            "correct": "Asam Malat (Malic Acid)",
            "wrong": ["Asam Asetat (Acetic Acid)", "Asam Kuinat (Quinic Acid)", "Asam Butirat (Butyric Acid)"],
            "exp": "Asam malat memberikan sensasi keasaman renyah apel hijau dan anggur hijau; asam sitrat memberikan karakter jeruk, sedangkan asam asetat berkarakter cuka tajam."
        },
        {
            "id": "q-q5-2", "quiz_id": "quiz-q5", "order_index": 2,
            "text": "Karakter keasaman Asam Fosfat (Phosphoric Acid) yang umum ditemukan pada kopi Arabika Kenya pegunungan vulkanik adalah?",
            "correct": "Sensasi keasaman berkilau tajam (sparkling/effervescent) yang mengingatkan pada minuman soda cola",
            "wrong": ["Sensasi asam basi susu yang sudah rusak", "Sensasi asam asin seperti air laut", "Sensasi asam pahit seperti kulit jeruk gosong"],
            "exp": "Asam fosfat adalah asam anorganik yang diserap dari tanah vulkanis kaya fosfor, memberikan keasaman tajam menyegarkan yang memicu produksi air liur seketika."
        },
        {
            "id": "q-q5-3", "quiz_id": "quiz-q5", "order_index": 3,
            "text": "Berapakah skor agregat cupping minimum standar SCA agar lot kopi resmi diklasifikasikan sebagai Specialty Coffee?",
            "correct": "80.00 poin dari skala 100",
            "wrong": ["70.00 poin", "85.00 poin", "90.00 poin"],
            "exp": "Kopi dengan skor 80.00 - 84.99 berpredikat Very Good (Specialty), 85.00 - 89.99 berpredikat Excellent, dan 90.00 - 100.00 berpredikat Outstanding."
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

print("Q Grader data provider ready.")
