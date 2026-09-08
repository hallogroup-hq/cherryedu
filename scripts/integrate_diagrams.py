import re
import os

DIAGRAM_INJECTIONS = {
    'lib/data/seedData.ts': [
        ('les-f2-1', '[DIAGRAM:cherry-anatomy]', 'Anatomi Botani Tanaman & Buah Kopi'),
        ('les-f3-2', '[DIAGRAM:varieties-tree]', 'Silsilah Varietas Arabika Dunia'),
        ('les-f4-1', '[DIAGRAM:processing-comparison]', 'Olah Basah (Washed / Wet Process)'),
        ('les-f5-1', '[DIAGRAM:roast-curve]', 'Termodinamika Roasting'),
        ('les-f5-2', '[DIAGRAM:roast-curve]', 'Kimia Fase Sangrai'),
        ('les-f6-2', '[DIAGRAM:water-chemistry]', 'Parameter Kritis Air Standar SCA'),
        ('les-f6-3', '[DIAGRAM:water-chemistry]', 'Pertarungan Kation: Magnesium'),
        ('les-h3-1', '[DIAGRAM:brewing-control-chart]', 'Resep Standar V60: Rasio Emas')
    ],
    'lib/data/paths/baristaData.ts': [
        ('les-bar2-1', '[DIAGRAM:espresso-phases]', 'Ekstraksi Espresso Presisi'),
        ('les-bar2-2', '[DIAGRAM:espresso-phases]', 'Kalibrasi Micrometric Grinder'),
        ('les-bar3-1', '[DIAGRAM:milk-steaming-vortex]', 'Proses Steaming Susu Segar'),
        ('les-bar3-2', '[DIAGRAM:milk-steaming-vortex]', 'Pusaran Vortex Sempurna'),
        ('les-bar5-1', '[DIAGRAM:brewing-control-chart]', 'Stasiun Seduh Manual Multi-Dripper'),
        ('les-bar5-2', '[DIAGRAM:brewing-control-chart]', 'Pengujian Indeks Bias Cahaya')
    ],
    'lib/data/paths/roasterData.ts': [
        ('les-r2-1', '[DIAGRAM:roast-curve]', 'Konduksi, Konveksi, dan Radiasi'),
        ('les-r3-1', '[DIAGRAM:roast-curve]', 'Kinetika Kimiawi: Reaksi Maillard'),
        ('les-r4-1', '[DIAGRAM:roast-curve]', 'Charge Temperature, Turning Point')
    ],
    'lib/data/paths/postHarvestData.ts': [
        ('les-p1-1', '[DIAGRAM:cherry-anatomy]', 'Taksonomi Kopi: Genetika'),
        ('les-p1-2', '[DIAGRAM:varieties-tree]', 'Varietas Unggul Nusantara'),
        ('les-p3-1', '[DIAGRAM:cherry-anatomy]', 'Anatomi Buah Kopi & Protokol Panen'),
        ('les-p4-1', '[DIAGRAM:processing-comparison]', 'Bioproses Olah Basah')
    ],
    'lib/data/paths/homeBrewerData.ts': [
        ('les-h3-2', '[DIAGRAM:water-chemistry]', 'Uji Laboratorium Air Galon'),
        ('les-h4-2', '[DIAGRAM:brewing-control-chart]', 'Metode 4:6 Tetsu Kasuya'),
        ('les-h6-2', '[DIAGRAM:brewing-control-chart]', 'Dripper Flat-Bottom vs Cone')
    ]
}

def inject_diagrams():
    for filepath, injections in DIAGRAM_INJECTIONS.items():
        if not os.path.exists(filepath):
            continue
        content = open(filepath, 'r', encoding='utf-8').read()
        updated = 0
        for lid, diagram_tag, match_str in injections:
            if diagram_tag in content:
                # Check if this specific lesson already has it
                les_match = re.search(r'id:\s*[\'\"]' + lid + r'[\'\"].*?content:\s*`([^`]+)`', content, re.DOTALL)
                if les_match and diagram_tag in les_match.group(1):
                    continue
            
            # Find the lesson by ID and inject the diagram
            pattern = re.compile(r'(\{\s*id:\s*[\'\"]' + re.escape(lid) + r'[\'\"].*?content:\s*`)([^`]+)(`.*?\})', re.DOTALL)
            m = pattern.search(content)
            if m:
                prefix = m.group(1)
                body = m.group(2)
                suffix = m.group(3)
                
                # Check if diagram is already in body
                if diagram_tag not in body:
                    # Place diagram right after the first image caption or after # Title
                    img_caption_match = re.search(r'(\*Ilustrasi / Foto:[^\*]+\*\n\n)', body)
                    if img_caption_match:
                        pos = img_caption_match.end()
                        new_body = body[:pos] + diagram_tag + "\n\n" + body[pos:]
                    else:
                        h1_match = re.search(r'(#\s+[^\n]+\n+)', body)
                        if h1_match:
                            pos = h1_match.end()
                            new_body = body[:pos] + diagram_tag + "\n\n" + body[pos:]
                        else:
                            new_body = diagram_tag + "\n\n" + body
                    
                    content = content[:m.start()] + prefix + new_body + suffix + content[m.end():]
                    updated += 1
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}: injected {updated} diagrams.")

inject_diagrams()
print("All educational diagrams integrated!")
