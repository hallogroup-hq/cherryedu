import React from 'react';

/**
 * Original conceptual teaching diagrams; not real photos, videos, machine instructions,
 * or measurements. Do not present as verified visual evidence of a physical experiment.
 */
type Kind='order'|'strength'|'ratio'|'puck'|'milk'|'bypass'|'signature';
const diagrams: Record<string,Kind>={
 'bv2-m01-l01':'order',
 'bv2-m02-l01':'strength',
 'bv2-m02-l02':'ratio',
 'bv2-m03-l03':'puck',
 'bv2-m05-l03':'milk',
 'bv2-m07-l01':'bypass',
 'bv2-m11-l04':'signature',
};
const dark='#372d27', muted='#71665e', tan='#e8d9c7', pale='#f7f2eb', brick='#9a4d34', line='#c7b8a6';
const TXT={fontFamily:'system-ui, -apple-system, sans-serif',fontSize:14,fill:dark} as const;
const small={...TXT,fontSize:11,fill:muted} as const;
function T({x,y,children,size=14,anchor='start',color=dark}:{x:number;y:number;children:React.ReactNode;size?:number;anchor?:'start'|'middle'|'end';color?:string}){return <text x={x} y={y} textAnchor={anchor} style={{...TXT,fontSize:size,fill:color}}>{children}</text>}
function Arrow({x1,y1,x2,y2}:{x1:number;y1:number;x2:number;y2:number}){return <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke={brick} strokeWidth={2} fill="none" markerEnd="url(#arrowHead)"/>}
function Frame({alt,children}:{alt:string;children:React.ReactNode}){
 return <svg role="img" aria-label={alt} viewBox="0 0 620 270" className="h-auto w-[620px] max-w-none sm:w-full" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={brick}/></marker></defs>
  {children}
 </svg>;
}
const contentByKind: Record<Kind,{title:string;caption:string;alt:string}>={
 order:{title:'Dari kebutuhan pelanggan ke keputusan bar',caption:'Alur keputusan. Saat informasi penting belum lengkap, barista bertanya atau menahan layanan—bukan menebak bahan dan resep.',alt:'Diagram alur: permintaan pelanggan menuju klarifikasi, verifikasi keamanan, lalu memilih proses dan mengonfirmasi pesanan.'},
 strength:{title:'Konsentrasi dan jumlah terekstraksi bukan satu hal',caption:'Data fiktif yang setara secara estimasi extraction yield. A dan B tidak otomatis memiliki rasa yang sama; tidak ada tasting pada ilustrasi.',alt:'Dua minuman: A 40 gram berkonsentrasi TDS 10 persen dan B 50 gram berkonsentrasi TDS 8 persen. Keduanya berisi 4 gram zat terlarut dari 20 gram kopi.'},
 ratio:{title:'Air yang dituang tidak selalu sama dengan minuman di cangkir',caption:'Diagram hanya menjelaskan alur dan satuan. Angka retensi pada gambar bersifat contoh, bukan rasio retensi universal.',alt:'Diagram kopi 15 gram, air masuk 225 gram, contoh minuman keluar 185 gram, selisih 40 gram tertahan atau hilang dalam sistem contoh.'},
 puck:{title:'Aliran bed kopi bisa berbeda meski dosis sama',caption:'Ilustrasi konseptual, bukan foto shot atau bukti bahwa semua aliran cepat disebabkan distribusi puck.',alt:'Dua penampang bed kopi hipotetis. Puck relatif merata dibanding bed dengan jalur resistansi lebih rendah di satu bagian, digambarkan dengan jalur air.'},
 milk:{title:'Aeration dan texturing mempunyai peran berbeda',caption:'Skema konsep gelembung. Posisi wand spesifik, batas suhu, keselamatan uap, dan gerakan tangan harus dipelajari dari demonstrasi instruktur dan manual mesin, bukan gambar ini.',alt:'Diagram tahap memasukkan udara dan tahap mengintegrasikan gelembung menjadi tekstur lebih merata, tanpa instruksi posisi wand.'},
 bypass:{title:'Air melewati coffee bed berbeda dari air bypass',caption:'Lewat bed: air dapat ikut mengubah ekstraksi. Bypass: air ditambahkan sesudah bed sehingga terutama mengubah konsentrasi, dengan asumsi tanpa zat terlarut tambahan.',alt:'Dua alur: air melewati bed kopi dan ikut mengekstraksi, dibanding air bersih ditambahkan ke minuman setelah bed dipisahkan.'},
 signature:{title:'Eksperimen signature adalah siklus, bukan resep final sekali coba',caption:'Resep bisa kembali ke tahap hipotesis setelah feedback; sebuah konsep tidak layak diluncurkan tanpa verifikasi keamanan, costing dan produksi ulang.',alt:'Siklus pengembangan minuman: brief, hipotesis, dua prototipe, observasi, cek bahan dan biaya, SOP, kemudian revisi atau uji pelanggan.'}
};

