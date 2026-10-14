import {test,expect} from '@playwright/test';
const slugs=['green-coffee','coffee-shop','q-processor'];
const routes=['green-coffee-v2','coffee-shop-v2','q-processor-v2'];
test('all new specialty pages and grading endpoints deny access when preview is off',async({request})=>{
 for(const route of routes){
  const course=await request.get('/'+route);
  expect(course.status(),route+' should be closed').toBe(404);
 }
 for(const slug of slugs){
  const page=await request.get('/ujian-akhir/'+slug);
  expect(page.status(),slug+' exam page should be closed').toBe(404);
  const get=await request.get('/api/final-exams/'+slug);
  expect(get.status(),slug+' GET should be closed').toBe(404);
  // Even well-formed POSTs must not get as far as the grader when the flag is off.
  const post=await request.post('/api/final-exams/'+slug,{data:{version:'any',answers:{}}});
  expect(post.status(),slug+' POST should be closed').toBe(404);
 }
 const oldExam=await request.get('/api/final-exams/foundation');
 expect(oldExam.status()).toBe(200);
 const visible=await request.get('/ujian-akhir');
 expect(visible.status()).toBe(200);
 const body=await visible.text();
 for(const slug of slugs)expect(body).not.toContain('href="/ujian-akhir/'+slug+'"');
});
