// Chat and Message related types
export interface Message {
  id: string;
  chatRoomId: string;
  senderId: string;
  senderName: string;
  senderType: 'user' | 'influencer';
  content: string;
  timestamp: Date;
  isRead: boolean;
  hasAudio?: boolean;
  audioUrl?: string;
}

export interface ChatRoom {
  id: string;
  influencerId: string;
  influencerName: string;
  influencerImage: string;
  userId: string;
  lastMessage?: Message;
  lastMessageTime?: Date;
  unreadCount: number;
  isActive: boolean;
}

export interface ChatListItem {
  chatRoom: ChatRoom;
  influencer: {
    id: string;
    name: string;
    profileImage: string;
    isOnline: boolean;
  };
}
