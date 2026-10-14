import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/specialty-gate',
 timeout:60000,
 expect:{timeout:15000},
 workers:1,
 retries:process.env.CI?1:0,
 reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3191',...devices['Desktop Chrome'],browserName:'chromium',screenshot:'only-on-failure'},
 webServer:{
  command:'npm run dev -- -p 3191',
  url:'http://127.0.0.1:3191/ujian-akhir/foundation',
  reuseExistingServer:!process.env.CI,
  timeout:180000,
  env:{
   NEXT_PUBLIC_CHERRYEDU_CURRICULUM_PREVIEW:'enabled',
   NEXT_PUBLIC_CHERRYEDU_FOUNDATION_V2_PREVIEW:'review-only',
   CHERRYEDU_FINAL_EXAMS_REVIEW:'enabled',
   CHERRYEDU_NEXT_SPECIALTY_REVIEW:'disabled',
   NEXT_PUBLIC_CHERRYEDU_NEXT_SPECIALTY_PREVIEW:'disabled',
   NEXT_TELEMETRY_DISABLED:'1'
  }
 }
});
