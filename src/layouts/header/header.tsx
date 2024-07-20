import { Box, Typography } from '@mui/material';

import { LanguageSwitcher } from '@/components/language-switcher';

import { useStyles } from './styles';

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box>
      <Typography className={classes.title}>{title}</Typography>
      <LanguageSwitcher />
    </Box>
  );
}
