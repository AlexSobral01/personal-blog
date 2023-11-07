import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {
  const isPrivateRoutes = request.nextUrl.pathname.startsWith('/private');
  const isAdminUser = request.nextauth.token?.role == 'admin';

  if (isPrivateRoutes && !isAdminUser) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
const callbackOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/admin'
}