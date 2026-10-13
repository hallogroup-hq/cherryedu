import React from 'react';

type Diagram={title:string;caption:string;kind:'mass'|'strength'|'flow'|'methods'|'ice'|'iteration'};
const models:Record<string,Diagram>={
 'hbv2-hb02-l02':{title:'Ke mana massa air pergi?',caption:'Contoh fiktif: 15 g kopi, 225 g air masuk, 184 g minuman keluar. Selisih angka 41 g bukan pengukuran langsung berapa air yang diserap bed.',kind:'mass'},
 'hbv2-hb02-l03':{title:'Konsentrasi berbeda, estimasi EY sama',caption:'Data ilustrasi untuk dua cangkir dari dose 20 g; keduanya memuat estimasi 4 g zat terlarut. Tidak membuktikan rasa, aroma, atau senyawa penyusunnya sama.',kind:'strength'},
 'hbv2-hb04-l03':{title:'Air memilih jalur di coffee bed',caption:'Sketsa fenomena resistansi aliran; bentuk jalur ilustratif, bukan hasil foto eksperimen. Pola aliran tidak cukup untuk menetapkan diagnosis penyebab rasa.',kind:'flow'},
 'hbv2-hb05-l01':{title:'Percolation versus immersion',caption:'Keduanya memakai air dan bubuk kopi, tetapi cara kontak serta pemisahannya berbeda. Tidak ada jaminan rasa atau EY tertentu dari nama metode.',kind:'methods'},
 'hbv2-hb09-l01':{title:'Es bukan air yang sudah mencair',caption:'Air yang melewati bed = 150 g. Es awal = 75 g. Massa minuman cair akhir tidak diketahui tanpa mengukur retensi dan bagian es yang benar-benar mencair.',kind:'ice'},
 'hbv2-hb10-l02':{title:'Setiap iterasi menguji pertanyaan',caption:'V0→V1 hanya mengubah target air seduh; V1→V2 hanya mengubah grind pada titik itu. Hasil rasa hanya dapat ditulis jika benar-benar dicicipi.',kind:'iteration'}
};
const ink='#44382c',pale='#e4d7c5',dark='#94704e',line='#bda991',accent='#9d593e',muted='#786a5b';
const label=(s:string,x:number,y:number,size=14,color=ink)=><text x={x} y={y} fontFamily="system-ui,sans-serif" fontSize={size} fill={color} textAnchor="middle">{s}</text>;
const arrow=(x1:number,y1:number,x2:number,y2:number)=><path d={`M${x1} ${y1} L${x2} ${y2}`} stroke={accent} strokeWidth="2.5" fill="none" markerEnd="url(#brewArrow)"/>;
function Drawing({kind}:{kind:Diagram['kind']}){
 if(kind==='mass')return <>
  {label('BREW WATER',95,47,12,muted)}{label('225 g',95,68,20)}
  {label('KOPI KERING',310,47,12,muted)}{label('15 g',310,68,20)}
  <path d="M220 96 h180 l-30 97 h-120 Z" fill={pale} stroke={ink} strokeWidth="2"/>
  <path d="M236 137 h148 l-15 49 h-118 Z" fill={dark} opacity=".55"/>
  {label('COFFEE BED',310,224,12)}
  {arrow(132,75,230,124)}{arrow(310,77,310,121)}{arrow(392,154,470,154)}
  <rect x="477" y="106" width="117" height="95" rx="11" fill="white" stroke={line} strokeWidth="2"/>
  {label('BEVERAGE',535,133,11,muted)}{label('184 g',535,160,22)}
  {label('41 g selisih hitung, bukan pengukuran retensi murni',310,257,11,muted)}
 </>;
 if(kind==='strength')return <>
  {[{x:75,m:'40 g',t:'TDS 10%',z:'4 g zat',h:84},{x:375,m:'50 g',t:'TDS 8%',z:'4 g zat',h:100}].map(c=><g key={c.x}>
   <path d={`M${c.x} 73 h165 l-17 134 h-131 Z`} fill="white" stroke={ink} strokeWidth="2"/>
   <path d={`M${c.x+14} ${202-c.h} h137 l-12 ${c.h-3} h-114 Z`} fill={pale}/>
   {label(c.m,c.x+82,142,22)}{label(c.t,c.x+82,164,13)}{label(c.z,c.x+82,230,12)}
  </g>)}
  {label('A',158,51,14)}{label('B',458,51,14)}
  {arrow(253,144,355,144)}{label('EY ~20%',307,114,13,accent)}
  {label('Kedua seduhan dimulai dari 20 g kopi',310,258,11,muted)}
 </>;
 if(kind==='flow')return <>
  {label('Aliran air masuk',310,34,15)}
  {arrow(310,42,310,84)}
  <rect x="100" y="92" width="420" height="118" rx="8" fill={pale} stroke={ink} strokeWidth="2"/>
  {Array.from({length:70},(_,i)=><circle key={i} cx={116+(i%14)*29} cy={107+Math.floor(i/14)*22} r={(i%4)+2} fill={dark} opacity=".55"/>)}
  <path d="M195 66 C200 110 210 136 180 218 M310 66 C293 127 335 170 306 221 M428 66 C433 105 426 156 446 218" stroke={accent} strokeWidth="3" strokeDasharray="6 6" fill="none"/>
  {label('Jalur ilustratif, bukan bukti channeling',310,251,12,muted)}
 </>;
 if(kind==='methods')return <>
  <rect x="32" y="42" width="258" height="205" rx="10" fill="white" stroke={line}/>
  <rect x="332" y="42" width="258" height="205" rx="10" fill="white" stroke={line}/>
  {label('PERCOLATION',160,72,16)}{label('IMMERSION',460,72,16)}
  <path d="M102 123 h116 l-22 66 h-72 Z" stroke={ink} fill={pale} strokeWidth="2"/>
  <path d="M405 123 h110 v83 h-110 Z" stroke={ink} fill={pale} strokeWidth="2"/>
  {arrow(160,87,160,120)}{arrow(160,190,160,218)}
  {Array.from({length:18},(_,i)=><circle key={i} cx={416+(i%6)*17} cy={138+Math.floor(i/6)*22} r="4" fill={dark}/>)}
  {label('Air melintasi bed',160,239,12,muted)}{label('Kontak bersama sebelum dipisah',460,239,12,muted)}
 </>;
 if(kind==='ice')return <>
  {label('Air panas: 150 g',114,42,16)}
  {arrow(114,55,114,113)}
  <path d="M58 125 h112 l-20 72 h-72 Z" fill={pale} stroke={ink} strokeWidth="2"/>
  {label('Bed kopi 15 g',114,153,13)}
  {arrow(175,167,307,181)}
  <path d="M300 149 h135 l-11 87 h-114 Z" fill="white" stroke={ink} strokeWidth="2"/>
  <path d="M312 198 h110 l-4 31 h-102 Z" fill={pale}/>
  <path d="M338 168 l20 -9 l16 15 l-18 19 Z" fill="#cbd8db" stroke="#8cabb5"/>
  <path d="M376 171 l21 -12 l12 24 l-18 13 Z" fill="#cbd8db" stroke="#8cabb5"/>
  {label('Es: 75 g',506,76,16)}
  {arrow(506,89,409,147)}
  {label('Massa cair akhir: ?',374,258,12,accent)}
 </>;
 return <>
  {[{x:26,h:'V0',t:'15 g / 225 g',b:'Resep awal'},{x:234,h:'V1',t:'15 g / 240 g',b:'Uji air'},{x:442,h:'V2',t:'15 g / 240 g',b:'Uji grind'}].map(d=><g key={d.h}>
   <rect x={d.x} y="78" width="154" height="124" rx="12" fill={d.h==='V1'?pale:'white'} stroke={line} strokeWidth="2"/>
   {label(d.h,d.x+77,111,22)}{label(d.t,d.x+77,143,13)}{label(d.b,d.x+77,178,12,muted)}
  </g>)}
  {arrow(183,139,228,139)}{arrow(391,139,435,139)}
  {label('Bandingkan 1 perubahan pada tiap transisi; rasa masih perlu diuji',310,244,12,muted)}
 </>;
}
export function HomeBrewerMechanismVisual({lessonId}:{lessonId:string}){
 const d=models[lessonId];if(!d)return null;
 return <figure className="not-prose my-9 border-y border-paper-300 py-5">
  <h2 className="font-serif text-lg font-semibold text-roast-950">{d.title}</h2>
  <div className="mt-4 overflow-x-auto rounded-lg bg-[#f7f3ec] px-2 py-4 sm:p-5">
   <svg role="img" aria-label={d.title+': '+d.caption} viewBox="0 0 620 280" className="h-auto w-[620px] max-w-none sm:w-full" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="brewArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={accent}/></marker></defs>
    <Drawing kind={d.kind}/>
   </svg>
  </div>
  <p className="mt-2 text-xs text-roast-700 sm:hidden">Geser diagram untuk membaca seluruh bagian.</p>
  <figcaption className="mt-2 text-xs leading-6 text-roast-700">{d.caption}</figcaption>
 </figure>;
}
 No newline at end of file