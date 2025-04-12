'use client'

import { useState } from 'react'
import { sendMessage } from '../lib/sendMessage'
import { useAuth } from '../context/AuthContext'
import { setTypingStatus } from '@/lib/setTypingStatus'


export default function MessageInput() {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()

  let typeTypingTimeout: ReturnType<typeof setTimeout> 

  const handleTyping = (value: string) => {
    setMessage(value)
    if (user) {
      setTypingStatus(user.uid, true)
      clearTimeout(typeTypingTimeout)
      typeTypingTimeout = setTimeout(() => {
        setTypingStatus(user.uid, false)
      }, 2000)
    }
  }

  const handleSend = async () => {
    if (!user || !message.trim() || isLoading) return

    try {
      setIsLoading(true)
      await sendMessage(message.trim(), user.uid)
      setMessage('')
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={message}
        onFocus={() => user && setTypingStatus(user.uid, true)}
        disabled={isLoading}
        onChange={(e) => {
          setMessage(e.target.value);
          handleTyping(e.target.value);
        }}
        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 rounded 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100
          border border-[#b492e4] dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-[#7a3fd1]
          disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        onClick={handleSend}
        disabled={!message.trim() || isLoading}
        className="px-4 py-2 rounded font-medium
          bg-[#7a3fd1] hover:bg-[#6a36b3] 
          dark:bg-[#7a3fd1] dark:hover:bg-[#6a36b3]
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </div>
  )
}

