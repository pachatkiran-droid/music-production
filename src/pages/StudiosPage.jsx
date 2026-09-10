import React from 'react';
import { Coffee, Wifi, Shield, Disc, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StudioGear from '../components/StudioGear';
import BookingCTA from '../components/BookingCTA';

export default function StudiosPage() {
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

      {/* 3. Studio Amenities & Hospitality */}
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
    </div>
  );
}
