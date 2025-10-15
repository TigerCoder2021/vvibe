// Influencer related types
export interface Influencer {
  id: string;
  name: string;
  handle?: string; // @username
  profileImage: string;
  coverImage?: string;
  description: string;
  category: string;
  voiceId?: string; // TTS voice ID
  followersCount: number;
  isVerified: boolean;
  isOnline?: boolean; // Online status for chat
}

export interface InfluencerProfile extends Influencer {
  bio: string;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
  stats: {
    totalChats: number;
    responseRate: number;
    averageResponseTime: number;
  };
}
