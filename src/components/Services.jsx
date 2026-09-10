import React from 'react';
import { Music2, Mic2, Sliders, Disc3, Film, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export default function Services({ onSelectService }) {
  const iconMap = {
    Music2: Music2,
    Mic2: Mic2,
    Sliders: Sliders,
    Disc3: Disc3,
    Film: Film,
    Sparkles: Sparkles
  };

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sliders size={14} />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="section-title">
            STUDIO SERVICES & <span className="highlight">PRODUCTION SUITES</span>
          </h2>
          <p className="section-subtitle">
            From initial songwriting drafts to global streaming delivery and theatrical surround mixing, Malhar Productions provides bespoke sonic solutions for artists, record labels, and directors.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Music2;
            return (
              <div
                key={srv.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.7) 0%, rgba(12, 12, 16, 0.9) 100%)'
                }}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
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
                        color: 'var(--accent-scarlet)'
                      }}
                    >
                      <IconComponent size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--accent-scarlet)',
                        backgroundColor: 'rgba(186, 27, 35, 0.12)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {srv.id}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 700 }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {srv.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    {srv.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight Strip & Service Booking Trigger */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-scarlet)', fontWeight: 600, marginBottom: '1rem' }}>
                    ★ {srv.highlight}
                  </div>
                  <button
                    onClick={() => onSelectService(srv.title)}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '0.85rem',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>Book {srv.title.split('&')[0]}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
