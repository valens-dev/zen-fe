import { useCallback } from 'react';

import {
  Box,
  Select,
  MenuItem,
  IconButton,
  type SelectChangeEvent,
} from '@mui/material';

import { Input } from '@/shared/input';

import { type IValue } from '@/types/material';

import MenuIcon from '@/assets/icon/menu.svg?react';
import DeleteIcon from '@/assets/icon/delete.svg?react';

import { useStyles } from './styles';

interface IValueRowProps {
  value: IValue;
  onDelete: () => void;
  onChange: (updatedValue: IValue) => void;
  errors?: {
    [key in keyof IValue]?: string;
  };
}

export function ValueRow({
  value: valueProp,
  onDelete,
  onChange,
  errors = {},
}: IValueRowProps): React.ReactNode {
  const { classes } = useStyles();
  const unitOptions = ['kg', 'g', 'm', 'cm'];

  const handleChange = useCallback(
    (field: keyof IValue, newValue: string | number) => {
      onChange({ ...valueProp, [field]: newValue });
    },
    [onChange, valueProp],
  );

  function handleInputChange(
    field: keyof IValue,
  ): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === 'value' ||
        field === 'toleranceMin' ||
        field === 'toleranceMax'
          ? Number(e.target.value)
          : e.target.value;

      handleChange(field, Number.isNaN(value) ? e.target.value : value);
    };
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
        value={valueProp.name}
        onChange={handleInputChange('name')}
        error={Boolean(errors.name)}
      />
      <Input
        placeholder="Value"
        name="value"
        type="number"
        min={0}
        max={999_999}
        value={valueProp.value}
        onChange={handleInputChange('value')}
        error={Boolean(errors.value)}
      />
      <Select
        value={valueProp.unit}
        onChange={(e: SelectChangeEvent<string>) => {
          handleChange('unit', e.target.value);
        }}
        className={classes.select}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return 'Unit';
          }
          return selected;
        }}
        error={Boolean(errors.unit)}
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
        value={valueProp.toleranceMin}
        onChange={handleInputChange('toleranceMin')}
        error={Boolean(errors.toleranceMin)}
      />
      <Input
        placeholder="Tolerance Max"
        name="toleranceMax"
        type="number"
        min={0}
        max={999_999}
        value={valueProp.toleranceMax}
        onChange={handleInputChange('toleranceMax')}
        error={Boolean(errors.toleranceMax)}
      />
      <Box className={classes.iconButton}>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
