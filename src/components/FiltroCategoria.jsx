import { CATEGORIAS } from '../data/categorias.js'

// Selector de categoría. No guarda estado propio: lo controla quien lo usa
function FiltroCategoria({ valor, onChange }) {
  return (
    <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
      <label htmlFor="filtro-categoria" className="font-semibold">
        Filtrar por categoría:
      </label>
      <select
        id="filtro-categoria"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border border-gray-300 bg-white p-2 focus:border-green-700 focus:outline-none"
      >
        <option value="Todas">Todas</option>
        {CATEGORIAS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategoria