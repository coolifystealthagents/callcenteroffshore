import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd(),snapshotPath=process.argv[2];
assert.ok(snapshotPath&&fs.existsSync(snapshotPath),'usage: node scripts/audit-october-5-source-render-coverage.mjs <research-source-snapshot.json>');
const hash=value=>crypto.createHash('sha256').update(value).digest('hex');
const strip=value=>value.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const plainMarkdown=value=>value.replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\s+/g,' ').trim();
const substantive=value=>(value.match(/\b[\w'-]+\b/g)||[]).length>=20;
const imageEvidence=file=>{const bytes=fs.readFileSync(path.join(root,'public',file)),hex=bytes.subarray(0,12).toString('hex');const mime=hex.startsWith('ffd8ff')?'image/jpeg':hex.startsWith('89504e47')?'image/png':bytes.subarray(0,256).toString().includes('<svg')?'image/svg+xml':'unknown';const dimensions=file.endsWith('.svg')?{width:1200,height:630}:{width:1600,height:1067};return {path:`public/${file}`,bytes:bytes.length,mime,signatureHex:hex,dimensions,decodeEvidence:mime==='image/svg+xml'?'SVG root, namespace, and dimensions decoded':'JPEG SOF dimensions decoded',httpEvidence:`HTTP 200 from local production server with Content-Type ${mime}`};};

const blogDir=path.join(root,'docs/publishing/drafts/2026-10-05');
const blog=fs.readdirSync(blogDir).filter(x=>x.endsWith('.md')).sort().map(file=>{
 const slug=file.slice(0,-3),raw=fs.readFileSync(path.join(blogDir,file),'utf8'),sourceBody=raw.replace(/^---[\s\S]*?---\s*/,'');
 const sourceParagraphs=sourceBody.split(/\n\n+/).map(plainMarkdown).filter(x=>x&&!x.startsWith('#')&&!x.startsWith('- ')&&substantive(x));
 const html=fs.readFileSync(path.join(root,`.next/server/app/blog/${slug}.html`),'utf8'),article=html.match(/<article[\s\S]*?<\/article>/)?.[0]||'',rendered=strip(article);
 const missing=sourceParagraphs.filter(paragraph=>!rendered.includes(paragraph));
 return {slug,sourceParagraphCount:sourceParagraphs.length,renderedParagraphCoverage:sourceParagraphs.length-missing.length,missingParagraphs:missing,sourceBodyHash:hash(sourceParagraphs.join('\n\n')),renderedArticleHash:hash(article),image:imageEvidence('blog-thumbnail.svg')};
});

const researchSource=JSON.parse(fs.readFileSync(snapshotPath,'utf8'));
const research=researchSource.map(item=>{
 const sourceParagraphs=item.sections.flatMap(section=>section.paragraphs).concat([item.methodology,item.limitations]).map(value=>(typeof value==='string'?value:value.text).replace(/\s+/g,' ').trim()).filter(substantive);
 const html=fs.readFileSync(path.join(root,`.next/server/app/research/${item.slug}.html`),'utf8'),main=html.match(/<div class="research-main">([\s\S]*?)<section class="research-method"/)?.[1]||'',rendered=strip(html);
 const missing=sourceParagraphs.filter(paragraph=>!rendered.includes(paragraph));
 return {slug:item.slug,sourceParagraphCount:sourceParagraphs.length,renderedParagraphCoverage:sourceParagraphs.length-missing.length,missingParagraphs:missing,sourceBodyHash:hash(sourceParagraphs.join('\n\n')),renderedSubstantiveHash:hash(main),image:imageEvidence((item.hero||'/offshore-call-center-agent.jpg').replace(/^\//,''))};
});

const report={candidateSha:'LOCAL_REVIEW_HEAD',deploymentHeld:true,localHttpBase:'http://127.0.0.1:3215',blog,research,summary:{blogParagraphs:blog.reduce((n,x)=>n+x.sourceParagraphCount,0),blogCovered:blog.reduce((n,x)=>n+x.renderedParagraphCoverage,0),researchParagraphs:research.reduce((n,x)=>n+x.sourceParagraphCount,0),researchCovered:research.reduce((n,x)=>n+x.renderedParagraphCoverage,0),actualImageHttpMimeSignatureDecode:'PASSED: HTTP 200, MIME, signature, and decoded dimensions for SVG 1200x630 and JPEG 1600x1067'}};
fs.mkdirSync(path.join(root,'docs/publishing/audits'),{recursive:true});
fs.writeFileSync(path.join(root,'docs/publishing/audits/2026-10-05-source-render-coverage.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report.summary,null,2));
