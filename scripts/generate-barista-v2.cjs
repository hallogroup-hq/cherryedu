/**
 * Barista V2: isolated deterministic lesson compiler.
 * Never mutates production learning paths, progress, quizzes or credentials.
 * Usage: node scripts/generate-barista-v2.cjs [--check]
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const lessonDir = path.resolve(__dirname, '../docs/curriculum/barista-v2/03-lessons');
const out = path.resolve(__dirname, '../lib/data/baristaV2.generated.ts');
const modules = [
 ['M01','Area Bar, Keselamatan & Sikap Melayani','Membaca stasiun, mengutamakan keamanan, dan memahami pelanggan sebelum menyentuh mesin.',6],
 ['M02','Fundamental Ekstraksi & Cara Bereksperimen','Memahami rasio, konsentrasi, ekstraksi, dan eksperimen yang terkontrol.',5],
 ['M03','Grinder, Portafilter & Espresso Pertama','Menggunakan pengukuran dan observasi untuk memulai espresso yang konsisten.',6],
 ['M04','Dial-In, Sensorik Espresso & Troubleshooting','Membangun hipotesis dan keputusan dari data dan hasil cicip yang jujur.',7],
 ['M05','Susu, Steaming, Tekstur & Alergen','Mengenali bahan, proses pembentukan foam, dan batas penanganan aman.',6],
 ['M06','Penyusunan Minuman & Dasar Latte Art','Menerapkan hasil espresso dan susu sesuai pesanan dan target kualitas.',5],
 ['M07','Filter, Batch Brewing & Ritme Layanan','Mentransfer prinsip ekstraksi ke metode berbeda dan kebutuhan operasional.',5],
 ['M08','Hospitality Adaptif & Permintaan Tidak Biasa','Menanyakan hal yang tepat, menawarkan opsi, dan berkomunikasi saat situasi berubah.',5],
 ['M09','Cleaning, Preventive Care & Fault Escalation','Merawat stasiun sesuai manual, mengenali gejala, dan tahu kapan menghentikan alat.',5],
 ['M10','Bahan, Inventory, Waste & Cost','Mengelola stok, keamanan bahan, waste, serta biaya minuman dengan satuan yang benar.',5],
 ['M11','Signature Drink R&D Studio','Mendesain, menguji, menghitung, dan mendokumentasikan minuman original yang operasional.',8],
 ['M12','Bar Service, Adaptation & Innovation Capstone','Memecahkan situasi baru, menggabungkan eksperimen, pelayanan, dan portofolio.',5]
];
const files = fs.readdirSync(lessonDir).filter(x => /^M\d\d-L\d\d-[a-z0-9-]+\.md$/.test(x)).sort();
if(files.length !== 68) throw new Error('Barista V2 needs exactly 68 authored lesson files; found '+files.length);
const moduleMap = new Map(modules.map(([code,title,description,count])=>[code,{code,title,description,count}]));
const grouped = {};
const lessons = files.map(file => {
 const m=/^(M\d\d)-L(\d\d)-/.exec(file);
 if(!m)throw Error('Unexpected lesson filename '+file);
 const mod=moduleMap.get(m[1]),order=Number(m[2]);
 if(!mod || order<1||order>mod.count)throw Error('Out of syllabus lesson: '+file);
 if(!grouped[m[1]])grouped[m[1]]=new Set();
 if(grouped[m[1]].has(order))throw Error('Duplicate lesson order: '+file);
 grouped[m[1]].add(order);
 const markdown=fs.readFileSync(path.join(lessonDir,file),'utf8').replace(/\r\n/g,'\n').trim();
 if(!markdown.startsWith('# '))throw Error('Missing learner-facing title: '+file);
 if(/DRAFT REVIEW|Beta Publik|review build|QA internal|Sertifikasi Profesional Kompetensi Bar/i.test(markdown))throw Error('Editorial/release label leaked: '+file);
 if(/^\s*\[ACTIVITY:/m.test(markdown))throw Error('Unmapped instructional activity: '+file);
 const title=markdown.split('\n')[0].replace(/^# /,'').trim();
 const body=markdown.replace(/^# [^\n]+\n+/, '');
 return {id: 'bv2-'+m[1].toLowerCase()+'-l'+m[2],moduleId:m[1],order,title,content:body,source:file,
  minutes:Math.max(8,Math.ceil(markdown.split(/\s+/).length/125))};
});
for(const [code,, ,count] of modules){
 const actual=grouped[code]||new Set();
 if(actual.size!==count)throw Error('Incomplete module '+code+' '+actual.size+'/'+count);
 for(let i=1;i<=count;i++)if(!actual.has(i))throw Error('Missing '+code+'.L'+i);
}
const code = [
'// GENERATED — DO NOT EDIT. Source: docs/curriculum/barista-v2/03-lessons.',
'// This dataset is not connected to legacy Barista records, payments or certificates.',
'export type BaristaV2Lesson = { id: string; moduleId: string; order: number; title: string; content: string; source: string; minutes: number };',
'export type BaristaV2Module = { code: string; title: string; description: string; count: number };',
'export const BARISTA_V2_MODULES: BaristaV2Module[] = '+JSON.stringify(modules.map(([code,title,description,count])=>({code,title,description,count})),null,2)+';',
'export const BARISTA_V2_LESSONS: BaristaV2Lesson[] = '+JSON.stringify(lessons,null,2)+';',
''
].join('\n');
if(process.argv.includes('--check')){
 if(!fs.existsSync(out)||fs.readFileSync(out,'utf8')!==code)throw Error('Stale generated Barista data; rerun node scripts/generate-barista-v2.cjs');
 console.log('Barista generated data verified: '+lessons.length+' lessons');
}else{
 fs.mkdirSync(path.dirname(out),{recursive:true});
 fs.writeFileSync(out,code);
 console.log('Generated '+lessons.length+' Barista lessons ('+modules.length+' modules)');
}
