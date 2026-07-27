import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as any).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" /><span className="logo-name">{site.brand}</span></span>;
}

export function Header({ hidePricing = false }: { hidePricing?: boolean } = {}) {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
      <nav className="links fleet-nav" aria-label="Main navigation">
        <a href="/services">Services</a>
        {!hidePricing && <a href="/pricing">Pricing</a>}
        <a href="/blog">Guides</a>
        <a href="/research">Research</a>
        <a className="nav-cta" href="/contact">Build my team <span aria-hidden="true">↗</span></a>
      </nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
        <div><a href="/services">Services</a>{!hidePricing && <a href="/pricing">Pricing</a>}<a href="/blog">Guides</a><a href="/research">Research</a><a href="/contact">Build my team</a></div>
      </details>
    </div>
  </header>;
}

export function VisualFigure({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return <figure className={`cco-visual ${className}`}><img src={src} alt={alt} />{caption && <figcaption>{caption}</figcaption>}</figure>;
}

export function Footer({ hidePricing = false }: { hidePricing?: boolean } = {}) {
  return <footer className="footer legit-footer">
    <div className="footer-topline"><span>PHILIPPINES-ONLY TALENT</span><b>Assistants who fit the work. Systems that keep you in control.</b></div>
    <div className="footer-grid">
      <div className="footer-brand"><a className="footer-logo" href="/"><LogoMark /></a><p>Build a Philippines-based virtual assistant or outsourced team around clear tasks, tools, approvals, and manager handoffs.</p><p className="footer-note">We recruit talent only in the Philippines. Submitted requests may be routed to our private staffing team for follow-up.</p></div>
      <div><h3>Popular roles</h3><div className="footer-links">{fleetServices.slice(0, 6).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}</div></div>
      <div><h3>Explore</h3><div className="footer-links"><a href="/services">All services</a>{!hidePricing && <a href="/pricing">Pricing</a>}<a href="/blog">Guides</a><a href="/research">Research</a><a href="/contact">Contact us</a></div></div>
      <div><h3>Legal</h3><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cancellation-policy">Cancellation policy</a></div></div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div>
  </footer>;
}

export function CTA({ title = 'What could the right assistant take off your plate?', text = 'Share the role, tools, hours, and outcomes you need. We will use that brief to shape a Philippines-based staffing plan.' }: { title?: string; text?: string }) {
  return <section className="cco-final"><div className="container cco-final-inner"><div><p className="cco-kicker"><span /> Start with the work</p><h2>{title}</h2><p>{text}</p></div><a className="cco-btn cco-btn-primary" href="/contact">Plan my team <span>↗</span></a></div></section>;
}
