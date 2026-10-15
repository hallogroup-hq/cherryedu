/** Public metadata only. No answer keys may be imported by client components. */
export const FINAL_EXAM_PATHS = [
  { slug:'foundation',title:'Memahami Kopi dari Hulu ke Hilir',courseHref:'/paths/memahami-kopi-dari-hulu-ke-hilir',modules:['M01','M02','M03','M04','M05','M06','M07'],count:12 },
  { slug:'barista',title:'Barista Specialization',courseHref:'/barista-v2',modules:Array.from({length:12},(_,i)=>'M'+String(i+1).padStart(2,'0')),count:12 },
  { slug:'home-brewer',title:'Home Brewer Specialization',courseHref:'/home-brewer-v2',modules:Array.from({length:10},(_,i)=>'HB'+String(i+1).padStart(2,'0')),count:12 },
  { slug:'roaster',title:'Roaster Specialization',courseHref:'/roaster-v2',modules:Array.from({length:10},(_,i)=>'M'+String(i+1).padStart(2,'0')),count:12 },
  { slug:'sensory',title:'Q Grader & Sensory Specialist',courseHref:'/sensory-v2',modules:Array.from({length:10},(_,i)=>'M'+String(i+1).padStart(2,'0')),count:12 },
  { slug:'business-roastery',title:'Business Roastery',courseHref:'/business-roastery-v1',modules:Array.from({length:21},(_,i)=>'B'+String(i+1).padStart(2,'0')),count:20 },
  { slug:'green-coffee',title:'Green Coffee & Post-Harvest Processing Specialist',courseHref:'/green-coffee-v2',modules:Array.from({length:8},(_,i)=>'GC'+String(i+1).padStart(2,'0')),count:16 },
  { slug:'coffee-shop',title:'Coffee Business & Shop Management Specialist',courseHref:'/coffee-shop-v2',modules:Array.from({length:8},(_,i)=>'CS'+String(i+1).padStart(2,'0')),count:16 },
  { slug:'q-processor',title:'Q Processor Specialization: Bioproses & Pasca-Panen Spesialti',courseHref:'/q-processor-v2',modules:Array.from({length:8},(_,i)=>'QP'+String(i+1).padStart(2,'0')),count:16 }
] as const;
export const FINAL_EXAM_ENABLED = () => process.env.CHERRYEDU_FINAL_EXAMS_REVIEW === 'enabled';

export const NEXT_SPECIALTY_EXAM_SLUGS=new Set<string>(['green-coffee','coffee-shop','q-processor']);
export const NEXT_SPECIALTY_ENABLED=()=>process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW==='enabled';
export const VISIBLE_FINAL_EXAMS=()=>FINAL_EXAM_PATHS.filter(x=>!NEXT_SPECIALTY_EXAM_SLUGS.has(x.slug)||NEXT_SPECIALTY_ENABLED());
