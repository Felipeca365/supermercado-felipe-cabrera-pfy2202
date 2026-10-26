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
    if (p.stock === 0) return { texto: 'Sin stock', clase: 'agotado' }
    if (p.stock < p.minimo) return { texto: 'Stock bajo', clase: 'bajo' }
    return { texto: 'Normal', clase: 'ok' }
  }

  return (
    <section>
      <h2>Inventario actual</h2>
      <p>Controla el stock de los productos de tu supermercado.</p>

      <table className="tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Ajustar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => {
            const e = estado(p)
            return (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.categoria}</td>
                <td>{p.stock}</td>
                <td><span className={`badge ${e.clase}`}>{e.texto}</span></td>
                <td>
                  <button onClick={() => cambiarStock(p.id, -1)} aria-label={`Restar ${p.nombre}`}>−</button>
                  <button onClick={() => cambiarStock(p.id, 1)} aria-label={`Sumar ${p.nombre}`}>+</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Home
