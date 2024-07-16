import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { columns, purchasingData } from '../constants';

import { useStyles } from './styles';

export function PurchasingPart(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title="Purchasing part"
        actions={<Button startIcon={<AddIcon />}>Add Purchased Parts</Button>}
      />
      <Table columns={columns} data={purchasingData} />
    </Box>
  );
}
