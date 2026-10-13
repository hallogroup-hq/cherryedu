#!/usr/bin/env node
// Independent teaching arithmetic fixtures. These are NOT current Indonesian market prices.
// Only provider-backed directional freight data may be reported as advertised amounts.
const fs=require('node:fs');
const assert=require('node:assert/strict');
const source=fs.readFileSync('lib/data/businessRoasteryCourse.ts','utf8');
const refSource=fs.readFileSync('lib/data/businessRoasteryReferences.ts','utf8');
function jsonBlock(text,re,label) {
 const match=text.match(re);
 assert(match,label+' missing');
 return JSON.parse(match[1]);
}
const lessons=jsonBlock(source,/BUSINESS_ROASTERY_LESSONS:BusinessLesson\[\]=(\[[\s\S]*?\]);/,'lesson corpus');
const refs=jsonBlock(refSource,/BUSINESS_REFERENCES:BusinessReference\[\]=(\[[\s\S]*?\]);/,'reference corpus');
const lessonById=new Map(lessons.map(l=>[l.id,l]));
const refById=new Map(refs.map(r=>[r.key,r]));
const fixtures=[
 {id:'br-b02-l02',name:'Small-roaster output kg',calc:()=>6*4*20*(1-.15),expected:408,shows:['408 kg']},
 {id:'br-b02-l03',name:'Commercial green usable requirement',calc:()=>600/.85,expected:705.8823529,shows:['706 kg']},
 {id:'br-b02-l04',name:'Contract vs owned conversion crossover',calc:()=>7000000/(22000-7000),expected:466.66666667,shows:['467 kg']},
 {id:'br-b04-l04',name:'Account service visit costs',calc:()=>6*60000+2*100000,expected:560000,shows:['Rp560.000']},
 {id:'br-b08-l01',name:'Published Makassar cargo minimum fee',calc:()=>Math.max(35,50)*3500,expected:175000,shows:['Rp175.000']},
 {id:'br-b08-l03',name:'Green-to-saleable kg after QC and roast losses',calc:()=>60*(1-.02)*(1-.15)-.5,expected:49.48,shows:['49,48 kg']},
 {id:'br-b08-l03',name:'Raw plus inbound expense per saleable kg',calc:()=>7200000/(60*.98*.85-.5),expected:145513.3387,shows:['Rp145.513']},
 {id:'br-b08-l04',name:'Total replenishment lead time',calc:()=>2+3+7+2+2,expected:16,shows:['16 hari']},
 {id:'br-b09-l01',name:'Site A first-year occupancy cash',calc:()=>4e6*12+30e6,expected:78000000,shows:['Rp78 juta']},
 {id:'br-b09-l01',name:'Site B first-year occupancy cash',calc:()=>6e6*12+5e6,expected:77000000,shows:['Rp77 juta']},
 {id:'br-b10-l02',name:'Production theoretical output per shift',calc:()=>12*5*.84,expected:50.4,shows:['50,4 kg']},
 {id:'br-b10-l02',name:'Production theoretical monthly output',calc:()=>12*5*.84*2*20,expected:2016,shows:['2.016 kg']},
 {id:'br-b13-l01',name:'Roasted variable cost per kg',calc:()=>11000000/84+12000+8000,expected:150952.38095,shows:['Rp150.952']},
 {id:'br-b13-l03',name:'QC affected raw cost per roasted saleable kg',calc:()=>12500000/(98*.85-1),expected:151883.3536,shows:['Rp151.884']},
 {id:'br-b13-l03',name:'One point better roast yield raw cost',calc:()=>12500000/(98*.86-1),expected:150096.0615,shows:['Rp150.096']},
 {id:'br-b14-l01',name:'30 percent target gross margin sale price',calc:()=>150000/(1-.30),expected:214285.7143,shows:['Rp214.286']},
 {id:'br-b14-l03',name:'Marketplace gross to net waterfall',calc:()=>80000-8000-7000-5000-2000,expected:58000,shows:['Rp58.000']},
 {id:'br-b15-l01',name:'70/30 channel weighted contribution',calc:()=>30000*.7+60000*.3,expected:39000,shows:['Rp39.000']},
 {id:'br-b15-l01',name:'Mixed-channel monthly break even',calc:()=>12000000/(30000*.7+60000*.3),expected:307.6923,shows:['308 kg']},
 {id:'br-b15-l03',name:'Base channel contribution',calc:()=>700*25000+300*55000,expected:34000000,shows:['Rp34 juta']},
 {id:'br-b15-l03',name:'Changed channel contribution',calc:()=>400*25000+600*55000,expected:43000000,shows:['Rp43 juta']},
 {id:'br-b16-l01',name:'Supplier payments before buyer collection cash trough',calc:()=>50000000-70000000-5000000,expected:-25000000,shows:['minus Rp25 juta']},
 {id:'br-b16-l02',name:'Cash conversion cycle in days',calc:()=>30+45-10,expected:65,shows:['65 hari']},
 {id:'br-b16-l03',name:'Receivables at 60-day terms',calc:()=>300*180000*60/30,expected:108000000,shows:['Rp108 juta']},
 {id:'br-b17-l03',name:'Incremental green in annual wholesale contract',calc:()=>15000*1.2*200,expected:3600000,shows:['Rp3,6 juta']},
 {id:'br-b20-l02',name:'Sellable beans after QC losses, unshipped',calc:()=>200*.84-10-120,expected:38,shows:['38 kg']},
 {id:'br-b21-l02',name:'Export invoice to packing-list mismatch',calc:()=>100-400*.2,expected:20,shows:['80 kg']}
];
const failures=[];
for(const fixture of fixtures){
 const lesson=lessonById.get(fixture.id);
 if(!lesson){failures.push(fixture.name+': unknown lesson '+fixture.id);continue;}
 const actual=fixture.calc(),allowed=Math.max(.8,Math.abs(fixture.expected)*.00002);
 if(!Number.isFinite(actual)||Math.abs(actual-fixture.expected)>allowed)failures.push(fixture.name+': arithmetic '+actual+' vs '+fixture.expected);
 for(const claim of fixture.shows)if(!lesson.content.includes(claim))failures.push(fixture.id+': missing claimed teaching amount '+claim+' for '+fixture.name);
}
const med=refById.get('freight-jkt-medan-sea');
const mks=refById.get('freight-makassar-jabodetabek-sea');
if(!med||med.value!==7900||med.minimumKg!==100||!med.url.endsWith('/cargo-jakarta-ke-medan-2.html'))failures.push('Medan published sea cargo rate/minimum lost 2-source evidence consistency');
if(!mks||mks.value!==3500||mks.minimumKg!==50)failures.push('Published Makassar -> Jabodetabek estimate drift');
if(failures.length){for(const fail of failures)console.error('ERROR '+fail);process.exit(1);}
console.log(JSON.stringify({status:'passed',fixtures:fixtures.length,sourceReferencesChecked:2,boundary:'published directional estimates and educational assumptions only'},null,2));
