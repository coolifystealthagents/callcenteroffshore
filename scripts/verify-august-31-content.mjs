import fs from 'node:fs';

const blog = fs.readFileSync(new URL('../app/blog-aug31.ts', import.meta.url), 'utf8');
const research = fs.readFileSync(new URL('../app/research-aug31.ts', import.meta.url), 'utf8');
const blogSlugs = [...blog.matchAll(/^\s+\['([^']+)'/gm)].map(match => match[1]);
const researchSlugs = [...research.matchAll(/makePost\('([^']+)'/g)].map(match => match[1]);
const fail = message => { throw new Error(message); };

if (blogSlugs.length !== 12) fail(`Expected 12 Blog articles, found ${blogSlugs.length}`);
if (researchSlugs.length !== 5) fail(`Expected 5 Research articles, found ${researchSlugs.length}`);
if (new Set([...blogSlugs, ...researchSlugs]).size !== 17) fail('Every August 31 slug must be unique');
if (!blog.includes("published:'2026-08-31'") || !research.includes("published:'2026-08-31'")) fail('Both families must bind the August 31 publication date');
if (!research.includes('dated August 31, 2026')) fail('Research body must visibly carry the exact display date');
console.log(JSON.stringify({blog:blogSlugs.length,research:researchSlugs.length,total:17,date:'August 31, 2026'}, null, 2));
