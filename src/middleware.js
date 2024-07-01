import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/userData',
  '/profile'
]);

export default clerkMiddleware((auth, req) => {

 // console.log(req, "middleware")
  if (isProtectedRoute(req)) auth().protect();
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


