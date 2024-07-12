import { Box } from '@mui/material';

import { DynamicTable } from '@/components/dynamic-table';

import {
  materialFieldMap,
  manufactorintRows,
  materialTableHeaders,
} from '../constants';

import { useStyles } from './styles';

export function ManufacturingPart(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <DynamicTable
        rows={manufactorintRows}
        headers={materialTableHeaders}
        fieldMap={materialFieldMap}
        imageField="name"
      />
    </Box>
  );
}
