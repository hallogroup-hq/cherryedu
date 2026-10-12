/**
 * Home Brewer V2 zero-deploy content, interaction & security authoring gate.
 * Tests are deterministic; do not pass a course release or credential approval.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../docs/curriculum/home-brewer-v2');
const lessonDir=path.join(root,'03-lessons');
const counts={M01:4,M02:4,M03:4,M04:4,M05:4,M06:4,M07:4,M08:4,M09:4,M10:4};
const issues=[],warnings=[];
const fail=x=>issues.push(x),warn=x=>warnings.push(x);
const all=fs.readdirSync(lessonDir).filter(x=>/^M\d\d-L\d\d-[a-z0-9-]+\.md$/.test(x)).sort();
if(all.length!==40)fail('Expected 40 distinct lesson manuscripts; got '+all.length);
const seen=new Set();
for(const f of all){
 const m=/^(M\d\d)-L(\d\d)/.exec(f);
 if(!m||!counts[m[1]]||Number(m[2])>4)fail('Out of syllabus '+f);
 const key=m[1]+'.'+m[2];if(seen.has(key))fail('Duplicate slot '+key);seen.add(key);
 const c=fs.readFileSync(path.join(lessonDir,f),'utf8'),words=c.trim().split(/\s+/).length;
 if(words<310)fail('Thin lesson '+f+' ('+words+' words)');
 if(words<370)warn('Depth review recommended '+f+' ('+words+' words)');
 if((c.match(/^## /gm)||[]).length<5)fail('Insufficient scaffolding '+f);
 if(!/^# .+/m.test(c))fail('Missing lesson title '+f);
 if(/review build|DRAFT REVIEW|Beta Publik|video coming soon|Sertifikasi Profesional/i.test(c))fail('Release/credential copy leaked '+f);
 if(!/Eksperimen|percobaan|coba|latihan/i.test(c))fail('No learner action '+f);
 if(!/berubah|hipotesis|informasi|kesimpulan|dugaan/i.test(c))fail('Missing mechanism/transfer thinking '+f);
}
for(const m of Object.keys(counts))for(let i=1;i<=counts[m];i++){
 const id=m+'.'+String(i).padStart(2,'0');if(!seen.has(id))fail('Missing '+id);
}
for(const [file,exportName,expected,perModule] of [
 ['homeBrewerV2Cases.ts','HOME_BREWER_CASES',20,2],
 ['homeBrewerV2Diagnostics.ts','HOME_BREWER_DIAGNOSTICS',20,2]
]){
 const s=fs.readFileSync(path.resolve(__dirname,'../lib/data/'+file),'utf8');
 const arr=s.match(new RegExp('export const '+exportName+'[^=]*=(\\[[\\s\\S]*?\\]);'));
 if(!arr){fail('Could not parse '+file);continue;}
 const data=JSON.parse(arr[1]);
 if(data.length!==expected)fail(file+' expected '+expected+' entries; got '+data.length);
 const ids=new Set();
 for(const x of data){
  if(ids.has(x.id))fail('Duplicate '+x.id);ids.add(x.id);
  if(!counts[x.module])fail('Unknown module '+x.module);
  for(const k of (file.includes('Cases')?['brief','prompt','newEvidence','revisionPrompt','modelReasoning']:['scenario','rationale'])){
   if(!x[k]||x[k].length<28)fail(x.id+' lacks substantive '+k);
  }
  if(file.includes('Diagnostics')){
   if(x.options.length!==4||new Set(x.options.map(v=>v.text)).size!==4)fail(x.id+' invalid unique options');
   if(!Number.isInteger(x.correct)||x.correct<0||x.correct>3)fail('Invalid answer '+x.id);
   for(const o of x.options)if(o.feedback.length<45)fail(x.id+' shallow option explanation: '+o.text);
  }
 }
 for(const m of Object.keys(counts))if(data.filter(q=>q.module===m).length!==perModule)fail(file+': '+m+' needs exactly '+perModule);
 if(file.includes('Diagnostics')){
  for(let i=0;i<4;i++){const n=data.filter(q=>q.correct===i).length;if(n!==5)fail('Diagnostic answer index '+i+' is '+n+' (expect 5)');}
  // Detect trivial answer-length leak (correct option longest in all items).
  const longest=data.filter(q=>q.options[q.correct].text.length===Math.max(...q.options.map(z=>z.text.length))).length;
  if(longest>=15)fail('Diagnostic answers trivially leaked by longest-choice pattern: '+longest);
 }
}
const reader=fs.readFileSync(path.resolve(__dirname,'../app/home-brewer-v2/[lessonId]/page.tsx'),'utf8');
const overview=fs.readFileSync(path.resolve(__dirname,'../app/home-brewer-v2/page.tsx'),'utf8');
const practice=fs.readFileSync(path.resolve(__dirname,'../app/home-brewer-v2/practice/[moduleId]/page.tsx'),'utf8');
for(const [label,s]of[['lesson',reader],['overview',overview],['practice',practice]]){
 if(!s.includes("CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled'"))fail(label+' not gated at server');
 if(/setUserProgress|completeLesson|issueCertificate|syncTransaction/.test(s))fail(label+' improperly touches legacy grade');
}
const labs=fs.readFileSync(path.resolve(__dirname,'../components/home-brewer-v2/HomeBrewerLab.tsx'),'utf8');
const visual=fs.readFileSync(path.resolve(__dirname,'../components/home-brewer-v2/HomeBrewerConceptVisual.tsx'),'utf8');
const ui=fs.readFileSync(path.resolve(__dirname,'../components/home-brewer-v2/HomeBrewerPractice.tsx'),'utf8');
for(const m of Object.keys(counts))if(!labs.includes(m+':<'))fail('Missing interactive lab '+m);
for(const m of Object.keys(counts))if(!visual.includes(m+':{'))fail('Missing original visual '+m);
for(const requirement of ['note.answer.trim().length<35','note.revision.trim().length<35','newEvidence','modelReasoning','ans.submitted&&ans.selected!==null','getHomeBrewerDiagnostics']){
 if(!ui.includes(requirement))fail('Missing attempt-before-explanation flow: '+requirement);
}
const compiler=fs.readFileSync(path.resolve(__dirname,'generate-home-brewer-v2.cjs'),'utf8');
if(!compiler.includes('files.length!==40'))fail('Content compiler not checking full inventory');
const result={modules:10,lessons:all.length,changingEvidenceCases:20,formativeDiagnostics:20,conceptLabs:10,conceptDiagrams:10,issues,warnings,releaseBlockers:[
 'Owner must validate academic content and approve publication',
 'Real novice comprehension/usability pilot not executed',
 'Legacy progress, account enrollment and production publishing integration not done',
 'Practical brewing skill not inferred from online quiz',
 'Videos expressly deferred and NOT a gate for this version'
]};
console.log(JSON.stringify(result,null,2));
if(issues.length)process.exit(1);
