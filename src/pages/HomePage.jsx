import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sliders, Layers, Disc, ArrowRight, Sparkles, Award, Waves, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import AudioPlayer from '../components/AudioPlayer';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import { SERVICES } from '../data/services';
import { STUDIOS_DATA } from '../data/studios';
import { FEATURED_RELEASES } from '../data/releases';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* Anchor point for Hero scroll */}
      <div id="home-content" />

      {/* 2. Interactive Audio Showreel Teaser */}
      <section style={{ position: 'relative', paddingTop: '1rem' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <div className="section-tag" style={{ background: 'rgba(186, 27, 35, 0.15)' }}>
              <Sparkles size={14} />
              <span>LISTEN TO THE SOUND</span>
            </div>
          </div>
          <h2 className="section-title">
            INTERACTIVE <span className="highlight">AUDIO SHOWREEL</span>
          </h2>
          <p className="section-subtitle">
            Experience our procedural audio synthesizer and real-time spectrum analyzer. Switch genres to preview the breadth of our sound.
          </p>
        </div>

        {/* Audio Player Engine */}
        <AudioPlayer />

        <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '3rem' }}>
          <Link
            to="/releases"
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.85rem',
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none'
            }}
          >
            <span>Explore Full Discography & Credits</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 3. About & Heritage Spotlight Teaser */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.6)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Content */}
            <div>
              <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
                <Compass size={14} />
                <span>The Malhar Legacy</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                WHERE TIMELESS RAGA MEETS <br />
                <span className="highlight">ANALOG MASTERY</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                In Indian classical heritage, <em>Raga Malhar</em> is famed for its ability to conjure rain from clear skies. At Malhaar Productions, we channel that same tempestuous emotional resonance into modern records, commercial sound design, and cinematic scores.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-red)" />
                  <span>Solid State Logic (SSL) 4000E Analog Console Summing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-red)" />
                  <span>Official Dolby Atmos® 7.1.4 Certified Immersive Mixing Suite</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-red)" />
                  <span>Pristine Burl Audio, Prism Sound & Antelope Mastering Converters</span>
                </div>
              </div>

              <Link
                to="/about"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  padding: '0.9rem 1.8rem'
                }}
              >
                <span>Discover Our Heritage & Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Stat Grid Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem'
              }}
            >
              {[
                { num: '250+', label: 'Mastered Releases', desc: 'Commercial label & indie tracks' },
                { num: '120M+', label: 'Streams Delivered', desc: 'Global platforms & radio' },
                { num: '15+', label: 'Platinum & Gold Hits', desc: 'National & international charts' },
                { num: '4', label: 'Dedicated Suites', desc: 'Acoustically tuned control rooms' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.7) 0%, rgba(12, 12, 16, 0.95) 100%)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                      fontWeight: 800,
                      color: 'var(--accent-scarlet)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Production Services Preview */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Sliders size={14} />
              <span>Capabilities</span>
            </div>
            <h2 className="section-title">
              BESPOKE STUDIO <span className="highlight">SERVICES</span>
            </h2>
            <p className="section-subtitle">
              From initial songwriting sessions to Dolby Atmos theatrical mastering, our suites are engineered for pure sonic impact.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {SERVICES.slice(0, 3).map((srv) => (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--accent-scarlet)',
                        backgroundColor: 'rgba(186, 27, 35, 0.12)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {srv.id}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>★ {srv.highlight}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {srv.shortDesc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem' }}>
                  <Link
                    to={`/contact?service=${encodeURIComponent(srv.title)}`}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '0.85rem',
                      justifyContent: 'space-between',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Book {srv.title.split('&')[0]}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/services"
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none'
              }}
            >
              <span>View All 6 Production Suites & Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Studio Rooms & Gear Preview */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(8, 8, 12, 0.7)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Layers size={14} />
              <span>Acoustic Environments</span>
            </div>
            <h2 className="section-title">
              ENGINEERED FOR <span className="highlight">PERFECTION</span>
            </h2>
            <p className="section-subtitle">
              Take a look inside our 4 purpose-built acoustic suites featuring floating concrete floors, vintage Neve/SSL gear, and ATC monitoring.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            {STUDIOS_DATA.map((room) => (
              <div
                key={room.id}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.75) 0%, rgba(12, 12, 16, 0.95) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      height: '140px',
                      borderRadius: '12px',
                      background: 'radial-gradient(ellipse at center, rgba(186, 27, 35, 0.3) 0%, rgba(18, 18, 24, 0.9) 70%)',
                      border: '1px solid rgba(186, 27, 35, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Layers size={36} color="var(--accent-scarlet)" />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.4rem' }}>
                    {room.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {room.dimensions} • {room.reverbTime}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {room.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                    <strong>Console:</strong> {room.console}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/studios"
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.85rem',
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none'
              }}
            >
              <span>Explore Gear Arsenal & Studio Specifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Featured Discography Highlights */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Disc size={14} />
              <span>Recent Hits</span>
            </div>
            <h2 className="section-title">
              FEATURED <span className="highlight">RELEASES</span>
            </h2>
            <p className="section-subtitle">
              A glimpse into recent chart releases, soundtracks, and indie anthems mixed and mastered at Malhaar Productions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {FEATURED_RELEASES.slice(0, 3).map((rel) => (
              <div
                key={rel.id}
                className="glass-card discography-card"
                style={{
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.75) 0%, rgba(12, 12, 16, 0.95) 100%)'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '16px',
                    background: rel.coverGradient,
                    marginBottom: '1.25rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
                  }}
                >
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {rel.genre}
                  </span>
                  <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                      {rel.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                      {rel.artist} • {rel.year}
                    </p>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  ★ {rel.achievement}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong>Role:</strong> {rel.role}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/releases"
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none'
              }}
            >
              <span>View Full Discography & Interactive Showreel</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials & Partner Badges */}
      <Testimonials />

      {/* 8. Booking CTA Banner */}
      <BookingCTA
        title="READY TO ELEVATE YOUR SOUND?"
        subtitle="Book a dedicated studio session in our acoustically certified suites with multi-platinum producers and Dolby Atmos mix engineers."
      />
    </div>
  );
}
