import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {ROASTER_V2_LESSONS,ROASTER_V2_MODULES} from '@/lib/data/roasterV2Course';
import {ROASTER_V2_DEEP_DIVES} from '@/lib/data/roasterV2DeepDives';
import {RoasterV2Lab} from '@/components/roaster-v2/RoasterV2Lab';
import {RoasterConceptVisual} from '@/components/roaster-v2/RoasterConceptVisual';
import {RoasterConceptVisualExtra} from '@/components/roaster-v2/RoasterConceptVisualExtra';

export function generateStaticParams(){return ROASTER_V2_LESSONS.map(l=>({lessonId:l.id}));}
export default function RoasterLessonPage({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_ROASTER_V2_REVIEW!=='enabled')notFound();
 const l=ROASTER_V2_LESSONS.find(l=>l.id===params.lessonId);
 if(!l)notFound();
 const m=ROASTER_V2_MODULES.find(m=>m.code===l.moduleId);
 if(!m)notFound();
 return <CuratedLessonFrame courseTitle="Roaster Specialization" courseHref="/roaster-v2" modules={ROASTER_V2_MODULES} lessons={ROASTER_V2_LESSONS} currentId={l.id} rawMarkdown={l.content}>
  <MarkdownRenderer content={l.content}/>
  {l.order===1&&<RoasterConceptVisual moduleCode={m.code}/>}
  {l.order===1&&<RoasterConceptVisualExtra moduleCode={m.code}/>}
  {ROASTER_V2_DEEP_DIVES[l.id]&&<div className="mt-10 border-t border-paper-300 pt-5"><MarkdownRenderer content={ROASTER_V2_DEEP_DIVES[l.id]}/></div>}
  {l.order===2&&<RoasterV2Lab moduleCode={m.code}/>}
  {l.order===4&&<section className="mt-10 border-y border-paper-300 py-8">
   <h3 className="font-serif text-2xl font-semibold text-roast-950">Siap mengambil keputusan saat kondisinya berubah?</h3>
   <p className="mt-3 text-sm leading-7 text-roast-800">Coba dua kasus baru. Informasi tambahan terlihat setelah kamu menulis respons awal.</p>
   <Link href={'/roaster-v2/practice/'+m.code.toLowerCase()} className="mt-5 inline-block rounded-md border border-roast-900 px-4 py-3 text-sm font-semibold text-roast-900 hover:bg-paper-100">Mulai latihan modul →</Link>
  </section>}
 </CuratedLessonFrame>;
}
