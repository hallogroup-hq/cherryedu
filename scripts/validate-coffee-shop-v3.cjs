#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const assert=require('node:assert/strict');
const raw=fs.readFileSync('lib/data/coffeeShopV2Course.ts','utf8');
const match=(suffix)=>JSON.parse(raw.match(new RegExp('export const COFFEE_SHOP_V2_'+suffix+':[^=]*=([\\s\\S]*?);(?:\\r?\\n|$)'))[1]);
const modules=match('MODULES'),lessons=match('LESSONS');
const errors=[];
const fail=s=>errors.push(s);
if(modules.length!==8||lessons.length!==40)fail('Coffee Shop V3 requires 8 modules and 40 lessons');
if(new Set(lessons.map(x=>x.id)).size!==lessons.length)fail('Duplicate lesson IDs');
const counts={};
for(const [i,m] of modules.entries()){
 const code='CS'+String(i+1).padStart(2,'0');
 if(m.code!==code)fail('Module order mismatch '+code);
 const found=lessons.filter(x=>x.moduleId===code);
 counts[code]=found.length;
 if(found.length!==5)fail('Need five progressive lessons in '+code);
 found.forEach((l,j)=>{
  const id='cs-m'+String(i+1).padStart(2,'0')+'-l'+String(j+1).padStart(2,'0');
  if(l.id!==id||l.order!==j+1)fail('Wrong stable ID or order '+code+' '+j);
 });
}
const allDive=new Set();
const banned=/\b(?:DRAFT|PREVIEW ONLY|PLACEHOLDER|TODO|COMING SOON|AI GENERATED)\b/i;
for(const l of lessons){
 const n=l.content.trim().split(/\s+/).length;
 if(n<450)fail('Lesson under 450 teachable words '+l.id+' '+n);
 if(l.minutes<15||l.minutes>45)fail('Unrealistic estimated learner time '+l.id+' '+l.minutes);
 if(!/\]\(https:\/\//.test(l.content))fail('Missing named source '+l.id);
 if(banned.test(l.title+' '+l.content))fail('Internal author copy '+l.id);
 const dives=[...l.content.matchAll(/^### ([^\n]+)/gm)].map(x=>x[1]);
 if(!dives.length)fail('Missing topic-specific teaching section '+l.id);
 for(const h of dives){
  if(allDive.has(h))fail('Repeated topic-specific heading '+l.id+' '+h);
  allDive.add(h);
 }
 if(l.content.includes('Harga pasar saat ini adalah'))fail('Unsupported market price '+l.id);
 if(!/Latihan|Praktik|Kerjakan|Tugas/i.test(l.content))fail('No student activity '+l.id);
}
const last=lessons[lessons.length-1];
if(last.id!=='cs-m08-l05'||!/90 hari/.test(last.title)||!/Ujian Akhir/.test(last.content))fail('Owner capstone / exam path missing');
const titleList=[
 ['CS01','cek sebelum menyewa','pelanggan dari datang'],
 ['CS02','pesaing','kontrak sewa'],
 ['CS03','kartu resep','menu yang dipertahankan'],
 ['CS04','penawaran alat','kesiapan'],
 ['CS05','13 minggu','POS'],
 ['CS06','perawatan','komplain'],
 ['CS07','jadwal shift','supplier'],
 ['CS08','promosi','Proyek akhir']
];
for(const [m,x,y] of titleList){const titles=lessons.filter(l=>l.moduleId===m).map(l=>l.title).join(' ').toLowerCase();if(!titles.includes(x.toLowerCase())||!titles.includes(y.toLowerCase()))fail('Missing core applied topic '+m);}
const law=lessons.find(l=>l.id==='cs-m01-l04')?.content||'';
const tax=lessons.find(l=>l.id==='cs-m08-l02')?.content||'';
if(!law.includes('Permenkes Nomor 11 Tahun 2025')||!law.includes('56303')||!law.includes('56304'))fail('Local legal intro incomplete');
if(!tax.includes('PBJT')||!tax.includes('perizinan'))fail('Tax/classification decisions incomplete');
const reader=fs.readFileSync('app/coffee-shop-v2/[lessonId]/page.tsx','utf8');
if(!reader.includes('lesson.order===5&&scenario')||!reader.includes('CoffeeShopMenuMixLab')||!reader.includes('CoffeeShop13WeekCashLab'))fail('Specialist practice & labs not mounted at module close');
const store=fs.readFileSync('lib/store.tsx','utf8');
if(!store.includes("'coffee-shop-v2'")||!store.includes(",8,13]"))fail('Catalog hours not updated');
const cards=fs.readFileSync('lib/data/nextSpecialtyScenarios.ts','utf8');
if((cards.match(/"module": "CS0[1-8]"/g)||[]).length!==8)fail('Eight module scenarios missing');
const bank=JSON.parse(fs.readFileSync('lib/server/final-exams/coffee-shop.json','utf8'));
if(bank.items.length!==24||bank.version!=='2026-10-16.1')fail('Exam must contain 24 balanced and versioned questions');
const publicExamMeta=fs.readFileSync('lib/finalExamPaths.ts','utf8');
const expectedCoffeePath=publicExamMeta.match(/\{ slug:'coffee-shop'[^\n]*count:(\d+) \}/);
if(!expectedCoffeePath||Number(expectedCoffeePath[1])!==bank.items.length)fail('CRITICAL: Coffee Shop public exam metadata count must match bank; otherwise GET /api/final-exams/coffee-shop returns 404');
for(const mod of modules){if(bank.items.filter(q=>q.module_ids.includes(mod.code)).length!==3)fail('Every module needs 3 assessment questions '+mod.code)}
const keys=bank.items.reduce((a,q)=>(a[q.correct_index]++,a),[0,0,0,0]);if(keys.some(k=>k!==6))fail('Predictable assessment answer position imbalance');
const sums=[
 {name:'cup-margin',actual:(30000-12000)/30000*100,expected:60},
 {name:'powder-recipe',actual:18*250000/1000,expected:4500},
 {name:'milk-recipe',actual:160*22000/1000,expected:3520},
 {name:'syrup-loss',actual:75000/(750-30)*20,expected:2083.3333333333},
 {name:'sample-menu',actual:300*16000+180*15000+40*16000,expected:8140000},
 {name:'lease-variance',actual:(7500000-6000000)/15000,expected:100},
 {name:'13-week-initial',actual:10000000+6000000+2000000-5000000-7000000-4000000,expected:2000000},
 {name:'13-week-two',actual:10000000+6000000-15000000-2000000,expected:-1000000},
 {name:'90-day-baseline',actual:55*26*(30000-13000),expected:24310000},
 {name:'90-day-downside',actual:33*26*(30000-13000)-20000000,expected:-5414000},
 {name:'promo-contribution',actual:50*(25000-12000)-600000,expected:50000},
];
for(const c of sums)if(Math.abs(c.actual-c.expected)>0.00001)fail('Arithmetic mismatch '+c.name);

const localCaseIds=['cs-m01-l02','cs-m01-l05','cs-m02-l01','cs-m02-l04','cs-m03-l03','cs-m03-l05','cs-m04-l02','cs-m05-l04','cs-m06-l05','cs-m07-l05','cs-m08-l04','cs-m08-l05'];
const localCaseByModule=new Set();
for(const id of localCaseIds){
 const l=lessons.find(x=>x.id===id);
 if(!l){fail('Missing Indonesian format case '+id);continue;}
 localCaseByModule.add(l.moduleId);
 if(!/### (Studi kasus|Kebijakan Indonesia|Mengapa gerobak|Tiga strategi|Pilih model usaha)/i.test(l.content))fail('Missing substantive local case teaching section '+id);
 if(!/\]\(https:\/\//.test(l.content))fail('Missing first-party source for Indonesian case '+id);
 if(!/\*\*Tugas|\*\*Latihan|\*\*Lembar|\*\*Praktik|\*\*Kerjakan|\*\*Roleplay|\*\*Kesimpulan|\*\*Uji silang/.test(l.content))fail('Missing measurable case application '+id);
}
if(localCaseIds.length<10||localCaseByModule.size!==8)fail('All eight modules must cover Indonesian operating formats with >=10 case placements');
const l=(id)=>lessons.find(x=>x.id===id)?.content||'';
if(!l('cs-m01-l02').includes('gerobak')||!l('cs-m01-l02').includes('14 flagship'))fail('Five coffee formats and audited Fore mix required');
if(!l('cs-m01-l05').includes('Tuku')||!l('cs-m02-l01').includes('Jago'))fail('Source-grounded Tuku neighbourhood and Jago mobile cases absent');
const bi=l('cs-m03-l03');
if(!bi.includes('1 Oktober 2026')||!bi.includes('0,3%')||!bi.includes('0,7%')||!bi.includes('Rp100.000')||!bi.includes('Rp500.000')||!bi.includes('tidak boleh dibebankan'))fail('Current BI merchant QRIS MDR brackets / no-surcharge caution missing');
if(!bi.includes('penjualan bersih per transaksi')||!bi.includes('dua kali')||!bi.includes('gofoodmerchant.co.id'))fail('GoFood settlement distinction and double-count prevention missing');
for(const [id,url] of [
 ['cs-m01-l02','https://fore.coffee/wp-content/uploads/2026/04/Annual_Report_FORE_2025.pdf'],
 ['cs-m01-l05','https://www.tuku.coffee/id/tentang-kami'],
 ['cs-m02-l01','https://play.google.com/store/apps/details?hl=id&id=com.jagocoffee.app'],
 ['cs-m03-l03','https://www.bi.go.id/id/publikasi/ruang-media/cerita-bi/Pages/mdr-qris.aspx'],
 ['cs-m03-l03','https://gofoodmerchant.co.id/bantuan/article/Seputar-pemotongan-komisi']]){
 if(!l(id).includes(url))fail('Source-to-claim traceability missing '+id+' '+url);
}
const localMathCases=[
 {name:'FORE disclosed store-format breakdown',actual:14+204+98,expected:316},
 {name:'merchant QRIS fee regular UKE >100k',actual:120000*0.007,expected:840},
 {name:'merchant QRIS fee UMI <=500k',actual:28000*0,expected:0},
 {name:'menu contribution weighted by channel',actual:70*15000+30*10000,expected:1350000},
 {name:'stationary cafe simplified BEP',actual:9000000/12000,expected:750},
 {name:'cart simplified BEP',actual:3600000/7500,expected:480},
 {name:'cart daily required sales rounded',actual:Math.ceil(480/26),expected:19},
 {name:'cart selling hours',actual:48/(8-2),expected:8},
 {name:'mobile route A units per selling hour',actual:35/(8-3),expected:7},
 {name:'mobile route B units per selling hour',actual:35/(8-1),expected:5}
];
for(const c of localMathCases)if(Math.abs(c.actual-c.expected)>0.00001)fail('Indonesian format maths mismatch '+c.name);
const casebook=fs.readFileSync('docs/curriculum/coffee-shop-v3/02-indonesia-research-and-format-casebook.md','utf8');
if(!casebook.includes('Fakta')&&!casebook.includes('facts'))fail('Indonesia case source ledger lacks evidence classification');
if(!casebook.includes('No invented brand revenues'))fail('Indonesia case source ledger lacks fabricated-revenue safeguard');

const totalMin=lessons.reduce((s,x)=>s+x.minutes,0);
if(totalMin<720||totalMin>900)fail('Claimed learning duration must reflect real practice');
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',modules:counts,lessons:lessons.length,totalMinutes:totalMin,averageWords:Math.round(lessons.reduce((s,l)=>s+l.content.split(/\s+/).length,0)/lessons.length),verifiedMathCases:sums.length,issues:errors},null,2));
if(errors.length)process.exit(1);
