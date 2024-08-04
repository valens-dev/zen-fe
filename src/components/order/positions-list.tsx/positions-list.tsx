import { FormTable } from '@/shared/form-table/form-table';

import { type IMaterialOrder } from '@/types/material';

import { columns } from './constants';

interface IPositionsListProps {
  data: IMaterialOrder[];
  onDeleteRow: (index: number) => void;
  onChangeRow: (index: number, updatedRow: IMaterialOrder) => void;
}

export function PositionsList({
  data,
  onDeleteRow,
  onChangeRow,
}: IPositionsListProps): React.ReactNode {
  return (
    <FormTable
      columns={columns}
      data={data}
      onDeleteRow={onDeleteRow}
      onChangeRow={onChangeRow}
    />
  );
}
