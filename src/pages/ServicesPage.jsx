import React, { useState } from 'react';
import { Clock, FileAudio, CheckCircle2, Play, Sliders, X, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import BookingCTA from '../components/BookingCTA';

export default function ServicesPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const workflowSteps = [
    {
      step: '01',
      title: 'Pre-Production & Vision',
      desc: 'Tempo mapping, harmonic arrangement review, key selection, and custom acoustic instrumentation planning.'
    },
    {
      step: '02',
      title: 'Tracking & Capture',
      desc: 'Recording in our live sanctuary through vintage Telefunken and Neumann microphones into Neve preamps.'
    },
    {
      step: '03',
      title: 'Analog Summing & Mixing',
      desc: 'Stem balancing on our SSL 4000E console with outboard optical and VCA compression for punch and air.'
    },
    {
      step: '04',
      title: 'Dolby Atmos® Spatial Mix',
      desc: 'Binaural calibration and 7.1.4 object panning to create an immersive, boundaryless acoustic realm.'
    },
    {
      step: '05',
      title: 'Mastering & Delivery',
      desc: 'Apple Digital Masters (MFiT) certified loudness optimization, vinyl DMM pre-masters, and stems archive.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* 1. Page Header */}
      <PageHeader
        badge="PRODUCTION CAPABILITIES"
        title="END-TO-END"
        highlight="STUDIO SERVICES"
        subtitle="Every sonic discipline under one acoustically tuned roof. From commercial film scoring to chart-topping Dolby Atmos mixes, we elevate your sound to international standards."
      />

      {/* 2. All Services Grid */}
      <Services />

      {/* 3. Studio Session & Dolby Atmos Workflow Video Reel */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(8, 2, 4, 0.95)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <div className="section-tag">
              <Sliders size={14} />
              <span>Studio In Action</span>
            </div>
            <h2 className="section-title">
              SEE OUR ENGINEERS <span className="highlight">IN THE MIX</span>
            </h2>
            <p className="section-subtitle">
              Watch how our production team blends British analog hardware summing with 3D spatial object rendering in real-time.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `linear-gradient(180deg, rgba(14,3,6,0.35) 0%, rgba(10,2,4,0.85) 100%), url('/images/studio-console-analog.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid rgba(186, 27, 35, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(186,27,35,0.25)',
              cursor: 'pointer'
            }}
            onClick={() => setShowVideoModal(true)}
          >
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(230, 42, 52, 0.45) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem' }}>
              <div
                style={{
                  width: '86px',
                  height: '86px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ba1b23 0%, #e62a34 100%)',
                  boxShadow: '0 0 35px rgba(230, 42, 52, 0.8), 0 8px 20px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: '#ffffff',
                  transition: 'transform 0.3s ease'
                }}
              >
                <Play size={36} fill="#ffffff" style={{ marginLeft: '3px' }} />
              </div>
              <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '0.5rem' }}>
                Watch Production & Mixing Reel
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
                Experience the tactile workflow: from raw vocal capture to 48-channel analog summing and Dolby Atmos object calibration.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['ANALOG SUMMING', 'SPATIAL ATMOS', 'VOCAL CHAIN', 'MASTERING SUITE'].map((badge, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      backdropFilter: 'blur(8px)',
                      color: 'rgba(255,255,255,0.9)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.15)'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Studio Production Lifecycle / Process */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.6)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Clock size={14} />
              <span>The Malhar Method</span>
            </div>
            <h2 className="section-title">
              OUR FIVE-STAGE <span className="highlight">PRODUCTION WORKFLOW</span>
            </h2>
            <p className="section-subtitle">
              A transparent, artist-centric methodology engineered to translate raw ideas into timeless, radio-ready records.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginBottom: '4rem'
            }}
          >
            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.75) 0%, rgba(12, 12, 16, 0.95) 100%)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--accent-scarlet)',
                    opacity: 0.8,
                    marginBottom: '0.75rem'
                  }}
                >
                  {ws.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.65rem' }}>
                  {ws.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables Standard Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(186, 27, 35, 0.3)',
              background: 'linear-gradient(135deg, rgba(26, 12, 16, 0.6) 0%, rgba(12, 12, 16, 0.95) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <FileAudio size={24} color="var(--accent-scarlet)" />
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800 }}>
                Standard Deliverables Package on Every Project
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              When your project wraps at Malhaar Productions, you receive a master archival package ready for all commercial, theatrical, and streaming platforms:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {[
                'Full 24-bit / 96kHz Lossless Master WAV',
                'Streaming Master (-14 LUFS Spotify / Apple Music)',
                'Apple Digital Masters (MFiT) High-Res Certified',
                'Dolby Atmos® 7.1.4 ADM BWF Spatial Master',
                'Comprehensive Stems Archive (Vocal, Bass, Drums, Synths)',
                'Instrumental, TV Track & Radio Clean Edits',
                'Acoustic Performance & A Cappella Versions',
                'Encrypted Cloud Backup with 5-Year Vault Retention'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={17} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Booking CTA */}
      <BookingCTA
        title="READY TO BOOK A SERVICE SUITE?"
        subtitle="Select your preferred service and let our audio engineers craft the definitive sound for your music."
      />

      {/* Production & Atmos Session Cinema Modal */}
      {showVideoModal && (
        <div className="video-modal-backdrop" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close-btn"
              onClick={() => setShowVideoModal(false)}
              aria-label="Close cinema modal"
            >
              <X size={20} />
            </button>
            <div className="video-modal-responsive">
              <iframe
                src="https://www.youtube-nocookie.com/embed/oYmU8Av_e84?autoplay=1&controls=1&rel=0&modestbranding=1"
                title="Malhaar Productions Studio Session Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
