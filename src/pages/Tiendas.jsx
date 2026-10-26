const tiendas = [
  { nombre: 'Sucursal Centro', direccion: 'Av. Manso de Velasco 123, San Fernando', horario: 'Lun a Dom: 08:30 - 21:30' },
  { nombre: 'Sucursal Norte', direccion: 'Calle Chacabuco 456, San Fernando', horario: 'Lun a Sáb: 09:00 - 21:00' },
  { nombre: 'Sucursal Rural', direccion: 'Camino a Nancagua km 3', horario: 'Lun a Sáb: 09:00 - 20:00' },
]

function Tiendas() {
  return (
    <section>
      <h2>Nuestras tiendas</h2>
      <p>Visítanos en cualquiera de nuestras sucursales.</p>
      <div className="tarjetas">
        {tiendas.map((t) => (
          <article className="tarjeta" key={t.nombre}>
            <h3>{t.nombre}</h3>
            <p>📍 {t.direccion}</p>
            <p>🕒 {t.horario}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Tiendas
