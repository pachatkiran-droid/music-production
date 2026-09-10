import React from 'react';

export default function Logo({
  variant = 'full', // 'full' | 'icon' | 'badge'
  color = 'red',    // 'red' | 'white'
  size = 'md',      // 'sm' | 'md' | 'lg'
  className = ''
}) {
  const isWhite = color === 'white';
  const primaryColor = isWhite ? '#FFFFFF' : '#BA1B23';
  const secondaryColor = isWhite ? 'rgba(255,255,255,0.85)' : '#BA1B23';

  const iconSizes = {
    sm: 32,
    md: 44,
    lg: 60
  };
  const iconDim = iconSizes[size] || 44;

  // The iconic musical note "M" emblem
  const EmblemSvg = ({ width, height, stroke = 'none', fill = '#FFFFFF' }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-emblem-svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(186, 27, 35, 0.4)" />
        </filter>
      </defs>
      {/* Musical note 'M': Left Note Head + Stem + Diagonal Beam connecting to Right Stem + Right Note Head */}
      {/* Left Note Head */}
      <circle cx="56" cy="142" r="28" fill={fill} />
      {/* Right Note Head */}
      <circle cx="152" cy="116" r="26" fill={fill} />
      {/* Left Stem */}
      <path
        d="M72 142 L72 44 Q72 38 78 38 L88 38 Q94 38 94 44 L94 110 Q94 116 88 116 L72 116 Z"
        fill={fill}
      />
      {/* Center Diagonal / Arch linking into M shape */}
      <path
        d="M80 50 C95 75, 115 105, 126 120 C130 115, 136 100, 142 80 L152 46 Q156 36 166 36 L172 36 Q180 36 180 44 L180 116 Q180 124 172 124 L158 124 L158 74 C148 95, 138 122, 130 134 C124 142, 116 142, 110 134 C98 116, 88 88, 80 50 Z"
        fill={fill}
      />
      {/* Graceful musical flag curve */}
      <path
        d="M88 40 C110 50, 135 78, 144 112 C140 102, 132 85, 118 72 C104 60, 94 50, 88 40 Z"
        fill={fill}
      />
    </svg>
  );

  if (variant === 'badge') {
    return (
      <div
        className={`logo-badge-container ${className}`}
        style={{
          width: iconDim,
          height: iconDim,
          backgroundColor: '#BA1B23',
          borderRadius: Math.round(iconDim * 0.22),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(186, 27, 35, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
          flexShrink: 0
        }}
      >
        <EmblemSvg width={iconDim * 0.72} height={iconDim * 0.72} fill="#FFFFFF" />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`logo-icon-standalone ${className}`} style={{ width: iconDim, height: iconDim, flexShrink: 0 }}>
        <EmblemSvg width={iconDim} height={iconDim} fill={primaryColor} />
      </div>
    );
  }

  return (
    <div className={`logo-full-brandmark ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
      <div
        style={{
          width: iconDim,
          height: iconDim,
          backgroundColor: '#BA1B23',
          borderRadius: Math.round(iconDim * 0.22),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(186, 27, 35, 0.35)',
          flexShrink: 0
        }}
      >
        <EmblemSvg width={iconDim * 0.72} height={iconDim * 0.72} fill="#FFFFFF" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span
          style={{
            fontFamily: "'Cinzel', 'Times New Roman', serif",
            fontWeight: 800,
            letterSpacing: '0.14em',
            fontSize: size === 'lg' ? '1.85rem' : size === 'sm' ? '1.05rem' : '1.35rem',
            color: primaryColor,
            lineHeight: 1.1,
            textTransform: 'uppercase'
          }}
        >
          MALHAAR
        </span>
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.36em',
            fontSize: size === 'lg' ? '0.75rem' : size === 'sm' ? '0.52rem' : '0.62rem',
            color: secondaryColor,
            lineHeight: 1.3,
            textTransform: 'uppercase',
            opacity: 0.95
          }}
        >
          PRODUCTIONS
        </span>
      </div>
    </div>
  );
}
