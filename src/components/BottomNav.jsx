import { NavLink } from 'react-router-dom'

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/tiendas">Nuestras tiendas</NavLink>
      <NavLink to="/preguntas-frecuentes">Preguntas frecuentes</NavLink>
    </nav>
  )
}

export default BottomNav
