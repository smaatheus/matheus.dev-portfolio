function Contact() {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="contact-box">
          <p className="section-label light-label">Contato</p>
          <h2 className="section-title light">Vamos conversar?</h2>
          <p className="contact-text">
            Estou em busca de oportunidades de estágio na área de tecnologia e
            desenvolvimento web. Se quiser conversar sobre projetos, aprendizado
            ou oportunidades, estes são meus canais:
          </p>

          <div className="contact-links">
            <a href="mailto:matheusp3rera@gmail.com">Email</a>
            <a
              href="https://github.com/smaatheus"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-santos-38980333a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
