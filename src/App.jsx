import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Tiendas from './pages/Tiendas.jsx'
import Faq from './pages/Faq.jsx'
import NotFound from './pages/NotFound.jsx'
import AgregarArticulo from './pages/AgregarArticulo.jsx'
import ListaArticulos from './pages/ListaArticulos.jsx'
import BottomNav from './components/BottomNav.jsx'
import TopNav from './components/TopNav.jsx'
import DetalleArticulo from './pages/DetalleArticulo.jsx'
import Carrito from './pages/Carrito.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-green-900 px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">Supermercado Don Felipe</h1>
        <p className="mt-1 text-green-100">Sistema de gestión de inventario</p>
      </header>

      <TopNav />

      <main className="mx-auto w-full max-w-4xl flex-1 p-6 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/agregar-articulo" element={<AgregarArticulo />} />
          <Route path="/articulos" element={<ListaArticulos />} />
          <Route path="/articulos/:id" element={<DetalleArticulo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}

export default App