import React from 'react';

/**
 * Computador Portátil Steampunk Vitoriano em Visão de Perfil (3/4 Angulado)
 * Inspirado fielmente na foto de referência:
 * - Chassi de mogno maciço com cantoneiras e rebites de latão
 * - Visão lateral mostrando o grande manômetro de latão embutido
 * - Monitor inclinado em moldura de filigrana e tela CRT escura sem texto
 * - Teclado de máquina de escrever com teclas redondas e barra de espaço de latão
 * - Corneta fonográfica e volante regulador de 3 raios
 * - Sem botões interativos e sem texto no display
 */
export const SteampunkComputer = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none py-2">
      
      {/* Container SVG responsivo com a ilustração 3/4 do computador steampunk */}
      <div className="relative w-full aspect-[540/390] drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
        <svg
          viewBox="0 0 540 390"
          className="w-full h-full overflow-visible pointer-events-none"
        >
          <defs>
            {/* Gradiente da Madeira Nobre - Face Lateral (Mogno Escuro) */}
            <linearGradient id="wood-side-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a2515" />
              <stop offset="50%" stopColor="#30150a" />
              <stop offset="100%" stopColor="#1c0a04" />
            </linearGradient>

            {/* Gradiente da Madeira Nobre - Face Frontal (Mogno Iluminado) */}
            <linearGradient id="wood-front-grad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#5c2f1b" />
              <stop offset="40%" stopColor="#431e0f" />
              <stop offset="100%" stopColor="#250d05" />
            </linearGradient>

            {/* Gradiente do Deque do Teclado */}
            <linearGradient id="wood-deck-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3f1e10" />
              <stop offset="60%" stopColor="#281107" />
              <stop offset="100%" stopColor="#140602" />
            </linearGradient>

            {/* Gradiente de Latão Dourado / Envelhecido */}
            <linearGradient id="brass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7dc99" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="70%" stopColor="#8a631d" />
              <stop offset="100%" stopColor="#4d350c" />
            </linearGradient>

            {/* Gradiente de Cobre Polido */}
            <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3b07e" />
              <stop offset="50%" stopColor="#b87333" />
              <stop offset="100%" stopColor="#63320c" />
            </linearGradient>

            {/* Gradiente do Vidro da Tela CRT Escura (Sem texto, apenas brilho ambiente) */}
            <radialGradient id="screen-crt-grad" cx="45%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#1f150d" />
              <stop offset="55%" stopColor="#120c07" />
              <stop offset="100%" stopColor="#060402" />
            </radialGradient>

            {/* Mostrador Envelhecido do Manômetro Lateral */}
            <radialGradient id="gauge-face-grad" cx="42%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#f8eed8" />
              <stop offset="60%" stopColor="#dfcfad" />
              <stop offset="100%" stopColor="#a3906a" />
            </radialGradient>

            {/* Brilho da Corneta Fonográfica */}
            <linearGradient id="horn-brass-grad" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#fae7b5" />
              <stop offset="30%" stopColor="#d4af37" />
              <stop offset="75%" stopColor="#7a5518" />
              <stop offset="100%" stopColor="#452e0a" />
            </linearGradient>

            {/* Sombra de profundidade sob o chassi */}
            <filter id="chassis-shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* ============================================================== */}
          {/* 1. CORNETA FONOGRÁFICA / ALTO-FALANTE ACÚSTICO NO FUNDO        */}
          {/* ============================================================== */}
          <g id="phonograph-horn" className="opacity-95">
            {/* Haste e suporte vertical da corneta */}
            <rect x="424" y="110" width="8" height="95" rx="3" fill="url(#brass-grad)" stroke="#452e0a" strokeWidth="1" />
            <circle cx="428" cy="110" r="7" fill="url(#brass-grad)" stroke="#523a10" strokeWidth="1" />
            
            {/* Base torneada da corneta */}
            <ellipse cx="428" cy="205" rx="14" ry="6" fill="#30150a" stroke="#d4af37" strokeWidth="1.2" />

            {/* Braço curvo de som que conecta ao fonógrafo */}
            <path
              d="M 428 115 C 445 110, 465 95, 470 70"
              fill="none"
              stroke="url(#brass-grad)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Sino / Campana da Corneta Acústica */}
            <path
              d="M 458 80 C 475 75, 490 60, 505 40 L 515 72 C 495 82, 475 88, 458 85 Z"
              fill="url(#horn-brass-grad)"
              stroke="#543c13"
              strokeWidth="1.2"
            />
            {/* Abertura oval da corneta acústica com interior escurecido */}
            <ellipse cx="510" cy="56" rx="9" ry="18" fill="#2a1a09" stroke="#fae7b5" strokeWidth="1.5" transform="rotate(-15 510 56)" />
            <ellipse cx="510" cy="56" rx="6" ry="14" fill="#0d0804" transform="rotate(-15 510 56)" />
          </g>

          {/* ============================================================== */}
          {/* 2. CHASSI DE MOGNO: FACE LATERAL ESQUERDA (Visão de Perfil)    */}
          {/* ============================================================== */}
          <g id="chassis-side-face">
            {/* Painel lateral de madeira em perspectiva */}
            <polygon
              points="85,185 205,220 205,315 85,275"
              fill="url(#wood-side-grad)"
              stroke="#1a0a04"
              strokeWidth="1.5"
            />

            {/* Cantoneira superior de latão com rebites */}
            <polygon points="85,185 205,220 205,227 85,192" fill="url(#brass-grad)" opacity="0.9" />
            <polygon points="85,185 91,187 91,277 85,275" fill="url(#brass-grad)" opacity="0.9" />
            <polygon points="85,269 205,309 205,315 85,275" fill="url(#brass-grad)" opacity="0.9" />
            <polygon points="199,218 205,220 205,315 199,313" fill="url(#brass-grad)" opacity="0.9" />

            {/* Rebites nos cantos do painel lateral */}
            <circle cx="90" cy="191" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="200" cy="223" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="90" cy="272" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="200" cy="311" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />

            {/* ========================================================== */}
            {/* GRANDE MANÔMETRO / BARÔMETRO DE LATÃO NA LATERAL           */}
            {/* ========================================================== */}
            <g id="side-brass-gauge">
              {/* Anel externo de fixação de latão rebitado */}
              <ellipse cx="145" cy="250" rx="34" ry="32" fill="#140803" stroke="url(#brass-grad)" strokeWidth="4.5" />
              {/* Rebites ao redor do manômetro */}
              <circle cx="145" cy="217" r="1.5" fill="#fce5a3" stroke="#2c1e08" strokeWidth="0.5" />
              <circle cx="145" cy="283" r="1.5" fill="#fce5a3" stroke="#2c1e08" strokeWidth="0.5" />
              <circle cx="113" cy="250" r="1.5" fill="#fce5a3" stroke="#2c1e08" strokeWidth="0.5" />
              <circle cx="177" cy="250" r="1.5" fill="#fce5a3" stroke="#2c1e08" strokeWidth="0.5" />
              
              {/* Mostrador de pergaminho antigo */}
              <ellipse cx="145" cy="250" rx="28" ry="26" fill="url(#gauge-face-grad)" stroke="#4a3617" strokeWidth="1" />
              
              {/* Ticks e graduações do mostrador analógico */}
              <path
                d="M 125 240 A 20 18 0 1 1 165 240"
                fill="none"
                stroke="#473418"
                strokeWidth="1.2"
                strokeDasharray="1.5 2"
              />
              <path
                d="M 152 232 A 18 16 0 0 1 163 245"
                fill="none"
                stroke="#942c1e"
                strokeWidth="2"
              />

              {/* Ponteiro de medição mecânico em latão/aço */}
              <line x1="145" y1="250" x2="158" y2="236" stroke="#261708" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="145" cy="250" r="4.5" fill="url(#brass-grad)" stroke="#2c1a08" strokeWidth="1" />
              <circle cx="145" cy="250" r="1.5" fill="#fce5a3" />

              {/* Reflexo no vidro circular */}
              <path
                d="M 125 238 C 132 230, 155 230, 163 240"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.4"
                strokeLinecap="round"
              />
            </g>

            {/* Suporte articulado com tubulação de cobre na lateral */}
            <path
              d="M 175 220 C 182 205, 185 180, 178 160"
              fill="none"
              stroke="url(#copper-grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Abraçadeira mecânica de fixação */}
            <rect x="176" y="195" width="5" height="8" rx="1" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="0.7" />

            {/* Volante de regulagem de latão com 3 raios na lateral superior */}
            <g id="side-handwheel" transform="translate(176, 158)">
              <circle cx="0" cy="0" r="15" fill="none" stroke="url(#brass-grad)" strokeWidth="3" />
              <circle cx="0" cy="0" r="4.5" fill="#30150a" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="0" y1="-14" x2="0" y2="-4" stroke="url(#brass-grad)" strokeWidth="2" />
              <line x1="-12" y1="8" x2="-3" y2="2" stroke="url(#brass-grad)" strokeWidth="2" />
              <line x1="12" y1="8" x2="3" y2="2" stroke="url(#brass-grad)" strokeWidth="2" />
              <circle cx="0" cy="0" r="1.5" fill="#fff" />
            </g>
          </g>

          {/* ============================================================== */}
          {/* 3. CHASSI DE MOGNO: FACE FRONTAL (Visão 3/4)                    */}
          {/* ============================================================== */}
          <g id="chassis-front-face">
            {/* Painel frontal de mogno maciço */}
            <polygon
              points="205,220 440,178 440,270 205,315"
              fill="url(#wood-front-grad)"
              stroke="#1a0a04"
              strokeWidth="1.5"
            />

            {/* Cantoneiras de latão da face frontal */}
            <polygon points="205,220 440,178 440,185 205,227" fill="url(#brass-grad)" opacity="0.95" />
            <polygon points="205,309 440,264 440,270 205,315" fill="url(#brass-grad)" opacity="0.95" />
            <polygon points="434,179 440,178 440,270 434,269" fill="url(#brass-grad)" opacity="0.95" />

            {/* Rebites dourados ao longo da cantoneira frontal */}
            <circle cx="212" cy="224" r="2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="280" cy="211" r="2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="360" cy="196" r="2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="433" cy="183" r="2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />

            {/* Brasão / Placa Oval de Latão Frontal (Estilo Ferroviário/GWR) */}
            <ellipse cx="320" cy="235" rx="28" ry="18" fill="url(#brass-grad)" stroke="#422e0a" strokeWidth="1.5" transform="rotate(-10 320 235)" />
            <ellipse cx="320" cy="235" rx="23" ry="14" fill="#2d150a" stroke="#876221" strokeWidth="1" transform="rotate(-10 320 235)" />
            {/* Emblema central entalhado */}
            <circle cx="320" cy="235" r="5" fill="url(#brass-grad)" />

            {/* Manômetros miniatura na parte frontal com hastes verticais */}
            {/* Manômetro frontal 1 */}
            <rect x="252" y="248" width="3.5" height="15" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="0.6" />
            <circle cx="254" cy="244" r="9" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="1.2" />
            <circle cx="254" cy="244" r="6.5" fill="url(#gauge-face-grad)" />
            <line x1="254" y1="244" x2="257" y2="240" stroke="#9e2a1b" strokeWidth="1.2" />

            {/* Manômetro frontal 2 */}
            <rect x="382" y="222" width="3.5" height="15" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="0.6" />
            <circle cx="384" cy="218" r="9" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="1.2" />
            <circle cx="384" cy="218" r="6.5" fill="url(#gauge-face-grad)" />
            <line x1="384" y1="218" x2="387" y2="214" stroke="#221508" strokeWidth="1.2" />
          </g>

          {/* ============================================================== */}
          {/* 4. MONITOR RETRÔ INCLINADO (Open Lid) EM PERSPECTIVA 3/4       */}
          {/* ============================================================== */}
          <g id="tilted-monitor-lid">
            {/* Estrutura posterior da tampa do monitor (Couro/Mogno) */}
            <polygon
              points="148,68 370,42 386,192 165,220"
              fill="#261309"
              stroke="#140803"
              strokeWidth="2"
            />

            {/* Moldura Externa de Filigrana em Latão Trabalhado */}
            <polygon
              points="152,72 366,46 382,188 168,216"
              fill="url(#brass-grad)"
              stroke="#593e11"
              strokeWidth="2.5"
            />

            {/* Borda interna chanfrada (Efeito de relevo dourado) */}
            <polygon
              points="159,80 359,54 374,180 174,208"
              fill="#3a1e10"
              stroke="#8a6727"
              strokeWidth="1.5"
            />

            {/* ========================================================== */}
            {/* TELA CRT ESCURA (SEM TEXTO - Apenas Vidro Vintage e Brilho) */}
            {/* ========================================================== */}
            <polygon
              points="170,90 348,68 362,170 184,196"
              fill="url(#screen-crt-grad)"
              stroke="#1a1109"
              strokeWidth="2"
            />

            {/* Reflexo curvo no vidro da tela desligada / fósforo escuro */}
            <path
              d="M 185 105 C 240 85, 305 75, 340 80"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.18"
              strokeLinecap="round"
            />
            <path
              d="M 195 125 C 245 108, 295 100, 342 104"
              fill="none"
              stroke="#ffd276"
              strokeWidth="1"
              opacity="0.1"
              strokeLinecap="round"
            />

            {/* Cantoneiras douradas e rebites nos 4 cantos da moldura */}
            <circle cx="156" cy="76" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="362" cy="50" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="378" cy="184" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="172" cy="212" r="2.2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />

            {/* Dobradiças cilíndricas pesadas de latão na base do monitor */}
            <rect x="180" y="210" width="16" height="8" rx="2" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="1" transform="rotate(-7 180 210)" />
            <rect x="345" y="188" width="16" height="8" rx="2" fill="url(#brass-grad)" stroke="#3a2509" strokeWidth="1" transform="rotate(-7 345 188)" />
          </g>

          {/* ============================================================== */}
          {/* 5. TECLADO MECÂNICO DE MÁQUINA DE ESCREVER (Visão 3/4)         */}
          {/* ============================================================== */}
          <g id="typewriter-keyboard-deck">
            {/* Plataforma de madeira projetada para a frente em perspectiva */}
            <polygon
              points="205,315 440,270 495,315 250,370"
              fill="url(#wood-deck-grad)"
              stroke="#120602"
              strokeWidth="1.5"
            />

            {/* Borda frontal chanfrada de latão polido */}
            <polygon points="250,370 495,315 495,322 250,377" fill="url(#brass-grad)" opacity="0.95" />
            <polygon points="205,315 250,370 250,377 205,322" fill="url(#brass-grad)" opacity="0.95" />

            {/* Cantoneiras de latão e rebites na base do teclado */}
            <circle cx="255" cy="372" r="2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />
            <circle cx="490" cy="318" r="2" fill="#fff5cc" stroke="#3d2a0e" strokeWidth="0.8" />

            {/* Rolo de Máquina de Escrever / Cilindro Superior */}
            <path
              d="M 235 315 L 420 278"
              stroke="#170d06"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M 235 315 L 420 278"
              stroke="url(#brass-grad)"
              strokeWidth="1.8"
            />

            {/* ========================================================== */}
            {/* TECLAS CIRCULARES DE LATÃO ESTILO REMINGTON/UNDERWOOD      */}
            {/* ========================================================== */}
            {/* Fileira 1 (Superior) */}
            {[
              { cx: 250, cy: 326 },
              { cx: 272, cy: 322 },
              { cx: 294, cy: 318 },
              { cx: 316, cy: 314 },
              { cx: 338, cy: 310 },
              { cx: 360, cy: 306 },
              { cx: 382, cy: 302 },
              { cx: 404, cy: 298 },
            ].map((k, i) => (
              <g key={`r1-${i}`}>
                <ellipse cx={k.cx} cy={k.cy + 1} rx="8.5" ry="5.5" fill="#0d0704" />
                <ellipse cx={k.cx} cy={k.cy} rx="8.5" ry="5.5" fill="#1f140b" stroke="url(#brass-grad)" strokeWidth="1.5" />
                <ellipse cx={k.cx} cy={k.cy} rx="5.5" ry="3.5" fill="#0a0503" stroke="#876221" strokeWidth="0.6" />
              </g>
            ))}

            {/* Fileira 2 (Meio) */}
            {[
              { cx: 260, cy: 339 },
              { cx: 282, cy: 335 },
              { cx: 304, cy: 331 },
              { cx: 326, cy: 327 },
              { cx: 348, cy: 323 },
              { cx: 370, cy: 319 },
              { cx: 392, cy: 315 },
              { cx: 414, cy: 311 },
            ].map((k, i) => (
              <g key={`r2-${i}`}>
                <ellipse cx={k.cx} cy={k.cy + 1} rx="8.5" ry="5.5" fill="#0d0704" />
                <ellipse cx={k.cx} cy={k.cy} rx="8.5" ry="5.5" fill="#1f140b" stroke="url(#brass-grad)" strokeWidth="1.5" />
                <ellipse cx={k.cx} cy={k.cy} rx="5.5" ry="3.5" fill="#0a0503" stroke="#876221" strokeWidth="0.6" />
              </g>
            ))}

            {/* Fileira 3 (Inferior) */}
            {[
              { cx: 272, cy: 352 },
              { cx: 294, cy: 348 },
              { cx: 316, cy: 344 },
              { cx: 338, cy: 340 },
              { cx: 360, cy: 336 },
              { cx: 382, cy: 332 },
              { cx: 404, cy: 328 },
            ].map((k, i) => (
              <g key={`r3-${i}`}>
                <ellipse cx={k.cx} cy={k.cy + 1} rx="8.5" ry="5.5" fill="#0d0704" />
                <ellipse cx={k.cx} cy={k.cy} rx="8.5" ry="5.5" fill="#1f140b" stroke="url(#brass-grad)" strokeWidth="1.5" />
                <ellipse cx={k.cx} cy={k.cy} rx="5.5" ry="3.5" fill="#0a0503" stroke="#876221" strokeWidth="0.6" />
              </g>
            ))}

            {/* Barra de Espaço Cilíndrica de Latão Maciço com braços de suporte */}
            <path
              d="M 310 361 L 415 339"
              stroke="#1a0e05"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 310 360 L 415 338"
              stroke="url(#brass-grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Suportes metálicos da barra de espaço */}
            <line x1="322" y1="363" x2="322" y2="368" stroke="url(#brass-grad)" strokeWidth="1.8" />
            <line x1="400" y1="346" x2="400" y2="351" stroke="url(#brass-grad)" strokeWidth="1.8" />

            {/* Caixa telegráfica / contador mecânico na lateral do teclado */}
            <polygon
              points="445,290 480,282 485,302 450,310"
              fill="url(#brass-grad)"
              stroke="#3a2509"
              strokeWidth="1.2"
            />
            <ellipse cx="465" cy="296" rx="6" ry="4" fill="#1e1308" stroke="#f1d289" strokeWidth="0.8" />
          </g>

        </svg>
      </div>

    </div>
  );
};
