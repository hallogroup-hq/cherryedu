import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {HOME_BREWER_V2_MODULES,HOME_BREWER_V2_LESSONS} from '@/lib/data/homeBrewerV2.generated';
import {HomeBrewerConceptLab} from '@/components/home-brewer-v2/HomeBrewerConceptLab';
import {HomeBrewerMechanismVisual} from '@/components/home-brewer-v2/HomeBrewerMechanismVisual';

export function generateStaticParams(){return HOME_BREWER_V2_LESSONS.map(l=>({lessonId:l.id}));}
export default function HomeBrewerV2Lesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 const lesson=HOME_BREWER_V2_LESSONS.find(l=>l.id===params.lessonId);
 if(!lesson)notFound();
 const firstSection=lesson.markdown.indexOf('\n## ');
 const useDiagram=['hbv2-hb02-l02','hbv2-hb02-l03','hbv2-hb04-l03','hbv2-hb05-l01','hbv2-hb09-l01','hbv2-hb10-l02'].includes(lesson.id)&&firstSection>=0;
 return <CuratedLessonFrame courseTitle="Home Brewer Specialization" courseHref="/home-brewer-v2" modules={HOME_BREWER_V2_MODULES} lessons={HOME_BREWER_V2_LESSONS} currentId={lesson.id} rawMarkdown={lesson.markdown}>
  {useDiagram?<><MarkdownRenderer content={lesson.markdown.slice(0,firstSection)}/><HomeBrewerMechanismVisual lessonId={lesson.id}/><MarkdownRenderer content={lesson.markdown.slice(firstSection+1)}/></>:<MarkdownRenderer content={lesson.markdown}/>}
  {lesson.order===1&&<HomeBrewerConceptLab moduleCode={lesson.moduleId}/>}
  {lesson.order===5&&<section className="my-10 border-t border-paper-300 pt-7">
   <h3 className="font-serif text-2xl font-semibold">Bisa mengatasi situasi yang berbeda?</h3>
   <p className="my-4 text-sm leading-7 text-roast-800">Selesaikan tiga kasus baru dan dua pertanyaan diagnosis. Informasi kasus berubah setelah kamu menjawab, agar latihan menguji pemahaman.</p>
   <Link href={'/home-brewer-v2/practice/'+lesson.moduleId.toLowerCase()} className="inline-block rounded-md bg-roast-950 px-5 py-3 text-sm font-semibold text-white">Mulai latihan modul →</Link>
  </section>}
 </CuratedLessonFrame>;
}
