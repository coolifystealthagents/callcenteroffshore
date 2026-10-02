# October 2 Blog topic inventory

Status: drafting in progress; 9 of 12 complete as unpublished source drafts; not publication evidence

- Cycle label: `2026-10-02`
- Baseline: `e28cdc98f1cda27c2d90a6d84792134df818521f`
- Repository: `coolifystealthagents/callcenteroffshore`
- Production branch: `main`
- Draft branch: `cal93-blog-2026-10-02`
- Worktree: `worktrees/cal93-blog-2026-10-02`
- Site timezone: UTC (the renderer and latest manifests explicitly use UTC)
- Publication date: unset until the combined release first passes public verification
- Research dependency: CAL-92, run `03fd4c87-6f3f-423d-ba73-3f7e805f706e`; handoff not yet available at inventory time

These topics were selected after reviewing the homepage positioning, service routes, current Blog and Research source inventory, sitemap-backed data modules, and publishing ledgers through September 28. They support the site's real buyer journey: define a bounded queue, assign authority, test the workflow, and review evidence. Exact-title and exact-slug searches found no existing article in the production baseline.

## Proposed articles

1. **Call center abandoned-call recovery: when to call back and when to stop**  
   Slug: `call-center-abandoned-call-recovery`  
   Pillar: inbound customer care. Reader outcome: build a permission-aware recovery rule that distinguishes a dropped call from permission to make repeated outbound attempts. Primary evidence: customer contact preference, telephony events, client callback policy. CTA: `/services/inbound-customer-care`.

2. **Offshore call center queue-drain plans: closing a shift without orphaning work**  
   Slug: `offshore-call-center-queue-drain-plan`  
   Pillar: operations support. Reader outcome: decide which work can finish, transfer, pause, or roll into the next staffed window. Primary evidence: queue state, case age, scheduled coverage, accepted handoffs. CTA: `/services/operations-support`.

3. **Call center three-way calls: verify every participant before discussing the account**  
   Slug: `call-center-three-way-call-authorization`  
   Pillar: customer support. Reader outcome: control a call when a customer adds a relative, interpreter, vendor, or adviser without assuming that presence grants account authority. Primary evidence: participant identity, customer consent, authority scope, verification state, and disconnect events. CTA: `/services/customer-support`.

4. **Offshore call center silent-call troubleshooting: a safe first-response playbook**  
   Slug: `offshore-call-center-silent-call-troubleshooting`  
   Pillar: technical help desk. Reader outcome: distinguish customer-device, carrier, routing, headset, and fraud signals without blaming the caller or repeatedly exposing account details. Primary evidence: telephony diagnostics, timestamps, affected routes, controlled test calls. CTA: `/services/technical-help-desk`.

5. **Call center duplicate-ticket merging: preserve history before reducing the queue**  
   Slug: `call-center-duplicate-ticket-merging`  
   Pillar: admin support. Reader outcome: merge truly duplicate requests without erasing separate customers, obligations, attachments, or ownership. Primary evidence: customer identity, issue object, creation time, channel, dependencies, audit history. CTA: `/services/admin-support`.

6. **Philippines call center holiday coverage: map demand, authority, and handoffs**  
   Slug: `philippines-call-center-holiday-coverage-map`  
   Pillar: workforce management. Reader outcome: reconcile Philippine, client-market, and customer-facing calendars before promising coverage. Primary evidence: approved calendars, interval demand, roster acceptance, escalation availability. CTA: `/services/workforce-management`.

7. **Call center hold-time updates: what to say while ownership is unresolved**  
   Slug: `call-center-hold-time-update-standard`  
   Pillar: inbound customer care. Reader outcome: replace unsupported wait estimates with truthful progress, choices, and a safe callback route. Primary evidence: queue state, specialist acknowledgement, elapsed time, callback permission. CTA: `/services/inbound-customer-care`.

8. **Offshore call center translation requests: route meaning, not just language**  
   Slug: `offshore-call-center-translation-request-routing`  
   Pillar: customer support. Reader outcome: distinguish bilingual service, document translation, interpretation, and regulated-language decisions. Primary evidence: requested language, content type, urgency, approved resource, authority boundary. CTA: `/services/customer-support`.

9. **Call center customer-death notifications: a careful routing boundary**  
   Slug: `call-center-customer-death-notification-routing`  
   Pillar: sensitive inbound care. Reader outcome: receive a notification respectfully, collect only the minimum operational detail, and route legal or account decisions to authorized owners. Primary evidence: client bereavement policy, relationship/authority record, case audit trail. CTA: `/services/inbound-customer-care`.

10. **Offshore call center screen-sharing consent: control the support session**  
    Slug: `offshore-call-center-screen-sharing-consent`  
    Pillar: technical help desk. Reader outcome: define consent, visible scope, stop conditions, prohibited fields, recording rules, and session closure. Primary evidence: session event log, consent record, client security policy, access controls. CTA: `/services/technical-help-desk`.

11. **Call center outbound list suppression: stop revoked contacts across tools**  
    Slug: `call-center-outbound-list-suppression`  
    Pillar: outbound support. Reader outcome: propagate a stop request through dialer lists, CRM tasks, vendor files, and scheduled retries without treating deletion as universal. Primary evidence: request time, scope, list lineage, suppression result, downstream acknowledgements. CTA: `/services/outbound-calling`.

12. **Offshore call center knowledge-gap backlog: prioritize missing answers by risk**  
    Slug: `offshore-call-center-knowledge-gap-backlog`  
    Pillar: reporting and QA. Reader outcome: rank missing-answer work using customer impact, frequency, workaround safety, and decision ownership instead of raw question counts. Primary evidence: failed searches, escalations, repeat contacts, correction records. CTA: `/services/reporting-and-qa`.

## Editorial separation check

Each article has a distinct decision object and planned structure: recovery sequence, end-of-shift state machine, participant-and-authority map, diagnostic tree, record-consolidation test, calendar/coverage map, live waiting script, language-service taxonomy, sensitive-notification intake, consented remote session, cross-system suppression lineage, and risk-ranked knowledge backlog. Drafting must preserve those distinct arguments rather than reuse a common paragraph scaffold.

## Remaining gates

- Draft 12 independent articles with at least 900 substantive rendered words each.
- Add authoritative, current source URLs and checked dates for changeable claims.
- Incorporate the exact CAL-92 five-article handoff without allowing Research to push or deploy.
- Set the actual UTC publication date immediately before the sole combined production push.
- Run qualitative repeated-paragraph/shared-argument review and five-word-shingle overlap audit.
- Validate titles, routes, canonicals, structured dates, image rendering/responses, index and sitemap membership, typecheck, tests, and a clean production build.
- Fetch/rebase on current `origin/main`, push the combined head once without force, then stop production mutations for Browser Operator deployment.
