import Link from 'next/link';
import {notFound} from 'next/navigation';
import {HOME_BREWER_V2_MODULES} from '@/lib/data/homeBrewerV2.generated';
import {HomeBrewerPractice} from '@/components/home-brewer-v2/HomeBrewerPractice';

export function generateStaticParams(){return HOME_BREWER_V2_MODULES.map(x=>({moduleId:x.code.toLowerCase()}));}
export default function HomeBrewerPracticePage({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 const mod=HOME_BREWER_V2_MODULES.find(x=>x.code.toLowerCase()===params.moduleId);
 if(!mod)notFound();
 return <main className="min-h-screen bg-paper-50 px-5 pb-28 pt-12">
  <div className="mx-auto max-w-3xl">
    <nav><Link href="/home-brewer-v2" className="text-sm text-roast-800 underline underline-offset-4">← Daftar modul</Link></nav>
    <p className="mt-14 font-mono text-xs uppercase tracking-widest text-cherry-700">{mod.code.replace('M','Modul ')}</p>
    <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-4xl">{mod.title}</h1>
    <p className="mb-14 mt-4 max-w-xl text-sm leading-7 text-roast-800">{mod.description}</p>
    <HomeBrewerPractice moduleCode={mod.code}/>
  </div>
 </main>;
}
