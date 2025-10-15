// User related types
export interface User {
  id: string;
  name: string;
  email?: string;
  handle?: string; // @username
  profileImage?: string;
  credits: number;
  createdAt: Date;
}

export interface UserProfile extends User {
  bio?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  followersCount?: number;
  followingCount?: number;
}
