'use client';
import React,{useState} from 'react';

const field='mt-2 block w-full rounded-md border border-paper-300 bg-white p-3 text-sm leading-6 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const action='rounded-md border border-roast-900 bg-roast-950 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const fmt=(n:number)=>Number.isFinite(n)?n.toLocaleString('id-ID',{maximumFractionDigits:2}):'–';
const good=(n:number,max=2000)=>Number.isFinite(n)&&n>0&&n<=max;

function ChoiceLab({moduleCode}:{moduleCode:string}){
 const [goal,setGoal]=useState(''),[note,setNote]=useState(''),[show,setShow]=useState(false);
 const choices:Record<string,{title:string;caption:string;options:{value:string;label:string;message:string}[]}>={
  M01:{title:'Tentukan tujuan sebelum resep',caption:'Pilih pengalaman yang kamu cari. Tidak ada selera yang otomatis salah.',
   options:[{value:'ringan',label:'Ringan dan bersih',message:'Pertimbangkan metode/filter, komposisi dan cara evaluasi body. Jangan otomatis memakai rasio tertentu.'},{value:'pekat',label:'Lebih pekat di lidah',message:'Bedakan konsentrasi dari jumlah kafein, lalu pilih satu perubahan terukur.'},{value:'aromatik',label:'Aroma paling terasa',message:'Perhatikan kopi, suhu dan kondisi pencicip sebelum mengubah banyak variabel sekaligus.'}]},
 };
 const d=choices[moduleCode];if(!d)return null;
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">{d.title}</h3><p className="text-sm leading-7 text-roast-800">{d.caption}</p>
  <fieldset className="space-y-2"><legend className="text-xs font-semibold uppercase tracking-wide text-roast-700">Pilih pendekatan</legend>
   {d.options.map(o=><label key={o.value} className={'flex cursor-pointer items-center gap-3 rounded-md border p-3 text-sm text-roast-900 '+(goal===o.value?'border-roast-900 bg-paper-100':'border-paper-300')}>
    <input type="radio" name={'choice-'+moduleCode} checked={goal===o.value} onChange={()=>{setGoal(o.value);setShow(false);}}/>{o.label}</label>)}
  </fieldset>
  <label className="text-sm font-semibold text-roast-950">Apa yang ingin kamu buktikan?<textarea aria-label="Tujuan eksperimen" value={note} maxLength={600} rows={3} className={field} onChange={e=>{setNote(e.target.value);setShow(false);}}/></label>
  <button type="button" className={action} disabled={!goal||note.trim().length<15} onClick={()=>setShow(true)}>Bandingkan pertimbanganku</button>
  {show&&<p role="status" className="border-l-2 border-roast-900 bg-paper-100 p-4 text-sm leading-7 text-roast-900">{d.options.find(x=>x.value===goal)?.message} Tuliskan satu hasil yang akan membuatmu mengubah pilihan.</p>}
 </div>;
}
function LabelReadingLab(){
 type LabelType='fakta'|'deskripsi'|'belum';
 const entries:{id:string;text:string;correct:LabelType;why:string}[]=[
  {id:'origin',text:'Asal tercantum: Aceh Gayo',correct:'fakta',why:'Kamu bisa membaca informasi asal pada kemasan. Ini fakta tentang apa yang tertulis, belum verifikasi independen atas klaim produsen.'},
  {id:'notes',text:'Flavor notes: cokelat dan herbal',correct:'deskripsi',why:'Ini deskripsi kesan sensori penilai, bukan daftar bahan atau janji semua pencicip akan merasakan hal sama.'},
  {id:'roast',text:'Tanggal sangrai tercantum: 8 Oktober',correct:'fakta',why:'Kamu tahu tanggal yang ditulis pada label, tetapi belum tahu bagaimana kopi disimpan atau berapa baik kondisinya sekarang.'},
  {id:'taste',text:'Kopi ini pasti lebih manis daripada semua kopi washed',correct:'belum',why:'Rasa dan preferensi belum diamati. Proses atau flavor notes saja tidak cukup untuk memastikan perbandingan tersebut.'}
 ];
 const options:{value:LabelType;label:string}[]=[
  {value:'fakta',label:'Informasi tercantum'},
  {value:'deskripsi',label:'Deskripsi sensori'},
  {value:'belum',label:'Belum bisa disimpulkan'}
 ];
 const [answers,setAnswers]=useState<Record<string,LabelType>>({});
 const [checked,setChecked]=useState(false);
 const filled=entries.every(e=>answers[e.id]);
 const correct=entries.filter(e=>answers[e.id]===e.correct).length;
 return <div className="space-y-5">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Baca kemasan, pisahkan bukti dan dugaan</h3>
  <p className="text-sm leading-7 text-roast-800">Bayangkan kamu menemukan empat pernyataan ini saat memilih kopi. Untuk tiap pernyataan, pilih apakah itu informasi yang tertulis, deskripsi rasa, atau sesuatu yang belum bisa dipastikan. Cek jawaban setelah semuanya dipilih.</p>
  <div className="grid gap-3 sm:grid-cols-2">
   {entries.map((entry,i)=><fieldset key={entry.id} className="rounded-lg border border-paper-300 bg-paper-50 p-4">
    <legend className="sr-only">Pernyataan {i+1}: {entry.text}</legend>
    <p className="mb-3 text-sm font-semibold leading-6 text-roast-950">{entry.text}</p>
    <div className="space-y-2">{options.map(option=><label key={option.value} className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-roast-900">
     <input type="radio" className="mt-1" name={'label-reading-'+entry.id} checked={answers[entry.id]===option.value} onChange={()=>{setAnswers(previous=>({...previous,[entry.id]:option.value}));setChecked(false);}}/>
     <span>{option.label}</span>
    </label>)}</div>
    {checked&&<p className="mt-4 border-t border-paper-300 pt-3 text-xs leading-6 text-roast-800">
     <strong>{answers[entry.id]===entry.correct?'Tepat.':'Periksa lagi.'}</strong> {entry.why}
    </p>}
   </fieldset>)}
  </div>
  <button type="button" className={action} disabled={!filled} onClick={()=>setChecked(true)}>Cek pembacaan label</button>
  {checked&&<div role="status" className="rounded-lg border border-paper-300 bg-paper-100 p-4 text-sm leading-7 text-roast-900">
   {correct} dari {entries.length} klasifikasi sesuai. {correct===entries.length?'Sekarang tentukan informasi tambahan apa yang perlu ditanyakan sebelum membeli.':'Baca alasan pada setiap kartu, ubah jawaban yang belum tepat, lalu cek kembali.'}
  </div>}
  <p className="text-xs leading-6 text-roast-700">Aktivitas ini melatih pembacaan label. Klasifikasi yang tepat belum membuktikan seperti apa rasa kopi dalam cangkirmu.</p>
 </div>;
}
function RatioLab(){
 const [dose,setDose]=useState(15),[water,setWater]=useState(225),[beverage,setBeverage]=useState(185),[tds,setTds]=useState(0),[answer,setAnswer]=useState(''),[show,setShow]=useState(false);
 const valid=good(dose,100)&&good(water)&&good(beverage)&&beverage<=water&&Number.isFinite(tds)&&tds>=0&&tds<=30;
 const ratio=water/dose;
 return <div className="space-y-5">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Air masuk, minuman keluar, dan EY</h3>
  <p className="text-sm leading-7 text-roast-800">Gunakan dataset ilustratif. Ubah nilai untuk menghitung rasio input. EY hanya muncul jika kamu memasukkan TDS **yang benar-benar diketahui**; kosongkan 0 jika tidak punya instrumen.</p>
  <div className="grid grid-cols-2 gap-3">
   {[
    ['Kopi kering (g)',dose,setDose],
    ['Air masuk (g)',water,setWater],
    ['Beverage keluar (g)',beverage,setBeverage],
    ['TDS, jika diketahui (%)',tds,setTds]
   ].map(([label,v,setter])=><label key={String(label)} className="text-xs font-semibold text-roast-900">{String(label)}
    <input type="number" step="any" min="0" className={field} value={Number(v)} onChange={e=>{(setter as (n:number)=>void)(Number(e.target.value));setShow(false);}}/>
   </label>)}
  </div>
  {valid?<div className="border-y border-paper-300 py-5">
   <p className="font-mono text-2xl font-bold text-roast-950">Rasio air masuk 1 : {fmt(ratio)}</p>
   <div className="mt-4 space-y-2 text-sm text-roast-800">
    <p>Contoh massa input air: {fmt(water)} g</p>
    <p>Output yang ditimbang: {fmt(beverage)} g</p>
    <p>Selisih massa air: {fmt(water-beverage)} g. <strong>Ini bukan EY.</strong></p>
    <p>{tds>0?'Estimasi EY (model sederhana): '+fmt(beverage*(tds/100)/dose*100)+'%.':'EY tidak dapat dihitung tanpa pengukuran TDS.'}</p>
   </div>
  </div>:<p role="alert" className="text-sm text-rose-800">Periksa massa positif: output contoh tidak boleh melebihi air masuk dalam model sederhana ini.</p>}
  <label className="block text-sm font-semibold text-roast-950">Mengapa ratio dan waktu saja tidak membuktikan rasanya?<textarea className={field} rows={3} value={answer} onChange={e=>{setAnswer(e.target.value);setShow(false);}} maxLength={800}/></label>
  <button type="button" className={action} disabled={!valid||answer.trim().length<20} onClick={()=>setShow(true)}>Periksa penjelasan</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Rasio hanya hubungan massa, sedangkan rasa dipengaruhi komposisi zat terlarut, kopi, metode dan pencicip. EY numerik perlu instrumen dan prosedur sah; model ini bukan prediksi rasa.</p>}
 </div>;
}
function PourLab(){
 const [pulse,setPulse]=useState(3),[bloom,setBloom]=useState(45),[reason,setReason]=useState(''),[show,setShow]=useState(false);
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Rancang dua kondisi pouring</h3>
  <p className="text-sm leading-7 text-roast-800">Data latihan: 15 g kopi dan total air masuk 225 g. Kamu memilih jumlah pulsa dan air awal. Komposisi harus tetap berjumlah 225 g—tetapi tidak ada janji pola ini pasti lebih manis.</p>
  <label className="block text-xs font-semibold text-roast-900">Jumlah tuang setelah pembasahan: {pulse}<input type="range" min="1" max="5" value={pulse} onChange={e=>{setPulse(Number(e.target.value));setShow(false);}} className="mt-3 w-full" /></label>
  <label className="block text-xs font-semibold text-roast-900">Air pembasahan awal: {bloom} g<input type="range" min="20" max="80" step="5" value={bloom} onChange={e=>{setBloom(Number(e.target.value));setShow(false);}} className="mt-3 w-full" /></label>
  <p className="border-y border-paper-300 py-4 text-sm leading-7 text-roast-900">Air awal {bloom} g + {pulse} kali tuang rata-rata {fmt((225-bloom)/pulse)} g = 225 g total. Ini pembagian aritmetika, bukan evaluasi rasa atau flow.</p>
  <label className="block text-sm font-semibold text-roast-900">Variabel apa yang akan dibandingkan dengan resep baseline?<textarea className={field} rows={3} value={reason} onChange={e=>{setReason(e.target.value);setShow(false);}} /></label>
  <button className={action} disabled={reason.trim().length<18} type="button" onClick={()=>setShow(true)}>Cek rancangan</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Catat pola dan waktu tiap tuang, grind, kertas dan suhu terukur bila tersedia. Jika mengubah jumlah pulsa sekaligus air bloom, kamu punya dua variabel yang berubah; evaluasi sebab-akibatnya tidak tunggal.</p>}
 </div>;
}
function MethodLab(){
 const [choice,setChoice]=useState('standard'),[reason,setReason]=useState(''),[show,setShow]=useState(false);
 const options=[{v:'standard',t:'AeroPress standar menurut manual',f:'Metode standar pada wadah stabil sesuai manual adalah pilihan aman untuk mencoba resep.'},{v:'inverted',t:'AeroPress inverted dengan air panas',f:'Pabrikan memperingatkan inverted lebih tidak stabil dan berisiko tumpah/luka bakar. Jangan pilih sebagai demonstrasi praktik.'},{v:'french',t:'French press yang utuh dan stabil',f:'French press dapat menjadi alternatif immersion jika kaca/filter layak dan plunger mengikuti manual.'}];
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Pilih metode dan batas aman</h3><p className="text-sm leading-7 text-roast-800">Kamu ingin proses immersion yang mudah diulang dan tidak menumpahkan air panas. Metode mana yang akan kamu pilih untuk peralatan di rumah?</p>
  <fieldset className="space-y-2"><legend className="text-xs text-roast-700">Pilihan alat</legend>{options.map(o=><label key={o.v} className="flex items-center gap-3 rounded-md border border-paper-300 p-3 text-sm"><input type="radio" checked={choice===o.v} onChange={()=>{setChoice(o.v);setShow(false);}} name="safe-method"/>{o.t}</label>)}</fieldset>
  <label className="block text-sm font-semibold text-roast-950">Apa risiko yang paling penting kamu cek?<textarea className={field} value={reason} rows={3} onChange={e=>{setReason(e.target.value);setShow(false);}}/></label>
  <button className={action} type="button" disabled={reason.trim().length<20} onClick={()=>setShow(true)}>Periksa pertimbangan</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7 text-roast-900">{options.find(o=>o.v===choice)?.f} Produk berbeda memerlukan manual dan aksesori yang kompatibel; pilihan metode tidak menjamin satu rasa tertentu.</p>}
 </div>;
}
function WaterLab(){
 const [input,setInput]=useState('tds'),[reason,setReason]=useState(''),[show,setShow]=useState(false);
 const options=[{v:'tds',l:'Dua air punya TDS 100 ppm',f:'TDS sama tidak membuktikan hardness, alkalinitas atau keamanan sama.'},{v:'alk',l:'Air memiliki alkalinitas berbeda',f:'Kapasitas buffering berbeda dapat memengaruhi persepsi, tetapi tidak menjamin satu rasa tanpa uji.'},{v:'ph',l:'pH sama pada dua sumber air',f:'pH tidak sama dengan total kapasitas buffering dan tidak cukup membuktikan komposisi/keamanan.'}];
 return <div className="space-y-4">
 <h3 className="font-serif text-xl font-semibold text-roast-950">Air: apa yang angka tidak katakan?</h3><p className="text-sm leading-7">Pilih satu kartu data dan jelaskan informasi yang masih perlu diukur.</p>
 <div className="space-y-2">{options.map(o=><label key={o.v} className="flex cursor-pointer gap-3 rounded-md border border-paper-300 p-3 text-sm"><input type="radio" name="water-card" checked={input===o.v} onChange={()=>{setInput(o.v);setShow(false);}}/>{o.l}</label>)}</div>
 <label className="block text-sm font-semibold">Apa yang belum bisa disimpulkan?<textarea className={field} rows={3} value={reason} onChange={e=>{setReason(e.target.value);setShow(false);}}/></label>
 <button type="button" className={action} disabled={reason.trim().length<15} onClick={()=>setShow(true)}>Bandingkan</button>
 {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">{options.find(o=>o.v===input)?.f} Jangan meracik mineral tanpa presisi, pengetahuan dan standar keamanan.</p>}
 </div>;
}
function SensoryLab(){
 const [aroma,setAroma]=useState(''),[taste,setTaste]=useState(''),[like,setLike]=useState(''),[show,setShow]=useState(false);
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Catat apa yang dirasa, bukan sekadar skor</h3>
  <p className="text-sm leading-7 text-roast-800">Kamu boleh menggunakan kopi yang benar-benar dicicipi atau dataset latihan. Jangan menuliskan rasa yang belum diamati sebagai fakta.</p>
  {[[aroma,setAroma,'Aroma yang teramati'],[taste,setTaste,'Rasa dan tekstur yang teramati'],[like,setLike,'Suka/tidak suka dan alasannya']].map(([v,set,label])=><label key={String(label)} className="block text-sm font-semibold">{String(label)}<textarea className={field} rows={2} maxLength={400} value={v as string} onChange={e=>{(set as (s:string)=>void)(e.target.value);setShow(false);}}/></label>)}
  <button type="button" className={action} disabled={[aroma,taste,like].some(x=>x.trim().length<8)} onClick={()=>setShow(true)}>Periksa struktur catatan</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Catatanmu sudah memisahkan observasi dan preferensi. Berikutnya sertakan kode kopi, kondisi seduh dan suhu pencicip. Ini bukan penilaian otomatis benar-salah terhadap seleramu.</p>}
 </div>;
}
function ExperimentLab(){
 const [control,setControl]=useState(''),[change,setChange]=useState(''),[prediction,setPrediction]=useState(''),[show,setShow]=useState(false);
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Bangun uji dengan prediksi yang bisa salah</h3>
  <p className="text-sm leading-7">Kamu ingin memeriksa penyebab V60 melambat. Jika filter dan grinder keduanya berubah, kesimpulannya tercampur. Pilih satu faktor untuk diuji.</p>
  {[[control,setControl,'Apa yang akan dijaga sama?'],[change,setChange,'Satu hal yang sengaja diubah'],[prediction,setPrediction,'Apa prediksimu dan hasil apa yang akan membantahnya?']].map(([v,set,label])=><label key={String(label)} className="block text-sm font-semibold">{String(label)}<textarea value={v as string} rows={2} maxLength={700} onChange={e=>{(set as (v:string)=>void)(e.target.value);setShow(false);}} className={field}/></label>)}
  <button type="button" className={action} disabled={[control,change,prediction].some(x=>x.trim().length<15)} onClick={()=>setShow(true)}>Periksa eksperimen</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Cek apakah faktor yang kamu tulis memang bisa dijaga, dan apakah prediksi ditulis sebelum percobaan. Satu hasil berlawanan dapat berarti hipotesis perlu direvisi, bukan kesempatan mengarang data yang cocok.</p>}
 </div>;
}
function IcedLab(){
 const [hot,setHot]=useState(150),[total,setTotal]=useState(225),[hyp,setHyp]=useState(''),[show,setShow]=useState(false);
 const valid=good(hot,500)&&good(total,1000)&&hot<=total;const ice=total-hot;
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Hitung komposisi iced brew</h3>
  <p className="text-sm leading-7">Dengan kopi 15 g, pisahkan air panas yang melalui bed dari es awal. Massa es awal <strong>bukan</strong> jumlah air yang langsung meleleh.</p>
  <div className="grid grid-cols-2 gap-3">
   <label className="block text-xs font-semibold">Air total awal (g)<input type="number" min="1" max="1000" value={total} className={field} onChange={e=>{setTotal(Number(e.target.value));setShow(false);}}/></label>
   <label className="block text-xs font-semibold">Air panas melalui bed (g)<input type="number" min="1" max="500" value={hot} className={field} onChange={e=>{setHot(Number(e.target.value));setShow(false);}}/></label>
  </div>
  {valid?<div className="border-y border-paper-300 py-4 text-sm leading-7"><p>Air through-bed: <strong>{fmt(hot)} g</strong></p><p>Es awal: <strong>{fmt(ice)} g</strong></p><p>Rasio kopi terhadap air total awal: <strong>1 : {fmt(total/15)}</strong></p><p className="text-xs text-roast-700">Tidak ada prediksi laju pencairan es, EY atau rasa di sini.</p></div>:<p role="alert" className="text-sm text-rose-800">Air panas tidak boleh melebihi total air pada contoh.</p>}
  <label className="block text-sm font-semibold">Apa akibat mengubah pembagian panas/es?<textarea className={field} value={hyp} rows={3} onChange={e=>{setHyp(e.target.value);setShow(false);}}/></label>
  <button type="button" className={action} disabled={!valid||hyp.trim().length<18} onClick={()=>setShow(true)}>Periksa penalaran</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Jumlah air panas melalui bed bisa memengaruhi ekstraksi, sementara es berkontribusi pada suhu dan dilution setelah mencair. Mengubah pembagian dapat mengubah dua aspek sekaligus.</p>}
 </div>;
}
function RecipeLab(){
 const [goal,setGoal]=useState(''),[base,setBase]=useState(''),[variable,setVariable]=useState(''),[measure,setMeasure]=useState(''),[show,setShow]=useState(false);
 const fields:[[string,string,(n:string)=>void],...Array<[string,string,(n:string)=>void]>]=[
  ['Untuk siapa dan rasa apa?',goal,setGoal],
  ['Apa kondisi baseline V0?',base,setBase],
  ['Satu faktor untuk V1 dan prediksinya',variable,setVariable],
  ['Data apa yang akan membantah prediksimu?',measure,setMeasure]
 ];
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Rancangan resep milikmu</h3><p className="text-sm leading-7">Kreativitas dimulai dari tujuan, lalu pengujian yang bisa diulang. Catatan ini hanya aktif pada sesi halaman dan belum dinilai oleh instruktur.</p>
  {fields.map(([label,v,set])=><label key={label} className="block text-sm font-semibold">{label}<textarea rows={2} maxLength={800} value={v} className={field} onChange={e=>{set(e.target.value);setShow(false);}}/></label>)}
  <button type="button" className={action} disabled={fields.some(([,v])=>v.trim().length<15)} onClick={()=>setShow(true)}>Periksa kesiapan proyek</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Rancanganmu punya tujuan, baseline dan uji lanjut. Belum berarti resep sudah dibuat, dicicipi, aman disimpan, atau dapat direproduksi. Tahap berikutnya: percobaan nyata yang aman, log hasil, evaluasi, dan review oleh pemilik materi.</p>}
 </div>;
}
export function HomeBrewerLab({moduleCode}:{moduleCode:string}){
 const body:Record<string,React.ReactNode>={
  M01:<ChoiceLab moduleCode="M01"/>,M02:<LabelReadingLab/>,M03:<RatioLab/>,
  M04:<PourLab/>,M05:<MethodLab/>,M06:<WaterLab/>,M07:<SensoryLab/>,
  M08:<ExperimentLab/>,M09:<IcedLab/>,M10:<RecipeLab/>
 };
 return <section aria-label={'Laboratorium konsep '+moduleCode} className="not-prose my-12 space-y-5 rounded-xl border border-paper-300 bg-white p-5 sm:p-7">
  <p className="font-mono text-xs font-bold uppercase tracking-wider text-cherry-700">Coba sendiri · Lab modul</p>
  {body[moduleCode]}
  <p className="border-t border-paper-300 pt-4 text-xs leading-6 text-roast-700">Data latihan merupakan contoh, bukan pengukuran rasa atau sertifikasi praktik. Ikuti instruksi keselamatan peralatan yang kamu gunakan.</p>
 </section>;
}
