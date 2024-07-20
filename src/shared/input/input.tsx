import { forwardRef } from 'react';

import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  type TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

import { useStyles } from './styles';

export type IInputProps = MuiTextFieldProps & {
  name: string;
  label?: string;
  type?: string;
  adornment?: string;
  variant?: 'outlined' | 'filled' | 'standard';
};

export const Input = forwardRef<HTMLElement, IInputProps>(function Input(
  {
    label,
    name,
    type = 'text',
    adornment,
    variant = 'outlined',
    value,
    onChange,
    ...props
  }: IInputProps,
  ref: React.Ref<HTMLElement>,
): React.ReactNode {
  const { classes } = useStyles();

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
        onChange={onChange}
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
      />
    </Box>
  );
});
