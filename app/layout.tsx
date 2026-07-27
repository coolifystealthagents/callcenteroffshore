import './globals.css';
import './redesign.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://callcenteroffshore.com'),
  title: { default: 'Philippines Virtual Assistants & Outsourced Teams | Call Center Offshore', template: '%s | Call Center Offshore' },
  description: 'Build a Philippines-based team of virtual assistants, executive assistants, customer support specialists, and operations coordinators around clear work and safe handoffs.',
  openGraph: { title: 'Call Center Offshore', description: 'Philippines-based virtual assistants and outsourced teams built around your goals, workflows, and management controls.', url: 'https://callcenteroffshore.com', siteName: 'Call Center Offshore', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
