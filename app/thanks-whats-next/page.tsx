import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'What Happens Next',
  description: 'Preparation guidance for a confirmed StealthAgents consultation.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thanks-whats-next' },
};

export default function ThanksWhatsNextPage() {
  return <><Header /><main className="confirmation-page"><section className="confirmation-hero"><div className="container confirmation-grid"><div><p className="cco-kicker"><span /> Consultation preparation</p><h1>Bring one customer workflow you want to make more reliable.</h1><p className="lead">If the scheduler showed a confirmation, your consultation time is reserved. If you opened this page directly, check your calendar or email before assuming that a booking was completed.</p><div className="cco-actions"><a className="cco-btn cco-btn-primary" href="/services">Review call center services</a><a className="cco-btn cco-btn-ghost" href="/contact-us">Return to Contact Us</a></div></div><aside><h2>Useful details to bring</h2><ul><li>A real customer request and approved answer</li><li>The systems, access, and identity checks involved</li><li>Your coverage hours and overlap needs</li><li>The decisions that remain with your managers</li><li>The handoff or escalation you want recorded</li></ul></aside></div></section><section className="v3-contact-guide"><div className="container"><div className="cco-heading-row"><div><h2>Scope, boundaries, and quality come first.</h2></div><p>The first conversation should clarify what enters the queue, what the offshore team prepares or completes, who reviews exceptions, and what evidence proves the handoff worked.</p></div><div className="v3-journey"><article><h3>Show the input</h3><p>Bring a ticket, call reason, callback request, or other repeatable item that represents the work.</p></article><article><h3>Name the boundary</h3><p>Identify account changes, refunds, sensitive data, and other decisions that need an authorized owner.</p></article><article><h3>Define done</h3><p>Explain the note, status, outcome, or manager receipt that makes each item complete and reviewable.</p></article></div></div></section></main><Footer /></>;
}
