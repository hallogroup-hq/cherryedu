# CherryEdu deployment controls — branch-only development

**Owner direction (2026-10-13):** Never deploy or merge to production automatically. Accumulate and test changes before creating a preview. Keep Vercel Hobby usage low.

## Current operational protection

- Vercel project: `cherryedu` (`prj_nbIrTj6l3coc8rfEAHFEu6guoIel`).
- **Project-level auto preview deployments switched off** via `previewDeploymentsDisabled: true`. This prevents every feature-branch push from creating a preview. To deploy one deliberate preview later, explicitly temporarily allow previews and then restore this setting, only when the project owner requests.
- Project Ignored Build Step configured to skip production: `if [ "$VERCEL_ENV" = "production" ]; then exit 0; else exit 1; fi`. IMPORTANT: Vercel states ignored/canceled builds **still count toward some deployment limits**. Do not treat this as the primary quota control, and never push/merge `main` without explicit owner approval.
- **Version-controlled extra safety**: `vercel.json` contains `git.deploymentEnabled: false`; automatic Vercel Git deployments are not requested by this source branch. This does not forbid an intentional manual API/CLI preview.
- No `--prod`, `vercel promote`, production API deployment, production environment migrations, alias assignment to production, merging into `main`, or force push of `main` without explicit owner permission.
- `main` and legacy student course stay unchanged. Roaster V2 work continues in `feat/roaster-specialization-v2-curriculum` / PR #8. Preserve all learner accounts, paid access, progress, grades and existing URLs.

## Development loop

1. Write code, docs, content and changes only on feature branches. Prefer **squashed/batched commits** when practical to limit unnecessary CI work.
2. Run static content audits, TypeScript, build and Playwright through GitHub Actions/local tooling **without triggering Vercel**.
3. Fix failures, and re-run checks on the exact candidate commit.
4. When the owner explicitly asks to see a preview, gather approved work on one named preview/candidate branch. Enable one targeted preview deployment (manual action), verify **target=preview, never production**, note git commit and URL. Restore auto-preview prevention after initiating it. Do not create a new preview just because another small copy fix was committed.
5. During review, do not publish student routes or silently replace `path-roaster`. Treat preview as review infrastructure, not a certificate of correctness.
6. Only after separate express production authorization: audit/plan migration and integrations, verify credentials/payment/progress safety and rollback, and perform a separately approved release. Before any such release, review these anti-auto-deploy controls deliberately.

## What the current implementation is not

- Github Actions `npm run build` **does not deploy production**.
- Opening a draft GitHub pull request **does not merge it**.
- Preview deployments made by the existing Git integration before this policy also consumed Vercel quota. Some may still exist, but do not create another preview casually.
- Vercel's ignored build command alone is insufficient to avoid every quota use; project preview disabling and `git.deploymentEnabled` are the primary auto-preview controls.
- We have **not** deployed production, published Roaster V2, or merged PR #8 as part of this policy.

## Owner approval checkpoint

Before running a preview deployment, obtain explicit confirmation for that preview batch and exact source head. Before production, request a **separate** approval and disclose affected routes, data and release risks. Avoid treating prior approval for content authoring as approval for deployment.
