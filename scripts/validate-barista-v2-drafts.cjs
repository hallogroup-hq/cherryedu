#!/usr/bin/env node
/* Barista V2 manuscript QA gate. Read-only, not a claim of academic approval. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '../docs/curriculum/barista-v2');
const lessons = path.join(root, '03-lessons');
const expectedModuleCounts = { M01: 6, M02: 5, M03: 6, M04: 7, M05: 6, M06: 5, M07: 5, M08: 5, M09: 5, M10: 5, M11: 8, M12: 5 };
const expectedFirstBatch = Object.keys(expectedModuleCounts);
const all = fs.readdirSync(lessons).filter(x => x.endsWith('.md')).sort();
const issues = [];
const warnings = [];
const counts = {};
function fail(message){issues.push(message);}
function warning(message){warnings.push(message);}
for(const file of all){
  const match = file.match(/^(M\d\d)-L(\d\d)-[a-z0-9-]+\.md$/);
  if(!match){fail('Bad filename: '+file);continue;}
  const moduleId = match[1];
  counts[moduleId]=(counts[moduleId]||0)+1;
  if(!expectedModuleCounts[moduleId])fail('Unknown module '+file);
  const s=fs.readFileSync(path.join(lessons,file),'utf8');
  const words=s.trim().split(/\s+/).filter(Boolean).length;
  const headings=(s.match(/^## /gm)||[]).length;
  if(!s.startsWith('# '))fail(file+': requires learner-facing title');
  if(words<260)fail(file+': below 260 words of meaningful manuscript ('+words+')');
  if(words<500)warning(file+': needs depth/SME editorial expansion before public release ('+words+' words)');
  if(headings<3)fail(file+': missing instructional progression');
  if(!/eksperimen|percobaan/i.test(s))fail(file+': no safe experiment or hypothesis exercise');
  if(!/prediksi|hipotesis|dugaan/i.test(s))fail(file+': no meaningful prediction/causal thinking');
  if(!/latihan|tantangan|uji pemahaman/i.test(s))fail(file+': no learner attempt');
  if(/DRAFT REVIEW|Beta Publik|review build|QA internal|editorial appendix|pratinjau internal|Sertifikasi Profesional Kompetensi Bar/i.test(s))
    fail(file+': internal release jargon or credential claim in student content');
  if(/\[(?:ACTIVITY|VISUAL|DIAGRAM):/i.test(s))fail(file+': unimplemented authoring token in learner content');
  if(/<card[ >]/i.test(s))fail(file+': faux card markup in student markdown');
  if(!/belum|tidak|bisa|mungkin|jika|bergantung/i.test(s))warning(file+': verify that uncertainty is adequately taught');
  if(!/https?:\/\//.test(s))warning(file+': references absent from learner text by design; editorial source review required');
}
const blueprint=fs.readFileSync(path.join(root,'02-curriculum-master-blueprint.md'),'utf8');
const headings=[...blueprint.matchAll(/^### BV2\.(M\d\d) — .*?\((\d+) lessons\)/gm)];
const plannedCounts=Object.values(expectedModuleCounts).reduce((x,y)=>x+y,0);
if(plannedCounts!==68)fail('Planned lesson arithmetic mismatch: '+plannedCounts);
if(headings.length!==12)fail('Exactly 12 blueprint modules required; found '+headings.length);
for(const m of headings){
  if(Number(m[2])!==expectedModuleCounts[m[1]])fail('Blueprint count mismatch for '+m[1]);
}
for(const m of expectedFirstBatch){
  if(counts[m]!==expectedModuleCounts[m])fail(m+' authoring incomplete: '+(counts[m]||0)+'/'+expectedModuleCounts[m]);
}
if(all.length !== 68)fail('Expected 68 unique learner manuscripts; found '+all.length);
const generator=fs.readFileSync(path.resolve(__dirname, 'generate-barista-v2.cjs'),'utf8');
if(!generator.includes('files.length !== 68'))fail('Generator must enforce 68-lesson inventory');
const route=fs.readFileSync(path.resolve(__dirname, '../app/barista-v2/[lessonId]/page.tsx'),'utf8');
if(!route.includes("CHERRYEDU_BARISTA_V2_REVIEW !== 'enabled'"))fail('Barista preview must remain gated server-side');
if(/setUserProgress|completeLesson|issueCertificate|syncTransaction/.test(route))fail('Isolated Barista reader must not grant legacy credit, payments or credentials');
const notebook=fs.readFileSync(path.resolve(__dirname,'../components/barista-v2/ExperimentNotebook.tsx'),'utf8');
for(const required of ['hypothesis','prediction','independent','controls','observations','interpretation','next','setRevealed','simulasi','tidak tersimpan otomatis']){
  if(!notebook.includes(required))fail('ExperimentNotebook missing '+required);
}
if(/fetch\(|supabase|localStorage|sessionStorage|setItem\(/.test(notebook))
  fail('ExperimentNotebook: unexpectedly persists/transmits learner text');
if(!notebook.includes("disabled={!readyPlan || !readyInterpretation || !realObservationReady}"))
  fail('ExperimentNotebook example must be withheld before independent response');
const summary={
  result: issues.length ? 'FAIL' : 'STATIC CHECKS PASS (NOT PRODUCTION APPROVAL)',
  moduleCounts: counts, learnerFiles: all.length, plannedModules: 12,
  plannedLessons: plannedCounts, authoredFirstBatch: all.length, blockersRemaining:[
    'Real instructional media not all produced or rights reviewed',
    'Shorter draft lessons still need instructor-led depth expansion and novice test',
    'Interactive lab route needs full browser/mobile/accessibility QA and 68-lesson pedagogical review',
    'Expert review, novice test and practical supervision not complete',
    'Theory question bank and assessment not produced for V2',
    'No production credential approval or data migration'
  ],warnings,issues
};
console.log(JSON.stringify(summary,null,2));
if(issues.length)process.exitCode=1;
