import { useNavigate } from 'react-router-dom';

import { CustomTable } from '@/components/custom-table/custom-table';

import { columns, orderData } from '@/pages/order-page/constants';

import { OrderType } from '@/types/order';

interface ITab {
  label: string;
  component: React.ComponentType;
}

export function useOrderTabs(): ITab[] {
  const navigate = useNavigate();

  function handleOpenAddPage(orderType: OrderType): void {
    navigate('/order/add-order', { state: { orderType } });
  }

  return [
    {
      label: 'Orders',
      component: () => {
        return (
          <CustomTable
            title="Orders"
            buttonText="Add Order"
            columns={columns}
            data={orderData}
            onClick={() => {
              return handleOpenAddPage(OrderType.Orders);
            }}
          />
        );
      },
    },
    {
      label: 'Production orders',
      component: () => {
        return (
          <CustomTable
            title="Production orders"
            buttonText="Add Production Order"
            columns={columns}
            data={[]}
            onClick={() => {
              return handleOpenAddPage(OrderType.ProductionOrders);
            }}
          />
        );
      },
    },
    {
      label: 'Logistics Orders',
      component: () => {
        return (
          <CustomTable
            title="Logistics Orders"
            buttonText="Add Logistics Order"
            columns={columns}
            data={[]}
            onClick={() => {
              return handleOpenAddPage(OrderType.LogisticsOrders);
            }}
          />
        );
      },
    },
    {
      label: 'Shipment',
      component: () => {
        return (
          <CustomTable
            title="Shipment"
            buttonText="Add Shipment"
            columns={columns}
            data={[]}
            onClick={() => {
              return handleOpenAddPage(OrderType.Shipment);
            }}
          />
        );
      },
    },
  ];
}
