import React, { useState } from 'react';
import { BackIcon } from '@components/icons/NavigationIcons';
import type { InfluencerSubscription, SubscriptionPlan } from '@/types/subscription';

interface SubscriptionScreenProps {
  onBack: () => void;
}

const SubscriptionScreen: React.FC<SubscriptionScreenProps> = ({ onBack }) => {

  // Mock 데이터
  const activeSubscriptions: InfluencerSubscription[] = [
    {
      influencerId: '1',
      influencerName: '김유튜버',
      influencerImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?q=80&w=150',
      subscription: {
        id: 'sub1',
        userId: 'user1', 
        influencerId: '1',
        planId: 'premium',
        status: 'active',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        autoRenew: true,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      plan: {
        id: 'premium',
        name: '프리미엄 플랜',
        description: '무제한 메시지 + 음성 통화',
        price: 15000,
        currency: 'KRW',
        duration: 'monthly',
        features: ['무제한 메시지', '음성 통화 30분', '우선 답변']
      },
      remainingDays: 12,
      benefits: [
        {
          type: 'unlimited_messages',
          name: '무제한 메시지',
          description: '인플루언서와 무제한 대화',
          isAvailable: true
        },
        {
          type: 'voice_calls',
          name: '음성 통화',
          description: '월 30분 음성 통화',
          isAvailable: true
        },
        {
          type: 'priority_support',
          name: '우선 답변',
          description: '빠른 응답 우선권',
          isAvailable: true
        }
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'expired': return 'text-red-400 bg-red-400/20';
      case 'cancelled': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-yellow-400 bg-yellow-400/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '활성';
      case 'expired': return '만료';
      case 'cancelled': return '취소됨';
      default: return '대기중';
    }
  };

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm p-4 flex items-center">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors mr-3"
        >
          <BackIcon />
        </button>
        <h1 className="text-xl font-bold">구독 관리</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-20">
        {/* 현재 구독 정보 */}
        <div className="p-4">
          {activeSubscriptions.length > 0 ? (
            <div className="space-y-6">
              {/* 구독 상태 요약 */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white">구독 중</h2>
                    <p className="text-purple-100 text-sm">
                      {activeSubscriptions[0].influencerName} · {activeSubscriptions[0].plan.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">₩{formatPrice(activeSubscriptions[0].plan.price)}</p>
                    <p className="text-purple-100 text-xs">매월 자동갱신</p>
                  </div>
                </div>
              </div>

              {/* 구독 세부 정보 */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold">구독 정보</h3>
                
                <div className="space-y-3">

                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-300 text-sm">플랜</span>
                    <span className="text-white text-sm font-medium">{activeSubscriptions[0].plan.name}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-300 text-sm">상태</span>
                    <span className={`text-sm font-medium ${getStatusColor(activeSubscriptions[0].subscription.status).includes('green') ? 'text-green-400' : 'text-gray-400'}`}>
                      {getStatusText(activeSubscriptions[0].subscription.status)}
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-300 text-sm">다음 결제일</span>
                    <span className="text-white text-sm">{activeSubscriptions[0].subscription.endDate?.toLocaleDateString('ko-KR')}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-300 text-sm">자동 갱신</span>
                    <span className={`text-sm ${activeSubscriptions[0].subscription.autoRenew ? 'text-green-400' : 'text-gray-400'}`}>
                      {activeSubscriptions[0].subscription.autoRenew ? '활성' : '비활성'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 혜택 목록 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold">구독 혜택</h3>
                <div className="grid grid-cols-2 gap-3">
                  {activeSubscriptions[0].benefits.map((benefit) => (
                    <div key={benefit.type} className="flex items-start py-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      <div className="min-w-0">
                        <p className="text-white text-sm font-medium truncate">{benefit.name}</p>
                        <p className="text-gray-400 text-xs leading-tight">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 관리 버튼 */}
              <div className="space-y-3 pt-4">
                <button className="w-full py-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg text-sm font-medium transition-colors text-white">
                  자동 갱신 설정
                </button>
                <button className="w-full py-3 bg-red-900/30 hover:bg-red-900/50 rounded-lg text-sm font-medium transition-colors text-red-400">
                  구독 해지
                </button>
              </div>
            </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">구독 중인 인플루언서가 없습니다</h3>
                <p className="text-gray-400 text-sm mb-4">좋아하는 인플루언서를 구독해보세요</p>
              </div>
            )}
          </div>
      </main>
    </div>
  );
};

export default SubscriptionScreen;