/**
 * Deterministically compile the reviewed source Markdown into an isolated,
 * preview-only CherryEdu data module. No database operations or publication.
 *
 * node scripts/generate-foundation-v2-preview.cjs
 * node scripts/generate-foundation-v2-preview.cjs --check
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { toLearnerMarkdown } = require('./foundation-v2-presentation.cjs');

const root = path.resolve(__dirname, '../docs/curriculum/foundation-v2');
const output = path.resolve(__dirname, '../lib/data/foundationV2Preview.generated.ts');
const blueprint = fs.readFileSync(path.join(root, '02-curriculum-master-blueprint.md'), 'utf8');
const slots = [...blueprint.matchAll(/^#### (M0[1-7]\.L\d\d) — ([^\n]+)/gm)];
const lessonFiles = fs.readdirSync(path.join(root, '03-lessons'))
  .filter((name) => /^M\d\d-L\d\d-.+\.md$/.test(name)).sort();
if (slots.length !== 36 || lessonFiles.length !== 36) throw new Error('Expected 36 blueprint slots and 36 source Markdown files');
const fileById = new Map(lessonFiles.map((name) => [name.slice(0, 7).replace('-', '.'), name]));
const moduleNames = {
  M01: 'Mulai dari Cangkir',
  M02: 'Dari Pohon ke Buah Kopi',
  M03: 'Apa yang Terjadi Setelah Panen?',
  M04: 'Bagaimana Panas Mengubah Kopi?',
  M05: 'Mengekstraksi Rasa ke Cangkir',
  M06: 'Belajar Mengenali & Menilai Rasa',
  M07: 'Memahami Nilai di Balik Kopi'
};
const createdAt = '2026-10-12T00:00:00Z';
const previewPath = {
  id: 'path-foundation-v2-preview',
  title: 'Memahami Kopi dari Hulu ke Hilir',
  slug: 'memahami-kopi-dari-hulu-ke-hilir',
  description: 'Pelajari perjalanan kopi dari buah dan kebun hingga pengolahan, roasting, penyeduhan, penilaian rasa, serta orang-orang di balik setiap cangkir.',
  thumbnail_url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80',
  layer_type: 'foundation', prerequisite_path_id: null, target_role: 'all',
  level: 'beginner', is_free: true, is_published: true,
  estimated_hours: 16, total_modules: 7, created_at: createdAt
};
const modules = Object.entries(moduleNames).map(([moduleCode, title], order) => ({
  id: 'mod-fv2-' + moduleCode.toLowerCase(), learning_path_id: previewPath.id,
  title: title,
  description: ({
    M01: 'Bangun cara mengamati rasa dan aroma melalui latihan sederhana.',
    M02: 'Kenali buah, tanaman kopi, varietas, dan cara membaca informasi kebun.',
    M03: 'Pahami bagaimana kopi diolah, dikeringkan, dan diperiksa mutunya.',
    M04: 'Pelajari perubahan biji kopi saat disangrai dan cara membaca hasilnya.',
    M05: 'Kenali faktor yang memengaruhi ekstraksi dan buat percobaan seduh.',
    M06: 'Latih kemampuan mendeskripsikan, membandingkan, dan menilai pengalaman rasa.',
    M07: 'Lihat sejarah, pelaku, biaya, dan nilai yang terbentuk sepanjang rantai kopi.'
  })[moduleCode],
  order_index: order + 1, is_locked: false, is_published: true, created_at: createdAt
}));
const provenance = [];
const lessons = slots.map((slot) => {
  const id = slot[1], moduleCode = id.slice(0, 3), order = Number(id.slice(-2));
  const filename = fileById.get(id);
  if (!filename) throw new Error('Missing manuscript: ' + id);
  const markdown = fs.readFileSync(path.join(root, '03-lessons', filename), 'utf8');
  const content = toLearnerMarkdown(id, markdown);
  const title = slot[2].trim();
  provenance.push({
    blueprint_id: id,
    preview_id: 'lesson-fv2-' + id.toLowerCase().replace('.', '-'),
    source_file: 'docs/curriculum/foundation-v2/03-lessons/' + filename
  });
  const words = content.split(/\s+/).length;
  return {
    id: 'lesson-fv2-' + id.toLowerCase().replace('.', '-'),
    module_id: 'mod-fv2-' + moduleCode.toLowerCase(),
    title: title, content,
    content_type: 'text', duration_minutes: Math.max(8, Math.min(25, Math.ceil(words / 130))),
    order_index: order, is_free: true, is_published: true, created_at: createdAt,
    // Leave summary blank. The editorial reader must not show a generic
    // internal-status paragraph as a learner-facing lesson takeaway.
    summary: ''
  };
});
const code = [
  '// GENERATED FILE — DO NOT EDIT. Source of truth: docs/curriculum/foundation-v2.',
  '// Run: node scripts/generate-foundation-v2-preview.cjs',
  '// ISOLATED PREVIEW ONLY. No quizzes/certificates are registered from this artifact.',
  "import type { LearningPath, Module, Lesson } from '../types';",
  '',
  'export const FOUNDATION_V2_PREVIEW_PATH: LearningPath = ' + JSON.stringify(previewPath, null, 2) + ';',
  'export const FOUNDATION_V2_PREVIEW_MODULES: Module[] = ' + JSON.stringify(modules, null, 2) + ';',
  'export const FOUNDATION_V2_PREVIEW_LESSONS: Lesson[] = ' + JSON.stringify(lessons, null, 2) + ';',
  'export const FOUNDATION_V2_PROVENANCE = ' + JSON.stringify(provenance, null, 2) + ' as const;',
  ''
].join('\n');
if (process.argv.includes('--check')) {
  if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== code) {
    console.error('Stale V2 preview data: run node scripts/generate-foundation-v2-preview.cjs and commit the generated file.');
    process.exitCode = 1;
  } else {
    console.log('Foundation V2 generated data up to date: ' + lessons.length + ' lessons');
  }
} else {
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, code);
  console.log('Wrote ' + output + ' (' + lessons.length + ' lessons)');
}