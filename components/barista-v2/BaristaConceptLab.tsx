'use client';

import React, {useState} from 'react';

type ModuleCode = 'M01'|'M02'|'M03'|'M04'|'M05'|'M06'|'M07'|'M08'|'M09'|'M10'|'M11'|'M12';
type Choice = {label:string; feedback:string; risk?:boolean};
type Scenario = {title:string; intro:string; observation:string[]; question:string; choices:Choice[]; takeaway:string};

const cases: Partial<Record<ModuleCode,Scenario>> = {
  M01: {
    title:'Urutkan keputusan sebelum membuka bar',
    intro:'Sepuluh menit sebelum buka, area basah dekat soket belum diperiksa. Peralatan dan stok terlihat siap.',
    observation:['Soket di dekat tumpahan','Tiket pertama belum masuk','Susu berlabel dan chiller tercatat'],
    question:'Tindakan pertama apa yang paling bertanggung jawab?',
    choices:[
      {label:'Kalibrasi shot pertama sambil meminta staf lain mengeringkan lantai.',feedback:'Membiarkan penggunaan mesin dekat potensi bahaya listrik tidak bisa dibenarkan oleh kebutuhan kalibrasi.',risk:true},
      {label:'Hentikan penggunaan area terkait, cegah akses berisiko, dan laporkan untuk pemeriksaan sesuai SOP.',feedback:'Keputusan defensibel. Keselamatan didahulukan, kemudian opening dilanjutkan sesuai hasil pemeriksaan.'},
      {label:'Buka layanan terbatas dan evaluasi kembali jika tumpahan membesar.',feedback:'Membiarkan bahaya tanpa verifikasi bukan langkah aman walau pesanan belum banyak.',risk:true}
    ],
    takeaway:'Mengubah urutan opening boleh, tetapi pemeriksaan bahaya kritis tidak boleh dilewati.'
  },
  M04:{
    title:'Tiga shot, beberapa hipotesis',
    intro:'Kopi dan dose sama pada log, tetapi waktu dan alirannya berubah setelah shift berganti. Tidak ada catatan puck.',
    observation:['A: 18 g → 36 g / 29 dtk','B: 18 g → 36 g / 21 dtk','TDS dan hasil cicip: belum diukur'],
    question:'Apa langkah yang paling membantu membedakan penyebab sebelum menyimpulkan?',
    choices:[
      {label:'Periksa catatan puck/grinder, tetapkan kondisi pembanding, dan rancang satu tes aman.',feedback:'Langkah informatif. Beberapa penyebab masih mungkin; satu perubahan terkendali bisa memberi petunjuk.'},
      {label:'Ubah grind dan dose sekaligus sampai waktu kembali ke 29 detik.',feedback:'Perubahan bersamaan mempersulit diagnosis. Waktu 29 detik tidak otomatis berarti rasa lebih baik.',risk:true},
      {label:'Anggap shot B buruk karena lebih cepat, kemudian buang semua hasil tanpa uji.',feedback:'Waktu sendirian tidak memberi informasi rasa yang cukup. Periksa konteks dan risiko terlebih dahulu.',risk:true}
    ],
    takeaway:'Gejala bukan penyebab; catat data yang hilang dan pilih pengujian dengan alasan.'
  },
  M05:{
    title:'Pilih langkah saat ada perubahan susu',
    intro:'Pelanggan menyebut alergi protein susu sapi dan meminta minuman oat. Pitcher dan wand dipakai bergantian.',
    observation:['Susu oat berlabel jelas','Peralatan terpisah: belum diketahui','Risiko silang: belum diverifikasi'],
    question:'Apa keputusan yang tepat sebelum memproses order?',
    choices:[
      {label:'Langsung mengganti ke susu oat karena bahan minumannya tidak berasal dari sapi.',feedback:'Bahan oat tidak menghilangkan risiko kontak silang di alat bersama.',risk:true},
      {label:'Klarifikasi kebutuhan, cek SOP alergen dan kemampuan alat, lalu layani hanya jika prosedur aman bisa dipenuhi.',feedback:'Defensibel. Keamanan ditentukan oleh bahan, alat dan proses yang terverifikasi, bukan nama produk.'},
      {label:'Cukup lap wand dengan kain yang sama karena tampilannya sudah bersih.',feedback:'Tampak bersih tidak membuktikan risiko alergen hilang.',risk:true}
    ],
    takeaway:'Kreativitas dan kualitas foam tidak boleh mengesampingkan keamanan pangan.'
  },
  M06:{
    title:'Bangun minuman dari komponen yang jelas',
    intro:'Dua iced latte memakai espresso sama tetapi berbeda jumlah es dan susu. Kamu hanya tahu bahan yang ditimbang.',
    observation:['Espresso: 36 g','Susu A: 150 g; B: 170 g','Es A: 80 g; B: 100 g'],
    question:'Apa yang boleh disimpulkan dari data tersebut?',
    choices:[
      {label:'B pasti punya rasa lebih lemah karena lebih banyak es dan susu.',feedback:'Data komponen memberi petunjuk komposisi, tetapi pencairan es, suhu dan sensori nyata belum tercatat.',risk:true},
      {label:'Komposisi B berbeda; perlu mengukur perubahan, pencairan dan mencicipi sebelum klaim rasa.',feedback:'Tepat. Kamu membedakan informasi yang ada dari hasil yang belum diobservasi.'},
      {label:'Es tak perlu dicatat sebab tidak pernah memengaruhi minuman.',feedback:'Pencairan dan suhu dapat memengaruhi pengalaman minuman; jumlah es adalah parameter yang relevan.',risk:true}
    ],
    takeaway:'Setiap komponen mempunyai konsekuensi, tetapi resep di kertas bukan pengukuran sensori.'
  },
  M08:{
    title:'Pelanggan meminta kopi lebih strong',
    intro:'Seorang tamu menyebut “saya ingin strong, tapi jangan terlalu pahit.” Belum ada informasi ukuran atau tujuan kafein.',
    observation:['Strong: makna belum jelas','Bitter: preferensi diungkapkan','Pilihan menu: belum dikonfirmasi'],
    question:'Respons mana yang paling membantu?',
    choices:[
      {label:'“Maksudnya rasa kopi lebih dominan atau sedang mencari kadar kafein berbeda? Saya cek pilihan yang ada.”',feedback:'Pertanyaan ini membuka dua makna yang sering tertukar dan tidak menjanjikan hasil yang belum diukur.'},
      {label:'“Berarti wajib double shot; pasti lebih strong tanpa perlu tanya.”',feedback:'Menebak maksud dan hubungan kafein/intensitas secara pasti tidak dapat dipertanggungjawabkan.',risk:true},
      {label:'“Untuk kurang pahit, saya tambahkan gula tanpa konfirmasi.”',feedback:'Gula dapat mengubah persepsi, tetapi tidak otomatis memenuhi tujuan customer atau preferensi manisnya.',risk:true}
    ],
    takeaway:'Kecepatan respons barista berarti bertanya tepat, bukan bereaksi tanpa data.'
  },
  M09:{
    title:'Batasi eksperimen ketika mesin berisiko',
    intro:'Mesin espresso menimbulkan bau kelistrikan tidak biasa dan salah satu panel terlihat basah.',
    observation:['Bau listrik panas tidak normal','Area mesin basah','Operator belum memiliki izin servis'],
    question:'Apa tindakan berikutnya?',
    choices:[
      {label:'Tarik satu shot pengujian untuk memastikan apakah rasa masih baik.',feedback:'Indikator risiko listrik dan air bukan kondisi untuk melanjutkan shot.',risk:true},
      {label:'Buka panel dan kencangkan konektor meskipun tidak punya otorisasi servis.',feedback:'Perbaikan kelistrikan internal bukan pekerjaan barista tanpa otorisasi dan prosedur teknisi.',risk:true},
      {label:'Hentikan penggunaan alat terkait, amankan area sesuai SOP dan hubungi penanggung jawab/teknisi.',feedback:'Tindakan tepat. Laporan gejala tidak memerlukan diagnosis pasti sebelum pengamanan.'}
    ],
    takeaway:'Barista yang baik tahu kapan eksperimen justru harus dihentikan.'
  },
  M12:{
    title:'Capstone: tiga masalah, satu shift',
    intro:'Grinder dan lot baru menghasilkan shot berbeda. Satu customer menyebut alergi susu dan yang lain meminta kopi lebih kuat.',
    observation:['Shot: 18 g → 36 g / 20 dtk; sebelumnya 29 dtk','Risiko silang belum diverifikasi','Permintaan “lebih kuat” masih ambigu'],
    question:'Urutan keputusan yang paling defensibel?',
    choices:[
      {label:'Tahan order alergi sampai prosedur diverifikasi, klarifikasi permintaan strong, lalu diagnosis shot dari data aman.',feedback:'Rasional: bahaya kritis dulu, kemudian pemahaman tujuan dan uji terukur.'},
      {label:'Jalankan seluruh tiket dengan resep lama dan koreksi saat ada komplain.',feedback:'Resep lama tidak mengatasi ketidakpastian alergi maupun perubahan kondisi kopi.',risk:true},
      {label:'Percepat dengan grinder lebih halus dan oat milk pada alat yang sama, tanpa bertanya.',feedback:'Terlalu banyak dugaan dan risiko; perubahan ini tak dapat dibenarkan oleh tekanan antrean.',risk:true}
    ],
    takeaway:'Penilaian akhir melihat bukti, keselamatan, komunikasi dan eksperimen—bukan kepatuhan pada angka tunggal.'
  }
};

