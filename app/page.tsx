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
            filter: hue-rotate(0deg) saturate(1.2) brightness(1.1);
          }
          25% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(90deg) saturate(1.3) brightness(1.2);
          }
          50% {
            background: 
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(180deg) saturate(1.4) brightness(1.3);
          }
          75% {
            background: 
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(270deg) saturate(1.3) brightness(1.2);
          }
          100% {
            background: 
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(197, 225, 255, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, #e1f0ff 0%, #c5e1ff 50%, #ffffff 100%);
            filter: hue-rotate(360deg) saturate(1.2) brightness(1.1);
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
            text-shadow: 
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4),
              0 0 40px rgba(255, 255, 255, 0.2);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(255, 255, 255, 0.9),
              0 0 25px rgba(255, 255, 255, 0.7),
              0 0 35px rgba(255, 255, 255, 0.5),
              0 0 45px rgba(255, 255, 255, 0.3);
          }
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
          button {
            fontSize: 4rem !important;
            letterSpacing: 0.3rem !important;
          }
          
          p {
            fontSize: 1.2rem !important;
            textAlign: center !important;
            padding: 0 1rem !important;
            maxWidth: 90% !important;
            margin: 1rem auto !important;
            lineHeight: 1.6 !important;
            whiteSpace: 'pre-wrap' !important;
            wordBreak: 'break-word' !important;
          }
        }
      `}</style>
      <div className="noise"></div>
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
        ｄｒｅａｍ
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
          letterSpacing: '0.2rem',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
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
        Click to{'\n'}enter the{'\n'}world of dreams
      </p>
    </div>
  );
}
