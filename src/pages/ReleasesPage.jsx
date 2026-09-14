import React from 'react';
import { Radio } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AudioPlayer from '../components/AudioPlayer';
import Discography from '../components/Discography';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';

export default function ReleasesPage() {
  return (
    <div className="page-wrapper">
      {/* 1. Page Header */}
        <PageHeader
          badge="DISCOGRAPHY & SHOWREEL"
          title="OUR SONIC"
          highlight="LEGACY"
          subtitle="Immerse yourself in our interactive audio showreel and explore recent singles, studio albums, and film scores produced, mixed, and mastered at Malhaar Productions."
        />

        {/* 2. Interactive Audio Showreel & Synthesizer Player */}
        <AudioPlayer />

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
