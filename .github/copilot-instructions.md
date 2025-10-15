# GitHub Copilot Instructions for VVibe Project

## 프로젝트 개요
VVibe는 AI 기반 인플루언서 TTS(Text-to-Speech) 기술을 활용하여 팬과 실시간으로 소통할 수 있는 모바일 웹 애플리케이션입니다.

## 기술 스택
- **Frontend**: React 19, TypeScript
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS (CDN)
- **상태 관리**: Context API (추후 Zustand 고려)

## 프로젝트 구조

### 디렉토리 구조
```
src/
├── components/
│   ├── common/          # 재사용 가능한 공통 UI 컴포넌트 (Button, Input, Modal, Card)
│   ├── layout/          # 레이아웃 컴포넌트 (BottomNavBar, Header)
│   ├── screens/         # 화면 단위 컴포넌트
│   │   ├── auth/       # 인증 관련 (LoginScreen, TermsAgreementScreen, AgeConsentScreen, BirthdayModal)
│   │   ├── onboarding/ # 온보딩 (OnboardingScreen)
│   │   ├── home/       # 홈 화면 (HomeScreen)
│   │   ├── chat/       # 대화 (ChatListScreen, ChatRoom)
│   │   └── profile/    # 프로필 (ProfileScreen, InfluencerProfileModal)
│   └── icons/          # SVG 아이콘 컴포넌트
├── hooks/              # Custom React Hooks
├── services/           # API 통신, TTS 서비스, 로컬 스토리지
├── store/              # 전역 상태 관리
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
├── constants/          # 상수 정의
├── styles/             # 글로벌 스타일
└── assets/             # 정적 리소스
```

### Import Path Aliases
다음 경로 별칭을 사용하세요:
- `@/` → `./src/`
- `@components/` → `./src/components/`
- `@screens/` → `./src/components/screens/`
- `@hooks/` → `./src/hooks/`
- `@services/` → `./src/services/`
- `@store/` → `./src/store/`
- `@types/` → `./src/types/`
- `@utils/` → `./src/utils/`
- `@constants/` → `./src/constants/`
- `@assets/` → `./src/assets/`

## 코딩 규칙

### 파일 네이밍
- **컴포넌트**: PascalCase (예: `LoginScreen.tsx`, `ChatRoom.tsx`)
- **유틸리티/서비스**: camelCase (예: `apiClient.ts`, `formatDate.ts`)
- **타입 정의**: PascalCase (예: `User.ts`, `Message.ts`)
- **상수**: UPPER_SNAKE_CASE 파일명 또는 camelCase (예: `config.ts`)
- **훅**: camelCase with 'use' prefix (예: `useAuth.ts`, `useChat.ts`)

### 코드 스타일
- **TypeScript**: 모든 파일은 TypeScript로 작성, `any` 타입 최소화
- **컴포넌트**: 함수형 컴포넌트 사용, React Hooks 활용
- **Props**: 인터페이스로 타입 명시 (`interface ComponentNameProps`)
- **Exports**: Named export 또는 Default export (컴포넌트는 default export 선호)

### 컴포넌트 작성 가이드

#### Screen 컴포넌트
- 독립적인 페이지/화면 단위
- `src/components/screens/[category]/` 위치
- 라우팅 대상이 되는 컴포넌트

예시:
```tsx
import React from 'react';

interface LoginScreenProps {
  // props 타입 정의
}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  // 컴포넌트 로직
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default LoginScreen;
```

#### Layout 컴포넌트
- 여러 화면에서 공통으로 사용
- 네비게이션, 헤더 등
- `src/components/layout/` 위치

#### Common 컴포넌트
- 재사용 가능한 UI 컴포넌트
- Button, Input, Modal, Card 등
- Props를 통해 커스터마이징 가능
- `src/components/common/` 위치

### Custom Hooks 작성 가이드
- 파일명: `use` prefix (예: `useAuth.ts`)
- 로직 재사용 및 관심사 분리
- `src/hooks/` 위치

