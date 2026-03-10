function Projects() {
  const projects = [
    {
      title: "TaskFlow",
      description:
        "Aplicação de lista de tarefas desenvolvida com React, com busca, prioridade, filtros, localStorage e deploy na Vercel.",
      tech: "React, JavaScript, Vite, CSS",
      github: "https://github.com/smaatheus/TaskFlow-React.git",
      demo: "https://todo-react-kohl-beta.vercel.app/",
    },
    {
      title: "LandingPage com Gestão de Estoque",
      description:
        "Projeto com foco em gerenciamento de produtos e estoque, com interface administrativa e integração com lógica de back-end.",
      tech: "JavaScript, Node.js, HTML, CSS",
      github: "https://github.com/smaatheus/Product-LandingPage.git",
      demo: "https://product-landingpage-blue.vercel.app/",
    },
    {
      title: "Página de Turismo em BH",
      description:
        "Página de turismo com foco em mostrar os melhores pontos turisticos de Belo Horizonte.",
      tech: "JavaScript, Node.js, HTML, CSS",
      github: "https://github.com/smaatheus/trabalho-pratico2.git",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projetos</p>
          <h2 className="section-title">Projetos em destaque</h2>
          <p className="section-description">
            Aqui estão alguns dos projetos que venho desenvolvendo para
            fortalecer meu portfólio e evoluir minhas habilidades em
            desenvolvimento web.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <p className="project-highlight">{project.highlight}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
