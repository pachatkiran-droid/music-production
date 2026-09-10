import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Mic, Sliders, Volume2, Music, Check, ArrowUpRight } from 'lucide-react';
import { STUDIOS_DATA, GEAR_CATEGORIES } from '../data/studios';

export default function StudioGear({ onBookSession }) {
  const navigate = useNavigate();
  const [activeRoomId, setActiveRoomId] = useState('studio-a');
  const [activeGearCategory, setActiveGearCategory] = useState(0);

  const activeRoom = STUDIOS_DATA.find(r => r.id === activeRoomId) || STUDIOS_DATA[0];
  const handleBook = onBookSession || (() => navigate('/contact'));

  return (
    <section id="studios" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Studio Spaces & Outboard Gear</span>
          </div>
          <h2 className="section-title">
            THE MALHAAR <span className="highlight">ARSENAL</span>
          </h2>
          <p className="section-subtitle">
            A harmonious fusion of legendary analog hardware, custom acoustic architecture, and state-of-the-art digital precision. Explore our purpose-built recording environments.
          </p>
        </div>

        {/* Studio Rooms Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {STUDIOS_DATA.map((room) => {
            const isSelected = room.id === activeRoom.id;
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.8rem 1.8rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: isSelected ? '1px solid var(--primary-red)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isSelected ? 'rgba(186, 27, 35, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                  boxShadow: isSelected ? '0 4px 20px rgba(186, 27, 35, 0.35)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {room.name.split(':')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Studio Room Showcase Card */}
        <div
          className="glass-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            padding: '2rem',
            alignItems: 'center',
            marginBottom: '5rem',
            border: '1px solid rgba(186, 27, 35, 0.3)'
          }}
        >
          {/* Room Image Display */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
            <img
              src={activeRoom.image}
              alt={activeRoom.name}
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '16px'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(0deg, rgba(6, 6, 8, 0.95) 0%, transparent 100%)',
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              {activeRoom.highlights.map((h, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    backgroundColor: 'rgba(186, 27, 35, 0.85)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '20px',
                    letterSpacing: '0.04em'
                  }}
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>

          {/* Room Specs & Details */}
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.4rem' }}>
              {activeRoom.tagline}
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
              {activeRoom.name}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activeRoom.description}
            </p>

            {/* Specifications Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {activeRoom.specs.map((spec, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.9rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                    {spec.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleBook}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.75rem' }}
            >
              <span>Book Session in {activeRoom.name.split(':')[0]}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Technical Gear Arsenal Breakdown */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.5rem' }}>
              COMPLETE GEAR SPECIFICATIONS
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Tested, maintained, and calibrated by in-house acoustic technicians.
            </p>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap'
            }}
          >
            {GEAR_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGearCategory(idx)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  padding: '0.6rem 1.4rem',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  border: activeGearCategory === idx ? '1px solid var(--primary-red)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: activeGearCategory === idx ? 'var(--primary-red)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeGearCategory === idx ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Gear List Cards */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(14, 14, 18, 0.65)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {GEAR_CATEGORIES[activeGearCategory].items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-red)',
                      boxShadow: '0 0 6px var(--primary-red)',
                      flexShrink: 0
                    }}
                  />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
