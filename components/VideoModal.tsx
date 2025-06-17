'use client';

import React, { useRef, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoSrc, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [isOpen, videoSrc]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        cursor: 'pointer'
      }}
      onClick={onClose}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain'
        }}
      />
    </div>
  );
} 