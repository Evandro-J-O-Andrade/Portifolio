import minhaFoto from "../assets/evandro.jpeg"; // sua foto

function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "var(--cor-fundo)", // fundo neutro
        
      }}
    >
      {/* Foto em círculo com borda e sombra */}
      <img
        src={minhaFoto}
        alt="Evandro Andrade"
        style={{
          width: "210px",
          height: "260px",
          borderRadius: "50%",       // círculo
          objectFit: "cover", // cobre todo o espaço
          border: "4px solid var(--cor-primaria)", // borda da paleta
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)", // sombra leve
          marginBottom: "25px",
        }}
      />

      {/* Nome e cargo */}
      <h2
        style={{
          fontSize: "2.2rem",
          color: "var(--cor-primaria)",
          marginBottom: "10px",
        }}
      >
        Evandro Andrade
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--cor-texto)",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          lineHeight: "1.6",
        }}
      >
        Desenvolvedor Web | Criador de projetos em React e aplicações interativas.
      </p>

      {/* Links sociais */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href="https://github.com/seugithub"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--cor-primaria)",
            fontSize: "1.5rem",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/seulinkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--cor-primaria)",
            fontSize: "1.5rem",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Sobre;
