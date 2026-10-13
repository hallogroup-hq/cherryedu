/**
 * Roaster V2 authoring gate. Read-only inspection of an isolated course candidate.
 * Run: node scripts/validate-roaster-v2.cjs
 * Does not grant credits, approve curriculum, or publish any existing path.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),issues=[],warnings=[];
const fail=x=>issues.push(x),warn=x=>warnings.push(x);
const file=x=>fs.readFileSync(path.join(root,x),'utf8');
const codes=Array.from({length:10},(_,i)=>'M'+String(i+1).padStart(2,'0'));
const parts=['m01-02','m03-04','m05-06','m07-08','m09-10'];
let modules=[],lessons=[];
for(const part of parts){
 const source=file('lib/data/roaster-v2/'+part+'.ts');
 const m=source.match(/export const ROASTER_V2_M\d\d_\d\d=(\{[\s\S]*\}) as const;/);
 if(!m){fail('Cannot parse module source '+part);continue;}
 let data;
 try{data=JSON.parse(m[1])}catch(e){fail('Invalid JSON literal in '+part);continue;}
 modules.push(...data.modules);
 lessons.push(...data.lessons);
}
if(modules.length!==10)fail('Expected 10 modules, found '+modules.length);
if(lessons.length!==40)fail('Expected 40 distinct lessons, found '+lessons.length);
if(new Set(modules.map(x=>x.code)).size!==10)fail('Duplicate module code');
if(new Set(lessons.map(x=>x.id)).size!==40)fail('Duplicate lesson slot');
for(const code of codes){
 if(modules.filter(m=>m.code===code).length!==1)fail('Invalid module '+code);
 for(let l=1;l<=4;l++)if(lessons.filter(x=>x.id==='m'+code.slice(1).toLowerCase()+'-l'+String(l).padStart(2,'0')).length!==1)
  fail('Missing unique lesson '+code+' L'+l);
}
const forbidden=/\bDRAFT\b|\bPREVIEW\b|\bBETA\b|\bTBD\b|\bCOMING SOON\b|review build|validasi akademik oleh (?:pengelola|pemilik)|sertifikasi\s+SCA\s+(?:otomatis|resmi)|SCA certified perfect roast/i;
for(const l of lessons){
 const wordCount=(l.content||'').trim().split(/\s+/).length;
 const sections=(l.content.match(/^## /gm)||[]).length;
 if(wordCount<240)fail('Thin lesson '+l.id+': '+wordCount+' words');
 if(sections<4)fail('Missing conceptual structure '+l.id);
 if(!/\?|mengapa|bagaimana|apa\s+/i.test(l.content))warn('Low inquiry signal '+l.id);
 if(forbidden.test(l.title+'\n'+l.content))fail('Internal/editorial copy leaked '+l.id);
 if(!/(simulasi|uji|eksperimen|latihan|praktik|pengamatan|banding)/i.test(l.content))fail('No authentic learner investigation in '+l.id);
 if(!/(jika|ketika|bila|namun|tetapi)/i.test(l.content))warn('Weak conditional reasoning in '+l.id);
}
function parseBank(key,type){
 const s=file('lib/data/roasterV2Practice.ts');
 const regex=new RegExp('export const '+key+':'+type+'\\[\\]=(\\[[\\s\\S]*?\\]);');
 const m=s.match(regex);
 if(!m){fail('Cannot parse '+key);return [];}
 try{return JSON.parse(m[1]);}catch(e){fail('Invalid JSON '+key);return [];}
}
const cases=parseBank('ROASTER_V2_CASES','RoasterV2Case');
const diagnostics=parseBank('ROASTER_V2_DIAGNOSTICS','RoasterV2Diagnostic');
if(cases.length!==20)fail('Expected 20 two-stage cases, got '+cases.length);
if(diagnostics.length!==20)fail('Expected 20 diagnostics, got '+diagnostics.length);
for(const [kind,data]of [['cases',cases],['diagnostics',diagnostics]]){
 if(new Set(data.map(x=>x.id)).size!==data.length)fail('Duplicate '+kind+' IDs');
 for(const code of codes)if(data.filter(x=>x.module===code).length!==2)fail(kind+' wrong module count '+code);
 for(const x of data){
  const fields=kind==='cases'?['brief','prompt','newEvidence','revisionPrompt','modelReasoning']:['scenario','rationale'];
  for(const f of fields)if(typeof x[f]!=='string'||x[f].trim().length<24)fail(x.id+' shallow '+f);
  if(forbidden.test(JSON.stringify(x)))fail(x.id+' internal copy leaked');
  if(kind==='diagnostics'){
   if(!Array.isArray(x.options)||x.options.length!==4||new Set(x.options.map(v=>v.text)).size!==4)fail(x.id+' invalid choices');
   if(!Number.isInteger(x.correct)||x.correct<0||x.correct>3)fail(x.id+' invalid correct index');
   for(const o of x.options||[])if(typeof o.feedback!=='string'||o.feedback.length<50)fail(x.id+' missing option feedback');
  }
 }
}
for(let i=0;i<4;i++)if(diagnostics.filter(x=>x.correct===i).length!==5)fail('Answer distribution unbalanced at '+i);
const learnerRoutes=['app/roaster-v2/page.tsx','app/roaster-v2/[lessonId]/page.tsx','app/roaster-v2/practice/[moduleId]/page.tsx'];
for(const rel of learnerRoutes){
 const src=file(rel);
 if(!src.includes("process.env.CHERRYEDU_ROASTER_V2_REVIEW!=='enabled'"))fail('Missing server-side access gate '+rel);
 if(!src.includes('notFound()'))fail('Missing notFound on disabled '+rel);
 if(/setUserProgress|completeLesson|issueCertificate|syncTransaction|enrollInPath|recordQuizAttempt/.test(src))fail('Legacy write detected '+rel);
}
const list=file('lib/data/roasterV2Course.ts');
if(!list.includes('ROASTER_V2_LESSONS.length!==40')||!list.includes('new Set(ROASTER_V2_LESSONS.map(x=>x.id)).size!==40'))fail('No runtime inventory assertion');
const reader=file('app/roaster-v2/[lessonId]/page.tsx');
if(!reader.includes('ROASTER_V2_DEEP_DIVES[l.id]'))fail('Field investigations not mounted in learner reader');
if(!reader.includes('RoasterConceptVisualExtra'))fail('Extra concept diagrams not mounted');
const work=file('components/roaster-v2/RoasterV2Practice.tsx');
const lab=file('components/roaster-v2/RoasterV2Lab.tsx');
const visual=file('components/roaster-v2/RoasterConceptVisual.tsx');
for(const s of ['RoasterConceptVisual','RoasterV2Lab','RoasterV2Practice']){
 if(![reader,work,lab,file('app/roaster-v2/practice/[moduleId]/page.tsx')].some(f=>f.includes(s)))fail('Missing surface '+s);
}
for(const required of ['n.answer.trim().length<40','n.revision.trim().length>=40','c.newEvidence','c.modelReasoning','q.options[p.value].feedback']){
 if(!work.includes(required))fail('Practice attempts or explanations incomplete: '+required);
}
for(const required of ['role="img"','<title','<desc','M03','M04','M05','M09']){
 if(!visual.includes(required))fail('Concept diagram missing accessibility or topic '+required);
}
const deepSource=file('lib/data/roasterV2DeepDives.ts');
const deepMatch=deepSource.match(/export const ROASTER_V2_DEEP_DIVES:Record<string,string>=(\\{[\\s\\S]*?\\});/);
if(!deepMatch)fail('Cannot parse field investigation inventory');
let deep={};
if(deepMatch)try{deep=JSON.parse(deepMatch[1]);}catch(e){fail('Invalid field investigation source');}
const expectedDives=['M01-L01','M02-L02','M03-L01','M04-L03','M05-L02','M06-L02','M07-L02','M08-L02','M09-L04','M10-L04'].map(x=>'rv2-'+x.toLowerCase());
if(Object.keys(deep).length!==10)fail('Expected 10 field investigations');
for(const id of expectedDives){
 const body=deep[id];
 if(!body)fail('Missing key field investigation '+id);
 else if(body.trim().split(/\s+/).length<170)fail('Field investigation too shallow '+id);
 if(body&&forbidden.test(body))fail('Editorial status leaked in field investigation '+id);
}
const extraVisual=file('components/roaster-v2/RoasterConceptVisualExtra.tsx');
for(const code of ['M01','M02','M06','M07','M08','M10']){
 if(!extraVisual.includes(code+':{title:'))fail('Missing additional science diagram '+code);
}
for(const required of ['role="img"','<title','description']){
 if(!extraVisual.includes(required))fail('Additional diagram accessibility incomplete '+required);
}
for(const required of ['Math.round(words/70)','moduleId','ROASTER_V2_M09_10'])if(!list.includes(required))fail('Course assembly '+required+' missing');
if(/\b(DRAFT|PREVIEW|BETA|TBD|COMING SOON)\b/i.test(
 modules.map(x=>x.title+' '+x.description).join(' ')+lessons.map(x=>x.title+' '+x.content).join(' ')||
 ''))fail('Editorial tag in learner content');
const result={moduleCount:modules.length,lessonCount:lessons.length,caseCount:cases.length,
 diagnosticCount:diagnostics.length,conceptLabs:10,originalDiagrams:10,fieldInvestigations:Object.keys(deep).length,
 minLessonWords:Math.min(...lessons.map(x=>x.content.trim().split(/\s+/).length)),
 warningCount:warnings.length,warnings,issues,
 releaseGates:['CherryEdu owner must academically validate','Novice and working-roaster comprehension pilot not executed',
 'Isolated course still requires enrolment/payment/progress migration planning',
 'Machine operation needs supervised practical competency validation','Video is deferred and is NOT a release requirement']};
console.log(JSON.stringify(result,null,2));
if(issues.length)process.exit(1);
