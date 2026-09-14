import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layout & Utility Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Automatic Scroll Reset on Page Change */}
        <ScrollToTop />

        {/* Global Persistent Sticky Navigation Bar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="main-content">
          <Routes>
            {/* Primary Navigation Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Intuitive Route Aliases / Redirects to Active Pages */}
            <Route path="/studios" element={<Navigate to="/services" replace />} />
            <Route path="/gear" element={<Navigate to="/services" replace />} />
            <Route path="/releases" element={<Navigate to="/services" replace />} />
            <Route path="/showreel" element={<Navigate to="/services" replace />} />
            <Route path="/discography" element={<Navigate to="/services" replace />} />
            <Route path="/booking" element={<Navigate to="/contact" replace />} />

            {/* 404 Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Persistent Footer */}
        <Footer />
      </div>
    </Router>
  );
}
