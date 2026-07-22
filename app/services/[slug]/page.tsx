import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);

  if (!service) return { title: 'Not found' };

  const url = `${base}/services/${slug}`;
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | ${site.brand}`,
      description: service.desc,
      url,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${base}/services/${service.slug}`;
  const serviceId = `${url}#service`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: service.title,
        description: service.desc,
        url,
        mainEntity: { '@id': serviceId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: service.title,
        description: service.desc,
        url,
        areaServed: { '@type': 'Country', name: 'Philippines' },
        provider: {
          '@type': 'Organization',
          '@id': `${base}/#organization`,
          name: site.brand,
          url: base,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="fleet-hero variant-1">
          <div className="container">
            <p className="eyebrow">Philippines-based call center support</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <a className="btn primary" href="/contact">
              Discuss this service
            </a>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-detail-grid">
            <div className="card">
              <h2>Work to include</h2>
              <ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Controls to retain</h2>
              <ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>First-week plan</h2>
              <ul>{service.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
