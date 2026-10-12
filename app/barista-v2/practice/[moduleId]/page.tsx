import Link from 'next/link';
import {notFound} from 'next/navigation';
import {BARISTA_V2_MODULES} from '@/lib/data/baristaV2.generated';
import {BaristaTransferCases} from '@/components/barista-v2/BaristaTransferCases';

export function generateStaticParams(){
 return BARISTA_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));
}

export default function BaristaModulePractice({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_BARISTA_V2_REVIEW!=='enabled')notFound();
 const mod=BARISTA_V2_MODULES.find(m=>m.code.toLowerCase()===params.moduleId);
 if(!mod)notFound();
 return <div className="min-h-screen bg-paper-50 px-4 pb-24 pt-12 sm:px-6">
  <div className="mx-auto max-w-3xl">
   <nav aria-label="Kembali ke daftar modul">
    <Link href="/barista-v2" className="text-sm font-semibold text-roast-800 underline underline-offset-4">← Semua modul</Link>
   </nav>
   <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">{mod.code.replace('M','Modul ')}</p>
   <h1 className="mb-4 mt-3 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-4xl">{mod.title}</h1>
   <p className="mb-12 text-sm leading-7 text-roast-800">{mod.description}</p>
   <BaristaTransferCases moduleCode={mod.code}/>
  </div>
 </div>;
}
