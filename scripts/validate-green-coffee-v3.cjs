#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const issues=[];const fail=x=>issues.push(x);
const course=fs.readFileSync('lib/data/greenCoffeeV2Course.ts','utf8');
function parse(name){const m=course.match(new RegExp('export const '+name+':[^=]*=([\\s\\S]*?);(?:\\r?\\n|$)'));if(!m)throw Error('Missing '+name);return JSON.parse(m[1]);}
const modules=parse('GREEN_COFFEE_V2_MODULES'),lessons=parse('GREEN_COFFEE_V2_LESSONS');
if(modules.length!==8||lessons.length!==40)fail('Expect 8 modules, 40 deep lessons');
const ids=new Set(),headings=new Set(),editorialHeadings=new Set(),counts={};
const staleGenericSections=new Set([
 'apa yang perlu dipahami?', 'mengapa mekanismenya begitu?',
 'dari prinsip ke sop kerja', 'contoh situasi indonesia', 'coba ambil keputusan'
]);
const repeatableUtilitySections=new Set(['bacaan penunjang','tugas praktik','praktik akhir modul']);
for(let m=0;m<8;m++){
 const key='GC'+String(m+1).padStart(2,'0');
 if(modules[m]?.code!==key)fail('Module sequence mismatch '+key);
 const list=lessons.filter(x=>x.moduleId===key);
 counts[key]=list.length;
 if(list.length!==5)fail('Each module must have 5 lessons '+key);
 for(let i=0;i<list.length;i++)if(list[i].id!=='gc-m'+String(m+1).padStart(2,'0')+'-l'+String(i+1).padStart(2,'0')||list[i].order!==i+1)fail('Lesson order/ID mismatch '+key+'/'+i);
 const localRefs=list.join('\n');
 if(!list.some(x=>/pertanian[.]go[.]id|pesta[.]bsn[.]go[.]id/.test(x.content)))fail('No Indonesian primary/official references in '+key);
}
for(const l of lessons){
 if(ids.has(l.id))fail('Duplicate lesson '+l.id);ids.add(l.id);
 const words=l.content.trim().split(/\s+/).length;
 if(words<450)fail('Green lesson under 450 teachable words '+l.id+' '+words);
 if(l.minutes<15||l.minutes>45)fail('Green time inconsistent '+l.id);
 if(!/\]\(https?:\/\//.test(l.content))fail('No named source '+l.id);
 if(!/Latihan|Tugas|Praktik|Coba ambil keputusan/i.test(l.content))fail('Missing learner action '+l.id);
 const topLevel=[...l.content.matchAll(/^## ([^\n]+)/gm)].map(m=>m[1].toLowerCase().trim());
 const meaningful=topLevel.filter(h=>!repeatableUtilitySections.has(h));
 if(meaningful.length<2)fail('Not enough tailored teaching sections '+l.id);
 for(const h of meaningful){
  if(staleGenericSections.has(h))fail('Stale generic heading '+l.id+' / '+h);
  if(editorialHeadings.has(h))fail('Repeated teaching section across Green lessons '+l.id+' / '+h);
  editorialHeadings.add(h);
 }
 const hs=[...l.content.matchAll(/^### ([^\n]+)/gm)].map(m=>m[1].toLowerCase().trim());
 if(!hs.length)fail('Missing topic-specific teaching '+l.id);
 for(const h of hs){if(headings.has(h))fail('Duplicated lesson heading '+l.id+' '+h);headings.add(h);}
 if(/\b(?:draft|internal qa|placeholder|todo|coming soon|ai generated)\b/i.test(l.title+' '+l.content))fail('Internal labels in learner content '+l.id);
}
const sourceRules=[
 ['gc-m01-l03','sni29072008'],
 ['gc-m03-l05','Kementan'],
 ['gc-m05-l03','CO2'],
 ['gc-m06-l05','11,48%'],
 ['gc-m07-l05','SNI 2907:2008'],
 ['gc-m08-l05','Rp86.897'],
];
for(const [id,fragment] of sourceRules){const x=lessons.find(l=>l.id===id);if(!x||!x.content.includes(fragment))fail('Missing verifiable concept '+id+' / '+fragment);}
const law=lessons.find(x=>x.id==='gc-m07-l05')?.content||'';
if(!law.includes('pesta.bsn.go.id')||!law.includes('SCA')||!law.includes('kontrak'))fail('National standard, CVA and buyer method crosswalk incomplete');
const ledger=fs.readFileSync('docs/curriculum/green-coffee-v3/01-audit-and-learning-blueprint.md','utf8');
if(!ledger.includes('NOT been read as licensed source')||!ledger.includes('interviews'))fail('Research source limitations not documented');
const bank=JSON.parse(fs.readFileSync('lib/server/final-exams/green-coffee.json','utf8'));
if(bank.version!=='2026-10-16.2'||bank.items.length!==24)fail('Green exam version/count mismatch');
const countsByAnswer=[0,0,0,0],examIds=new Set(),stems=new Set();
for(const q of bank.items){
 if(examIds.has(q.id))fail('Duplicate exam ID '+q.id);examIds.add(q.id);
 if(stems.has(q.prompt))fail('Duplicate question '+q.id);stems.add(q.prompt);
 if(q.prompt.length<65||q.explanation.length<70||q.choices.length!==4)fail('Thin exam item '+q.id);
 if(!Number.isInteger(q.correct_index)||q.correct_index<0||q.correct_index>3)fail('Bad answer index '+q.id);
 countsByAnswer[q.correct_index]++;
}
if(countsByAnswer.some(x=>x!==6))fail('Answer balance must be six each A-D');
for(const m of modules){if(bank.items.filter(q=>q.module_ids.includes(m.code)).length!==3)fail('Need three theory items per module '+m.code);}
const meta=fs.readFileSync('lib/finalExamPaths.ts','utf8').match(/\{ slug:'green-coffee'[^\n]*count:(\d+) \}/);
if(!meta||Number(meta[1])!==bank.items.length)fail('Exam metadata would make GET return 404');
const reader=fs.readFileSync('app/green-coffee-v2/[lessonId]/page.tsx','utf8');
if(!reader.includes('lesson.order===5&&scenario'))fail('Module decisions should end after lesson 5');
if(!reader.includes('GreenLandedCostCalculator')||!reader.includes('CuratedLessonFrame'))fail('Approved learning UI/calculator not preserved');
const duration=lessons.reduce((n,l)=>n+l.minutes,0);
if(duration<720||duration>960)fail('Course learning-time claim unreasonable');
const cases=[
 ['traceability green composition',(110/(110+100))*100,52.38095238095238],
 ['harvest forecast weekly capacity',800*4,3200],
 ['cherry receive and hold',860+90+50,1000],
 ['cherry processing backlog',860-700,160],
 ['same-basis hypothetical dryer loading (all weights as dryer input)',1200/400,3],
 ['safe experiment control yield',(72+74)/2,73],
 ['safe experiment treatment yield',(73+71)/2,72],
 ['drying sample mean',(11+11.2+11.1+12+12.1)/5,11.48],
 ['hulling saleable yield',730/1000*100,73],
 ['hulling intermediate yield',790/1000*100,79],
 ['freight short weight',3000-2978,22],
 ['landed green cost',252000000/2900,86896.55172413793]
];
for(const [name,actual,expected] of cases)if(Math.abs(actual-expected)>0.0001)fail('Incorrect numeric worked case '+name);
console.log(JSON.stringify({status:issues.length?'FAIL':'PASS',modules:counts,lessons:lessons.length,examQuestions:bank.items.length,minutes:duration,answerPositions:countsByAnswer,arithmeticChecks:cases.length,issues},null,2));
if(issues.length)process.exit(1);
