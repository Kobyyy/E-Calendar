'use client'
// LoginPage.js

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase'; // Assuming you've installed this package

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const pb = new PocketBase('http://127.0.0.1:8090'); // Adjust the PocketBase URL
      const authData = await pb.collection('Users').authWithPassword(
        username, // Use the actual username entered by the user
        password // Use the actual password entered by the user
      );
      console.log(pb.authStore.isValid)
      if (pb.authStore.isValid) {
        // Redirect to the desired page after successful authentication
        router.push('/notes');
      } else {
        alert('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert(`Error: ${error}`);
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
