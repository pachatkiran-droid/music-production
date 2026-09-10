import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function BookingForm({ preselectedService = '' }) {
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: queryService || preselectedService || 'Music Production & Arrangement',
    studioRoom: 'Studio A: Master Control Room',
    budget: '$1,000 - $3,000',
    timeline: 'Within 2-4 Weeks',
    demoLink: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update service if prop or query param changes
  useEffect(() => {
    if (queryService) {
      setFormData(prev => ({ ...prev, service: queryService }));
    } else if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [queryService, preselectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calendar size={14} />
            <span>Studio Inquiries & Booking</span>
          </div>
          <h2 className="section-title">
            BOOK A SESSION AT <span className="highlight">MALHAAR</span>
          </h2>
          <p className="section-subtitle">
            Tell us about your musical vision, release deadlines, and recording requirements. Our production team will review your stems and respond within 24 hours.
          </p>
        </div>

        {/* 2-Column Layout: Form & Studio Direct Info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Booking Form Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(186, 27, 35, 0.3)',
              background: 'linear-gradient(180deg, rgba(22, 22, 29, 0.85) 0%, rgba(12, 12, 16, 0.98) 100%)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(186, 27, 35, 0.2)',
                    border: '2px solid var(--primary-red)',
                    color: 'var(--accent-scarlet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800 }}>
                  Session Inquiry Received!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Thank you for reaching out to <strong>Malhar Productions</strong>. Our lead producer will review your project details and get in touch with you via email or phone within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Music Production & Arrangement',
                      studioRoom: 'Studio A: Master Control Room',
                      budget: '$1,000 - $3,000',
                      timeline: 'Within 2-4 Weeks',
                      demoLink: '',
                      message: ''
                    });
                  }}
                  className="btn btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1.5rem' }}>
                  Project Consultation & Booking Request
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Artist / Band / Label Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya & The Waves"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="producer@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#121217',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Music Production & Arrangement">Music Production & Arrangement</option>
                      <option value="Analog & Live Tracking">Analog & Live Tracking</option>
                      <option value="Hybrid Mixing & Spatial Audio">Hybrid Mixing & Dolby Atmos®</option>
                      <option value="Audio Mastering & Final Delivery">Audio Mastering</option>
                      <option value="Film Scoring & Cinematic Audio">Film Scoring & Sound Design</option>
                      <option value="Sonic Branding & Commercial Audio">Sonic Branding & Jingles</option>
                      <option value="Full Album Package">Full Studio Album Package</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Preferred Studio Suite */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Preferred Suite
                    </label>
                    <select
                      value={formData.studioRoom}
                      onChange={(e) => setFormData({ ...formData, studioRoom: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#121217',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Studio A: Master Control Room">Studio A (SSL Console & Hybrid)</option>
                      <option value="The Live Hall & Acoustic Room">The Live Hall (Grand Piano / Band)</option>
                      <option value="Vocal & Soloist Isolation Suite">Vocal Isolation Chamber</option>
                      <option value="Dolby Atmos Spatial Mixing Suite">Dolby Atmos Spatial Suite</option>
                    </select>
                  </div>

                  {/* Project Timeline */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Target Release Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#121217',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Urgent (Within 7 Days)">Urgent (Within 7 Days)</option>
                      <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="Flexible / Pre-Production">Flexible / Pre-Production</option>
                    </select>
                  </div>
                </div>

                {/* Demo Link */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Rough Demo or Reference Track Link (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://soundcloud.com/... or Google Drive / Dropbox link"
                    value={formData.demoLink}
                    onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Project Details */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Project Vision & Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your track count, musical genre, specific instrumentation needed, and any sonic references you love..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: '10px'
                  }}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Transmitting Details...' : 'Request Session Booking'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Studio Direct Info & Amenities */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.7) 0%, rgba(12, 12, 16, 0.95) 100%)',
                marginBottom: '2rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1.5rem' }}>
                DIRECT STUDIO CONTACT
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(186, 27, 35, 0.15)',
                      color: 'var(--accent-scarlet)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Studio Headquarters</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Malhar Sound Labs, Plot 42, Bandra West Media Hub, Mumbai 400050
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(186, 27, 35, 0.15)',
                      color: 'var(--accent-scarlet)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Direct Email</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      booking@malharproductions.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(186, 27, 35, 0.15)',
                      color: 'var(--accent-scarlet)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Phone & WhatsApp</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      +91 (022) 2640-8800 / +91 98200-MALHAR
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(186, 27, 35, 0.15)',
                      color: 'var(--accent-scarlet)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Studio Sessions</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Monday – Sunday: 24/7 By Appointment Only<br />
                      Lockout sessions & overnight block bookings available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp / Direct Consultation Box */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                border: '1px solid rgba(186, 27, 35, 0.25)',
                background: 'rgba(186, 27, 35, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  Need an urgent rate card or tour?
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Chat directly with our studio manager on WhatsApp.
                </div>
              </div>

              <a
                href="https://wa.me/919820062542?text=Hello%20Malhar%20Productions%2C%20I%20would%20like%20to%20inquire%20about%20a%20studio%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.85rem'
                }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
