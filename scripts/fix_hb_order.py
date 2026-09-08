with open('lib/data/paths/homeBrewerData.ts', 'r') as f:
    text = f.read()

text = text.replace('order_index: 2 if \'-2\' in les["id"] else 3,', 'order_index: 2,')

with open('lib/data/paths/homeBrewerData.ts', 'w') as f:
    f.write(text)

print("Fixed order_index in homeBrewerData.ts")
