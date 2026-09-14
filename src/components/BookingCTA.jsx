import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, Disc, Headphones } from 'lucide-react';

export default function BookingCTA({
  title = "READY TO TRANSFORM YOUR IDEA INTO REALITY?",
  subtitle = "From advertisements and music videos to music productions, artistic initiatives, and musical events—we bring every project to life with care, passion, and attention to detail."
}) {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            position: 'relative',
            padding: '4rem 2rem',
            textAlign: 'center',
            borderRadius: '24px',
            border: '1px solid rgba(186, 27, 35, 0.35)',
            background: 'linear-gradient(135deg, rgba(26, 12, 14, 0.85) 0%, rgba(12, 12, 16, 0.95) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(186, 27, 35, 0.2)',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Red Flare */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(186, 27, 35, 0.25) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '750px', marginInline: 'auto' }}>
            <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <div className="section-tag" style={{ background: 'rgba(186, 27, 35, 0.2)' }}>
                <Sparkles size={14} />
                <span>EXPERIENCE MALHAAR SOUND</span>
              </div>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: '#FFFFFF'
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              {subtitle}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.25rem'
              }}
            >
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '1rem',
                  borderRadius: '14px',
                  textDecoration: 'none'
                }}
              >
                <Calendar size={18} />
                <span>Reserve Studio Session</span>
              </Link>

              <Link
                to="/services"
                className="btn btn-secondary"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  borderRadius: '14px',
                  textDecoration: 'none'
                }}
              >
                <Headphones size={18} />
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
