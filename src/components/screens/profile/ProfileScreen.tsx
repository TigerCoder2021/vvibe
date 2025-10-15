import React from 'react';
import {
  ChevronRightIcon,
  UserIcon,
  BellIcon,
  SupportIcon,
  DocumentIcon,
  SubscriptionIcon,
  LogoutIcon
} from '@components/icons/CommonIcons';

interface ProfileScreenProps {
  onNavigateToSubscription?: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigateToSubscription }) => {
  const handleMenuClick = (label: string) => {
    if (label === '구독 관리' && onNavigateToSubscription) {
      onNavigateToSubscription();
    }
    // TODO: 다른 메뉴 아이템 처리
  };

  const menuItems = [
    { 
      label: '구독 관리', 
      icon: <SubscriptionIcon className="w-5 h-5 text-gray-400" />,
      description: '인플루언서 구독 및 플랜 관리'
    },
    { 
      label: '계정 정보', 
      icon: <UserIcon className="w-5 h-5 text-gray-400" />,
      description: '프로필 및 개인정보 관리'
    },
    { 
      label: '알림 설정', 
      icon: <BellIcon className="w-5 h-5 text-gray-400" />,
      description: '푸시 알림 및 메시지 설정'
    },
    { 
      label: '고객센터 / 문의하기', 
      icon: <SupportIcon className="w-5 h-5 text-gray-400" />,
      description: '도움말 및 문의사항'
    },
    { 
      label: '이용약관 및 정책', 
      icon: <DocumentIcon className="w-5 h-5 text-gray-400" />,
      description: '서비스 이용약관 및 개인정보처리방침'
    },
  ];

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-between">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-montserrat font-black italic">
          more
        </h1>
      </header>
      
      <main className="overflow-y-auto pb-20">
        {/* 프로필 영역 */}
        <div className="px-4 py-6 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=300" 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover" 
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">내 닉네임</h2>
              <p className="text-gray-400 text-sm">@username</p>
            </div>
            <button className="px-3 py-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors">
              편집
            </button>
          </div>
        </div>

        {/* 메뉴 리스트 */}
        <div className="py-2">
          {menuItems.map((item, index) => (
            <div 
              key={item.label} 
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-900/50 transition-colors cursor-pointer"
              onClick={() => handleMenuClick(item.label)}
            >
              <div className="flex items-center space-x-3">
                <div className="text-gray-400">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
        
        {/* 로그아웃 */}
        <div className="border-t border-gray-800 mt-2">
          <button className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-900/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="text-red-400">
                <LogoutIcon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="font-medium text-red-400">로그아웃</p>
                <p className="text-xs text-gray-500">계정에서 안전하게 로그아웃</p>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        {/* 앱 정보 */}
        <div className="text-center py-6 mt-4">
          <p className="text-xs text-gray-600">FanVoice v1.0.0</p>
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;
