import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata: Metadata = {
  title: 'Thank You - Book A Meeting',
  description: 'Choose a convenient time to speak with the Stealth Agents team.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="sa-booking-page">
        <div className="container sa-booking-grid">
          <div className="sa-booking-left">
            <p className="sa-booking-kicker">Your support brief was received.</p>
            <h1>Choose a time for the staffing conversation.</h1>
            <p className="sa-booking-lead">Use the official StealthAgents scheduler. A time is not reserved until OnceHub shows a successful confirmation.</p>
            <img className="sa-booking-image" src="/thank-you-hero.png" alt="Stealth Agents team ready to help" width="619" height="402" />
            <TestimonialsRail />
          </div>
          <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title">
            <h2 id="booking-calendar-title">Pick a time that works for you</h2>
            <iframe
              src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1"
              id="SOI_StealthAgentsTeam"
              name="ScheduleOnceIframe"
              title="Schedule a meeting with Stealth Agents"
              scrolling="yes"
              frameBorder="0"
              height="850"
              width="100%"
              className="sa-oncehub-frame"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p className="sa-booking-next">After OnceHub confirms your meeting, continue to <a href="/thanks-whats-next">consultation preparation</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
