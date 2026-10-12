import {expect,test} from '@playwright/test';

test('40 lessons and 10 module-practice links are present in the course index',async({page})=>{
 await page.goto('/home-brewer-v2',{waitUntil:'domcontentloaded'});
 await expect(page.getByRole('heading',{level:1})).toContainText('Bukan Menghafal Resep');
 await expect(page.getByRole('heading',{level:2})).toHaveCount(10);
 await expect(page.locator('a[href^="/home-brewer-v2/hbv2-"]')).toHaveCount(40);
 await expect(page.locator('a[href^="/home-brewer-v2/practice/"]')).toHaveCount(10);
 const text=await page.locator('main').innerText();
 expect(text).not.toMatch(/DRAFT REVIEW|Beta Publik|review build|Sertifikasi Profesional Kompetensi/i);
});

for(let m=1;m<=10;m++){
 const code='m'+String(m).padStart(2,'0');
 test('all four M'+String(m).padStart(2,'0')+' lessons render in the reader and keep learner copy clean',async({page})=>{
  for(let l=1;l<=4;l++){
   const id='hbv2-'+code+'-l'+String(l).padStart(2,'0');
   const r=await page.goto('/home-brewer-v2/'+id,{waitUntil:'domcontentloaded'});
   expect(r?.status(),id).toBe(200);
   await expect(page.getByRole('heading',{level:1})).toBeVisible();
   const copy=await page.locator('main').innerText();
   expect(copy,id).toMatch(/eksperimen|percobaan|coba/i);
   expect(copy,id).not.toMatch(/DRAFT REVIEW|Beta Publik|review build|\[ACTIVITY:|\[VISUAL:|coming soon/i);
  }
 });
 test('M'+String(m).padStart(2,'0')+' practice presents two unpublished-before-attempt cases and two diagnostics',async({page})=>{
  const r=await page.goto('/home-brewer-v2/practice/'+code,{waitUntil:'domcontentloaded'});
  expect(r?.status()).toBe(200);
  const cases=page.getByRole('region',{name:'Kasus adaptif M'+String(m).padStart(2,'0')});
  await expect(cases.getByRole('button',{name:/Kasus [12]/})).toHaveCount(2);
  await expect(cases.getByRole('button',{name:'Lihat informasi baru'})).toBeDisabled();
  const quiz=page.getByRole('region',{name:'Diagnostik M'+String(m).padStart(2,'0')});
  await expect(quiz.getByRole('radio')).toHaveCount(4);
  await expect(quiz.getByRole('button',{name:'Periksa alasan'})).toBeDisabled();
 });
 test('M'+String(m).padStart(2,'0')+' concept diagram and usable interactive lab',async({page})=>{
  await page.goto('/home-brewer-v2/hbv2-'+code+'-l01',{waitUntil:'domcontentloaded'});
  const lab=page.getByRole('region',{name:'Laboratorium konsep M'+String(m).padStart(2,'0')});
  await expect(lab).toBeVisible();
  await expect(lab.locator('input, textarea')).not.toHaveCount(0);
  // M02 teaches its particle-distribution concept in L03, not the label lesson L01.
  if(m===2)await page.goto('/home-brewer-v2/hbv2-m02-l03',{waitUntil:'domcontentloaded'});
  const fig=page.locator('figure').filter({has:page.locator('svg[role="img"]')});
  await expect(fig).toHaveCount(1);
  await expect(fig.locator('figcaption')).toBeVisible();
  await expect(fig.locator('svg[aria-label]')).toBeVisible();
 });
}

test('case revelation comes after independent answer; revisions are not replaced by examples',async({page})=>{
 await page.goto('/home-brewer-v2/practice/m03');
 const region=page.getByRole('region',{name:'Kasus adaptif M03'});
 await expect(region).not.toContainText('Persentase keluaran air bukan extraction yield');
 await region.getByRole('textbox',{name:'Keputusan dan alasan awalmu'}).fill('Rasio input 15 banding 225 dan hasil keluar tidak cukup untuk menghitung extraction yield karena tidak ada TDS.');
 await region.getByRole('button',{name:'Lihat informasi baru'}).click();
 await expect(region).toContainText('Teman mengatakan extraction yield pasti 83%');
 await region.getByRole('textbox',{name:'Keputusan setelah tahu bukti baru'}).fill('Rasio air masuk berbeda dengan extraction yield; perlu mengetahui berapa zat terlarut yang berpindah dari kopi melalui pengukuran TDS.');
 await region.getByRole('button',{name:'Bandingkan dengan alasan contoh'}).click();
 await expect(region).toContainText('Contoh penalaran yang bisa dipertanggungjawabkan');
 await expect(region.getByRole('textbox',{name:'Keputusan dan alasan awalmu'})).toHaveValue(/Rasio input 15/);
});

test('diagnostic requires answer and shows option-specific explanation',async({page})=>{
 await page.goto('/home-brewer-v2/practice/m03');
 const quiz=page.getByRole('region',{name:'Diagnostik M03'});
 await quiz.getByRole('radio').first().check();
 await quiz.getByRole('button',{name:'Periksa alasan'}).click();
 await expect(quiz).toContainText('Pertimbangkan kembali asumsi ini');
 await expect(quiz).toContainText('Alternatif lebih kuat:');
 await quiz.getByRole('button',{name:'Berikutnya →'}).click();
 await expect(quiz).toContainText('Pertanyaan 2 dari 2');
 await expect(quiz.getByRole('button',{name:'Periksa alasan'})).toBeDisabled();
});

test('ratio calculator distinguishes output mass and missing TDS',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-m03-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep M03'});
 await expect(lab).toContainText('Rasio air masuk 1 : 15');
 await expect(lab).toContainText('EY tidak dapat dihitung tanpa pengukuran TDS.');
 await lab.getByLabel('TDS, jika diketahui (%)').fill('10');
 await expect(lab).toContainText('Estimasi EY');
});

test('iced coffee formula maintains total water and separates ice from brew water',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-m09-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep M09'});
 await expect(lab).toContainText('Es awal:');
 await lab.getByLabel('Air panas melalui bed (g)').fill('175');
 await expect(lab).toContainText('Es awal:');
 await expect(lab).toContainText('50 g');
 await expect(lab).toContainText('Tidak ada prediksi laju pencairan es');
});

