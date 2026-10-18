import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MembersSection } from './components/MembersSection';
import { DiscographySection } from './components/DiscographySection';
import { BiasQuiz } from './components/BiasQuiz';
import { VideoVault } from './components/VideoVault';
import { Fanboard } from './components/Fanboard';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('a') || target.closest('.glass-card') || target.closest('input') || target.closest('textarea') || target.closest('select'))) {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Custom Dynamic Skate Cursor (hidden on touch devices) */}
      {!isTouchDevice && (
        <>
          {/* Main Pointer Dot */}
          <div
            style={{
              position: 'fixed',
              top: cursorPos.y,
              left: cursorPos.x,
              width: cursorHovered ? '24px' : '10px',
              height: cursorHovered ? '24px' : '10px',
              backgroundColor: cursorHovered ? 'var(--neon-pink)' : 'var(--neon-lime)',
              borderRadius: '50%',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              transition: 'width 0.2s, height 0.2s, background-color 0.2s, transform 0.05s linear',
              zIndex: 9999,
              mixBlendMode: 'difference',
            }}
          />
          {/* Outer Trailing Ring */}
          <div
            style={{
              position: 'fixed',
              top: cursorPos.y,
              left: cursorPos.x,
              width: cursorHovered ? '46px' : '32px',
              height: cursorHovered ? '46px' : '32px',
              border: `2px solid ${cursorHovered ? 'var(--neon-lime)' : 'rgba(206, 255, 0, 0.5)'}`,
              borderRadius: '50%',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              transition: 'width 0.25s, height 0.25s, border-color 0.25s, transform 0.12s ease-out',
              zIndex: 9998,
              boxShadow: cursorHovered ? '0 0 15px var(--neon-lime)' : 'none',
            }}
          />
        </>
      )}

      {/* Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero soundEnabled={soundEnabled} />
        <MembersSection soundEnabled={soundEnabled} />
        <DiscographySection soundEnabled={soundEnabled} />
        <BiasQuiz soundEnabled={soundEnabled} />
        <VideoVault soundEnabled={soundEnabled} />
        <Fanboard soundEnabled={soundEnabled} />
      </main>

      {/* Footer */}
      <Footer soundEnabled={soundEnabled} />
    </div>
  );
};

export default App;
