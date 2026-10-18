import React, { useState } from 'react';
import { QUIZ_QUESTIONS, MEMBERS, type Member } from '../data/kickflipData';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChime, playSkateSound } from '../utils/audioEngine';

interface BiasQuizProps {
  soundEnabled: boolean;
}

export const BiasQuiz: React.FC<BiasQuizProps> = ({ soundEnabled }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [matchedMember, setMatchedMember] = useState<Member | null>(null);

  const handleSelectOption = (memberId: string) => {
    if (soundEnabled) playSkateSound();
    const newAnswers = [...answers, memberId];
    setAnswers(newAnswers);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate most picked member
      const counts: Record<string, number> = {};
      newAnswers.forEach(id => {
        counts[id] = (counts[id] || 0) + 1;
      });
      let bestId = newAnswers[0];
      let maxCount = 0;
      Object.keys(counts).forEach(id => {
        if (counts[id] > maxCount) {
          maxCount = counts[id];
          bestId = id;
        }
      });

      const member = MEMBERS.find(m => m.id === bestId) || MEMBERS[0];
      setMatchedMember(member);

      // Trigger Confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ceff00', '#ff1493', '#00f0ff', '#ffea00']
      });

      if (soundEnabled) {
        playChime();
      }
    }
  };

  const handleReset = () => {
    if (soundEnabled) playSkateSound();
    setCurrentStep(0);
    setAnswers([]);
    setMatchedMember(null);
  };

  const q = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="quiz" style={{
      padding: '80px 24px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="sticker-tag sticker-cyan" style={{ marginBottom: '14px' }}>
          <Sparkles size={14} /> WEFLIP INTERACTIVE TEST
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          WHO IS YOUR <span style={{ color: 'var(--cyber-cyan)' }}>KICKFLIP BIAS?</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Answer 3 quick street-lifestyle questions to discover your ultimate KickFlip member match!
        </p>
      </div>

      <div className="glass-card" style={{
        padding: '36px',
        border: '2px solid rgba(0, 240, 255, 0.25)',
        boxShadow: '0 0 35px rgba(0, 240, 255, 0.12)',
        position: 'relative',
        borderRadius: '24px',
      }}>
        {!matchedMember ? (
          <div>
            {/* Progress Bar */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '8px',
                fontWeight: 700,
              }}>
                <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div style={{
                height: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  background: 'var(--cyber-cyan)',
                  transition: 'width 0.3s ease',
                  boxShadow: '0 0 10px var(--cyber-cyan)',
                }} />
              </div>
            </div>

            {/* Question Text */}
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1.45rem',
              color: '#fff',
              marginBottom: '24px',
            }}>
              {q.question}
            </h3>

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.memberId)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
                    e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: 'rgba(0, 240, 255, 0.15)',
                    color: 'var(--cyber-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </span>
                  <span>{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Match Result Card */
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div className="sticker-tag sticker-pink" style={{ marginBottom: '16px' }}>
              <Heart size={14} fill="#fff" /> OFFICIAL WEFLIP MATCH FOUND!
            </div>

            <div style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 20px',
              border: `4px solid ${matchedMember.color}`,
              boxShadow: `0 0 30px ${matchedMember.color}60`,
            }}>
              <img
                src={matchedMember.avatar}
                alt={matchedMember.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 900,
              fontSize: '2.5rem',
              color: '#fff',
              marginBottom: '6px',
            }}>
              {matchedMember.name} <span style={{ color: matchedMember.color }}>({matchedMember.nativeName})</span>
            </h3>

            <div style={{
              color: 'var(--cyber-cyan)',
              fontWeight: 800,
              fontSize: '1.1rem',
              marginBottom: '16px'
            }}>
              {matchedMember.role.join(' • ')}
            </div>

            <p style={{
              maxWidth: '560px',
              margin: '0 auto 24px',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.5,
            }}>
              Your dynamic, authentic street vibe perfectly aligns with {matchedMember.name}! You share a passion for creative rhythm, high energy, and fearless determination.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '32px',
            }}>
              <span className="sticker-tag sticker-lime">MBTI: {matchedMember.mbti}</span>
              <span className="sticker-tag sticker-cyan">🛹 {matchedMember.skateVibe}</span>
              <span className="sticker-tag sticker-pink">{matchedMember.flag} {matchedMember.nationality}</span>
            </div>

            <button
              onClick={handleReset}
              className="btn-kickflip"
              style={{ margin: '0 auto' }}
            >
              <RotateCcw size={18} />
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
