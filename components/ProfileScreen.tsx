import React from 'react';

const ChevronRightIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const ProfileScreen: React.FC = () => {
  const menuItems = [
    { label: '계정 정보' },
    { label: '알림 설정' },
    { label: '고객센터 / 문의하기' },
    { label: '이용약관 및 정책' },
  ];

  return (
    <div className="h-full bg-black text-white">
      <header className="sticky top-0 bg-black/80 backdrop-blur-sm p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-center">프로필</h1>
      </header>
      
      <div className="p-4 flex items-center space-x-4">
        <img src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=300" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="text-lg font-bold">내 닉네임</p>
          <p className="text-sm text-gray-400">email@example.com</p>
        </div>
      </div>

      <div className="px-4 mt-2">
        <div className="bg-gray-900 rounded-lg divide-y divide-gray-800">
          {menuItems.map((item) => (
            <div key={item.label} className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-800/50 transition-colors">
              <span className="text-sm">{item.label}</span>
              <ChevronRightIcon />
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-4 mt-4">
        <button className="w-full text-left p-3 text-sm text-gray-400 bg-gray-900 rounded-lg hover:bg-gray-800/50 transition-colors">
            로그아웃
        </button>
      </div>
      
      <div className="text-center text-xs text-gray-600 mt-6 pb-4">
        <p>App Version 1.0.0</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
