/** Server-side review-bank adapter. Do not import into client components. */
import foundation from './final-exams/foundation.json';
import barista from './final-exams/barista.json';
import homeBrewer from './final-exams/home-brewer.json';
import roaster from './final-exams/roaster.json';
import sensory from './final-exams/sensory.json';
import business from './final-exams/business-roastery.json';
import {FINAL_EXAM_PATHS} from '@/lib/finalExamPaths';

export type ExamItem = {
 id:string;module_ids:string[];objective:string;type:string;prompt:string;
 choices:string[];correct_index:number;explanation:string;case?:boolean
};
export type ExamBank = {path:string;version:string;items:ExamItem[]};
const BANKS:Record<string,ExamBank> = {
 foundation,barista,'home-brewer':homeBrewer,roaster,sensory,'business-roastery':business
};
export type PublicExamItem=Pick<ExamItem,'id'|'module_ids'|'prompt'|'choices'>;
export function getExam(slug:string) {
 const meta=FINAL_EXAM_PATHS.find(p=>p.slug===slug);
 const bank=BANKS[slug];
 if(!meta||!bank||bank.path!==slug||bank.items.length!==meta.count) return null;
 return {meta,bank};
}
export function publicExam(slug:string) {
 const exam=getExam(slug);if(!exam)return null;
 return {
  title:exam.meta.title,
  path:slug,
  version:exam.bank.version,
  questions:exam.bank.items.map(({id,module_ids,prompt,choices}):PublicExamItem=>({id,module_ids,prompt,choices})),
  required_correct:Math.ceil(exam.bank.items.length*0.8)
 };
}
export function gradeExam(slug:string,version:string,answers:Record<string,number>) {
 const exam=getExam(slug);if(!exam||exam.bank.version!==version) return null;
 const items=exam.bank.items;
 const requiredIds=new Set(items.map(x=>x.id));
 const keys=Object.keys(answers);
 if(keys.length!==items.length||keys.some(id=>!requiredIds.has(id)))return null;
 if(items.some(x=>!Number.isInteger(answers[x.id])||answers[x.id]<0||answers[x.id]>=x.choices.length))return null;
 const correct=items.filter(x=>answers[x.id]===x.correct_index).length;
 const threshold=Math.ceil(items.length*0.8);
 return {
  title:exam.meta.title,version,correct,total:items.length,percent:Math.round(100*correct/items.length),
  passed:correct>=threshold,required_correct:threshold,
  feedback:items.map(x=>({id:x.id,selected_index:answers[x.id],correct_index:x.correct_index,explanation:x.explanation,correct:answers[x.id]===x.correct_index}))
 };
}
