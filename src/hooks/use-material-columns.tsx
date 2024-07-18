import { useTranslation } from 'react-i18next';

import {
  createColumnHelper,
  type AccessorKeyColumnDef,
} from '@tanstack/react-table';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image/lazy-image';

import type { IProduct } from '@/components/material/types';

export function useMaterialColumns(): AccessorKeyColumnDef<IProduct, string>[] {
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<IProduct>();

  const columns: AccessorKeyColumnDef<IProduct, string>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: ({ row }) => {
        const { imageUrl, name } = row.original;

        return (
          <Box display="flex" alignItems="center">
            <LazyImage src={imageUrl} alt={name} height={24} width={34} />
            <Typography sx={{ marginLeft: '8px' }}>{name}</Typography>
          </Box>
        );
      },
    }),
    columnHelper.accessor('height', {
      header: t('material.materialTable.height'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('material', {
      header: t('material.materialTable.material'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('weight', {
      header: t('material.materialTable.weight'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('stock', {
      header: t('material.materialTable.stock'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('price', {
      header: t('material.materialTable.price'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
  ];

  return columns;
}
