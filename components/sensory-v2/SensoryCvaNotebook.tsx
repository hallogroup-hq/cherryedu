'use client';
import {useState} from 'react';

type Field='sample'|'sampling'|'physical'|'descriptive'|'intensity'|'affective'|'market'|'extrinsic'|'proof'|'decision'|'followup';
type Notes=Record<Field,string>;
const EMPTY:Notes={sample:'',sampling:'',physical:'',descriptive:'',intensity:'',affective:'',market:'',extrinsic:'',proof:'',decision:'',followup:''};
const EXAMPLE:Notes={
 sample:'Kopi A · data simulasi untuk latihan',sampling:'Inspeksi sebagian kecil satu karung; belum mewakili lot',
 physical:'Ada sejumlah biji pecah; kategori defect resmi belum ditentukan.',
 descriptive:'Fragrance nutty, aroma fruity ringan, acidity intensity sedang, body ringan; dinilai pada cawan berkode dan prosedur sama.',
 intensity:'Fruity rendah–sedang; acidity sedang (skala naratif latihan, bukan skor resmi).',
 affective:'Kesan mutu baik untuk menu filter berkarakter ringan; perlu verifikasi kelompok lain.',
 market:'Menu filter kedai; tidak mengklaim disukai semua konsumen.',
 extrinsic:'Asal Jawa Barat dilaporkan pemasok; nomor lot ada, invoice belum diverifikasi.',
 proof:'Nama origin = klaim pemasok; informasi lain belum diperiksa.',
 decision:'Minta bukti asal dan sampling ulang; belum menjanjikan pembelian keseluruhan.',
 followup:'Ulangi cupping blind dari beberapa sub-sampel dan periksa dokumen pengiriman.'
};
const lens=[
 {title:'Identitas dan physical',guide:'Bagian ini membahas sampel yang diperiksa. Jangan menyimpulkan seluruh lot dari foto atau satu genggam biji.',keys:[['sample','Kode sampel / identitas kerja','Contoh: Lot A dengan kode acak; jangan menulis harga agar tidak mengganggu blind.'],['sampling','Bagaimana sampel diambil?','Sebut asal sub-sampel dan batas keterwakilan.'],['physical','Kondisi fisik yang benar-benar diperiksa','Tuliskan pengamatan atau nyatakan belum diperiksa; tidak perlu mengarang bobot defect.']]},
 {title:'Descriptive',guide:'Catat yang tercium dan terasa, bukan “enak”, “mahal”, atau jenis molekul yang tidak diukur.',keys:[['descriptive','Karakter fragrance, aroma, flavor, aftertaste dan tekstur','Contoh: fruity sedang saat hangat; aftertaste cocoa.'],['intensity','Intensitas dan kondisi pengamatan','Jelaskan skala latihan dan suhu; jangan menganggap intensitas sama dengan mutu.']]},
 {title:'Affective',guide:'Tuliskan kesan mutu sebagai pendapat dalam konteks yang dinyatakan. Jangan menyamakan preferensi dengan deskripsi.',keys:[['affective','Kesan mutu dan alasan','Contoh: cocok untuk menu filter karena profil ringan dan jernih.'],['market','Untuk siapa atau produk apa?','Contoh: konsumen filter; belum diuji pada minuman susu.']]},
 {title:'Extrinsic',guide:'Informasi di luar cangkir harus punya sumber. “Terdengar menarik” bukan verifikasi.',keys:[['extrinsic','Klaim origin, proses, keterlacakan atau dampak','Sebut detail yang disampaikan dan batas klaim.'],['proof','Status sumber atau bukti','Misalnya invoice tersedia, belum diverifikasi, atau klaim pemasok saja.']]},
 {title:'Keputusan dan revisi',guide:'Keputusan yang baik menunjukkan apa yang belum diketahui dan bukti yang dapat mengubahnya.',keys:[['decision','Rekomendasi sementara dengan batas','Beli bersyarat, hold, uji ulang, atau belum cukup bukti.'],['followup','Langkah verifikasi berikutnya','Tuliskan tindakan dan siapa yang perlu memeriksa.']]}
] as const;
const headings=['PHYSICAL','DESCRIPTIVE','AFFECTIVE','EXTRINSIC','KEPUTUSAN'];
function makeReport(n:Notes){
 return ['CHERRYEDU · CATATAN BELAJAR CVA (BUKAN FORMULIR ATAU SERTIFIKASI SCA)',
  'SAMPEL: '+(n.sample||'Belum diisi'),
  '\nPHYSICAL\nSampling: '+(n.sampling||'Belum diperiksa')+'\nObservasi: '+(n.physical||'Belum diperiksa'),
  '\nDESCRIPTIVE\nAtribut: '+(n.descriptive||'Belum diperiksa')+'\nIntensitas dan kondisi: '+(n.intensity||'Belum diperiksa'),
  '\nAFFECTIVE\nKesan mutu: '+(n.affective||'Belum diperiksa')+'\nKonteks pasar: '+(n.market||'Belum diperiksa'),
  '\nEXTRINSIC\nInformasi: '+(n.extrinsic||'Belum diperiksa')+'\nStatus bukti: '+(n.proof||'Belum diperiksa'),
  '\nKEPUTUSAN\nSementara: '+(n.decision||'Belum dibuat')+'\nLangkah berikutnya: '+(n.followup||'Belum ditentukan'),
  '\nSemua isi latihan harus diverifikasi terhadap sampel asli, protokol dan dokumen pendukung.'].join('\n');
}
export function SensoryCvaNotebook(){
 const [n,setN]=useState<Notes>(EMPTY);
 const [step,setStep]=useState(0);
 const [summary,setSummary]=useState(false);
 const [copied,setCopied]=useState('');
 const current=lens[step];
 const report=makeReport(n);
 const fieldsFilled=Object.values(n).filter(s=>s.trim().length>0).length;
 const edit=(field:Field,value:string)=>{setN(p=>({...p,[field]:value}));setCopied('');};
 return <section aria-label="Latihan empat lensa CVA" className="mt-9">
  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-300 pb-5">
   <div><p className="font-mono text-xs font-bold uppercase tracking-widest text-cherry-700">Lembar kerja interaktif</p>
    <h2 className="mt-2 font-serif text-2xl font-bold text-roast-950">Satu kopi, empat sudut penilaian</h2></div>
   <button type="button" className="rounded border border-paper-400 px-3 py-2 text-xs text-roast-800 hover:border-roast-800" onClick={()=>{setN(EXAMPLE);setStep(0);setSummary(false);setCopied('');}}>Isi contoh kasus</button>
  </div>
  <p className="mt-4 text-sm leading-7 text-roast-700">Gunakan data sampel nyata atau contoh. Catatan hanya hidup selama halaman ini terbuka—tidak disimpan ke akun. Instrumen ini untuk latihan cara berpikir, bukan salinan formulir resmi CVA SCA dan tidak menghasilkan skor, lisensi atau penilaian kompetensi sensorik.</p>
  <div aria-label="Urutan asesmen" className="mt-7 flex flex-wrap gap-2">
   {lens.map((item,i)=><button key={item.title} type="button" aria-current={!summary&&i===step?'step':undefined} onClick={()=>{setStep(i);setSummary(false);}}
    className={'rounded border px-3 py-2 text-xs font-semibold '+(!summary&&step===i?'border-roast-950 bg-roast-950 text-white':'border-paper-300 bg-paper-100 text-roast-800 hover:border-roast-600')}>{i+1}. {item.title}</button>)}
   <button type="button" aria-current={summary?'step':undefined} onClick={()=>setSummary(true)} className={'rounded border px-3 py-2 text-xs font-semibold '+(summary?'border-roast-950 bg-roast-950 text-white':'border-paper-300 bg-paper-100 text-roast-800 hover:border-roast-600')}>Baca laporan</button>
  </div>
  {!summary?<div className="mt-6 border-t border-paper-300 pt-6">
   <p className="font-mono text-xs text-cherry-800">BAGIAN {step+1} / 5 · {headings[step]}</p>
   <h3 className="mt-2 font-serif text-xl font-semibold text-roast-950">{current.title}</h3>
   <p className="mt-2 text-sm leading-7 text-roast-700">{current.guide}</p>
   <div className="mt-5 space-y-5">{current.keys.map(([field,title,hint])=><div key={field}>
    <label htmlFor={'notebook-'+field} className="block text-sm font-semibold text-roast-950">{title}</label>
    <p className="mt-1 text-xs leading-6 text-roast-600">{hint}</p>
    <textarea id={'notebook-'+field} value={n[field]} onChange={e=>edit(field,e.target.value)} rows={3} className="mt-2 w-full rounded border border-paper-400 bg-white px-3 py-3 text-sm text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" placeholder="Tuliskan observasi atau 'belum tersedia' beserta alasannya..." />
   </div>)}</div>
   <div className="mt-6 flex items-center justify-between gap-4 border-t border-paper-300 pt-5">
    <button type="button" disabled={step===0} onClick={()=>setStep(s=>Math.max(0,s-1))} className="rounded border border-roast-900 px-4 py-3 text-sm text-roast-950 disabled:opacity-35">← Bagian sebelumnya</button>
    <button type="button" onClick={()=>{if(step===4)setSummary(true);else setStep(s=>s+1);}} className="rounded bg-roast-950 px-4 py-3 text-sm font-semibold text-white">{step===4?'Lihat laporan':'Lanjut ke bagian berikutnya →'}</button>
   </div>
  </div>:<div className="mt-6 border-t border-paper-300 pt-6">
   <h3 className="font-serif text-xl font-bold text-roast-950">Laporan yang dapat diperiksa ulang</h3>
   <p role="status" className="mt-3 text-sm leading-7 text-roast-800">{fieldsFilled} dari 11 kolom telah terisi. Ini ukuran kelengkapan catatan, bukan nilai benar-salah atau kualitas sensori. Kolom kosong tetap ditampilkan untuk membantu menemukan data yang belum ada.</p>
   <label htmlFor="notebook-report" className="mt-5 block text-sm font-semibold text-roast-950">Tinjau dan salin catatanmu</label>
   <textarea id="notebook-report" readOnly value={report} rows={21} className="mt-2 w-full rounded border border-paper-400 bg-paper-100 p-4 font-mono text-xs leading-6 text-roast-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" />
   <div className="mt-4 flex flex-wrap items-center gap-3">
    <button type="button" onClick={()=>{if(navigator.clipboard?.writeText){navigator.clipboard.writeText(report).then(()=>setCopied('Teks laporan tersalin.')).catch(()=>setCopied('Pilih teks pada kolom laporan untuk menyalin manual.'));}else setCopied('Pilih teks pada kolom laporan untuk menyalin manual.');}} className="rounded bg-roast-950 px-4 py-3 text-sm font-semibold text-white">Salin laporan</button>
    <button type="button" onClick={()=>{setSummary(false);setStep(0);}} className="rounded border border-paper-400 px-4 py-3 text-sm text-roast-800">Periksa dari awal</button>
    {copied&&<p role="status" className="text-sm text-roast-700">{copied}</p>}
   </div>
   <p className="mt-5 text-sm leading-7 text-roast-700">Bandingkan pendekatanmu dengan formulir CVA terbaru pada situs resmi SCA. Jangan mengubah data descriptive agar sesuai preferensi pembeli atau informasi pemasok yang baru ditemukan.</p>
  </div>}
 </section>;
}
