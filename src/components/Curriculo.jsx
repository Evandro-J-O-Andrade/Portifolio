

function Curriculo() {
  const certificados = [
    {
      titulo: "Curso de React",
      descricao: "Curso avançado de React e desenvolvimento web.",
      img: "src/assets/certificados/contato.png"
    },
    {
      titulo: "Diploma de Desenvolvimento Web",
      descricao: "Diploma emitido pela instituição XYZ.",
      img: "/src/assets/certificados/contato.png"
    },
    {
      titulo: "Curso de PHP e MySQL",
      descricao: "Aprendizado completo de back-end com PHP e MySQL.",
      img: "/src/assets/certificados/contato.png"
    },
  ];

  return (
    <section id="curriculo" className="curriculo">
      <h2>Meu Currículo</h2>
      <div className="certificados-grid">
        {certificados.map((cert, index) => (
          <div key={index} className="certificado-card">
            <img src={cert.img} alt={cert.titulo} />
            <h3>{cert.titulo}</h3>
            <p>{cert.descricao}</p>
            <a href={cert.img} target="_blank" rel="noopener noreferrer">
              Ver Certificado
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Curriculo;
