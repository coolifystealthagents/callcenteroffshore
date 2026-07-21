import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request an offshore call center coverage plan. Share the call types, hours, systems, languages, and review needs.',
};

export default function Contact() {
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main className="section">
      <JsonLd data={schema} />
      <div className="container two">
        <div>
          <p className="eyebrow">Coverage request</p>
          <h1>Tell us which calls need coverage.</h1>
          <p className="lead">Share your call types, hours, expected volume, systems, and review needs. The staffing team can use those details to outline the queue and the agents it needs.</p>
          <div className="card">
            <h2>What the team can help you plan</h2>
            <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card">
            <h2>Details worth adding</h2>
            <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
          </div>
          <p className="callout"><b>Why these details matter:</b> {staffingFitNote}</p>
        </div>
        <form className="card" action="/thank-you">
          <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Company / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Which calls, hours, and systems should the team cover?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>What needs the most attention?<br />
            <select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
              <option>Agent fit and phone skills</option>
              <option>Call quality and reporting</option>
              <option>Coverage hours and overflow</option>
              <option>System access and customer data</option>
              <option>Scripts and manager escalations</option>
            </select>
          </label>
          <button className="btn" type="submit">Send coverage request</button>
        </form>
      </div>
    </main>
    <Footer />
  </>;
}
