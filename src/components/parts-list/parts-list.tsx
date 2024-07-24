import { FormTable } from '@/shared/form-table/form-table';

import { columns, type IComponent } from './constants';

interface IPartsListProps {
  data: IComponent[];
  onDeleteRow: (index: number) => void;
  onChangeRow: (index: number, updatedRow: IComponent) => void;
}

export function PartsList({
  data,
  onDeleteRow,
  onChangeRow,
}: IPartsListProps): React.ReactNode {
  return (
    <FormTable
      columns={columns}
      data={data}
      onDeleteRow={onDeleteRow}
      onChangeRow={onChangeRow}
    />
  );
}
