import { Box, Typography } from '@mui/material';

import { LanguageSwitcher } from '@/components/language-switcher';

import { useStyles } from './styles';

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.header}>
      <Typography className={classes.title}>{title}</Typography>
      <LanguageSwitcher />
    </Box>
  );
}
