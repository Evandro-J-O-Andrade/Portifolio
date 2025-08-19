import { useEffect, useRef, useState } from "react";
import ProjetoCard from "./ProjetoCard";

// Lista de projetos com imagens (use o caminho real)
const projetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao: "Meu site pessoal para mostrar projetos e currículo online.",
    tecnologias: ["React", "JS", "CSS", "HTML"],
    link: "#https://github.com/evandro-j-o-andrade",
    img: "/certificados/portifolio2.png", // caminho relativo para a imagem
  },
  {
    titulo: "Jogo RPG React",
    descricao: "Um jogo interativo desenvolvido em React, com mecânicas de RPG.",
    tecnologias: ["React", "JavaScript", "CSS"],
    link: "https://snakeshow.netlify.app/",
    img: "/certificados/tela4.jpg",
  },
  {
    titulo: "Site Angel Cosméticos",
    descricao: "Projeto de e-commerce com produtos, carrinho e cadastro de usuários.",
    tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://angelcosmeticos.netlify.app/",
    img: "public/certificados/siteangelcosmeticos.png",
  },
  {
    titulo: "Sistema de Cadastro de Médicos",
    descricao: "Aplicação para cadastrar médicos e atendimentos usando PHP e MySQL.",
    tecnologias: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    img: "public/certificados/diagrama.jpg",
  },
];

function Projetos() {
  const sectionRef = useRef();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section 
      id="projetos" 
      ref={sectionRef} 
      className={visivel ? "aparecer" : ""}
      style={{ padding: "80px 20px", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", color: "var(--cor-primaria)", marginBottom: "40px" }}>
        Meus Projetos
      </h2>
      <div className="projetos-grid">
        {projetos.map((proj, index) => (
          <ProjetoCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
