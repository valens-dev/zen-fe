import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

import i18n from 'i18n';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image';

import { type IEmployee, type IStatusColors } from './types';

const statusColors: IStatusColors = {
  active: { background: '#ECFDF3', text: '#12B76A' },
  inactive: { background: '#F8FAFC', text: '#475569' },
};

export function createEmployeeData(
  id: number,
  imageUrl: string,
  firstName: string,
  lastName: string,
  group: string,
  status: string,
): IEmployee {
  return {
    id,
    imageUrl,
    firstName,
    lastName,
    group,
    status,
  };
}

export const employeeData: IEmployee[] = [
  createEmployeeData(
    1,
    'https://via.placeholder.com/30',
    'Regina',
    'Lane',
    'Administration',
    'active',
  ),
  createEmployeeData(
    2,
    'https://via.placeholder.com/30',
    'Aubrey',
    'Warren',
    'Operation',
    'inactive',
  ),
];

const columnHelper = createColumnHelper<IEmployee>();

export function getEmployeeColumns(): ColumnDef<IEmployee, string>[] {
  return [
    columnHelper.accessor('firstName', {
      header: i18n.t('team.employeeTable.firstName'),
      cell: ({ row }) => {
        const { imageUrl, firstName } = row.original;

        return (
          <Box display="flex" alignItems="center">
            <LazyImage src={imageUrl} alt={firstName} height={24} width={34} />
            <Typography sx={{ marginLeft: '8px' }}>{firstName}</Typography>
          </Box>
        );
      },
    }),
    columnHelper.accessor('lastName', {
      header: i18n.t('team.employeeTable.lastName'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('group', {
      header: i18n.t('team.employeeTable.group'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('status', {
      header: i18n.t('team.employeeTable.status'),
      cell: ({ getValue }) => {
        const status = getValue();
        if (!statusColors[status as keyof IStatusColors]) {
          return status;
        }
        const { background, text } =
          statusColors[status as keyof IStatusColors];
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
}
