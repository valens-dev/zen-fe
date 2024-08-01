import type React from 'react';

import i18n from 'i18n';

import { Box } from '@mui/material';

import { OrderTable } from '@/components/order/order-table';
import { columns, orderData } from '@/components/order/order-table/constants';

import IconForward from '@/assets/icon/forward.svg?react';

export function getOrderTabs(): {
  id: number;
  label: React.ReactNode;
  component: React.ElementType;
}[] {
  return [
    {
      id: 1,
      label: (
        <Box display="flex" flexDirection="row" alignItems="center">
          {i18n.t('order.orders')}
          <IconForward />
        </Box>
      ),
      component: () => {
        return (
          <OrderTable
            title={i18n.t('order.orders')}
            buttonText={i18n.t('order.addOrder')}
            data={orderData}
            columns={columns}
          />
        );
      },
    },
    {
      id: 2,
      label: i18n.t('order.productionOrder'),
      component: () => {
        return (
          <OrderTable
            title={i18n.t('order.productionOrder')}
            buttonText={i18n.t('order.addProductionOrder')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
    {
      id: 3,
      label: i18n.t('order.logisticsOrder'),
      component: () => {
        return (
          <OrderTable
            title={i18n.t('order.logisticsOrder')}
            buttonText={i18n.t('order.addLogisticsOrder')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
    {
      id: 4,
      label: (
        <Box display="flex" flexDirection="row">
          <IconForward />
          {i18n.t('order.shipment')}
        </Box>
      ),
      component: () => {
        return (
          <OrderTable
            title={i18n.t('order.shipment')}
            buttonText={i18n.t('order.addShipment')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
  ];
}
