import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getMaxDaysInMonth } from '@/utils/formatDate';

interface BirthdayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (month: number, day: number) => void;
  initialMonth?: number;
  initialDay?: number;
}

const BirthdayModal: React.FC<BirthdayModalProps> = ({ isOpen, onClose, onConfirm, initialMonth, initialDay }) => {
  const [month, setMonth] = useState(initialMonth || new Date().getMonth() + 1);
  const [day, setDay] = useState(initialDay || new Date().getDate());

  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  // 선택된 월에 따른 최대 일 수 계산
  const maxDays = getMaxDaysInMonth(month);
  const days = Array.from({ length: maxDays }, (_, i) => i + 1);

  const ITEM_HEIGHT = 36; // Corresponds to h-9 in Tailwind

  const scrollToInitialValue = useCallback(() => {
    if (monthRef.current) {
      // month 값이 selectedIndex와 동일하므로 그대로 사용
      monthRef.current.scrollTop = month * ITEM_HEIGHT;
    }
    if (dayRef.current) {
      // day 값이 selectedIndex와 동일하므로 그대로 사용
      dayRef.current.scrollTop = day * ITEM_HEIGHT;
    }
  }, [month, day]);

  useEffect(() => {
    if (isOpen) {
      // Delay scrolling to ensure the element is visible and rendered
      setTimeout(scrollToInitialValue, 50);
    }
  }, [isOpen, scrollToInitialValue]);


  const handleScroll = (ref: React.RefObject<HTMLDivElement>, setter: React.Dispatch<React.SetStateAction<number>>, type: 'month' | 'day') => {
    if (!ref.current) return;
    const scrollTop = ref.current.scrollTop;
    const selectedIndex = Math.round(scrollTop / ITEM_HEIGHT);
    // selectedIndex가 정확한 월/일 값
    const newValue = selectedIndex;
    
    // 유효한 범위 체크 및 상태 업데이트
    if (type === 'month' && newValue >= 1 && newValue <= 12) {
      setter(newValue);
    } else if (type === 'day') {
      const maxDays = getMaxDaysInMonth(month);
      if (newValue >= 1 && newValue <= maxDays) {
        setter(newValue);
      }
    }
  };

  // 월이 변경될 때 일이 최대값을 초과하면 조정
  useEffect(() => {
    const maxDays = getMaxDaysInMonth(month);
    if (day > maxDays) {
      setDay(maxDays);
      // 스크롤 위치도 조정
      if (dayRef.current) {
        dayRef.current.scrollTop = maxDays * ITEM_HEIGHT;
      }
    }
  }, [month, day]);
  
  
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setTimeout> for browser compatibility.
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedMonthScroll = debounce(() => handleScroll(monthRef, setMonth, 'month'), 150);
  const debouncedDayScroll = debounce(() => handleScroll(dayRef, setDay, 'day'), 150);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-xs p-5 m-4 text-white" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold text-center mb-4">생년월일 선택</h2>
        
        <div className="relative h-48 flex justify-center items-center my-2 overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-9 bg-purple-500/10 border-y border-purple-500/30"></div>
          
          <div ref={monthRef} onScroll={debouncedMonthScroll} className="w-1/2 h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide text-center py-[calc(50%-18px)]">
            {months.map(m => (
              <div key={m} className="h-9 flex items-center justify-center snap-center text-lg">{m}월</div>
            ))}
          </div>
          <div ref={dayRef} onScroll={debouncedDayScroll} className="w-1/2 h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide text-center py-[calc(50%-18px)]">
            {days.map(d => (
              <div key={d} className="h-9 flex items-center justify-center snap-center text-lg">{d}일</div>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 mt-4">
          <button onClick={onClose} className="w-full p-3 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 transition-colors">취소</button>
          <button onClick={() => onConfirm(month, day)} className="w-full p-3 rounded-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity">확인</button>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default BirthdayModal;