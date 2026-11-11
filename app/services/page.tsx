import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

const base = `https://${site.domain.toLowerCase()}`;

export const metadata: Metadata = {
  title: 'Offshore Call Center and Virtual Assistant Services',
  description: 'Browse Philippines-based customer support, assistant, and operations roles by business need, scope, and management boundary.',
  alternates: { canonical: `${base}/services` },
};

const laneOrder = ['Customer experience', 'Assistants', 'Operations'] as const;
const laneContent = {
  'Customer experience': {
    label: 'Customer experience',
    heading: 'Keep customer queues moving.',
    description: 'Choose this lane when calls, tickets, onboarding steps, or after-hours requests need a clear first owner and a reliable escalation path.',
    marker: 'CX',
  },
  Assistants: {
    label: 'Leadership and sales',
    heading: 'Protect focus and follow-through.',
    description: 'Choose this lane when calendars, prospecting, meeting follow-up, or recurring coordination are pulling specialists away from higher-value work.',
    marker: 'AS',
  },
  Operations: {
    label: 'Business operations',
    heading: 'Make recurring work visible.',
    description: 'Choose this lane when orders, billing updates, store records, scheduling, or quality reviews need documented ownership and evidence.',
    marker: 'OP',
  },
} as const;

const needs = [
  {
    number: 'Calls and tickets',
    title: 'Customers are waiting too long.',
    text: 'Start with customer care, technical support, customer success, or after-hours coverage.',
    href: '#customer-experience',
    link: 'View customer roles',
  },
  {
    number: 'Calendar and pipeline',
    title: 'Leaders and sellers are buried in follow-up.',
    text: 'Start with an executive and calendar assistant or a sales support assistant.',
    href: '#assistants',
    link: 'View assistant roles',
  },
  {
    number: 'Orders and records',
    title: 'Routine operations keep slipping.',
    text: 'Start with order, ecommerce, healthcare admin, or quality and reporting support.',
    href: '#operations',
    link: 'View operations roles',
  },
] as const;

const faqs = [
  { q: 'Do we need a complete playbook before contacting the team?', a: 'No. Bring a few real examples, the tools involved, current owners, expected coverage, and the decisions that must stay with your managers. The first lane can be documented during scoping.' },
  { q: 'Can one role cover several channels?', a: 'Yes, when the channels share the same answers, ownership rules, systems, and quality checks. Split the work when the required judgment, access, or management owner changes.' },
  { q: 'How should a pilot begin?', a: 'Choose one visible queue, define its finish line and escalation owner, review a representative sample, and expand only after notes and handoffs are dependable.' },
  { q: 'Who manages sensitive exceptions?', a: 'Your authorized owner retains policy exceptions, money movement, sensitive account changes, commercial promises, and decisions requiring licensed or executive judgment.' },
];

