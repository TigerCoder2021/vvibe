// Navigation and UI related types

export type MainTab = 'HOME' | 'CHAT' | 'PROFILE';

export interface NavigationProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}
