/**
 * VoiceChatModal Component
 * 전체 화면 음성 대화 모달 (ChatGPT 스타일)
 */

import React, { useState, useEffect } from 'react';
import { CloseIcon } from '@components/icons/NavigationIcons';
import type { Influencer } from '@/types/influencer';

interface VoiceChatModalProps {
  influencer: Influencer;
  isOpen: boolean;
  onClose: () => void;
}

const VoiceChatModal: React.FC<VoiceChatModalProps> = ({
  influencer,
  isOpen,
  onClose,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [waveHeights, setWaveHeights] = useState([4, 8, 6, 10, 5]);

  // 녹음 시간 타이머
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  // 파형 애니메이션
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setWaveHeights([
          Math.random() * 12 + 4,
          Math.random() * 16 + 6,
          Math.random() * 14 + 5,
          Math.random() * 18 + 8,
          Math.random() * 12 + 4,
        ]);
      }, 150);
    } else {
      setWaveHeights([4, 8, 6, 10, 5]);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  const handleToggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingTime(0);
    } else {
      setIsPaused(!isPaused);
    }
  };

  const handleStop = () => {
    setIsRecording(false);
    setIsPaused(false);
    setRecordingTime(0);
    onClose();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/50 transition-all duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* 모바일 컨테이너 */}
      <div className={`relative w-full max-w-md h-full mx-auto transition-all duration-500 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-black/75 to-black/80"></div>

        {/* 콘텐츠 */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-6">
          {/* Header */}
          <div className="w-full flex items-center justify-between">
          <button
            onClick={handleStop}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="닫기"
          >
            <CloseIcon className="w-6 h-6 text-white" />
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="옵션"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4 -mt-12">
          <div className="relative">
            <img
              src={influencer.profileImage}
              alt={influencer.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
            />
            {influencer.isOnline && (
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-black"></div>
            )}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{influencer.name}</h2>
            <p className="text-sm text-gray-400 mt-1">
              {influencer.handle || '@influencer'}
            </p>
          </div>
        </div>

        {/* Waveform Animation */}
        <div className="flex items-end justify-center gap-2 h-32">
          {waveHeights.map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full transition-all duration-150 ease-out"
              style={{
                width: '8px',
                height: `${height * 4}px`,
              }}
            />
          ))}
        </div>

        {/* Recording Time */}
        {isRecording && (
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-red-500 animate-pulse'}`}></div>
              <span className="text-3xl font-mono font-bold text-white">{formatTime(recordingTime)}</span>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col items-center space-y-6 pb-8">
          {/* Main Button */}
          <button
            onClick={handleToggleRecording}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
              isRecording
                ? isPaused
                  ? 'bg-yellow-500 hover:bg-yellow-600'
                  : 'bg-red-500 hover:bg-red-600 scale-110'
                : 'bg-white hover:bg-gray-100'
            }`}
            aria-label={isRecording ? (isPaused ? '계속하기' : '일시정지') : '녹음 시작'}
          >
            {isRecording ? (
              isPaused ? (
                // Play icon
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                // Pause icon
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )
            ) : (
              // Mic icon
              <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </button>

          {/* Status Text */}
          <p className="text-sm text-gray-300">
            {isRecording
              ? isPaused
                ? '탭하여 계속하기'
                : '탭하여 일시정지'
              : '탭하여 말하기'}
          </p>

          {/* Stop Button (only when recording) */}
          {isRecording && (
            <button
              onClick={handleStop}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
            >
              종료
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default VoiceChatModal;
