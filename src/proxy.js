import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request) {
  const sessionCookie = getSessionCookie(request);
  if (sessionCookie) {
    return NextResponse.next();
  }

  const nextURL = new URL("/login", request.url);
  nextURL.searchParams.set("redirect", request.nextUrl.pathname);
  return NextResponse.redirect(nextURL);
}

export const config = {
  matcher: ["/details-page/:path*", "/my-profile/:path*"],
};
