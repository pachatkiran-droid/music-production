import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onBookSessionClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Studio & Gear', path: '/studios' },
    { name: 'Discography', path: '/releases' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookClick = () => {
    if (onBookSessionClick) {
      onBookSessionClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <header
      className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(8, 8, 10, 0.94)' : 'rgba(8, 8, 10, 0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.6)' : 'none',
        padding: isScrolled ? '0.75rem 0' : '1.1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Malhar Productions Home">
          <Logo variant="full" color="red" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  padding: '0.35rem 0'
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--primary-red)',
                      borderRadius: '2px',
                      boxShadow: '0 0 10px var(--primary-red)'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleBookClick}
            className="btn btn-primary nav-cta-btn"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.85rem'
            }}
          >
            <Calendar size={15} />
            <span>Book Session</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(10, 10, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-accent)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-scarlet)' : '#FFFFFF',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.name}</span>
                {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-red)' }} />}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleBookClick();
            }}
            className="btn btn-primary"
            style={{ marginTop: '1rem', width: '100%' }}
          >
            <Calendar size={18} />
            <span>Book Studio Session</span>
          </button>
        </div>
      )}
    </header>
  );
}
