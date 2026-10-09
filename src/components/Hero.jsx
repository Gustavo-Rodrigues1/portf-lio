import React, { useState } from 'react';
import { SteampunkGear } from './SteampunkGear';
import { SteamGauge } from './SteamGauge';
import { profileData } from '../data/profile';
import { Flame, ArrowDown, ExternalLink, Sparkles, Compass } from 'lucide-react';

export const Hero = () => {
  const [steamPressure, setSteamPressure] = useState(78);
  const [steamPuffing, setSteamPuffing] = useState(false);

  const handleBoostPressure = () => {
    setSteamPuffing(true);
    setSteamPressure((prev) => (prev >= 95 ? 70 : prev + 12));
    setTimeout(() => {
      setSteamPuffing(false);
    }, 1200);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden steampunk-bg-pattern border-b-2 border-brass-dark/60"
    >
      {/* Engrenagens de Fundo (Watermark Dinâmico) */}
      <div className="absolute top-12 -left-20 pointer-events-none opacity-20">
        <SteampunkGear
          size={320}
          teeth={16}
          color="brass"
          speed={steamPuffing ? 'spin-medium' : 'spin-slow'}
        />
      </div>
      <div className="absolute -bottom-24 -right-20 pointer-events-none opacity-20">
        <SteampunkGear
          size={380}
          teeth={20}
          color="copper"
          speed={steamPuffing ? 'spin-medium' : 'spin-reverse-slow'}
        />
      </div>
      <div className="absolute top-1/3 right-10 pointer-events-none opacity-15 hidden xl:block">
        <SteampunkGear
          size={180}
          teeth={12}
          color="iron"
          speed="spin-slow"
        />
      </div>

      {/* Partículas de Vapor Simuladas ao pressurizar */}
      {steamPuffing && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          <div className="w-96 h-96 rounded-full bg-white/10 blur-3xl animate-ping"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Apresentação e Tipografia Vitoriana */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Selo UFS Superior */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#221a13] border border-brass-dark shadow-md mb-6">
              <Compass className="w-4 h-4 text-copper-light animate-spin-slow" />
              <span className="font-schematic text-xs font-bold tracking-wider text-brass-light uppercase">
                {profileData.personal.university}
              </span>
              <span className="text-brass-dark">•</span>
              <span className="text-[11px] font-schematic text-[#cbba9d]">
                Sistemas de Informação
              </span>
            </div>

            {/* Título Principal H1 (SEO) */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-brass-gradient leading-tight mb-4 drop-shadow-lg">
              {profileData.personal.name}
            </h1>

            {/* Subtítulo de Graduação */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-10 bg-gradient-to-r from-brass to-copper"></span>
              <h2 className="font-celt text-lg sm:text-xl md:text-2xl text-copper-light font-semibold tracking-wide">
                {profileData.personal.title}
              </h2>
            </div>

            {/* Bio e Descrição Conceitual */}
            <p className="text-sm sm:text-base text-[#cfbfab] leading-relaxed mb-8 max-w-2xl font-light">
              {profileData.personal.bio}
            </p>

            {/* Destaque Steampunk da UFS */}
            <div className="steampunk-panel p-4 rounded-sm border border-brass-dark/70 mb-8 w-full max-w-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-brass-dark/30 text-brass-light mt-1">
                  <Sparkles className="w-4 h-4 text-steamAmber-bright" />
                </div>
                <div>
                  <h3 className="font-celt text-xs font-bold tracking-widest text-brass-light uppercase mb-1">
                    Diretriz da Forja Acadêmica
                  </h3>
                  <p className="text-xs text-[#b8a994] font-schematic leading-relaxed">
                    "Alinhar a arquitetura sistêmica, modelagem de banco de dados e gestão tecnológica com código limpo e soluções robustas de engenharia."
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de Ação Mecânicos */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projetos"
                className="btn-steampunk px-6 py-3 rounded text-xs sm:text-sm font-schematic font-bold text-brass-light hover:text-white uppercase tracking-wider flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>Examinar Projetos</span>
                <ArrowDown className="w-4 h-4 text-copper-light transition-transform group-hover:translate-y-1" />
              </a>

              <a
                href={profileData.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-steampunk px-6 py-3 rounded text-xs sm:text-sm font-schematic font-bold text-[#e2d5c3] hover:text-white uppercase tracking-wider flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Conectar no LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-brass-light" />
              </a>

              <a
                href="#contato"
                className="px-5 py-3 rounded text-xs sm:text-sm font-schematic text-brass-light hover:text-white uppercase tracking-wider underline-offset-4 hover:underline flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <span>Central Telegráfica</span>
              </a>
            </div>

          </div>

          {/* Coluna Direita: O Mecanismo Central (Caldeira & Manômetro Interativo) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="steampunk-panel p-6 sm:p-8 rounded-lg w-full max-w-md relative group">
              
              {/* Rebites nos 4 cantos da placa */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>

              {/* Placa com Título da Caldeira */}
              <div className="brass-plate py-1.5 px-4 rounded text-center mb-6">
                <span className="font-cinzel text-xs font-bold tracking-widest text-brass-light uppercase">
                  Caldeira de Engenharia de Software
                </span>
                <p className="text-[10px] font-schematic text-copper-light">
                  Módulo Propulsor • SI - UFS
                </p>
              </div>

              {/* Manômetro Central com Interatividade */}
              <div className="flex flex-col items-center justify-center my-2 relative">
                <SteamGauge
                  value={steamPressure}
                  label="Pressão Operacional"
                  unit="PSI"
                  size={190}
                  sublabel={steamPressure >= 90 ? "SOBRECARGA NOMINAL" : "STATUS IDEAL"}
                  interactive={true}
                  onBoost={handleBoostPressure}
                />

                {/* Efeito de Vapor em Nuvem */}
                {steamPuffing && (
                  <div className="absolute -top-6 text-xs font-schematic text-steamAmber-bright animate-bounce flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>VAPOR EXPELIDO! +12 PSI</span>
                  </div>
                )}
              </div>

              {/* Controles Mecânicos Interativos */}
              <div className="mt-6 pt-5 border-t border-brass-dark/40 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={handleBoostPressure}
                  className="btn-steampunk w-full py-2.5 px-4 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase tracking-wider flex items-center justify-center gap-2 group"
                >
                  <Flame className="w-4 h-4 text-steamAmber-glow group-hover:scale-110 transition-transform" />
                  <span>Alavanca de Pressurização</span>
                </button>

                <div className="flex items-center justify-between w-full text-[11px] font-schematic text-[#a89680]">
                  <span>Localização: Sergipe - BR</span>
                  <span className="text-brass">UFS Campus São Cristóvão</span>
                </div>
              </div>

            </div>

            {/* Pequenos Manômetros / Indicadores de Estatísticas */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-4">
              <div className="steampunk-panel p-2.5 rounded text-center border border-brass-dark/40">
                <span className="font-cinzel text-base font-bold text-brass-light">UFS</span>
                <p className="text-[9px] font-schematic text-[#ab9a83] uppercase mt-0.5">Sistemas</p>
              </div>
              <div className="steampunk-panel p-2.5 rounded text-center border border-brass-dark/40">
                <span className="font-cinzel text-base font-bold text-copper-light">React</span>
                <p className="text-[9px] font-schematic text-[#ab9a83] uppercase mt-0.5">+ Tailwind</p>
              </div>
              <div className="steampunk-panel p-2.5 rounded text-center border border-brass-dark/40">
                <span className="font-cinzel text-base font-bold text-steamAmber-bright">100%</span>
                <p className="text-[9px] font-schematic text-[#ab9a83] uppercase mt-0.5">Dedicado</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
