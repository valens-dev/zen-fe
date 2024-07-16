import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { columns, productData } from '../constants';

import { useStyles } from './styles';

export function Product(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title="Product"
        actions={<Button startIcon={<AddIcon />}>Add Product</Button>}
      />
      <Table columns={columns} data={productData} />
    </Box>
  );
}
