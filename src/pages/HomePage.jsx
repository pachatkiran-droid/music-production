import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Waves,
  Disc3,
  ShieldCheck,
  Sparkles,
  Award,
  ArrowUpRight,
  ArrowRight,
  Play,
  Pause,
  Sliders,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Calendar,
  Headphones,
  Radio,
  Music2
} from 'lucide-react';
import Logo from '../components/Logo';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import AudioPlayer from '../components/AudioPlayer';
import { studioAudioEngine } from '../utils/audioEngine';
import { SHOWREEL_TRACKS } from '../data/tracks';

export default function HomePage() {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('oYmU8Av_e84');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const videoIframeRef = useRef(null);

  const stats = [
    { number: '250+', label: 'Mastered Releases', desc: 'Across Spotify, Apple Music & Vinyl' },
    { number: '15+', label: 'Platinum & Gold Hits', desc: 'Independent charts & major label releases' },
    { number: '120M+', label: 'Global Streams', desc: 'Worldwide listener reach' },
    { number: '4', label: 'Dedicated Suites', desc: 'Acoustically isolated control & live rooms' }
  ];

  const pillars = [
    {
      icon: Waves,
      title: 'Acoustic Purity',
      description: 'Engineered with floating floors, hardwood diffusers, and bass traps to achieve linear frequency response down to 20Hz.'
    },
    {
      icon: Disc3,
      title: 'Analog & Modern Hybrid',
      description: 'Solid-state SSL summing consoles, vintage Neve preamps, and Tube-Tech optical compression paired with ultra-high resolution converters.'
    },
    {
      icon: Sparkles,
      title: 'Spatial Immersive Audio',
      description: 'Dolby Atmos® 7.1.4 certified mixing environment that elevates music from flat stereo into three-dimensional acoustic space.'
    },
    {
      icon: ShieldCheck,
      title: 'Artist-First Integrity',
      description: 'We believe technology serves emotion. Every harmonic saturation choice and dynamic curve is sculpted in deep collaboration with the artist.'
    }
  ];

  const suites = [
    {
      step: '01',
      tag: 'HYBRID CONTROL',
      title: 'SSL 4000E Analog Summing',
      desc: 'Solid State Logic summing with vintage Neve preamplification and Tube-Tech optical compression for warm, radio-ready stem separation.',
      image: '/images/studio-control-room.jpg',
      link: '/studios'
    },
    {
      step: '02',
      tag: 'IMMERSIVE AUDIO',
      title: 'Dolby Atmos® 7.1.4 Suite',
      desc: 'Binaural calibration and 11-channel Genelec SAM object rendering, immersing listeners in three-dimensional acoustic depth.',
      image: '/images/studio-atmos-suite.jpg',
      link: '/services'
    },
    {
      step: '03',
      tag: 'LIVE SANCTUARY',
      title: 'Acoustic Live Hall',
      desc: 'Floating concrete floors and 18-foot timber diffusers capturing grand piano, sitar, strings, and live drum ensembles with 1.4s natural decay.',
      image: '/images/heritage-sitar-studio.jpg',
      link: '/studios'
    },
    {
      step: '04',
      tag: 'LINEAR MASTERING',
      title: 'Precision Analog Mastering',
      desc: 'Apple Digital Masters certified signal chains with Prism Sound converters, surgical M/S EQ, and Direct Metal Mastering for vinyl.',
      image: '/images/studio-console-analog.jpg',
      link: '/services'
    }
  ];

  const openVideo = (id = 'oYmU8Av_e84') => {
    setCurrentVideoId(id);
    setShowVideoModal(true);
  };

  const handleToggleTeaser = () => {
    if (isPlayingTeaser) {
      studioAudioEngine.stop();
      setIsPlayingTeaser(false);
    } else {
      studioAudioEngine.playTrack(SHOWREEL_TRACKS[0]);
      setIsPlayingTeaser(true);
    }
  };

  const toggleVideoSound = () => {
    const nextMuted = !isVideoMuted;
    setIsVideoMuted(nextMuted);
    const command = nextMuted ? 'mute' : 'unMute';
    try {
      videoIframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: '' }),
        '*'
      );
    } catch (err) {
      console.warn('Could not postMessage to video iframe', err);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <div className="page-wrapper" style={{ width: '100%', minHeight: '100vh', backgroundColor: '#060608', color: 'var(--text-main)' }}>
      {/* ====================================================================
          1. HERO AGENCY BANNER WITH YOUTUBE VIDEO BANNER (Matching About Vibe)
          ==================================================================== */}
      <section
        style={{
          position: 'relative',
          minHeight: '94vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#060608',
          paddingTop: '8.5rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid rgba(186, 27, 35, 0.25)'
        }}
      >
        {/* Full-Bleed YouTube Video Banner Background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.38, transform: 'scale(1.04)' }}>
          <iframe
            ref={videoIframeRef}
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: 0,
              pointerEvents: 'none'
            }}
            src="https://www.youtube-nocookie.com/embed/oYmU8Av_e84?autoplay=1&mute=1&loop=1&playlist=oYmU8Av_e84&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Malhaar Productions Video Banner"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Ambient Dark Ruby Vignette & Radial Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 30%, rgba(186, 27, 35, 0.38) 0%, rgba(12, 3, 5, 0.88) 65%, #060608 100%)',
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(230, 42, 52, 0.25) 0%, transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '75vh' }}>
          {/* Top Control Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.25rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-scarlet)' }}>
                SOURCE OF BOLD SOUND /
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '0.2rem' }}>
                Acoustic purity, vintage analog summing & Dolby Atmos® 7.1.4 certified facility in Mumbai.
              </div>
            </div>

            {/* Interactive Video Sound & Cinema Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={toggleVideoSound}
                className="btn btn-secondary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.75rem', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                title={isVideoMuted ? 'Unmute Video Reel' : 'Mute Video Reel'}
              >
                {isVideoMuted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--accent-scarlet)" />}
                <span>{isVideoMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
              </button>

              <button
                type="button"
                onClick={() => openVideo('oYmU8Av_e84')}
                className="btn btn-secondary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.75rem', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              >
                <Maximize2 size={13} />
                <span>CINEMA MODE</span>
              </button>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(186, 27, 35, 0.15)',
                  border: '1px solid rgba(186, 27, 35, 0.3)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#FFFFFF'
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-scarlet)', boxShadow: '0 0 8px var(--accent-scarlet)' }} />
                <span>MUMBAI • GLOBAL</span>
              </div>
            </div>
          </div>

          {/* Main Hero Statement */}
          <div style={{ margin: 'auto 0', padding: '2rem 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div className="section-tag">
                <Sparkles size={14} />
                <span>GLOBAL MUSIC PRODUCTION & ANALOG ARCHITECTURE</span>
              </div>
            </div>

            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(2.6rem, 6.5vw, 5.8rem)',
                fontWeight: 900,
                lineHeight: 1.02,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: '1.5rem',
                color: '#FFFFFF'
              }}
            >
              CREATIVE <br />
              <span>MUSIC PRODUCTION</span> <br />
              <span className="highlight" style={{ color: 'var(--primary-red)', textShadow: '0 0 35px rgba(186, 27, 35, 0.6)' }}>
                AGENCY
              </span>
            </h1>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                color: 'var(--text-muted)',
                maxWidth: '650px',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              One-of-one sound identities that command international attention. From raw acoustic motif and analog tape tracking to 7.1.4 Dolby Atmos® spatial immersion.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                <Calendar size={18} />
                <span>Book Studio Session</span>
              </Link>

              <Link to="/studios" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                <Headphones size={18} />
                <span>Explore Studio Suites</span>
              </Link>

              {/* Reload Sound Teaser */}
              <button
                type="button"
                onClick={handleToggleTeaser}
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '12px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-red)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {isPlayingTeaser ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: '#FFFFFF' }}>
                    {isPlayingTeaser ? 'PAUSE PREVIEW' : 'RELOAD YOUR SOUND'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Live procedural synth audio</div>
                </div>
              </button>
            </div>
          </div>

          {/* Lower Hero Capability Badges */}
          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ fontSize: '1.75rem', fontFamily: "'Cinzel', serif", fontWeight: 800, color: 'var(--primary-red)' }}>85%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3, maxWidth: '140px' }}>
                  Top 10 streaming & label placement ratio
                </div>
              </div>

              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ fontSize: '1.75rem', fontFamily: "'Cinzel', serif", fontWeight: 800, color: '#FFFFFF' }}>120M+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3, maxWidth: '140px' }}>
                  Worldwide listener reach on Spotify & Apple
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['DOLBY ATMOS® 7.1.4', 'SSL 4000E SUMMING', 'APPLE DIGITAL MASTERS'].map((pill, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'rgba(255, 255, 255, 0.75)'
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. THE MALHAR STORY & PHILOSOPHY (Exact Vibe & System of About.jsx)
          ==================================================================== */}
      <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Background Glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '-10%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(186, 27, 35, 0.14) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container">
          {/* Top Tag & Title */}
          <div className="section-header">
            <div className="section-tag">
              <Compass size={14} />
              <span>The Malhar Story</span>
            </div>
            <h2 className="section-title">
              INSPIRED BY SOUND, <span className="highlight">DEFINED BY MASTERY</span>
            </h2>
            <p className="section-subtitle">
              In Indian classical tradition, <em>Malhar</em> is the raga possessing the transformative power to summon torrential monsoons. We carry that elemental, soul-stirring energy into modern music production.
            </p>
          </div>

          {/* Story Grid: Story & Visual Collage */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
              marginBottom: '5rem'
            }}
          >
            {/* Story Narrative */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Logo variant="badge" size="sm" />
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>MALHAAR PRODUCTIONS</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                    Sonic Architecture Since 2018
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Founded by visionary producers and certified audio engineers, <strong>Malhar Productions</strong> bridges the sacred heritage of classical acoustic instrumentation with the relentless pulse of contemporary global pop, hip-hop, and cinematic scoring.
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whether you are an independent singer-songwriter tracking your debut vocal or a film studio requiring synchronized 7.1.4 Dolby Atmos orchestral mixes, our facility provides the exact acoustic environment and creative guidance required to elevate raw talent into timeless records.
              </p>

              {/* Core Values List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {pillars.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                        padding: '1.1rem',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <div
                        style={{
                          padding: '0.65rem',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(186, 27, 35, 0.16)',
                          color: 'var(--accent-scarlet)',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                          {pillar.title}
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Showcase Card with Real Live Room Image */}
            <div style={{ position: 'relative' }}>
              <div
                className="glass-card"
                style={{
                  overflow: 'hidden',
                  borderRadius: '24px',
                  border: '1px solid rgba(186, 27, 35, 0.35)',
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(186, 27, 35, 0.25)'
                }}
              >
                <img
                  src="/images/studio-live-room.jpg"
                  alt="Malhar Productions Live Acoustic Hall"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    padding: '1.85rem',
                    background: 'linear-gradient(180deg, rgba(18, 18, 23, 0.92) 0%, rgba(10, 10, 14, 0.98) 100%)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                      Live Acoustic Hall
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Steinway & Sons Model B</span>
                  </div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    The Resonance of Natural Timber
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    Engineered with 18-foot vaulted ceilings to produce a rich natural decay time of 1.4 seconds—ideal for orchestral strings, brass, and intimate grand piano tracking.
                  </p>
                </div>
              </div>

              {/* Floating Accolade Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '20px',
                  backgroundColor: 'rgba(186, 27, 35, 0.95)',
                  color: '#FFFFFF',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  boxShadow: '0 10px 25px rgba(186, 27, 35, 0.5)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Award size={16} />
                <span>Certified Acoustic Standard</span>
              </div>
            </div>
          </div>

          {/* Animated Statistics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.2rem 1.5rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(22, 22, 28, 0.7) 0%, rgba(14, 14, 18, 0.95) 100%)'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    fontWeight: 900,
                    color: 'var(--primary-red)',
                    marginBottom: '0.5rem',
                    textShadow: '0 0 20px rgba(186, 27, 35, 0.4)'
                  }}
                >
                  {item.number}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.35rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. PRODUCTION SUITES & SONIC ARCHITECTURE
          ==================================================================== */}
      <section id="suites" className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.65)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Sliders size={14} />
              <span>Dedicated Recording Suites</span>
            </div>
            <h2 className="section-title">
              PURPOSE-BUILT <span className="highlight">STUDIO SUITES</span>
            </h2>
            <p className="section-subtitle">
              Every room at Malhaar Productions is decoupled on floating concrete and tuned for acoustic transparency. Discover the environment tailored to your session.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '2rem'
            }}
          >
            {suites.map((suite, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={suite.image}
                    alt={suite.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6, 6, 8, 0.2) 0%, rgba(10, 10, 14, 0.9) 100%)' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(186, 27, 35, 0.85)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: '#FFFFFF'
                    }}
                  >
                    {suite.tag}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {suite.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {suite.desc}
                    </p>
                  </div>

                  <Link
                    to={suite.link}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      borderRadius: '10px'
                    }}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. INTERACTIVE SHOWREEL & CERTIFIED OUTPUTS
          ==================================================================== */}
      <AudioPlayer />

      {/* ====================================================================
          5. CLIENT TESTIMONIALS & VERIFIED REVIEWS
          ==================================================================== */}
      <Testimonials />

      {/* ====================================================================
          6. STUDIO DISPATCH & BOOKING CALL TO ACTION
          ==================================================================== */}
      <section id="dispatch" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              borderRadius: '24px',
              border: '1px solid rgba(186, 27, 35, 0.35)',
              background: 'linear-gradient(135deg, rgba(28, 12, 16, 0.9) 0%, rgba(12, 12, 18, 0.98) 100%)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(186, 27, 35, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div>
                <div className="section-tag" style={{ background: 'rgba(186, 27, 35, 0.25)' }}>
                  <Music2 size={14} />
                  <span>Stay In The Loop / Studio Dispatch</span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    lineHeight: 1.15,
                    color: '#FFFFFF',
                    marginBottom: '1rem'
                  }}
                >
                  STAY CURIOUS. <br />
                  <span className="highlight" style={{ color: 'var(--primary-red)' }}>MAKE RECORDS THAT LAST.</span>
                </h2>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  Subscribe to receive open calendar slots in Studio A, stem mixing walkthroughs, and early notice on masterclasses.
                </p>
              </div>

              <div>
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '999px',
                      padding: '0.35rem 0.45rem 0.35rem 1.25rem'
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="ENTER YOUR EMAIL ADDRESS"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.88rem',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        flex: 1
                      }}
                    />

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        padding: '0.65rem 1.4rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      <span>Join</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-dim)', padding: '0 0.5rem' }}>
                    <span>NEW RELEASES, MASTERCLASSES & GEAR UPDATES</span>
                    {subscribed && <span style={{ color: 'var(--accent-scarlet)', fontWeight: 700 }}>✓ SUBSCRIBED!</span>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title="READY TO ELEVATE YOUR RECORD?"
        subtitle="Reserve time in Studio A, B, or our Dolby Atmos suite. Our multi-platinum producers and acoustic engineers are ready."
      />

      {/* Cinema Mode Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-[#040102]/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4 sm:p-8"
          style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: 'rgba(4, 1, 2, 0.95)', backdropFilter: 'blur(20px)' }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1080px',
              backgroundColor: '#0d0406',
              border: '1px solid rgba(186, 27, 35, 0.45)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={() => setShowVideoModal(false)}
              aria-label="Close cinema modal"
            >
              <X size={20} />
            </button>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title="Malhaar Productions Video Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}