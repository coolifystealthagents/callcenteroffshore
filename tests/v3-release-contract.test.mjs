import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.name === '.next' || entry.name === 'node_modules' || entry.name === '.git') return [];
    return entry.isDirectory() ? walk(full) : [full];
  });
}

test('shared header and footer satisfy parent-brand and navigation contract', () => {
  const header = read('app/header-client.tsx');
  const chrome = read('app/components.tsx');
  for (const label of ['Home', 'Services', 'Contact Us']) assert.match(header, new RegExp(`>${label}<`));
  assert.match(header, /aria-label="Powered by StealthAgents"/);
  assert.match(header, />Powered by <strong>StealthAgents<\/strong><\/a>/);
  assert.match(header, /header-brand-copy[\s\S]*logo-name[\s\S]*header-parent-brand/);
  assert.doesNotMatch(read('app/page.tsx'), /cco-floating-card|cco-float-one|cco-float-two/);
  assert.match(header, /aria-expanded=\{open\}/);
  assert.match(header, /aria-controls="primary-navigation"/);
  assert.match(header, /event\.key === 'Escape'/);
  assert.match(header, /event\.key !== 'Tab'/);
  assert.match(header, /skip-link/);
  assert.match(chrome, /Powered by StealthAgents/);
  assert.match(chrome, /stealth-agents-logo-black\.png/);
});

test('review provenance contains ten unique sourced StealthAgents reviews', () => {
  const data = JSON.parse(read('app/review-provenance.json'));
  assert.match(data.source, /^https:\/\/stealthagents\.com\/?/);
  assert.equal(data.records.length, 10);
  assert.equal(new Set(data.records.map(record => record.name)).size, 10);
  for (const record of data.records) {
    assert.ok(record.headline && record.body && record.name && record.detail);
  }
  const rail = read('app/booking-components.tsx');
  const css = read('app/redesign.css');
  assert.match(rail, /StealthAgents reviews/);
  assert.match(rail, /requestAnimationFrame/);
  assert.doesNotMatch(rail, /<button|Pause testimonials|Play testimonials|pagination/i);
  assert.match(rail, /prefers-reduced-motion/);
  assert.match(css, /\.sa-testimonial-track\{animation:none!important\}/);
  assert.match(css, /\.sa-testimonial-track>\.sa-testimonial-card:nth-child\(n\)\{display:flex!important/);
});

test('contact page preserves the form-first three-stage journey', () => {
  const contact = read('app/contact-us/page.tsx');
  const form = read('app/contact-us/StandardContactForm.tsx');
  const thanks = read('app/thank-you/page.tsx');
  const preparation = read('app/thanks-whats-next/page.tsx');
  assert.match(contact, /StandardContactForm endpoint="\/api\/contact" encoding="form"/);
  assert.doesNotMatch(contact, /go\.oncehub\.com/);
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
  assert.match(form, /acrTracker\?\.trackLead/);
  assert.match(thanks, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(thanks, /\/thanks-whats-next/);
  assert.match(preparation, /robots: \{ index: false, follow: false \}/);
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /stealth-agents-team\.webp/);
});

test('service templates satisfy the long-form content contract', () => {
  const index = read('app/services/page.tsx');
  const detail = read('app/services/[slug]/page.tsx');
  for (const phrase of ['Inputs', 'Boundaries', 'Outputs', 'Review', 'How to choose the first lane']) assert.match(index, new RegExp(phrase));
  for (const phrase of ['Work in scope', 'Client decisions and boundaries', 'Controlled launch', 'A practical operating workflow', 'Quality should be visible', 'Questions to settle before launch', 'Related services']) assert.match(detail, new RegExp(phrase));
  assert.match(detail, /FAQPage/);
  assert.match(detail, /service\.image/);
});

test('all editorial routes receive the shared complete TOC and sidebar system', () => {
  const layout = read('app/layout.tsx');
  const sidebar = read('app/editorial-route-sidebar.tsx');
  assert.match(layout, /EditorialRouteSidebar/);
  assert.match(sidebar, /querySelectorAll<HTMLHeadingElement>\('h2, h3'\)/);
  assert.match(sidebar, /IntersectionObserver/);
  assert.match(sidebar, /is-active/);
  assert.match(sidebar, /Related services/);
  assert.match(sidebar, /Discuss your workflow/);
});

test('security, redirect, canonical, sitemap, 404, and logo contracts exist', () => {
  const config = read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(config, new RegExp(header));
  assert.match(config, /script-src[^;]*https:\/\/static\.cloudflareinsights\.com/);
  assert.match(config, /connect-src[^;]*https:\/\/cloudflareinsights\.com/);
  assert.match(config, /www\.callcenteroffshore\.com/);
  assert.match(config, /https:\/\/callcenteroffshore\.com/);
  assert.match(read('app/sitemap.xml/route.ts'), /'\/about'/);
  assert.doesNotMatch(read('app/sitemap.xml/route.ts'), /'\/thank-you'|'\/thanks-whats-next'/);
  assert.match(read('app/not-found.tsx'), /Contact Us/);
  assert.match(read('app/components.tsx'), /LogoMark/);
  assert.match(read('app/header-client.tsx'), /\/logo\.svg/);
  assert.match(config, /\/icon\.svg/);
});

test('commercial templates do not contain decorative zero-padded systems', () => {
  for (const file of ['app/page.tsx', 'app/services/page.tsx', 'app/services/[slug]/page.tsx', 'app/contact-us/page.tsx', 'app/blog/page.tsx']) {
    const source = read(file);
    assert.doesNotMatch(source, />\s*0[1-9]\s*</, file);
    assert.doesNotMatch(source, /padStart\(2/, file);
    assert.doesNotMatch(source, /GUIDE \/ /, file);
  }
});

test('all checked-in JSON files are valid JSON', () => {
  for (const file of walk(path.join(root, 'app')).filter(file => file.endsWith('.json'))) {
    assert.doesNotThrow(() => JSON.parse(fs.readFileSync(file, 'utf8')), path.relative(root, file));
  }
});

test('all declared draft article paths exist and duplicate October route batch is not aggregated', () => {
  for (const file of walk(path.join(root, 'app')).filter(file => file.endsWith('.ts') || file.endsWith('.tsx'))) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/"draftPath":\s*"([^"]+)"/g)) {
      assert.ok(fs.existsSync(path.join(root, match[1])), `${path.relative(root, file)} references missing ${match[1]}`);
    }
  }
  const data = read('app/data.ts');
  assert.doesNotMatch(data, /october8BlogPosts/);
  assert.match(data, /october9BlogPosts/);
});

