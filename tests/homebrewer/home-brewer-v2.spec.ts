import {expect,test} from '@playwright/test';
const pad=(n:number)=>String(n).padStart(2,'0');
test('overview lists ten modules, fifty lessons and ten distinct practice routes',async({page})=>{
 const res=await page.goto('/home-brewer-v2',{waitUntil:'domcontentloaded'});
 expect(res?.status()).toBe(200);
 await expect(page.getByRole('heading',{level:1})).toContainText('Home Brewer Specialization');
 await expect(page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])')).toHaveCount(10);
 await expect(page.locator('a[href^="/home-brewer-v2/hbv2-hb"]')).toHaveCount(50);
 await expect(page.locator('a[href^="/home-brewer-v2/practice/"]')).toHaveCount(10);
 const text=await page.locator('main').innerText();
 expect(text).not.toMatch(/DRAFT REVIEW|QA internal|Beta Publik|\[DIAGRAM:/i);
});
for(let m=1;m<=10;m++){
 test('module '+pad(m)+' renders all 5 substantive learner lessons safely',async({page})=>{
  for(let i=1;i<=5;i++){
   const id='hbv2-hb'+pad(m)+'-l'+pad(i);
   const res=await page.goto('/home-brewer-v2/'+id,{waitUntil:'domcontentloaded'});
   expect(res?.status(),id).toBe(200);
   await expect(page.getByRole('heading',{level:1})).toBeVisible();
   const text=await page.locator('main').innerText();
   expect(text,id).toMatch(/eksperimen|percobaan|uji/i);
   expect(text,id).not.toMatch(/\[DIAGRAM:|\[VIDEO:|\[ACTIVITY:|DRAFT REVIEW|BETA PUBLIK/i);
   await expect(page.locator('button').filter({hasText:/Terbitkan Sertifikat|Tandai Selesai/i})).toHaveCount(0);
  }
 });
}
for(let m=1;m<=10;m++){
 test('module '+pad(m)+' practice has three surprise cases and two fresh diagnostics',async({page})=>{
  const id='HB'+pad(m);
  const response=await page.goto('/home-brewer-v2/practice/'+id.toLowerCase(),{waitUntil:'domcontentloaded'});
  expect(response?.status()).toBe(200);
  const cases=page.getByRole('region',{name:'Kasus adaptif '+id});
  const quiz=page.getByRole('region',{name:'Uji pemahaman '+id});
  await expect(cases).toBeVisible();
  await expect(quiz).toBeVisible();
  await expect(cases.getByRole('button',{name:/Kasus [123]/})).toHaveCount(3);
  await expect(cases.getByRole('button',{name:'Buka informasi baru'})).toBeDisabled();
  await expect(quiz.getByRole('radio')).toHaveCount(4);
  await expect(quiz.getByRole('button',{name:'Periksa alasan'})).toBeDisabled();
 });
}
test('initial answer unlocks new evidence; revised answer unlocks reasoning only afterward',async({page})=>{
 await page.goto('/home-brewer-v2/practice/hb02');
 const lab=page.getByRole('region',{name:'Kasus adaptif HB02'});
 const secret='V60 menghasilkan 184g';
 await expect(lab).not.toContainText(secret);
 await lab.getByRole('textbox',{name:'Keputusan awal dan bukti yang masih kurang'}).fill('Saya akan cek apa yang ditimbang dan pisahkan perbedaan output dari hipotesis ekstraksi.');
 await lab.getByRole('button',{name:'Buka informasi baru'}).click();
 await expect(lab).toContainText(secret);
 await expect(lab.getByRole('button',{name:'Bandingkan alasanmu'})).toBeDisabled();
 await lab.getByRole('textbox',{name:'Revisi keputusan dan alasannya'}).fill('Output tidak membuktikan extraction yield, perlu TDS dan data sensory yang dicatat nyata.');
 await lab.getByRole('button',{name:'Bandingkan alasanmu'}).click();
 await expect(lab).toContainText('Contoh pertimbangan');
 await expect(lab.getByRole('textbox',{name:'Keputusan awal dan bukti yang masih kurang'})).toHaveValue(/Saya akan cek/);
});
test('diagnostic feedback after response, but not before attempt',async({page})=>{
 await page.goto('/home-brewer-v2/practice/hb02');
 const quiz=page.getByRole('region',{name:'Uji pemahaman HB02'});
 await quiz.getByRole('radio').first().check();
 await quiz.getByRole('button',{name:'Periksa alasan'}).click();
 await expect(quiz).toContainText('Pertimbangkan kembali asumsi');
 await expect(quiz).toContainText('Alternatif lebih defensibel');
 await quiz.getByRole('button',{name:'Berikutnya →'}).click();
 await expect(quiz).toContainText('Pertanyaan 2 dari 2');
 await expect(quiz.getByRole('button',{name:'Periksa alasan'})).toBeDisabled();
});
test('ratio lab distinguishes inputs and never fabricates output sensory values',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-hb10-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep home brewer'});
 await expect(lab).toContainText('Input ratio 1 : 15');
 await lab.getByLabel('Air seduh masuk (g)').fill('240');
 await expect(lab).toContainText('Input ratio 1 : 16');
 await expect(lab.getByRole('button',{name:'Bandingkan alasan'})).toBeDisabled();
 await lab.getByRole('textbox').fill('Tanpa TDS atau tasting kita tidak mengetahui extraction yield dan persepsi rasa.');
 await lab.getByRole('button',{name:'Bandingkan alasan'}).click();
 await expect(lab).toContainText('tidak mengukur rasa');
});
test('EY lab arithmetic handles quantities and rejects missing explanation',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-hb02-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep home brewer'});
 await expect(lab).toContainText('Estimasi EY: 20%');
 await lab.getByLabel('Beverage (g)').fill('50');
 await lab.getByLabel('TDS kopi (%)').fill('8');
 await expect(lab).toContainText('Estimasi EY: 20%');
});
test('iced visual never assumes complete ice melting and preserves water-through-bed distinction',async({page})=>{
 await page.goto('/home-brewer-v2/hbv2-hb09-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep home brewer'});
 await expect(lab).toContainText('1 : 10');
 await lab.getByRole('slider',{name:'Es yang mencair'}).focus();
 await expect(lab).toContainText('output brew yang');
 await expect(lab).toContainText('belum diukur');
});
test('six original mechanism diagrams are accessible and placed near contextual introduction',async({page})=>{
 const pages=['hb02-l02','hb02-l03','hb04-l03','hb05-l01','hb09-l01','hb10-l02'];
 for(const id of pages){
  await page.goto('/home-brewer-v2/hbv2-'+id,{waitUntil:'domcontentloaded'});
  const visual=page.locator('figure').filter({has:page.locator('svg[role="img"]')});
  await expect(visual).toHaveCount(1);
  await expect(visual.locator('figcaption')).toBeVisible();
  await expect(visual.locator('svg[aria-label]')).toBeVisible();
 }
});
test('phone-width course navigation and practice remain accessible',async({page})=>{
 await page.setViewportSize({width:375,height:812});
 await page.goto('/home-brewer-v2/hbv2-hb09-l01');
 await expect(page.getByRole('heading',{level:1})).toBeVisible();
 await expect(page.getByRole('region',{name:'Laboratorium konsep home brewer'})).toBeVisible();
 await page.goto('/home-brewer-v2/practice/hb09');
 await expect(page.getByRole('textbox',{name:'Keputusan awal dan bukti yang masih kurang'})).toBeVisible();
});
