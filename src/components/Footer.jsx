import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // importa o CSS do rodapé
function Footer() {
  return (
    <footer style={{ padding: "30px 20px", backgroundColor: "var(--cor-fundo)", textAlign: "center", color: "var(--cor-texto)" }}>
      {/* Chamada para ação */}
      <p>Conecte-se comigo:</p>

      {/* Links em linha com ícones */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
        <a 
          href="https://linkedin.com/in/evandrojoandrade" 
          target="_blank" 
          rel="noopener noreferrer"
          style={footerIconStyle}
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/evandro-j-o-andrade" 
          target="_blank" 
          rel="noopener noreferrer"
          style={footerIconStyle}
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:evandro_j.o.a@hotmail.com" 
          style={footerIconStyle}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Direitos autorais */}
      <p style={{ marginTop: "15px" }}>© 2025 Evandro J. O. Andrade</p>
    </footer>
  );
}

// Estilo compartilhado para os ícones
const footerIconStyle = {
  color: "var(--cor-primaria)",
  fontSize: "1.8rem",
  transition: "transform 0.3s, color 0.3s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Footer;
