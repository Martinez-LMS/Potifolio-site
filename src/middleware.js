import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const decodedPath = decodeURIComponent(pathname);
  const url = request.url.toLowerCase();

  if (decodedPath.includes('Leonardo') && decodedPath.includes('SAP') && decodedPath.includes('.pdf')) {
    return NextResponse.redirect(new URL('/download/sap', request.url), 301);
  }

  if (decodedPath.includes('Leonardo') && decodedPath.includes('Front') && decodedPath.includes('.pdf')) {
    return NextResponse.redirect(new URL('/download/front', request.url), 301);
  }

  if (url.includes('leonardo') && url.includes('sap') && url.includes('.pdf')) {
    return NextResponse.redirect(new URL('/download/sap', request.url), 301);
  }

  if (url.includes('leonardo') && url.includes('front') && url.includes('.pdf')) {
    return NextResponse.redirect(new URL('/download/front', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/Leonardo M SAP.pdf',
    '/Leonardo%20M%20SAP.pdf',
    '/Leonardo Front.pdf',
    '/Leonardo%20Front.pdf',
    '/Leonardo*',
  ],
};

