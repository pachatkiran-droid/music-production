import React from 'react';
import { Compass, Waves, Disc3, ShieldCheck, Sparkles, Award } from 'lucide-react';
import Logo from './Logo';

export default function About() {
  const stats = [
    { number: '5', label: 'Core Disciplines', desc: 'Ads, Music Videos, Productions, Initiatives & Events' },
    { number: '100%', label: 'Concept to Realization', desc: 'From initial spark to final delivery' },
    { number: '150+', label: 'Creative Projects', desc: 'Commercial campaigns, records & stage events' },
    { number: 'Care & Detail', label: 'Artistic Passion', desc: 'Every project brought to life with dedication' }
  ];

  const pillars = [
    {
      icon: Sparkles,
      title: 'The Conceptual Spark',
      description: 'We believe every extraordinary project begins with a spark. We dive deep into narrative, emotion, and purpose to craft concepts that truly resonate.'
    },
    {
      icon: Waves,
      title: 'Thoughtful Creativity',
      description: 'Creativity driven by vision. Our sonic, visual, and experiential choices are purposeful, evocative, and deeply considered.'
    },
    {
      icon: Disc3,
      title: 'Professional Execution',
      description: 'From precision studio engineering and analog warmth to cinematic 4K camera direction and seamless event stagecraft, we deliver world-class standards.'
    },
    {
      icon: ShieldCheck,
      title: 'Care, Passion & Detail',
      description: 'Malhaar is a venture close to our hearts. We obsess over the finest nuances—every harmonic tone, lighting cue, and frame is sculpted with love.'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(186, 27, 35, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        {/* Top Tag & Title */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>A Venture Close To Our Hearts</span>
          </div>
          <h2 className="section-title">
            THOUGHTFUL CREATIVITY, <span className="highlight">PROFESSIONAL EXECUTION</span>
          </h2>
          <p className="section-subtitle">
            At its core, Malhaar is driven by a simple vision: to transform ideas into meaningful experiences through thoughtful creativity and professional execution.
          </p>
        </div>

        {/* Story Grid: Story & Visual Collage */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
        >
          {/* Story Narrative */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Logo variant="badge" size="sm" />
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>MALHAAR PRODUCTIONS</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Creative Platform & Production
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              <strong>Malhaar Productions</strong> is a venture close to my heart—a creative platform dedicated to conceptualising and producing <strong>advertisements, music videos, music productions, artistic initiatives, and musical events</strong>.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              From the first spark of a concept to its final realization, our goal is to bring every project to life with care, passion, and attention to detail.
            </p>

            <div
              style={{
                padding: '1.15rem 1.5rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(186, 27, 35, 0.08)',
                borderLeft: '4px solid var(--primary-red)',
                marginBottom: '2rem'
              }}
            >
              <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                "Thank you for being a part of this journey. Together, we bring ideas into the realm of enduring artistic expression."
              </p>
            </div>

            {/* Core Values List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      padding: '1rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(186, 27, 35, 0.15)',
                        color: 'var(--accent-scarlet)',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>{pillar.title}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Showcase Card with Real Live Room Image */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              style={{
                overflow: 'hidden',
                borderRadius: '24px',
                border: '1px solid rgba(186, 27, 35, 0.3)',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(186, 27, 35, 0.2)'
              }}
            >
              <img
                src="/images/studio-live-room.jpg"
                alt="Malhar Productions Live Acoustic Hall"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  padding: '1.75rem',
                  background: 'linear-gradient(180deg, rgba(18, 18, 23, 0.9) 0%, rgba(10, 10, 14, 0.98) 100%)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    Live Acoustic Hall
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Steinway & Sons Model B</span>
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  The Resonance of Natural Timber
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Engineered with 18-foot vaulted ceilings to produce a rich natural decay time of 1.4 seconds—ideal for orchestral strings, brass, and intimate grand piano tracking.
                </p>
              </div>
            </div>

            {/* Floating Accolade Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '20px',
                backgroundColor: 'rgba(186, 27, 35, 0.95)',
                color: '#FFFFFF',
                padding: '0.65rem 1.25rem',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                boxShadow: '0 10px 25px rgba(186, 27, 35, 0.5)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Award size={16} />
              <span>Certified Acoustic Standard</span>
            </div>
          </div>
        </div>

        {/* Animated Statistics Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.7) 0%, rgba(14, 14, 18, 0.9) 100%)'
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                  fontWeight: 900,
                  color: 'var(--primary-red)',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(186, 27, 35, 0.4)'
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.25rem',
                  letterSpacing: '0.04em'
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
