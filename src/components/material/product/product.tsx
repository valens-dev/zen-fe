import { Box } from '@mui/material';

import { MaterialTable } from '@/components/material-table';

import { rows } from '../data';

import { useStyles } from './styles';

export function Product(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <MaterialTable rows={rows} />
    </Box>
  );
}
