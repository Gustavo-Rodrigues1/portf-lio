import React, { useState, useEffect, useRef } from 'react';
import { SteampunkGear } from './SteampunkGear';
import { ChevronUp, Compass } from 'lucide-react';

/**
 * Barra lateral Steampunk com trilho de cremalheira vertical
 * e engrenagens mecânicas que giram conforme o scroll da página:
 * - Sentido horário ao descer (scroll down)
 * - Sentido anti-horário ao subir (scroll up)
 * - Suporte a clique e arraste (Click & Drag) no trilho e na engrenagem
 */
export const SteampunkSidebar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDragging, setIsDragging] = useState(false);
  const rafRef = useRef(null);
  const trackRef = useRef(null);

  const sections = [
    { id: 'hero', label: 'Início', roman: 'I', desc: 'Convés Principal' },
    { id: 'experiencia', label: 'Experiência', roman: 'II', desc: 'Atuação Profissional' },
    { id: 'habilidades', label: 'Habilidades', roman: 'III', desc: 'Insígnias Técnicas' },
    { id: 'projetos', label: 'Projetos', roman: 'IV', desc: 'Arquivo de Patentes' },
    { id: 'contato', label: 'Contato', roman: 'V', desc: 'Central Telegráfica' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? Math.min(Math.max(scrollY / totalHeight, 0), 1) : 0;

        // Fator de rotação contínua:
        // Ao descer: scrollY aumenta -> rotation aumenta (sentido horário em CSS)
        // Ao subir: scrollY diminui -> rotation diminui (sentido anti-horário em CSS)
        const currentRotation = scrollY * 0.45;

        setScrollProgress(progress);
        setRotation(currentRotation);

        // Detectar seção ativa no viewport
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i].id);
          if (sectionEl) {
            const rect = sectionEl.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.45) {
              setActiveSection(sections[i].id);
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Execução inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Atualizar scroll da janela a partir da posição do ponteiro no trilho
  const updateScrollFromPointer = (clientY) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const offsetY = clientY - rect.top;
    const progress = Math.min(Math.max(offsetY / rect.height, 0), 1);
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: progress * totalHeight,
      behavior: 'auto',
    });
  };

  // Iniciar interação de clique e arraste
  const handlePointerDown = (e) => {
    // Permitir apenas clique principal (botão esquerdo)
    if (e.button !== undefined && e.button !== 0) return;

    // Se clicou em um botão de waypoint, não iniciar drag do trilho
    if (e.target.closest('button')) return;

    setIsDragging(true);
    const clientY = e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY;
    if (clientY !== undefined) {
      updateScrollFromPointer(clientY);
    }

    const onPointerMove = (moveEvent) => {
      moveEvent.preventDefault();
      const currentY =
        moveEvent.clientY !== undefined
          ? moveEvent.clientY
          : moveEvent.touches?.[0]?.clientY;
      if (currentY !== undefined) {
        updateScrollFromPointer(currentY);
      }
    };

    const onPointerUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    window.addEventListener('mousemove', onPointerMove, { passive: false });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Altura útil da cremalheira
  const trackHeight = 210;

  return (
    <aside
      aria-label="Barra lateral mecânica de navegação"
      className="fixed right-2 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 select-none flex items-center"
    >
      {/* Console Vitoriano Industrial */}
      <div className={`relative flex flex-col items-center bg-[#130f0c]/95 backdrop-blur-md border rounded-2xl p-2 sm:p-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.85)] transition-all duration-300 ${
        isDragging ? 'border-brass shadow-amber-glow' : 'border-brass-dark/80 hover:border-brass/70'
      }`}>
        
        {/* Rebites nos cantos do painel */}
        <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-brass-light/80 shadow-[0_0_2px_#fff]"></span>
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brass-light/80 shadow-[0_0_2px_#fff]"></span>
        <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-brass-light/80 shadow-[0_0_2px_#fff]"></span>
        <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brass-light/80 shadow-[0_0_2px_#fff]"></span>

        {/* Topo do Console: Válvula / Selo de Latão */}
        <div className="flex flex-col items-center mb-2 pb-1 border-b border-brass-dark/40 w-full">
          <div className="w-5 h-5 rounded-full bg-[#1e1712] border border-brass/60 flex items-center justify-center shadow-inner">
            <Compass className="w-3 h-3 text-brass-light animate-spin-slow" />
          </div>
          <span className="text-[8px] font-schematic tracking-widest text-brass-light/80 mt-1 uppercase hidden sm:block">
            MEC-01
          </span>
        </div>

        {/* Trilho de Cremalheira Vertical Arrastável (Rack & Pinion) */}
        <div
          ref={trackRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          title="Clique ou arraste a engrenagem para rolar a página"
          className="relative flex items-center justify-center my-1 cursor-pointer"
          style={{ height: `${trackHeight}px`, width: '50px' }}
        >
          {/* Haste de Latão / Trilho dentado */}
          <div className="absolute inset-y-0 w-3 bg-gradient-to-r from-[#221811] via-[#4a3622] to-[#1c130d] rounded-full border border-brass-dark/70 shadow-inner flex flex-col justify-between py-2 pointer-events-none">
            {/* Dentes da cremalheira (entalhes) */}
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="w-full h-[1.5px] bg-[#825c27] opacity-60 self-center"
              />
            ))}
          </div>

          {/* Carrinho Mecânico com Engrenagens que acompanham o scroll ou são arrastadas */}
          <div
            className={`absolute left-1/2 flex items-center justify-center transition-transform ${
              isDragging
                ? 'scale-110 cursor-grabbing'
                : 'cursor-grab hover:scale-105 duration-75'
            }`}
            style={{
              top: `${scrollProgress * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Engrenagem Secundária de Cobre (contra-rotaciona para realismo físico) */}
            <div className="absolute -top-3 -right-2 opacity-80 pointer-events-none">
              <SteampunkGear
                size={22}
                teeth={7}
                color="copper"
                rotation={-rotation * 1.5}
                speed={null}
              />
            </div>

            {/* Engrenagem Principal de Latão (Gira no sentido horário ao descer e anti-horário ao subir) */}
            <div className={`relative ${isDragging ? 'drop-shadow-[0_0_15px_rgba(255,157,46,0.9)]' : 'drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]'}`}>
              <SteampunkGear
                size={44}
                teeth={10}
                color="brass"
                rotation={rotation}
                speed={null}
              />

              {/* Indicador de Pressão / Centro iluminado com pulso suave */}
              <div className={`absolute inset-0 m-auto w-2.5 h-2.5 rounded-full transition-all ${
                isDragging
                  ? 'bg-steamAmber-bright shadow-[0_0_12px_#ff9d2e] scale-125'
                  : 'bg-steamAmber-glow/80 shadow-[0_0_8px_#ff9d2e]'
              }`}></div>
            </div>
          </div>

          {/* Marcadores de Seções (Waypoints Alinhados ao Trilho) */}
          <div className="absolute inset-y-0 right-[-14px] sm:right-[-18px] flex flex-col justify-between py-1 z-10 pointer-events-none">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <div key={section.id} className="relative flex items-center group/item pointer-events-auto">
                  
                  {/* Botão Waypoint */}
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    aria-label={`Ir para seção ${section.label}`}
                    className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-brass border-2 border-brass-light shadow-[0_0_12px_#ff9d2e] scale-110'
                        : 'bg-[#1e1712] border border-brass-dark/70 hover:border-brass-light hover:scale-105'
                    }`}
                  >
                    <span
                      className={`text-[8px] sm:text-[9px] font-cinzel font-bold leading-none ${
                        isActive ? 'text-steampunk-darkest' : 'text-brass-light/90'
                      }`}
                    >
                      {section.roman}
                    </span>

                    {/* Brilho quando ativo */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-full bg-steamAmber-glow/20 animate-pulse pointer-events-none"></span>
                    )}
                  </button>

                  {/* Tooltip Vitoriano em Pergaminho/Bronze ao passar o mouse */}
                  <div
                    className="absolute right-full mr-3.5 hidden group-hover/item:flex items-center gap-2 px-2.5 py-1 rounded bg-[#18130e]/95 border border-brass-dark text-nowrap shadow-2xl pointer-events-none transition-all duration-200 z-50"
                  >
                    <div className="flex flex-col text-right">
                      <span className="font-cinzel text-xs font-bold text-brass-gradient uppercase">
                        {section.label}
                      </span>
                      <span className="text-[9px] font-schematic text-[#ab9982]">
                        {section.desc}
                      </span>
                    </div>
                    <span className="text-copper-light text-[10px]">⚙</span>

                    {/* Seta do tooltip apontando para a direita */}
                    <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#18130e]"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botão de Retornar ao Topo com Estilo Steampunk */}
        <div className="flex flex-col items-center mt-2 pt-2 border-t border-brass-dark/40 w-full">
          <button
            type="button"
            onClick={scrollToTop}
            title="Retornar ao topo"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full btn-steampunk flex items-center justify-center text-brass-light hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <ChevronUp className="w-4 h-4 text-brass-light" />
          </button>
        </div>

      </div>
    </aside>
  );
};
