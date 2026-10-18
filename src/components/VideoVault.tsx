import React, { useState } from 'react';
import { Play, Film, X, ExternalLink } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';
import { GROUP_TEASER_URL, GROUP_BANNER_URL, MEMBERS } from '../data/kickflipData';

interface VideoVaultProps {
  soundEnabled: boolean;
}

interface VideoItem {
  id: string;
  title: string;
  koreanTitle: string;
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
      koreanTitle: '뭐가 되려고? (Mama Said) M/V',
      category: 'Official Debut MV',
      duration: '3:22',
      views: 'Official Release // JYP',
      thumbnail: GROUP_TEASER_URL,
      youtubeId: 'JY0UTOgh8M8'
    },
    {
      id: '2',
      title: 'KickFlip "Umm Great" Official M/V',
      koreanTitle: '응 그래 (Umm Great) M/V',
      category: 'Pre-Release Single',
      duration: '2:52',
      views: 'Pre-Debut Drop // JYP',
      thumbnail: GROUP_BANNER_URL,
      youtubeId: 'L__ITOj-g8E'
    },
    {
      id: '3',
      title: 'KickFlip "KICK OFF THE WALL" Intro Film',
      koreanTitle: 'KickFlip Debut Introductory Film',
      category: 'Debut Trainee Film',
      duration: '4:15',
      views: 'JYP Official',
      thumbnail: MEMBERS[0].avatar,
      youtubeId: 'JY0UTOgh8M8'
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
          <Film size={14} /> OFFICIAL JYP STAGES & MVS
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
          Official YouTube music videos and teasers direct from JYP Entertainment. Click to play inside the theater modal!
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
              height: '220px',
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
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Play Badge */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.4)',
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
                background: 'rgba(0, 0, 0, 0.85)',
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
              <div style={{ color: 'var(--neon-pink)', fontSize: '0.85rem', fontWeight: 700, marginTop: '2px' }}>
                {vid.koreanTitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.92)',
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
              maxWidth: '850px',
              width: '100%',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 0 45px rgba(206, 255, 0, 0.3)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#fff' }}>
                  {activeVideo.title}
                </h3>
                <span style={{ color: 'var(--neon-lime)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {activeVideo.koreanTitle}
                </span>
              </div>
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
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
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
                Official Music Video • JYP Entertainment
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
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
