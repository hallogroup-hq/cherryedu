import re
import os

print("=== Starting Upgrade of All Specialization Paths ===")

# 1. Clean LaTeX utility
def sanitize_latex_thorough(content):
    # Specific known LaTeX strings
    replacements = [
        (r'\text{Flavor}', 'Flavor'),
        (r'\text{Taste (Lidah)}', 'Taste (Lidah)'),
        (r'\text{Aroma (Epitel Olfaktori)}', 'Aroma (Epitel Olfaktori)'),
        (r'\text{Mouthfeel (Saraf Trigeminal)}', 'Mouthfeel (Saraf Trigeminal)'),
        (r'\text{Rasio SCA}', 'Rasio SCA'),
        (r'\text{Total Score}', 'Total Score'),
        (r'\text{Total Defect Deduction}', 'Total Pengurangan Cacat'),
        (r'\text{Moisture Content (\%)}', 'Kadar Air (%)'),
        (r'\text{Massa Air}', 'Massa Air'),
        (r'\text{Massa Biji Kopi Total}', 'Massa Biji Kopi Total'),
        (r'\text{Densitas}', 'Densitas'),
        (r'\text{Berat Green Bean dalam Gelas Ukur (gram)}', 'Berat Green Bean (gram)'),
        (r'\text{Volume Gelas Ukur (1 Liter)}', 'Volume Wadah (1 Liter)'),
        (r'\text{RoR}', 'RoR'),
        (r'\text{DTR (\%)}', 'DTR (%)'),
        (r'\text{DTR}', 'DTR'),
        (r'\text{Development Time}', 'Waktu Development'),
        (r'\text{Total Roasting Time}', 'Total Waktu Roasting'),
        (r'\text{Weight Loss (\%)}', 'Susut Bobot (%)'),
        (r'\text{Berat Green Bean}', 'Berat Green Bean'),
        (r'\text{Berat Roasted Bean}', 'Berat Roasted Bean'),
        (r'\text{BEP (Unit Cup Bulanan)}', 'BEP Bulanan (Cup)'),
        (r'\text{BEP Harian}', 'BEP Harian (Cup)'),
        (r'\text{Total Biaya Tetap Bulanan (Fixed Costs)}', 'Total Biaya Tetap Bulanan'),
        (r'\text{Harga Jual Rata-rata per Cup}', 'Harga Jual Rata-rata per Cup'),
        (r'\text{Biaya Variabel per Cup (HPP)}', 'HPP Variabel per Cup'),
        (r'\text{BEP Bulanan}', 'BEP Bulanan'),
        (r'\text{Harga Jual Ideal}', 'Harga Jual Ideal'),
        (r'\text{HPP}', 'HPP'),
        (r'\text{Harga Menu Online}', 'Harga Menu Online'),
        (r'\text{Harga Kasir Target}', 'Harga Kasir Target'),
        (r'\text{Target Food Cost Percentage}', 'Target Food Cost %'),
        (r'\text{Total Air}', 'Total Air Seduh'),
        (r'\text{ (Rasa Manis & Asam)}', ' (Rasa Manis & Asam)'),
        (r'\text{ (Kekuatan & Bodi)}', ' (Kekuatan & Bodi)'),
        (r'\text{hari}', 'hari'),
        (r'\text{cup / bulan}', 'cup/bulan'),
        (r'\text{cup / hari}', 'cup/hari'),
        (r'\text{Brix}', 'Brix'),
        (r'\text{gram}', 'gram'),
        (r'\text{ml}', 'ml'),
        (r'\text{mdpl}', 'mdpl'),
        (r'\text{Bean}', 'Bean'),
        (r'\text{cond}', 'cond'),
        (r'\text{conv}', 'conv'),
        (r'\text{rad}', 'rad'),
        (r'\times', '×'),
        (r'\approx', '≈'),
        (r'\Delta', 'Δ'),
        (r'\mu m', 'µm'),
        (r'\circ', '°'),
        (r'\pm', '±'),
        (r'\%', '%'),
        (r'\quad', ' '),
        (r'\,', ' '),
        (r'\;', ' '),
        (r'\mathbf', ''),
        (r'\sum_{i=1}^{10}', 'Total 10 Atribut'),
        (r'$a_w$', 'Aw'),
        (r'$Aw$', 'Aw'),
        (r'$0.00$', '0.00'),
        (r'$1.00$', '1.00'),
        (r'$0.50 - 0.60\ a_w$', '0.50 – 0.60 Aw'),
        (r'$a_w > 0.65$', 'Aw > 0.65'),
        (r'$0.53 - 0.58$', '0.53 – 0.58 Aw'),
        (r'$> 720\ g/L$', '> 720 g/L'),
        (r'$660 - 720\ g/L$', '660 – 720 g/L'),
        (r'$< 650\ g/L$', '< 650 g/L'),
        (r'$> 1.500\text{ mdpl}$', '> 1.500 mdpl'),
        (r'$1.100 - 1.400\text{ mdpl}$', '1.100 – 1.400 mdpl'),
        (r'$< 1.000\text{ mdpl}$', '< 1.000 mdpl'),
        (r'$g/L$', 'g/L'),
        (r'$T_s - T_\infty$', '(Suhu Permukaan − Suhu Udara)'),
        (r'$T_1^4 - T_2^4$', '(T1⁴ − T2⁴)'),
        (r'\epsilon \sigma A', 'ε × σ × A'),
        (r'\\', ''),
    ]
    for old, new in replacements:
        content = content.replace(old, new)
    
    # Clean \frac{a}{b}
    content = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'(\1 ÷ \2)', content)
    # Clean any remaining \text{...}
    content = re.sub(r'\\text\{([^}]+)\}', r'\1', content)
    # Clean any remaining $...$
    content = re.sub(r'\$([^$]+)\$', r'\1', content)
    # Clean any remaining $$...$$
    content = re.sub(r'\$\$([\s\S]*?)\$\$', r'\n> ☕ **Formula Parameter:**\n> **\1**\n', content)
    return content

print("Sanitization function ready.")