test('home brewer reader is usable on a phone width without tiny SVG labels',async({page})=>{
 await page.setViewportSize({width:375,height:812});
 await page.goto('/home-brewer-v2/hbv2-m05-l01');
 await expect(page.getByRole('heading',{level:1})).toBeVisible();
 await expect(page.getByText('Geser diagram untuk melihat semua bagian.')).toBeVisible();
 await expect(page.getByRole('region',{name:'Laboratorium konsep M05'})).toBeVisible();
});

test('final case links are present after fourth lesson without pretending to grant a certificate',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-m10-l04');
 await expect(page.getByRole('link',{name:/Kerjakan latihan Modul 10/})).toHaveAttribute('href','/home-brewer-v2/practice/m10');
 await expect(page.locator('button').filter({hasText:/Terbitkan Sertifikat|Selesaikan Kursus/i})).toHaveCount(0);
});


test('lesson-specific diagrams render with the correct accessible title, not just any SVG',async({page})=>{
 const visuals=[
  ['hbv2-m01-l02','Zona kerja aman untuk seduh rumahan'],
  ['hbv2-m02-l01','Fakta kemasan berbeda dari janji rasa'],
  ['hbv2-m03-l02','EY sama, kekuatan minuman berbeda'],
  ['hbv2-m04-l03','Waktu lambat dapat punya beberapa penyebab'],
  ['hbv2-m05-l03','AeroPress: stabilitas alat mendahului resep'],
  ['hbv2-m06-l02','Tiga parameter air menjawab pertanyaan berbeda'],
  ['hbv2-m07-l02','Blind tasting mengurangi informasi pemicu ekspektasi'],
  ['hbv2-m08-l03','Variabel pengganggu menyulitkan klaim penyebab'],
  ['hbv2-m09-l02','Cold brew: rasa dan keamanan adalah dua pemeriksaan'],
  ['hbv2-m10-l02','Prediksi yang salah tetap menghasilkan pembelajaran']
 ] as const;
 for(const [id,title] of visuals){
  await page.goto('/home-brewer-v2/'+id,{waitUntil:'domcontentloaded'});
  const fig=page.getByRole('figure',{name:title,exact:true});
  await expect(fig).toHaveCount(1);
  await expect(fig.locator('figcaption')).toBeVisible();
  await expect(fig.locator('svg[aria-label]')).toBeVisible();
 }
});

test('M02 concept and deep visuals belong to different chapters',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-m02-l01');
 await expect(page.getByRole('figure',{name:'Fakta kemasan berbeda dari janji rasa'})).toBeVisible();
 await expect(page.getByRole('figure',{name:'Grind bukan satu ukuran partikel'})).toHaveCount(0);
 await page.goto('/home-brewer-v2/hbv2-m02-l03');
 await expect(page.getByRole('figure',{name:'Grind bukan satu ukuran partikel'})).toBeVisible();
 await expect(page.getByRole('figure',{name:'Fakta kemasan berbeda dari janji rasa'})).toHaveCount(0);
});

test('AeroPress safety diagram explicitly discourages risky inverted brewing',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-m05-l03');
 const fig=page.locator('figure').filter({has:page.locator('svg[role="img"]')});
 await expect(fig).toContainText('tidak menganjurkan inverted');
 await expect(fig).toContainText('manual model');
});
