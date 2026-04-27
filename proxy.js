import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher(["/", "/wp-bootcamp(.*)", "/portfolio(.*)", "/projects(.*)", "/about(.*)", "/courses(.*)", "/sign-in(.*)", "/sign-up(.*)"]);

// Define dashboard route
const isDashboardRoute = createRouteMatcher(["/dashboard(.*)"]);

// Standard Clerk Middleware Logic
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // 1. If user is NOT logged in and tries to access a protected route
  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // 2. If user IS logged in
  if (userId) {
    const role = sessionClaims?.metadata?.role;

    // 3. RBAC: Only redirect if role EXISTS and is NOT 'admin'
    if (isDashboardRoute(req) && role && role !== "admin") {
      const url = new URL("/", req.url);
      return NextResponse.redirect(url);
    }
  }
});

// Next.js 16 expects the default export to be the proxy function
export default clerk;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
