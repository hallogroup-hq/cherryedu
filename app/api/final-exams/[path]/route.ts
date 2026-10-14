import {NextRequest,NextResponse} from 'next/server';
import {FINAL_EXAM_ENABLED} from '@/lib/finalExamPaths';
import {gradeExam,publicExam} from '@/lib/server/finalExamCatalog';

export const dynamic='force-dynamic';
const send=(payload:unknown,status=200)=>NextResponse.json(payload,{status,headers:{'Cache-Control':'no-store, private','X-Content-Type-Options':'nosniff'}});
export async function GET(_req:NextRequest,{params}:{params:{path:string}}){
 if(!FINAL_EXAM_ENABLED())return send({message:'Tidak ditemukan'},404);
 const data=publicExam(params.path);
 return data?send(data):send({message:'Ujian tidak ditemukan'},404);
}
export async function POST(req:NextRequest,{params}:{params:{path:string}}){
 if(!FINAL_EXAM_ENABLED())return send({message:'Tidak ditemukan'},404);
 const len=Number(req.headers.get('content-length')||0);
 if(len>16000)return send({message:'Data ujian terlalu besar'},413);
 let data:unknown;
 try{data=await req.json()}catch{return send({message:'Jawaban tidak dapat dibaca'},400)}
 if(!data||typeof data!=='object'||Array.isArray(data))return send({message:'Jawaban tidak valid'},400);
 const body=data as Record<string,unknown>;
 if(typeof body.version!=='string'||!body.answers||typeof body.answers!=='object'||Array.isArray(body.answers)||Object.keys(body.answers).length>25)return send({message:'Lengkapi jawaban dahulu'},400);
 const result=gradeExam(params.path,body.version,body.answers as Record<string,number>);
 return result?send(result):send({message:'Data ujian berubah atau jawaban belum lengkap. Muat ulang ujian.'},400);
}
