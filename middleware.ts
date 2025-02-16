import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import authConfig from "@/auth.config";

import { privateRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.startsWith("/auth");
  const isApiRoute = nextUrl.pathname.startsWith("/api");

  if (isApiRoute) return;

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(`${BASE_URL}/dashboard`);
  }

  if (isAuthRoute && !isLoggedIn) return;

  if (!isLoggedIn && isPrivateRoute) {
    return NextResponse.redirect(`${BASE_URL}/auth/login`);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
