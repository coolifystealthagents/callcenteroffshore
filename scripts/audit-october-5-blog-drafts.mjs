import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir=path.join(process.cwd(),'docs/publishing/drafts/2026-10-06');
const files=fs.readdirSync(dir).filter(x=>x.endsWith('.md')).sort();
assert.equal(files.length,12,'October 5 Blog requires exactly 12 drafts');
const shingles=text=>{const words=text.toLowerCase().match(/[a-z0-9']+/g)||[];const set=new Set();for(let i=0;i<=words.length-5;i++)set.add(words.slice(i,i+5).join(' '));return set;};
const paragraphs=new Map();
const items=[];
for(const file of files){
 const raw=fs.readFileSync(path.join(dir,file),'utf8');
 assert.match(raw,/^family: "blog"$/m);
 assert.match(raw,/^cycleLabel: "2026-10-06"$/m);
 assert.match(raw,/^publicationDate: "2026-10-06"$/m);
 assert.match(raw,/^status: "release-candidate"$/m);
 assert.ok(raw.includes('/services/'),`${file}: contextual service link`);
 assert.ok((raw.match(/https:\/\//g)||[]).length>=2,`${file}: authoritative sources`);
 const body=raw.replace(/^---[\s\S]*?---\s*/,''),words=body.match(/\b[\w'-]+\b/g)||[];
 assert.ok(words.length>=900,`${file}: ${words.length} substantive words`);
 for(const p of body.split(/\n\n+/).filter(x=>!x.startsWith('#')&&!x.startsWith('- ')&&x.split(/\s+/).length>=30)){
  const normalized=p.replace(/\s+/g,' ').trim();
  assert.ok(!paragraphs.has(normalized),`${file}: paragraph repeated from ${paragraphs.get(normalized)}`);
  paragraphs.set(normalized,file);
 }
 items.push({slug:file.slice(0,-3),wordCount:words.length,set:shingles(body)});
}
let maximum={score:0,pair:''};
for(let i=0;i<items.length;i++)for(let j=i+1;j<items.length;j++){
 const a=items[i].set,b=items[j].set,intersection=[...a].filter(x=>b.has(x)).length;
 const score=intersection/(a.size+b.size-intersection);
 if(score>maximum.score)maximum={score,pair:`${items[i].slug} <> ${items[j].slug}`};
}
const report={count:items.length,wordCounts:Object.fromEntries(items.map(x=>[x.slug,x.wordCount])),maximumPairwiseFiveWordShingleJaccard:{pair:maximum.pair,score:+maximum.score.toFixed(4)},repeatedParagraphs:false};
console.log(JSON.stringify(report,null,2));
assert.ok(maximum.score<.5,`originality rewrite required: ${maximum.pair} = ${maximum.score.toFixed(4)}`);
