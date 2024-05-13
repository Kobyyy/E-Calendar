'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PocketBase from 'pocketbase';

export default function LoginPage() {
  const router = useRouter()
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async()=> {
    try{
        const db = new PocketBase('http://127.0.0.1:8090')
        const authData = await db.collection('Users').authWithPassword(username,password)
        if (db.authStore.isValid) {
            router.push('/notes')
          } else {
            // Handle errors
          }
    }catch(e){
        alert(e + " " + username + " " + password )
    } 
  }
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-blue-500">
    <form onSubmit={handleSubmit}>
        <div>
      <input type="text" placeholder="Username" required value={username} onChange={(e) =>setUsername(e.target.value)}/>
      <input type="password"  placeholder="Password" required value={password} onChange={(e) =>setPassword(e.target.value)} />
      <button type="submit">Login</button>
        </div>
    </form>
    </main>
  )
}