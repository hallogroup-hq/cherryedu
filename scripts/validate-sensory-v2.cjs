/**
 * Sensory V2 deterministic source audit. Read-only: never publishes or grants certification.
 * Run: node scripts/validate-sensory-v2.cjs
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),issues=[],warnings=[];
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const fail=s=>issues.push(s);
const codes=Array.from({length:10},(_,i)=>'M'+String(i+1).padStart(2,'0'));
const parts=['m01-02','m03-04','m05-06','m07-08','m09-10'];
let modules=[],lessons=[];
for(const part of parts){
 const txt=read('lib/data/sensory-v2/'+part+'.ts');
 const match=txt.match(/export const SENSORY_V2_M\d\d_\d\d = (\{[\s\S]*\}) as const;/);
 if(!match){fail('Cannot read sensory source '+part);continue;}
 try{const s=JSON.parse(match[1]);modules.push(...s.modules);lessons.push(...s.lessons);}
 catch(e){fail('Invalid source JSON in '+part);}
}
if(modules.length!==10)fail('Need 10 modules: '+modules.length);
if(lessons.length!==40)fail('Need 40 lessons: '+lessons.length);
if(new Set(modules.map(m=>m.code)).size!==10)fail('Duplicate module');
if(new Set(lessons.map(l=>l.id)).size!==40)fail('Duplicate lesson');
const banned=/\bDRAFT\b|\bPREVIEW\b|\bBETA\b|\bTBD\b|\bCOMING SOON\b|validasi akademik oleh pengelola|sudah terakreditasi SCA|otomatis mendapat lisensi/i;
for(const code of codes){
 if(modules.filter(m=>m.code===code).length!==1)fail('Missing '+code);
 for(let i=1;i<=4;i++){
  const id='m'+code.slice(1).toLowerCase()+'-l'+String(i).padStart(2,'0');
  if(lessons.filter(l=>l.id===id).length!==1)fail('Missing '+id);
 }
}
for(const l of lessons){
 const words=l.content.trim().split(/\s+/).length;
 if(words<145)fail('Too short '+l.id+' '+words);
 if((l.content.match(/^## /gm)||[]).length!==5)fail('Missing concept-to-decision structure '+l.id);
 if(!/(latihan|eksperimen|susun|buat|banding|tulis)/i.test(l.content))fail('No learner task '+l.id);
 if(!/(jika|ketika|bila|namun|tetapi)/i.test(l.content))warnings.push('Limited conditional language '+l.id);
 if(banned.test(l.title+' '+l.content))fail('Student editorial leakage '+l.id);
}
const source=read('lib/data/sensoryV2Practice.ts');
function parse(key,type){
 const regex=new RegExp('export const '+key+':'+type+'\\[\\]=([\\[\\]\\s\\S]*?);\\n');
 const m=source.match(regex);if(!m){fail('Cannot parse '+key);return [];}
 try{return JSON.parse(m[1]);}catch(e){fail('Bad JSON '+key+' '+String(e));return [];}
}
const cases=parse('SENSORY_V2_CASES','SensoryCase');
const diag=parse('SENSORY_V2_DIAGNOSTICS','SensoryDiagnostic');
if(cases.length!==20)fail('Need 20 cases: '+cases.length);
if(diag.length!==20)fail('Need 20 diagnostics: '+diag.length);
for(const [kind,data] of [['case',cases],['diagnostic',diag]]){
 if(new Set(data.map(q=>q.id)).size!==data.length)fail('Duplicate '+kind+' ID');
 for(const code of codes)if(data.filter(q=>q.moduleId===code).length!==2)fail(kind+' per module wrong '+code);
 for(const q of data){
  if(banned.test(JSON.stringify(q)))fail('Status leak in '+q.id);
  if(kind==='case'){
   for(const key of ['brief','prompt','newEvidence','revisionPrompt','modelReasoning'])
    if(!q[key]||q[key].trim().length<30)fail('Shallow '+q.id+' '+key);
  }else{
   if(!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4)fail('Bad four-choice item '+q.id);
   if(!Number.isInteger(q.correctIndex)||q.correctIndex<0||q.correctIndex>3)fail('Correct index '+q.id);
   if(!q.explanation||q.explanation.length<60)fail('Weak explanation '+q.id);
  }
 }
}
const divesTxt=read('lib/data/sensoryV2DeepDives.ts');
const match=divesTxt.match(/export const SENSORY_V2_DEEP_DIVES:Record<string,string>=(\{[\s\S]*?\});/);
let dives={};
if(!match)fail('Research investigations missing');
else try{dives=JSON.parse(match[1]);}catch(e){fail('Bad deep dive JSON');}
if(Object.keys(dives).length!==10)fail('Need 10 field investigations');
for(const [k,v] of Object.entries(dives)){
 if(!lessons.some(l=>'sv2-'+l.id===k))fail('Orphan investigation '+k);
 if(v.trim().split(/\s+/).length<140)fail('Weak investigation '+k);
 if(banned.test(v))fail('Leaked status in investigation '+k);
}
for(const target of ['app/sensory-v2/page.tsx','app/sensory-v2/[lessonId]/page.tsx','app/sensory-v2/practice/[moduleId]/page.tsx']){
 const content=read(target);
 if(!content.includes("process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled'")||!content.includes('notFound()'))fail('Review env guard missing '+target);
 if(/setUserProgress|issueCertificate|syncTransaction|enrollInPath|recordQuizAttempt/.test(content))fail('Legacy mutation '+target);
}
const catalog=read('app/paths/page.tsx');
for(const role of ['home_brewer','roaster','q_grader','q_processor','farmer','business','barista']){
 if(!catalog.includes(role+": 'Spesialisasi"))fail('Incorrect specialization labeling '+role);
}
const reader=read('app/sensory-v2/[lessonId]/page.tsx');
if(!reader.includes('SENSORY_V2_DEEP_DIVES[l.id]')||!reader.includes('<SensoryConceptVisual')||!reader.includes('<SensoryV2Lab'))fail('Missing learner experience embeds');
const visual=read('components/sensory-v2/SensoryConceptVisual.tsx');
if(!visual.includes('role="img"'))fail('Inaccessible diagram');
for(const code of codes)if(!visual.includes(code+':{title:'))fail('Missing concept diagram '+code);
const lab=read('components/sensory-v2/SensoryV2Lab.tsx');
for(const hook of ['triangleP','expectedDose','median','mean','setPick','setTrials'])if(!lab.includes(hook))fail('Missing real computation/interactivity '+hook);
const practice=read('components/sensory-v2/SensoryV2Practice.tsx');
for(const behavior of ['newEvidence','modelReasoning','revealed[c.id]','completed[c.id]','(responses[c.id]||','(revisions[c.id]||'])
 if(!practice.includes(behavior))fail('Incomplete learner decision flow '+behavior);
if(banned.test(modules.map(x=>x.title+' '+x.description).join(' ')))fail('Learner catalog has editorial copy');
const report={modules:modules.length,lessons:lessons.length,minLessonWords:Math.min(...lessons.map(l=>l.content.split(/\s+/).length)),conceptFigures:10,conceptLabs:10,fieldInvestigations:Object.keys(dives).length,evidenceRevisionCases:cases.length,diagnostics:diag.length,warnings,issues};
console.log(JSON.stringify(report,null,2));if(issues.length)process.exit(1);
