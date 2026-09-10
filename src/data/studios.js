export const STUDIOS_DATA = [
  {
    id: 'studio-a',
    name: 'Studio A: Master Control Room',
    tagline: 'Flagship Analog Console & Hybrid Production Hub',
    image: '/images/studio-console-analog.jpg',
    description: 'Our premier control suite centered around an iconic solid-state console with outboard analog processing racks, calibrated Genelec coaxial monitoring, and custom-tuned acoustic geometry.',
    specs: [
      { label: 'Acoustic Volume', value: '450 sq. ft. / Floating Floor' },
      { label: 'Console', value: 'SSL 4000E 48-Channel with Total Recall' },
      { label: 'Monitoring', value: 'Genelec 8351B SAM + Dual 7380A Subwoofers' },
      { label: 'DAW Systems', value: 'Pro Tools Ultimate HDX & Apple Logic Pro' }
    ],
    highlights: ['Hybrid Analog/Digital Routing', 'Outboard Neve & Tube-Tech Racks', 'Calibrated Diffusers']
  },
  {
    id: 'studio-atmos',
    name: 'Studio C: Dolby Atmos® 7.1.4 Suite',
    tagline: 'Certified Immersive Spatial Mixing & Object Rendering',
    image: '/images/studio-atmos-suite.jpg',
    description: 'A certified Dolby Atmos 7.1.4 spatial audio mixing environment featuring ceiling and surround Genelec calibrated monitoring, Avid S6 tactile control, and pristine 3D acoustic object placement.',
    specs: [
      { label: 'Spatial Calibration', value: 'Dolby Atmos® Certified 7.1.4 Array' },
      { label: 'Surround Monitors', value: 'Genelec The Ones 8341A + 8331A Overhead' },
      { label: 'Subwoofers', value: 'Dual Genelec 7380A SAM Calibrated LFE' },
      { label: 'Console Control', value: 'Avid S6 Modular Mixing System' }
    ],
    highlights: ['Dolby Atmos Certified', '3D Spatial Binaural Previews', 'Floating Acoustic Decoupling']
  },
  {
    id: 'studio-live',
    name: 'The Live Hall & Acoustic Room',
    tagline: 'Expansive Natural Reverberation & Ensemble Tracking',
    image: '/images/studio-live-room.jpg',
    description: 'Featuring high cathedral ceilings, warm maple acoustic slats, and variable diffusion panels. Capable of hosting 20-piece string sections, full rock ensembles, and solo acoustic masterclasses.',
    specs: [
      { label: 'Acoustic Volume', value: '950 sq. ft. / 18ft Ceiling' },
      { label: 'Grand Piano', value: 'Steinway & Sons Model B Concert Grand' },
      { label: 'Drum Room', value: 'Custom Sonor Vintage Kit with Zildjian K Cymbals' },
      { label: 'Isolation', value: 'Three Variable Reflection Gobo Baffles' }
    ],
    highlights: ['Natural Acoustic Bloom', 'Steinway Concert Grand', 'Isolated Drum Chamber']
  },
  {
    id: 'studio-vocal',
    name: 'Vocal & Soloist Isolation Suite',
    tagline: 'Intimate, Zero-Reflection Acoustic Precision',
    image: '/images/studio-vocal-booth.jpg',
    description: 'A dead-quiet vocal sanctuary engineered to capture the intimate breath, delicate dynamics, and harmonic nuances of top vocalists, voiceover artists, and solo acoustic instrumentalists.',
    specs: [
      { label: 'Noise Floor', value: '< 12 dBA Ultra-Quiet Isolation' },
      { label: 'Primary Mic', value: 'Vintage Neumann U87 Ai & Telefunken ELA M 251' },
      { label: 'Preamp', value: 'Neve 1073DPX Dual Mic Preamp' },
      { label: 'Monitoring', value: 'Hear Technologies 8-Channel Personal Cue Mixer' }
    ],
    highlights: ['Zero Phase Reflections', 'Vintage Tube Microphones', 'Direct Visual Sightline to Studio A']
  }
];

export const GEAR_CATEGORIES = [
  {
    category: 'Microphones',
    items: [
      'Neumann U87 Ai (Matched Pair)',
      'Telefunken ELA M 251E Tube Mic',
      'AKG C414 XLS (Matched Pair)',
      'Coles 4038 Ribbon Microphones',
      'Shure SM7B & Beta 58A',
      'Royer R-121 Studio Ribbon Mic',
      'Sennheiser MD 421-II (x4)'
    ]
  },
  {
    category: 'Outboard & Preamps',
    items: [
      'Neve 1073DPX Dual Mic Pre & EQ',
      'Tube-Tech CL 1B Optical Compressor',
      'Universal Audio 1176LN Peak Limiter (x2)',
      'Empirical Labs Distressor EL8-X',
      'Pultec EQP-1A Tube Program Equalizer',
      'API 512c Discrete Mic Preamps (x4)',
      'Burl Audio Mothership AD/DA Converter'
    ]
  },
  {
    category: 'Monitoring & Acoustic Suites',
    items: [
      'Genelec 8351B Smart Active Monitors',
      'Genelec 7380A SAM Studio Subwoofer',
      'Yamaha NS-10M Studio Classics (Bryston Amped)',
      'Focal Trio6 Be 3-Way Active Monitors',
      'Dolby Atmos® 7.1.4 Surround Monitoring System',
      'Sennheiser HD 800 S Reference Headphones',
      'Sonarworks SoundID Reference Room Calibration'
    ]
  },
  {
    category: 'Instruments & Synthesizers',
    items: [
      'Steinway & Sons Model B Concert Grand Piano',
      'Moog Subsequent 37 Analog Synthesizer',
      'Dave Smith Prophet-6 Polyphonic Synth',
      'Fender Custom Shop 60s Jazz Bass',
      'Gibson Custom 1959 Les Paul Standard',
      'Custom Indian Tabla & Pakhawaj Sets',
      'Nord Stage 4 88-Key Stage Keyboard'
    ]
  }
];
