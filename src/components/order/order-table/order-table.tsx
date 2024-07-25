import { useNavigate } from 'react-router-dom';
import { type ColumnDef } from '@tanstack/react-table';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import { useTableFilters } from '@/hooks/use-table-filters';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IOrder } from './types';

import { useStyles } from './styles';

interface IOrderTableProps {
  title: string;
  buttonText: string;
  columns: ColumnDef<IOrder, string>[];
  data: IOrder[];
}

export function OrderTable({
  title,
  buttonText,
  data,
  columns,
}: IOrderTableProps): React.ReactNode {
  const navigate = useNavigate();

  const { classes } = useStyles();
  const { globalFilter, setGlobalFilter, pagination, setPagination } =
    useTableFilters();

  function handleOpenAddPage(): void {
    navigate('/order/add-order');
  }

  return (
    <Box className={classes.wrapper}>
      <SectionHeader
        title={title}
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      <Table
        columns={columns}
        data={data}
        totalCount={10}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Box>
  );
}
