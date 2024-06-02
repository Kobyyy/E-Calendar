'use client'
import Link from 'next/link';

export default function SignupPage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-blue-500">
      <Link href = '/login' className=' c'>Login</Link>
      <Link href = '/signup'>Signup</Link>
    </main>
  );
}
