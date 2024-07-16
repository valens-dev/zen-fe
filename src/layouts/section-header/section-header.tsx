import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

interface ISectionHeaderProps {
  title: string;
  actions: React.ReactNode;
}

export function SctionHeader({
  title,
  actions,
}: ISectionHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
      <Box>{actions}</Box>
    </Box>
  );
}
