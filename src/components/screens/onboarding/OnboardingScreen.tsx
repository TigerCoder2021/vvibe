import React, { useState, useEffect } from 'react';
import BirthdayModal from '@screens/auth/BirthdayModal';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [nickname, setNickname] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  
  const [nicknameError, setNicknameError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isBirthdayModalOpen, setIsBirthdayModalOpen] = useState(false);

  useEffect(() => {
    const isNicknameValid = nickname.length >= 2 && nickname.length <= 10;
    if (nickname.length > 0 && !isNicknameValid) {
      setNicknameError('닉네임은 2자 이상 10자 이하로 입력해 주세요.');
    } else {
      setNicknameError('');
    }

    const isBirthdaySelected = birthMonth.length > 0 && birthDay.length > 0;
    const isGenderSelected = gender !== null;

    setIsFormValid(isNicknameValid && isBirthdaySelected && isGenderSelected);
  }, [nickname, birthMonth, birthDay, gender]);

  const handleConfirmBirthday = (month: number, day: number) => {
    setBirthMonth(String(month));
    setBirthDay(String(day));
    setIsBirthdayModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <div className="flex-grow flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white">프로필을 설정해 주세요</h1>
              <p className="text-sm text-gray-400 mt-1">더 나은 추천을 위해 필요해요</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-300">닉네임</label>
                <div className="relative">
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    maxLength={10}
                    className={`w-full p-3 mt-1 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all ${nicknameError ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-700 focus:ring-purple-500/50'}`}
                    placeholder="2~10자 이내로 입력하세요"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">{nickname.length}/10</span>
                </div>
                {nicknameError && <p className="text-xs text-red-500 mt-1">{nicknameError}</p>}
              </div>

              <div>
                <label className="text-sm font-bold text-gray-300">생일</label>
                <button
                  onClick={() => setIsBirthdayModalOpen(true)}
                  className="w-full text-left p-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                >
                  {birthMonth && birthDay ? (
                    <span>{birthMonth}월 {birthDay}일</span>
                  ) : (
                    <span className="text-gray-500">월 / 일</span>
                  )}
                </button>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-300">성별</label>
                <div className="flex space-x-2 mt-1">
                  <button
                    onClick={() => setGender('male')}
                    className={`w-full p-3 rounded-lg font-bold transition-all ${gender === 'male' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-800 text-gray-300'}`}
                  >
                    남성
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`w-full p-3 rounded-lg font-bold transition-all ${gender === 'female' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-800 text-gray-300'}`}
                  >
                    여성
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <button
            onClick={onComplete}
            disabled={!isFormValid}
            className={`w-full max-w-sm mx-auto h-12 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              isFormValid
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            완료
          </button>
        </div>
      </div>

      <BirthdayModal
        isOpen={isBirthdayModalOpen}
        onClose={() => setIsBirthdayModalOpen(false)}
        onConfirm={handleConfirmBirthday}
        initialMonth={birthMonth ? Number(birthMonth) : undefined}
        initialDay={birthDay ? Number(birthDay) : undefined}
      />
    </>
  );
};

export default OnboardingScreen;
