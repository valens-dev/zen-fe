import { forwardRef, type ReactNode } from 'react';

import {
  Box,
  MenuItem,
  Typography,
  type SelectProps,
  Select as BaseSelect,
} from '@mui/material';

import { useStyles } from './styles';

interface ISelectProps extends Omit<SelectProps, 'inputProps'> {
  name: string;
  label?: string;
  adornment?: ReactNode;
  options?: { id: number; name: string }[];
  variant?: 'outlined' | 'filled' | 'standard';
}

export const Select = forwardRef<HTMLElement, ISelectProps>(function Select(
  {
    label,
    name,
    variant = 'outlined',
    value,
    onChange,
    options,
    ...props
  }: ISelectProps,
  ref: React.Ref<HTMLElement>,
): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.inputContainer}>
      {Boolean(label) && (
        <Typography className={classes.label}>{label}</Typography>
      )}
      <BaseSelect
        name={name}
        variant={variant}
        value={value}
        onChange={onChange}
        fullWidth
        {...props}
        inputRef={ref}
      >
        {options?.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      </BaseSelect>
    </Box>
  );
});
