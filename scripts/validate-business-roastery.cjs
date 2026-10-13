#!/usr/bin/env node
const fs=require('fs');
const issues=[];
const read=p=>fs.readFileSync(p,'utf8');
const fail=s=>issues.push(s);
function extract(path,regex){const m=read(path).match(regex);if(!m){fail('Cannot parse '+path);return [];}try{return JSON.parse(m[1]);}catch(e){fail('Invalid JSON in '+path+': '+e.message);return [];}}
const course='lib/data/businessRoasteryCourse.ts',refsFile='lib/data/businessRoasteryReferences.ts';
const modules=extract(course,/BUSINESS_ROASTERY_MODULES:BusinessModule\[\]=(\[[\s\S]*?\]);/);
const lessons=extract(course,/BUSINESS_ROASTERY_LESSONS:BusinessLesson\[\]=(\[[\s\S]*?\]);/);
const scenarios=extract(course,/BUSINESS_ROASTERY_SCENARIOS=(\[[\s\S]*?\]);/);
const refs=extract(refsFile,/BUSINESS_REFERENCES:BusinessReference\[\]=(\[[\s\S]*?\]);/);
const cases=extract(refsFile,/BUSINESS_DECISION_CASES=(\[[\s\S]*?\]);/);
if(modules.length!==21)fail('Expected 21 modules, got '+modules.length);
if(lessons.length!==84)fail('Expected 84 lessons, got '+lessons.length);
if(scenarios.length!==3||scenarios.map(x=>x.key).join('')!=='ABC')fail('Three models required');
if(new Set(modules.map(x=>x.code)).size!==modules.length)fail('Duplicate module code');
if(new Set(lessons.map(x=>x.id)).size!==lessons.length)fail('Duplicate lesson id');
for(const mod of modules){
 const ls=lessons.filter(x=>x.moduleId===mod.code);
 if(ls.length!==4||ls.map(x=>x.order).join()!=='1,2,3,4')fail('Bad sequence '+mod.code);
 if(!mod.title||mod.title.length<10||!mod.description)fail('Shallow module '+mod.code);
}
const forbidden=/\b(?:DRAFT|PREVIEW|BETA|TBD|COMING SOON|LOREM IPSUM)\b/i;
for(const l of lessons){
 if(!modules.some(m=>m.code===l.moduleId))fail('Orphan lesson '+l.id);
 if(l.content.trim().split(/\s+/).length<250)fail('Thin lesson '+l.id);
 if(!l.content.includes('**A · Brand asset-light:**')||!l.content.includes('**B · Fasilitas kecil:**')||!l.content.includes('**C · Roastery berkembang:**'))fail('Missing three-model business comparison '+l.id);
 for(const phrase of ['Apa dampaknya bagi tiga jenis roastery?','Tugas yang bisa kamu kerjakan','Kesalahan yang harus dicegah','Checkpoint pemahaman'])if(!l.content.includes(phrase))fail('Missing lesson section '+l.id+' '+phrase);
 if(!l.task||!l.trap||!l.content.includes(l.task)||!l.content.includes(l.trap))fail('Missing unique operational task or mistake '+l.id);
 if(/Lengkapi tiga kolom:|Bila hasil kasus berbeda dari ekspektasi|Keputusan akhir harus dapat diperiksa ulang ketika penawaran/.test(l.content))fail('Generic repeated assignment boilerplate '+l.id);
 if(forbidden.test(l.title+' '+l.content))fail('Internal/editorial copy '+l.id);
}
// Pedagogical anti-boilerplate gate: prevent recurring 139-word scenario block
// and one-size-fits-all checkpoint from silently passing word-count checks.
const extractLessonSection=(value,heading,nextHeading)=>{
 const start=value.indexOf(heading);
 if(start<0)return '';
 const end=nextHeading?value.indexOf(nextHeading,start+heading.length):-1;
 return value.slice(start+heading.length,end<0?undefined:end).trim().replace(/\s+/g,' ');
};
const teachingBlocks=lessons.map(l=>extractLessonSection(l.content,'### Apa dampaknya bagi tiga jenis roastery?','### Tugas yang bisa kamu kerjakan'));
const diagnosticBlocks=lessons.map(l=>extractLessonSection(l.content,'### Checkpoint pemahaman'));
if(teachingBlocks.some(x=>!x))fail('Missing scenario-specific teaching section');
if(diagnosticBlocks.some(x=>!x))fail('Missing diagnostic checkpoint');
if(new Set(teachingBlocks).size!==lessons.length)fail('Duplicated three-model boilerplate across lessons');
if(new Set(diagnosticBlocks).size!==lessons.length)fail('Duplicated generic diagnostic checkpoint across lessons');
if(new Set(lessons.map(l=>l.task)).size!==lessons.length)fail('Duplicated tasks across lessons');
if(new Set(lessons.map(l=>l.trap)).size!==lessons.length)fail('Duplicated mistake warnings across lessons');
if(cases.length!==modules.length)fail('Need one evolving case per module');
for(const c of cases){if(!modules.find(m=>m.code===c.moduleId)||!c.newEvidence||!c.revise||!c.reason)fail('Invalid evolving case '+c.moduleId);}
if(new Set(cases.map(x=>x.moduleId)).size!==cases.length)fail('Duplicate case');
for(const ref of refs){if(!/^https:\/\//.test(ref.url)||!ref.verified||!ref.status||!ref.scope)fail('Undocumented source '+ref.key);}
for(const f of refs.filter(x=>x.category==='freight')){
 if(!f.value||!f.minimumKg||!f.exclusions||!f.scope.includes(' ke '))fail('Unreliable freight source '+f.key);
 if(!f.status.includes('indikatif'))fail('Freight cannot be presented as live quote '+f.key);
}
if(refs.filter(x=>x.category==='freight').length!==4)fail('Expected four directional freight references, including real inbound lane');
const fieldManual=extract('lib/data/businessRoasteryFieldGuides.ts',/BUSINESS_ROASTERY_FIELD_GUIDES:Record<string,BusinessModuleGuide>=(\{[\s\S]*?\});/);
if(Object.keys(fieldManual).length!==21)fail('Need 21 topic-specific field manuals');
for(const mod of modules){const field=fieldManual[mod.code];if(!field||field.content.split(/\s+/).length<140||!field.content.includes('Bukti kerja'))fail('Shallow applied study '+mod.code);}
if(!read('app/business-roastery-v1/[lessonId]/page.tsx').includes('BUSINESS_ROASTERY_FIELD_GUIDES[mod.code]'))fail('Applied cases not mounted');
if(new Set(cases.map(c=>c.newEvidence)).size!==21)fail('Repeated evidence change across all cases');
const model=read('components/business-roastery/BusinessModelComparator.tsx');
const thirteen=read('components/business-roastery/BusinessThirteenWeekCash.tsx');
for(const flag of ["demand*0.6","capacity","variable","fixed"])if(!model.includes(flag))fail('Model comparison math missing '+flag);
for(const flag of ["length:13","balance","worst","entries.filter","Hapus"])if(!thirteen.includes(flag))fail('13-week cash logic missing '+flag);
const calc=read('components/business-roastery/BusinessRoasteryCalculator.tsx');
for(const flag of ['Math.max(quoteKg,volKg??0,minCharge)','greenUsable','roasted','landedTotal','rawPerRoast','variableHpp','absorption','factoryFixed','plannedMonthly','totalFixed','cm','bepkg','freightMode','Referensi publik','BEP','source.url'])if(!calc.toLowerCase().includes(flag.toLowerCase()))fail('Cost provenance/math missing '+flag);
if(!calc.includes('inbound lagi')||!calc.includes('bukan penawaran final')&&!calc.includes('quotation final'))fail('Unsafe quote interpretation');
for(const path of ['app/business-roastery-v1/page.tsx','app/business-roastery-v1/[lessonId]/page.tsx','app/business-roastery-v1/practice/[moduleId]/page.tsx','app/business-roastery-v1/calculator/page.tsx','app/business-roastery-v1/cashflow/page.tsx','app/business-roastery-v1/plan/page.tsx','app/business-roastery-v1/models/page.tsx','app/business-roastery-v1/working-capital/page.tsx']){
 const src=read(path);
 if(!src.includes("process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled'")||!src.includes('notFound()'))fail('Missing protected route '+path);
 if(/setUserProgress|issueCertificate|syncTransaction|enrollInPath|recordQuizAttempt/.test(src))fail('No published-student mutation allowed '+path);
}
const publishedCafe=read('lib/data/paths/coffeeBusinessData.ts');
if(!publishedCafe.includes('path-coffee-business'))fail('Published cafe path moved');
const docs=read('docs/curriculum/business-roastery-v1/01-blueprint-evidence-policy.md');
for(const phrase of ['PP 20/2026','2026','100 kg','minimum','IndoExpress'])if(!docs.includes(phrase))fail('Evidence policy incomplete '+phrase);
const summary={modules:modules.length,lessons:lessons.length,minWords:Math.min(...lessons.map(l=>l.content.split(/\s+/).length)),cases:cases.length,threeModelComparison:scenarios.map(s=>s.name),fieldManuals:Object.keys(fieldManual).length,uniqueTeachingBlocks:new Set(teachingBlocks).size,uniqueDiagnosticBlocks:new Set(diagnosticBlocks).size,freightEvidence:refs.filter(x=>x.category==='freight').map(x=>({lane:x.scope,rate:x.value,minimumKg:x.minimumKg})),issues};
console.log(JSON.stringify(summary,null,2));if(issues.length)process.exitCode=1;
