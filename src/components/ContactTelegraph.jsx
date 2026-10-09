import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { SteampunkGear } from './SteampunkGear';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { 
  Radio, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Flame,
  CheckCircle2
} from 'lucide-react';

export const ContactTelegraph = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Simulação mecânica de despacho com vapor
    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      setTimeout(() => setSentSuccess(false), 6000);
    }, 1400);
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contato"
      className="relative py-24 steampunk-bg-pattern border-b-2 border-brass-dark/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e1711] border border-brass-dark/70 text-xs font-schematic text-brass-light mb-3">
            <Radio className="w-4 h-4 text-steamAmber-glow animate-pulse" />
            <span>TRANSMISSÃO TELEGRÁFICA & CONEXÕES</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-brass-gradient tracking-wide mb-4">
            Linhas de Comunicação
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brass/60"></span>
            <span className="text-copper-light text-xs font-schematic uppercase tracking-widest">
              Conecte-se com Gustavo Rodrigues
            </span>
            <span className="h-px w-12 bg-brass/60"></span>
          </div>

          <p className="text-[#c5b59e] text-sm sm:text-base leading-relaxed">
            Seja para oportunidades profissionais, desenvolvimento de sistemas corporativos,
            colaborações em projetos ou apenas trocar uma ideia sobre tecnologia e arquitetura de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Esquerda: Canais Oficiais (LinkedIn, GitHub, Email) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Cartão LinkedIn */}
            <div className="steampunk-panel p-5 rounded-lg border-2 border-brass-dark/70 hover:border-brass transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#201913] border border-brass-dark flex items-center justify-center text-brass-light group-hover:scale-110 transition-transform shadow-inner">
                  <LinkedinIcon className="w-6 h-6 text-steamAmber-bright" />
                </div>
                <div>
                  <span className="text-[10px] font-schematic text-copper-light uppercase tracking-wider block">
                    Rede Profissional
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-brass-light">
                    Perfil no LinkedIn
                  </h3>
                  <p className="text-xs text-[#a99781] font-schematic">
                    {profileData.social.linkedin.label}
                  </p>
                </div>
              </div>

              <a
                href={profileData.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-steampunk px-3 py-1.5 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase"
              >
                Acessar
              </a>
            </div>

            {/* Cartão GitHub */}
            <div className="steampunk-panel p-5 rounded-lg border-2 border-brass-dark/70 hover:border-brass transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#201913] border border-brass-dark flex items-center justify-center text-brass-light group-hover:scale-110 transition-transform shadow-inner">
                  <GithubIcon className="w-6 h-6 text-steamAmber-bright" />
                </div>
                <div>
                  <span className="text-[10px] font-schematic text-copper-light uppercase tracking-wider block">
                    Repositórios & Código
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-brass-light">
                    GitHub Oficial
                  </h3>
                  <p className="text-xs text-[#a99781] font-schematic">
                    {profileData.social.github.label}
                  </p>
                </div>
              </div>

              <a
                href={profileData.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-steampunk px-3 py-1.5 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase"
              >
                Acessar
              </a>
            </div>

            {/* Cartão E-mail */}
            <div className="steampunk-panel p-5 rounded-lg border-2 border-brass-dark/70 hover:border-brass transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#201913] border border-brass-dark flex items-center justify-center text-brass-light group-hover:scale-110 transition-transform shadow-inner">
                  <Mail className="w-6 h-6 text-steamAmber-bright" />
                </div>
                <div>
                  <span className="text-[10px] font-schematic text-copper-light uppercase tracking-wider block">
                    Correio Eletrônico
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-brass-light">
                    E-mail Direto
                  </h3>
                  <p className="text-xs text-[#a99781] font-schematic">
                    {profileData.social.email.address}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(profileData.social.email.address, 'email')}
                className="btn-steampunk p-2 rounded text-brass-light hover:text-white"
                title="Copiar E-mail"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-steamAmber-bright" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Localização & Alma Mater */}
            <div className="steampunk-panel p-4 rounded-lg border border-brass-dark/60 text-xs font-schematic text-[#baaa94] flex items-center gap-3">
              <MapPin className="w-5 h-5 text-copper-light flex-shrink-0" />
              <div>
                <span className="text-brass-light font-bold block">Base Operacional:</span>
                <span>{profileData.personal.location} • Formação UFS</span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: O Telégrafo Vitoriano (Formulário Mecânico) */}
          <div className="lg:col-span-7 steampunk-panel p-6 sm:p-8 rounded-lg border-2 border-brass-dark/80 relative">
            {/* Rebites nos 4 cantos */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow"></div>

            <div className="brass-plate p-2.5 rounded text-center mb-6">
              <span className="font-cinzel text-xs font-bold tracking-widest text-brass-light uppercase">
                Terminal de Despacho Pneumático
              </span>
              <p className="text-[10px] font-schematic text-copper-light">
                Transmissão Criptografada para o Inventor
              </p>
            </div>

            {/* Alerta de Sucesso com Vapor */}
            {sentSuccess && (
              <div className="mb-6 p-4 rounded bg-[#1e2815] border border-green-600/70 text-green-200 text-xs font-schematic flex items-start gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-green-300 font-bold mb-1">
                    TRANSMISSÃO TELEGRÁFICA ENVIADA COM SUCESSO!
                  </strong>
                  Sua mensagem foi encapsulada no tubo pneumático e despachada para Gustavo Rodrigues. Em breve você receberá um retorno.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-schematic font-bold text-copper-light uppercase mb-1.5">
                    Seu Nome / Organização
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Dra. Ada Lovelace"
                    className="w-full bg-[#120e0b] border border-brass-dark/70 rounded px-3.5 py-2.5 text-xs font-schematic text-brass-light placeholder-[#695743] focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
                  />
                </div>

                <div>
                  <label className="block text-xs font-schematic font-bold text-copper-light uppercase mb-1.5">
                    Seu E-mail de Retorno
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@organizacao.com"
                    className="w-full bg-[#120e0b] border border-brass-dark/70 rounded px-3.5 py-2.5 text-xs font-schematic text-brass-light placeholder-[#695743] focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-schematic font-bold text-copper-light uppercase mb-1.5">
                  Assunto da Transmissão
                </label>
                <input
                  type="text"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Ex: Proposta de Projeto / Oportunidade em Sistemas"
                  className="w-full bg-[#120e0b] border border-brass-dark/70 rounded px-3.5 py-2.5 text-xs font-schematic text-brass-light placeholder-[#695743] focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
                />
              </div>

              <div>
                <label className="block text-xs font-schematic font-bold text-copper-light uppercase mb-1.5">
                  Mensagem Telegráfica
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem, descrição de projeto ou proposta..."
                  className="w-full bg-[#120e0b] border border-brass-dark/70 rounded px-3.5 py-2.5 text-xs font-schematic text-brass-light placeholder-[#695743] focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-steampunk w-full py-3.5 px-6 rounded text-xs sm:text-sm font-schematic font-bold text-brass-light hover:text-white uppercase tracking-wider flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <Flame className="w-4 h-4 text-steamAmber-glow animate-bounce" />
                    <span>PRESSURIZANDO TUBO PNEUMÁTICO...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-copper-light group-hover:translate-x-1 transition-transform" />
                    <span>Despachar Transmissão Telegráfica</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
