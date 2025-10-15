import React from 'react';
import { KakaoIcon, GoogleIcon } from '@components/icons/SocialIcons';

interface LoginScreenProps {
  onSocialLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onSocialLogin }) => {
  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* 로고 영역 - 상단 중앙 */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 animate-pulse font-montserrat italic">
          FanVoice
        </h1>
        <p className="text-gray-400">당신이 좋아하는 인플루언서와 소통하세요</p>
      </div>

      {/* 소셜 로그인 버튼 - 하단 */}
      <div className="w-full max-w-sm mx-auto pb-16">
        <div className="flex flex-col space-y-3">
          <button 
            onClick={onSocialLogin}
            className="w-full h-12 flex items-center justify-center bg-[#FEE500] rounded-lg text-black font-bold transition-transform transform hover:scale-105"
          >
            <KakaoIcon />
            <span className="ml-2">카카오로 시작하기</span>
          </button>
          <button 
            onClick={onSocialLogin}
            className="w-full h-12 flex items-center justify-center bg-white rounded-lg text-black font-bold transition-transform transform hover:scale-105"
          >
            <GoogleIcon />
            <span className="ml-2">Google로 시작하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;