import { FormTable } from '@/shared/form-table/form-table';

import { type IPosition } from '../order-form/types';

import { columns } from './constants';

interface IPositionsListProps {
  data: IPosition[];
  onDeleteRow: (index: number) => void;
  onChangeRow: (index: number, updatedRow: IPosition) => void;
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
