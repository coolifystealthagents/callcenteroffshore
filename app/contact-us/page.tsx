import type { Metadata } from 'next';
import { Footer, Header, CTA } from '../components';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: 'Contact Us for Offshore Call Center Support',
  description: 'Share your queue, schedule, systems, and quality needs with the Philippines staffing team behind Call Center Offshore.',
  alternates: { canonical: '/contact-us' },
  robots: { index: true, follow: true },
};

export default function ContactUsPage() {
  return <><Header /><main className="v3-contact-page">
    <section className="v3-contact-fold">
      <div className="container v3-contact-grid">
        <div className="v3-contact-copy">
          <p className="cco-kicker"><span /> Start with the queue</p>
          <h1>Plan offshore call center support around the work customers actually need.</h1>
          <p className="lead">Tell us the call types, channels, hours, systems, and decisions involved. We will use the brief to prepare a focused staffing conversation.</p>
          <div className="v3-scope" aria-label="Planning scope"><span>Philippines-based talent</span><span>Clear escalation ownership</span><span>Controlled first launch</span></div>
          <TestimonialsRail contact />
        </div>
        <div className="v3-contact-form"><StandardContactForm endpoint="/api/contact" encoding="form" /></div>
      </div>
    </section>

    <section className="v3-parent-proof" aria-labelledby="parent-team-heading">
      <div className="container v3-parent-grid">
        <figure><img src="/images/stealth-agents-team.webp" alt="StealthAgents team in the Bacolod office" width="1600" height="1067" /></figure>
        <div><p className="cco-kicker cco-dark"><span /> The operating team behind your request</p><h2 id="parent-team-heading">Call Center Offshore is powered by StealthAgents.</h2><p>StealthAgents supports the recruiting, matching, onboarding coordination, and managed operations behind inquiries from this site. Your brief helps the team understand the queue before discussing a role or staffing structure.</p><p>The subsidiary remains focused on offshore call center work. StealthAgents provides the people and operating support used to move a qualified request forward.</p><div className="v3-team-plate"><img src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width="149" height="50" /><strong>Official team, Bacolod</strong></div></div>
      </div>
    </section>

    <section className="v3-contact-guide"><div className="container"><div className="cco-heading-row"><div><h2>What happens after you submit?</h2></div><p>This is the first step in a three-part conversion journey. The form captures the operating brief before scheduling begins.</p></div><div className="v3-journey"><article><h3>We review the brief</h3><p>The team checks the role, schedule, systems, volume, and decisions that must remain with your managers.</p></article><article><h3>You choose a meeting time</h3><p>After a successful submission, the thank-you page provides the official StealthAgents OnceHub scheduler.</p></article><article><h3>You prepare one real workflow</h3><p>Once a booking is confirmed, bring an example, access boundaries, quality expectations, and escalation owners.</p></article></div></div></section>

    <section className="v3-contact-guide v3-contact-dark"><div className="container v3-parent-grid"><div><h2>A useful brief is specific.</h2><p>Bring the customer request, the answer source, the actions an agent may take, and the point where a manager must decide. These details are more useful than a broad job title.</p></div><ul><li>Channels and coverage windows</li><li>Typical and high-risk request types</li><li>Systems, permissions, and identity checks</li><li>Escalation and callback ownership</li><li>Quality samples and reporting rhythm</li></ul></div></section>
    <CTA title="Prefer to review the options first?" text="Explore the service system, then return with the queue or workflow you want to scope." />
  </main><Footer /></>;
}
