import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Pause,
  Disc,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Sparkles,
  Sliders,
  Waves,
  ShieldCheck
} from 'lucide-react';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import { studioAudioEngine } from '../utils/audioEngine';
import { SHOWREEL_TRACKS } from '../data/tracks';

export default function HomePage() {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('oYmU8Av_e84');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const videoIframeRef = useRef(null);

  // Standardized luxury layout container with guaranteed responsive gutters
  const container = 'w-full max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 box-border';

  const openVideo = (id = 'oYmU8Av_e84') => {
    setCurrentVideoId(id);
    setShowVideoModal(true);
  };

  const handleToggleTeaser = () => {
    if (isPlayingTeaser) {
      studioAudioEngine.stop();
      setIsPlayingTeaser(false);
    } else {
      studioAudioEngine.playTrack(SHOWREEL_TRACKS[0]);
      setIsPlayingTeaser(true);
    }
  };

  const toggleVideoSound = () => {
    const nextMuted = !isVideoMuted;
    setIsVideoMuted(nextMuted);
    const command = nextMuted ? 'mute' : 'unMute';
    try {
      videoIframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: '' }),
        '*'
      );
    } catch (err) {
      console.warn('Could not postMessage to video iframe', err);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#060608] text-white overflow-x-hidden selection:bg-[#ba1b23] selection:text-white">
      {/* ====================================================================
          SECTION 1: HERO AGENCY BANNER WITH YOUTUBE VIDEO BACKGROUND
          ==================================================================== */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-black pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Full-Bleed YouTube Video Banner */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-45 scale-105">
          <iframe
            ref={videoIframeRef}
            className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
            src="https://www.youtube-nocookie.com/embed/oYmU8Av_e84?autoplay=1&mute=1&loop=1&playlist=oYmU8Av_e84&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Malhaar Productions Video Banner"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Ambient Dark Ruby Radial Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/65 to-black/85 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-[#ba1b23]/35 to-transparent blur-[90px] pointer-events-none" />

        <div className={`${container} relative z-10 flex flex-col justify-between min-h-[75vh]`}>
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-[#ba1b23] uppercase">
                SOURCE OF BOLD SOUND /
              </div>
              <div className="text-xs text-white/70 max-w-[420px] mt-1 font-normal">
                Acoustic purity, vintage analog summing & Dolby Atmos® 7.1.4 certified facility in Mumbai.
              </div>
            </div>

            {/* Video Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={toggleVideoSound}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-all cursor-pointer"
                title={isVideoMuted ? 'Unmute Video Reel' : 'Mute Video Reel'}
              >
                {isVideoMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#ff3b47]" />}
                <span className="text-[10px] tracking-wider font-semibold uppercase">
                  {isVideoMuted ? 'SOUND OFF' : 'SOUND ON'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => openVideo('oYmU8Av_e84')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-all cursor-pointer"
              >
                <Maximize2 size={13} />
                <span className="text-[10px] tracking-wider font-semibold uppercase">CINEMA MODE</span>
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ba1b23]/20 border border-[#ba1b23]/40 text-white text-xs">
                <span className="w-2 h-2 rounded-full bg-[#e62a34] animate-pulse" />
                <span className="text-[10px] tracking-wider font-semibold uppercase text-white/90">MUMBAI • GLOBAL</span>
              </div>
            </div>
          </div>

          {/* Center Main Headline */}
          <div className="my-auto py-12 lg:py-16">
            <div className="max-w-[960px]">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#ff3b47] uppercase mb-4">
                <span>✳</span>
                <span>GLOBAL MUSIC PRODUCTION & ANALOG ARCHITECTURE</span>
              </div>

              <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold uppercase tracking-tight leading-[0.92] text-white">
                CREATIVE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                  MUSIC PRODUCTION
                </span> <br />
                <span className="text-[#ba1b23] [text-shadow:0_0_40px_rgba(186,27,35,0.6)]">
                  AGENCY
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/75 max-w-[620px] leading-relaxed">
                One-of-one sound identities that command international attention. From raw acoustic capture to 7.1.4 Dolby Atmos® spatial immersion.
              </p>
            </div>
          </div>

          {/* Lower Hero Controls & Badges */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-4 flex-wrap">
              {/* Record Impact Badge */}
              <div className="bg-white text-[#0a0204] rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-4">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#ba1b23]">
                    ✳ RECORD IMPACT
                  </div>
                  <div className="text-2xl font-black leading-none">85%</div>
                </div>
                <div className="text-[10px] text-neutral-600 max-w-[130px] leading-tight font-medium">
                  Top 10 streaming & label placement ratio
                </div>
              </div>

              {/* Reload Sound Teaser Button */}
              <button
                type="button"
                onClick={handleToggleTeaser}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#ba1b23] flex items-center justify-center text-white">
                  {isPlayingTeaser ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white">
                    {isPlayingTeaser ? 'PAUSE PREVIEW' : 'RELOAD YOUR SOUND'}
                  </div>
                  <div className="text-[9px] text-white/60">Live procedural synth audio</div>
                </div>
              </button>
            </div>

            {/* Capability Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/80">
                DOLBY ATMOS® 7.1.4
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/80">
                SSL 4000E SUMMING
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/80">
                APPLE DIGITAL MASTERS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: EDITORIAL STATEMENT & PHOTOGRAPHY WORKS
          ==================================================================== */}
      <section className="w-full bg-[#fbfbfd] text-[#111111] py-20 sm:py-28">
        <div className={container}>
          {/* Statement Header */}
          <div className="max-w-[1100px] mb-14 sm:mb-18">
            <div className="text-[#ba1b23] text-2xl font-bold mb-3">✳</div>
            <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold uppercase tracking-tight leading-[0.98] text-[#111111]">
              MALHAAR PRODUCTIONS BUILDS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba1b23] to-[#e62a34]">
                SONIC ARCHITECTURES
              </span>{' '}
              THAT REDEFINE CONTEMPORARY SOUND CULTURE
            </h2>

            <p className="mt-6 text-sm sm:text-base text-neutral-600 max-w-[680px] leading-relaxed">
              We engineer records that cut through digital saturation, challenge sonic cliches, and command listener devotion. Analog pedigree meets three-dimensional acoustic mastering.
            </p>
          </div>

          {/* 3-Column Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[3/4] shadow-xl">
              <img
                src="/images/heritage-sitar-studio.jpg"
                alt="Heritage Acoustic Recording Studio"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff3b47] uppercase">
                  SUITE 01 • LIVE ROOM
                </span>
                <h3 className="text-lg font-bold uppercase mt-1">Heritage Acoustic Sanctuary</h3>
                <p className="text-xs text-white/70 mt-1">Sitar, strings & multi-mic ensemble tracking</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[3/4] shadow-xl">
              <img
                src="/images/studio-control-room.jpg"
                alt="Master Control Room & SSL Console"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff3b47] uppercase">
                  SUITE 02 • CONTROL ROOM
                </span>
                <h3 className="text-lg font-bold uppercase mt-1">SSL 4000E Analog Summing</h3>
                <p className="text-xs text-white/70 mt-1">Outboard tube saturation & bus compression</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[3/4] shadow-xl">
              <img
                src="/images/studio-atmos-suite.jpg"
                alt="Dolby Atmos 7.1.4 Spatial Mixing Suite"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff3b47] uppercase">
                  SUITE 03 • IMMERSIVE
                </span>
                <h3 className="text-lg font-bold uppercase mt-1">Dolby Atmos® 7.1.4 Suite</h3>
                <p className="text-xs text-white/70 mt-1">Genelec SAM calibrated spatial monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: "EVERYTHING YOUR RECORD NEEDS TO GROW"
          ==================================================================== */}
      <section className="w-full bg-[#0a0204] text-white py-20 sm:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial from-[#ba1b23]/25 to-transparent blur-[100px] pointer-events-none" />

        <div className={`${container} relative z-10`}>
          <div className="max-w-[850px] mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ba1b23]/15 border border-[#ba1b23]/35 text-[#ff3b47] text-xs font-bold tracking-widest uppercase mb-4">
              <Sliders size={13} />
              <span>END-TO-END SUITES</span>
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              <span className="text-white/40">EVERYTHING YOUR RECORD</span> <br />
              NEEDS TO GROW
            </h2>
            <p className="mt-5 text-sm sm:text-base text-white/70 max-w-[620px] leading-relaxed">
              Bespoke sonic treatment designed to cut through noise and deliver international results. From pre-production to release-ready master files.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#121217] border border-white/10 hover:border-[#ba1b23]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div>
                <span className="text-xs font-bold text-[#ba1b23] tracking-widest uppercase">01 / HYBRID</span>
                <h3 className="text-xl font-bold uppercase mt-3 text-white">Analog Summing</h3>
                <p className="text-xs text-white/65 mt-3 leading-relaxed">
                  Analog stem balancing through SSL 4000E console & Tube-Tech optical compressors.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff3b47] mt-6 transition-colors">
                <span>Explore Mix</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2 - Elevated / Popped-out Card */}
            <div className="bg-gradient-to-br from-[#ba1b23] to-[#730c12] border border-[#ff3b47]/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 -translate-y-2 shadow-2xl shadow-[#ba1b23]/30">
              <div>
                <span className="text-xs font-bold text-white/90 tracking-widest uppercase">02 / IMMERSIVE</span>
                <h3 className="text-xl font-bold uppercase mt-3 text-white">Dolby Atmos® 7.1.4</h3>
                <p className="text-xs text-white/90 mt-3 leading-relaxed">
                  Three-dimensional spatial audio mix calibration for Apple Music, Tidal, and Blu-Ray.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mt-6 underline underline-offset-4">
                <span>Explore Atmos</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121217] border border-white/10 hover:border-[#ba1b23]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div>
                <span className="text-xs font-bold text-[#ba1b23] tracking-widest uppercase">03 / CAPTURE</span>
                <h3 className="text-xl font-bold uppercase mt-3 text-white">Live Tracking</h3>
                <p className="text-xs text-white/65 mt-3 leading-relaxed">
                  Decoupled live rooms with vintage Neumann & Telefunken mics into Neve 1073 preamps.
                </p>
              </div>
              <Link to="/studios" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff3b47] mt-6 transition-colors">
                <span>Explore Rooms</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-[#121217] border border-white/10 hover:border-[#ba1b23]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div>
                <span className="text-xs font-bold text-[#ba1b23] tracking-widest uppercase">04 / FINAL</span>
                <h3 className="text-xl font-bold uppercase mt-3 text-white">Audio Mastering</h3>
                <p className="text-xs text-white/65 mt-3 leading-relaxed">
                  Apple Digital Masters certified linear phase EQ, analog harmonic saturation, & DMM vinyl.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff3b47] mt-6 transition-colors">
                <span>Explore Master</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: VISION STATEMENT & 3-COLUMN SUITE GRID
          ==================================================================== */}
      <section className="w-full bg-white text-[#111111] py-20 sm:py-28">
        <div className={container}>
          <div className="max-w-[1050px] mb-14">
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold uppercase tracking-tight leading-[0.95] text-[#111111]">
              WE TURN IDEAS <br />
              INTO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba1b23] to-[#e62a34]">
                SONIC STATEMENTS
              </span>{' '}
              — <br />
              FROM MOTIF TO MASTER
            </h2>
            <p className="mt-5 text-sm sm:text-base text-neutral-600 max-w-[620px] leading-relaxed">
              Every production begins with an unwavering commitment: create something that outlasts temporary trends.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Architectural Purity */}
            <div className="rounded-2xl border border-neutral-200 bg-[#f8f8fa] p-8 flex flex-col justify-between shadow-md">
              <div>
                <div className="text-xs tracking-widest uppercase text-[#ba1b23] font-bold mb-4">
                  01 / ARCHITECTURAL PURITY
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-[#111111] leading-tight mb-4">
                  Floating Concrete & Bass Trapping
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Precision NC-15 acoustic isolation with hardwood diffusers down to 20Hz. We capture clean, authentic waveforms free from standing wave flutter.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800">
                <span>ACOUSTIC ISOLATION</span>
                <span className="text-[#ba1b23]">99.8%</span>
              </div>
            </div>

            {/* Card 2: Red Saturated Sanctuary Card */}
            <Link
              to="/studios"
              className="group relative rounded-2xl p-8 flex flex-col justify-between bg-gradient-to-br from-[#e62a34] via-[#ba1b23] to-[#540910] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl no-underline min-h-[320px]"
            >
              <div>
                <div className="text-xs tracking-widest uppercase text-white/90 font-bold mb-4">
                  02 / PHYSICAL SANCTUARY
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-white leading-tight">
                  Explore our 4 dedicated studio suites & gear arsenal
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#ba1b23] flex items-center justify-center self-end shadow-md transition-transform duration-200 group-hover:scale-110">
                <ArrowRight size={20} />
              </div>
            </Link>

            {/* Card 3: Photo Booking Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl flex items-end p-8 min-h-[320px]">
              <img
                src="/images/studio-console-analog.jpg"
                alt="Book session in analog console suite"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full">
                <div className="text-xs font-bold uppercase tracking-wider text-[#ff3b47] mb-2">
                  03 / RESERVE TIME
                </div>
                <h3 className="text-xl font-bold uppercase text-white mb-4">
                  Ready to book session?
                </h3>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#ba1b23] hover:bg-[#d4222e] text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 no-underline"
                >
                  <span>RESERVE SUITE</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: RED CTA BANNER (STAY IN THE LOOP / STAY CURIOUS)
          ==================================================================== */}
      <section id="dispatch" className="w-full bg-[#ba1b23] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                STAY IN THE LOOP / MALHAAR DISPATCH
              </span>

              <h2 className="mt-3 text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold uppercase tracking-tight leading-[0.9] text-white">
                Stay curious. <br />
                <span className="text-white/85">Make records that last.</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-white/80 max-w-[500px] leading-relaxed">
                Receive release notifications, acoustic masterclasses, open studio calendar slots, and behind-the-glass stem breakdowns directly to your inbox.
              </p>
            </div>

            {/* Right Col: Newsletter Input Form */}
            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="max-w-[460px] lg:ml-auto">
                <div className="flex items-center border-b-2 border-white/70 pb-3 gap-3">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    className="min-w-0 flex-1 bg-transparent text-sm sm:text-base text-white outline-none placeholder:text-white/60 font-medium tracking-wider"
                  />

                  <button
                    type="submit"
                    className="shrink-0 w-10 h-10 rounded-full bg-white text-[#ba1b23] flex items-center justify-center cursor-pointer hover:bg-neutral-100 transition-all hover:scale-105"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  <span>SIGN UP FOR NEW RELEASES & UPDATES</span>
                  {subscribed && (
                    <span className="text-white bg-white/20 px-2 py-0.5 rounded font-bold">
                      ✓ SUBSCRIBED!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: CLIENT TESTIMONIALS & BOOKING CTA
          ==================================================================== */}
      <Testimonials />

      <BookingCTA
        title="READY TO ELEVATE YOUR RECORD?"
        subtitle="Reserve time in Studio A, B, or our Dolby Atmos suite. Our multi-platinum producers and acoustic engineers are ready."
      />

      {/* Cinema Mode Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-[#040102]/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-[1080px] bg-[#0d0406] border border-[#ba1b23]/45 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-[#ba1b23] hover:scale-105"
              onClick={() => setShowVideoModal(false)}
              aria-label="Close cinema modal"
            >
              <X size={20} />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title="Malhaar Productions Video Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}