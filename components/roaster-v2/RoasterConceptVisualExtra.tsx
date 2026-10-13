import type {ReactNode} from 'react';

type Extra='M01'|'M02'|'M06'|'M07'|'M08'|'M10';

const captions:Record<Extra,{title:string;intro:string;note:string}>={
 M01:{title:'Dari kebutuhan menuju bukti',intro:'Resep adalah hipotesis sementara. Tujuan rasa dibuktikan melalui uji dan revisi.',note:'Tidak ada angka charge, durasi atau DTR yang dapat menggantikan tujuan produk.'},
 M02:{title:'Moisture ≠ water activity',intro:'Dua cara mengukur keadaan air memberi informasi yang berbeda dan tidak cukup untuk memastikan keamanan sendirian.',note:'Diagram konseptual: moisture adalah proporsi massa air; aw berhubungan dengan aktivitas/tekanan uap relatif pada kesetimbangan, bukan persen air bebas.'},
 M06:{title:'Apa yang membuat A/B layak dibandingkan?',intro:'Perbandingan tidak bisa mengisolasi penyebab jika beberapa variabel berubah sekaligus.',note:'Uji sungguhan memerlukan SOP mesin, pengulangan, kontrol cupping dan catatan faktor yang tidak dapat disamakan.'},
 M07:{title:'Satu kopi, empat pertanyaan nilai',intro:'Atribut fisik, deskripsi rasa, preferensi dan informasi asal bukan jenis data yang sama.',note:'Mengacu pada empat lensa SCA Coffee Value Assessment (CVA). Ini ilustrasi pembelajaran, bukan sertifikasi atau formulir penilaian resmi.'},
 M08:{title:'Gejala bukan penyebab',intro:'Mulai dari apa yang diamati, buat beberapa kemungkinan, lalu kumpulkan bukti pemisah.',note:'Bila tanda ketidakamanan mesin muncul, jalur keselamatan mendahului percobaan kualitas.'},
 M10:{title:'Biaya per kilogram roasted',intro:'Kehilangan massa mengubah biaya green yang melekat pada setiap kilogram produk akhir.',note:'Harga dan massa hanya simulasi. Biaya total masih perlu memasukkan energi, tenaga, QC, kemasan, kerugian dan pajak.'}
};
function Figure({children,code,description}:{children:ReactNode;code:Extra;description:string}){
 const label='extra-'+code.toLowerCase();
 return <div className="mt-5 overflow-x-auto rounded-md border border-paper-300 bg-paper-50 p-2 sm:p-5">
  <svg viewBox="0 0 660 260" role="img" aria-labelledby={label} className="h-auto w-full min-w-[430px]">
   <title id={label}>{description}</title>{children}
  </svg>
 </div>;
}
export function RoasterConceptVisualExtra({moduleCode}:{moduleCode:string}){
 if(!['M01','M02','M06','M07','M08','M10'].includes(moduleCode))return null;
 const code=moduleCode as Extra,d=captions[code];
 return <figure className="mt-10 border-y border-paper-300 py-7">
  <figcaption><p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Peta konsep</p>
   <h2 className="mt-2 font-serif text-2xl font-semibold text-roast-950">{d.title}</h2>
   <p className="mt-2 max-w-2xl text-sm leading-7 text-roast-700">{d.intro}</p>
  </figcaption>
  {code==='M01'&&<Figure code={code} description="Alur tujuan produk menuju rancangan percobaan, bukti cupping dan revisi berdasarkan hasil">
   {([[25,65,'Tujuan','produk'],[250,65,'Hipotesis','profil'],[475,65,'Bukti','sensori + fisik']] as const).map(([x,y,a,b],i)=><g key={i}>
    <rect x={x} y={y} width="160" height="110" rx="7" fill={i===0?'#e8dccb':i===1?'#e1e9e4':'#ede2d5'} stroke="#89705a" strokeWidth="2"/>
    <text x={x+80} y={y+43} textAnchor="middle" fontSize="20" fontWeight="bold" fill="#4e3c30">{a}</text>
    <text x={x+80} y={y+70} textAnchor="middle" fontSize="16" fill="#614d3e">{b}</text></g>)}
   <g stroke="#8e5c45" strokeWidth="3" fill="none"><path d="M185 120H243l-12-9m12 9l-12 9M410 120h58l-12-9m12 9l-12 9"/>
    <path d="M553 185V218H105V185" strokeDasharray="6 5"/><path d="M93 197l12-12 12 12"/></g>
   <text x="330" y="245" textAnchor="middle" fontSize="14" fill="#735c4c">Hasil baru → perbaiki tujuan dan rencana</text>
  </Figure>}
  {code==='M02'&&<Figure code={code} description="Satu lot kopi memiliki dua konsep penilaian air: jumlah massa air atau moisture content dan aktivitas air atau water activity">
   <rect x="234" y="20" width="193" height="62" rx="7" fill="#e7dbcb" stroke="#7b6552" strokeWidth="2"/>
   <text x="330" y="48" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#574234">Sampel green</text><text x="330" y="68" textAnchor="middle" fontSize="13" fill="#574234">coffee</text>
   <g stroke="#756a5d" strokeWidth="2.5" fill="none"><path d="M285 84L161 118V144m213-60l124 34v26"/></g>
   <rect x="35" y="145" width="250" height="81" rx="7" fill="#e3e9e3" stroke="#648171" strokeWidth="2"/>
   <rect x="376" y="145" width="250" height="81" rx="7" fill="#ece5d8" stroke="#a17f57" strokeWidth="2"/>
   <text x="160" y="174" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#365c4b">Moisture content</text>
   <text x="160" y="197" textAnchor="middle" fontSize="14" fill="#365c4b">Proporsi massa air (%)</text>
   <text x="501" y="174" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#77583b">Water activity</text>
   <text x="501" y="197" textAnchor="middle" fontSize="13" fill="#77583b">Keadaan air (aw, 0–1)</text>
  </Figure>}
  {code==='M06'&&<Figure code={code} description="Desain perbandingan baseline A dan percobaan B: lot, massa, preheat dan evaluasi tetap, hanya satu variabel proses yang diuji">
   <rect x="31" y="20" width="276" height="185" rx="7" fill="#efe6da" stroke="#a18c79"/>
   <rect x="352" y="20" width="276" height="185" rx="7" fill="#e5ede6" stroke="#7a9582"/>
   <text x="169" y="54" textAnchor="middle" fontSize="19" fontWeight="bold" fill="#584839">Baseline A</text>
   <text x="491" y="54" textAnchor="middle" fontSize="19" fontWeight="bold" fill="#3b6050">Percobaan B</text>
   {['Lot X · 2 kg','Preheat tercatat','Grind + cupping sama'].map((a,i)=><g key={a}>
    <text x="169" y={90+i*32} textAnchor="middle" fontSize="15" fill="#665447">{a}</text>
    <text x="491" y={90+i*32} textAnchor="middle" fontSize="15" fill="#466858">{a}</text>
   </g>)}
   <path d="M307 115h43" stroke="#b45e3e" strokeWidth="3" strokeDasharray="5 4"/>
   <text x="331" y="235" textAnchor="middle" fontSize="15" fill="#8e5037">Satu setting terencana berbeda; periksa hasil sensori</text>
  </Figure>}
  {code==='M07'&&<Figure code={code} description="Empat lensa penilaian kopi menurut kerangka CVA: physical, descriptive, affective dan extrinsic">
   {([
    [30,20,'Fisik','Ukuran, warna, defect'],
    [343,20,'Deskriptif','Aroma, flavor, tekstur'],
    [30,142,'Afektif','Kesukaan, kualitas bagi pasar'],
    [343,142,'Ekstrinsik','Asal, informasi, keterlacakan']
   ] as const).map(([x,y,heading,sub],i)=><g key={i}>
    <rect x={x} y={y} width="286" height="95" rx="7" fill={i===0?'#e8e1d4':i===1?'#e1eae2':i===2?'#ebe0d9':'#e7e5de'} stroke="#93816e"/>
    <text x={x+143} y={y+36} textAnchor="middle" fontSize="19" fontWeight="bold" fill="#4f4238">{heading}</text>
    <text x={x+143} y={y+63} textAnchor="middle" fontSize="14" fill="#564b40">{sub}</text></g>)}
  </Figure>}
  {code==='M08'&&<Figure code={code} description="Pohon keputusan diagnosis: gejala menimbulkan hipotesis dan pengujian, sementara gejala keamanan memicu penghentian operasi">
   <rect x="30" y="20" width="156" height="70" rx="7" fill="#e8ded2" stroke="#9c8775"/>
   <text x="108" y="49" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#514238">Gejala</text>
   <text x="108" y="72" textAnchor="middle" fontSize="13" fill="#514238">Apa teramati?</text>
   <rect x="260" y="20" width="164" height="70" rx="7" fill="#e0e8e4" stroke="#80998e"/>
   <text x="342" y="49" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#3f6156">Hipotesis</text>
   <text x="342" y="72" textAnchor="middle" fontSize="13" fill="#3f6156">Beberapa sebab</text>
   <rect x="498" y="20" width="133" height="70" rx="7" fill="#e7ded2" stroke="#93816e"/>
   <text x="565" y="50" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#584734">Uji</text>
   <text x="565" y="72" textAnchor="middle" fontSize="13" fill="#584734">Bukti pemisah</text>
   <path d="M187 55h65l-9-9m9 9l-9 9M424 55h66l-9-9m9 9l-9 9" stroke="#776759" strokeWidth="3" fill="none"/>
   <rect x="130" y="154" width="394" height="65" rx="7" fill="#f1d9d5" stroke="#b36858" strokeWidth="2"/>
   <text x="327" y="180" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#8a392e">Tanda bahaya pada mesin?</text>
   <text x="327" y="203" textAnchor="middle" fontSize="14" fill="#8a392e">Stop-work + eskalasi sesuai SOP</text>
   <path d="M108 90V188H130" stroke="#b36858" strokeWidth="3" fill="none" strokeDasharray="6 5"/>
  </Figure>}
  {code==='M10'&&<Figure code={code} description="Biaya bahan roasted coffee ditentukan oleh biaya green input dibagi yield roasted, lalu ditambah berbagai biaya operasional">
   <rect x="26" y="45" width="190" height="110" rx="7" fill="#e6e3d3" stroke="#878269"/>
   <rect x="240" y="45" width="180" height="110" rx="7" fill="#e4e9e2" stroke="#829582"/>
   <rect x="443" y="45" width="192" height="110" rx="7" fill="#ebdfd4" stroke="#a17f69"/>
   <text x="121" y="78" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#594c3a">Green 10 kg</text>
   <text x="121" y="105" textAnchor="middle" fontSize="16" fill="#594c3a">Rp1.000.000</text>
   <text x="330" y="78" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#42614d">Roasted 8,5 kg</text>
   <text x="330" y="105" textAnchor="middle" fontSize="16" fill="#42614d">Yield 85%</text>
   <text x="540" y="78" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#674939">Rp117.647</text>
   <text x="540" y="105" textAnchor="middle" fontSize="14" fill="#674939">Green/kg roasted</text>
   <path d="M216 99h24m180 0h23" stroke="#796958" strokeWidth="3"/>
   <text x="330" y="199" textAnchor="middle" fontSize="18" fill="#604f40">+ Energi · Tenaga · Kemasan · QC · Reject · Pajak</text>
   <text x="330" y="225" textAnchor="middle" fontSize="15" fill="#795d48">Bukan otomatis harga jual atau margin</text>
  </Figure>}
  <p className="mt-3 text-xs leading-6 text-roast-600">{d.note}</p>
 </figure>;
}
