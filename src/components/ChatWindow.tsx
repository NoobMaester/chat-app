import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import useChatMessages from "@/hooks/useChatMessages";
import { useAuth } from "@/context/AuthContext";
import {formatRelative} from "date-fns";

export default function ChatWindow() {
  const { user } = useAuth();
  const messages = useChatMessages();

  return (
    <main className="flex-1 flex flex-col justify-between bg-white dark:bg-gray-900">
      {messages.map((message) => (
        <div key={message.id} className="p-4">
          <MessageBubble
            text={message.text}
            sender={message.senderId}
            isCurrentUser={message.senderId === user?.uid}
            timestamp={message.timestamp?.toDate ? formatRelative(message.timestamp.toDate(), new Date()) : ''}
          />
        </div>
      ))}
      
      {/* Message Input Area */}
      <div className="p-4 border-t border-[#b492e4]">
        <MessageInput />
      </div>
    </main>
  );
}
