import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA } from '../../components';
import { blogPosts, site } from '../../data';
import HealthcareArticle from './HealthcareArticle';
import CoverageArticle from './CoverageArticle';
import aug21Meta from '../../aug21-meta.json';

export function generateStaticParams() { return [...blogPosts.map(p => ({ slug: p.slug })), ...Object.keys(aug21Meta).map(slug => ({ slug }))]; }

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = blogPosts.find(x => x.slug === slug);
  if (!p) return {};
  const canonical = `https://callcenteroffshore.com/blog/${slug}`;
  return { title: p.title, description: p.excerpt, alternates: { canonical }, openGraph: { title: p.title, description: p.excerpt, url: canonical, type: 'article', images: [{ url: 'https://callcenteroffshore.com/blog-thumbnail.svg', width: 1200, height: 630, alt: p.title }] } };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === '24-7-call-center-outsourcing-philippines') return <CoverageArticle />;
  if (slug === 'healthcare-call-center-outsourcing-companies-philippines') return <HealthcareArticle />;
  if ((aug21Meta as Record<string, unknown>)[slug]) { const x=(aug21Meta as Record<string, {title:string;description:string;hero:string}>)[slug]; const fs=require('node:fs'); const path=require('node:path'); const raw=fs.readFileSync(path.join(process.cwd(),'content/blog',`${slug}.md`),'utf8') as string; const body=raw.replace(/^---[\s\S]*?---\s*/,'').replace(/^#[^\n]+\n+/,'').replace(/^\*August 21, 2026\*\s*/,''); const blocks=body.split(/\n\n+/).filter(Boolean).map((part:string,i:number)=>part.startsWith('## ')?<h2 key={i}>{part.slice(3)}</h2>:part.startsWith('- ')?<ul key={i}>{part.split('\n').map((line:string,j:number)=><li key={j}>{line.replace(/^- /,'')}</li>)}</ul>:<p key={i}>{part}</p>); const canonical=`https://callcenteroffshore.com/blog/${slug}`; const schema={'@context':'https://schema.org','@type':'Article',headline:x.title,description:x.description,datePublished:'2026-08-21',dateModified:'2026-08-21',mainEntityOfPage:canonical,image:`https://callcenteroffshore.com${x.hero}`}; return <><Header/><main className="article-shell"><article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">Blog</p><h1>{x.title}</h1><p className="lead">{x.description}</p><p><time dateTime="2026-08-21">August 21, 2026</time></p><img src={x.hero} alt={`${x.title} editorial illustration`} width="1536" height="1024"/><div className="article-body">{blocks}</div></article><CTA/></main><Footer/></>; }
  const p = blogPosts.find(x => x.slug === slug);
  if (!p) notFound();
  const canonical = `https://callcenteroffshore.com/blog/${p.slug}`;
  const focus = p.focus ?? 'the call workflow';
  const question = p.question ?? `How should a team plan ${focus}?`;
  const originalBody = (p as typeof p & { body?: readonly string[] }).body;
  const related = blogPosts.filter(x => x.slug !== p.slug).slice(0, 3);
  const organization = { '@type': 'Organization', '@id': 'https://callcenteroffshore.com/#organization', name: site.brand, url: 'https://callcenteroffshore.com' };
  const schema = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${canonical}#article`, headline: p.title, description: p.excerpt, mainEntityOfPage: canonical, image: 'https://callcenteroffshore.com/blog-thumbnail.svg', author: organization, publisher: organization, datePublished: p.published, dateModified: p.modified ?? p.published };
  return <><Header /><main><article className="section"><div className="container article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <p className="eyebrow">{site.brand} blog</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p>{p.published && <time dateTime={p.published}>Published {displayDate(p.published)}</time>}
    <img src="/blog-thumbnail.svg" width="1200" height="630" alt="Call Center Offshore article thumbnail" style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
    {originalBody?.length ? <section className="card">{originalBody.map((paragraph, index) => <p key={`original-${index}`}>{paragraph}</p>)}</section> : null}
    {p.contextualService ? <section className="card"><p>{p.contextualService.text} See the <a href={p.contextualService.href}>{p.contextualService.label}</a>.</p></section> : null}
    <section className="card"><h2>Related Articles</h2><div className="blog-grid-new">{related.map(r => <a className="blog-card-new" href={`/blog/${r.slug}`} key={r.slug}><h3>{r.title}</h3><p>{r.excerpt}</p></a>)}</div></section>
  </div></article><CTA /></main><Footer /></>;
}
