import { useState } from "react";
import "./Header.css"; // CSS específico do header

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      {/* Logo / Nome */}
      <h1 className="logo">Evandro J. O. Andrade</h1>

      {/* Navegação */}
      <nav className={`nav ${menuAberto ? "ativo" : ""}`}>
        <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a>
        <a href="#projetos" onClick={() => setMenuAberto(false)}>Projetos</a>
        <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
        <a href="#curriculo" onClick={() => setMenuAberto(false)}>Currículo</a>
      </nav>

      {/* Menu hamburguer */}
      <div
        className={`hamburguer ${menuAberto ? "ativo" : ""}`}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir/fechar menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" ? setMenuAberto(!menuAberto) : null)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
