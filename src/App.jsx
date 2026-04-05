
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Sobre from "./routes/Sobre";
import Planos from "./routes/Planos";
import CalculadoraImc from "./routes/CalculadoraImc";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/calculadora" element={<CalculadoraImc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
