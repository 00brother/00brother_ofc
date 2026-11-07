/*
PAINEL DE PROJETOS — 00BROTHER
*/
const projetos = [
  {
    pessoa: "gabriel",
    titulo: "Fonsati Decor",
    descricao: "Site institucional e vitrine digital para estúdio de decoração e design de interiores, com navegação refinada, apresentação de ambientes e catálogo exclusivo.",
    imagem: "",
    link: "https://fonsati-decor.vercel.app",
    entregue: true
  },
  {
    pessoa: "benjamin",
    titulo: "Fonsati do Corte",
    descricao: "Plataforma digital moderna para barbearia profissional, destacando serviços especializados de corte e barba, atendimento personalizado e contato ágil.",
    imagem: "",
    link: "https://fonsati-do-corte.vercel.app/",
    entregue: true
  }
];

function projectCard(p) {
  const img = p.imagem 
    ? `<img class="project-image" src="${p.imagem}" alt="Prévia do projeto ${p.titulo}" loading="lazy">` 
    : `<div class="project-image project-image-placeholder" aria-label="Prévia do projeto">
         <div class="project-badge-icon">🌐</div>
         <span class="project-placeholder-text">${p.titulo}</span>
       </div>`;
  const link = p.link 
    ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener noreferrer">Visitar projeto ↗</a>` 
    : "";
  return `<article class="card project-card">
    ${img}
    <div class="project-content">
      <span class="tag">Site Entregue</span>
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
      ${link}
    </div>
  </article>`;
}

if (typeof window !== "undefined") {
  window.projetos = projetos;
  window.projectCard = projectCard;
}

