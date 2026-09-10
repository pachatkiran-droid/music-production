import React from 'react';
import { Disc, Play, ExternalLink, Award, Sparkles } from 'lucide-react';
import { FEATURED_RELEASES } from '../data/releases';

export default function Discography({ onPlayTrack }) {
  return (
    <section id="releases" className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(8, 8, 10, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Disc size={14} />
            <span>Discography & Releases</span>
          </div>
          <h2 className="section-title">
            FEATURED <span className="highlight">PRODUCTIONS</span>
          </h2>
          <p className="section-subtitle">
            A selection of recent singles, studio albums, and feature film soundtracks engineered, mixed, and mastered at Malhar Productions.
          </p>
        </div>

        {/* Releases Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {FEATURED_RELEASES.map((rel) => (
            <div
              key={rel.id}
              className="glass-card discography-card"
              style={{
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.75) 0%, rgba(12, 12, 16, 0.95) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Vinyl Record Visual Mockup */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '16px',
                    background: rel.coverGradient,
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
                  }}
                >
                  {/* Top Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(8px)',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {rel.badge}
                    </span>
                    <span
                      style={{
                        backgroundColor: 'rgba(186, 27, 35, 0.85)',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      {rel.year}
                    </span>
                  </div>

                  {/* Center Vinyl Center Hole Graphic */}
                  <div
                    style={{
                      alignSelf: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#060608',
                      border: '6px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 0 20px rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary-red)' }} />
                  </div>

                  {/* Bottom Streams Metric */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.85rem',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px'
                      }}
                    >
                      {rel.streams}
                    </span>
                  </div>
                </div>

                {/* Release Details */}
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {rel.type}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {rel.title}
                </h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                  {rel.artist}
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '1.25rem' }}>
                  <strong>Malhar Role:</strong> {rel.role}
                </p>
              </div>

              {/* Streaming Badges */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span>Spotify • Apple Music</span>
                <span style={{ color: 'var(--accent-scarlet)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                  Dolby Atmos <Sparkles size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
