import assert from 'node:assert/strict';
import fs from 'node:fs';

const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-22/research.json','utf8'));
const source=fs.readFileSync('app/research-sep22.ts','utf8');
const fleet=fs.readFileSync('app/fleet-data.ts','utf8');
assert.equal(manifest.requiredCount,5);
assert.equal(manifest.entries.length,5);
assert.equal(new Set(manifest.entries.map(entry=>entry.slug)).size,5);
assert.match(fleet,/september22ResearchBatch/);
for(const entry of manifest.entries){
  assert.match(source,new RegExp(`slug:'${entry.slug}'`));
  assert.equal(entry.publicationDate,'2026-09-22');
  const htmlPath=`.next/server/app/research/${entry.slug}.html`;
  assert.ok(fs.existsSync(htmlPath),`${htmlPath} was not built`);
  const html=fs.readFileSync(htmlPath,'utf8');
  assert.ok(html.includes(entry.slug));
  assert.ok(html.includes('2026-09-22'));
  assert.ok(html.includes(`https://callcenteroffshore.com/research/${entry.slug}`));
  assert.ok(html.includes('Methodology and limitations'));
  assert.ok(html.includes('Sources'));
  const visible=html.replace(/<[^>]+>/g,' ');
  assert.ok(visible.split(/\s+/).filter(Boolean).length>=1200,`${entry.slug} is short`);
}
console.log('September 22 Research validation passed: 5 unique built routes, dates, canonicals, methodology, sources, and 1,200-word minimum.');
