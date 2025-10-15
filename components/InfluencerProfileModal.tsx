import React, { useEffect } from 'react';

interface Influencer {
  id: number;
  name: string;
  description: string;
  image: string;
  live: boolean;
}

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
  
  if (!influencer) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      ></div>

      {/* Modal Panel */}
      <div
        className={`relative w-full max-w-md bg-gray-900 rounded-t-2xl shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grabber */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gray-700 rounded-full mt-2"></div>

        <div className="flex flex-col items-center p-6 pt-8">
            <img 
                src={influencer.image} 
                alt={influencer.name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-800 shadow-lg -mt-16" 
            />
            <h2 className="text-xl font-bold mt-4">{influencer.name}</h2>
            <p className="text-sm text-gray-400 mt-1">{influencer.description}</p>
        </div>
        
        <div className="p-4 pt-2">
            <button className="w-full h-12 font-bold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform transform hover:scale-105">
                친구 추가
            </button>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfileModal;