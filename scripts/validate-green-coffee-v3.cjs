#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const src=fs.readFileSync('lib/data/greenCoffeeV2Course.ts','utf8');
const parse=(part)=>JSON.parse(src.match(new RegExp('export const GREEN_COFFEE_V2_'+part+':[^=]*=([\\s\\S]*?);(?:\\r?\\n|$)'))[1]);
const modules=parse('MODULES'), lessons=parse('LESSONS');
const exam=JSON.parse(fs.readFileSync('lib/server/final-exams/green-coffee.json','utf8'));
const store=fs.readFileSync('lib/store.tsx','utf8');
const reader=fs.readFileSync('app/green-coffee-v2/[lessonId]/page.tsx','utf8');
const metadata=fs.readFileSync('lib/finalExamPaths.ts','utf8');
const casebook=fs.readFileSync('docs/curriculum/green-coffee-v3/01-audit-learning-plan.md','utf8');
const problems=[],fail=x=>problems.push(x),counts={};
if(modules.length!==8||lessons.length!==40)fail('Green V3 must have 8 modules and 40 lessons');
if(new Set(lessons.map(l=>l.id)).size!==lessons.length)fail('Duplicate IDs');
for(let i=1;i<=8;i++){
 const mod='GC'+String(i).padStart(2,'0'), a=lessons.filter(l=>l.moduleId===mod);
 counts[mod]=a.length;
 if(a.length!==5)fail('Need five lessons '+mod);
 a.forEach((l,j)=>{if(l.id!=='gc-m'+String(i).padStart(2,'0')+'-l'+String(j+1).padStart(2,'0')||l.order!==j+1)fail('Wrong lesson IDs/order '+l.id)});
}
const deep=new Set(),banned=/\b(?:DRAFT|PREVIEW ONLY|PLACEHOLDER|TODO|AI GENERATED|COMING SOON)\b/i;
for(const l of lessons){
 const wc=l.content.trim().split(/\s+/).length;
 if(wc<480)fail('Too shallow '+l.id+' '+wc);
 if(l.minutes<18||l.minutes>45)fail('Invalid learner time '+l.id);
 if(banned.test(l.title+' '+l.content))fail('Student-facing internal note '+l.id);
 const headings=[...l.content.matchAll(/^### (.+)$/gm)].map(m=>m[1]);
 if(!headings.length)fail('No topic-specific heading '+l.id);
 for(const h of headings){if(deep.has(h))fail('Duplicate deep-dive heading '+h);deep.add(h);}
 if(!/\]\(https:\/\//.test(l.content))fail('Missing named reference '+l.id);
 if(!/Latihan|Praktik|Lembar|Tugas|Coba ambil keputusan/.test(l.content))fail('Missing student action '+l.id);
}
const time=lessons.reduce((x,l)=>x+l.minutes,0);
if(time<750||time>850)fail('Estimate not synced with learning tasks: '+time);
if(!store.includes("'green-coffee-v2'")||!store.includes("'Uji green coffee dengan bukti dari kebun, panen, proses, pengeringan, grading dan ketertelusuran.',8,14]"))fail('Catalog hours missing');
if(!reader.includes('lesson.order===5&&scenario')||!reader.includes('CuratedLessonFrame')||!reader.includes("'/ujian-akhir/green-coffee'"))fail('Missing approved reader and fifth-lesson practice/exam progression');
if(!reader.includes("lesson.moduleId==='GC07'&&lesson.order===4&&<GreenLandedCostCalculator/>"))fail('Existing calibrated price calculator moved or removed');
if(!metadata.includes("courseHref:'/green-coffee-v2',modules:Array.from({length:8},(_,i)=>'GC'+String(i+1).padStart(2,'0')),count:24"))fail('Public exam count not matched to bank');
if(exam.path!=='green-coffee'||exam.version!=='2026-10-16.1'||exam.items.length!==24)fail('Versioned 24-item exam required');
const positions=[0,0,0,0],covered={};
for(const q of exam.items){
 if(!Array.isArray(q.choices)||q.choices.length!==4)fail('Four answer options required '+q.id);
 if(!Number.isInteger(q.correct_index)||q.correct_index<0||q.correct_index>3)fail('Bad key '+q.id);
 positions[q.correct_index]++;
 q.module_ids.forEach(k=>covered[k]=(covered[k]??0)+1);
 if(q.prompt.length<65||q.explanation.length<70)fail('Weak question reasoning '+q.id);
}
for(let i=1;i<=8;i++)if(covered['GC'+String(i).padStart(2,'0')]!==3)fail('Need three unique questions per module '+'GC'+String(i).padStart(2,'0'));
if(positions.some(n=>n!==6))fail('Answer key must balance 6 A/B/C/D each');
const shortest=exam.items.filter(q=>q.choices[q.correct_index].length===Math.min(...q.choices.map(z=>z.length))).length;
const longest=exam.items.filter(q=>q.choices[q.correct_index].length===Math.max(...q.choices.map(z=>z.length))).length;
if(shortest>6||longest>6)fail('Answer length bias shortest='+shortest+' longest='+longest);
const l=id=>lessons.find(z=>z.id===id)?.content||'';
for(const [id,term,source] of [
 ['gc-m01-l05','SNI 2907:2008','pesta.bsn.go.id'],
 ['gc-m02-l05','BP 534','worldcoffeeresearch.org'],
 ['gc-m03-l05','238 = 18 + 220','coffeeinstitute.org'],
 ['gc-m04-l05','giling basah','coffeeinstitute.org'],
 ['gc-m05-l05','CO₂','coffeeinstitute.org'],
 ['gc-m06-l05','12,5%','iccres407e.pdf'],
 ['gc-m07-l05','CVA','pesta.bsn.go.id'],
 ['gc-m08-l05','1.072 kg','ed1763r1e.pdf']
])if(!l(id).includes(term)||!l(id).includes(source))fail('Missing source-linked mechanism '+id);
const math=[
 ['receiving mass',238,250-12],
 ['accepted cherry kg',220,238-18],
 ['milling total saleable kg',390,420-30],
 ['milling cost per kg',100000,39000000/390],
 ['moisture example average',11.43,Math.round((10.8+11.2+12.3)/3*100)/100],
 ['shipping variance percent',0.67,Math.round(8/1200*10000)/100],
 ['shipment invoice value',114000000,1200*95000],
 ['landed total',118200000,114000000+3600000+600000],
 ['contract landed per kg',98500,118200000/1200],
 ['saleable landed kg',Math.round(118200000/1072),110261]
];
for(const [name,a,b] of math)if(Math.abs(a-b)>0.01)fail('Numerical QA '+name+' '+a+' vs '+b);
if(!casebook.includes('SNI 2907:2008')||!casebook.includes('World Coffee Research')||!casebook.includes('8% sampai 12,5%'))fail('Research ledger and ISO/ICO boundary missing');
console.log(JSON.stringify({status:problems.length?'FAIL':'PASS',modules:counts,lessons:lessons.length,estimatedMinutes:time,exam:exam.items.length,answerPositions:positions,shortest,longest,issues:problems},null,2));
if(problems.length)process.exitCode=1;
