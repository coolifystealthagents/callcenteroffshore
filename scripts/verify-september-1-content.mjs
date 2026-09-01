import fs from 'node:fs';
import crypto from 'node:crypto';

const blog = fs.readFileSync(new URL('../app/blog-sep1.ts', import.meta.url), 'utf8');
const research = fs.readFileSync(new URL('../app/research-sep1.ts', import.meta.url), 'utf8');
const data = fs.readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const fleet = fs.readFileSync(new URL('../app/fleet-data.ts', import.meta.url), 'utf8');
const blogSlugs = [...blog.matchAll(/^\s+\['([^']+)'/gm)].map(match => match[1]);
const researchSlugs = [...research.matchAll(/makePost\('([^']+)'/g)].map(match => match[1]);
const titles = [...blog.matchAll(/^\s+\['[^']+','([^']+)'/gm), ...research.matchAll(/makePost\('[^']+','([^']+)'/g)].map(match => match[1]);
const fail = message => { throw new Error(message); };

if (blogSlugs.length !== 12) fail(`Expected exactly 12 Blog articles, found ${blogSlugs.length}`);
if (researchSlugs.length !== 5) fail(`Expected exactly 5 Research articles, found ${researchSlugs.length}`);
if (new Set([...blogSlugs, ...researchSlugs]).size !== 17) fail('Every September 1 slug must be unique');
if (new Set(titles).size !== 17) fail('Every September 1 title must be unique');
if (!blog.includes("published:'2026-09-01'") || !research.includes("published:'2026-09-01'")) fail('Both families must bind datePublished to 2026-09-01');
if (!research.includes('dated September 1, 2026')) fail('Research bodies must visibly carry September 1, 2026');
if (!data.includes('...september1BlogPosts') || !fleet.includes('...september1ResearchBatch')) fail('Both batches must be assembled into their family indexes');
const hashes = [...blogSlugs.map(slug=>crypto.createHash('sha256').update(blog.slice(blog.indexOf(`['${slug}'`), blog.indexOf(`['${slug}'`)+500)).digest('hex')), ...researchSlugs.map(slug=>crypto.createHash('sha256').update(research.slice(research.indexOf(`makePost('${slug}'`), research.indexOf(`makePost('${slug}'`)+900)).digest('hex'))];
if (new Set(hashes).size !== 17) fail('Every September 1 source body must have a unique content hash');
console.log(JSON.stringify({blog:blogSlugs,research:researchSlugs,total:17,date:'September 1, 2026'}, null, 2));
