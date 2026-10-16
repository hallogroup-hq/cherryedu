#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const issues=[],fail=s=>issues.push(s);
const read=p=>fs.readFileSync(p,'utf8');
const src=read('lib/data/qProcessorV2Course.ts');
function parse(part){
 const match=src.match(new RegExp('export const Q_PROCESSOR_V2_'+part+':[^=]*=([\\s\\S]*?);(?:\\r?\\n|$)'));
 if(!match)throw Error('Cannot read Q Processor '+part);
 return JSON.parse(match[1]);
}
const modules=parse('MODULES'),lessons=parse('LESSONS');
if(modules.length!==8||lessons.length!==40)fail('Eight modules and forty lessons required');
const seen=new Set(),headings=new Set(),scores={};
const blocked=new Set(['konsep kerja','mengapa hal ini terjadi?','protokol penerapan dan pencatatan','contoh keputusan di indonesia','pertanyaan untuk diuji']);
for(let i=1;i<=8;i++){
 const mod='QP'+String(i).padStart(2,'0');
 if(modules[i-1]?.code!==mod)fail('Module order '+mod);
 const batch=lessons.filter(x=>x.moduleId===mod);
 if(batch.length!==5)fail('Module '+mod+' must have five lessons');
 for(let j=0;j<batch.length;j++){
  if(batch[j].id!=='qp2-m'+String(i).padStart(2,'0')+'-l'+String(j+1).padStart(2,'0')||batch[j].order!==j+1)fail('Stable ID/order '+mod+'/'+(j+1));
 }
 scores[mod]=batch.length;
}
for(const item of lessons){
 if(seen.has(item.id))fail('Duplicate ID '+item.id);seen.add(item.id);
 const words=item.content.trim().split(/\s+/).length;
 if(words<450)fail('Thin teaching '+item.id+' '+words);
 if(item.minutes<15||item.minutes>45)fail('Lesson duration outside 15-45 min '+item.id);
 if(!/\[[^\]]+\]\(https?:\/\//.test(item.content))fail('Missing source '+item.id);
 if(!/^## /m.test(item.content)||!/^### /m.test(item.content))fail('No deep instructional structure '+item.id);
 if(/\b(?:DRAFT|TBD|PLACEHOLDER|QA INTERNAL|COMING SOON|AI GENERATED)\b/i.test(item.content+' '+item.title))fail('Internal copy '+item.id);
 for(const h of item.content.match(/^## ([^\n]+)/gm)||[]){
  const name=h.slice(3).toLowerCase().trim();
  if(blocked.has(name))fail('Old generic heading '+item.id+' '+name);
  if(['rujukan bacaan','bacaan penunjang','praktik akhir modul','tugas akhir modul'].includes(name))continue;
  if(headings.has(name))fail('Duplicate instructional section '+item.id+' '+name);headings.add(name);
 }
}
const has=(id,v)=>{const l=lessons.find(x=>x.id===id);if(!l||!l.content.includes(v))fail('Missing topic/claim '+id+': '+v)};
has('qp2-m01-l05','3.600 kg');
has('qp2-m02-l05','perlakuan');
has('qp2-m03-l05','12.000');
has('qp2-m04-l04','basis');
has('qp2-m05-l05','tidak');
has('qp2-m06-l04','11,4667%');
has('qp2-m07-l05','SNI 2907:2008');
has('qp2-m08-l05','20,56%');
const exam=JSON.parse(read('lib/server/final-exams/q-processor.json'));
if(exam.path!=='q-processor'||exam.version!=='2026-10-16.1'||exam.items.length!==24)fail('Exam version and total must match 24');
const position=[0,0,0,0],bankIds=new Set(),stems=new Set(),byMod={};
for(const q of exam.items){
 if(bankIds.has(q.id)||stems.has(q.prompt))fail('Duplicate exam id/stem '+q.id);
 bankIds.add(q.id);stems.add(q.prompt);
 if(q.prompt.length<65||q.explanation.length<70||q.choices.length!==4)fail('Thin question '+q.id);
 if(new Set(q.choices).size!==4)fail('Duplicated options '+q.id);
 if(!Number.isInteger(q.correct_index)||q.correct_index<0||q.correct_index>3)fail('Invalid key '+q.id);
 else position[q.correct_index]++;
 if(q.module_ids.length!==1)fail('One module per question '+q.id);
 const id=q.module_ids[0];byMod[id]=(byMod[id]||0)+1;
}
if(position.some(n=>n!==6))fail('A/B/C/D key positions must be 6 each');
for(const mod of modules)if(byMod[mod.code]!==3)fail('Every module assessed three times '+mod.code);
const shortest=exam.items.filter(q=>q.choices[q.correct_index]?.length===Math.min(...q.choices.map(x=>x.length))).length;
const longest=exam.items.filter(q=>q.choices[q.correct_index]?.length===Math.max(...q.choices.map(x=>x.length))).length;
if(shortest>6||longest>6)fail('Predictable answer by length');
const reader=read('app/q-processor-v2/[lessonId]/page.tsx');
if(!reader.includes('lesson.order===5&&scenario')||!reader.includes('CuratedLessonFrame')||!reader.includes('QProcessorYieldCalculator'))fail('Approved reader and final lesson practice must persist');
if(!read('lib/finalExamPaths.ts').includes("count:24 }"))fail('Final exam metadata incomplete');
const matrix=[
 ['cherry reconciliation',1800+120+80,2000],
 ['capacity one day lost',900*4,3600],
 ['capacity excess',5000-3600,1400],
 ['water reconciliation',12000-5000-4000,3000],
 ['natural same material basis',1200/400,3],
 ['moisture five points',(11+11.2+11.1+12+12.1)/5,11.48],
 ['moisture six points',(11+11.2+11.1+12+12.1+11.4)/6,11.4666666667],
 ['parchment saleable',1530/2000*100,76.5],
 ['green landed model',100000000/1530,65359.477124183],
 ['buyer accepted volume',100000000/1450,68965.517241379],
 ['capstone yield',370/1800*100,20.555555555556],
 ['capstone cost',24000000/370,64864.864864865]
];
for(const [what,a,e] of matrix)if(Math.abs(a-e)>1e-6)fail('Numeric worked example '+what);
console.log(JSON.stringify({status:issues.length?'FAIL':'PASS',modules:scores,lessons:lessons.length,exam:exam.items.length,answerKeys:position,shortest,longest,mathChecks:matrix.length,issues},null,2));
if(issues.length)process.exit(1);
