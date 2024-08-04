import { useState } from 'react';

import { useMaterial } from '@/services/material';
import { transformMaterialsToProducts } from '@/services/material/utils';

import { Box } from '@mui/material';

import { type IProduct } from '@/components/material/material-table/types';

import { useTableFilters } from '@/hooks/use-table-filters';

import { type MaterialType } from '@/types/material';

import { Table } from '../table';
import { Modal } from '../modal/modal';

import { getMaterialColumns } from './constants';

import { useStyles } from './styles';

interface IAddMaterialModalProps<T> {
  materialTypes: MaterialType[];
  open: boolean;
  onClose: () => void;
  onSave: (components: T[]) => void;
  title: string;
  primaryActionLabel: string;
}

export function AddMaterialModal<T>({
  materialTypes,
  open,
  onClose,
  onSave,
  title,
  primaryActionLabel,
}: IAddMaterialModalProps<T>): React.ReactNode {
  const { classes } = useStyles();

  const { globalFilter, setGlobalFilter, pagination, setPagination } =
    useTableFilters();
  const [selectedComponents, setSelectedComponents] = useState<IProduct[]>([]);

  function handleSave(): void {
    const parts = selectedComponents.map((component) => {
      return {
        id: component.id,
        quantity: 1,
        unitType: 'unit',
        name: component.name,
        imageUrl: [],
        duration: 1,
        type: component.type,
        manufacturingParts: component?.manufacturingPart,
        purchasingParts: component?.purchasingPart,
        netPrice: component?.price,
      } as T;
    });
    onSave(parts);
    onClose();
  }
  const { data: materialData } = useMaterial({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    name: globalFilter,
    type: materialTypes,
  });

  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      primaryActionLabel={primaryActionLabel}
      onPrimaryAction={handleSave}
      primaryActionClass={classes.addButton}
      footerStyle="secondary"
    >
      <Box className={classes.tableContainer}>
        <Table
          columns={getMaterialColumns(
            selectedComponents,
            setSelectedComponents,
          )}
          data={transformMaterialsToProducts(materialData?.data)}
          totalCount={materialData?.totalCount ?? 0}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          pagination={pagination}
          setPagination={setPagination}
        />
      </Box>
    </Modal>
  );
}
