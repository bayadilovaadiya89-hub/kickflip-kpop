import React, { useState } from 'react';
import { MEMBERS, type Member } from '../data/kickflipData';
import { Calendar, Compass, Shield, Award, X } from 'lucide-react';
import { playSkateSound } from '../utils/audioEngine';

interface MembersSectionProps {
  soundEnabled: boolean;
}

export const MembersSection: React.FC<MembersSectionProps> = ({ soundEnabled }) => {
  const [filter, setFilter] = useState<'all' | 'vocal' | 'rap' | 'dance' | 'hyung' | 'maknae'>('all');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const filteredMembers = MEMBERS.filter((m) => {
    if (filter === 'all') return true;
    if (filter === 'hyung' || filter === 'maknae') return m.subLine === filter;
    if (filter === 'vocal') return m.category === 'vocal' || m.role.some(r => r.includes('Vocal'));
    if (filter === 'rap') return m.category === 'rap' || m.role.some(r => r.includes('Rapper'));
    if (filter === 'dance') return m.category === 'dance' || m.role.some(r => r.includes('Dancer'));
    return true;
  });

  const handleCardClick = (member: Member) => {
    if (soundEnabled) playSkateSound();
    setSelectedMember(member);
  };

  return (
    <section id="members" style={{
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="sticker-tag sticker-lime" style={{ marginBottom: '14px' }}>
          🛹 7 RIDERS // ONE CREW
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          MEET THE <span style={{ color: 'var(--neon-lime)' }}>MEMBERS</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          maxWidth: '620px',
          margin: '0 auto',
        }}>
          Click on any member to inspect their trainee journey, MBTI, signature skate trick, and official JYP profile facts.
        </p>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '28px',
        }}>
          {[
            { id: 'all', label: 'All Members (7)' },
            { id: 'vocal', label: 'Vocalists' },
            { id: 'rap', label: 'Rappers' },
            { id: 'dance', label: 'Dancers' },
            { id: 'hyung', label: 'Hyung Line' },
            { id: 'maknae', label: 'Maknae Line' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (soundEnabled) playSkateSound();
                setFilter(tab.id as any);
              }}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: filter === tab.id ? 'var(--neon-lime)' : 'rgba(255, 255, 255, 0.1)',
                background: filter === tab.id ? 'var(--neon-lime)' : 'rgba(255, 255, 255, 0.04)',
                color: filter === tab.id ? '#000' : '#fff',
                transform: filter === tab.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Members Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        gap: '24px',
      }}>
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => handleCardClick(member)}
            className="glass-card"
            style={{
              padding: '20px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Tape Decoration */}
            <div className="tape-strip" />

            <div>
              {/* Member Card Image Banner */}
              <div style={{
                position: 'relative',
                height: '310px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '18px',
                background: '#181b26',
              }}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(20%) contrast(1.1)',
                    transition: 'transform 0.4s ease, filter 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                    e.currentTarget.style.filter = 'grayscale(0%) contrast(1.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(20%) contrast(1.1)';
                  }}
                />

                {/* Country Flag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>{member.flag}</span>
                  <span style={{ color: '#fff', fontSize: '0.75rem' }}>{member.nationality}</span>
                </div>

                {/* Color Glow Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: member.color,
                  boxShadow: `0 0 12px ${member.color}`,
                }} />
              </div>

              {/* Title & Native Name */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.6rem',
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}>
                  {member.name}
                </h3>
                <span style={{
                  color: 'var(--neon-lime)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}>
                  {member.nativeName}
                </span>
              </div>

              {/* Role Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '14px',
              }}>
                {member.role.map((r, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: i === 0 ? 'rgba(206, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                      color: i === 0 ? 'var(--neon-lime)' : 'var(--text-muted)',
                      border: i === 0 ? '1px solid rgba(206, 255, 0, 0.3)' : '1px solid transparent',
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>

              {/* Vibe description */}
              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.45,
                marginBottom: '16px',
              }}>
                {member.tagline}
              </p>
            </div>

            {/* Quick Metrics */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}>
              <span>MBTI: <strong style={{ color: '#fff' }}>{member.mbti}</strong></span>
              <span style={{ color: 'var(--cyber-cyan)', fontWeight: 600 }}>Click for Bio →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Member Modal */}
      {selectedMember && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '20px',
        }} onClick={() => setSelectedMember(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#13151f',
              border: `2px solid ${selectedMember.color}`,
              borderRadius: '20px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px',
              position: 'relative',
              boxShadow: `0 0 40px ${selectedMember.color}40`,
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
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

            {/* Modal Header */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                border: `2px solid ${selectedMember.color}`
              }}>
                <img src={selectedMember.avatar} alt={selectedMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#fff' }}>
                    {selectedMember.name}
                  </h3>
                  <span style={{ fontSize: '1.2rem', color: selectedMember.color, fontWeight: 800 }}>
                    {selectedMember.nativeName}
                  </span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Birth Name: <strong style={{ color: '#fff' }}>{selectedMember.birthName}</strong> {selectedMember.flag}
                </div>
              </div>
            </div>

            {/* Stat Matrix */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              marginBottom: '24px',
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}><Calendar size={12} /> Birthday</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{selectedMember.birthday}</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}><Compass size={12} /> Zodiac & MBTI</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{selectedMember.zodiac} // {selectedMember.mbti}</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}><Shield size={12} /> Sub-Line</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'capitalize' }}>{selectedMember.subLine} Line</div>
              </div>
            </div>

            {/* Skate Trick Specialty */}
            <div style={{
              padding: '14px',
              borderRadius: '12px',
              background: 'rgba(206, 255, 0, 0.08)',
              border: '1px solid rgba(206, 255, 0, 0.25)',
              marginBottom: '24px',
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--neon-lime)', fontWeight: 800, textTransform: 'uppercase' }}>
                🛹 Signature Skate Trick / Urban Vibe
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#fff', marginTop: '4px' }}>
                {selectedMember.skateVibe}
              </div>
            </div>

            {/* Trainee History & Facts */}
            <div>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Award size={18} color="var(--neon-lime)" />
                Key Trainee Achievements & Facts
              </div>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedMember.facts.map((fact, idx) => (
                  <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
