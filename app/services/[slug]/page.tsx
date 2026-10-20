import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd, VisualFigure } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
export function generateStaticParams() { return fleetServices.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find(item => item.slug === slug);
  if (!service) return { title: 'Not found', robots: { index: false, follow: false } };
  return { title: service.title, description: service.desc, alternates: { canonical: `${base}/services/${slug}` }, openGraph: { title: service.title, description: service.desc, url: `${base}/services/${slug}`, images: [{ url: `${base}${service.image}`, alt: service.title }] } };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find(item => item.slug === slug);
  if (!service) notFound();
  const related = fleetServices.filter(item => item.slug !== service.slug && item.category === service.category).slice(0, 3);
  const url = `${base}/services/${service.slug}`;
  const faqs = [
    { q: `What should we provide before launching ${service.title.toLowerCase()}?`, a: `Bring examples of the work, the systems involved, expected coverage, approved answers, and the names of managers who own exceptions. The first launch should be narrow enough to review closely.` },
    { q: 'Which decisions should stay with our team?', a: `Keep policy exceptions, sensitive account changes, commercial promises, money movement, and any decision requiring licensed or executive judgment with an authorized client owner. The exact boundary is documented before launch.` },
    { q: 'How should quality be reviewed?', a: `Agree on a representative sample, score the work against written criteria, record the reason for each miss, and assign a coaching or process action. Review trends without turning one isolated case into a broad claim.` },
    { q: 'Can the scope expand later?', a: `Yes. Expand after the starting queue is stable, access is appropriate, handoffs are accepted, and managers can see the outputs. Add one new work lane at a time so responsibility remains clear.` },
  ];
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.desc, url, areaServed: { '@type': 'Country', name: 'Philippines' }, provider: { '@type': 'Organization', '@id': `${base}/#organization`, name: site.brand, url: base } },
    { '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
  ] };

  return <><Header /><main><JsonLd data={schema} />
    <section className="page-hero service-detail-hero"><div className="container page-hero-grid"><div><p className="cco-kicker"><span /> {service.eyebrow}</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><div className="cco-actions"><a className="cco-btn cco-btn-primary" href="/contact-us">Discuss this role <span>↗</span></a><a className="cco-btn cco-btn-ghost" href="/services">All services</a></div></div><div className="page-hero-art"><img src={service.image} alt={`Philippines-based professional illustrating ${service.title.toLowerCase()}`} /></div></div></section>

    <section className="service-detail-layout"><div className="container">
      <div className="service-outcome"><div><h2>Give this work one clear owner.</h2><p className="cco-section-lead">This service fits teams with a repeatable queue, a visible finish line, and managers who can own exceptions. It is less suitable for undefined duties or work where authority cannot be separated safely.</p></div><div className="outcome-card"><span>Operating outcome</span><p>{service.outcome}</p></div></div>

      <section className="service-manual" aria-labelledby="scope-heading"><div><h2 id="scope-heading">Scope the role around real work.</h2><p>Begin with examples rather than a broad title. Show what arrives, where it arrives, which references guide the response, and what must be recorded before the item can close.</p><p>Common starting scenarios include an overloaded queue, inconsistent notes, callbacks without a clear owner, routine work pulling managers away from exceptions, or a new coverage window that needs a controlled pilot.</p></div><VisualFigure src="/visuals/va-workflow.svg" alt={`Workflow from incoming request through review and completion for ${service.title.toLowerCase()}`} /></section>

      <div className="service-columns"><article><h2>Work in scope</h2><ul>{service.tasks.map(item => <li key={item}>{item}</li>)}</ul><p>Inputs normally include live examples, approved references, tool access, coverage hours, and a named owner for decisions.</p></article><article><h2>Client decisions and boundaries</h2><ul>{service.controls.map(item => <li key={item}>{item}</li>)}</ul><p>The offshore team should stop and escalate whenever identity, policy, authorization, or customer risk falls outside the written lane.</p></article><article><h2>Controlled launch</h2><ul>{service.firstWeek.map(item => <li key={item}>{item}</li>)}</ul><p>Start with a reviewable queue and expand only after the team can show complete notes, accepted handoffs, and repeatable quality.</p></article></div>

      <section className="service-workflow-detail"><div><h2>A practical operating workflow</h2><ol><li><strong>Receive and classify.</strong> Confirm the work type, urgency, customer context, and required verification.</li><li><strong>Use the approved source.</strong> Follow the current answer, checklist, or task instruction rather than relying on memory.</li><li><strong>Complete or escalate.</strong> Take only the authorized actions and package every exception for the named owner.</li><li><strong>Record the result.</strong> Update the source system with the outcome, next step, owner, and due time.</li><li><strong>Review a sample.</strong> Managers and the delivery team examine representative work, coach specific gaps, and update the playbook when the process changes.</li></ol></div><aside><h3>Evidence managers can review</h3><div className="deliverable-chips">{service.deliverables.map(item => <span key={item}>{item}</span>)}</div><h3>Typical tools</h3><div className="tool-row">{service.tools.map(item => <span key={item}>{item}</span>)}</div></aside></section>

      <section className="service-quality"><div><h2>Quality should be visible, not assumed.</h2><p>Define what an acceptable result looks like before launch. Review accuracy, required checks, notes, ownership, and customer-facing language against the same written criteria. A useful review produces a specific correction, coaching action, or source update.</p></div><div><h3>Human approval remains explicit</h3><p>Managers retain the decisions identified in the boundary list. The support team gathers facts, follows authorized steps, and hands off a complete record without implying that an offshore role holds authority it was not given.</p></div></section>

      <section className="service-faq" aria-labelledby="service-faq-heading"><h2 id="service-faq-heading">Questions to settle before launch</h2>{faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>

      <section className="service-related"><h2>Related services</h2><div>{related.map(item => <a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><span>Review the service <span aria-hidden="true">→</span></span></a>)}</div></section>
    </div></section>
    <CTA title={`Ready to scope ${service.title.toLowerCase()}?`} text="Share your examples, schedule, tools, and manager-only decisions. We will shape a Philippines-based role brief around the real work." />
  </main><Footer /></>;
}
