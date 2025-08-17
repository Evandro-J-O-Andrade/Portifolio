// Rodapé simples com links de contato/redes sociais
function Footer() {
  return (
    <footer>
      {/* Chamada para ação */}
      <p>Conecte-se comigo:</p>
      {/* Links em linha, centralizados */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "10px",
        }}
      >
        <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/seugithub" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:seuemail@email.com">Email</a>
      </div>
      {/* Direitos autorais */}
      <p style={{ marginTop: "15px" }}>© 2025 Evandro J. O. Andrade</p>
    </footer>
  );
}

export default Footer;
