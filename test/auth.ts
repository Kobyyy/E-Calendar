import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import PocketBase from 'pocketbase';

 
async function getAuth(user:any){
  try {
    const db = new PocketBase('http://127.0.0.1:8090/')
    const data = await db.collection('Users').authWithPassword(user.username,user.password)
    return db.authStore.isValid
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
async function getUser(username: string): Promise<any | undefined>{
    try {
      const db = new PocketBase('http://127.0.0.1:8090/')
      const data = await db.collection('Users').getFirstListItem(`username = ${username}`)
      return db.authStore.model
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}
    
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().min(6), password: z.string().min(8) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getAuth({username,password});
          if (!user) return null;
          const userData = getUser(username)
          if (user) return userData;
        }
        return null;
      },
    }),
  ],
});