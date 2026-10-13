import React from 'react';
import { SkillChip } from './SkillInsignia';
import { SteampunkGear } from './SteampunkGear';
import { Sparkles } from 'lucide-react';

const tools = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'python', name: 'Python' },
  { id: 'django', name: 'Django' },
  { id: 'react', name: 'React.js' },
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'htmlcss', name: 'HTML5 & CSS3' },
  { id: 'sql', name: 'SQL & PostgreSQL' },
  { id: 'git', name: 'Git' },
  { id: 'github', name: 'GitHub' },
  { id: 'docker', name: 'Docker' },
  { id: 'powerbi', name: 'Power BI' },
  { id: 'excel', name: 'Microsoft Excel' },
  { id: 'figma', name: 'Figma' },
  { id: 'suporte', name: 'Suporte de TI & Hardware' },
  { id: 'redes', name: 'Redes & Infraestrutura' },
];

export const SkillsGauges = () => {
  return (
    <section
      id="habilidades"
      className="relative py-24 steampunk-bg-pattern border-b-2 border-brass-dark/60 overflow-hidden"
    >
      {/* Engrenagem de fundo decorativa */}
      <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-10">
        <SteampunkGear size={280} teeth={14} color="brass" speed="spin-reverse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e1711] border border-brass-dark/70 text-xs font-schematic text-brass-light mb-3">
            <Sparkles className="w-4 h-4 text-copper-light" />
            <span>ARSENAL TÉCNICO & FERRAMENTAS</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-brass-gradient tracking-wide mb-4">
            Habilidades & Tecnologias
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/60"></span>
            <span className="text-copper-light text-xs font-schematic uppercase tracking-widest">
              Insígnias de Domínio Técnico
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            Ferramentas, linguagens e tecnologias aplicadas na construção de soluções modernas,
            automação de processos analíticos e suporte de infraestrutura.
          </p>
        </div>

        {/* Layout Clean com Pílulas e Logotipos Originais */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <SkillChip key={tool.id} tool={tool} />
          ))}
        </div>

      </div>
    </section>
  );
};
