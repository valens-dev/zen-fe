import { forwardRef } from 'react';

import { Switch, type SwitchProps, FormControlLabel } from '@mui/material';

import { useStyles } from './styles';

interface ISwitchInputProps extends Omit<SwitchProps, 'name'> {
  label: string;
  name: string;
}

export const SwitchInput = forwardRef<HTMLElement, ISwitchInputProps>(
  function SwitchInput({ label, name, ...props }, ref): React.ReactElement {
    const { classes } = useStyles();

    return (
      <FormControlLabel
        className={classes.formControlLabel}
        control={<Switch {...props} name={name} inputRef={ref} />}
        label={label}
      />
    );
  },
);
