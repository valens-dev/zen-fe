import { useState } from 'react';

import {
  Box,
  Modal,
  Checkbox,
  Typography,
  IconButton,
  FormControlLabel,
} from '@mui/material';

import { Button } from '@/shared/button';

import CloseIcon from '@/assets/icon/close.svg?react';

import { getStationOptions } from './constants';

import { useStyles } from './styles';

interface IAddStationModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (stations: string[]) => void;
}

export function AddStationModal({
  open,
  onClose,
  onSave,
}: IAddStationModalProps): React.ReactNode {
  const { classes } = useStyles();
  const [selectedStations, setSelectedStations] = useState<string[]>([]);

  function handleSave(): void {
    onSave(selectedStations);
    onClose();
  }

  function handleCheckboxChange(station: string): void {
    setSelectedStations((prev) => {
      return prev.includes(station)
        ? prev.filter((s) => {
            return s !== station;
          })
        : [...prev, station];
    });
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.wrapper}>
        <Box className={classes.header}>
          <Typography className={classes.title}>Add Station</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className={classes.container}>
          {getStationOptions().map((station) => {
            return (
              <FormControlLabel
                className={classes.checkRow}
                key={station.value}
                control={
                  <Checkbox
                    checked={selectedStations.includes(station.value)}
                    onChange={() => {
                      return handleCheckboxChange(station.value);
                    }}
                  />
                }
                label={station.label}
              />
            );
          })}
        </Box>
        <Box className={classes.footer}>
          <Button onClick={onClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleSave} className={classes.addButton}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
