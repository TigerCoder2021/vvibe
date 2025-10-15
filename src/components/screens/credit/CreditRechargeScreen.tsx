import React, { useState } from 'react';
import { BackIcon } from '@components/icons/NavigationIcons';
import { CreditIcon, WalletIcon } from '@components/icons/CommonIcons';
import type { CreditPackage } from '@/types/credit';
import type { SubscriptionPlan } from '@/types/subscription';

interface CreditRechargeScreenProps {
  onBack: () => void;
  currentCredits: number;
}

const CreditRechargeScreen: React.FC<CreditRechargeScreenProps> = ({ 
  onBack, 
  currentCredits = 1250 
}) => {
  const [activeTab, setActiveTab] = useState<'credit' | 'subscription'>('credit');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const creditPackages: CreditPackage[] = [
    {
      id: '1',
      name: '스타터 팩',
      credits: 500,
      price: 5000,
      currency: 'KRW',
    },
    {
      id: '2', 
      name: '베이직 팩',
      credits: 1200,
      price: 10000,
      currency: 'KRW',
      discount: 20,
    },
    {
      id: '3',
      name: '프리미엄 팩', 
      credits: 2500,
      price: 20000,
      currency: 'KRW',
      discount: 25,
      isPopular: true,
    },
    {
      id: '4',
      name: '메가 팩',
      credits: 6000,
      price: 45000,
      currency: 'KRW', 
      discount: 30,
    }
  ];

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: '베이직 플랜',
      description: '기본 메시지 + 할인 혜택',
      price: 9900,
      currency: 'KRW',
      duration: 'monthly',
      features: ['메시지 100개/월', '기본 답변', '할인 혜택']
    },
    {
      id: 'premium', 
      name: '프리미엄 플랜',
      description: '무제한 메시지 + 음성 통화',
      price: 15000,
      currency: 'KRW',
      duration: 'monthly',
      features: ['무제한 메시지', '음성 통화 30분', '우선 답변'],
      isPopular: true
    },
    {
      id: 'vip',
      name: 'VIP 플랜', 
      description: '모든 혜택 + 독점 콘텐츠',
      price: 25000,
      currency: 'KRW', 
      duration: 'monthly',
      features: ['모든 프리미엄 혜택', '독점 콘텐츠', '개인 맞춤 아바타', '무제한 음성통화']
    }
  ];

  const handlePurchase = () => {
    if (!selectedPackage) return;
    // TODO: Google Play Billing 결제 로직 구현
    console.log('Google Play 결제 처리:', { selectedPackage });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className="h-full bg-black text-white flex flex-col">
      <header className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm px-4 py-3 flex items-center">
        <button 
          onClick={onBack}
          className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors mr-3"
        >
          <BackIcon />
        </button>
        <h1 className="text-lg font-semibold">결제하기</h1>
      </header>

      {/* 탭 메뉴 */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('credit')}
          className={`flex-1 py-3 text-center font-medium transition-colors ${
            activeTab === 'credit' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          크레딧 충전
        </button>
        <button
          onClick={() => setActiveTab('subscription')}
          className={`flex-1 py-3 text-center font-medium transition-colors ${
            activeTab === 'subscription' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          구독 플랜
        </button>
      </div>

      <main className="flex-1 overflow-y-auto pb-20">
        {activeTab === 'credit' ? (
          /* 크레딧 충전 탭 */
          <>
            {/* 현재 잔액 */}
        <section className="px-4 pt-4 pb-2">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center mb-1">
              <span className="text-xs text-purple-100">현재 크레딧</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CreditIcon className="w-8 h-8" />
              <p className="text-2xl font-bold text-white">                
                {formatPrice(currentCredits)}
              </p>
            </div>
          </div>
        </section>

        {/* 크레딧 패키지 */}
        <section className="px-4 mb-4">
          <h2 className="text-base font-semibold mb-3 px-1 pt-4">충전 패키지</h2>
          <div className="grid grid-cols-2 gap-2">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedPackage === pkg.id 
                    ? 'border-purple-500 bg-purple-900/20' 
                    : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-1.5 left-2 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold rounded">
                    인기
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="font-medium text-sm mb-1">{pkg.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <CreditIcon className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-yellow-400 font-semibold text-xs">
                      {formatPrice(pkg.credits)}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">
                      ₩{formatPrice(pkg.price)}
                    </p>
                    {pkg.discount && (
                      <div className="space-y-1">
                        <p className="text-xs text-gray-400 line-through">
                          ₩{formatPrice(Math.round(pkg.price / (1 - pkg.discount / 100)))}
                        </p>
                        <span className="inline-block px-1.5 py-0.5 bg-red-600 text-xs rounded">
                          {pkg.discount}% 할인
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* 이용 안내 */}
            <section className="px-4 mb-4">
              <div className="bg-gray-900/30 rounded-lg p-3 border border-gray-800/50">
                <h3 className="font-medium mb-2 text-xs text-gray-300">이용 안내</h3>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  <li>• 대화 및 음성통화에 사용</li>
                  <li>• 미사용 크레딧 무기한 보관</li>
                  <li>• Google Play를 통한 안전한 결제</li>
                  <li>• Google Play 환불 정책 적용</li>
                </ul>
              </div>
            </section>
          </>
        ) : (
          /* 구독 플랜 탭 */
          <div className="p-4">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold mb-1">구독 플랜을 선택하세요</h2>
              <p className="text-gray-400 text-xs">인플루언서와 더 깊은 소통을 경험해보세요</p>
            </div>

            {/* 가로 캐러셀 */}
            <div className="flex overflow-x-auto gap-3 pb-4 pt-3 scrollbar-hide">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex-shrink-0 w-44 bg-gray-900/50 border rounded-xl p-4 mt-2 ${
                    plan.isPopular ? 'border-purple-500' : 'border-gray-800'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold rounded whitespace-nowrap">
                      인기
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className="text-base font-bold mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">{plan.description}</p>
                    <div className="text-xl font-bold text-white">
                      ₩{formatPrice(plan.price)}
                      <span className="text-sm text-gray-400 font-normal">/월</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 h-20 flex flex-col">
                    {Array.from({ length: 4 }, (_, index) => {
                      const feature = plan.features[index];
                      return (
                        <div key={index} className="flex items-center">
                          {feature ? (
                            <>
                              <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs text-white">✓</span>
                              </span>
                              <span className="text-xs text-gray-300">{feature}</span>
                            </>
                          ) : (
                            <div className="h-3"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <button className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
                    plan.isPopular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                  }`}>
                    {plan.isPopular ? '시작하기' : '선택'}
                  </button>
                </div>
              ))}
            </div>

            {/* 플랜 비교 테이블 */}
            <div className="mt-6">
              <h3 className="text-base font-bold mb-3 text-center">플랜 비교</h3>
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-800/50">
                        <th className="text-left p-3 font-medium text-gray-300">기능</th>
                        <th className="text-center p-3 font-medium text-gray-300">베이직</th>
                        <th className="text-center p-3 font-medium text-purple-400">프리미엄</th>
                        <th className="text-center p-3 font-medium text-gray-300">VIP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="p-3 text-gray-300">월 메시지</td>
                        <td className="p-3 text-center text-gray-400">100개</td>
                        <td className="p-3 text-center text-white font-medium">무제한</td>
                        <td className="p-3 text-center text-white font-medium">무제한</td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="p-3 text-gray-300">음성 통화</td>
                        <td className="p-3 text-center text-gray-400">-</td>
                        <td className="p-3 text-center text-white">30분/월</td>
                        <td className="p-3 text-center text-white font-medium">무제한</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-300">답변 우선순위</td>
                        <td className="p-3 text-center text-gray-400">기본</td>
                        <td className="p-3 text-center text-white">우선</td>
                        <td className="p-3 text-center text-white font-medium">최우선</td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="p-3 text-gray-300">독점 콘텐츠</td>
                        <td className="p-3 text-center text-gray-400">-</td>
                        <td className="p-3 text-center text-gray-400">-</td>
                        <td className="p-3 text-center text-white font-medium">✓</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-300">맞춤 아바타</td>
                        <td className="p-3 text-center text-gray-400">-</td>
                        <td className="p-3 text-center text-gray-400">-</td>
                        <td className="p-3 text-center text-white font-medium">✓</td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="p-3 text-gray-300 font-medium">월 요금</td>
                        <td className="p-3 text-center text-white font-bold">₩9,900</td>
                        <td className="p-3 text-center text-purple-400 font-bold">₩15,000</td>
                        <td className="p-3 text-center text-white font-bold">₩25,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 구독 안내 */}
            <div className="bg-gray-900/30 rounded-lg p-3 border border-gray-800/50 mt-4">
              <h3 className="font-medium mb-2 text-xs text-gray-300">구독 안내</h3>
              <ul className="text-xs text-gray-500 space-y-0.5">
                <li>• 언제든지 구독 해지 가능</li>
                <li>• Google Play를 통한 안전한 결제</li>
                <li>• 첫 달 무료 체험 제공</li>
                <li>• 구독 갱신 24시간 전 해지 시 과금 없음</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CreditRechargeScreen;