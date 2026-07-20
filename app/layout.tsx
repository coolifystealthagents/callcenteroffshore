import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://callcenteroffshore.com'), title: { default: 'Offshore Call Center Services | Call Center Offshore', template: '%s | Call Center Offshore' }, description: 'Plan offshore call center coverage with clear call flows, scripts, QA scorecards, reporting, and escalation rules.', openGraph: { title: 'Call Center Offshore', description: 'Build offshore call center coverage around your queue, call flow, and quality standards.', url: 'https://callcenteroffshore.com', siteName: 'Call Center Offshore', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
