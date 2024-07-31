import { useState } from 'react';

import { useMaterial } from '@/services/material';
import { transformMaterialsToProducts } from '@/services/material/utils';

import { Box, Modal, Divider, Typography, IconButton } from '@mui/material';

import { type IProduct } from '@/components/material/material-table/types';

import { useTableFilters } from '@/hooks/use-table-filters';

import { MaterialType, type IComponent } from '@/types/material';

import CloseIcon from '@/assets/icon/close.svg?react';

import { Table } from '../table';
import { Button } from '../button';

import { getMaterialColumns } from './constants';

import { useStyles } from './styles';

interface IAddComponentModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (components: IComponent[]) => void;
}

export function AddComponentModal({
  open,
  onClose,
  onSave,
}: IAddComponentModalProps): React.ReactNode {
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
      };
    });
    onSave(parts);
    onClose();
  }

  const { data: materialData } = useMaterial({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    name: globalFilter,
    type: [MaterialType.ManufacturingPart, MaterialType.PurchasingPart],
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.wrapper}>
        <Box className={classes.header}>
          <Typography className={classes.headerText}>
            Stücklistenkomponente hinzufügen
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
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
        <Box className={classes.footer}>
          <Button onClick={onClose} sx={{ mr: 2 }} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave}>Hinzufügen</Button>
        </Box>
      </Box>
    </Modal>
  );
}
