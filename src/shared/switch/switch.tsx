import { forwardRef } from 'react';

import { FormControlLabel, Switch as BaseSwitch } from '@mui/material';

import { useStyles } from './styles';

interface ISwitchProps {
  label: string;
  name: string;
}

export const Switch = forwardRef<HTMLElement, ISwitchProps>(function Switch(
  { label, name, ...props },
  ref,
): React.ReactNode {
  const { classes } = useStyles();

  return (
    <FormControlLabel
      className={classes.formControlLabel}
      control={<BaseSwitch {...props} name={name} inputRef={ref} />}
      label={label}
    />
  );
});
