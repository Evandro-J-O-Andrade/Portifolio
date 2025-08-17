// Botão flutuante para voltar ao topo da página
import { useState, useEffect } from "react";

function ScrollTop() {
  // Mostra/esconde o botão conforme o scroll
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Função que verifica a posição do scroll
    const toggleVisibilidade = () => {
      setVisivel(window.scrollY > 300); // Exibe se rolou mais de 300px
    };
    window.addEventListener("scroll", toggleVisibilidade);
    // Limpa o listener ao desmontar
    return () => window.removeEventListener("scroll", toggleVisibilidade);
  }, []);

  // Rolagem suave até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Renderiza o botão somente quando visível
  return (
    visivel && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "50%",
          backgroundColor: "var(--cor-primaria)",
          color: "var(--cor-branco)",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        ↑
      </button>
    )
  );
}

export default ScrollTop;
