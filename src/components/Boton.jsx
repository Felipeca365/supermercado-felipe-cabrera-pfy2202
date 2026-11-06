const variantes = {
  primario: 'bg-green-800 text-white hover:bg-green-700',
  secundario: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  peligro: 'bg-red-700 text-white hover:bg-red-600',
}

const tamanos = {
  normal: 'px-4 py-2',
  chico: 'px-3 py-1',
}

// Botón reutilizable: cambia color y tamaño según las props
function Boton({ variante = 'primario', tamano = 'normal', className = '', children, ...props }) {
  return (
    <button
      className={`cursor-pointer rounded font-semibold disabled:cursor-not-allowed disabled:opacity-50 ${variantes[variante]} ${tamanos[tamano]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Boton