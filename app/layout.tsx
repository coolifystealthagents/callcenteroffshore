import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './redesign.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://callcenteroffshore.com'),
  title: { default: 'Call Center Offshore | Philippines Virtual Assistants', template: '%s | Call Center Offshore' },
  description: 'Build a Philippines-based team of virtual assistants, executive assistants, customer support specialists, and operations coordinators around clear work and safe handoffs.',
  openGraph: { title: 'Call Center Offshore', description: 'Philippines-based virtual assistants and outsourced teams built around your goals, workflows, and management controls.', url: 'https://callcenteroffshore.com', siteName: 'Call Center Offshore', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'call-center-offshore',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
