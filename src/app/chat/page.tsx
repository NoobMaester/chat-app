'use client'

import Sidebar from '@/components/Sidebar'
import ChatWindow from '@/components/ChatWindow'
import Header from '@/components/Header'
import ProtectedRoute from '@/lib/ProtectedRoute'
import { useState } from 'react'

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <ProtectedRoute>
    <div className="h-screen flex flex-col">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
        <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar with mobile responsiveness */}
          <div className={`
            fixed md:relative
            top-0 left-0
            w-64 md:w-80
            h-full
            transform
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            transition-transform duration-300 ease-in-out
            z-40
            shadow-lg md:shadow-none
            bg-white dark:bg-gray-900
            rounded-r-lg md:rounded-none
          `}>
            <Sidebar />
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Main chat window */}
          <div className="flex flex-1 overflow-hidden">
            <ChatWindow />
          </div>
        </div>
    </div>
    </ProtectedRoute>
  )
}
