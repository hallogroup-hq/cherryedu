/**
 * Home Brewer V2 deterministic lesson compiler. No writes to legacy course,
 * enrollment, purchases, progress, quizzes, or badges.
 * node scripts/generate-home-brewer-v2.cjs [--check]
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../docs/curriculum/home-brewer-v2/03-lessons');
const out=path.resolve(__dirname,'../lib/data/homeBrewerV2.generated.ts');
const modules=[
 ['M01','Brew untuk Dirimu','Mulai dari keinginan rasa, observasi yang jujur, dan peralatan aman.'],
 ['M02','Kopi dan Gilingan','Membaca kemasan, memilih kopi, menjaga kesegaran, dan memahami grinder.'],
 ['M03','Memahami Ekstraksi','Pisahkan air masuk, minuman keluar, konsentrasi, dan variabel proses.'],
 ['M04','Pour-over dari Pertanyaan','Bangun V60 yang bisa dijelaskan dan direvisi, bukan meniru ritual.'],
 ['M05','Immersion & Hybrid','Kenali French press, AeroPress standar, dan memilih metode sesuai tujuan.'],
 ['M06','Air, Suhu & Material','Baca kualitas air, hardness/alkalinitas, transfer panas, dan filter.'],
 ['M07','Mengenali Rasa','Bangun kosakata sensori, lakukan perbandingan adil, dan buat jurnal.'],
 ['M08','Troubleshooting & Eksperimen','Uji dua hipotesis, kontrol variabel, dan belajar dengan alat sederhana.'],
 ['M09','Cold & Personal Drinks','Pelajari es, keamanan cold brew, bahan tambahan, dan resep personal.'],
 ['M10','Your Home Brew Lab','Buat brief, uji V0–V2, susun SOP, dan hadapi skenario baru.']
];
const files=fs.readdirSync(root).filter(f=>/^M\d\d-L\d\d-[a-z0-9-]+\.md$/.test(f)).sort();
if(files.length!==40)throw Error('Expected 40 Home Brewer source lesson files; got '+files.length);
const ids=new Set(),counts=new Map();
const lessons=files.map(file=>{
 const m=/^(M\d\d)-L(\d\d)-/.exec(file);
 const mod=modules.find(x=>x[0]===m[1]),order=Number(m[2]);
 if(!mod||order<1||order>4)throw Error('Invalid syllabus module/order '+file);
 const id='hbv2-'+m[1].toLowerCase()+'-l'+m[2];
 if(ids.has(id))throw Error('Duplicated slot '+id);
 ids.add(id);counts.set(m[1],(counts.get(m[1])||0)+1);
 const markdown=fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n/g,'\n').trim();
 if(!markdown.startsWith('# '))throw Error('Missing heading '+file);
 const words=markdown.split(/\s+/).length;
 if(words<310)throw Error('Thin lesson '+file+' ('+words+' words)');
 if(/DRAFT REVIEW|Beta Publik|coming soon|review build|Sertifikasi Profesional/i.test(markdown))throw Error('Internal/credential claim in learner copy '+file);
 const sections=(markdown.match(/^## /gm)||[]).length;
 if(sections<5)throw Error('Insufficient learner scaffolding '+file);
 return {id,moduleId:m[1],order,title:markdown.split('\n')[0].replace(/^# /,'').trim(),
  content:markdown.replace(/^# [^\n]+\n+/,'').trim(),wordCount:words,minutes:Math.max(9,Math.round(words/75))};
});
for(const [code]of modules)if(counts.get(code)!==4)throw Error('Missing lessons for '+code);
const contents=[
 '// GENERATED; SOURCE: docs/curriculum/home-brewer-v2/03-lessons',
 '// Does not update the original Home Brewer course, quiz attempts, account progress or certificates.',
 'export type HomeBrewerV2Module={code:string;title:string;description:string;count:number};',
 'export type HomeBrewerV2Lesson={id:string;moduleId:string;order:number;title:string;content:string;wordCount:number;minutes:number};',
 'export const HOME_BREWER_V2_MODULES:HomeBrewerV2Module[]='+JSON.stringify(modules.map(([code,title,description])=>({code,title,description,count:4})),null,2)+';',
 'export const HOME_BREWER_V2_LESSONS:HomeBrewerV2Lesson[]='+JSON.stringify(lessons,null,2)+';',
 ''
].join('\n');
if(process.argv.includes('--check')){
 if(!fs.existsSync(out)||fs.readFileSync(out,'utf8')!==contents)throw Error('Generated dataset stale; run node scripts/generate-home-brewer-v2.cjs');
 console.log('Verified '+lessons.length+' lessons / 10 modules');
}else{
 fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,contents);
 console.log('Generated '+lessons.length+' Home Brewer V2 lessons. Median word count '+lessons.map(x=>x.wordCount).sort((a,b)=>a-b)[20]);
}
