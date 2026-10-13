'use client';
import {useState} from 'react';
import {BUSINESS_REFERENCES} from '@/lib/data/businessRoasteryReferences';
const r=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
const n=(s:string)=>{if(s.trim()==='')return null;const v=Number(s);return Number.isFinite(v)&&v>=0?v:null;};
const Field=({title,value,set,help}:{title:string;value:string;set:(v:string)=>void;help?:string})=><label className="block">
 <span className="block text-sm font-semibold text-roast-950">{title}</span>
 {help&&<span className="mt-1 block text-xs leading-5 text-roast-600">{help}</span>}
 <input type="number" min="0" step="any" value={value} onChange={e=>set(e.target.value)} className="mt-2 block w-full rounded border border-paper-400 bg-white px-3 py-3 text-sm text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700"/>
</label>;
export function BusinessRoasteryCalculator(){
 const [rate,setRate]=useState('freight-makassar-jabodetabek-sea'),[freightMode,setFreightMode]=useState('public');
 const [kg,setKg]=useState(''),[received,setReceived]=useState(''),[postLoss,setPostLoss]=useState(''),[vol,setVol]=useState(''),[customRate,setCustomRate]=useState(''),[quoteMin,setQuoteMin]=useState('');
 const [flat,setFlat]=useState(''),[greenPrice,setGreenPrice]=useState(''),[extra,setExtra]=useState(''),[reject,setReject]=useState(''),[loss,setLoss]=useState('15');
 const [process,setProcess]=useState(''),[pack,setPack]=useState(''),[sell,setSell]=useState(''),[channel,setChannel]=useState(''),[fixed,setFixed]=useState(''),[factoryFixed,setFactoryFixed]=useState(''),[plannedMonthly,setPlannedMonthly]=useState(''),[misc,setMisc]=useState('');
 const [customOrigin,setCustomOrigin]=useState(''),[customDestination,setCustomDestination]=useState(''),[quoteProvider,setQuoteProvider]=useState(''),[quoteDate,setQuoteDate]=useState('');
 const references=BUSINESS_REFERENCES.filter(x=>x.category==='freight');
 const source=references.find(x=>x.key===rate)||references[0];
 const quoteKg=n(kg),arrived=n(received),volKg=n(vol),priceKg=n(greenPrice),rej=n(reject),roastLoss=n(loss),postRoastSamples=n(postLoss),inboundExtra=n(extra);
 const vmode=freightMode==='public'?'public':freightMode;
 const ratePerKg=vmode==='public'?source.value??0:vmode==='perkg'?n(customRate):null;
 const minCharge=vmode==='public'?source.minimumKg??0:vmode==='perkg'?n(quoteMin):0;
 const chargedKg=vmode==='flat'?null:quoteKg!==null&&quoteKg>0&&minCharge!==null?Math.max(quoteKg,volKg??0,minCharge):null;
 const freight=vmode==='flat'?n(flat):chargedKg!==null&&ratePerKg!==null?chargedKg*ratePerKg:null;
 const greenUsable=arrived!==null&&arrived>0&&quoteKg!==null&&arrived<=quoteKg&&rej!==null&&rej<100?arrived*(1-rej/100):null;
 const roastedGross=greenUsable!==null&&roastLoss!==null&&roastLoss<100?greenUsable*(1-roastLoss/100):null;
 const roasted=roastedGross!==null&&postRoastSamples!==null&&postRoastSamples<=roastedGross?roastedGross-postRoastSamples:null;
 const landedTotal=quoteKg!==null&&quoteKg>0&&priceKg!==null&&freight!==null&&inboundExtra!==null?quoteKg*priceKg+freight+inboundExtra:null;
 const landedKg=landedTotal!==null&&greenUsable!==null&&greenUsable>0?landedTotal/greenUsable:null;
 const rawPerRoast=landedTotal!==null&&roasted!==null&&roasted>0?landedTotal/roasted:null;
 const variableHpp=rawPerRoast!==null&&n(process)!==null&&n(pack)!==null?rawPerRoast+n(process)!+n(pack)!:null;
 const absorption=n(factoryFixed)!==null&&n(plannedMonthly)!==null&&n(plannedMonthly)!>0?n(factoryFixed)!/n(plannedMonthly)!:null;
 const hpp=variableHpp!==null&&absorption!==null?variableHpp+absorption:null;
 const cm=variableHpp!==null&&n(sell)!==null&&n(channel)!==null?n(sell)!-variableHpp-n(channel)!:null;
 const margin=hpp!==null&&n(sell)!>0?(n(sell)!-hpp)/n(sell)!*100:null;
 const totalFixed=n(fixed)!==null&&n(factoryFixed)!==null?n(fixed)!+n(factoryFixed)!:null;
 const bepkg=cm!==null&&cm>0&&totalFixed!==null?totalFixed/cm:null;
 const customProvenanceComplete=Boolean(customOrigin.trim()&&customDestination.trim()&&quoteProvider.trim()&&quoteDate.trim());
 const maxkg=quoteKg!==null&&quoteKg>0?quoteKg:null;
 return <section aria-label="Kalkulator HPP dan landed cost" className="mt-8">
  <div className="border-b border-paper-300 pb-5">
   <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Kalkulator berbasis bukti</p>
   <h2 className="mt-2 font-serif text-2xl font-bold text-roast-950">Dari invoice green bean sampai margin penjualan</h2>
   <p className="mt-3 text-sm leading-7 text-roast-700">Input yang tidak punya bukti boleh dibiarkan kosong. Hasil tidak dihitung sampai informasi minimum tersedia. Angka roasting loss 15% hanya nilai awal latihan yang dapat diganti dengan pengukuran batch nyata, bukan norma seluruh jenis kopi.</p>
  </div>
  <div className="mt-6 rounded border border-paper-300 bg-paper-100 p-4">
   <label className="block text-sm font-semibold text-roast-950">Sumber ongkos inbound</label>
   <div className="mt-3 flex flex-wrap gap-3 text-sm"><label><input type="radio" checked={vmode==='public'} onChange={()=>setFreightMode('public')} className="accent-cherry-700"/> Referensi publik</label>
    <label><input type="radio" checked={vmode==='perkg'} onChange={()=>setFreightMode('perkg')} className="accent-cherry-700"/> Quotation/kg sendiri</label>
    <label><input type="radio" checked={vmode==='flat'} onChange={()=>setFreightMode('flat')} className="accent-cherry-700"/> Quotation flat/truk</label></div>
   {vmode==='public'?<>
    <label htmlFor="freight-lane" className="mt-4 block text-sm font-semibold text-roast-950">Rute dan moda persis sesuai referensi</label>
    <select id="freight-lane" value={rate} onChange={e=>setRate(e.target.value)} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-900">
     {references.map(x=><option key={x.key} value={x.key}>{x.title}</option>)}
    </select>
    <p className="mt-3 text-sm leading-7 text-roast-800">Tarif tercantum <strong>{r(source.value??0)}/kg</strong>, minimum {source.minimumKg} kg. {source.leadTime}. Diperiksa: {source.verified}. Status: {source.status}. <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Lihat tarif sumber ↗</a></p>
    <p className="mt-1 text-xs leading-6 text-roast-700">Pengecualian: {source.exclusions}. Cek ulang harga dan layanan sebelum order. Angka ini tidak boleh dipakai untuk arah sebaliknya atau menjadi quotation final.</p>
   </>:vmode==='perkg'?<div className="mt-4 grid gap-4 sm:grid-cols-2"><Field title="Tarif quotation per kg (Rp)" value={customRate} set={setCustomRate} help="Isi tarif rute, alamat, tanggal dan layanan yang persis sama."/><Field title="Minimum kg tagihan sesuai quotation" value={quoteMin} set={setQuoteMin} help="Isi 0 bila quotation tidak punya minimum."/></div>:<div className="mt-4"><Field title="Total biaya freight sesuai quotation flat (Rp)" value={flat} set={setFlat} help="Harga kendaraan/kapal yang benar-benar dikutip, bukan harga dibagi kapasitas teoritis."/></div>}
  {vmode!=='public'&&<div className="mt-5 grid gap-3 sm:grid-cols-2">
    <label className="text-sm font-semibold text-roast-950">Kota asal quotation<input value={customOrigin} onChange={e=>setCustomOrigin(e.target.value)} placeholder="Contoh: Takengon" className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm"/></label>
    <label className="text-sm font-semibold text-roast-950">Kota tujuan sampai gudang<input value={customDestination} onChange={e=>setCustomDestination(e.target.value)} placeholder="Contoh: Sukabumi" className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm"/></label>
    <label className="text-sm font-semibold text-roast-950">Penyedia / nomor quotation<input value={quoteProvider} onChange={e=>setQuoteProvider(e.target.value)} placeholder="Nama carrier dan nomor penawaran" className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm"/></label>
    <label className="text-sm font-semibold text-roast-950">Tanggal quotation<input type="date" value={quoteDate} onChange={e=>setQuoteDate(e.target.value)} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm"/></label>
    <p role="status" className="sm:col-span-2 text-xs leading-6 text-roast-700">{customProvenanceComplete?'Identitas quotation tercatat; periksa pengecualian dan masa berlaku.':'Identitas quotation belum lengkap: angka menjadi latihan simulasi, bukan ongkir terverifikasi.'}</p>
   </div>}
  </div>
  <h3 className="mt-8 font-serif text-xl font-semibold text-roast-950">1. Pembelian dan penerimaan green bean</h3>
  <div className="mt-4 grid gap-5 sm:grid-cols-2">
   <Field title="Berat green yang dibeli dan dikirim (kg)" value={kg} set={setKg} help="Berat barang dibeli, belum berat volumetrik tagihan."/>
   <Field title="Green yang benar-benar diterima gudang (kg)" value={received} set={setReceived} help="Isi dari penimbangan penerimaan, bukan otomatis sama dengan yang ditagih."/>
   <Field title="Berat volumetrik tagihan (kg), jika penyedia menerapkannya" value={vol} set={setVol} help="Kosong bila tidak berlaku. Gunakan aturan provider, bukan divisor universal."/>
   <Field title="Harga beli green (Rp/kg)" value={greenPrice} set={setGreenPrice} help="Masukkan harga invoice/quotation lot dengan grade, MOQ dan tanggal."/>
   <Field title="Biaya inbound tambahan total (Rp)" value={extra} set={setExtra} help="Pickup, asuransi, handling, packing logistik, pungutan non-kreditabel bila relevan; jangan gandakan biaya freight yang sudah termasuk."/>
   <Field title="Green ditolak/kehilangan yang terdokumentasi (%)" value={reject} set={setReject} help="Gunakan 0 jika benar-benar tidak ada; belum diperiksa sebaiknya dibiarkan kosong."/>
   <Field title="Roast loss dari green usable (%)" value={loss} set={setLoss} help="15 hanya latihan awal; ganti dari roast log dan output saleable."/>
  </div>
  <h3 className="mt-8 font-serif text-xl font-semibold text-roast-950">2. Produksi dan channel penjualan</h3>
  <div className="mt-4 grid gap-5 sm:grid-cols-2">
   <Field title="Kehilangan QC/packing sesudah roast (kg)" value={postLoss} set={setPostLoss} help="Sampel QC, reject packing, dan roasted yang tidak layak jual; isi 0 bila terukur nihil."/>
   <Field title="Biaya konversi roasting VARIABEL per kg saleable (Rp)" value={process} set={setProcess} help="A: jasa roasting mengikuti kg. B/C: energi/tenaga/bahan produksi variabel; biaya overhead tetap bulanan dicatat terpisah."/>
   <Field title="Kemasan dan packing per kg saleable (Rp)" value={pack} set={setPack} help="Masukkan biaya nyata pouch, valve bila ada, karton dan tenaga packing relevan."/>
   <Field title="Harga jual neto per kg, tidak termasuk pajak penjualan (Rp)" value={sell} set={setSell} help="Setelah diskon. Gunakan basis konsisten."/>
   <Field title="Biaya variabel channel per kg (Rp)" value={channel} set={setChannel} help="Komisi, subsidi ongkir outbound, payment fee, visit per kg, retur ekspektasian; jangan masukkan inbound lagi."/>
   <Field title="Biaya overhead PABRIK tetap per bulan (Rp)" value={factoryFixed} set={setFactoryFixed} help="Misalnya sewa area produksi, gaji produksi tetap; bukan biaya variabel/kg. Masuk HPP serapan dan fixed cost untuk BEP."/>
   <Field title="Output roasted saleable RENCANA per bulan (kg)" value={plannedMonthly} set={setPlannedMonthly} help="Basis pembagian overhead pabrik ke HPP serapan; periksa hasil aktual tiap bulan."/>
   <Field title="Biaya tetap NONPRODUKSI per bulan (Rp)" value={fixed} set={setFixed} help="Misalnya admin dan pemasaran tetap, tidak termasuk overhead pabrik di atas. Untuk BEP ditambahkan bersama fixed pabrik."/>
   <Field title="Catatan asumsi/risiko (opsional, tidak masuk rumus)" value={misc} set={setMisc} help="Nomor quotation, tanggal, batas tanggung jawab dan verifikasi QC."/>
  </div>
  <div className="mt-8 border-t border-paper-300 pt-5">
   <h3 className="font-serif text-xl font-bold text-roast-950">Hasil perhitungan</h3>
   <div className="mt-4 grid grid-cols-2 gap-3">
    {[['Berat ditagih untuk freight',vmode==='flat'?'Tidak berlaku (tarif flat)':chargedKg===null?'Perlu data':chargedKg.toLocaleString('id-ID')+' kg'],['Ongkos freight',freight===null?'Perlu quotation':r(freight)],
      ['Green usable',greenUsable===null?'Perlu inspeksi':greenUsable.toLocaleString('id-ID',{maximumFractionDigits:2})+' kg'],['Hasil roasted saleable',roasted===null?'Perlu data':roasted.toLocaleString('id-ID',{maximumFractionDigits:2})+' kg'],
      ['Landed cost/green usable',landedKg===null?'Belum bisa dihitung':r(landedKg)],['Biaya bahan/kg roasted',rawPerRoast===null?'Belum bisa dihitung':r(rawPerRoast)],
      ['Biaya manufaktur variabel/kg',variableHpp===null?'Belum bisa dihitung':r(variableHpp)],['HPP manufaktur serapan/kg roasted',hpp===null?'Belum bisa dihitung':r(hpp)],['Contribution/kg',cm===null?'Belum bisa dihitung':r(cm)],
      ['Gross margin',margin===null||!Number.isFinite(margin)?'Belum bisa dihitung':margin.toFixed(1)+'%'],['BEP kontribusi (kg/bulan)',bepkg===null?'Perlu margin positif dan biaya tetap':bepkg.toLocaleString('id-ID',{maximumFractionDigits:1})+' kg']]
     .map(([label,val])=><div key={label} className="rounded border border-paper-300 bg-paper-100 p-3">
       <p className="text-xs leading-5 text-roast-600">{label}</p><p className="mt-1 break-words text-sm font-semibold text-roast-950 sm:text-base">{val}</p>
     </div>)}
   </div>
   {arrived!==null&&quoteKg!==null&&arrived>quoteKg&&<p role="alert" className="mt-3 border-l-2 border-red-800 bg-paper-100 p-3 text-sm">Berat diterima melebihi kuantitas dibeli. Rekonsiliasi invoice, barang lebih dan refund sebelum menghitung HPP.</p>}
   {maxkg!==null&&source&&vmode==='public'&&<p className="mt-4 text-sm leading-6 text-roast-700">Rute terpilih adalah arah <strong>{source.scope}</strong>. Biaya freight per kg barang dapat terlihat lebih mahal di bawah berat minimum. Jangan mengganti rute tanpa quotation baru.</p>}
   {cm!==null&&cm<=0&&<p role="alert" className="mt-4 border-l-2 border-red-800 bg-paper-100 p-3 text-sm text-roast-900">Contribution margin nol/negatif. Tidak ada BEP volume positif dengan struktur harga dan biaya sekarang. Periksa harga neto, yield dan biaya channel.</p>}
   <p className="mt-5 text-xs leading-6 text-roast-600">Model edukasi berbasis input. Overhead manufaktur tetap dihitung di HPP serapan dan pembilang BEP, tetapi tidak di contribution/kg untuk mencegah menghitung dua kali. Bila green ditolak dan pemasok memberi refund, rekonsiliasi kredit/refund dahulu. Tidak mencakup otomatis PPN, PPh, kurs, depresiasi, pembiayaan, biaya bunga atau perlakuan akuntansi khusus. PPN yang dapat dikreditkan tidak boleh disamakan dengan biaya final. HPP, contribution dan BEP harus ditinjau dalam model keuangan lengkap dengan data nyata.</p>
  </div>
 </section>;
}
export function BusinessCashflowLab(){
 const [opening,setOpening]=useState(''),[cost,setCost]=useState(''),[freight,setFreight]=useState(''),[operating,setOperating]=useState(''),[sale,setSale]=useState(''),[month,setMonth]=useState('2');
 const incomplete=[opening,cost,freight,operating,sale].some(x=>x.trim()==='');
 const values=!incomplete&&[opening,cost,freight,operating,sale].every(x=>n(x)!==null)?[n(opening)!,n(cost)!,n(freight)!,n(operating)!,n(sale)!]:null;
 const first=values?values[0]-values[1]-values[2]-values[3]+(month==='1'?values[4]:0):null;
 const second=first!==null?first-values![3]+(month==='2'?values![4]:0):null;
 const third=second!==null?second-values![3]+(month==='3'?values![4]:0):null;
 return <section aria-label="Simulasi kas B2B" className="mt-8">
  <h2 className="font-serif text-2xl font-bold text-roast-950">Laba di kertas belum tentu kas tersedia</h2>
  <p className="mt-3 text-sm leading-7 text-roast-700">Satu purchase order dibayar di bulan 1, 2 atau 3, tetapi green bean dan freight dibayar pada awal bulan 1. Simulasi terkontrol ini menunjukkan dampak waktu penagihan; asumsi belum diisi akan menahan hasil.</p>
  <div className="mt-5 grid gap-4 sm:grid-cols-2">
   <Field title="Saldo kas awal (Rp)" value={opening} set={setOpening}/>
   <Field title="Pembayaran green di awal (Rp)" value={cost} set={setCost}/>
   <Field title="Freight inbound + handling dibayar awal (Rp)" value={freight} set={setFreight}/>
   <Field title="Pengeluaran operasional kas per bulan (Rp)" value={operating} set={setOperating}/>
   <Field title="Total uang yang ditagih ke pembeli (Rp)" value={sale} set={setSale}/>
   <label className="block"><span className="text-sm font-semibold text-roast-950">Bulan penerimaan pembayaran</span><select value={month} onChange={e=>setMonth(e.target.value)} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-900"><option value="1">Bulan 1</option><option value="2">Bulan 2</option><option value="3">Bulan 3</option></select></label>
  </div>
  <div className="mt-6 grid grid-cols-3 gap-2">
   {[first,second,third].map((v,i)=><div key={i} className="rounded border border-paper-300 bg-paper-100 p-3"><p className="text-xs text-roast-600">Kas akhir bulan {i+1}</p><p role="status" className={'mt-2 break-words text-sm font-bold '+(v!==null&&v<0?'text-red-800':'text-roast-950')}>{v===null?'Lengkapi input':r(v)}</p></div>)}
  </div>
  {values!==null&&[first,second,third].some(x=>x!==null&&x<0)&&<p role="alert" className="mt-4 border-l-2 border-red-800 bg-paper-100 p-3 text-sm leading-6 text-roast-900">Simulasi menunjukkan defisit kas setidaknya satu bulan. Pertimbangkan DP pelanggan, termin pemasok yang dinegosiasikan, cadangan kas atau ubah volume order—jangan menyebutnya aman hanya karena margin positif.</p>}
  <p className="mt-4 text-xs leading-6 text-roast-600">Penyederhanaan: satu order, satu pembayaran penuh, tidak ada order/pemasukan lain, tidak memperhitungkan utang, pajak, refund atau persediaan akhir. Untuk bisnis riil lanjutkan ke proyeksi kas mingguan 13 minggu.</p>
 </section>;
}
