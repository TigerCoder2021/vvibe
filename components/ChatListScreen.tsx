import React from 'react';

const chats = [
  { id: 1, name: '젠 Z', lastMessage: '오늘 방송 너무 재밌었어요!', time: '오후 11:34', unread: 2, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300', online: true },
  { id: 2, name: '어쩔티비', lastMessage: '메이크업 팁 감사해요~', time: '오후 9:12', unread: 0, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', online: false },
  { id: 3, name: '킹받네', lastMessage: 'ㅋㅋㅋㅋㅋ 진짜 웃겨요', time: '오후 5:55', unread: 1, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300', online: true },
  { id: 4, name: '알잘딱깔센', lastMessage: '다음 게임은 뭐에요?', time: '어제', unread: 0, image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300', online: false },
];

const ChatListScreen: React.FC = () => {
  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm p-4">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          chats
        </h1>
      </header>
      <main className="overflow-y-auto">
        <div>
          {chats.map(chat => (
            <div key={chat.id} className="flex items-center p-3 space-x-3 cursor-pointer hover:bg-gray-900/50 transition-colors">
              <div className="relative flex-shrink-0">
                <div className={`p-[1.5px] rounded-full ${chat.online ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-700'}`}>
                  <img src={chat.image} alt={chat.name} className="w-10 h-10 rounded-full object-cover border border-black" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate text-sm">{chat.name}</p>
                <p className={`text-sm truncate pr-2 ${chat.unread > 0 ? 'text-gray-200 font-medium' : 'text-gray-400'}`}>
                  {chat.lastMessage}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1 flex-shrink-0">
                <p className="text-xs text-gray-400">{chat.time}</p>
                {chat.unread > 0 && (
                  <span className="bg-purple-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChatListScreen;