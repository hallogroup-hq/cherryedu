import {redirect,notFound} from 'next/navigation';
export default function Page(){if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();redirect('/business-roastery-v1');}
