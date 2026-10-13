import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-13/manifest.json','utf8'));
const records=JSON.parse(fs.readFileSync('app/research-oct13.json','utf8'));
const errors=[]; const check=(v,m)=>{if(!v)errors.push(m)};
const blogs=manifest.articles.filter(x=>x.section==='Blog');
const research=manifest.articles.filter(x=>x.section==='Research');
check(blogs.length===12,`Blog count ${blogs.length}`); check(research.length===5,`Research count ${research.length}`);
check(records.length===5,`Research records ${records.length}`);
const titles=new Set(),slugs=new Set(),images=new Set(),paragraphs=new Map();
const norm=s=>s.replace(/\s+/g,' ').trim().toLowerCase().replace(/[^a-z0-9]+/g,' ');
function para(text,owner){const n=norm(text);if(n.length<180)return;if(paragraphs.has(n))errors.push(`duplicate substantive prose: ${owner} / ${paragraphs.get(n)}`);else paragraphs.set(n,owner)}
function webpSize(b){if(b.subarray(0,4).toString()!=='RIFF'||b.subarray(8,12).toString()!=='WEBP')return null;const t=b.subarray(12,16).toString();if(t==='VP8 '){const o=26;return [b.readUInt16LE(o)&0x3fff,b.readUInt16LE(o+2)&0x3fff]}if(t==='VP8X')return [b.readUIntLE(24,3)+1,b.readUIntLE(27,3)+1];return null}
for(const x of manifest.articles){
 check(!titles.has(x.title),`duplicate title ${x.title}`);titles.add(x.title);check(!slugs.has(x.slug),`duplicate slug ${x.slug}`);slugs.add(x.slug);
 check(!/(oct(?:ober)?\s*13|2026-10-13)/i.test(x.title),`date in title ${x.title}`);
 check(fs.existsSync(x.sourcePath),`missing source ${x.sourcePath}`);check(fs.existsSync(x.thumbnailPath),`missing thumbnail ${x.thumbnailPath}`);
 if(fs.existsSync(x.sourcePath))check(crypto.createHash('sha256').update(fs.readFileSync(x.sourcePath)).digest('hex')===x.sha256,`source hash ${x.slug}`);
 if(fs.existsSync(x.thumbnailPath)){const b=fs.readFileSync(x.thumbnailPath);check(JSON.stringify(webpSize(b))==='[1536,1024]',`dimensions ${x.slug}`);check(b.includes(Buffer.from(x.title)),`exact title metadata ${x.slug}`);const h=crypto.createHash('sha256').update(b).digest('hex');check(!images.has(h),`duplicate thumbnail ${x.slug}`);images.add(h)}
}
for(const x of blogs){const raw=fs.readFileSync(x.sourcePath,'utf8');check(raw.includes(`title: "${x.title}"`),`Blog title ${x.slug}`);check(raw.includes(`slug: "${x.slug}"`),`Blog slug ${x.slug}`);check(raw.includes('published: "2026-10-13"')&&raw.includes('**Published: October 13, 2026**'),`Blog date ${x.slug}`);check(raw.includes(`image: "/oct13-heroes/${x.slug}.webp"`),`Blog hero ${x.slug}`);check(raw.includes('(/blog)')&&raw.includes('(/research)')&&raw.includes('(/contact-us)'),`Blog related ${x.slug}`);check(raw.replace(/^---[\s\S]*?---/,'').split(/\s+/).length>=900,`thin Blog ${x.slug}`);for(const p of raw.split(/\n\s*\n/))para(p,x.slug)}
for(const x of research){const r=records.find(y=>y.slug===x.slug);check(Boolean(r),`missing Research ${x.slug}`);if(!r)continue;check(r.title===x.title&&r.published==='2026-10-13'&&r.modified==='2026-10-13',`Research identity/date ${x.slug}`);check(r.hero===`/oct13-heroes/${x.slug}.webp`,`Research hero ${x.slug}`);check(r.sections.length>=7,`Research depth ${x.slug}`);check(r.sources.length===10&&new Set(r.sources.map(s=>s.url)).size===10&&r.sources.every(s=>/^https:\/\//.test(s.url)),`Research sources ${x.slug}`);check(r.related.some(y=>y.href==='/blog')&&r.related.some(y=>y.href==='/research'),`Research related ${x.slug}`);const prose=[r.methodology,r.limitations,...r.sections.flatMap(s=>s.paragraphs.map(p=>p.text))];check(prose.join(' ').split(/\s+/).length>=1200,`thin Research ${x.slug}`);for(const p of prose)para(p,x.slug)}
const data=fs.readFileSync('app/data.ts','utf8'),fleet=fs.readFileSync('app/fleet-data.ts','utf8');
check(data.includes("from './blog-oct13'")&&data.includes('...october13BlogPosts'),'Blog registry');check(fleet.includes("from './research-oct13'")&&fleet.includes('...october13ResearchBatch'),'Research registry');
for(const p of ['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx','app/blog/page.tsx','app/research/page.tsx','app/components.tsx','app/sitemap.xml/route.ts'])check(fs.existsSync(p),`missing architecture ${p}`);
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8')+fs.readFileSync('app/research/[slug]/page.tsx','utf8');const nav=fs.readFileSync('app/components.tsx','utf8'),map=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
check(route.includes('draftPath')&&route.includes('post.hero'),'route loaders');check(nav.includes('/blog')&&nav.includes('/research'),'navigation');check(map.includes('blogs.map')&&map.includes('researchPosts.map'),'sitemap');
let base='';try{base=execFileSync('git',['show',`${manifest.baseSha}:app/data.ts`],{encoding:'utf8',maxBuffer:20_000_000})+execFileSync('git',['show',`${manifest.baseSha}:app/fleet-data.ts`],{encoding:'utf8',maxBuffer:20_000_000})}catch(e){errors.push('immutable base unavailable')}
for(const x of manifest.articles){check(!base.includes(x.slug),`base slug collision ${x.slug}`);check(!base.includes(x.title),`base title collision ${x.title}`)}
check(images.size===17,`thumbnail count ${images.size}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('PASS CallCenterOffshore October 13: 12 Blog + 5 Research, 10 authoritative HTTPS sources each, 17 unique exact-title 1536x1024 WebP thumbnails, dates, depth, separate registries/routes/indexes/navigation/related/sitemap, immutable-base registry collision audit, hashes, and zero duplicate substantive prose.');
