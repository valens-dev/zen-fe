import { forwardRef, type ReactNode } from 'react';

import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  type TextFieldProps,
} from '@mui/material';

import { useStyles } from './styles';

interface IInputProps
  extends Omit<TextFieldProps, 'InputProps' | 'InputLabelProps'> {
  name: string;
  label?: string;
  adornment?: ReactNode;
  variant?: 'outlined' | 'filled' | 'standard';
  type?: 'text' | 'number' | 'password' | 'date';
  min?: number;
  max?: number;
}

export const Input = forwardRef<HTMLElement, IInputProps>(function Input(
  {
    label,
    name,
    type = 'text',
    adornment,
    variant = 'outlined',
    min,
    max,
    value,
    onChange,
    ...props
  }: IInputProps,
  ref: React.Ref<HTMLElement>,
): React.ReactNode {
  const { classes } = useStyles();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const inputValue = event.target.value;

    if (type === 'number') {
      const numericValue = Number(inputValue);

      if (
        !Number.isNaN(numericValue) &&
        ((min !== undefined && numericValue < min) ||
          (max !== undefined && numericValue > max))
      ) {
        return;
      }
    }

    onChange?.(event);
  }

  return (
    <Box className={classes.inputContainer}>
      {Boolean(label) && (
        <Typography className={classes.label}>{label}</Typography>
      )}
      <TextField
        placeholder={label}
        name={name}
        type={type}
        variant={variant}
        value={value}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: adornment ? (
            <InputAdornment position="end">{adornment}</InputAdornment>
          ) : undefined,
          className: classes.textField,
        }}
        InputLabelProps={{
          shrink: false,
        }}
        {...props}
        inputRef={ref}
        inputProps={type === 'number' ? { min, max } : {}}
      />
    </Box>
  );
});
