import { Typography } from '@mui/material';

import { useStyles } from './styles';

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return <Typography className={classes.title}>{title}</Typography>;
}
