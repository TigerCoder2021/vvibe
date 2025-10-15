import React, { useState, useEffect, useRef } from 'react';

// --- Icon Components ---
const BackIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const MoreIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);

const PlusIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

const SendIcon = ({ isActive }: { isActive: boolean }) => (
    <svg className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-gray-600'}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);


const mockMessages = [
  { id: 1, sender: 'other', text: '오늘 방송 너무 재밌었어요!', timestamp: '오후 11:34', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300' },
  { id: 2, sender: 'me', text: '정말요? 다행이네요! 어떤 부분이 제일 재밌었어요?', timestamp: '오후 11:35' },
  { id: 3, sender: 'other', text: '새로운 게임 플레이 보여주신 거요! 완전 흥미진진했어요.', timestamp: '오후 11:35', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300' },
  { id: 4, sender: 'other', text: '다음에도 또 해주실 거죠? 기대할게요!', timestamp: '오후 11:36', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300' },
  { id: 5, sender: 'me', text: '당연하죠! 여러분이 좋아해주시니 저도 기쁘네요. 다음 방송도 기대해주세요!', timestamp: '오후 11:38' },
];


const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState(mockMessages);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const newMsg = {
            id: messages.length + 1,
            sender: 'me',
            text: newMessage,
            timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true }),
        };
        setMessages([...messages, newMsg]);
        setNewMessage('');
    };

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm flex items-center justify-between p-3 border-b border-gray-800">
        <button className="p-1"><BackIcon /></button>
        <div className="flex flex-col items-center">
          <span className="font-bold">젠 Z</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-400">온라인</span>
          </div>
        </div>
        <button className="p-1"><MoreIcon /></button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'other' && (
              <img src={msg.avatar} alt="Avatar" className="w-8 h-8 rounded-full self-start" />
            )}
            <div className={`flex items-end gap-2 ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'me' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none' : 'bg-gray-800 text-gray-200 rounded-bl-none'}`}>
                <p>{msg.text}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0 mb-1">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      <footer className="sticky bottom-0 z-10 bg-black/90 backdrop-blur-sm p-2 border-t border-gray-800">
        <div className="flex items-center space-x-2">
            <button className="p-2"><PlusIcon /></button>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
            <button 
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="p-2 rounded-full transition-colors disabled:opacity-50"
            >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${newMessage.trim() ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-700'}`}>
                    <SendIcon isActive={!!newMessage.trim()} />
                </div>
            </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatRoom;
