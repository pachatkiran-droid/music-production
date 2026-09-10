import React, { useState } from 'react';
import { Waves, Disc3, Sparkles, ShieldCheck, Play, X, Film, Radio } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import Logo from '../components/Logo';

export default function AboutPage() {
  const [activeVideo, setActiveVideo] = useState(null);
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
    <div className="page-wrapper">
      {/* 1. Page Header */}
        <PageHeader
          badge="THE MALHAR PHILOSOPHY"
          title="INSPIRED BY TRADITION,"
          highlight="DEFINED BY MASTERY"
          subtitle="In Indian classical music, Raga Malhar possesses the mythical power to summon torrential monsoons. We bring that same visceral, transformative passion to modern sound design and record production."
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

            {/* Visual Brand Feature Card with Heritage Sanctuary Photography */}
            <div
              className="glass-card"
              style={{
                overflow: 'hidden',
                border: '1px solid rgba(186, 27, 35, 0.3)',
                background: 'linear-gradient(135deg, rgba(26, 12, 16, 0.6) 0%, rgba(12, 12, 16, 0.95) 100%)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.7)'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src="/images/heritage-sitar-studio.jpg"
                  alt="Malhaar Acoustic Sanctuary & Classical Heritage Studio"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(6,6,8,0.2) 0%, rgba(6,6,8,0.85) 100%)'
                  }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span
                    style={{
                      backgroundColor: 'rgba(186, 27, 35, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    ACOUSTIC SANCTUARY
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800, margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                    Live Acoustic Hall & Heritage Strings Room
                  </h3>
                </div>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Engineered specifically to capture Indian classical acoustics, high-resonance sitars, dynamic sarods, and grand orchestral strings in total harmonic equilibrium.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', textAlign: 'left' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.8rem' }}>FLOATING SLABS</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.74rem' }}>Decoupled isolation</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.8rem' }}>TELEFUNKEN TUBES</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.74rem' }}>Vintage microphone lockers</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.8rem' }}>DIFFUSION TIMBER</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.74rem' }}>Teak acoustic treatment</div>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'var(--accent-scarlet)', fontWeight: 700, fontSize: '0.8rem' }}>PRISM AD/DA</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.74rem' }}>192kHz uncompressed</div>
                  </div>
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

      {/* 5. Behind the Sound: Craft Documentary Video Showcase */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.7)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
              <Film size={14} />
              <span>Studio Documentary</span>
            </div>
            <h2 className="section-title">
              BEHIND THE <span className="highlight">SOUND</span>
            </h2>
            <p className="section-subtitle">
              Step inside our decoupled control suites to witness how analog tape saturation, rare vacuum tube preamplifiers, and modern Dolby Atmos mixing converge to forge iconic records.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(186, 27, 35, 0.35)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              height: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setActiveVideo({
              title: 'Behind the Sound: Crafting Modern Classics at Malhar Productions',
              youtubeId: 'oYmU8Av_e84'
            })}
          >
            {/* High-res background image */}
            <img
              src="/images/studio-console-analog.jpg"
              alt="Malhaar Console Analog Hybrid Workflow"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.55) contrast(1.15)',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            {/* Dark Studio Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(186, 27, 35, 0.15) 0%, rgba(6, 6, 8, 0.75) 85%)'
              }}
            />

            {/* Top Tag Badges */}
            <div
              style={{
                position: 'absolute',
                top: '1.75rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Radio size={14} color="var(--accent-scarlet)" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.06em' }}>
                  STUDIO MINI-DOCUMENTARY • 4K
                </span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(186, 27, 35, 0.85)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                RUNTIME 04:18
              </div>
            </div>

            {/* Glowing Ruby Play Trigger */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                padding: '2rem'
              }}
            >
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 35px rgba(186, 27, 35, 0.75)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(186, 27, 35, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(186, 27, 35, 0.75)';
                }}
              >
                <Play size={36} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}>
                The Architecture of Pure Sound
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                Click to watch our head producers demonstrate analog summing, live sitar tracking, and spatial panning in Studio A.
              </p>
            </div>

            {/* Bottom Tech Pills */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                zIndex: 2
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.3rem 0.75rem', borderRadius: '6px', backdropFilter: 'blur(6px)' }}>
                SSL 4000E Analog Console
              </span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.3rem 0.75rem', borderRadius: '6px', backdropFilter: 'blur(6px)' }}>
                Telefunken U47 Vintage Mic
              </span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.3rem 0.75rem', borderRadius: '6px', backdropFilter: 'blur(6px)' }}>
                Dolby Atmos® 7.1.4 Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Team Component */}
      <Team />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Call To Action Banner */}
      <BookingCTA
        title="COLLABORATE WITH OUR PRODUCTION TEAM"
        subtitle="Book a session or schedule an in-person studio walkthrough to discuss your upcoming musical project."
      />

      {/* Cinema Video Modal */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 5, 8, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              backgroundColor: '#0a0a0e',
              borderRadius: '16px',
              border: '1px solid rgba(186, 27, 35, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(186,27,35,0.2)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(18, 18, 24, 0.95)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-red)', display: 'inline-block' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em' }}>
                  {activeVideo.title}
                </span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
