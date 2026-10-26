import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Tiendas from './pages/Tiendas.jsx'
import Faq from './pages/Faq.jsx'
import NotFound from './pages/NotFound.jsx'
import BottomNav from './components/BottomNav.jsx'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Supermercado Don Felipe</h1>
        <p>Sistema de gestión de inventario</p>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}

export default App
