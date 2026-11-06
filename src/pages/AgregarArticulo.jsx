import { useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'
import { CATEGORIAS } from '../data/categorias.js'

function AgregarArticulo() {
  const { articulos, dispatch } = useInventario()

  // Borrador del formulario (estado local)
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [stock, setStock] = useState('')
  const [mensaje, setMensaje] = useState(null)

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (!nombre.trim() || !marca.trim() || !categoria || stock === '') {
      setMensaje({ ok: false, texto: 'Completa todos los campos.' })
      return
    }

    const cantidad = Number(stock)
    if (!Number.isInteger(cantidad) || cantidad < 0) {
      setMensaje({ ok: false, texto: 'El stock debe ser un número entero, 0 o mayor.' })
      return
    }

    dispatch({
      type: 'AGREGAR_ARTICULO',
      payload: {
        nombre: nombre.trim(),
        marca: marca.trim(),
        categoria,
        stock: cantidad,
      },
    })

    setMensaje({ ok: true, texto: `Artículo "${nombre.trim()}" agregado.` })
    setNombre('')
    setMarca('')
    setCategoria('')
    setStock('')
  }

  return (
    <section className="mx-auto max-w-lg">
      <h2 className="mb-1 text-2xl font-bold text-green-900">Agregar artículo</h2>
      <p className="mb-4 text-gray-600">
        Ingresa un nuevo producto al inventario del supermercado.
      </p>

      <form onSubmit={manejarEnvio} className="space-y-4 rounded-lg bg-white p-5 shadow">
        <div>
          <label htmlFor="nombre" className="mb-1 block font-semibold">
            Nombre del producto
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Fideos espirales 400 g"
            className="w-full rounded border border-gray-300 p-2 focus:border-green-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="marca" className="mb-1 block font-semibold">
            Marca
          </label>
          <input
            id="marca"
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Ej: Carozzi"
            className="w-full rounded border border-gray-300 p-2 focus:border-green-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="categoria" className="mb-1 block font-semibold">
            Categoría
          </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full rounded border border-gray-300 bg-white p-2 focus:border-green-700 focus:outline-none"
          >
            <option value="">Selecciona una categoría</option>
            {CATEGORIAS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="stock" className="mb-1 block font-semibold">
            Stock inicial (unidades)
          </label>
          <input
            id="stock"
            type="number"
            min="0"
            step="1"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Ej: 50"
            className="w-full rounded border border-gray-300 p-2 focus:border-green-700 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-green-800 py-2 font-bold text-white hover:bg-green-700"
        >
          Agregar al inventario
        </button>

        {mensaje && (
          <p className={mensaje.ok ? 'text-green-700' : 'text-red-600'}>
            {mensaje.texto}
          </p>
        )}
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Artículos en el inventario: <strong>{articulos.length}</strong>
      </p>
    </section>
  )
}

export default AgregarArticulo