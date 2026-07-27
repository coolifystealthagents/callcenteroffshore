import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd, VisualFigure } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
export function generateStaticParams() { return fleetServices.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = fleetServices.find((item) => item.slug === slug); if (!service) return { title: 'Not found' };
  return { title: service.title, description: service.desc, alternates: { canonical: `${base}/services/${slug}` } };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = fleetServices.find((item) => item.slug === slug); if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.desc, url, areaServed: { '@type': 'Country', name: 'Philippines' }, provider: { '@type': 'Organization', '@id': `${base}/#organization`, name: site.brand, url: base } }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] }] };
  return <><Header /><main><JsonLd data={schema} />
    <section className="page-hero service-detail-hero"><div className="container page-hero-grid"><div><p className="cco-kicker"><span /> {service.eyebrow}</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><div className="cco-actions"><a className="cco-btn cco-btn-primary" href="/contact">Discuss this role <span>↗</span></a><a className="cco-btn cco-btn-ghost" href="/services">All services</a></div></div><div className="page-hero-art"><img src={service.image} alt={`Filipina professional illustrating ${service.title.toLowerCase()}`} /></div></div></section>
    <section className="service-detail-layout"><div className="container"><div className="service-outcome"><div><p className="cco-kicker cco-dark"><span /> The goal</p><h2>Give this work one clear owner.</h2><p className="cco-section-lead">The role works best when routine actions are written down and exceptions have a named path back to your team.</p></div><div className="outcome-card"><span>GOOD OPERATING OUTCOME</span><p>{service.outcome}</p></div></div>
      <div className="service-columns"><article><span className="service-cat">01 / WORK</span><h2>What to include</h2><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span className="service-cat">02 / CONTROL</span><h2>What you keep</h2><ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span className="service-cat">03 / LAUNCH</span><h2>First-week plan</h2><ul>{service.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul></article></div>
      <div className="cco-split"><VisualFigure src="/visuals/va-workflow.svg" alt="Workflow from incoming request to completed assistant task" /><div><p className="cco-kicker cco-dark"><span /> The working loop</p><h2>Request in. Next step clear. Result recorded.</h2><p className="cco-section-lead">A simple loop is easier to teach, review, and improve than a long list of loose duties. Give each task a source, owner, approval point, and done state.</p></div></div>
      <div className="deliverable-band"><div><p className="cco-kicker"><span /> Useful outputs</p><h2>What the team should be able to see.</h2></div><div><div className="deliverable-chips">{service.deliverables.map((item) => <span key={item}>{item}</span>)}</div><div className="tool-row">{service.tools.map((item) => <span key={item}>Works with: {item}</span>)}</div></div></div>
    </div></section><CTA title={`Ready to scope ${service.title.toLowerCase()}?`} text="Share your examples, schedule, tools, and manager-only decisions. We will shape a Philippines-based role brief around the real work." />
  </main><Footer /></>;
}
