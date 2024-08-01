import { useState } from 'react';

import { Box, Divider, Checkbox, FormControlLabel } from '@mui/material';

import { ReusableModal } from '@/shared/modal/modal';

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
    <ReusableModal
      open={open}
      onClose={onClose}
      title="Add Station"
      primaryActionLabel="Add"
      onPrimaryAction={handleSave}
      primaryActionClass={classes.addButton}
    >
      <Divider />
      <Box className={classes.box}>
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
      <Divider />
    </ReusableModal>
  );
}
