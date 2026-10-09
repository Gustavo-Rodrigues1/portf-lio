import React, { useState, useEffect } from 'react';
import { SteampunkGear } from './SteampunkGear';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import { Mail, Menu, X, Radio } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Trajetória UFS', href: '#sobre' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Projetos GitHub', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0c0a]/95 backdrop-blur-md border-b-2 border-brass-dark/70 shadow-2xl py-2.5'
          : 'bg-[#120f0d]/80 backdrop-blur-sm border-b border-brass-dark/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Selo Steampunk */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-decoration-none"
            title="Gustavo Rodrigues dos Santos - Portfólio"
          >
            <div className="relative">
              <SteampunkGear
                size={38}
                teeth={8}
                color="brass"
                speed="spin-slow"
                className="group-hover:rotate-45"
              />
              <span className="absolute inset-0 flex items-center justify-center font-cinzel font-bold text-xs text-brass-light pointer-events-none">
                G
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-sm sm:text-base tracking-wider text-brass-gradient uppercase">
                {profileData.personal.name}
              </span>
              <span className="text-[10px] font-schematic tracking-widest text-copper-light flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-steamAmber-glow animate-pulse"></span>
                Sistemas de Informação • UFS
              </span>
            </div>
          </a>

          {/* Links de navegação para Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-schematic text-xs tracking-wider text-[#d6c7b2] hover:text-brass-light uppercase transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brass via-copper to-transparent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Ações e Conexões Externas */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Indicador a Vapor */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-sm bg-[#1b1510] border border-brass-dark/60 text-[11px] font-schematic text-brass-light shadow-inner">
              <Radio className="w-3.5 h-3.5 text-steamAmber-glow animate-pulse" />
              <span>VAPOR: NOMINAL</span>
            </div>

            {/* Link GitHub */}
            <a
              href={profileData.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Gustavo"
              className="btn-steampunk p-2 rounded text-brass-light hover:text-white transition-all flex items-center justify-center"
              title="Acessar GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Link LinkedIn */}
            <a
              href={profileData.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Gustavo"
              className="btn-steampunk p-2 rounded text-brass-light hover:text-white transition-all flex items-center justify-center"
              title="Acessar LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Botão de Contato */}
            <a
              href="#contato"
              className="btn-steampunk px-3.5 py-1.5 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase tracking-wider flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-copper-light" />
              <span>Telegrafar</span>
            </a>
          </div>

          {/* Botão Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Alternar menu de navegação"
              className="btn-steampunk p-2 rounded text-brass-light"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Painel Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14100d] border-b-2 border-brass-dark/80 px-6 py-5 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-schematic text-sm tracking-wider text-[#d6c7b2] hover:text-brass-light uppercase py-1 border-b border-brass-dark/20 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-brass text-xs">⚙</span>
              </a>
            ))}

            <div className="pt-2 flex items-center gap-3">
              <a
                href={profileData.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-steampunk flex-1 py-2 rounded text-center text-xs font-schematic text-brass-light flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-steampunk flex-1 py-2 rounded text-center text-xs font-schematic text-brass-light flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
