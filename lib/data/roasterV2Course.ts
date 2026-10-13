import {ROASTER_V2_M01_02} from './roaster-v2/m01-02';
import {ROASTER_V2_M03_04} from './roaster-v2/m03-04';
import {ROASTER_V2_M05_06} from './roaster-v2/m05-06';
import {ROASTER_V2_M07_08} from './roaster-v2/m07-08';
import {ROASTER_V2_M09_10} from './roaster-v2/m09-10';

/**
 * Independent authoring course. Existing published path-roaster, enrollments,
 * purchases, progress, quizzes, certificates and analytics remain untouched.
 */
const SOURCES=[ROASTER_V2_M01_02,ROASTER_V2_M03_04,ROASTER_V2_M05_06,ROASTER_V2_M07_08,ROASTER_V2_M09_10];
export type RoasterModule={code:string;title:string;description:string;count:number};
export type RoasterLesson={id:string;moduleId:string;order:number;title:string;content:string;wordCount:number;minutes:number};
export const ROASTER_V2_MODULES:RoasterModule[]=SOURCES.flatMap(s=>s.modules.map(m=>({...m,count:4})));
export const ROASTER_V2_LESSONS:RoasterLesson[]=SOURCES.flatMap(s=>s.lessons.map(l=>{
 const match=/^m(\d\d)-l(\d\d)$/.exec(l.id);
 if(!match)throw new Error('Roaster V2: invalid lesson ID '+l.id);
 const words=l.content.trim().split(/\s+/).length;
 return {id:'rv2-'+l.id,moduleId:'M'+match[1],order:Number(match[2]),title:l.title,content:l.content,
   wordCount:words,minutes:Math.max(8,Math.round(words/70))};
}));
if(ROASTER_V2_MODULES.length!==10||ROASTER_V2_LESSONS.length!==40||new Set(ROASTER_V2_LESSONS.map(x=>x.id)).size!==40){
 throw new Error('Roaster V2 lesson inventory inconsistent');
}
