import Link from 'next/link';
import {notFound} from 'next/navigation';
import {BUSINESS_ROASTERY_MODULES,BUSINESS_ROASTERY_LESSONS,BUSINESS_ROASTERY_SCENARIOS} from '@/lib/data/businessRoasteryCourse';
export const metadata={title:'Business Roastery Path | CherryEdu',description:'Bangun bisnis roastery Indonesia dari sourcing hingga operasional, HPP, logistik antarpulau, penjualan, modal kerja dan dasar ekspor.'};
export default function BusinessRoasteryHome(){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-5xl px-5 pt-14">
  <Link href="/paths" className="text-sm text-roast-700 underline underline-offset-4">← Kembali ke jalur pembelajaran</Link>
  <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">Business Roastery · Indonesia</p>
  <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight text-roast-950 sm:text-6xl">Merancang sampai Menjalankan Bisnis Roastery</h1>
  <p className="mt-6 max-w-3xl text-lg leading-8 text-roast-800">Dari peta industri, pemasok dan ongkos bahan baku sampai mesin, produksi, harga jual, pelanggan, kas dan keputusan ekspansi. Semua dibaca dari tiga model bisnis yang berbeda.</p>
  <p className="mt-5 border-b border-paper-300 pb-6 text-sm text-roast-700">{BUSINESS_ROASTERY_MODULES.length} modul · {BUSINESS_ROASTERY_LESSONS.length} pelajaran · 3 skenario bisnis paralel · simulasi biaya berbasis bukti · 21 kasus keputusan</p>
  <section aria-labelledby="scenarios" className="mt-8">
   <h2 id="scenarios" className="font-serif text-2xl font-bold text-roast-950">Tiga jalur membangun roastery</h2>
   <div className="mt-4 grid gap-3 md:grid-cols-3">{BUSINESS_ROASTERY_SCENARIOS.map(s=><article key={s.key} className="border-t-2 border-roast-900 bg-paper-100 p-5">
    <p className="font-mono text-xs text-cherry-800">SKENARIO {s.key}</p>
    <h3 className="mt-2 font-serif text-xl font-bold text-roast-950">{s.name}</h3>
    <p className="mt-2 text-sm leading-7 text-roast-700">{s.specific}</p>
   </article>)}</div>
  </section>
  <section aria-labelledby="tools" className="mt-10 border-y border-paper-300 py-6">
   <h2 id="tools" className="font-serif text-2xl font-bold text-roast-950">Latihan yang bisa kamu kerjakan</h2>
   <div className="mt-5 grid gap-3 sm:grid-cols-3">
    <Link href="/business-roastery-v1/calculator" className="rounded border border-paper-300 bg-paper-100 p-4 hover:border-roast-800"><h3 className="font-semibold text-roast-950">Landed cost, HPP, margin, BEP →</h3><p className="mt-2 text-xs leading-6 text-roast-700">Gunakan tarif publik yang sumbernya terlihat atau masukkan quotation sendiri.</p></Link>
    <Link href="/business-roastery-v1/cashflow" className="rounded border border-paper-300 bg-paper-100 p-4 hover:border-roast-800"><h3 className="font-semibold text-roast-950">Simulasi kas dan piutang →</h3><p className="mt-2 text-xs leading-6 text-roast-700">Periksa apakah pembayaran tempo membuat kas defisit.</p></Link>
    <Link href="/business-roastery-v1/plan" className="rounded border border-paper-300 bg-paper-100 p-4 hover:border-roast-800"><h3 className="font-semibold text-roast-950">Business plan berbasis bukti →</h3><p className="mt-2 text-xs leading-6 text-roast-700">Lembar kerja keputusan, sumber angka, risiko dan validasi.</p></Link>
   </div>
  </section>
  <div className="mt-5">{BUSINESS_ROASTERY_MODULES.map((m,i)=><section key={m.code} aria-labelledby={'br-'+m.code} className="grid gap-4 border-b border-paper-300 py-8 md:grid-cols-[minmax(0,310px)_1fr] md:gap-10">
   <div><p className="font-mono text-xs text-roast-600">{String(i+1).padStart(2,'0')} / {BUSINESS_ROASTERY_MODULES.length}</p>
    <h2 id={'br-'+m.code} className="mt-2 font-serif text-2xl font-bold text-roast-950">{m.title}</h2>
    <p className="mt-3 text-sm leading-7 text-roast-700">{m.description}</p>
    <Link href={'/business-roastery-v1/practice/'+m.code.toLowerCase()} className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4">Kasus pengambilan keputusan →</Link>
   </div>
   <ol className="space-y-1">{BUSINESS_ROASTERY_LESSONS.filter(l=>l.moduleId===m.code).map(l=><li key={l.id}>
     <Link href={'/business-roastery-v1/'+l.id} className="flex items-start justify-between gap-3 rounded px-3 py-3 text-sm text-roast-900 hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
      <span><span className="mr-3 font-mono text-xs text-roast-600">{String(l.order).padStart(2,'0')}</span>{l.title}</span><span className="shrink-0 text-xs text-roast-600">10–15 menit</span>
     </Link>
   </li>)}</ol>
  </section>)}</div>
  <p className="mt-9 text-sm leading-7 text-roast-700">Untuk menjalankan bisnis nyata, verifikasi tarif dengan penyedia jasa, harga dari pemasok, kewajiban legal dan kondisi fasilitas. Sumber dan perhitungan dalam kelas adalah alat memahami keputusan, bukan quotation atau nasihat perpajakan final. Ekspor dibahas sebagai pengantar; jalur ekspor beans tersendiri akan lebih mendalam.</p>
 </div></main>;
}