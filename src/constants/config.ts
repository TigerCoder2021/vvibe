// Application configuration
export const APP_CONFIG = {
  APP_NAME: 'VVibe',
  APP_VERSION: '1.0.0',
  MIN_AGE: 14,
  MAX_MESSAGE_LENGTH: 500,
  CHAT_PAGE_SIZE: 50,
  INFLUENCER_PAGE_SIZE: 20,
} as const;

// Social login providers
export const SOCIAL_PROVIDERS = {
  KAKAO: 'kakao',
  NAVER: 'naver',
  GOOGLE: 'google',
  APPLE: 'apple',
} as const;

// Chat status
export const CHAT_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  TYPING: 'typing',
} as const;

// Message types
export const MESSAGE_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  AUDIO: 'audio',
} as const;
