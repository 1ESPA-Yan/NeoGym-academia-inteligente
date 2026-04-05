import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default Error;