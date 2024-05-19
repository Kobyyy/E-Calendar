'use server'
import 'server-only'
import {cookies} from 'next/headers'
 
export async function createSession(user:any,auths:any,username:string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  cookies().set({
    name: 'UID',
    value: user.id,
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
    cookies().set({
    name: `auth:${user.id}`,
    value: auths,
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession(user:any) {
    cookies().set('UID', '', { 
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/', }) 
    cookies().set(`auth:${user.id}`, '', { 
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/', })
}
