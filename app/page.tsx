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
        padding: '1rem',
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
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(0deg) saturate(1.5) brightness(1.2);
          }
          25% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(72deg) saturate(1.6) brightness(1.25);
          }
          50% {
            background: 
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(144deg) saturate(1.7) brightness(1.3);
          }
          75% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(216deg) saturate(1.6) brightness(1.25);
          }
          100% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(360deg) saturate(1.5) brightness(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(10px) rotate(-2deg);
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

        @keyframes waveLine {
          0% {
            transform: translateX(-100%) translateY(0);
          }
          100% {
            transform: translateX(100%) translateY(0);
          }
        }

        @keyframes chaosWave {
          0% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.1) rotate(5deg);
          }
          50% {
            transform: scale(1) rotate(0deg);
          }
          75% {
            transform: scale(0.9) rotate(-5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
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
            rgba(255, 255, 255, 0.1) 20%,
            rgba(197, 225, 255, 0.1) 40%,
            rgba(255, 255, 255, 0.1) 60%,
            rgba(197, 225, 255, 0.1) 80%,
            transparent 100%
          );
          animation: waveLine 8s linear infinite;
        }

        .wave:nth-child(2) {
          animation-delay: -2s;
          opacity: 0.5;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(197, 225, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.1) 40%,
            rgba(197, 225, 255, 0.1) 60%,
            rgba(255, 255, 255, 0.1) 80%,
            transparent 100%
          );
        }

        .wave:nth-child(3) {
          animation-delay: -4s;
          opacity: 0.3;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(197, 225, 255, 0.1) 40%,
            rgba(255, 255, 255, 0.1) 60%,
            rgba(197, 225, 255, 0.1) 80%,
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

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
            text-align: center;
            padding: 0 1rem;
          }
          p {
            font-size: 1rem !important;
            text-align: center;
            padding: 0 1rem;
            max-width: 90% !important;
          }
          button {
            width: 80% !important;
            max-width: 300px !important;
            padding: 1rem !important;
            font-size: 1.2rem !important;
          }
        }
      `}</style>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="noise"></div>
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#1a365d',
          marginBottom: '2rem',
          textAlign: 'center',
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          animation: 'float 6s ease-in-out infinite',
          position: 'relative',
          zIndex: 2
        }}
      >
        Dream Visualization
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          color: '#2d3748',
          marginBottom: '3rem',
          maxWidth: '600px',
          textAlign: 'center',
          lineHeight: '1.6',
          fontFamily: 'monospace',
          animation: 'float 8s ease-in-out infinite',
          position: 'relative',
          zIndex: 2
        }}
      >
        Explore the fascinating world of sleep stages and dreams through interactive visualizations.
      </p>
      <button
        onClick={() => router.push('/dreams')}
        style={{
          padding: '1.5rem 3rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1a365d',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: 'float 4s ease-in-out infinite',
          position: 'relative',
          zIndex: 2
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        }}
      >
        Enter Dream World
      </button>
    </div>
  );
}
