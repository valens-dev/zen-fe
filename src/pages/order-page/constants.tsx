import { OrderTable } from '@/components/order/order-table';
import { columns, orderData } from '@/components/order/order-table/constants';

export function getOrderTabs(
  t: (key: string) => string,
): { label: string; component: React.ElementType }[] {
  return [
    {
      label: t('order.orders'),
      component: () => {
        return (
          <OrderTable
            title={t('order.orders')}
            buttonText={t('order.addOrder')}
            data={orderData}
            columns={columns}
          />
        );
      },
    },
    {
      label: t('order.productionOrder'),
      component: () => {
        return (
          <OrderTable
            title={t('order.productionOrder')}
            buttonText={t('order.addProductionOrder')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
    {
      label: t('order.logisticsOrders'),
      component: () => {
        return (
          <OrderTable
            title={t('order.logisticsOrders')}
            buttonText={t('order.addLogisticsOrder')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
    {
      label: t('order.shipment'),
      component: () => {
        return (
          <OrderTable
            title={t('order.shipment')}
            buttonText={t('order.addShipment')}
            columns={columns}
            data={[]}
          />
        );
      },
    },
  ];
}
