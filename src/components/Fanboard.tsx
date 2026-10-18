import React, { useState, useEffect } from 'react';
import { INITIAL_FAN_MESSAGES, MEMBERS } from '../data/kickflipData';
import { MessageSquare, Heart, Send, Sparkles } from 'lucide-react';
import { playSkateSound, playChime } from '../utils/audioEngine';

interface FanboardProps {
  soundEnabled: boolean;
}

interface FanMessage {
  id: number;
  author: string;
  location: string;
  bias: string;
  text: string;
  time: string;
  likes: number;
}

export const Fanboard: React.FC<FanboardProps> = ({ soundEnabled }) => {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [selectedBias, setSelectedBias] = useState(MEMBERS[0].name);
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('weflip_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(INITIAL_FAN_MESSAGES);
      }
    } else {
      setMessages(INITIAL_FAN_MESSAGES);
    }
  }, []);

  const saveToStorage = (updated: FanMessage[]) => {
    setMessages(updated);
    localStorage.setItem('weflip_messages', JSON.stringify(updated));
  };

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !text.trim()) return;

    if (soundEnabled) playChime();

    const newMessage: FanMessage = {
      id: Date.now(),
      author: nickname.trim(),
      location: location.trim() || 'Worldwide',
      bias: selectedBias,
      text: text.trim(),
      time: 'Just now',
      likes: 1,
    };

    const updated = [newMessage, ...messages];
    saveToStorage(updated);

    setNickname('');
    setLocation('');
    setText('');
  };

  const handleLike = (id: number) => {
    if (soundEnabled) playSkateSound();
    const updated = messages.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m);
    saveToStorage(updated);
  };

  return (
    <section id="fanboard" style={{
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="sticker-tag sticker-lime" style={{ marginBottom: '14px' }}>
          <MessageSquare size={14} /> WEFLIP COMMUNITY BOARD
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          WEFLIP <span style={{ color: 'var(--neon-lime)' }}>FAN WALL</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
          Leave your message of encouragement for KickFlip! Messages are saved directly to your session.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        alignItems: 'start',
      }}>
        {/* Post Message Form */}
        <div className="glass-card" style={{
          padding: '30px',
          border: '1px solid rgba(206, 255, 0, 0.25)',
        }}>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '1.4rem',
            fontWeight: 800,
            marginBottom: '20px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <Sparkles size={18} color="var(--neon-lime)" />
            Write A Cheering Note
          </h3>

          <form onSubmit={handlePostMessage} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700 }}>
                YOUR WEFLIP NICKNAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. SkateFan_Anna"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700 }}>
                YOUR CITY / COUNTRY
              </label>
              <input
                type="text"
                placeholder="e.g. Seoul / Almaty / Tokyo"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700 }}>
                CHOOSE YOUR BIAS
              </label>
              <select
                value={selectedBias}
                onChange={(e) => setSelectedBias(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: '#151724',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                {MEMBERS.map(m => (
                  <option key={m.id} value={m.name}>
                    {m.name} ({m.nativeName}) - {m.role[0]}
                  </option>
                ))}
                <option value="All 7 Members (OT7)">OT7 (Love All 7 Members!)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700 }}>
                MESSAGE TO KICKFLIP *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Send love, congratulate on debut album, or cheer for their next stage..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-kickflip"
              style={{ width: '100%', marginTop: '6px' }}
            >
              <Send size={16} /> Post To Fan Wall
            </button>
          </form>
        </div>

        {/* Messages Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '560px', overflowY: 'auto', paddingRight: '6px' }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="glass-card"
              style={{
                padding: '20px',
                borderLeft: '4px solid var(--neon-lime)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>{msg.author}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>from {msg.location}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--neon-pink)', fontWeight: 700, marginTop: '2px' }}>
                    Bias: {msg.bias}
                  </div>
                </div>

                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {msg.time}
                </span>
              </div>

              <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '14px' }}>
                {msg.text}
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => handleLike(msg.id)}
                  style={{
                    background: 'rgba(255, 20, 147, 0.1)',
                    border: '1px solid rgba(255, 20, 147, 0.3)',
                    color: 'var(--neon-pink)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Heart size={14} fill="currentColor" /> {msg.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
