#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const specs=[
 ['foundation',12,['M01','M02','M03','M04','M05','M06','M07']],
 ['barista',12,Array.from({length:12},(_,i)=>'M'+String(i+1).padStart(2,'0'))],
 ['home-brewer',12,Array.from({length:10},(_,i)=>'HB'+String(i+1).padStart(2,'0'))],
 ['roaster',12,Array.from({length:10},(_,i)=>'M'+String(i+1).padStart(2,'0'))],
 ['sensory',12,Array.from({length:10},(_,i)=>'M'+String(i+1).padStart(2,'0'))],
 ['business-roastery',20,Array.from({length:21},(_,i)=>'B'+String(i+1).padStart(2,'0'))]
];
const failures=[],seenIds=new Set(),seenPrompts=new Set(),detail=[];
const norm=s=>s.toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const fail=x=>failures.push(x);
for(const [slug,target,modules] of specs){
 const f=path.join(__dirname,'../lib/server/final-exams',slug+'.json');
 const bank=JSON.parse(fs.readFileSync(f,'utf8'));
 if(bank.path!==slug||bank.items.length!==target)fail(slug+' expected '+target+' questions');
 const counts=[0,0,0,0],foundMods=new Set(),caseCount=bank.items.filter(x=>x.case).length;
 if(caseCount<2)fail(slug+' needs at least 2 changing-context cases');
 for(const q of bank.items){
  if(seenIds.has(q.id))fail('Duplicate ID '+q.id);seenIds.add(q.id);
  const key=norm(q.prompt);
  if(seenPrompts.has(key))fail('Duplicate stem '+q.id);seenPrompts.add(key);
  if(!q.id.startsWith(slug+'-')||q.type!=='single_choice'||!q.objective)fail('Invalid identity or type '+q.id);
  if(q.prompt.length<65||q.explanation.length<70)fail('Thin stem or explanation '+q.id);
  if(!Array.isArray(q.choices)||q.choices.length!==4||new Set(q.choices.map(norm)).size!==4)fail('Choices invalid '+q.id);
  if(!Number.isInteger(q.correct_index)||q.correct_index<0||q.correct_index>3)fail('Invalid key '+q.id);
  if(!Array.isArray(q.module_ids)||q.module_ids.length===0)fail('Missing module mapping '+q.id);
  for(const mod of q.module_ids){if(!modules.includes(mod))fail('Unknown module '+q.id+': '+mod);foundMods.add(mod)}
  if(/\b(?:DRAFT|PREVIEW|BETA|TBD|TODO|INTERNAL|PLACEHOLDER|COMING SOON)\b/i.test(q.prompt+' '+q.choices.join(' ')+q.explanation))fail('Internal copy '+q.id);
  counts[q.correct_index]++;
 }
 for(const m of modules)if(!foundMods.has(m))fail('Unassessed module '+slug+'/'+m);
 if(Math.max(...counts)-Math.min(...counts)>1)fail('Answer position imbalance '+slug+': '+counts.join(','));
 const shortestCount=bank.items.filter(q=>q.choices[q.correct_index].length===Math.min(...q.choices.map(x=>x.length))).length;
 if(shortestCount>Math.floor(bank.items.length*.4))fail('Predictable shortest-answer bias '+slug+': '+shortestCount+'/'+bank.items.length);
 const wrongAnswerTexts=bank.items.flatMap(q=>q.choices.filter((_,i)=>i!==q.correct_index));
 if(wrongAnswerTexts.some(x=>x.trim().length<3))fail('Unusable distractor '+slug);

 detail.push({path:slug,questions:bank.items.length,cases:caseCount,covered:foundMods.size,answerPositions:counts});
}
// Independent arithmetic/key fixtures. Assertions recompute expected outputs.
const fixtures={
 'barista-10':{correct:'Rp4.800',computed:20*240000/1000,expected:4800},
 'home-brewer-02':{correct:'16:1',computed:240/15,expected:16},
 'home-brewer-09':{correct:'240 g,',computed:160+80,expected:240},
 'home-brewer-11':{correct:'Sekitar 16,7%',computed:(1.25/100)*200/15*100,expected:16.6666666667},
 'roaster-05':{correct:'84%',computed:21/25*100,expected:84},
 'business-roastery-07':{correct:'Rp200.000',computed:Math.max(30,50)*4000,expected:200000},
 'business-roastery-12':{correct:'Rp150.000/kg',computed:12000000/80,expected:150000},
 'business-roastery-13':{correct:'25%',computed:(200000-150000)/200000*100,expected:25},
 'business-roastery-14':{correct:'300 kg',computed:9000000/30000,expected:300}
};
for(const [id,fixture] of Object.entries(fixtures)){
 const slug=specs.find(x=>id.startsWith(x[0]+'-'))?.[0];
 if(!slug){fail('Unknown math fixture '+id);continue}
 const bank=JSON.parse(fs.readFileSync(path.join(__dirname,'../lib/server/final-exams',slug+'.json'),'utf8'));
 const q=bank.items.find(x=>x.id===id);
 if(!q||!q.choices[q.correct_index].startsWith(fixture.correct))fail('Math key mismatch '+id);
 if(Math.abs(fixture.computed-fixture.expected)>0.000001)fail('Math computation incorrect '+id);
}
const studentFiles=['app/ujian-akhir/page.tsx','app/ujian-akhir/[path]/page.tsx','components/final-exams/FinalExamRunner.tsx'];
for(const file of studentFiles){
 const code=fs.readFileSync(path.join(__dirname,'..',file),'utf8');
 if(/(?:DRAFT|QA INTERNAL|COMING SOON|PLACEHOLDER)/i.test(code))fail('Student-facing internal copy '+file);
}
const api=fs.readFileSync(path.join(__dirname,'../app/api/final-exams/[path]/route.ts'),'utf8');
if(!api.includes('FINAL_EXAM_ENABLED()')||!api.includes('publicExam(params.path)')||!api.includes('gradeExam(params.path'))fail('Server API release gate or grading missing');
const adapter=fs.readFileSync(path.join(__dirname,'../lib/server/finalExamCatalog.ts'),'utf8');
if(!adapter.includes('({id,module_ids,prompt,choices})')||!adapter.includes('Math.ceil(items.length*0.8)'))fail('Public answer filtering or scoring missing');
// Every learner journey ends at the path's exam; never rely on a private server flag inside client code.
const reader=fs.readFileSync(path.join(__dirname,'../components/curated/CuratedLessonFrame.tsx'),'utf8');
const overview=fs.readFileSync(path.join(__dirname,'../components/curated/CuratedCourseOverview.tsx'),'utf8');
const foundationReader=fs.readFileSync(path.join(__dirname,'../app/paths/[slug]/lessons/[lessonId]/page.tsx'),'utf8');
const store=fs.readFileSync(path.join(__dirname,'../lib/store.tsx'),'utf8');
if(!reader.includes('continue-to-final-exam')||!reader.includes('examHref'))fail('Specialty lesson-to-exam continuation missing');
if(!overview.includes('examHref&&<section')||overview.includes("examHref&&process.env.CHERRYEDU_FINAL_EXAMS_REVIEW"))fail('Specialty syllabus exam missing or uses inaccessible server env inside client component');
if(!foundationReader.includes('continue-to-final-exam')||!foundationReader.includes('/ujian-akhir/foundation'))fail('Foundation last-lesson exam continuation missing');
for(const [course,exam] of [
 ['barista-v2','barista'],['home-brewer-v2','home-brewer'],['roaster-v2','roaster'],
 ['sensory-v2','sensory'],['business-roastery-v1','business-roastery']
]){
 const p=fs.readFileSync(path.join(__dirname,'../app',course,'page.tsx'),'utf8');
 const l=fs.readFileSync(path.join(__dirname,'../app',course,'[lessonId]/page.tsx'),'utf8');
 if(!p.includes('/ujian-akhir/'+exam)||!l.includes('/ujian-akhir/'+exam))fail('Missing syllabus/last lesson exam route '+course);
}
if(!store.includes("if (!CURATED_PREVIEW && passed && quiz.quiz_scope === 'final_exam'")||
   !store.includes("if (!CURATED_PREVIEW) setQuizAttempts")||
   !store.includes('if (passed && !CURATED_PREVIEW)'))fail('Legacy preview quiz must not mutate attempts, XP or certificates');
console.log(JSON.stringify({total:detail.reduce((a,x)=>a+x.questions,0),detail,arithmeticFixtures:Object.keys(fixtures).length,issues:failures},null,2));
if(failures.length)process.exit(1);
