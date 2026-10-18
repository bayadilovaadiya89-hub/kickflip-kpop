import React, { useState } from 'react';
import { Play, Film, X, ExternalLink } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';

interface VideoVaultProps {
  soundEnabled: boolean;
}

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  thumbnail: string;
  youtubeId: string;
}

export const VideoVault: React.FC<VideoVaultProps> = ({ soundEnabled }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'KickFlip "Mama Said" Official MV',
      category: 'Official MV',
      duration: '3:25',
      views: '12.4M Views',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80',
      youtubeId: 'dQw4w9WgXcQ' // placeholder standard video ID or embed
    },
    {
      id: '2',
      title: 'KickFlip "Mama Said" Dance Practice (Skate Park Ver.)',
      category: 'Choreography',
      duration: '3:18',
      views: '5.2M Views',
      thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=700&q=80',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: '3',
      title: 'KickFlip Debut Showcase & LOUD Trainee Journey',
      category: 'Behind The Scenes',
      duration: '18:40',
      views: '3.8M Views',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=700&q=80',
      youtubeId: 'dQw4w9WgXcQ'
    }
  ];

  const handleVideoClick = (video: VideoItem) => {
    if (soundEnabled) playSkateSound();
    setActiveVideo(video);
  };

  return (
    <section id="videos" style={{
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="sticker-tag sticker-lime" style={{ marginBottom: '14px' }}>
          <Film size={14} /> OFFICIAL STAGES & MVS
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          VIDEO <span style={{ color: 'var(--neon-lime)' }}>VAULT</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
          High-octane visual experiences, dance practice breakdowns, and behind-the-scenes skate sessions.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
      }}>
        {videos.map((vid) => (
          <div
            key={vid.id}
            onClick={() => handleVideoClick(vid)}
            className="glass-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{
              position: 'relative',
              height: '210px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '16px',
              background: '#151722',
            }}>
              <img
                src={vid.thumbnail}
                alt={vid.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.1)',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Play Badge */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--neon-lime)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(206, 255, 0, 0.6)',
                }}>
                  <Play size={24} fill="#000" style={{ marginLeft: '4px' }} />
                </div>
              </div>

              {/* Duration Tag */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.8)',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#fff',
                fontFamily: 'Space Grotesk, monospace'
              }}>
                {vid.duration}
              </div>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}>
                <span className="sticker-tag sticker-cyan" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                  {vid.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {vid.views}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: '#fff',
                lineHeight: 1.35,
              }}>
                {vid.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '24px',
        }} onClick={() => setActiveVideo(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#12141f',
              border: '2px solid var(--neon-lime)',
              borderRadius: '20px',
              maxWidth: '800px',
              width: '100%',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 0 45px rgba(206, 255, 0, 0.3)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#fff' }}>
                {activeVideo.title}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player Display */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#000',
              marginBottom: '16px',
            }}>
              <iframe
                title={activeVideo.title}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Official Release by JYP Entertainment • 2025
              </span>
              <a
                href="https://www.youtube.com/@JYPentertainment"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--neon-lime)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                Watch on YouTube <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
