import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Pause, Disc, Volume2, VolumeX, Maximize2, X } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import { FEATURED_RELEASES } from '../data/releases';
import { studioAudioEngine } from '../utils/audioEngine';
import { SHOWREEL_TRACKS } from '../data/tracks';

export default function HomePage() {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('oYmU8Av_e84');
  const videoIframeRef = useRef(null);

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

  return (
    <div className="w-full min-h-screen p-0 m-0 bg-transparent block overflow-x-hidden">
      {/* ====================================================================
          SECTION 1: HERO AGENCY BANNER WITH YOUTUBE VIDEO BANNER
          ==================================================================== */}
      <section className="relative w-full bg-[#080203] text-white pt-24 pb-10 overflow-hidden h-screen min-h-screen flex items-center box-border max-h-[620px]:h-auto max-h-[620px]:min-h-screen">
        {/* Full-Bleed YouTube Video Banner (Spec Commercial - SONY) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
          <iframe
            ref={videoIframeRef}
            className="absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 brightness-[0.65] contrast-[1.18] saturate-[1.15]"
            src="https://www.youtube-nocookie.com/embed/oYmU8Av_e84?autoplay=1&mute=1&loop=1&playlist=oYmU8Av_e84&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Malhaar Productions Video Banner"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Cinematic Atmospheric Ruby/Dark Vignette Overlay */}
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_50%_35%,rgba(186,27,35,0.42)_0%,rgba(14,3,6,0.76)_65%,#080203_100%),linear-gradient(180deg,rgba(8,2,4,0.72)_0%,rgba(8,2,4,0.15)_45%,rgba(8,2,4,0.92)_100%)] pointer-events-none z-[1]" />
        <div className="absolute top-[20%] left-[40%] w-[650px] h-[420px] [background:radial-gradient(circle,rgba(230,42,52,0.28)_0%,transparent_70%)] blur-[90px] pointer-events-none z-[1]" />

        <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 relative z-[2] flex flex-col justify-between min-h-[calc(100vh-8.5rem)] h-full box-border">
          {/* Top Info Bar */}
          <div className="flex justify-between items-start flex-wrap gap-4 mb-6 relative z-[2]">
            <div>
              <div className="font-['Outfit',sans-serif] text-[0.82rem] tracking-[0.14em] uppercase text-white/95 leading-tight font-bold">
                SOURCE OF BOLD SOUND /
              </div>
              <div className="text-[0.78rem] text-white/65 font-normal tracking-wide mt-1 max-w-[280px] leading-relaxed">
                Acoustic purity, vintage analog summing & Dolby Atmos® 7.1.4 certified facility.
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Interactive Video Banner Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleVideoSound}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full font-['Outfit',sans-serif] text-[0.72rem] font-bold tracking-wider uppercase cursor-pointer transition-all duration-200 hover:bg-[#ba1b23]/70 hover:border-[#ba1b23] hover:-translate-y-0.5"
                  title={isVideoMuted ? "Turn Sound On" : "Mute Sound"}
                  aria-label="Toggle video banner sound"
                >
                  {isVideoMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#ff3b47]" />}
                  <span>{isVideoMuted ? "Sound Off" : "Sound On"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowVideoModal(true)}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full font-['Outfit',sans-serif] text-[0.72rem] font-bold tracking-wider uppercase cursor-pointer transition-all duration-200 hover:bg-[#ba1b23]/70 hover:border-[#ba1b23] hover:-translate-y-0.5"
                  title="Watch in Cinema Mode"
                  aria-label="Watch video banner in cinema modal"
                >
                  <Maximize2 size={13} />
                  <span>Cinema Mode</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e62a34] shadow-[0_0_10px_#e62a34]" />
                <span className="text-[0.72rem] tracking-[0.12em] uppercase text-white/70 font-semibold">
                  MUMBAI • GLOBAL
                </span>
              </div>
            </div>
          </div>

          {/* Hero Middle & Bottom Grid */}
          <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end">
            {/* Left Floating Cards (85% stat + Reload sound widget) */}
            <div className="flex gap-5 items-end flex-wrap">
              {/* White Stat Card */}
              <div className="bg-white text-[#121216] p-5 sm:p-6 rounded-[18px] shadow-2xl min-w-[150px]">
                <div className="flex items-center gap-1.5 text-[0.7rem] font-bold tracking-wider uppercase text-[#686878] mb-1">
                  <span className="text-[#ba1b23]">✳</span>
                  <span>RECORD IMPACT</span>
                </div>
                <div className="font-['Outfit',sans-serif] text-[2.4rem] font-black leading-none text-[#0c0204] tracking-tight">
                  85%
                </div>
                <div className="text-[0.72rem] text-[#686878] mt-1 leading-snug">
                  Top 10 streaming & label placement ratio
                </div>
              </div>

              {/* Dark Glassmorphic Interactive Sound Card */}
              <div
                className="bg-[rgba(20,5,8,0.78)] backdrop-blur-md border border-white/20 text-white p-5 rounded-[18px] flex items-center gap-4 cursor-pointer transition-all duration-200 shadow-xl hover:bg-[#ba1b23]/45 hover:border-[#e62a34]/60 hover:-translate-y-0.5"
                onClick={handleToggleTeaser}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 ${
                    isPlayingTeaser ? 'bg-[#ba1b23]' : 'bg-white/10'
                  }`}
                >
                  {isPlayingTeaser ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </div>
                <div>
                  <div className="text-[0.82rem] font-bold tracking-wide">
                    {isPlayingTeaser ? 'Playing Soundscape' : 'Reload Your Sound'}
                  </div>
                  <div className="text-[0.7rem] text-white/60">
                    Live procedural synth preview
                  </div>
                </div>
              </div>
            </div>

            {/* Right Agency Typography */}
            <div className="text-left lg:text-right flex flex-col items-start lg:items-end">
              <Link
                to="/services"
                className="w-12 h-12 rounded-full border border-white/35 bg-white/10 flex items-center justify-center text-white transition-all duration-200 mb-5 hover:bg-[#ba1b23] hover:border-[#ba1b23] hover:scale-105"
                aria-label="Explore Production Services"
              >
                <ArrowUpRight size={22} />
              </Link>
              <h1 className="font-['Outfit',sans-serif] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight uppercase text-white mb-5 drop-shadow-lg">
                CREATIVE <br />
                MUSIC PRODUCTION <br />
                AGENCY
              </h1>
              <p className="text-sm sm:text-base text-white/80 max-w-[420px] leading-relaxed mb-6">
                One-of-one sound identities that command attention. From raw analog tracking to spatial Dolby Atmos® immersion.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['DOLBY ATMOS® 7.1.4', 'SSL 4000E SUMMING', 'APPLE DIGITAL MASTERS'].map((tag, i) => (
                  <span
                    key={i}
                    className="text-[0.65rem] font-bold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full text-white/85 border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: EDITORIAL STATEMENT & LATEST PROJECTS
          ==================================================================== */}
      <section className="w-full min-h-screen py-24 bg-[#f6f4ef] relative flex flex-col justify-center box-border">
        <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-[#ba1b23] text-4xl leading-none inline-block mb-6">✳</div>

          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight uppercase text-[#1a080c] max-w-[1100px] mb-8">
            MALHAAR DESIGNS MAKE <br />
            SOUND SYSTEMS{' '}
            <span className="inline-flex items-center justify-center align-middle h-11 w-20 bg-gradient-to-br from-[#ba1b23] to-[#e62a34] rounded-full mx-2 shadow-lg overflow-hidden">
              <span className="flex items-center gap-1">
                <span className="w-1 bg-white/85 rounded-full h-3.5" />
                <span className="w-1 bg-white/85 rounded-full h-6" />
                <span className="w-1 bg-white/85 rounded-full h-4.5" />
                <span className="w-1 bg-white/85 rounded-full h-3" />
              </span>
            </span>{' '}
            THAT <br />
            <span className="text-[#8a857b]">REDEFINE MODERN</span> <br />
            SONIC CULTURE
          </h2>

          <p className="text-[#5a554c] text-base sm:text-lg max-w-[760px] leading-relaxed mb-16">
            Malhaar crafts records and acoustic identities that cut through commercial noise, challenge genres, and awaken deep human emotion. We combine Indian classical soul, analog hardware, and spatial mixing all in one creative sanctuary.
          </p>

          {/* Projects Layout with Vertical Left Label */}
          <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-8 items-start">
            <div className="flex lg:flex-col gap-2 font-['Outfit',sans-serif] text-xs sm:text-sm font-bold tracking-widest text-[#1a080c] uppercase lg:border-r border-[#1a080c]/10 lg:pr-6">
              <span>OUR</span>
              <span>LATEST</span>
              <span className="text-[#ba1b23]">PROJECTS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_RELEASES.slice(0, 3).map((track, idx) => (
                <div
                  key={track.id || idx}
                  className="group relative h-[380px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(186,27,35,0.35)] flex flex-col justify-end p-6 text-white no-underline cursor-pointer"
                  onClick={() => openVideo(track.youtubeId || 'oYmU8Av_e84')}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 brightness-[0.85] contrast-[1.1]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(14,3,6,0.1) 0%, rgba(10,2,4,0.88) 100%), url('${track.coverImage || "/images/album-rain-varanasi.jpg"}')`,
                    }}
                  >
                    <div className="absolute top-4 right-4 bg-[#0a0204]/80 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[0.7rem] font-bold text-white tracking-wider">
                      <Play size={11} fill="#ffffff" />
                      <span>WATCH REEL</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(12,3,5,0.1)_0%,rgba(12,3,5,0.6)_60%,rgba(8,1,3,0.95)_100%)] pointer-events-none" />
                  <div className="relative z-[2]">
                    <div className="text-xs tracking-wider uppercase text-[#e62a34] font-bold mb-1.5">
                      {track.type || 'Single'} • {track.year}
                    </div>
                    <div className="text-xl font-extrabold text-white leading-snug mb-1">
                      {track.title}
                    </div>
                    <div className="text-sm text-white/80">
                      {track.artist}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: "EVERYTHING YOUR RECORD NEEDS TO GROW" (Deck with Popped-out Card)
          ==================================================================== */}
      <section className="w-full min-h-screen py-24 border-t border-black/5 bg-[#fcfbfa] flex flex-col justify-center box-border">
        <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="mb-14 max-w-[800px]">
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight uppercase text-[#1a080c] mb-4">
              <span className="text-[#8a857b]">EVERYTHING YOUR</span> <br />
              RECORD NEEDS TO GROW
            </h2>
            <p className="text-sm sm:text-base text-[#5a554c] leading-relaxed">
              Malhaar offers end-to-end music production, analog tracking, spatial audio mixing, and commercial sound design — engineered to cut through noise and deliver undeniable sonic impact.
            </p>
          </div>

          {/* 4 Cards Deck with Popped-out Elevated Centerpiece */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Card 1: Production Strategy */}
            <Link
              to="/services"
              className="group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border border-black/5 hover:-translate-y-1.5 hover:shadow-xl no-underline text-[#1a080c] min-h-[380px]"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,245,240,0.96) 100%), url("/images/service-production.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div>
                <div className="text-xs font-bold tracking-widest text-[#ba1b23] uppercase mb-3">01 / PRODUCTION STRATEGY</div>
                <div className="text-xl font-extrabold text-[#1a080c] leading-snug mb-2">Songwriting & Arrangement</div>
                <div className="text-sm text-[#5a554c] leading-relaxed">
                  Harmonic motif mapping, live acoustic instrumentation, and beat architecture.
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-black/10 pt-4 mt-6">
                <span className="text-xs text-[#ba1b23] font-bold">EXPLORE SUITE</span>
                <ArrowUpRight size={16} className="text-[#ba1b23] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>

            {/* Card 2: THE STANDOUT ELEVATED POPPED-OUT CENTERPIECE (Dolby Atmos Spatial Mixing) */}
            <Link
              to="/services"
              className="group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border border-[#ba1b23]/40 shadow-2xl no-underline bg-[#140508] text-white min-h-[400px] lg:-translate-y-4 hover:!translate-y-[-20px]"
              style={{
                backgroundImage: 'radial-gradient(ellipse at 50% 25%, rgba(186, 27, 35, 0.78) 0%, rgba(18, 3, 6, 0.95) 85%), url("/images/studio-atmos-suite.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div>
                <div className="text-xs font-bold tracking-widest text-white/90 uppercase mb-3">
                  02 / SPATIAL AUDIO IMMERSION
                </div>
                <div className="text-2xl font-extrabold text-white leading-snug mb-2">
                  Dolby Atmos® 7.1.4
                </div>
                <div className="text-sm text-white/85 leading-relaxed">
                  Certified immersive mixing environment. Elevating stereo stems into three-dimensional acoustic space with pinpoint object rendering.
                </div>
              </div>

              {/* Glowing Centerpiece Orb / Canister Visual */}
              <div className="my-6 flex justify-center items-center relative">
                <div className="absolute w-24 h-24 rounded-full bg-[#ba1b23] blur-xl opacity-60" />
                <div
                  className="w-[90px] h-[90px] rounded-full [background:radial-gradient(circle_at_35%_35%,#ff4b55_0%,#ba1b23_60%,#4a080d_100%)] border-2 border-white/40 shadow-[0_0_35px_rgba(230,42,52,0.8),inset_0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center text-white relative z-[2]"
                >
                  <Disc size={36} className="animate-[spin_12s_linear_infinite]" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-white/15 pt-4">
                <span className="text-xs text-white font-extrabold tracking-wider">
                  FEATURED SUITE
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#ba1b23] transition-transform group-hover:scale-110">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>

            {/* Card 3: Creative Direction / Analog Tracking */}
            <Link
              to="/services"
              className="group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border border-black/5 hover:-translate-y-1.5 hover:shadow-xl no-underline text-[#1a080c] min-h-[380px]"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,245,240,0.96) 100%), url("/images/studio-console-analog.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div>
                <div className="text-xs font-bold tracking-widest text-[#ba1b23] uppercase mb-3">03 / ANALOG TRACKING</div>
                <div className="text-xl font-extrabold text-[#1a080c] leading-snug mb-2">SSL 4000E Console</div>
                <div className="text-sm text-[#5a554c] leading-relaxed">
                  Solid-state British summing, vintage Telefunken microphones, and Tube-Tech optical compression.
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-black/10 pt-4 mt-6">
                <span className="text-xs text-[#ba1b23] font-bold">EXPLORE SUITE</span>
                <ArrowUpRight size={16} className="text-[#ba1b23] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>

            {/* Card 4: Art Direction / Master Engineering */}
            <Link
              to="/services"
              className="group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border border-black/5 hover:-translate-y-1.5 hover:shadow-xl no-underline text-[#1a080c] min-h-[380px]"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,245,240,0.96) 100%), url("/images/service-mastering.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div>
                <div className="text-xs font-bold tracking-widest text-[#ba1b23] uppercase mb-3">04 / AUDIO MASTERING</div>
                <div className="text-xl font-extrabold text-[#1a080c] leading-snug mb-2">Apple Digital Masters</div>
                <div className="text-sm text-[#5a554c] leading-relaxed">
                  MFiT certified loudness optimization, vinyl DMM pre-masters, and 192kHz Prism Sound conversion.
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-black/10 pt-4 mt-6">
                <span className="text-xs text-[#ba1b23] font-bold">EXPLORE SUITE</span>
                <ArrowUpRight size={16} className="text-[#ba1b23] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>

          {/* Interactive Web Audio Synthesizer Player */}
          <div className="mt-20 bg-[#0a0204] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-white/10">
            <div className="text-center mb-6">
              <span className="text-xs tracking-widest text-[#e62a34] uppercase font-bold">
                LIVE WEB AUDIO ENGINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                Interactive Audio Showreel & Visualizer
              </h3>
            </div>
            <AudioPlayer />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: VISION STATEMENT & 3-COLUMN EDITORIAL GRID
          ==================================================================== */}
      <section className="w-full min-h-screen py-24 border-t border-black/5 bg-[#f6f4ef] flex flex-col justify-center box-border">
        <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight uppercase text-[#1a080c] max-w-[950px] mx-auto mb-16 text-center">
            WE TURN IDEAS <br />
            INTO SONIC{' '}
            <span className="inline-flex items-center justify-center align-middle h-11 w-20 bg-gradient-to-br from-[#ba1b23] to-[#e62a34] rounded-full mx-2 shadow-lg overflow-hidden">
              <span className="flex items-center gap-1">
                <span className="w-1 bg-white/85 rounded-full h-5" />
                <span className="w-1 bg-white/85 rounded-full h-3" />
                <span className="w-1 bg-white/85 rounded-full h-4" />
              </span>
            </span>{' '}
            STATEMENTS <br />
            <span className="text-[#8c867b]">FROM VISION TO DELIVERY —</span> <br />
            <span className="text-[#8c867b]">IMPACT THAT LASTS</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Artist Portrait in Red Light (Vocal tracking session) */}
            <div className="flex flex-col">
              <div className="relative h-[340px] rounded-2xl overflow-hidden mb-4 shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center contrast-[1.15]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(186, 27, 35, 0.35) 0%, rgba(12, 3, 5, 0.9) 100%), url('/images/service-tracking.jpg')`,
                  }}
                />
              </div>
              <div className="flex gap-3 text-xs sm:text-sm text-[#5a554c] leading-relaxed">
                <span className="text-[#ba1b23] font-bold">✳</span>
                <span>
                  Acoustic design, stem mixing, and analog mastering engineered to outlast temporary industry trends. From raw acoustic motif to global platform delivery.
                </span>
              </div>
            </div>

            {/* Card 2: Saturated Red Glow Mesh Card */}
            <Link
              to="/studios"
              className="group relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between [background:radial-gradient(ellipse_at_80%_20%,#e62a34_0%,#ba1b23_55%,#540910_100%)] text-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(186,27,35,0.4)] no-underline min-h-[340px]"
            >
              <div>
                <div className="text-xs tracking-widest uppercase text-white/85 font-bold mb-5">
                  THE PHYSICAL SANCTUARY
                </div>
                <h3 className="text-3xl font-extrabold leading-tight uppercase tracking-tight max-w-[280px]">
                  Explore our 4 dedicated studio suites & gear arsenal
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#ba1b23] flex items-center justify-center self-end shadow-md transition-transform duration-200 group-hover:scale-110">
                <ArrowRight size={20} />
              </div>
            </Link>

            {/* Card 3: Heritage Classical Fusion Sanctuary */}
            <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl flex items-end p-8">
              <div
                className="absolute inset-0 bg-cover bg-center contrast-[1.15] brightness-[0.95]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(12, 3, 5, 0.25) 0%, rgba(10, 2, 4, 0.9) 100%), url('/images/heritage-sitar-studio.jpg')`,
                }}
              />
              <div className="relative z-[2]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#ba1b23] text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:bg-[#d4222e] hover:scale-105 no-underline"
                >
                  <span>BOOK SESSION NOW</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: CLIENT TESTIMONIALS & BOOKING CTA
          ==================================================================== */}
      <Testimonials />

      <BookingCTA
        title="READY TO ELEVATE YOUR RECORD?"
        subtitle="Reserve time in Studio A, B, or our Dolby Atmos suite. Our multi-platinum producers and acoustic engineers are ready."
      />

      {/* Cinema Mode Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-[#040102]/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4 sm:p-8 animate-fade-in"
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
