'use client';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/chat');
    }
  }, [router])
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl font-bold text-gray-500 mb-4">Welcome to Blip</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Connect with friends in real-time. Simple. Fast. Secure.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-50"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
