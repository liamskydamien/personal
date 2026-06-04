import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.cookies.has('locale')) {
    return NextResponse.next();
  }

  const acceptLang = request.headers.get('accept-language') ?? '';
  const primary = acceptLang.split(',')[0]?.trim().toLowerCase() ?? '';
  const locale = primary.startsWith('de') ? 'de' : 'en';

  const response = NextResponse.next();
  response.cookies.set({
    name: 'locale',
    value: locale,
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