예시:
```tsx
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  
  // 훅 로직
  
  return { user, setUser };
};
```

### 타입 정의 가이드
- 관련 도메인별로 파일 분리 (`user.ts`, `chat.ts`, `auth.ts` 등)
- Interface 사용 (확장 가능성 고려)
- `src/types/` 위치
- `index.ts`에서 re-export

예시:
```typescript
// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email?: string;
}

// src/types/index.ts
export * from './user';
export * from './chat';
```

### 유틸리티 함수 가이드
- 순수 함수로 작성
- 명확한 함수명 사용
- JSDoc 주석으로 설명 추가
- `src/utils/` 위치

예시:
```typescript
/**
 * Format date to relative time
 */
export const formatRelativeTime = (date: Date): string => {
  // 구현
};
```

### 상수 정의 가이드
- `const` 객체로 관리
- `as const`로 타입 좁히기
- `src/constants/` 위치

예시:
```typescript
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  // ...
} as const;
```

## 스타일링 가이드

### Tailwind CSS 사용
- 인라인 클래스 사용
- 반응형: `sm:`, `md:`, `lg:` prefix
- 다크모드 기본 (검정 배경)

### CSS 변수 (global.css)
- `--color-primary`, `--color-secondary` 등 사용
- `--spacing-*`, `--radius-*` 활용
- 일관된 디자인 유지

## 주요 기능

### 1. 인증
- 소셜 로그인 (카카오, 네이버, 구글, 애플)
- 연령 인증 (만 14세 이상)
- 약관 동의

### 2. 인플루언서
- 인플루언서 목록 및 검색
- 프로필 상세 정보
- 팔로우 기능

### 3. 대화
- 실시간 대화
- TTS 음성 재생
- 메시지 히스토리

### 4. 온보딩
- 첫 사용자 가이드
- 관심 인플루언서 선택

## 환경 변수
- `VITE_` prefix 사용
- `.env.example` 참조
- 민감 정보는 `.env`에 저장 (Git 제외)

## 성능 최적화
- React.memo 활용 (필요시)
- useCallback, useMemo 사용
- 이미지 lazy loading
- 코드 스플리팅

## 접근성 (a11y)
- 시맨틱 HTML 사용
- ARIA 속성 추가
- 키보드 네비게이션 지원
- 적절한 대비(contrast) 유지

## 테스팅 (추후)
- 컴포넌트: React Testing Library
- E2E: Playwright/Cypress
- 단위 테스트: Jest

## Git 커밋 메시지
```
타입: 제목

본문 (선택)
```

**타입**:
- `feat`: 새 기능
- `fix`: 버그 수정
- `refactor`: 리팩토링
- `style`: 코드 포맷팅
- `docs`: 문서 수정
- `chore`: 빌드, 설정 변경
- `test`: 테스트 추가/수정

## 코드 리뷰 체크리스트
- [ ] TypeScript 타입이 명확한가?
- [ ] 컴포넌트가 단일 책임 원칙을 따르는가?
- [ ] Props가 적절히 정의되었는가?
- [ ] 불필요한 re-render가 없는가?
- [ ] 에러 핸들링이 적절한가?
- [ ] 접근성이 고려되었는가?
- [ ] 반응형 디자인이 적용되었는가?

## 자주 사용하는 패턴

### API 호출
```typescript
// src/services/api/auth.ts
export const loginUser = async (credentials: LoginCredentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return response.json();
};
```

### 상태 관리 (Context)
```typescript
// src/store/authStore.tsx
import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // 상태 및 로직
  return <AuthContext.Provider value={...}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
```

## 개발 시 참고사항
- 모바일 우선 디자인 (max-width: 28rem)
- 다크 테마 기본
- 한국어 UI
- 실시간 기능은 WebSocket 고려
- TTS 음성은 비동기 처리

---

이 지침을 따라 일관성 있고 유지보수하기 쉬운 코드를 작성해주세요.
