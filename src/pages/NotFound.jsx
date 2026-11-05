import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Página no encontrada</h2>
      <p className="mb-4 text-gray-600">La ruta que buscas no existe.</p>
      <Link to="/" className="font-semibold text-green-800 underline hover:text-green-600">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound