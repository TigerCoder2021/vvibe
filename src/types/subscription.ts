// 구독 시스템 관련 타입 정의

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
  discountPercent?: number;
}

export interface Subscription {
  id: string;
  userId: string;
  influencerId: string;
  planId: string;
  status: 'active' | 'expired' | 'cancelled' | 'pending';
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubscriptionBenefit {
  type: 'unlimited_messages' | 'priority_support' | 'exclusive_content' | 'voice_calls' | 'custom_avatar';
  name: string;
  description: string;
  isAvailable: boolean;
}

export interface InfluencerSubscription {
  influencerId: string;
  influencerName: string;
  influencerImage: string;
  subscription: Subscription;
  plan: SubscriptionPlan;
  remainingDays: number;
  benefits: SubscriptionBenefit[];
}

// 구독 상태
export type SubscriptionStatus = 'active' | 'expired' | 'cancelled' | 'pending';

// 구독 플랜 유형
export type PlanType = 'basic' | 'premium' | 'vip';

export interface SubscriptionStats {
  totalSubscriptions: number;
  activeSubscriptions: number;
  monthlySpending: number;
  favoriteInfluencer?: {
    id: string;
    name: string;
    image: string;
  };
}