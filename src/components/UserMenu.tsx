"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/auth";


interface HeaderProps {
  onMenuClick: () => void;
}

export default function UserMenu({ onMenuClick }: HeaderProps) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return null;

  return (
    <>
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      <Link href="/">
        <h1 className="text-lg font-bold">Blip</h1>
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <span className="text-sm px-4">{user.displayName}</span>
        <button
          className="border border-violet-900 text-white px-2 py-1 rounded cursor-pointer hover:bg-white hover:text-[#7b3cd3] text-sm"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
}
