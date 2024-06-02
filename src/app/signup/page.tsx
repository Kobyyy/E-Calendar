'use client'
import { pb, currentUser } from '../lib/pocketbase';
import { createSession } from '../lib/createSession';
import { useRouter } from 'next/navigation';
import { createUser } from '../lib/createUser';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send a request to the server-side API route for authentication
      if(await createUser([username,password])){
      await pb.collection('Users').authWithPassword(username,password)
      if (pb.authStore.isValid) {
        await createSession(currentUser,pb.authStore.isValid,username)
        router.push('/dashboard'); // Redirect to the notes page upon successful login
      } 
    }
    else
      alert("username already exists")
    } catch (error) {
      console.error('Error during login:', error);
      alert("Error during signup")
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-blue-500">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
        </div>
      </form>
      <Link href = '/login'>Login</Link>
    </main>
  );
}
