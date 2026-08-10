import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const targetDate = '2026-08-10';
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const sourcePath = 'app/fleet-data.ts';
const source = fs.readFileSync(path.join(root, sourcePath), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const indexHtml = fs.readFileSync(path.join(root, '.next/server/app/research.html'), 'utf8');

if (manifest.entries.length < Math.max(10, manifest.minimum)) throw new Error('accepted count below minimum');
if (manifest.family !== 'research' || manifest.domain !== 'callcenteroffshore.com') throw new Error('manifest identity mismatch');
if (!sitemap.includes('researchPosts.map')) throw new Error('research sitemap membership is not wired');
if (!route.includes('datePublished:post.published') || !route.includes('publishedTime:post.published') || !route.includes('<time dateTime={post.published}>')) throw new Error('render date fields are not wired');

const sourceLines = source.split('\n');
const slugs = new Set();
for (const entry of manifest.entries) {
  if (slugs.has(entry.slug)) throw new Error(`duplicate slug: ${entry.slug}`);
  slugs.add(entry.slug);
  if (entry.route !== `/research/${entry.slug}` || !entry.route.startsWith('/research/')) throw new Error(`wrong family route: ${entry.slug}`);
  if (entry.sourcePath !== sourcePath || !fs.existsSync(path.join(root, entry.sourcePath))) throw new Error(`missing source: ${entry.slug}`);
  if (entry.sourceDateField !== 'published' || entry.sourceDate !== targetDate || entry.renderedDate !== targetDate) throw new Error(`wrong manifest date fields: ${entry.slug}`);
  if (!/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error(`invalid provenance commit: ${entry.slug}`);

  const parent = `${entry.introducedByCommit}^`;
  const before = execFileSync('git', ['show', `${parent}:${sourcePath}`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:${sourcePath}`], { encoding: 'utf8' });
  if (before.includes(`slug: '${entry.slug}'`)) throw new Error(`slug existed before introduction: ${entry.slug}`);
  if (!after.includes(`slug: '${entry.slug}'`)) throw new Error(`slug absent at introduction: ${entry.slug}`);

  // The date proof must be on the same individual topic declaration as the slug,
  // not inferred from a batch comment or a later shared mapper.
  const topicLine = sourceLines.find(line => line.includes(`{ slug: '${entry.slug}'`));
  const sourceDate = topicLine && /published: '([^']+)'/.exec(topicLine)?.[1];
  if (sourceDate !== targetDate) throw new Error(`individual source date proof failed: ${entry.slug}`);

  const htmlPath = path.join(root, '.next/server/app/research', `${entry.slug}.html`);
  if (!fs.existsSync(htmlPath)) throw new Error(`missing rendered route: ${entry.slug}`);
  const rendered = fs.readFileSync(htmlPath, 'utf8');
  for (const field of ['datePublished', 'article:published_time', '<time dateTime="2026-08-10"']) {
    if (!rendered.includes(field)) throw new Error(`rendered ${field} missing: ${entry.slug}`);
  }
  if (!rendered.includes(targetDate) || !rendered.includes(`https://callcenteroffshore.com${entry.route}`)) throw new Error(`rendered route audit failed: ${entry.slug}`);
}

const ordered = manifest.entries.map(entry => entry.slug);
if (ordered.some((slug, i) => i && source.indexOf(`slug: '${slug}'`) < source.indexOf(`slug: '${ordered[i - 1]}'`))) throw new Error('manifest is not source order');
const oldIndex = indexHtml.indexOf('/research/call-center-answering-service-coverage-design');
if (oldIndex < 0 || manifest.entries.some(entry => indexHtml.indexOf(entry.route) < 0 || indexHtml.indexOf(entry.route) > oldIndex)) throw new Error('index is not newest-first');
console.log(`PASS: ${manifest.entries.length} entries; individual source dates, provenance, rendered dates, canonical routes, sitemap membership, and newest-first index verified`);
