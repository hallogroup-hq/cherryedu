#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const bankSource=fs.readFileSync(path.join(root,'lib/server/certification/banks/foundation.ts'),'utf8');
assert(bankSource.includes("import 'server-only'"),'Correct options may not be accidentally imported into a client bundle');
const match=bankSource.match(/FOUNDATION_FINAL_EXAM_BANK = (\{[\s\S]*?\}) as const;/);
assert(match,'Typed Foundation bank missing');
const bank=JSON.parse(match[1]);const items=bank.items;
const errors=[];
if(items.length!==21)errors.push('Exactly 21 initial authored questions required');
const ids=new Set(),stems=new Set();const byModule={},correctPosition={A:0,B:0,C:0,D:0},cognitive={};
function normalized(s){return s.toLowerCase().normalize('NFKC').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();}
const moduleExit=[];
for(let i=1;i<=7;i++){
 const m='M'+String(i).padStart(2,'0');
 const p=path.join(root,'docs/curriculum/foundation-v2/04-assessments',m+'-module-exit.md');
 const s=fs.readFileSync(p,'utf8');
 for(const part of s.split(/^### (?=M\d\d-Q\d\d\b)/m).slice(1)){
  const b=part.split(/^## /m)[0];const lines=b.split('\n');
  for(const line of lines)if(line.trim().length>60&&!/^(?:[ABCD]\.|\*\*Kunci|Remediasi|Rujukan)/.test(line.trim()))moduleExit.push(normalized(line.trim()));
 }
}
for(const x of items){
 if(ids.has(x.id))errors.push('Duplicate ID '+x.id);ids.add(x.id);
 if(stems.has(normalized(x.stem)))errors.push('Repeated scenario '+x.id);stems.add(normalized(x.stem));
 if(!/^M0[1-7]$/.test(x.module))errors.push('Unknown module '+x.id);
 byModule[x.module]=(byModule[x.module]||0)+1;
 if(!/application|analysis|evaluation/.test(x.cognitive))errors.push('Wrong cognitive level '+x.id);else cognitive[x.cognitive]=(cognitive[x.cognitive]||0)+1;
 if(x.stem.length<130||x.explanation.length<135)errors.push('Scenario or rationale too thin '+x.id);
 if(x.options.length!==4||new Set(x.options.map(o=>o.text)).size!==4)errors.push('Four distinct options needed '+x.id);
 if(x.options.map(o=>o.id).join('')!=='ABCD')errors.push('Option IDs must be ABCD '+x.id);
 if(!x.options.some(o=>o.id===x.correct))errors.push('Missing correct answer '+x.id);
 correctPosition[x.correct]=(correctPosition[x.correct]||0)+1;
 if(!/^M0[1-7]\.L\d\d$/.test(x.lesson))errors.push('Mapping missing '+x.id);
 const folder=fs.readdirSync(path.join(root,'docs/curriculum/foundation-v2/03-lessons'));
 if(!folder.some(f=>f.startsWith(x.lesson.replace('.','-')+'-')))errors.push('Unknown lesson source '+x.id);
 if(moduleExit.some(old=>old.includes(normalized(x.stem).slice(0,90))))errors.push('Verbatim overlap with module-exit item '+x.id);
 if(/semua jawaban benar|tidak ada yang benar|tebakan tercerdas/i.test(x.stem))errors.push('Exam should not use test-taking gimmick '+x.id);
}
for(let i=1;i<=7;i++){const m='M'+String(i).padStart(2,'0');if(byModule[m]!==3)errors.push(m+' requires three items');}
if(Object.values(correctPosition).some(v=>v<3||v>8))errors.push('Correct option positions substantially unbalanced');
if(!bank.caseTask||bank.caseTask.rubric.length<4||!bank.caseTask.review.includes('manual rubric'))errors.push('Integrated case is unassessed or model-only');
if(!bank.releaseStatus.includes('INTERNAL'))errors.push('Foundation bank incorrectly marked published');
const math=[
 ['Roast mass loss', (25-21.75)/25*100,13],
 ['Roasted saleable mass',21.75-.75,21],
 ['Water input ratio',360/24,15],
 ['Total solubles',300*1.44/100,4.32],
 ['EY percent',300*1.44/100/24*100,18]
];
for(const [name,calc,expected] of math)if(Math.abs(calc-expected)>1e-9)errors.push('Fixture incorrect: '+name);
const mapped=new Map(items.map(x=>[x.id,x]));
for(const [id,claim] of [
 ['CHE-FND-M04-02','13% mass loss dan 21,00 kg'],
 ['CHE-FND-M05-01','1:15'],
 ['CHE-FND-M05-02','18,0%']
])if(!mapped.get(id)?.options.find(o=>o.id===mapped.get(id).correct)?.text.includes(claim))errors.push(id+' math answer drift');
if(errors.length){console.error(JSON.stringify({status:'blocked',errors,items:items.length},null,2));process.exit(1);}
console.log(JSON.stringify({status:'passed',items:items.length,modules:byModule,cognitive,correctPosition,numericFixtures:math.length,caseCount:1,scope:'authoring only; legal and pedagogical human signoff pending'},null,2));