export default function Services() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', name: 'Offshore support services', url: `${base}/services`, description: metadata.description },
    { '@type': 'ItemList', itemListElement: fleetServices.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: `${base}/services/${service.slug}` })) },
    { '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
  ] };

  return <><Header /><main className="services-directory"><JsonLd data={schema} />
    <section className="services-directory-hero">
      <div className="container services-directory-hero-grid">
        <div className="services-directory-intro">
          <p className="cco-kicker"><span /> Philippines-based support directory</p>
          <h1>Find the support lane that fits the work.</h1>
          <p className="lead">Browse by the queue that is slowing your team down. Each role page shows the work in scope, manager-only decisions, first-week launch plan, tools, and evidence to review.</p>
          <div className="cco-actions"><a className="cco-btn cco-btn-primary" href="#service-directory">Browse all roles <span aria-hidden="true">↓</span></a><a className="cco-btn services-text-link" href="/contact-us">Help me choose <span aria-hidden="true">↗</span></a></div>
        </div>
        <aside className="services-quick-index" aria-label="Service directory quick links">
          <p>Jump to a support lane</p>
          {laneOrder.map(category => {
            const lane = laneContent[category];
            const count = fleetServices.filter(service => service.category === category).length;
            return <a href={`#${category.toLowerCase().replace('customer experience', 'customer-experience')}`} key={category}>
              <span>{lane.marker}</span><div><strong>{lane.label}</strong><small>{count} focused roles</small></div><b aria-hidden="true">→</b>
            </a>;
          })}
          <small>Not sure where to begin? Start with the delayed or repeated work, not a broad job title.</small>
        </aside>
      </div>
    </section>

    <section className="services-need-finder" aria-labelledby="need-heading">
      <div className="container">
        <div className="services-section-heading"><div><p className="cco-kicker"><span /> Find by need</p><h2 id="need-heading">What is breaking down today?</h2></div><p>Use the symptom you can see to narrow the first role. You can add adjacent work after one lane is stable.</p></div>
        <div className="services-need-grid">{needs.map(need => <a href={need.href} key={need.title}><span>{need.number}</span><h3>{need.title}</h3><p>{need.text}</p><b>{need.link} <span aria-hidden="true">→</span></b></a>)}</div>
      </div>
    </section>

    <section className="services-catalog" id="service-directory" aria-labelledby="directory-heading">
      <div className="container">
        <div className="services-catalog-heading"><p className="cco-kicker"><span /> Complete directory</p><h2 id="directory-heading">Ten roles. Three clear lanes.</h2><p>Compare the work, expected outcome, and role boundary before opening a detailed service brief.</p></div>
        {laneOrder.map(category => {
          const lane = laneContent[category];
          const services = fleetServices.filter(service => service.category === category);
          return <section className="services-lane" id={category.toLowerCase().replace('customer experience', 'customer-experience')} key={category} aria-labelledby={`${lane.marker.toLowerCase()}-heading`}>
            <header><span>{lane.marker}</span><div><p>{lane.label}</p><h3 id={`${lane.marker.toLowerCase()}-heading`}>{lane.heading}</h3></div><p>{lane.description}</p></header>
            <div className="services-lane-list">{services.map((service, index) => <a href={`/services/${service.slug}`} key={service.slug}>
              <span>{index + 1}</span><div><small>{service.eyebrow}</small><h4>{service.title}</h4><p>{service.desc}</p></div><div className="services-service-outcome"><small>Operating outcome</small><p>{service.outcome}</p></div><b aria-hidden="true">↗</b>
            </a>)}</div>
          </section>;
        })}
      </div>
    </section>

    <section className="services-fit-guide" aria-labelledby="fit-guide-heading">
      <div className="container services-fit-grid">
        <div><p className="cco-kicker"><span /> Operating fit</p><h2 id="fit-guide-heading">Choose the first lane by ownership, not headcount.</h2><p>A useful starting role has repeatable Inputs, explicit Boundaries, visible Outputs, and a Review rhythm that managers can sustain.</p><a href="/contact-us">Turn the work into a role brief <span aria-hidden="true">↗</span></a></div>
        <div className="services-fit-table" role="table" aria-label="How to choose the first lane">
          <div role="row"><strong role="columnheader">How to choose the first lane</strong><strong role="columnheader">Question to answer</strong></div>
          <div role="row"><b role="cell">Inputs</b><span role="cell">What arrives, through which channel, and with which reference?</span></div>
          <div role="row"><b role="cell">Boundaries</b><span role="cell">Which actions are allowed, and which owner handles exceptions?</span></div>
          <div role="row"><b role="cell">Outputs</b><span role="cell">What record, note, status, or handoff proves completion?</span></div>
          <div role="row"><b role="cell">Review</b><span role="cell">Which sample will managers inspect, and how often?</span></div>
        </div>
      </div>
    </section>

    <section className="services-index-faq service-faq" aria-labelledby="services-faq-heading"><div className="container"><p className="cco-kicker"><span /> Direct answers</p><h2 id="services-faq-heading">Questions about offshore support services</h2>{faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
    <CTA title="Not sure which role comes first?" text="Show us the work that gets delayed, repeated, or missed. We will help turn it into a practical Philippines-based role brief." />
  </main><Footer /></>;
}
