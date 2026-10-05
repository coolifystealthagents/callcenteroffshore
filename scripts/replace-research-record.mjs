import fs from 'node:fs';

const [,,slug,inputPath]=process.argv;
if(!slug||!inputPath)throw new Error('usage: node scripts/replace-research-record.mjs <slug> <record.json>');
const target='app/research-oct5.json';
const records=JSON.parse(fs.readFileSync(target,'utf8'));
const replacement=JSON.parse(fs.readFileSync(inputPath,'utf8'));
const index=records.findIndex(record=>record.slug===slug);
if(index<0)throw new Error(`unknown slug: ${slug}`);
if(replacement.slug!==slug)throw new Error('replacement slug mismatch');
records[index]=replacement;
fs.writeFileSync(target,JSON.stringify(records,null,2)+'\n');
