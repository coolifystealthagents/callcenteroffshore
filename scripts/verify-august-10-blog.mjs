import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = new URL('..', import.meta.url);
const read = (path) => fs.readFileSync(new URL(path, root), 'utf8');
const manifest = JSON.parse(read('.paperclip/aug10-2026/blog.json'));
const data = read('app/data.ts');
const detail = read('app/blog/[slug]/page.tsx');
const sitemap = read('app/sitemap.xml/route.ts');
const failures = [];
const expectedCommit = 'b479df3';
const parent = execFileSync('git', ['show', `${expectedCommit}^:app/data.ts`], { encoding: 'utf8' });
const introduced = execFileSync('git', ['show', `${expectedCommit}:app/data.ts`], { encoding: 'utf8' });
const hasSlug = (source, slug) => new RegExp(`\\['${slug.replaceAll('-', '\\-')}',`).test(source);
const sourceHasDate = data.includes("published: '2026-08-10'") && data.includes('scheduledBlogTopics.map') && data.includes('published: \'2026-08-10\'');

if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') failures.push('manifest contract/schema mismatch');
if (manifest.targetDate !== '2026-08-10' || manifest.family !== 'blog' || manifest.domain !== 'callcenteroffshore.com') failures.push('manifest scope mismatch');
if (manifest.entries.length < manifest.minimum || manifest.entries.length < 22) failures.push(`accepted count ${manifest.entries.length} is below minimum`);
const slugs = manifest.entries.map((entry) => entry.slug);
if (new Set(slugs).size !== slugs.length) failures.push('manifest slugs are not unique');
for (const entry of manifest.entries) {
  if (!/^[-a-z0-9]+$/.test(entry.slug) || entry.route !== `/blog/${entry.slug}`) failures.push(`family route mismatch for ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || entry.provenance !== 'original-aug10-batch' || entry.introducedByCommit !== 'b479df3') failures.push(`traceability mismatch for ${entry.slug}`);
  if (entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') failures.push(`date mismatch for ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) failures.push(`rendered date fields incomplete for ${entry.slug}`);
  if (!hasSlug(data, entry.slug) || !sourceHasDate) failures.push(`source record/date missing for ${entry.slug}`);
  if (hasSlug(parent, entry.slug)) failures.push(`slug was already present before ${entry.slug}`);
  if (!hasSlug(introduced, entry.slug)) failures.push(`slug was not introduced by ${expectedCommit}: ${entry.slug}`);
  const builtPath = new URL(`.next/server/app/blog/${entry.slug}.html`, root);
  if (!fs.existsSync(builtPath)) failures.push(`built article is missing for ${entry.slug}`);
  else {
    const built = fs.readFileSync(builtPath, 'utf8');
    if (!built.includes('datePublished') || !built.includes('2026-08-10') || !built.includes('dateTime=\"2026-08-10\"')) failures.push(`built rendered date missing for ${entry.slug}`);
    if (!built.includes(`https://callcenteroffshore.com/blog/${entry.slug}`)) failures.push(`built canonical route missing for ${entry.slug}`);
  }
  if (!detail.includes('https://callcenteroffshore.com/blog/')) failures.push('blog canonical base missing');
  if (!sitemap.includes('...blogs.map')) failures.push('blog sitemap mapping missing');
}
if (!data.includes('blogPosts.splice(0, blogPosts.length, ...newestFirstBlogPosts)')) failures.push('Blog index ordering is not applied to shared blog data');
if (!detail.includes('datePublished: p.published') || !detail.includes('<time dateTime={p.published}>Published {p.published}</time>')) failures.push('rendered date metadata/visible date is missing');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`PASS: ${manifest.entries.length} unique August 10 Blog entries passed source, provenance, rendered-date, canonical, sitemap, and index checks.`);
