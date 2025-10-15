// 크레딧 시스템 관련 타입 정의

export interface Credit {
  id: string;
  amount: number;
  type: 'purchase' | 'usage' | 'bonus' | 'refund';
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreditBalance {
  userId: string;
  totalCredits: number;
  usedCredits: number;
  remainingCredits: number;
  lastUpdated: Date;
}

export interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price: number;
  currency: string;
  discount?: number;
  isPopular?: boolean;
  description?: string;
}

export interface CreditTransaction {
  id: string;
  userId: string;
  type: 'debit' | 'credit';
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  reason: string;
  metadata?: Record<string, any>;
  createdAt: Date;
}

// 크레딧 사용 목적
export type CreditUsageType = 
  | 'message'      // 메시지 전송
  | 'voice_call'   // 음성 통화
  | 'premium_chat' // 프리미엄 채팅
  | 'gift'         // 선물 전송
  | 'subscription' // 구독
  | 'boost';       // 부스트 기능

export interface CreditUsage {
  type: CreditUsageType;
  cost: number;
  description: string;
}