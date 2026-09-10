import React from 'react';
import { Compass, Waves, Disc3, Sparkles, Award, ShieldCheck, Heart, Radio } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import Logo from '../components/Logo';

export default function AboutPage() {
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
      description: 'Engineered with floating concrete floors, custom hardwood diffusers, and diaphragmatic bass traps to achieve an absolute linear frequency response down to 20Hz.'
    },
    {
      icon: Disc3,
      title: 'Analog & Modern Hybrid',
      description: 'Solid-state SSL 4000E summing consoles, vintage Neve preamplifiers, and Tube-Tech optical compression paired with ultra-high resolution Prism Sound and Burl converters.'
    },
    {
      icon: Sparkles,
      title: 'Spatial Immersive Audio',
      description: 'Dolby Atmos® 7.1.4 certified mixing environment that elevates music from flat stereo into three-dimensional acoustic space with pinpoint object rendering.'
    },
    {
      icon: ShieldCheck,
      title: 'Artist-First Integrity',
      description: 'We believe technology serves emotion. Every sonic nuance, harmonic saturation choice, and dynamic curve is sculpted in deep collaboration with the artist.'
    }
  ];

  return (
    <div className="about-page">
      {/* 1. Page Header */}
      <PageHeader
        badge="THE MALHAR PHILOSOPHY"
        title="INSPIRED BY TRADITION,"
        highlight="DEFINED BY MASTERY"
        subtitle="In Indian classical music, Raga Malhar possesses the mythical power to summon torrential monsoons. We bring that same visceral, transformative passion to modern sound design and record production."
        icon={Compass}
      />

      {/* 2. Heritage Story & Studio Mission */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
              marginBottom: '4.5rem'
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2
                }}
              >
                THE ROOTS OF <span className="highlight">MALHAAR</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Founded by passionate record producers and audio architects, <strong>Malhar Productions</strong> (also known as <em>Malhaar Productions</em>) was conceived as a haven for artists seeking uncompromising sonic fidelity. We recognized a growing void in the modern era: digital convenience had stripped away the organic warmth, air, and emotional weight that defined the golden age of records.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                We built our facility from the ground up inside a decoupled, sound-isolated sanctuary. Here, vintage tube microphones and legendary British consoles breathe analog warmth into pristine 192kHz digital recording workflows. Whether scoring cinematic themes or polishing Billboard-ready pop vocals, we treat every note with reverent craftsmanship.
              </p>

              <div
                style={{
                  padding: '1.25rem 1.75rem',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(186, 27, 35, 0.08)',
                  borderLeft: '4px solid var(--primary-red)'
                }}
              >
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '0.95rem', margin: 0 }}>
                  "Sound is not just vibrations hitting an eardrum; it is the physical manifestation of human feeling. When Malhar plays, the atmosphere changes."
                </p>
              </div>
            </div>

            {/* Visual Brand Feature Card */}
            <div
              className="glass-card"
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(186, 27, 35, 0.25)',
                background: 'linear-gradient(135deg, rgba(26, 12, 16, 0.6) 0%, rgba(12, 12, 16, 0.95) 100%)'
              }}
            >
              <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                <Logo variant="full" color="red" size="lg" />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                The Sanctuary For Creative Pioneers
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                A multi-room creative campus equipped for full orchestral tracking, intimate vocal isolation, vintage analog summing, and immersive Dolby Atmos spatial rendering.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', textAlign: 'left' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                  <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.85rem' }}>FLOATING FLOORS</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Decoupled isolation slabs</div>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                  <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.85rem' }}>ATC MONITORING</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Unfiltered phase accuracy</div>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                  <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.85rem' }}>SSL 4000E BUSS</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Legendary glue & punch</div>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                  <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.85rem' }}>DOLBY 7.1.4</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Spatial object audio</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Core Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginBottom: '5rem'
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.7) 0%, rgba(12, 12, 16, 0.95) 100%)'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(2.2rem, 4vw, 2.8rem)',
                    fontWeight: 800,
                    color: 'var(--accent-scarlet)',
                    marginBottom: '0.35rem'
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1rem', marginBottom: '0.35rem' }}>
                  {stat.label}
                </div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 4. Four Acoustic Pillars */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} />
              <span>Studio Engineering Standards</span>
            </div>
            <h2 className="section-title">
              THE PILLARS OF <span className="highlight">EXCELLENCE</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2.25rem 1.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.7) 0%, rgba(12, 12, 16, 0.95) 100%)'
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(186, 27, 35, 0.15)',
                      border: '1px solid rgba(186, 27, 35, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-scarlet)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {pil.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {pil.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Team Component */}
      <Team />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Call To Action Banner */}
      <BookingCTA
        title="COLLABORATE WITH OUR PRODUCTION TEAM"
        subtitle="Book a session or schedule an in-person studio walkthrough to discuss your upcoming musical project."
      />
    </div>
  );
}
