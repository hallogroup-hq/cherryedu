type Topic='M02'|'M04'|'M06'|'M08';
const captions:Record<Topic,{title:string;desc:string;note:string}>={
 M02:{title:'Tiga jalur persepsi saat mencicipi kopi',desc:'Aroma yang masuk melalui hidung dan dari rongga mulut berinteraksi dengan rasa dasar dan tekstur. Semuanya membantu persepsi flavor, tetapi punya sumber sensori yang berbeda.',note:'Perbandingan kanal, bukan gambar anatomi dengan proporsi biologis.'},
 M04:{title:'Catatan sensori berubah sesuai tahap',desc:'Fragrance diamati pada bubuk kering, aroma setelah air ditambahkan, flavor ketika minuman di mulut dan aftertaste sesudahnya.',note:'Gunakan empat kolom berbeda; tahap bukan empat skor yang dijumlahkan.'},
 M06:{title:'Ciri visual biji yang perlu dibedakan',desc:'Ilustrasi skematis biji utuh, berlubang, dan pecah. Bentuk tampak tidak cukup untuk menentukan kategori defect resmi atau keamanan pangan.',note:'Diagram skematis, bukan foto atau panduan identifikasi defect yang dapat menggantikan pemeriksaan fisik.'},
 M08:{title:'Mengapa uji tiga cangkir bisa benar karena tebakan?',desc:'Dua cangkir memuat sampel sama, satu berbeda. Urutan disamarkan; peluang memilih satu yang berbeda dengan tebak acak adalah satu dari tiga.',note:'Uji diskriminasi tidak mengukur preferensi atau memberi lisensi profesional.'}
};
export function SensoryEvidenceAtlas({moduleCode}:{moduleCode:string}){
 if(!(moduleCode in captions))return null;
 const code=moduleCode as Topic,d=captions[code];
 return <figure className="my-10 overflow-hidden rounded-lg border border-paper-300 bg-white p-4 sm:p-6">
  <figcaption className="font-serif text-xl font-bold text-roast-950">{d.title}</figcaption>
  <svg viewBox="0 0 660 282" role="img" aria-label={d.desc} className="mt-4 h-auto w-full" xmlns="http://www.w3.org/2000/svg">
   <title>{d.title}</title><desc>{d.desc}</desc>
   {code==='M02'&&<>
    <rect x="12" y="20" width="194" height="100" rx="8" fill="#F5EDE0" stroke="#AA957B"/>
    <text x="109" y="46" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#402C23">Mencium kopi</text>
    <text x="109" y="72" fontSize="14" textAnchor="middle" fill="#56463C">Ortonasal</text>
    <text x="109" y="96" fontSize="12" textAnchor="middle" fill="#56463C">Aroma lewat hidung</text>
    <rect x="232" y="20" width="194" height="100" rx="8" fill="#EDE6D9" stroke="#AA957B"/>
    <text x="329" y="46" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#402C23">Menyeruput</text>
    <text x="329" y="72" fontSize="14" textAnchor="middle" fill="#56463C">Gustasi + tekstur</text>
    <text x="329" y="96" fontSize="12" textAnchor="middle" fill="#56463C">Asam, pahit, body</text>
    <rect x="452" y="20" width="194" height="100" rx="8" fill="#F5EDE0" stroke="#AA957B"/>
    <text x="549" y="46" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#402C23">Aroma dari mulut</text>
    <text x="549" y="72" fontSize="14" textAnchor="middle" fill="#56463C">Retronasal</text>
    <text x="549" y="96" fontSize="12" textAnchor="middle" fill="#56463C">Senyawa volatil</text>
    {[109,329,549].map(x=><path key={x} d={`M ${x} 122 V 164 L 329 207`} stroke="#976B4F" strokeWidth="2" fill="none"/>)}
    <rect x="208" y="207" width="242" height="54" rx="9" fill="#463227"/>
    <text x="329" y="230" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white">Pengalaman flavor</text>
    <text x="329" y="250" fontSize="12" textAnchor="middle" fill="#EFE8DC">Gabungan beberapa sinyal</text>
   </>}
   {code==='M04'&&<>
    <path d="M 65 150 H 595" stroke="#8B705C" strokeWidth="3" fill="none"/>
    <path d="M 581 142 L 596 150 581 158" stroke="#8B705C" strokeWidth="3" fill="none"/>
    {[
     ['Kering','Fragrance','Bubuk sebelum air'],
     ['Basah','Aroma','Setelah dituang'],
     ['Diminum','Flavor','Ketika di mulut'],
     ['Sesudah','Aftertaste','Sensasi menetap']
    ].map(([stage,attr,note],i)=>{const x=82+i*159;return <g key={stage}>
     <circle cx={x} cy="150" r="11" fill={i===0?'#9C6549':'#4D4238'}/>
     <rect x={x-70} y="35" width="140" height="89" rx="6" fill="#F2ECE2" stroke="#B4A391"/>
     <text x={x} y="58" fontSize="15" fontWeight="bold" textAnchor="middle" fill="#3B3028">{stage}</text>
     <text x={x} y="83" fontSize="15" textAnchor="middle" fill="#775239">{attr}</text>
     <text x={x} y="106" fontSize="11" textAnchor="middle" fill="#62564C">{note}</text>
     <path d={`M ${x} 163 V 199`} stroke="#B49F8D" strokeWidth="2"/>
     <text x={x} y="224" fontSize="11" textAnchor="middle" fill="#4E463E">Catat terpisah</text>
    </g>})}
   </>}
   {code==='M06'&&<>
    {[
      {x:108,label:'Utuh',note:'Pembanding visual'},
      {x:329,label:'Berlubang',note:'Periksa ciri dan acuan'},
      {x:550,label:'Pecah',note:'Bukan kategori sama'}
    ].map((b,i)=><g key={b.label}>
     <ellipse cx={b.x} cy="121" rx="70" ry="94" fill="#789077" stroke="#355444" strokeWidth="4"/>
     <path d={`M ${b.x-15} 40 Q ${b.x+25} 100 ${b.x-10} 205`} stroke="#D1DACA" strokeWidth="6" fill="none"/>
     {i===1&&[[-18,-13],[20,12],[4,-45]].map(([dx,dy],j)=><circle key={j} cx={b.x+dx} cy={121+dy} r="11" fill="#34483C"/>)}
     {i===2&&<path d={`M ${b.x-58} 185 L ${b.x-12} 140 ${b.x+6} 161 ${b.x+41} 121 L ${b.x+57} 153 L ${b.x+75} 188`} fill="none" stroke="white" strokeWidth="12"/>}
     <text x={b.x} y="245" fontSize="17" fontWeight="bold" textAnchor="middle" fill="#352820">{b.label}</text>
     <text x={b.x} y="266" fontSize="12" textAnchor="middle" fill="#645449">{b.note}</text>
    </g>)}
   </>}
   {code==='M08'&&<>
    {['A','A','B'].map((item,i)=>{const x=118+210*i;return <g key={i}>
     <ellipse cx={x} cy="66" rx="68" ry="18" fill="#7B5B45"/>
     <path d={`M ${x-68} 66 v 104 q 68 44 136 0 V 66`} fill={i===2?'#9D6F50':'#C2A084'} stroke="#72533D" strokeWidth="3"/>
     <ellipse cx={x} cy="170" rx="68" ry="19" fill={i===2?'#9D6F50':'#C2A084'} stroke="#72533D" strokeWidth="3"/>
     <text x={x} y="123" fontSize="34" fontWeight="bold" textAnchor="middle" fill={i===2?'#FFFFFF':'#35291F'}>{item}</text>
     <text x={x} y="224" fontSize="15" textAnchor="middle" fill="#3A322A">{i===2?'Satu berbeda':'Dua sama'}</text>
    </g>})}
    <text x="329" y="263" fontSize="14" textAnchor="middle" fill="#66564A">Label A/B diungkap hanya untuk menjelaskan cara kerja uji</text>
   </>}
  </svg>
  <p className="mt-2 text-xs leading-6 text-roast-700">{d.note}</p>
 </figure>;
}
