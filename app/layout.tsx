import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://callcenteroffshore.com'), title: { default: 'Call Center Offshore | Offshore outsourcing guides', template: '%s | Call Center Offshore' }, description: 'Stealth Agents-style guides for offshore call center: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Call Center Offshore', description: 'Practical outsourcing guides for business teams.', url: 'https://callcenteroffshore.com', siteName: 'Call Center Offshore', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
