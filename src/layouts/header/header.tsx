import { Box, Typography } from '@mui/material';

import { LanguageButtons } from '@/components/language-buttons';

import { useStyles } from './styles';

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.header}>
      <Typography className={classes.title}>{title}</Typography>
      <LanguageButtons />
    </Box>
  );
}
