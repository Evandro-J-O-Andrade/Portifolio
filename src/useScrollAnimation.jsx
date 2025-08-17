// Hook responsável por observar as seções e aplicar classe de animação
import { useEffect } from "react";

export default function useScrollAnimation() {
  // useEffect roda após a montagem do componente
  useEffect(() => {
    // Seleciona todas as tags <section>
    const sections = document.querySelectorAll("section");
    // Cria um IntersectionObserver para detectar quando a section entra na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se estiver visível, adiciona a classe que ativa a animação
          if (entry.isIntersecting) {
            entry.target.classList.add("aparecer");
          }
        });
      },
      { threshold: 0.1 } // 10% visível já é suficiente
    );

    // Observa cada section encontrada
    sections.forEach((section) => observer.observe(section));
  }, []); // Array vazio garante que rode uma vez na montagem
}
