import type {ReactNode} from 'react';
type ModuleCode='M03'|'M04'|'M05'|'M09';
const descriptions:Record<ModuleCode,{title:string;intro:string;detail:string}>={
 M03:{title:'Tiga jalur energi, satu batch',intro:'Konduksi dari kontak, konveksi dari aliran udara dan radiasi dari permukaan panas bekerja bersama.',detail:'Proporsinya berubah sesuai desain mesin, pengaturan dan jumlah biji. Ilustrasi bukan gambar skala temperatur.'},
 M04:{title:'Dua interval RoR, dua cara membaca',intro:'Satu rekaman suhu menghasilkan RoR yang berbeda jika interval pengamatan berbeda.',detail:'Kurva konseptual ini tidak berasal dari sensor nyata. Periksa interval, lag probe dan smoothing sebelum menilai perubahan.'},
 M05:{title:'Massa awal tidak sama dengan massa akhir',intro:'Air dan komponen volatil dapat keluar saat roast; kehilangan massa bukan identik dengan kadar air awal.',detail:'Diagram massa menggunakan ilustrasi 1.000 g green → 860 g roasted. Angka bukan sasaran roasting.'},
 M09:{title:'Jejak kopi dari gudang hingga kemasan',intro:'Green lot dapat dipakai oleh lebih dari satu batch dan satu roast batch dapat menjadi lebih dari satu packing run.',detail:'Saat muncul masalah, nomor identitas memungkinkan pelacakan dan penahanan sesuai cakupan risiko.'}
};
function Frame({children}:{children:ReactNode}){return <div className="mt-5 overflow-x-auto rounded-md border border-paper-300 bg-paper-50 p-3 sm:p-5">{children}</div>}
export function RoasterConceptVisual({moduleCode}:{moduleCode:string}){
 if(!['M03','M04','M05','M09'].includes(moduleCode))return null;
 const key=moduleCode as ModuleCode;
 const d=descriptions[key];
 return <figure className="mt-10 border-y border-paper-300 py-7">
  <figcaption>
   <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Lihat mekanismenya</p>
   <h2 className="mt-2 font-serif text-2xl font-semibold text-roast-950">{d.title}</h2>
   <p className="mt-2 max-w-2xl text-sm leading-7 text-roast-700">{d.intro}</p>
  </figcaption>
  <Frame>
   {key==='M03'&&<svg viewBox="0 0 660 275" role="img" aria-labelledby="heatTitle heatDesc" className="h-auto w-full min-w-[430px]">
    <title id="heatTitle">Jalur energi selama roasting</title><desc id="heatDesc">Konduksi dari permukaan drum, konveksi dari udara panas dan radiasi dari permukaan panas menuju kelompok biji.</desc>
    <rect x="120" y="55" width="420" height="162" rx="65" fill="#efe5d2" stroke="#745b43" strokeWidth="3"/>
    <path d="M147 183Q330 225 515 183" fill="none" stroke="#745b43" strokeWidth="9"/>
    {Array.from({length:12},(_,i)=>{const x=180+(i%6)*55,y=120+Math.floor(i/6)*42;return <ellipse key={i} cx={x} cy={y} rx="14" ry="9" transform={`rotate(${(i*29)%65-30} ${x} ${y})`} fill="#8b634a" stroke="#593e31" strokeWidth="1.5"/>})}
    <path d="M330 267V211" stroke="#aa593a" strokeWidth="4" strokeDasharray="7 6"/><path d="M322 223l8-12 8 12" fill="none" stroke="#aa593a" strokeWidth="4"/>
    <path d="M50 100H150M510 100H610" stroke="#668a83" strokeWidth="4"/><path d="M140 91l12 9-12 9M522 91l-12 9 12 9" stroke="#668a83" fill="none" strokeWidth="4"/>
    <path d="M215 58q115-62 225 0" stroke="#ba8c51" strokeWidth="3" fill="none" strokeDasharray="5 7"/>
    <text x="38" y="77" fill="#456d65" fontSize="16">Konveksi</text><text x="521" y="77" fill="#456d65" fontSize="16">Konveksi</text>
    <text x="330" y="251" textAnchor="middle" fill="#975036" fontSize="15">Kontak drum</text>
    <text x="330" y="25" textAnchor="middle" fill="#8a6337" fontSize="16">Radiasi panas</text>
   </svg>}
   {key==='M04'&&<svg viewBox="0 0 660 270" role="img" aria-labelledby="rorTitle rorDesc" className="h-auto w-full min-w-[430px]">
    <title id="rorTitle">Pembacaan temperatur dan RoR pada interval berbeda</title><desc id="rorDesc">Temperatur sensor selalu naik pada contoh simulasi; laju rata-rata setiap interval berbeda. Pemulusan bergantung pilihan interval.</desc>
    <path d="M65 30V215H615" fill="none" stroke="#635549" strokeWidth="2"/>
    {[40,85,130,175].map((y,i)=><g key={i}><line x1="65" x2="615" y1={y} y2={y} stroke="#ded7cc"/><text x="55" y={y+5} textAnchor="end" fontSize="12" fill="#73675b">{[200,190,180,170][i]}</text></g>)}
    <polyline points="80,185 160,157 240,118 320,105 400,72 480,59 560,39" stroke="#a34e35" fill="none" strokeWidth="4"/>
    {[80,160,240,320,400,480,560].map((x,i)=><circle key={i} cx={x} cy={[185,157,118,105,72,59,39][i]} r="5" fill="#a34e35"/>)}
    <line x1="240" y1="225" x2="320" y2="225" stroke="#416b66" strokeWidth="4"/><line x1="240" y1="218" x2="240" y2="232" stroke="#416b66" strokeWidth="3"/><line x1="320" y1="218" x2="320" y2="232" stroke="#416b66" strokeWidth="3"/>
    <line x1="160" y1="245" x2="400" y2="245" stroke="#927655" strokeWidth="3"/><line x1="160" y1="238" x2="160" y2="252" stroke="#927655" strokeWidth="3"/><line x1="400" y1="238" x2="400" y2="252" stroke="#927655" strokeWidth="3"/>
    <text x="330" y="268" textAnchor="middle" fontSize="13" fill="#635549">Waktu → (interval pendek dan panjang)</text>
    <text x="24" y="17" fontSize="13" fill="#635549">BT (°C), simulasi</text>
   </svg>}
   {key==='M05'&&<svg viewBox="0 0 660 225" role="img" aria-labelledby="massTitle massDesc" className="h-auto w-full min-w-[430px]">
    <title id="massTitle">Susut massa roasting dan yield</title><desc id="massDesc">Green coffee 1000 gram disangrai menjadi 860 gram roasted, 140 gram total massa keluar, menghasilkan yield 86 persen dan mass loss 14 persen.</desc>
    <rect x="40" y="52" width="250" height="85" rx="9" fill="#769276"/>
    <rect x="370" y="52" width="250" height="85" rx="9" fill="#81644e"/>
    <path d="M292 93h68l-14-14m14 14l-14 14" fill="none" stroke="#796b5d" strokeWidth="4"/>
    <text x="165" y="85" textAnchor="middle" fill="white" fontWeight="bold" fontSize="21">1.000 g</text><text x="165" y="109" textAnchor="middle" fill="white" fontSize="16">Green</text>
    <text x="495" y="85" textAnchor="middle" fill="white" fontWeight="bold" fontSize="21">860 g</text><text x="495" y="109" textAnchor="middle" fill="white" fontSize="16">Roasted</text>
    <text x="330" y="170" textAnchor="middle" fontSize="18" fill="#5d4c41">Mass loss 14% · Yield 86%</text>
    <text x="330" y="198" textAnchor="middle" fontSize="14" fill="#7d6f62">Bukan pengukuran moisture green awal</text>
   </svg>}
   {key==='M09'&&<svg viewBox="0 0 660 225" role="img" aria-labelledby="traceTitle traceDesc" className="h-auto w-full min-w-[430px]">
    <title id="traceTitle">Contoh keterlacakan green, roasting dan packing</title><desc id="traceDesc">Green lot G21 menuju roast batch R41 dan R42. R42 menuju packing run P12 dan P13. Setiap unit mempunyai identitas yang memungkinkan penahanan yang tepat.</desc>
    {([[35,94,'G21','Green lot'],[245,35,'R41','Roast'],[245,150,'R42','Roast'],[455,35,'P12','Packing'],[455,150,'P13','Packing']] as const).map(([x,y,id,label])=><g key={id}><rect x={x} y={y} width="155" height="56" rx="7" fill="#f4ede2" stroke="#796452" strokeWidth="2"/><text x={x+77} y={y+23} fontSize="17" textAnchor="middle" fill="#493b32" fontWeight="bold">{id}</text><text x={x+77} y={y+42} fontSize="13" textAnchor="middle" fill="#6e5c4e">{label}</text></g>)}
    <g stroke="#7c856c" strokeWidth="3" fill="none"><path d="M190 118L245 63M190 118L245 178M400 178L430 178V63H455M400 178H455"/></g>
   </svg>}
  </Frame>
  <p className="mt-3 text-xs leading-6 text-roast-600">{d.detail}</p>
 </figure>;
}
