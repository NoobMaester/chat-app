import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-[#7b3cd3] text-white p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-lg font-bold">Blip</h1>
      </Link>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <span className="text-sm px-4">Username</span>
        <button className="border border-violet-900 text-white px-2 py-1 rounded cursor-pointer hover:bg-white hover:text-[#7b3cd3] text-sm">
          Logout
        </button>
      </div>
    </header>
  );
}
