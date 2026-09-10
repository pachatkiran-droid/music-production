import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ badge, title, highlight, subtitle, icon: Icon }) {
  return (
    <div
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(186, 27, 35, 0.18) 0%, rgba(6, 6, 8, 0.95) 75%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        marginBottom: '2rem'
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          maxWidth: '800px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(186, 27, 35, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
            marginBottom: '1.25rem',
            fontFamily: "'Outfit', sans-serif"
          }}
        >
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--accent-scarlet)', fontWeight: 500 }}>{badge}</span>
        </div>

        {/* Badge */}
        {badge && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <div className="section-tag" style={{ background: 'rgba(186, 27, 35, 0.15)' }}>
              {Icon && <Icon size={14} />}
              <span>{badge}</span>
            </div>
          </div>
        )}

        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '1.25rem',
            maxWidth: '900px',
            marginInline: 'auto',
            lineHeight: 1.15
          }}
        >
          {title} {highlight && <span className="highlight">{highlight}</span>}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              color: 'var(--text-muted)',
              maxWidth: '720px',
              marginInline: 'auto',
              lineHeight: 1.7
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
