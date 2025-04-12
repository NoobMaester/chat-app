interface MessageBubbleProps {
  text: string;
  senderName: string;
  isCurrentUser: boolean;
  timestamp?: string;
}

export default function MessageBubble({ 
  text,
  senderName,
  isCurrentUser, 
  timestamp 
}: MessageBubbleProps) {
  console.log('Message:', text, 'isCurrentUser:', isCurrentUser);
  
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`
          max-w-xs 
          px-4 
          py-2 
          rounded-lg 
          shadow
          text-gray-100 
          ${isCurrentUser ? 'bg-[#7a3fd1] text-right' : 'bg-[#ad87e4] text-left'}
        `}
      >
        {!isCurrentUser && (
          <p className="text-sm font-medium mb-1 opacity-90">
            {senderName}
          </p>
        )}
        <p className="break-words text-base">{text}</p>
        {timestamp && (
          <p className="text-xs mt-1 opacity-75">{timestamp}</p>
        )}
      </div>
    </div>
  );
}
