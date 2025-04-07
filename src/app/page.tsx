"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Headerr from "@/components/Headerr";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/chat");
    }
  }, [router]);
  
  return (
    <>
      <Headerr />

      <main className="flex flex-col md:flex-row items-center justify-center min-h-[86.5vh] bg-white text-center px-4 gap-8">
        <div className="w-full max-w-2xl py-4">
          <Image
            src="/hero.svg"
            alt="Chat App Hero Illustration"
            width={800}
            height={600}
            className="w-full"
            priority
            loading="eager"
          />
        </div>

        <div className="max-w-3xl py-4">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real-time chat made easy.
          </h1>

          <p className="text-gray-600 dark:text-gray-600 text-lg mb-8">
            Connect with friends and family instantly. Secure, simple, and fun.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="bg-[#5c0ccb] text-gray-100 px-6 py-2 rounded hover:bg-[#4a0aa3] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/register"
              className="bg-gray-100 text-[#5c0ccb] px-6 py-2 border border-[#5c0ccb] rounded hover:bg-[#4a0aa3] hover:text-gray-100 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
