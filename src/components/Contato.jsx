// Formulário de contato simples que usa mailto: para enviar mensagem
import { useState } from "react";

function Contato() {
  // Estados controlados dos campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);

  // Função chamada ao enviar o formulário
  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita recarregar a página
    // Validação simples de campos obrigatórios
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    // Monta um link mailto com os dados preenchidos
    const assunto = encodeURIComponent("Contato do Portfólio");
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );
    window.location.href = `mailto:evandro_j.o.a@hotmail.com?subject=${assunto}&body=${corpo}`;
    // Feedback de sucesso e limpa os campos
    setSucesso(true);
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <section id="contato">
      {/* Título da seção */}
      <h2>Contato</h2>
      {/* Formulário centralizado com estilos inline simples */}
      <form
        onSubmit={enviarFormulario}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            minHeight: "120px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "var(--cor-primaria)",
            color: "var(--cor-branco)",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "var(--cor-primaria-escura)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "var(--cor-primaria)")
          }
        >
          Enviar
        </button>
        {/* Mensagem de sucesso condicional */}
        {sucesso && (
          <p style={{ color: "green", textAlign: "center" }}>
            Mensagem enviada com sucesso!
          </p>
        )}
      </form>
    </section>
  );
}

export default Contato;
