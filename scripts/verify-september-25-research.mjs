import assert from 'node:assert/strict';
import fs from 'node:fs';

const slugs=['call-center-third-party-requester-authority-study','appointment-scheduling-calendar-conflict-resolution-study','outbound-lead-qualification-representation-boundary-study','after-hours-dispatch-authority-study','call-quality-coaching-action-verification-study'];
const source=fs.readFileSync('app/research-sep25.ts','utf8');
assert.equal(slugs.length,5);
assert.equal(new Set(slugs).size,5);
for(const slug of slugs){
 assert.match(source,new RegExp(`slug:'${slug}'`));
 const htmlPath=`.next/server/app/research/${slug}.html`;
 assert.ok(fs.existsSync(htmlPath),`${htmlPath} was not built`);
 const html=fs.readFileSync(htmlPath,'utf8');
 assert.ok(html.includes(`https://callcenteroffshore.com/research/${slug}`));
 assert.ok(html.includes('2026-09-25'));
 assert.ok(html.includes('Methodology and limitations'));
 assert.ok(html.includes('Sources'));
 assert.ok(html.includes('datePublished'));
 const visible=html.replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
 assert.ok(visible.split(/\s+/).filter(Boolean).length>=1200,`${slug} is short`);
}
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
for(const slug of slugs)assert.ok(sitemap.includes(`<loc>https://callcenteroffshore.com/research/${slug}</loc><lastmod>2026-09-25`),`${slug} missing current sitemap record`);
console.log('September 25 Research validation passed: 5 unique built routes, current dates, canonicals, structured data, sitemap records, methodology, sources, and 1,200-word minimum.');
