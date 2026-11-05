import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Tiendas from './pages/Tiendas.jsx'
import Faq from './pages/Faq.jsx'
import NotFound from './pages/NotFound.jsx'
import BottomNav from './components/BottomNav.jsx'
import AgregarArticulo from './pages/AgregarArticulo.jsx'
import ListaArticulos from './pages/ListaArticulos.jsx'
import TopNav from './components/TopNav.jsx'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Supermercado Don Felipe</h1>
        <p>Sistema de gestión de inventario</p>
      </header>

      <TopNav />
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/agregar-articulo" element={<AgregarArticulo />} />
          <Route path="/articulos" element={<ListaArticulos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}

export default App
