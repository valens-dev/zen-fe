// import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

// import i18n from 'i18n';

// import { Box, Typography } from '@mui/material';

// import { LazyImage } from '@/shared/lazy-image/lazy-image';

// import { type IProduct } from './types';

// export const sortByOptions = [
//   {
//     title: 'Name',
//     values: [
//       { label: 'A - Z', value: 'name-ASC' },
//       { label: 'Z - A', value: 'name-DESC' },
//     ],
//   },
//   {
//     title: 'Weight',
//     values: [
//       { label: 'Lowest first', value: 'weight-ASC' },
//       { label: 'Highest first', value: 'weight-DESC' },
//     ],
//   },
//   {
//     title: 'Neto Price',
//     values: [
//       { label: 'Lowest first', value: 'price-ASC' },
//       { label: 'Highest first', value: 'price-DESC' },
//     ],
//   },
//   {
//     title: 'Height',
//     values: [
//       { label: 'Lowest first', value: 'height-ASC' },
//       { label: 'Highest first', value: 'height-DESC' },
//     ],
//   },
//   {
//     title: 'Material',
//     values: [
//       { label: 'A - Z', value: 'material-ASC' },
//       { label: 'Z - A', value: 'material-DESC' },
//     ],
//   },
// ];

// const columnHelper = createColumnHelper<IProduct>();

// export function getMaterialColumns(): ColumnDef<IProduct, string>[] {
//   return [
//     columnHelper.accessor('name', {
//       header: i18n.t('material.materialTable.name'),
//       cell: ({ row }) => {
//         const { name } = row.original;

//         return (
//           <Box display="flex" alignItems="center" textTransform="capitalize">
//             <LazyImage src="imageUrl" alt={name} height={24} width={34} />
//             <Typography sx={{ marginLeft: '8px' }}>{name}</Typography>
//           </Box>
//         );
//       },
//     }),
//     columnHelper.accessor('height', {
//       header: i18n.t('material.materialTable.height'),
//       cell: ({ getValue }) => {
//         return getValue();
//       },
//     }),
//     columnHelper.accessor('material', {
//       header: i18n.t('material.materialTable.material'),
//       cell: ({ getValue }) => {
//         return getValue();
//       },
//     }),
//     columnHelper.accessor('weight', {
//       header: i18n.t('material.materialTable.weight'),
//       cell: ({ getValue }) => {
//         return getValue();
//       },
//     }),
//     columnHelper.accessor('stock', {
//       header: i18n.t('material.materialTable.stock'),
//       cell: ({ getValue }) => {
//         return getValue();
//       },
//     }),
//     columnHelper.accessor('price', {
//       header: i18n.t('material.materialTable.price'),
//       cell: ({ getValue }) => {
//         return getValue();
//       },
//     }),
//   ];
// }

// constants.tsx

import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';

import i18n from 'i18n';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image/lazy-image';

import { type IProduct } from './types';

export const sortByOptions = [
  {
    title: 'Name',
    values: [
      { label: 'A - Z', accessor: 'name', direction: 'ASC' },
      { label: 'Z - A', accessor: 'name', direction: 'DESC' },
    ],
  },
  {
    title: 'Weight',
    values: [
      { label: 'Lowest first', accessor: 'weight', direction: 'ASC' },
      { label: 'Highest first', accessor: 'weight', direction: 'DESC' },
    ],
  },
  {
    title: 'Neto Price',
    values: [
      { label: 'Lowest first', accessor: 'netPrice', direction: 'ASC' },
      { label: 'Highest first', accessor: 'netPrice', direction: 'DESC' },
    ],
  },
  {
    title: 'Height',
    values: [
      { label: 'Lowest first', accessor: 'height', direction: 'ASC' },
      { label: 'Highest first', accessor: 'height', direction: 'DESC' },
    ],
  },
  {
    title: 'Material',
    values: [
      { label: 'A - Z', accessor: 'material', direction: 'ASC' },
      { label: 'Z - A', accessor: 'material', direction: 'DESC' },
    ],
  },
];

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
    columnHelper.accessor('netPrice', {
      header: i18n.t('material.materialTable.price'),
      cell: ({ getValue }) => {
        return getValue();
      },
    }),
  ];
}
