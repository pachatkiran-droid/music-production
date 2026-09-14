import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BookingForm from '../components/BookingForm';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What types of creative projects does Malhaar Productions handle?',
      a: 'We conceptualise and produce projects across five core disciplines: Advertisements (commercials, TVCs, jingles & sonic branding), Music Videos (cinematic visual storytelling), Music Productions (songwriting, acoustic tracking, mixing & spatial Dolby Atmos), Artistic Initiatives (cultural preservation & indie artist labs), and Musical Events (live concerts & curated stages).'
    },
    {
      q: 'At what stage of our project should we get in touch with you?',
      a: 'At any stage! We specialize in guiding projects from the first spark of a concept to its final realization. Whether you have an initial rough idea, a corporate campaign brief, a raw melody, or a fully planned music video or event, our team brings thoughtful creativity and professional execution to your vision.'
    },
    {
      q: 'Can Malhaar handle both audio and visual production under one roof?',
      a: 'Yes! Having in-house composers, sound designers, cinematographers, directors, and editors ensures that music, visuals, and storytelling harmonize perfectly with unified creative direction and zero fragmentation.'
    },
    {
      q: 'How do you collaborate on artistic initiatives or cultural projects?',
      a: 'Artistic initiatives are a venture close to our hearts. We actively support independent musicians, Indian classical and folk heritage preservation, and cross-disciplinary art projects. We welcome proposals from artists, filmmakers, and cultural foundations.'
    },
    {
      q: 'What is your typical timeline from concept to final realization?',
      a: 'Timelines vary by discipline. Commercial audio branding and jingles typically take 1–2 weeks; music productions and multi-track mixes take 2–3 weeks; while full-scale music videos and live musical events span 3–6 weeks with clear iterative review milestones.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* 1. Page Header */}
        <PageHeader
          badge="LET'S CREATE TOGETHER"
          title="BRING YOUR"
          highlight="VISION TO LIFE"
          subtitle="Malhaar Productions is a creative platform dedicated to conceptualising and producing advertisements, music videos, music productions, artistic initiatives, and musical events. From the first spark of a concept to its final realization, our goal is to bring every project to life with care, passion, and attention to detail."
        />

        {/* 2. Main Booking Form & Studio Details */}
        <BookingForm />

        {/* 3. Frequently Asked Questions (FAQ) Accordion */}
        <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.6)' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div className="section-header">
              <div className="section-tag">
                <HelpCircle size={14} />
                <span>Collaboration Guidelines</span>
              </div>
              <h2 className="section-title">
                FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
              </h2>
              <p className="section-subtitle">
                Everything you need to know about working with Malhaar Productions from concept to final realization.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '1.25rem 1.75rem',
                      border: isOpen ? '1px solid var(--border-accent)' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isOpen ? 'rgba(22, 22, 28, 0.9)' : 'rgba(16, 16, 21, 0.7)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.05rem', color: isOpen ? 'var(--accent-scarlet)' : '#FFFFFF', fontWeight: 600, margin: 0 }}>
                        {faq.q}
                      </h3>
                      <div style={{ color: isOpen ? 'var(--accent-scarlet)' : 'var(--text-muted)' }}>
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {isOpen && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
    </div>
  );
}
