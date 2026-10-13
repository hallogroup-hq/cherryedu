import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/curated',
 timeout:90000,
 expect:{timeout:15000},
 fullyParallel:false,
 forbidOnly:Boolean(process.env.CI),
 retries:process.env.CI?1:0,
 workers:1,
 reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3139',...devices['Desktop Chrome'],browserName:'chromium',screenshot:'only-on-failure',trace:'retain-on-failure'},
 webServer:{
  command:'npm run dev -- -p 3139',
  url:'http://127.0.0.1:3139/paths',
  reuseExistingServer:!process.env.CI,
  timeout:180000,
  env:{
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
