import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Radio, Sparkles, Disc, Sliders, CheckCircle } from 'lucide-react';
import { SHOWREEL_TRACKS } from '../data/tracks';
import { studioAudioEngine } from '../utils/audioEngine';

export default function AudioPlayer({ onBookSession }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const timerIntervalRef = useRef(null);

  const filteredTracks = activeCategory === 'all'
    ? SHOWREEL_TRACKS
    : SHOWREEL_TRACKS.filter(t => t.category === activeCategory);

  const currentTrack = filteredTracks[currentTrackIndex] || filteredTracks[0] || SHOWREEL_TRACKS[0];

  // Initialize track change
  const handleSelectTrack = (track) => {
    const idx = filteredTracks.findIndex(t => t.id === track.id);
    if (idx !== -1) {
      setCurrentTrackIndex(idx);
    }
    setCurrentTimeSec(0);
    studioAudioEngine.playTrack(track);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      studioAudioEngine.stop();
      setIsPlaying(false);
    } else {
      studioAudioEngine.playTrack(currentTrack);
      setIsPlaying(true);
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % filteredTracks.length;
    setCurrentTrackIndex(nextIdx);
    setCurrentTimeSec(0);
    if (isPlaying) {
      studioAudioEngine.playTrack(filteredTracks[nextIdx]);
    }
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + filteredTracks.length) % filteredTracks.length;
    setCurrentTrackIndex(prevIdx);
    setCurrentTimeSec(0);
    if (isPlaying) {
      studioAudioEngine.playTrack(filteredTracks[prevIdx]);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0) setIsMuted(false);
    studioAudioEngine.setVolume(val);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      studioAudioEngine.setVolume(volume);
    } else {
      setIsMuted(true);
      studioAudioEngine.setVolume(0);
    }
  };

  // Timer simulation for scrub bar
  useEffect(() => {
    if (isPlaying) {
      timerIntervalRef.current = setInterval(() => {
        setCurrentTimeSec(prev => {
          if (prev >= currentTrack.durationSec) {
            handleNextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isPlaying, currentTrack]);

  // Real-time Canvas Waveform Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const renderWaveform = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const freqData = isPlaying ? studioAudioEngine.getFrequencyData() : null;
      const numBars = 48;
      const barWidth = (width / numBars) - 2;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 8;
        if (isPlaying && freqData && freqData.length > 0) {
          const freqIndex = Math.floor((i / numBars) * freqData.length * 0.7);
          const rawVal = freqData[freqIndex] || 0;
          barHeight = Math.max(6, (rawVal / 255) * (height - 12));
        } else {
          // Static idle seed wave
          const seed = currentTrack.waveformSeed || [];
          const seedVal = seed[i % seed.length] || 30;
          barHeight = 6 + (seedVal / 100) * (height * 0.35);
        }

        const x = i * (barWidth + 2);
        const y = (height - barHeight) / 2;

        // Gradient from crimson to ruby highlight
        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (isPlaying) {
          grad.addColorStop(0, '#FF4B55');
          grad.addColorStop(0.5, '#BA1B23');
          grad.addColorStop(1, '#660C11');
        } else {
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
          grad.addColorStop(1, 'rgba(186, 27, 35, 0.35)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, barWidth, barHeight, [3]);
        } else {
          ctx.rect(x, y, barWidth, barHeight);
        }
        ctx.fill();
      }

      animationFrameId.current = requestAnimationFrame(renderWaveform);
    };

    renderWaveform();
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isPlaying, currentTrack]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const remainingSec = sec % 60;
    return `${mins}:${remainingSec < 10 ? '0' : ''}${remainingSec}`;
  };

  const progressPercent = (currentTimeSec / currentTrack.durationSec) * 100;

  const categories = [
    { id: 'all', label: 'All Showreel' },
    { id: 'cinematic', label: 'Cinematic Score' },
    { id: 'indie', label: 'Indie Soul / R&B' },
    { id: 'fusion', label: 'Classical Fusion' },
    { id: 'beats', label: 'Hip-Hop / Trap' },
    { id: 'commercial', label: 'Commercial Sonic' }
  ];

  return (
    <section id="showreel" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Radio size={14} />
            <span>Interactive Showreel</span>
          </div>
          <h2 className="section-title">
            HEAR THE <span className="highlight">MALHAAR SOUND</span>
          </h2>
          <p className="section-subtitle">
            Audition our multi-genre production showreel in real-time. Built with analog warmth, surgical stem mixing, and Dolby Atmos® spatial dimension.
          </p>
        </div>

        {/* Genre Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentTrackIndex(0);
                setCurrentTimeSec(0);
              }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                border: activeCategory === cat.id ? '1px solid var(--primary-red)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeCategory === cat.id ? 'linear-gradient(135deg, var(--primary-red), #850E14)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeCategory === cat.id ? '0 4px 16px rgba(186, 27, 35, 0.4)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Master Audio Player Interface Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(180deg, rgba(22, 22, 29, 0.85) 0%, rgba(10, 10, 14, 0.95) 100%)',
            border: '1px solid rgba(186, 27, 35, 0.25)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(186, 27, 35, 0.15)'
          }}
        >
          {/* Active Track Top Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(186, 27, 35, 0.2)',
                    color: 'var(--accent-scarlet)',
                    border: '1px solid rgba(186, 27, 35, 0.4)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  {currentTrack.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  {currentTrack.bpm} • Key: {currentTrack.key}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  marginBottom: '0.25rem'
                }}
              >
                {currentTrack.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                {currentTrack.artist} • <span style={{ color: 'var(--accent-scarlet)' }}>{currentTrack.genre}</span>
              </p>
            </div>

            <button
              onClick={onBookSession}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem' }}
            >
              <Sliders size={15} />
              <span>Inquire This Sound</span>
            </button>
          </div>

          {/* Interactive Live Waveform Canvas */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '110px',
              backgroundColor: 'rgba(6, 6, 8, 0.75)',
              borderRadius: '12px',
              padding: '0.75rem',
              marginBottom: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              overflow: 'hidden'
            }}
          >
            <canvas
              ref={canvasRef}
              width={900}
              height={94}
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
            {/* Live Visualizer Status Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.7rem',
                fontFamily: "'Outfit', sans-serif",
                color: isPlaying ? 'var(--accent-scarlet)' : 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: isPlaying ? 'var(--accent-scarlet)' : 'var(--text-dim)',
                  boxShadow: isPlaying ? '0 0 8px var(--accent-scarlet)' : 'none'
                }}
              />
              <span>{isPlaying ? 'Live Synthesis Playing' : 'Audition Ready'}</span>
            </div>
          </div>

          {/* Scrub Progress Bar */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newRatio = Math.max(0, Math.min(1, clickX / rect.width));
                setCurrentTimeSec(Math.floor(newRatio * currentTrack.durationSec));
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: 'var(--primary-red)',
                  borderRadius: '3px',
                  boxShadow: '0 0 10px var(--primary-red)'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              <span>{formatTime(currentTimeSec)}</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

          {/* Player Transport Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            {/* Playback Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={handlePrevTrack}
                aria-label="Previous Track"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.2s ease'
                }}
              >
                <SkipBack size={20} />
              </button>

              <button
                onClick={handleTogglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary-red) 0%, #951219 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(186, 27, 35, 0.55)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {isPlaying ? <Pause size={22} fill="#FFFFFF" /> : <Play size={22} fill="#FFFFFF" style={{ marginLeft: '3px' }} />}
              </button>

              <button
                onClick={handleNextTrack}
                aria-label="Next Track"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.2s ease'
                }}
              >
                <SkipForward size={20} />
              </button>
            </div>

            {/* Track Description & Technical Note */}
            <div style={{ flex: '1 1 300px', maxWidth: '520px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                {currentTrack.description}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                {currentTrack.credits}
              </p>
            </div>

            {/* Volume Control */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handleToggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isMuted ? 'var(--accent-scarlet)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume Slider"
                style={{
                  width: '90px',
                  accentColor: 'var(--primary-red)',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>

          {/* Playlist Track Items */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
              Showreel Stems & Cue Playlist ({filteredTracks.length} Selections)
            </div>

            {filteredTracks.map((track, idx) => {
              const isSelected = track.id === currentTrack.id;
              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectTrack(track)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '10px',
                    backgroundColor: isSelected ? 'rgba(186, 27, 35, 0.14)' : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected ? '1px solid rgba(186, 27, 35, 0.4)' : '1px solid rgba(255, 255, 255, 0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: isSelected ? 'var(--accent-scarlet)' : 'var(--text-dim)',
                        width: '24px'
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {track.title}
                        {isSelected && isPlaying && (
                          <span style={{ display: 'inline-flex', gap: '2px', height: '12px', alignItems: 'flex-end' }}>
                            <span className="equalizer-bar" style={{ animationDelay: '0.1s' }} />
                            <span className="equalizer-bar" style={{ animationDelay: '0.3s' }} />
                            <span className="equalizer-bar" style={{ animationDelay: '0.2s' }} />
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {track.artist}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-muted)',
                        display: 'none',
                        // Shown on tablet/desktop
                      }}
                      className="track-genre-badge"
                    >
                      {track.genre}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: "'Outfit', sans-serif" }}>
                      {track.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
