// Importando imagens dos certificados
function Curriculo() {
  const certificados = [
    {
      titulo: "Curso de React",
      descricao: "Curso avançado de React e desenvolvimento web.",
      img: "../assets/certificados/react.png"
    },
    {
      titulo: "Diploma de Desenvolvimento Web",
      descricao: "Diploma emitido pela instituição XYZ.",
      img: "../assets/certificados/web.webp"
    },
    {
      titulo: "Curso de PHP e MySQL",
      descricao: "Aprendizado completo de back-end com PHP e MySQL.",
      img: "../assets/certificados/php.png"
    },
  ];

  const ferramentasCorporativas = [
    { nome: "TrueNAS", img: "https://avatars.githubusercontent.com/u/8131664?s=200&v=4" },
    { nome: "VMs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg" },
    { nome: "GLPI", img: "../assets/certificados/GLPI.png" },
    { nome: "Active Directory", img: "/src/assets/certificados/active-directory.png" },
    { nome: "OPNsense", img: "../assets/projetos/opnsense.png" },
    { nome: "PFsense", img: "../assets/projetos/pfsense.png"},
    { nome: "Zabbix", img: "../assets/projetos/zabbix.jpg" },
    // Adicione mais ferramentas conforme necessário  
  ];

  return (
    <section id="curriculo" className="curriculo">
      <h2>Meu Currículo</h2>

      {/* Botão de download do CV */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <a 
          href="/assets/cv/Evandro_Andrade_CV.pdf" 
          download
          style={{
            padding: "12px 25px",
            background: "linear-gradient(to right, var(--cor-primaria), var(--cor-secundaria))",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "transform 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Baixar Currículo (PDF)
        </a>
      </div>

      {/* Certificados */}
      <div className="certificados-grid">
        {certificados.map((cert, index) => (
          <div key={index} className="certificado-card">
            <img src={cert.img} alt={cert.titulo} style={{ objectFit: "contain" }} />
            <h3>{cert.titulo}</h3>
            <p>{cert.descricao}</p>
            <a href={cert.img} target="_blank" rel="noopener noreferrer">
              Ver Certificado
            </a>
          </div>
        ))}
      </div>

      {/* Ferramentas corporativas */}
      <h3 style={{ textAlign: "center", marginTop: "50px", color: "var(--branco)" }}>
        Ferramentas e Tecnologias Corporativas
      </h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "20px",
        maxWidth: "800px",
        margin: "20px auto"
      }}>
        {ferramentasCorporativas.map((tool) => (
          <div key={tool.nome} style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            transition: "transform 0.2s, background 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {tool.img && (
              <img 
                src={tool.img} 
                alt={tool.nome} 
                style={{ width: "50px", height: "50px", marginBottom: "10px", objectFit: "contain" }} 
              />
            )}
            <h4 style={{ color: "#fff", fontSize: "1rem" }}>{tool.nome}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Curriculo;
