import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

import i18n from 'i18n';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image/lazy-image';

import { type IProduct } from './types';

export const sortByOptions = [
  {
    title: 'Name',
    values: [
      { label: 'A - Z', value: 'name-asc' },
      { label: 'Z - A', value: 'name-desc' },
    ],
  },
  {
    title: 'Weight',
    values: [
      { label: 'Lowest first', value: 'weight-asc' },
      { label: 'Highest first', value: 'weight-desc' },
    ],
  },
  {
    title: 'Neto Price',
    values: [
      { label: 'Lowest first', value: 'price-asc' },
      { label: 'Highest first', value: 'price-desc' },
    ],
  },
  {
    title: 'Height',
    values: [
      { label: 'Lowest first', value: 'height-asc' },
      { label: 'Highest first', value: 'height-desc' },
    ],
  },
  {
    title: 'Material',
    values: [
      { label: 'A - Z', value: 'material-asc' },
      { label: 'Z - A', value: 'material-desc' },
    ],
  },
];

const columnHelper = createColumnHelper<IProduct>();

export function getMaterialColumns(): ColumnDef<IProduct, string>[] {
  return [
    columnHelper.accessor('name', {
      id: 'name',
      header: i18n.t('material.materialTable.name'),
      cell: ({ row }) => {
        const { name } = row.original;

        return (
          <Box display="flex" alignItems="center" textTransform="capitalize">
            <LazyImage src="imageUrl" alt={name} height={24} width={34} />
            <Typography sx={{ marginLeft: '8px' }}>{name}</Typography>
          </Box>
        );
      },
    }),
    columnHelper.accessor('height', {
      id: 'height',
      header: i18n.t('material.materialTable.height'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('material', {
      id: 'material',
      header: i18n.t('material.materialTable.material'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('weight', {
      id: 'weight',
      header: i18n.t('material.materialTable.weight'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('stock', {
      id: 'stock',
      header: i18n.t('material.materialTable.stock'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('price', {
      id: 'price',
      header: i18n.t('material.materialTable.price'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
  ];
}
