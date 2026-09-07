import {createHash} from 'node:crypto';

const base=process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:3000';
const date='2026-09-07';
const routes={
  blog:[
    'offshore-call-center-queue-reopen-reasons','call-center-payment-link-verification','philippines-call-center-storm-shift-check-in',
    'offshore-call-center-customer-time-zone-capture','call-center-shared-inbox-collision','offshore-call-center-sensitive-screen-share',
    'call-center-translation-request-handoff','offshore-call-center-knowledge-search-zero-results','call-center-customer-name-pronunciation-note',
    'philippines-call-center-client-holiday-calendar','offshore-call-center-escalation-attachment-check','call-center-after-hours-urgent-label',
  ],
  research:[
    'call-center-shared-inbox-collision-research','offshore-call-center-zero-result-search-research',
    'philippines-call-center-time-zone-callback-study','call-center-escalation-attachment-minimization-study',
    'offshore-call-center-after-hours-urgency-calibration',
  ],
};

const get=async path=>{const response=await fetch(`${base}${path}`);return {response,text:await response.text()};};
const index={blog:await get('/blog'),research:await get('/research')};
const sitemap=await get('/sitemap.xml');
const failures=[];
const identities=new Map();

for(const [family,slugs] of Object.entries(routes)){
  if(slugs.length!==(family==='blog'?12:5))failures.push(`${family} count is ${slugs.length}`);
  for(const slug of slugs){
    const path=`/${family}/${slug}`;
    const {response,text}=await get(path);
    const expectedCanonical=`https://callcenteroffshore.com${path}`;
    if(response.status!==200)failures.push(`${path}: HTTP ${response.status}`);
    if(!text.includes(`datetime=\"${date}\"`)&&!text.includes(`dateTime=\"${date}\"`))failures.push(`${path}: visible date missing`);
    if(!text.includes(`\"datePublished\":\"${date}\"`))failures.push(`${path}: structured date missing`);
    if(!text.includes(`rel=\"canonical\" href=\"${expectedCanonical}\"`))failures.push(`${path}: canonical missing`);
    if(!text.includes(family==='blog'?'blog':'research'))failures.push(`${path}: family marker missing`);
    if(!index[family].text.includes(`href=\"${path}\"`))failures.push(`${path}: family index membership missing`);
    if(!sitemap.text.includes(`<loc>${expectedCanonical}</loc><lastmod>${date}</lastmod>`))failures.push(`${path}: sitemap membership missing`);
    const imageUrls=[...text.matchAll(/<(?:img)[^>]+src=\"([^\"]+)\"/g),...text.matchAll(/<meta property=\"og:image\" content=\"([^\"]+)\"/g)].map(m=>m[1]);
    for(const imageUrl of new Set(imageUrls)){
      const url=new URL(imageUrl,base); const result=await fetch(url);
      if(result.status!==200)failures.push(`${path}: image ${imageUrl} HTTP ${result.status}`);
    }
    const title=text.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g,'').trim();
    const article=text.match(/<article[\s\S]*?<\/article>/)?.[0]?.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    for(const [kind,value] of [['title',title],['body',article]]){
      if(!value){failures.push(`${path}: ${kind} missing`);continue;}
      const hash=createHash('sha256').update(value).digest('hex');
      if(identities.has(`${kind}:${hash}`))failures.push(`${path}: duplicate ${kind} with ${identities.get(`${kind}:${hash}`)}`);
      identities.set(`${kind}:${hash}`,path);
    }
  }
}

if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`PASS ${routes.blog.length}/12 Blog and ${routes.research.length}/5 Research at ${base}`);
console.log('PASS direct HTTP, visible date, datePublished, self-canonical, family, index, sitemap, images, unique title/body');
