import Link from 'next/link';
import {notFound} from 'next/navigation';
import {SENSORY_V2_MODULES} from '@/lib/data/sensoryV2Course';
import {SENSORY_V2_CASES,SENSORY_V2_DIAGNOSTICS} from '@/lib/data/sensoryV2Practice';
import {SensoryV2Practice} from '@/components/sensory-v2/SensoryV2Practice';

export function generateStaticParams(){return SENSORY_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function SensoryPracticePage({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 const module=SENSORY_V2_MODULES.find(x=>x.code.toLowerCase()===params.moduleId);
 if(!module)notFound();
 const cases=SENSORY_V2_CASES.filter(x=>x.moduleId===module.code);
 const diagnostics=SENSORY_V2_DIAGNOSTICS.filter(x=>x.moduleId===module.code);
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link href="/sensory-v2" className="text-sm text-roast-700 underline underline-offset-4">← Kembali ke daftar modul</Link>
  <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">{module.code} · Q Grader &amp; Sensory Specialist</p>
  <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-5xl">{module.title}</h1>
  <p className="mt-4 text-sm leading-7 text-roast-700">Dua studi kasus yang mengubah informasi dan dua pemeriksaan pemahaman. Ini latihan penalaran, bukan tes sensori atau penilaian lisensi fisik.</p>
  <div className="mt-10"><SensoryV2Practice cases={cases} diagnostics={diagnostics}/></div>
 </div></main>;
}
