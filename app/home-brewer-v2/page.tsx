import Link from 'next/link';
import {notFound} from 'next/navigation';
import {HOME_BREWER_V2_MODULES,HOME_BREWER_V2_LESSONS} from '@/lib/data/homeBrewerV2.generated';

export default function HomeBrewerV2Index(){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
   <Link href="/paths" className="text-sm text-roast-700 underline underline-offset-4">Kembali ke Kelas Kopi</Link>
   <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Home Brewer Specialization</p>
   <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Bukan Menghafal Resep. Belajar Menyeduh Sesuai Tujuan.</h1>
   <p className="mt-6 max-w-2xl text-base leading-8 text-roast-800">Pahami apa yang berubah ketika biji, grinder, air atau alat berganti. Rancang eksperimen kecil, pelajari rasa yang kamu sukai, dan kembangkan resep sendiri.</p>
   <p className="mt-4 max-w-2xl text-sm leading-7 text-roast-700">50 pelajaran · 10 modul · latihan interaktif dan kasus adaptif. Kelas mandiri ini tidak memberikan sertifikasi praktik. Air panas dan peralatan digunakan sesuai petunjuk produsen.</p>
  </div>
  <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
  {HOME_BREWER_V2_MODULES.map(m=><section key={m.code} className="grid gap-6 border-t border-paper-300 py-9 md:grid-cols-[300px_minmax(0,1fr)]" aria-labelledby={'home-'+m.code}>
   <div>
    <p className="font-mono text-xs text-roast-600">{m.code.replace('HB','MODUL ')}</p>
    <h2 id={'home-'+m.code} className="mt-2 font-serif text-2xl font-semibold leading-tight">{m.title}</h2>
    <p className="mt-3 text-sm leading-6 text-roast-700">{m.description}</p>
    <Link href={'/home-brewer-v2/practice/'+m.code.toLowerCase()} className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">Latih keputusan pada 3 kasus →</Link>
   </div>
   <ol className="space-y-1">
   {HOME_BREWER_V2_LESSONS.filter(x=>x.moduleId===m.code).map(l=><li key={l.id}>
    <Link href={'/home-brewer-v2/'+l.id} className="flex items-start justify-between gap-4 rounded-md px-3 py-3 text-sm hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
     <span><span className="mr-3 font-mono text-xs text-roast-500">{String(l.order).padStart(2,'0')}</span>{l.title}</span>
     <span className="shrink-0 text-xs text-roast-600">{l.minutes} menit</span>
    </Link>
   </li>)}
   </ol>
  </section>)}
  </div>
 </div>;
}