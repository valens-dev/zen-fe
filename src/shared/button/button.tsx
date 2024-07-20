import {
  Button as BaseButton,
  type ButtonProps as MUIButtonProps,
} from '@mui/material';

import { useStyles } from './styles';

interface IButtonProps extends Omit<MUIButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  children,
  ...props
}: IButtonProps): React.ReactNode {
  const { cx, classes } = useStyles();

  return (
    <BaseButton className={cx(classes.button, classes[variant])} {...props}>
      {children}
    </BaseButton>
  );
}
