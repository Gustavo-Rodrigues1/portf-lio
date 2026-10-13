import React from 'react';
import { Navbar } from './components/Navbar';
import { SteampunkSidebar } from './components/SteampunkSidebar';
import { Hero } from './components/Hero';
import { AboutUFS } from './components/AboutUFS';
import { SkillsGauges } from './components/SkillsGauges';
import { ProjectsArchive } from './components/ProjectsArchive';
import { ContactTelegraph } from './components/ContactTelegraph';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-steampunk-darkest text-[#dfd2be] flex flex-col selection:bg-brass selection:text-steampunk-darkest">
      {/* Barra de Navegação Mecânica Fixa Superior */}
      <Navbar />

      {/* Barra Lateral Mecânica com Engrenagem de Rolagem Interativa */}
      <SteampunkSidebar />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        {/* Seção Hero: Apresentação, Retrato Mecânico e Manômetro Interativo */}
        <Hero />

        {/* Seção Atuação Profissional & Certificações */}
        <AboutUFS />

        {/* Seção Insígnias de Habilidades Técnicas */}
        <SkillsGauges />

        {/* Seção Arquivo de Patentes & Projetos do GitHub */}
        <ProjectsArchive />

        {/* Seção Central Telegráfica (LinkedIn, GitHub, Contato) */}
        <ContactTelegraph />
      </main>

      {/* Rodapé Vitoriano Industrial */}
      <Footer />
    </div>
  );
}

export default App;
