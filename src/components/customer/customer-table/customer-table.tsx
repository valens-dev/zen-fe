import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { customerData, getCustomerColumns } from './constants';

import { useStyles } from './styles';

export function CustomerTable(): React.ReactNode {
  const { t } = useTranslation();
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
            {t('customer.addCustomer')}
          </Button>
        }
      />
      <Table columns={getCustomerColumns(t)} data={customerData} />
    </Box>
  );
}
