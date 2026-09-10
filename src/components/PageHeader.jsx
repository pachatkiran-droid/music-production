import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function PageHeader({ badge, title, highlight, subtitle }) {
  return (
    <div
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 20%, rgba(186, 27, 35, 0.45) 0%, rgba(14, 3, 6, 0.95) 70%, #0a0204 100%)',
        borderBottom: '1px solid rgba(186, 27, 35, 0.3)',
        marginBottom: '2rem'
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(230, 42, 52, 0.35) 0%, transparent 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
        {/* Asterisk + Breadcrumb Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <span style={{ color: '#ba1b23', fontSize: '1.4rem', lineHeight: 1 }}>✳</span>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.55)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.3rem 0.75rem',
              borderRadius: '999px'
            }}
          >
            <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
              HOME
            </Link>
            <ChevronRight size={12} color="rgba(255, 255, 255, 0.4)" />
            <span style={{ color: '#e62a34' }}>{badge}</span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-0.025em',
            marginBottom: '1.25rem',
            lineHeight: 1.1,
            color: '#ffffff'
          }}
        >
          {title} {highlight && <span style={{ color: '#e62a34' }}>{highlight}</span>}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.12rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '680px',
              marginInline: 'auto',
              lineHeight: 1.7,
              fontWeight: 400
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
