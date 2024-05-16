import type { NextAuthConfig } from 'next-auth';
import {auth} from './app/lib/pocketbase'
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ request: { nextUrl } }) {
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      console.log(isOnDashboard)
      if (isOnDashboard) {
        if (auth) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (auth) {
        return Response.redirect(new URL('/dashboard'));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;