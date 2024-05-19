import {NextResponse, type NextRequest} from 'next/server'
import {cookies} from 'next/headers'
  
export default async function middleware (request: NextRequest) {
  const cookieStore = cookies()
  if(cookieStore.has(`UID`)){
      const id = cookieStore.get(`UID`).value
      const auths = cookieStore.get(`auth:${id}`).value
      console.log(`auths ${auths}`)
      if (auths) {
        return NextResponse.next();
        // return  NextResponse.redirect(new URL('/login', request.url));

      }
    }
    return  NextResponse.redirect(new URL('/login', request.url));
};

export const config = {
  matcher: "/dashboard"
}