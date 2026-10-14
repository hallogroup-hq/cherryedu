import {test,expect} from '@playwright/test';
const paths=[
 {url:'/barista-v2',name:'Barista Specialization',modules:12,lessons:68,first:'/barista-v2/bv2-m01-l01'},
 {url:'/home-brewer-v2',name:'Home Brewer Specialization',modules:10,lessons:50,first:'/home-brewer-v2/hbv2-hb01-l01'},
 {url:'/roaster-v2',name:'Roaster Specialization',modules:10,lessons:40,first:'/roaster-v2/rv2-m01-l01'},
 {url:'/sensory-v2',name:'Q Grader & Sensory Specialist',modules:10,lessons:40,first:'/sensory-v2/sv2-m01-l01'},
 {url:'/business-roastery-v1',name:'Business Roastery',modules:21,lessons:84,first:'/business-roastery-v1/br-b01-l01'}
];
test('curated catalog contains one version of each replaced path, plus 3 untouched programs',async({page})=>{
 await page.goto('/paths');
 const headings=await page.locator('h3').allTextContents();
 for(const p of paths)expect(headings.filter(x=>x.includes(p.name)),p.name).toHaveLength(1);
 expect(headings.filter(x=>x.includes('Memahami Kopi dari Hulu ke Hilir'))).toHaveLength(1);
 expect(headings).not.toContain('Foundation: Kopi dari Hulu ke Hilir');
 expect(headings).not.toContain('Roaster Specialization Path: Sains & Seni Penyangraian Kopi');
 expect(headings).toEqual(expect.arrayContaining(['Q Processor Specialization Path: Standar Bioproses & Pasca-Panen Spesialti Dunia']));
});
for(const p of paths){
 test(p.name+' uses shared CherryEdu catalog layout and correct lesson count',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  const res=await page.goto(p.url);
  expect(res?.status()).toBe(200);
  await expect(page.getByRole('heading',{level:1})).toHaveText(p.url==='/business-roastery-v1'?'Merancang sampai Menjalankan Bisnis Roastery':p.name);
  await expect(page.getByRole('heading',{name:p.url==='/business-roastery-v1'?'Daftar Modul dan Pelajaran':'Modul pembelajaran'})).toBeVisible();
  if(p.url==='/business-roastery-v1'){
   const controls=page.locator('section > button[aria-controls^="br-module-"]');
   await expect(controls).toHaveCount(21);
   for(let i=1;i<21;i++)await controls.nth(i).click();
  }else await expect(page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])')).toHaveCount(p.modules);
  if(p.url==='/business-roastery-v1')await expect(page.locator('section li a[href^="/business-roastery-v1/br-b"]')).toHaveCount(p.lessons);
  else await expect(page.locator('a[href^="'+p.url+'/"]').filter({has:page.locator('span.font-medium')})).toHaveCount(p.lessons);
  expect(await page.locator('main').evaluate(el=>el.scrollWidth<=window.innerWidth+2)).toBe(true);
  const body=await page.locator('main').innerText();
  expect(body).not.toMatch(/\b(?:DRAFT REVIEW|Beta Publik|QA internal|Review build)\b/i);
  const l=await page.goto(p.first);expect(l?.status(),p.first).toBe(200);
  await expect(page.getByRole('heading',{level:1})).toBeVisible();
 });
}
for(const legacy of ['barista-specialization','home-brewer-specialization','roaster-path','q-grader-path','kopi-dari-hulu-ke-hilir']){
 test('legacy '+legacy+' redirects to sole updated version',async({page})=>{
  await page.goto('/paths/'+legacy);expect(page.url()).not.toContain('/paths/'+legacy);
 });
}
test('Foundation answer feedback stays visible after time passes, then next question advances only by click',async({page})=>{
 await page.goto('/paths/memahami-kopi-dari-hulu-ke-hilir/lessons/lesson-fv2-m01-l01');
 await expect(page.getByText('Pernyataan 1 dari 4')).toBeVisible();
 await page.getByRole('button',{name:'Pengamatan',exact:true}).click();
 await expect(page.getByText('Tepat.',{exact:true}).first()).toBeVisible();
 await page.waitForTimeout(1800);
 await expect(page.getByText('Tepat.',{exact:true}).first()).toBeVisible();
 await expect(page.getByText('Pernyataan 1 dari 4')).toBeVisible();
 await page.getByRole('button',{name:/Pernyataan berikutnya/}).click();
 await expect(page.getByText('Pernyataan 2 dari 4')).toBeVisible();
});
test('model response is hidden before reveal and can be opened and closed by learner',async({page})=>{
 await page.goto('/paths/memahami-kopi-dari-hulu-ke-hilir/lessons/lesson-fv2-m01-l01');
 const answer=page.getByText('Keduanya mendeskripsikan aroma bernuansa panggang pada A',{exact:false});
 await expect(answer).toHaveCount(0);
 const reveal=page.getByRole('button',{name:'Lihat contoh respons'}).first();
 await expect(reveal).toHaveAttribute('aria-expanded','false');
 await reveal.click();
 await expect(answer).toBeVisible();
 await page.getByRole('button',{name:'Sembunyikan contoh'}).first().click();
 await expect(answer).toHaveCount(0);
});
test('P-17 is introduced before its repeated use; title and copy have no unwanted dash/slang',async({page})=>{
 await page.goto('/paths/memahami-kopi-dari-hulu-ke-hilir/lessons/lesson-fv2-m01-l02');
 const body=await page.locator('main').innerText();
 expect(body).toMatch(/P-17\s*\(kode (?:untuk )?satu lot kopi contoh\)/);
 expect(body).not.toMatch(/sok ahli|tanpa terdengar sok|semua nama dan angkanya simulasi/i);
 expect(await page.locator('main h2,main h3').allTextContents()).not.toEqual(expect.arrayContaining([expect.stringMatching(/\s[—–]\s/)]));
});


test('Business Roastery reader uses Foundation desktop geometry, not a separate narrow layout',async({page})=>{
 await page.setViewportSize({width:1440,height:900});
 await page.goto('/paths/memahami-kopi-dari-hulu-ke-hilir/lessons/lesson-fv2-m01-l01');
 const fSide=await page.locator('aside').first().boundingBox();
 const fArticle=await page.locator('article.lg\\:col-span-8').first().boundingBox();
 expect(fSide&&fArticle).toBeTruthy();
 const foundationRatio=fSide!.width/(fSide!.width+fArticle!.width);
 const foundationRadius=await page.locator('article.lg\\:col-span-8').first().evaluate(el=>getComputedStyle(el).borderTopLeftRadius);
 await page.goto('/business-roastery-v1/br-b01-l01');
 const bSide=await page.getByRole('complementary',{name:'Daftar pelajaran silabus'}).boundingBox();
 const bArticle=await page.locator('div[class*="lg:col-span-8"]').first().boundingBox();
 expect(bSide&&bArticle).toBeTruthy();
 const businessRatio=bSide!.width/(bSide!.width+bArticle!.width);
 const businessRadius=await page.locator('div[class*="lg:col-span-8"]').first().evaluate(el=>getComputedStyle(el).borderTopLeftRadius);
 expect(Math.abs(businessRatio-foundationRatio)).toBeLessThan(0.06);
 expect(businessRadius).toBe(foundationRadius);
});
