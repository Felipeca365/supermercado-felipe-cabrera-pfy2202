import { createContext, useContext, useReducer } from 'react'
import { articulosIniciales } from '../data/articulosIniciales.js'

// Un solo estado con las dos partes que dependen entre sí
const estadoInicial = {
  articulos: articulosIniciales, // inventario completo (fuente de verdad)
  carrito: [],                   // solo { id, cantidad }
}

// Suma o resta stock a UN artículo, sin tocar los demás ni dejarlo bajo 0
function cambiarStock(articulos, id, delta) {
  return articulos.map((a) =>
    a.id === id ? { ...a, stock: Math.max(0, a.stock + delta) } : a
  )
}

function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case 'AGREGAR_ARTICULO': {
      const nuevoId = Math.max(0, ...estado.articulos.map((a) => a.id)) + 1
      const nuevo = { minimo: 10, ...accion.payload, id: nuevoId }
      return { ...estado, articulos: [...estado.articulos, nuevo] }
    }

    case 'AJUSTAR_STOCK':
      return {
        ...estado,
        articulos: cambiarStock(estado.articulos, accion.id, accion.delta),
      }

    case 'AGREGAR_AL_CARRITO': {
      const articulo = estado.articulos.find((a) => a.id === accion.id)
      if (!articulo || articulo.stock < 1) return estado // sin stock: no hace nada

      const yaEnCarrito = estado.carrito.some((i) => i.id === accion.id)
      const carrito = yaEnCarrito
        ? estado.carrito.map((i) =>
            i.id === accion.id ? { ...i, cantidad: i.cantidad + 1 } : i
          )
        : [...estado.carrito, { id: accion.id, cantidad: 1 }]

      return {
        ...estado,
        articulos: cambiarStock(estado.articulos, accion.id, -1),
        carrito,
      }
    }

    case 'DISMINUIR_CANTIDAD': {
      const item = estado.carrito.find((i) => i.id === accion.id)
      if (!item) return estado

      const carrito =
        item.cantidad > 1
          ? estado.carrito.map((i) =>
              i.id === accion.id ? { ...i, cantidad: i.cantidad - 1 } : i
            )
          : estado.carrito.filter((i) => i.id !== accion.id)

      return {
        ...estado,
        articulos: cambiarStock(estado.articulos, accion.id, 1),
        carrito,
      }
    }

    case 'QUITAR_DEL_CARRITO': {
      const item = estado.carrito.find((i) => i.id === accion.id)
      if (!item) return estado

      return {
        ...estado,
        articulos: cambiarStock(estado.articulos, accion.id, item.cantidad),
        carrito: estado.carrito.filter((i) => i.id !== accion.id),
      }
    }

    default:
      return estado
  }
}

const InventarioContext = createContext(null)

export function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, estadoInicial)

  return (
    <InventarioContext.Provider value={{ ...estado, dispatch }}>
      {children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  return useContext(InventarioContext)
}