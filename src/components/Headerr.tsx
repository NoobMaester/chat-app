import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Headerr() {
  return (
    <header className="bg-[#7b3cd3] text-gray-100 py-2 flex justify-around items-center">
      <Link href="/">
        <h1 className="text-xl font-bold">Blip</h1>
      </Link>
      
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
        <ThemeToggle/>
      </nav>
    </header>
  );
}
