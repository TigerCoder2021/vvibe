// Application routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  TERMS: '/terms',
  AGE_CONSENT: '/age-consent',
  ONBOARDING: '/onboarding',
  CHAT: '/chat',
  CHAT_ROOM: '/chat/:id',
  PROFILE: '/profile',
  INFLUENCER_PROFILE: '/influencer/:id',
  SETTINGS: '/settings',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];
