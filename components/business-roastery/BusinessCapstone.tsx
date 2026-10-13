'use client';
import {useState} from 'react';
const questions=[
 ['Pasar dan pesanan','Segmen mana yang sudah melakukan pembayaran atau PO sah?'],
 ['Penawaran sumber green','Siapa pemasok, lot, spesifikasi, grade, MOQ, nomor quotation dan tanggal?'],
 ['Rute inbound','Alamat pickup/tujuan, arah, jasa angkut, chargeable weight, minimum dan semua pengecualian?'],
 ['Yield dan produksi','Berapa kg green usable, loss dan saleable roast menurut pengujian nyata?'],
 ['Legal dan keamanan','Apa kewajiban OSS, BPOM/Dinkes, halal, label, keselamatan dan pajak bagi entitas ini?'],
 ['Struktur biaya','Berapa HPP manufaktur, biaya layanan/channel, gross margin dan contribution margin?'],
 ['Kas dan kredit','Bagaimana penerimaan pelanggan dan pembayaran supplier memengaruhi kas mingguan?'],
 ['Penjualan dan layanan','Kontrak wholesale atau retail, minimum order, SLA, kualitas dan penanganan retur?'],
 ['Risiko dan skala','Apa tiga sumber kegagalan paling mungkin, sinyal awal dan keputusan pemulihannya?'],
 ['Ekspor pengantar','Apakah ada buyer serta kemampuan dokumen/produk/negara tujuan? Jika tidak, apa alasan menunda?']
] as const;
export function BusinessCapstone(){
 const [values,setValues]=useState<Record<number,string>>({});
 const report=questions.map(([title,q],i)=>title+'\nPertanyaan: '+q+'\nJawaban dan sumber: '+(values[i]||'Belum diverifikasi')).join('\n\n');
 const filled=questions.filter((_,i)=>(values[i]||'').trim().length>15).length;
 return <section aria-label="Rencana bisnis yang dapat diaudit" className="mt-8">
  <h2 className="font-serif text-2xl font-bold text-roast-950">Rancang business plan berbasis bukti</h2>
  <p className="mt-2 text-sm leading-7 text-roast-700">Gunakan ini sebagai catatan kerja, bukan business plan yang otomatis dinilai layak. Semua angka harus memiliki bukti atau ditandai asumsi. Isian hanya tersimpan selama halaman ini terbuka.</p>
  <p className="mt-5 text-sm font-semibold text-roast-950">{filled} / {questions.length} bagian diisi cukup terperinci</p>
  <div className="mt-4 divide-y divide-paper-300">{questions.map(([title,q],i)=><section key={i} className="py-5">
   <label htmlFor={'capstone-'+i} className="block text-sm font-semibold text-roast-950">{i+1}. {title}</label>
   <p className="mt-1 text-sm leading-7 text-roast-700">{q}</p>
   <textarea id={'capstone-'+i} value={values[i]||''} onChange={e=>setValues(p=>({...p,[i]:e.target.value}))} rows={3} placeholder="Keputusan, bukti, sumber dan tanggal atau hal yang belum terverifikasi..." className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-950"/>
  </section>)}</div>
  <label htmlFor="business-output" className="mt-6 block text-sm font-semibold text-roast-950">Ringkasan rencana yang bisa disalin</label>
  <textarea id="business-output" readOnly value={'Business Roastery · catatan rencana usaha\n\n'+report} rows={15} className="mt-2 w-full rounded border border-paper-300 bg-paper-100 p-4 font-mono text-xs leading-6 text-roast-950"/>
  <p className="mt-4 text-sm leading-6 text-roast-700">Salin dengan memilih isi kolom. Untuk finalisasi bisnis nyata, verifikasi independen izin, pajak, keselamatan dan semua penawaran komersial sebelum bertransaksi.</p>
 </section>;
}
