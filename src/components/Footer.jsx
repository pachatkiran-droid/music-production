import React from 'react';
import { ArrowUp, Music, Disc, Heart, Mail, Radio } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#040406',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo variant="full" color="white" size="md" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              A world-class music production company, Dolby Atmos® spatial mixing facility, and analog recording sanctuary. Inspired by the soul of Raga Malhar.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <Music size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://soundcloud.com"
                target="_blank"
                rel="noreferrer"
                aria-label="SoundCloud"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <Radio size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }}>
                  Studio Overview
                </a>
              </li>
              <li>
                <a href="#showreel" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Audio Showreel
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  The Malhar Philosophy
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Services & Suites
                </a>
              </li>
              <li>
                <a href="#studios" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Gear Arsenal
                </a>
              </li>
              <li>
                <a href="#releases" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Featured Discography
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              CAPABILITIES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Dolby Atmos® 7.1.4 Mixing</li>
              <li>SSL 4000E Analog Summing</li>
              <li>Apple Digital Masters (MFiT)</li>
              <li>Orchestral Live Tracking</li>
              <li>Film & OTT Soundtrack Scoring</li>
              <li>Sonic Branding Mnemonics</li>
            </ul>
          </div>

          {/* Newsletter / Producer Dispatch */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              STUDIO DISPATCH
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Subscribe to receive studio opening slot announcements, sample pack drops, and behind-the-scenes mixing breakdowns.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Malhar Productions Studio Dispatch!'); }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '0.7rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '0.7rem 1rem', fontSize: '0.85rem' }}
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>MALHAAR PRODUCTIONS</strong>. All Rights Reserved. (Also known as Malhar Productions).
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Studio Rental</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
