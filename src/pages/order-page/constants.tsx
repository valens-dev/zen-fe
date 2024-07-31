import i18n from 'i18n';

import { OrderTable } from '@/components/order/order-table';
import { columns, orderData } from '@/components/order/order-table/constants';

export function getOrderTabs(): {
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      label: `${i18n.t('order.orders')} -->`,
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
      label: i18n.t('order.productionOrder'),
      component: () => {
        return (
          <OrderTable
            title={i18n.t('order.productionOrder')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
    {
      label: i18n.t('order.logisticsOrder'),
      component: () => {
        return (
          <OrderTable
            title={i18n.t('order.logisticsOrder')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
    {
      label: `--> ${i18n.t('order.shipment')}`,
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
