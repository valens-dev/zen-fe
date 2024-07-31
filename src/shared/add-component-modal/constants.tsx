import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

import i18n from 'i18n';

import { Box, Checkbox, Typography } from '@mui/material';

import { type IProduct } from '@/components/material/material-table/types';

import { LazyImage } from '../lazy-image';

const columnHelper = createColumnHelper<IProduct>();

export function getMaterialColumns(
  selectedComponents: IProduct[],
  setSelectedComponents: React.Dispatch<React.SetStateAction<IProduct[]>>,
): ColumnDef<IProduct, string>[] {
  function isSelected(row: IProduct): boolean {
    return selectedComponents.some((component) => {
      return component.id === row.id;
    });
  }

  function handleCheckboxChange(row: IProduct): void {
    setSelectedComponents((prev) => {
      return isSelected(row)
        ? prev.filter((component) => {
            return component.id !== row.id;
          })
        : [...prev, row];
    });
  }

  return [
    columnHelper.display({
      id: 'select',
      cell: ({ row }) => {
        return (
          <Checkbox
            checked={isSelected(row.original)}
            onChange={() => {
              return handleCheckboxChange(row.original);
            }}
          />
        );
      },
    }),
    columnHelper.accessor('name', {
      header: i18n.t('material.materialTable.name'),
      cell: ({ row }) => {
        const { name } = row.original;

        return (
          <Box display="flex" alignItems="center">
            <LazyImage src="imageUrl" alt={name} height={24} width={34} />
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
