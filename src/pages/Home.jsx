import { useState } from 'react'

const productosIniciales = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', categoria: 'Abarrotes', stock: 120, minimo: 40 },
  { id: 2, nombre: 'Aceite vegetal (1 L)', categoria: 'Abarrotes', stock: 35, minimo: 50 },
  { id: 3, nombre: 'Leche entera (1 L)', categoria: 'Lácteos', stock: 80, minimo: 60 },
  { id: 4, nombre: 'Yogurt natural (150 g)', categoria: 'Lácteos', stock: 12, minimo: 30 },
  { id: 5, nombre: 'Detergente líquido (3 L)', categoria: 'Limpieza', stock: 25, minimo: 20 },
  { id: 6, nombre: 'Pan de molde', categoria: 'Panadería', stock: 0, minimo: 15 },
]

function Home() {
  const [productos, setProductos] = useState(productosIniciales)

  const cambiarStock = (id, delta) => {
    setProductos(productos.map((p) =>
      p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
    ))
  }

  const estado = (p) => {
    if (p.stock === 0) return { texto: 'Sin stock', clase: 'bg-red-700' }
    if (p.stock < p.minimo) return { texto: 'Stock bajo', clase: 'bg-orange-600' }
    return { texto: 'Normal', clase: 'bg-green-700' }
  }

  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Inventario actual</h2>
      <p className="mb-4 text-gray-600">
        Controla el stock de los productos de tu supermercado.
      </p>

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-3">Producto</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Estado</th>
              <th className="p-3">Ajustar</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => {
              const e = estado(p)
              return (
                <tr key={p.id} className="border-t border-gray-200">
                  <td className="p-3">{p.nombre}</td>
                  <td className="p-3">{p.categoria}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3">
                    <span className={`rounded-full px-2 py-0.5 text-sm text-white ${e.clase}`}>
                      {e.texto}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => cambiarStock(p.id, -1)}
                      aria-label={`Restar ${p.nombre}`}
                      className="mr-1 w-8 cursor-pointer rounded bg-gray-200 py-1 font-bold hover:bg-gray-300"
                    >
                      −
                    </button>
                    <button
                      onClick={() => cambiarStock(p.id, 1)}
                      aria-label={`Sumar ${p.nombre}`}
                      className="w-8 cursor-pointer rounded bg-gray-200 py-1 font-bold hover:bg-gray-300"
                    >
                      +
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Home