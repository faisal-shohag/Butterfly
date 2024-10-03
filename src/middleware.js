import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/store')
                        || req.nextUrl.pathname.startsWith('/profile')
                        || req.nextUrl.pathname.startsWith('/forum')
                        || req.nextUrl.pathname.startsWith('/exchanges')
                        || req.nextUrl.pathname.startsWith('/api/auth/set_username')
  
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))
  }

  if (isLoggedIn && req.auth?.user && !req.auth.user.username) {
    if (!req.nextUrl.pathname.startsWith('/api/auth/set_username')) {
      return NextResponse.redirect(new URL('/api/auth/set_username', req.url))
    }
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}