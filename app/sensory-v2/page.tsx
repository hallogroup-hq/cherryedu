import Link from 'next/link';
import {notFound} from 'next/navigation';
import {SENSORY_V2_LESSONS,SENSORY_V2_MODULES} from '@/lib/data/sensoryV2Course';

export const metadata={
 title:'Q Grader & Sensory Specialist | CherryEdu',
 description:'Belajar menilai mutu kopi dengan kerangka CVA, sensori, cupping, eksperimen dan kalibrasi.'
};
export default function SensoryV2Home(){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24">
  <div className="mx-auto max-w-5xl px-5 pt-16">
   <Link className="text-sm text-roast-700 underline underline-offset-4" href="/paths">← Kembali ke jalur pembelajaran</Link>
   <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Q Grader & Sensory Specialist</p>
   <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight text-roast-950 sm:text-6xl">Memahami Kualitas Kopi dari Empat Sudut</h1>
   <p className="mt-7 max-w-2xl text-lg leading-8 text-roast-800">Belajar melihat apa yang ada dalam cangkir, membedakan karakter dari kesan mutu, menguji asumsi, lalu membuat keputusan kopi yang bisa dipertanggungjawabkan.</p>
   <p className="mt-8 border-t border-paper-300 py-6 text-sm text-roast-700">10 modul · 40 pelajaran · Latihan keputusan dua tahap · Model interaktif · Kerangka Coffee Value Assessment</p>
   <section aria-labelledby="learning-tools" className="my-7 grid gap-3 border-y border-paper-300 py-7 sm:grid-cols-2">
    <div className="rounded border border-paper-300 bg-paper-100 p-5">
     <p className="font-mono text-xs font-semibold text-cherry-700">Latihan sensori yang dapat dilakukan</p>
     <h2 id="learning-tools" className="mt-2 font-serif text-xl font-bold text-roast-950">Belajar lewat delapan praktik</h2>
     <p className="mt-3 text-sm leading-7 text-roast-700">Dari mengenali kanal rasa hingga inspeksi biji dan roasting problems. Setiap latihan menjelaskan peralatan, urutan, catatan dan batas kesimpulan.</p>
     <Link className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4" href="/sensory-v2/practical">Buka panduan praktik →</Link>
    </div>
    <div className="rounded border border-paper-300 bg-paper-100 p-5">
     <p className="font-mono text-xs font-semibold text-cherry-700">Latihan laporan CVA</p>
     <h2 className="mt-2 font-serif text-xl font-bold text-roast-950">Isi empat lensa untuk satu kopi</h2>
     <p className="mt-3 text-sm leading-7 text-roast-700">Bukan formulir resmi: latihan bertahap untuk memisahkan temuan physical, descriptive, affective, extrinsic dan keputusan.</p>
     <Link className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4" href="/sensory-v2/notebook">Buka lembar kerja →</Link>
    </div>
   </section>
   {SENSORY_V2_MODULES.map((m,i)=><section key={m.code} aria-labelledby={'sv2-'+m.code} className="grid gap-4 border-t border-paper-300 py-9 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12">
    <div>
     <p className="font-mono text-xs text-roast-600">{String(i+1).padStart(2,'0')} / 10</p>
     <h2 id={'sv2-'+m.code} className="mt-2 font-serif text-2xl font-bold text-roast-950">{m.title}</h2>
     <p className="mt-3 text-sm leading-7 text-roast-700">{m.description}</p>
     <Link className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4" href={'/sensory-v2/practice/'+m.code.toLowerCase()}>Latihan dan kasus modul →</Link>
    </div>
    <ol className="space-y-1">{SENSORY_V2_LESSONS.filter(x=>x.moduleId===m.code).map(l=><li key={l.id}><Link className="flex justify-between gap-4 rounded-md px-3 py-3 text-sm text-roast-900 hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" href={'/sensory-v2/'+l.id}>
      <span><span className="mr-3 font-mono text-xs text-roast-600">{String(l.order).padStart(2,'0')}</span>{l.title}</span>
      <span className="shrink-0 text-xs text-roast-600">{l.minutes} menit</span>
    </Link></li>)}</ol>
   </section>)}
   <p className="mt-10 border-t border-paper-300 pt-7 text-sm leading-7 text-roast-700">Pelajaran ini menumbuhkan cara berpikir evaluator. Latihan sensori profesional membutuhkan cupping fisik, referensi yang sesuai, dan penilaian langsung. Menyelesaikan CherryEdu tidak memberikan lisensi Q Grader dari SCA.</p>
  </div>
 </main>;
}
