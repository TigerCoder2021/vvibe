# VVibe - AI 인플루언서 TTS 대화 앱

VVibe는 AI 기반 인플루언서 TTS(Text-to-Speech) 기술을 활용하여 팬과 실시간으로 소통할 수 있는 모바일 웹 애플리케이션입니다.

## 🎯 주요 기능

- 🎤 **AI TTS 음성 대화**: 인플루언서의 목소리로 실시간 대화
- 💬 **실시간 대화**: WebSocket 기반 실시간 메시징
- 👤 **인플루언서 프로필**: 다양한 인플루언서 탐색 및 팔로우
- 🔐 **소셜 로그인**: 카카오, 네이버, 구글, 애플 로그인 지원
- 📱 **모바일 최적화**: 반응형 디자인으로 모든 기기 지원

## 🛠️ 기술 스택

- **Frontend**: React 19, TypeScript
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS
- **상태 관리**: Context API (추후 Zustand/Redux 고려)
- **라우팅**: React Router (예정)
- **API 통신**: Fetch API / Axios (예정)

## 📁 프로젝트 구조

```
vvibe/
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── common/         # 공통 컴포넌트
│   │   ├── layout/         # 레이아웃 컴포넌트
│   │   ├── screens/        # 화면 단위 컴포넌트
│   │   └── icons/          # 아이콘 컴포넌트
│   ├── hooks/              # Custom Hooks
│   ├── services/           # API 서비스
│   ├── store/              # 상태 관리
│   ├── types/              # TypeScript 타입 정의
│   ├── utils/              # 유틸리티 함수
│   ├── constants/          # 상수 정의
│   ├── styles/             # 글로벌 스타일
│   └── assets/             # 정적 리소스
├── public/                 # 퍼블릭 파일
└── docs/                   # 문서
```

자세한 프로젝트 구조는 [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)를 참고하세요.

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/TigerCoder2021/vvibe.git
   cd vvibe
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **환경 변수 설정**
   `.env.example` 파일을 `.env.development`로 복사하고 필요한 API 키를 설정하세요.
   ```bash
   cp .env.example .env.development
   ```

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```

5. 브라우저에서 `http://localhost:3000` 접속

### 빌드

프로덕션 빌드:
```bash
npm run build
```

빌드 미리보기:
```bash
npm run preview
```

## 📖 문서

- [프로젝트 가이드라인](./PROJECT_GUIDELINES.md) - 코딩 규칙, 네이밍 컨벤션, 개발 워크플로우
- [폴더 구조](./FOLDER_STRUCTURE.md) - 디렉토리 구조 및 파일 배치 가이드

## 🤝 기여하기

기여는 언제나 환영합니다! 자세한 내용은 [프로젝트 가이드라인](./PROJECT_GUIDELINES.md)을 참고하세요.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🔗 링크

- GitHub 저장소: https://github.com/TigerCoder2021/vvibe
- 이슈 트래커: https://github.com/TigerCoder2021/vvibe/issues

---

**개발 중인 프로젝트입니다. 많은 기능이 추가될 예정입니다!** 🚀
