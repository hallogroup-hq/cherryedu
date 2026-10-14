# Cherry Edu Teams — Test Evidence Index

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## 1. Automated Test Suites & Evidence Registry

| Suite Name | Execution Command | Scope | Target Environment | Latest Result | Execution Log Location |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Payment Business Rule QA** | `npm run test:payment:qa` | Claim, provisional Pro, admin verify/reject, idempotency | Local Staging DB | **19/19 PASSED** | `teams/tests/verify_payment_qa.ts` |
| **Live Next.js & PostgreSQL** | `npm run test:teams:live` | Authoritative order catalog, learning anti-fabrication, assessment gates | Local Next.js & Staging DB | **17/17 PASSED** | `teams/tests/verify_nextjs_live.ts` |
| **Staging Integration & Security** | `npm run test:teams:staging` | Auth token tampering, cross-tenant isolation, monotonic lock, rubric gate | Staging DB (`b2b` schema) | **44/44 PASSED** | `teams/tests/verify_staging_integration.ts` |
| **Real HTTP Wire Integration** | `npm run test:teams:http` | End-to-end HTTP route handlers with real socket connections | Local HTTP server | **17/17 PASSED** | `teams/tests/verify_http_e2e.ts` |
| **Teams Standalone Auth** | `npm run test:auth` (Teams repo) | Cryptographic signature, tamper detection, expired tokens, fail-closed | Teams standalone app | **4/4 PASSED** | `cherryedu-teams/tests/verify_auth.ts` |
| **Teams Standalone Tenant Isolation** | `npm run test:tenant` (Teams repo) | Cross-tenant rejection, same-tenant allowed, suspended membership, outlet scopes | Teams standalone app | **4/4 PASSED** | `cherryedu-teams/tests/verify_tenant_isolation.ts` |
| **Teams B2B API QA Suite** | `npm run test:api` (Teams repo) | Organizations, invitations, assessments, outlets, cohorts, acceptance lifecycle | Staging DB (`b2b` schema) | **27/27 PASSED** | `cherryedu-teams/tests/verify_b2b_apis.ts` |
| **Curriculum & Competency Engine QA** | `npm run test:competency` (Teams repo) | Prerequisites, sequential unlocks, remediation lifecycle, multi-attempt gates | Staging DB (`b2b` schema) | **19/19 PASSED** | `cherryedu-teams/tests/verify_curriculum_competency.ts` |
| **Barista Application Experience QA** | `npm run test:barista` (Teams repo) | Learner progress, step completion, cross-learner protection, remediation notes | Staging DB (`b2b` schema) | **9/9 PASSED** | `cherryedu-teams/tests/verify_barista_experience.ts` |
| **Typecheck (B2C repo)** | `npm run typecheck` | Full repository TypeScript compilation | Static AST check | **0 Errors** | `tsconfig.json` |
| **Typecheck (Teams repo)** | `npm run typecheck` | Standalone Teams TypeScript compilation | Static AST check | **0 Errors** | `cherryedu-teams/tsconfig.json` |
| **Build (Teams repo)** | `npm run build` | Next.js 15 production build & static optimization | Node.js build worker | **Compiled (11/11 pages)** | `cherryedu-teams/.next` |

---

## 2. Test Execution Policy
- No gate advancement is permitted on skipped or simulated test outputs.
- Test suites must be executed against real database schemas without mock shortcuts.
