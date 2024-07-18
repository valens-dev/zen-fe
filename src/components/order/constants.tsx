import { createColumnHelper } from '@tanstack/react-table';

import { Box } from '@mui/material';

import { statusColors, type IStatusColors } from '@/styles/order-status-colors';

interface IOrder {
  orderNumber: string;
  orderDate: string;
  customer: string;
  amount: string;
  deliveryDate: string;
  status: string;
}

function createOrderData(
  orderNumber: string,
  orderDate: string,
  customer: string,
  amount: string,
  deliveryDate: string,
  status: string,
): IOrder {
  return {
    orderNumber,
    orderDate,
    customer,
    amount,
    deliveryDate,
    status,
  };
}

export const orderData: IOrder[] = [
  createOrderData(
    'ORD001',
    '2023-01-15',
    'Customer A',
    '$150.00',
    '2023-01-20',
    'Sent',
  ),
  createOrderData(
    'ORD002',
    '2023-01-16',
    'Customer B',
    '$200.00',
    '2023-01-22',
    'Delivered',
  ),
  createOrderData(
    'ORD003',
    '2023-01-17',
    'Customer C',
    '$250.00',
    '2023-01-25',
    'In Progress',
  ),
  createOrderData(
    'ORD004',
    '2023-01-18',
    'Customer D',
    '$300.00',
    '2023-01-26',
    'Open',
  ),
  createOrderData(
    'ORD005',
    '2023-01-19',
    'Customer E',
    '$350.00',
    '2023-01-28',
    'Canceled',
  ),
  createOrderData(
    'ORD006',
    '2023-01-20',
    'Customer F',
    '$400.00',
    '2023-01-30',
    'Ready to ship',
  ),
  createOrderData(
    'ORD007',
    '2023-01-21',
    'Customer G',
    '$450.00',
    '2023-01-31',
    'Sent',
  ),
  createOrderData(
    'ORD008',
    '2023-01-22',
    'Customer H',
    '$500.00',
    '2023-02-02',
    'Ordered',
  ),
  createOrderData(
    'ORD009',
    '2023-01-23',
    'Customer I',
    '$550.00',
    '2023-02-03',
    'Ready to use',
  ),
  createOrderData(
    'ORD010',
    '2023-01-24',
    'Customer J',
    '$600.00',
    '2023-02-05',
    'Delivered',
  ),
];

const columnHelper = createColumnHelper<IOrder>();

export const columns = [
  columnHelper.accessor('orderNumber', {
    header: 'Order #',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('orderDate', {
    header: 'Order Date',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('deliveryDate', {
    header: 'Delivery Date',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: ({ getValue }) => {
      const status = getValue();
      if (!statusColors[status as keyof IStatusColors]) {
        return status;
      }
      const { background, text } = statusColors[status as keyof IStatusColors];
      return (
        <Box
          sx={{
            backgroundColor: background,
            color: text,
            padding: '4px 8px',
            borderRadius: '4px',
            textAlign: 'center',
            display: 'inline-block',
            maxWidth: '100%',
          }}
        >
          {status}
        </Box>
      );
    },
  }),
];
