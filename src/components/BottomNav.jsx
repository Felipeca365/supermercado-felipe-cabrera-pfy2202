import { NavLink } from 'react-router-dom'

const estiloBase = 'flex-1 p-4 text-center'

function claseEnlace({ isActive }) {
  return isActive
    ? `${estiloBase} bg-green-700 font-bold text-white`
    : `${estiloBase} text-green-100 hover:bg-green-800`
}

function BottomNav() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 flex bg-green-900"
    >
      <NavLink to="/" end className={claseEnlace}>
        Inicio
      </NavLink>
      <NavLink to="/tiendas" className={claseEnlace}>
        Nuestras tiendas
      </NavLink>
      <NavLink to="/preguntas-frecuentes" className={claseEnlace}>
        Preguntas frecuentes
      </NavLink>
    </nav>
  )
}

export default BottomNav