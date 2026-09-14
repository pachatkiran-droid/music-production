import React from 'react';
import { MessageSquareQuote, Star, CheckCircle, Shield } from 'lucide-react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/releases';

export default function Testimonials({ showPartners = true }) {
  return (
    <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={14} />
            <span>Artist & Client Voices</span>
          </div>
          <h2 className="section-title">
            TRUSTED BY <span className="highlight">CREATORS & LABELS</span>
          </h2>
          <p className="section-subtitle">
            Hear from the independent artists, national award-winning directors, and international streaming partners who make Malhar Productions their creative sanctuary.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: showPartners ? '4.5rem' : '0'
          }}
        >
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.75) 0%, rgba(12, 12, 16, 0.95) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', color: '#FFB800', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" />
                  ))}
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {item.author}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-scarlet)', fontWeight: 500, marginBottom: '0.2rem' }}>
                  {item.role}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  {item.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner & Platform Marquee Banner */}
        {showPartners && (
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              border: '1px solid rgba(186, 27, 35, 0.2)',
              background: 'rgba(14, 14, 18, 0.7)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Production & Delivery Standards Cleared With
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2.5rem'
              }}
            >
              {CLIENT_LOGOS.map((logo, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {logo.name}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-scarlet)' }}>
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
