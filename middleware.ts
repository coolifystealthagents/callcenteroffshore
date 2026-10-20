import { NextRequest, NextResponse } from 'next/server';

const APEX_HOST = 'callcenteroffshore.com';
const WWW_HOST = 'www.callcenteroffshore.com';
const CANONICAL_ORIGIN = 'https://callcenteroffshore.com';

function trustedScheme(request: NextRequest) {
  const visitor = request.headers.get('cf-visitor');
  if (visitor) {
    try {
      const parsed = JSON.parse(visitor) as { scheme?: unknown };
      if (parsed.scheme === 'http' || parsed.scheme === 'https') return parsed.scheme;
    } catch {}
  }
  const forwarded = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase();
  if (forwarded === 'http' || forwarded === 'https') return forwarded;
  return request.nextUrl.protocol === 'http:' ? 'http' : 'https';
}

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim().toLowerCase();
  const host = (forwardedHost || request.headers.get('host') || '').split(':')[0].toLowerCase();
  if (host !== APEX_HOST && host !== WWW_HOST) return NextResponse.next();
  if (host === APEX_HOST && trustedScheme(request) === 'https') return NextResponse.next();

  const destination = new URL(CANONICAL_ORIGIN);
  destination.pathname = request.nextUrl.pathname;
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
