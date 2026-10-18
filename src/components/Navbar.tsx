import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ soundEnabled, onToggleSound }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Members', href: '#members' },
    { name: 'Music', href: '#music' },
    { name: 'Bias Quiz', href: '#quiz' },
    { name: 'Video Vault', href: '#videos' },
    { name: 'WeFlip Board', href: '#fanboard' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (soundEnabled) playSkateSound();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(9, 10, 15, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: 'var(--neon-lime)',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1.2rem',
            transform: 'rotate(-4deg)',
            boxShadow: '0 0 15px rgba(206, 255, 0, 0.5)'
          }}>
            KF
          </div>
          <div>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 900,
              fontSize: '1.35rem',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              KICKFLIP <span style={{ color: 'var(--neon-lime)', fontSize: '0.85rem' }}>// 킥플립</span>
            </div>
            <div style={{
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              JYP Entertainment Official Rookie
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-lime)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Sound Toggle Button */}
          <button
            onClick={() => {
              playSkateSound();
              onToggleSound();
            }}
            title={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
            style={{
              background: soundEnabled ? 'rgba(206, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${soundEnabled ? 'var(--neon-lime)' : 'rgba(255, 255, 255, 0.15)'}`,
              color: soundEnabled ? 'var(--neon-lime)' : 'var(--text-muted)',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 700,
              transition: 'all 0.2s ease'
            }}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span style={{ display: 'none' }} className="sound-text">
              {soundEnabled ? 'SFX ON' : 'SFX OFF'}
            </span>
          </button>

          {/* WeFlip Badge */}
          <div className="sticker-tag sticker-pink" style={{ cursor: 'default' }}>
            <Sparkles size={12} />
            WEFLIP ZONE
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(10, 12, 18, 0.98)',
          borderBottom: '2px solid var(--neon-lime)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn { display: none !important; }
          .sound-text { display: inline !important; }
        }
      `}</style>
    </nav>
  );
};
