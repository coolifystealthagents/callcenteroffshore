import fs from 'node:fs';
import crypto from 'node:crypto';

const manifest = JSON.parse(fs.readFileSync('publishing/2026-10-12/manifest.json', 'utf8'));
const researchRecords = JSON.parse(fs.readFileSync('app/research-oct12.json', 'utf8'));
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const blogs = manifest.articles.filter(a => a.section === 'Blog');
const research = manifest.articles.filter(a => a.section === 'Research');
const titles = new Set();
const slugs = new Set();
const imageHashes = new Set();
const batchParagraphs = new Map();

check(blogs.length === 12, `expected 12 Blog, found ${blogs.length}`);
check(research.length === 5, `expected 5 Research, found ${research.length}`);
check(researchRecords.length === 5, `expected 5 Research records, found ${researchRecords.length}`);

function normalizeParagraph(text) {
  return text.replace(/\s+/g, ' ').trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ');
}

function recordParagraph(text, owner) {
  const normalized = normalizeParagraph(text);
  if (normalized.length < 180 || /^(#|\||>|\[|- )/.test(text.trim())) return;
  if (batchParagraphs.has(normalized)) errors.push(`duplicate substantive paragraph: ${owner} and ${batchParagraphs.get(normalized)}`);
  else batchParagraphs.set(normalized, owner);
}

for (const article of manifest.articles) {
  check(!titles.has(article.title), `duplicate title: ${article.title}`); titles.add(article.title);
  check(!slugs.has(article.slug), `duplicate slug: ${article.slug}`); slugs.add(article.slug);
  check(!/(oct(?:ober)?\s*12|2026-10-12)/i.test(article.title), `date in title: ${article.title}`);
  check(fs.existsSync(article.thumbnailPath), `missing thumbnail: ${article.thumbnailPath}`);
  if (fs.existsSync(article.thumbnailPath)) {
    const buffer = fs.readFileSync(article.thumbnailPath);
    check(buffer.subarray(0,4).toString() === 'RIFF' && buffer.subarray(8,12).toString() === 'WEBP', `not WebP: ${article.thumbnailPath}`);
    const hash = crypto.createHash('sha256').update(buffer).digest('hex');
    check(!imageHashes.has(hash), `duplicate thumbnail bytes: ${article.slug}`); imageHashes.add(hash);
  }
}

for (const article of blogs) {
  check(fs.existsSync(article.sourcePath), `missing Blog source: ${article.sourcePath}`);
  if (!fs.existsSync(article.sourcePath)) continue;
  const raw = fs.readFileSync(article.sourcePath, 'utf8');
  check(raw.includes(`published: "2026-10-12"`), `frontmatter date: ${article.slug}`);
  check(raw.includes('**Published: October 12, 2026**'), `visible date: ${article.slug}`);
  check(raw.includes(`image: "/oct12-heroes/${article.slug}.webp"`), `thumbnail reference: ${article.slug}`);
  check(raw.includes('/blog)') && raw.includes('/research)') && raw.includes('/contact-us)'), `related/navigation links: ${article.slug}`);
  const body = raw.replace(/^---[\s\S]*?---/, '');
  check(body.trim().split(/\s+/).length >= 800, `thin Blog: ${article.slug}`);
  for (const paragraph of body.split(/\n\s*\n/)) recordParagraph(paragraph, article.slug);
}

for (const article of research) {
  const record = researchRecords.find(item => item.slug === article.slug);
  check(Boolean(record), `missing Research record: ${article.slug}`);
  if (!record) continue;
  check(record.title === article.title, `Research title mismatch: ${article.slug}`);
  check(record.published === '2026-10-12' && record.modified === '2026-10-12', `Research date: ${article.slug}`);
  check(record.hero === `/oct12-heroes/${article.slug}.webp`, `Research hero: ${article.slug}`);
  check(record.sections.length >= 7, `Research depth: ${article.slug}`);
  check(record.sources.length === 10 && record.sources.every(s => /^https:\/\//.test(s.url)), `Research sources: ${article.slug}`);
  check(record.related.some(x => x.href === '/research') && record.related.some(x => x.href === '/blog'), `Research related content: ${article.slug}`);
  const prose = [record.methodology, record.limitations, ...record.sections.flatMap(s => s.paragraphs.map(p => p.text))];
  check(prose.join(' ').split(/\s+/).length >= 1150, `thin Research: ${article.slug}`);
  for (const paragraph of prose) recordParagraph(paragraph, article.slug);
}

const blogRegistry = fs.readFileSync('app/blog-oct12.ts','utf8');
const researchRegistry = fs.readFileSync('app/research-oct12.ts','utf8');
const data = fs.readFileSync('app/data.ts','utf8');
const fleet = fs.readFileSync('app/fleet-data.ts','utf8');
const blogRoute = fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const researchRoute = fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const blogIndex = fs.readFileSync('app/blog/page.tsx','utf8');
const researchIndex = fs.readFileSync('app/research/page.tsx','utf8');
const header = fs.readFileSync('app/components.tsx','utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts','utf8');
check(blogRegistry.includes('october12BlogPosts') && data.includes('...october12BlogPosts'), 'Blog registry not wired');
check(researchRegistry.includes('october12ResearchBatch') && fleet.includes('...october12ResearchBatch'), 'Research registry not wired');
check(blogRoute.includes('blogPosts') && blogRoute.includes('draftPost.draftPath') && blogRoute.includes('src={hero}'), 'Blog route/image not wired');
check(researchRoute.includes('researchPosts') && researchRoute.includes('post.hero'), 'Research route/image not wired');
check(blogIndex.includes('blogPosts') && researchIndex.includes('researchPosts'), 'separate indexes not wired');
check(header.includes('/blog') && header.includes('/research'), 'Blog/Research navigation missing');
check(sitemap.includes('blogs.map') && sitemap.includes('researchPosts.map'), 'Blog/Research sitemap discovery missing');
check(imageHashes.size === 17, `expected 17 unique thumbnails, found ${imageHashes.size}`);

// Exact substantive-prose comparison against pre-existing markdown. Links, headings, and short UI copy are excluded.
for (const base of ['content/blog','content/research','docs/publishing/drafts']) {
  if (!fs.existsSync(base)) continue;
  const stack = [base];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, {withFileTypes:true})) {
      const path = `${current}/${entry.name}`;
      if (entry.isDirectory()) { if (path !== 'docs/publishing/drafts/2026-10-12') stack.push(path); continue; }
      if (!/\.mdx?$/.test(entry.name) || manifest.articles.some(a => a.sourcePath === path)) continue;
      const raw = fs.readFileSync(path,'utf8').replace(/^---[\s\S]*?---/,'');
      for (const paragraph of raw.split(/\n\s*\n/)) {
        const normalized = normalizeParagraph(paragraph);
        if (normalized.length >= 180 && !/^(#|\||>|\[|- )/.test(paragraph.trim()) && batchParagraphs.has(normalized)) errors.push(`existing substantive duplicate: ${path} and ${batchParagraphs.get(normalized)}`);
      }
    }
  }
}

const thumbnailGenerator = fs.readFileSync('publishing/2026-10-12/generate_thumbnails.py','utf8');
check(thumbnailGenerator.includes("article['title']") && thumbnailGenerator.includes("(1536, 1024)"), 'thumbnail exact-title/dimension generator contract');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('PASS: 12 Blog + 5 Research, exact dates, distinct registries/routes/indexes/navigation, related content, 10-source Research depth, unique prose, and 17 exact-title WebP thumbnails.');
