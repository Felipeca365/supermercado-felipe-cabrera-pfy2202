import { Link, useLocation, useParams } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'
import BadgeStock from '../components/BadgeStock.jsx'
import Boton from '../components/Boton.jsx'

function DetalleArticulo() {
  const { id } = useParams() // llega como texto: "3"
  const { state } = useLocation()
  const { articulos, carrito, dispatch } = useInventario()

  // Para volver a la lista con el mismo filtro que tenía
  const volverA = state?.busqueda ? `/articulos?${state.busqueda}` : '/articulos'

  const articulo = articulos.find((a) => a.id === Number(id))

  if (!articulo) {
    return (
      <section>
        <h2 className="mb-1 text-2xl font-bold text-green-900">Artículo no encontrado</h2>
        <p className="mb-4 text-gray-600">El artículo que buscas no existe en el inventario.</p>
        <Link to="/articulos" className="font-semibold text-green-800 underline hover:text-green-600">
          Volver a la lista
        </Link>
      </section>
    )
  }

  const enCarrito = carrito.find((i) => i.id === articulo.id)?.cantidad ?? 0
  const sinStock = articulo.stock === 0

  return (
    <section className="mx-auto max-w-lg">
      <Link to={volverA} className="mb-3 inline-block font-semibold text-green-800 hover:text-green-600">
        ← Volver a la lista
      </Link>

      <div className="rounded-lg bg-white p-5 shadow">
        <h2 className="mb-4 text-2xl font-bold text-green-900">{articulo.nombre}</h2>

        <dl className="mb-5 grid grid-cols-2 gap-y-2">
          <dt className="font-semibold">Marca</dt>
          <dd>{articulo.marca}</dd>
          <dt className="font-semibold">Categoría</dt>
          <dd>{articulo.categoria}</dd>
          <dt className="font-semibold">Stock disponible</dt>
          <dd>{articulo.stock} unidades</dd>
          <dt className="font-semibold">Stock mínimo</dt>
          <dd>{articulo.minimo} unidades</dd>
          <dt className="font-semibold">Estado</dt>
          <dd>
            <BadgeStock stock={articulo.stock} minimo={articulo.minimo} />
          </dd>
          <dt className="font-semibold">En tu carrito</dt>
          <dd>{enCarrito} unidades</dd>
        </dl>

        <Boton
          className="w-full"
          disabled={sinStock}
          onClick={() => dispatch({ type: 'AGREGAR_AL_CARRITO', id: articulo.id })}
        >
          {sinStock ? 'Sin stock disponible' : 'Agregar al carrito'}
        </Boton>

        <Link to="/carrito" className="mt-3 block text-center font-semibold text-green-800 underline hover:text-green-600">
          Ir al carrito
        </Link>
      </div>
    </section>
  )
}

export default DetalleArticulo