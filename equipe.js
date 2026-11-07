/*
=========================================================
CADASTRO DA EQUIPE — 00BROTHER
=========================================================
*/
const equipe = [
  {
    pessoa: "gabriel",
    nome: "Gabriel",
    funcao: "Fundador & Desenvolvedor Front-end",
    descricao: "Fundador e proprietário da 00Brother. Lidera a direção estratégica da empresa e atua diretamente no desenvolvimento front-end dos projetos, garantindo interfaces responsivas, modernas e de alto impacto visual.",
    competencias: [
      "Liderança e Visão de Produto",
      "Desenvolvimento Front-end",
      "HTML5 Semântico & CSS3 Responsivo",
      "JavaScript & Interatividade Web",
      "Arquitetura de Interfaces (UI)",
      "Atendimento Estratégico ao Cliente"
    ],
    foto: ""
  },
  {
    pessoa: "susana",
    nome: "Susana",
    funcao: "Divulgação & Vendas",
    descricao: "Responsável pelo setor de divulgação comercial e vendas na 00Brother. Especialista em prospecção de clientes, relacionamento comercial e posicionamento de mercado para potencializar os resultados dos projetos.",
    competencias: [
      "Vendas Consultivas",
      "Divulgação e Marketing Digital",
      "Prospecção Ativa de Clientes",
      "Gestão de Relacionamento Comercial",
      "Comunicação Estratégica",
      "Negociação e Apresentação de Propostas"
    ],
    foto: ""
  },
  {
    pessoa: "hubert",
    nome: "Hubert",
    funcao: "Desenvolvedor Back-end",
    descricao: "Desenvolvedor back-end focado na construção de servidores eficientes, desenvolvimento de APIs robustas, modelagem de bancos de dados e integridade de dados para garantir que cada plataforma opere com máxima estabilidade.",
    competencias: [
      "Desenvolvimento Back-end",
      "Construção de APIs REST",
      "Bancos de Dados Relacionais",
      "Arquitetura de Servidores e Lógica de Negócio",
      "Segurança e Validação de Dados",
      "Otimização de Performance"
    ],
    foto: ""
  },
  {
    pessoa: "andrey",
    nome: "Andrey",
    funcao: "Desenvolvedor Back-end",
    descricao: "Desenvolvedor back-end com foco em integração de serviços, estruturação de fluxos de dados, resolução de problemas complexos de infraestrutura e manutenção contínua das plataformas desenvolvidas.",
    competencias: [
      "Desenvolvimento Back-end",
      "Integrações de Serviços e Webhooks",
      "Estruturação e Manipulação de Dados",
      "Testes e Resolução de Erros",
      "Segurança da Informação",
      "Manutenção e Confiabilidade de Sistemas"
    ],
    foto: ""
  },
  {
    pessoa: "benjamin",
    nome: "Benjamin",
    funcao: "Desenvolvedor Full Stack & Vendas",
    descricao: "Desenvolvedor full stack atuando na integração completa entre interfaces front-end e estruturas back-end, além de colaborar ativamente no apoio comercial, prospecção de vendas e consultoria técnica aos clientes.",
    competencias: [
      "Desenvolvimento Full Stack (Front-end & Back-end)",
      "Integração de APIs e Interfaces Interativas",
      "Apoio Comercial e Vendas Técnicas",
      "Publicação e Configuração de Projetos Web",
      "Resolução Rápida de Demandas Técnicas",
      "Atendimento Consultivo a Clientes"
    ],
    foto: ""
  },
  {
    pessoa: "perola",
    nome: "Pérola",
    funcao: "Designer & Identidade Visual",
    descricao: "Designer da 00Brother, responsável pela identidade visual das marcas, estética gráfica, harmonia tipográfica e criação de interfaces pensadas para a melhor experiência do usuário.",
    competencias: [
      "Design de Interface (UI)",
      "Experiência do Usuário (UX)",
      "Criação de Identidade Visual e Branding",
      "Harmonia de Cores e Tipografia",
      "Design Responsivo para Mobile e Desktop",
      "Criação de Banners e Peças Gráficas"
    ],
    foto: ""
  }
];

function teamPhoto(person, className = "team-photo") {
  if (person.foto) {
    return `<img class="${className}" src="${person.foto}" alt="Foto de ${person.nome}" loading="lazy">`;
  }
  const initial = (person.nome || "?").trim().charAt(0).toUpperCase();
  return `<div class="${className} team-photo-placeholder" aria-label="Foto não cadastrada">${initial}</div>`;
}

function teamCard(person) {
  const file = `${person.pessoa}.html`;
  const skillsPills = (person.competencias || []).slice(0, 3).map(skill => 
    `<span class="team-skill-pill">${skill}</span>`
  ).join("");

  return `<article class="card team-card">
    ${teamPhoto(person)}
    <span class="tag">Equipe 00Brother</span>
    <h3>${person.nome}</h3>
    <strong class="team-role">${person.funcao || "Função a definir"}</strong>
    <p>${person.descricao || ""}</p>
    ${skillsPills ? `<div class="team-skills-preview">${skillsPills}</div>` : ""}
    <a class="project-link" href="${file}">Ver perfil e competências →</a>
  </article>`;
}

function renderTeam(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.innerHTML = equipe.map(teamCard).join("");
  }
}

function renderProfile(personId) {
  const person = equipe.find(item => item.pessoa === personId);
  if (!person) return;

  const photo = document.getElementById("profile-photo");
  const name = document.getElementById("profile-name");
  const role = document.getElementById("profile-role");
  const description = document.getElementById("profile-description");
  const skills = document.getElementById("profile-skills");

  if (photo) photo.innerHTML = teamPhoto(person, "profile-photo-image");
  if (name) name.textContent = person.nome;
  if (role) role.textContent = person.funcao || "Função a definir";
  if (description) description.textContent = person.descricao || "";

  if (skills && person.competencias && person.competencias.length) {
    skills.innerHTML = person.competencias.map(skill => `
      <div class="skill-card">
        <span class="skill-dot">✦</span>
        <span class="skill-text">${skill}</span>
      </div>
    `).join("");
  }
}

if (typeof window !== "undefined") {
  window.equipe = equipe;
  window.renderProfile = renderProfile;
  window.renderTeam = renderTeam;
  window.teamPhoto = teamPhoto;
  window.teamCard = teamCard;
}
