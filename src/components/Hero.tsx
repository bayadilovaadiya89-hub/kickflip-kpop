import React from 'react';
import { Play, Sparkles, Flame, Disc, Users } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';

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
      paddingTop: '130px',
      paddingBottom: '60px',
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
          marginBottom: '24px',
        }}>
          <div className="sticker-tag sticker-lime">
            <Flame size={14} /> JYP NEW GENERATION BOY GROUP
          </div>
          <div className="sticker-tag sticker-cyan">
            🛹 DEBUT MINI ALBUM OUT NOW
          </div>
          <div className="sticker-tag sticker-pink">
            ★ FANDOM: WeFlip (위플립)
          </div>
        </div>

        {/* Main Headings */}
        <div style={{ maxWidth: '960px' }}>
          <div style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'var(--neon-lime)',
            fontFamily: 'Space Grotesk, monospace',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            [ 2025.01.20 OFFICIAL DEBUT ]
          </div>

          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2.8rem, 7.5vw, 6.2rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            color: '#ffffff',
            textShadow: '0 0 40px rgba(206, 255, 0, 0.25)'
          }}>
            FLIP IT! <span style={{ color: 'var(--neon-lime)' }}>KICK IT!</span><br />
            WE ARE <span style={{
              background: 'linear-gradient(90deg, #ceff00 0%, #00f0ff 50%, #ff1493 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>KICKFLIP</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            lineHeight: 1.5,
            color: 'var(--text-muted)',
            maxWidth: '750px',
            marginBottom: '36px',
            fontWeight: 400
          }}>
            Born from the streets and forged at JYP Entertainment. Seven unstoppable forces uniting explosive skateboard energy, fearless hip-hop flows, and razor-sharp choreography.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          marginBottom: '50px'
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
            href="#members"
            onClick={triggerSfx}
            className="btn-kickflip btn-outline"
          >
            <Users size={18} />
            Meet The 7 Members
          </a>
        </div>

        {/* Live Stat Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          padding: '24px',
          background: 'rgba(18, 20, 29, 0.6)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Official Debut Album
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Disc size={20} color="var(--neon-lime)" />
              Flip it, Kick it!
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Group Lineup
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--cyber-cyan)' }}>
              7 Powerhouse Members
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Debut Title Track
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--neon-pink)' }}>
              "Mama Said" (마마 세드)
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
              Global Fandom Status
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--skate-yellow)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-indicator" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--skate-yellow)' }} />
              WeFlip Active Online
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div style={{
        marginTop: '60px',
        background: 'var(--neon-lime)',
        color: '#000',
        padding: '12px 0',
        overflow: 'hidden',
        transform: 'rotate(-1deg) scale(1.02)',
        boxShadow: '0 4px 25px rgba(206, 255, 0, 0.3)',
      }}>
        <div className="animate-marquee font-display" style={{
          fontWeight: 900,
          fontSize: '1.2rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          display: 'flex',
          gap: '40px',
        }}>
          <span>🛹 KICKFLIP 1ST MINI ALBUM &lt;FLIP IT, KICK IT!&gt;</span>
          <span>⚡ TITLE TRACK: MAMA SAID</span>
          <span>🔥 JYP ENTERTAINMENT</span>
          <span>🛹 WEFLIP OFFICIAL FANDOM ZONE</span>
          <span>⚡ KYEHOON • AMARU • DONGHWA • JUWANG • MINJE • KEIJU • DONGHYEON</span>
          <span>🛹 KICKFLIP 1ST MINI ALBUM &lt;FLIP IT, KICK IT!&gt;</span>
          <span>⚡ TITLE TRACK: MAMA SAID</span>
          <span>🔥 JYP ENTERTAINMENT</span>
        </div>
      </div>
    </section>
  );
};
