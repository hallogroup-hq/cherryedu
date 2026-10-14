import {BusinessConceptFigureMore} from '@/components/business-roastery/BusinessConceptFigureMore';
/** Teaching aids appear once per module, not as repeated decoration on every lesson. */
export function BusinessConceptFigure({moduleId}:{moduleId:string}){
 if(moduleId==='B01')return <figure className="my-7 border border-paper-300 bg-paper-100 px-4 py-5 sm:px-6">
  <figcaption className="mb-4 font-serif text-lg font-bold text-roast-950">Satu produk, lima tahapan berbeda</figcaption>
  <ol className="grid gap-2 sm:grid-cols-5">{[
   ['01','Petani','Ceri segar'],['02','Pengolah','Parchment atau green'],['03','Trader/koperasi','Green sesuai kontrak'],['04','Roastery','Roasted saleable'],['05','Pelanggan','Biji siap pakai']
  ].map(([n,name,item])=><li key={n} className="border-l-2 border-cherry-700 bg-white px-3 py-3"><span className="font-mono text-[10px] text-cherry-800">{n}</span><strong className="mt-1 block text-sm text-roast-950">{name}</strong><span className="mt-1 block text-xs text-roast-700">{item}</span></li>)}</ol>
  <p className="mt-3 text-xs leading-6 text-roast-700">Unit kilogram, mutu, biaya, kepemilikan dan risiko berubah di tiap perpindahan. Jangan bandingkan harga per kilogram ceri dengan roasted tanpa konversi dan biaya pengolahan.</p>
 </figure>;
 if(moduleId==='B02')return <figure className="my-7 overflow-x-auto border border-paper-300 bg-paper-100 p-4 sm:p-5">
  <figcaption className="mb-3 font-serif text-lg font-bold">Apa yang berubah saat memiliki mesin?</figcaption>
  <table className="w-full min-w-[440px] border-collapse text-left text-xs"><thead><tr className="border-b border-paper-400"><th className="py-2 pr-3">Model</th><th className="py-2 pr-3">Komitmen tetap</th><th className="py-2">Risiko utama</th></tr></thead><tbody>{[
   ['Asset-light','Rendah relatif; fee mitra','Slot produksi dan kendali batch'],
   ['Roastery kecil','Mesin, fasilitas, operator','Utilisasi dan downtime'],
   ['Roastery berkembang','QA, gudang, tenaga dan kas','Piutang, jadwal, banyak lot']
  ].map(x=><tr key={x[0]} className="border-b border-paper-300 last:border-0"><th className="py-3 pr-3 font-semibold">{x[0]}</th><td className="py-3 pr-3">{x[1]}</td><td className="py-3">{x[2]}</td></tr>)}</tbody></table>
  <p className="mt-3 text-xs text-roast-700">Perbandingan konseptual; keputusan akhir bergantung volume berbayar, quotation, mutu, dan arus kas.</p>
 </figure>;
 if(moduleId==='B08')return <figure className="my-7 border border-paper-300 bg-paper-100 p-5">
  <figcaption className="font-serif text-lg font-bold">Alur menghitung landed cost per kg usable</figcaption>
  <div className="mt-4 border-l-2 border-cherry-700 pl-4"><p className="text-sm">Harga green sesuai invoice</p><p className="my-2 font-mono text-sm">+ Pickup + main freight + handling + biaya masuk lainnya yang relevan</p><p className="border-t border-paper-400 pt-3 font-semibold">÷ Berat green yang diterima dan layak dipakai</p></div>
  <p className="mt-3 text-xs leading-6 text-roast-700">Lacak lokasi pickup dan delivery serta arah tarif. Berat tagihan bisa dipengaruhi minimum charge; biaya pengiriman ke konsumen tidak dimasukkan ke freight inbound.</p>
 </figure>;
 if(moduleId==='B13')return <figure className="my-7 border border-paper-300 bg-paper-100 p-5">
  <figcaption className="font-serif text-lg font-bold">Berat yang dipakai saat menghitung HPP</figcaption>
  <div className="mt-4 grid grid-cols-3 gap-2 text-center">{[
   ['100 kg','Green masuk mesin'],['85 kg','Roasted sesudah sangrai'],['82 kg','Roasted lolos QC']
  ].map(([v,l])=><div key={l} className="border border-paper-300 bg-white px-2 py-4"><strong className="block font-serif text-xl">{v}</strong><span className="mt-2 block text-xs leading-5 text-roast-700">{l}</span></div>)}</div>
  <p className="mt-3 text-xs leading-6 text-roast-700">Angka ilustrasi, bukan standar loss. Bila 3 kg digunakan untuk sampel/QC atau ditahan, HPP per kg yang bisa dijual memakai 82 kg, bukan 85 kg.</p>
 </figure>;
 if(moduleId==='B15')return <figure className="my-7 border border-paper-300 bg-paper-100 p-5">
  <figcaption className="font-serif text-lg font-bold">BEP harus lebih kecil dari kapasitas yang mampu dijual</figcaption>
  <div className="mt-4 flex flex-wrap items-center gap-3"><span className="bg-white px-3 py-3 font-mono text-sm">Rp12 juta biaya tetap</span><span className="font-mono text-sm">÷</span><span className="bg-white px-3 py-3 font-mono text-sm">Rp40.000 contribution/kg</span><span className="font-mono text-sm">=</span><strong className="text-xl">300 kg</strong></div>
  <p className="mt-4 text-xs leading-6 text-roast-700">Jika hanya 250 kg saleable/bulan yang dapat diproduksi dan terjual, titik impas 300 kg tidak tercapai. Perbaiki harga, kontribusi, kapasitas atau biaya tetap; jangan menyatakan usaha sudah break-even.</p>
 </figure>;
 if(moduleId==='B16')return <figure className="my-7 border border-paper-300 bg-paper-100 p-5">
  <figcaption className="font-serif text-lg font-bold">Laba dicatat, tetapi uang belum tentu datang</figcaption>
  <ol className="mt-4 grid gap-2 sm:grid-cols-3">{[
   ['Hari 1','DP dan pembelian green','Kas keluar lebih dahulu'],
   ['Hari 14','Roast dan invoice buyer','Piutang muncul'],
   ['Hari 45','Pembayaran buyer diterima','Kas baru bertambah']
  ].map(([date,event,result])=><li key={date} className="border-l-2 border-cherry-700 bg-white px-3 py-3"><span className="font-mono text-xs font-bold text-cherry-800">{date}</span><strong className="mt-2 block text-sm">{event}</strong><p className="mt-1 text-xs text-roast-700">{result}</p></li>)}</ol>
  <p className="mt-3 text-xs leading-6 text-roast-700">Contoh urutan transaksi. Jadwal aktual bergantung syarat supplier dan pelanggan; periksa saldo terendah sepanjang periode, bukan hanya saldo akhir bulan.</p>
 </figure>;
 return <BusinessConceptFigureMore moduleId={moduleId}/>;
}
