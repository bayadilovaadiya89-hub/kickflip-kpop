import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';

interface FooterProps {
  soundEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ soundEnabled }) => {
  const scrollToTop = () => {
    if (soundEnabled) playSkateSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: '#07080c',
      padding: '60px 24px 40px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '6px',
                background: 'var(--neon-lime)',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
              }}>
                KF
              </div>
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 900,
                fontSize: '1.4rem',
                color: '#fff',
              }}>
                KICKFLIP <span style={{ color: 'var(--neon-lime)' }}>// 킥플립</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px', lineHeight: 1.5 }}>
              Dedicated to KickFlip & WeFlip worldwide. Formed under JYP Entertainment. Debut Mini-Album &lt;Flip it, Kick it!&gt;.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* YouTube SVG */}
            <a
              href="https://www.youtube.com/@JYPentertainment"
              target="_blank"
              rel="noreferrer"
              title="Official YouTube"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--neon-lime)';
                e.currentTarget.style.color = 'var(--neon-lime)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* X / Twitter SVG */}
            <a
              href="https://twitter.com/jypnation"
              target="_blank"
              rel="noreferrer"
              title="Official X / Twitter"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
                e.currentTarget.style.color = 'var(--cyber-cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram SVG */}
            <a
              href="https://instagram.com/jypentertainment"
              target="_blank"
              rel="noreferrer"
              title="Official Instagram"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--neon-pink)';
                e.currentTarget.style.color = 'var(--neon-pink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>


            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Skate to top"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--neon-lime)',
                border: 'none',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 900,
                boxShadow: '0 0 15px rgba(206, 255, 0, 0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '24px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}>
          <div>
            © 2025-2026 KickFlip Fan Portal. Group and original music belong to <strong>JYP Entertainment</strong>.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <Heart size={14} color="var(--neon-pink)" fill="var(--neon-pink)" /> for WeFlip
          </div>
        </div>
      </div>
    </footer>
  );
};
