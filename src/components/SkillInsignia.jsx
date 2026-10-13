import React from 'react';

/**
 * Logotipos ORIGINAIS e oficiais das ferramentas tecnológicas
 */
export const OfficialToolLogo = ({ id, className = "w-4 h-4 sm:w-[18px] sm:h-[18px]" }) => {
  switch (id) {
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#3776ab" d="M63.3 1.5c-7.2 0-14 1-19.4 2.8-15.6 5.1-18.4 15.6-18.4 24.8v9.7h38.2v5.2H25.3c-15.8 0-29.6 9.4-33.8 27.2-4.8 20.3 3.3 32.5 15.8 34.6v-16.7c0-12.7 10.6-23.7 23.7-23.7h37.5v-5.2H31.1v-9.6c0-7.8 6.7-14.4 14.7-14.4h37.2c7.8 0 14.4-6.4 14.4-14.4V7.9c0-6.4-6.9-6.4-14.1-6.4zM47.7 10.1c3.1 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6-5.6-2.5-5.6-5.6 2.5-5.6 5.6-5.6z" />
          <path fill="#ffd438" d="M64.7 126.5c7.2 0 14-1 19.4-2.8 15.6-5.1 18.4-15.6 18.4-24.8v-9.7H64.3v-5.2h38.4c15.8 0 29.6-9.4 33.8-27.2 4.8-20.3-3.3-32.5-15.8-34.6v16.7c0 12.7-10.6 23.7-23.7 23.7H39.5v5.2h37.4v9.6c0 7.8-6.7 14.4-14.7 14.4H25c-7.8 0-14.4 6.4-14.4 14.4v13.7c0 6.4 6.9 6.4 14.1 6.4zm15.6-8.6c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" />
        </svg>
      );

    case 'django':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#092e20" d="M51.9 0h24.2v76.8c0 23.5-11.5 35.8-33.3 35.8-8 0-15.1-1.6-19.5-4l5.1-16.1c3.4 1.8 7.9 2.9 13.2 2.9 10.5 0 15-6.3 15-18.8V0h-4.7zm-27.7 38.4h24.2v38.4H24.2V38.4zm55.4 0h24.2v64c0 15.7-7.7 23.9-22.3 23.9-5.4 0-10.1-1-13-2.7l3.4-10.7c2.3 1.2 5.3 1.9 8.8 1.9 7 0 9.9-4.2 9.9-12.5V38.4z" />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="8" fill="#F7DF1E" />
          <path fill="#000000" d="M29.5 108.6c4.6 2.7 10.3 4.6 16.5 4.6 14.5 0 23.8-7.2 23.8-23.4V42.5H53.1v46.9c0 8.3-4.2 12.1-11.2 12.1-4.4 0-8.2-1.6-10.7-3.4l-1.7 10.5zm46.7-1.1c5.9 3.5 14.1 5.7 22.9 5.7 19.8 0 31.7-10 31.7-27.2 0-15.3-9.5-22.7-23.6-28.7-9.5-4.1-14.1-7.7-14.1-13.6 0-5.2 4.2-9.6 12-9.6 6.3 0 11.8 1.9 15.6 4.3l3.3-10.6c-4.4-2.4-11.2-4.2-19.5-4.2-19.1 0-30.8 10.7-30.8 26.5 0 14.9 9.3 22.9 24.3 28.9 9.9 4.3 13.5 8.1 13.5 14.1 0 6.1-5.1 10.8-13.7 10.8-8.1 0-14.7-2.9-19.5-6.1l-2.1 9.7z" />
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="8" fill="#3178C6" />
          <path fill="#ffffff" d="M60.6 60.5H46.4V111H31.5V60.5H17.4V48.1h43.2v12.4zm18.3 42.6c5.8 3.4 13.8 5.6 22.4 5.6 19.4 0 31-9.8 31-26.6 0-15-9.3-22.2-23.1-28.1-9.3-4-13.8-7.5-13.8-13.3 0-5.1 4.1-9.4 11.7-9.4 6.2 0 11.5 1.9 15.3 4.2l3.2-10.4c-4.3-2.3-11-4.1-19.1-4.1-18.7 0-30.1 10.5-30.1 25.9 0 14.6 9.1 22.4 23.8 28.3 9.7 4.2 13.2 7.9 13.2 13.8 0 6-5 10.6-13.4 10.6-7.9 0-14.4-2.8-19.1-6l-2 9.5z" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="-11.5 -10.232 23 20.463" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z" />
        </svg>
      );

    case 'htmlcss':
      return (
        <div className="flex items-center -space-x-1">
          <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
            <path fill="#e34f26" d="M71 460L30 0h452l-41 460-185 52z" />
            <path fill="#ef652a" d="M256 472l149-41 35-391H256v432z" />
            <path fill="#ebebeb" d="M256 208H181l-5-57h80V95H109l15 170h132v-57zm0 152l-74-20-5-54h-56l9 107 126 35v-68z" />
            <path fill="#ffffff" d="M256 208v-57h76l7-76H256V95h146l-18 206H256v-57h80l-6 63-74 20v68l126-35 15-170H256z" />
          </svg>
          <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
            <path fill="#1572b6" d="M71 460L30 0h452l-41 460-185 52z" />
            <path fill="#33a9dc" d="M256 472l149-41 35-391H256v432z" />
            <path fill="#ebebeb" d="M256 208H181l-5-57h80V95H109l15 170h132v-57zm0 152l-74-20-5-54h-56l9 107 126 35v-68z" />
            <path fill="#ffffff" d="M256 208v-57h76l7-76H256V95h146l-18 206H256v-57h80l-6 63-74 20v68l126-35 15-170H256z" />
          </svg>
        </div>
      );

    case 'sql':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#336791" d="M63.6 13.9c-8.9.3-16.7 4.1-22.3 10.3-4.6 5.1-7.5 11.8-8.2 19.3-.5 5.5.3 11.2 2.4 16.2 3.4 8.1 9.7 14.5 17.6 18.2l-2.4 8.7c-2.4 8.6-4.6 17.4-4.2 26.3.3 7.8 3.5 15.6 9.3 20.8 5 4.5 11.7 6.8 18.5 6.4 7.4-.4 14.3-3.8 19.3-9.3 5.4-6 8.3-14 8.3-22.1 0-7.7-2.6-15.3-6.8-21.7l3.8-3.4c5.7-5.1 9.8-11.9 11.6-19.4 1.9-7.8 1.4-16.1-1.5-23.7-3.6-9.6-10.7-17.5-19.9-22-7.5-3.7-16-5.1-24.5-4.6z" />
          <path fill="#ffffff" d="M63 32c-6 0-12 5-12 12s6 12 12 12 12-5 12-12-6-12-12-12zm-3 18c-3 0-6-3-6-6s3-6 6-6 6 3 6 6-3 6-6 6z" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#F05032">
          <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.126 0L8.808 2.585l3.05 3.05a1.782 1.782 0 011.834.453 1.782 1.782 0 01.442 1.844l2.943 2.943a1.776 1.776 0 011.845.442 1.786 1.786 0 010 2.527 1.786 1.786 0 01-2.527 0 1.783 1.783 0 01-.433-1.854l-2.766-2.767v5.626a1.783 1.783 0 01.453 1.834 1.786 1.786 0 01-2.527 0 1.786 1.786 0 010-2.527 1.783 1.783 0 011.834-.453V9.068a1.783 1.783 0 01-1.834-.453 1.785 1.785 0 01-.442-1.844L7.868 3.525.454 10.939a1.5 1.5 0 000 2.125l10.478 10.478a1.5 1.5 0 002.126 0l10.488-10.488a1.5 1.5 0 000-2.125z" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m21.848 1.576c-.45-.3-.982-.472-1.554-.51a4.84 4.84 0 00-1.74.22c-.67.247-1.423.24-2.128-.014-.582-.21-1.127-.565-1.58-1.03-.453-.466-.782-1.03-1.002-1.637-.107-.297-.33-.532-.619-.652a1.8 1.8 0 00-.73-.153H1.472a1.32 1.32 0 00-1.32 1.32v.228C.2 16.99 4.3 20.61 10.68 20.61c8.118 0 12.825-4.545 13.37-10.748.016-.179-.016-.36-.098-.522z" />
        </svg>
      );

    case 'powerbi':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path fill="#e0a000" d="M22 6h6a2 2 0 0 1 2 2v18H22V6z" />
          <path fill="#f2c811" d="M13 12h7a2 2 0 0 1 2 2v12H13V12z" />
          <path fill="#f9e16d" d="M4 18h7a2 2 0 0 1 2 2v6H4v-8z" />
        </svg>
      );

    case 'excel':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path fill="#107c41" d="M18 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h11V5z" />
          <path fill="#21a366" d="M27 7a2 2 0 0 0-2-2h-7v22h7a2 2 0 0 0 2-2V7z" />
          <path fill="#ffffff" d="M9.8 11.5l2.4 4.5 2.5-4.5h2.8l-3.8 6 4 6.5h-2.9l-2.6-4.8-2.6 4.8H6.7l4-6.5-3.8-6h2.9z" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 38 57" className={className}>
          <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
          <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
          <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
          <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
          <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
        </svg>
      );

    case 'suporte':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#f1d289" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );

    case 'redes':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v5M5 13h14M5 13v3M19 13v3" />
        </svg>
      );

    default:
      return null;
  }
};

