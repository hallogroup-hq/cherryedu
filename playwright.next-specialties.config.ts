import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/next-specialties',
 timeout:60000,expect:{timeout:15000},fullyParallel:false,workers:1,
 retries:process.env.CI?1:0,forbidOnly:!!process.env.CI,reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3187',...devices['Desktop Chrome'],browserName:'chromium',trace:'retain-on-failure',screenshot:'only-on-failure'},
 webServer:{
  command:'npm run dev -- -p 3187',
  url:'http://127.0.0.1:3187/green-coffee-v2',
  reuseExistingServer:!process.env.CI,
  timeout:180000,
  env:{
   CHERRYEDU_NEXT_SPECIALTY_REVIEW:'enabled',
   NEXT_PUBLIC_CHERRYEDU_NEXT_SPECIALTY_PREVIEW:'enabled',
   CHERRYEDU_FINAL_EXAMS_REVIEW:'enabled',
   NEXT_PUBLIC_CHERRYEDU_CURRICULUM_PREVIEW:'enabled',
   NEXT_PUBLIC_CHERRYEDU_FOUNDATION_V2_PREVIEW:'review-only',
   CHERRYEDU_BARISTA_V2_REVIEW:'enabled',
   CHERRYEDU_HOME_BREWER_V2_REVIEW:'enabled',
   CHERRYEDU_ROASTER_V2_REVIEW:'enabled',
   CHERRYEDU_SENSORY_V2_REVIEW:'enabled',
   CHERRYEDU_BUSINESS_ROASTERY_REVIEW:'enabled',
   NEXT_TELEMETRY_DISABLED:'1'
  }
 }
});
