/**
 * Foundation V2 document and assessment structural release gate.
 * No network access, no DB writes, no content publication.
 * This checks authoring integrity and anti-guessing heuristics only.
 * Does NOT certify scientific, educational or clinical/professional quality.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
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
}
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
const results = { lessons: lessons.length, lessonSlots: codes.length, questions: allQuestions, correctLongest: longestTotal, correctShortest: shortestTotal, modules: moduleStats, errors };
console.log(JSON.stringify(results, null, 2));
if (errors.length) process.exitCode = 1;