import React, { useState } from 'react';
import InfluencerProfileModal from './InfluencerProfileModal';

interface Influencer {
  id: number;
  name: string;
  description: string;
  image: string;
  live: boolean;
}

const influencers: Influencer[] = [
  { id: 1, name: '젠 Z', description: '트렌드 리더', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300', live: true },
  { id: 3, name: '어쩔티비', description: '뷰티 인플루언서', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', live: true },
  { id: 5, name: '킹받네', description: '일상 브이로거', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300', live: true },
  { id: 2, name: '알잘딱깔센', description: '게임 스트리머', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300', live: false },
  { id: 4, name: '저쩔티비', description: '먹방 유튜버', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300', live: false },
  { id: 6, name: '오히려 좋아', description: '운동 크리에이터', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300', live: false },
  { id: 7, name: '가보자고', description: '여행 전문가', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', live: true},
  { id: 8, name: '폼 미쳤다', description: '패션 모델', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300', live: false},
];

const HomeScreen: React.FC = () => {
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const popularInfluencers = influencers.filter(i => i.live);

  const handleSelectInfluencer = (influencer: Influencer) => {
    setSelectedInfluencer(influencer);
  };

  const handleCloseModal = () => {
    setSelectedInfluencer(null);
  };

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm p-4 border-b border-gray-800">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          vvibe
        </h1>
      </header>
      
      <main className="overflow-y-auto pb-20">
        {/* Hero Section */}
        <section className="pt-4">
          <h2 className="text-xl font-bold mb-3 px-4">인기 인플루언서</h2>
          <div className="flex overflow-x-auto space-x-3 snap-x snap-mandatory scrollbar-hide pl-4 pr-4">
            {popularInfluencers.map(influencer => (
              <div key={influencer.id} onClick={() => handleSelectInfluencer(influencer)} className="relative rounded-lg overflow-hidden aspect-[3/4] w-40 flex-shrink-0 snap-start cursor-pointer group">
                <img src={influencer.image} alt={influencer.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2 text-white">
                  <p className="font-bold text-sm">{influencer.name}</p>
                  <p className="text-xs text-gray-300">{influencer.description}</p>
                </div>
                {influencer.live && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center animate-pulse">
                    LIVE
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* All Influencers Section - List View */}
        <section className="pt-6">
            <h2 className="text-xl font-bold mb-3 px-4">모든 인플루언서</h2>
            <div className="flex flex-col space-y-1 px-2">
                {influencers.map(influencer => (
                <div key={influencer.id} onClick={() => handleSelectInfluencer(influencer)} className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-900/50 transition-colors">
                    <div className="relative flex-shrink-0">
                        <img src={influencer.image} alt={influencer.name} className="w-12 h-12 rounded-full object-cover" />
                        {influencer.live && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-black"></div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm truncate">{influencer.name}</p>
                        <p className="text-xs text-gray-400 truncate">{influencer.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
      </main>
      
      {selectedInfluencer && (
        <InfluencerProfileModal 
          influencer={selectedInfluencer} 
          isOpen={!!selectedInfluencer} 
          onClose={handleCloseModal} 
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default HomeScreen;