/**
 * Mock data for development and testing
 */

import type { Influencer } from '@/types/influencer';
import type { Message } from '@/types/chat';

// Mock Influencers
export const mockInfluencers: Influencer[] = [
  {
    id: '1',
    name: '젠 Z',
    handle: '@genz_official',
    description: '트렌드 리더',
    profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
    category: '트렌드',
    followersCount: 15000,
    isVerified: true,
  },
  {
    id: '2',
    name: '알잘딱깔센',
    handle: '@gamepro_streamer',
    description: '게임 스트리머',
    profileImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300',
    category: '게임',
    followersCount: 50000,
    isVerified: false,
  },
  {
    id: '3',
    name: '어쩔티비',
    handle: '@beauty_queen',
    description: '뷰티 인플루언서',
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300',
    category: '뷰티',
    followersCount: 25000,
    isVerified: true,
  },
  {
    id: '4',
    name: '저쩔티비',
    handle: '@mukbang_king',
    description: '먹방 유튜버',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300',
    category: '먹방',
    followersCount: 40000,
    isVerified: false,
  },
  {
    id: '5',
    name: '킹받네',
    handle: '@daily_vlogger',
    description: '일상 브이로거',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
    category: '일상',
    followersCount: 30000,
    isVerified: true,
  },
  {
    id: '6',
    name: '오히려 좋아',
    handle: '@fitness_lover',
    description: '운동 크리에이터',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
    category: '운동',
    followersCount: 20000,
    isVerified: false,
  },
  {
    id: '7',
    name: '가보자고',
    handle: '@travel_expert',
    description: '여행 전문가',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    category: '여행',
    followersCount: 35000,
    isVerified: true,
  },
  {
    id: '8',
    name: '폼 미쳤다',
    handle: '@fashion_icon',
    description: '패션 모델',
    profileImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300',
    category: '패션',
    followersCount: 28000,
    isVerified: false,
  },
];

// Mock Chat List
export interface MockChatListItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  image: string;
  online: boolean;
}

export const mockChatList: MockChatListItem[] = [
  {
    id: '1',
    name: '젠 Z',
    lastMessage: '오늘 방송 너무 재밌었어요!',
    time: '오후 11:34',
    unread: 2,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
    online: true,
  },
  {
    id: '3',
    name: '어쩔티비',
    lastMessage: '메이크업 팁 감사해요~',
    time: '오후 9:12',
    unread: 0,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300',
    online: false,
  },
  {
    id: '5',
    name: '킹받네',
    lastMessage: 'ㅋㅋㅋㅋㅋ 진짜 웃겨요',
    time: '오후 5:55',
    unread: 1,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
    online: true,
  },
  {
    id: '2',
    name: '알잘딱깔센',
    lastMessage: '다음 게임은 뭐에요?',
    time: '어제',
    unread: 0,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300',
    online: false,
  },
];

// Mock Messages for ChatRoom
export interface MockMessage {
  id: number;
  sender: 'me' | 'other';
  text: string;
  timestamp: string;
  avatar?: string;
}

export const mockMessages: MockMessage[] = [
  {
    id: 1,
    sender: 'other',
    text: '오늘 방송 너무 재밌었어요!',
    timestamp: '오후 11:34',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
  },
  {
    id: 2,
    sender: 'me',
    text: '정말요? 다행이네요! 어떤 부분이 제일 재밌었어요?',
    timestamp: '오후 11:35',
  },
  {
    id: 3,
    sender: 'other',
    text: '새로운 게임 플레이 보여주신 거요! 완전 흥미진진했어요.',
    timestamp: '오후 11:35',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
  },
  {
    id: 4,
    sender: 'other',
    text: '다음에도 또 해주실 거죠? 기대할게요!',
    timestamp: '오후 11:36',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
  },
  {
    id: 5,
    sender: 'me',
    text: '당연하죠! 여러분이 좋아해주시니 저도 기쁘네요. 다음 방송도 기대해주세요!',
    timestamp: '오후 11:38',
  },
];

// Helper functions to get mock data
export const getMockInfluencerById = (id: string): Influencer | undefined => {
  return mockInfluencers.find((influencer) => influencer.id === id);
};

export const getMockChatById = (id: string): MockChatListItem | undefined => {
  return mockChatList.find((chat) => chat.id === id);
};

export const getPopularInfluencers = (count: number = 3): Influencer[] => {
  return mockInfluencers.filter((inf) => inf.isVerified).slice(0, count);
};
