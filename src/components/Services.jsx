import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music2, Mic2, Sliders, Disc3, Film, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export default function Services({ onSelectService, limit }) {
  const navigate = useNavigate();

  const handleSelect = (title) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      navigate(`/contact?service=${encodeURIComponent(title)}`);
    }
  };

  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;
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
          {displayedServices.map((srv) => {
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
                  {/* Service Photo Banner Header */}
                  <div
                    style={{
                      position: 'relative',
                      height: '180px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '1.5rem',
                      backgroundImage: `linear-gradient(180deg, rgba(10,2,4,0.15) 0%, rgba(8,2,4,0.85) 100%), url('${srv.image || "/images/service-production.jpg"}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        right: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(186, 27, 35, 0.85)',
                          backdropFilter: 'blur(8px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          backgroundColor: 'rgba(0,0,0,0.65)',
                          backdropFilter: 'blur(6px)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          border: '1px solid rgba(255,255,255,0.15)'
                        }}
                      >
                        {srv.id}
                      </span>
                    </div>
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
                    onClick={() => handleSelect(srv.title)}
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
