import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  Wind,
} from 'lucide-react';

/* =========================================================
   SEQUÊNCIA DE ANIMAÇÃO AO ENVIAR A CARTA:
   Phase 0 = idle (formulário visível)
   Phase 1 = folding (carta dobra em 1.1s)
   Phase 2 = stamping (carimbo de cera cai em ~0.9s)
   Phase 3 = capsule (envelope encapsulado aparece)
   Phase 4 = tube (cápsula entra no tubo e some)
   Phase 5 = done (mensagem de sucesso)
   ========================================================= */

// SVG da carta em papel envelhecido (pergaminho vitoriano)
const LetterSVG = ({ nome, email, assunto, mensagem }) => (
  <svg viewBox="0 0 300 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f5edd8" />
        <stop offset="50%" stopColor="#ecdfc4" />
        <stop offset="100%" stopColor="#dfd0ad" />
      </linearGradient>
      <filter id="paperNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
        <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
        <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
        <feComposite in="blended" in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
    {/* Corpo do papel */}
    <rect x="10" y="10" width="280" height="180" rx="4" fill="url(#paperGrad)" stroke="#b8993f" strokeWidth="1.5" filter="url(#paperNoise)" />
    {/* Dobra superior esquerda */}
    <polygon points="10,10 40,10 10,40" fill="#d4c09a" stroke="#b8993f" strokeWidth="0.5" />
    {/* Linhas pautadas */}
    {[50, 68, 86, 104, 122, 140, 158, 176].map((y, i) => (
      <line key={i} x1="25" y1={y} x2="275" y2={y} stroke="#c8a96e" strokeWidth="0.5" opacity="0.5" />
    ))}
    {/* Título / Remetente */}
    <text x="150" y="30" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="9" fill="#6b4a1c" fontWeight="bold" letterSpacing="2">
      DESPACHO TELEGRÁFICO
    </text>
    <line x1="25" y1="36" x2="275" y2="36" stroke="#9a7230" strokeWidth="1.2" />
    {/* Para */}
    <text x="25" y="50" fontFamily="Courier Prime, monospace" fontSize="7.5" fill="#5a3a10">Para: Gustavo Rodrigues  •  UFS/SECOM</text>
    {/* De */}
    <text x="25" y="64" fontFamily="Courier Prime, monospace" fontSize="7.5" fill="#5a3a10">De: {(nome || 'Remetente').substring(0, 30)}</text>
    {/* Email */}
    <text x="25" y="77" fontFamily="Courier Prime, monospace" fontSize="6.5" fill="#7a5a28">{(email || 'email@destinatário').substring(0, 38)}</text>
    <line x1="25" y1="84" x2="275" y2="84" stroke="#c8a96e" strokeWidth="0.8" />
    {/* Assunto */}
    <text x="25" y="97" fontFamily="Courier Prime, monospace" fontSize="8" fill="#4a2e0a" fontWeight="bold">Assunto: {(assunto || '—').substring(0, 28)}</text>
    {/* Mensagem */}
    <foreignObject x="25" y="102" width="250" height="70">
      <div xmlns="http://www.w3.org/1999/xhtml"
        style={{ fontFamily: 'Courier Prime, monospace', fontSize: '7.5px', color: '#3d2608', lineHeight: '14px', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
        {(mensagem || '').substring(0, 180)}
      </div>
    </foreignObject>
    {/* Assinatura */}
    <line x1="25" y1="178" x2="160" y2="178" stroke="#c8a96e" strokeWidth="0.7" />
    <text x="25" y="188" fontFamily="Courier Prime, monospace" fontSize="6.5" fill="#7a5a28" fontStyle="italic">Enviado via Terminal Telegráfico Steampunk</text>
  </svg>
);

// SVG do carimbo de cera lacrado (lacre vermelho vitoriano)
const WaxSealSVG = ({ className = '' }) => (
  <svg viewBox="0 0 80 80" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="waxGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#e84040" />
        <stop offset="55%" stopColor="#9e1212" />
        <stop offset="100%" stopColor="#5c0606" />
      </radialGradient>
      <radialGradient id="waxShine" cx="35%" cy="30%" r="50%">
        <stop offset="0%" stopColor="rgba(255,200,200,0.55)" />
        <stop offset="100%" stopColor="rgba(255,80,80,0)" />
      </radialGradient>
    </defs>
    {/* Gotas de cera espalhadas */}
    <ellipse cx="40" cy="42" rx="30" ry="6" fill="#7a0e0e" opacity="0.3" />
    {/* Gota principal */}
    <polygon points="40,10 55,20 60,38 40,50 20,38 25,20" fill="url(#waxGrad)" stroke="#6b0e0e" strokeWidth="1" />
    <polygon points="40,10 52,16 58,32 40,46 22,32 28,16" fill="url(#waxGrad)" />
    {/* Círculo central do lacre */}
    <circle cx="40" cy="30" r="15" fill="url(#waxGrad)" stroke="#6b0808" strokeWidth="1.5" />
    <circle cx="40" cy="30" r="15" fill="url(#waxShine)" />
    {/* Inicial "G" gravada */}
    <text x="40" y="35" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="13" fill="#e8a0a0" fontWeight="bold" opacity="0.9">G</text>
    {/* Relevo do anel de lacre */}
    <circle cx="40" cy="30" r="15" fill="none" stroke="rgba(255,160,160,0.3)" strokeWidth="2" />
    <circle cx="40" cy="30" r="12" fill="none" stroke="rgba(100,10,10,0.6)" strokeWidth="0.7" />
  </svg>
);

// SVG da cápsula de tubo pneumático (metal/latão)
const CapsuleSVG = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f1d289" />
        <stop offset="40%" stopColor="#c69c4d" />
        <stop offset="70%" stopColor="#8a6523" />
        <stop offset="100%" stopColor="#5a3f0f" />
      </linearGradient>
      <linearGradient id="capsuleEnd" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e0b455" />
        <stop offset="100%" stopColor="#9e7428" />
      </linearGradient>
      <linearGradient id="glassPart" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(200,235,255,0.55)" />
        <stop offset="50%" stopColor="rgba(150,200,240,0.25)" />
        <stop offset="100%" stopColor="rgba(100,160,220,0.15)" />
      </linearGradient>
    </defs>
    {/* Corpo da cápsula (latão) */}
    <rect x="20" y="8" width="80" height="44" rx="22" fill="url(#capsuleGrad)" stroke="#8a6523" strokeWidth="1.5" />
    {/* Janela de vidro central */}
    <rect x="38" y="14" width="44" height="32" rx="4" fill="url(#glassPart)" stroke="rgba(200,180,100,0.6)" strokeWidth="1" />
    {/* Miniatura da carta dentro da cápsula */}
    <rect x="44" y="18" width="32" height="24" rx="2" fill="#f0e5c8" stroke="#c8a96e" strokeWidth="0.7" />
    <line x1="48" y1="24" x2="72" y2="24" stroke="#b89040" strokeWidth="0.8" opacity="0.7" />
    <line x1="48" y1="28" x2="72" y2="28" stroke="#b89040" strokeWidth="0.6" opacity="0.5" />
    <line x1="48" y1="32" x2="68" y2="32" stroke="#b89040" strokeWidth="0.6" opacity="0.5" />
    {/* Lacre vermelho sobre a carta mini */}
    <circle cx="60" cy="36" r="4" fill="#9e1212" stroke="#6b0808" strokeWidth="0.5" />
    <text x="60" y="39" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="4.5" fill="#e8a0a0" fontWeight="bold">G</text>
    {/* Tampa esquerda */}
    <ellipse cx="20" cy="30" rx="10" ry="22" fill="url(#capsuleEnd)" stroke="#7a5a1a" strokeWidth="1.2" />
    <ellipse cx="20" cy="30" rx="6" ry="16" fill="none" stroke="rgba(255,220,140,0.4)" strokeWidth="1" />
    {/* Tampa direita */}
    <ellipse cx="100" cy="30" rx="10" ry="22" fill="url(#capsuleEnd)" stroke="#7a5a1a" strokeWidth="1.2" />
    <ellipse cx="100" cy="30" rx="6" ry="16" fill="none" stroke="rgba(255,220,140,0.4)" strokeWidth="1" />
    {/* Reflexo de luz */}
    <rect x="38" y="14" width="44" height="10" rx="4" fill="rgba(255,255,255,0.15)" />
    {/* Rebites laterais */}
    <circle cx="30" cy="30" r="2" fill="#f1d289" stroke="#8a6523" strokeWidth="0.8" />
    <circle cx="90" cy="30" r="2" fill="#f1d289" stroke="#8a6523" strokeWidth="0.8" />
  </svg>
);

// SVG do tubo pneumático (cano de latão na horizontal)
const TubeSVG = ({ active }) => (
  <svg viewBox="0 0 320 60" className="w-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f1d289" />
        <stop offset="25%" stopColor="#c69c4d" />
        <stop offset="70%" stopColor="#7a5010" />
        <stop offset="100%" stopColor="#4a3008" />
      </linearGradient>
      <linearGradient id="tubeInner" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#201408" />
        <stop offset="100%" stopColor="#0d0906" />
      </linearGradient>
    </defs>
    {/* Tubo externo */}
    <rect x="0" y="10" width="320" height="40" rx="20" fill="url(#tubeGrad)" stroke="#8a6523" strokeWidth="2" />
    {/* Interior escuro do tubo */}
    <rect x="8" y="16" width="304" height="28" rx="14" fill="url(#tubeInner)" />
    {/* Reflexo de luz superior */}
    <rect x="8" y="16" width="304" height="9" rx="9" fill="rgba(255,230,150,0.18)" />
    {/* Rebites ao longo do tubo */}
    {[40, 100, 160, 220, 280].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="10" r="4" fill="#c69c4d" stroke="#7a5010" strokeWidth="1" />
        <circle cx={x} cy="50" r="4" fill="#c69c4d" stroke="#7a5010" strokeWidth="1" />
      </g>
    ))}
    {/* Luz âmbar dentro do tubo quando ativo */}
    {active && (
      <rect x="8" y="16" width="304" height="28" rx="14" fill="rgba(255,157,46,0.12)"
        style={{ animation: 'tube-pressure 0.8s ease-in-out infinite' }} />
    )}
    {/* Abertura direita do tubo */}
    <ellipse cx="318" cy="30" rx="10" ry="20" fill="#1a0e06" stroke="#8a6523" strokeWidth="1.5" />
    {/* Abertura esquerda do tubo */}
    <ellipse cx="2" cy="30" rx="10" ry="20" fill="#1a0e06" stroke="#8a6523" strokeWidth="1.5" />
  </svg>
);

