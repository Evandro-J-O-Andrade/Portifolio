// Importa os componentes da aplicação
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Curriculo from "./components/Curriculo";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
// Hook customizado para animar as seções ao entrar na tela
import useScrollAnimation from "./useScrollAnimation";

// Componente raiz do app
function App() {
  // Ativa a animação de scroll assim que o app monta
  useScrollAnimation();
  return (
    <div>
      {/* Cabeçalho com menu */}
      <Header />
      {/* Seção Sobre com foto e bio */}
      <Sobre />
      {/* Seção de Projetos com cards */}
      <Projetos />
      
      {/* Formulário/contatos */}
      <Contato />
      {/* Seção de Currículo com certificados */}
      <Curriculo />
      {/* Rodapé com redes sociais */}
      <Footer />
      {/* Botão para voltar ao topo */}
      <ScrollTop />
    </div>
  );
}

export default App;
