/**
 * Deterministic Home Brewer V2 independent lesson compiler.
 * Node 22. Never writes to legacy home brewer products, enrollment, progress or credentials.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const dir=path.resolve(__dirname,'../docs/curriculum/home-brewer-v2/03-lessons');
const out=path.resolve(__dirname,'../lib/data/homeBrewerV2.generated.ts');
const modules=[
 ['HB01','Memilih Kopi dan Menentukan Tujuan Rasa','Memahami label, jenis kopi, freshness, preferensi dan pilihan biji.'],
 ['HB02','Angka Seduh, Rasio dan Jurnal','Dose, brew-water, output, waktu, TDS/EY dan hipotesis yang bisa diuji.'],
 ['HB03','Grinder, Suhu, Air dan Variabel','Memahami bagaimana variabel seduh dan kualitas pengukuran memengaruhi hasil.'],
 ['HB04','Pour-over yang Bisa Dijelaskan','Belajar V60 dengan mekanisme aliran, pembasahan, filter dan kalibrasi.'],
 ['HB05','Immersion, French Press dan AeroPress','Bandingkan metode dan berlatih AeroPress upright yang sesuai manual.'],
 ['HB06','Mendiagnosis dan Menyesuaikan Kopi','Membaca keluhan, membangun hipotesis, lalu menguji perubahan.'],
 ['HB07','Sensorik dan Preferensi Sendiri','Membedakan observasi, penilaian dan bias saat mencicipi.'],
 ['HB08','Air, Perawatan dan Budget Rumah','Memahami air layak minum, perawatan alat, penyimpanan dan biaya.'],
 ['HB09','Iced Coffee dan Ide Minuman Sendiri','Membuat minuman sesuai tujuan, menghitung es dan menjaga keamanan bahan.'],
 ['HB10','R&D dan Capstone Home Brewer','Mendesain, merevisi, mereplikasi dan mendokumentasikan resep berdasarkan bukti.'],
].map(([code,title,description])=>({code,title,description,count:5}));
const files=fs.readdirSync(dir).filter(x=>/^HB\d\d-L\d\d-[a-z0-9-]+\.md$/.test(x)).sort();
if(files.length!==50)throw Error('Expected 50 lessons, found '+files.length);
const seen=new Set();
const lessons=files.map(file=>{
 const m=/^(HB\d\d)-L(\d\d)-/.exec(file);
 if(!m)throw Error('Unexpected file '+file);
 const mod=modules.find(x=>x.code===m[1]),n=Number(m[2]),id=m[1]+'-'+m[2];
 if(!mod||n<1||n>5||seen.has(id))throw Error('Invalid lesson id '+id);
 seen.add(id);
 const markdown=fs.readFileSync(path.join(dir,file),'utf8').replace(/\r\n/g,'\n').trim();
 const first=markdown.split('\n')[0];
 if(!first.startsWith('# '))throw Error('Missing title '+file);
 if(markdown.split(/\s+/).length<260)throw Error('Lesson too shallow for initial authoring gate '+file);
 if(/\[DIAGRAM:|\[VIDEO:|\[ACTIVITY:|DRAFT REVIEW|BETA PUBLIK/i.test(markdown))throw Error('Unresolved placeholder or internal UI copy '+file);
 if(/pasti (selalu|sempurna)|wajib 1:15|inverted.*coba di rumah/i.test(markdown))throw Error('Misleading deterministic instruction '+file);
 return {
  id:'hbv2-'+m[1].toLowerCase()+'-l'+m[2],moduleId:m[1],order:n,
  title:first.slice(2).trim(),markdown:markdown.slice(first.length).trim(),
  minutes:Math.max(8,Math.ceil(markdown.split(/\s+/).length/125)),source:file,
 };
});
for(const mod of modules){
 const n=lessons.filter(x=>x.moduleId===mod.code).length;
 if(n!==5)throw Error(mod.code+' expected 5 lessons; found '+n);
 for(let i=1;i<=5;i++)if(!seen.has(mod.code+'-'+String(i).padStart(2,'0')))throw Error('Missing '+mod.code+'-'+i);
}
const code=[
'// GENERATED from docs/curriculum/home-brewer-v2/03-lessons; DO NOT EDIT MANUALLY.',
'// Standalone preview data, no legacy enrollment, paid course or credential linkage.',
'export type HomeBrewerV2Module={code:string;title:string;description:string;count:number};',
'export type HomeBrewerV2Lesson={id:string;moduleId:string;order:number;title:string;markdown:string;minutes:number;source:string};',
'export const HOME_BREWER_V2_MODULES:HomeBrewerV2Module[]='+JSON.stringify(modules,null,2)+';',
'export const HOME_BREWER_V2_LESSONS:HomeBrewerV2Lesson[]='+JSON.stringify(lessons,null,2)+';',
''
].join('\n');
if(process.argv.includes('--check')){
 if(!fs.existsSync(out)||fs.readFileSync(out,'utf8')!==code)throw Error('Generated lesson file stale');
 console.log('Verified generated lessons: 50');
}else{
 fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,code);
 console.log('Generated 50 Home Brewer lessons');
}