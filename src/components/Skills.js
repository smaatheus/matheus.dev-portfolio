function Skills() {
  const skills = [
    "JavaScript",
    "NodeJs",
    "React",
    "NextJs",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "API REST",
    "Responsividade",
  ];

  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title light">Tecnologias</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
