const tiendas = [
  { nombre: 'Sucursal Centro', direccion: 'Av. Manso de Velasco 123, San Fernando', horario: 'Lun a Dom: 08:30 - 21:30' },
  { nombre: 'Sucursal Norte', direccion: 'Calle Chacabuco 456, San Fernando', horario: 'Lun a Sáb: 09:00 - 21:00' },
  { nombre: 'Sucursal Rural', direccion: 'Camino a Nancagua km 3', horario: 'Lun a Sáb: 09:00 - 20:00' },
]

function Tiendas() {
  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold text-green-900">Nuestras tiendas</h2>
      <p className="mb-4 text-gray-600">Visítanos en cualquiera de nuestras sucursales.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiendas.map((t) => (
          <article key={t.nombre} className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-lg font-bold text-green-900">{t.nombre}</h3>
            <p className="text-gray-700">📍 {t.direccion}</p>
            <p className="text-gray-700">🕒 {t.horario}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Tiendas