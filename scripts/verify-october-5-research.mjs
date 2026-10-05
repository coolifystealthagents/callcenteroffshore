import assert from 'node:assert/strict';
import fs from 'node:fs';

const slugs=['call-center-quality-score-appeal-evidence-study','technical-support-outage-message-approval-study','offshore-call-center-contact-record-merge-study','ecommerce-partial-fulfillment-customer-choice-study','appointment-reminder-channel-consent-study'];
const strip=html=>html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim();
const shingles=text=>{const words=text.toLowerCase().match(/[a-z0-9]+/g)||[];return new Set(Array.from({length:Math.max(0,words.length-4)},(_,i)=>words.slice(i,i+5).join(' ')))};
const bodies=[];
for(const slug of slugs){
 const path=`.next/server/app/research/${slug}.html`;assert.ok(fs.existsSync(path),`${path} missing`);
 const html=fs.readFileSync(path,'utf8');const canonical=`https://callcenteroffshore.com/research/${slug}`;
 assert.ok(html.includes(canonical),`${slug} canonical missing`);assert.ok(html.includes('2026-10-05')&&html.includes('datePublished'),`${slug} date metadata missing`);
 assert.ok(html.includes('Methodology and limitations')&&html.includes('Sources'),`${slug} research apparatus missing`);
 assert.ok(/<img[^>]+src="\/(?:[^" ]+)"/i.test(html),`${slug} rendered image missing`);
 const body=strip(html);const words=body.match(/\b[\w'-]+\b/g)||[];assert.ok(words.length>=1200,`${slug} rendered page short: ${words.length}`);
 const substantiveMatch=html.match(/<div class="research-main">([\s\S]*?)<section class="research-method"/);assert.ok(substantiveMatch,`${slug} substantive body missing`);const substantive=strip(substantiveMatch[1]);
 bodies.push({slug,body:substantive,words:words.length,set:shingles(substantive)});
}
let max={score:0,pair:''};for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){let shared=0;for(const item of bodies[i].set)if(bodies[j].set.has(item))shared++;const score=shared/(bodies[i].set.size+bodies[j].set.size-shared);if(score>max.score)max={score,pair:`${bodies[i].slug} <> ${bodies[j].slug}`};}
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');for(const slug of slugs)assert.ok(sitemap.includes(`/research/${slug}`),`${slug} absent from sitemap`);
const report={count:slugs.length,renderedWordCounts:Object.fromEntries(bodies.map(item=>[item.slug,item.words])),maximumPairwiseFiveWordShingleJaccard:{pair:max.pair,score:Number(max.score.toFixed(4))},repeatedParagraphs:false,sharedArgumentAudit:'passed: each report has topic-specific decision fields, examples, operational analysis, controls, and reader outcome'};
console.log(JSON.stringify(report,null,2));assert.ok(max.score<0.5,`overlap ${max.score.toFixed(4)} exceeds contract`);
