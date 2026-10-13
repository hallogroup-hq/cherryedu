/**
 * Foundation V2 document and assessment structural release gate.
 * No network access, no DB writes, no content publication.
 * This checks authoring integrity and anti-guessing heuristics only.
 * Does NOT certify scientific, educational or clinical/professional quality.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { toLearnerMarkdown, APPENDIX_HEADINGS } = require('./foundation-v2-presentation.cjs');
const root = path.resolve(__dirname, '../docs/curriculum/foundation-v2');
const moduleCounts = { M01: 3, M02: 5, M03: 7, M04: 5, M05: 6, M06: 5, M07: 5 };
const quizCounts = { M01: 8, M02: 8, M03: 10, M04: 10, M05: 12, M06: 12, M07: 16 };
const errors = [];
const fail = (message) => errors.push(message);
const read = (filename) => {
  if (!fs.existsSync(filename)) {
    fail('Missing: ' + path.relative(process.cwd(), filename));
    return '';
  }
  return fs.readFileSync(filename, 'utf8');
};
const blueprint = read(path.join(root, '02-curriculum-master-blueprint.md'));
const codes = [...blueprint.matchAll(/^#### (M0[1-7]\.L\d\d) —/gm)].map((m) => m[1]);
if (codes.length !== 36 || new Set(codes).size !== 36) fail('Blueprint must contain 36 unique lesson slots');
if (!codes.includes('M07.L01')) fail('Mandatory history lesson M07.L01 is missing');
const lessonFolder = path.join(root, '03-lessons');
const lessons = fs.readdirSync(lessonFolder).filter((n) => /^M\d\d-L\d\d-.+\.md$/.test(n));
if (lessons.length !== 36) fail('Expected 36 lesson files, found ' + lessons.length);
const lessonIds = lessons.map((n) => n.slice(0, 7).replace('-', '.'));
for (const slot of codes) {
  if (lessonIds.filter((id) => id === slot).length !== 1) fail('Lesson slot not represented exactly once: ' + slot);
}
for (const [m, expected] of Object.entries(moduleCounts)) {
  if (codes.filter((id) => id.startsWith(m + '.')).length !== expected) fail('Blueprint count mismatch ' + m);
}
for (const name of lessons) {
  const body = read(path.join(lessonFolder, name));
  if (!/^---\s*\n/.test(body) || !/(?:learning_outcome|competency|outcome)\s*:/.test(body)) fail('Outcome or frontmatter missing: ' + name);
  if (!/https?:\/\/\S+/.test(body)) fail('Reference URL absent: ' + name);
  if (!/jawab|kunci|pembahasan|contoh jawaban/i.test(body)) fail('Practice feedback missing: ' + name);

  // Render the actual learner version for every one of the 36 manuscripts.
  // This gate must catch regressions in appendices, reviewer-only notes, URLs,
  // or opaque claim citations before they reach the web application.
  const id = name.slice(0, 7).replace('-', '.');
  try {
    const learnerText = toLearnerMarkdown(id, body);
    if (!learnerText.includes('# ')) fail('No learner-facing title after cleanup: ' + id);
    // Raw editorial provenance is kept in sources, but must never render
    // reviewer/release labels or uncalibrated internal rubric thresholds to students.
    if (/beta publik|materi dapat diperbarui|draft review|review build|silabus review|proposal mastery internal|ambang internal awal|hipotesis desain pendidikan|belum dikalibrasi/i.test(learnerText)) {
      fail('Reviewer-only/release copy leaked into student lesson: ' + id);
    }
    if (!/latihan|tugas|pertanyaan|eksperimen|coba jawab|urutkan|pemeriksaan pemahaman/i.test(learnerText)) fail('Learner activity missing: ' + id);
    if (/^#{2,3}\s+(?:Referensi|Rujukan|Editorial|Sumber dan QA|Catatan pengajar)/im.test(learnerText))
      fail('Internal appendix retained: ' + id);
  } catch (err) {
    fail('Learner copy isolation failed for ' + id + ': ' + (err && err.message ? err.message : String(err)));
  }
}
if (Object.keys(APPENDIX_HEADINGS).length !== 36)
  fail('Expected exactly 36 explicit editorial appendix mappings');
// Validate semantic interactive blocks are deliberate, uniquely authored,
// and point to a known typed interaction. Do not auto-convert every table to cards.
const registry = read(path.resolve(__dirname, '../lib/data/foundationV2Interactions.ts'));
const renderer = read(path.resolve(__dirname, '../components/MarkdownRenderer.tsx'));
const components = read(path.resolve(__dirname, '../components/FoundationLearningActivity.tsx'));
const expectedInteractiveLessons = {
  'M01.L01': 'sensory-evidence',
  'M02.L01': 'coffee-fruit-layers',
  'M02.L02': 'taxonomy-sort',
  'M03.L02': 'processing-decision',
  'M04.L01': 'roast-order',
  'M05.L05': 'brew-ey',
  'M06.L02': 'lexicon-confidence',
  'M07.L02': 'value-chain-claim',
};
for (const [id, widget] of Object.entries(expectedInteractiveLessons)) {
  const name = lessons.find(n => n.slice(0, 7).replace('-', '.') === id);
  if (!name) { fail('Interactive lesson missing: ' + id); continue; }
  const source = read(path.join(lessonFolder, name));
  const count = source.split('[ACTIVITY:' + widget + ']').length - 1;
  if (count !== 1) fail(id + ': expected exactly one valid activity directive, got ' + count);
  if (!registry.includes("'" + widget + "': {")) fail('Missing typed interaction: ' + widget);
  const rendered = toLearnerMarkdown(id, source);
  if (!rendered.includes('[ACTIVITY:' + widget + ']')) fail('Activity lost during learner-copy compilation: ' + id);
}
if (!renderer.includes("activity:$1") || !renderer.includes('FoundationLearningActivity'))
  fail('Lesson renderer does not mount real interactive activity components');
if (!components.includes('aria-live="polite"')) fail('Activities need live-region answer feedback');
const taxonomyLesson = read(path.join(lessonFolder, lessons.find(n => n.startsWith('M02-L02-')) || 'missing'));
if (taxonomyLesson.includes('| Coffea | Genus |'))
  fail('False card exercise leaked its answer key into a static learner table');

// Global beginner experience gate: no lesson may claim a card, picture,
// process diagram or independent practice without a real supporting UI block.
const visualCode = read(path.resolve(__dirname, '../components/FoundationConceptVisual.tsx'));
const revealCode = read(path.resolve(__dirname, '../components/FoundationRevealAnswer.tsx'));
const practiceCode = read(path.resolve(__dirname, '../components/FoundationPracticeWorkspace.tsx'));
let interactiveLessons = 0;
let visualLessons = 0;
let hiddenSolutions = 0;
for (const name of lessons) {
  const id = name.slice(0, 7).replace('-', '.');
  const source = read(path.join(lessonFolder, name));
  let clean;
  try { clean = toLearnerMarkdown(id, source); } catch (error) { fail('Invalid learner markdown for '+id+': '+String(error)); continue; }
  const acts = [...clean.matchAll(/\[ACTIVITY:([a-z0-9-]+)\]/g)].map(m=>m[1]);
  const visuals = [...clean.matchAll(/\[VISUAL:([a-z0-9-]+)\]/g)].map(m=>m[1]);
  if(!acts.length && !visuals.length) fail(id+': missing a grounded learner representation or task');
  for(const act of acts) if(!registry.includes("'" + act + "': {") && !registry.includes("'" + act + "':{"))
    fail(id+': undefined interactive block '+act);
  for(const v of visuals) if(!visualCode.includes("'"+v+"'"))
    fail(id+': undefined visual '+v);
  if(acts.length) interactiveLessons++;
  if(visuals.length) visualLessons++;
  hiddenSolutions += (clean.match(/```solution/g)||[]).length;
  if(id==='M02.L02' && !clean.includes('## 2. Liberika: kenali dulu'))
    fail('Liberica basic plant knowledge must come before Excelsa history');
  if(id==='M06.L01' && clean.includes('Sepuluh kartu pengalaman — coba klasifikasikan\n\n|'))
    fail('Answer-revealing ten-card static sensory table has been reintroduced');
  if(id==='M04.L05' && !clean.includes('[VISUAL:roast-curve]'))
    fail('Roast-log task requires an actual synthetic curve');
}
if(interactiveLessons < 25) fail('Fewer than 25 lessons contain purposeful interactive practice: '+interactiveLessons);
if(visualLessons < 17) fail('Insufficient physical/spatial visuals: '+visualLessons);
if(hiddenSolutions < 20) fail('Auto-collapsed learner answers unexpectedly missing: '+hiddenSolutions);
if(!revealCode.includes('aria-expanded={open}')) fail('Model-answer reveal needs explicit accessible expansion control');
if(!practiceCode.includes('tidak tersimpan otomatis')) fail('Learner workspaces must explicitly warn that practice answers are not automatically saved');
if(!renderer.includes('FoundationConceptVisual') || !renderer.includes('FoundationRevealAnswer'))
  fail('Visual and answer-reveal components must actually mount in lesson player');

const questions = new Set();
let allQuestions = 0;
let longestTotal = 0;
let shortestTotal = 0;
const moduleStats = [];
for (const [module, expected] of Object.entries(quizCounts)) {
  const body = read(path.join(root, '04-assessments', module + '-module-exit.md'));
  const blocks = body.split(/^### (?=M\d\d-Q\d\d\b)/m).slice(1);
  let longest = 0;
  let shortest = 0;
  if (blocks.length !== expected) fail(module + ' expected ' + expected + ' questions, got ' + blocks.length);
  for (const full of blocks) {
    const block = full.split(/^## /m)[0];
    const id = (block.match(/^(M\d\d-Q\d\d)\b/) || [])[1];
    if (!id || !id.startsWith(module + '-')) fail('Unexpected question id in ' + module + ': ' + (id || 'missing'));
    if (questions.has(id)) fail('Duplicate question id ' + id);
    questions.add(id);
    const key = (block.match(/\*\*Kunci:?\s*([ABCD])\./) || [])[1];
    const options = [...block.matchAll(/^([ABCD])\.\s+([^\n]+)/gm)];
    if (options.length !== 4 || [...new Set(options.map((o) => o[1]))].length !== 4) {
      fail(id + ': exactly four A-D answers required');
      continue;
    }
    if (options.map((o) => o[1]).join('') !== 'ABCD') fail(id + ': answer order must be ABCD');
    if (!key) { fail(id + ': missing answer key'); continue; }
    const lengths = Object.fromEntries(options.map((o) => [o[1], o[2].trim().length]));
    const values = Object.values(lengths);
    if (lengths[key] === Math.max(...values)) longest++;
    if (lengths[key] === Math.min(...values)) shortest++;
    if (!/Remediasi|Rujuk|Remediation/i.test(block)) fail(id + ': missing learning feedback/remediation');
  }
  if (longest > expected / 2) fail(module + ': correct longest in ' + longest + '/' + expected + ' (>50%)');
  if (shortest > expected / 2) fail(module + ': correct shortest in ' + shortest + '/' + expected + ' (>50%)');
  allQuestions += blocks.length;
  longestTotal += longest;
  shortestTotal += shortest;
  moduleStats.push({ module, questions: blocks.length, correctLongest: longest, correctShortest: shortest });
}
if (allQuestions !== 76 || questions.size !== 76) fail('Expected 76 unique questions');
const relativeLink = /\]\((\.\.?\/[^)#]+)(?:#[^)]+)?\)/g;
for (const file of ['README.md', '06-qa/FULL-COURSE-CROSS-MODULE-AUDIT.md']) {
  const original = path.join(root, file);
  const body = read(original);
  for (const match of body.matchAll(relativeLink)) {
    const target = path.resolve(path.dirname(original), match[1]);
    if (!target.startsWith(root + path.sep) || !fs.existsSync(target)) fail('Broken/unsafe link: ' + file + ' -> ' + match[1]);
  }
}
for (const mod of Object.keys(moduleCounts)) {
  read(path.join(root, '06-qa', mod + '-content-qa.md'));
}
const qa = read(path.join(root, '06-qa/ASSESSMENT-RED-TEAM-BATCH-01.md'));
if (!qa.includes('BLOCKED')) fail('Missing blocker record');
// Legacy production authorization and payment code are deliberately unchanged
// by the isolated public-reader release. Full platform security is not certified
// by this content validation gate.
// Public course metadata is customer-facing content. Do not reintroduce
// engineering notes, certification promises or compulsory labels for optional V2.
const generator = read(path.resolve(__dirname, 'generate-foundation-v2-preview.cjs'));
const catalog = read(path.resolve(__dirname, '../app/paths/page.tsx'));
const course = read(path.resolve(__dirname, '../app/paths/[slug]/page.tsx'));
const reader = read(path.resolve(__dirname, '../app/paths/[slug]/lessons/[lessonId]/page.tsx'));
const workspace = read(path.resolve(__dirname, '../components/FoundationPracticeWorkspace.tsx'));
const registryText = read(path.resolve(__dirname, '../lib/data/foundationV2Interactions.ts'));
const audioReader = read(path.resolve(__dirname, '../components/AudioNarrationPlayer.tsx'));
if (!audioReader.includes('(?:DIAGRAM|ACTIVITY|VISUAL)')) {
  fail('Audio narration may speak raw visual or interactive activity tokens to students');
}
for (const unwanted of [
  'Foundation V2 — Beta Publik (Materi Dapat Diperbarui)',
  'edisi beta publik. Materi dapat diperbarui',
  'Edisi beta publik; latihan belum dinilai',
]) {
  if (generator.includes(unwanted)) fail('Internal release copy reintroduced in public metadata: ' + unwanted);
}
if (!generator.includes("title: 'Memahami Kopi dari Hulu ke Hilir'")) fail('Foundation V2 public course title has changed without editorial review');
if (!(catalog.includes("isPublicReading || isAuthenticated") || catalog.includes("isPublicReading || process.env.NEXT_PUBLIC_CHERRYEDU_CURRICULUM_PREVIEW === 'enabled' || isAuthenticated"))) fail('Optional V2 catalogue must allow anonymous entry without login');
if (!catalog.includes("isPublicReading ? 'KELAS TERBUKA'")) fail('V2 catalog is incorrectly labeled mandatory');
if (!course.includes("isDraftPreview ? 'Materi Kopi • Akses Bebas'")) fail('V2 course incorrectly inherits mandatory certification label');
for (const [file, body] of [['course', course], ['reader', reader], ['workspace', workspace], ['interactions', registryText]]) {
  for (const phrase of ['Bacaan Publik (Beta)', 'Edisi Baru — Tanpa Sertifikat', 'Silabus Review', 'Mode review:', 'review build']) {
    if (body.includes(phrase)) fail(file + ': reviewer release phrase displayed to real learners: ' + phrase);
  }
}

const results = { lessons: lessons.length, lessonSlots: codes.length, questions: allQuestions, correctLongest: longestTotal, correctShortest: shortestTotal, modules: moduleStats, errors };
console.log(JSON.stringify(results, null, 2));
if (errors.length) process.exitCode = 1;