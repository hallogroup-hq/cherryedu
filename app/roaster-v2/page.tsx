import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ROASTER_V2_LESSONS,ROASTER_V2_MODULES} from '@/lib/data/roasterV2Course';
export const metadata={title:'Sains dan Seni Penyangraian | CherryEdu',description:'Belajar menguji, membaca, dan merevisi keputusan roasting dari bukti.'};
export default function RoasterPath(){
 if(process.env.CHERRYEDU_ROASTER_V2_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-5xl px-5 pt-16">
  <Link className="text-sm text-roast-700 underline underline-offset-4" href="/paths">← Kembali ke Kelas Kopi</Link>
  <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Roaster Specialization</p>
  <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight text-roast-950 sm:text-6xl">Sains &amp; Seni Penyangraian Kopi</h1>
  <p className="mt-7 max-w-2xl text-lg leading-8 text-roast-800">Dari tujuan rasa dan karakter green bean, pelajari cara membaca mesin, menguji hipotesis, melakukan quality control, dan mengambil keputusan saat keadaan berubah.</p>
  <p className="mt-8 border-t border-paper-300 py-6 text-sm text-roast-700">10 modul · 40 pelajaran · Studi kasus dengan bukti baru · Eksperimen simulasi tanpa perlu memiliki roaster</p>
  {ROASTER_V2_MODULES.map((m,i)=><section aria-labelledby={'module-'+m.code} key={m.code} className="grid gap-4 border-t border-paper-300 py-9 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12">
   <div><p className="font-mono text-xs text-roast-600">{String(i+1).padStart(2,'0')} / 10</p>
    <h2 id={'module-'+m.code} className="mt-2 font-serif text-2xl font-bold text-roast-950">{m.title}</h2>
    <p className="mt-3 text-sm leading-7 text-roast-700">{m.description}</p>
    <Link className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4" href={'/roaster-v2/practice/'+m.code.toLowerCase()}>Latihan keputusan modul →</Link>
   </div>
   <ol className="space-y-1">{ROASTER_V2_LESSONS.filter(x=>x.moduleId===m.code).map(l=><li key={l.id}>
    <Link className="flex justify-between gap-5 rounded-md px-3 py-3 text-sm text-roast-900 hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" href={'/roaster-v2/'+l.id}>
      <span><span className="mr-3 font-mono text-xs text-roast-600">{String(l.order).padStart(2,'0')}</span>{l.title}</span>
      <span className="shrink-0 text-xs text-roast-600">{l.minutes} menit</span>
    </Link></li>)}</ol>
  </section>)}
  <p className="mt-10 text-sm leading-7 text-roast-700">Pembelajaran ini melatih penalaran berbasis bukti. Keterampilan menjalankan mesin panas membutuhkan pelatihan langsung dan supervisi sesuai prosedur.</p>
 </div></main>;
}
