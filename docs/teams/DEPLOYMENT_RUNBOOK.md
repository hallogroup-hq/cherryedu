# Cherry Edu Teams — Deployment Runbook

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## 1. Architecture Overview
- **B2C App:** `https://edu.cherrycoffeeroastery.com` (Vercel Project: `cherryedu`, Repo: `hallogroup-hq/cherryedu`)
- **Teams App:** `https://teams.cherrycoffeeroastery.com` (Vercel Project: `cherryedu-teams`, Repo: `hallogroup-hq/cherryedu-teams`)
- **Deployment Isolation Rule:** Neither project triggers automated deployment of the other.

---

## 2. Environment Variables Configuration

| Variable Name | Environment | Exposed to Client? | Purpose |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Prod, Prev, Dev | Yes | Shared Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Prod, Prev, Dev | Yes | Supabase client anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Prod, Prev, Dev | **NO** (Server only) | Supabase admin server operations |
| `SUPABASE_JWT_SECRET` | Prod, Prev, Dev | **NO** (Server only) | Cryptographic HMAC-SHA256 token verification |
| `DATABASE_URL` | Prod, Prev, Dev | **NO** (Server only) | Direct PostgreSQL connection pool |

---

## 3. Deployment Procedure

### 3.1 Preview Deployment
```bash
cd /Users/akmalirsyadpermana/Downloads/cherryedu-teams
npm run typecheck
npm run build
vercel deploy
```

### 3.2 Production Deployment (Requires Gate 12 Approval)
```bash
cd /Users/akmalirsyadpermana/Downloads/cherryedu-teams
vercel deploy --prod
```

### 3.3 Rollback Procedure
If a production deployment experiences unexpected failures:
1. Open Vercel dashboard for `cherryedu-teams` or use CLI:
   `vercel rollback <deployment-id>`
2. Verify previous healthy deployment is actively serving traffic.
3. Check PostgreSQL database logs and ensure no schema drift occurred.
