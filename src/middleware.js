// import { authMiddleware } from "@clerk/nextjs";

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({});
 
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
import { NextResponse } from "next/server"; 
export function middleware(req) {
    const origin = req.headers.get('origin')
    console.log(origin)
 
    console.log("Middleware!");
 
    console.log(req.method)
    console.log(req.url)
    return NextResponse.next()
}

export const config = {
    matcher:"/api/:path*",
}