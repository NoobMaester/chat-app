
'use client'

import { useState } from 'react'
import { sendMessage } from '../lib/sendMessage'
import { useAuth } from '../context/AuthContext'

export default function MessageInput() {
  const [message, setMessage] = useState('')
  const {user} = useAuth() 

  const handleSend = async () => {
    if (!user || !message.trim()) return
    await sendMessage(message, user.uid)
    console.log('Send:', message)
    setMessage('')
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border border-[#b492e4] rounded px-4 py-2 text-gray-800 focus:outline-none dark:text-gray-100"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-[#7a3fd1] text-gray-100 px-4 py-2 rounded hover:bg-[#b492e4]"
      >
        Send
      </button>
    </div>
  )
}

