/**
 * Dados de perfil e configurações de Gustavo Rodrigues dos Santos
 * Bacharel em Sistemas de Informação - Universidade Federal de Sergipe (UFS)
 * 
 * Sinta-se à vontade para alterar os placeholders e links abaixo com seus dados reais!
 */

export const profileData = {
  personal: {
    name: "Gustavo Rodrigues dos Santos",
    title: "Bacharel em Sistemas de Informação",
    university: "Universidade Federal de Sergipe (UFS)",
    campus: "Campus São Cristóvão / Itabaiana - SE",
    location: "Aracaju / Sergipe, Brasil",
    bio: "Formado em Sistemas de Informação pela Universidade Federal de Sergipe (UFS). Uno o rigor da Engenharia de Software e a modelagem sistêmica com o desenvolvimento moderno de interfaces e arquiteturas escaláveis. Apaixonado por solucionar problemas complexos, otimizar fluxos de dados e transformar requisitos organizacionais em software confiável.",
    tagline: "Engenharia de Software, Arquitetura de Sistemas e Soluções Tecnológicas a Todo Vapor.",
    yearsExperience: "4+",
    status: "Disponível para novos projetos e oportunidades profissionais",
  },

  // Redes sociais e contatos (placeholders prontos para personalização)
  social: {
    github: {
      username: "seu-usuario-github",
      url: "https://github.com/seu-usuario-github",
      label: "github.com/seu-usuario-github",
    },
    linkedin: {
      username: "gustavo-rodrigues-santos",
      url: "https://www.linkedin.com/in/seu-perfil-linkedin",
      label: "linkedin.com/in/seu-perfil-linkedin",
    },
    email: {
      address: "gustavo.contato@exemplo.com",
      url: "mailto:gustavo.contato@exemplo.com",
      label: "gustavo.contato@exemplo.com",
    },
    whatsapp: {
      number: "+55 (79) 99999-9999",
      url: "https://wa.me/5579999999999",
      label: "+55 (79) 99999-9999",
    },
  },

  // Destaques da formação acadêmica na UFS
  academic: {
    degree: "Bacharelado em Sistemas de Informação",
    institution: "Universidade Federal de Sergipe (UFS)",
    description: "Formação multidisciplinar sólida conectando Tecnologia da Informação, Ciência da Computação e Gestão Estratégica Organizacional.",
    pillars: [
      {
        title: "Engenharia de Software & Arquitetura",
        description: "Ciclo de vida do software, padrões de projeto (Design Patterns), microsserviços, testes e boas práticas de código limpo.",
        icon: "Cpu",
      },
      {
        title: "Bancos de Dados & Engenharia de Dados",
        description: "Modelagem relacional e NoSQL, otimização de consultas SQL, integridade transacional e análise de dados estratégicos.",
        icon: "Database",
      },
      {
        title: "Gestão de TI & Processos de Negócio",
        description: "Alinhamento entre requisitos corporativos e tecnologia, modelagem de processos (BPMN), governança de TI e metodologias ágeis.",
        icon: "Workflow",
      },
      {
        title: "Infraestrutura, Redes & Segurança",
        description: "Protocolos de rede, segurança da informação, computação em nuvem, conteinerização com Docker e ambientes Linux.",
        icon: "ShieldCheck",
      },
    ],
  },

  // Habilidades mecânicas com níveis para manômetros e mostradores
  skills: [
    { name: "React & TypeScript / JS", category: "Frontend", level: 92, pressure: "9.2 BAR", description: "SPAs modernas, hooks avançados, gerenciamento de estado e arquitetura modular." },
    { name: "Tailwind CSS & Design UI", category: "Frontend", level: 95, pressure: "9.5 BAR", description: "Design responsivo, estética personalizada, animações fluidas e UI/UX refinado." },
    { name: "Node.js & APIs RESTful", category: "Backend", level: 88, pressure: "8.8 BAR", description: "Desenvolvimento de servidores assíncronos, autenticação JWT e integrações de microsserviços." },
    { name: "PostgreSQL & SQL Avançado", category: "Banco de Dados", level: 86, pressure: "8.6 BAR", description: "Modelagem ER, queries analíticas complexas, indexação e tuning de performance." },
    { name: "Git, GitHub & CI/CD", category: "DevOps", level: 90, pressure: "9.0 BAR", description: "Versionamento colaborativo, Git Flow, automações de deploy e esteiras de integração." },
    { name: "Engenharia de Software & POO", category: "Fundamentos UFS", level: 94, pressure: "9.4 BAR", description: "Princípios SOLID, Clean Code, arquitetura em camadas e documentação de sistemas." },
  ],

  // Projetos em destaque do GitHub (com links placeholder configuráveis)
  projects: [
    {
      id: "clockwork-dashboard",
      title: "Sistema de Gestão & Indicadores Organizacionais",
      tagline: "Dashboard analítico com modelagem orientada a processos corporativos",
      description: "Plataforma completa para monitoramento em tempo real de KPIs de negócios, controle de permissões e relatórios automatizados, desenvolvida com base nos fundamentos de SI na UFS.",
      techs: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Recharts"],
      githubUrl: "https://github.com/seu-usuario-github/sistema-gestao-indicadores",
      liveUrl: "https://sistema-gestao-demo.vercel.app",
      highlight: true,
      patentNumber: "BR-UFS-0104-SI",
    },
    {
      id: "steampunk-ecommerce-api",
      title: "API de Processamento de Ordens e Transações",
      tagline: "Microsserviço de alta concorrência e integridade transacional",
      description: "Serviço backend resiliente desenvolvido para orquestrar filas de pedidos, pagamentos e controle de estoque com garantia ACID e documentação Swagger.",
      techs: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com/seu-usuario-github/ordens-transacoes-api",
      liveUrl: "https://github.com/seu-usuario-github/ordens-transacoes-api",
      highlight: true,
      patentNumber: "BR-UFS-0209-API",
    },
    {
      id: "ufs-academic-navigator",
      title: "Organizador de Fluxograma Curricular UFS",
      tagline: "Visualizador interativo de matriz curricular e pré-requisitos",
      description: "Ferramenta desenvolvida para estudantes mapearem sua progressão acadêmica em Sistemas de Informação, calculando média de carga horária e disciplinas bloqueadas.",
      techs: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
      githubUrl: "https://github.com/seu-usuario-github/ufs-organizador-curricular",
      liveUrl: "https://github.com/seu-usuario-github/ufs-organizador-curricular",
      highlight: false,
      patentNumber: "BR-UFS-0341-CUR",
    },
    {
      id: "data-pipeline-collector",
      title: "Coletor e Analisador de Dados Públicos",
      tagline: "Pipeline ETL para dados abertos regionais de Sergipe",
      description: "Script de extração, tratamento e consolidação de dados públicos sobre tecnologia e economia em Sergipe, exportando métricas consolidadas para relatórios estruturados.",
      techs: ["Python", "Pandas", "PostgreSQL", "FastAPI"],
      githubUrl: "https://github.com/seu-usuario-github/extrator-dados-publicos",
      liveUrl: "https://github.com/seu-usuario-github/extrator-dados-publicos",
      highlight: false,
      patentNumber: "BR-UFS-0418-ETL",
    },
  ],
};
