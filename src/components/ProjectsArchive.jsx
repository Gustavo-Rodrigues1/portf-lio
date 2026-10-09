import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { SteampunkGear } from './SteampunkGear';
import { GithubIcon } from './SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers,
  Sparkles,
  Bookmark
} from 'lucide-react';

export const ProjectsArchive = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section
      id="projetos"
      className="relative py-24 bg-[#0a0807] border-b-2 border-brass-dark/60 overflow-hidden"
    >
      {/* Detalhes de engrenagens de fundo */}
      <div className="absolute top-1/2 -left-20 pointer-events-none opacity-10">
        <SteampunkGear size={300} teeth={16} color="iron" speed="spin-slow" />
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
              Engenharia • Sistemas de Informação UFS
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            Mecanismos digitais forjados com precisão. Cada projeto representa um desafio de arquitetura,
            processamento de dados e experiência do usuário, documentado e versionado no GitHub.
          </p>

          {/* Aviso Amigável para o Usuário Customizar */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1c1611] border border-brass-dark/60 text-xs font-schematic text-copper-light">
            <Sparkles className="w-4 h-4 text-steamAmber-bright flex-shrink-0" />
            <span>Personalize os links e descrições a qualquer momento no arquivo <code className="text-brass-light bg-black/40 px-1 py-0.5 rounded">src/data/profile.js</code></span>
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.projects.map((project) => (
            <div
              key={project.id}
              className="steampunk-panel p-6 sm:p-7 rounded-lg border-2 border-brass-dark/70 hover:border-brass transition-all duration-300 flex flex-col justify-between group relative hover:-translate-y-1"
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
          ))}
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
