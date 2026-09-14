# Service-to-research link ledger

Status: source-only planning record, 2026-08-24. This file does not add reader-facing links by itself.

## Existing pillars

- `/services/inbound-customer-care` is the customer-support service page.
- `/services/after-hours-answering` is the after-hours queue service page.
- `/services/call-quality-monitoring` is the quality-review service page.

## Confirmed supporting routes and next candidates

| Supporting route | Reader's next question | Existing service destination | Current contextual service link | Next bounded action |
| --- | --- | --- | --- | --- |
| `/research/offshore-call-center-context-receipt-study` | How can a team keep customer context when a call moves between queues? | `/services/inbound-customer-care` | Present | Preserve the existing handoff to customer-care coverage; do not duplicate it. |
| `/research/offshore-call-center-callback-ownership-study` | Who owns a promised callback after a shift or queue change? | `/services/after-hours-answering` | Delivered locally — one typed route-local next-step link; rendered source `ee8710157cbb1d4a2a541c164baefd2888d7d55e` | Do not add another CTA. Retain the existing handoff, which frames approved queues, escalation ownership, and next-shift rules rather than a performance promise. |
| `/research/offshore-call-center-reviewer-agreement-study` | How can a manager test whether quality reviewers use the same rule? | `/services/call-quality-monitoring` | Delivered locally — one typed route-local next-step link; rendered source `d2c288c3a72ea2973101c673d40713d6f1ef7a3b` | Do not add another CTA. The local artifact has the client-approved scorecard and manager-owned sensitive-case boundary. Public rollout is pending: cache-busted apex and www still omit the marker and href, and both served sitemap records remain at `2026-08-21`. |

## Guardrails before implementation

- Keep the original research boundaries. The studies use scenario-based evidence and do not establish provider-wide results, quality rankings, legal sufficiency, or future performance.
- Use the relevant body paragraph, not navigation or footer text, and link each study to one service page only.
- Re-check both routes' generated H1s and sitemap entries before each reader-facing edit. Update the specific route freshness only if the public page changes.
- Re-check that the proposed href is absent from the source study before insertion. Do not add the candidate while a separate writer owns the repository.

## Release status — 2026-09-14

- Rendered source: `d2c288c3a72ea2973101c673d40713d6f1ef7a3b` added the reviewer-agreement study's typed `/services/call-quality-monitoring` handoff and refreshed its local Article, Open Graph, and sitemap date to `2026-09-14`.
- Local artifact proof: the generated source route has the expected H1, one route-local quality-service href, the "Turn review evidence into a quality plan" marker, and sitemap `(loc,lastmod)` `2026-09-14`.
- Public evidence: cache-busted apex and www responses are HTTP 200 text/html with the expected H1 and canonical, but each omits the route-local marker and service href; their sitemap entries remain `2026-08-21`.
- Preserve rendered-source commit `d2c288c3a72ea2973101c673d40713d6f1ef7a3b`. No repository-approved deployment target was available, so no deployment was triggered. Classification: `deployment_pending_public_verification / public_stale`.
