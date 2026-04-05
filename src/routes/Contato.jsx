import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos.");
      return;
    }
    setEnviado(true);
  }

  function limpar() {
    setNome("");
    setEmail("");
    setTelefone("");
    setEnviado(false);
  }

  return (
    <div className="contato-container">
      <div className="contato-hero">
        <h1>Entre em <span>Contato</span></h1>
        <p>Fale com a equipe da NeoGym</p>
      </div>

      <div className="contato-card">
        {enviado ? (
          <div className="contato-sucesso">
            <h2>✔ Mensagem enviada!</h2>
            <p>Obrigado, {nome}! Entraremos em contato em breve.</p>
            <button className="btn-limpar" onClick={limpar}>Enviar nova mensagem</button>
          </div>
        ) : (
          <form className="contato-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Seu telefone — ex: (11) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contato;