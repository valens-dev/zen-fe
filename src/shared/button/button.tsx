import { type ButtonProps, Button as BaseButton } from '@mui/material';

import { useStyles } from './styles';

interface IButtonProps extends Omit<ButtonProps, 'variant'> {
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
