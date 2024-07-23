import { useMemo, useState, useEffect, useCallback } from 'react';

import {
  Box,
  Select,
  MenuItem,
  IconButton,
  type SelectChangeEvent,
} from '@mui/material';

import { Input } from '@/shared/input';

import MenuIcon from '@/assets/icon/menu.svg?react';
import DeleteIcon from '@/assets/icon/delete.svg?react';

import { useStyles } from './styles';

interface IValueRowProps {
  value: {
    name: string;
    value: string;
    unit: string;
    toleranceMin: number;
    toleranceMax: number;
  };
  onDelete: () => void;
  onChange: (updatedValue: {
    name: string;
    value: string;
    unit: string;
    toleranceMin: number;
    toleranceMax: number;
  }) => void;
}

export function ValueRow({
  value,
  onDelete,
  onChange,
}: IValueRowProps): React.ReactNode {
  const { classes } = useStyles();
  const [localValue, setLocalValue] = useState(value);
  const unitOptions = useMemo(() => {
    return ['kg', 'g', 'm', 'cm'];
  }, []);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const updateValue = useCallback(
    (updatedValue: {
      name: string;
      value: string;
      unit: string;
      toleranceMin: number;
      toleranceMax: number;
    }) => {
      setLocalValue(updatedValue);
      onChange(updatedValue);
    },
    [onChange],
  );

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    updateValue({ ...localValue, name: e.target.value });
  }

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>): void {
    updateValue({ ...localValue, value: e.target.value });
  }

  function handleUnitChange(e: SelectChangeEvent<string>): void {
    updateValue({ ...localValue, unit: e.target.value });
  }

  function handleToleranceMinChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ): void {
    updateValue({
      ...localValue,
      toleranceMin: Number.parseFloat(e.target.value),
    });
  }

  function handleToleranceMaxChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ): void {
    updateValue({
      ...localValue,
      toleranceMax: Number.parseFloat(e.target.value),
    });
  }

  return (
    <Box className={classes.valueRow}>
      <Box className={classes.iconButton}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <Input
        placeholder="Name"
        name="name"
        value={localValue.name}
        onChange={handleNameChange}
      />
      <Input
        placeholder="Value"
        name="value"
        value={localValue.value}
        onChange={handleValueChange}
      />
      <Select
        value={localValue.unit}
        onChange={handleUnitChange}
        className={classes.select}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return 'Select';
          }
          return selected;
        }}
      >
        {unitOptions.map((unit) => {
          return (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          );
        })}
      </Select>
      <Input
        placeholder="Tolerance Min"
        name="toleranceMin"
        type="number"
        min={0}
        max={999_999}
        value={localValue.toleranceMin}
        onChange={handleToleranceMinChange}
      />
      <Input
        placeholder="Tolerance Max"
        name="toleranceMax"
        type="number"
        min={0}
        max={999_999}
        value={localValue.toleranceMax}
        onChange={handleToleranceMaxChange}
      />
      <Box className={classes.iconButton}>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
