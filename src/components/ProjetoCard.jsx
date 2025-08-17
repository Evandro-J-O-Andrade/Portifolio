function ProjetoCard({ titulo, descricao, tecnologias, link, img }) {
  return (
    <div className="projeto-card">
      {/* Imagem do projeto */}
      <img 
        src={img || "https://via.placeholder.com/300x200"} 
        alt={titulo} 
        style={{ borderRadius: "10px", marginBottom: "15px", width: "100%" }} 
      />

      {/* Título */}
      <h3>{titulo}</h3>

      {/* Descrição */}
      <p style={{ color: "var(--cor-texto-secundario)" }}>{descricao}</p>

      {/* Tecnologias */}
      <p style={{ fontSize: "0.9rem", color: "var(--cor-texto-secundario)" }}>
        Tecnologias: {tecnologias.join(", ")}
      </p>

      {/* Botão "Ver Projeto" */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
}

export default ProjetoCard;
