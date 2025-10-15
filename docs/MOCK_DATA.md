# Mock Data 사용 가이드

## 개요
개발 및 테스트를 위한 Mock 데이터를 중앙 집중식으로 관리합니다.

## 위치
`src/constants/mockData.ts`

## 사용 가능한 Mock 데이터

### 1. mockInfluencers
인플루언서 목록 데이터

```typescript
import { mockInfluencers } from '@/constants/mockData';

// 사용 예시
const HomeScreen = () => {
  const [influencers, setInfluencers] = useState(mockInfluencers);
  // ...
};
```

### 2. mockChatList
채팅 목록 데이터

```typescript
import { mockChatList } from '@/constants/mockData';

// 사용 예시
const ChatListScreen = () => {
  // ...
};
```

### 3. mockMessages
채팅 메시지 데이터

```typescript
import { mockMessages } from '@/constants/mockData';

// 사용 예시
const ChatRoom = () => {
  const [messages, setMessages] = useState(mockMessages);
  // ...
};
```

## Helper Functions

### getMockInfluencerById
특정 ID의 인플루언서 가져오기

```typescript
import { getMockInfluencerById } from '@/constants/mockData';

const influencer = getMockInfluencerById('1');
```

### getMockChatById
특정 ID의 채팅 가져오기

```typescript
import { getMockChatById } from '@/constants/mockData';

const chat = getMockChatById('1');
```

### getPopularInfluencers
인기 인플루언서 가져오기 (검증된 인플루언서)

```typescript
import { getPopularInfluencers } from '@/constants/mockData';

const popular = getPopularInfluencers(3); // 3명
```

## 타입 정의

Mock 데이터는 `src/types/` 폴더의 타입 정의를 사용합니다:

- `Influencer` - `@/types/influencer`
- `Message` - `@/types/chat`
- `MockChatListItem` - `@/constants/mockData`
- `MockMessage` - `@/constants/mockData`

## 주의사항

1. **프로덕션에서는 사용하지 마세요** - 이 데이터는 개발/테스트 용도입니다.
2. **실제 API로 대체** - 백엔드 API가 준비되면 이 Mock 데이터를 실제 API 호출로 대체해야 합니다.
3. **타입 일관성** - Mock 데이터의 타입은 실제 API 응답 타입과 동일하게 유지하세요.

## 확장 방법

새로운 Mock 데이터를 추가하려면:

1. `src/constants/mockData.ts`에 데이터 추가
2. 필요한 타입을 `src/types/`에서 import
3. Helper 함수 추가 (필요한 경우)
4. 이 문서 업데이트

```typescript
// 예시: 새로운 Mock 데이터 추가
export const mockNotifications = [
  { id: '1', message: '새 팔로워가 생겼습니다!', timestamp: new Date() },
  // ...
];
```
