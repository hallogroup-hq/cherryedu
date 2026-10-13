'use strict';
const fs=require('node:fs'),path=require('node:path');
const fail=[],warn=[];
const root=path.resolve(__dirname,'..'),dir=path.join(root,'docs/curriculum/home-brewer-v2/03-lessons');
const files=fs.readdirSync(dir).filter(x=>/^HB\d\d-L\d\d-[a-z0-9-]+\.md$/.test(x)).sort();
if(files.length!==50)fail.push('Expected 50 lessons, found '+files.length);
const seen=new Set();
let words=0,min=Infinity;
for(const file of files){
 const m=/^(HB\d\d)-L(\d\d)-/.exec(file);
 if(!m){fail.push('Bad lesson id '+file);continue}
 const id=m[1]+'-'+m[2];if(seen.has(id))fail.push('Duplicated '+id);seen.add(id);
 const n=Number(m[1].slice(2)),i=Number(m[2]);if(n<1||n>10||i<1||i>5)fail.push('Unknown syllabus slot '+id);
 const s=fs.readFileSync(path.join(dir,file),'utf8');const w=s.trim().split(/\s+/).length;words+=w;min=Math.min(min,w);
 if(w<260)fail.push('Lesson too short '+file+' '+w+' words');
 if(w<370)warn.push(file+' has '+w+' words; owner should assess depth, not just count');
 for(const section of ['## ','## '])if(!s.includes(section))fail.push('Missing conceptual sections '+file);
 if(!s.startsWith('# '))fail.push('Missing title '+file);
 if(/\[DIAGRAM:|\[VIDEO:|\[ACTIVITY:|DRAFT REVIEW|BETA PUBLIK|qa internal/i.test(s))fail.push('Unresolved student-facing placeholder '+file);
 if(/\binverted\s+(wajib|harus|aman)\b/i.test(s))fail.push('Unsafe AeroPress inverted advice '+file);
}
for(let j=1;j<=10;j++)for(let i=1;i<=5;i++)if(!seen.has('HB'+String(j).padStart(2,'0')+'-'+String(i).padStart(2,'0')))fail.push('Missing slot HB'+j+'-'+i);
function extractTS(pathname,regex){const s=fs.readFileSync(path.join(root,pathname),'utf8');const m=s.match(regex);if(!m){fail.push('Cannot extract '+pathname);return[]}try{return JSON.parse(m[1])}catch(e){fail.push('Bad JSON TS inventory '+pathname+': '+e.message);return []}}
const cases=extractTS('lib/data/homeBrewerV2Cases.ts',/export const HOME_BREWER_V2_CASES:HomeBrewerCase\[\]=(\[[\s\S]*?\]);/);
const questions=extractTS('lib/data/homeBrewerV2Diagnostics.ts',/export const HOME_BREWER_V2_DIAGNOSTICS:HomeBrewerDiagnostic\[\]=(\[[\s\S]*?\]);/);
if(cases.length!==30)fail.push('Expected 30 changing-evidence cases, got '+cases.length);
if(new Set(cases.map(c=>c.initialPrompt)).size!==cases.length)fail.push('Case initial prompts must be independently authored, not generic repeats');
if(questions.length!==20)fail.push('Expected 20 diagnostics, got '+questions.length);
const ids=new Set(),qid=new Set(),position=[0,0,0,0];
let correctLongest=0;
for(const c of cases){
 if(ids.has(c.id))fail.push('Duplicate case '+c.id);ids.add(c.id);
 for(const key of ['brief','initialPrompt','newEvidence','revisionPrompt','model'])if(String(c[key]||'').trim().length<18)fail.push('Thin case '+c.id+' '+key);
 if(/BNSP official|Q Grader certified/i.test(JSON.stringify(c)))fail.push('Credential misclaim '+c.id);
}
for(const q of questions){
 if(qid.has(q.id))fail.push('Duplicate question '+q.id);qid.add(q.id);
 if(!Number.isInteger(q.correct)||q.correct<0||q.correct>3)fail.push('Bad answer key '+q.id);else position[q.correct]++;
 if(Array.isArray(q.options)&&q.options.length===4&&q.options[q.correct]&&q.options[q.correct].text.length===Math.max(...q.options.map(o=>o.text.length)))correctLongest++;
 if(!Array.isArray(q.options)||q.options.length!==4)fail.push('Need 4 options '+q.id);
 else{
  if(new Set(q.options.map(x=>x.text)).size!==4)fail.push('Duplicate option '+q.id);
  for(const o of q.options)if(o.text.length<9||o.feedback.length<24)fail.push('Shallow option feedback '+q.id);
 }
}
for(let n=1;n<=10;n++){
 const m='HB'+String(n).padStart(2,'0');
 if(cases.filter(x=>x.module===m).length!==3)fail.push('Expected 3 cases for '+m);
 if(questions.filter(x=>x.module===m).length!==2)fail.push('Expected 2 questions for '+m);
}
if(position.some(n=>n!==5))fail.push('Answer key positions unbalanced: '+position.join(','));
if(correctLongest>Math.floor(questions.length*0.4))fail.push('Longest-correct-answer leakage: '+correctLongest+'/'+questions.length);
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
for(const p of ['app/home-brewer-v2/page.tsx','app/home-brewer-v2/[lessonId]/page.tsx','app/home-brewer-v2/practice/[moduleId]/page.tsx']){
 const s=read(p);
 if(!s.includes("CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled'"))fail.push('Ungated route '+p);
 if(/setUserProgress|issueCertificate|completeLesson|createPurchase/.test(s))fail.push('Unexpected legacy state writes '+p);
}
const ui=read('components/home-brewer-v2/HomeBrewerPractice.tsx');
if(!ui.includes('state.initial.trim().length<25')||!ui.includes('state.revised.trim().length<25')||!ui.includes('state.stage>=2'))fail.push('Adaptive case must gate surprise evidence and revision');
if(!ui.includes('state.checked&&state.choice!==null'))fail.push('Diagnostic feedback must remain hidden before attempt');
const diagrams=read('components/home-brewer-v2/HomeBrewerMechanismVisual.tsx');
if((diagrams.match(/'hbv2-hb\d\d-l\d\d':/g)||[]).length!==6)fail.push('Six original mechanism diagrams required');
if(!diagrams.includes('aria-label')||!diagrams.includes('figcaption'))fail.push('Diagram access labels incomplete');
const packageScripts=JSON.parse(read('package.json')).scripts;
if(!packageScripts.prebuild?.includes('generate-home-brewer-v2'))fail.push('Missing deterministic prebuild compiler');
if(!packageScripts.pretypecheck?.includes('generate-home-brewer-v2'))fail.push('Missing generated data for typecheck');
const summary={modules:10,lessons:files.length,caseCount:cases.length,diagnostics:questions.length,diagrams:6,minLessonWords:min,meanLessonWords:Math.round(words/files.length),warnings:warn.length,longestCorrectOption:correctLongest,blockedUntilOwnerValidation:true,videoRequiredNow:false};
console.log(JSON.stringify({summary,errors:fail,warnings:warn.slice(0,55)},null,2));
if(fail.length)process.exit(1);
