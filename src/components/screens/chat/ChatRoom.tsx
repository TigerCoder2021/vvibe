import React, { useState, useEffect, useRef } from 'react';
import { mockMessages as initialMessages, type MockMessage } from '@/constants/mockData';
import { BackIcon, MoreIcon, PlusIcon, VoiceWaveIcon } from '@components/icons/NavigationIcons';
import { formatMessageTime } from '@utils/formatDate';
import type { Influencer } from '@/types/influencer';
import VoiceChatModal from './VoiceChatModal';

interface ChatRoomProps {
  influencer?: Influencer;
  onBack?: () => void;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ 
  influencer = { 
    id: '1', 
    name: '젠 Z',
    handle: '@genz_official',
    profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
    description: '트렌드 리더',
    category: '트렌드',
    followersCount: 15000,
    isVerified: true,
    isOnline: true 
  },
  onBack 
}) => {
    const [messages, setMessages] = useState<MockMessage[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [isVoiceMode, setIsVoiceMode] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const newMsg: MockMessage = {
            id: messages.length + 1,
            sender: 'me',
            text: newMessage,
            timestamp: formatMessageTime(new Date()),
        };
        setMessages([...messages, newMsg]);
        setNewMessage('');
    };

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm flex items-center justify-between p-3">
        <button 
          className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
          onClick={onBack}
          aria-label="뒤로가기"
        >
          <BackIcon />
        </button>
        <div className="flex flex-col items-center">
          <span className="font-bold">{influencer.name}</span>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${influencer.isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></div>
            <span className="text-xs text-gray-400">{influencer.isOnline ? '온라인' : '오프라인'}</span>
          </div>
        </div>
        <button 
          className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="더보기"
        >
          <MoreIcon />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'other' && (
              <img 
                src={msg.avatar || influencer.profileImage || '/default-avatar.png'} 
                alt={`${influencer.name} 프로필`}
                className="w-8 h-8 rounded-full self-start object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/default-avatar.png';
                }}
              />
            )}
            <div className={`flex items-end gap-2 ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'me' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none' : 'bg-gray-800 text-gray-200 rounded-bl-none'}`}>
                <p className="break-words">{msg.text}</p>
                </div>
                <span className="text-[10px] text-gray-500 flex-shrink-0 mb-1">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      <footer className="sticky bottom-0 z-10 bg-black/90 backdrop-blur-sm p-2 border-t border-gray-800">
        <div className="flex items-center gap-2">
            <button 
              className="flex-shrink-0 w-9 h-9 flex items-center justify-center hover:bg-gray-800 rounded-full transition-colors"
              aria-label="파일 첨부"
            >
              <PlusIcon />
            </button>
            
            <div className="flex-1 flex items-center bg-gray-800 rounded-full pl-4 pr-2 py-1.5 border border-gray-700 focus-within:border-purple-500/50 transition-all">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={() => setIsVoiceMode(true)}
                className="ml-2 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors"
                aria-label="음성 대화"
              >
                <VoiceWaveIcon className="w-4 h-4 text-black" />
              </button>
            </div>
        </div>
      </footer>

      {/* Voice Chat Modal */}
      <VoiceChatModal
        influencer={influencer}
        isOpen={isVoiceMode}
        onClose={() => setIsVoiceMode(false)}
      />
    </div>
  );
};

export default ChatRoom;