test('contact form has one submission owner and preserves canonical lead fields', () => {
  const globalClient = read('app/acr-client.tsx');
  const form = read('app/contact-us/StandardContactForm.tsx');
  const api = read('app/api/contact/route.ts');
  assert.match(globalClient, /dataset\.acrOwner==='component'/);
  assert.match(form, /data-acr-owner="component"/);
  assert.match(form, /name="countryCode"/);
  assert.doesNotMatch(form, /window\.location\.assign\("\/thank-you"\);\s*return;/);
  assert.match(api, /text\(form, 'phone'[^\n]*text\(form, 'countryCode'/);
  assert.match(api, /text\(form, 'company'[^\n]*text\(form, 'companyName'/);
  assert.match(api, /const referral = text\(form, 'referral'/);
  assert.match(form, /source: "contact-form"/);
  assert.match(form, /referralSpecify:/);
  assert.match(api, /boundedFormData\(request, contentType\)/);
  assert.match(api, /total > MAX_BODY_BYTES/);
  assert.match(api, /const referralSpecify = text\(form, 'referralSpecify'/);
  assert.match(api, /`Other: \$\{referralSpecify\}`/);
});

test('responsive attribution and canonical route aliases remain release-safe', () => {
  const css = read('app/redesign.css');
  const config = read('next.config.mjs');
  const thanks = read('app/thank-you/page.tsx');
  const pagination = read('app/blog/page/[page]/page.tsx');
  assert.match(css, /@media\(max-width:850px\)\{[^}]*[\s\S]*?\.cco-hero-rework \.cco-hero-grid\{grid-template-columns:1fr\}/);
  assert.match(css, /@media\(max-width:600px\)\{[\s\S]*?\.header-parent-brand\{[^}]*white-space:nowrap/);
  assert.match(config, /source: '\/blog\/page\/1', destination: '\/blog'/);
  assert.match(thanks, /alternates: \{ canonical: 'https:\/\/callcenteroffshore\.com\/thank-you' \}/);
  assert.doesNotMatch(pagination, /page: String\(index \+ 1\)/);
  assert.match(pagination, /dynamicParams = false/);
  assert.match(pagination, /parseBlogPage\(page\)/);
  const catalog = read('app/blog-catalog.ts');
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(catalog, /export const blogPageCount/);
  assert.match(sitemap, /blogPageCount/);
});

test('proxy-aware canonical middleware preserves path and rejects host injection', () => {
  const middleware = read('middleware.ts');
  assert.match(middleware, /JSON\.parse\(visitor\)/);
  assert.match(middleware, /parsed\.scheme === 'http' \|\| parsed\.scheme === 'https'/);
  assert.match(middleware, /host !== APEX_HOST && host !== WWW_HOST/);
  assert.match(middleware, /destination\.pathname = request\.nextUrl\.pathname/);
  assert.match(middleware, /destination\.search = request\.nextUrl\.search/);
  assert.match(middleware, /NextResponse\.redirect\(destination, 308\)/);
  assert.doesNotMatch(middleware, /endsWith\(/);
});

test('visible prose punctuation is sanitized and source content has no unicode dash characters', () => {
  const sanitizer = read('app/visible-prose-sanitizer.tsx');
  assert.match(sanitizer, /\[—–\]/);
  for (const file of walk(path.join(root, 'app')).filter(file => /\.(tsx?|json)$/.test(file))) {
    if (file.endsWith('visible-prose-sanitizer.tsx')) continue;
    const source = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(source, /[—–]/, path.relative(root, file));
  }
});
