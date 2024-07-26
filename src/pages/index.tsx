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

const AddProductionStationPage = lazy(() => {
  return import(
    '@/pages/add-production-station-page/add-production-station-page'
  );
});

const OrderPage = lazy(() => {
  return import('@/pages/order-page/order-page');
});

const AddOrderPage = lazy(() => {
  return import('@/pages/add-order-page/add-order-page');
});

const CustomersPage = lazy(() => {
  return import('@/pages/customer-page/customer-page');
});

const AddCustomersPage = lazy(() => {
  return import('@/pages/add-customer-page/add-customer-page');
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
            <Route
              path="station/add-production-station"
              element={<AddProductionStationPage />}
            />
            <Route path="order" element={<OrderPage />} />
            <Route path="order/add-order" element={<AddOrderPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route
              path="customers/add-customer"
              element={<AddCustomersPage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
