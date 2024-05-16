'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { pb, currentUser } from '../src/lib/pocketbase'

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send a request to the server-side API route for authentication
      await pb.collection('Users').authWithPassword(username,password)
      console.log(currentUser)
      if (pb.authStore.isValid) {
        router.push('/dashboard'); // Redirect to the notes page upon successful login
      } else {
        alert("auth error"); // Display an error message if authentication fails
      }
    } catch (error) {
      console.error('Error during login:', error);
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
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
