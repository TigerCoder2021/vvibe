/**
 * SearchBar Component
 * 재사용 가능한 검색 바 컴포넌트
 */

import React, { useRef, useEffect } from 'react';
import { SearchIcon, CloseIcon } from '@components/icons/NavigationIcons';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = '검색...',
  value,
  onChange,
  onClose,
  autoFocus = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="flex items-center gap-2">
      {/* Search Input */}
      <div className="flex-1 flex items-center bg-gray-800 rounded-full px-4 py-1 pr-2 border border-gray-700 focus-within:border-purple-500/50 transition-all">
        <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
        />
        {/* X 버튼 - 입력창 안쪽에 항상 표시 */}
        <button
          onClick={onClose}
          className="ml-2 p-1 hover:bg-gray-700 rounded-full transition-colors"
          aria-label="취소"
        >
          <CloseIcon className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
