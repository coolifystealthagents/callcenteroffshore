import examples from '../../_refresh/service-examples.json';
import practiceData from '../../_refresh/service-practice.json';
import { Motion } from '../../_refresh/Motion';
import refreshContent from '../../_refresh/content.json';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
export function generateStaticParams() { return fleetServices.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find(item => item.slug === slug);
  if (!service) return { title: 'Not found', robots: { index: false, follow: false } };
  return { title: service.title, description: service.desc, alternates: { canonical: `${base}/services/${slug}` }, openGraph: { title: service.title, description: service.desc, url: `${base}/services/${slug}`, images: [{ url: `${base}${refreshContent.services.find(x=>x.slug===slug)?.image || service.image}`, alt: service.title }] } };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find(item => item.slug === slug);
  if (!service) notFound();
  const related = fleetServices.filter(item => item.slug !== service.slug && item.category === service.category).slice(0, 3);
  const url = `${base}/services/${service.slug}`;
  const example = examples[slug as keyof typeof examples];
  const practice = practiceData[slug as keyof typeof practiceData];
  if (!example || !practice) notFound();
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

  return <><Header /><main id="main-content" className="rf-page cco-detail"><Motion><JsonLd data={schema} />
    <section className="page-hero service-detail-hero"><div className="container page-hero-grid"><div><p className="cco-kicker"><span /> {service.eyebrow}</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><div className="cco-actions"><a className="cco-btn cco-btn-primary" href="/contact-us">Discuss this role <span>â†—</span></a><a className="cco-btn cco-btn-ghost" href="/services">All services</a></div></div><div className="page-hero-art"><Image src={refreshContent.services.find(x=>x.slug===slug)!.image} alt={refreshContent.services.find(x=>x.slug===slug)!.imageAlt} width={1600} height={900} sizes="(max-width: 850px) 100vw, 43vw" priority /></div></div></section>

    <section className="service-detail-layout"><div className="container">
      <div className="service-outcome"><div><h2>Give this work one clear owner.</h2><p className="cco-section-lead">This service fits teams with a repeatable queue, a visible finish line, and managers who can own exceptions. It is less suitable for undefined duties or work where authority cannot be separated safely.</p></div><div className="outcome-card"><span>Operating outcome</span><p>{service.outcome}</p></div></div>

      <section className="service-manual" aria-labelledby="scope-heading"><div><p className="rf-eyebrow">In a working day</p><h2 id="scope-heading">{example[0]}</h2><p>{example[1]}</p><p>{example[2]}</p></div><aside className="cco-example"><h3>What a completed handoff contains</h3><p>{example[3]}</p><dl><div><dt>Context</dt><dd>The request, the relevant record and what has already been checked.</dd></div><div><dt>Ownership</dt><dd>The person responsible for the next action and the agreed response time.</dd></div><div><dt>Follow-through</dt><dd>The current status and the update the customer or next team can expect.</dd></div></dl></aside></section>

      <div className="service-columns"><article><h2>Work in scope</h2><ul>{service.tasks.map(item => <li key={item}>{item}</li>)}</ul><p>Inputs normally include live examples, approved references, tool access, coverage hours, and a named owner for decisions.</p></article><article><h2>Client decisions and boundaries</h2><ul>{service.controls.map(item => <li key={item}>{item}</li>)}</ul><p>The offshore team should stop and escalate whenever identity, policy, authorization, or customer risk falls outside the written lane.</p></article><article><h2>Controlled launch</h2><ul>{service.firstWeek.map(item => <li key={item}>{item}</li>)}</ul><p>Start with a reviewable queue and expand only after the team can show complete notes, accepted handoffs, and repeatable quality.</p></article></div>

      <section className="service-workflow-detail"><div><h2>How this work moves.</h2><ol>{practice.steps.map((step, index) => <li key={step}><strong>{['Check the source.', 'Handle the request.', 'Leave a clear handoff.'][index]}</strong> {step}</li>)}</ol></div><aside><h3>Evidence managers can review</h3><div className="deliverable-chips">{service.deliverables.map(item => <span key={item}>{item}</span>)}</div><h3>Typical tools</h3><div className="tool-row">{service.tools.map(item => <span key={item}>{item}</span>)}</div></aside></section>

      <section className="service-quality"><div><h2>Review the work before expanding.</h2><p>{practice.review}</p></div><div><h3>A handoff worth checking</h3><p>{example[3]}</p></div></section>

      <section className="service-faq" aria-labelledby="service-faq-heading"><h2 id="service-faq-heading">Questions to settle before launch</h2>{faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>

      <section className="service-related"><h2>Related services</h2><div>{related.map(item => { const photo = refreshContent.services.find((entry) => entry.slug === item.slug); return <a href={`/services/${item.slug}`} key={item.slug}>{photo && <Image src={photo.image} alt={photo.imageAlt} width={640} height={420} sizes="(max-width: 850px) 100vw, 33vw" />}<h3>{item.title}</h3><p>{item.desc}</p><span>Review the service <span aria-hidden="true">â†’</span></span></a>; })}</div></section>
    </div></section>
    <CTA title={`Ready to scope ${service.title.toLowerCase()}?`} text="Share your examples, schedule, tools, and manager-only decisions. We will shape a Philippines-based role brief around the real work." />
  </Motion></main><Footer /></>;
}
