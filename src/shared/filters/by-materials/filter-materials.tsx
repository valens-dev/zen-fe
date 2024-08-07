import { useState } from 'react';

import {
  Box,
  Modal,
  Paper,
  Divider,
  Checkbox,
  Typography,
} from '@mui/material';

import { Button } from '../../button';
import { useStyles } from '../styles';

interface IFilterModalProps {
  open: boolean;
  onClose: () => void;
  onApply: (filterValue: string) => void;
  onClear: () => void;
  title: string;
  anchorEl: HTMLElement | null;
}

export function FilterMaterial({
  open,
  onClose,
  // onApply,
  onClear,
  title,
  anchorEl,
}: IFilterModalProps) {
  const { classes } = useStyles();
  const [filterMaterialArr, setFilterMaterialArr] = useState('');

  function handleFilterFrom(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterMaterialArr(event.target.value);
  }
  function handleFilterTo(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterTo(event.target.value);
  }

  function handleApply() {
    // onApply(filterValue);
    onClose();
  }

  function handleClear() {
    setFilterFrom('');
    setFilterTo('');
    onClear();
    onClose();
  }
  const OFFSETTop = 90;
  const OFFSETLeft = 10;
  function getDropdownPosition() {
    if (!anchorEl) {
      return { top: 0, left: 0 };
    }
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.bottom + OFFSETTop, left: rect.left + OFFSETLeft };
  }
  const { top, left } = getDropdownPosition();

  return (
    <Modal open={open} onClose={onClose} className={classes.backGroundModal}>
      <Paper
        className={classes.modalContainer}
        style={{
          position: 'relative',
          top: `${top}px`,
          left: `${left}px`,
        }}
      >
        <Typography variant="h6" padding="8px 12px" fontSize="16px">
          {title}
        </Typography>
        <Divider />
        <Box className={classes.inputContainer}>
          <Checkbox />
        </Box>
        <Divider />

        <Box display="flex" justifyContent="center" gap={1} pt={1}>
          <Button
            onClick={handleClear}
            style={{
              width: 120,
              height: 32,
              backgroundColor: '#ffffff',
              border: '1px solid rgb(226, 232, 240)',
              color: 'black',
            }}
          >
            Clear Filter
          </Button>
          <Button onClick={handleApply} style={{ width: 120, height: 32 }}>
            Apply
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
