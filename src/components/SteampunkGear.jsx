import React from 'react';

/**
 * Componente de engrenagem Steampunk em SVG puro
 * com dentes metálicos, eixo central de latão e rotação suave.
 */
export const SteampunkGear = ({
  size = 60,
  teeth = 8,
  speed = 'spin-slow',
  color = 'brass', // 'brass' | 'copper' | 'iron'
  className = '',
  onClick,
}) => {
  const colorSchemes = {
    brass: {
      outer: '#d4a853',
      inner: '#8e6c27',
      rim: '#f6d995',
      hub: '#654c18',
      accent: '#ffe5a3',
      teethColor: '#b98d36',
    },
    copper: {
      outer: '#c5783d',
      inner: '#864719',
      rim: '#e99a5e',
      hub: '#5e3010',
      accent: '#fbc193',
      teethColor: '#aa6029',
    },
    iron: {
      outer: '#4a443e',
      inner: '#27231f',
      rim: '#686059',
      hub: '#1a1715',
      accent: '#827a72',
      teethColor: '#3c3631',
    },
  };

  const c = colorSchemes[color] || colorSchemes.brass;
  const radius = 40;
  const center = 50;

  // Gerar dentes da engrenagem radialmente
  const teethElements = Array.from({ length: teeth }).map((_, i) => {
    const angle = (360 / teeth) * i;
    return (
      <rect
        key={i}
        x="45"
        y="4"
        width="10"
        height="12"
        rx="2"
        fill={c.teethColor}
        stroke={c.rim}
        strokeWidth="1"
        transform={`rotate(${angle} ${center} ${center})`}
      />
    );
  });

  // Furos no corpo da engrenagem (típico estilo relógio de bolso vitoriano)
  const holeAngles = [0, 60, 120, 180, 240, 300];

  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size }}
      className={`inline-block select-none transition-transform duration-500 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full drop-shadow-md animate-${speed}`}
      >
        <defs>
          <radialGradient id={`gear-grad-${color}`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor={c.rim} />
            <stop offset="60%" stopColor={c.outer} />
            <stop offset="100%" stopColor={c.inner} />
          </radialGradient>
          <radialGradient id={`hub-grad-${color}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor={c.accent} />
            <stop offset="70%" stopColor={c.hub} />
            <stop offset="100%" stopColor="#120e09" />
          </radialGradient>
        </defs>

        {/* Dentes */}
        <g>{teethElements}</g>

        {/* Disco Principal */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={`url(#gear-grad-${color})`}
          stroke={c.rim}
          strokeWidth="1.5"
        />

        {/* Canaleta Interna */}
        <circle
          cx={center}
          cy={center}
          r="30"
          fill="none"
          stroke={c.inner}
          strokeWidth="2.5"
          opacity="0.8"
        />

        {/* Recortes estéticos vazados */}
        {holeAngles.map((angle, idx) => (
          <circle
            key={idx}
            cx={50 + 20 * Math.cos((angle * Math.PI) / 180)}
            cy={50 + 20 * Math.sin((angle * Math.PI) / 180)}
            r="4.5"
            fill="#120f0d"
            stroke={c.rim}
            strokeWidth="0.8"
          />
        ))}

        {/* Eixo Central Rebitado */}
        <circle
          cx={center}
          cy={center}
          r="12"
          fill={`url(#hub-grad-${color})`}
          stroke={c.accent}
          strokeWidth="1.2"
        />
        <circle cx={center} cy={center} r="4" fill="#0e0b08" />
        <circle cx="48" cy="48" r="1.5" fill="#fff" opacity="0.6" />
      </svg>
    </div>
  );
};
