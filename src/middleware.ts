import { NextRequest, NextResponse } from 'next/server';

export default function middlware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/rahexx')) {
    return NextResponse.rewrite(new URL('/rahexx/info', request.url));
  }
}
