import '../css/estilo.css'

const Home = () => {
  return (
    <main className="home">
      <section className="banner">
        <div className="banner-content">
          <h1>NeoGym</h1>
          <p>Sua academia inteligente. Transforme seu corpo e sua mente com a NeoGym.</p>
          <button className="btn-banner">Saiba Mais</button>
        </div>
      </section>
      <section className="info">
        <h2>Por que escolher a NeoGym?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Equipamentos modernos</h3>
            <p>Aparelhos de última geração para você treinar com segurança e eficiência.</p>
          </div>
          <div className="info-card">
            <h3>Profissionais qualificados</h3>
            <p>Equipe de personal trainers prontos para montar o treino ideal para você.</p>
          </div>
          <div className="info-card">
            <h3>Horário flexível</h3>
            <p>Funcionamos de segunda a sábado, das 6h às 23h. Treine no seu ritmo.</p>
          </div>
        </div>
      </section>
      <section className="planos-destaque">
        <h2>Planos mais escolhidos</h2>
        <div className="planos-cards">
          <div className="plano-card">
            <h3>Básico</h3>
            <p className="preco">R$ 599,90<span>/mês</span></p>
            <ul>
              <li>Acesso à musculação</li>
              <li>Horário livre</li>
              <li>1 avaliação física</li>
            </ul>
            <button className="btn-plano">Assinar</button>
          </div>
          <div className="plano-card destaque">
            <h3>Premium</h3>
            <p className="preco">R$ 999,90<span>/mês</span></p>
            <ul>
              <li>Musculação + aulas coletivas</li>
              <li>Acompanhamento mensal</li>
              <li>Acesso ao app NeoGym</li>
            </ul>
            <button className="btn-plano">Assinar</button>
          </div>
          <div className="plano-card">
            <h3>Black</h3>
            <p className="preco">R$ 1599,90<span>/mês</span></p>
            <ul>
              <li>Acesso total + personal</li>
              <li>Nutricionista incluso</li>
              <li>Armário exclusivo</li>
            </ul>
            <button className="btn-plano">Assinar</button>
          </div>
        </div>
      </section>



    </main>
  )
}

export default Home
