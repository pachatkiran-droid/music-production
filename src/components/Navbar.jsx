import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onBookSessionClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
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
        backgroundColor: isScrolled ? 'rgba(10, 2, 4, 0.94)' : 'rgba(12, 3, 5, 0.82)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(186, 27, 35, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 15px 35px rgba(0, 0, 0, 0.8), 0 0 30px rgba(186, 27, 35, 0.2)' : 'none',
        padding: isScrolled ? '0.75rem 0' : '1.15rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo & Editorial Origin Tag */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }} aria-label="Malhar Productions Home">
          <Logo variant="full" color="red" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  padding: '0.4rem 0'
                }}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '18px',
                      height: '2.5px',
                      backgroundColor: 'var(--primary-red)',
                      borderRadius: '999px',
                      boxShadow: '0 0 10px #e62a34'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleBookClick}
            className="btn nav-cta-btn"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: '#FFFFFF',
              color: '#0e0305',
              borderRadius: '999px',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
            }}
          >
            <span>Book a Suite</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: '10px',
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
            backgroundColor: 'rgba(12, 3, 5, 0.98)',
            backdropFilter: 'blur(25px)',
            borderBottom: '1px solid rgba(186, 27, 35, 0.35)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.9)'
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
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#e62a34' : '#FFFFFF',
                  textDecoration: 'none',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.name}</span>
                {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e62a34', boxShadow: '0 0 8px #e62a34' }} />}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleBookClick();
            }}
            className="btn btn-primary"
            style={{ marginTop: '1rem', width: '100%', borderRadius: '999px', padding: '0.85rem' }}
          >
            <span>Book a Studio Suite</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
