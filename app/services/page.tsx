import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

const base = `https://${site.domain.toLowerCase()}`;
const servicesUrl = `${base}/services`;

export const metadata: Metadata = {
  title: 'Call center services',
  description:
    'Compare call center services delivered by Filipino specialists, with clear scripts, access limits, records, and manager escalation rules.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: `Call center services | ${site.brand}`,
    description:
      'Compare Philippines-based call center services for inbound support, scheduling, billing, lead qualification, and quality review.',
    url: servicesUrl,
    type: 'website',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${servicesUrl}#collection`,
  name: 'Call Center Offshore services',
  description: metadata.description,
  url: servicesUrl,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: fleetServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${servicesUrl}/${service.slug}`,
    })),
  },
};

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <JsonLd data={servicesSchema} />
        <section className="fleet-hero variant-1">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Call Center Offshore services</h1>
            <p className="lead">
              Choose a focused call center workflow, then define its tools, schedule, approvals, and handoffs.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-service-grid">
            {fleetServices.map((service, index) => (
              <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <b>View service →</b>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
