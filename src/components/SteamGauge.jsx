import React from 'react';

/**
 * Manômetro de Pressão a Vapor Vitoriano
 * Apresenta valor em BAR/PSI, mostrador analógico com ponteiro oscilante e moldura de latão.
 */
export const SteamGauge = ({
  value = 75, // 0 a 100
  label = "PRESSÃO DO SISTEMA",
  unit = "BAR",
  size = 140,
  sublabel = "OPERAÇÃO NORMAL",
  interactive = false,
  onBoost,
}) => {
  // Mapeia valor 0-100 para ângulo do ponteiro (-120deg a +120deg)
  const angle = -120 + (value / 100) * 240;

  return (
    <div
      onClick={interactive ? onBoost : undefined}
      className={`relative flex flex-col items-center justify-center select-none ${
        interactive ? 'cursor-pointer group' : ''
      }`}
      style={{ width: size, minWidth: size }}
    >
      {/* Moldura Externa de Latão Rebitado */}
      <div
        className="relative rounded-full p-2.5 transition-all duration-300 group-hover:scale-105"
        style={{
          width: size,
          height: size,
          background: 'radial-gradient(circle at 35% 35%, #f1d289 0%, #aa8033 45%, #46300f 90%)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.8), inset 0 2px 3px rgba(255, 255, 255, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.9)',
        }}
      >
        {/* Rebites nos 4 quadrantes */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black/60 shadow-sm"></div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black/60 shadow-sm"></div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black/60 shadow-sm"></div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black/60 shadow-sm"></div>

        {/* Mostrador de Pergaminho Envelhecido */}
        <div className="relative w-full h-full rounded-full gauge-face flex flex-col items-center justify-between p-2.5 overflow-hidden border border-[#523d21]">
          {/* Ticks e graduações analógicas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            {/* Arco da zona de perigo / alta potência em vermelho escuro */}
            <path
              d="M 75 75 A 35 35 0 0 0 85 50"
              fill="none"
              stroke="#a93226"
              strokeWidth="2.5"
              strokeDasharray="2 1"
            />
            {/* Marcações ao redor */}
            {[...Array(11)].map((_, i) => {
              const tickAngle = -120 + i * 24;
              return (
                <line
                  key={i}
                  x1="50"
                  y1="12"
                  x2="50"
                  y2={i % 2 === 0 ? "17" : "15"}
                  stroke="#392b1a"
                  strokeWidth={i % 2 === 0 ? "1.5" : "0.8"}
                  transform={`rotate(${tickAngle} 50 50)`}
                />
              );
            })}
          </svg>

          {/* Nome e Indicador Superior */}
          <div className="z-10 text-[8px] font-schematic font-bold text-[#44331e] tracking-widest text-center mt-1 uppercase">
            {label}
          </div>

          {/* Display Digital/Mecânico do Valor */}
          <div className="z-10 text-[10px] font-schematic font-bold text-[#2a1c0d] bg-[#f8ebd0]/80 px-1.5 py-0.5 rounded border border-[#8b6935]/50 shadow-inner">
            {value} <span className="text-[7px] text-[#714d18]">{unit}</span>
          </div>

          {/* Subtítulo inferior */}
          <div className="z-10 text-[6.5px] font-schematic text-[#6b5028] tracking-wider mb-0.5 font-bold">
            {sublabel}
          </div>

          {/* Ponteiro do Manômetro */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none transition-transform duration-700 ease-out"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            {/* Agulha em vermelho-bronze */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-[#8d1a10] to-[#b32417] shadow-sm"
              style={{
                height: `${size * 0.32}px`,
                bottom: '50%',
                borderRadius: '1px 1px 0 0',
              }}
            >
              {/* Ponta da agulha fina */}
              <div className="w-1.5 h-1.5 bg-[#8d1a10] rotate-45 -translate-x-[2px] -translate-y-[2px]"></div>
            </div>

            {/* Contrapeso da agulha */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-[#2b1f13]"
              style={{
                height: `${size * 0.1}px`,
                top: '50%',
                borderRadius: '0 0 2px 2px',
              }}
            ></div>
          </div>

          {/* Eixo central com rebite de bronze */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full z-20"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ffde94, #946c24 70%, #201505 100%)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.7)',
            }}
          ></div>

          {/* Reflexo de vidro no mostrador */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 60%)',
            }}
          ></div>
        </div>
      </div>

      {interactive && (
        <span className="mt-1 text-[9px] font-schematic text-brass-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-steamAmber-glow animate-ping"></span>
          Clique para pressurizar
        </span>
      )}
    </div>
  );
};
