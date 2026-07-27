import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

const base = `https://${site.domain.toLowerCase()}`;
export const metadata: Metadata = {
  title: 'Virtual assistant and outsourced team services',
  description: 'Compare Philippines-based executive assistants, virtual customer support, sales support, ecommerce, operations, and quality roles.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Philippines virtual assistant services', url: `${base}/services`, mainEntity: { '@type': 'ItemList', itemListElement: fleetServices.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: `${base}/services/${service.slug}` })) } };
  return <><Header /><main><JsonLd data={schema} />
    <section className="page-hero"><div className="container page-hero-grid"><div><p className="cco-kicker"><span /> Philippines-based support roles</p><h1>Choose the role. Then build the system around it.</h1><p className="lead">Start with the repeatable work that slows your team down. Match it to a virtual assistant, executive assistant, specialist, or small outsourced team.</p><a className="cco-btn cco-btn-primary" href="/contact">Plan my team <span>↗</span></a></div><div className="page-hero-art"><img src="/visuals/philippines-outsourced-team.svg" alt="Philippines-based team of virtual assistants and operations specialists" /></div></div></section>
    <section className="service-index"><div className="container"><div className="cco-heading-row"><div><p className="cco-kicker cco-dark"><span /> Ten practical starting points</p><h2>Support for leaders, customers, sales, and operations.</h2></div><p>Each service page shows the work to include, controls to keep, first-week plan, and useful outputs. Use it as a starting brief, not a rigid package.</p></div><div className="service-filter-row"><span>Assistants</span><span>Customer experience</span><span>Operations</span><span>Quality and reporting</span></div><div className="service-grid-new">{fleetServices.map((service) => <a className="service-card-new" href={`/services/${service.slug}`} key={service.slug}><img src={service.image} alt="" loading="lazy" /><div><span className="service-cat">{service.category}</span><h2>{service.title}</h2><p>{service.desc}</p><b>See the workflow ↗</b></div></a>)}</div></div></section>
    <CTA title="Not sure which role comes first?" text="Show us the work that gets delayed, repeated, or missed. We will help turn it into a practical Philippines-based role brief." />
  </main><Footer /></>;
}
