import React, { useState, useMemo } from 'react';
import InfluencerProfileModal from '@screens/profile/InfluencerProfileModal';
import type { Influencer } from '@/types/influencer';
import { mockInfluencers } from '@/constants/mockData';
import { SearchIcon } from '@components/icons/NavigationIcons';
import { SearchBar } from '@components/common';

const HomeScreen: React.FC = () => {
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const popularInfluencers = mockInfluencers.filter(inf => inf.isVerified).slice(0, 3);

  // 검색 필터링
  const filteredInfluencers = useMemo(() => {
    if (!searchQuery.trim()) return mockInfluencers;
    const query = searchQuery.toLowerCase();
    return mockInfluencers.filter(inf => 
      inf.name.toLowerCase().includes(query) || 
      inf.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSelectInfluencer = (influencer: Influencer) => {
    setSelectedInfluencer(influencer);
    // 약간의 딜레이를 주고 모달 열기 (DOM 렌더링 후 애니메이션)
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // 애니메이션 완료 후 influencer 제거
    setTimeout(() => setSelectedInfluencer(null), 500);
  };

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
              placeholder="인플루언서 검색..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClose={handleSearchClose}
              autoFocus
            />
          </div>
        ) : (
          <>
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" style={{ fontFamily: 'Montserrat', fontWeight: 900, fontStyle: 'italic' }}>
              vvibe
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
      
      <main className="overflow-y-auto pb-20">
        {/* 검색 중이 아닐 때만 인기 인플루언서 표시 */}
        {!showSearch && (
          <section className="pt-4">
            <h2 className="text-xl font-bold mb-3 px-4">인기 인플루언서</h2>
            <div className="flex overflow-x-auto space-x-3 snap-x snap-mandatory scrollbar-hide pl-4 pr-4">
              {popularInfluencers.map(influencer => (
                <div key={influencer.id} onClick={() => handleSelectInfluencer(influencer)} className="relative rounded-lg overflow-hidden aspect-[3/4] w-40 flex-shrink-0 snap-start cursor-pointer group">
                  <img src={influencer.profileImage} alt={influencer.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-2 text-white">
                    <p className="font-bold text-sm">{influencer.name}</p>
                    <p className="text-xs text-gray-300">{influencer.description}</p>
                  </div>
                  {influencer.isVerified && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Influencers Section - List View */}
        <section className="pt-6">
          <h2 className="text-xl font-bold mb-3 px-4">
            {showSearch ? '검색 결과' : '모든 인플루언서'}
          </h2>
          <div className="flex flex-col space-y-1 px-2">
            {filteredInfluencers.length > 0 ? (
              filteredInfluencers.map(influencer => (
                <div key={influencer.id} onClick={() => handleSelectInfluencer(influencer)} className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-900/50 transition-colors">
                  <div className="relative flex-shrink-0">
                    <img src={influencer.profileImage} alt={influencer.name} className="w-12 h-12 rounded-full object-cover" />
                    {influencer.isVerified && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-black"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{influencer.name}</p>
                    <p className="text-xs text-gray-400 truncate">{influencer.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>검색 결과가 없습니다</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <InfluencerProfileModal 
        influencer={selectedInfluencer} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default HomeScreen;