export function LearningMechanismVisual({lessonId}:{lessonId:string}){
 const kind=diagrams[lessonId];if(!kind)return null;
 const meta=contentByKind[kind];
 return <figure className="not-prose my-9 overflow-hidden border-y border-paper-300 py-6" aria-label={meta.title}>
  <h2 className="mb-4 font-serif text-lg font-semibold text-roast-950">{meta.title}</h2>
  <div className="w-full overflow-x-auto rounded-lg bg-[#f7f2eb] p-2 sm:p-4">
  {kind==='order'&&<Frame alt={meta.alt}>
   <rect x="20" y="90" width="130" height="82" rx="8" fill={tan}/><T x={85} y={119} anchor="middle">Pelanggan</T><T x={85} y={141} size={12} anchor="middle">Menyebut tujuan</T>
   <Arrow x1={152} y1={131} x2={196} y2={131}/>
   <rect x="204" y="90" width="175" height="82" rx="8" fill="white" stroke={line}/><T x={292} y={116} anchor="middle">Klarifikasi</T><T x={292} y={138} size={12} anchor="middle">Selera, bahan, alergi</T>
   <Arrow x1={382} y1={131} x2={425} y2={131}/>
   <rect x="434" y="90" width="163" height="82" rx="8" fill={tan}/><T x={515} y={117} anchor="middle">Keputusan</T><T x={515} y={140} size={12} anchor="middle">Serve / hold / tanya</T>
   <path d="M292 90 V52 H515 V90" fill="none" stroke={brick} strokeDasharray="5 5" strokeWidth="1.4"/>
   <T x={402} y={39} size={12} anchor="middle" color={brick}>Jika informasi belum cukup</T>
   <T x={310} y={221} size={12} anchor="middle" color={muted}>Tidak ada angka resep sebelum tujuan dan keamanan diperiksa.</T>
  </Frame>}
  {kind==='strength'&&<Frame alt={meta.alt}>
   {[{x:65,label:'A',mass:'40 g',tds:'10%',solutes:'4 g'},{x:356,label:'B',mass:'50 g',tds:'8%',solutes:'4 g'}].map(z=><g key={z.label}>
    <T x={z.x+74} y={37} size={18} anchor="middle">Minuman {z.label}</T>
    <path d={`M${z.x} 62 h145 l-14 130 h-116 Z`} stroke={dark} strokeWidth="2" fill="white"/>
    <path d={`M${z.x+10} 102 h125 l-9 82 h-107 Z`} fill={tan}/>
    <T x={z.x+74} y={129} anchor="middle">{z.mass}</T>
    <T x={z.x+74} y={154} size={12} anchor="middle">TDS {z.tds}</T>
    <T x={z.x+74} y={227} size={12} anchor="middle">Zat terlarut: {z.solutes}</T>
   </g>)}
   <Arrow x1={250} y1={141} x2={319} y2={141}/>
   <T x={285} y={112} size={11} anchor="middle" color={brick}>EY sama</T>
   <T x={310} y={253} size={11} anchor="middle" color={muted}>Asumsi kedua seduhan memakai 20 g bubuk kopi awal.</T>
  </Frame>}
  {kind==='ratio'&&<Frame alt={meta.alt}>
   <rect x="35" y="82" width="152" height="96" rx="10" fill={tan}/><T x={111} y={113} anchor="middle">Input</T><T x={111} y={135} size={12} anchor="middle">Kopi 15 g</T><T x={111} y={155} size={12} anchor="middle">Air 225 g</T>
   <Arrow x1={189} y1={128} x2={271} y2={128}/>
   <path d="M280 78 h95 l-13 111 h-68 Z" fill="white" stroke={dark} strokeWidth={2}/><path d="M289 126 h77 l-8 53 h-61 Z" fill={tan}/><T x={327} y={49} anchor="middle">Coffee bed</T>
   <Arrow x1={377} y1={128} x2={456} y2={128}/>
   <rect x="466" y="84" width="122" height="86" rx="8" fill={pale} stroke={line}/><T x={528} y={117} anchor="middle">Output</T><T x={528} y={143} size={12} anchor="middle">185 g contoh</T>
   <T x={310} y={218} size={12} anchor="middle" color={brick}>40 g selisih contoh: retensi/kehilangan sistem</T>
  </Frame>}
  {kind==='puck'&&<Frame alt={meta.alt}>
   {[{x:60,label:'A — bed lebih merata',uneven:false},{x:365,label:'B — jalur berbeda',uneven:true}].map(v=><g key={v.x}>
    <T x={v.x+100} y={33} size={13} anchor="middle">{v.label}</T>
    <rect x={v.x} y="96" width="200" height="97" fill={tan} stroke={dark} strokeWidth={2} rx="4"/>
    {Array.from({length:11},(_,i)=><circle key={i} cx={v.x+17+i*16} cy={117+(i%3)*19} r={v.uneven&&i===7?2:4} fill={muted} opacity=".65"/>)}
    <path d={v.uneven?`M${v.x+140} 65 C${v.x+142} 110 ${v.x+156} 142 ${v.x+148} 212`:`M${v.x+70} 65 L${v.x+70} 210 M${v.x+130} 65 L${v.x+130} 210`} stroke={brick} strokeWidth={v.uneven?5:2} fill="none" strokeDasharray="6 6"/>
    <T x={v.x+100} y={241} size={12} anchor="middle" color={muted}>Skema, bukan foto hasil shot</T>
   </g>)}
  </Frame>}
  {kind==='milk'&&<Frame alt={meta.alt}>
   <rect x="35" y="67" width="230" height="146" rx="15" fill="white" stroke={line}/>
   <T x={150} y={49} anchor="middle">1. Aeration</T>
   {Array.from({length:12},(_,i)=><circle key={i} cx={72+(i%4)*48} cy={110+Math.floor(i/4)*35} r={11+(i%3)*2} fill={pale} stroke={brick} strokeWidth="1.5"/>)}
   <Arrow x1={279} y1={138} x2={335} y2={138}/>
   <rect x="349" y="67" width="230" height="146" rx="15" fill="white" stroke={line}/>
   <T x={465} y={49} anchor="middle">2. Texturing</T>
   {Array.from({length:36},(_,i)=><circle key={i} cx={368+(i%9)*23} cy={94+Math.floor(i/9)*26} r="5.5" fill={tan} stroke={brick} strokeWidth=".7"/>)}
   <T x={310} y={249} anchor="middle" size={12}>Ukuran dan distribusi gelembung berubah selama proses.</T>
  </Frame>}
  {kind==='bypass'&&<Frame alt={meta.alt}>
   <T x={140} y={44} size={15} anchor="middle">Brew-through</T>
   <T x={464} y={44} size={15} anchor="middle">Bypass</T>
   <rect x="89" y="102" width="100" height="55" fill={tan} rx="7"/><T x={139} y={124} size={12} anchor="middle">Coffee bed</T><T x={139} y={142} size={11} anchor="middle">Ekstraksi</T>
   <Arrow x1={139} y1={58} x2={139} y2={95}/><Arrow x1={139} y1={164} x2={139} y2={211}/>
   <T x={139} y={239} size={13} anchor="middle">Minuman keluar</T>
   <rect x="407" y="102" width="110" height="55" fill={pale} stroke={line} rx="7"/><T x={462} y={124} size={12} anchor="middle">Minuman</T><T x={462} y={143} size={11} anchor="middle">sudah diseduh</T>
   <Arrow x1={462} y1={60} x2={462} y2={95}/><T x={473} y={76} size={11}>+ Air</T>
   <Arrow x1={462} y1={164} x2={462} y2={211}/><T x={462} y={239} size={13} anchor="middle">Diencerkan</T>
   <path d="M300 69 V224" stroke={line} strokeDasharray="5 7" strokeWidth={2}/>
  </Frame>}
  {kind==='signature'&&<Frame alt={meta.alt}>
   {[
    [30,'Brief','Untuk siapa?'],
    [169,'Hipotesis','Apa yang diuji?'],
    [309,'Prototype','Timbang dan catat'],
    [448,'Evidence','Taste & feedback']
   ].map(([x,label,subtitle])=><g key={label}>
    <rect x={Number(x)} y="72" rx="8" width="134" height="84" fill={label==='Evidence'?tan:'white'} stroke={line}/>
    <T x={Number(x)+67} y={102} anchor="middle" size={14}>{label}</T>
    <T x={Number(x)+67} y={127} anchor="middle" size={11}>{subtitle}</T>
   </g>)}
   <Arrow x1={163} y1={114} x2={168} y2={114}/>
   <Arrow x1={303} y1={114} x2={308} y2={114}/>
   <Arrow x1={442} y1={114} x2={447} y2={114}/>
   <path d="M515 163 V216 H100 V162" fill="none" stroke={brick} strokeWidth={2} strokeDasharray="6 5" markerEnd="url(#arrowHead)"/>
   <T x={310} y={204} size={12} anchor="middle" color={brick}>Revisi resep setelah bukti; cek keamanan + biaya + SOP</T>
  </Frame>}
  </div>
  <p className="mt-2 text-xs text-roast-700 sm:hidden">Geser diagram ke samping untuk membaca semua label.</p>
  <figcaption className="mt-3 text-xs leading-6 text-roast-700">{meta.caption}</figcaption>
 </figure>;
}