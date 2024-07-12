import { Box } from '@mui/material';

import { DynamicTable } from '@/components/dynamic-table';

import {
  purchasingRows,
  materialFieldMap,
  materialTableHeaders,
} from '../constants';

import { useStyles } from './styles';

export function PurchasingPart(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <DynamicTable
        rows={purchasingRows}
        headers={materialTableHeaders}
        fieldMap={materialFieldMap}
        imageField="name"
      />
    </Box>
  );
}
