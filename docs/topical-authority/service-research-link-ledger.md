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
| `/research/offshore-call-center-callback-ownership-study` | Who owns a promised callback after a shift or queue change? | `/services/after-hours-answering` | Absent | Add one body link only after checking the rendered study copy and service-page scope together. The link must frame approved queues, escalation, and handoff rules, not a performance promise. |
| `/research/offshore-call-center-reviewer-agreement-study` | How can a manager test whether quality reviewers use the same rule? | `/services/call-quality-monitoring` | Absent | Add one body link only after checking the rendered study copy and service-page scope together. The link must point to a client-approved scorecard and calibration controls. |

## Guardrails before implementation

- Keep the original research boundaries. The studies use scenario-based evidence and do not establish provider-wide results, quality rankings, legal sufficiency, or future performance.
- Use the relevant body paragraph, not navigation or footer text, and link each study to one service page only.
- Re-check both routes' generated H1s and sitemap entries before each reader-facing edit. Update the specific route freshness only if the public page changes.
- Re-check that the proposed href is absent from the source study before insertion. Do not add the candidate while a separate writer owns the repository.
