import { Box } from '@mui/material';

import { MaterialTable } from '@/components/material-table';

import { rows } from '../data';

import { useStyles } from './styles';

export function ManufacturingPart(): React.ReactNode {
  const { classes } = useStyles();
  const manufacturingRows = rows.filter((row) => {
    return row.materialType === 'manufactoring-part';
  });

  return (
    <Box className={classes.wrapper}>
      <MaterialTable rows={manufacturingRows} />
    </Box>
  );
}
