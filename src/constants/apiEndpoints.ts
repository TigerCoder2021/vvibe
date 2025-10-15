// API configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  SOCIAL_LOGIN: '/auth/social',
  
  // User
  USER_PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile/update',
  
  // Influencer
  INFLUENCERS: '/influencers',
  INFLUENCER_DETAIL: (id: string) => `/influencers/${id}`,
  POPULAR_INFLUENCERS: '/influencers/popular',
  SEARCH_INFLUENCERS: '/influencers/search',
  
  // Chat
  CHAT_ROOMS: '/chat/rooms',
  CHAT_ROOM: (id: string) => `/chat/rooms/${id}`,
  MESSAGES: (roomId: string) => `/chat/rooms/${roomId}/messages`,
  SEND_MESSAGE: (roomId: string) => `/chat/rooms/${roomId}/messages`,
  
  // TTS
  GENERATE_TTS: '/tts/generate',
  TTS_VOICES: '/tts/voices',
} as const;

export const API_TIMEOUT = 30000; // 30 seconds
