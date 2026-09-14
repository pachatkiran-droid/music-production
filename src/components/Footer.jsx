import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0a0204',
        borderTop: '1px solid rgba(186, 27, 35, 0.3)',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        position: 'relative',
        color: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '250px',
          background: 'radial-gradient(ellipse at center, rgba(186, 27, 35, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Artistic Headline & Asterisk */}
        <div style={{ marginBottom: '4.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '3.5rem' }}>
          <div style={{ color: '#ba1b23', fontSize: '1.8rem', lineHeight: 1, marginBottom: '1rem' }}>✳</div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              maxWidth: '850px',
              color: '#ffffff'
            }}
          >
            TRANSFORMING IDEAS INTO <br />
            <span style={{ color: '#ba1b23' }}>MEANINGFUL EXPERIENCES.</span>
          </h2>
        </div>

        {/* 4-Column Directory Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Malhar Productions Home">
                <Logo variant="full" color="white" size="md" />
              </Link>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              A creative platform dedicated to conceptualising and producing advertisements, music videos, music productions, artistic initiatives, and musical events.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {['Spotify', 'Instagram', 'YouTube', 'SoundCloud'].map((network, idx) => (
                <a
                  key={idx}
                  href={`https://${network.toLowerCase()}.com`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={network}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {network[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', fontWeight: 700, marginBottom: '1.5rem' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { name: 'Home', to: '/' },
                { name: 'About Us', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'Contact', to: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    style={{
                      color: link.to === '/contact' ? '#e62a34' : 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: link.to === '/contact' ? 700 : 500,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', fontWeight: 700, marginBottom: '1.5rem' }}>
              CAPABILITIES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li>Advertisements & Commercials</li>
              <li>Music Videos & Visual Storytelling</li>
              <li>Music Productions & Sound Design</li>
              <li>Artistic Initiatives & Creative Labs</li>
              <li>Musical Events & Stage Productions</li>
              <li>Thoughtful Concept to Realization</li>
            </ul>
          </div>

          {/* Studio Dispatch Newsletter */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', fontWeight: 700, marginBottom: '1.5rem' }}>
              STUDIO DISPATCH
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Subscribe for open session slots, mixing stem breakdowns, and production masterclasses.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Malhaar Productions Studio Dispatch!'); }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '999px',
                  padding: '0.3rem 0.4rem 0.3rem 1rem'
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.82rem',
                    flex: 1
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-red)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '0.55rem 1rem',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Join</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>MALHAAR PRODUCTIONS</strong>. All Rights Reserved. Mumbai, India.
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
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
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
