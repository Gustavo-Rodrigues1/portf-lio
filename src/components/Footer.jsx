import React from 'react';
import { SteampunkGear } from './SteampunkGear';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import { ArrowUp, Heart, Shield } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070605] border-t-2 border-brass-dark text-[#ad9d88] py-12 overflow-hidden">
      {/* Engrenagens Decorativas no Rodapé */}
      <div className="absolute -bottom-10 left-6 opacity-20 pointer-events-none">
        <SteampunkGear size={120} teeth={10} color="brass" speed="spin-slow" />
      </div>
      <div className="absolute -bottom-14 right-8 opacity-20 pointer-events-none">
        <SteampunkGear size={150} teeth={12} color="copper" speed="spin-reverse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brass-dark/40">
          
          {/* Logo & Titulação */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-cinzel text-base sm:text-lg font-bold text-brass-gradient uppercase tracking-wider">
              {profileData.personal.name}
            </span>
            <span className="text-xs font-schematic text-copper-light mt-0.5">
              Bacharel em Sistemas de Informação • Universidade Federal de Sergipe (UFS)
            </span>
          </div>

          {/* Links e Botão Retornar ao Topo */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-steampunk p-2.5 rounded text-brass-light hover:text-white"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-steampunk p-2.5 rounded text-brass-light hover:text-white"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-steampunk px-4 py-2 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase flex items-center gap-1.5"
              title="Retornar ao topo do maquinário"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Linha de Copyright & Reconhecimento */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-schematic text-[#85745f]">
          <p>
            © {new Date().getFullYear()} {profileData.personal.name}. Todos os direitos das patentes reservados.
          </p>

          <p className="flex items-center gap-1.5 text-center">
            <span>Construído a vapor com</span>
            <span className="text-copper-light font-bold">React</span>
            <span>&</span>
            <span className="text-brass-light font-bold">Tailwind CSS</span>
            <span>• São Cristóvão / SE</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
