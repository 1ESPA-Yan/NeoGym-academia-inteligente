import '../css/estilo.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <section className="nav">
      <Link to="/" className="tlink">Home</Link>
      <Link to="/sobre" className="tlink">Sobre</Link>
      <Link to="/planos" className="tlink">Planos</Link>
      <Link to="/calculadora" className="tlink">Calculadora IMC</Link>
      <Link to="/contato" className="tlink">Contato</Link>
    </section>
  )
}

export default Nav