/**
 * Chip / Pill Steampunk Clean:
 * - Insígnia metálica circular elegante com o logotipo oficial no centro
 * - Nome da ferramenta ao lado
 * - Sem barras ou dados desnecessários
 */
export const SkillChip = ({ tool }) => {
  return (
    <div
      className="group inline-flex items-center gap-3 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full bg-[#15100c]/90 border border-brass-dark/70 hover:border-brass hover:shadow-[0_0_16px_rgba(241,210,137,0.3)] transition-all duration-300 hover:scale-105 cursor-default select-none shadow-md backdrop-blur-sm"
    >
      {/* Moldura de Insígnia Circular Steampunk */}
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center">
        {/* Borda / Aro de Latão com Efeito Metálico */}
        <div className="absolute inset-0 rounded-full border border-brass-light/80 shadow-[inset_0_1px_2px_rgba(241,210,137,0.4),0_2px_4px_rgba(0,0,0,0.9)] bg-gradient-to-tr from-[#2a1d12] via-[#1a120b] to-[#0c0906] transition-all group-hover:border-brass group-hover:rotate-45 duration-500" />
        
        {/* Rebites discretos nos vértices (Aro Steampunk) */}
        <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brass-light shadow" />
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brass-light shadow" />
        
        {/* Símbolo Original */}
        <div className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <OfficialToolLogo id={tool.id} />
        </div>
      </div>

      {/* Nome da Ferramenta */}
      <span className="font-schematic text-xs sm:text-sm font-semibold tracking-wide text-[#dfd2be] group-hover:text-brass-light transition-colors whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
};

export const SkillInsignia = SkillChip;
