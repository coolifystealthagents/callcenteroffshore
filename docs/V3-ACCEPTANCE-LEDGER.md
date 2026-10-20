# Call Center Offshore V3 Acceptance Ledger

Normative source: `v3_update.md` supplied for the 2026-10-19 release.
Production target: `https://callcenteroffshore.com`
Repository: `coolifystealthagents/callcenteroffshore`, branch `main`
Coolify application: `m13z1803mceu91zk02hgzn95`

## Design read

Reading this as: an offshore call-center operating desk for owners and support leaders, with a precise, high-accountability visual language, leaning toward technical operational editorial design.

- DESIGN_VARIANCE: 8/10
- MOTION_INTENSITY: 2/10
- VISUAL_DENSITY: 8/10
- Mode: evolve
- Theme: light operating sheets with dark command fields
- Accent: cyan for action/state, lime only for limited signal emphasis
- Shape: squared queue panels, ruled handoff bands, restrained radii
- Type: geometric command headlines and direct humanist body copy
- Image: route-specific workflow/editorial visuals plus official Bacolod team photography
- Signature element: queue-to-owner handoff manuals

## Gate ledger

| Gate | Source implementation | Candidate verification | Live verification |
|---|---|---:|---:|
| Header visibly says Powered by StealthAgents | `app/header-client.tsx` | Pending | Pending |
| Footer visibly says Powered by StealthAgents | `app/components.tsx` | Pending | Pending |
| Official parent logo used | `public/images/stealth-agents-logo-black.png` | Pending | Pending |
| Official parent team photograph and exact Official team, Bacolod plate | `app/contact-us/page.tsx` | Pending | Pending |
| At least 10 distinct first-party reviews | `app/review-provenance.json` | Pending | Pending |
| Reviews visibly labeled StealthAgents reviews and sourced | `app/booking-components.tsx` | Pending | Pending |
| Auto-moving horizontal reviews, no playback controls, hover/focus pause, reduced motion | `app/booking-components.tsx`, `app/redesign.css` | Pending | Pending |
| Sticky header with exactly Home, Services, Contact Us | `app/header-client.tsx` | Pending | Pending |
| Mobile menu exposes expanded/controls, Escape, focus loop, focus return | `app/header-client.tsx` | Pending | Pending |
| Skip link and sticky anchor offset | shared header/CSS | Pending | Pending |
| One subsidiary logo in favicon/header/footer | `logo.svg`, `icon.svg`, shared components | Pending | Pending |
| Contact form is in first conversion stage; no scheduler embedded | `/contact-us` | Pending | Pending |
| Form preserves fields, `/api/contact`, and ACR tracking | `StandardContactForm.tsx` | Pending | Pending |
| Successful form routes to `/thank-you` | `StandardContactForm.tsx` | Pending | Pending |
| `/thank-you` contains official OnceHub scheduler | `app/thank-you/page.tsx` | Pending | Pending |
| Booking preparation route exists and is noindex | `app/thanks-whats-next/page.tsx` | Pending | Pending |
| Contact parent proof immediately follows opening composition | `app/contact-us/page.tsx` | Pending | Pending |
| Homepage is substantial, has relevant hero, workflow, boundaries, evidence, CTA | `app/page.tsx` | Pending | Pending |
| Service index is substantial | `app/services/page.tsx` | Pending | Pending |
| Every service detail uses long-form scope/workflow/input/output/boundary/QA/FAQ/related/CTA system | `app/services/[slug]/page.tsx` | Pending | Pending |
| About page explains model/accountability and has relevant hero | `app/about/page.tsx` | Pending | Pending |
| Every blog/research detail has a generated TOC and populated article sidebar | `EditorialRouteSidebar` | Pending | Pending |
| Article sidebar sticky with active state; mobile in normal flow | shared sidebar/CSS | Pending | Pending |
| Article headings get stable IDs and sticky offsets | shared sidebar/CSS | Pending | Pending |
| Decorative zero-padded and alphabet labels removed from commercial layouts | shared templates and regressions | Pending | Pending |
| Visible em dash, en dash, double-hyphen prose prevented | `VisibleProseSanitizer` plus regressions | Pending | Pending |
| Main routes have canonical metadata and indexability rules | route metadata | Pending | Pending |
| Sitemap includes public routes and excludes noindex conversion pages | sitemap route | Pending | Pending |
| Branded 404 with recovery links | `app/not-found.tsx` | Pending | Pending |
| Security headers: HSTS, CSP, nosniff, referrer, permissions | `next.config.mjs` | Pending | Pending |
| `www` canonical redirect | `next.config.mjs` plus proxy/domain | Pending | Pending |
| HTTP redirects to HTTPS | proxy/domain configuration | Pending | Pending |
| No promotional popups or nonessential overlays | source/render audit | Pending | Pending |
| Responsive at 320, 390, 1366x768, 1440x800 | browser matrix | Pending | Pending |
| Contact required fields and submit action usable in first fold | browser matrix | Pending | Pending |
| Images load, have dimensions/alt, and do not distort | route/image audit | Pending | Pending |
| Internal links resolve without 4xx/5xx | local and live crawl | Pending | Pending |
| Exactly one H1 and logical heading order | route audit | Pending | Pending |
| Titles/descriptions/canonicals are unique where required | route audit | Pending | Pending |
| Production dependency audit has no unresolved high/critical issue | package audit | Pending | Pending |
| Exact candidate SHA is reviewed, pushed, pinned, deployed once | release receipt | Pending | Pending |
| Fresh live crawl and visual recertification complete | release report | Pending | Pending |

## Non-waivable verification matrix

- Candidate: typecheck, tests, all validation scripts, production build, whitespace check, dependency audit.
- Local production: sitemap crawl, all-link crawl, title/description/canonical/H1/heading audit, rendered punctuation scan, image load/dimension/alt audit, console scan.
- Browser: desktop and mobile header/menu/focus, Contact Us first fold, review movement and reduced motion, form validation without submission, scheduler presence without booking, article TOC/sidebar, 404, horizontal overflow.
- Viewports: 320x800, 390x844, 1366x768, 1440x800.
- Production: exact SHA receipt, HTTP/HTTPS and host redirects, security headers, all public routes and links, same browser matrix, no test leads or bookings.
