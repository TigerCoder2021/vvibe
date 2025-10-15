import React, { useState, useEffect } from 'react';

const TermsAgreementScreen: React.FC = () => {
  const [agreements, setAgreements] = useState({
    termsOfService: false,
    privacyPolicy: false,
    marketing: false,
  });
  const [allAgreed, setAllAgreed] = useState(false);

  useEffect(() => {
    const allChecked = Object.values(agreements).every(Boolean);
    if (allAgreed !== allChecked) {
      setAllAgreed(allChecked);
    }
  }, [agreements]);

  const handleAllAgreeChange = () => {
    const newValue = !allAgreed;
    setAllAgreed(newValue);
    setAgreements({
      termsOfService: newValue,
      privacyPolicy: newValue,
      marketing: newValue,
    });
  };

  const handleAgreementChange = (name: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const isRequiredAgreed = agreements.termsOfService && agreements.privacyPolicy;

  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="flex-grow flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            vvibe 서비스 약관 동의
          </h1>

          <div className="space-y-3">
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <label htmlFor="all-agree" className="flex items-center cursor-pointer">
                <input
                  id="all-agree"
                  type="checkbox"
                  checked={allAgreed}
                  onChange={handleAllAgreeChange}
                  className="appearance-none w-5 h-5 bg-gray-700 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none transition-colors"
                />
                <span className="ml-3 text-white font-bold">전체 동의하기</span>
              </label>
            </div>

            <div className="pt-2 text-sm">
              <TermItem
                id="termsOfService"
                label="[필수] 서비스 이용약관"
                checked={agreements.termsOfService}
                onChange={() => handleAgreementChange('termsOfService')}
              />
              <TermItem
                id="privacyPolicy"
                label="[필수] 개인정보 처리방침"
                checked={agreements.privacyPolicy}
                onChange={() => handleAgreementChange('privacyPolicy')}
              />
              <TermItem
                id="marketing"
                label="[선택] 마케팅 정보 수신"
                checked={agreements.marketing}
                onChange={() => handleAgreementChange('marketing')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <button
          disabled={!isRequiredAgreed}
          className={`w-full max-w-sm mx-auto h-12 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${
            isRequiredAgreed
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          동의하고 시작하기
        </button>
      </div>
    </div>
  );
};

interface TermItemProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const TermItem: React.FC<TermItemProps> = ({ id, label, checked, onChange }) => (
  <div className="flex items-center justify-between py-2">
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none w-5 h-5 bg-gray-700 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none transition-colors"
      />
      <span className="ml-3 text-gray-300">{label}</span>
    </label>
    <a href="#" className="text-xs text-gray-500 hover:text-gray-300">보기</a>
  </div>
);

export default TermsAgreementScreen;
