import React from 'react';
import { Compass, Waves, Disc3, ShieldCheck, Sparkles, Award } from 'lucide-react';
import Logo from './Logo';

export default function About() {
  const stats = [
    { number: '250+', label: 'Mastered Releases', desc: 'Across Spotify, Apple Music & Vinyl' },
    { number: '15+', label: 'Platinum & Gold Hits', desc: 'Independent charts & major label releases' },
    { number: '120M+', label: 'Global Streams', desc: 'Worldwide listener reach' },
    { number: '4', label: 'Dedicated Suites', desc: 'Acoustically isolated control & live rooms' }
  ];

  const pillars = [
    {
      icon: Waves,
      title: 'Acoustic Purity',
      description: 'Engineered with floating floors, hardwood diffusers, and bass traps to achieve linear frequency response down to 20Hz.'
    },
    {
      icon: Disc3,
      title: 'Analog & Modern Hybrid',
      description: 'Solid-state SSL summing consoles, vintage Neve preamps, and Tube-Tech optical compression paired with ultra-high resolution converters.'
    },
    {
      icon: Sparkles,
      title: 'Spatial Immersive Audio',
      description: 'Dolby Atmos® 7.1.4 certified mixing environment that elevates music from flat stereo into three-dimensional acoustic space.'
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
            <span>The Malhar Story</span>
          </div>
          <h2 className="section-title">
            INSPIRED BY SOUND, <span className="highlight">DEFINED BY MASTERY</span>
          </h2>
          <p className="section-subtitle">
            In Indian classical tradition, <em>Malhar</em> is the raga possessing the transformative power to summon torrential monsoons. We carry that elemental, soul-stirring energy into modern music production.
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
                  Sonic Architecture Since 2018
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Founded by visionary producers and certified audio engineers, <strong>Malhar Productions</strong> bridges the sacred heritage of classical acoustic instrumentation with the relentless pulse of contemporary global pop, hip-hop, and cinematic scoring.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you are an independent singer-songwriter tracking your debut vocal or a film studio requiring synchronized 7.1.4 Dolby Atmos orchestral mixes, our facility provides the exact acoustic environment and creative guidance required to elevate raw talent into timeless records.
            </p>

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
