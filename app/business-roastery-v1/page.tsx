import {notFound} from 'next/navigation';
import {BusinessRoasteryCourseOverview} from '@/components/business-roastery/BusinessRoasteryCourseOverview';
export const metadata={title:'Business Roastery | CherryEdu'};
export default function Page(){if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();return <BusinessRoasteryCourseOverview/>;}
