import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL("/events/all", req.nextUrl.origin);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/events"],
};
