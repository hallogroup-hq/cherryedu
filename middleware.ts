import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

// Only activated on the dedicated curator preview branch. Legacy content remains
// in the repository and production; review visitors see only its successor.
const replacements: Record<string,string> = {
 'kopi-dari-hulu-ke-hilir':'/paths/memahami-kopi-dari-hulu-ke-hilir',
 'foundation-kopi':'/paths/memahami-kopi-dari-hulu-ke-hilir',
 'barista-specialization':'/barista-v2',
 'home-brewer-specialization':'/home-brewer-v2',
 'roaster-path':'/roaster-v2',
 'q-grader-path':'/sensory-v2',
 // Curated catalog entry slugs (not duplicate learning paths).
 'barista-v2':'/barista-v2',
 'home-brewer-v2':'/home-brewer-v2',
 'roaster-v2':'/roaster-v2',
 'sensory-v2':'/sensory-v2',
 'business-roastery-v1':'/business-roastery-v1',
};
export function middleware(request: NextRequest) {
 if(process.env.NEXT_PUBLIC_CHERRYEDU_CURRICULUM_PREVIEW!=='enabled')return NextResponse.next();
 const parts=request.nextUrl.pathname.split('/').filter(Boolean);
 if(parts[0]!=='paths'||parts.length<2)return NextResponse.next();
 const target=replacements[parts[1]];
 if(!target)return NextResponse.next();
 const url=new URL(target,request.url);
 return NextResponse.redirect(url,307);
}
export const config={matcher:['/paths/:path*']};
