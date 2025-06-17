'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
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
        background: 'linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%)',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        animation: 'dreamWave 20s ease-in-out infinite',
        overflow: 'hidden'
      }}
    >
      <style jsx>{`
        @keyframes dreamWave {
          0% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(200, 230, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(180, 220, 255, 0.8) 0%, transparent 70%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(0deg) saturate(1.2) blur(0px);
          }
          25% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(200, 230, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(180, 220, 255, 0.8) 0%, transparent 70%),
              linear-gradient(135deg, #d4e8ff 0%, #b8d8ff 50%, #ffffff 100%);
            filter: hue-rotate(30deg) saturate(1.3) blur(1px);
          }
          50% {
            background: 
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(200, 230, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(180, 220, 255, 0.8) 0%, transparent 70%),
              linear-gradient(135deg, #c5e1ff 0%, #a8cfff 50%, #ffffff 100%);
            filter: hue-rotate(60deg) saturate(1.4) blur(2px);
          }
          75% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(200, 230, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(180, 220, 255, 0.8) 0%, transparent 70%),
              linear-gradient(135deg, #d4e8ff 0%, #b8d8ff 50%, #ffffff 100%);
            filter: hue-rotate(30deg) saturate(1.3) blur(1px);
          }
          100% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(200, 230, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(180, 220, 255, 0.8) 0%, transparent 70%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(0deg) saturate(1.2) blur(0px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1) skew(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(2deg) scale(1.05) skew(2deg);
          }
          50% {
            transform: translateY(-10px) rotate(-2deg) scale(1.1) skew(-2deg);
          }
          75% {
            transform: translateY(-15px) rotate(1deg) scale(1.08) skew(1deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.7),
                         0 0 40px rgba(255, 255, 255, 0.5),
                         0 0 60px rgba(255, 255, 255, 0.3),
                         0 0 80px rgba(255, 255, 255, 0.2);
            filter: brightness(1) contrast(1.1) hue-rotate(0deg);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.9),
                         0 0 50px rgba(255, 255, 255, 0.7),
                         0 0 70px rgba(255, 255, 255, 0.5),
                         0 0 90px rgba(255, 255, 255, 0.3);
            filter: brightness(1.2) contrast(1.2) hue-rotate(30deg);
          }
        }

        @keyframes waveLine {
          0% {
            transform: translateX(-100%) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(0%) rotate(180deg) scale(1.5);
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%) rotate(360deg) scale(1);
            opacity: 0.3;
          }
        }

        @keyframes chaosWave {
          0% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
          25% {
            clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
          }
          50% {
            clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%);
          }
          75% {
            clip-path: polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }

        .wave-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          animation: chaosWave 10s ease-in-out infinite;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, 
            transparent 0%,
            rgba(255, 255, 255, 0.1) 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          );
          animation: waveLine 15s linear infinite;
        }

        .wave:nth-child(2) {
          animation-delay: -5s;
          transform: scale(1.5) rotate(45deg);
          background: linear-gradient(-45deg, 
            transparent 0%,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 100%
          );
        }

        .wave:nth-child(3) {
          animation-delay: -10s;
          transform: scale(2) rotate(-45deg);
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 75%,
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
      `}</style>
      <div className="noise"></div>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <button
        onClick={() => router.push('/dreams')}
        style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          color: '#1a365d',
          cursor: 'pointer',
          border: 'none',
          background: 'none',
          padding: 0,
          margin: 0,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
          animation: 'float 6s ease-in-out infinite, glow 3s ease-in-out infinite',
          position: 'relative',
          zIndex: 1,
          fontFamily: 'monospace',
          letterSpacing: '0.5rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15) rotate(2deg)';
          e.currentTarget.style.textShadow = '4px 4px 8px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.textShadow = '2px 2px 4px rgba(0,0,0,0.1)';
        }}
      >
        Ｄｒｅａｍ
      </button>
      <p
        style={{
          marginTop: '2rem',
          fontSize: '1.5rem',
          color: '#4a5568',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '1s',
          position: 'relative',
          zIndex: 1,
          fontFamily: 'monospace',
          letterSpacing: '0.2rem'
        }}
        onClick={() => router.push('/dreams')}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#2d3748';
          e.currentTarget.style.textShadow = '2px 2px 4px rgba(0,0,0,0.1)';
          e.currentTarget.style.transform = 'skew(-2deg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#4a5568';
          e.currentTarget.style.textShadow = '1px 1px 2px rgba(0,0,0,0.05)';
          e.currentTarget.style.transform = 'skew(0deg)';
        }}
      >
        Click to enter the world of dreams
      </p>
    </div>
  );
}
