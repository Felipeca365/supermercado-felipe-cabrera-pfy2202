import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';

const Home = lazy(() => import('../pages/Home.jsx'));
const Tiendas = lazy(() => import('../pages/Tiendas.jsx'));
const Faq = lazy(() => import('../pages/Faq.jsx'));
const AgregarArticulo = lazy(() => import('../pages/AgregarArticulo.jsx'));
const ListaArticulos = lazy(() => import('../pages/ListaArticulos.jsx'));
const DetalleArticulo = lazy(() => import('../pages/DetalleArticulo.jsx'));
const Carrito = lazy(() => import('../pages/Carrito.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tiendas" element={<Tiendas />} />
        <Route path="preguntas-frecuentes" element={<Faq />} />
        <Route path="agregar-articulo" element={<AgregarArticulo />} />
        <Route path="articulos">
          <Route index element={<ListaArticulos />} />
          <Route path=":id" element={<DetalleArticulo />} />
        </Route>
        <Route path="carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;