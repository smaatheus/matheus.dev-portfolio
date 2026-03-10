function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="hero-tag">Portfólio Front-end • Next.js</p>

        <h1>Aprendendo, construindo e evoluindo como desenvolvedor.</h1>

        <p className="hero-text">
          Desenvolvo projetos práticos em desenvolvimento web para transformar
          aprendizado em experiência real, fortalecer meu portfólio e me
          preparar para o mercado de tecnologia.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Ver projetos
          </a>
          <a href="#contact" className="btn secondary">
            Falar comigo
          </a>
        </div>

        <div className="hero-info">
          <div className="hero-info-card">
            <strong>2+</strong>
            <span>Projetos de portfólio</span>
          </div>

          <div className="hero-info-card">
            <strong>Front-end</strong>
            <span>Foco principal atual</span>
          </div>

          <div className="hero-info-card">
            <strong>ADS</strong>
            <span>PUC Minas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
