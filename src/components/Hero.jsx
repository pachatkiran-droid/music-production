import React from 'react';
import { Play, Calendar, Disc, Volume2, ArrowDown, Award, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Hero({ onPlayShowreel, onBookSession }) {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '4rem'
      }}
    >
      {/* Background Studio Visual & Vignette Overlay */}
      <div
        className="hero-backdrop"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(6, 6, 8, 0.7) 0%, rgba(6, 6, 8, 0.88) 60%, #060608 100%), url('/images/studio-control-room.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.9)',
          zIndex: 0
        }}
      />

      {/* Atmospheric Ambient Ruby Red Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75vw',
          maxWidth: '900px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(186, 27, 35, 0.32) 0%, rgba(186, 27, 35, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Floating Badge */}
        <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div className="section-tag" style={{ backdropFilter: 'blur(8px)', background: 'rgba(186, 27, 35, 0.18)' }}>
            <span className="dot" />
            <span>PREMIER MUSIC PRODUCTION & RECORDING STUDIOS</span>
          </div>
        </div>

        {/* Main Brand Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6.5vw, 4.85rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '0.04em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            maxWidth: '1080px',
            marginInline: 'auto'
          }}
        >
          WHERE PURE SOUND MEETS <br />
          <span
            style={{
              color: 'var(--primary-red)',
              background: 'linear-gradient(135deg, #FF4B55 0%, #BA1B23 60%, #850E14 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(186, 27, 35, 0.5)'
            }}
          >
            ELEMENTAL PASSION
          </span>
        </h1>

        {/* Subtitle / Positioning */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
            color: 'var(--text-muted)',
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.7,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400
          }}
        >
          Named after the legendary raga that awakens torrential rain, <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Malhaar Productions</strong> crafts chart-topping singles, cinematic film scores, and spatial audio experiences with analog warmth and modern sonic precision.
        </p>

        {/* Call to Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}
        >
          <button
            onClick={onPlayShowreel}
            className="btn btn-primary"
            style={{
              padding: '1rem 2.2rem',
              fontSize: '1rem',
              borderRadius: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Play size={16} fill="#FFFFFF" />
            </div>
            <span>Listen to Showreel</span>
          </button>

          <button
            onClick={onBookSession}
            className="btn btn-secondary"
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              borderRadius: '14px'
            }}
          >
            <Calendar size={18} />
            <span>Book Studio Session</span>
          </button>
        </div>

        {/* Live Audio Graphic & Social Proof Stats */}
        <div
          className="glass-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '1.25rem 2rem',
            background: 'rgba(18, 18, 23, 0.65)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
        >
          <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(186, 27, 35, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-scarlet)',
                flexShrink: 0
              }}
            >
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, fontSize: '1.3rem', color: '#FFFFFF' }}>120M+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Global Streams</div>
            </div>
          </div>

          <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(186, 27, 35, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-scarlet)',
                flexShrink: 0
              }}
            >
              <Disc size={22} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, fontSize: '1.3rem', color: '#FFFFFF' }}>250+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mastered Tracks</div>
            </div>
          </div>

          <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(186, 27, 35, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-scarlet)',
                flexShrink: 0
              }}
            >
              <Sparkles size={22} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, fontSize: '1.3rem', color: '#FFFFFF' }}>Dolby Atmos®</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Spatial Certified</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <a
            href="#showreel"
            aria-label="Scroll down to showreel"
            style={{
              color: 'var(--text-dim)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease'
            }}
          >
            <span>Explore Sound</span>
            <ArrowDown size={16} className="bounce-animation" />
          </a>
        </div>
      </div>
    </section>
  );
}
