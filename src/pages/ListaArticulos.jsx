import { useInventario } from '../context/InventarioContext.jsx'

function ListaArticulos() {
  const { articulos } = useInventario()

  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Lista de artículos</h2>
      <p className="mb-4 text-gray-600">
        Total de artículos en el inventario: <strong>{articulos.length}</strong>
      </p>

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-3">N°</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Marca</th>
              <th className="p-3">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map((articulo, indice) => (
              <tr key={articulo.id} className="border-t border-gray-200">
                <td className="p-3">{indice + 1}</td>
                <td className="p-3">{articulo.nombre}</td>
                <td className="p-3">{articulo.marca}</td>
                <td className="p-3">{articulo.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ListaArticulos