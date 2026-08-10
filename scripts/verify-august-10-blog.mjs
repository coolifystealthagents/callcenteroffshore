import fs from 'node:fs';

const data = fs.readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const detail = fs.readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const topics = [...data.matchAll(/\['([^']+)',\s*'[^']+',\s*'[^']+',\s*'[^']+',\s*'[^']+'\]/g)].map(([, slug]) => slug);
const unique = new Set(topics);
const failures = [];
if (topics.length !== 23 || unique.size !== topics.length) failures.push(`expected 23 unique scheduled slugs, found ${topics.length}`);
if (!data.includes("published: '2026-08-10'")) failures.push('scheduled source publication date is missing');
if (!detail.includes('datePublished: p.published')) failures.push('rendered date metadata is not sourced from the article publication field');
if (!detail.includes('<time dateTime={p.published}>Published {p.published}</time>')) failures.push('visible publication date is missing');
if (!data.includes('blogPosts.splice(0, blogPosts.length, ...newestFirstBlogPosts)')) failures.push('Blog index ordering is not applied to shared blog data');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`PASS: ${topics.length} unique August 10 Blog slugs have source date, rendered date, and newest-first index coverage.`);
