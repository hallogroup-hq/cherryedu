import re
import os

print("Starting expansion script for specialization paths...")

def clean_latex(text):
    # Specific replacements
    # Flavor perception equation
    text = re.sub(
        r'\$\$\\text\{Flavor\}\s*=\s*\\text\{Taste \(Lidah\)\}\s*\+\s*\\text\{Aroma \(Epitel Olfaktori\)\}\s*\+\s*\\text\{Mouthfeel \(Saraf Trigeminal\)\}\$\$',
        '> ☕ **Persamaan Persepsi Rasa (SCA Flavor Science):**\\n> **Flavor** = **Taste (Pengecapan Lidah)** + **Aroma (Epitel Olfaktori Retronasal)** + **Mouthfeel (Saraf Trigeminal Taktil)**',
        text
    )
    # Rasio SCA equation
    text = re.sub(
        r'\$\$\\text\{Rasio SCA\}\s*=\s*8\.25\\text\{ gram\}.*?\$\$',
        '> ☕ **Standar Rasio Cupping SCA:**\\n> **Rasio Emas** = **8.25 gram (± 0.25g) Bubuk Kopi** per **150 ml Air Seduh Bersih** (Rasio 1:18.18)',
        text
    )
    # Total score SCA
    text = re.sub(
        r'\$\$\\text\{Total Score\}\s*=\s*\\sum_\{i=1\}\^\{10\}.*?\$\$',
        '> ☕ **Formula Total Skor Cupping SCA:**\\n> **Total Score** = **Jumlah 10 Atribut Poin (Maks. 100)** − **Total Pengurangan Cacat (Defect Deductions)**',
        text
    )
    # Defect deduction
    text = re.sub(
        r'\$\$\\text\{Total Defect Deduction\}\s*=\s*\(.*?Jumlah Cangkir Fault.*?\$\$',
        '> ☕ **Kalkulasi Pengurangan Skor Cacat:**\\n> **Total Pengurangan Cacat** = **(Jumlah Cangkir Taint × 2 Poin)** + **(Jumlah Cangkir Fault × 4 Poin)**',
        text
    )
    # Moisture Content
    text = re.sub(
        r'\$\$\\text\{Moisture Content.*?\$\$',
        '> ☕ **Formula Kadar Air (Moisture Content):**\\n> **Moisture Content (%)** = **(Massa Air dalam Biji ÷ Massa Green Bean Total) × 100%**',
        text
    )
    # Density
    text = re.sub(
        r'\$\$\\text\{Densitas\}.*?\$\$',
        '> ☕ **Formula Kerapatan Green Bean:**\\n> **Densitas (g/L)** = **Berat Green Bean dalam Wadah 1 Liter (gram) ÷ 1.0 Liter**',
        text
    )
    # Heat transfer
    text = re.sub(
        r'\$\$Q_\\text\{cond\}\s*=\s*-k A.*?\$\$',
        '> ☕ **Hukum Perpindahan Panas Konduksi (Fourier):**\\n> **Laju Kalor Konduksi (Q_cond)** = **−k × A × (ΔT ÷ Δx)**\\n> *(k = Konduktivitas Termal Drum Baja, A = Luas Kontak Drum, ΔT = Perbedaan Suhu Dinding ke Biji)*',
        text
    )
    text = re.sub(
        r'\$\$Q_\\text\{conv\}\s*=\s*h A.*?\$\$',
        '> ☕ **Hukum Perpindahan Panas Konveksi (Newton):**\\n> **Laju Kalor Konveksi (Q_conv)** = **h × A × (Suhu Udara Panas − Suhu Permukaan Biji)**\\n> *(h = Koefisien Perpindahan Panas Aliran Udara Airflow)*',
        text
    )
    text = re.sub(
        r'\$\$Q_\\text\{rad\}\s*=\s*\\epsilon.*?\$\$',
        '> ☕ **Hukum Radiasi Termal (Stefan-Boltzmann):**\\n> **Laju Kalor Radiasi (Q_rad)** = **ε × σ × A × (T_dinding⁴ − T_biji⁴)**\\n> *(Perpindahan panas tanpa perantara dari logam drum merah membara)*',
        text
    )
    # RPM
    text = re.sub(
        r'> \$\$\\text\{RPM\}.*?\$\$',
        '> ☕ **Pedoman Kecepatan Putar Drum (RPM):**\\n> **RPM Drum Ideal** ≈ **40 ÷ Akar Kuadrat Diameter Drum (meter)**',
        text
    )
    # RoR
    text = re.sub(
        r'\$\$\\text\{RoR\}\s*=\s*\\frac\{\\Delta T_\\text\{Bean\}\}.*?\$\$',
        '> ☕ **Formula Rate of Rise (Laju Kenaikan Suhu):**\\n> **RoR** = **Δ Suhu Biji Kopi (°C) ÷ Δ Waktu (Menit)**',
        text
    )
    # DTR
    text = re.sub(
        r'\$\$\\text\{DTR \(\\\%\)\}\s*=\s*\\frac\{\\text\{Development Time\}\}.*?\$\$',
        '> ☕ **Formula Development Time Ratio (DTR %):**\\n> **DTR (%)** = **(Waktu Development Pasca First Crack ÷ Total Waktu Sangrai) × 100%**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{DTR\}\s*=\s*\\frac\{100\}\{600\}.*?\$\$',
        '> **Perhitungan**: DTR = (100 detik ÷ 600 detik total) × 100% = **16.66% (Masuk rentang ideal 12–18%)**',
        text
    )
    # Weight loss
    text = re.sub(
        r'\$\$\\text\{Weight Loss \(\\\%\)\}\s*=\s*\\frac\{.*?\}\{.*?\}\s*\\times 100\$\$',
        '> ☕ **Formula Susut Bobot (Weight Loss %):**\\n> **Weight Loss (%)** = **[(Berat Green Bean − Berat Roasted Bean) ÷ Berat Green Bean] × 100%**',
        text
    )
    # Brix in postHarvest
    text = re.sub(
        r'\$\$1\^\\circ\\text\{ Brix\}\s*=\s*1\\text\{ gram sukrosa.*?\$\$',
        '> ☕ **Definisi Skala Brix:**\\n> **1° Brix** = **1.0 gram sukrosa murni terlarut per 100 gram larutan cairan jus ceri**',
        text
    )
    # BEP formulas
    text = re.sub(
        r'\$\$\\text\{BEP \(Unit Cup Bulanan\)\}\s*=\s*\\frac\{.*?\}\{.*?\}\$\$',
        '> ☕ **Formula Titik Impas (Break-Even Point / BEP Bulanan):**\\n> **BEP (Unit Cup/Bulan)** = **Total Biaya Tetap (Fixed Costs) ÷ (Harga Jual Rata-rata per Cup − HPP Variabel per Cup)**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{BEP Harian\}\s*=\s*\\frac\{\\text\{BEP Bulanan\}\}\{30\\text\{ hari\}\}\$\$',
        '> ☕ **Formula Target Penjualan Harian Minimum:**\\n> **BEP Harian (Cup/Hari)** = **Target BEP Bulanan ÷ 30 Hari Operasional**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{BEP Bulanan\}\s*=\s*\\frac\{Rp\\ 23\.000\.000\}\{Rp\\ 16\.000\}.*?\$\$',
        '> **Perhitungan Bulanan**: Rp 23.000.000 ÷ Rp 16.000 margin kotor = **1.438 cup per bulan**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{BEP Harian\}\s*=\s*\\frac\{1\.438\}\{30\}.*?\$\$',
        '> **Perhitungan Harian**: 1.438 cup ÷ 30 hari = **48 cup per hari** untuk mencapai titik impas operasional.',
        text
    )
    # Harga Jual Ideal & Menu Online
    text = re.sub(
        r'\$\$\\text\{Harga Jual Ideal\}\s*=\s*\\frac\{\\text\{HPP\}\}\{0\.35\}.*?\$\$',
        '> ☕ **Formula Penetapan Harga Jual Berbasis Food Cost 35%:**\\n> **Harga Jual Ideal** = **HPP per Porsi ÷ 0.35** = Rp 9.500 ÷ 0.35 = **Rp 28.000 (Dibulatkan)**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{Harga Menu Online\}\s*=\s*\\frac\{\\text\{Harga Kasir Target\}\}\{1 - C\}\$\$',
        '> ☕ **Formula Penyesuaian Harga Menu Delivery Online:**\\n> **Harga Menu Online** = **Harga Jual Kasir Target ÷ (1 − Persentase Komisi Platform C)**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{Harga Menu Online\}\s*=\s*\\frac\{Rp\\ 24\.000\}\{1 - 0\.20\}.*?\$\$',
        '> **Perhitungan Markup Online**: Rp 24.000 ÷ (1 − 0.20) = Rp 24.000 ÷ 0.80 = **Rp 30.000 di aplikasi Grab/GoFood**',
        text
    )
    # Scale in seedData
    text = re.sub(
        r'\$\$Ca\^\{2\+\} \+ 2HCO_3\^-\s*\\\\xrightarrow\{\\\\Delta\}\s*\\\\mathbf\{CaCO_3\s*\\\\downarrow\}\s*\+\s*H_2O\s*\+\s*CO_2\$\$',
        '> ⚗️ **Reaksi Pengendapan Kerak Kalsium Karbonat:**\\n> **Ca²⁺ + 2HCO₃⁻ + Panas (Δ) → CaCO₃ (Kerak Padat Mengendap) + H₂O + CO₂**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{Total Air\}\s*=\s*40\\%\s*\\text\{.*?\}\s*\+\s*60\\%\s*\\text\{.*?\}\$\$',
        '> ☕ **Rasio Pembagian Air Metode 4:6 Tetsu Kasuya:**\\n> **Total Air Seduh** = **40% (Pengatur Keseimbangan Asam-Manis)** + **60% (Pengatur Kekuatan & Bodi Cangkir)**',
        text
    )
    text = re.sub(
        r'\$\$\\text\{Target Food Cost Percentage\}\s*=\s*\\frac\{.*?\}\{.*?\}\s*\\times 100\\%\s*=\s*30\.1\\%\$\$',
        '> ☕ **Kalkulasi Food Cost Percentage:**\\n> **Food Cost %** = **(HPP Rp 10.560 ÷ Harga Jual Rp 35.000) × 100% = 30.1% (Ideal di Bawah 35%)**',
        text
    )
    # Generic catch-all for any remaining $$
    text = re.sub(r'\$\$([\s\S]*?)\$\$', r'> ☕ **Persamaan Parameter:**\n> **\1**', text)
    return text

# Process files
files_to_clean = [
    'lib/data/paths/qGraderData.ts',
    'lib/data/paths/roasterData.ts',
    'lib/data/paths/postHarvestData.ts',
    'lib/data/paths/coffeeBusinessData.ts',
    'lib/data/paths/homeBrewerData.ts',
    'lib/data/seedData.ts'
]

for fp in files_to_clean:
    if os.path.exists(fp):
        with open(fp, 'r') as f:
            c = f.read()
        cleaned = clean_latex(c)
        with open(fp, 'w') as f:
            f.write(cleaned)
        print(f"Cleaned LaTeX in {fp}")

print("All files cleaned of raw LaTeX equations.")
