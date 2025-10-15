import React, { useState } from 'react';

interface AgeConsentScreenProps {
  onConsent: () => void;
}

const AgeConsentScreen: React.FC<AgeConsentScreenProps> = ({ onConsent }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleContinue = () => {
    if (isChecked) {
      onConsent();
    }
  };

  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="flex-grow flex flex-col justify-center text-center">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">
            서비스 이용을 위해<br />만 14세 이상이어야 해요.
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            정보통신망법 규정에 따라 만 14세 이상 사용자만<br />서비스를 이용할 수 있습니다.
          </p>

          <div className="text-left mb-6">
            <label htmlFor="age-consent" className="flex items-center cursor-pointer">
              <input
                id="age-consent"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="appearance-none w-5 h-5 bg-gray-700 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none transition-colors"
              />
              <span className="ml-3 text-gray-300">[필수] 만 14세 이상입니다.</span>
            </label>
          </div>

          <button
            onClick={handleContinue}
            disabled={!isChecked}
            className={`w-full h-12 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              isChecked
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeConsentScreen;
