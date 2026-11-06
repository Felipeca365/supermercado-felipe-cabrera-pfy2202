// Etiqueta de color según el nivel de stock (reutilizable en lista, detalle e inicio)
function BadgeStock({ stock, minimo }) {
  let texto = 'Normal'
  let color = 'bg-green-700'

  if (stock === 0) {
    texto = 'Sin stock'
    color = 'bg-red-700'
  } else if (stock < minimo) {
    texto = 'Stock bajo'
    color = 'bg-orange-600'
  }

  return (
    <span className={`rounded-full px-2 py-0.5 text-sm text-white ${color}`}>
      {texto}
    </span>
  )
}

export default BadgeStock