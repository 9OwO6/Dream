'use client';

import React, { useState } from 'react';
import VideoModal from '../../components/VideoModal';
import { useRouter } from 'next/navigation';

const dreams = [
  { id: 'n1', title: 'N1 sleep', video: '/videos/n1.mp4' },
  { id: 'n2', title: 'N2 sleep', video: '/videos/n2.mp4' },
  { id: 'n3', title: 'N3 sleep', video: '/videos/n3.mp4' },
  { id: 'rem', title: 'REM sleep', video: '/videos/rem.mp4' },
];

export default function DreamsPage() {
  const [video, setVideo] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        animation: 'dreamWave 15s ease-in-out infinite',
        overflow: 'hidden'
      }}
    >
      <style jsx>{`
        @keyframes dreamWave {
          0% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(128, 0, 255, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            filter: hue-rotate(0deg) saturate(1.5) brightness(0.8);
          }
          20% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 128, 0, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0, 128, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 0, 255, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%);
            filter: hue-rotate(72deg) saturate(1.6) brightness(0.85);
          }
          40% {
            background: 
              radial-gradient(circle at 40% 40%, rgba(128, 255, 0, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(255, 0, 128, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%);
            filter: hue-rotate(144deg) saturate(1.7) brightness(0.9);
          }
          60% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(0, 255, 128, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 128, 0, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(128, 0, 255, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%);
            filter: hue-rotate(216deg) saturate(1.6) brightness(0.85);
          }
          80% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(0, 128, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 128, 0, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            filter: hue-rotate(288deg) saturate(1.5) brightness(0.8);
          }
          100% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(128, 0, 255, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            filter: hue-rotate(360deg) saturate(1.5) brightness(0.8);
          }
        }

        @keyframes waveFlow {
          0% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(-50%) translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }
          75% {
            transform: translateX(-50%) translateY(10px) rotate(-5deg);
          }
          100% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
          }
        }

        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .wave {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255, 0, 128, 0.1) 20%,
            rgba(0, 255, 255, 0.1) 40%,
            rgba(128, 0, 255, 0.1) 60%,
            rgba(255, 128, 0, 0.1) 80%,
            transparent 100%
          );
          animation: waveFlow 8s ease-in-out infinite;
        }

        .wave:nth-child(2) {
          animation-delay: -2s;
          opacity: 0.5;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(0, 255, 255, 0.1) 20%,
            rgba(128, 0, 255, 0.1) 40%,
            rgba(255, 128, 0, 0.1) 60%,
            rgba(255, 0, 128, 0.1) 80%,
            transparent 100%
          );
        }

        .wave:nth-child(3) {
          animation-delay: -4s;
          opacity: 0.3;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(128, 0, 255, 0.1) 20%,
            rgba(255, 128, 0, 0.1) 40%,
            rgba(255, 0, 128, 0.1) 60%,
            rgba(0, 255, 255, 0.1) 80%,
            transparent 100%
          );
        }

        .noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
          animation: float 20s ease-in-out infinite;
        }

        .back-button {
          position: fixed;
          top: 2rem;
          left: 2rem;
          padding: 0.8rem 1.5rem;
          fontSize: 1.2rem;
          fontWeight: bold;
          color: #e94560;
          backgroundColor: rgba(255, 255, 255, 0.15);
          backdropFilter: blur(10px);
          border: 2px solid rgba(233, 69, 96, 0.3);
          borderRadius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          zIndex: 10;
          display: flex;
          alignItems: center;
          gap: 0.5rem;
          textShadow: 0 0 10px rgba(233, 69, 96, 0.3);
        }

        .back-button:hover {
          backgroundColor: rgba(233, 69, 96, 0.2);
          transform: scale(1.05);
          boxShadow: 0 0 20px rgba(233, 69, 96, 0.4);
          borderColor: rgba(233, 69, 96, 0.5);
        }

        .back-button::before {
          content: '←';
          fontSize: 1.4rem;
          color: #e94560;
        }

        @media (max-width: 768px) {
          .back-button {
            top: 1rem;
            left: 1rem;
            padding: 0.6rem 1rem;
            fontSize: 1rem;
          }
          .back-button::before {
            fontSize: 1.2rem;
          }
          button {
            width: 90% !important;
            max-width: 280px !important;
            padding: 1rem !important;
            fontSize: 1.2rem !important;
          }
        }
      `}</style>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="noise"></div>
      <button 
        className="back-button"
        onClick={() => router.push('/')}
      >
        Back
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 2 }}>
        {dreams.map((dream, index) => (
          <button
            key={dream.id}
            onClick={() => setVideo(dream.video)}
            style={{
              width: '300px',
              padding: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1a365d',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              animation: `float ${4 + index}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
            }}
          >
            {dream.title}
          </button>
        ))}
      </div>
      <VideoModal
        isOpen={!!video}
        videoSrc={video || ''}
        onClose={() => setVideo(null)}
      />
    </div>
  );
} 