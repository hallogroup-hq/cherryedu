import {SENSORY_V2_M01_02} from './sensory-v2/m01-02';
import {SENSORY_V2_M03_04} from './sensory-v2/m03-04';
import {SENSORY_V2_M05_06} from './sensory-v2/m05-06';
import {SENSORY_V2_M07_08} from './sensory-v2/m07-08';
import {SENSORY_V2_M09_10} from './sensory-v2/m09-10';

/** Independent teaching candidate. It does not alter path-qgrader, its enrollments or grading. */
const SOURCES=[SENSORY_V2_M01_02,SENSORY_V2_M03_04,SENSORY_V2_M05_06,SENSORY_V2_M07_08,SENSORY_V2_M09_10];
export type SensoryModule={code:string;title:string;description:string;count:number};
export type SensoryLesson={id:string;moduleId:string;order:number;title:string;content:string;wordCount:number;minutes:number};
export const SENSORY_V2_MODULES:SensoryModule[]=SOURCES.flatMap(s=>s.modules.map(m=>({...m,count:4})));
export const SENSORY_V2_LESSONS:SensoryLesson[]=SOURCES.flatMap(s=>s.lessons.map(l=>{
 const m=/^m(\d\d)-l(\d\d)$/.exec(l.id);
 if(!m)throw new Error('Sensory V2: bad lesson id '+l.id);
 const words=l.content.trim().split(/\s+/).length;
 return {id:'sv2-'+l.id,moduleId:'M'+m[1],order:Number(m[2]),title:l.title,content:l.content,wordCount:words,minutes:Math.max(8,Math.round(words/60))};
}));
if(SENSORY_V2_MODULES.length!==10||SENSORY_V2_LESSONS.length!==40||new Set(SENSORY_V2_LESSONS.map(l=>l.id)).size!==40)
 throw new Error('Sensory V2 inventory mismatch');
