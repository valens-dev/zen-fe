import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import { useTableFilters } from '@/hooks/use-table-filters';

import AddIcon from '@/assets/icon/add.svg?react';

import { customerData, getCustomerColumns } from './constants';

import { useStyles } from './styles';

export function CustomerTable(): React.ReactNode {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { classes } = useStyles();
  const { globalFilter, setGlobalFilter, pagination, setPagination } =
    useTableFilters();

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
      <Table
        columns={getCustomerColumns()}
        data={customerData}
        totalCount={13}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Box>
  );
}
