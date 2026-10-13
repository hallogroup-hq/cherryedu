#!/usr/bin/env node
'use strict';
// All reviewed curriculum sources; no mutation of source or student progress.
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const base='docs/curriculum';
const specs=[
 ['foundation',base+'/foundation-v2/03-lessons',36],
 ['barista',base+'/barista-v2/03-lessons',68],
 ['homebrewer',base+'/home-brewer-v2/03-lessons',50]
];
const issues=[],counts={};let inspected=0;
function check(file,source){
 const text=source.replace(/\\n/g,'\n');
 for(const [rule,re] of [
  ['decorative dash in heading',/^#{1,6}[^\n]*\s[—–]\s[^\n]*$/gm],
  ['affected learner-facing phrase',/sok ahli|terdengar keren|humble brag(?:ging)?|pick me/gi],
  ['mass-produced trainer instruction',/Sebelum membaca contoh jawaban dari pengajar/gi],
  ['unresolved release status inside learner text',/DRAFT REVIEW|BETA PUBLIK|COMING SOON|Lorem ipsum/gi]
 ]){
  let m;while((m=re.exec(text))!==null)issues.push(file+': '+rule+' near '+JSON.stringify(text.slice(Math.max(0,m.index-24),m.index+68)));
 }
}
for(const [name,dir,expected] of specs){
 const entries=fs.readdirSync(path.join(root,dir)).filter(x=>x.endsWith('.md')).sort();
 counts[name]=entries.length;
 if(entries.length!==expected)issues.push(name+': lesson count '+entries.length+' vs expected '+expected);
 for(const file of entries){
  const content=fs.readFileSync(path.join(root,dir,file),'utf8');
  check(dir+'/'+file,content);inspected++;
 }
}
const business=fs.readFileSync(path.join(root,'lib/data/businessRoasteryCourse.ts'),'utf8');
const hit=business.match(/BUSINESS_ROASTERY_LESSONS:BusinessLesson\[\]=(\[[\s\S]*?\]);/);
if(!hit)issues.push('Business Roastery JSON lesson corpus missing');
else{
 const lessons=JSON.parse(hit[1]);counts.businessRoastery=lessons.length;
 if(lessons.length!==84)issues.push('Business Roastery expected 84 lessons');
 for(const lesson of lessons){check('business:'+lesson.id,lesson.content);inspected++;}
}
for(const [name,expected,paths] of [
 ['roaster',40,['lib/data/roasterV2Course.ts','lib/data/roasterV2DeepDives.ts',...['m01-02','m03-04','m05-06','m07-08','m09-10'].map(s=>'lib/data/roaster-v2/'+s+'.ts')]],
 ['sensory',40,['lib/data/sensoryV2Course.ts','lib/data/sensoryV2DeepDives.ts','lib/data/sensoryV2Bridges.ts',...['m01-02','m03-04','m05-06','m07-08','m09-10'].map(s=>'lib/data/sensory-v2/'+s+'.ts')]]
]){
 counts[name]=expected;
 for(const file of paths){if(fs.existsSync(path.join(root,file)))check(file,fs.readFileSync(path.join(root,file),'utf8'));}
}
if(issues.length){
 console.error(JSON.stringify({status:'blocked',inspectedLessons:inspected,counts,errors:issues.slice(0,65),errorCount:issues.length},null,2));
 process.exit(1);
}
console.log(JSON.stringify({status:'passed',inspectedSourceLessons:inspected,counts,note:'Editorial pattern gate only; professional signoff and manual novice reading remain required'},null,2));
