function Planos() {
  return (
    <div className="planos-container">
      <div className="planos-hero">
        <h1>Nossos <span>Planos</span></h1>
        <p>Escolha o plano ideal para o seu objetivo</p>
      </div>

      <div className="planos-grid">

        <div className="plano-item">
          <h2>Básico</h2>
          <div className="plano-preco">R$ 89<span>/mês</span></div>
          <ul>
            <li>✔ Acesso à musculação</li>
            <li>✔ Horário comercial</li>
            <li>✔ Vestiário completo</li>
            <li>✖ Aulas coletivas</li>
            <li>✖ Personal trainer</li>
          </ul>
          <button className="btn-plano">Contratar</button>
        </div>

        <div className="plano-item destaque">
          <div className="badge">Mais popular</div>
          <h2>Premium</h2>
          <div className="plano-preco">R$ 149<span>/mês</span></div>
          <ul>
            <li>✔ Acesso à musculação</li>
            <li>✔ Horário flexível</li>
            <li>✔ Vestiário completo</li>
            <li>✔ Aulas coletivas</li>
            <li>✖ Personal trainer</li>
          </ul>
          <button className="btn-plano">Contratar</button>
        </div>

        <div className="plano-item">
          <h2>Black</h2>
          <div className="plano-preco">R$ 249<span>/mês</span></div>
          <ul>
            <li>✔ Acesso à musculação</li>
            <li>✔ Acesso 24h</li>
            <li>✔ Vestiário completo</li>
            <li>✔ Aulas coletivas</li>
            <li>✔ Personal trainer</li>
          </ul>
          <button className="btn-plano">Contratar</button>
        </div>

      </div>
    </div>
  );
}

export default Planos;