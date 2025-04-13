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
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-4 p-4">
          {messages.map((message) => (
            <div key={message.id}>
              <MessageBubble
                text={message.text}
                senderName={message.senderName || "Anonymous"}
                isCurrentUser={message.senderId === user?.id}
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
      <div className="p-4 border-t border-[#b492e4] dark:border-gray-800">
        <MessageInput chatId={chatId} />
      </div>
    </main>
  );
}
