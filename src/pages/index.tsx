import { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';

import { SidebarLayout } from '../layouts/sidebar-layout';

const HomePage = lazy(() => {
  return import('@/pages/home-page/home-page').then((module) => {
    return { default: module.HomePage };
  });
});
const MaterialPage = lazy(() => {
  return import('@/pages/material-page/material-page').then((module) => {
    return { default: module.MaterialPage };
  });
});
const StationPage = lazy(async () => {
  const module = await import('@/pages/station-page/station-page');
  return { default: module.StationPage };
});

function PageLoader(): React.ReactNode {
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

export function App(): React.ReactNode {
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
