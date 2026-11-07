import { useInventario } from '../context/InventarioContext.jsx'
import BadgeStock from '../components/BadgeStock.jsx'
import Boton from '../components/Boton.jsx'

function Home() {
  const { articulos, dispatch } = useInventario()

  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Inventario actual</h2>
      <p className="mb-4 text-gray-600">
        Controla el stock de los productos de tu supermercado. Los cambios se reflejan
        en todas las pantallas.
      </p>

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-2 sm:p-3">Producto</th>
              <th className="hidden p-2 sm:p-3 sm:table-cell">Categoría</th>
              <th className="p-2 sm:p-3">Stock</th>
              <th className="p-2 sm:p-3">Estado</th>
              <th className="p-2 sm:p-3">Ajustar</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map((a) => (
              <tr key={a.id} className="border-t border-gray-200">
                <td className="p-2 sm:p-3">{a.nombre}</td>
                <td className="hidden p-2 sm:p-3 sm:table-cell">{a.categoria}</td>
                <td className="p-2 sm:p-3">{a.stock}</td>
                <td className="p-2 sm:p-3">
                  <BadgeStock stock={a.stock} minimo={a.minimo} />
                </td>
                <td className="p-2 sm:p-3">
                  <div className="flex gap-1">
                    <Boton
                      variante="secundario"
                      tamano="chico"
                      aria-label={`Restar ${a.nombre}`}
                      disabled={a.stock === 0}
                      onClick={() => dispatch({ type: 'AJUSTAR_STOCK', id: a.id, delta: -1 })}
                    >
                      −
                    </Boton>
                    <Boton
                      variante="secundario"
                      tamano="chico"
                      aria-label={`Sumar ${a.nombre}`}
                      onClick={() => dispatch({ type: 'AJUSTAR_STOCK', id: a.id, delta: 1 })}
                    >
                      +
                    </Boton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Home