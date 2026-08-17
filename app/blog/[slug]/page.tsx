import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA } from '../../components';
import { blogPosts, site } from '../../data';
import HealthcareArticle from './HealthcareArticle';
import CoverageArticle from './CoverageArticle';

export function generateStaticParams() { return blogPosts.map(p => ({ slug: p.slug })); }

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
  const p = blogPosts.find(x => x.slug === slug);
  if (!p) notFound();
  const canonical = `https://callcenteroffshore.com/blog/${p.slug}`;
  const focus = p.focus ?? 'the call workflow';
  const question = p.question ?? `How should a team plan ${focus}?`;
  const originalBody = (p as typeof p & { body?: readonly string[] }).body;
  const related = blogPosts.filter(x => x.slug !== p.slug).slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${canonical}#article`, headline: p.title, description: p.excerpt, mainEntityOfPage: canonical, image: 'https://callcenteroffshore.com/blog-thumbnail.svg', author: { '@type': 'Organization', name: site.brand }, datePublished: p.published, dateModified: p.published };
  return <><Header /><main><article className="section"><div className="container article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <p className="eyebrow">{site.brand} blog</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p>{p.published && <time dateTime={p.published}>Published {displayDate(p.published)}</time>}
    <img src="/blog-thumbnail.svg" width="1200" height="630" alt="Call Center Offshore article thumbnail" style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
    <section className="card">
      {originalBody?.map((paragraph, index) => <p key={`original-${index}`}>{paragraph}</p>)}
    </section>
    <section className="card"><h2>Related Articles</h2><div className="blog-grid-new">{related.map(r => <a className="blog-card-new" href={`/blog/${r.slug}`} key={r.slug}><h3>{r.title}</h3><p>{r.excerpt}</p></a>)}</div></section>
  </div></article><CTA /></main><Footer /></>;
}
