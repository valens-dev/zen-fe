import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

interface ISectionHeaderProps {
  title?: string;
  actions: React.ReactNode;
}

export function SectionHeader({
  title,
  actions,
}: ISectionHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      {title ? (
        <Box>
          <Typography className={classes.title}>{title}</Typography>
        </Box>
      ) : undefined}
      <Box className={classes.actions}>{actions}</Box>
    </Box>
  );
}
