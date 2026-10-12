import Link from 'next/link';
import {notFound} from 'next/navigation';
import {HOME_BREWER_V2_MODULES,HOME_BREWER_V2_LESSONS} from '@/lib/data/homeBrewerV2.generated';

export const metadata={title:'Home Brewer Specialization | CherryEdu',description:'Pahami kopi dan ciptakan resep seduh rumahanmu sendiri.'};

export default function HomeBrewerV2Overview(){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 return <div className="min-h-screen bg-paper-50 pb-28">
  <div className="mx-auto max-w-5xl px-5 pb-14 pt-16 sm:pt-24">
   <Link href="/paths" className="text-sm text-roast-700 underline underline-offset-4">← Kembali ke Kelas Kopi</Link>
   <p className="mt-16 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Home Brewer Specialization</p>
   <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight text-roast-950 sm:text-6xl">
    Bukan Menghafal Resep. Memahami Seduhanmu.
   </h1>
   <p className="mt-7 max-w-2xl text-lg leading-8 text-roast-800">
    Cari tahu mengapa secangkir kopi bisa berubah. Mulai dari alat rumahan yang kamu punya,
    pelajari ekstraksi, coba eksperimen sederhana, lalu buat resep sendiri yang bisa kamu jelaskan.
   </p>
   <div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 border-t border-paper-300 pt-6 text-sm text-roast-700">
    <span>10 modul</span><span>40 pelajaran</span><span>Eksperimen tanpa alat mahal</span>
   </div>
  </div>
  <div className="mx-auto max-w-5xl px-5">
   {HOME_BREWER_V2_MODULES.map((m,i)=>(
    <section key={m.code} aria-labelledby={'module-'+m.code} className="grid gap-5 border-t border-paper-300 py-9 md:grid-cols-[minmax(0,320px)_1fr] md:gap-12">
     <div>
      <p className="font-mono text-xs text-roast-600">{String(i+1).padStart(2,'0')} / 10</p>
      <h2 id={'module-'+m.code} className="mt-2 font-serif text-2xl font-bold leading-tight text-roast-950">{m.title}</h2>
      <p className="mt-3 text-sm leading-7 text-roast-700">{m.description}</p>
      <Link href={'/home-brewer-v2/practice/'+m.code.toLowerCase()}
        className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
        Latihan kasus modul →
      </Link>
     </div>
     <ol className="space-y-1">
      {HOME_BREWER_V2_LESSONS.filter(x=>x.moduleId===m.code).map(l=><li key={l.id}>
        <Link href={'/home-brewer-v2/'+l.id}
         className="flex justify-between gap-3 rounded-md px-3 py-3 text-sm text-roast-900 transition-colors hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
          <span><span className="mr-3 font-mono text-xs text-roast-600">{String(l.order).padStart(2,'0')}</span>{l.title}</span>
          <span className="shrink-0 text-xs text-roast-600">{l.minutes} menit</span>
        </Link>
       </li>)}
     </ol>
    </section>
   ))}
  </div>
  <p className="mx-auto max-w-5xl px-5 pt-10 text-sm leading-7 text-roast-700">
   Materi dan latihan ini membantumu mengembangkan pemahaman serta resep pribadi.
   Latihan digital tidak menyatakan kemampuan praktik langsung atau sertifikasi eksternal.
  </p>
 </div>;
}
