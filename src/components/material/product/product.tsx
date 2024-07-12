import { Box } from '@mui/material';

import { MaterialTable } from '@/components/material-table';

import { rows } from '../data';

import { useStyles } from './styles';

export function Product(): JSX.Element {
  const { classes } = useStyles();
  const productRows = rows.filter((row) => {
    return row.materialType === 'product';
  });

  return (
    <Box className={classes.wrapper}>
      <MaterialTable rows={productRows} />
    </Box>
  );
}
