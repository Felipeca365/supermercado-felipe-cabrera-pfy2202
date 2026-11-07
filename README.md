# Supermercado Don Felipe — Sistema de gestión de inventario

Aplicación web de inventario para un supermercado, desarrollada en React como actividad sumativa de la asignatura **Desarrollo Frontend II (PFY2202)**, Duoc UC.

- **Autor:** Felipe Cabrera
- **Repositorio:** https://github.com/Felipeca365/supermercado-felipe-cabrera-pfy2202
- **Sitio publicado:** https://felipeca365.github.io/supermercado-felipe-cabrera-pfy2202/

## Funcionalidades

- **Agregar artículos** con validación de campos (nombre, marca, categoría y stock inicial).
- **Lista de artículos** con filtro por categoría. El filtro no modifica los datos originales: se calcula en cada render.
- **Detalle de artículo** al hacer clic en su nombre, con botón para agregarlo al carrito.
- **Carrito de compras** con aumento y disminución de cantidades, y opción de quitar artículos.
- **Inventario sincronizado:** al agregar al carrito el stock disminuye, y al quitar o disminuir vuelve a aumentar. Inicio, Lista, Detalle y Carrito muestran siempre los mismos datos.
- **Diseño responsive** con Tailwind CSS, revisado desde 375 px (celular) hasta escritorio.

## Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 + Vite | Interfaz y herramienta de desarrollo |
| React Router DOM | Navegación entre pantallas y rutas dinámicas |
| Context API + `useReducer` | Estado global único (inventario y carrito) |
| Tailwind CSS v4 | Estilos y diseño responsive |
| GitHub Pages | Publicación del sitio |

## Rutas

| Ruta | Pantalla |
|---|---|
| `/` | Inicio: inventario actual con ajuste de stock |
| `/agregar-articulo` | Formulario para agregar artículos |
| `/articulos` | Lista con filtro por categoría (`?categoria=Lácteos`) |
| `/articulos/:id` | Detalle del artículo |
| `/carrito` | Carrito de compras |
| `/tiendas` | Nuestras tiendas |
| `/preguntas-frecuentes` | Preguntas frecuentes |
| `*` | Página 404 |

> En el sitio publicado las rutas llevan `#` (por ejemplo `/#/articulos`), porque se
> usa `HashRouter` para que la navegación funcione en GitHub Pages sin errores 404
> al recargar la página.

## Estructura del proyecto

```
src/
├── components/   Piezas reutilizables: BadgeStock, Boton, FiltroCategoria,
│                 Encabezado, TopNav, BottomNav, Cargando
├── context/      InventarioContext: estado global y reducer
├── data/         Datos iniciales y lista de categorías
├── layouts/      MainLayout: marco común de todas las pantallas
├── pages/        Una pantalla por archivo
├── routes/       AppRoutes: definición de rutas con carga diferida
├── App.jsx
├── App.css
└── main.jsx
```

## Decisiones técnicas

1. **Un solo estado global.** El inventario y el carrito viven en un mismo `useReducer`, de modo que cada acción modifica ambos en una sola operación y nunca quedan desincronizados. El carrito guarda solo `{ id, cantidad }`; el resto de los datos se toma del inventario.
2. **Filtro derivado.** La categoría activa se guarda en la URL con `useSearchParams` y la lista filtrada se calcula en cada render, por lo que los datos originales no se pierden.
3. **Componentes reutilizables.** `BadgeStock`, `Boton` y `FiltroCategoria` se usan en varias pantallas.
4. **Carga diferida.** Cada página se carga con `React.lazy` y solo se descarga al entrar a su ruta. El build genera un archivo por página.
5. **Responsive.** En celular se ocultan columnas secundarias de las tablas (Categoría, Marca, N°) y se mantienen las acciones principales visibles.

## Cómo ejecutarlo

Requiere Node.js 18 o superior.

```bash
git clone https://github.com/Felipeca365/supermercado-felipe-cabrera-pfy2202.git
cd supermercado-felipe-cabrera-pfy2202
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
```

## Cumplimiento de la pauta

| Criterio | Cómo se cumple | Evidencia |
|---|---|---|
| Listado de artículos | `ListaArticulos.jsx` y `AgregarArticulo.jsx` | `01`, `14` a `17` |
| Filtro por categoría | Filtro derivado, sin perder datos originales | `02`, `18` |
| Detalle del artículo | Ruta `/articulos/:id` con botón de carrito | `03` a `06` |
| Modificación del inventario | Carrito sincronizado con el stock | `07` a `13`, `18b`, `18c`, `19` a `21` |
| Framework CSS responsive | Tailwind CSS, revisado en 375 px | `25a` a `29` |
| Modularidad y reutilización | Estructura por carpetas y carga diferida | `22a`, `22b`, `23`, `24` |
| GitHub y documentación | Este README y sitio en GitHub Pages | Enlaces al inicio |

Las capturas están en la carpeta [`evidencias_semana_3`](./evidencias_semana_3). Las de la actividad anterior están en [`evidencias`](./evidencias).