import { Box } from '@mui/material';

import { MaterialTable } from '@/components/material-table';

import { rows } from '../data';

import { useStyles } from './styles';

export function PurchasingPart(): React.ReactNode {
  const { classes } = useStyles();
  const purchasingRows = rows.filter((row) => {
    return row.materialType === 'purchasing-part';
  });

  return (
    <Box className={classes.wrapper}>
      <MaterialTable rows={purchasingRows} />
    </Box>
  );
}
