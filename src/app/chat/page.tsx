
'use client'

import Sidebar from '@/components/Sidebar'
import ChatWindow from '@/components/ChatWindow'
import Header from '@/components/Header'

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  )
}
