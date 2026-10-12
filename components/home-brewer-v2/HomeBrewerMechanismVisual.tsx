import React from 'react';

type Diagram={title:string;caption:string;labels:[string,string,string];kind:'mass'|'science'|'flow'|'compare'|'ice'|'process'};
const models:Record<string,Diagram>={
 'hbv2-hb02-l02':{title:'Air masuk tidak sama dengan hasil di cangkir',caption:'Contoh fiktif: 15 g kopi, 225 g air seduh masuk, 184 g minuman keluar. Selisih massa bukan satu konstanta untuk semua alat.',labels:['Kopi 15 g','Air 225 g','Minuman 184 g'],kind:'mass'},
 'hbv2-hb02-l03':{title:'TDS dan EY mengukur hal yang berbeda',caption:'Data ilustrasi: dua cangkir memakai 20 g bubuk, memiliki massa berbeda, tetapi estimasi zat terlarut masing-masing 4 g; bukan bukti rasa identik.',labels:['A: 40 g / TDS 10%','Zat terlarut 4 g','B: 50 g / TDS 8%'],kind:'science'},
 'hbv2-hb04-l03':{title:'Aliran melalui coffee bed',caption:'Skema hipotesis jalur aliran. Tidak dapat dipakai mengidentifikasi channeling atau rasa spesifik dari foto akhir.',labels:['Air masuk','Bed kopi','Output dan retensi'],kind:'flow'},
 'hbv2-hb05-l01':{title:'Percolation dan immersion',caption:'Dua mekanisme kontak utama. Bentuk alat, saringan, air, dan waktu tetap memengaruhi hasil; bukan satu metode pasti unggul.',labels:['Percolation','Aliran melewati bed','Immersion'],kind:'compare'},
 'hbv2-hb09-l01':{title:'Japanese iced: bed, es dan cairan akhir',caption:'Contoh: 150 g air brew-through dan 75 g es. Jumlah air seluruh komponen tidak sama dengan air yang lewat bed atau output cair tertentu.',labels:['Air panas 150 g','Bed kopi 15 g','Es 75 g'],kind:'ice'},
 'hbv2-hb10-l02':{title:'Iterasi resep yang beralasan',caption:'V0→V1 sengaja mengubah satu hal, lalu nilai hasilnya; V2 boleh menguji hipotesis lain. Tidak ada prediksi rasa pasti dari panah ini.',labels:['V0 · Referensi','V1 · Uji ratio','V2 · Uji grind'],kind:'process'}
};
const dark='#33291f',ink='#5b4b3c',border='#b8a48b',fill='#e8ddce',accent='#a45d3e';
export function HomeBrewerMechanismVisual({lessonId}:{lessonId:string}){
 const d=models[lessonId];if(!d)return null;
 return <figure className="not-prose my-9 border-y border-paper-300 py-5">
   <h2 className="font-serif text-lg font-semibold text-roast-950">{d.title}</h2>
   <div className="mt-4 overflow-x-auto rounded-lg bg-[#f7f3ec] px-2 py-4 sm:p-5">
    <svg role="img" aria-label={d.title+': '+d.caption} viewBox="0 0 620 235" className="h-auto w-[620px] max-w-none sm:w-full" xmlns="http://www.w3.org/2000/svg">
     <defs><marker id="hbArrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={accent}/></marker></defs>
     {d.labels.map((label,i)=><g key={label}>
       <rect x={16+i*206} y={75} width="178" height="92" rx="11" fill={i===1?fill:'#fff'} stroke={border} strokeWidth="1.6"/>
       <text x={105+i*206} y={115} textAnchor="middle" fill={dark} fontFamily="system-ui,sans-serif" fontWeight="600" fontSize="14">{label}</text>
       {i<2&&<path d={'M'+(195+i*206)+' 121 L'+(216+i*206)+' 121'} stroke={accent} strokeWidth="2" markerEnd="url(#hbArrow)"/>}
     </g>)}
     <text x="310" y="31" textAnchor="middle" fill={ink} fontFamily="system-ui,sans-serif" fontSize="14">{d.kind==='compare'?'Dua mekanisme, bukan dua peringkat':d.kind==='process'?'Prediksi → uji → evaluasi':'Data & mekanisme sebagai model penjelasan'}</text>
     <path d="M28 186 L592 186" stroke={border} strokeDasharray="4 5"/>
     <text x="310" y="208" textAnchor="middle" fill={ink} fontFamily="system-ui,sans-serif" fontSize="12">Skema konsep · bukan foto atau hasil pengukuran</text>
    </svg>
   </div>
   <p className="mt-2 text-xs text-roast-700 sm:hidden">Geser diagram untuk membaca semua bagian.</p>
   <figcaption className="mt-2 text-xs leading-6 text-roast-700">{d.caption}</figcaption>
 </figure>;
}
