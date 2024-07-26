import { createColumnHelper } from '@tanstack/react-table';

import { LazyImage } from '@/shared/lazy-image';

import { type IStation } from './types';

function createStationData(
  id: string,
  imageUrl: string,
  customerName: string,
  checkIn: string,
  cycleTime: string,
  workList: number,
  edited: number,
): IStation {
  return {
    id,
    imageUrl,
    customerName,
    checkIn,
    cycleTime,
    workList,
    edited,
  };
}
export const stationData: IStation[] = [
  createStationData(
    '1',
    'https://via.placeholder.com/30',
    'Jacob Jones',
    '05:09',
    '00:19',
    1.603,
    1.032,
  ),
  createStationData(
    '2',
    'https://via.placeholder.com/30',
    'Jacob Jones',
    '05:09',
    '00:19',
    1.603,
    1.032,
  ),
  createStationData(
    '3',
    'https://via.placeholder.com/30',
    'Jacob Jones',
    '05:09',
    '00:19',
    1.603,
    1.032,
  ),
  createStationData(
    '4',
    'https://via.placeholder.com/30',
    'Jacob Jones',
    '05:09',
    '00:19',
    1.603,
    1.032,
  ),
  createStationData(
    '5',
    'https://via.placeholder.com/30',
    'Jacob Jones',
    '05:09',
    '00:19',
    1.603,
    1.032,
  ),
];

const columnHelper = createColumnHelper<IStation>();

export const columns = [
  columnHelper.accessor('imageUrl', {
    cell: ({ row }) => {
      const { imageUrl } = row.original;

      return <LazyImage src={imageUrl} height={24} width={34} />;
    },
  }),
  columnHelper.accessor('customerName', {
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('checkIn', {
    header: 'Check-in',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('cycleTime', {
    header: 'Cycle-time',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('workList', {
    header: 'Worklist',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
  columnHelper.accessor('edited', {
    header: 'Edited',
    cell: ({ getValue }) => {
      return getValue();
    },
  }),
];
