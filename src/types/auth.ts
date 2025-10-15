// Authentication related types
import { User as UserType } from './user';

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  token: string | null;
}

export interface AuthUser extends UserType {
  birthdate?: Date;
  ageVerified: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SocialLoginProvider {
  type: 'kakao' | 'naver' | 'google' | 'apple';
  token: string;
}

export interface TermsAgreement {
  termsOfService: boolean;
  privacyPolicy: boolean;
  marketingConsent: boolean;
  ageConsent: boolean;
}

export interface SignupData {
  name: string;
  email?: string;
  birthdate: Date;
  termsAgreement: TermsAgreement;
  provider?: SocialLoginProvider;
}
