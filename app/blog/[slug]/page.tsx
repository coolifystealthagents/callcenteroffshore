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
  const related = blogPosts.filter(x => x.slug !== p.slug).slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${canonical}#article`, headline: p.title, description: p.excerpt, mainEntityOfPage: canonical, image: 'https://callcenteroffshore.com/blog-thumbnail.svg', author: { '@type': 'Organization', name: site.brand }, datePublished: p.published, dateModified: p.published };
  return <><Header /><main><article className="section"><div className="container article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <p className="eyebrow">{site.brand} blog</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p>{p.published && <time dateTime={p.published}>Published {displayDate(p.published)}</time>}
    <img src="/blog-thumbnail.svg" width="1200" height="630" alt="Call Center Offshore article thumbnail" style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
    <div className="blog-standards-strip"><span>Source-backed guidance</span><span>Two contextual internal links</span><span>Three related articles</span></div>
    <aside className="article-rotation-banner article-rotation-banner-top"><p className="eyebrow">Role planning checkpoint</p><h2>Turn this guide into a clear role brief</h2><p>Share the queue, tools, review owner, and approval limits before adding outside support.</p><a className="btn" href="/contact-us">Contact Us</a></aside>
    <section className="card">
      <h2>Start with the customer outcome</h2>
      <p>{question} Begin by writing the outcome the customer and manager should see. Then define the trigger, the permitted action, the evidence captured, and the point where the agent must stop and ask for help.</p>
      <p>Map the work in the <a href="/services/operations-support">call center operations support workflow</a> before discussing staffing. Keep the first queue narrow enough that a manager can review ordinary cases and exceptions during the pilot.</p>
      <h2>Put the operating steps in writing</h2>
      <p>For {focus}, write the required fields, approved language, system actions, due time, and escalation owner. Use realistic examples with sensitive details removed. The same examples should support training, scoring, coaching, and retesting.</p>
      <p>Use the <a href="/blog/call-center-qa-scorecard">call center QA scorecard guide</a> to choose a small review sample. A score is useful only when the reviewer can point to the call evidence, explain the expected behavior, and record what happens next.</p>
      <aside className="article-rotation-banner article-rotation-banner-middle"><p className="eyebrow">Midpoint planning check</p><h2>Compare providers against one written workflow</h2><p>Use one task lane, one reviewer, and one quality check so provider conversations are easier to judge.</p><a className="btn" href="/contact-us">Contact Us</a></aside>
      <h2>Keep privacy and handoffs visible</h2>
      <p>List the records the role can view, the actions it can take, and the actions that stay with a manager. The Federal Trade Commission recommends taking stock of personal information, keeping only what is needed, protecting what remains, disposing of it safely, and planning for incidents. <a href="https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" target="_blank" rel="noopener noreferrer">FTC guidance on protecting personal information</a> is a useful source for that control discussion.</p>
      <p>When work crosses a shift or changes owner, preserve the customer reason, action already taken, promised next step, due time, and escalation status. A handoff should let the next person act without making the customer repeat the full story.</p>
      <h2>What to test before expanding</h2>
      <p>Test a normal case, an exception, and a case that requires a manager. Review accuracy, verification, tone, notes, correct system use, and escalation. Do not expand channels or permissions until the same scorecard shows repeatable work and closed coaching actions.</p>
    </section>
    <section className="card"><h2>Related Articles</h2><div className="blog-grid-new">{related.map(r => <a className="blog-card-new" href={`/blog/${r.slug}`} key={r.slug}><h3>{r.title}</h3><p>{r.excerpt}</p></a>)}</div></section>
    <aside className="article-rotation-banner article-rotation-banner-bottom"><p className="eyebrow">Ready to scope the role?</p><h2>Build the first support lane before hiring</h2><p>Turn this guide into a practical staffing brief with tasks, access rules, and review checkpoints.</p><a className="btn" href="/contact-us">Contact Us</a></aside>
  </div></article><CTA /></main><Footer /></>;
}