const inputClass='w-full rounded-lg border border-paper-300 bg-white px-3 py-2 text-sm leading-6 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const btn='rounded-lg px-4 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const format=(n:number)=>Number.isFinite(n)?n.toLocaleString('id-ID',{maximumFractionDigits:1}):'–';
const finite=(n:number,low:number,high:number)=>Number.isFinite(n)&&n>=low&&n<=high;

function ScenarioLab({scenario}:{scenario:Scenario}){
 const [selected,setSelected]=useState<number|null>(null);
 const [checked,setChecked]=useState(false);
 return <div className="space-y-5">
   <h4 className="font-serif text-xl font-bold text-roast-950">{scenario.title}</h4>
   <p className="text-sm leading-7 text-roast-800">{scenario.intro}</p>
   <div className="border-y border-paper-200 py-4">
     <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-roast-600">Data yang tersedia</p>
     <ul className="space-y-2">{scenario.observation.map((x,i)=><li className="flex items-start gap-3 text-sm text-roast-900" key={x}><span className="font-mono text-xs text-roast-500">{i+1}</span>{x}</li>)}</ul>
   </div>
   <fieldset className="space-y-2">
     <legend className="pb-3 text-sm font-semibold leading-6 text-roast-950">{scenario.question}</legend>
     {scenario.choices.map((choice,i)=><label key={i} className={'flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm leading-6 '+(selected===i?'border-cherry-600 bg-paper-100':'border-paper-300 bg-white')}>
       <input className="mt-1" type="radio" name="barista-v2-scenario" checked={selected===i} onChange={()=>{setSelected(i);setChecked(false);}}/>
       <span>{choice.label}</span>
     </label>)}
   </fieldset>
   <button type="button" disabled={selected===null} className={btn+' bg-roast-950 text-white disabled:opacity-50'} onClick={()=>setChecked(true)}>Periksa alasan pilihanku</button>
   {checked&&selected!==null&&<div role="status" aria-live="polite" className="space-y-2 border-l-2 border-roast-700 bg-paper-100 p-4">
     <h5 className="font-semibold text-roast-950">{scenario.choices[selected].risk?'Perlu dipertimbangkan ulang':'Pilihan yang bisa dipertanggungjawabkan'}</h5>
     <p className="text-sm leading-7 text-roast-900">{scenario.choices[selected].feedback}</p>
     <p className="text-xs leading-6 text-roast-700">{scenario.takeaway}</p>
   </div>}
 </div>;
}

