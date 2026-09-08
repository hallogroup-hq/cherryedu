import re
filepath = 'lib/data/paths/baristaData.ts'
content = open(filepath, 'r', encoding='utf-8').read()
injections = [
    ('les-b1-3', '[DIAGRAM:espresso-phases]'),
    ('les-b2-2', '[DIAGRAM:milk-steaming-vortex]'),
    ('les-b4-2', '[DIAGRAM:brewing-control-chart]')
]
updated = 0
for lid, diagram_tag in injections:
    pattern = re.compile(r'(\{\s*id:\s*[\'\"]' + re.escape(lid) + r'[\'\"].*?content:\s*`)([^`]+)(`.*?\})', re.DOTALL)
    m = pattern.search(content)
    if m:
        prefix, body, suffix = m.group(1), m.group(2), m.group(3)
        if diagram_tag not in body:
            img_caption_match = re.search(r'(\*Ilustrasi / Foto:[^\*]+\*\n\n)', body)
            if img_caption_match:
                pos = img_caption_match.end()
                new_body = body[:pos] + diagram_tag + '\n\n' + body[pos:]
            else:
                h1_match = re.search(r'(#\s+[^\n]+\n+)', body)
                pos = h1_match.end() if h1_match else 0
                new_body = body[:pos] + diagram_tag + '\n\n' + body[pos:]
            content = content[:m.start()] + prefix + new_body + suffix + content[m.end():]
            updated += 1

open(filepath, 'w', encoding='utf-8').write(content)
print(f'Updated {filepath}: injected {updated} diagrams.')
