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
      title: 'The Conceptual Spark',
      desc: 'Deep ideation, narrative treatments, sonic moodboards, and creative visioning tailored specifically to your brief.'
    },
    {
      step: '02',
      title: 'Thoughtful Pre-Production',
      desc: 'Composing melodic frameworks, scripting video scenes, acoustic room calibration, and scheduling top-tier creative talent.'
    },
    {
      step: '03',
      title: 'Professional Execution',
      desc: 'Pristine live studio tracking, cinematic 4K/6K filming on set, or high-fidelity stage audio engineering for events.'
    },
    {
      step: '04',
      title: 'Meticulous Craft & Polish',
      desc: 'Hybrid analog summing, spatial Dolby Atmos® mixing, frame-accurate film editing, color grading, and dynamic acoustic balancing.'
    },
    {
      step: '05',
      title: 'Final Realization & Delivery',
      desc: 'Flawless broadcast-ready commercials, release-ready masters, festival-ready music videos, or memorable live event experiences.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* 1. Page Header */}
      <PageHeader
        badge="OUR CREATIVE SPECTRUM"
        title="FROM CONCEPT TO"
        highlight="FINAL REALIZATION"
        subtitle="Malhaar Productions is a creative platform dedicated to conceptualising and producing advertisements, music videos, music productions, artistic initiatives, and musical events—transforming ideas into meaningful experiences through thoughtful creativity and professional execution."
      />

      {/* 2. All Services Grid */}
      <Services />

      {/* 3. Studio Session & Dolby Atmos Workflow Video Reel */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(8, 2, 4, 0.95)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <div className="section-tag">
              <Sliders size={14} />
              <span>Thoughtful Creativity In Action</span>
            </div>
            <h2 className="section-title">
              CRAFTING EXPERIENCES <span className="highlight">WITH PASSION</span>
            </h2>
            <p className="section-subtitle">
              From the initial spark of inspiration to the final cut and master, see how our team brings projects to life with care, passion, and uncompromising attention to detail.
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
              <span>Concept To Realization</span>
            </div>
            <h2 className="section-title">
              OUR FIVE-STAGE <span className="highlight">CREATIVE PROCESS</span>
            </h2>
            <p className="section-subtitle">
              A transparent, thoughtful methodology engineered to bring every spark of inspiration to life with care, passion, and attention to detail.
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
        title="READY TO BRING YOUR PROJECT TO LIFE?"
        subtitle="Whether it's an advertisement, music video, music production, artistic initiative, or musical event—let's create something meaningful together."
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
