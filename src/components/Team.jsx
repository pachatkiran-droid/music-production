import React from 'react';
import { Users, Award, Headphones, Disc } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';

export default function Team() {
  return (
    <section id="team" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Users size={14} />
            <span>Producers & Engineers</span>
          </div>
          <h2 className="section-title">
            THE ARCHITECTS OF <span className="highlight">YOUR SOUND</span>
          </h2>
          <p className="section-subtitle">
            A dedicated collective of multi-platinum producers, certified Dolby Atmos mix engineers, and acoustic perfectionists.
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.7) 0%, rgba(10, 10, 14, 0.95) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Avatar Placeholder Badge */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(186, 27, 35, 0.15)',
                    border: '1px solid rgba(186, 27, 35, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: 'var(--accent-scarlet)'
                  }}
                >
                  <Headphones size={28} />
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--accent-scarlet)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {member.role}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.85rem' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {member.bio}
                </p>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Specialization
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {member.specialty}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-scarlet)', fontWeight: 500 }}>
                  ★ {member.credits}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
