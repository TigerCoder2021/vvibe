import React from 'react';
import { KakaoIcon, GoogleIcon } from './icons/SocialIcons';

const LoginScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 animate-pulse">
          vvibe
        </h1>
        <p className="text-gray-400 mb-8">당신이 좋아하는 인플루언서와 대화하세요</p>

        <div className="w-full max-w-sm">
            <p className="text-gray-400 mb-4 text-center">소셜 계정으로 간편하게 시작하세요</p>
            <div className="flex flex-col space-y-3">
                <button className="w-full h-12 flex items-center justify-center bg-[#FEE500] rounded-lg text-black font-bold transition-transform transform hover:scale-105">
                    <KakaoIcon />
                    <span className="ml-2">카카오로 시작하기</span>
                </button>
                <button className="w-full h-12 flex items-center justify-center bg-white rounded-lg text-black font-bold transition-transform transform hover:scale-105">
                    <GoogleIcon />
                    <span className="ml-2">Google로 시작하기</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;