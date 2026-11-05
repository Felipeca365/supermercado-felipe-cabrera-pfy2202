import { NavLink } from 'react-router-dom'

const estiloBase = 'rounded px-3 py-1 font-semibold'

function claseEnlace({ isActive }) {
  return isActive
    ? `${estiloBase} bg-white text-green-900`
    : `${estiloBase} text-green-100 hover:bg-green-700`
}

function TopNav() {
  return (
    <nav aria-label="Menú de artículos" className="flex gap-2 bg-green-800 px-6 py-2">
      <NavLink to="/agregar-articulo" className={claseEnlace}>
        Agregar artículo
      </NavLink>
      <NavLink to="/articulos" className={claseEnlace}>
        Lista de artículos
      </NavLink>
    </nav>
  )
}

export default TopNav