import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/roaster',
 timeout:100_000,
 expect:{timeout:15000},
 fullyParallel:false,
 forbidOnly:!!process.env.CI,
 retries:0,
 workers:1,
 reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3117',...devices['Desktop Chrome'],
   browserName:'chromium',screenshot:'only-on-failure',trace:'retain-on-failure'},
 webServer:{command:'npm run dev -- -p 3117',url:'http://127.0.0.1:3117/roaster-v2',
   reuseExistingServer:!process.env.CI,timeout:180000,
   env:{CHERRYEDU_ROASTER_V2_REVIEW:'enabled',NEXT_TELEMETRY_DISABLED:'1'}}
});
