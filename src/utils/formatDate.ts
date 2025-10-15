/**
 * Date formatting utilities
 */

/**
 * Format date to relative time (e.g., "2 hours ago", "3 days ago")
 */
export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return '방금 전';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  } else {
    return formatDate(date);
  }
};

/**
 * Format date to string (YYYY-MM-DD)
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Format date to time string (HH:MM)
 */
export const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

/**
 * Format date to full datetime string
 */
export const formatDateTime = (date: Date): string => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

/**
 * Format message time (e.g., "오후 11:34")
 */
export const formatMessageTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours < 12 ? '오전' : '오후';
  const displayHours = hours % 12 || 12;
  return `${period} ${displayHours}:${minutes}`;
};

/**
 * Check if date is today
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

/**
 * Get age from birthdate
 */
export const getAge = (birthdate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Get maximum days in a month
 * @param month - Month number (1-12)
 * @param year - Year (optional, for leap year calculation)
 */
export const getMaxDaysInMonth = (month: number, year?: number): number => {
  // 31일: 1월, 3월, 5월, 7월, 8월, 10월, 12월
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return 31;
  }
  
  // 30일: 4월, 6월, 9월, 11월
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }
  
  // 2월: 윤년 계산
  if (month === 2) {
    if (year) {
      // 윤년: 4로 나누어떨어지고, 100으로 나누어떨어지지 않거나, 400으로 나누어떨어짐
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      return isLeapYear ? 29 : 28;
    }
    // 년도가 없으면 최대값인 29일 반환
    return 29;
  }
  
  return 31; // 기본값
};
