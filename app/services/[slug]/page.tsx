import { Header, Footer, CTA } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || 'Call center service', description: service?.desc };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];

  return <>
    <Header />
    <main>
      <section className="service-hero">
        <div className="container two">
          <div>
            <p className="eyebrow">Offshore call center service</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <a className="btn" href="/contact">Scope this service</a>
          </div>
          <div className="hero-card">
            <img src={site.serviceImage} alt={`${service.title} team at work`} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cards">
          <div className="card">
            <h2>Calls and tasks to include</h2>
            <ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
          </div>
          <div className="card">
            <h2>Checks to keep in place</h2>
            <ul>{service.controls.map((control) => <li key={control}>{control}</li>)}</ul>
          </div>
          <div className="card">
            <h2>What to do in week one</h2>
            <ul>{service.firstWeek.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>;
}
