/** @type {import("next").NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://go.oncehub.com; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https://acrtracking.stealthagents.us https://go.oncehub.com; frame-src https://go.oncehub.com; upgrade-insecure-requests" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/icon.svg' }];
  },
  async redirects() {
    return [
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/cancellation', destination: '/cancellation-policy', permanent: true },
      { source: '/services/admin-support', destination: '/services/order-and-billing-support', permanent: true },
      { source: '/services/back-office-support', destination: '/services/order-and-billing-support', permanent: true },
      { source: '/services/customer-support', destination: '/services/inbound-customer-care', permanent: true },
      { source: '/services/multilingual-call-center', destination: '/services/inbound-customer-care', permanent: true },
      { source: '/services/operations-support', destination: '/services/order-and-billing-support', permanent: true },
      { source: '/services/outbound-calling', destination: '/services/outbound-lead-qualification', permanent: true },
      { source: '/services/reporting-and-qa', destination: '/services/call-quality-monitoring', permanent: true },
      { source: '/services/reporting-and-quality-assurance', destination: '/services/call-quality-monitoring', permanent: true },
      { source: '/services/workforce-management', destination: '/services/after-hours-answering', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.callcenteroffshore.com' }], destination: 'https://callcenteroffshore.com/:path*', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
export default nextConfig;
