import { createColumnHelper } from '@tanstack/react-table';

import { Box, Typography, LinearProgress } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image';

interface ICustomer {
  imageUrl: string;
  name: string;
  adherenceToDeliveryDates: string;
  orders: string;
  netTotal: string;
}

export function createCustomerData(
  imageUrl: string,
  name: string,
  adherenceToDeliveryDates: string,
  orders: string,
  netTotal: string,
): ICustomer {
  return {
    imageUrl,
    name,
    adherenceToDeliveryDates,
    orders,
    netTotal,
  };
}

export const customerData: ICustomer[] = [
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 1',
    '60',
    '23',
    '$1234.56',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 2',
    '80',
    '19',
    '$2345.67',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 3',
    '90',
    '45',
    '$3456.78',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 4',
    '100',
    '32',
    '$4567.89',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 5',
    '50',
    '27',
    '$5678.90',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 6',
    '95',
    '22',
    '$6789.01',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 7',
    '60',
    '15',
    '$7890.12',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 5',
    '50',
    '27',
    '$5678.90',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 6',
    '95',
    '22',
    '$6789.01',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 7',
    '60',
    '15',
    '$7890.12',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 5',
    '50',
    '27',
    '$5678.90',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 6',
    '95',
    '22',
    '$6789.01',
  ),
  createCustomerData(
    'https://via.placeholder.com/30',
    'Customer 7',
    '60',
    '15',
    '$7890.12',
  ),
];

const columnHelper = createColumnHelper<ICustomer>();

export const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: ({ row }) => {
      const { imageUrl, name } = row.original;

      return (
        <Box display="flex" alignItems="center" width="100%">
          <LazyImage src={imageUrl} alt={name} height={24} width={34} />
          <Typography sx={{ marginLeft: '8px' }}>{name}</Typography>
        </Box>
      );
    },
  }),
  columnHelper.accessor('adherenceToDeliveryDates', {
    header: 'Adherence to Delivery Dates',
    cell: ({ row }) => {
      const { adherenceToDeliveryDates } = row.original;

      return (
        <Box display="flex" alignItems="center">
          <LinearProgress
            variant="determinate"
            value={Number(adherenceToDeliveryDates)}
            sx={{
              width: '70%',
              borderRadius: '20px',
              marginRight: '8px',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#9A67E6',
              },
              backgroundColor: '#FFF',
            }}
          />
          <Typography>{`${adherenceToDeliveryDates}%`}</Typography>
        </Box>
      );
    },
  }),
  columnHelper.accessor('orders', {
    header: 'Orders',
    cell: ({ getValue }) => {
      return (
        <Box width="100%">
          <Typography>{getValue()}</Typography>
        </Box>
      );
    },
  }),
  columnHelper.accessor('netTotal', {
    header: 'Net Total',
    cell: ({ getValue }) => {
      return (
        <Box width="100%">
          <Typography>{getValue()}</Typography>
        </Box>
      );
    },
  }),
];
