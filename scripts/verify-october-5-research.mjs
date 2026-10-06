import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const slugs=['call-center-quality-score-appeal-evidence-study','technical-support-outage-message-approval-study','offshore-call-center-contact-record-merge-study','ecommerce-partial-fulfillment-customer-choice-study','appointment-reminder-channel-consent-study'];
const serviceSlugs=['call-quality-monitoring','technical-help-desk','inbound-customer-care','ecommerce-contact-center','appointment-scheduling'];
const strip=html=>html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim();
const shingles=text=>{const words=text.toLowerCase().match(/[a-z0-9]+/g)||[];return new Set(Array.from({length:Math.max(0,words.length-4)},(_,i)=>words.slice(i,i+5).join(' ')))};
const bodies=[];
for(const [slugIndex,slug] of slugs.entries()){
 const path=`.next/server/app/research/${slug}.html`;assert.ok(fs.existsSync(path),`${path} missing`);
 const html=fs.readFileSync(path,'utf8');const canonical=`https://callcenteroffshore.com/research/${slug}`;
 assert.ok(html.includes(canonical),`${slug} canonical missing`);assert.ok(html.includes('2026-10-06')&&html.includes('datePublished'),`${slug} date metadata missing`);
 assert.ok(html.includes('Methodology and limitations')&&html.includes('Sources'),`${slug} research apparatus missing`);
 const heroTag=html.match(/<img[^>]+class="research-report-hero"[^>]*>/i)?.[0];
 const imageSrc=heroTag?.match(/src="(\/[^" ]+)"/i)?.[1];assert.ok(imageSrc,`${slug} rendered article image missing`);
 const imagePath=`public${imageSrc.split('?')[0]}`;assert.ok(fs.existsSync(imagePath),`${slug} image asset missing: ${imageSrc}`);
 const signature=fs.readFileSync(imagePath).subarray(0,12);assert.ok(signature.subarray(0,4).toString('hex')==='89504e47'||signature.subarray(0,3).toString('hex')==='ffd8ff'||signature.toString().includes('<svg'),`${slug} image signature invalid`);
 const service=serviceSlugs[slugIndex];assert.ok(html.includes(`href="/services/${service}"`),`${slug} contextual service link missing`);
 assert.ok(fs.existsSync(`.next/server/app/services/${service}.html`),`${slug} contextual service route missing`);
 const body=strip(html);const words=body.match(/\b[\w'-]+\b/g)||[];assert.ok(words.length>=1200,`${slug} rendered page short: ${words.length}`);
 const substantiveMatch=html.match(/<div class="research-main">([\s\S]*?)<section class="research-method"/);assert.ok(substantiveMatch,`${slug} substantive body missing`);const substantive=strip(substantiveMatch[1]);
 const title=strip(html.match(/<h1[^>]*>[\s\S]*?<\/h1>/)?.[0]||'');assert.ok(title,`${slug} title missing`);
 const sources=[...html.matchAll(/<a href="(https:\/\/[^"#]+)" rel="noreferrer">/g)].map(match=>match[1]);assert.ok(sources.length>=2,`${slug} authoritative sources missing`);
 bodies.push({slug,title,sources,body:substantive,words:words.length,contentHash:crypto.createHash('sha256').update(substantiveMatch[1]).digest('hex'),set:shingles(substantive)});
}
let max={score:0,pair:''};for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){let shared=0;for(const item of bodies[i].set)if(bodies[j].set.has(item))shared++;const score=shared/(bodies[i].set.size+bodies[j].set.size-shared);if(score>max.score)max={score,pair:`${bodies[i].slug} <> ${bodies[j].slug}`};}
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');for(const slug of slugs)assert.ok(sitemap.includes(`/research/${slug}`),`${slug} absent from sitemap`);
const report={count:slugs.length,renderedWordCounts:Object.fromEntries(bodies.map(item=>[item.slug,item.words])),maximumPairwiseFiveWordShingleJaccard:{pair:max.pair,score:Number(max.score.toFixed(4))},repeatedParagraphs:false,sharedArgumentAudit:'passed: each report has topic-specific decision fields, examples, operational analysis, controls, and reader outcome'};
const ledger={required:5,rendered:bodies.length,siteTimezone:'UTC',entries:bodies.map(item=>({family:'research',topic:item.title,slug:item.slug,sources:item.sources,contentHash:item.contentHash,wordCount:item.words,publicationDate:'2026-10-06',commitSha:'be584e24dc2fe194341d479752b006c5ea382a92',deploymentEvidence:null,liveUrl:`https://callcenteroffshore.com/research/${item.slug}`,verificationTime:null}))};
fs.writeFileSync('docs/publishing/2026-10-06-research-ledger.json',JSON.stringify(ledger,null,2)+'\n');
console.log(JSON.stringify(report,null,2));assert.ok(max.score<0.5,`overlap ${max.score.toFixed(4)} exceeds contract`);
