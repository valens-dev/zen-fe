import { type ReactNode } from 'react';

import { type ButtonProps, Button as MuiButton } from '@mui/material';

import { useStyles } from './styles';

interface IPrimaryButtonProps extends ButtonProps {
  children: ReactNode;
}

export function PrimaryButton({
  children,
  ...props
}: IPrimaryButtonProps): React.ReactElement {
  const { classes } = useStyles();

  return (
    <MuiButton className={classes.button} {...props}>
      {children}
    </MuiButton>
  );
}
