# September 28 combined release handoff

- Task: CAL-91 Daily Blog Publishing
- Role: sole combined-release integrator
- Repository: `coolifystealthagents/callcenteroffshore`
- Production branch: `main`
- Baseline and fetched remote SHA: `8487b2b858434ca306524af46b798093bdd06cf7`
- Durable Blog branch: `cal91-blog-2026-09-28`
- Durable Blog worktree: `worktrees/cal91-blog-2026-09-28`
- Paired Research task: CAL-90
- Research handoff: not received as of 2026-09-28T14:10Z; no task comments and the visible `cal90-research-2026-09-28` branch remains at the baseline SHA.
- Deployment rule: neither routine submits deployment. After the one combined non-force push, report the exact SHA and stop production mutations for the Browser Operator.

## Current acceptance state

The twelve Blog topics have been checked against the baseline repository by exact slug and are new there. This is only an inventory checkpoint. No item is accepted or described as published: article bodies, current authoritative sources, media reuse, rendered word counts, shingle audit, manifests, ledgers, combined validation/build, Research integration, rebase, and the single push are still outstanding.

The publication date remains unset. It must be reconciled immediately before the sole combined push to the site's actual local calendar date, then bound consistently in source, rendered visible date, structured data, sitemap/index metadata, manifest, and ledger.

## Draft checkpoint

`offshore-call-center-payment-card-data-boundary` now has a 1,287-word substantive draft at `docs/publishing/drafts/2026-09-28/offshore-call-center-payment-card-data-boundary.md`. It cites current PCI SSC primary sources, contains no em or en dashes, and passed a targeted humanizer-pattern scan. It remains deliberately unwired and is not accepted as published content until the exact-twelve set, pairwise overlap audit, renderer integration, combined validation, and release gates pass.

## Combined draft audit, attempt 1

The exact-five Research handoff commits `6a44c157fd4769d5f07e18430b558c2454d93e61` and `38fdbf748fa4eff216ca84b1e84ad0e8a2e82fbf` were integrated locally. All twelve Blog routes render and exceed 900 words; counts range from 1,515 to 1,556. TypeScript and the clean combined production build pass. The Blog maximum pairwise five-word-shingle Jaccard overlap is 69.43%, between `offshore-call-center-ticket-priority-override` and `offshore-call-center-call-summary-correction`. This fails the under-50% release gate. The batch must not be pushed until shared analytical scaffolding is replaced with topic-specific sections and the audit passes. Padding or cosmetic substitutions are not an acceptable correction.

## Combined draft audit, corrected attempt 2

The shared Blog scaffold was replaced with analysis anchored repeatedly to each topic's own trigger, evidence record, authority boundary, ordinary case, failure case, measures, owner, and source basis. All twelve rendered bodies pass depth at 1,613 to 1,742 words. Maximum pairwise five-word-shingle Jaccard is now 44.88%, between `call-center-customer-callback-consent` and `call-center-refund-status-inquiry`, which passes the required threshold. The targeted humanizer scan found no em or en dashes or flagged stock phrases. TypeScript and a new clean combined production build pass with only the repository's existing CSS compatibility warnings.
