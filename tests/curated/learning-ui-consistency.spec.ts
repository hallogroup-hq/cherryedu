import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{await page.addInitScript(()=>localStorage.setItem('cherry_seen_version_v1_2','true'));});

/** Visual-structure regression anchored to the approved Foundation learning reader. */
const courseLessons=[
 {name:'Barista',url:'/barista-v2/bv2-m01-l01',total:68},
 {name:'Home Brewer',url:'/home-brewer-v2/hbv2-hb01-l01',total:50},
 {name:'Roaster',url:'/roaster-v2/rv2-m01-l01',total:40},
 {name:'Sensory',url:'/sensory-v2/sv2-m01-l01',total:40},
 {name:'Business Roastery',url:'/business-roastery-v1/br-b01-l01',total:84}
];
test('Foundation reference retains a real learning platform reader',async({page})=>{
 await page.setViewportSize({width:1440,height:900});
 await page.goto('/paths/memahami-kopi-dari-hulu-ke-hilir/lessons/lesson-fv2-m01-l01');
 await expect(page.getByText('DAFTAR MATERI SILABUS')).toBeVisible();
 await expect(page.getByText('Mode Listen & Brew',{exact:true})).toBeVisible();
 const sidebar=await page.locator('aside').first().boundingBox();
 const article=await page.locator('article').first().boundingBox();
 expect(sidebar&&article).toBeTruthy();
 expect(sidebar!.x+sidebar!.width).toBeLessThan(article!.x+40);
});
for(const path of courseLessons){
 test(path.name+' matches Foundation desktop reader with syllabus, audio and content card',async({page})=>{
  await page.setViewportSize({width:1440,height:900});
  const res=await page.goto(path.url);expect(res?.status()).toBe(200);
  const aside=page.locator('#curated-lesson-syllabus'),article=page.locator('article').first();
  await expect(aside).toBeVisible();await expect(article).toBeVisible();
  await expect(aside.getByRole('heading',{name:'Daftar Materi Silabus'})).toBeVisible();
  await expect(page.getByText('Mode Listen & Brew',{exact:true})).toBeVisible();
  await expect(aside.getByRole('navigation',{name:'Pilih materi'}).getByRole('link')).toHaveCount(path.total);
  const sidebarRect=await aside.boundingBox(),contentRect=await article.boundingBox();
  expect(sidebarRect&&contentRect).toBeTruthy();
  expect(sidebarRect!.x+sidebarRect!.width).toBeLessThan(contentRect!.x+45);
  expect(contentRect!.width).toBeGreaterThan(480);
  const text=await page.locator('main').innerText();
  expect(text).not.toMatch(/\b(DRAFT|QA INTERNAL|PREVIEW BUILD|PLACEHOLDER|COMING SOON)\b/i);
 });
}
test('exam uses the same left syllabus and right content layout on desktop',async({page})=>{
 await page.setViewportSize({width:1440,height:900});
 await page.goto('/ujian-akhir/foundation');
 await expect(page.getByRole('heading',{name:'Daftar Soal Ujian'})).toBeVisible();
 const aside=page.getByRole('complementary',{name:'Navigasi pertanyaan'});
 const card=page.locator('section[aria-labelledby="question-heading"]');
 const lhs=await aside.boundingBox(),rhs=await card.boundingBox();
 expect(lhs&&rhs).toBeTruthy();
 expect(lhs!.x+lhs!.width).toBeLessThan(rhs!.x+45);
});
