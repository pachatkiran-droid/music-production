/**
 * Malhar Productions Web Audio Synthesis & Playback Engine
 * Generates rich, authentic studio soundscapes and real-time audio visualization data.
 */

class StudioAudioEngine {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.currentTrack = null;
    this.nodes = [];
    this.intervalId = null;
    this.step = 0;
    this.volume = 0.8;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.nodes.forEach(n => {
      try {
        if (n.stop) n.stop();
        if (n.disconnect) n.disconnect();
      } catch (e) {
        // Node already stopped
      }
    });
    this.nodes = [];
    this.step = 0;
  }

  playTrack(track) {
    this.init();
    this.stop();
    this.currentTrack = track;
    this.isPlaying = true;

    // Start pattern sequencer based on track type
    const soundType = track.soundType || 'cinematic';
    this.startSequencer(soundType);
  }

  startSequencer(soundType) {
    const tempoMap = {
      cinematic: 1200,
      rnb: 680,
      fusion: 625,
      hiphop: 428,
      commercial: 480
    };
    const speed = tempoMap[soundType] || 600;

    // Play immediate first chord/beat
    this.triggerStep(soundType, this.step);
    this.step = (this.step + 1) % 16;

    this.intervalId = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      this.triggerStep(soundType, this.step);
      this.step = (this.step + 1) % 16;
    }, speed);
  }

  triggerStep(soundType, step) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;

    switch (soundType) {
      case 'cinematic':
        this.playCinematicStep(step, now);
        break;
      case 'rnb':
        this.playRnbStep(step, now);
        break;
      case 'fusion':
        this.playFusionStep(step, now);
        break;
      case 'hiphop':
        this.playHipHopStep(step, now);
        break;
      case 'commercial':
      default:
        this.playCommercialStep(step, now);
        break;
    }
  }

  // Helper to create smooth synth tone with envelope
  createSynthVoice(freq, type = 'sine', duration = 1.2, gainPeak = 0.25, attack = 0.05) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainPeak, this.ctx.currentTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + duration);

    this.nodes.push(osc, gain);
    // Cleanup reference after note finished
    setTimeout(() => {
      const idx = this.nodes.indexOf(osc);
      if (idx !== -1) this.nodes.splice(idx, 2);
    }, duration * 1000 + 100);
  }

  // Helper for kick drum / 808
  createKick(duration = 0.4, startFreq = 140, endFreq = 38) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Noise snare / clap
  createSnare() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  // 1. Cinematic score: Lush chords + low drone + cello pulse
  playCinematicStep(step, now) {
    const chordProgressions = [
      [146.83, 220.00, 261.63, 349.23], // Dm9
      [130.81, 196.00, 261.63, 329.63], // C add9
      [116.54, 174.61, 233.08, 293.66], // Bb maj7
      [110.00, 164.81, 220.00, 329.63]  // A sus
    ];
    const currentChord = chordProgressions[Math.floor(step / 4) % chordProgressions.length];

    if (step % 4 === 0) {
      // Sustained chord pad
      currentChord.forEach(f => {
        this.createSynthVoice(f, 'sine', 3.5, 0.12, 0.4);
        this.createSynthVoice(f * 0.5, 'triangle', 3.2, 0.08, 0.5); // Deep sub octave
      });
      // Soft orchestral bass drum
      this.createKick(0.7, 95, 28);
    } else if (step % 2 === 0) {
      // Arpeggiated cello pulse
      const note = currentChord[step % currentChord.length];
      this.createSynthVoice(note * 1.5, 'sine', 1.0, 0.07, 0.08);
    }
  }

  // 2. R&B: Warm electric piano chords + bassline + finger snap
  playRnbStep(step, now) {
    const rnbChords = [
      [185.00, 277.18, 369.99, 440.00], // F#m7
      [164.81, 246.94, 329.63, 392.00], // Em7
      [146.83, 220.00, 293.66, 369.99], // Dmaj7
      [138.59, 207.65, 277.18, 329.63]  // C#m7
    ];
    const chord = rnbChords[Math.floor(step / 4) % rnbChords.length];

    if (step % 2 === 0) {
      // Warm Rhodes-like tone
      chord.forEach(f => {
        this.createSynthVoice(f, 'sine', 0.9, 0.1, 0.02);
      });
    }

    if (step % 4 === 0) {
      // Deep bass
      this.createSynthVoice(chord[0] * 0.5, 'triangle', 0.8, 0.22, 0.02);
    }

    if (step % 4 === 2) {
      // Snare / snap
      this.createSnare();
    }
  }

  // 3. Classical Fusion: Megh Malhar tanpura drone + sitar-like resonant pluck
  playFusionStep(step, now) {
    // Tanpura Sa-Pa drone in C
    if (step % 8 === 0) {
      this.createSynthVoice(130.81, 'triangle', 4.0, 0.18, 0.5); // Sa (C3)
      this.createSynthVoice(196.00, 'sine', 3.8, 0.12, 0.4);     // Pa (G3)
      this.createSynthVoice(261.63, 'sine', 3.5, 0.1, 0.3);      // High Sa (C4)
    }

    // Melodic notes of Raga Megh Malhar: Sa, Re, Ma, Pa, Ni (C, D, F, G, Bb)
    const malharRagaNotes = [261.63, 293.66, 349.23, 392.00, 466.16, 523.25];
    const note = malharRagaNotes[step % malharRagaNotes.length];

    // Sitar acoustic pluck
    this.createSynthVoice(note, 'sawtooth', 0.6, 0.05, 0.01);
    this.createSynthVoice(note * 2, 'sine', 0.4, 0.03, 0.01);

    // Tabla Bayan sub bass
    if (step % 4 === 0) {
      this.createKick(0.35, 120, 65);
    }
  }

  // 4. Hip-Hop: 808 Sub + tight hi-hats + punchy snare
  playHipHopStep(step, now) {
    // 808 Sub-bass on 1 and 3
    if (step === 0 || step === 6 || step === 10) {
      this.createKick(0.65, 125, 34);
    }

    // Punchy snare on 4 and 12
    if (step === 4 || step === 12) {
      this.createSnare();
    }

    // Hi-hat tick every step
    const hiHat = this.ctx.createOscillator();
    const hiHatGain = this.ctx.createGain();
    hiHat.type = 'square';
    hiHat.frequency.setValueAtTime(7500, now);
    hiHatGain.gain.setValueAtTime(0.04, now);
    hiHatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    hiHat.connect(hiHatGain);
    hiHatGain.connect(this.masterGain);
    hiHat.start(now);
    hiHat.stop(now + 0.05);

    // Minor chord stab
    if (step % 8 === 0) {
      [207.65, 246.94, 311.13].forEach(f => {
        this.createSynthVoice(f, 'sawtooth', 0.4, 0.05, 0.01);
      });
    }
  }

  // 5. Commercial: Sparkling acoustic chime and clean mnemonic
  playCommercialStep(step, now) {
    const mnemonicNotes = [440.00, 554.37, 659.25, 880.00]; // A4, C#5, E5, A5
    const note = mnemonicNotes[step % mnemonicNotes.length];

    this.createSynthVoice(note, 'sine', 0.8, 0.12, 0.01);
    this.createSynthVoice(note * 1.5, 'triangle', 0.6, 0.06, 0.02);

    if (step % 4 === 0) {
      this.createKick(0.4, 110, 48);
      this.createSynthVoice(220.00, 'sine', 1.5, 0.15, 0.1);
    }
  }

  getFrequencyData() {
    if (!this.analyser) {
      return new Uint8Array(64);
    }
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }
}

export const studioAudioEngine = new StudioAudioEngine();
