import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import useChatMessages from "@/hooks/useChatMessages";
import { useAuth } from "@/context/AuthContext";
import { formatRelative } from "date-fns";

interface ChatWindowProps {
  chatId: string;
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
  const { user } = useAuth();
  const messages = useChatMessages(chatId); // Pass chatId to fetch messages for the specific chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex-1 flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Chat Header */}
      <div className="p-4 border-b-2 border-gray-300 dark:border-gray-700  bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {chatId} Chats
        </h1>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-4 p-4">
          {messages.map((message) => (
            <div key={message.id}>
              <MessageBubble
                text={message.text}
                senderName={message.senderName || "Anonymous"}
                isCurrentUser={message.senderId === user?.uid}
                timestamp={
                  message.timestamp?.toDate
                    ? formatRelative(message.timestamp.toDate(), new Date())
                    : ""
                }
              />
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input Area */}
      <div className="p-4 border-t-2 dark:border-gray-800">
        <MessageInput chatId={chatId} />
      </div>
    </main>
  );
}
