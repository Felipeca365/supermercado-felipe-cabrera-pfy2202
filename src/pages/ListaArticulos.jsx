import { Link, useSearchParams } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'
import FiltroCategoria from '../components/FiltroCategoria.jsx'
import BadgeStock from '../components/BadgeStock.jsx'

function ListaArticulos() {
  const { articulos } = useInventario()

  // La categoría elegida se guarda en la URL: /articulos?categoria=Lácteos
  const [searchParams, setSearchParams] = useSearchParams()
  const categoria = searchParams.get('categoria') || 'Todas'

  const cambiarCategoria = (valor) => {
    if (valor === 'Todas') {
      setSearchParams({})
    } else {
      setSearchParams({ categoria: valor })
    }
  }

  // Lista derivada: se calcula en cada render, el inventario original NO se modifica
  const articulosFiltrados =
    categoria === 'Todas'
      ? articulos
      : articulos.filter((a) => a.categoria === categoria)

  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Lista de artículos</h2>
      <p className="mb-1 text-gray-600">
        Mostrando <strong>{articulosFiltrados.length}</strong> de{' '}
        <strong>{articulos.length}</strong> artículos del inventario.
      </p>
      <p className="mb-4 text-sm text-gray-500">
        Haz clic en el nombre de un artículo para ver su detalle.
      </p>

      <FiltroCategoria valor={categoria} onChange={cambiarCategoria} />

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-3">N°</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Marca</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {articulosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-600">
                  No hay artículos en esta categoría.
                </td>
              </tr>
            ) : (
              articulosFiltrados.map((articulo, indice) => (
                <tr key={articulo.id} className="border-t border-gray-200">
                  <td className="p-3">{indice + 1}</td>
                  <td className="p-3">
                    <Link
                      to={`/articulos/${articulo.id}`}
                      state={{ busqueda: searchParams.toString() }}
                      className="font-semibold text-green-800 underline hover:text-green-600"
                    >
                      {articulo.nombre}
                    </Link>
                  </td>
                  <td className="p-3">{articulo.marca}</td>
                  <td className="p-3">{articulo.categoria}</td>
                  <td className="p-3">{articulo.stock}</td>
                  <td className="p-3">
                    <BadgeStock stock={articulo.stock} minimo={articulo.minimo} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ListaArticulos