
'use client'

import { useState } from 'react'
//import { createUserWithEmailAndPassword } from 'firebase/auth'
//import { auth } from '../../firebase/config'
//import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [error, setError] = useState('')
  //const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <p className="text-red-500 mb-2"></p>
      <input
        className="border p-2 mb-2 w-64"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-64"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        //onClick={handleRegister}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Register
      </button>
    </main>
  )
}
