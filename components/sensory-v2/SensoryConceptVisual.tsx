type Diagram={title:string;labels:[string,string,string,string];footnote:string;mode:'sequence'|'grid'};
const diagrams:Record<string,Diagram>={
 M01:{title:'Empat lensa Coffee Value Assessment',labels:['Physical','Descriptive','Affective','Extrinsic'],footnote:'Empat jenis bukti, bukan empat skor yang harus dijumlahkan.',mode:'grid'},
 M02:{title:'Jalur pembentukan persepsi flavor',labels:['Ortonasal','Gustasi','Retronasal','Somatosensori'],footnote:'Aroma, rasa dasar, dan tekstur berkontribusi secara berbeda.',mode:'grid'},
 M03:{title:'Dari sampel menuju catatan yang sah',labels:['Sampel lot','Persiapan sama','Kode buta','Catatan individu'],footnote:'Perubahan tanpa kontrol mengurangi keterbandingan.',mode:'sequence'},
 M04:{title:'Deskripsi melewati empat tahap',labels:['Fragrance','Aroma','Flavor','Aftertaste'],footnote:'Setiap tahap berkaitan dengan kondisi dan waktu pengamatan.',mode:'sequence'},
 M05:{title:'Karakter dan penilaian berbeda',labels:['Atribut terasa','Intensitas','Kesan mutu','Konteks pasar'],footnote:'Atribut kuat tidak otomatis lebih disukai.',mode:'sequence'},
 M06:{title:'Pemeriksaan lot bukan satu tes',labels:['Sampling','Defect & ukuran','Moisture / aw','Tindak lanjut QC'],footnote:'Angka dan kondisi fisik perlu metode, sampel, serta batas keputusan.',mode:'sequence'},
 M07:{title:'Dari klaim menjadi informasi terverifikasi',labels:['Klaim pemasok','Dokumen','Verifikasi','Keterangan nilai'],footnote:'Rasa kopi tidak membuktikan asal, sertifikasi, atau dampak.',mode:'sequence'},
 M08:{title:'Tiga cangkir, satu tugas diskriminasi',labels:['A','A','B','Pilih berbeda'],footnote:'Dengan tebakan acak, peluang memilih benar hanya 1/3 per uji.',mode:'sequence'},
 M09:{title:'Mengapa panel bisa berbeda?',labels:['Sampel','Prosedur','Indra evaluator','Keputusan QC'],footnote:'Pemeriksaan variasi mendahului penyatuan angka atau keputusan release.',mode:'sequence'},
 M10:{title:'Jejak satu keputusan pembelian',labels:['Empat lensa','Kriteria pasar','Bukti baru','Keputusan revisi'],footnote:'Laporan yang baik memungkinkan alasan berubah tanpa menghapus catatan lama.',mode:'sequence'}
};
export function SensoryConceptVisual({moduleCode}:{moduleCode:string}){
 const d=diagrams[moduleCode];if(!d)return null;
 return <figure className="my-10 overflow-hidden rounded-md border border-paper-300 bg-paper-100 p-5 sm:p-7">
  <figcaption className="font-serif text-xl font-bold text-roast-950">{d.title}</figcaption>
  <svg role="img" aria-label={d.title+'. '+d.labels.join(', ')+'. '+d.footnote} viewBox="0 0 640 200" className="mt-5 h-auto w-full" xmlns="http://www.w3.org/2000/svg">
   {d.labels.map((label,i)=>{
     const x=d.mode==='grid'?15+(i%2)*320:5+i*160;
     const y=d.mode==='grid'?8+Math.floor(i/2)*94:55;
     const width=d.mode==='grid'?290:148;
     return <g key={label}>
      <rect x={x} y={y} width={width} height="66" rx="6" fill={i%2===0?'#E8E0D2':'#F8F4EB'} stroke="#B9A994"/>
      <text x={x+width/2} y={y+38} fontSize={label.length>15?'14':'17'} fontFamily="Arial,sans-serif" fontWeight="600" fill="#3B2B22" textAnchor="middle">{label}</text>
     </g>;
   })}
   {d.mode==='sequence'&&[0,1,2].map(i=><g key={i} stroke="#8E6148" fill="none" strokeWidth="2"><path d={`M ${154+i*160} 88 h 11`}/><path d={`M ${160+i*160} 83 l 6 5 -6 5`}/></g>)}
  </svg>
  <p className="mt-3 text-sm leading-6 text-roast-700">{d.footnote}</p>
 </figure>;
}
