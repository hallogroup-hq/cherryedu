import re
from collections import defaultdict

print("=== RUNNING FULL CHERRYEDU CURRICULUM AUDIT ===")

files = [
    'lib/data/seedData.ts',
    'lib/data/paths/baristaData.ts',
    'lib/data/paths/homeBrewerData.ts',
    'lib/data/paths/roasterData.ts',
    'lib/data/paths/qGraderData.ts',
    'lib/data/paths/postHarvestData.ts',
    'lib/data/paths/coffeeBusinessData.ts'
]

two_dollars = chr(36) + chr(36)
bad_entities = 0
latex_blocks = 0

for f in files:
    with open(f, 'r') as fp:
        c = fp.read()
    if '&rarr;' in c or '&RARR;' in c:
        print(f"  [FAIL] Malformed HTML entity found in {f}")
        bad_entities += 1
    if two_dollars in c:
        print(f"  [FAIL] Raw LaTeX $$ block found in {f}")
        latex_blocks += 1

if bad_entities == 0 and latex_blocks == 0:
    print("  [PASS] 100% CLEAN: Zero &rarr; and Zero $$ found in any curriculum file!")

# Count lessons across all modules
module_lessons = defaultdict(set)
all_unique_lessons = set()
lessons_with_images = 0

for f in files:
    with open(f, 'r') as fp:
        text = fp.read()
    matches = re.findall(r'id:\s*[\'\"](les-[^\'\"]+)[\'\"].*?module_id:\s*[\'\"](mod-[^\'\"]+)[\'\"]', text, re.DOTALL)
    for lid, mid in matches:
        module_lessons[mid].add(lid)
        all_unique_lessons.add(lid)

for f in files:
    with open(f, 'r') as fp:
        text = fp.read()
    img_matches = re.findall(r'!\[.*?\]\(.*?\)\s*\n\*(?:Ilustrasi|Foto|Sumber).*?\*', text)
    lessons_with_images += len(img_matches)

print(f"\n  Total Unique Lessons across Platform: {len(all_unique_lessons)}")
print(f"  Total Educational Visual Media with Source Credits: {lessons_with_images}")

prefixes = {
    'mod-f': 'Foundation Layer',
    'mod-b': 'Barista Specialization',
    'mod-h': 'Home Brewer Specialization',
    'mod-r': 'Roaster Specialization',
    'mod-q': 'Q Grader & Sensory Specialist',
    'mod-p': 'Post-Harvest Specialist',
    'mod-biz': 'Coffee Business Specialist'
}

for pref, label in prefixes.items():
    mods = [m for m in sorted(module_lessons.keys()) if m.startswith(pref)]
    total_l = sum(len(module_lessons[m]) for m in mods)
    print(f"\n  -> {label}: {len(mods)} Modules, {total_l} Total Lessons")
    for m in mods:
        print(f"     • {m}: {len(module_lessons[m])} materi -> {sorted(list(module_lessons[m]))}")

print("\n=== AUDIT COMPLETED SUCCESSFULLY ===")
