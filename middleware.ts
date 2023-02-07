import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  console.log("Middleware", request.nextUrl);

  if (!["/", "/signup"].includes(request.nextUrl.pathname)) {
    const redirectUrl = new URL("/signup", request.nextUrl);
    redirectUrl.searchParams.set("message", "redirected-from-middleware");
    return NextResponse.redirect(redirectUrl);
  }
};

export const config = {
  matcher: [
    "/((?!api/|_next/static|favicon.ico|fonts).*)",
  ],
};
