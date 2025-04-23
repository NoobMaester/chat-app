'use client'

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Headerr() {
  const { user } = useAuth(); // Get the current user from AuthContext
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/chat");
    }
  }, [user, router]);

  return (
    <header className="bg-[#7b3cd3] w-full border-b border-[#9158e0] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
          >
            <h1 className="text-2xl font-bold tracking-tight">Blip</h1>
          </Link>

          <nav className="flex items-center gap-6">
            {!user ? ( // Show Login/Register links only if the user is not logged in
              <>
                <Link
                  href="/login"
                  className="text-gray-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Register
                </Link>
              </>
            ) : (
              <p className="text-gray-100 text-sm font-medium">
                Hello, {user.displayName || "User"}!
              </p>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
