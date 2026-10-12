import React from 'react';

type Diagram={title:string;caption:string;aria:string};
const meta:Record<string,Diagram>={
 M01:{title:'Tujuan menentukan percobaan',caption:'Preferensi berbeda boleh menghasilkan resep berbeda. Keamanan alat bukan variabel yang boleh dikompromikan.',aria:'Keinginan rasa bercabang menjadi pilihan karakter cangkir; data dan keamanan menjadi langkah pemeriksaan sebelum bereksperimen.'},
 M02:{title:'Grind bukan satu ukuran partikel',caption:'Ukuran butir hanyalah ilustrasi konsep. Angka setting antargrinder tidak mempunyai skala universal.',aria:'Distribusi partikel lebih kecil hingga lebih besar, dengan beberapa fines, bukan satu ukuran tunggal.'},
 M03:{title:'Air masuk, cairan keluar, dan zat terlarut',caption:'Angka merupakan contoh fiktif. Selisih input/output bukan extraction yield dan tidak menjamin hasil sensori.',aria:'Lima belas gram kopi diseduh dengan 225 gram air masuk. Contoh minuman keluar 185 gram, bukan 225 gram.'},
 M04:{title:'Water-through-bed dan bypass tidak sama',caption:'Mengalirkan tambahan air melalui bed bisa mengubah ekstraksi; menambah air setelah seduh terutama mengencerkan konsentrasi.',aria:'Dua jalur ilustrasi: air melewati coffee bed dan air ditambahkan sesudah minuman dipisahkan dari coffee bed.'},
 M05:{title:'Percolation dan immersion berbeda arah kontak',caption:'AeroPress digunakan hanya sesuai metode standar dan instruksi pabrikan; visual ini bukan panduan gerakan alat panas.',aria:'Percolation: air melewati bed kopi. Immersion: kopi dan air berkontak sebelum pemisahan oleh filter.'},
 M06:{title:'TDS bukan hardness atau alkalinitas',caption:'Angka TDS air tidak menunjukkan identitas ion maupun keamanan air. Skema bukan analisis laboratorium.',aria:'Tiga lingkaran parameter saling berhubungan namun berbeda: total dissolved solids, hardness, dan alkalinitas.'},
 M07:{title:'Deskripsi rasa tidak sama dengan kesukaan',caption:'Orang bisa sepakat acidity tinggi namun memiliki preferensi yang berbeda. Titik hanyalah contoh ilustratif, bukan data peserta.',aria:'Diagram sumbu intensitas acidity dan tingkat kesukaan menampilkan dua pencicip berbeda preferensi pada intensitas serupa.'},
 M08:{title:'Satu uji, satu pertanyaan yang jelas',caption:'Dua eksperimen dapat berbeda. Bila lebih dari satu faktor diubah, penyebab hasil tidak dapat langsung dipisahkan.',aria:'Percobaan A dan B berbagi kopi, dosis, air, alat; satu kotak grind berubah sehingga hasil dapat dibandingkan dengan batas.'},
 M09:{title:'Es adalah bagian massa air resep',caption:'Contoh: A 150 gram air panas dan 75 gram es; B 175 gram air panas dan 50 gram es. Total input air masing-masing 225 gram, tetapi jalur ekstraksinya berbeda.',aria:'Dua ilustrasi gelas dengan bagian air through-bed berbeda dan es awal berbeda untuk total air sama.'},
 M10:{title:'Revisi resep mengikuti bukti',caption:'Setiap versi mempunyai alasan dan hasil yang dicatat. Tidak ada resep universal dan tidak ada hasil cicip yang boleh diada-adakan.',aria:'Alur eksperimen: tujuan, V0, prediksi V1, data aktual, revisi V2, dan langkah ulang.'}
};
const ink='#3c3028',muted='#6c6056',clay='#9d6547',cream='#ece1d1',pale='#f8f4ee',slate='#b5b0a6';
function Label({x,y,children,size=13,anchor='middle',fill=ink}:{x:number;y:number;children:React.ReactNode;size?:number;anchor?:'middle'|'start'|'end';fill?:string}){
 return <text x={x} y={y} textAnchor={anchor} fill={fill} fontFamily="system-ui,-apple-system,sans-serif" fontSize={size}>{children}</text>;
}
function Arrow({x1,y1,x2,y2}:{x1:number;y1:number;x2:number;y2:number}){return <path d={`M${x1} ${y1}L${x2} ${y2}`} stroke={clay} strokeWidth="2" fill="none" markerEnd="url(#arr)"/>;}
function Card({x,y,w=135,h=65,children}:{x:number;y:number;w?:number;h?:number;children:React.ReactNode}){
 return <g><rect x={x} y={y} width={w} height={h} rx={9} stroke="#c6b6a3" fill="#fff" strokeWidth="1.5"/>{children}</g>;
}
export function HomeBrewerConceptVisual({moduleCode}:{moduleCode:string}){
 const d=meta[moduleCode];if(!d)return null;
 return <figure className="not-prose my-8 border-y border-paper-300 py-6" aria-label={d.title}>
  <h2 className="mb-4 font-serif text-xl font-bold text-roast-950">{d.title}</h2>
  <div className="overflow-x-auto rounded-lg bg-[#f8f4ee] p-3 sm:p-4">
  <svg role="img" aria-label={d.aria} viewBox="0 0 620 260" className="h-auto w-[610px] max-w-none sm:w-full" xmlns="http://www.w3.org/2000/svg">
   <defs><marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill={clay}/></marker></defs>
   {moduleCode==='M01'&&<>
    <Card x={20} y={80} w={145} h={90}><Label x={93} y={113} size={16}>Apa yang dicari?</Label><Label x={93} y={139} size={12}>Rasa & konteks</Label></Card>
    <Arrow x1={170} y1={126} x2={205} y2={126}/>
    <Card x={215} y={45} w={150}><Label x={290} y={74}>Lebih ringan</Label><Label x={290} y={96} size={11}>Pilihan eksperimen A</Label></Card>
    <Card x={215} y={144} w={150}><Label x={290} y={173}>Lebih intens</Label><Label x={290} y={195} size={11}>Pilihan eksperimen B</Label></Card>
    <Arrow x1={368} y1={75} x2={417} y2={126}/><Arrow x1={368} y1={179} x2={417} y2={134}/>
    <Card x={426} y={81} w={175} h={89}><Label x={513} y={113}>Uji, ukur, cicip</Label><Label x={513} y={136} size={11}>Tetap aman</Label></Card>
    <Label x={312} y={240} fill={muted} size={12}>Tujuan berbeda → resep percobaan bisa berbeda.</Label>
   </>}
   {moduleCode==='M02'&&<>
    <Label x={175} y={42} size={16}>Partikel lebih besar</Label><Label x={470} y={42} size={16}>Lebih banyak fines</Label>
    {Array.from({length:20},(_,i)=>{const r=6+(i%5)*2.4;return <circle key={'a'+i} cx={75+(i%5)*47} cy={79+Math.floor(i/5)*39} r={r} fill={cream} stroke={clay} strokeWidth={1.5}/>;})}
    {Array.from({length:70},(_,i)=>{const r=2.5+(i%3);return <circle key={'b'+i} cx={366+(i%10)*22} cy={68+Math.floor(i/10)*22} r={r} fill={clay} opacity={.4+(i%3)*.15}/>;})}
    <Label x={310} y={242} size={12} fill={muted}>Distribusi, bukan dua foto mikroskop atau ukuran terukur.</Label>
   </>}
   {moduleCode==='M03'&&<>
    <Card x={25} y={76} w={145} h={110}><Label x={98} y={111}>Kopi kering</Label><Label x={98} y={144} size={25}>15 g</Label></Card>
    <Card x={215} y={76} w={155} h={110}><Label x={291} y={110}>Air masuk</Label><Label x={291} y={144} size={25}>225 g</Label></Card>
    <Arrow x1={373} y1={131} x2={416} y2={131}/>
    <Card x={426} y={76} w={168} h={110}><Label x={510} y={110}>Minuman keluar</Label><Label x={510} y={144} size={25}>185 g</Label></Card>
    <Label x={310} y={236} size={12} fill={muted}>Output ≠ input. EY tidak bisa dihitung hanya dari selisih 40 g.</Label>
   </>}
   {moduleCode==='M04'&&<>
    <Label x={165} y={36} size={16}>Melalui coffee bed</Label><Label x={455} y={36} size={16}>Bypass setelah seduh</Label>
    <Arrow x1={165} y1={47} x2={165} y2={84}/>
    <Card x={90} y={91} w={150}><Label x={165} y={120}>Bubuk kopi</Label><Label x={165} y={140} size={11}>Kontak + ekstraksi</Label></Card>
    <Arrow x1={165} y1={159} x2={165} y2={201}/>
    <Label x={165} y={226}>Hasil seduh</Label>
    <Card x={375} y={91} w={165}><Label x={457} y={120}>Minuman jadi</Label><Label x={457} y={140} size={11}>+ air tambahan</Label></Card>
    <Arrow x1={457} y1={47} x2={457} y2={84}/><Arrow x1={457} y1={159} x2={457} y2={201}/>
    <Label x={457} y={226}>Diencerkan</Label>
   </>}
   {moduleCode==='M05'&&<>
    <Label x={150} y={35} size={16}>Percolation</Label><Label x={469} y={35} size={16}>Immersion</Label>
    <Arrow x1={150} y1={50} x2={150} y2={95}/>
    <path d="M92 103L208 103L182 176L117 176Z" fill={cream} stroke={ink} strokeWidth={2}/>
    <path d="M100 120H200L182 166H117Z" fill={clay} opacity=".38"/>
    <Arrow x1={150} y1={183} x2={150} y2={216}/><Label x={150} y={241} size={12}>Air melewati bed</Label>
    <rect x={399} y={90} width={142} height={98} rx="7" fill="#fff" stroke={ink} strokeWidth="2"/>
    <rect x={401} y={110} width={138} height={75} fill={cream}/>
    {Array.from({length:16},(_,i)=><circle key={i} cx={416+(i%4)*32} cy={124+Math.floor(i/4)*17} r="4" fill={clay}/>)}
    <Label x={470} y={241} size={12}>Kontak lalu dipisah</Label>
   </>}
   {moduleCode==='M06'&&<>
    <circle cx={310} cy={130} r={102} fill={cream}/><circle cx={225} cy={118} r={69} fill="#fff" fillOpacity=".92" stroke={clay} strokeWidth={1.5}/><circle cx={393} cy={109} r={69} fill="#fff" fillOpacity=".92" stroke={clay} strokeWidth={1.5}/>
    <circle cx={310} cy={191} r={64} fill="#fff" fillOpacity=".95" stroke={clay} strokeWidth={1.5}/>
    <Label x={225} y={117} size={15}>TDS</Label><Label x={225} y={136} size={11}>Gabungan</Label>
    <Label x={393} y={108} size={15}>Hardness</Label><Label x={393} y={127} size={11}>Ca / Mg</Label>
    <Label x={310} y={187} size={15}>Alkalinitas</Label><Label x={310} y={208} size={11}>Kapasitas buffer</Label>
   </>}
   {moduleCode==='M07'&&<>
    <path d="M104 39V213H558" stroke={ink} strokeWidth="2" fill="none"/>
    <Label x={88} y={48} size={12} anchor="end">Suka</Label><Label x={88} y={203} size={12} anchor="end">Tidak</Label>
    <Label x={330} y={240} size={13}>Intensitas acidity dirasakan →</Label>
    <path d="M162 185L499 68" fill="none" stroke={slate} strokeWidth={2} strokeDasharray="5 7"/>
    <circle cx={380} cy={72} r={10} fill={clay}/><Label x={397} y={67} anchor="start" size={12}>Pencicip A</Label>
    <circle cx={380} cy={177} r={10} fill={ink}/><Label x={397} y={171} anchor="start" size={12}>Pencicip B</Label>
    <Label x={310} y={21} size={11} fill={muted}>Titik ilustratif, bukan data riset.</Label>
   </>}
   {moduleCode==='M08'&&<>
    {[[34,'Kopi','Lot A'],[181,'Air','225 g'],[329,'Filter','P'],[476,'Grind','X / Y']].map(([x,name,sub])=><Card key={String(name)} x={Number(x)} y={80} w={110} h={92}><Label x={Number(x)+55} y={110}>{name}</Label><Label x={Number(x)+55} y={135} size={12}>{sub}</Label></Card>)}
    <path d="M86 190H533" stroke={clay} strokeWidth={2}/><Label x={310} y={217} size={13}>Pertanyaan: efek grind bila kondisi lain dijaga?</Label>
    <Label x={310} y={35} size={13}>Ubah satu variabel utama dengan alasan.</Label>
   </>}
   {moduleCode==='M09'&&<>
    {[{x:60,t:'A',hot:150,ice:75},{x:368,t:'B',hot:175,ice:50}].map(z=><g key={z.t}>
     <Label x={z.x+93} y={38} size={17}>Iced {z.t}</Label>
     <rect x={z.x} y={62} width={187} height={142} rx={10} fill="#fff" stroke={ink}/>
     <rect x={z.x+5} y={115} width={177} height={83} fill={clay} opacity=".21"/>
     <rect x={z.x+18} y={79} width={35} height={35} transform={`rotate(12 ${z.x+35} 96)`} fill={pale} stroke={slate}/>
     <rect x={z.x+111} y={89} width={34} height={34} transform={`rotate(-15 ${z.x+128} 106)`} fill={pale} stroke={slate}/>
     <Label x={z.x+93} y={147} size={14}>Air panas {z.hot} g</Label><Label x={z.x+93} y={171} size={13}>Es awal {z.ice} g</Label>
    </g>)}
    <Label x={310} y={241} size={12}>Kedua total input air 225 g; ekstraksi berbeda.</Label>
   </>}
   {moduleCode==='M10'&&<>
    {[[18,'Tujuan'],[169,'Baseline V0'],[320,'Uji V1'],[471,'Revisi']].map(([x,label])=><Card key={String(label)} x={Number(x)} y={83} w={125} h={82}><Label x={Number(x)+62} y={114} size={15}>{label}</Label><Label x={Number(x)+62} y={137} size={11}>{label==='Uji V1'?'Ubah 1 faktor':'Catat bukti'}</Label></Card>)}
    <Arrow x1={145} y1={124} x2={166} y2={124}/><Arrow x1={294} y1={124} x2={316} y2={124}/><Arrow x1={446} y1={124} x2={467} y2={124}/>
    <path d="M533 171V212H80V171" stroke={clay} strokeWidth={2} fill="none" strokeDasharray="5 5"/>
    <Label x={310} y={238} size={12}>Hasil di luar prediksi? Buat pertanyaan berikutnya.</Label>
   </>}
  </svg></div>
  <p className="mt-2 text-xs text-roast-700 sm:hidden">Geser diagram untuk melihat semua bagian.</p>
  <figcaption className="mt-3 text-xs leading-6 text-roast-700">{d.caption}</figcaption>
 </figure>;
}
