import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { SteamGauge } from './SteamGauge';
import { SteampunkGear } from './SteampunkGear';
import { Wrench, Gauge, Flame, Check } from 'lucide-react';

export const SkillsGauges = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...Array.from(new Set(profileData.skills.map((s) => s.category)))];

  const filteredSkills = selectedCategory === 'Todas'
    ? profileData.skills
    : profileData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="habilidades"
      className="relative py-24 steampunk-bg-pattern border-b-2 border-brass-dark/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e1711] border border-brass-dark/70 text-xs font-schematic text-brass-light mb-3">
            <Gauge className="w-4 h-4 text-copper-light" />
            <span>CALIBRAÇÃO MECÂNICA & TÉCNICA</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-brass-gradient tracking-wide mb-4">
            Mostradores de Proficiência
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/60"></span>
            <span className="text-copper-light text-xs font-schematic uppercase tracking-widest">
              Manômetros de Competências
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            Cada tecnologia opera como uma válvula afinada. Os manômetros abaixo registram
            a pressão operacional e a proficiência prática desenvolvidas na UFS e em projetos do ecossistema moderno.
          </p>

          {/* Filtros em Abas Estilo Chave Seletora Vitoriana */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-schematic uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'btn-steampunk text-white border-brass-light shadow-brass-glow font-bold'
                    : 'bg-[#1a1410] border border-brass-dark/50 text-[#ab9982] hover:text-brass-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Manômetros e Válvulas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="steampunk-panel p-6 rounded-lg border border-brass-dark/70 hover:border-brass/90 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl"
            >
              {/* Rebites Superiores */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black"></div>

              <div>
                {/* Cabeçalho do Card */}
                <div className="flex items-center justify-between border-b border-brass-dark/40 pb-3 mb-5">
                  <span className="text-[10px] font-schematic font-bold px-2 py-0.5 rounded bg-brass-dark/30 text-copper-light uppercase border border-brass-dark/50">
                    {skill.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-schematic text-steamAmber-bright font-bold">
                    <Flame className="w-3.5 h-3.5 text-steamAmber-glow" />
                    <span>{skill.pressure}</span>
                  </div>
                </div>

                {/* Manômetro Central */}
                <div className="flex justify-center my-3">
                  <SteamGauge
                    value={skill.level}
                    label={skill.name.split(' ')[0]}
                    unit="%"
                    size={140}
                    sublabel="PRESSÃO NOMINAL"
                  />
                </div>

                {/* Título da Habilidade */}
                <h3 className="font-cinzel text-base font-bold text-center text-brass-light mt-4 mb-2 group-hover:text-brass-gradient transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-[#b8a791] text-center font-body leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Barra de Pressão Estilizada na Base */}
              <div className="mt-2 pt-3 border-t border-brass-dark/30">
                <div className="flex justify-between items-center text-[10px] font-schematic text-[#a89680] mb-1">
                  <span>Capacidade</span>
                  <span className="text-brass-light font-bold">{skill.level}% Eficiência</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#120e0a] border border-brass-dark/60 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brass via-copper to-steamAmber-bright transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
