import { Box } from '@mui/material';

import { DynamicTable } from '@/components/dynamic-table';

import {
  productRows,
  materialFieldMap,
  materialTableHeaders,
} from '../constants';

import { useStyles } from './styles';

export function Product(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <DynamicTable
        rows={productRows}
        headers={materialTableHeaders}
        fieldMap={materialFieldMap}
        imageField="name"
      />
    </Box>
  );
}
