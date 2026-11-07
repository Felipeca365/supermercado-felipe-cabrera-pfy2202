import { Link } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'
import Boton from '../components/Boton.jsx'

function Carrito() {
  const { articulos, carrito, dispatch } = useInventario()

  // Une cada línea del carrito (id, cantidad) con los datos del inventario
  const items = carrito.map((linea) => {
    const articulo = articulos.find((a) => a.id === linea.id)
    return { ...articulo, cantidad: linea.cantidad }
  })
  const totalUnidades = items.reduce((total, i) => total + i.cantidad, 0)

  if (items.length === 0) {
    return (
      <section>
        <h2 className="mb-1 text-2xl font-bold text-green-900">Carrito de compras</h2>
        <p className="mb-4 text-gray-600">Tu carrito está vacío.</p>
        <Link to="/articulos" className="font-semibold text-green-800 underline hover:text-green-600">
          Ver artículos
        </Link>
      </section>
    )
  }

  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Carrito de compras</h2>
      <p className="mb-4 text-gray-600">
        Artículos distintos: <strong>{items.length}</strong> · Unidades totales:{' '}
        <strong>{totalUnidades}</strong>
      </p>

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-2 sm:p-3">Producto</th>
              <th className="hidden p-2 sm:table-cell sm:p-3">Marca</th>
              <th className="p-2 sm:p-3">Cantidad</th>
              <th className="hidden p-2 sm:table-cell sm:p-3">Disponible en inventario</th>
              <th className="p-2 sm:p-3">Quitar</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="p-2 sm:p-3">
                  {item.nombre}
                  <span className="block text-xs text-gray-500 sm:hidden">
                    Disponible: {item.stock}
                  </span>
                </td>
                <td className="hidden p-2 sm:table-cell sm:p-3">{item.marca}</td>
                <td className="p-2 sm:p-3">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Boton
                      variante="secundario"
                      tamano="chico"
                      aria-label={`Disminuir ${item.nombre}`}
                      onClick={() => dispatch({ type: 'DISMINUIR_CANTIDAD', id: item.id })}
                    >
                      −
                    </Boton>
                    <span className="w-6 text-center font-bold">{item.cantidad}</span>
                    <Boton
                      variante="secundario"
                      tamano="chico"
                      aria-label={`Aumentar ${item.nombre}`}
                      disabled={item.stock === 0}
                      onClick={() => dispatch({ type: 'AGREGAR_AL_CARRITO', id: item.id })}
                    >
                      +
                    </Boton>
                  </div>
                </td>
                <td className="hidden p-2 sm:table-cell sm:p-3">{item.stock}</td>
                <td className="p-2 sm:p-3">
                  <Boton
                    variante="peligro"
                    tamano="chico"
                    onClick={() => dispatch({ type: 'QUITAR_DEL_CARRITO', id: item.id })}
                  >
                    Quitar
                  </Boton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Carrito