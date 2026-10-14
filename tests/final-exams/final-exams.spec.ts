import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
const paths=[['foundation',12],['barista',12],['home-brewer',12],['roaster',12],['sensory',12],['business-roastery',20]] as const;
test('catalog links all six exams, no internal notices',async({page})=>{
 await page.goto('/ujian-akhir');
 await expect(page.getByRole('heading',{name:'Ujian Akhir',exact:true})).toBeVisible();
 for(const [path] of paths)await expect(page.locator('a[href="/ujian-akhir/'+path+'"]')).toBeVisible();
 const txt=await page.locator('main').innerText();expect(txt).not.toMatch(/\b(DRAFT|PREVIEW|BETA|QA INTERNAL|TBD|PLACEHOLDER)\b/i);
});
for(const [path,total] of paths){
 test(path+' shows questions without answer keys, validates and scores on server',async({page,request})=>{
  const raw=await request.get('/api/final-exams/'+path);
  expect(raw.status()).toBe(200);
  const data=await raw.json();expect(data.questions).toHaveLength(total);
  expect(JSON.stringify(data)).not.toMatch(/correct_index|explanation|canonical_answer/i);
  const invalid=await request.post('/api/final-exams/'+path,{data:{version:data.version,answers:{}}});
  expect(invalid.status()).toBe(400);
  const wrongVersion=await request.post('/api/final-exams/'+path,{data:{version:'not-current',answers:Object.fromEntries(data.questions.map((q:any)=>[q.id,0]))}});
  expect(wrongVersion.status()).toBe(400);
  const bank=JSON.parse(readFileSync(resolve('lib/server/final-exams',path+'.json'),'utf8'));
  const exact=Object.fromEntries(bank.items.map((q:{id:string;correct_index:number})=>[q.id,q.correct_index]));
  const allRight=await request.post('/api/final-exams/'+path,{data:{version:data.version,answers:exact}});
  expect(allRight.status()).toBe(200);
  const allRightScore=await allRight.json();
  expect(allRightScore.correct).toBe(total);expect(allRightScore.percent).toBe(100);
  expect(allRightScore.passed).toBe(true);
  const allWrong=Object.fromEntries(bank.items.map((q:{id:string;correct_index:number})=>[q.id,(q.correct_index+1)%4]));
  const noPass=await request.post('/api/final-exams/'+path,{data:{version:data.version,answers:allWrong}});
  expect(noPass.status()).toBe(200);
  const noPassScore=await noPass.json();
  expect(noPassScore.correct).toBe(0);expect(noPassScore.passed).toBe(false);
  const res=await page.goto('/ujian-akhir/'+path);expect(res?.status()).toBe(200);
  await expect(page.getByRole('heading',{level:1})).toContainText('Ujian Akhir');
  await expect(page.locator('#question-heading')).toBeVisible();
  for(let i=0;i<total;i++){
   if(i)await page.getByRole('button',{name:'Berikutnya'}).click();
   await page.getByRole('radio',{name:'Pilihan A'}).check();
  }
  await expect(page.getByText(total+' dari '+total+' pertanyaan sudah dijawab.')).toBeVisible();
  await page.getByRole('button',{name:'Kumpulkan jawaban'}).click();
  await expect(page.getByRole('heading',{name:/dari .* benar/})).toBeVisible();
  await expect(page.getByText('Pembahasan jawaban').or(page.getByText('Jawabanmu tepat'))).toBeVisible();
  expect(await page.locator('main').innerText()).not.toMatch(/\b(DRAFT|PREVIEW|BETA|QA INTERNAL|TBD|PLACEHOLDER)\b/i);
 });
}
test('mobile reading is legible and can navigate',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto('/ujian-akhir/foundation');
 await expect(page.locator('#question-heading')).toBeVisible();
 const scroll=await page.locator('main').evaluate(el=>el.scrollWidth);
 expect(scroll).toBeLessThanOrEqual(392);
 await page.getByRole('radio',{name:'Pilihan B'}).check();
 await page.getByRole('button',{name:'Pertanyaan 2'}).click();
 await expect(page.locator('#question-heading')).toBeVisible();
});
