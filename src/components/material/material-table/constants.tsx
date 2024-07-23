import i18n from 'i18n';
import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image/lazy-image';

import { type IProduct, type MaterialType } from '@/types/material';

export function createData(
  imageUrl: string,
  height: string,
  material: string,
  type: MaterialType,
  name: string,
  price: string,
  stock: string,
  weight: string,
): IProduct {
  return {
    imageUrl,
    height,
    material,
    type,
    name,
    price,
    stock,
    weight,
  };
}

const columnHelper = createColumnHelper<IProduct>();

export function getMaterialColumns(): ColumnDef<IProduct, string>[] {
  return [
    columnHelper.accessor('name', {
      header: i18n.t('material.materialTable.name'),
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
      header: i18n.t('material.materialTable.height'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
    columnHelper.accessor('material', {
      header: i18n.t('material.materialTable.material'),
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
    columnHelper.accessor('price', {
      header: i18n.t('material.materialTable.price'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
  ];
}
