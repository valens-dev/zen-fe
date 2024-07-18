import { OrderTable } from '@/components/order/order-table';
import { columns, orderData } from '@/components/order/constants';

export const ORDER_TABS: { label: string; component: React.ElementType }[] = [
  {
    label: 'Orders',
    component: () => {
      return (
        <OrderTable
          title="Orders"
          buttonText="Add Order"
          data={orderData}
          columns={columns}
        />
      );
    },
  },
  {
    label: 'Production orders',
    component: () => {
      return (
        <OrderTable
          title="Production orders"
          buttonText="Add Production Order"
          columns={columns}
          data={[]}
        />
      );
    },
  },
  {
    label: 'Logistics Orders',
    component: () => {
      return (
        <OrderTable
          title="Logistics Orders"
          buttonText="Add Logistics Order"
          columns={columns}
          data={[]}
        />
      );
    },
  },
  {
    label: 'Shipment',
    component: () => {
      return (
        <OrderTable
          title="Shipment"
          buttonText="Add Shipment"
          columns={columns}
          data={[]}
        />
      );
    },
  },
];
