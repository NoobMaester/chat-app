'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const classList = document.documentElement.classList
    if (darkMode) {
      classList.add('dark')
    } else {
      classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-white hover:text-yellow-300 transition"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
