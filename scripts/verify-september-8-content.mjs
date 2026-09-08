import {createHash} from 'node:crypto';

const base=process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:3000';
const date='2026-09-08';
const routes={
  blog:['offshore-call-center-callback-number-verification','call-center-hold-return-check-in','philippines-call-center-shift-transport-disruption','offshore-call-center-case-note-correction','call-center-outbound-voicemail-boundaries','offshore-call-center-policy-version-check','call-center-customer-interruption-recovery','offshore-call-center-internal-chat-summary','call-center-missed-callback-repair','philippines-call-center-cross-midnight-date-readback','offshore-call-center-supervisor-approval-record','call-center-customer-silence-chat-close'],
  research:['offshore-call-center-callback-number-error-study','call-center-policy-version-use-study','philippines-call-center-cross-midnight-callback-study','call-center-supervisor-approval-scope-study','offshore-call-center-silent-chat-closure-study'],
};
const get=async path=>{const response=await fetch(`${base}${path}`);return {response,text:await response.text()};};
const index={blog:await get('/blog'),research:await get('/research')};
const sitemap=await get('/sitemap.xml');
const failures=[]; const identities=new Map();
for(const [family,slugs] of Object.entries(routes)){
  if(slugs.length!==(family==='blog'?12:5)) failures.push(`${family} count is ${slugs.length}`);
  for(const slug of slugs){
    const path=`/${family}/${slug}`; const {response,text}=await get(path); const canonical=`https://callcenteroffshore.com${path}`;
    if(response.status!==200) failures.push(`${path}: HTTP ${response.status}`);
    if(!text.includes(`datetime=\"${date}\"`)&&!text.includes(`dateTime=\"${date}\"`)) failures.push(`${path}: visible date missing`);
    if(!text.includes(`\"datePublished\":\"${date}\"`)) failures.push(`${path}: datePublished missing`);
    if(!text.includes(`rel=\"canonical\" href=\"${canonical}\"`)) failures.push(`${path}: self-canonical missing`);
    if(!index[family].text.includes(`href=\"${path}\"`)) failures.push(`${path}: family index missing`);
    if(!sitemap.text.includes(`<loc>${canonical}</loc><lastmod>${date}</lastmod>`)) failures.push(`${path}: sitemap missing`);
    const images=[...text.matchAll(/<img[^>]+src=\"([^\"]+)\"/g),...text.matchAll(/<meta property=\"og:image\" content=\"([^\"]+)\"/g)].map(m=>m[1]);
    if(images.length<2) failures.push(`${path}: hero or OG image missing`);
    for(const imageUrl of new Set(images)){const result=await fetch(new URL(imageUrl,base));if(result.status!==200) failures.push(`${path}: image ${imageUrl} HTTP ${result.status}`);}
    const title=text.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g,'').trim();
    const body=text.match(/<article[\s\S]*?<\/article>/)?.[0]?.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    for(const [kind,value] of [['title',title],['body',body]]){if(!value){failures.push(`${path}: ${kind} missing`);continue;}const hash=createHash('sha256').update(value).digest('hex');if(identities.has(`${kind}:${hash}`)) failures.push(`${path}: duplicate ${kind}`);identities.set(`${kind}:${hash}`,path);}
  }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`PASS ${routes.blog.length}/12 Blog and ${routes.research.length}/5 Research at ${base}`);
console.log('PASS direct HTTP, visible date, datePublished, self-canonical, family indexes, sitemap, hero/OG images, unique title/body');
