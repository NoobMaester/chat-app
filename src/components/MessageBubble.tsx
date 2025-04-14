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
          max-w-xs sm:max-w-md
          px-4 
          py-2  
          rounded-lg 
          shadow
          text-gray-100 
          ${isCurrentUser ? 'bg-[#7a3fd1] text-right rounded-br-none' : 'bg-[#ad87e4] text-left rounded-bl-none'}
        `}
      >
        {!isCurrentUser && (
          <p className="text-sm font-medium mb-1 opacity-90">
            {senderName}
          </p>
        )}
        {isCurrentUser && (
          <p className="text-sm font-medium mb-1 opacity-90 text-left"> You </p>)}
        <p className="break-words text-left">{text}</p>
        {timestamp && (
          <p className="text-xs mt-1 text-left opacity-75">{timestamp}</p>
        )}
      </div>
    </div>
  );
}
