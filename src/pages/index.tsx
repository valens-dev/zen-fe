import { lazy, Suspense } from 'react';
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import { SidebarLayout } from '../layouts/sidebar-layout';

const HomePage = lazy(() => import('@/pages/home-page/home-page'));
const MaterialPage = lazy(() => import('@/pages/material-page/material-page'));
const StationPage = lazy(() => import('@/pages/station-page/station-page'));

function PageLoader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="material" element={<MaterialPage />} />
            <Route path="station" element={<StationPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
