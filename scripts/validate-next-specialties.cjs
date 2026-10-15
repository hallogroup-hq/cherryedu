#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..'),issues=[],norm=s=>s.toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const fail=s=>issues.push(s);
function file(p){return fs.readFileSync(path.join(root,p),'utf8')}
function lessons(pathName,prefix){
 const src=file('lib/data/'+pathName+'.ts');
 function read(suffix){
  const re=new RegExp('export const '+prefix+'_'+suffix+':[^=]*=([\\s\\S]*?);(?:\\r?\\n|$)');
  const match=src.match(re);
  if(!match)throw new Error('Cannot parse '+prefix+'_'+suffix);
  return JSON.parse(match[1]);
 }
 return {modules:read('MODULES'),lessons:read('LESSONS'),source:src};
}
const specs=[
 {slug:'green-coffee',route:'green-coffee-v2',path:'greenCoffeeV2Course',prefix:'GREEN_COFFEE_V2',lessons:32,modPrefix:'GC',scenario:'GREEN_COFFEE_SCENARIOS',exercises:4},
 {slug:'coffee-shop',route:'coffee-shop-v2',path:'coffeeShopV2Course',prefix:'COFFEE_SHOP_V2',lessons:40,modPrefix:'CS',scenario:'COFFEE_SHOP_SCENARIOS',exercises:5},
 {slug:'q-processor',route:'q-processor-v2',path:'qProcessorV2Course',prefix:'Q_PROCESSOR_V2',lessons:24,modPrefix:'QP',scenario:'Q_PROCESSOR_SCENARIOS',exercises:3}
];
const allLessonIds=new Set(),allTitles=new Set(),allDeepDiveHeadings=new Set(),allExamIds=new Set(),allStems=new Set();
const visualRegistry=file('components/FoundationConceptVisual.tsx');
const summary=[];
for(const spec of specs){
 const data=lessons(spec.path,spec.prefix);
 if(data.modules.length!==8||data.lessons.length!==spec.lessons)fail(spec.slug+' wrong module/lesson count');
 const moduleCodes=data.modules.map(m=>m.code);
 if(new Set(moduleCodes).size!==8)fail(spec.slug+' duplicate module code');
 for(let i=0;i<8;i++){
  if(moduleCodes[i]!==spec.modPrefix+String(i+1).padStart(2,'0'))fail(spec.slug+' bad module order '+i);
  const sections=data.lessons.filter(l=>l.moduleId===moduleCodes[i]);
  if(sections.length!==spec.lessons/8)fail(spec.slug+' lessons per module '+moduleCodes[i]);
  for(let j=0;j<sections.length;j++)if(sections[j].order!==j+1)fail(spec.slug+' bad lesson ordering '+sections[j].id);
  const visuals=sections.flatMap(l=>[...l.content.matchAll(/\[VISUAL:([a-z0-9-]+)\]/g)].map(x=>x[1]));
  if(!visuals.length)fail(spec.slug+' module '+moduleCodes[i]+' needs at least one instructional visual');
  for(const id of visuals){
   if(!visualRegistry.includes("'"+id+"':{")&&!visualRegistry.includes("id==='"+id+"'"))fail('unregistered instructional visual '+spec.slug+'/'+id);
  }
 }
 for(const l of data.lessons){
  if(allLessonIds.has(l.id))fail('duplicate lesson ID '+l.id);allLessonIds.add(l.id);
  if(allTitles.has(norm(l.title)))fail('duplicate lesson title '+l.title);allTitles.add(norm(l.title));
  const wc=l.content.trim().split(/\s+/).length;
  // Minimum depth plus a distinct, teachable subtopic; word count alone is not academic sign-off.
  if(wc<(spec.slug==='coffee-shop'?450:290))fail('thin conceptual lesson '+l.id+': '+wc+' words');
  const deepDiveHeadings=(l.content.match(/^### .+$/gm)||[]).map(h=>norm(h));
  if(!deepDiveHeadings.length)fail('missing lesson-specific teaching deep dive '+l.id);
  for(const heading of deepDiveHeadings){
   if(allDeepDiveHeadings.has(heading))fail('duplicate teaching deep-dive heading '+l.id);
   allDeepDiveHeadings.add(heading);
  }
  if(!l.content.includes('## ')||!/\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(l.content))fail('missing pedagogy/reference '+l.id);
  if(/\[(?:Sumber|Rujukan) \d+\]\(https?:\/\//.test(l.content))fail('anonymous learner source label '+l.id);
  if(/(?:\bDRAFT\b|\bQA INTERNAL\b|\bPLACEHOLDER\b|\bTODO\b|\bCOMING SOON\b)/i.test(l.title+' '+l.content))fail('internal student copy '+l.id);
 }
 const bank=JSON.parse(file('lib/server/final-exams/'+spec.slug+'.json'));
 if(bank.path!==spec.slug||bank.items.length!==(spec.slug==='coffee-shop'?24:16))fail(spec.slug+' exam inventory should be correct for its depth');
 const covered=new Set(),answerPositions=[0,0,0,0],scenes=bank.items.filter(q=>q.case).length;
 for(const q of bank.items){
  if(allExamIds.has(q.id))fail('duplicate exam ID '+q.id);allExamIds.add(q.id);
  const stem=norm(q.prompt);
  if(allStems.has(stem))fail('duplicate exam stem '+q.id);allStems.add(stem);
  if(q.prompt.length<65||q.explanation.length<70)fail('thin stem/answer rationale '+q.id);
  if(q.choices.length!==4||new Set(q.choices.map(norm)).size!==4)fail('malformed answers '+q.id);
  if(q.correct_index<0||q.correct_index>3||!Number.isInteger(q.correct_index))fail('invalid answer index '+q.id);
  answerPositions[q.correct_index]++;
  for(const mod of q.module_ids){covered.add(mod);if(!moduleCodes.includes(mod))fail('invalid objective module '+q.id)}
  if(/(?:\bDRAFT\b|\bQA INTERNAL\b|\bPLACEHOLDER\b|\bTODO\b)/i.test(q.prompt+' '+q.choices.join(' ')+q.explanation))fail('internal copy in exam '+q.id);
 }
 for(const m of moduleCodes)if(!covered.has(m))fail('unassessed module '+spec.slug+'/'+m);
 if(Math.max(...answerPositions)-Math.min(...answerPositions)>1)fail('position bias '+spec.slug);
 if(scenes<3)fail('insufficient contextual cases '+spec.slug);
 const shortest=bank.items.filter(q=>q.choices[q.correct_index].length===Math.min(...q.choices.map(s=>s.length))).length;
 if(shortest>6)fail('predictable shortest answer '+spec.slug+': '+shortest);
 const longest=bank.items.filter(q=>q.choices[q.correct_index].length===Math.max(...q.choices.map(s=>s.length))).length;
 if(longest>6)fail('predictable longest answer '+spec.slug+': '+longest);
 const overview=file('app/'+spec.route+'/page.tsx');
 const reader=file('app/'+spec.route+'/[lessonId]/page.tsx');
 const practice=file('app/'+spec.route+'/practice/[module]/page.tsx');
 if(!overview.includes('CuratedCourseOverview')||!reader.includes('CuratedLessonFrame')||!reader.includes('CuratedScenarioLab')||!practice.includes('CuratedPracticeFrame'))fail('wrong learner UI '+spec.route);
 if(!overview.includes("/ujian-akhir/"+spec.slug)||!reader.includes("/ujian-akhir/"+spec.slug))fail('last-lesson exam missing '+spec.route);
 if(!overview.includes("CHERRYEDU_NEXT_SPECIALTY_REVIEW")||!reader.includes("CHERRYEDU_NEXT_SPECIALTY_REVIEW")||!practice.includes("CHERRYEDU_NEXT_SPECIALTY_REVIEW"))fail('preview gate missing '+spec.route);
 summary.push({path:spec.slug,modules:data.modules.length,lessons:data.lessons.length,exam:bank.items.length,scenarios:scenes,answerPositions});
}
const scenarioFiles=[file('lib/data/greenCoffeeScenarios.ts'),file('lib/data/nextSpecialtyScenarios.ts')];
for(const m of specs.flatMap(spec=>Array.from({length:8},(_,i)=>spec.modPrefix+String(i+1).padStart(2,'0')))){
 if(!scenarioFiles.some(t=>t.includes('"' + m + '"')))fail('missing interactive scenario '+m);
}
const computed={
 'green-coffee-05':{expected:230,actual:242-12,key:'230 kg'},
 'green-coffee-13':{expected:125000,actual:27500000/220,key:'Rp125.000'},
 'coffee-shop-03':{expected:32760000,actual:45*28000*26,key:'Rp32.760.000'},
 'coffee-shop-05':{expected:4320,actual:18/1000*240000,key:'Rp4.320'},
 'coffee-shop-06':{expected:60,actual:(34000-13600)/34000*100,key:'60%'},
 'coffee-shop-07':{expected:1000,actual:15000000/15000,key:'1.000 cup'},
 'coffee-shop-09':{expected:7,actual:20+5-8-10,key:'Rp7 juta'},
 'q-processor-13':{expected:76.5,actual:1530/2000*100,key:'76,5%'}
};
for(const [id,f] of Object.entries(computed)){
 const slug=specs.find(s=>id.startsWith(s.slug+'-')).slug;
 const bank=JSON.parse(file('lib/server/final-exams/'+slug+'.json'));
 const q=bank.items.find(x=>x.id===id);
 if(!q||!q.choices[q.correct_index].includes(f.key))fail('numerical answer mismatch '+id);
 if(Math.abs(f.actual-f.expected)>0.000001)fail('independent calculation mismatch '+id);
}
const store=file('lib/store.tsx');
for(const route of specs.map(s=>s.route)){
 if(!store.includes("'"+route+"'"))fail('missing curated catalog '+route);
 if(!file('middleware.ts').includes("'/"+route+"'"))fail('legacy redirect missing '+route);
}
if(!store.includes("NEXT_PUBLIC_CHERRYEDU_NEXT_SPECIALTY_PREVIEW"))fail('registry not isolated to feature flag');
const api=file('app/api/final-exams/[path]/route.ts');
const getPart=api.split('export async function GET')[1]?.split('export async function POST')[0]||'';
const postPart=api.split('export async function POST')[1]||'';
for(const [operation,source] of [['GET',getPart],['POST',postPart]]){
 if(!source.includes('NEXT_SPECIALTY_EXAM_SLUGS.has(params.path)')||!source.includes('NEXT_SPECIALTY_ENABLED()'))fail(operation+' new specialty exam gate missing');
}
const exampleChecks=[
 ['green landed cost',27500000/220,125000],
 ['coffee shop contribution',38000*(1-0.25)-3000-16000,9500],
 ['coffee shop bep',18000000/(32000-14000),1000],
 ['q processor yield',(810-30)/1000*100,78]
];
for(const [name,a,b] of exampleChecks)if(Math.abs(a-b)>1e-6)fail('worked-example arithmetic '+name);
console.log(JSON.stringify({status:issues.length?'FAIL':'PASS',paths:summary,numericalTests:Object.keys(computed).length+exampleChecks.length,issues},null,2));
if(issues.length)process.exit(1);
