import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/business-roastery',timeout:80_000,expect:{timeout:12000},fullyParallel:false,
 forbidOnly:!!process.env.CI,retries:0,workers:1,reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3132',...devices['Desktop Chrome'],browserName:'chromium',screenshot:'only-on-failure',trace:'retain-on-failure'},
 webServer:{command:'npm run dev -- -p 3132',url:'http://127.0.0.1:3132/business-roastery-v1',
  reuseExistingServer:!process.env.CI,timeout:180000,env:{
  CHERRYEDU_BUSINESS_ROASTERY_REVIEW:'enabled',NEXT_TELEMETRY_DISABLED:'1'}}});
