import { useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'

const tiposProducto = [
  'Abarrotes',
  'Lácteos',
  'Limpieza',
  'Panadería',
  'Bebidas',
  'Carnes',
  'Frutas y verduras',
]

function AgregarArticulo() {
  const { articulos, dispatch } = useInventario()

  // Borrador del formulario (estado local)
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')
  const [mensaje, setMensaje] = useState(null)

  const manejarEnvio = (evento) => {
    evento.preventDefault() // evita que el formulario recargue la página

    if (!nombre.trim() || !marca.trim() || !tipo) {
      setMensaje({ ok: false, texto: 'Completa todos los campos.' })
      return
    }

    // Se envía la acción al estado global
    dispatch({
      type: 'AGREGAR_ARTICULO',
      payload: { nombre: nombre.trim(), marca: marca.trim(), tipo },
    })

    setMensaje({ ok: true, texto: `Artículo "${nombre.trim()}" agregado.` })
    setNombre('')
    setMarca('')
    setTipo('')
  }

  return (
    <section className="mx-auto max-w-lg">
      <h2 className="mb-1 text-2xl font-bold text-green-900">Agregar artículo</h2>
      <p className="mb-4 text-gray-600">
        Ingresa un nuevo producto al inventario del supermercado.
      </p>

      <form
        onSubmit={manejarEnvio}
        className="space-y-4 rounded-lg bg-white p-5 shadow"
      >
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
          <label htmlFor="tipo" className="mb-1 block font-semibold">
            Tipo de producto
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full rounded border border-gray-300 bg-white p-2 focus:border-green-700 focus:outline-none"
          >
            <option value="">Selecciona un tipo</option>
            {tiposProducto.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
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