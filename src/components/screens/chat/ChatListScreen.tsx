import React, { useState, useMemo } from 'react';
import { mockChatList } from '@/constants/mockData';
import { SearchIcon } from '@components/icons/NavigationIcons';
import { SearchBar } from '@components/common';

interface ChatListScreenProps {
  onChatSelect: (chatId: string) => void;
}

const ChatListScreen: React.FC<ChatListScreenProps> = ({ onChatSelect }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 검색 필터링
  const filteredChats = useMemo(() => {
    if (!searchQuery.trim()) return mockChatList;
    const query = searchQuery.toLowerCase();
    return mockChatList.filter(chat => 
      chat.name.toLowerCase().includes(query) || 
      chat.lastMessage.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchOpen = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchQuery('');
  };

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-between">
        {showSearch ? (
          <div className="flex-1">
            <SearchBar 
              placeholder="채팅방 검색..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClose={handleSearchClose}
              autoFocus
            />
          </div>
        ) : (
          <>
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" style={{ fontFamily: 'Montserrat', fontWeight: 900, fontStyle: 'italic' }}>
              chats
            </h1>
            <button 
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="검색"
              onClick={handleSearchOpen}
            >
              <SearchIcon className="w-6 h-6 text-gray-400" />
            </button>
          </>
        )}
      </header>
      <main className="overflow-y-auto">
        <div>
          {filteredChats.length > 0 ? (
            filteredChats.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => onChatSelect(chat.id)}
                className="flex items-center p-3 space-x-3 cursor-pointer hover:bg-gray-900/50 active:bg-gray-800/70 transition-colors"
              >
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
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>검색 결과가 없습니다</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChatListScreen;