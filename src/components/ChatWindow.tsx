import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <main className="flex-1 flex flex-col justify-between bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageBubble
          text="Hello there!"
          sender="Jane"
          isCurrentUser={false}
        />
        <MessageBubble
          text="Hi! How are you?"
          sender="You"
          isCurrentUser={true}
        />
      </div>
      <div className="p-4 border-t border-[#b492e4]">
        <MessageInput />
      </div>
    </main>
  );
}
