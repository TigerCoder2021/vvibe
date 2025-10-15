import React from 'react';
import type { MainTab } from '@/types/navigation';
import { HomeIcon, ChatIcon, ProfileIcon } from '@components/icons/NavigationIcons';

interface BottomNavBarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'HOME' as MainTab, icon: HomeIcon, label: '홈' },
    { id: 'CHAT' as MainTab, icon: ChatIcon, label: '채팅' },
    { id: 'PROFILE' as MainTab, icon: ProfileIcon, label: '프로필' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-black border-t border-gray-900">
      <div className="flex justify-around items-center h-16">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="flex flex-col items-center justify-center text-xs space-y-1 flex-1 transition-transform transform hover:scale-105 focus:outline-none"
          >
            <item.icon active={activeTab === item.id} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;