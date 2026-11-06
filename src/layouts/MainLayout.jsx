import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Encabezado from '../components/Encabezado.jsx';
import TopNav from '../components/TopNav.jsx';
import BottomNav from '../components/BottomNav.jsx';
import Cargando from '../components/Cargando.jsx';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Encabezado />
      <TopNav />
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 pb-24">
        <Suspense fallback={<Cargando />}>
          <Outlet />
        </Suspense>
      </main>
      <BottomNav />
    </div>
  );
}

export default MainLayout;