export const ContactTelegraph = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  // phase: 'idle' | 'folding' | 'stamping' | 'capsule' | 'tube' | 'done'
  const [phase, setPhase] = useState('idle');
  const [copiedField, setCopiedField] = useState(null);
  // Dados da carta "congelados" no momento do envio, para exibir durante a animação
  const [sentData, setSentData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentData({ ...formData });
    setPhase('folding');
  };

  useEffect(() => {
    if (phase === 'folding') {
      // Após 1.2s a carta está dobrada → aplicar carimbo
      const t1 = setTimeout(() => setPhase('stamping'), 1200);
      return () => clearTimeout(t1);
    }
    if (phase === 'stamping') {
      // Após 1s o lacre está aplicado → mostrar cápsula
      const t2 = setTimeout(() => setPhase('capsule'), 1000);
      return () => clearTimeout(t2);
    }
    if (phase === 'capsule') {
      // Após 0.9s a cápsula apareceu → entra no tubo
      const t3 = setTimeout(() => setPhase('tube'), 900);
      return () => clearTimeout(t3);
    }
    if (phase === 'tube') {
      // Após 1.5s a cápsula sumiu → mensagem de sucesso
      const t4 = setTimeout(() => {
        setPhase('done');
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      }, 1500);
      return () => clearTimeout(t4);
    }
    if (phase === 'done') {
      // Após 6s volta ao idle
      const t5 = setTimeout(() => {
        setPhase('idle');
        setSentData(null);
      }, 6000);
      return () => clearTimeout(t5);
    }
  }, [phase]);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const isSending = phase !== 'idle' && phase !== 'done';
  const isDone = phase === 'done';

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
            <span>TRANSMISSÃO TELEGRÁFICA &amp; CONEXÕES</span>
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
            Seja para oportunidades profissionais, desenvolvimento de sistemas, colaborações em projetos
            ou apenas trocar uma ideia sobre tecnologia. Redija sua carta e eu a receberei pelo tubo pneumático.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Coluna Esquerda: Canais Oficiais ── */}
          <div className="lg:col-span-5 space-y-4">

            {/* Cartão LinkedIn */}
            <div className="steampunk-panel p-5 rounded-lg border-2 border-brass-dark/70 hover:border-brass transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#201913] border border-brass-dark flex items-center justify-center text-brass-light group-hover:scale-110 transition-transform shadow-inner">
                  <LinkedinIcon className="w-6 h-6 text-steamAmber-bright" />
                </div>
                <div>
                  <span className="text-[10px] font-schematic text-copper-light uppercase tracking-wider block">Rede Profissional</span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-brass-light">Perfil no LinkedIn</h3>
                  <p className="text-xs text-[#a99781] font-schematic">{profileData.social.linkedin.label}</p>
                </div>
              </div>
              <a href={profileData.social.linkedin.url} target="_blank" rel="noopener noreferrer"
                className="btn-steampunk px-3 py-1.5 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase">
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
                  <span className="text-[10px] font-schematic text-copper-light uppercase tracking-wider block">Repositórios &amp; Código</span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-brass-light">GitHub Oficial</h3>
                  <p className="text-xs text-[#a99781] font-schematic">{profileData.social.github.label}</p>
                </div>
              </div>
              <a href={profileData.social.github.url} target="_blank" rel="noopener noreferrer"
                className="btn-steampunk px-3 py-1.5 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase">
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
                  <span className="text-[10px] font-schematic text-copper-light uppercase tracking-wider block">Correio Eletrônico</span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-brass-light">E-mail Direto</h3>
                  <p className="text-xs text-[#a99781] font-schematic">{profileData.social.email.address}</p>
                </div>
              </div>
              <button type="button" onClick={() => handleCopy(profileData.social.email.address, 'email')}
                className="btn-steampunk p-2 rounded text-brass-light hover:text-white" title="Copiar E-mail">
                {copiedField === 'email'
                  ? <Check className="w-4 h-4 text-steamAmber-bright" />
                  : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Localização */}
            <div className="steampunk-panel p-4 rounded-lg border border-brass-dark/60 text-xs font-schematic text-[#baaa94] flex items-center gap-3">
              <MapPin className="w-5 h-5 text-copper-light flex-shrink-0" />
              <div>
                <span className="text-brass-light font-bold block">Base Operacional:</span>
                <span>{profileData.personal.location} • Formação UFS</span>
              </div>
            </div>

          </div>

          {/* ── Coluna Direita: Terminal de Carta Steampunk ── */}
          <div className="lg:col-span-7 steampunk-panel rounded-lg border-2 border-brass-dark/80 relative overflow-hidden">

            {/* Rebites nos 4 cantos */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow z-10"></div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow z-10"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow z-10"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brass-light border border-black shadow z-10"></div>

            {/* Placa do terminal */}
            <div className="brass-plate p-2.5 mx-6 mt-6 mb-4 rounded text-center">
              <span className="font-cinzel text-xs font-bold tracking-widest text-brass-light uppercase">
                Terminal de Despacho Pneumático
              </span>
              <p className="text-[10px] font-schematic text-copper-light">
                Redija sua carta • Ela será lacrada e enviada pelo tubo
              </p>
            </div>

            {/* ── ÁREA DE ANIMAÇÃO + FORMULÁRIO ── */}
            <div className="px-6 pb-6">

              {/* FASE IDLE: Formulário em forma de carta */}
              {phase === 'idle' && (
                <form onSubmit={handleSubmit} className="relative">
                  {/* Visual de papel / carta ao redor do formulário */}
                  <div className="relative rounded-sm border-2 border-[#c8a96e] shadow-[inset_0_2px_8px_rgba(0,0,0,0.25),0_4px_16px_rgba(0,0,0,0.5)]"
                    style={{ background: 'linear-gradient(160deg, #f5edd8 0%, #ecdfc4 50%, #dfd0ad 100%)' }}>

                    {/* Dobra de papel no canto superior esquerdo */}
                    <div className="absolute top-0 left-0 w-0 h-0"
                      style={{ borderLeft: '28px solid #c8a96e', borderBottom: '28px solid transparent', zIndex: 2 }}></div>
                    <div className="absolute top-0 left-0 w-0 h-0"
                      style={{ borderLeft: '26px solid #e8d8b0', borderBottom: '26px solid transparent', zIndex: 3 }}></div>

                    {/* Linhas de fundo do papel */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
                      {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y, i) => (
                        <div key={i} className="absolute w-full h-px" style={{ top: y, background: 'rgba(180,140,60,0.2)' }} />
                      ))}
                    </div>

                    {/* Cabeçalho da carta */}
                    <div className="relative z-1 px-6 pt-8 pb-2 border-b-2 border-[#c8a96e]/70">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-schematic text-[9px] font-bold text-[#6b4a1c] uppercase tracking-widest">
                            Despacho Telegráfico Vitoriano
                          </p>
                          <p className="font-schematic text-[8px] text-[#8a6030]">Para: Gustavo Rodrigues · UFS/SECOM · Aracaju-SE</p>
                        </div>
                        {/* Espaço reservado para o lacre (aparece durante a animação) */}
                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#c8a96e]/60 flex items-center justify-center">
                          <span className="text-[#c8a96e]/50 text-lg">⊙</span>
                        </div>
                      </div>
                    </div>

                    {/* Campos do formulário com estilo de carta manuscrita */}
                    <div className="px-6 py-4 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-schematic text-[9px] font-bold text-[#7a5220] uppercase tracking-wider mb-1">
                            Remetente / Organização
                          </label>
                          <input
                            type="text" name="nome" required value={formData.nome} onChange={handleChange}
                            placeholder="Seu nome ou empresa"
                            className="w-full bg-transparent border-b-2 border-[#c8a96e]/60 focus:border-[#8a6030] px-0 py-1 text-sm font-schematic text-[#3d2608] placeholder-[#b09060]/60 focus:outline-none transition-colors"
                            style={{ fontFamily: 'Courier Prime, monospace' }}
                          />
                        </div>
                        <div>
                          <label className="block font-schematic text-[9px] font-bold text-[#7a5220] uppercase tracking-wider mb-1">
                            E-mail de Retorno
                          </label>
                          <input
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            placeholder="seu@email.com"
                            className="w-full bg-transparent border-b-2 border-[#c8a96e]/60 focus:border-[#8a6030] px-0 py-1 text-sm font-schematic text-[#3d2608] placeholder-[#b09060]/60 focus:outline-none transition-colors"
                            style={{ fontFamily: 'Courier Prime, monospace' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-schematic text-[9px] font-bold text-[#7a5220] uppercase tracking-wider mb-1">
                          Assunto da Missiva
                        </label>
                        <input
                          type="text" name="assunto" required value={formData.assunto} onChange={handleChange}
                          placeholder="Ex: Proposta de projeto / Oportunidade em SI"
                          className="w-full bg-transparent border-b-2 border-[#c8a96e]/60 focus:border-[#8a6030] px-0 py-1 text-sm font-schematic text-[#3d2608] placeholder-[#b09060]/60 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Courier Prime, monospace' }}
                        />
                      </div>

                      <div>
                        <label className="block font-schematic text-[9px] font-bold text-[#7a5220] uppercase tracking-wider mb-1">
                          Corpo da Carta
                        </label>
                        <textarea
                          name="mensagem" rows={5} required value={formData.mensagem} onChange={handleChange}
                          placeholder="Escreva aqui sua mensagem, proposta ou convite..."
                          className="w-full bg-transparent border-b-2 border-[#c8a96e]/60 focus:border-[#8a6030] px-0 py-1 text-sm font-schematic text-[#3d2608] placeholder-[#b09060]/60 focus:outline-none resize-none transition-colors leading-relaxed"
                          style={{ fontFamily: 'Courier Prime, monospace', backgroundImage: 'none' }}
                        />
                      </div>

                      {/* Linha de assinatura */}
                      <div className="border-t border-[#c8a96e]/50 pt-3 flex items-center justify-between">
                        <span className="font-schematic text-[8px] text-[#8a6030] italic">
                          Enviado via Terminal Telegráfico Steampunk
                        </span>
                        <button
                          type="submit"
                          className="flex items-center gap-2 px-5 py-2.5 rounded font-schematic text-xs font-bold uppercase tracking-wider text-brass-light hover:text-white transition-all hover:scale-105 active:scale-95"
                          style={{
                            background: 'linear-gradient(180deg, #574229 0%, #3a2b1b 60%, #261c10 100%)',
                            border: '1px solid #c69c4d',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.7), inset 0 1px 1px rgba(241,210,137,0.4)',
                          }}
                        >
                          <Send className="w-4 h-4 text-copper-light" />
                          <span>Lacrar &amp; Despachar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {/* FASE FOLDING: Carta dobrando */}
              {phase === 'folding' && sentData && (
                <div className="flex flex-col items-center justify-center py-4 min-h-[340px]">
                  <div className="relative w-full max-w-sm animate-letter-fold origin-bottom">
                    <div className="rounded-sm border-2 border-[#c8a96e] overflow-hidden shadow-lg"
                      style={{ background: 'linear-gradient(160deg, #f5edd8 0%, #ecdfc4 50%, #dfd0ad 100%)' }}>
                      <LetterSVG {...sentData} />
                    </div>
                  </div>
                  <p className="mt-4 font-schematic text-xs text-brass-light animate-pulse tracking-widest uppercase">
                    ⚙ Dobrando a carta...
                  </p>
                </div>
              )}

              {/* FASE STAMPING: Carimbo de cera descendo sobre o envelope */}
              {phase === 'stamping' && (
                <div className="flex flex-col items-center justify-center py-4 min-h-[340px] relative">
                  {/* Envelope fechado */}
                  <div className="animate-capsule-appear">
                    <svg viewBox="0 0 280 180" className="w-72" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f0e5c8" />
                          <stop offset="100%" stopColor="#d4c095" />
                        </linearGradient>
                      </defs>
                      <rect x="10" y="10" width="260" height="160" rx="6" fill="url(#envGrad)" stroke="#c8a96e" strokeWidth="2" />
                      {/* Dobra diagonal do envelope */}
                      <polygon points="10,10 140,95 270,10" fill="#e8d4a0" stroke="#c8a96e" strokeWidth="1.5" />
                      <polygon points="10,170 130,95 10,10" fill="#d4bc80" stroke="#c8a96e" strokeWidth="1" />
                      <polygon points="270,170 150,95 270,10" fill="#d4bc80" stroke="#c8a96e" strokeWidth="1" />
                      {/* Aba inferior fechada */}
                      <polygon points="10,170 140,90 270,170" fill="#e0cc95" stroke="#c8a96e" strokeWidth="1.5" />
                      {/* Texto no envelope */}
                      <text x="140" y="145" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="9" fill="#7a5a28" letterSpacing="1">Para: Gustavo Rodrigues</text>
                    </svg>
                  </div>

                  {/* Carimbo de cera descendo */}
                  <div className="absolute" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '64px' }}>
                    <div className="animate-wax-stamp">
                      <div className="animate-wax-drip animate-wax-shine">
                        <WaxSealSVG />
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 font-schematic text-xs text-copper-light animate-pulse tracking-widest uppercase">
                    🔥 Aplicando lacre de cera...
                  </p>
                </div>
              )}

              {/* FASE CAPSULE: Envelope dentro da cápsula pneumática */}
              {phase === 'capsule' && (
                <div className="flex flex-col items-center justify-center py-4 min-h-[340px]">
                  <div className="animate-capsule-appear w-full max-w-xs">
                    <CapsuleSVG />
                  </div>
                  <p className="mt-6 font-schematic text-xs text-brass-light animate-pulse tracking-widest uppercase">
                    ⚙ Encapsulando a missiva...
                  </p>
                </div>
              )}

              {/* FASE TUBE: Cápsula viajando pelo tubo */}
              {phase === 'tube' && (
                <div className="flex flex-col items-center justify-center py-4 min-h-[340px] overflow-hidden">
                  {/* Tubo */}
                  <div className="w-full animate-tube-pressure">
                    <TubeSVG active={true} />
                  </div>

                  {/* Cápsula viajando dentro do tubo */}
                  <div className="relative w-full mt-2" style={{ height: '60px' }}>
                    <div className="absolute animate-capsule-tube" style={{ top: 0, left: '5%', width: '28%' }}>
                      <CapsuleSVG />
                    </div>
                    {/* Vapor/fumaça saindo pela direita */}
                    <div className="absolute" style={{ top: '15%', right: '6%' }}>
                      <div className="animate-steam-puff w-8 h-8 rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(255,200,100,0.6) 0%, rgba(200,150,50,0.1) 100%)' }}>
                      </div>
                    </div>
                    <div className="absolute animate-steam-puff" style={{ top: '5%', right: '12%', animationDelay: '0.2s' }}>
                      <div className="w-5 h-5 rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(255,220,150,0.5) 0%, transparent 100%)' }}>
                      </div>
                    </div>
                    <Wind className="absolute top-3 right-2 w-5 h-5 text-brass animate-pulse" />
                  </div>

                  <p className="mt-4 font-schematic text-xs text-steamAmber-bright animate-pulse tracking-widest uppercase">
                    💨 Despachando pelo tubo pneumático!
                  </p>
                </div>
              )}

              {/* FASE DONE: Mensagem de sucesso */}
              {isDone && (
                <div className="flex flex-col items-center justify-center py-8 min-h-[340px] gap-6">
                  {/* Lacre de cera grande como confirmação */}
                  <div className="w-24 h-24 animate-wax-shine">
                    <WaxSealSVG className="drop-shadow-[0_0_16px_rgba(200,30,30,0.7)]" />
                  </div>

                  <div className="text-center steampunk-panel p-6 rounded-lg border border-brass/60 max-w-sm">
                    <CheckCircle2 className="w-8 h-8 text-steamAmber-bright mx-auto mb-3" />
                    <h3 className="font-cinzel text-base font-bold text-brass-gradient uppercase tracking-wide mb-2">
                      Missiva Despachada!
                    </h3>
                    <p className="font-schematic text-xs text-[#cbba9d] leading-relaxed">
                      Sua carta foi lacrada, encapsulada e enviada pelo tubo pneumático.
                      Gustavo Rodrigues a receberá em breve e retornará o contato.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => { setPhase('idle'); setSentData(null); }}
                    className="btn-steampunk px-5 py-2 rounded text-xs font-schematic font-bold text-brass-light hover:text-white uppercase tracking-wider"
                  >
                    ✉ Redigir Nova Carta
                  </button>
                </div>
              )}

            </div>
            {/* fim da área de animação */}

          </div>
          {/* fim coluna direita */}

        </div>
      </div>
    </section>
  );
};
