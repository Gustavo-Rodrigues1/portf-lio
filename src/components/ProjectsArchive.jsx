import React, { useState, useEffect, useCallback } from 'react';
import { profileData } from '../data/profile';
import { SteampunkGear } from './SteampunkGear';
import { GithubIcon } from './SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Bookmark 
} from 'lucide-react';

export const ProjectsArchive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const projects = profileData.projects || [];
  const totalProjects = projects.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  // Rotação automática contínua pelo tempo (4.5 segundos)
  useEffect(() => {
    if (isHovered || totalProjects <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, totalProjects, handleNext]);

  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Suporte a Touch Swipe para Mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Cálculo da posição de cada cartão (Centro em destaque, Laterais turvas)
  const getCardStyle = (index) => {
    let diff = index - currentIndex;
    if (diff > totalProjects / 2) diff -= totalProjects;
    if (diff < -totalProjects / 2) diff += totalProjects;

    if (diff === 0) {
      // Cartão Central em Destaque
      return {
        transform: 'translate(-50%, 0) scale(1)',
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 30,
        pointerEvents: 'auto',
      };
    } else if (diff === 1 || (totalProjects === 2 && diff === -1)) {
      // Cartão Lateral Direito (turvo e menor)
      return {
        transform: 'translate(calc(-50% + 56%), 0) scale(0.88)',
        opacity: 0.35,
        filter: 'blur(2.5px)',
        zIndex: 10,
        pointerEvents: 'auto',
      };
    } else if (diff === -1) {
      // Cartão Lateral Esquerdo (turvo e menor)
      return {
        transform: 'translate(calc(-50% - 56%), 0) scale(0.88)',
        opacity: 0.35,
        filter: 'blur(2.5px)',
        zIndex: 10,
        pointerEvents: 'auto',
      };
    } else {
      // Cartões adicionais ocultos
      return {
        transform: diff > 0 
          ? 'translate(calc(-50% + 110%), 0) scale(0.75)' 
          : 'translate(calc(-50% - 110%), 0) scale(0.75)',
        opacity: 0,
        filter: 'blur(6px)',
        zIndex: 0,
        pointerEvents: 'none',
      };
    }
  };

  return (
    <section
      id="projetos"
      className="relative py-24 bg-[#0a0807] border-b-2 border-brass-dark/60 overflow-hidden select-none"
    >
      {/* Detalhes de engrenagens industriais ao fundo */}
      <div className="absolute top-1/2 -left-20 pointer-events-none opacity-10">
        <SteampunkGear size={300} teeth={16} color="iron" speed="spin-slow" />
      </div>
      <div className="absolute bottom-10 -right-24 pointer-events-none opacity-10">
        <SteampunkGear size={280} teeth={14} color="brass" speed="spin-reverse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e1711] border border-brass-dark/70 text-xs font-schematic text-brass-light mb-3">
            <FolderGit2 className="w-4 h-4 text-copper-light" />
            <span>ARQUIVO DE PATENTES MECÂNICAS & SOFTWARE</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-brass-gradient tracking-wide mb-4">
            Projetos Registrados no GitHub
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/60"></span>
            <span className="text-copper-light text-xs font-schematic uppercase tracking-widest">
              Engenharia de Software • Soluções Web & TI
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            Mecanismos digitais forjados com precisão. Cada projeto representa um desafio de arquitetura,
            processamento de dados e experiência do usuário, documentado e versionado no GitHub.
          </p>
        </div>

        {/* Palco do Carrossel (3 Projetos: Central em Destaque e 2 Laterais Turvas) */}
        <div
          className="relative flex items-center justify-center overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Elemento Fantasma Invisível para Dimensionar a Altura do Palco de Forma Responsiva */}
          <div
            className="w-[90%] sm:w-[75%] md:w-[62%] lg:w-[50%] max-w-[560px] opacity-0 pointer-events-none select-none p-6 sm:p-7"
            aria-hidden="true"
          >
            <div className="steampunk-panel p-6 sm:p-7 rounded-lg border-2 border-transparent flex flex-col justify-between">
              <div className="brass-plate p-2.5 rounded mb-5">
                <span className="font-schematic text-[11px]">Patente: BR-UFS-0104-SI</span>
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold mb-2">Painel de Indicadores & Gestão de Dados</h3>
              <p className="text-xs font-schematic mb-4">Dashboard analítico com suporte a tomada de decisão</p>
              <p className="text-xs sm:text-sm font-body leading-relaxed mb-6">
                Plataforma interativa para consolidação de métricas, filtros em tempo real e visualização analítica desenvolvida com base nas competências de Sistemas de Informação.
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-[11px]">React</span>
                  <span className="px-2.5 py-1 text-[11px]">Tailwind CSS</span>
                  <span className="px-2.5 py-1 text-[11px]">JavaScript</span>
                </div>
              </div>
              <div className="pt-4 border-t border-transparent flex items-center justify-between">
                <div className="h-8"></div>
              </div>
            </div>
          </div>

          {/* Cartões dos Projetos Renderizados nas Posições Calculadas */}
          {projects.map((project, index) => {
            let diff = index - currentIndex;
            if (diff > totalProjects / 2) diff -= totalProjects;
            if (diff < -totalProjects / 2) diff += totalProjects;

            const isCenter = diff === 0;

            return (
              <div
                key={project.id}
                style={getCardStyle(index)}
                onClick={() => {
                  if (!isCenter) {
                    setCurrentIndex(index);
                  }
                }}
                className={`absolute top-0 left-1/2 w-[90%] sm:w-[75%] md:w-[62%] lg:w-[50%] max-w-[560px] h-full transition-all duration-700 ease-out ${
                  !isCenter ? 'cursor-pointer' : ''
                }`}
              >
                {/* Camada Transparente de Clique para os Cartões Laterais */}
                {!isCenter && (
                  <div 
                    className="absolute inset-0 z-30 rounded-lg hover:bg-black/10 transition-colors"
                    title={`Ver ${project.title}`}
                  />
                )}

                <div 
                  className={`steampunk-panel p-6 sm:p-7 rounded-lg border-2 transition-all duration-500 flex flex-col justify-between h-full group relative ${
                    isCenter 
                      ? 'border-brass shadow-[0_0_35px_rgba(198,156,77,0.35)]' 
                      : 'border-brass-dark/50 hover:border-brass-dark'
                  }`}
                >
                  {/* Rebites estruturais nos 4 cantos */}
                  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>

                  <div>
                    {/* Plaqueta de Patente Vitoriana */}
                    <div className="brass-plate p-2.5 rounded flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <Bookmark className="w-4 h-4 text-steamAmber-bright" />
                        <span className="font-schematic text-[11px] font-bold text-brass-light tracking-widest uppercase">
                          Patente: {project.patentNumber}
                        </span>
                      </div>
                      {project.highlight && (
                        <span className="text-[10px] font-schematic bg-steamAmber-dim/40 text-steamAmber-bright px-2 py-0.5 rounded border border-steamAmber-glow/40 uppercase font-bold">
                          Destaque SI
                        </span>
                      )}
                    </div>

                    {/* Título do Projeto */}
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-brass-light group-hover:text-brass-gradient transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Tagline / Subtítulo */}
                    <p className="text-xs font-schematic text-copper-light mb-4">
                      {project.tagline}
                    </p>

                    {/* Descrição Detalhada */}
                    <p className="text-xs sm:text-sm text-[#cebeaa] font-body leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tecnologias Utilizadas (Estilo Engrenagens / Tags de Metal) */}
                    <div className="mb-6">
                      <span className="text-[10px] font-schematic text-[#8f7d66] uppercase block mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        Componentes Técnicos:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techs.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-sm bg-[#221a13] border border-brass-dark/50 text-brass-light text-[11px] font-schematic"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Barra de Ações do Projeto */}
                  <div className="pt-4 border-t border-brass-dark/40 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-steampunk px-3.5 py-1.5 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase flex items-center gap-1.5"
                        title="Ver código no GitHub"
                      >
                        <GithubIcon className="w-4 h-4 text-copper-light" />
                        <span>GitHub</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-steampunk px-3.5 py-1.5 rounded text-xs font-schematic font-bold text-[#d8c8b4] hover:text-white uppercase flex items-center gap-1.5"
                          title="Ver protótipo ao vivo"
                        >
                          <ExternalLink className="w-4 h-4 text-brass-light" />
                          <span>Demonstração</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyLink(project.githubUrl, project.id)}
                      className="p-2 rounded bg-[#18120e] hover:bg-[#251c15] text-[#bdae99] hover:text-brass-light border border-brass-dark/40 text-xs font-schematic flex items-center gap-1 transition-colors"
                      title="Copiar link do GitHub"
                    >
                      {copiedId === project.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-steamAmber-bright" />
                          <span className="text-[10px] text-steamAmber-bright font-bold">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px]">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores de Círculos / Rebites Embaixo */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {projects.map((_, dotIdx) => {
            const isActive = currentIndex === dotIdx;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                  isActive
                    ? 'w-6 h-6 bg-[#3d2c1c] border-2 border-brass shadow-[0_0_12px_rgba(255,157,46,0.6)] scale-110'
                    : 'w-3.5 h-3.5 bg-[#1e1711] border border-brass-dark/60 hover:border-brass hover:bg-[#2e2116]'
                }`}
                title={`Projeto ${dotIdx + 1}`}
                aria-label={`Ir para o projeto ${dotIdx + 1}`}
              >
                <span
                  className={`rounded-full transition-all ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-steamAmber-bright shadow-[0_0_8px_#ff9d2e]'
                      : 'w-1 h-1 bg-brass-dark/60'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Rodapé da Seção com Botão para Perfil Geral do GitHub */}
        <div className="mt-14 text-center">
          <a
            href={profileData.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-steampunk inline-flex items-center gap-2 px-8 py-3.5 rounded text-xs sm:text-sm font-schematic font-bold text-brass-light hover:text-white uppercase tracking-wider shadow-lg group"
          >
            <GithubIcon className="w-5 h-5 text-copper-light group-hover:scale-110 transition-transform" />
            <span>Explorar Todos os Repositórios no GitHub</span>
            <ExternalLink className="w-4 h-4 text-brass-light" />
          </a>
        </div>

      </div>
    </section>
  );
};
