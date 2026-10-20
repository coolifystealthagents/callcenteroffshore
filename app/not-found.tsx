import { Footer, Header } from './components';

export default function NotFound() {
  return <><Header /><main className="not-found-page"><section className="container"><p className="cco-kicker cco-dark"><span /> Page not found</p><h1>This route is outside the call flow.</h1><p className="lead">The page may have moved or the address may be incomplete. Continue with the service overview or send the staffing team your support brief.</p><div className="cco-actions"><a className="cco-btn cco-btn-primary" href="/services">Explore services</a><a className="cco-btn cco-btn-ghost" href="/contact-us">Contact Us</a></div></section></main><Footer /></>;
}