function RatioDiagram({dose,water,output}:{dose:number;water:number;output:number}){
 const scale=Math.max(water,output,1);
 return <figure aria-label="Diagram massa air masuk, kopi, dan minuman keluar" className="space-y-2 border-y border-paper-200 py-4">
  <div className="flex items-center justify-between gap-2 text-xs text-roast-700"><span>Bubuk kopi</span><strong>{format(dose)} g</strong></div>
  <div className="h-3 overflow-hidden rounded-sm bg-paper-200"><div className="h-full bg-roast-600" style={{width:(dose/scale*100)+'%'}}/></div>
  <div className="flex items-center justify-between gap-2 text-xs text-roast-700"><span>Air masuk</span><strong>{format(water)} g</strong></div>
  <div className="h-3 overflow-hidden rounded-sm bg-paper-200"><div className="h-full bg-cherry-600" style={{width:(water/scale*100)+'%'}}/></div>
  <div className="flex items-center justify-between gap-2 text-xs text-roast-700"><span>Minuman keluar (contoh massa)</span><strong>{format(output)} g</strong></div>
  <div className="h-3 overflow-hidden rounded-sm bg-paper-200"><div className="h-full bg-roast-900" style={{width:(output/scale*100)+'%'}}/></div>
  <figcaption className="text-xs leading-5 text-roast-700">Batang menunjukkan perbandingan massa, bukan konsentrasi, extraction yield atau prediksi rasa.</figcaption>
 </figure>;
}

