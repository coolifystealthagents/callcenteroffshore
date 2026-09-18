import {createHash} from 'node:crypto';

const base=process.env.AUDIT_BASE_URL??'http://127.0.0.1:3000';
const date='2026-09-18';
const slugs=[
  'offshore-call-center-seasonal-volume-readiness',
  'call-center-accessibility-accommodation-routing',
  'offshore-call-center-payment-call-boundary',
  'call-center-ai-transcript-review',
  'offshore-call-center-disaster-recovery-tabletop',
  'call-center-repeat-contact-root-cause-review',
  'offshore-call-center-supervisor-span-planning',
  'call-center-knowledge-search-failure-review',
  'offshore-call-center-vendor-governance-meeting',
  'call-center-disposition-taxonomy-migration',
  'offshore-call-center-abandoned-call-consent',
  'call-center-coaching-transfer-test',
];
const get=async path=>{const response=await fetch(`${base}${path}`,{redirect:'manual'});return {response,text:await response.text()}};
const index=await get('/blog');
const sitemap=await get('/sitemap.xml');
const failures=[];
const titleHashes=new Set(), bodyHashes=new Set();

if(slugs.length!==12||new Set(slugs).size!==12) failures.push(`batch count/uniqueness: ${slugs.length}/${new Set(slugs).size}`);
for(const slug of slugs){
  const path=`/blog/${slug}`,canonical=`https://callcenteroffshore.com${path}`;
  const {response,text}=await get(path);
  if(response.status!==200) failures.push(`${path}: HTTP ${response.status}`);
  if(response.headers.get('location')) failures.push(`${path}: redirected`);
  if(!text.includes(`dateTime="${date}"`)&&!text.includes(`datetime="${date}"`)) failures.push(`${path}: visible date`);
  if(!text.includes(`"datePublished":"${date}"`)) failures.push(`${path}: datePublished`);
  if(!text.includes(`"dateModified":"${date}"`)) failures.push(`${path}: dateModified`);
  if(!text.includes(`rel="canonical" href="${canonical}"`)) failures.push(`${path}: canonical`);
  if(!index.text.includes(`href="${path}"`)) failures.push(`${path}: Blog index`);
  if(!sitemap.text.includes(`<loc>${canonical}</loc><lastmod>${date}</lastmod>`)) failures.push(`${path}: sitemap`);
  const article=text.match(/<article[\s\S]*?<\/article>/)?.[0]??'';
  const plain=article.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim();
  const words=plain.split(/\s+/).filter(Boolean).length;
  if(words<900) failures.push(`${path}: ${words} words`);
  const title=text.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]??'';
  const titleHash=createHash('sha256').update(title).digest('hex');
  const bodyHash=createHash('sha256').update(plain).digest('hex');
  if(titleHashes.has(titleHash)) failures.push(`${path}: duplicate title`);
  if(bodyHashes.has(bodyHash)) failures.push(`${path}: duplicate body`);
  titleHashes.add(titleHash);bodyHashes.add(bodyHash);
  for(const image of [...text.matchAll(/<img[^>]+src="([^"]+)/g)].map(m=>m[1])){
    const result=await fetch(new URL(image,base),{redirect:'manual'});
    if(result.status!==200) failures.push(`${path}: asset ${image} HTTP ${result.status}`);
  }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`PASS ${slugs.length}/12 new Blog articles at ${base}`);
console.log('PASS HTTP, dates, structured data, canonical, Blog index, sitemap, assets, >=900 words, unique titles and bodies');
