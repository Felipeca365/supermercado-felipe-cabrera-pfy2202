import { createContext, useContext, useReducer } from 'react'

// Lista inicial: los mismos productos de la semana 1, ahora con marca y tipo
const articulosIniciales = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', marca: 'Tucapel', tipo: 'Abarrotes' },
  { id: 2, nombre: 'Aceite vegetal (1 L)', marca: 'Chef', tipo: 'Abarrotes' },
  { id: 3, nombre: 'Leche entera (1 L)', marca: 'Colun', tipo: 'Lácteos' },
  { id: 4, nombre: 'Yogurt natural (150 g)', marca: 'Soprole', tipo: 'Lácteos' },
  { id: 5, nombre: 'Detergente líquido (3 L)', marca: 'Drive', tipo: 'Limpieza' },
  { id: 6, nombre: 'Pan de molde', marca: 'Ideal', tipo: 'Panadería' },
]

// El reducer decide cómo cambia la lista según la accion recibida
function inventarioReducer(articulos, accion) {
    switch (accion.type) {
        case 'AGREGAR_ARTICULO':
            return [...articulos, { id: Date.now(), ...accion.payload }]
        default:
            return articulos    
    }
}

//El "canal" que reparte la lista a todas las paginas
const InventarioContext = createContext(null)

// Componente que envuelve la app y entrega el estado global
export function InventarioProvider({ children }) {
    const [articulos, dispatch] = useReducer(inventarioReducer, articulosIniciales)

    return (
        <InventarioContext.Provider value={{ articulos, dispatch}}>
            {children}
        </InventarioContext.Provider>
    )

}

// Hook para que cualquier página lea y modifique el estado
export function useInventario() {
    return useContext(InventarioContext)
}
