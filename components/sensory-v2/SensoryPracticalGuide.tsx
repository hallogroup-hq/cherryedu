'use client';
import {useState} from 'react';
import {SENSORY_V2_PRACTICALS} from '@/lib/data/sensoryV2Practicals';
export function SensoryPracticalGuide(){
 const [checked,setChecked]=useState<Record<string,boolean>>({});
 const count=SENSORY_V2_PRACTICALS.filter(x=>checked[x.code]).length;
 return <section aria-label="Panduan praktik sensori mandiri">
  <div className="mt-6 border-y border-paper-300 py-5">
   <p className="text-sm font-semibold text-roast-950">{count} dari {SENSORY_V2_PRACTICALS.length} panduan telah kamu tandai sebagai dicatat</p>
   <p className="mt-2 text-sm leading-7 text-roast-700">Tanda ini hanya membantumu mengorganisasi latihan dalam sesi halaman, bukan pengakuan kelulusan. Catatan praktik sebaiknya disimpan sendiri. Tidak ada progres yang dikirim ke akun.</p>
  </div>
  <div className="divide-y divide-paper-300">{SENSORY_V2_PRACTICALS.map((p,i)=><article key={p.code} className="py-7">
   <div className="flex flex-wrap items-baseline justify-between gap-3">
    <h2 className="font-serif text-2xl font-semibold text-roast-950">{p.title}</h2>
    <span className="font-mono text-xs text-roast-600">{p.level} · {p.duration}</span>
   </div>
   <p className="mt-3 text-sm leading-7 text-roast-800">{p.intro}</p>
   <details className="mt-4 rounded border border-paper-300 bg-paper-100">
    <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">Baca peralatan, langkah, dan batas latihan</summary>
    <div className="border-t border-paper-300 px-4 pb-5 pt-4">
     <h3 className="text-sm font-semibold text-roast-950">Yang diperlukan</h3>
     <p className="mt-1 text-sm leading-7 text-roast-700">{p.tools}</p>
     <h3 className="mt-5 text-sm font-semibold text-roast-950">Langkah praktik</h3>
     <ol className="mt-2 list-decimal space-y-3 pl-5 text-sm leading-7 text-roast-800">{p.steps.map((s,j)=><li key={j}>{s}</li>)}</ol>
     <h3 className="mt-5 text-sm font-semibold text-roast-950">Apa yang perlu dicatat</h3>
     <p className="mt-1 text-sm leading-7 text-roast-700">{p.report}</p>
     <h3 className="mt-5 text-sm font-semibold text-roast-950">Batas kesimpulan</h3>
     <p className="mt-1 text-sm leading-7 text-roast-700">{p.limit}</p>
    </div>
   </details>
   <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-roast-800">
    <input type="checkbox" checked={Boolean(checked[p.code])} onChange={e=>setChecked(prev=>({...prev,[p.code]:e.target.checked}))} className="mt-1 h-4 w-4 accent-cherry-700" />
    <span>Aku sudah mencatat hasil atau keterbatasan latihan ini</span>
   </label>
  </article>)}</div>
 </section>;
}
