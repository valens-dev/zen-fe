import { forwardRef } from 'react';

import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  type TextFieldProps,
} from '@mui/material';

import { useStyles } from './styles';

interface IGenericInputProps extends Omit<TextFieldProps, 'variant'> {
  name: string;
  label?: string;
  type?: string;
  adornment?: string;
  variant?: 'outlined' | 'filled' | 'standard';
}

export const InputField = forwardRef<HTMLElement, IGenericInputProps>(
  function InputField(
    {
      label,
      name,
      type = 'text',
      adornment,
      variant = 'outlined',
      value,
      onChange,
      ...props
    },
    ref,
  ): React.ReactElement {
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
  },
);
