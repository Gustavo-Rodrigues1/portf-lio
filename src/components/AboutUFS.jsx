import React from 'react';
import { profileData } from '../data/profile';
import { SteampunkGear } from './SteampunkGear';
import { 
  Award,
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  Sparkles
} from 'lucide-react';

export const AboutUFS = () => {
  return (
    <section
      id="experiencia"
      className="relative py-24 bg-[#0e0c0a] border-b-2 border-brass-dark/60 overflow-hidden"
    >
      {/* Detalhes de Fundo com Engrenagem Steampunk */}
      <div className="absolute -top-16 right-0 opacity-10 pointer-events-none">
        <SteampunkGear size={260} teeth={14} color="brass" speed="spin-reverse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e1711] border border-brass-dark/70 text-xs font-schematic text-brass-light mb-3">
            <Briefcase className="w-4 h-4 text-copper-light" />
            <span>REGISTRO DE OFÍCIO & ATUAÇÃO TÉCNICA</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-brass-gradient tracking-wide mb-4">
            Atuação Profissional
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/60"></span>
            <span className="text-copper-light text-xs font-schematic uppercase tracking-widest">
              Experiência Prática & Certificações
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            Trajetória profissional orientada à resolução de problemas complexos de TI,
            manutenção preventiva e corretiva de infraestruturas, automação de dados e desenvolvimento de aplicações.
          </p>
        </div>

        {/* Grade de Experiências Profissionais */}
        {profileData.experiences && profileData.experiences.length > 0 && (
          <div className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="steampunk-panel p-6 sm:p-7 rounded-lg border border-brass-dark/70 hover:border-brass/80 transition-all relative group flex flex-col justify-between"
                >
                  {/* Rebites nos 4 cantos */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black shadow"></div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black shadow"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black shadow"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-brass-light border border-black shadow"></div>

                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-schematic uppercase tracking-widest text-copper-light mb-1">
                          <Calendar className="w-3 h-3 text-brass" />
                          <span>{exp.period}</span>
                          <span>•</span>
                          <MapPin className="w-3 h-3 text-brass" />
                          <span>{exp.location}</span>
                        </div>

                        <h3 className="font-cinzel text-lg sm:text-xl font-bold text-brass-light group-hover:text-brass-gradient transition-colors">
                          {exp.role}
                        </h3>

                        <span className="text-xs font-schematic text-[#cbba9d] flex items-center gap-1.5 mt-1 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-steamAmber-glow" />
                          {exp.company}
                        </span>
                      </div>

                      <span className={`px-2.5 py-1 rounded text-[10px] font-schematic uppercase tracking-wider font-bold whitespace-nowrap ${
                        exp.current
                          ? 'bg-[#291e12] border border-steamAmber-glow/80 text-steamAmber-bright shadow-sm'
                          : 'bg-[#1a140f] border border-brass-dark/50 text-[#a89680]'
                      }`}>
                        {exp.current ? 'Em Atividade' : 'Concluído'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#cfbfab] font-light leading-relaxed mt-4 pt-4 border-t border-brass-dark/40">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-brass-dark/20 flex items-center justify-between text-[10px] font-schematic text-copper-light">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-steamAmber-glow" />
                      Modalidade: {exp.type}
                    </span>
                    <span className="text-brass">Registro Validado</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificações Técnicas Oficiais */}
        {profileData.certifications && profileData.certifications.length > 0 && (
          <div className="pt-8 border-t border-brass-dark/40">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-copper-light" />
              <span className="text-xs font-schematic uppercase tracking-widest text-copper-light">
                Certificações & Habilitações Oficiais
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {profileData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded bg-[#18130e] border border-brass-dark/60 text-xs font-schematic text-brass-light hover:border-brass-light/80 transition-all shadow-sm"
                >
                  <Award className="w-4 h-4 text-steamAmber-glow flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">{cert.name}</span>
                    <span className="text-[10px] text-copper-light block font-light">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export const Experience = AboutUFS;
