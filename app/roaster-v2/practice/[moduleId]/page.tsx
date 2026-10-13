import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ROASTER_V2_MODULES} from '@/lib/data/roasterV2Course';
import {ROASTER_V2_CASES,ROASTER_V2_DIAGNOSTICS} from '@/lib/data/roasterV2Practice';
import {RoasterV2Practice} from '@/components/roaster-v2/RoasterV2Practice';
export function generateStaticParams(){return ROASTER_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function RoasterPracticePage({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_ROASTER_V2_REVIEW!=='enabled')notFound();
 const code=params.moduleId.toUpperCase();
 const m=ROASTER_V2_MODULES.find(m=>m.code===code);
 if(!m)notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link href="/roaster-v2" className="text-sm text-roast-700 underline underline-offset-4">← Semua modul</Link>
  <p className="mt-14 font-mono text-xs uppercase tracking-widest text-cherry-700">Latihan · Modul {code.slice(1)}</p>
  <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-5xl">{m.title}</h1>
  <p className="mt-5 text-sm leading-7 text-roast-700">Gunakan alasan, bukan tebakan cepat. Setiap keputusan punya konteks dan dapat berubah ketika data bertambah.</p>
  <div className="mt-10"><RoasterV2Practice cases={ROASTER_V2_CASES.filter(x=>x.module===code)} diagnostics={ROASTER_V2_DIAGNOSTICS.filter(x=>x.module===code)}/></div>
  <Link href="/roaster-v2" className="mt-16 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4">Kembali ke daftar pelajaran →</Link>
 </div></main>;
}
