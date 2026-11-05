const preguntas = [
  { p: '¿Cómo se actualiza el stock?', r: 'Desde la página de inicio puedes sumar o restar unidades con los botones + y −.' },
  { p: '¿Qué significa "Stock bajo"?', r: 'El producto tiene menos unidades que su stock mínimo y conviene reponerlo.' },
  { p: '¿Qué pasa si un producto llega a 0?', r: 'Se marca como "Sin stock" y debe reponerse con prioridad.' },
  { p: '¿Cómo contacto a la administración?', r: 'Puedes visitar cualquiera de nuestras sucursales en el horario indicado.' },
]

function Faq() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-green-900">Preguntas frecuentes</h2>

      {preguntas.map((item) => (
        <details key={item.p} className="mb-2 rounded-lg bg-white px-4 py-3 shadow">
          <summary className="cursor-pointer font-semibold">{item.p}</summary>
          <p className="mt-2 text-gray-700">{item.r}</p>
        </details>
      ))}
    </section>
  )
}

export default Faq