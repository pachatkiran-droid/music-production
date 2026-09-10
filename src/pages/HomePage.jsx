import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Pause, Disc } from 'lucide-react';
import './HomePage.css';
import AudioPlayer from '../components/AudioPlayer';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import { FEATURED_RELEASES } from '../data/releases';
import { studioAudioEngine } from '../utils/audioEngine';
import { SHOWREEL_TRACKS } from '../data/tracks';

export default function HomePage() {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);

  const handleToggleTeaser = () => {
    if (isPlayingTeaser) {
      studioAudioEngine.stop();
      setIsPlayingTeaser(false);
    } else {
      studioAudioEngine.playTrack(SHOWREEL_TRACKS[0]);
      setIsPlayingTeaser(true);
    }
  };

  return (
    <div className="home-page-full">
      {/* ====================================================================
          SECTION 1: HERO AGENCY BANNER (Matching Reference UI/UX)
          ==================================================================== */}
      <section className="editorial-hero">
        {/* Subtle Ambient Red Atmospheric Background */}
        <div className="editorial-hero-bg" />
        <div className="editorial-hero-glow" />

        <div className="editorial-hero-container">
          {/* Top Info Bar */}
          <div className="hero-top-bar">
            <div>
              <div className="hero-source-tag">SOURCE OF BOLD SOUND /</div>
              <div className="hero-source-sub">
                Acoustic purity, vintage analog summing & Dolby Atmos® 7.1.4 certified facility.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e62a34', boxShadow: '0 0 10px #e62a34' }} />
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                MUMBAI • GLOBAL
              </span>
            </div>
          </div>

          {/* Hero Middle & Bottom Grid */}
          <div className="hero-middle-grid">
            {/* Left Floating Cards (85% stat + Reload sound widget) */}
            <div className="hero-floating-cards">
              {/* White Stat Card */}
              <div className="stat-pill-card">
                <div className="stat-pill-header">
                  <span style={{ color: '#ba1b23' }}>✳</span>
                  <span>RECORD IMPACT</span>
                </div>
                <div className="stat-pill-number">85%</div>
                <div className="stat-pill-desc">Top 10 streaming & label placement ratio</div>
              </div>

              {/* Dark Glassmorphic Interactive Sound Card */}
              <div className="action-glass-pill" onClick={handleToggleTeaser}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: isPlayingTeaser ? '#ba1b23' : 'rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {isPlayingTeaser ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                    {isPlayingTeaser ? 'Playing Soundscape' : 'Reload Your Sound'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
                    Live procedural synth preview
                  </div>
                </div>
              </div>
            </div>

            {/* Right Agency Typography */}
            <div className="hero-agency-col">
              <Link to="/services" className="hero-arrow-btn" aria-label="Explore Production Services">
                <ArrowUpRight size={22} />
              </Link>
              <h1 className="hero-agency-title">
                CREATIVE <br />
                MUSIC PRODUCTION <br />
                AGENCY
              </h1>
              <p className="hero-agency-sub">
                One-of-one sound identities that command attention. From raw analog tracking to spatial Dolby Atmos® immersion.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {['DOLBY ATMOS® 7.1.4', 'SSL 4000E SUMMING', 'APPLE DIGITAL MASTERS'].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '999px',
                      color: 'rgba(255,255,255,0.85)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: EDITORIAL STATEMENT & LATEST PROJECTS
          ==================================================================== */}
      <section className="editorial-statement-sec">
        <div className="statement-container">
          <div className="statement-asterisk">✳</div>

          <h2 className="editorial-headline">
            MALHAAR DESIGNS MAKE <br />
            SOUND SYSTEMS{' '}
            <span className="inline-capsule">
              <span className="inline-capsule-bars">
                <span style={{ height: '14px' }} />
                <span style={{ height: '24px' }} />
                <span style={{ height: '18px' }} />
                <span style={{ height: '12px' }} />
              </span>
            </span>{' '}
            THAT <br />
            <span className="dimmed">REDEFINE MODERN</span> <br />
            SONIC CULTURE
          </h2>

          <p className="statement-subcopy">
            Malhaar crafts records and acoustic identities that cut through commercial noise, challenge genres, and awaken deep human emotion. We combine Indian classical soul, analog hardware, and spatial mixing all in one creative sanctuary.
          </p>

          {/* Projects Layout with Vertical Left Label */}
          <div className="projects-layout-row">
            <div className="vertical-label-col">
              <span>OUR</span>
              <span>LATEST</span>
              <span style={{ color: '#ba1b23' }}>PROJECTS</span>
            </div>

            <div className="projects-cards-grid">
              {FEATURED_RELEASES.slice(0, 3).map((track, idx) => (
                <Link to="/releases" key={track.id || idx} className="project-card">
                  <div
                    className="project-card-image"
                    style={{
                      background: track.coverGradient || '#1a0508',
                      backgroundImage: idx === 0
                        ? `linear-gradient(180deg, rgba(186,27,35,0.4) 0%, #0c0204 100%), url('/images/studio-live-room.jpg')`
                        : idx === 1
                        ? `linear-gradient(180deg, rgba(14,8,12,0.4) 0%, #0c0204 100%), url('/images/studio-vocal-booth.jpg')`
                        : `linear-gradient(180deg, rgba(186,27,35,0.3) 0%, #0c0204 100%), url('/images/studio-control-room.jpg')`
                    }}
                  />
                  <div className="project-card-overlay" />
                  <div className="project-card-content">
                    <div className="project-tag">{track.genre} • {track.year}</div>
                    <div className="project-title">{track.title}</div>
                    <div className="project-artist">{track.artist}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: "EVERYTHING YOUR RECORD NEEDS TO GROW" (Deck with Popped-out Card)
          ==================================================================== */}
      <section className="services-deck-sec">
        <div className="services-deck-container">
          <div className="services-deck-header">
            <h2 className="services-deck-title">
              <span className="gray">EVERYTHING YOUR</span> <br />
              RECORD NEEDS TO GROW
            </h2>
            <p className="services-deck-sub">
              Malhaar offers end-to-end music production, analog tracking, spatial audio mixing, and commercial sound design — engineered to cut through noise and deliver undeniable sonic impact.
            </p>
          </div>

          {/* 4 Cards Deck with Popped-out Elevated Centerpiece */}
          <div className="deck-cards-row">
            {/* Card 1: Production Strategy */}
            <Link to="/services" className="deck-card">
              <div>
                <div className="deck-card-category">01 / PRODUCTION STRATEGY</div>
                <div className="deck-card-title">Songwriting & Arrangement</div>
                <div className="deck-card-desc">
                  Harmonic motif mapping, live acoustic instrumentation, and beat architecture.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#ba1b23', fontWeight: 700 }}>EXPLORE SUITE</span>
                <ArrowUpRight size={16} color="#ba1b23" />
              </div>
            </Link>

            {/* Card 2: THE STANDOUT ELEVATED POPPED-OUT CENTERPIECE (Dolby Atmos Spatial Mixing) */}
            <Link to="/services" className="deck-card elevated-card">
              <div>
                <div className="deck-card-category" style={{ color: '#ffffff', opacity: 0.9 }}>
                  02 / SPATIAL AUDIO IMMERSION
                </div>
                <div className="deck-card-title" style={{ fontSize: '1.45rem' }}>
                  Dolby Atmos® 7.1.4
                </div>
                <div className="deck-card-desc" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Certified immersive mixing environment. Elevating stereo stems into three-dimensional acoustic space with pinpoint object rendering.
                </div>
              </div>

              {/* Glowing Centerpiece Orb / Canister Visual */}
              <div className="deck-card-visual">
                <div className="deck-orb-glow" />
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #ff4b55 0%, #ba1b23 60%, #4a080d 100%)',
                    border: '2px solid rgba(255,255,255,0.4)',
                    boxShadow: '0 0 35px rgba(230, 42, 52, 0.8), inset 0 0 20px rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <Disc size={36} className="disc-spin" />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 800, letterSpacing: '0.04em' }}>
                  FEATURED SUITE
                </span>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ba1b23' }}>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>

            {/* Card 3: Creative Direction / Analog Tracking */}
            <Link to="/services" className="deck-card">
              <div>
                <div className="deck-card-category">03 / ANALOG TRACKING</div>
                <div className="deck-card-title">SSL 4000E Console</div>
                <div className="deck-card-desc">
                  Solid-state British summing, vintage Telefunken microphones, and Tube-Tech optical compression.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#ba1b23', fontWeight: 700 }}>EXPLORE SUITE</span>
                <ArrowUpRight size={16} color="#ba1b23" />
              </div>
            </Link>

            {/* Card 4: Art Direction / Master Engineering */}
            <Link to="/services" className="deck-card">
              <div>
                <div className="deck-card-category">04 / AUDIO MASTERING</div>
                <div className="deck-card-title">Apple Digital Masters</div>
                <div className="deck-card-desc">
                  MFiT certified loudness optimization, vinyl DMM pre-masters, and 192kHz Prism Sound conversion.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#ba1b23', fontWeight: 700 }}>EXPLORE SUITE</span>
                <ArrowUpRight size={16} color="#ba1b23" />
              </div>
            </Link>
          </div>

          {/* Interactive Web Audio Synthesizer Player */}
          <div style={{ marginTop: '5rem', background: '#0a0204', borderRadius: '24px', padding: '2rem 1.5rem', color: '#ffffff' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: '#e62a34', textTransform: 'uppercase', fontWeight: 700 }}>
                LIVE WEB AUDIO ENGINE
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.35rem' }}>
                Interactive Audio Showreel & Visualizer
              </h3>
            </div>
            <AudioPlayer />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: VISION STATEMENT & 3-COLUMN EDITORIAL GRID
          ==================================================================== */}
      <section className="editorial-vision-sec">
        <div className="vision-container">
          <h2 className="vision-headline">
            WE TURN IDEAS <br />
            INTO SONIC{' '}
            <span className="inline-capsule">
              <span className="inline-capsule-bars">
                <span style={{ height: '22px' }} />
                <span style={{ height: '12px' }} />
                <span style={{ height: '18px' }} />
              </span>
            </span>{' '}
            STATEMENTS <br />
            <span className="dimmed">FROM VISION TO DELIVERY —</span> <br />
            <span className="dimmed">IMPACT THAT LASTS</span>
          </h2>

          <div className="vision-grid">
            {/* Card 1: Artist Portrait in Red Light */}
            <div className="vision-card-1">
              <div className="vision-card-image-box">
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(180deg, rgba(186, 27, 35, 0.4) 0%, rgba(12, 3, 5, 0.9) 100%), url('/images/studio-vocal-booth.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'contrast(1.2)'
                  }}
                />
              </div>
              <div className="vision-card-caption">
                <span className="asterisk">✳</span>
                <span>
                  Acoustic design, stem mixing, and analog mastering engineered to outlast temporary industry trends. From raw acoustic motif to global platform delivery.
                </span>
              </div>
            </div>

            {/* Card 2: Saturated Red Glow Mesh Card */}
            <Link to="/studios" className="vision-card-2">
              <div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.85, fontWeight: 700, marginBottom: '1.25rem' }}>
                  THE PHYSICAL SANCTUARY
                </div>
                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-0.02em', maxWidth: '280px' }}>
                  Explore our 4 dedicated studio suites & gear arsenal
                </h3>
              </div>
              <div className="vision-card-2-pill-btn">
                <ArrowRight size={20} />
              </div>
            </Link>

            {/* Card 3: Fashion/Producer Silhouette with Pill CTA */}
            <div className="vision-card-3">
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(180deg, rgba(12, 3, 5, 0.2) 0%, rgba(10, 2, 4, 0.9) 100%), url('/images/studio-live-room.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'contrast(1.2) brightness(0.9)'
                }}
              />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Link to="/contact" className="vision-card-3-btn">
                  <span>BOOK SESSION NOW</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: CLIENT TESTIMONIALS & BOOKING CTA
          ==================================================================== */}
      <Testimonials />

      <BookingCTA
        title="READY TO ELEVATE YOUR RECORD?"
        subtitle="Reserve time in Studio A, B, or our Dolby Atmos suite. Our multi-platinum producers and acoustic engineers are ready."
      />
    </div>
  );
}
