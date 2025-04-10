import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Headerr() {
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
            <ThemeToggle/>
          </nav>
        </div>
      </div>
    </header>
  );
}
