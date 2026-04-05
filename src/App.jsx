
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
