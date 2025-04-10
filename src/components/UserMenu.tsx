"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";   
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/auth";

export default function UserMenu() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return null;

  return (
    <>
      <Link href="/">
        <h1 className="text-lg font-bold">Blip</h1>
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <span className="text-sm px-4">{user.displayName}</span>
        <button className="border border-violet-900 text-white px-2 py-1 rounded cursor-pointer hover:bg-white hover:text-[#7b3cd3] text-sm" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}
