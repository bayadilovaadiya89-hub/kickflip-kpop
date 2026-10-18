import React from 'react';
import { Play, Sparkles, Flame, Disc, ExternalLink } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';
import { OFFICIAL_LINKS } from '../data/kickflipData';

interface HeroProps {
  soundEnabled: boolean;
}

export const Hero: React.FC<HeroProps> = ({ soundEnabled }) => {
  const triggerSfx = () => {
    if (soundEnabled) playSkateSound();
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      paddingTop: '120px',
      paddingBottom: '50px',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Top Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}>
          <div className="sticker-tag sticker-lime">
            <Flame size={14} /> JYP NEW GENERATION BOY GROUP
          </div>
          <div className="sticker-tag sticker-cyan">
            🛹 DEBUT MINI ALBUM &lt;FLIP IT, KICK IT!&gt;
          </div>
          <div className="sticker-tag sticker-pink">
            ★ OFFICIAL FANDOM: WeFlip (위플립)
          </div>
          <div className="sticker-tag sticker-lime" style={{ background: '#fff', color: '#000' }}>
            🦊 🐻 🐸 🐹 🐺 🐱 🐰 OT7
          </div>
        </div>

        {/* Hero Grid: Headings + Official Group Photo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
          marginBottom: '40px',
        }}>
          {/* Left Column: Typography & CTAs */}
          <div>
            <div style={{
              fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
              color: 'var(--neon-lime)',
              fontFamily: 'Space Grotesk, monospace',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              [ 2025.01.20 OFFICIAL DEBUT // JYP ENTERTAINMENT ]
            </div>

            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: '18px',
              color: '#ffffff',
              textShadow: '0 0 35px rgba(206, 255, 0, 0.25)'
            }}>
              FLIP IT! <span style={{ color: 'var(--neon-lime)' }}>KICK IT!</span><br />
              WE ARE <span style={{
                background: 'linear-gradient(90deg, #ceff00 0%, #00f0ff 50%, #ff1493 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>KICKFLIP</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.55,
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}>
              <strong style={{ color: '#fff' }}>KickFlip (킥플립)</strong> is JYP Entertainment's 7-member powerhouse boy group: 
              <strong> Kyehoon, Amaru, Donghwa, Juwang, Minje, Keiju,</strong> and <strong>Donghyeon</strong>.
            </p>

            <div style={{
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderLeft: '3px solid var(--neon-lime)',
              borderRadius: '0 8px 8px 0',
              marginBottom: '28px',
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
            }}>
              🛹 <strong style={{ color: '#fff' }}>Name Meaning:</strong> Derived from the iconic skateboarding trick where the rider kicks the board into a full 360° spin along its axis and sticks the landing cleanly.
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
            }}>
              <a
                href="#music"
                onClick={triggerSfx}
                className="btn-kickflip"
              >
                <Play size={18} fill="#000" />
                Listen To "Mama Said"
              </a>

              <a
                href="#quiz"
                onClick={triggerSfx}
                className="btn-kickflip btn-outline"
              >
                <Sparkles size={18} />
                Find Your Bias Quiz
              </a>

              <a
                href={OFFICIAL_LINKS.website}
                target="_blank"
                rel="noreferrer"
                className="btn-kickflip btn-outline"
                style={{ fontSize: '0.82rem', padding: '10px 18px' }}
              >
                Official Site <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Official JYP Concept Photo */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '10px',
              borderRadius: '20px',
              border: '2px solid rgba(206, 255, 0, 0.35)',
              boxShadow: '0 0 35px rgba(206, 255, 0, 0.2)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                background: '#151722',
              }}>
                <img
                  src="https://kprofiles.com/wp-content/uploads/2025/01/KickFlip-1-2-scaled.jpeg"
                  alt="KickFlip Official JYP Concept Photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.05)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--neon-lime)',
                }}>
                  📷 Official Teaser: KICK OFF THE WALL Pt. 1
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Stat Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          padding: '20px 24px',
          background: 'rgba(18, 20, 29, 0.65)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Debut Mini Album
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Disc size={18} color="var(--neon-lime)" />
              Flip it, Kick it!
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Group Lineup
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--cyber-cyan)' }}>
              7 Members (OT7)
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Title Track
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--neon-pink)' }}>
              "Mama Said" (뭐가 되려고?)
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Agency & Label
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--skate-yellow)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-indicator" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--skate-yellow)' }} />
              JYP Entertainment
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div style={{
        marginTop: '50px',
        background: 'var(--neon-lime)',
        color: '#000',
        padding: '12px 0',
        overflow: 'hidden',
        transform: 'rotate(-1deg) scale(1.02)',
        boxShadow: '0 4px 25px rgba(206, 255, 0, 0.3)',
      }}>
        <div className="animate-marquee font-display" style={{
          fontWeight: 900,
          fontSize: '1.15rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          display: 'flex',
          gap: '40px',
        }}>
          <span>🛹 KICKFLIP 1ST MINI ALBUM &lt;FLIP IT, KICK IT!&gt;</span>
          <span>⚡ TITLE TRACK: MAMA SAID (뭐가 되려고?)</span>
          <span>🔥 JYP ENTERTAINMENT OFFICIAL</span>
          <span>🛹 WEFLIP OFFICIAL FANDOM ZONE</span>
          <span>⚡ KYEHOON 🦊 • AMARU 🐻 • DONGHWA 🐸 • JUWANG 🐹 • MINJE 🐺 • KEIJU 🐱 • DONGHYEON 🐰</span>
          <span>🛹 KICKFLIP 1ST MINI ALBUM &lt;FLIP IT, KICK IT!&gt;</span>
          <span>⚡ TITLE TRACK: MAMA SAID (뭐가 되려고?)</span>
        </div>
      </div>
    </section>
  );
};
