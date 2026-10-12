import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
 testDir:'./tests/homebrewer',
 timeout:70_000,
 expect:{timeout:15000},
 fullyParallel:false,
 forbidOnly:Boolean(process.env.CI),
 retries:process.env.CI?1:0,
 workers:1,
 reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3116',...devices['Desktop Chrome'],browserName:'chromium',screenshot:'only-on-failure',trace:'retain-on-failure'},
 webServer:{
  command:'npm run dev -- -p 3116',
  url:'http://127.0.0.1:3116/home-brewer-v2',
  reuseExistingServer:!process.env.CI,
  timeout:180000,
  env:{CHERRYEDU_HOME_BREWER_V2_REVIEW:'enabled',NEXT_TELEMETRY_DISABLED:'1'}
 }
});