function RatioLab({espresso=false,filter=false}:{espresso?:boolean;filter?:boolean}){
 const [dose,setDose]=useState(espresso?18:15),[water,setWater]=useState(espresso?36:225);
 const [pred,setPred]=useState(''),[revealed,setRevealed]=useState(false);
 const valid=finite(dose,1,100)&&finite(water,1,2000);
 const ratio=water/dose;
 const content=espresso?'Dalam espresso, angka kedua adalah massa minuman yang keluar, bukan air total yang dipompa.':'Pada filter, angka kedua adalah massa air yang dituang, bukan selalu massa minuman yang keluar.';
 return <div className="space-y-4">
   <h4 className="font-serif text-xl font-bold text-roast-950">{espresso?'Baca beverage ratio espresso':'Eksperimen brew ratio filter'}</h4>
   <p className="text-sm leading-7 text-roast-800">{content} Ubah angka untuk memahami hubungan satuan, bukan untuk memprediksi rasa pasti.</p>
   <div className="grid grid-cols-2 gap-4">
     <label className="text-xs font-semibold text-roast-900">Kopi kering (g)<input type="number" min="1" max="100" value={dose} onChange={e=>{setDose(Number(e.target.value));setRevealed(false);}} className={'mt-2 '+inputClass}/></label>
     <label className="text-xs font-semibold text-roast-900">{espresso?'Minuman keluar (g)':'Air masuk (g)'}<input type="number" min="1" max="2000" value={water} onChange={e=>{setWater(Number(e.target.value));setRevealed(false);}} className={'mt-2 '+inputClass}/></label>
   </div>
   {valid?<><p className="font-mono text-3xl font-bold text-roast-950">1 : {format(ratio)}</p>{espresso?<figure aria-label="Diagram perbandingan dose terhadap massa minuman keluar" className="space-y-3 border-y border-paper-200 py-4">
    <div className="flex items-center justify-between gap-2 text-xs text-roast-700"><span>Dose bubuk</span><strong>{format(dose)} g</strong></div>
    <div className="h-3 rounded-sm bg-paper-200"><div className="h-full bg-roast-600" style={{width:Math.min(100,dose/Math.max(water,dose)*100)+'%'}}/></div>
    <div className="flex items-center justify-between gap-2 text-xs text-roast-700"><span>Beverage yield (yang ditimbang)</span><strong>{format(water)} g</strong></div>
    <div className="h-3 rounded-sm bg-paper-200"><div className="h-full bg-cherry-600" style={{width:Math.min(100,water/Math.max(water,dose)*100)+'%'}}/></div>
    <figcaption className="text-xs leading-5 text-roast-700">Tidak ada pengukuran massa air yang dipompa pada visual ini. Bedakan minuman keluar dan air masuk mesin.</figcaption>
  </figure>:<RatioDiagram dose={dose} water={water} output={Math.max(0,water-dose*2.5)}/>} </>:<p role="alert" className="text-sm text-rose-800">Masukkan massa positif yang berada dalam rentang alat latihan.</p>}
   <label className="block text-sm font-semibold text-roast-900">Prediksi: apa yang belum bisa disimpulkan dari angka ini?
     <textarea className={'mt-2 '+inputClass} rows={3} value={pred} maxLength={900} onChange={e=>{setPred(e.target.value);setRevealed(false);}} />
   </label>
   <button type="button" className={btn+' bg-roast-950 text-white disabled:opacity-50'} disabled={!valid||pred.trim().length<20} onClick={()=>setRevealed(true)}>Bandingkan prediksi</button>
   {revealed&&<p role="status" className="border-l-2 border-roast-700 bg-paper-100 p-4 text-sm leading-7 text-roast-900">
    {espresso?'Beverage ratio ini tidak menentukan TDS, extraction yield, atau kesukaan pelanggan. Waktu, karakter kopi, mesin, grind dan hasil cicip tetap perlu diperiksa.':'Brew-water ratio input tidak memberi massa minuman akhir tanpa mengetahui retensi dan proses. Air yang melewati bed juga dapat mengubah ekstraksi; bypass sesudah seduh terutama mengubah konsentrasi.'}
   </p>}
 </div>;
}

