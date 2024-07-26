import { useState } from 'react';

import { useMaterial } from '@/services/material';

import { Box, Modal, Divider, Typography, IconButton } from '@mui/material';

import { type IComponent } from '@/components/parts-list/constants';
import { type IProduct } from '@/components/material/material-table/types';

import { useTableFilters } from '@/hooks/use-table-filters';

import { MaterialType } from '@/types/material';

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
        units: 1,
        unitType: 'unit',
        name: component.name,
        imageUrl: component.imageUrl,
        duration: 1,
      };
    });
    onSave(parts);
    onClose();
  }

  const { data: materialData } = useMaterial({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    name: globalFilter,
    type: MaterialType.Product,
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.wrapper}>
        <Box className={classes.header}>
          <Typography variant="h6">Stücklistenkomponente hinzufügen</Typography>
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
            data={materialData?.data}
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
