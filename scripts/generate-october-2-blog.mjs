import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const dir=path.join(root,'docs/publishing/drafts/2026-10-02');
const files=fs.readdirSync(dir).filter(name=>name.endsWith('.md')).sort();
if(files.length!==12)throw new Error(`expected 12 drafts, found ${files.length}`);
const value=(raw,key)=>raw.match(new RegExp(`^${key}:\\s*(?:"([^"]*)"|([^\\n]+))$`,'m'))?.slice(1).find(Boolean)?.trim();
const entries=files.map(file=>{
 const raw=fs.readFileSync(path.join(dir,file),'utf8');
 const slug=file.slice(0,-3),title=value(raw,'title'),excerpt=value(raw,'description'),service=value(raw,'service');
 if(!title||!excerpt||!service)throw new Error(`frontmatter incomplete: ${file}`);
 return {slug,title,excerpt,focus:title.split(':')[0].toLowerCase(),question:title,published:'2026-10-02',modified:'2026-10-02',minutes:12,draftPath:`docs/publishing/drafts/2026-10-02/${file}`,contextualService:{text:'Plan this workflow with bounded roles, evidence, and escalation ownership.',label:'See the related Call Center Offshore service',href:service}};
});
const output=`export const october2BlogPosts=${JSON.stringify(entries,null,2)} as const;\n`;
fs.writeFileSync(path.join(root,'app/blog-oct2.ts'),output);
console.log(`generated ${entries.length} October 2 Blog records`);
