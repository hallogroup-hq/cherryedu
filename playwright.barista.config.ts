import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
 testDir:'./tests/barista',
 timeout:70_000,
 expect:{timeout:15_000},
 fullyParallel:false,
 forbidOnly:Boolean(process.env.CI),
 retries:process.env.CI?1:0,
 workers:1,
 reporter:[['list']],
 use:{
   baseURL:'http://127.0.0.1:3113',
   ...devices['Desktop Chrome'],
   browserName:'chromium',
   screenshot:'only-on-failure',
   trace:'retain-on-failure',
 },
 webServer:{
   command:'npm run dev -- -p 3113',
   url:'http://127.0.0.1:3113/barista-v2',
   reuseExistingServer:!process.env.CI,
   timeout:180_000,
   env:{CHERRYEDU_BARISTA_V2_REVIEW:'enabled',NEXT_TELEMETRY_DISABLED:'1'},
 },
});
