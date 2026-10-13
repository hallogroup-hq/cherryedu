import React from 'react';

/** Author-original SVG learning schematics. Not footage, apparatus safety instructions or real measurement. */
const contexts:Record<string,{title:string;caption:string;alt:string}>={
 'hbv2-m01-l02':{title:'Zona kerja aman untuk seduh rumahan',caption:'Ini denah konsep. Lokasi listrik, stabilitas wadah dan jalur air panas harus dinilai pada kondisi rumah sebenarnya.',alt:'Denah meja seduh sederhana membedakan area panas, area gelas bersih, dan kelistrikan yang dipisahkan dari tumpahan air.'},
 'hbv2-m02-l01':{title:'Fakta kemasan berbeda dari janji rasa',caption:'Deskriptor aroma dalam kemasan bukan daftar bahan tambahan maupun jaminan pengalaman setiap pencicip.',alt:'Kemasan kopi digambarkan menjadi dua bagian: identitas yang tercantum dan deskripsi aroma yang harus dievaluasi sendiri.'},
 'hbv2-m03-l02':{title:'EY sama, kekuatan minuman berbeda',caption:'Data ilustratif: 20 g dose; A 40 g beverage dan 10% TDS, B 50 g dan 8% TDS. Keduanya perkiraan 4 g zat terlarut atau EY 20%. Rasa tidak diprediksi.',alt:'Dua gelas A dan B dengan massa minuman dan konsentrasi berbeda namun estimasi massa zat terlarut sama.'},
 'hbv2-m04-l03':{title:'Waktu lambat dapat punya beberapa penyebab',caption:'Diagram hanya menampilkan hipotesis untuk diuji. Tidak ada satu pola aliran yang otomatis menjelaskan rasa asam atau pahit.',alt:'Satu kotak drawdown lambat bercabang ke kemungkinan grind, filter, pola tuang dan dosis serta tanda tanya pada rasa.'},
 'hbv2-m05-l03':{title:'AeroPress: stabilitas alat mendahului resep',caption:'Pabrikan AeroPress secara resmi tidak menganjurkan inverted karena alat lebih tidak stabil dan berisiko menumpahkan air panas. Pelajari metode standar melalui manual model yang dimiliki.',alt:'Ilustrasi peringatan keselamatan dan perangkat berbasis wadah tegak stabil; metode inverted ditandai tidak dianjurkan, tanpa langkah praktis.'},
 'hbv2-m06-l02':{title:'Tiga parameter air menjawab pertanyaan berbeda',caption:'TDS umum tidak menentukan komposisi ion, alkalinitas, atau keamanan mikrobiologis. Data ini tidak meracik air minum.',alt:'Tiga kotak berlabel TDS, hardness Ca Mg, dan alkalinitas buffer menunjukkan apa yang masing-masing ukur.'},
 'hbv2-m07-l02':{title:'Blind tasting mengurangi informasi pemicu ekspektasi',caption:'Kode sampel dan urutan dapat mengurangi sebagian bias; suhu, metode, identitas kopi dan kelelahan pencicip tetap bisa berpengaruh.',alt:'Dua cangkir dengan kode A dan B serta kartu pengamatan aroma, tekstur dan preferensi yang dipisahkan.'},
 'hbv2-m08-l03':{title:'Variabel pengganggu menyulitkan klaim penyebab',caption:'Jika grind dan filter berubah sekaligus, hasil tidak dapat diatribusikan ke salah satu saja. Rancang kondisi pembanding.',alt:'Tabel dua percobaan A dan B dengan grind dan filter berbeda keduanya ditandai perubahan; kondisi C mengisolasi salah satu faktor.'},
 'hbv2-m09-l02':{title:'Cold brew: rasa dan keamanan adalah dua pemeriksaan',caption:'Tidak ada masa simpan universal yang ditetapkan dari bau, warna atau rasa. Status simpan yang tidak jelas berarti perlu hold sesuai SOP.',alt:'Diagram dua jalur: hasil cicip dan pemeriksaan keamanan simpan; minuman dengan penyimpanan tidak diketahui harus ditahan.'},
 'hbv2-m10-l02':{title:'Prediksi yang salah tetap menghasilkan pembelajaran',caption:'V0, V1 dan V2 adalah versi percobaan. Dokumentasi hasil yang melawan hipotesis membantu menentukan uji berikutnya.',alt:'Urutan hipotesis, versi V0, prediksi V1, hasil yang tidak sesuai, lalu revisi V2 dan uji ulang.'}
};
const ink='#392d27',muted='#75685f',bark='#9b6547',cream='#e8dac8',pale='#faf6ef',line='#c6b7a7';
function T({x,y,children,size=13,anchor='middle',color=ink}:{x:number;y:number;children:React.ReactNode;size?:number;anchor?:'middle'|'start'|'end';color?:string}){return <text x={x} y={y} fill={color} fontFamily="system-ui,-apple-system,sans-serif" fontSize={size} textAnchor={anchor}>{children}</text>;}
function Rect({x,y,w=130,h=64,children}:{x:number;y:number;w?:number;h?:number;children:React.ReactNode}){return <g><rect x={x} y={y} width={w} height={h} rx={8} fill="#fff" stroke={line}/>{children}</g>;}
function A({x1,y1,x2,y2}:{x1:number;y1:number;x2:number;y2:number}){return <path d={`M${x1} ${y1}L${x2} ${y2}`} stroke={bark} strokeWidth={2} markerEnd="url(#a2)" fill="none"/>;}
export function HomeBrewerDeepVisual({lessonId}:{lessonId:string}){
 const d=contexts[lessonId];if(!d)return null;
 return <figure className="not-prose my-9 border-y border-paper-300 py-6" aria-label={d.title}>
  <h2 className="mb-4 font-serif text-xl font-semibold text-roast-950">{d.title}</h2>
  <div className="overflow-x-auto rounded-lg bg-[#faf6ef] p-3 sm:p-4">
   <svg role="img" aria-label={d.alt} viewBox="0 0 620 260" className="h-auto w-[610px] max-w-none sm:w-full">
    <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill={bark}/></marker></defs>
    {lessonId==='hbv2-m01-l02'&&<>
      <rect x="38" y="45" width="525" height="170" rx="13" fill="#fff" stroke={line} strokeWidth={2}/>
      <rect x="60" y="70" width="165" height="124" rx="8" fill={cream}/>
      <T x={142} y={106} size={16}>Zona air panas</T><T x={142} y={134} size={12}>Wadah tahan panas</T><T x={142} y={158} size={12}>Permukaan stabil</T>
      <rect x="255" y="70" width="160" height="124" rx="8" fill="#f3f0e9" stroke={line}/>
      <T x={335} y={106} size={16}>Area gelas</T><T x={335} y={135} size={12}>Jalur serah bersih</T>
      <rect x="438" y="70" width="101" height="124" rx="8" fill={ink}/>
      <T x={488} y={110} size={15} color="#fff">Listrik</T><T x={488} y={135} size={11} color="#fff">Pisahkan</T><T x={488} y={155} size={11} color="#fff">dari air</T>
      <T x={311} y={247} size={12} color={muted}>Denah ilustratif — cek kondisi rumah sesungguhnya.</T>
    </>}
    {lessonId==='hbv2-m02-l01'&&<>
      <rect x="58" y="46" width="198" height="163" rx="12" fill={cream} stroke={ink}/>
      <T x={157} y={75} size={18}>Label kopi</T>
      <path d="M82 103H234M82 134H234M82 165H234" stroke={line} strokeWidth={2}/>
      <T x={157} y={97} size={12}>Origin & lot</T><T x={157} y={129} size={12}>Proses & roast date</T><T x={157} y={159} size={12}>Notes: berry</T><T x={157} y={190} size={12}>Data ≠ prediksi</T>
      <A x1={263} y1={128} x2={319} y2={128}/>
      <Rect x={331} y={61} w={230} h={129}><T x={446} y={98} size={18}>Cangkir nyata</T><T x={446} y={129} size={13}>Amati aroma & rasa</T><T x={446} y={157} size={12}>Tidak wajib identik</T></Rect>
      <T x={310} y={239} color={muted} size={12}>Catatan roast adalah konteks, bukan jaminan deskriptor.</T>
    </>}
    {lessonId==='hbv2-m03-l02'&&<>
      {[{x:64,t:'A',m:'40 g',tds:'10%',h:118},{x:362,t:'B',m:'50 g',tds:'8%',h:148}].map(z=><g key={z.t}>
       <T x={z.x+90} y={40} size={17}>Cangkir {z.t}</T>
       <path d={`M${z.x+15} 58H${z.x+165}L${z.x+147} 212H${z.x+33}Z`} fill="#fff" stroke={ink} strokeWidth={2}/>
       <path d={`M${z.x+30} ${210-z.h}H${z.x+150}L${z.x+141} 204H${z.x+40}Z`} fill={cream}/>
       <T x={z.x+90} y={132}>{z.m}</T><T x={z.x+90} y={156}>{z.tds} TDS</T><T x={z.x+90} y={188}>4 g solut</T>
      </g>)}
      <A x1={246} y1={123} x2={337} y2={123}/><T x={292} y={100} size={12}>EY 20%</T>
      <T x={310} y={242} size={12} color={muted}>Dose A dan B masing-masing 20 g, data fiktif.</T>
    </>}
    {lessonId==='hbv2-m04-l03'&&<>
      <Rect x={28} y={83} w={150} h={100}><T x={103} y={112}>Drawdown</T><T x={103} y={149} size={24}>4:20</T></Rect>
      <A x1={182} y1={133} x2={224} y2={133}/>
      {[[241,60,'Grind'],[429,60,'Filter'],[241,151,'Pola tuang'],[429,151,'Dosis']].map(([x,y,t])=><Rect key={String(t)} x={Number(x)} y={Number(y)} w={150} h={65}><T x={Number(x)+75} y={Number(y)+38} size={15}>{t}</T></Rect>)}
      <T x={310} y={248} size={12} color={muted}>Durasi bukan bukti bahwa salah satu sebab pasti benar.</T>
    </>}
    {lessonId==='hbv2-m05-l03'&&<>
      <Rect x={48} y={58} w={245} h={145}>
       <T x={170} y={88} size={17}>Metode standar</T><rect x="135" y="102" width="70" height="68" rx="5" fill={cream} stroke={ink} strokeWidth={2}/>
       <rect x="104" y="180" width="131" height="12" rx="3" fill={ink}/><T x={170} y={222} size={12}>Perangkat stabil</T>
      </Rect>
      <Rect x={331} y={58} w={244} h={145}>
       <T x={454} y={88} size={17}>Inverted</T>
       <path d="M420 117L487 165M487 117L420 165" stroke="#b44234" strokeWidth={7}/>
       <T x={454} y={188} size={12}>Tidak dianjurkan</T><T x={454} y={222} size={12}>Risiko tumpahan panas</T>
      </Rect>
      <T x={310} y={252} color={muted} size={11}>Ini peringatan, bukan panduan membalik perangkat.</T>
    </>}
    {lessonId==='hbv2-m06-l02'&&<>
     {[{x:28,title:'TDS',desc:'Gabungan solut',sub:'Bukan uji keamanan'},{x:232,title:'Hardness',desc:'Ca²⁺ / Mg²⁺',sub:'Bukan TDS total'},{x:435,title:'Alkalinitas',desc:'Daya buffer asam',sub:'Bukan sekadar pH'}].map(z=><Rect key={z.title} x={z.x} y={65} w={156} h={130}>
      <T x={z.x+78} y={100} size={17}>{z.title}</T><T x={z.x+78} y={133} size={12}>{z.desc}</T><T x={z.x+78} y={161} size={11} color={muted}>{z.sub}</T></Rect>)}
     <T x={310} y={234} size={12}>Satu angka tidak dapat menggantikan seluruh analisis air.</T>
    </>}
    {lessonId==='hbv2-m07-l02'&&<>
      {[[83,'A'],[346,'B']].map(([x,t])=><g key={t}>
       <path d={`M${Number(x)+20} 63H${Number(x)+186}L${Number(x)+173} 190H${Number(x)+33}Z`} fill="#fff" stroke={ink} strokeWidth={2}/>
       <path d={`M${Number(x)+29} 107H${Number(x)+179}L${Number(x)+169} 184H${Number(x)+39}Z`} fill={cream}/>
       <T x={Number(x)+102} y={138} size={25}>{t}</T>
       <T x={Number(x)+102} y={217} size={12}>Aroma · Tekstur · Suka?</T>
      </g>)}
      <T x={310} y={39} size={15}>Kode sampel sebelum identitas dibuka</T>
      <T x={310} y={249} size={12} color={muted}>Urutan, suhu dan proses tetap perlu dicatat.</T>
    </>}
    {lessonId==='hbv2-m08-l03'&&<>
      <Rect x={33} y={67} w={260} h={110}><T x={163} y={96} size={18}>Percobaan A</T><T x={163} y={125}>Grind X</T><T x={163} y={150}>Filter P</T></Rect>
      <Rect x={325} y={67} w={260} h={110}><T x={455} y={96} size={18}>Percobaan B</T><T x={455} y={125}>Grind Y</T><T x={455} y={150}>Filter Q</T></Rect>
      <path d="M186 197H433" stroke={bark} strokeWidth={2} strokeDasharray="5 4"/><T x={310} y={217} size={13}>Dua variabel berubah → sebab belum terisolasi.</T>
      <T x={310} y={249} size={12} color={muted}>Uji C dapat menahan salah satu kondisi agar pembanding lebih jelas.</T>
    </>}
    {lessonId==='hbv2-m09-l02'&&<>
      <Rect x={23} y={67} w={172} h={112}><T x={109} y={101} size={16}>Kopi terasa enak</T><T x={109} y={129} size={12}>Observasi rasa</T><T x={109} y={154} size={11}>Bukan validasi aman</T></Rect>
      <A x1={199} y1={121} x2={238} y2={121}/>
      <Rect x={245} y={67} w={168} h={112}><T x={329} y={103} size={16}>Cek log simpan</T><T x={329} y={130} size={12}>Waktu, suhu, alat</T></Rect>
      <A x1={418} y1={121} x2={448} y2={121}/>
      <Rect x={454} y={67} w={144} h={112}><T x={526} y={104} size={16}>Tidak jelas?</T><T x={526} y={132} size={15} color="#a33e34">HOLD</T></Rect>
      <T x={310} y={226} size={12}>Tidak ada shelf-life universal berdasarkan warna atau bau.</T>
    </>}
    {lessonId==='hbv2-m10-l02'&&<>
      {[[26,'V0','Referensi'],[172,'V1','Uji dugaan'],[318,'Hasil','Bisa beda'],[464,'V2','Revisi']].map(([x,t,s])=><Rect key={String(t)} x={Number(x)} y={92} w={126} h={96}><T x={Number(x)+63} y={128} size={17}>{t}</T><T x={Number(x)+63} y={157} size={12}>{s}</T></Rect>)}
      <A x1={153} y1={140} x2={170} y2={140}/><A x1={299} y1={140} x2={316} y2={140}/><A x1={445} y1={140} x2={462} y2={140}/>
      <T x={310} y={58} size={16}>Prediksi → observasi → revisi</T>
      <T x={310} y={233} size={12} color={muted}>Hasil tak sesuai hipotesis = informasi yang berguna.</T>
    </>}
   </svg>
  </div>
  <p className="mt-2 text-xs text-roast-700 sm:hidden">Geser visual untuk melihat semua label.</p>
  <figcaption className="mt-3 text-xs leading-6 text-roast-700">{d.caption}</figcaption>
 </figure>;
}
