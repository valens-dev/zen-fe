import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { columns, customerData } from './constants';

import { useStyles } from './styles';

export function CustomerTable(): React.ReactNode {
  const navigate = useNavigate();

  const { classes } = useStyles();

  function handleOpenAddPage(): void {
    navigate('/customers/add-customer');
  }

  return (
    <Box className={classes.wrapper}>
      <SectionHeader
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            Add Customer
          </Button>
        }
      />
      <Table columns={columns} data={customerData} />
    </Box>
  );
}
