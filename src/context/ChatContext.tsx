'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface ChatContextType {
  selectedChatId: string;
  setSelectedChatId: (chatId: string) => void;
}

// Create the context with a default value
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Define the provider's props
interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [selectedChatId, setSelectedChatId] = useState<string>('general'); // default chat ID

  return (
    <ChatContext.Provider value={{ selectedChatId, setSelectedChatId }}>
      {children}
    </ChatContext.Provider>
  );
}

// Custom hook to use the ChatContext
export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
