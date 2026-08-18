import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/blog-aug18.ts'), 'utf8');
const data = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const detail = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/daily-content/2026-08-18/blog.json'), 'utf8'));

const routes = manifest.map((entry) => entry.route);
const slugs = routes.map((route) => route.replace('/blog/', ''));
const failures = [];
const count = (value, pattern) => (value.match(pattern) ?? []).length;

if (manifest.length !== 22 || new Set(routes).size !== 22) failures.push('manifest does not contain 22 unique routes');
if (count(source, /published:'2026-08-18'/g) < 1) failures.push('source does not directly bind the campaign date');
if (!data.includes('...augustEighteenBlogPosts')) failures.push('August 18 records are not loaded into blog data');
if (!data.includes('blogPosts.splice(0, blogPosts.length, ...newestFirstBlogPosts)')) failures.push('newest-first ordering is not applied');
if (!detail.includes('datePublished: p.published') || !detail.includes('<time dateTime={p.published}>Published {displayDate(p.published)}</time>')) failures.push('visible or structured date binding is missing');
if (!sitemap.includes('...blogs.map((b:any)=>`/blog/${b.slug}`)')) failures.push('Blog sitemap mapping is missing');
for (const slug of slugs) {
  if (!source.includes(`'${slug}'`)) failures.push(`missing source record: ${slug}`);
}

const built = path.join(root, '.next/server/app/blog');
for (const slug of slugs) {
  const html = path.join(built, `${slug}.html`);
  if (!fs.existsSync(html)) { failures.push(`missing built route: ${slug}`); continue; }
  const rendered = fs.readFileSync(html, 'utf8');
  if (!rendered.includes('2026-08-18') || !rendered.includes('August 18, 2026')) failures.push(`date not rendered: ${slug}`);
  if (!rendered.includes(`https://callcenteroffshore.com/blog/${slug}`)) failures.push(`canonical not rendered: ${slug}`);
  const words = rendered.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  if (words < 900) failures.push(`body below 900 rendered words: ${slug} (${words})`);
}

// The native paragraph builder is deliberately expanded to ten substantive
// paragraphs; the production build then proves those records reach each route.
if (count(source, /body:paragraph\(focus,decision,example,measure\)/g) !== 1) failures.push('native body loader shape changed');

if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`PASS: ${manifest.length} August 18 Blog routes; direct date binding, loader, ordering, visible/structured dates, canonicals, sitemap, and production routes verified.`);
