import React from 'react';
import { profileData } from '../data/profile';
import { SteampunkGear } from './SteampunkGear';
import { 
  GraduationCap, 
  Cpu, 
  Database, 
  Workflow, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2,
  Award
} from 'lucide-react';

export const AboutUFS = () => {
  const iconMap = {
    Cpu: Cpu,
    Database: Database,
    Workflow: Workflow,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section
      id="sobre"
      className="relative py-24 bg-[#0e0c0a] border-b-2 border-brass-dark/60 overflow-hidden"
    >
      {/* Detalhes de Fundo */}
      <div className="absolute -top-16 right-0 opacity-10 pointer-events-none">
        <SteampunkGear size={260} teeth={14} color="brass" speed="spin-reverse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e1711] border border-brass-dark/70 text-xs font-schematic text-brass-light mb-3">
            <GraduationCap className="w-4 h-4 text-copper-light" />
            <span>ALMA MATER • UNIVERSIDADE FEDERAL DE SERGIPE</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-brass-gradient tracking-wide mb-4">
            A Forja em Sistemas de Informação
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/60"></span>
            <span className="text-copper-light text-xs font-schematic uppercase tracking-widest">
              UFS • Diário de Bordo & Fundamentos
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            {profileData.academic.description} No curso de Sistemas de Informação da UFS, 
            a tecnologia não é apenas código isolado: é a espinha dorsal que move processos, 
            decisões corporativas e arquiteturas digitais complexas.
          </p>
        </div>

        {/* Certificado de Patente / Pergaminho Estilizado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Lado Esquerdo: Placa de Registro Institucional */}
          <div className="lg:col-span-5 steampunk-panel p-6 sm:p-8 rounded-lg flex flex-col justify-between border-2 border-brass-dark/80 relative">
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>

            <div>
              <div className="flex items-center justify-between border-b border-brass-dark/40 pb-4 mb-6">
                <div>
                  <span className="font-schematic text-[10px] text-copper-light tracking-widest block uppercase">
                    Registro de Matrícula & Grau
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-brass-light">
                    Bacharelado em SI
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-brass flex items-center justify-center bg-[#241a12] text-brass-light shadow-md">
                  <Award className="w-6 h-6 text-steamAmber-bright" />
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#cebeaa] font-body leading-relaxed">
                <p>
                  A trajetória na <strong className="text-brass-light font-semibold">Universidade Federal de Sergipe</strong> proporcionou
                  uma visão sistêmica integral: da modelagem conceitual à implementação de alto rendimento.
                </p>
                <p>
                  O perfil de Sistemas de Informação alia raciocínio analítico, capacidade de dialogar com as dores reais do negócio
                  e maestria na engenharia de software para transformar requisitos abstratos em soluções estáveis e produtivas.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-brass-dark/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-schematic text-brass-light">
                <CheckCircle2 className="w-4 h-4 text-steamAmber-glow flex-shrink-0" />
                <span>Ênfase em Arquiteturas Escaláveis e APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-schematic text-brass-light">
                <CheckCircle2 className="w-4 h-4 text-steamAmber-glow flex-shrink-0" />
                <span>Gestão Estratégica da Tecnologia da Informação</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-schematic text-brass-light">
                <CheckCircle2 className="w-4 h-4 text-steamAmber-glow flex-shrink-0" />
                <span>Modelagem Relacional e Bancos Corporativos</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Os 4 Pilares da Formação (Cartões com Borda Rebitada) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.academic.pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon] || BookOpen;
              return (
                <div
                  key={index}
                  className="steampunk-panel p-5 rounded-md border border-brass-dark/60 hover:border-brass/80 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded bg-[#2b2118] border border-brass-dark/80 text-brass-light group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-steamAmber-bright" />
                      </div>
                      <span className="font-schematic text-[11px] text-[#8e7a63] font-bold">
                        Pilar 0{index + 1}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-brass-light group-hover:text-brass-gradient transition-colors mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-[#b8a791] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brass-dark/30 flex items-center justify-between text-[10px] font-schematic text-copper-light">
                    <span>Módulo UFS</span>
                    <span className="text-brass">Calibrado</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
