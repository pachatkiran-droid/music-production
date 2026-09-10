import React from 'react';
import { Disc, Play, Award, Sparkles, Music, Radio } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AudioPlayer from '../components/AudioPlayer';
import Discography from '../components/Discography';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';

export default function ReleasesPage() {
  return (
    <div className="releases-page">
      {/* 1. Page Header */}
      <PageHeader
        badge="DISCOGRAPHY & SHOWREEL"
        title="OUR SONIC"
        highlight="LEGACY"
        subtitle="Immerse yourself in our interactive audio showreel and explore recent singles, studio albums, and film scores produced, mixed, and mastered at Malhaar Productions."
        icon={Disc}
      />

      {/* 2. Interactive Audio Showreel & Synthesizer Player */}
      <section style={{ position: 'relative', marginBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <div className="section-tag" style={{ background: 'rgba(186, 27, 35, 0.15)' }}>
              <Radio size={14} />
              <span>LIVE WEB AUDIO DEMO</span>
            </div>
          </div>
          <h2 className="section-title">
            STUDIO <span className="highlight">SHOWREEL</span>
          </h2>
          <p className="section-subtitle">
            Toggle between genres, adjust master monitor volume, and watch real-time FFT frequency analytics powered by the Web Audio API.
          </p>
        </div>

        <AudioPlayer />
      </section>

      {/* 3. Featured Discography Releases Grid */}
      <Discography />

      {/* 4. Client Testimonials & Verified Reviews */}
      <Testimonials />

      {/* 5. Booking CTA Banner */}
      <BookingCTA
        title="READY TO ADD YOUR TRACK TO OUR WALL OF SOUND?"
        subtitle="Let our production team bring your composition into the realm of multi-platinum records."
      />
    </div>
  );
}
