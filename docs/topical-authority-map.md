# Call Center Offshore topical-authority map

Last reviewed: 2026-08-19

## Purpose and boundaries

This ledger connects an existing Philippines-focused page to the closest existing service route. It is a publishing aid, not a claim that the linked service is right for every buyer.

Keep each page focused on one planning question. Add a service handoff only where the reader has reached a real decision point. Do not turn broad Philippines market evidence into a promise about an individual provider, agent, price, or staffing date.

## Existing service pillars

This table is the source-of-truth inventory from `app/fleet-data.ts` as reviewed on 2026-08-26. A planned handoff must use one of these routes. It must not substitute a similar-sounding service route just because the source page mentions a related task.

| Service route | Buyer problem it answers | Keep with the buyer |
| --- | --- | --- |
| `/services/inbound-customer-care` | A support queue needs a clear first response and a safe handoff. | Refunds, exceptions, and sensitive decisions. |
| `/services/technical-help-desk` | A team needs tier-one troubleshooting and complete escalation notes. | Complex fixes, unapproved system changes, and privileged access. |
| `/services/order-and-billing-support` | Order and billing questions need clean notes and a finance exception path. | Money movement, bank changes, credits, and disputes. |
| `/services/appointment-scheduling` | A leader needs calendar and meeting coordination with written rules. | External promises, travel spend, and rescheduling exceptions. |
| `/services/after-hours-answering` | Customers need an approved response outside local working hours. | What counts as urgent and who is on call. |
| `/services/outbound-lead-qualification` | A sales team needs approved research and appointment support. | Audience, message approval, consent, and commercial promises. |
| `/services/customer-retention-support` | An account team needs repeatable onboarding and follow-up support. | Contract, renewal, scope, and sensitive customer decisions. |
| `/services/ecommerce-contact-center` | A store needs routine order, product, return, and customer-operation support. | Refunds, payment changes, supplier decisions, and inventory exceptions. |
| `/services/healthcare-scheduling-support` | A practice needs non-clinical appointment coordination. | Clinical decisions, urgent triage, and privacy rules. |
| `/services/call-quality-monitoring` | A manager needs evidence from call samples and a scorecard. | Scorecard approval and sensitive-case review. |

## Supporting pages and planned contextual handoffs

Artifact review: 2026-09-10. The table below records only routes and service destinations that are present in the current source and production build. A generic legacy blog record is not a safe handoff target until it has its own body and a specific decision point.

| Existing supporting route | Reader question | Closest existing destination | Handoff point to use | Status |
| --- | --- | --- | --- | --- |
| `/blog/call-center-outsourcing-pilot-plan` | How should a team test an offshore call center before expanding? | `/services/call-quality-monitoring` | After the reader has set a sample and scorecard. | Delivered through the typed `contextualService` field. |
| `/research/call-center-outsourcing-philippines-evidence-guide` | What does broad Philippine market evidence prove, and what still needs testing? | `/services/call-quality-monitoring` | After the narrow-pilot and shared-scorecard guidance. | Delivered through the typed research `contextualService` panel; its two route-local service links are intentional. |
| `/blog/after-hours-call-answering-workflow` | What needs to happen when calls arrive after normal hours? | `/services/after-hours-answering` | After urgent categories and the next-shift handoff are defined. | Deferred: current legacy record has no source-owned body or decision paragraph. |
| `/blog/call-center-qa-scorecard` | What should a useful QA scorecard measure? | `/services/call-quality-monitoring` | After the reader chooses the review fields and calibration owner. | Deferred: current legacy record has no source-owned body or decision paragraph. |
| `/blog/customer-support-call-center-launch` | How should a team launch a customer support queue? | `/services/inbound-customer-care` | After the reader has narrowed the first queue and escalation path. | Deferred: current legacy record has no source-owned body or decision paragraph. |
| `/blog/appointment-setting-call-center-guide` | How should an appointment-setting queue protect calendar rules? | Confirm an existing scheduling service before choosing one. | Only after the source has a non-clinical scheduling decision and confirmed destination. | Deferred: the prior healthcare-service destination is not in the current service inventory. |
| `/blog/call-center-outsourcing-contract-checklist` | What should a buyer check before signing? | `/services/order-and-billing-support` | Only where order or billing exception ownership is discussed. | Deferred: current legacy record has no source-owned body or decision paragraph. |

## Next safe implementation

Before adding a legacy-blog handoff, first make the selected source own a short, route-specific body that names one buyer decision, the permitted preparatory work, and the owner for exceptions. Then use the optional `contextualService` field in `app/data.ts`, keep the label and sentence specific to that source, and refresh the source page date, Article schema date, and sitemap `lastmod` together.

For research pages, use the typed `contextualService` panel in `app/fleet-data.ts` when the reader reaches a concrete buyer action. Keep the service link beside a stated limitation or next step, and retain the methodology, limitations, source list, and Philippines-only scope.

## Audit checks before a reader-facing link

1. Confirm the destination slug is present in `fleetServices` and generated by `/services/[slug]`.
2. Confirm the source route is present in `blogPosts` or `researchPosts` and is generated after `npm run build`.
3. Confirm the new anchor, destination href, and source-specific decision sentence appear in the built source artifact. Confirm an obsolete href is absent if replacing a link.
4. Check the source route's XML record by exact `<loc>` and `<lastmod>` instead of a whole-sitemap substring search.
5. For a public release, keep one deployment handle, then cache-bust and verify the exact source marker on the apex and `www` hosts before calling the change live.
