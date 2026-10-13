import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BARISTA_V2_LESSONS, BARISTA_V2_MODULES } from '@/lib/data/baristaV2.generated';

export default function BaristaV2Overview() {
  if (process.env.CHERRYEDU_BARISTA_V2_REVIEW !== 'enabled') notFound();
  return <div className="min-h-screen bg-paper-50 pb-24">
    <div className="mx-auto max-w-5xl px-4 pt-20 sm:px-6">
      <Link href="/paths" className="text-sm text-roast-700 underline underline-offset-4">Kembali ke Kelas Kopi</Link>
      <p className="mt-12 text-xs uppercase font-semibold tracking-widest text-cherry-700">Barista Specialization</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight text-roast-950 sm:text-6xl">Pahami Kopi. Bereksperimen. Ciptakan Sendiri.</h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-roast-800">
        Pelajari cara berpikir di balik resep, menguji perubahan, menangani permintaan pelanggan, dan
        mengembangkan signature drink yang dapat dibuat ulang oleh tim bar.
      </p>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-roast-700">
        Semua latihan di kelas ini bersifat mandiri dan belum mencatat progres atau menerbitkan sertifikat kompetensi.
        Keterampilan mesin, steaming, keselamatan pangan dan pelayanan langsung memerlukan pembimbingan serta penilaian praktik.
      </p>
    </div>
    <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
      <div className="space-y-0 border-t border-paper-300">
        {BARISTA_V2_MODULES.map(mod=>{
          const lessons=BARISTA_V2_LESSONS.filter(x=>x.moduleId===mod.code);
          return <section key={mod.code} className="grid gap-4 border-b border-paper-300 py-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12" aria-labelledby={'h-'+mod.code}>
            <div className="space-y-2">
              <p className="font-mono text-xs text-roast-600">{mod.code.replace('M','MODUL ')}</p>
              <h2 id={'h-'+mod.code} className="font-serif text-2xl font-bold leading-tight text-roast-950">{mod.title}</h2>
              <p className="text-sm leading-6 text-roast-700">{mod.description}</p>
              <Link href={'/barista-v2/practice/'+mod.code.toLowerCase()} className="inline-block pt-2 text-sm font-semibold text-roast-900 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">Latih keputusan pada 3 kasus →</Link>
            </div>
            <ol className="space-y-2">
              {lessons.map(x=><li key={x.id}>
                <Link className="group flex items-start justify-between gap-3 rounded-md px-3 py-3 text-sm text-roast-900 transition-colors hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" href={'/barista-v2/'+x.id}>
                  <span><span className="mr-3 font-mono text-xs text-roast-500">{String(x.order).padStart(2,'0')}</span>{x.title}</span>
                  <span className="shrink-0 text-xs text-roast-600">{x.minutes} menit</span>
                </Link>
              </li>)}
            </ol>
          </section>;
        })}
      </div>
    </div>
  </div>;
}