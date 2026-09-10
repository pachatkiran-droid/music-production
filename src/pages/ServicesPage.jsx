import React from 'react';
import { Clock, FileAudio, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import BookingCTA from '../components/BookingCTA';

export default function ServicesPage() {
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

      {/* 3. Studio Production Lifecycle / Process */}
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
    </div>
  );
}