function FilterLab(){
 const [bypass,setBypass]=useState(30),[answer,setAnswer]=useState(''),[show,setShow]=useState(false);
 const valid=finite(bypass,0,180);const output=185+bypass;
 return <div className="space-y-4">
  <h4 className="font-serif text-xl font-bold text-roast-950">Brew-through vs bypass</h4>
  <p className="text-sm leading-7 text-roast-800">Dataset fiktif: kopi 15 g, air melalui bed 225 g, minuman yang ditimbang 185 g. Air tambahan berikut dicampur <strong>setelah</strong> seduh selesai. Bagaimana perubahan konsentrasi jika massa zat terlarut dianggap sama?</p>
  <label className="block text-xs font-semibold text-roast-800">Air bypass (0–180 g)<input type="range" min="0" max="180" step="5" value={bypass} onChange={e=>{setBypass(Number(e.target.value));setShow(false);}} className="mt-2 block w-full"/><span className="font-mono">{bypass} g</span></label>
  <RatioDiagram dose={15} water={225+bypass} output={output}/>
  {valid&&<p className="text-sm leading-6 text-roast-900">Massa minuman sesudah bypass: <strong>{format(output)} g</strong>; fraksi konsentrasi relatif terhadap sebelum bypass (model tanpa solut tambahan): <strong>{format(185/output*100)}%</strong>.</p>}
  <label className="block text-sm font-semibold text-roast-900">Mengapa ini berbeda dari menambah air melalui bed?<textarea className={'mt-2 '+inputClass} rows={3} value={answer} maxLength={800} onChange={e=>{setAnswer(e.target.value);setShow(false);}}/></label>
  <button type="button" disabled={answer.trim().length<20} className={btn+' bg-roast-950 text-white disabled:opacity-50'} onClick={()=>setShow(true)}>Periksa penjelasan</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7 text-roast-900">Bypass menambah massa pelarut setelah zat terlarut dipisahkan dari bed; model sederhana mengencerkan konsentrasi. Air tambahan yang dialirkan melalui bed justru bisa mengekstraksi lebih banyak zat. Tidak ada prediksi rasa dari angka ini.</p>}
 </div>;
}

