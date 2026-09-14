import React from 'react';
import malhaarLogo from '../assets/images/malhaarlogo.jpg';

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
    sm: 34,
    md: 46,
    lg: 64
  };
  const iconDim = iconSizes[size] || 46;
  const borderRadius = Math.round(iconDim * 0.22);

  const LogoImage = ({ dimension, style = {} }) => (
    <img
      src={malhaarLogo}
      alt="Malhaar Productions Official Logo"
      style={{
        width: dimension,
        height: dimension,
        borderRadius: borderRadius,
        objectFit: 'cover',
        boxShadow: '0 8px 24px rgba(186, 27, 35, 0.35)',
        flexShrink: 0,
        display: 'block',
        ...style
      }}
      className="logo-img-asset"
    />
  );

  if (variant === 'badge') {
    return (
      <div
        className={`logo-badge-container ${className}`}
        style={{
          width: iconDim,
          height: iconDim,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <LogoImage dimension={iconDim} />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`logo-icon-standalone ${className}`} style={{ width: iconDim, height: iconDim, flexShrink: 0 }}>
        <LogoImage dimension={iconDim} />
      </div>
    );
  }

  return (
    <div className={`logo-full-brandmark ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
      <LogoImage dimension={iconDim} />
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
