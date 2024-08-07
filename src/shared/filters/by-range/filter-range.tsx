import { useState } from 'react';

import { Box, Modal, Paper, Divider, Typography } from '@mui/material';

import { Button } from '../../button';
import { useStyles } from '../styles';

interface IFilterModalProps {
  open: boolean;
  onClose: () => void;
  setFilterHeight: (filterValue: object) => void;
  title: string;
  anchorEl: HTMLElement | null;
}

export function FilterRange({
  open,
  onClose,
  title,
  anchorEl,
}: IFilterModalProps) {
  const { classes } = useStyles();
  const [filterFrom, setFilterFrom] = useState('');
  const [filterTo, setFilterTo] = useState('');

  const { filterHeight, setFilterHeight } = useTableFilters();

  function handleFilterFrom(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterFrom(event.target.value);
  }
  function handleFilterTo(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterTo(event.target.value);
  }

  function handleApply() {
    const obj = {
      valueName: 'Height',
      valueFrom: filterFrom,
      valueTo: filterTo,
    };
    setFilterHeight(obj);
    onClose();
  }

  function handleClear() {
    setFilterFrom('');
    setFilterTo('');
    onClose();
  }
  const OFFSETTop = 90;
  const OFFSETLeft = 20;

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
          <input
            className={classes.inputWrapper}
            placeholder="From"
            value={filterFrom}
            onChange={handleFilterFrom}
          />
          <input
            className={classes.inputWrapper}
            placeholder="To"
            value={filterTo}
            onChange={handleFilterTo}
          />
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
