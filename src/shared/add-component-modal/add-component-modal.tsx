import { useState } from 'react';

import { Box, Modal, Divider, Typography, IconButton } from '@mui/material';

import { type IComponent } from '@/components/parts-list/constants';
import { data } from '@/components/material/material-table/constants';
import { type IProduct } from '@/components/material/material-table/types';

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

  const [selectedComponents, setSelectedComponents] = useState<IProduct[]>([]);
  function handleSave(): void {
    const parts = selectedComponents.map((component) => {
      return {
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
            data={data}
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
