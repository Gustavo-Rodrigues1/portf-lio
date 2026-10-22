import React, { useEffect, useRef } from 'react';

/**
 * SteampunkCursor
 * Combina:
 * 1. Trilha / Fila de 3 Engrenagens Mecânicas (Trailing Snake/Train)
 *    - A maior na frente (mais próxima do cursor)
 *    - A média no meio
 *    - A menor atrás (fechando a fila)
 *    - Cada uma segue a anterior de forma fluida (física trailing em fila indiana)
 *    - Não ficam embaixo do cursor: mantêm distância da ponta do mouse
 * 4. Partículas Sutis de Faíscas Incandescentes & Vapor Industrial via Canvas 2D
 * 5. Totalmente compatível com o ponteiro nativo de latão
 * 
 * 100% Desativado em dispositivos móveis e touchscreens.
 */
export const SteampunkCursor = () => {
  const canvasRef = useRef(null);
  const gear1ElRef = useRef(null);
  const gear2ElRef = useRef(null);
  const gear3ElRef = useRef(null);

  useEffect(() => {
    // 1. Verificação rigorosa para desativar em Mobile / Touchscreens
    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches ||
        'ontouchstart' in window);

    if (isTouchDevice) {
      return; // Não inicializa nada em mobile
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Estado do mouse
    const mouse = { x: -200, y: -200, speed: 0 };

    // Fila das 3 Engrenagens (1: Maior/Frente, 2: Média/Meio, 3: Menor/Trás)
    const gears = [
      {
        x: -200,
        y: -200,
        size: 22, // Maior
        rotation: 0,
        rotSpeed: 1.0,
        lerp: 0.20,
        el: gear1ElRef,
      },
      {
        x: -200,
        y: -200,
        size: 16, // Média
        rotation: 0,
        rotSpeed: -1.35, // Gira no sentido anti-horário
        lerp: 0.15,
        el: gear2ElRef,
      },
      {
        x: -200,
        y: -200,
        size: 12, // Menor
        rotation: 0,
        rotSpeed: 1.7, // Gira mais rápido
        lerp: 0.11,
        el: gear3ElRef,
      },
    ];

    let isHovered = false;
    let isClicking = false;
    let scale = 1;
    let targetScale = 1;

    // Arrays de partículas
    const sparks = [];
    const steamPuffs = [];

    // Gerador de faíscas incandescentes
    const createSpark = (x, y, burst = false) => {
      const count = burst ? 8 : 1;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = burst ? Math.random() * 2.8 + 1.2 : Math.random() * 1.4 + 0.4;
        sparks.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (burst ? 0.7 : 0.2),
          life: 1.0,
          decay: burst ? Math.random() * 0.04 + 0.03 : Math.random() * 0.05 + 0.035,
          size: burst ? Math.random() * 1.8 + 1.2 : Math.random() * 1.2 + 0.8,
          color: Math.random() > 0.35 ? '#ffd275' : '#ff9d2e',
        });
      }
    };

    // Gerador de vapor industrial
    const createSteamPuff = (x, y, burst = false) => {
      const count = burst ? 3 : 1;
      for (let i = 0; i < count; i++) {
        steamPuffs.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -(Math.random() * 0.7 + 0.25),
          radius: burst ? Math.random() * 4 + 3 : Math.random() * 2.5 + 1.5,
          maxRadius: burst ? Math.random() * 10 + 8 : Math.random() * 6 + 4,
          alpha: burst ? 0.35 : 0.18,
          decay: burst ? 0.015 : 0.018,
        });
      }
    };

    let moveDistance = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const dx = clientX - mouse.x;
      const dy = clientY - mouse.y;
      const dist = Math.hypot(dx, dy);
      mouse.speed = dist;
      moveDistance += dist;

      mouse.x = clientX;
      mouse.y = clientY;

      // Solta pequenas faíscas ao mover (brotam da última engrenagem da fila)
      if (moveDistance > 32) {
        const lastGear = gears[2];
        createSpark(lastGear.x + 6, lastGear.y + 6, false);
        if (Math.random() > 0.6) {
          createSteamPuff(lastGear.x + 6, lastGear.y + 6, false);
        }
        moveDistance = 0;
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
      targetScale = 0.82; // Recuo mecânico
      // Explosão de faíscas ao longo da fila
      createSpark(gears[0].x + 11, gears[0].y + 11, true);
      createSteamPuff(gears[2].x + 6, gears[2].y + 6, true);
    };

    const handleMouseUp = () => {
      isClicking = false;
      targetScale = isHovered ? 1.2 : 1.0;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, select, textarea, .cursor-pointer'
      );
      if (interactive) {
        isHovered = true;
        targetScale = 1.2;
      } else {
        isHovered = false;
        targetScale = 1.0;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Loop de renderização fluida (60 FPS)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      scale += (targetScale - scale) * 0.2;
      const speedBoost = Math.min(mouse.speed * 0.08, 3.5);
      mouse.speed *= 0.9;

      // =========================================================
      // Fila Indiana / Trilha das Engrenagens (Alinhada com o Cursor)
      // =========================================================

      // 1. Engrenagem 1 (MAIOR): Alinhada diretamente na cauda da haste da seta do cursor
      const target1X = mouse.x + 18;
      const target1Y = mouse.y + 34;
      gears[0].x += (target1X - gears[0].x) * gears[0].lerp;
      gears[0].y += (target1Y - gears[0].y) * gears[0].lerp;

      // 2. Engrenagem 2 (MÉDIA): Segue em linha contínua logo atrás da primeira
      const target2X = gears[0].x + 7;
      const target2Y = gears[0].y + 9;
      gears[1].x += (target2X - gears[1].x) * gears[1].lerp;
      gears[1].y += (target2Y - gears[1].y) * gears[1].lerp;

      // 3. Engrenagem 3 (MENOR): Fecha a haste mecânica em alinhamento perfeito
      const target3X = gears[1].x + 6;
      const target3Y = gears[1].y + 8;
      gears[2].x += (target3X - gears[2].x) * gears[2].lerp;
      gears[2].y += (target3Y - gears[2].y) * gears[2].lerp;

      // Atualizar rotações e estilos visuais de cada engrenagem individualmente
      gears.forEach((g) => {
        const mult = g.rotSpeed > 0 ? 1 : -1;
        const currentSpeed = (Math.abs(g.rotSpeed) + speedBoost) * mult;
        g.rotation = (g.rotation + currentSpeed) % 360;

        if (g.el.current) {
          const half = g.size / 2;
          g.el.current.style.transform = `translate3d(${g.x - half}px, ${g.y - half}px, 0) scale(${scale}) rotate(${g.rotation}deg)`;

          if (isHovered) {
            g.el.current.style.filter =
              'drop-shadow(0 0 6px rgba(255, 157, 46, 0.85)) drop-shadow(0 0 2px rgba(246, 217, 149, 0.9))';
            g.el.current.style.opacity = '1';
          } else {
            g.el.current.style.filter =
              'drop-shadow(0 0 3px rgba(198, 156, 77, 0.45)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7))';
            g.el.current.style.opacity = '0.85';
          }
        }
      });

      // 1. Renderizar Vapor Industrial
      for (let i = steamPuffs.length - 1; i >= 0; i--) {
        const p = steamPuffs[i];
        p.x += p.vx;
        p.y += p.vy;
        p.radius += (p.maxRadius - p.radius) * 0.05;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          steamPuffs.splice(i, 1);
          continue;
        }

        ctx.save();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(240, 225, 200, ${p.alpha * 0.7})`);
        grad.addColorStop(0.6, `rgba(180, 160, 140, ${p.alpha * 0.35})`);
        grad.addColorStop(1, 'rgba(120, 100, 80, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Renderizar Faíscas Incandescentes
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.07;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.fillStyle = s.color;
        ctx.shadowColor = '#ff9d2e';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Canvas para Faíscas e Vapor (Oculto no mobile via CSS e JS) */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
        style={{ width: '100vw', height: '100vh' }}
      />

      {/* =========================================================
          FILA DE ENGRENAGENS (TRILHA EM CASCATA)
          ========================================================= */}

      {/* 1. ENGRENAGEM MAIOR (FRENTE DA FILA - LATÃO POLIDO, ~22px) */}
      <div
        ref={gear1ElRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block will-change-transform"
        style={{
          width: '22px',
          height: '22px',
          transform: 'translate3d(-200px, -200px, 0)',
          transition: 'filter 0.2s ease, opacity 0.2s ease',
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="t-brass" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8e6c27" />
              <stop offset="65%" stopColor="#d4a853" />
              <stop offset="100%" stopColor="#654c18" />
            </radialGradient>
          </defs>
          {/* 8 Dentes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={`g1-${angle}`}
              x="14"
              y="2"
              width="4"
              height="5"
              rx="0.8"
              fill="#b98d36"
              stroke="#ffe5a3"
              strokeWidth="0.5"
              transform={`rotate(${angle} 16 16)`}
            />
          ))}
          <circle cx="16" cy="16" r="11" fill="url(#t-brass)" stroke="#ffe5a3" strokeWidth="0.8" />
          {/* Orifícios */}
          {[0, 90, 180, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={`g1-h-${angle}`}
                cx={16 + 5.5 * Math.cos(rad)}
                cy={16 + 5.5 * Math.sin(rad)}
                r="1.5"
                fill="#16110a"
              />
            );
          })}
          <circle cx="16" cy="16" r="3.4" fill="#271c10" stroke="#d4a853" strokeWidth="0.6" />
          <circle cx="16" cy="16" r="1.4" fill="#ff9d2e" />
        </svg>
      </div>

      {/* 2. ENGRENAGEM MÉDIA (MEIO DA FILA - COBRE VINTAGE, ~16px) */}
      <div
        ref={gear2ElRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block will-change-transform"
        style={{
          width: '16px',
          height: '16px',
          transform: 'translate3d(-200px, -200px, 0)',
          transition: 'filter 0.2s ease, opacity 0.2s ease',
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 28 28" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="t-copper" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#864719" />
              <stop offset="65%" stopColor="#c5783d" />
              <stop offset="100%" stopColor="#5e3010" />
            </radialGradient>
          </defs>
          {/* 6 Dentes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <rect
              key={`g2-${angle}`}
              x="12.5"
              y="2"
              width="3"
              height="4.5"
              rx="0.6"
              fill="#aa6029"
              stroke="#fbc193"
              strokeWidth="0.5"
              transform={`rotate(${angle} 14 14)`}
            />
          ))}
          <circle cx="14" cy="14" r="8.5" fill="url(#t-copper)" stroke="#fbc193" strokeWidth="0.7" />
          {[0, 120, 240].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={`g2-h-${angle}`}
                cx={14 + 4.2 * Math.cos(rad)}
                cy={14 + 4.2 * Math.sin(rad)}
                r="1.2"
                fill="#150b05"
              />
            );
          })}
          <circle cx="14" cy="14" r="2.8" fill="#201007" stroke="#e99a5e" strokeWidth="0.5" />
          <circle cx="14" cy="14" r="1.1" fill="#ffe5a3" />
        </svg>
      </div>

      {/* 3. ENGRENAGEM MENOR (TRÁS DA FILA - FERRO/BRONZE, ~12px) */}
      <div
        ref={gear3ElRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block will-change-transform"
        style={{
          width: '12px',
          height: '12px',
          transform: 'translate3d(-200px, -200px, 0)',
          transition: 'filter 0.2s ease, opacity 0.2s ease',
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="t-iron" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3c3631" />
              <stop offset="65%" stopColor="#686059" />
              <stop offset="100%" stopColor="#1a1715" />
            </radialGradient>
          </defs>
          {/* 5 Dentes */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <rect
              key={`g3-${angle}`}
              x="10.8"
              y="1.5"
              width="2.4"
              height="3.5"
              rx="0.5"
              fill="#3c3631"
              stroke="#827a72"
              strokeWidth="0.4"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="6.5" fill="url(#t-iron)" stroke="#d4a853" strokeWidth="0.6" />
          <circle cx="12" cy="12" r="2.2" fill="#14110f" stroke="#827a72" strokeWidth="0.5" />
          <circle cx="12" cy="12" r="0.9" fill="#ff9d2e" />
        </svg>
      </div>
    </>
  );
};
