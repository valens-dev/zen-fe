import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

import i18n from 'i18n';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image/lazy-image';

// import './styles.css';
import { ColumnHeader } from './column-header';

import { type IProduct } from './types';

const columnHelper = createColumnHelper<IProduct>();

export function getMaterialColumns(): ColumnDef<IProduct, string>[] {
  return [
    columnHelper.accessor('name', {
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
      header: () => {
        return (
          <ColumnHeader
            title={i18n.t('material.materialTable.height')}
            type="range"
          />
        );
      },
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('material', {
      header: () => {
        return (
          <ColumnHeader
            title={i18n.t('material.materialTable.material')}
            type="material"
          />
        );
      },
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('weight', {
      header: i18n.t('material.materialTable.weight'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('stock', {
      header: i18n.t('material.materialTable.stock'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('netPrice', {
      header: i18n.t('material.materialTable.price'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
  ];
}
