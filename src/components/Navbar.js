function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <h2 className="logo">Matheus.dev</h2>

        <nav className="nav-links">
          <a href="#about">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
