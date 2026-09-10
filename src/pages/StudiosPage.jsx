import React, { useState } from 'react';
import { Coffee, Wifi, Shield, Disc, Sparkles, Play, Video, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StudioGear from '../components/StudioGear';
import BookingCTA from '../components/BookingCTA';

export default function StudiosPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const amenities = [
    {
      icon: Coffee,
      title: 'Private Artist Green Room',
      desc: 'Dedicated lounge space with leather seating, espresso bar, acoustic listening corner, and private restroom.'
    },
    {
      icon: Wifi,
      title: 'High-Speed Fiber & Remote Sessions',
      desc: 'Symmetrical 1Gbps fiber connection with Audiomovers Listento® and Source-Connect Pro for live remote client streaming.'
    },
    {
      icon: Disc,
      title: 'Hi-Fi Vinyl & Reference Library',
      desc: 'Direct-drive Technics reference turntable and archival record collection for sonic calibration and inspiration.'
    },
    {
      icon: Shield,
      title: 'Climate & Humidity Controlled',
      desc: 'Precision HVAC engineered for silent airflow (NC-15 rating) and 45% relative humidity for fine acoustic instruments.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* 1. Page Header */}
      <PageHeader
        badge="ACOUSTIC ARCHITECTURE & GEAR"
        title="WORLD-CLASS SUITES,"
        highlight="LEGENDARY HARDWARE"
        subtitle="Step inside our 4 decoupled recording environments and explore our curated arsenal of analog consoles, vintage tube microphones, and Dolby Atmos monitoring."
      />

      {/* 2. Studio Suites & Gear Component */}
      <StudioGear />

      {/* 3. 4K Studio Facility Tour Video Section */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(6, 6, 8, 0.95)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <div className="section-tag">
              <Video size={14} />
              <span>Cinematic Facility Walkthrough</span>
            </div>
            <h2 className="section-title">
              EXPERIENCE THE <span className="highlight">MALHAAR SANCTUARY</span>
            </h2>
            <p className="section-subtitle">
              Take a virtual 4K walkthrough of our master control rooms, decoupled live tracking stages, and Dolby Atmos 7.1.4 spatial monitoring environment.
            </p>
          </div>

          {/* Interactive Cinema Video Banner Card */}
          <div
            className="glass-card"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              minHeight: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `linear-gradient(180deg, rgba(10,2,4,0.4) 0%, rgba(8,2,4,0.85) 100%), url('/images/studio-atmos-suite.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid rgba(186, 27, 35, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 40px rgba(186,27,35,0.25)',
              cursor: 'pointer'
            }}
            onClick={() => setShowVideoModal(true)}
          >
            {/* Ambient Red Center Glow */}
            <div
              style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(230, 42, 52, 0.45) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }}
            />

            {/* Play Button & Center Content */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem' }}>
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ba1b23 0%, #e62a34 100%)',
                  boxShadow: '0 0 40px rgba(230, 42, 52, 0.8), 0 8px 25px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: '#ffffff',
                  transition: 'transform 0.3s ease'
                }}
              >
                <Play size={38} fill="#ffffff" style={{ marginLeft: '4px' }} />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '0.5rem' }}>
                Watch Studio Tour Reel
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                Go behind the glass with our chief engineers as they walk through our analog summing workflow and spatial mixing suites.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['4 ISOLATED SUITES', 'DOLBY ATMOS® 7.1.4', 'SSL 4000E CONSOLE', 'NEVE OUTBOARD GEAR'].map((badge, i) => (
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

      {/* 4. Studio Amenities & Hospitality */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(8, 8, 12, 0.7)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Sparkles size={14} />
              <span>Artist Hospitality</span>
            </div>
            <h2 className="section-title">
              DESIGNED FOR <span className="highlight">ENDLESS CREATIVITY</span>
            </h2>
            <p className="section-subtitle">
              Long studio sessions demand an environment that nurtures mental clarity and physical relaxation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {amenities.map((item, idx) => {
              const Icon = item.icon;
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
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(186, 27, 35, 0.15)',
                      border: '1px solid rgba(186, 27, 35, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-scarlet)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.65rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Booking CTA */}
      <BookingCTA
        title="SCHEDULE A PRIVATE STUDIO TOUR"
        subtitle="Come experience our acoustic monitoring and analog outboard consoles in person before booking your session."
      />

      {/* Studio Tour Cinema Modal */}
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
                title="Malhaar Productions Studio Tour Walkthrough"
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
