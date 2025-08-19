import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";import React from "react";
import minhaFoto from "../assets/evandro.jpeg";
import "./Sobre.css";

const skills = [
  { nome: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nome: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nome: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { nome: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { nome: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { nome: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { nome: "SQL / MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { nome: "VB.NET / Visual Basic", img: "https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" },
  { nome: "VBA", img: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },
  { nome: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { nome: "Git / GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { nome: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { nome: "Windows", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { nome: "Apache", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { nome: "phpMyAdmin", img: "https://www.phpmyadmin.net/static/images/logo-og.png" },
  { nome: "TrueNAS", img: "https://avatars.githubusercontent.com/u/8131664?s=200&v=4" },
  { nome: "VMs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg" },
  { nome: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { nome: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nome: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

function Sobre() {
  return (
    <>
      {/* Meta tags para SEO */}
      <Helmet>
        <title>Evandro Andrade | Sobre</title>
        <meta
          name="description"
          content="Conheça Evandro Andrade, desenvolvedor web com foco em React, JS, PHP, SQL, VB.NET, Python e tecnologias corporativas."
        />
        <meta name="keywords" content="Evandro Andrade, React, JavaScript, PHP, SQL, VB.NET, Python, portfólio, TI, GLPI, TrueNAS, Active Directory" />
        <meta name="author" content="Evandro Andrade" />
      </Helmet>

      <section id="sobre" className="sobre-container">
        <img src={minhaFoto} alt="Evandro Andrade" className="sobre-foto" />
        <h2>Evandro Andrade</h2>
        <p className="sobre-cargo">
          Desenvolvedor e Programador Web | Criador de projetos em React e aplicações interativas.
        </p>

        <div className="social-links">
          <a href="https://github.com/evandro-j-o-andrade" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/evandrojoandrade" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>

        <div className="bio-detalhada">
          <p>Sou apaixonado por tudo aquilo que eu faço, trabalho atualmente no Instituto Alpha para Medicina e na INTS como profissional de T.I.</p>
          <p>Atuo com treinamentos de funcionários e terceiros no uso de sistemas de gestão hospitalar, ministrando cursos, além de implementar tecnologias como GLPI e Active Directory. Também sou responsável pela criação e gerenciamento de usuários, pastas e políticas de grupo (GPOs).</p>
          <p>Busco constantemente evoluir na área de tecnologia, segurança da informação e eletrônica. Sou formado em Redes de Computadores pela Universidade Paulista (UNIP) e cursei dois semestres de Análise e Desenvolvimento de Sistemas.</p>
          <p>Tenho grande interesse em back-end e estou focado em melhorar minhas habilidades em front-end. Possuo certificados na DIO e em outras plataformas. Atualmente também trabalho com Truenas e VMs para gestão de infraestrutura.</p>
        </div>

        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.nome} className="skill-card">
              <img src={skill.img} alt={skill.nome} />
              <h4>{skill.nome}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Sobre;