function CostLab(){
 const [coffee,setCoffee]=useState(18),[milk,setMilk]=useState(150),[syrup,setSyrup]=useState(20),[price,setPrice]=useState(32000),[thought,setThought]=useState(''),[revealed,setRevealed]=useState(false);
 const valid=[coffee,milk,syrup,price].every(x=>finite(x,0,1000000))&&price>0;
 const beans=coffee/1000*240000,liquid=milk/1000*24000,s= syrup/1000*75000,total=beans+liquid+s+1200;
 const inp=(label:string,value:number,update:(x:number)=>void)=><label className="text-xs font-semibold text-roast-900">{label}<input type="number" min="0" max="1000000" className={'mt-1 '+inputClass} value={value} onChange={e=>{update(Number(e.target.value));setRevealed(false);}}/></label>;
 return <div className="space-y-4">
   <h4 className="font-serif text-xl font-bold text-roast-950">Eksperimen biaya dan harga</h4>
   <p className="text-sm leading-7 text-roast-800">Data fiktif: kopi Rp240.000/kg, susu Rp24.000/L, sirup Rp75.000/kg, cup Rp1.200. Angka bisa berubah; biaya belum memasukkan upah, sewa, wastage lain, pajak atau listrik.</p>
   <div className="grid grid-cols-2 gap-3">{inp('Bubuk kopi (g)',coffee,setCoffee)}{inp('Susu (mL; harga dihitung per liter)',milk,setMilk)}{inp('Sirup (g)',syrup,setSyrup)}{inp('Harga jual simulasi (Rp)',price,setPrice)}</div>
   {valid?<div className="border-y border-paper-300 py-4">
     <p className="font-mono text-xl font-bold text-roast-950">Biaya bahan + cup: Rp{Math.round(total).toLocaleString('id-ID')}</p>
     <p className="text-sm text-roast-700">Selisih harga minus biaya tercatat: Rp{Math.round(price-total).toLocaleString('id-ID')}. <strong>Bukan laba bersih.</strong></p>
   </div>:<p role="alert" className="text-sm text-rose-800">Periksa angka dan satuan pada input biaya.</p>}
   <label className="block text-sm font-semibold text-roast-900">Jika satu bahan naik harga, eksperimen apa yang harus dilakukan sebelum mengganti resep?<textarea rows={3} value={thought} maxLength={800} onChange={e=>{setThought(e.target.value);setRevealed(false);}} className={'mt-2 '+inputClass}/></label>
   <button disabled={!valid||thought.trim().length<18} onClick={()=>setRevealed(true)} className={btn+' bg-roast-950 text-white disabled:opacity-50'} type="button">Bandingkan keputusan</button>
   {revealed&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7 text-roast-900">Perubahan harga dapat mengubah HPP, tetapi penggantian bahan juga bisa mengubah tekstur, rasa, alergen dan prep time. Cek ingredient label, eksperimen sensory yang benar-benar dilakukan, biaya yang belum dihitung dan otorisasi venue sebelum memutuskan.</p>}
 </div>;
}

function SignatureLab(){
 const [name,setName]=useState(''),[goal,setGoal]=useState(''),[coffee,setCoffee]=useState(''),[hypothesis,setHypothesis]=useState(''),[experiment,setExperiment]=useState(''),[show,setShow]=useState(false);
 const complete=[name,goal,coffee,hypothesis,experiment].every(x=>x.trim().length>10);
 const input=(title:string,value:string,setter:(s:string)=>void)=><label className="block text-sm font-semibold text-roast-900">{title}<textarea rows={2} maxLength={1300} className={'mt-1 '+inputClass} value={value} onChange={e=>{setter(e.target.value);setShow(false);}}/></label>;
 return <div className="space-y-4">
 <h4 className="font-serif text-xl font-bold text-roast-950">Rancang konsep minumanmu sendiri</h4>
 <p className="text-sm leading-7 text-roast-800">Belum ada resep benar dari mesin. Tuliskan alasan kreatifmu, coffee anchor, dan satu eksperimen terukur yang bisa menolak hipotesismu.</p>
 {input('Nama konsep sementara',name,setName)}
 {input('Untuk pelanggan/occasion dan kebutuhan apa?',goal,setGoal)}
 {input('Apa peran kopi dan bahan lain?',coffee,setCoffee)}
 {input('Apa hipotesis rasa atau tekstur yang ingin diuji?',hypothesis,setHypothesis)}
 {input('Percobaan A/B apa yang akan dilakukan dengan aman?',experiment,setExperiment)}
 <button type="button" disabled={!complete} onClick={()=>setShow(true)} className={btn+' bg-roast-950 text-white disabled:opacity-50'}>Cek kesiapan konsep</button>
 {show&&<div role="status" className="space-y-2 bg-paper-100 p-4 text-sm leading-7 text-roast-900">
  <p className="font-semibold">Konsepmu sudah punya pertanyaan R&D, belum menjadi produk teruji.</p>
  <p>Langkah berikut: daftar bahan beserta alergen dan batas penyimpanan, resep bersatuan, tiga variasi purposeful, pengamatan nyata atau simulasi jujur, costing, dan uji operator kedua. Tidak ada klaim rasa yang diperiksa otomatis di sini.</p>
 </div>}
 </div>;
}

export function BaristaConceptLab({moduleCode}:{moduleCode:string}){
 const code=moduleCode as ModuleCode;
 let body:React.ReactNode;
 if(code==='M02')body=<RatioLab/>;
 else if(code==='M03')body=<RatioLab espresso/>;
 else if(code==='M07')body=<FilterLab/>;
 else if(code==='M10')body=<CostLab/>;
 else if(code==='M11')body=<SignatureLab/>;
 else if(cases[code])body=<ScenarioLab scenario={cases[code]!}/>;
 else return null;
 return <section aria-label="Laboratorium konsep barista" className="not-prose my-12 space-y-5 rounded-xl border border-paper-300 bg-white p-4 shadow-sm sm:p-6">
 <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Coba sendiri · Konsep utama modul</p>
 {body}
 <p className="border-t border-paper-200 pt-4 text-xs leading-6 text-roast-700">Aktivitas ini melatih penalaran dengan contoh dan data yang dijelaskan. Tidak menggantikan praktik di bawah pengawasan atau sertifikasi profesi.</p>
 </section>;
}
