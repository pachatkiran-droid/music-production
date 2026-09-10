import React, { useState } from 'react';
import { Calendar, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BookingForm from '../components/BookingForm';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How should I format and prepare my stems before sending?',
      a: 'We require 24-bit or 32-bit float WAV/AIFF files exported at your native recording sample rate (44.1kHz, 48kHz, or 96kHz). All tracks should start at bar 1/time zero so they align immediately. Please bypass master bus limiters and provide a rough mix for reference.'
    },
    {
      q: 'What is your session deposit and cancellation policy?',
      a: 'A 50% non-refundable deposit is required to reserve studio dates on our calendar. Rescheduling is permitted free of charge up to 72 hours before your scheduled session.'
    },
    {
      q: 'Can I bring my own external producer or engineer?',
      a: 'Yes! We welcome guest producers and mixing engineers. Every booking includes a resident Malhar assistant engineer to patch equipment, manage routing, and ensure your session runs smoothly.'
    },
    {
      q: 'Do you offer unattended remote mixing & mastering services?',
      a: 'Absolutely. Over 60% of our mixing and Dolby Atmos mastering work is conducted remotely with artists across the globe. We provide real-time high-fidelity streaming via Audiomovers Listento during review sessions.'
    },
    {
      q: 'Can we schedule an in-person studio walkthrough before booking?',
      a: 'Yes, we are delighted to show prospective artists and labels around our facilities. Please submit an inquiry selecting "Studio Walkthrough / Tour" or reach out directly to our studio manager.'
    }
  ];

  return (
    <div className="contact-page">
      {/* 1. Page Header */}
      <PageHeader
        badge="GET IN TOUCH"
        title="BOOK A"
        highlight="SESSION"
        subtitle="Whether you need tracking in Studio A, a Dolby Atmos 7.1.4 spatial mix, or full album production, our team is ready to assist your sonic journey."
        icon={Calendar}
      />

      {/* 2. Main Booking Form & Studio Details */}
      <BookingForm />

      {/* 3. Frequently Asked Questions (FAQ) Accordion */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(10, 10, 14, 0.6)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <div className="section-tag">
              <HelpCircle size={14} />
              <span>Studio Guidelines & Policies</span>
            </div>
            <h2 className="section-title">
              FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about booking, stem preparation, deliverables, and visiting Malhar Productions.
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
