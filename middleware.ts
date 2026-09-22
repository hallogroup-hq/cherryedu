import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BLOCKED_PATTERNS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/\.aws/i,
  /\/wp-(admin|login|config|includes)/i,
  /\/xmlrpc\.php/i,
  /\/phpmyadmin/i,
  /\/actuator/i,
  /\/\.vscode/i,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Path Traversal & Null Byte Protection
  const rawUrl = request.url;
  if (
    pathname.includes('..') ||
    rawUrl.includes('%2e%2e') ||
    rawUrl.includes('%2E%2E') ||
    rawUrl.includes('%00') ||
    rawUrl.includes('\\')
  ) {
    return new NextResponse('Bad Request: Malformed URI path', { status: 400 });
  }

  // 2. Automated Vulnerability Scanner & Sensitive File Probing Defense
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // 3. API Route Guarding (Ensure JSON body requests have valid Content-Type if POST/PUT)
  if (pathname.startsWith('/api/')) {
    const method = request.method;
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      const contentType = request.headers.get('content-type') || '';
      // Require application/json for our POST routes
      if (!contentType.includes('application/json')) {
        return NextResponse.json(
          { error: 'Invalid Content-Type. Expected application/json.' },
          { status: 415 }
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with common extensions (.svg, .png, .jpg, .jpeg, .webp, .ico)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
