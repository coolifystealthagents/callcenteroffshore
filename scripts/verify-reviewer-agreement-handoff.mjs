import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'app/research-aug21-reviewer-agreement.ts'), 'utf8');
const required = [
  "slug:'offshore-call-center-reviewer-agreement-study'",
  "modified:'2026-09-14'",
  "href:'/services/call-quality-monitoring'",
  "heading:'Turn review evidence into a quality plan'",
  'client-approved scorecard',
  'Managers approve the scorecard and handle sensitive cases'
];
const retired = [
  "modified:'2026-08-21'",
  "revision:'2026-08-21-offshore-call-center-reviewer-agreement-study-v1'"
];

for (const marker of required) {
  if (!source.includes(marker)) throw new Error(`Missing reviewer-agreement handoff contract: ${marker}`);
}
for (const marker of retired) {
  if (source.includes(marker)) throw new Error(`Retired reviewer-agreement contract remains: ${marker}`);
}
console.log('PASS: reviewer-agreement study has a scoped quality-monitoring handoff, current modified date, and manager-owned scorecard boundary.');