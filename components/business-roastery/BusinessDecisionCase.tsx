'use client';
import {useState} from 'react';
import {BUSINESS_DECISION_CASES} from '@/lib/data/businessRoasteryReferences';
export function BusinessDecisionCase({moduleId}:{moduleId:string}){
 const item=BUSINESS_DECISION_CASES.find(x=>x.moduleId===moduleId);
 const [first,setFirst]=useState(''),[second,setSecond]=useState(''),[reveal,setReveal]=useState(false),[done,setDone]=useState(false);
 if(!item)return null;
 const lengthOk=(first.trim().split(/\s+/).length>=15);
 const revised=(second.trim().split(/\s+/).length>=15);
 return <section className="my-10 border-y border-paper-300 py-7" aria-label="Kasus perubahan bukti">
  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Kasus keputusan berlapis</p>
  <h2 className="mt-2 font-serif text-2xl font-semibold text-roast-950">Apa keputusanmu sebelum informasi baru?</h2>
  <p className="mt-4 text-sm leading-7 text-roast-800">{item.decision}</p>
  <p className="mt-4 text-sm leading-7 text-roast-800">{item.prompt}</p>
  <label htmlFor={'first-'+moduleId} className="mt-6 block text-sm font-semibold text-roast-950">Tulis keputusan awal dan bukti yang diperlukan</label>
  <textarea id={'first-'+moduleId} rows={4} value={first} onChange={e=>{setFirst(e.target.value);setReveal(false);setDone(false);}} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-950" placeholder="Jelaskan asumsi, batas data, dan alasan..." />
  <button disabled={!lengthOk} onClick={()=>setReveal(true)} type="button" className="mt-3 rounded bg-roast-950 px-4 py-3 text-sm font-semibold text-white disabled:opacity-40">Buka bukti baru</button>
  {reveal&&<div className="mt-6 border-l-2 border-cherry-700 bg-paper-100 px-5 py-4">
   <h3 className="font-semibold text-roast-950">Situasi berubah</h3>
   <p className="mt-2 text-sm leading-7 text-roast-800">{item.newEvidence}</p>
   <p className="mt-3 text-sm leading-7 text-roast-800">{item.revise}</p>
   <label htmlFor={'second-'+moduleId} className="mt-5 block text-sm font-semibold text-roast-950">Revisi keputusanmu setelah bukti baru</label>
   <textarea id={'second-'+moduleId} rows={4} value={second} onChange={e=>{setSecond(e.target.value);setDone(false);}} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-950" placeholder="Apa yang berubah dari keputusan awal dan mengapa?" />
   <button disabled={!revised} onClick={()=>setDone(true)} type="button" className="mt-3 rounded border border-roast-950 px-4 py-3 text-sm font-semibold text-roast-950 disabled:opacity-40">Bandingkan dengan kerangka evaluasi</button>
   {done&&<div role="status" className="mt-5 rounded border border-paper-300 bg-white p-4"><p className="font-semibold text-roast-950">Kerangka penalaran</p><p className="mt-2 text-sm leading-7 text-roast-800">{item.reason}</p><p className="mt-2 text-xs text-roast-600">Ini bukan skor otomatis atau bukti kelayakan bisnis. Evaluasi apakah argumenmu bisa diaudit dengan sumber penawaran dan tanggal yang jelas.</p></div>}
  </div>}
 </section>;
}