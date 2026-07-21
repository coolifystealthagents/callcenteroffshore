# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the site's public marketing and editorial copy, including the homepage, shared site data, service routes, guide index and article template, contact form, thank-you page, shared CTA, footer, and metadata.

## Reviewed files

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## What changed

- Replaced four repeated, generic service descriptions with call-center-specific tasks, controls, and first-week steps.
- Repaired an incoherent guide title and rewrote guide titles and summaries around the search intent of each route.
- Removed broad staffing copy about unrelated bookkeeping, development, and marketing roles.
- Reworked the contact form and shared CTA around call types, coverage hours, phone systems, scripts, call reviews, and manager escalations.
- Replaced the placeholder thank-you message with a useful confirmation and next step.
- Removed an unsupported savings block that was not used on the current site.
- Cut corporate filler, a forced "more than" contrast, an em dash, vague provider praise, and repeated template language.
- Made the fallback guide copy specific to offshore call center planning instead of generic remote staffing.

## Final anti-AI pass

The remaining copy was read for inflated claims, canned contrasts, rule-of-three padding, em-dash habits, vague praise, chatbot language, robotic fragments, and generic upbeat conclusions. The public copy now uses direct language and concrete call-center details. Existing source links and factual guardrails in the provider guide were kept intact.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded so this marketing audit would not change legal meaning. Route slugs, schema types, citations, and conversion paths were preserved. No testimonials, client results, credentials, first-person stories, or new performance claims were added.
