#!/usr/bin/env node
/**
 * CherryEdu Barista V2 — repeatable NON-PRODUCTION static audit.
 * node scripts/audit-barista-v2.cjs
 * node scripts/audit-barista-v2.cjs --strict  // exit nonzero on P0/P1 baseline findings
 *
 * Does not execute TS modules, access a database, or mutate student data.
 * String/regex heuristics require reviewer confirmation.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.resolve(__dirname, '../lib/data/paths/baristaData.ts'), 'utf8');

function section(a, b) {
  const x = source.indexOf('export const ' + a);
  const y = b ? source.indexOf('export const ' + b, x + 1) : source.length;
  if (x < 0 || y < 0) throw new Error('Missing Barista export: ' + a + '/' + b);
  return source.slice(x, y);
}
function entries(s, prefix) {
  return [...s.matchAll(new RegExp("id:\\s*'(" + prefix + "[^']+)'", 'g'))]
    .map(m => ({ id: m[1], pos: m.index }));
}
const modules = entries(section('BARISTA_MODULES', 'BARISTA_LESSONS'), 'mod-b');
const quizzes = entries(section('BARISTA_QUIZZES', 'BARISTA_QUESTIONS'), 'quiz-b');
const lessonSection = section('BARISTA_LESSONS', 'BARISTA_QUIZZES');
const lessonLocators = entries(lessonSection, 'les-b');
const lessons = lessonLocators.map((item, i) => {
  const block = lessonSection.slice(item.pos, lessonLocators[i+1]?.pos || lessonSection.length);
  const md = block.match(/content:\s*\x60([\s\S]*?)\x60/)?.[1] || '';
  return {
    id: item.id,
    wordCount: md.trim().split(/\s+/).filter(Boolean).length,
    embeddedImages: (md.match(/!\[[^\]]*\]\(/g)||[]).length,
    typedActivities: (md.match(/\[(?:ACTIVITY|VISUAL):[a-z0-9-]+\]/g)||[]).length,
    citations: (md.match(/https?:\/\//g)||[]).length,
    contentPresent: md.length>0
  };
});
const questionSection = section('BARISTA_QUESTIONS', null);
const qLocators = entries(questionSection, 'q-b');
const questions = qLocators.map((item, i)=>{
  const block = questionSection.slice(item.pos, qLocators[i+1]?.pos || questionSection.length);
  const options = [...block.matchAll(/answer_text:\s*'((?:\\'|[^'])*)',\s*is_correct:\s*(true|false)/g)]
    .map(m=>({label:m[1].replace(/\\'/g,"'"),correct:m[2]==='true'}));
  const key = options.find(x=>x.correct);
  const maxLength = Math.max(...options.map(x=>x.label.length));
  return { id:item.id, options:options.length, correctCount:options.filter(x=>x.correct).length,
    keyIsLongest:Boolean(key&&key.label.length===maxLength),
    keyStrictlyLongest:Boolean(key&&options.filter(x=>x.label.length===maxLength).length===1&&key.label.length===maxLength),
    keyIndex:options.findIndex(x=>x.correct)+1 };
});
const sorted = lessons.map(x=>x.wordCount).sort((a,b)=>a-b);
const report = {
  branchPurpose: 'audit only — not a certificate or approved release',
  modules:modules.length,
  lessons:lessons.length,
  quizzes:quizzes.length,
  moduleQuestions:questions.length,
  totalWords:lessons.reduce((n,x)=>n+x.wordCount,0),
  minWords:sorted[0],
  medianWords:sorted[Math.floor(sorted.length/2)],
  maxWords:sorted.at(-1),
  under200:lessons.filter(x=>x.wordCount<200).length,
  under300:lessons.filter(x=>x.wordCount<300).length,
  withoutVisualOrActivity:lessons.filter(x=>x.embeddedImages+x.typedActivities===0).length,
  withOnPageUrl:lessons.filter(x=>x.citations>0).length,
  keyLongest:questions.filter(x=>x.keyIsLongest).length,
  keyStrictlyLongest:questions.filter(x=>x.keyStrictlyLongest).length,
  keyPositions:[1,2,3,4].map(n=>questions.filter(q=>q.keyIndex===n).length),
  malformedQuestions:questions.filter(q=>q.options!==4||q.correctCount!==1).map(q=>q.id),
  shortLessons:lessons.filter(x=>x.wordCount<200).map(x=>x.id),
  limitations: ['Lexical metrics only: no practical skills observed','No scientific claim endorsement','Cannot prove visual accessibility or student comprehension']
};
console.log(JSON.stringify(report,null,2));
if (process.argv.includes('--strict')) {
  const failures = [];
  if (report.modules!==10 || report.lessons!==30 || report.quizzes!==10 || report.moduleQuestions!==30)
    failures.push('Unexpected legacy inventory — investigate before changing');
  if (report.malformedQuestions.length) failures.push('Malformed four-option MCQs');
  if (report.keyLongest/report.moduleQuestions > 0.35) failures.push('Answer-length cue: correct answer is longest too often');
  if (report.withoutVisualOrActivity/report.lessons > 0.3) failures.push('Missing meaningful instructional media/activities');
  if (report.under200>2) failures.push('Many lessons too thin for unassisted professional operation');
  if (/Sertifikasi Profesional Kompetensi Bar/.test(section('BARISTA_PATH','BARISTA_MODULES')))
    failures.push('Unsupported official-sounding professional certification claim');
  if (failures.length){console.error('BARISTA RELEASE NOT APPROVED:\n- '+failures.join('\n- '));process.exitCode=1;}
}
