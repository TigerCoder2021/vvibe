import React, { useEffect } from 'react';
import type { Influencer } from '@/types/influencer';
import { CloseIcon } from '@components/icons/NavigationIcons';

interface InfluencerProfileModalProps {
  influencer: Influencer | null;
  isOpen: boolean;
  onClose: () => void;
}

const InfluencerProfileModal: React.FC<InfluencerProfileModalProps> = ({ influencer, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  if (!influencer && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Modal Panel - Full Height */}
      <div
        className={`relative w-full max-w-md h-full bg-gray-900/50 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
          aria-label="닫기"
        >
          <CloseIcon />
        </button>

        {/* Content */}
        <div className="h-full flex flex-col">
          {/* Profile Content - Centered */}
          <div className="flex-1 flex flex-col justify-center items-center px-6 pt-72">
            {/* Profile Image */}
            <img 
              src={influencer?.profileImage || '/default-avatar.png'} 
              alt={influencer?.name || 'Profile'} 
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-800 shadow-lg mb-4" 
              onError={(e) => {
                e.currentTarget.src = '/default-avatar.png';
              }}
            />

            {/* Nickname */}
            <h2 className="text-xl font-bold text-white text-center">
              {influencer?.name}
            </h2>

            {/* Handle Name */}
            <p className="text-sm text-gray-500 mt-1 text-center">
              @{influencer?.id}
            </p>

            {/* Bio / Description */}
            <p className="text-sm text-gray-400 mt-2 text-center max-w-xs leading-relaxed">
              {influencer?.description}
            </p>
          </div>

          {/* Footer - Chat Button */}
          <div className="p-3 border-t border-gray-800">
            <button 
              onClick={() => console.log('채팅 시작')}
              className="w-full h-12 font-bold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform transform hover:scale-[1.02] active:scale-95"
            >
              채팅 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfileModal;