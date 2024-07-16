import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import { RootLayout } from '../layouts/root-layout';

const HomePage = lazy(() => {
  return import('@/pages/home-page/home-page');
});

const MaterialPage = lazy(() => {
  return import('@/pages/material-page/material-page');
});

const AddMaterialPage = lazy(() => {
  return import('@/pages/add-material-page/add-material-page');
});

const StationPage = lazy(() => {
  return import('@/pages/station-page/station-page');
});

const OrderPage = lazy(() => {
  return import('@/pages/order-page/order-page');
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
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="material" element={<MaterialPage />} />
            <Route path="material/add-material" element={<AddMaterialPage />} />
            <Route path="station" element={<StationPage />} />
            <Route path="order" element={<OrderPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
