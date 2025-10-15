import React, { useState } from 'react';
import LoginScreen from '@screens/auth/LoginScreen';
import AgeConsentScreen from '@screens/auth/AgeConsentScreen';
import TermsAgreementScreen from '@screens/auth/TermsAgreementScreen';
import OnboardingScreen from '@screens/onboarding/OnboardingScreen';
import HomeScreen from '@screens/home/HomeScreen';
import ChatListScreen from '@screens/chat/ChatListScreen';
import ChatRoom from '@screens/chat/ChatRoom';
import ProfileScreen from '@screens/profile/ProfileScreen';
import CreditRechargeScreen from '@screens/credit/CreditRechargeScreen';
import SubscriptionScreen from '@screens/subscription/SubscriptionScreen';
import BottomNavBar from '@components/layout/BottomNavBar';
import type { MainTab } from '@/types/navigation';
import type { Influencer } from '@/types/influencer';
import { getMockInfluencerById } from '@/constants/mockData';

// 임시 라우팅 타입
type AuthFlow = 'login' | 'ageConsent' | 'termsAgreement' | 'onboarding' | 'main';
type ModalScreen = 'creditRecharge' | 'subscription' | null;

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AuthFlow>('login');
  const [mainTab, setMainTab] = useState<MainTab>('HOME');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [modalScreen, setModalScreen] = useState<ModalScreen>(null);

  // 로그인 플로우 핸들러
  const handleSocialLogin = () => {
    setCurrentScreen('ageConsent');
  };

  const handleAgeConsent = () => {
    setCurrentScreen('termsAgreement');
  };

  const handleTermsAgreement = () => {
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('main');
  };

  // 대화 핸들러
  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const handleBackToList = () => {
    setSelectedChatId(null);
  };

  // 모달 화면 네비게이션 핸들러
  const handleNavigateToCreditRecharge = () => {
    setModalScreen('creditRecharge');
  };

  const handleNavigateToSubscription = () => {
    setModalScreen('subscription');
  };

  const handleCloseModal = () => {
    setModalScreen(null);
  };

  // 메인 앱 렌더링
  const renderMainApp = () => {
    // 모달 화면이 있는 경우 우선 렌더링
    if (modalScreen === 'creditRecharge') {
      return <CreditRechargeScreen onBack={handleCloseModal} currentCredits={1250} />;
    }

    if (modalScreen === 'subscription') {
      return <SubscriptionScreen onBack={handleCloseModal} />;
    }

    // 대화방이 선택된 경우
    if (mainTab === 'CHAT' && selectedChatId) {
      const influencer = getMockInfluencerById(selectedChatId);
      return (
        <div className="h-full bg-black text-white">
          <ChatRoom influencer={influencer} onBack={handleBackToList} />
        </div>
      );
    }

    // 일반 탭 렌더링
    return (
      <div className="h-full bg-black text-white relative">
        <main className="h-full">
          {mainTab === 'HOME' && <HomeScreen onNavigateToCreditRecharge={handleNavigateToCreditRecharge} />}
          {mainTab === 'CHAT' && <ChatListScreen onChatSelect={handleChatSelect} />}
          {mainTab === 'PROFILE' && <ProfileScreen onNavigateToSubscription={handleNavigateToSubscription} />}
        </main>
        <BottomNavBar 
          activeTab={mainTab} 
          setActiveTab={(tab) => {
            setMainTab(tab);
            setSelectedChatId(null); // 탭 변경 시 대화방 닫기
          }} 
        />
      </div>
    );
  };

  // 현재 화면 렌더링
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onSocialLogin={handleSocialLogin} />;
      case 'ageConsent':
        return <AgeConsentScreen onConsent={handleAgeConsent} />;
      case 'termsAgreement':
        return <TermsAgreementScreen onAgree={handleTermsAgreement} />;
      case 'onboarding':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      case 'main':
        return renderMainApp();
      default:
        return <LoginScreen onSocialLogin={handleSocialLogin} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center">
      <div className="w-full max-w-md h-full bg-gray-900 shadow-lg overflow-hidden">
        {renderCurrentScreen()}
      </div>
    </div>
  );
};

export default App;
