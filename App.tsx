import React from 'react';
import ChatRoom from './components/ChatRoom';
// import HomeScreen from './components/HomeScreen';
// import ChatListScreen from './components/ChatListScreen';
// import ProfileScreen from './components/ProfileScreen';
// import BottomNavBar from './components/BottomNavBar';
// import LoginScreen from './components/LoginScreen';
// import AgeConsentScreen from './components/AgeConsentScreen';
// import TermsAgreementScreen from './components/TermsAgreementScreen';
// import OnboardingScreen from './components/OnboardingScreen';

export type MainTab = 'HOME' | 'CHAT' | 'PROFILE';

const App: React.FC = () => {
  // const [mainTab, setMainTab] = useState<MainTab>('HOME');

  // const renderMainApp = () => (
  //   <div className="h-full bg-black text-white relative">
  //     <main className="h-full">
  //       {mainTab === 'HOME' && <HomeScreen />}
  //       {mainTab === 'CHAT' && <ChatListScreen />}
  //       {mainTab === 'PROFILE' && <ProfileScreen />}
  //     </main>
  //     <BottomNavBar activeTab={mainTab} setActiveTab={setMainTab} />
  //   </div>
  // );

  return (
    <div className="h-screen w-screen bg-black flex justify-center">
      <div className="w-full max-w-md h-full bg-gray-900 shadow-lg overflow-hidden">
        {/* For this update, we are rendering the ChatRoom component directly */}
        <ChatRoom />
      </div>
    </div>
  );
};

export default App;
