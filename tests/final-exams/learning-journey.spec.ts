import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
 await page.addInitScript(()=>localStorage.setItem('cherry_seen_version_v1_2','true'));
});

const specializations=[
 {course:'/barista-v2',exam:'/ujian-akhir/barista',count:12},
 {course:'/home-brewer-v2',exam:'/ujian-akhir/home-brewer',count:12},
 {course:'/roaster-v2',exam:'/ujian-akhir/roaster',count:12},
 {course:'/sensory-v2',exam:'/ujian-akhir/sensory',count:12},
 {course:'/business-roastery-v1',exam:'/ujian-akhir/business-roastery',count:20},
 {course:'/green-coffee-v2',exam:'/ujian-akhir/green-coffee',count:24},
 {course:'/coffee-shop-v2',exam:'/ujian-akhir/coffee-shop',count:24},
 {course:'/q-processor-v2',exam:'/ujian-akhir/q-processor',count:16}
] as const;

for(const path of specializations){
 test(path.course+' connects final syllabus module, last lesson and correct final exam',async({page})=>{
  await page.goto(path.course);
  const modules=page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])');
  const finalModule=modules.last();
  await finalModule.getByRole('button').click();
  const lastLesson=finalModule.locator('ol li a').last();
  await expect(lastLesson).toBeVisible();
  const lastHref=await lastLesson.getAttribute('href');
  expect(lastHref).toMatch(new RegExp('^'+path.course.replace(/\//g,'\\/')+'/'));
  const examSection=page.locator('section[aria-label="Ujian akhir"]');
  await expect(examSection).toBeVisible();
  await expect(examSection.getByRole('link',{name:/Mulai Ujian Akhir/i})).toHaveAttribute('href',path.exam);
  const lastSectionTop=await examSection.evaluate(el=>el.getBoundingClientRect().top+window.scrollY);
  const lastModuleTop=await finalModule.evaluate(el=>el.getBoundingClientRect().top+window.scrollY);
  expect(lastSectionTop).toBeGreaterThan(lastModuleTop);
  await lastLesson.click();
  await expect(page.locator('[data-testid="continue-to-final-exam"]')).toBeVisible();
  await expect(page.locator('[data-testid="continue-to-final-exam"]')).toHaveAttribute('href',path.exam);
  await expect(page.locator('#curated-lesson-syllabus a[href="'+path.exam+'"]')).toBeVisible();
  await page.locator('[data-testid="continue-to-final-exam"]').click();
  await expect(page).toHaveURL(new RegExp(path.exam+'$'));
  await expect(page.locator('#question-heading')).toBeVisible();
  const response=await page.request.get('/api/final-exams/'+path.exam.split('/').pop());
  expect(response.status()).toBe(200);
  expect((await response.json()).questions).toHaveLength(path.count);
 });
}

test('Foundation lesson 36 continues to its own exam rather than going backward to syllabus',async({page})=>{
 const syllabus='/paths/memahami-kopi-dari-hulu-ke-hilir';
 await page.goto(syllabus);
 await expect(page.getByRole('link',{name:/Mulai Ujian Akhir/})).toHaveAttribute('href','/ujian-akhir/foundation');
 await page.goto(syllabus+'/lessons/lesson-fv2-m07-l05');
 await expect(page.locator('[data-testid="continue-to-final-exam"]')).toBeVisible();
 await expect(page.locator('[data-testid="continue-to-final-exam"]')).toHaveAttribute('href','/ujian-akhir/foundation');
 await page.locator('[data-testid="continue-to-final-exam"]').click();
 await expect(page).toHaveURL(/\/ujian-akhir\/foundation$/);
 await expect(page.locator('#question-heading')).toBeVisible();
});

test('old replaced syllabus URLs always redirect to the current curated learning experiences',async({page})=>{
 for(const [oldRoute,current] of [
  ['/paths/barista-specialization','/barista-v2'],
  ['/paths/home-brewer-specialization','/home-brewer-v2'],
  ['/paths/roaster-path','/roaster-v2'],
  ['/paths/q-grader-path','/sensory-v2'],
  ['/paths/post-harvest-specialist','/green-coffee-v2'],
  ['/paths/q-processor-specialization','/q-processor-v2'],
  ['/paths/coffee-business-management','/coffee-shop-v2']
 ]){
  await page.goto(oldRoute);
  await expect(page).toHaveURL(new RegExp(current.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'$'));
 }
});

test('catalog shows exactly one curated entry for each new specialization',async({page})=>{
 await page.goto('/paths');
 const names=['Green Coffee & Post-Harvest Processing Specialist','Coffee Business & Shop Management Specialist','Q Processor Specialization'];
 for(const name of names)await expect(page.getByText(name,{exact:false}).first()).toBeVisible();
 await expect(page.locator('a[href="/paths/post-harvest-specialist"]')).toHaveCount(0);
 await expect(page.locator('a[href="/paths/q-processor-specialization"]')).toHaveCount(0);
 await expect(page.locator('a[href="/paths/coffee-business-management"]')).toHaveCount(0);
 // The footer is part of the learner journey: it must not send learners to a
 // retired Q Processor syllabus or imply a CQI credential.
 await expect(page.locator('footer a[href="/q-processor-v2"]')).toHaveCount(1);
 await expect(page.locator('footer').getByText('Q Processing Specialist (CQI)',{exact:true})).toHaveCount(0);
});
