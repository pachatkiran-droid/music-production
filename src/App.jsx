import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudioPlayer from './components/AudioPlayer';
import About from './components/About';
import Services from './components/Services';
import StudioGear from './components/StudioGear';
import Discography from './components/Discography';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSession = () => {
    handleScrollToSection('contact');
  };

  const handlePlayShowreel = () => {
    handleScrollToSection('showreel');
  };

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    handleScrollToSection('contact');
  };

  return (
    <div className="app-container">
      {/* Top Sticky Navigation */}
      <Navbar onBookSessionClick={handleBookSession} />

      <main>
        {/* Hero Section */}
        <Hero
          onPlayShowreel={handlePlayShowreel}
          onBookSession={handleBookSession}
        />

        {/* Interactive Audio Showreel & Web Audio Player */}
        <AudioPlayer
          onBookSession={handleBookSession}
        />

        {/* About & Studio Heritage */}
        <About />

        {/* Studio Services & Capabilities */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* Studio Spaces & Technical Gear Arsenal */}
        <StudioGear
          onBookSession={handleBookSession}
        />

        {/* Featured Discography & Releases */}
        <Discography
          onPlayTrack={handlePlayShowreel}
        />

        {/* Production Team */}
        <Team />

        {/* Client Testimonials & Partner Badges */}
        <Testimonials />

        {/* Studio Session Booking & Project Inquiry */}
        <BookingForm
          preselectedService={selectedService}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
