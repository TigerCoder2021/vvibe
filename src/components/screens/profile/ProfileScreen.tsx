import React from 'react';

const ChevronRightIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const ProfileScreen: React.FC = () => {
  const menuItems = [
    { 
      label: '계정 정보', 
      icon: <UserIcon />,
      description: '프로필 및 개인정보 관리'
    },
    { 
      label: '알림 설정', 
      icon: <BellIcon />,
      description: '푸시 알림 및 메시지 설정'
    },
    { 
      label: '고객센터 / 문의하기', 
      icon: <SupportIcon />,
      description: '도움말 및 문의사항'
    },
    { 
      label: '이용약관 및 정책', 
      icon: <DocumentIcon />,
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
              className="flex items-center justify-between px-4 py-4 hover:bg-gray-900/50 transition-colors cursor-pointer"
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
              <ChevronRightIcon />
            </div>
          ))}
        </div>
        
        {/* 로그아웃 */}
        <div className="border-t border-gray-800 mt-2">
          <button className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-900/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="text-red-400">
                <LogoutIcon />
              </div>
              <div>
                <p className="font-medium text-red-400">로그아웃</p>
                <p className="text-xs text-gray-500">계정에서 안전하게 로그아웃</p>
              </div>
            </div>
            <ChevronRightIcon />
          </button>
        </div>
        
        {/* 앱 정보 */}
        <div className="text-center py-6 mt-4">
          <p className="text-xs text-gray-600">VVibe v1.0.0</p>
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;
