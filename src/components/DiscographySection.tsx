import React, { useState, useEffect } from 'react';
import { TRACKS, type Track } from '../data/kickflipData';
import { Play, Pause, Radio, Flame } from 'lucide-react';
import { startTrackBeat, stopTrackBeat, playSkateSound } from '../utils/audioEngine';

interface DiscographyProps {
  soundEnabled: boolean;
}

export const DiscographySection: React.FC<DiscographyProps> = ({ soundEnabled }) => {
  const [activeTrack, setActiveTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [beatPulse, setBeatPulse] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      stopTrackBeat();
    };
  }, []);

  const handlePlayToggle = (track: Track) => {
    if (soundEnabled) playSkateSound();

    if (activeTrack.id === track.id && isPlaying) {
      stopTrackBeat();
      setIsPlaying(false);
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
      startTrackBeat(track.synthTone, () => {
        setBeatPulse(prev => !prev);
      });
    }
  };

  return (
    <section id="music" style={{
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Section Title */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="sticker-tag sticker-pink" style={{ marginBottom: '14px' }}>
          <Radio size={14} /> OFFICIAL DISCOGRAPHY
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          FLIP IT, <span style={{ color: 'var(--neon-pink)' }}>KICK IT!</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          maxWidth: '650px',
          margin: '0 auto',
        }}>
          1st Mini Album. Press play to preview the synthetic skate-pop groove & 808 hip-hop beats in real-time!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        alignItems: 'start',
      }}>
        {/* Left Side: The Vinyl Boombox Player */}
        <div className="glass-card" style={{
          padding: '32px',
          position: 'sticky',
          top: '100px',
          border: '1px solid rgba(255, 20, 147, 0.3)',
          boxShadow: '0 0 35px rgba(255, 20, 147, 0.15)',
        }}>
          {/* Album Cover Mockup */}
          <div style={{
            position: 'relative',
            aspectRatio: '1',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #1f1224 0%, #0d1222 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            transform: beatPulse ? 'scale(1.015)' : 'scale(1)',
            transition: 'transform 0.15s ease',
          }}>
            {/* Spinning Disc Effect */}
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #090a0f 30%, #202434 70%, #ceff00 100%)',
              border: '4px solid #131520',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: isPlaying ? 'spin 5s linear infinite' : 'none',
              boxShadow: '0 0 30px rgba(0,0,0,0.8)',
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--neon-pink)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '0.85rem'
              }}>
                KFP
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
              <div>
                <span className="sticker-tag sticker-lime" style={{ fontSize: '0.65rem' }}>
                  JYP 1ST MINI
                </span>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: '#fff' }}>
                  Flip it, Kick it!
                </div>
              </div>

              {/* Equalizer Bars */}
              {isPlaying && (
                <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '28px' }}>
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                </div>
              )}
            </div>
          </div>

          {/* Active Track Metadata */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '6px',
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 900,
                fontSize: '1.6rem',
                color: '#fff',
              }}>
                {activeTrack.title}
              </h3>
              <span className={`sticker-tag ${activeTrack.type === 'Title' ? 'sticker-lime' : 'sticker-cyan'}`}>
                {activeTrack.type}
              </span>
            </div>
            <div style={{ color: 'var(--neon-pink)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px' }}>
              {activeTrack.koreanTitle} • {activeTrack.tempo} • {activeTrack.vibe}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.4 }}>
              {activeTrack.desc}
            </p>
          </div>

          {/* Primary Play Button */}
          <button
            onClick={() => handlePlayToggle(activeTrack)}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              background: isPlaying ? 'var(--neon-pink)' : 'var(--neon-lime)',
              color: isPlaying ? '#fff' : '#000',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: isPlaying ? '0 0 25px rgba(255, 20, 147, 0.4)' : '0 0 25px rgba(206, 255, 0, 0.4)',
              transition: 'all 0.2s ease',
            }}
          >
            {isPlaying ? (
              <>
                <Pause size={20} fill="#fff" /> PAUSE SYNTH BEAT
              </>
            ) : (
              <>
                <Play size={20} fill="#000" /> PLAY SYNTH BEAT PREVIEW
              </>
            )}
          </button>
        </div>

        {/* Right Side: Tracklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 8px 10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
            <span># Track Title</span>
            <span>Duration / Play</span>
          </div>

          {TRACKS.map((track) => {
            const isThisTrackPlaying = isPlaying && activeTrack.id === track.id;
            const isSelected = activeTrack.id === track.id;

            return (
              <div
                key={track.id}
                onClick={() => handlePlayToggle(track)}
                className="glass-card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderColor: isThisTrackPlaying ? 'var(--neon-lime)' : isSelected ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                  background: isThisTrackPlaying ? 'rgba(206, 255, 0, 0.08)' : isSelected ? 'rgba(255, 255, 255, 0.05)' : 'var(--bg-card-glass)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: isThisTrackPlaying ? 'var(--neon-lime)' : 'rgba(255, 255, 255, 0.08)',
                    color: isThisTrackPlaying ? '#000' : '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                  }}>
                    {isThisTrackPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        color: isThisTrackPlaying ? 'var(--neon-lime)' : '#fff',
                      }}>
                        {track.title}
                      </span>
                      {track.type === 'Title' && (
                        <span style={{
                          background: 'var(--neon-lime)',
                          color: '#000',
                          fontSize: '0.65rem',
                          fontWeight: 900,
                          padding: '2px 6px',
                          borderRadius: '4px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                        }}>
                          <Flame size={10} /> TITLE
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {track.koreanTitle} • {track.vibe}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Space Grotesk, monospace' }}>
                    {track.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
