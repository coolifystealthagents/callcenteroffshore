import { Header, Footer } from '../components';

export default function Thanks() {
  return <>
    <Header />
    <main className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Request received</p>
        <h1>Thanks. Your coverage details are in.</h1>
        <p className="lead">The staffing team can review the queue, hours, systems, and call-quality needs you shared before following up.</p>
        <a className="btn" href="/blog">Read the call center guides</a>
      </div>
    </main>
    <Footer />
  </>;
}
