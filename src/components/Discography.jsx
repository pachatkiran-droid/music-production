import React, { useState } from 'react';
import { Disc, Play, ExternalLink, Award, Sparkles, X, Radio } from 'lucide-react';
import { FEATURED_RELEASES } from '../data/releases';

export default function Discography({ onPlayTrack }) {
  const [activeReleaseVideo, setActiveReleaseVideo] = useState(null);

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
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(186, 27, 35, 0.4)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Vinyl Record Visual Mockup with Real Album Art */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.7)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveReleaseVideo({
                    title: `${rel.title} — ${rel.artist} (Official Music Video)`,
                    youtubeId: rel.youtubeId || 'oYmU8Av_e84'
                  })}
                >
                  {/* Real Album Cover Artwork */}
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Dark Vignette Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(6,6,8,0.45) 0%, rgba(6,6,8,0.2) 40%, rgba(6,6,8,0.85) 100%)'
                    }}
                  />

                  {/* Top Badge Row */}
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.75)',
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
                        backgroundColor: 'rgba(186, 27, 35, 0.9)',
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

                  {/* Center Play Button Overlay */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      alignSelf: 'center',
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(186, 27, 35, 0.9)',
                      boxShadow: '0 0 25px rgba(186,27,35,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      transition: 'transform 0.25s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Play size={24} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                  </div>

                  {/* Bottom Streams Metric */}
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.85rem',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        backgroundColor: 'rgba(0,0,0,0.75)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        backdropFilter: 'blur(6px)'
                      }}
                    >
                      {rel.streams}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--accent-scarlet)',
                        backgroundColor: 'rgba(0,0,0,0.75)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      WATCH VIDEO
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

              {/* Streaming Badges & Watch Trigger */}
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
                <button
                  onClick={() => setActiveReleaseVideo({
                    title: `${rel.title} — ${rel.artist} (Official Music Video)`,
                    youtubeId: rel.youtubeId || 'oYmU8Av_e84'
                  })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-scarlet)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    padding: 0
                  }}
                >
                  <Play size={13} fill="var(--accent-scarlet)" />
                  <span>Play Reel</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinema Video Modal */}
      {activeReleaseVideo && (
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
          onClick={() => setActiveReleaseVideo(null)}
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
                  {activeReleaseVideo.title}
                </span>
              </div>
              <button
                onClick={() => setActiveReleaseVideo(null)}
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
                src={`https://www.youtube-nocookie.com/embed/${activeReleaseVideo.youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title={activeReleaseVideo.title}
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
    </section>
  );
}
